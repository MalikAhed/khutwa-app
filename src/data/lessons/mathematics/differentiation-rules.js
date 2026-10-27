import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `:::exam-question
id: math-book-p009-discussion1
title: الكتاب، ص ٧ · فكّر وناقش
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ٩، فكّر وناقش
answer-label: الإجابة والشرح من المجموعة المصححة
body:
فكّر وناقش: مجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` محتوى في مجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`. لماذا؟
solution:
تعريف المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` يحتوي قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` نفسها، فلا يمكن وجود المشتقة إذا كانت هذه القيمة غير معرّفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mtext dir="rtl">ع</mtext><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo></mrow><mtext dir="rtl">ع</mtext></mfrac></mrow></math>
\`\`\`



لكن تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` وحده لا يكفي لوجود هذا الحد. مثلًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\` معرف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

فرق القيم مقسومًا على فرق المدخلين يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` من اليمين و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` من اليسار، لذلك لا تتفق نهايتاه ولا توجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

إذن مجال المشتقة محتوى في مجال الاقتران، وقد يكون أصغر منه.
:::


:::exam-question
id: math-book-p009-ex1-a
title: الكتاب، ص ٧ · مثال ١، الفرع ١ · سهل
question: قواعد الاشتقاق
reference: [السؤال، النسخة المصورة، ص ٩](assets/lessons/mathematics/source-crops/math-book-p009-ex1-a-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p009-ex1-a-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.
solution:
العدد المعطى ثابت لا يعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ تغيره يساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`

مشتقة أي ثابت تساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
:::


:::exam-question
id: math-book-p009-ex1-b
title: الكتاب، ص ٧ · مثال ١، الفرع ٢ · سهل
question: قواعد الاشتقاق
reference: [السؤال، النسخة المصورة، ص ٩](assets/lessons/mathematics/source-crops/math-book-p009-ex1-b-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p009-ex1-b-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi>π</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.
solution:
العدد المعطى ثابت لا يعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ تغيره يساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mtext dir="rtl">جتا</mtext><mo>(</mo><mi mathvariant="normal">π</mi><mo>)</mo></mrow></math>
\`\`\`

مشتقة أي ثابت تساوي صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
:::


:::exam-question
id: math-book-p009-ex2
title: الكتاب، ص ٧ · مثال ٢ · سهل
question: قواعد الاشتقاق
reference: [السؤال، النسخة المصورة، ص ٩](assets/lessons/mathematics/source-crops/math-book-p009-ex2-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p009-ex2-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ويبقى المعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` كما هو.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
:::


:::exam-question
id: math-book-p010-ex3
title: الكتاب، ص ٨ · مثال ٣ · متوسط
question: قواعد الاشتقاق
reference: [السؤال، النسخة المصورة، ص ١٠](assets/lessons/mathematics/source-crops/math-book-p010-ex3-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p010-ex3-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
قاعدة مشتقة المجموع تجيز اشتقاق الحدود منفردة، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ك</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p010-ex4
title: الكتاب، ص ٨ · مثال ٤
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٠، مثال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.

![الرسم الأصلي للاقتران متعدد القاعدة](assets/lessons/mathematics/source-crops/math-book-p010-ex4-figure.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/math-book-p010-ex4-figure.webp)

المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.

عند نقطة فصل فرعين، وجود المشتقة يتطلب أولًا تساوي قيمة الاقتران ونهايته من الجهتين، ثم تساوي المشتقتين من اليمين واليسار.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يعطي الفرع الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، ويعطي حد الفرع الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`؛ فتتساوى القيمة والنهايتان ويتحقق الاتصال.

الفرع الأيمن خطي ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، والفرع الأيسر ثابت ميله صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>+</mo><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>−</mo><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

حتى توجد المشتقة يجب أن تتساوى مشتقتا الجهتين؛ وهنا تختلفان.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>+</mo><mo>)</mo><mo>≠</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>−</mo><mo>)</mo></mrow></math>
\`\`\`

النتيجة: غير موجودة.
:::


:::exam-question
id: math-book-p010-ex5-a
title: الكتاب، ص ٨ · مثال ٥، الفرع ١
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٠، مثال ٥، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.

![الرسم الأصلي لاقتران أكبر عدد صحيح](assets/lessons/mathematics/source-crops/math-book-p010-ex5-figure.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/math-book-p010-ex5-figure.webp)

المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

أكبر عدد صحيح ثابت بين كل عددين صحيحين متتاليين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

مشتقة الثابت صفر؛ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` توجد قفزة، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` طرفا المجال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: صفر على ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`[ و]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`[؛ غير موجودة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
:::


:::exam-question
id: math-book-p010-ex5-b
title: الكتاب، ص ٨ · مثال ٥، الفرع ٢
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٠، مثال ٥، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، لماذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` و\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` غير موجودتين؟

![الرسم الأصلي لاقتران أكبر عدد صحيح](assets/lessons/mathematics/source-crops/math-book-p010-ex5-figure.webp)
solution:
![الرسم الأصلي](assets/lessons/mathematics/source-crops/math-book-p010-ex5-figure.webp)

الاقتران معرّف فقط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. المشتقة في الكتاب مشتقة ثنائية الجانب: تحتاج قيم الاقتران عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` لقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` موجبة وسالبة قريبة من الصفر.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` لا توجد قيم في المجال إلى يسار الصفر.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` لا توجد قيم في المجال إلى يمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

لذلك لا توجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` ولا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` وفق هذا التعريف؛ فحساب مشتقة من جهة واحدة لا يحقق شرط المشتقة الثنائية.
:::


:::exam-question
id: math-book-p010-ex5-c
title: الكتاب، ص ٨ · مثال ٥، الفرع ٣
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٠، مثال ٥، الفرع ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، هل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة؟ ولماذا؟

![الرسم الأصلي لاقتران أكبر عدد صحيح](assets/lessons/mathematics/source-crops/math-book-p010-ex5-figure.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/math-book-p010-ex5-figure.webp)

المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

أكبر عدد صحيح يقفز عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ حد اليسار صفر وقيمة الاقتران واحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١</mn><mo>−</mo></mrow></mrow></munder><mrow><mo>[</mo><mi mathvariant="normal">س</mi><mo>]</mo></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>≠</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

قابلية الاشتقاق تستلزم الاتصال؛ القفزة تمنعها.

لا توجد المشتقة الثنائية عند النقطة المذكورة وفق تعريف المنهج.

النتيجة: غير موجودة.
:::


:::exam-question
id: math-book-p011-ex6-a
title: الكتاب، ص ٩ · مثال ٦، الفرع ١
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١١، مثال ٦، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
مشتقة حاصل الضرب تساوي مشتقة العامل الأول في الثاني، مضافًا إليها الأول في مشتقة الثاني.

 مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؛ نستخدمهما في قاعدة الضرب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١١</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p011-ex6-b
title: الكتاب، ص ٩ · مثال ٦، الفرع ٢
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١١، مثال ٦، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
مشتقة حاصل الضرب تساوي مشتقة العامل الأول في الثاني، مضافًا إليها الأول في مشتقة الثاني.

 نوزع الضرب مع الانتباه إلى السالب قبل القوس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١١</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١١</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١١</mn><mo>+</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٢١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p011-ex7
title: الكتاب، ص ٩ · مثال ٧
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١١، مثال ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\` لاستعادة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؛ القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` هنا جائزة لأنها غير صفرية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



المشتقة لحاصل ضرب تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\`، زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الأول</mtext><mo>×</mo><mtext dir="rtl">مشتقة الثاني</mtext></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">س</mtext><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p011-ex8-a
title: الكتاب، ص ٩ · مثال ٨، الفرع ١
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١١، مثال ٨، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ ومشتقة الثابت صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mi mathvariant="normal">ن</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نشتق كل حد مع الحفاظ على إشارته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p011-ex8-b
title: الكتاب، ص ٩ · مثال ٨، الفرع ٢
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١١، مثال ٨، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ ومشتقة الثابت صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mi mathvariant="normal">ن</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نشتق كل حد مع الحفاظ على إشارته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`.
:::


:::exam-question
id: math-book-p012-ex9
title: الكتاب، ص ١٠ · مثال ٩
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٢، مثال ٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، أوجد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابل للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.
solution:
وجود المشتقة عند نقطة الفصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يتطلب اتصال الفرعين وتساوي مشتقتيهما من الجهتين.

الاتصال يعني أن القيمة من الفرع الأيسر تساوي نهاية الفرع الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`. نساويهما عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في شرط الاتصال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



بقية نقاط كل فرع تحقق الاشتقاق لأنها كثيرات حدود؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p013-ex10
title: الكتاب، ص ١١ · مثال ١٠
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٣، مثال ١٠
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">١</mn></mrow></math>\`.

قاعدة القسمة تعطي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نستخدمها هنا لأن البسط أو المقام يعتمد على المتغير، ونحافظ على شرط المقام غير الصفري.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`. قاعدة القوة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ لذلك مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></mfrac></mrow></math>\`. ثم نشتق الكسر الآخر بقاعدة القسمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض بسالب واحد؛ كلا المقامين غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.
:::


:::exam-question
id: math-book-p013-higher-intro-a
title: الكتاب، ص ١١ · المشتقات العليا، السؤال الأول
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٣، المشتقات العليا، السؤال الأول
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.

المشتقة الثانية تعني اشتقاق المشتقة الأولى مرة أخرى. نستخدم قاعدة القوة: نضرب معامل الحد في أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، ثم ننقص الأس واحدًا؛ ومشتقة الثابت صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`

نشتق القوة والحد الخطي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p013-higher-intro-b
title: الكتاب، ص ١١ · المشتقات العليا، السؤال الثاني
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٣، المشتقات العليا، السؤال الثاني
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، هل يمكنك تكرار عملية الاشتقاق بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؟ ولماذا؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.

 كل مشتقة تبقى كثيرة حدود، وكثيرات الحدود قابلة للاشتقاق لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. نستخدم قاعدة القوة: نضرب المعامل في الأس ثم ننقص الأس واحدًا؛ ومشتقة الثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



ثم نتابع اشتقاق النتيجة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

بعد اشتقاق الحد الخطي نحصل على ثابت، ثم صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: نعم؛ المشتقة الخامسة وما بعدها صفر.
:::


:::exam-question
id: math-book-p013-ex11-a
title: الكتاب، ص ١١ · مثال ١١، الفرع ١
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٣، مثال ١١، الفرع ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، جد المشتقة الخامسة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَََََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

نشتق حدود كثير الحدود تباعًا بقاعدة القوة: نضرب معامل كل حد في أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ثم ننقص الأس واحدًا، ومشتقة الثابت صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup><mo>+</mo><mn dir="ltr">١٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mn dir="ltr">٢٠</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نكمل الاشتقاق حتى الرتبة الرابعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٦٠</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow></msup><mo>=</mo><mn dir="ltr">١٢٠</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

مشتقة الحد الخطي هي معامله.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow></msup><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢٠</mn></math>\`.
:::


:::exam-question
id: math-book-p013-ex11-b
title: الكتاب، ص ١١ · مثال ١١، الفرع ٢
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٣، مثال ١١، الفرع ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قََََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

نشتق حدود كثير الحدود تباعًا بقاعدة القوة: نضرب معامل كل حد في أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ثم ننقص الأس واحدًا، ومشتقة الثابت صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup><mo>+</mo><mn dir="ltr">١٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mn dir="ltr">٢٠</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نكمل الاشتقاق حتى الرتبة الرابعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٦٠</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow></msup><mo>=</mo><mn dir="ltr">١٢٠</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` في المشتقة الرابعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow></msup><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١٢٠</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٢٤٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤٠</mn></math>\`.
:::


:::exam-question
id: math-book-p014-exercise1-a
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ١ أ
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ١ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` ثابت، عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` ثابت. المطلوب المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

 نستخدم قاعدة القوة لأن الحدود قوى للمتغير: نضرب في الأس ثم ننقصه واحدًا. مشتقة الثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>+</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نعوّض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` بين قوسين كي تشمل القوة الإشارة السالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



القوة الزوجية تعطي موجبًا، وطرح حاصل ضرب سالب يعطي جمعًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p014-exercise1-b
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ١ ب
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ١ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١٢</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.
solution:
لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

نستخدم قاعدة الضرب بين كثيري الحدود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>(</mo><mn dir="ltr">١٢</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>+</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض بسالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` بعد الاشتقاق.

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤٣</mn><mo>−</mo><mn dir="ltr">٢٨</mn><mo>=</mo><mn dir="ltr">٢١٥</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢١٥</mn></math>\`.
:::


:::exam-question
id: math-book-p014-exercise1-c
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ١ ج
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ١ ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mn dir="ltr">٥</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mo>±</mo><msqrt><mn dir="ltr">٥</mn></msqrt></mrow></math>\`، عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
solution:
قاعدة القسمة تعطي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نستخدمها هنا لأن البسط أو المقام يعتمد على المتغير، ونحافظ على شرط المقام غير الصفري.

نستخدم قاعدة القسمة؛ مشتقة المقام هي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٥</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٥</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض بسالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ المقام يساوي واحدًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p014-exercise2-a
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ٢ أ
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ٢ أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بالاعتماد على المعطيات في الجدول، جد مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><msup><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

| \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` |
| --- | --- | --- | --- |
| \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` |
solution:
من الجدول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`. المطلوب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>+</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.

مشتقة المجموع هي مجموع المشتقتين. ومشتقة مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></mrow></math>\`؛ لأننا نشتق كل عامل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>×</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` مرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ق</mtext><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p014-exercise2-b
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ٢ ب
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ٢ ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بالاعتماد على المعطيات في الجدول، جد مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

| \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` |
| --- | --- | --- | --- |
| \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` |
solution:
المعطى من الجدول عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.

الحد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` حاصل ضرب، فنستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الأول</mtext><mo>×</mo><mtext dir="rtl">مشتقة الثاني</mtext></mrow></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi></mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">سق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">هـ</mi></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`؛ لذلك مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mi mathvariant="normal">هـ</mi></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></mrow></mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></mrow></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></mrow><mrow><mtext dir="rtl">هـ</mtext><msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نعوض في مجموع المشتقتين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p014-exercise3
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ٣
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mi mathvariant="normal">س</mi><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\` وكان الشكل المجاور يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فجد مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

![منحنى هـ(س) والمماس عند النقطة (١،١) وزاوية ميله](assets/lessons/mathematics/source-crops/u1-book-p014-exercise3-figure.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/u1-book-p014-exercise3-figure.webp)

المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mi mathvariant="normal">س</mi><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\` وكان الشكل المجاور يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

من الرسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وميل المماس سالب ظل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mn dir="ltr">٣٠</mn><mo>°</mo></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٣٠</mn><mo>°</mo><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ومشتقتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` بقاعدة القسمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mrow><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نعوّض في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` مقسومًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msqrt><mn dir="ltr">٣</mn></msqrt><mn dir="ltr">٦</mn></mfrac></math>\`.
:::


:::exam-question
id: math-book-p014-exercise5
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ٥
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٨</mn></msup></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٨</mn></msup></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.

نستخدم فرق المربعين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`. يفيد هذا لأن كل نتيجة تصبح عاملًا يقترن بالعامل التالي؛ فلا نحتاج اشتقاق خمسة عوامل منفردة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٨</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٨</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٨</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">١٦</mn></msup></mrow></math>
\`\`\`



نشتق القوة ثم نعوّض بالواحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">١٥</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p014-exercise6
title: الكتاب، ص ١٢ · تمارين ١-٢، السؤال ٦
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ١٤، تمارين ١-٢، السؤال ٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`.
solution:
المطلوب المشتقة الثالثة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ لذلك نشتق كثير الحدود ثلاث مرات. قاعدة القوة تضرب في الأس ثم تنقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومشتقة الثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أس</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` ونساوي بالمعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٨</mn><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٨</mn><mo>−</mo><mn dir="ltr">٤٨</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣٠</mn></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p021-worksheet1-q2
title: الكتاب، ص ١٩ · ورقة عمل ١، السؤال ٢
question: قواعد الاشتقاق
reference: الكتاب، النسخة المصورة، ص ٢١، ورقة عمل ١، السؤال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` عدد صحيح موجب، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.
solution:
المطلوب قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` حين تكون المشتقة الثالثة ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` عدد صحيح موجب.

 قاعدة القوة تضرب في الأس ثم تنقصه واحدًا. بعد ثلاثة اشتقاقات، عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>≥</mo><mn dir="ltr">٣</mn></mrow></math>\`، نحصل على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow></math>
\`\`\`



إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` غير صفرية، يجب أن يساوي أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` كي تتطابق القاعدتان لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn><mspace width="1em"/><mo>⟹</mo><mspace width="1em"/><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`



لكن السؤال لا يستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نتحقق من الأسس الموجبة الأصغر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`:

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تُشتق إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` تُشتق إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.

إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` ممكنة أيضًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. أما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` فتجعل المشتقة الثالثة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، ولا يمكن أن تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>\` لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

الجواب الكامل: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>\` إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`؛ أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
:::


:::mcq
id: math-book-p034-test1-5
title: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٥
kicker: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٥
reference: الكتاب، النسخة المصورة، ص ٣٤ · اختبار الوحدة، السؤال ١-٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [x] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.

عند نقطة فصل فرعين، وجود المشتقة يتطلب أولًا تساوي قيمة الاقتران ونهايته من الجهتين، ثم تساوي المشتقتين من اليمين واليسار.

نحسب النهاية من القاعدة المحيطة ثم نقارن بقيمة النقطة المنفردة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٥</mn></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

القيمتان مختلفتان؛ عدم الاتصال يمنع الاشتقاق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٧</mn><mo>≠</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

لا توجد المشتقة الثنائية عند النقطة المذكورة وفق تعريف المنهج.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p015-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٤
question: إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | صفر
- [x] option-4 | غير موجودة
explanation:
المعطى: إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

مدخل أكبر عدد صحيح يبلغ عددًا صحيحًا عند النقطة، فتحدث قفزة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`

نجمع الحدود المتشابهة، ثم ننقل الحد الثابت إلى الطرف الآخر بتطبيق العملية نفسها على الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نقسم الطرفين على معامل المجهول غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mfrac><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



بما أن القاعدة الداخلية متزايدة، حد اليسار أقل من قيمة النقطة بواحد؛ فلا اتصال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١٢</mn><mo>−</mo></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٨</mn><mo>≠</mo><mn dir="ltr">٩</mn></mrow><mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p015-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ١
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وكان منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">٢</mn></mrow></munder><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٩</mn></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٤</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وكان منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.

وجود المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يعني اتصال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هناك؛ والنقطة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`

نعوّض مباشرة في التعبير المتصل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mn dir="ltr">٩</mn></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١٥</mn><mo>+</mo><mn dir="ltr">٩</mn></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p015-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\` لاستعادة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؛ القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` هنا جائزة لأنها غير صفرية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



المشتقة لحاصل ضرب تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\`، زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الأول</mtext><mo>×</mo><mtext dir="rtl">مشتقة الثاني</mtext></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">س</mtext><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u1-p021-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند-١
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٢١، البند-١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

نشتق حاصل الضرب؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>+</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض القيم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>+</mo><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p021-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند-٦
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٢١، البند-٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤٢</mn><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">ن</mi></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` ومشتقته الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٢</mn><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

قاعدة القوة تنقص الأس واحدًا وتضرب في الأس السابق. المدخل الداخلي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فلا يضيف عاملًا آخر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`



نشتق مرة أخرى لإيجاد المشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mi mathvariant="normal">ن</mi></msup></mrow></math>
\`\`\`



نقارن بالمعطى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؛ فتتساوى المعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٤٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٤٠</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



حاصل ضرب عاملين يساوي صفرًا إذا كان أحدهما صفرًا؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mrow></math>\`. نستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٦</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٦</mn></msup><mo>=</mo><mn dir="ltr">٧</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٦</mn></msup><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p021-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند-٧
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٢١، البند-٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة، فما قيم كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
solution:
وجود المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يتطلب أولًا الاتصال؛ أي تساوي قيمة الفرع الأيمن مع نهاية الفرع الأيسر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



كما يجب تساوي مشتقتي الجهتين. مشتقة الفرع الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\`، ومشتقة الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نطرح شرط الاتصال المبسط من شرط المشتقتين لإزالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p021-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند-٨
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى، النسخة المصورة، ص ٢١، البند-٨
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
solution:
نجمع كل زوج من العوامل باستخدام فرق المربعين. في العاملين الأخيرين نعدّ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` حدًا واحدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٤</mn></msup><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`؛ المتطابقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">ل</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">ل</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ل</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` تعطي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٤</mn></msup><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٦</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نطبق قاعدة القوة، ثم نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٥</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٥</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٣٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٩٢</mn></mrow></math>
\`\`\`


:::


:::mcq
id: math-kamel-u1-p014-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٨</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow></math>\` تساوي:
- [x] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٨</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

مدخل أكبر عدد صحيح ليس عددًا صحيحًا عند النقطة؛ لذلك يبقى ثابتًا قربها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٨</mn><mo>]</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ثابتة في جوار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`؛ ومشتقة الاقتران الثابت صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p014-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٢

question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` متصلًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، فإن:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` غير موجودة
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` قد تكون موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` متصلًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`.

الاتصال شرط لازم للاشتقاق، لكنه لا يكفي وحده.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

مثلًا القيمة المطلقة متصلة عند الصفر، لكن ميلي الجهتين مختلفان.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>|</mo><mi mathvariant="normal">س</mi><mo>|</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>+</mo><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>−</mo><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: قد تكون المشتقة موجودة.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p014-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فإن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-2 | صفر
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\` ثابت، فإن مجموع مشتقتيهما صفر؛ مشتقة الثابت صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، لذلك مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` تساوي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p014-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٤
question: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٨</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` متصل عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٠٫٨</mn></mrow></math>\`
- [x] option-2 | صفر
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠٫٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٫٢</mn></math>\`
explanation:
رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

عند الصفر يكون مدخل أكبر عدد صحيح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠٫٨</mn></math>\`، ويبقى بين صفر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` قربه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٠٫٨</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠٫٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>[</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٨</mn><mo>]</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

الاقتران ثابت في جوار الصفر، لذلك متصل عنده.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo></mrow></math>
\`\`\`

بقية الخيارات تجعل المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٨</mn></mrow></math>\` عددًا صحيحًا (\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`)، فتوجد قفزة عندها. إذن الصفر هو الخيار الصحيح الوحيد.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p014-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٥
question: إحدى العبارات الآتية صحيحة دائمًا:
- [ ] option-1 | إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة.
- [ ] option-2 | إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقترانًا متصلًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة.
- [ ] option-3 | إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` غير موجودة فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` ليس متصلًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`.
- [x] option-4 | إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يكون متصلًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`.
explanation:
إذا وُجدت المشتقة، نكتب فرق القيم كحاصل ضرب فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في نسبة الفرق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mo>=</mo><mtext dir="rtl">هـ</mtext><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></math>
\`\`\`

عندما يقترب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` من الصفر يقترب الفرق من صفر، فيتحقق الاتصال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn><mo>×</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يستلزم اتصال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p014-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٤ · البند ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></math>\`، فإن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ص</mi><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mfrac></math>\`
- [x] option-2 | صفر
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow></math>\`.

نبسّط حاصل الضرب أولًا؛ إذا صار ثابتًا فمشتقته صفر دون حاجة إلى قاعدة الضرب.

مشتقة الجذر هي واحد على ضعفيه؛ فيختصر الجذر في حاصل الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mi mathvariant="normal">صَ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

حاصل الضرب ثابت؛ مشتقته صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>(</mo><mi mathvariant="normal">ص</mi><mi mathvariant="normal">صَ</mi><mo>)</mo><mi mathvariant="normal">َ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p015-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٢
question: إذا علمت أن الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | صفر
- [x] option-4 | غير موجودة
explanation:
المعطى: إذا علمت أن الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

مدخل أكبر عدد صحيح يبلغ عددًا صحيحًا عند النقطة، فتحدث قفزة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`

بما أن القاعدة الداخلية متزايدة، حد اليسار أقل من قيمة النقطة بواحد؛ فلا اتصال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>−</mo></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>≠</mo><mn dir="ltr">٣</mn></mrow><mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u1-p015-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٣
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٣ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وكان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mtext> </mtext><mtext> ⁣</mtext><mtext> ⁣</mtext><msup><mrow></mrow><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، فجد الثابت \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`.
solution:
المطلوب ثابت يدخل في الاقتران، والمعطى قيمة مشتقته الثانية؛ لذلك نشتق مرتين ثم نعوّض. عند اشتقاق قوة نضرب في أسها وننقص الأس واحدًا، ويعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` باعتباره ثابتًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`



نساوي هذه النتيجة بالقيمة المعطاة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



للتحقق، تعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow><mo>+</mo><mn dir="ltr">١٦</mn></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\` كما طلب السؤال.
:::


:::mcq
id: math-kamel-u1-p015-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٥
question: أي من الاقترانات الآتية يكون قابلًا للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">|</mo></mrow><mo>−</mo><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow></mrow></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow><mo>−</mo><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\`
explanation:
رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

طرح عدد صحيح داخل رمز أكبر عدد صحيح يطرح العدد نفسه خارجه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>]</mo><mo>=</mo><mo>[</mo><mi mathvariant="normal">س</mi><mo>]</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

إذن الاقتران يساوي ثابتًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`، ومشتقته صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">]</mo></mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\` قابل للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p015-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٧
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٧
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></msqrt></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-3 | صفر
- [x] option-4 | غير موجودة
explanation:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` لاقتران ذي فرعين. وجود المشتقة عند نقطة الفصل يحتاج إلى الاتصال أولًا، ثم تساوي مشتقتي الجهتين.

نتحقق من القيمة والنهايتين:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></msqrt><mo>=</mo><msqrt><mn dir="ltr">٤</mn></msqrt><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><msup><mn dir="ltr">١</mn><mo>−</mo></msup></mrow></munder><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إذن الاقتران متصل عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">ع</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`؛ نطبقها على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` لأن فرع اليمين جذر لاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mn dir="ltr">١</mn><mo>+</mo></msup><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



فرع اليسار خطي؛ مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msup><mn dir="ltr">١</mn><mo>−</mo></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo mathvariant="normal">≠</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` غير موجودة، وهو الخيار الرابع.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p015-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٨
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٨
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٥ · البند ٨
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقترانين قابلين للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">كََََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقترانين قابلين للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

نكرر الاشتقاق باستعمال العلاقتين المعطاتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mo>=</mo><mi mathvariant="normal">ق</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كً</mi><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">ك</mi></mrow></mrow></math>
\`\`\`

نشتق مرتين إضافيتين؛ السالبان يتلاشيان.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ك</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup><mo>=</mo><mo>−</mo><mi mathvariant="normal">كَ</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">ق</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ك</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow></msup><mo>=</mo><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>=</mo><mi mathvariant="normal">ك</mi></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mn dir="ltr">٢٠</mn></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [x] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mn dir="ltr">٢٠</mn></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.

عند نقطة فصل فرعين، وجود المشتقة يتطلب أولًا تساوي قيمة الاقتران ونهايته من الجهتين، ثم تساوي المشتقتين من اليمين واليسار.

نحسب النهاية من القاعدة المحيطة ثم نقارن بقيمة النقطة المنفردة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٥</mn></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

القيمتان مختلفتان؛ عدم الاتصال يمنع الاشتقاق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٧</mn><mo>≠</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

المشتقة المطلوبة غير موجودة.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.

عند نقطة فصل فرعين، وجود المشتقة يتطلب أولًا تساوي قيمة الاقتران ونهايته من الجهتين، ثم تساوي المشتقتين من اليمين واليسار.

القاعدة المحيطة تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وقيمة النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` أيضًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٢</mn></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٤</mn></mrow><mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow><mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

بما أن قيمة النقطة توافق قاعدة الجوار، نشتق تلك القاعدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٫٦</mn></mrow><mo stretchy="true">]</mo></mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠٫٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠٫٢</mn></mrow></math>\` يصل المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo>+</mo><mn dir="ltr">١٫٦</mn></mrow></math>\` إلى العدد الصحيح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، لكن ذلك وحده لا يحسم مشتقة حاصل الضرب.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` يساوي صفرًا، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نستخدم تعريف المشتقة: نهاية فرق القيم مقسومًا على مقدار تغير المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠٫٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">⌊</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">⌋</mo><mo stretchy="false">[</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٠٫٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠٫٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٥</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">⌊</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">⌋</mo></mrow></math>
\`\`\`



نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` قبل أخذ النهاية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠٫٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠٫٢</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">هـ</mi></mfrac><mo>=</mo><mn dir="ltr">٢٥</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">⌊</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">⌋</mo></mrow></math>
\`\`\`



قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` يأخذ أكبر عدد صحيح القيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` من اليسار و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` من اليمين؛ فيبقى محدودًا. ضربه في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يجعل النهاية صفرًا من الجهتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠٫٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



المشتقة صفر، رغم قفزة العامل الصحيح منفردًا.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

مدخل أكبر عدد صحيح ليس عددًا صحيحًا عند النقطة؛ لذلك يبقى ثابتًا قربها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٥</mn><mo>]</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`

الاقتران ثابت محليًا قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، ومشتقة الاقتران الثابت صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٥
question: ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، فما قيمة المشتقة من اليمين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؟
- [ ] option-1 | صفر
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | غير معرف
explanation:
المعطى: ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true">]</mo></mrow><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

على يمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يبقى أكبر عدد صحيح ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` مساويًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نحسب نسبة الفرق من اليمين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mo>)</mo></mrow><mrow><mo>=</mo><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mtext dir="rtl">هـ</mtext></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn><mo>+</mo></mrow></mrow></munder><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mrow><mo stretchy="true">[</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mrow><mo stretchy="true">[</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` يبقى أكبر عدد صحيح لنصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` مساويًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`

نستخدم قاعدة القسمة: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` صفر ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ لذلك المشتقة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mn dir="ltr">٠</mn><mo>×</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`. ثم نعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٧
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٧
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٧
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [x] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
explanation:
نستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>\` في العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ك</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ك</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` بقاعدة الضرب، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">س</mtext><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p016-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٨
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٨
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٦ · البند ٨
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [x] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.

عند نقطة فصل فرعين، وجود المشتقة يتطلب أولًا تساوي قيمة الاقتران ونهايته من الجهتين، ثم تساوي المشتقتين من اليمين واليسار.

الفرعان يتفقان في القيمة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ لكن مشتقتيهما مختلفتان.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

اختلاف المشتقة الأولى يمنع وجود الثانية أيضًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mo>)</mo><mo>≠</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">١</mn><mo>−</mo><mo>)</mo></mrow></mrow></math>
\`\`\`

المشتقة المطلوبة غير موجودة.

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` غير موجودة؛ و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` غير موجودة أيضًا.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p017-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بقاعدة الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يتساوى معاملا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ومشتقتها؛ نستخدم مجموعهما المعطى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>(</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>+</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٦</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p017-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`.

نستخدم فرق المربعين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`. نطبقه مرتين لأن كل زوج عاملين يختلف في إشارة الحد الأخير.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نشتق القوة ثم نعوّض بسالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p017-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">]</mo></mrow><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٧</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">]</mo></mrow><mrow><mo stretchy="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true">|</mo></mrow></mfrac></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

قرب ثلث يبقى أكبر عدد صحيح لعشرة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` مساويًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></mrow></math>\`. قاعدة القوة تضرب في الأس ثم تنقصه واحدًا، فتكون المشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`. ثم نعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٧</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p017-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٤
question: ليكن كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلين للاشتقاق بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">عَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:
المعطى: ليكن كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلين للاشتقاق بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">عَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`.

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` كحاصل ضرب، ثم نساوي المشتقة المعطاة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mi mathvariant="normal">ع</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mi mathvariant="normal">عَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mi mathvariant="normal">عَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نطرح الحد المشترك؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` موجبة، فيلزم أن تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mi mathvariant="normal">ع</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

قاعدة: إذا كانت مشتقة اقتران صفرًا في كل نقطة من فترة، فالاقتران ثابت عليها. هنا المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\` فترة واحدة؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ثابتة، وقيمتها عند الصفر تحدد ذلك الثابت.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p017-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">كَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

نعيد كتابة العلاقة دون قسمة ثم نشتق حاصل الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">كَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mo>+</mo><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo><mi mathvariant="normal">قَ</mi></mrow></mrow></math>
\`\`\`

نعوّض عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">كَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p017-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٧ · البند ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` التي تجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لجميع قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` الممكنة؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.

نشتق مربع المشتقة؛ نضرب في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">صَ</mi><mi mathvariant="normal">صً</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">صَ</mi></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` موجبة؛ نقسم عليها ثم نعوّض بالمشتقة الثانية المطلوبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">صً</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p018-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`.

نستخدم قاعدة القوة: نضرب معامل الحد في أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، ثم ننقص الأس واحدًا. نشتق ثلاث مرات؛ والثابت يختفي من أول اشتقاق.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mn dir="ltr">١٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup><mo>=</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة والنتيجة المعطاتين ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٤</mn><mo>×</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

 نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤</mn></math>\` من الطرفين، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٢٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p018-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٠٫٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٠٫٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

قرب سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون أكبر عدد صحيح ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠٫٣</mn></math>\` مساويًا سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>(</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نشتق كثير الحدود ثم نعوّض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p018-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٠</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
explanation:
 نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` بقاعدة القوة: ننزل الأس ثم ننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` في كل اشتقاق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mtext>′</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ن</mi><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mtext>″</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mtext>‴</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



في الحالة ذات المعامل غير الصفري، تتساوى قوتا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` لأن الطرفين يمثلان الاقتران نفسه؛ لذلك:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نعوض في المعامل ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\` هو الجواب المناسب من الخيارات المعطاة. توجد حالة أخرى يسمح بها النص: عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` تكون المشتقة الثالثة صفرًا، فيتحقق المعطى مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٥</mn></math>\` ليس القيمة الوحيدة إذا تجاهلنا الخيارات، لكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` غير معروض بينها.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p018-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">م</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` التي تجعل الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلًا للاشتقاق على مجاله؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>≤</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
 نكتب ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mrow><mrow><mi mathvariant="normal">م</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\`، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">ب</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\`. المطلوب ألا تظهر زاوية في منحنى القيمة المطلقة.

إذا عبر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` الصفر بميل غير صفري، تقلب القيمة المطلقة إشارة ميل أحد الجانبين؛ فتختلف المشتقتان. لذلك نفحص جذور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` نستخدم مميز التربيعي، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δ</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">ج</mi></mrow></mrow></mrow></math>\`. المميز السالب يعني عدم وجود جذور حقيقية، والصفر يعني جذرًا مكررًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mo>=</mo><msup><mn dir="ltr">٦</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mi mathvariant="normal">م</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٦</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\` فالمميز سالب، فلا يتغير توقيع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` عند جذر، وتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></math>\` قابلة للاشتقاق.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\` كثيرة حدود قابلة للاشتقاق حتى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`؛ فالجذر مكرر ولا توجد زاوية.

إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` فالمميز موجب، فتوجد جذور بسيطة ذات ميل غير صفري وتظهر زوايا. وإذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` يصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\` خطيًا يعبر الصفر أيضًا.

إذن القيم المطلوبة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></math>\`، وهو الخيار الثالث.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p018-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٦
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠٫٦</mn></mrow><mo stretchy="true">]</mo></mrow><mo>+</mo><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">|</mo></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | صفر
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | غير موجودة
explanation:
عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٠٫٦</mn></mrow><mo>=</mo><mn dir="ltr">٢٫٦</mn></mrow></math>\`، ويبقى بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` قرب هذه النقطة. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٠٫٦</mn></mrow><mo stretchy="true" fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` ثابت محليًا.

وقرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` سالبًا، فتكون قيمته المطلقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



مشتقة الثابت صفر، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p018-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٧
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٧
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٧
question: إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٫٢</mn></mrow><mo stretchy="true">]</mo></mrow><mo>+</mo><msqrt><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></msqrt></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">١</mn></msup><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msup></mrow></mfrac></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`؟
- [x] option-1 | صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٫٢</mn></mrow><mo stretchy="true">]</mo></mrow><mo>+</mo><msqrt><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></msqrt></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

قرب سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سالبًا وأكبر عدد صحيح ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٫٢</mn></math>\` صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msqrt><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></msqrt><mo>=</mo><mo>|</mo><mi mathvariant="normal">س</mi><mo>|</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>[</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٫٢</mn><mo>]</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

إذن الاقتران ثابت قرب النقطة؛ مشتقته صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٠</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p018-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٨
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٨
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٨ · البند ٨
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">]</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">[</mo></mrow><mo>−</mo><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">س</mi><mo stretchy="true">[</mo></mrow><mo>+</mo><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٣</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">]</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">[</mo></mrow><mo>−</mo><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">س</mi><mo stretchy="true">[</mo></mrow><mo>+</mo><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

إضافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` داخل أكبر عدد صحيح تزيده \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` دائمًا، حتى عند الأعداد الصحيحة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧</mn><mo>]</mo><mo>−</mo><mo>[</mo><mi mathvariant="normal">س</mi><mo>]</mo><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سالبة في المجال؛ القيمة المطلقة لضعفيها تساوي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p019-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ١
question: إذا كانت مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١١</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢١</mn></mrow></math>\`
explanation:
نستخدم قاعدة القسمة: مشتقة البسط في المقام ناقص البسط في مشتقة المقام، مقسومًا على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">سق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` غير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثم نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p019-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٢
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٢
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

درجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` تساوي درجتها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، لأن الاشتقاق يخفض الدرجة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`

نقارن معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` لا يحوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p019-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ج</mi></mfrac><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup></mrow></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، فإن قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` الموجبة:
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ج</mi></mfrac><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup></mrow></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.

بما أن المشتقة الثالثة غير صفرية وخطية، يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٤</mn></mrow><mrow><mi mathvariant="normal">ج</mi></mrow></mfrac><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نساوي المعاملين ونختار الجذر الموجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٢٤</mn></mrow><mrow><mi mathvariant="normal">ج</mi></mrow></mfrac><mo>=</mo><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٦</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">ج</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p019-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٤
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">صََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">صَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ص</mi></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`. قاعدة القوة تضرب في الأس ثم تنقصه واحدًا؛ نطبقها مرتين على المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صً</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض ونختصر قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير الصفرية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">صً</mi><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p019-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٢٤</mn></mrow><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><msup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

نحلل المقام كمربع كامل، ثم نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` قوة سالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نشتق مرتين؛ كل مرة نضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mn dir="ltr">٢٤</mn><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></msup></mrow></mrow></math>
\`\`\`

القوة السالبة الرابعة هي مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mn dir="ltr">٢٤</mn><msup><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٤</mn><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p019-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٦
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٦
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">لَ</mi><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>=</mo></mrow></math>\`
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٩</mn></mfrac></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

قرب الثلث يكون أكبر عدد صحيح لضعفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` مساويًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ل</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ل</mi></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></mrow><mrow><msup><mi mathvariant="normal">ل</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\` بقاعدة القسمة، لأن مشتقة البسط الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` صفر. نعوض بقيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` غير الصفرية وبالمشتقة المعطاة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mi mathvariant="normal">لَ</mi><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>)</mo></mrow><mrow><msup><mrow><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لَ</mi><mo>(</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p019-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٧
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٧
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ١٩ · البند ٧
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">[</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` قابلًا للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">[</mo></mrow></math>\`، فإن قيم كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` على التوالي هي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`، صفر
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` من اليسار يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>≤</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac></mrow><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></math>\`، فيساوي أكبر عدد صحيح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ويصبح الفرع الأول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`.

وجود المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يشترط الاتصال وتساوي مشتقتي الجهتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مشتقة الفرع الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ومشتقة الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نقسم معادلة الاتصال على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثم نطرحها من معادلة المشتقات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p020-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ١
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ١
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ١
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فإن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قََ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

قاعدة القسمة تعطي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">مربع</mtext></mfrac></math>\` المقام. نستخدمها هنا لأن البسط أو المقام يعتمد على المتغير، ونحافظ على شرط المقام غير الصفري.

نشتق نسبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` إلى مشتقتها بقاعدة القسمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mfrac><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mi mathvariant="normal">قَ</mi></mrow></mfrac><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><msup><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mi mathvariant="normal">ق</mi><mi mathvariant="normal">قً</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">قَ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض؛ المقام عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p020-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٣
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٣
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-2 | صفر
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
نحلل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، ثم نربع العاملين كاملين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` بحسب المجال الأصلي، فيجوز اختصار\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



مشتقة المربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، لأن مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p020-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٤
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٤
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٤
question: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>+</mo><mi mathvariant="normal">قَ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٧</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢١</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٣</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢١</mn></math>\`
explanation:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>+</mo><mi mathvariant="normal">قَ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٧</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢١</mn></mrow></math>\`.

درجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` لا تتغير بطرح مشتقتيها؛ نكتبها تربيعية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>−</mo><mi mathvariant="normal">قً</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١٧</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢١</mn></mrow></mrow></math>
\`\`\`

نقارن معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` والثابت.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٧</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٥٤</mn></mrow></mrow></math>
\`\`\`

نعوّض بسالب واحد في القاعدة الناتجة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢٥</mn><mo>+</mo><mn dir="ltr">٥٤</mn><mo>=</mo><mn dir="ltr">٣٣</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٣</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p020-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٥
kicker: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٥
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٠ · البند ٥
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">|</mo></mrow><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>≤</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">]</mo></mrow><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` علمًا بأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` موجودة.
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>،</mo><mtext dir="rtl">صفر</mtext></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` سالبًا، فنكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`. وعلى يمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` مباشرة يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>&lt;</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></math>\`، فيساوي أكبر عدد صحيح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

الاتصال عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يساوي قيمة الفرع الأيسر بنهاية الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



وجود المشتقة يتطلب أيضًا تساوي مشتقتي الجهتين. مشتقة الفرع الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومشتقة الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` في المعادلة الأخيرة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u1-p021-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند ٢
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>×</mo><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نشتق حاصل الضرب بقاعدة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` زائد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الأول</mtext><mo>×</mo><mtext dir="rtl">مشتقة الثاني</mtext></mrow></math>\`.

من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` نحصل على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` سالبًا، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نعوض القيم الأربع في قاعدة الضرب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">قهـ</mtext><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p021-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند ٣
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢١ · البند ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.

نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` أولًا لنستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نشتق العلاقة؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثابت بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ومشتقته صفر. نستخدم قاعدة الضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فتكون مشتقة حاصل الضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p022-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ١
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.

نعوّض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` لنستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>+</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نستخدم قاعدة الضرب: مشتقة الجذر في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، زائد الجذر في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">س</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ثابت بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ومشتقته صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mfrac><mo>+</mo><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض بالقيمتين المعطاتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٦</mn></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢٥</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p022-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٢
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable><mtr><mtd><mrow><msqrt><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></msqrt><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، أوجد قيمة كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\` علماً بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة لجميع قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` الحقيقية.
solution:
نقطة الفصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` هي الموضع الوحيد الذي يحتاج إلى فحص خاص؛ بقية كل فرع قابل للاشتقاق. وجود المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يتطلب الاتصال وتساوي مشتقتي الجهتين.

من الاتصال:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



مشتقة الجذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`، فمشتقته اليمنى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></math>\`. ومشتقة الفرع الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` في شرط الاتصال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p022-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٣
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قابلاً للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`، جد قيمة كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
وجود المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يتطلب الاتصال أولًا، ثم تساوي مشتقتي الجهتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مشتقة الفرع الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، ومشتقة الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">س</mi></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></mrow></math>\` في شرط الاتصال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p022-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٤
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><msup><mi mathvariant="normal">ـ</mi><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢٠٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><msup><mi mathvariant="normal">ـ</mi><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١٩٩</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢٠٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><msup><mi mathvariant="normal">ـ</mi><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢٠٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><msup><mi mathvariant="normal">ـ</mi><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١٩٩</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">هـ</mi></mrow></math>\` عدة مرات لنلاحظ النمط؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` الثانية صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>=</mo><mi mathvariant="normal">س</mi><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>+</mo><mtext dir="rtl">هـ</mtext></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mo>=</mo><mi mathvariant="normal">س</mi><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ً</mi><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup></mrow><mrow><mo>=</mo><mi mathvariant="normal">س</mi><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ً</mi></mrow></mrow></math>
\`\`\`

كل اشتقاق يزيد معامل المشتقة السابقة واحدًا؛ نكرر حتى الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠٠</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٢٠٠</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">س</mi><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>(</mo><mn dir="ltr">٢٠٠</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>+</mo><mn dir="ltr">٢٠٠</mn><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mo>(</mo><mn dir="ltr">١٩٩</mn><mo>)</mo></mrow></msup><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` بالقيم المعطاة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ق</mi></mrow><mrow><mo>(</mo><mn dir="ltr">٢٠٠</mn><mo>)</mo></mrow></msup><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢٠٠</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٦٠٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠٤</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p022-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٥
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ق″</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ق″</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` أعداد ثابتة في القاعدة. نسمّيها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` على الترتيب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">بس</mtext><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أس</mtext><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



تعريف الثوابت بقيم المشتقات يعطي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١٨</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` في معادلة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ثم نعزلها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٥</mn><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١٨</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٥</mn><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٥</mn><mo>−</mo><mn dir="ltr">١٢٥</mn><mo>+</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p022-r6
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٦
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، جد قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي يكون عندها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
المطلوب قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي تجعل مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.

قاعدة القسمة هي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` مقسومًا على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نوسع البسط ونجمع حدوده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نساوي المشتقة بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` ثم نضرب في المقام غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



ننقل حدود الطرف الأيمن بتطبيق العملية نفسها على الطرفين، ثم نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨</mn><mi mathvariant="normal">س</mi></mrow></math>\` عاملًا مشتركًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٨</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٨</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٨</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



حاصل الضرب صفر إذا كان أحد العاملين صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">أو</mtext><mspace width="1em"/><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



القيمتان لا تساويان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`، فتقبلان.
:::


:::exam-question
id: math-kamel-u1-p022-r7
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٧
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">مَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">مَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.

لأن التعبير حاصل ضرب عاملين متغيرين، نستخدم قاعدة الضرب: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة الأول</mtext><mo>×</mo><mtext dir="rtl">الثاني</mtext></mrow></math>\` كما هو، زائد الأول كما هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة الثاني</mtext></math>\`.

المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يعني أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` تساوي ثلثيْن.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نشتق حاصل الضرب ثم نطرح مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">مَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>−</mo><mn dir="ltr">٨</mn></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p022-r8
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٨
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٨
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق′</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mo>′</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق′</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

نستخدم قاعدة الضرب: مشتقة الجذر في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، زائد الجذر في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">س</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، والنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تحقق الشرط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mfrac><mo>+</mo><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نعوّض عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p022-r9
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٩
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">]</mo></mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo>]</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>[</mo></mrow></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">]</mo></mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo>]</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>[</mo></mrow></mrow></math>\`.

رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

في الفترة المعطاة أكبر عدد صحيح ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>[</mo><mi mathvariant="normal">س</mi><mo>]</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">س</mi><mo>|</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

إذن حاصل الضرب يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p022-r10
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ١٠
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٢ · البند ١٠
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نستخدم قاعدة القسمة؛ لأن البسط والمقام كلاهما يتغيران مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. وهي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` مقسومًا على مربع المقام. يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` حتى لا يساوي المقام صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">[</mo><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نوسع كل جداء قبل الطرح حتى نحافظ على إشارات القوس الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نطرح التعبير الثاني كاملًا ونجمع الحدود المتشابهة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn></mrow><mrow><mo stretchy="false">[</mo><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p023-r1
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ١
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>+</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` هي سالب مشتقة المقام مقسومة على مربعه؛ لأننا نشتق قوة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` ونضرب بمشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mtext dir="rtl">أ</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>+</mo><mtext dir="rtl">أس</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ونساوي المشتقة بالمعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. يجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\` حتى تكون معرفة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mtext dir="rtl">أ</mtext><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>+</mo><mtext dir="rtl">أ</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نضرب بالمقام غير الصفري ثم نوسع المربع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٣</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl"> أو أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



القيمتان لا تساويان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، فتقبلان.
:::


:::exam-question
id: math-kamel-u1-p023-r2
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٢
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق″</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة، فما قيم الثوابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`؟
solution:
وجود المشتقة الثانية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يقتضي وجود المشتقة الأولى والاتصال هناك، مع توافق مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` من الجهتين.

مشتقتا الفرع الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>\`، ومشتقتا الفرع الأيمن هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نساوي المشتقتين الأوليين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نستخدم الاتصال لتحديد الثابت الأخير.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p023-r3
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٣
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` قابلاً للاشتقاق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وكان متوسط تغير الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`، فما قيمة كل من الثوابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`؟
solution:
قابلية الاشتقاق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` تشترط الاتصال وتساوي ميلي الفرعين.

شرط الاتصال بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\` يعطي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`



تساوي المشتقتين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يعطي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في معادلة الاتصال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



للمتوسط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` نستخدم الفرع الأول عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، والثاني عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٥</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` ونعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٥</mn><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p023-r4
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٤
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mroot><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mo>=</mo><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></msqrt><mo>−</mo><msqrt><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi></mrow></msqrt></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان متوسط التغير للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` مساوياً \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ′</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
الحدان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mroot><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٣</mn></mroot></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></math>\` ثابتان بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، لذلك يلغيان في فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، ومشتقتهما صفر.

قاعدة مشتقة الجذر المركب هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><msqrt><mi mathvariant="normal">ع</mi></msqrt><mo stretchy="true" fence="true">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\`، فنحصل عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><msqrt><mrow><msup><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



لكي تقع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` داخل مجال الاشتقاق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٥</mn></mrow></math>\`. وعند طرفي فترة المتوسط، تلغى الثوابت ويكون فرق القيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt><mo>−</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><msqrt><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></msqrt><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



نحلل فرق المربعين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. وبما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\`، فالمقام موجب ويمكن إدخاله تحت الجذر على صورة مربعه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msqrt><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></msqrt><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><msqrt><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac></msqrt></mrow></math>
\`\`\`



الطرفان موجبان؛ نربعهما ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢٥</mn><mn dir="ltr">١٦</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٥</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٤٨</mn><mo>=</mo><mn dir="ltr">٢٥</mn><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٧٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢٣</mn><mo>=</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">ب</mi><mspace width="1em"/><mo>⟹</mo><mspace width="1em"/><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mn dir="ltr">٤١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



القيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤١</mn><mn dir="ltr">٣</mn></mfrac></math>\` أكبر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، فتسمح بالمشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` وبمتوسط الفترة، وهي الجواب المطلوب.
:::


:::exam-question
id: math-kamel-u1-p023-r5
title: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٥
question: قواعد الاشتقاق
reference: الكامل، الوحدة الأولى · النسخة المصورة، ص ٢٣ · البند ٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك الاقترانان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٤</mn></msup></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ه</mi><mi mathvariant="normal">ـ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؟
solution:
رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فيساوي أكبر عدد صحيح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. لذلك يمكن محليًا كتابة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></mrow></math>\`.

نحتاج قيمتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` لاستخدام قاعدة الضرب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msup><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



نستخدم قاعدة القسمة: مشتقة البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">المقام</mtext><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">[</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٩٦</mn><mo>+</mo><mn dir="ltr">٣٢</mn></mrow><mn dir="ltr">٩</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٢٨</mn><mn dir="ltr">٩</mn></mfrac></mrow></math>
\`\`\`



ومن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow></mrow></math>\` نحصل على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مشتقة حاصل الضرب هي مشتقة الأول في الثاني، زائد الأول في مشتقة الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">قهـ</mtext><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٢٨</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>+</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">١٢٨</mn><mo>+</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">١٤٤</mn></mrow></math>
\`\`\`


:::


:::mcq
id: math-kamel-u1-p018-r1
title: الكامل، الوحدة الأولى · الصورة، ص ١٨ · البند ١
kicker: الكامل، الوحدة الأولى · الصورة، ص ١٨ · البند ١ · ٢٠٢٣ الدورة الثالثة
reference: السؤال، الصورة، · المفتاح / الحل
question: أي الاقترانات التالية قابلاً للاشتقاق على مجاله؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">]</mo></mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`
explanation:
رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل. نحدد سلوكه قرب النقطة: بين قفزاته يكون ثابتًا محليًا، بينما يجب فحص الاتصال عند القفزة.

طرح عدد صحيح داخل رمز أكبر عدد صحيح يطرح العدد نفسه خارجه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>]</mo><mo>=</mo><mo>[</mo><mi mathvariant="normal">س</mi><mo>]</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

إذن الاقتران يساوي ثابتًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`، ومشتقته صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">]</mo></mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\` قابل للاشتقاق على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p074-r1
title: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ١
kicker: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ١
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mtable columnalign="right right" columnspacing="1em"><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، وكان متوسط التغير للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mroot><mrow><mn dir="ltr">٣٢</mn><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><mn dir="ltr">٥</mn></mrow></mroot></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
المعطى: الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mtable columnalign="right right" columnspacing="1em"><mtr><mtd><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، وكان متوسط التغير للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mroot><mrow><mn dir="ltr">٣٢</mn><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><mn dir="ltr">٥</mn></mrow></mroot></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

طرفا المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`؛ نختار فرعي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` الموافقين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٩</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

الثابت الجذري يُلغى في الفرق، فنكتب المتوسط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>(</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>)</mo><mo>−</mo><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٣</mn><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p074-r2
title: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٢
kicker: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٢
reference: السؤال، الصورة، · المفتاح / الحل
question: ما قيمة مشتقة الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` عدد ثابت يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ يبقى عاملًا خارج المشتقة فلا نحتاج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. قاعدة القسمة هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` على مربع المقام.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mfrac><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><msup><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

نعوّض بالقيم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mfrac><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٩</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p074-r3
title: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٣
kicker: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٣
reference: السؤال، الصورة، · المفتاح / الحل
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></msup></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mo>−</mo><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><msup><mi mathvariant="normal">س</mi><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></msup></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mo>−</mo><mtext dir="rtl">لو</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><msup><mi mathvariant="normal">س</mi><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></msup></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mtext dir="rtl">لو</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><msup><mi mathvariant="normal">س</mi><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></msup></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><msup><mi mathvariant="normal">س</mi><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></msup></mrow></math>\`
explanation:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></msup></mrow></math>\`.

الأس لوغاريتم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثابت؛ نستخدم مشتقة القوة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo>)</mo></mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo>)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>
\`\`\`

الواحد يساوي لوغاريتم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`؛ فرق اللوغاريتمين هو لوغاريتم النسبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo>)</mo></mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mtext dir="rtl">هـ</mtext></mrow></mfrac></mrow><mo>)</mo></mrow></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u1-p074-r4
title: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٤
kicker: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٤
reference: السؤال، الصورة، · المفتاح / الحل
question: تحرك جسم حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">١٢</mn></mrow><mrow><mi mathvariant="normal">ف</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٣٩</mn></mrow></math>\`، فإن التسارع عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٦</mn></mrow></math>\`
explanation:
المعطى: تحرك جسم حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">١٢</mn></mrow><mrow><mi mathvariant="normal">ف</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٣٩</mn></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي السرعة و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ف</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant="normal">ع</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي التسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ت</mi></math>\`. بقاعدة السلسلة: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">ت</mi></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٢</mn><mi mathvariant="normal">ف</mi></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ع</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`؛ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` يعتمدان على الزمن.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ت</mi><mo>−</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ع</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

عند السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` من العلاقة الأصلية ثم نحسب التسارع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٧</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٢</mn></mrow><mrow><mi mathvariant="normal">ف</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٣٩</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mi mathvariant="normal">ع</mi><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u1-p074-r5
title: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٥
kicker: الكامل، الوحدة الأولى · الصورة، ص ٧٤ · البند ٥
reference: السؤال، الصورة، · المفتاح / الحل
question: تحرك جسم حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فإن التسارع عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mn dir="ltr">٣٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></math>\`
explanation:
المعطى: تحرك جسم حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

عند الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` من العلاقة المعطاة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نشتق حاصل الضرب؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي التسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ت</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ف</mi><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٦</mn><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ت</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u1-p075-r6
title: الكامل، الوحدة الأولى · الصورة، ص ٧٥ · البند ٦
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`، جد متوسط التغير للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المعطى: متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ليصبح مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` طرفي الفترة المطلوبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mn dir="ltr">١١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>+</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` هو فرق القيم مقسومًا على طول الفترة؛ لذلك فرق القيم\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>=</mo></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>×</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`. ثم نحسب متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">١٥</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p075-r9
title: الكامل، الوحدة الأولى · الصورة، ص ٧٥ · البند ٩
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سقط جسم من ارتفاع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠٠</mn></mrow></math>\` متر عن سطح الأرض، بحيث إن المسافة المقطوعة بالأمتار بعد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` ثانية هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`. وفي الوقت نفسه أطلق جسم من سطح الأرض للأعلى، حيث إن المسافة التي يقطعها هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`. جد سرعة كل من الجسمين عندما يكون لهما الارتفاع نفسه عن سطح الأرض.
solution:
المعطى: سقط جسم من ارتفاع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠٠</mn></mrow></math>\` متر عن سطح الأرض، بحيث إن المسافة المقطوعة بالأمتار بعد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` ثانية هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`. وفي الوقت نفسه أطلق جسم من سطح الأرض للأعلى، حيث إن المسافة التي يقطعها هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ف</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`.

نقيس الارتفاع من الأرض؛ الجسم الأول ينقص ارتفاعه بالمسافة التي سقطها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٠٠</mn><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٥٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نختار الأعلى موجبًا. السرعة المتجهة هي مشتقة الارتفاع بالنسبة إلى الزمن؛ لذلك نشتق الارتفاعين ونعوض بالزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ثانية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">٥٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mn dir="ltr">٣٠</mn></mrow></mrow></math>
\`\`\`

الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>\` تخص سرعة الجسم الأول عند اتخاذ الأعلى موجبًا؛ مقدار سرعته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` نحو الأسفل. سرعة الثاني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>+</mo><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` نحو الأعلى.

النتيجة: الأول: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` رأسيًا؛ سرعته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` للأسفل. الثاني: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` للأعلى.
:::


:::exam-question
id: math-kamel-u1-p075-r10
title: الكامل، الوحدة الأولى · الصورة، ص ٧٥ · البند ١٠
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من قمة برج ارتفاعه عن الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٠٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\` قذف جسم رأسياً لأعلى حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فكانت سرعته لحظة وصوله الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mn dir="ltr">٦٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`. فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
نقيس الإزاحة من قمة البرج، ونختار الأعلى موجبًا. عند الأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mrow><mo>−</mo><mrow><mn dir="ltr">١٠٠</mn><mi mathvariant="normal">م</mi></mrow></mrow></mrow></math>\`، ومقدار السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٦٠</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\` يجعل مربعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦٠٠</mn></math>\`. نرمز ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` بالحرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` وللزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mi mathvariant="normal">أ</mi></mrow></math>\` بالحرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

السرعة مشتقة الإزاحة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mspace width="1em"/><mo>⟹</mo><mspace width="1em"/><mi mathvariant="normal">ل</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نربع السرعة ونُظهر الإزاحة في الناتج لإزالة الزمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١٠٠</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ف</mi></mrow></math>
\`\`\`



نعوض عند الارتطام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦٠٠</mn><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠٠</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢٠٠٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦٠٠</mn><mspace width="1em"/><mo>⟹</mo><mspace width="1em"/><mi mathvariant="normal">أ</mi><mo>=</mo><mo>±</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`



نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` والقذف إلى الأعلى.
:::


:::exam-question
id: math-kamel-u1-p075-r11
title: الكامل، الوحدة الأولى · الصورة، ص ٧٥ · البند ١١
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسم في خط مستقيم حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></mrow></math>\`. جد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` علماً أن تسارع الجسم في اللحظة التي تنعدم فيها سرعته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mn dir="ltr">٩</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`.
solution:
المعطى: يتحرك جسم في خط مستقيم حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة.

لأن التسارع عند لحظة التوقف يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ولا يساوي صفرًا، فالسرعة لا تبقى صفرًا قربها. نشتق العلاقة في الأزمنة المجاورة التي لا تنعدم فيها السرعة؛ فنستطيع اختصارها هناك.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ع</mi></mrow><mrow><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></math>
\`\`\`

بالاستمرار إلى لحظة التوقف، العلاقة الأصلية تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٦</mn></mfrac></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ف</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٩</mn></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn><msup><mrow><mo>(</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١٨</mn></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

نحل للثابت.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p075-r12
title: الكامل، الوحدة الأولى · الصورة، ص ٧٥ · البند ١٢
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المثلث المكون من المماس والعمودي على المماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، علماً بأن معادلة العمودي على المماس هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

ميل العمودي سالب ربع؛ ميل المماس مقلوبه السالب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">ع</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mi mathvariant="normal">م</mi></mrow></msub><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

نجد تقاطعي المماس والعمودي مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">١١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></mrow></math>
\`\`\`

القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٧</mn></math>\` والارتفاع من نقطة التماس إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>(</mo><mn dir="ltr">١٨</mn><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٤</mn></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u1-p076-r13
title: الكامل، الوحدة الأولى · الصورة، ص ٧٦ · البند ١٣
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من قمة برج يرتفع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٨</mn></mrow></math>\` قدم قذف جسم رأسياً إلى الأعلى حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi></mrow></math>\`. وفي اللحظة نفسها قذف جسم ثان من سطح الأرض للأعلى حسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi></mrow></math>\`. جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` للجسم الثاني، عندما يتساوى أقصى ارتفاع للجسمين عن سطح الأرض.
solution:
المعطى: من قمة برج يرتفع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٨</mn></mrow></math>\` قدم قذف جسم رأسياً إلى الأعلى حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi></mrow></math>\`. وفي اللحظة نفسها قذف جسم ثان من سطح الأرض للأعلى حسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi></mrow></math>\`.

السرعة مشتقة الإزاحة بالنسبة إلى الزمن. أقصى ارتفاع للأول حين تنعدم سرعته؛ وتسارعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٢</mn></mrow></math>\` يؤكد أن الموضع قمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٣٢</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٤٨</mn><mo>+</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></mrow></math>
\`\`\`

إكمال المربع يكتب التربيعي في صورة ثابت ناقص مربع مضروب في عدد موجب. لأن المربع غير سالب، تتحقق أكبر قيمة عندما يساوي صفرًا. نستخدمه لحساب أقصى ارتفاع الثاني.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١٦</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٣٢</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>+</mo><mfrac><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٦٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نساوي الارتفاعين ونأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` الموجبة للقذف لأعلى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٦٤</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></math>\`؛ سرعة الجسم الثاني الابتدائية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٤</mn><mrow><mfrac><mtext dir="rtl">قدم</mtext><mtext dir="rtl">ث</mtext></mfrac></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p076-r14
title: الكامل، الوحدة الأولى · الصورة، ص ٧٦ · البند ١٤
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المماس لمنحنى العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></math>\` يصنع مثلثاً متساوي الساقين مع المحورين في الربع الأول، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) نقطة التماس. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) مساحة هذا المثلث.
solution:
المعطى: المماس لمنحنى العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></math>\` يصنع مثلثاً متساوي الساقين مع المحورين في الربع الأول.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

المثلث قائم عند الأصل، وساقاه هما مقطعاه على المحورين. تساويهما يعني أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">ميل المماس</mtext><mo>=</mo><mfrac><mrow><mo>−</mo><mtext dir="rtl">المقطع الصادي</mtext></mrow><mtext dir="rtl">المقطع السيني</mtext></mfrac></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. في الاشتقاق الضمني نعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` اقترانًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ومنها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ص</mi></mfrac></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></mrow></math>
\`\`\`

نعوّض في الدائرة ونأخذ القيم الموجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

معادلة المماس تقطع المحورين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`؛ نحسب المساحة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>×</mo><mn dir="ltr">١٠</mn><mo>×</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`؛ المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥٠</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p076-r15
title: الكامل، الوحدة الأولى · الصورة، ص ٧٦ · البند ١٥
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
معتمداً على الشكل المجاور الذي يمثل المثلث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">م</mi><mi mathvariant="normal">ب</mi></mrow></math>\`، الذي ضلعه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\` يمس منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ج</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، جد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` التي تجعل مساحته تساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\` وحدة مربعة.

![الرسم الأصلي لمنحنى ق والمماس عند (١،ق(١))، والمثلث بين المماس ومحوري الإحداثيات.](assets/lessons/curriculum-evidence/c54a95b4d2b91a5469ae.webp)
solution:
![الرسم الأصلي لمنحنى ق والمماس عند (١،ق(١))، والمثلث بين المماس ومحوري الإحداثيات.](assets/lessons/curriculum-evidence/c54a95b4d2b91a5469ae.webp)

ميل المماس هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند نقطة التماس. مشتقة ثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` على مقدار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mi mathvariant="normal">ج</mi><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فتكون مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">ج</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">ج</mi></mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`؛ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` نحسب الميل والقيمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mtext dir="rtl">ج</mtext><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mtext dir="rtl">ج</mtext><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



نستخدم النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mfrac><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` والميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">ج</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>−</mo><mfrac><mtext dir="rtl">ج</mtext><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mtext dir="rtl">ج</mtext><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo>−</mo><mfrac><mtext dir="rtl">ج</mtext><mn dir="ltr">٤</mn></mfrac><mtext dir="rtl">س</mtext><mo>+</mo><mfrac><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">ج</mtext></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



حسب الرسم يقع المثلث في الربع الأول؛ لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. المقطع الصادي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ج</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`. وللمقطع السيني نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mo>−</mo><mfrac><mtext dir="rtl">ج</mtext><mn dir="ltr">٤</mn></mfrac><mtext dir="rtl">س</mtext><mo>+</mo><mfrac><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">ج</mtext></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مساحة المثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">نصف القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`. قاعدته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ج</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mfrac><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">ج</mtext></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٩</mn><mtext dir="rtl">ج</mtext></mrow><mn dir="ltr">٨</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وتحقق الإشارة الموجبة في الرسم.
:::


:::exam-question
id: math-kamel-u1-p076-r16
title: الكامل، الوحدة الأولى · الصورة، ص ٧٦ · البند ١٦
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد نقطة تعامد المنحنيين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، ثم جد معادلة المماس للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندها.
solution:
تعامد منحنيين يعني تعامد مماسيهما عند نقطة تقاطعهما. المشتقة تعطي ميل المماس، وحاصل ضرب الميلين المتعامدين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.

مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">ع</mi></msqrt></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ع</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`. نطبقها على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، ونطبق قاعدة القوة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow></msqrt></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mtext dir="rtl">س</mtext><msqrt><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow></msqrt></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نضرب في الجذر غير الصفري؛ ومن الناتج يجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow></msqrt></mrow></math>
\`\`\`



الطرفان غير سالبين، فنربعهما ثم ننقل الحدود إلى طرف واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` لأنها لا تحقق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، فيبقى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. عندها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فتتحقق نقطة التقاطع أيضًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



المماس يمر بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` وميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo>−</mo><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p077-r18
title: الكامل، الوحدة الأولى · الصورة، ص ٧٧ · البند ١٨
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة العمودي على المماس للعلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤٣</mn></mrow></math>\` عند نقطة تقاطع منحناها مع المستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. ميلا المماس والعمودي عليه متعاكسا المقلوب عندما يكون كلاهما معرفًا؛ نضربهما فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

من المستقيم المعطى يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. نعوض ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ه</mi></math>\` في المقدار المكعب، ثم نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><mn dir="ltr">٧</mn><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤٣</mn></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\` ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٧</mn><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٧</mn><mspace width="1em"/><mo>⟹</mo><mspace width="1em"/><mtext dir="rtl">س</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



في الاشتقاق الضمني نعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` اقترانًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ بالسلسلة نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فيصبح المعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>×</mo><mrow><msup><mn mathvariant="normal">٣</mn><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٧</mn><mo>(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">صَ</mi><mo>)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٣</mn><mo>+</mo><mn dir="ltr">٦٠</mn><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢٣</mn></mrow><mrow><mn dir="ltr">٦٠</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

ميل العمودي هو المقلوب السالب؛ نكتب معادلته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">٦٠</mn></mrow><mrow><mn dir="ltr">٢٣</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٦٠</mn></mrow><mrow><mn dir="ltr">٢٣</mn></mrow></mfrac><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١٠٦</mn></mrow><mrow><mn dir="ltr">٢٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٦٠</mn><mn dir="ltr">٢٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mfrac><mn dir="ltr">١٠٦</mn><mn dir="ltr">٢٣</mn></mfrac></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p077-r21
title: الكامل، الوحدة الأولى · الصورة، ص ٧٧ · البند ٢١
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم رأسياً لأعلى من قمة برج حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`. جد أقصى ارتفاع له عن سطح الأرض علماً بأن الجسم كان على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٠٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\` من سطح الأرض بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٧</mn></mrow></mrow><mi mathvariant="normal">ث</mi></mrow></math>\` وهو نازل.
solution:
المعطى: قذف جسم رأسياً لأعلى من قمة برج حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`.

السرعة اللحظية هي مشتقة الإزاحة بالنسبة إلى الزمن، والتسارع مشتقة السرعة. إذا قيس الارتفاع من الأرض نختار الاتجاه الأعلى موجبًا؛ السرعة السالبة تعني حركة إلى أسفل.

نحسب الإزاحة بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` ثوان؛ ارتفاع البرج زائد الإزاحة يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠٠</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٧</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٢١٠</mn><mo>−</mo><mn dir="ltr">٢٤٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٥</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٠</mn></mrow></msub><mo>=</mo><mn dir="ltr">١٠٠</mn><mo>+</mo><mn dir="ltr">٣٥</mn><mo>=</mo><mn dir="ltr">١٣٥</mn></mrow></mrow></math>
\`\`\`

السرعة مشتقة الإزاحة، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`. أقصى إزاحة لأعلى حين تصبح السرعة صفرًا؛ والتسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\` يؤكد أنها قمة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></mrow></math>
\`\`\`

نجمع ارتفاع البرج والإزاحة لأعلى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mo>=</mo><mn dir="ltr">١٣٥</mn><mo>+</mo><mn dir="ltr">٤٥</mn><mo>=</mo><mn dir="ltr">١٨٠</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p077-r22
title: الكامل، الوحدة الأولى · الصورة، ص ٧٧ · البند ٢٢
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من قمة برج قذف جسم رأسياً لأعلى حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٥</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`. كان الجسم على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\` من سطح الأرض بعد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\` ثانية. جد سرعة ارتطام الجسم بسطح الأرض.
solution:
المعطى: من قمة برج قذف جسم رأسياً لأعلى حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٥</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`. كان الجسم على ارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\` من سطح الأرض بعد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\` ثانية.

بعد ثانيتين الإزاحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`؛ إذن ارتفاع البرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ف</mi><mo>(</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٠</mn></mrow></msub><mo>=</mo><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></mrow></math>
\`\`\`

عند الأرض نجعل الارتفاع صفرًا. نقسم المعادلة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ثم نحللها إلى عاملين، ونأخذ الزمن الموجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥٠</mn><mo>+</mo><mn dir="ltr">١٥</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></mrow></math>
\`\`\`

نختار الأعلى موجبًا؛ السرعة مشتقة الإزاحة فتساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١٥</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`. نعوض بزمن الارتطام.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١٥</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>×</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٥</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٣٥</mn><mi mathvariant="normal">م</mi></mrow></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`؛ مقدار السرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣٥</mn><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p077-r23
title: الكامل، الوحدة الأولى · الصورة، ص ٧٧ · البند ٢٣
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من قمة برج يرتفع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\` أطلق جسم إلى الأعلى حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، وفي اللحظة نفسها من سطح الأرض قذف جسم رأسياً لأعلى حسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`. جد الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` عندما يكون لهما أقصى ارتفاع نفسه من سطح الأرض.
solution:
المعطى: من قمة برج يرتفع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\` أطلق جسم إلى الأعلى حسب العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، وفي اللحظة نفسها من سطح الأرض قذف جسم رأسياً لأعلى حسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`.

السرعة مشتقة الإزاحة، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`. يبلغ الأول قمته حين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ والتسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\` يؤكد أنها قيمة عظمى. نضيف الإزاحة لارتفاع البرج.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٦٠</mn><mo>+</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></mrow></math>
\`\`\`

بإكمال المربع نكتب الارتفاع في صورة ثابت ناقص مربع مضروب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`؛ لأن المربع غير سالب، يكون الثابت هو أقصى ارتفاع عندما يساوي المربع صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">ف</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mrow><mo>=</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">١٠</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>+</mo><mfrac><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢٠</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نساوي أقصى الارتفاعين ونأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` موجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢٠</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p077-r24
title: الكامل، الوحدة الأولى · الصورة، ص ٧٧ · البند ٢٤
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المثلث الواقع في الربع الأول والمحصور بين المحورين الإحداثيين والمماس للعلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران.

نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><mn dir="ltr">٥</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></mrow></math>\`؛ قاعدة القوة تضرب في الأس ثم تنقصه واحدًا، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٥</mn></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥</mn></mfrac></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٢٥</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></mfrac></mrow><mo>=</mo><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></mfrac></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٥</mn></mfrac></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٥</mn><mo>)</mo><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

المماس يمر بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` فيقطع محور الصادات عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow><mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نحسب نصف حاصل ضرب تقاطعيه الموجبين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>×</mo><mn dir="ltr">٥</mn><mo>×</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` وحدات مربعة.
:::


:::exam-question
id: math-kamel-u1-p077-r25
title: الكامل، الوحدة الأولى · الصورة، ص ٧٧ · البند ٢٥
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المماس المرسوم لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يصنع زاوية مقدارها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\` مع الاتجاه الموجب لمحور السينات، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، جد معادلة المماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
من نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` نعرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. ميل المماس هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

المطلوب مماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. نبدأ بقيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` لتحديد نقطة التماس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نسمي البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. مشتقته بقاعدة السلسلة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">مشتقة المكعب</mtext></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mtext dir="rtl">المدخل</mtext></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\` مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mrow><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="false">]</mo></mrow><mn dir="ltr">٢</mn></msup><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



مشتقة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. نطبق قاعدة القسمة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow><mo>−</mo><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٨</mn><mo>−</mo><mn dir="ltr">٩</mn></mrow><mn dir="ltr">٩</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



إذن نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` والميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p078-r26
title: الكامل، الوحدة الأولى · الصورة، ص ٧٨ · البند ٢٦
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

نحتاج مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ومشتقتها الثانية؛ مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`، ونستخدم قاعدة القوة: نضرب في الأس ثم ننقصه واحدًا. مشتقتها الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`، فتساوي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٣</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٨</mn></mfrac></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ً</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نُعوّض كل ظهور ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالقيمة المطلوبة في القاعدة السابقة؛



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><msqrt><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow></msqrt></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ثم نحسبها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٧</mn></mrow><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><msup><mrow><mo>(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

قاعدة السلسلة تضرب مشتقة الخارج في مشتقة المدخل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">َ</mi><mo>)</mo><mi mathvariant="normal">َ</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">ً</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>×</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٨</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u1-p078-r27
title: الكامل، الوحدة الأولى · الصورة، ص ٧٨ · البند ٢٧
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقترانان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلين للاشتقاق بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>×</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msqrt><mrow><mi mathvariant="normal">أ</mi></mrow></msqrt></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msqrt><mrow><mi mathvariant="normal">أ</mi></mrow></msqrt></mrow></math>\`، فجد معادلة المماس عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><msup><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>=</mo><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">أ</mi></msqrt></mrow></mrow></mrow></math>\` ومشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">أ</mi></msqrt></mrow></math>\`. المطلوب معادلة مماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\`.

 وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">أ</mi></msqrt></math>\` في المعطيات الحقيقية ومع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` يقتضي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ لذا القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` وعلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mi mathvariant="normal">أ</mi></msqrt></math>\` جائزة.

نحتاج قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لتحديد نقطة التماس، ثم مشتقتها لتحديد الميل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">أ</mi></msqrt><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mtext> </mtext><mi mathvariant="normal">ل</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



نشتق العلاقة لأنها صحيحة بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ثابت، فمشتقته صفر. نستخدم قاعدة الضرب، ثم السلسلة لاشتقاق مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">[</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ل</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نعوض قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mtext> </mtext><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">أ</mi></msqrt><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msqrt><mi mathvariant="normal">أ</mi></msqrt><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mtext> </mtext><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mtext> </mtext><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



المشتقة هي ميل المماس. نقطة التماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`، فنستخدم فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



معادلة المماس: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p078-r30
title: الكامل، الوحدة الأولى · الصورة، ص ٧٨ · البند ٣٠
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mtable columnalign="right right" columnspacing="1em"><mtr><mtd><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٩</mn></mrow></mtd></mtr><mtr><mtd><mrow><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢٧</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٩</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٩</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` موجودة، فما قيمة كل من الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
وجود المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` يتطلب الاتصال وتساوي المشتقتين من الجهتين.

قاعدة السلسلة تشتق المربع ثم تضرب في مشتقة المدخل:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><mrow><mo stretchy="true" fence="true">[</mo><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo stretchy="true" fence="true">]</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><msqrt><mi mathvariant="normal">س</mi></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow><msqrt><mi mathvariant="normal">س</mi></msqrt></mfrac></mrow></math>\`. ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mn dir="ltr">٢٧</mn></mfrac><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢٧</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>+</mo><mfrac><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٨</mn><mn dir="ltr">٢٧</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



الاتصال يساوي قيمة الفرعين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><msup><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mfrac><mn dir="ltr">٨١</mn><mn dir="ltr">٢٧</mn></mfrac><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p078-r31
title: الكامل، الوحدة الأولى · الصورة، ص ٧٨ · البند ٣١
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة الشكل الرباعي الناتج من تقاطع المماس والعمودي على المماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\` عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` ومحوري السينات والصادات الموجبين.

![الرسم الأصلي للمماس والعمودي عند (١،٥)، مع الشكل الرباعي المظلل في الربع الأول ومحوري الإحداثيات.](assets/lessons/curriculum-evidence/2111d5fc40f8f7039908.webp)
solution:
![الرسم الأصلي للمماس والعمودي عند (١،٥)، مع الشكل الرباعي المظلل في الربع الأول ومحوري الإحداثيات.](assets/lessons/curriculum-evidence/2111d5fc40f8f7039908.webp)

المماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` ميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فيكون ميل المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وميل العمودي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\` لأن حاصل ضرب الميلين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo>−</mo><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



المماس يقطع الصادات عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`. العمودي يقطع السينات عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`؛ ذلك لأن وضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.

نصل الأصل بنقطة التماس لتقسيم الرباعي إلى مثلثين. الأول قاعدته على الصادات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وارتفاعه الأفقي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، والثاني قاعدته على السينات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\` وارتفاعه الرأسي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mtext dir="rtl">م</mtext><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mtext dir="rtl">م</mtext><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٥٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">المساحة</mtext><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٥٥</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥٨</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢٩</mn></mrow></math>
\`\`\`



المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٩</mn></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u1-p079-r36
title: الكامل، الوحدة الأولى · الصورة، ص ٧٩ · البند ٣٦
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msqrt><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">قا</mtext><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true" fence="true">]</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">[</mo></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msqrt><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">قا</mtext><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true" fence="true">]</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">[</mo></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

نستعمل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`؛ جذر المربع قيمة مطلقة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mo>=</mo><msqrt><mrow><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow><mrow><mo>=</mo><mo>|</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>|</mo></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` سالبة في الربع الثاني؛ إذن القيمة المطلقة تساوي سالبها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>=</mo><mo>−</mo><mtext dir="rtl">ظا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">ق</mi><mo>∘</mo><mtext dir="rtl">هـ</mtext><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mo>−</mo><msup><mrow><mtext dir="rtl">قا</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>=</mo><mo>−</mo><mtext dir="rtl">هـ</mtext><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></math>
\`\`\`

نقارن المعامل مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p079-r37
title: الكامل، الوحدة الأولى · الصورة، ص ٧٩ · البند ٣٧
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\` يمس منحنى العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>،</mo><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` الواقعة على كليهما، جد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: المستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\` يمس منحنى العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>،</mo><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` الواقعة على كليهما.

ميل المستقيم ثلث؛ نشتق العلاقة ونساوي ميل المماس ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ه</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">صَ</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><msup><mrow><mo>(</mo><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\` في معادلة المنحنى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>\`. نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` غير الصفرية فنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>=</mo><mfrac><mi mathvariant="normal">ع</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

نعوّض بنقطة التماس في المستقيم.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p079-r38
title: الكامل، الوحدة الأولى · الصورة، ص ٧٩ · البند ٣٨
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، وكان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` قابلاً للاشتقاق، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">ع</mi></mrow><mo>→</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ع</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mfrac></mrow></mrow></mrow></math>\`.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، وكان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` قابلاً للاشتقاق.

قاعدة لوبيتال مناسبة هنا بعد التحقق من الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`: نستبدل الكسر بكسر مشتقة البسط على مشتقة المقام، ثم نحسب النهاية. لا نستخدم قاعدة مشتقة القسمة في هذه الخطوة.

نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ليصبح مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ والتعويض يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mrow><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mrow><msup><mrow><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. نشتق العلاقة بقاعدة السلسلة: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\` مضروبة في مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

التعويض في النهاية يعطي صفرًا على صفر؛ نستخدم لوبيتال.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">ع</mi></mrow><mo>←</mo><mrow><mn dir="ltr">١</mn></mrow></mrow></munder><mrow><mfrac><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">ع</mi></mrow><mo>)</mo></mrow></mrow></mfrac></mrow></mrow></mrow><mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٣</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٦</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mn dir="ltr">٤٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٢</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p079-r39
title: الكامل، الوحدة الأولى · الصورة، ص ٧٩ · البند ٣٩
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقتراناً من الدرجة الثالثة، جد قاعدة الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`. ثم جد قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي تجعل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٨</mn><mi mathvariant="normal">س</mi></mrow></math>\`.
solution:
نكتب كثير الحدود التكعيبي بمعاملات مجهولة. قاعدة القوة تضرب المعامل في الأس ثم تنقصه واحدًا، ومشتقة الثابت صفر؛ نطبقها لاشتقاق كثير الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mtext dir="rtl">ب</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">جس</mtext><mo>+</mo><mtext dir="rtl">د</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">بس</mtext><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ونجمع الحدود المتشابهة؛ تطابق كثيرتي حدود يفرض تساوي معاملات كل قوة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">د</mtext><mo>−</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">د</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٧</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نحسب المشتقتين للمطلوب الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٨</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١٨</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



ننقل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨</mn><mi mathvariant="normal">س</mi></mrow></math>\` إلى الطرف الأيسر ونحلل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٦</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mtext dir="rtl"> أو س</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p079-r40
title: الكامل، الوحدة الأولى · الصورة، ص ٧٩ · البند ٤٠
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`، جد متوسط تغير \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mo>×</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، علماً بأن منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">١٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
المعطى: متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

متوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` وقيمتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يعطيان قيمتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">٤</mn><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نحسب قيمتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` ثم متوسط حاصل الضرب.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٤</mn></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>\`.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.

نطبق فرق قيم حاصل الضرب عند الطرفين، ثم نقسم على طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">١٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٤٣</mn><mo>−</mo><mn dir="ltr">٢٠</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٢٣</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٤١</mn></mrow></math>
\`\`\`



المتوسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤١</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p079-r41
title: الكامل، الوحدة الأولى · الصورة، ص ٧٩ · البند ٤١
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` غير موجود، علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فما قيمة كل من الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
المعطى: الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` غير موجود، علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

زاوية القيمة المطلقة تكون حين ينعدم داخلها؛ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">م</mi></mrow></mrow></math>
\`\`\`

نستخدم قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ونأخذ الإشارتين مرتبطتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mo>|</mo><mi mathvariant="normal">م</mi><mo>|</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">م</mi><mo>)</mo><mo>=</mo><mo>(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">م</mi><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p079-r43
title: الكامل، الوحدة الأولى · الصورة، ص ٧٩ · البند ٤٣
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`، جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`.

قاعدة القوة تضرب المعامل في الأس ثم تنقصه واحدًا؛ نطبقها ثلاث مرات. النتيجة ثابت غير صفري، فيكون أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` الناتج صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>)</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نساوي المعاملين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p080-r45
title: الكامل، الوحدة الأولى · الصورة، ص ٨٠ · البند ٤٥
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وكان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ل</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
solution:
نسمي بسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بالرمز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ومقامها بالرمز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`. نحسب قيمتيهما ومشتقتيهما عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` قبل تطبيق قاعدة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ب</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mtext dir="rtl">ل</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ل</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` حاصل ضرب، فمشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ل</mi></mrow><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



قاعدة القسمة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة البسط</mtext><mo>×</mo><mtext dir="rtl">المقام</mtext></mrow></math>\`، ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">البسط</mtext><mo>×</mo><mtext dir="rtl">مشتقة المقام</mtext></mrow></math>\`، على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow><mn dir="ltr">٦٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٢٠</mn><mo>=</mo><mn dir="ltr">٤٨</mn><mo>−</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٨</mn><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٢٠</mn><mo>=</mo><mn dir="ltr">٣٢</mn><mo>−</mo><mn dir="ltr">٨</mn><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٨٨</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p080-r47
title: الكامل، الوحدة الأولى · الصورة، ص ٨٠ · البند ٤٧
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\`، احسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow></mrow></math>\`.
solution:
المعطى: الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\`.

تعريف المشتقة الثانية هو نهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mi mathvariant="normal">س</mi></mfrac></math>\` عند الصفر. ونستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow><mi mathvariant="normal">ع</mi></mfrac><mo>→</mo><mn dir="ltr">١</mn></mrow></math>\` بالراديان؛ منها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">[</mo><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo stretchy="true" fence="true">]</mo></mrow></mrow></mrow><mo>→</mo><mn dir="ltr">٢</mn></mrow></math>\`. نفصل الكسر إلى هاتين النسبتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٥</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac><mfrac><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mi mathvariant="normal">س</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mfrac><mrow><mtext dir="rtl">جا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` عند الصفر يساوي سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`، ونسبة الجيب تقترب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac><mo>×</mo><mo>(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo>)</mo><mo>×</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p080-r50
title: الكامل، الوحدة الأولى · الصورة، ص ٨٠ · البند ٥٠
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقترانين قابلين للاشتقاق عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ل</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، جد قيمة مشتقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mo>∘</mo><mi mathvariant="normal">م</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`. المطلوب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">ل</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

قاعدة الضرب تشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` وتبقي المركب، ثم تبقي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` وتشتق المركب. وبالسلسلة نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></math>\` عند مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mtext dir="rtl">ل</mtext><mo stretchy="false">(</mo><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">سل</mtext><mo stretchy="false">(</mo><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo stretchy="false">)</mo><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يكون المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ لذلك نستعمل قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p080-r51
title: الكامل، الوحدة الأولى · الصورة، ص ٨٠ · البند ٥١
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi></mrow></msqrt><mo>+</mo><msqrt><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></msqrt></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`، يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mo>+</mo><msqrt><mrow><mn dir="ltr">٥</mn></mrow></msqrt></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></math>\` ثابت بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، فيلغى من فرق القيم. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` يكون الجذر الآخر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mn dir="ltr">٤</mn></msqrt><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></math>\` يقتضي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، ويجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">٣</mn></mrow></math>\` حتى يعرف المتوسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></msqrt><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٢</mn><mo>+</mo><msqrt><mn dir="ltr">٥</mn></msqrt></mrow></mfrac></mrow></math>
\`\`\`



نضرب في المرافق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ حاصل ضرب الفرق في المجموع يزيل الجذر من البسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></msqrt><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></msqrt><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></msqrt><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`



البسطان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، والمقامات موجبة؛ لذلك تتساوى المقامات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></msqrt><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><msqrt><mn dir="ltr">٥</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></msqrt><mo>=</mo><msqrt><mn dir="ltr">٥</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



القيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` تحقق وجود الجذور و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>≠</mo><mn dir="ltr">٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p081-r52
title: الكامل، الوحدة الأولى · الصورة، ص ٨١ · البند ٥٢
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` في الفترتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn></mrow></math>\` على الترتيب، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`؟
solution:
نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` لأنهما يحولان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، ويحيدان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نطرح الثانية كاملة من الأولى؛ طرح الحد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` يضيفه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نضرب كل متوسط معطى في طول فترته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` لاستعادة فرق القيم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٤٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٤٤</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٧٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦٠</mn><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u1-p081-r53
title: الكامل، الوحدة الأولى · الصورة، ص ٨١ · البند ٥٣
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">]</mo></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></math>\`، فما قيمة أو قيم الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
solution:
المعطى: متوسط تغير الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">]</mo></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></math>\`.

متوسط التغير هو تغير قيمة الاقتران لكل وحدة تغير في المدخل؛ لذلك نقسم فرق القيم على فرق المدخلين بالترتيب نفسه. طرفا الفترة يجب أن يكونا مختلفين.

نضرب المتوسط في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` لا تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>(</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ق</mi><mo>(</mo><mi mathvariant="normal">أ</mi><mo>)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نعوّض بقاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، فيلزم أن يكون مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` أقل من أكبر عدد صحيح له بمقدار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mo>[</mo><mi mathvariant="normal">أ</mi><mo>]</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

لكن أكبر عدد صحيح لا يزيد على العدد نفسه، والتعبير الناتج لا يقل عن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mo>[</mo><mi mathvariant="normal">أ</mi><mo>]</mo><mo>≥</mo><msup><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mo>=</mo><msup><mrow><mo>(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>≥</mo></mrow><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>&gt;</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

النتيجة: لا توجد قيمة حقيقية.
:::


:::exam-question
id: math-kamel-u1-p081-r54
title: الكامل، الوحدة الأولى · الصورة، ص ٨١ · البند ٥٤
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mo>⋯</mo><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢٠٠</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢٠٠</mn></mrow></msup></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mo>⋯</mo><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢٠٠</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢٠٠</mn></mrow></msup></mrow></math>\`.

قاعدة السلسلة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` مساوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`. وفي الطرف الآخر قاعدة القوة تضرب في الأس، فيختصر مع مقام كل معامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">قَ</mi><mo>(</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">⋯</mi><mo>+</mo><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">١٩٩</mn></mrow></msup></mrow></mrow></math>
\`\`\`

نعوّض بسالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ الحدود المئتان تتلاشى في أزواج.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">⋯</mi><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">قَ</mi><mo>(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.
:::


:::exam-question
id: math-kamel-u1-p081-r55
title: الكامل، الوحدة الأولى · الصورة، ص ٨١ · البند ٥٥
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`؟
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

المدخلان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` يعتمدان على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نستخدم السلسلة: مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">ع</mi></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow><mo>×</mo><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mrow><mi mathvariant="normal">لو</mi></mrow><mrow><mi mathvariant="normal">هـ</mi></mrow></msub></mrow><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow><mrow><mo>+</mo><mfrac><mrow><mtext dir="rtl">جتا</mtext><mo>(</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo>(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>)</mo></mrow><mo>)</mo></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mn dir="ltr">١</mn></mrow></math>\` صفرًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` صفر واحدًا؛ نساوي بالمعطى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p081-r56
title: الكامل، الوحدة الأولى · الصورة، ص ٨١ · البند ٥٦
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><msup><mtext dir="rtl">جتا</mtext><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mtext dir="rtl">جتا</mtext><mrow><mn dir="ltr">٢</mn></mrow></msup><mi mathvariant="normal">س</mi><mo>+</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة كل من الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`؟
solution:
المقام يقترب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`. حتى تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">النهاية</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` المنتهية، يجب أن يقترب البسط إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` أيضًا. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



بعد تعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`. نسمي البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. نستخدم لوبيتال باشتقاق الطرفين كلًا على حدة؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\`، مع القوة والسلسلة للقوى المركبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ب</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mtext dir="rtl">ن</mtext><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mrow><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mtext dir="rtl">س</mtext><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` ما زالت النسبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`؛ نشتق مرة ثانية بقاعدة الضرب والسلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ب</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mrow><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup><mtext dir="rtl">س</mtext><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>−</mo><mtext dir="rtl">ن</mtext><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mtext dir="rtl">ن</mtext></msup><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mtext dir="rtl">س</mtext><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٠</mn></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؛ مشتقة المقام الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٠</mn><mo>−</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">ن</mtext></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">ن</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ن</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p081-r57
title: الكامل، الوحدة الأولى · الصورة، ص ٨١ · البند ٥٧
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد قيمة الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` التي تجعل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
قاعدة لوبيتال مناسبة هنا بعد التحقق من الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`: نستبدل الكسر بكسر مشتقة البسط على مشتقة المقام، ثم نحسب النهاية. لا نستخدم قاعدة مشتقة القسمة في هذه الخطوة.

بما أن نهاية التعبير الأصلي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، فضربه في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` يبقي النهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`. نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">ع</mi></mrow><mi mathvariant="normal">ع</mi></mfrac><mo>→</mo><mn dir="ltr">١</mn></mrow></math>\` بالراديان، ومنها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">س</mi></mfrac><mo>→</mo><mn dir="ltr">٢</mn></mrow></math>\`، أما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` فيقترب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>←</mo><mrow><mn dir="ltr">٠</mn></mrow></mrow></munder><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>)</mo></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac><mo>+</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">س</mi><mtext dir="rtl">جا</mtext><mo>(</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>)</mo></mrow></mrow></mrow><mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نظهر حساب النهاية الباقية دون القفز بعد تكرار لوبيتال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">٠</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٨</mn><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`



بعد هذه المرحلة لا تزال الصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٠</mn><mn dir="ltr">٠</mn></mfrac></math>\`، فنشتق مرة ثالثة. نستخدم مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٤</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\` ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. مشتقة البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٨</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mrow><mn dir="ltr">٣٢</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">١٦</mn><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، فتساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\` عند الصفر. ومشتقة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



أما نسبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` فنهايتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؛ نساوي مجموع النهايتين بالصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p081-r58
title: الكامل، الوحدة الأولى · الصورة، ص ٨١ · البند ٥٨
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup><mo>+</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>≠</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فجد معادلة المماس لمنحنى الاقتران عند النقطة التي إحداثيها السيني يساوي صفراً.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup><mo>+</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>≠</mo><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

المشتقة عند نقطة تساوي ميل المماس هناك؛ لذلك نستخدمها لربط معطيات المستقيم بالاقتران. كتابة معادلة المستقيم تحتاج نقطة وميلًا: فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mtext dir="rtl">الميل</mtext><mo>×</mo><mrow><mtext dir="rtl">فرق</mtext><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.

الحدان من القوة الرابعة متساويان؛ نقسم مجموعهما على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mrow><mo>(</mo><mi mathvariant="normal">ص</mi><mo>−</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>)</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mrow><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>−</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>=</mo><mo>±</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` يشترط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` موجبًا، فيلزم الفرع الزائد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">صَ</mi><mo>(</mo><mn dir="ltr">٠</mn><mo>)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نكتب معادلة المماس بالنقطة والميل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p083-r67
title: الكامل، الوحدة الأولى · الصورة، ص ٨٣ · البند ٦٧
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقترانان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mo>∘</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٢٥</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد قيمة الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`، علماً بأن الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` متصل على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">]</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">[</mo></mrow></math>\`.
solution:
المعطى: الاقترانان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mo>∘</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo stretchy="false">′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٢٥</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>→</mo><mrow><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></munder><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

من النهاية الأولى وقابلية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` للاشتقاق عند ربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mtext dir="rtl">ظا</mtext><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

قاعدة السلسلة تضرب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` عند المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\` بقاعدة المقلوب، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\` لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ظا</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`. نطبق عند ربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>(</mo><mtext dir="rtl">هـ</mtext><mo>∘</mo><mi mathvariant="normal">ق</mi><mo>)</mo><mi mathvariant="normal">َ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mrow><msup><mrow><mo>(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo>+</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mi mathvariant="normal">قَ</mi></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mo>(</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نعوّض بالقيمة المعطاة ونحل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٢٥</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٢٥</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u1-p083-r68
title: الكامل، الوحدة الأولى · الصورة، ص ٨٣ · البند ٦٨
question: أسئلة تفوق عن الوحدة الأولى
reference: السؤال، الصورة، · المفتاح / الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mroot><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
المعطى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mroot><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot></mrow></math>\`.

الاقتران المركب يضع ناتج اقتران داخل اقتران آخر. نشتق الخارجي عند المدخل الداخلي، ثم نضرب في مشتقة الداخلي؛ لهذا يظهر عامل إضافي في المشتقة.

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ نعوّض في العلاقة ونأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` الموجبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mroot><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>→</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

في الاشتقاق الضمني نعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` اقترانًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. بالضرب والسلسلة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ص</mi></mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. نجمع حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mo>′</mo></msup></math>\` ونقسم على معاملها، ثم نحسب مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">صَ</mi></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">ص</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><mrow><mn dir="ltr">٣</mn><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

نضرب المشتقتين بقاعدة السلسلة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>×</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac></mrow></mrow></math>
\`\`\`

النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></mfrac></math>\`.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "قواعد الاشتقاق",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة قواعد الاشتقاق من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "98 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
