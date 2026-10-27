import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p077-ex1
title: الكتاب، ص ٧٥ · مثال ١
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٥، مثال ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` باستخدام طريقة النظير الضربي.
solution:
نرتب المعادلتين بالمتغيرين نفسيهما، ثم نمثل المعاملات في مصفوفة والثوابت في عمود. نضرب من اليسار بنظير مصفوفة المعاملات إذا كان محددها غير صفري.

نرتب معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، والثوابت في عمود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

محدد المصفوفة هو حاصل ضرب القطر الأول ناقص الثاني؛ وهو غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نبدّل مدخلتي القطر، ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نضرب النظير في عمود الثوابت لإيجاد المجهولين.


نحسب ضرب كل صف في عمود الثوابت فعليًا، ثم نبسط المعامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p077-discuss
title: الكتاب، ص ٧٥ · فكّر وناقش
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٥، فكّر وناقش
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ماذا يحدث للإجابة إذا تم تغيير ترتيب المعادلتين هكذا: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`؟
solution:
تبديل ترتيب المعادلتين يبقي الشرطين نفسيهما، لذلك لا يغير مجموعة الحل.

لنحسب الحل من المعادلتين المعروضتين، و


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نطرح المعادلة الثانية من الأولى؛ فيُحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نعوض في المعادلة الثانية:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


إذن **\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`**، بصرف النظر عن ترتيب عرض المعادلتين.

**المصدر:** صفحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧٤</mn></math>\` من الكتاب.
:::


:::exam-question
id: math-book-p078-ex2
title: الكتاب، ص ٧٦ · مثال ٢
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٦، مثال ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
باستخدام طريقة كريمر حل النظام الآتي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p078-activity
title: الكتاب، ص ٧٦ · نشاط
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٦، نشاط
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قامت حنين بحل نظام من معادلتين خطيتين بالمتغيرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، ووجدت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٥</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">١</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. فما مصفوفة المعاملات، وقيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؟
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.


في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` يبقى عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، وفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` يبقى عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نجمع العمودين الأصليين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نحسب محدد المعاملات والمحددين البديلين بضرب القطرين وطرح حاصلَي الضرب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`



نقسم كل محدد بديل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` وفق قاعدة كريمر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p078-exercise-1-a
title: الكتاب، ص ٧٦ · تمرين-١-أ
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٦، تمرين-١-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` باستخدام طريقة النظير الضربي.
solution:
نرتب المعادلتين بالمتغيرين نفسيهما، ثم نمثل المعاملات في مصفوفة والثوابت في عمود. نضرب من اليسار بنظير مصفوفة المعاملات إذا كان محددها غير صفري.

نرتب معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، والثوابت في عمود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

محدد المصفوفة هو حاصل ضرب القطر الأول ناقص الثاني؛ وهو غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نبدّل مدخلتي القطر، ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نضرب النظير في عمود الثوابت لإيجاد المجهولين.


نحسب ضرب كل صف في عمود الثوابت فعليًا، ثم نبسط المعامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p078-exercise-1-b
title: الكتاب، ص ٧٦ · تمرين-١-ب
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٦، تمرين-١-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>\` باستخدام طريقة النظير الضربي.
solution:
نرتب المعادلتين بالمتغيرين نفسيهما، ثم نمثل المعاملات في مصفوفة والثوابت في عمود. نضرب من اليسار بنظير مصفوفة المعاملات إذا كان محددها غير صفري.

نرتب معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، والثوابت في عمود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

محدد المصفوفة هو حاصل ضرب القطر الأول ناقص الثاني؛ وهو غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١٠</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`

نبدّل مدخلتي القطر، ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٩</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٩</mn></mfrac><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نضرب النظير في عمود الثوابت لإيجاد المجهولين.


نحسب ضرب كل صف في عمود الثوابت فعليًا، ثم نبسط المعامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p078-exercise-2-a
title: الكتاب، ص ٧٦ · تمرين-٢-أ
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٦، تمرين-٢-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` باستخدام طريقة كريمر.
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p078-exercise-2-b
title: الكتاب، ص ٧٦ · تمرين-٢-ب
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٦، تمرين-٢-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` باستخدام طريقة كريمر.
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p078-exercise-3
title: الكتاب، ص ٧٦ · تمرين-٣
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٦، تمرين-٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل نظام من معادلتين خطيتين بالمتغيرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بطريقة كريمر، وجد أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mn dir="ltr">١</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٥</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mn dir="ltr">١</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. فجد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` تستبدل العمود الأول بالثوابت، لذلك عمود الثوابت هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` ويبقى عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. عند إيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` نضع الثوابت مكان العمود الثاني.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p079-worksheet-6-a
title: الكتاب، ص ٧٧ · ورقة عمل-٦-أ
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٧، ورقة عمل-٦-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل المعادلة المصفوفية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mn dir="ltr">٢</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mi mathvariant="normal">س</mi></mtd></mtr><mtr><mtd><mi mathvariant="normal">ص</mi></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">١</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\` باستخدام النظير الضربي.
solution:
نرتب المعادلتين بالمتغيرين نفسيهما، ثم نمثل المعاملات في مصفوفة والثوابت في عمود. نضرب من اليسار بنظير مصفوفة المعاملات إذا كان محددها غير صفري.

نرتب معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، والثوابت في عمود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

محدد المصفوفة هو حاصل ضرب القطر الأول ناقص الثاني؛ وهو غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نبدّل مدخلتي القطر، ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>×</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نضرب النظير في عمود الثوابت لإيجاد المجهولين.


نحسب ضرب كل صف في عمود الثوابت فعليًا، ثم نبسط المعامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p079-worksheet-6-b
title: الكتاب، ص ٧٧ · ورقة عمل-٦-ب
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٧، ورقة عمل-٦-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل المعادلة المصفوفية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mi mathvariant="normal">س</mi></mtd><mtd><mi mathvariant="normal">ص</mi></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٣</mn></mtd><mtd><mn dir="ltr">٠</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٠</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">١</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٠</mn></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd><mtd><mn dir="ltr">١١</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
الضرب المصفوفي يقرن كل صف بعمود، وتساوي المصفوفات يساوي كل المدخلات المتناظرة.

المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في معادلة صفية؛ نضرب من اليسار إلى اليمين مع حفظ الترتيب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">س</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">ص</mi></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نضرب الصف الناتج في المصفوفة الأخيرة، ثم نساوي المدخلات المناظرة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`


المعادلة الثانية تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؛ نعوض في الأولى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


نتحقق من المعادلة الثالثة؛ لأن المطلوب تحقيق كل مدخلات الصف.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٨</mn><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`


**الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>\`**.
:::


:::exam-question
id: math-book-p079-worksheet-7-a
title: الكتاب، ص ٧٧ · ورقة عمل-٧-أ
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٧، ورقة عمل-٧-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل المعادلتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` عددان حقيقيان لا يساويان صفرًا، بطريقة كريمر، كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٦</mn></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.
solution:
قاعدة كريمر تشترط محدد معاملات غير صفري، وتعطي المتغير من محدد استبدال عموده بالثوابت مقسومًا على محدد المعاملات.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` تستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالثوابت؛ عمودها الأول يبقى عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mi mathvariant="normal">ن</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ك</mi></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

تتساوى مصفوفتان عندما تتساوى رتبتهما وكل مدخلتين تقعان في الصف والعمود نفسيهما؛ لذلك يجب تحقيق المعادلات الناتجة جميعًا.

نساوي المدخلات المتناظرة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>،</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p079-worksheet-7-b
title: الكتاب، ص ٧٧ · ورقة عمل-٧-ب
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٧٧، ورقة عمل-٧-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل المعادلتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` غير صفريين، بطريقة كريمر، كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">٦</mn></mtd><mtd><mn dir="ltr">٥</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` تبقي عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. نرتب النظام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` ثم نطبق كريمر.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٦</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٦</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::mcq
id: math-book-p081-test-11
title: الكتاب، ص ٧٩ · اختبار-١١
kicker: الكتاب، ص ٧٩ · اختبار-١١
reference: الكتاب، ص ٧٩، اختبار-١١
question: استخدم أحمد طريقة كريمر لحل نظام من معادلتين خطيتين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، فوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">|</mo><mrow><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mo stretchy="true" fence="true">|</mo></mrow></mrow></mfrac></mrow></math>\`. فما قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` على الترتيب؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\`
explanation:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`؛ المعطى يحدد نسب المحددات البديلة إليه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">د</mi></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">د</mi></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`



قاعدة كريمر تعطي المجهولين بقسمة المحددين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-book-p082-test-5
title: الكتاب، ص ٨٠ · اختبار-٥
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكتاب، ص ٨٠، اختبار-٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
باستخدام طريقة كريمر، حل نظام المعادلات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ص</mi></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">١٣</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">١٣</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢٦</mn></mrow><mrow><mn dir="ltr">١٣</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٣</mn></mrow><mrow><mn dir="ltr">١٣</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p039-r1
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩ · البند-١
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩، البند-١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل نظام من معادلتين خطيتين بطريقة كريمر، وجد أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mn dir="ltr">٣</mn></msup><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mn dir="ltr">١٢</mn></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mn dir="ltr">٤</mn></mtd><mtd><mn dir="ltr">٤</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`، وأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mfrac><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>\`. جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف. محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.
محدد القوة يساوي قوة المحدد؛ نحسب محدد المصفوفة المعطاة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٦٤</mn><mo>⇒</mo><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

للمصفوفة ذات الصفين، ضربها بعدد يضرب محددها في مربعه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">د</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>⇒</mo><mi mathvariant="normal">د</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نستخدم نسبة كريمر لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p039-r2
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩ · البند-٢
question: سؤال من المصدر
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩ · البند-٢ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل نظام من معادلتين خطيتين بقاعدة كريمر، كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مصفوفة المعاملات و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` ناتجة من استبدال عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بعمود الثوابت. إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>\` و:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mo>+</mo><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



فأوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.
solution:
قاعدة كريمر تعطي المتغير بقسمة محدد المصفوفة البديلة على محدد المعاملات. القسمة جائزة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi></mrow></mfrac></mrow></math>
\`\`\`



ننقل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\` إلى الطرف الآخر؛ النقل يعادل طرحه من الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



نعوض في نسبة كريمر ونختزل المحدد غير الصفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u3-p039-r3
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩ · البند-٣
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩، البند-٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل المعادلتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` بطريقة كريمر، وجد أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd><mtd><mn dir="ltr">١</mn></mtd></mtr><mtr><mtd><mn dir="ltr">٢</mn></mtd><mtd><mn dir="ltr">٣</mn></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>\`. فما مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`؟
solution:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` تبقي معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` وتستبدل معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بالثوابت، فنقرأ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` تستبدل معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، وتبقي معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p039-r4
title: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩ · البند-٤
question: حل أنظمة المعادلات الخطية باستخدام المصفوفات
reference: الكامل، الوحدة ٣ · النسخة المصورة، ص ٣٩، البند-٤ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في نظام من معادلتين خطيتين بمتغيرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مصفوفة المعاملات و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` مصفوفة كريمر للمتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` و:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">م</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">م</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ℓ</mi></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi mathvariant="normal">ℓ</mi></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mo>=</mo><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



أوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.
solution:
في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` نستبدل العمود الأول بعمود الثوابت فقط؛ لذلك يبقى العمود الثاني كما هو في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ℓ</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` من مدخلاته، ثم نساويه بالمعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">م</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



لتحليل المقدار نبحث عن عددين حاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` ومجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`. لذلك نكتب المقدار حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">م</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">م</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">م</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



حاصل ضرب عاملين يساوي صفراً عندما يكون أحدهما صفراً.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn><mspace width="1em"/><mtext dir="rtl">أو</mtext><mspace width="1em"/><mi mathvariant="normal">م</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



شرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` يستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ومنه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` وغير صفري.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



بعد التعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم نطبق كريمر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">١</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٩</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`




:::


:::mcq
id: math-kamel-u3-p038-r1
title: الكامل، الوحدة الثالثة · ص ٣٧ · البند ١
kicker: الكامل، الوحدة الثالثة · ص ٣٧ · البند ١
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٨.زهـبن · الصورة ٣٨ من ٤٧ · الصفحة المطبوعة ٣٧ · البند ١ · ٢٠٢٢
question: عند حل نظام من معادلتين خطيتين بالمتغيرين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` بطريقة كريمر وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub><mo>⋅</mo><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، فما قيمة / قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨١</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٩</mn><mo>،</mo><mn dir="ltr">٩</mn></mrow></math>\`
explanation:
قاعدة كريمر: نحسب محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`. إذا كان غير صفري، نبدل عمود المتغير المطلوب بعمود الثوابت، ثم نقسم محدد المصفوفة الجديدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.
المحدد عدد يرتبط بالمصفوفة المربعة. للمصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` نضرب مدخلتي القطر الرئيسي، ثم نطرح حاصل ضرب المدخلتين الأخريين.

محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.
محدد حاصل الضرب يساوي حاصل ضرب المحددين؛ نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` لمحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">١٣</mn><mo stretchy="true">(</mo><mn dir="ltr">١١</mn><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">٥٠</mn><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٢٤٣</mn></mrow></mrow></math>
\`\`\`

بنسب كريمر يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>\` حاصل ضرب المحددين مقسومًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">د</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub></mrow><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٢٤٣</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٨١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

للمربع الموجب جذران؛ كلاهما غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo>±</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p038-r2
title: الكامل، الوحدة الثالثة · ص ٣٧ · البند ٢
kicker: الكامل، الوحدة الثالثة · ص ٣٧ · البند ٢
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٨.زهـبن · الصورة ٣٨ من ٤٧ · الصفحة المطبوعة ٣٧ · البند ٢ · ٢٠٢٣ دور أول
question: استخدم أحمد طريقة كريمر لحل نظام مكون من معادلتين خطيتين في المتغيرين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\`، فوجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mrow><mo stretchy="true">|</mo><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، علمًا بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، جد مجموعة حل النظام؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mo stretchy="true">}</mo></mrow></mrow></math>\`
explanation:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.

للمصفوفة ذات الصفين، محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` أمثال محددها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">د</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">د</mi></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نقسم المحددين البديلين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` غير الصفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p038-r3
title: الكامل، الوحدة الثالثة · ص ٣٧ · البند ٣
kicker: الكامل، الوحدة الثالثة · ص ٣٧ · البند ٣
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٨.زهـبن · الصورة ٣٨ من ٤٧ · الصفحة المطبوعة ٣٧ · البند ٣ · ٢٠٢٣ دور ثانٍ
question: عند استخدام قاعدة كريمر في حل نظام مكون من معادلتين خطيتين إحداهما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true">|</mo><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo stretchy="true">|</mo><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.

نقسم علاقة المحددات على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`، فتظهر نسبتا كريمر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>+</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">د</mi></mfrac></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

المعادلة الأصلية تجعل الطرف الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">د</mi></mfrac><mo>⇒</mo><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u3-p038-r4
title: الكامل، الوحدة الثالثة · ص ٣٧ · البند ٤
kicker: صياغة تعليمية معدّلة
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٨.زهـبن · الصورة ٣٨ من ٤٧ · الصفحة المطبوعة ٣٧ · البند ٤ · ٢٠٢٤ دور ثانٍ · صياغة تعليمية معدّلة
question: ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢٠</mn></mrow><mrow><mn dir="ltr">٢٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢٤</mn></mrow><mrow><mn dir="ltr">٢٠</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
محدد حاصل ضرب مصفوفتين يساوي حاصل ضرب محدديهما. نحسب محددي المصفوفتين المعطاتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mtext> </mtext><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi><mtext> </mtext><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٨</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٨</mn><mo>−</mo><mn dir="ltr">٣٦</mn><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



الحاصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٤</mn></math>\` غير صفري، لذلك كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">|</mo><mrow><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mo stretchy="true" fence="true">|</mo></mrow></math>\` غير صفري، وتصح القسمة والاختزال الآتيان.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi><mtext> </mtext><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi><mtext> </mtext><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٢</mn><mn dir="ltr">٢٤</mn></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">أ</mi><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



النسبة في الطرف الأيسر هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` وفق قاعدة كريمر.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`




hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

example:
عند حل نظام خطي بمتغيرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بطريقة كريمر، كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مصفوفة المعاملات و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`ᵧ مصفوفتَي استبدال العمود الموافق بعمود الثوابت، حيث:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></msub><msub><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٨</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mi mathvariant="normal">.</mi></mrow></math>
\`\`\`


:::


:::mcq
id: math-kamel-u3-p038-r5
title: الكامل، الوحدة الثالثة · ص ٣٧ · البند ٥
kicker: الكامل، الوحدة الثالثة · ص ٣٧ · البند ٥
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٣٨.زهـبن · الصورة ٣٨ من ٤٧ · الصفحة المطبوعة ٣٧ · البند ٥ · تجريبي ضواحي القدس ٢٠٢٤
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، إحدى المعادلتين الخطيتين بمتغيرين، وقد استخدم طريقة كريمر لحل النظام وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="true">|</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`، جد قيمة / قيم الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ولمحددي كريمر البديلين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow></mrow></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.
محدد النظير هو مقلوب المحدد؛ لذلك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mspace width="1em"/><mo>⇒</mo><mspace width="1em"/><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


هنا \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">د</mi><mo separator="true">,</mo><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo separator="true">,</mo><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`، و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">س</mi><mo separator="true">,</mo><mi mathvariant="normal">ص</mi></mrow></math>\` هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.
محدد مضاعف مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` يتضاعف بمربع المعامل، فيصبح المعطى:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub></mrow></math>
\`\`\`


نضرب الطرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` ثم نجمع محددي الطرف الأيسر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>+</mo><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`


نقسم على محدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ نسبتا كريمر هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


هذا الطرف نفسه يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\` في المعادلة المعطاة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


حاصل الضرب صفر إذا كان أحد العاملين صفرًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mspace width="1em"/><mtext dir="rtl">أو</mtext><mspace width="1em"/><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u3-p040-r1
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ١
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ١ · ٢٠١٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم طريقة جاوس لحل النظام: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ع</mi><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.
solution:
طريقة جاوس تمثل المعاملات والثوابت في مصفوفة ممتدة، ثم تحذف المجهولات بعمليات صفوف تحافظ على الحل: إضافة مضاعف صف إلى آخر أو تبديل صفين أو ضرب صف بعدد غير صفري. بعد الشكل المثلثي نعوض من الصف الأخير إلى الأول.
نرتب المعادلة الثانية لتصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>−</mo><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، والثالثة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ع</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`


نحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من الصفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` بإضافة مضاعف الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>←</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>−</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">١</mn></msub><mspace width="1em"/><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>←</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>+</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">١</mn></msub><mo>:</mo><mspace width="1em"/><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٦</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` من الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ نضربه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثم نضيف الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>←</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>+</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>:</mo><mspace width="1em"/><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نعوض من الأسفل إلى الأعلى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٥</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١٥</mn><mo>⇒</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>⇒</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p040-r2
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ٢
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ٢ · ٢٠١٩ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` باستخدام طريقة جاوس.
solution:
طريقة جاوس تمثل المعاملات والثوابت في مصفوفة ممتدة، ثم تحذف المجهولات بعمليات صفوف تحافظ على الحل: إضافة مضاعف صف إلى آخر أو تبديل صفين أو ضرب صف بعدد غير صفري. بعد الشكل المثلثي نعوض من الصف الأخير إلى الأول.
نكتب المصفوفة الممتدة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center" columnlines="none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`


نطرح الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` من الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لإلغاء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>←</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>−</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">١</mn></msub><mo>:</mo><mspace width="1em"/><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center" columnlines="none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


الصف الأخير يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؛ نعوض في الأول.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p040-r3
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ٣
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ٣ · ٢٠٢٠
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\` إحدى المعادلتين الخطيتين بمتغيرين، وعند استخدام طريقة كريمر للحل، وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٨</mn><mrow><mo stretchy="true">|</mo><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">|</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">|</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؟
solution:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` مربعة من الرتبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فإن ضرب كل مدخلاتها في العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يضرب محددها في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ن</mi></msup></math>\`، لأن العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` يظهر مرة من كل صف.

محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow></mrow></math>\`؛ نرتب المعطى ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>+</mo><mn dir="ltr">٨</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>+</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` ونستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">د</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p040-r4
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ٤
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ٤ · ٢٠٢٠ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم طريقة جاوس لحل نظام المعادلات الخطية التالية: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.
solution:
طريقة جاوس تمثل المعاملات والثوابت في مصفوفة ممتدة، ثم تحذف المجهولات بعمليات صفوف تحافظ على الحل: إضافة مضاعف صف إلى آخر أو تبديل صفين أو ضرب صف بعدد غير صفري. بعد الشكل المثلثي نعوض من الصف الأخير إلى الأول.
نبدأ بتبديل الصفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` لجعل معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` الأول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`


نضيف ضعفي الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى كل من الصفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>←</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>+</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">١</mn></msub><mspace width="1em"/><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>←</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>+</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">١</mn></msub><mo>:</mo><mspace width="1em"/><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` من الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` أمثاله ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` أمثال الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>←</mo><mn dir="ltr">٧</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>−</mo><mn dir="ltr">٣</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>:</mo><mspace width="1em"/><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٧</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٨</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نعوض من الأسفل إلى الأعلى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٨</mn><mo>⇒</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo>⇒</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢١</mn><mo>⇒</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p040-r5
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ٥
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ٥ · ٢٠٢٠ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل نظام يتكون من معادلتين خطيتين بالمتغيرين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` بطريقة كريمر وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، أوجد قيمتي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\`.
solution:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` تبقي عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` تبقي عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نعيد العمودين الأصليين لتكوين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` قبل حساب محددها.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p040-r6
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ٦
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ٦ · ٢٠٢١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام التالي من المعادلات الخطية بطريقة النظير الضربي: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٩</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.
solution:
نمثل النظام بمصفوفة المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` وعمود المجهولين، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ك</mi></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\`. إذا كان محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` غير صفري، نضرب من اليسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">أ</mi></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`.

نرتب معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، والثوابت في عمود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١٩</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

محدد المصفوفة هو حاصل ضرب القطر الأول ناقص الثاني؛ وهو غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نبدّل مدخلتي القطر، ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نضرب النظير في عمود الثوابت لإيجاد المجهولين.


نحسب ضرب كل صف في عمود الثوابت فعليًا، ثم نبسط المعامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٩</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٩</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p040-r7
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ٧
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ٧ · ٢٠٢١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل النظام التالي من المعادلات الخطية بطريقة كريمر: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، علمًا بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.





نحسب المحددات البديلة؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` يساوي الشرط المعطى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نقسم كل محدد بديل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p040-r8
title: الكامل، الوحدة الثالثة · ص ٣٩ · البند ٨
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤٠.زهـبن · الصورة ٤٠ من ٤٧ · الصفحة المطبوعة ٣٩ · البند ٨ · ٢٠٢١ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حل نظام المعادلات الآتي بطريقة النظير الضربي: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.
solution:
نمثل النظام بمصفوفة المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` وعمود المجهولين، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ك</mi></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\`. إذا كان محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` غير صفري، نضرب من اليسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`؛ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">أ</mi></mrow><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow><mi mathvariant="normal">ج</mi></mrow></mrow></math>\`.

نرتب معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في مصفوفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، والثوابت في عمود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٥</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

محدد المصفوفة هو حاصل ضرب القطر الأول ناقص الثاني؛ وهو غير صفري.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>|</mo><mi mathvariant="normal">أ</mi><mo>|</mo><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نبدّل مدخلتي القطر، ونغيّر إشارتي المدخلتين الأخريين، ثم نقسم على المحدد.

المعامل العددي يضرب كل مدخل في المصفوفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>×</mo><mn dir="ltr">٢</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">[</mo><mtable rowspacing="0.16em" columnalign="center center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mstyle></mtd></mtr></mtable><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mtable columnspacing="0.25em"><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`

نضرب النظير في عمود الثوابت لإيجاد المجهولين.


نحسب ضرب كل صف في عمود الثوابت فعليًا، ثم نبسط المعامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo><mo>=</mo><msup><mi mathvariant="normal">أ</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mi mathvariant="normal">ج</mi><mo>=</mo><mo stretchy="true">(</mo><mtable><mtr><mtd><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">)</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p041-r1
title: الكامل، الوحدة الثالثة · ص ٤٠ · البند ١
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤١.زهـبن · الصورة ٤١ من ٤٧ · الصفحة المطبوعة ٤٠ · البند ١ · ٢٠٢١ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل معادلتين خطيتين بالمتغيرين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` بطريقة كريمر وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>⋅</mo><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub><mo>⋅</mo><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢١</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢٨</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة المتغير \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi></mrow></math>\`؟
solution:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.

نحسب محددي حاصلَي الضرب باستخدام الفرق بين حاصلَي ضرب القطرين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">د</mi><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">١١</mn><mo stretchy="true">(</mo><mn dir="ltr">١٠</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٩٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">٢١</mn><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢٨</mn><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٩٨</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نقسم الثانية على الأولى فيُحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٩٨</mn></mrow><mn dir="ltr">٩٨</mn></mfrac><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p041-r2
title: الكامل، الوحدة الثالثة · ص ٤٠ · البند ٢
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤١.زهـبن · الصورة ٤١ من ٤٧ · الصفحة المطبوعة ٤٠ · البند ٢ · ٢٠٢١ الدورة الثالثة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل نظام من المعادلات الخطية بمتغيرين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\` بطريقة كريمر وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٦</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة المتغيرين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\`؟
solution:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` تبقي عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` تبقي عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نعيد العمودين الأصليين لتكوين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` قبل حساب محددها.

نرمز لمحدد المعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`، ونحسبه بضرب القطرين وطرح الثاني من الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نستبدل عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بالثوابت لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ثم عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٦</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٦</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٦</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p041-r3
title: الكامل، الوحدة الثالثة · ص ٤٠ · البند ٣
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤١.زهـبن · الصورة ٤١ من ٤٧ · الصفحة المطبوعة ٤٠ · البند ٣ · ٢٠٢٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم طريقة جاوس في حل النظام الآتي: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.
solution:
طريقة جاوس تمثل المعاملات والثوابت في مصفوفة ممتدة، ثم تحذف المجهولات بعمليات صفوف تحافظ على الحل: إضافة مضاعف صف إلى آخر أو تبديل صفين أو ضرب صف بعدد غير صفري. بعد الشكل المثلثي نعوض من الصف الأخير إلى الأول.
نرتب المعاملات والثوابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٢</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٣</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></math>
\`\`\`


نحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من الصفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>←</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>−</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">١</mn></msub><mspace width="1em"/><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>←</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>−</mo><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">١</mn></msub><mo>:</mo><mspace width="1em"/><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٣</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` من الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` أمثاله ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` أمثال الصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>←</mo><mn dir="ltr">٥</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٣</mn></msub><mo>−</mo><mn dir="ltr">٤</mn><msub><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msub><mo>:</mo><mspace width="1em"/><mrow><mo fence="true">(</mo><mtable rowspacing="0.16em" columnalign="center center center center" columnlines="none none solid" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">١</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٤</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٩</mn></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٥</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mn dir="ltr">٠</mn></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نعوض من الصف الأخير.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn><mo>⇒</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo>⇒</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٩</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u3-p041-r4
title: الكامل، الوحدة الثالثة · ص ٤٠ · البند ٤
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤١.زهـبن · الصورة ٤١ من ٤٧ · الصفحة المطبوعة ٤٠ · البند ٤ · ٢٠٢٢ دور ثانٍ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند استخدام طريقة النظير الضربي في حل نظام المعادلات الخطية التالي: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">ن</mi></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ك</mi></mrow></mtd><mtd><mrow><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>⋅</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">س</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">١٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فإذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فما قيم كل من \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>،</mo><mi mathvariant="normal">ك</mi></mrow></math>\`؟
solution:
الضرب المصفوفي المعروض يمثل المعادلتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`. نستخدم تساوي المدخلات لإيجاد الثابتين.

الجمع بين المعادلتين يحذف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`؛ نستخدم مجموع المعاملين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ك</mi><mo stretchy="true">)</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mo>⇒</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr></mtable></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نعوّض في علاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، ثم نرجع إلى المعادلتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>⇒</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p041-r5-1
title: الكامل، الوحدة الثالثة · ص ٤٠ · البند ٥-١
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤١.زهـبن · الصورة ٤١ من ٤٧ · الصفحة المطبوعة ٤٠ · البند ٥-١ · ٢٠٢٣ دور أول
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل النظام \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ن</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ل</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></mtd></mtr></mtable></mrow></mrow></math>\` بطريقة كريمر، وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub><mo>⋅</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ع</mi><mo>−</mo><mi mathvariant="normal">ن</mi><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow></math>\`.
solution:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.





المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ع</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">ل</mi></mrow></mrow></math>\` هو محدد المعاملات؛ نحسب المحددين البديلين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`



نوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></math>\` ثم نقسم وفق قاعدة كريمر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u3-p041-r5-2
title: الكامل، الوحدة الثالثة · ص ٤٠ · البند ٥-٢
question: حل أنظمة المعادلات باستخدام المصفوفات
reference: الكامل في الرياضيات توجيهي علمي (الوحدة الثالثة) ٢٠٢٥-٤١.زهـبن · الصورة ٤١ من ٤٧ · الصفحة المطبوعة ٤٠ · البند ٥-٢ · ٢٠٢٣ دور أول
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند حل النظام \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ن</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ل</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ع</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></mtd></mtr></mtable></mrow></mrow></math>\` بطريقة كريمر، وجد أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">ص</mi></mrow></msub><mo>⋅</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">أ</mi><mrow><mi mathvariant="normal">س</mi></mrow></msub><mo>=</mo><mrow><mo stretchy="true">[</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٢</mn></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٠</mn></mrow></mtd><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd></mtr></mtable><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mi mathvariant="normal">ع</mi><mo>−</mo><mi mathvariant="normal">ن</mi><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، اكتب نظام المعادلات المذكور في السؤال بعد إيجاد جميع الثوابت؟
solution:
قاعدة كريمر تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mrow><msub><mrow><mi mathvariant="normal">د</mi></mrow><mrow><mi mathvariant="normal">ص</mi></mrow></msub></mrow><mi mathvariant="normal">د</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` محدد المعاملات غير الصفري. نحصل على المصفوفة البديلة باستبدال عمود المتغير بعمود الثوابت.محدد حاصل ضرب مصفوفتين مربعتين من الرتبة نفسها يساوي حاصل ضرب محدديهما: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true" fence="true">|</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">|</mo></mrow><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`.

نحسب محدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\`، ومحدد حاصل الضرب؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` هو محدد المعاملات المعطى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></mtd></mtr><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>−</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نستخدم نسبتي كريمر لإيجاد المجهولين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><msub><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msub></math>\` تبقي عمود معاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، وتضع الثوابت مكان عمود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

باستخدام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، تحدد كل معادلة معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` فيها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtable columnalign="left" rowspacing="0.55em"><mtr><mtd><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ك</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ل</mi><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">ل</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`

نكتب النظام بعد تعويض الثوابت.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


هنا \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">س</mi><mo separator="true">,</mo><mi mathvariant="normal">ص</mi></mrow></math>\` يرمزان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` على الترتيب.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "حل أنظمة المعادلات الخطية باستخدام المصفوفات",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة حل أنظمة المعادلات الخطية باستخدام المصفوفات من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "19 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
