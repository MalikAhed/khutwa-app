import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `:::exam-question
id: math-book-p120-ex1
title: الكتاب، ص ١١٨ · مثال محلول
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=120)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ومحور السينات والمستقيمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

![المنطقة المحصورة بين المستقيم ص = س + ١ والمحور والمستقيمين س = ٢، س = ٣](assets/lessons/mathematics/source-crops/u45-book-p120-ex1-diagram.webp)
solution:


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` زائد واحد موجب بين اثنين وثلاثة، فيكون فوق المحور.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-book-p120-ex2
title: الكتاب، ص ١١٨ · مثال محلول
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٠](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=120)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\` ومحور السينات.

![المنطقة المحصورة بين منحنى ص = س تربيع − ٩ ومحور السينات](assets/lessons/mathematics/source-crops/u45-book-p120-ex2-diagram.webp)
solution:


نساوي الاقتران بالصفر لنجد تقاطعيه مع المحور.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

بين سالب ثلاثة وثلاثة يقع المنحنى أسفل المحور؛ نطرح الاقتران من الصفر ليصبح الارتفاع موجبًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع لتحديد الحدود:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="2em"/><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١٨</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٨</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-book-p121-ex3
title: الكتاب، ص ١١٩ · مثال محلول
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢١](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=121)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.

![المنطقة المشتركة بين منحنيي ص = ٨ − س تربيع وص = س تربيع](assets/lessons/mathematics/source-crops/u45-book-p121-ex3-diagram.webp)
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين لتحديد الحدين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٨</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`

الحلان سالب اثنين واثنان، والمنحنى الأول أعلى بينهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع لتحديد الحدود:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mspace width="1em"/><mo>⇒</mo><mspace width="1em"/><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mspace width="1em"/><mo>⇒</mo><mspace width="1em"/><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٨</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٨</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-book-p121-ex4
title: الكتاب، ص ١١٩ · مثال محلول
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢١](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=121)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنيي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.

![المنطقة بين منحنى القيمة المطلقة ومنحنى ص = ٢ − س تربيع](assets/lessons/mathematics/source-crops/u45-book-p121-ex4-diagram.webp)
solution:


في النصف الموجب تساوي القيمة المطلقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نوجد تقاطعها مع القطع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`

الجذر الموجب واحد؛ والمنطقة متناظرة حول محور الصادات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="2em"/><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء ونضاعفها بسبب التناظر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p122-ex5
title: الكتاب، ص ١٢٠ · مثال محلول
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٢](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=122)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن مساحة المنطقة المحصورة بين منحنيي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\` وحدة مربعة، فجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.

![المنطقة المحصورة بين القطع المكافئ ص = س تربيع والمستقيم الأفقي ص = ج](assets/lessons/mathematics/source-crops/u45-book-p122-ex5-diagram.webp)
solution:
![المنطقة الأصلية بين القطع والخط الأفقي](assets/lessons/mathematics/source-crops/u45-book-p122-ex5-diagram.webp)


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\` موجبة، فيلزم أن يكون المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>\` فوق رأس القطع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. التقاطعان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>±</mo><msqrt><mi mathvariant="normal">ج</mi></msqrt></mrow></mrow></math>\`، والمنطقة متناظرة حول محور الصادات.
المستقيم أعلى من القطع؛ نحسب نصف المساحة ثم نضاعفه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mo>=</mo><mn dir="ltr">٢</mn><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><msqrt><mi mathvariant="normal">ج</mi></msqrt></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نحسب الأصل ونعوض الحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mo>=</mo><mn dir="ltr">٢</mn><msubsup><mrow><mo fence="true">[</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><msqrt><mi mathvariant="normal">ج</mi></msqrt></msubsup><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">ج</mi><msqrt><mi mathvariant="normal">ج</mi></msqrt><mo>−</mo><mfrac><mrow><mi mathvariant="normal">ج</mi><msqrt><mi mathvariant="normal">ج</mi></msqrt></mrow><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


نبسط ونضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mi mathvariant="normal">ج</mi><msqrt><mi mathvariant="normal">ج</mi></msqrt><mspace width="2em"/><mi mathvariant="normal">ج</mi><msqrt><mi mathvariant="normal">ج</mi></msqrt><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`


نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><msup><mrow><mo>(</mo><mo>√</mo><mi mathvariant="normal">ج</mi><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، فيكون حاصل الضرب مكعب الجذر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msqrt><mi mathvariant="normal">ج</mi></msqrt><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٢٧</mn><mspace width="2em"/><msqrt><mi mathvariant="normal">ج</mi></msqrt><mo>=</mo><mn dir="ltr">٣</mn><mspace width="2em"/><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p123-q1
title: الكتاب، ص ١٢١ · نشاط أو تمرين
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=123)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` ومحوري السينات والصادات، والواقعة في الربع الأول.
solution:


في الربع الأول جيب التمام غير سالب، ويصل المحور عند نصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mo>π</mo><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-book-p123-q2
title: الكتاب، ص ١٢١ · نشاط أو تمرين
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=123)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\` والمستقيم المار بالنقطتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، ومحور الصادات، والواقعة في الربع الأول.
solution:
لإيجاد المستقيم المار بالنقطتين، نحسب الميل: تغير الصادات مقسومًا على تغير السينات.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


مروره بالأصل يعني أن الحد الثابت صفر، فتكون معادلته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.




ميل المستقيم بين النقطتين اثنان ويمر بالأصل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نساوي المستقيم والقطع؛ الجذر في الربع الأول واحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="2em"/><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-book-p123-q3
title: الكتاب، ص ١٢١ · نشاط أو تمرين
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=123)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` ومحور السينات، والواقعة في الربع الثالث.
solution:


جذور الاقتران زائد وسالب واحد وزائد وسالب ثلاثة؛ الربع الثالث يختار السالبين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></mrow></math>
\`\`\`

بينهما المنحنى أسفل المحور؛ نكامل سالب الاقتران.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo>⇒</mo><mspace width="1em"/><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نوزع حاصل الضرب قبل التكامل:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msubsup><mo stretchy="false">(</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">١٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٥</mn></msup><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">١٠</mn><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٥</mn></msup><mn dir="ltr">٥</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">١٠</mn><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٨٨</mn><mn dir="ltr">١٥</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٧٢</mn><mn dir="ltr">٥</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٣٠٤</mn><mn dir="ltr">١٥</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-book-p123-q4
title: الكتاب، ص ١٢١ · نشاط أو تمرين
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=123)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب المساحة المحصورة بين منحنيات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
solution:


نساوي كل منحنيين لتحديد التقاطعات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>±</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>⇒</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



هذه القيم تحدد حدود المنطقة التي تشارك فيها المنحنيات الثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` يساوي أربعة هو الأعلى؛ الحد الأدنى هو القطع حتى صفر ثم المستقيم المائل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`

مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٢٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p123-worksheet2-q6
title: الكتاب، ص ١٢١ · نشاط أو تمرين
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=123)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>\` والمماس المرسوم له عند النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` ومحور السينات.
solution:

ميل المماس هو المشتقة عند نقطة التماس.  مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mn dir="ltr">٤</mn></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac></math>\`، فالميل عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
نكتب معادلة المماس من النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` وميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mspace width="2em"/><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


القطع يلتقي محور السينات عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، والمماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، ويلتقيان عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mrow><mo>=</mo><mfrac><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac></mrow><mo>≥</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`


من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` الحد الأدنى هو المحور، فنحسب المساحة تحت القطع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` نطرح المماس من القطع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup><mrow><mo fence="true">(</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نحسب الأصل وفرق قيمتيه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


نجمع المساحتين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></math>\` وحدة مربعة.
:::


:::exam-question
id: math-book-p126-unit-q11-a
title: الكتاب، ص ١٢٤ · اختبار الوحدة
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=126)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنيي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.
solution:


نساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` زائد اثنين بكل فرع، ونختار الجذر الذي يقع في مجاله.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نقسم الفترة عند نقطة تغير القاعدة أو الإشارة حتى نستخدم التعبير الصحيح في كل جزء. ثم نجمع تكاملي الجزأين؛ فالفترتان متجاورتان.

نقسم عند صفر لأن قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` تتغير هناك؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أعلى في الجزأين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>&gt;</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mspace width="2em"/><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p126-unit-q11-b
title: الكتاب، ص ١٢٤ · اختبار الوحدة
question: تطبيقات التكامل المحدود: المساحة
reference: [الكتاب، النسخة المصورة، ص ١٢٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=126)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنيي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`.
solution:


التقاطع يحدث حين يساوي الجيب نصفًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mfrac><mo>π</mo><mn dir="ltr">٦</mn></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>π</mo></mrow><mn dir="ltr">٦</mn></mfrac></mrow></mrow></math>
\`\`\`

نقسم الفترة عند نقطة تغير القاعدة أو الإشارة حتى نستخدم التعبير الصحيح في كل جزء. ثم نجمع تكاملي الجزأين؛ فالفترتان متجاورتان.

نقسم عند التقاطعين؛ المستقيم أعلى قرب الطرفين، ومنحنى الجيب أعلى بينهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mo>π</mo><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac></msubsup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo>−</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mi>π</mi></msubsup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mi>π</mi></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mrow><mo fence="true">(</mo><mi>π</mi><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mi>π</mi><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mi>π</mi><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mo>π</mo><mn dir="ltr">٦</mn></mfrac><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo>+</mo><mfrac><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>π</mo></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt><mo>+</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo>+</mo><mfrac><mo>π</mo><mn dir="ltr">٦</mn></mfrac><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mo>π</mo><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p063-r1
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٣ · البند ١ · متوسط
question: تطبيقات التكامل المحدود: المساحة
reference: [السؤال الأصلي](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r1-question.webp) · [الإجابة المطبوعة](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r1-key.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
solution:


مساواة المنحنيين تعطي صفرًا وزائد وسالب اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

المنطقة متناظرة؛ في النصف الموجب المستقيم أعلى من التكعيبي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٤</mn></mfrac></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mrow><mrow><mrow><mrow><mrow><mrow><mi mathvariant="normal">س</mi><mspace width="1em" /></mrow><mo>⇒</mo></mrow><mspace width="1em" /></mrow><mi mathvariant="normal">س</mi></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mrow><mn dir="ltr">٠</mn><mspace width="1em" /></mrow><mo>⇒</mo></mrow><mspace width="1em" /></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><mo separator="true">,</mo></mrow><mn dir="ltr">٠</mn></mrow><mo separator="true">,</mo></mrow><mn dir="ltr">٢</mn></mrow></mrow></mrow></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">١٦</mn></mfrac><mo>+</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mn dir="ltr">١٦</mn></mfrac><mo>+</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mn dir="ltr">١٦</mn></mfrac><mo>+</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




نجمع مساحات الأجزاء ونضاعفها بسبب التناظر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p063-r2
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٣ · البند ٢ · متوسط
question: تطبيقات التكامل المحدود: المساحة
reference: [السؤال الأصلي](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r2-question.webp) · [الإجابة المطبوعة](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r2-key.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`.
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين فنجد سالب واحد وواحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>
\`\`\`

بينهما واحد ناقص مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هو الأعلى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع لتحديد الحدود:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>⇒</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p063-r4
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٣ · البند ٤ · متوسط
question: تطبيقات التكامل المحدود: المساحة
reference: [السؤال الأصلي](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r4-question.webp) · [الإجابة المطبوعة](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r4-key.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب المساحة المحصورة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow></math>\` والمستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` ومحور الصادات، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` العدد النيبيري.
solution:


يتقاطع الأسّي مع المستقيم الأفقي عند واحد؛ محور الصادات يحدد الطرف الآخر صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>=</mo><mtext dir="rtl">هـ</mtext></mrow></math>
\`\`\`

مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></msup><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p063-r5
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٣ · البند ٥ · متوسط
question: تطبيقات التكامل المحدود: المساحة
reference: [السؤال الأصلي](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r5-question.webp) · [الإجابة المطبوعة](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r5-key.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة الواقعة في الربع الأول والمحصورة بين منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\` ومحور الصادات والمستقيمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`.

solution:
المعطى أن المنطقة في الربع الأول؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، حيث

نأخذ شرائح أفقية لأن حدّي الارتفاع معلومان:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mspace width="1em"/><mo>⟹</mo><mspace width="1em"/><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ص</mi></msqrt></mrow></math>
\`\`\`


نختار الجذر الموجب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`.

محور الصادات هو الحد الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، والمنحنى هو الحد الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ص</mi></msqrt></mrow></mrow></math>\`، في الربع الأول.

عرض الشريحة هو الحد الأيمن ناقص الأيسر:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">العرض</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ص</mi></msqrt><mo>−</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


التكامل يجمع مساحات الشرائح من الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></msubsup><mn dir="ltr">٢</mn><msqrt><mi mathvariant="normal">ص</mi></msqrt><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow></math>
\`\`\`


نكتب الجذر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\`، ونزيد الأس واحداً ونقسم عليه:


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">ص</mi><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٩</mn></msubsup></mrow></math>
\`\`\`


القوة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\` تعني مكعب الجذر التربيعي:


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mn dir="ltr">٩</mn><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo>=</mo><msup><mrow><mo stretchy="false">(</mo><msqrt><mn dir="ltr">٩</mn></msqrt><mo stretchy="false">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo>=</mo><msup><mn dir="ltr">٣</mn><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٠٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


إذن **\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٠٤</mn><mn dir="ltr">٣</mn></mfrac></math>\` وحدة مربعة** وفق قراءة المنطقة المحدودة داخل الربع الأول؛ حد الربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` داخل هذه القراءة للعبارة، وليس أحد الخطين الأفقيين.

**المصدر:** صفحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١٩</mn></math>\` من الكتاب.

:::


:::exam-question
id: math-kamel-u5-p063-r6
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٣ · البند ٦ · متوسط
question: تطبيقات التكامل المحدود: المساحة
reference: [السؤال الأصلي](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r6-question.webp) · [الإجابة المطبوعة](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r6-key.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين ثم نحلل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></math>
\`\`\`

الجذران سالب ثلاثة واثنان، والمستقيم أعلى بينهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١٢٥</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p063-r7
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٣ · البند ٧ · متقدم
question: تطبيقات التكامل المحدود: المساحة
reference: [السؤال الأصلي](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r7-question.webp) · [الإجابة المطبوعة](assets/lessons/mathematics/source-crops/math-kamel-u5-p063-r7-key.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٦</mn></mrow></mrow></math>\` ومحور السينات.
solution:


المستقيم يقطع المحور عند اثنين ويمس القطع عند أربعة؛ القطع يقطع المحور عند صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

حتى اثنين الحد الأدنى هو المحور؛ وبعده المستقيم.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٦</mn><mo stretchy="true">)</mo><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٦</mn><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn><mspace width="2em"/><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١٦</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٥٦</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::mcq
id: math-kamel-u5-p058-r1
title: الكامل، الوحدة الخامسة · الصورة، ٥٨ · ص ٥٧ · البند ١ · ٢٠٠٨
kicker: الكامل، الوحدة الخامسة · الصورة، ٥٨ · ص ٥٧ · البند ١ · ٢٠٠٨
reference: السؤال، الصورة، · الإجابة المطبوعة
question: يمثل الشكل المجاور منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`. فإذا كانت مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، ومساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mi mathvariant="normal">أ</mi></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/686931b5113b4e7acf36.webp)

التكامل يحسب المساحة بإشارة: الجزء فوق محور السينات موجب، والجزء تحته سالب. أما مساحة المنطقة نفسها فهي موجبة دائمًا.

من الشكل الجزء الأول فوق المحور والثاني تحته؛ التكامل يطرح المساحة السالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mi mathvariant="normal">أ</mi></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي لمنحنى ق(س) والمنطقتين م١ وم٢ على الفترة من صفر إلى أ](assets/lessons/curriculum-evidence/686931b5113b4e7acf36.webp)
:::


:::mcq
id: math-kamel-u5-p058-r2
title: الكامل، الوحدة الخامسة · الصورة، ٥٨ · ص ٥٧ · البند ٢ · ٢٠١٠
kicker: الكامل، الوحدة الخامسة · الصورة، ٥٨ · ص ٥٧ · البند ٢ · ٢٠١٠
reference: السؤال، الصورة، · الإجابة المطبوعة
question: يمثل الشكل المجاور منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`. فإذا كانت مساحة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\` وحدات مربعة، ومساحة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` وحدات مربعة، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/bd1b7d040fe8d4be11c6.webp)

التكامل يحسب المساحة بإشارة: الجزء فوق محور السينات موجب، والجزء تحته سالب. أما مساحة المنطقة نفسها فهي موجبة دائمًا.

من الشكل الجزء الأول موجب والثاني سالب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٤</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي لق(س) على الفترة من ٠ إلى ٤ مع المنطقتين م١ وم٢](assets/lessons/curriculum-evidence/bd1b7d040fe8d4be11c6.webp)
:::


:::mcq
id: math-kamel-u5-p058-r3
title: الكامل، الوحدة الخامسة · الصورة، ٥٨ · ص ٥٧ · البند ٣ · ٢٠١٣
kicker: الكامل، الوحدة الخامسة · الصورة، ٥٨ · ص ٥٧ · البند ٣ · ٢٠١٣
reference: السؤال، الصورة، · الإجابة المطبوعة
question: في الشكل المجاور، مساحة المنطقة المظللة تساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>−</mo><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/73571c4fe908f9011a1e.webp)

من صفر إلى واحد تقع المساحة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` والمحور؛ ثم تقع بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="true">(</mo><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`

نجمع جزأي تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` المتجاورين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٤</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>−</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></msubsup><mi mathvariant="normal">هـ</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي للمنطقة المظللة بين منحنيي ق(س) و هـ(س) ومحور السينات مع الحدين ١ و٤](assets/lessons/curriculum-evidence/73571c4fe908f9011a1e.webp)
:::


:::mcq
id: math-kamel-u5-p059-r1
title: الكامل، الوحدة الخامسة · الصورة، ٥٩ · ص ٥٨ · البند ١ · ٢٠١٦
kicker: الكامل، الوحدة الخامسة · الصورة، ٥٩ · ص ٥٨ · البند ١ · ٢٠١٦
reference: السؤال، الصورة، · الإجابة المطبوعة
question: في الشكل المجاور، إذا علمت أن مساحة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\` تساوي ثلاثة أمثال مساحة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow></math>\`، وأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/38f210bbd2b81cd75261.webp)

التكامل يحسب المساحة بإشارة: الجزء فوق محور السينات موجب، والجزء تحته سالب. أما مساحة المنطقة نفسها فهي موجبة دائمًا.

من الشكل المساحة الأولى فوق المحور والثانية تحته، والثانية ثلاثة أمثال الأولى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

إذن الأولى ثلاثة والثانية تسعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`

التكامل من واحد إلى ثلاثة يقع أسفل المحور، فيكون سالب مساحته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي لق(س) مع المنطقة م١ فوق محور السينات والمنطقة م٢ تحته](assets/lessons/curriculum-evidence/38f210bbd2b81cd75261.webp)
:::


:::mcq
id: math-kamel-u5-p059-r2
title: الكامل، الوحدة الخامسة · الصورة، ٥٩ · ص ٥٨ · البند ٢ · ٢٠١٨ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٥٩ · ص ٥٨ · البند ٢ · ٢٠١٨ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: في الشكل المجاور، إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، وكانت مساحة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` وحدات مربعة، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo></mrow></math>\` ..... وحدات مربعة.
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/84617d1d18034c79f1e8.webp)

التكامل يحسب المساحة بإشارة: الجزء فوق محور السينات موجب، والجزء تحته سالب. أما مساحة المنطقة نفسها فهي موجبة دائمًا.

نقسم المعطى على اثنين لنجد التكامل الكلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٤</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`

المساحة الأولى موجبة وخمسة، والثانية سالبة؛ إذن تكاملها سالب اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

المطلوب يعكس الحدين، فتتغير الإشارة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي لمنحنى ق(س) مع تقاطعاته والمحورين والمنطقة م١](assets/lessons/curriculum-evidence/84617d1d18034c79f1e8.webp)
:::


:::mcq
id: math-kamel-u5-p059-r3
title: الكامل، الوحدة الخامسة · الصورة، ٥٩ · ص ٥٨ · البند ٣ · ٢٠١٨ دور ثالث
kicker: الكامل، الوحدة الخامسة · الصورة، ٥٩ · ص ٥٨ · البند ٣ · ٢٠١٨ دور ثالث
reference: السؤال، الصورة، · الإجابة المطبوعة
question: في الشكل المجاور، إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>+</mo><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/08a6bd0a9683853dc7d2.webp)

التكامل يحسب المساحة بإشارة: الجزء فوق محور السينات موجب، والجزء تحته سالب. أما مساحة المنطقة نفسها فهي موجبة دائمًا.

الجزء الأول تحت المحور والثاني فوقه، والثاني ثلاثة أمثال الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`

الأول ثلاثة والثاني تسعة؛ نجمع المساحتين الموجبتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٩</mn></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي المستقيم ق(س)، والمنطقتان م١ وم٢ والحد ٦](assets/lessons/curriculum-evidence/08a6bd0a9683853dc7d2.webp)
:::


:::mcq
id: math-kamel-u5-p060-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦٠ · ص ٥٩ · البند ١ · ٢٠١٩ دور ثالث
kicker: الكامل، الوحدة الخامسة · الصورة، ٦٠ · ص ٥٩ · البند ١ · ٢٠١٩ دور ثالث
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت مساحة المنطقة المظللة في الشكل المجاور \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn></mrow></math>\` وحدة مربعة، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١١</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٧</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/d9d6373953e9b10314d2.webp)

التكامل يحسب المساحة بإشارة: الجزء فوق محور السينات موجب، والجزء تحته سالب. أما مساحة المنطقة نفسها فهي موجبة دائمًا.

التكامل من صفر إلى سالب خمسة موجب سبعة لأنه يعكس جزءًا أسفل المحور؛ مساحة الجزء الأيسر سبعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">٠</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></math>
\`\`\`

مجموع المساحتين عشرون، فيتبقى للجزء الأيمن ثلاثة عشر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٦</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mn dir="ltr">١٣</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي لمنطقتي المساحة بين منحنى ق(س) ومحور السينات](assets/lessons/curriculum-evidence/d9d6373953e9b10314d2.webp)
:::


:::mcq
id: math-kamel-u5-p060-r2
title: الكامل، الوحدة الخامسة · الصورة، ٦٠ · ص ٥٩ · البند ٢ · ٢٠٢٢ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٦٠ · ص ٥٩ · البند ٢ · ٢٠٢٢ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: الشكل المجاور يمثل منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ج</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`. إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mi mathvariant="normal">ج</mi></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، وكانت المساحة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` وحدات مربعة، فما قيمة المساحة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/6cc3b4c902b9e4454e53.webp)

التكامل يحسب المساحة بإشارة: الجزء فوق محور السينات موجب، والجزء تحته سالب. أما مساحة المنطقة نفسها فهي موجبة دائمًا.

التكامل يساوي المساحة فوق المحور ناقص المساحة تحته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

ننقل المجهول ثم نجمع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي للمنحنى على الفترة (٠،ج) مع ب والمنطقتين م١ وم٢](assets/lessons/curriculum-evidence/6cc3b4c902b9e4454e53.webp)
:::


:::mcq
id: math-kamel-u5-p060-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦٠ · ص ٥٩ · البند ٣ · ٢٠٢٤ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٦٠ · ص ٥٩ · البند ٣ · ٢٠٢٤ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: في الشكل المجاور الذي يمثل منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>\`، أي التكاملات التالية تعبر عن المساحة المظللة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٠</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/mathematics/source-crops/math-kamel-u5-p060-r3-figure.webp)

الجزء المظلل بين سالب ثلاثة وصفر يقع تحت المحور، فنكامل سالب الاقتران.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mo>−</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo stretchy="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`

عكس الحدين يلغي الإشارة السالبة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي للقطع المكافئ ص = س تربيع − ٩ والمنطقة المظللة بينه وبين المحورين إلى يسار محور الصادات](assets/lessons/mathematics/source-crops/math-kamel-u5-p060-r3-figure.webp)

:::


:::mcq
id: math-kamel-u5-p061-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦١ · ص ٦٠ · البند ١ · ٢٠٢٤ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٦١ · ص ٦٠ · البند ١ · ٢٠٢٤ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` عدداً طبيعياً موجباً، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فأي من التكاملات التالية يساوي مساحة المنطقة المحصورة بين الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup></mrow></math>\` ومحور السينات والمستقيمين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٠</mn></mrow></msubsup><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><msup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`
explanation:
إذا كان الأس زوجيًا يكون التكامل موجبًا؛ إعطاء التكامل صفرًا يعني أن الأس فردي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١</mn></msubsup><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

القوة الفردية سالبة قبل الصفر وموجبة بعده؛ المساحتان متناظرتان.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>×</mo><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><msup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ن</mi></msup><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p061-r2
title: الكامل، الوحدة الخامسة · الصورة، ٦١ · ص ٦٠ · البند ٢ · تجريبي مديرية نابلس ٢٠٢٤
kicker: الكامل، الوحدة الخامسة · الصورة، ٦١ · ص ٦٠ · البند ٢ · تجريبي مديرية نابلس ٢٠٢٤
reference: السؤال، الصورة، · الإجابة المطبوعة
question: الشكل المجاور يمثل كلّاً من منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>،</mo><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`. فإذا كانت مساحة المنطقة المظللة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\` وحدات مربعة، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mi mathvariant="normal">د</mi></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mrow><mi mathvariant="normal">د</mi></mrow></msubsup><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
![الرسم الأصلي الذي استُخدم في تحديد إشارات الأجزاء وحدودها](assets/lessons/curriculum-evidence/db6770d4682d793022f5.webp)

من الشكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` هو المنحنى الأعلى، فالمساحة فرق تكاملي المنحنيين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn><mo>=</mo><mrow><mrow><msubsup><mo>∫</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></msubsup><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`

نضيف ستة إلى الطرفين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></msubsup><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي للمنطقة المظللة بين منحنيي ق وك بين ب ود](assets/lessons/curriculum-evidence/db6770d4682d793022f5.webp)
:::


:::exam-question
id: math-kamel-u5-p062-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦٢ · ص ٦١ · البند ١ · ٢٠٠٧
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة المنطقة المحصورة بين المنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`.
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين ونحلل لتحديد الحدين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

المستقيم أعلى من القطع بين صفر وأربعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نحل معادلة التقاطع لتحديد الحدود:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>⇒</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٤</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p062-r2
title: الكامل، الوحدة الخامسة · الصورة، ٦٢ · ص ٦١ · البند ٢ · ٢٠٠٧ دراسات
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة المنطقة المحصورة بين المنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` ومحور السينات والواقعة في الربع الأول.
solution:


تقاطع القطع والمستقيم في الربع الأول عند واحد؛ المستقيم يقطع المحور عند اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

المنطقة فوق المحور وتحت القطع حتى واحد، ثم تحت المستقيم حتى اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mtext> </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p062-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦٢ · ص ٦١ · البند ٣ · ٢٠٠٧ إكمال
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد المساحة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` ومنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين ثم نحلل المعادلة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></math>
\`\`\`

القطع أعلى بين سالب ثلاثة وواحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع لتحديد الحدود:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p062-r4
title: الكامل، الوحدة الخامسة · الصورة، ٦٢ · ص ٦١ · البند ٤ · ٢٠٠٨
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة الواقعة بين المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ومنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، وبين المستقيمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، حيث:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">{</mo><mtable rowspacing="0.36em" columnalign="left left" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn><mo separator="true">,</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">١</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٤.</mn></mrow></mstyle></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`




solution:
المساحة بين منحنيين هي تكامل القيمة المطلقة للفرق؛ نطرح الأسفل من الأعلى في كل جزء.يتغير تعريف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. وفي الفرع الثاني يتقاطع مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، أي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><msubsup><mo>∫</mo><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



في الجزء الأول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></math>\`، وفي الثاني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></math>\`، وفي الثالث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>≤</mo><mn dir="ltr">١</mn></mrow></math>\`؛ لذلك صيغت الفروق بإشارات تجعلها غير سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></msubsup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع المساحات الثلاث بمقام مشترك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٩</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١٩</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p062-r5
title: الكامل، الوحدة الخامسة · الصورة، ٦٢ · ص ٦١ · البند ٥ · ٢٠٠٨ إكمال
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، ومنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٣</mn></mrow></msub><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.
solution:

نستخدم شرائح أفقية. من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>\`، ومن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\` نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mtext dir="rtl">الجذر</mtext></mrow></math>\` التكعيبي ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`. المنطقة التي تشارك فيها المنحنيات الثلاثة تبدأ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` وتنتهي بالمستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.
بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\` تكون صأكبر من جذرها التكعيبي؛ إذن العرض هو الأيمن ناقص الأيسر.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></msubsup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ص</mi><mo>−</mo><msup><mi mathvariant="normal">ص</mi><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo stretchy="false">)</mo></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow></math>
\`\`\`


قاعدة القوة تزيد الأس وتقسم على الأس الجديد.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><msup><mi mathvariant="normal">ص</mi><mrow><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٨</mn></msubsup></mrow></math>
\`\`\`


عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`، الجذر التكعيبي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mn dir="ltr">٨</mn><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٣٢</mn><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo><mo>−</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٨١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٨١</mn><mn dir="ltr">٤</mn></mfrac></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p062-r6
title: الكامل، الوحدة الخامسة · الصورة، ٦٢ · ص ٦١ · البند ٦ · ٢٠٠٩
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة المحصورة بين منحنى كل من الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` ومحور السينات.
solution:



نقسم الفترة عند نقطة تغير القاعدة أو الإشارة حتى نستخدم التعبير الصحيح في كل جزء. ثم نجمع تكاملي الجزأين؛ فالفترتان متجاورتان.

المستقيم يقطع المحور عند اثنين ويمس القطع عند أربعة؛ نقسم عند اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo>=</mo><mfrac><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mrow><mrow><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mrow><mn dir="ltr">٤</mn><mo>⇒</mo></mrow><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٠</mn><mo>⇒</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mrow><mn dir="ltr">٤</mn><mspace width="2em" /></mrow><mn dir="ltr">٢</mn></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٠</mn><mo>⇒</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">١٢</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p062-r7
title: الكامل، الوحدة الخامسة · الصورة، ٦٢ · ص ٦١ · البند ٧ · ٢٠٠٩ إكمال
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة المحدودة بالمحورين الإحداثيين ومنحنى كل من الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
solution:


يتقاطع المنحنيان في الربع الأول عند واحد؛ المستقيم يصل المحور عند ثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

المنطقة المحدودة بالمحورين تقع تحت الأقل ارتفاعًا في كل جزء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال كل فرع عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mtext> </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p063-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦٣ · ص ٦٢ · البند ٣ · ٢٠١١
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد المساحة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، ومنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.
solution:

نستخدم شرائح أفقية بين الارتفاعين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`. المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ص</mi></mrow></math>\` على اليمين، والمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mtext dir="rtl">الجذر</mtext></mrow></mrow></math>\` التكعيبي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mi mathvariant="normal">ص</mi></mrow></math>\` على اليسار.
العرض هو الأيمن ناقص الأيسر، فيصبح مجموعًا.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٨</mn></msubsup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ص</mi><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo stretchy="false">)</mo></mrow><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ص</mi></mrow></math>
\`\`\`


نحسب الأصل بقاعدة القوة.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><msup><mi mathvariant="normal">ص</mi><mrow><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٨</mn></msubsup></mrow></math>
\`\`\`


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mn dir="ltr">٨</mn><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup><mo>=</mo><mrow><msup><mn mathvariant="normal">٢</mn><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`؛ نعوض الحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٣٢</mn><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٣٢</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٤٤</mn></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٤</mn></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p063-r8
title: الكامل، الوحدة الخامسة · الصورة، ٦٣ · ص ٦٢ · البند ٨ · ٢٠١٤
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة المحصورة بين المنحنيين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msqrt></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` ومحور السينات.
solution:

عند تقاطع الجذر والخط تتساوى الصادات. الجذر التربيعي غير سالب، لذلك يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٠</mn></mrow></math>\` قبل تربيع المعادلة.
نربع الطرفين ونحلل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msqrt><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msqrt><mo>=</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


الجذران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ الشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٠</mn></mrow></math>\` يستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


الخط يقطع المحور عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` والجذر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` نطرح الخط من الجذر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo stretchy="false">(</mo><msqrt><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msqrt><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الجذر</mtext><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>\`؛ السالب يعوض مشتقة الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo>+</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` نحسب المساحة بين الجذر والمحور.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


نجمع؛ يلغى الحدان الجذريان.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mrow><mn dir="ltr">٤</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p064-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦٤ · ص ٦٣ · البند ١ · ٢٠١٤ الإكمال
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد المساحة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\` ومنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
solution:


المنحنيان يتلاقيان عند الارتفاع واحد، والمستقيم يقطعهما عند زائد وسالب لوغاريتم اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

المنطقة متناظرة، فنحسب نصفها الموجب ثم نضاعفه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

اللوغاريتم الطبيعي هو عكس الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></msup><mo>⇒</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup><mo>=</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mspace width="2em"/><msup><mi mathvariant="normal">هـ</mi><mrow><mo>±</mo><mi mathvariant="normal">س</mi></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>±</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow></msup><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`




نجمع مساحات الأجزاء ونضاعفها بسبب التناظر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>×</mo><mo stretchy="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo stretchy="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo><mo stretchy="true">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>×</mo><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p064-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦٤ · ص ٦٣ · البند ٣ · ٢٠١٥ إكمال
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين ثم نحلل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="true">)</mo></mrow></math>
\`\`\`

القطع أعلى بين واحد وأربعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p064-r4
title: الكامل، الوحدة الخامسة · الصورة، ٦٤ · ص ٦٣ · البند ٤ · ٢٠١٦
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` ومحور السينات.
solution:


القطع والمستقيم يتقاطعان عند سالب واحد واثنين؛ القطع يصل المحور عند واحد أيضًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

حد المنطقة السفلي هو المحور حتى واحد، ثم القطع حتى اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mspace width="2em"/><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">١٩</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p064-r5
title: الكامل، الوحدة الخامسة · الصورة، ٦٤ · ص ٦٣ · البند ٥ · ٢٠١٦ إكمال
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة المنطقة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` ومحور السينات.
solution:


المنحنيان يتقاطعان عند صفر وثلاثة، والحدود مع المحور تغلق المنطقة بين اثنين وأربعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

المنطقة المطلوبة تحت القطع حتى ثلاثة، ثم تحت المستقيم.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p064-r6
title: الكامل، الوحدة الخامسة · الصورة، ٦٤ · ص ٦٣ · البند ٦ · ٢٠١٨
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحصورة بين المنحنيين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`.
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين ثم نحلل إلى ثلاثة عوامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></math>
\`\`\`

يتبدل المنحنى الأعلى عند صفر؛ نقسم بين سالب اثنين وواحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mrow><mo fence="true">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">١٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٣٧</mn><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p064-r7
title: الكامل، الوحدة الخامسة · الصورة، ٦٤ · ص ٦٣ · البند ٧ · ٢٠١٨ دور ثانٍ
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi></mrow></math>\` في الشكل المجاور.

![الرسم الأصلي للمنطقة م بين المستقيمات المبيّنة ومعادلاتها](assets/lessons/mathematics/source-crops/math-kamel-u5-p064-r7-figure.webp)
solution:
![الرسم الأصلي المستخدم في تحديد الحدود والإشارات](assets/lessons/mathematics/source-crops/math-kamel-u5-p064-r7-figure.webp)



من الشكل الحدود هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` يساوي ثلاثة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` يساوي أربعة ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

يتغير الحد الأعلى عند تقاطع ثلاثة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` مع أربعة ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، أي عند واحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mspace width="2em"/><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p065-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦٥ · ص ٦٤ · البند ١ · ٢٠١٩
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة المنطقة الواقعة في الربع الأول والمحدودة بمنحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` والمحورين الإحداثيين.
solution:


المنحنيان يتقاطعان عند صفر وواحد؛ القطع يصل المحور عند ثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`

المنطقة المحدودة بالمحورين تقع تحت المستقيم حتى واحد ثم تحت القطع.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٩</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mspace width="2em"/><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mtext> </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١٨</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢٦</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٢٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">١٠٧</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p065-r2
title: الكامل، الوحدة الخامسة · الصورة، ٦٥ · ص ٦٤ · البند ٢ · ٢٠١٩ دور ثانٍ
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، احسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`، علماً بأن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` وحدات مربعة، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\` وحدة مربعة.

![الرسم الأصلي لق(س) مع المنطقتين م١ وم٢ وتقاطعات المنحنى مع المحور](assets/lessons/curriculum-evidence/7bd5b87b05e5994c2683.webp)
solution:
![الرسم الأصلي وتحديد إشارات المساحتين](assets/lessons/curriculum-evidence/7bd5b87b05e5994c2683.webp)


نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\` لأن مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` هي العامل أمام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">د</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
للتعويض طريق ذهاب وعودة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ نقسم لإظهار كيف يلغي الجزءان المتكرران أحدهما الآخر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">[</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>+</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">١</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo fence="true">]</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">١</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`


الرسم يجعل المنطقة الأولى فوق المحور ومساحتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` والثانية أسفله ومساحتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`؛ التكامل مساحة موجبة ناقص مساحة سالبة الاتجاه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p065-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦٥ · ص ٦٤ · البند ٣ · ٢٠١٩ دور ثالث
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مساحة المنطقة المحدودة بمنحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\`.
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين ونحلل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="true">)</mo></mrow></math>
\`\`\`

المستقيم أعلى بين سالب واحد وثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p065-r4
title: الكامل، الوحدة الخامسة · الصورة، ٦٥ · ص ٦٤ · البند ٤ · ٢٠٢١ دور أول
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة المنطقة المحصورة بين منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` والمستقيم المار بالنقطتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
solution:
الميل هو فرق الصادات مقسومًا على فرق السينات، مع استخدام ترتيب النقطتين نفسه في البسط والمقام.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نرمز للحد الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، ونعوض بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`






ميل المستقيم بين النقطتين اثنان؛ تعويض إحدى النقطتين يعطي الحد الثابت سالب ثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نساويه بالقطع فنجد واحدًا وأربعة، والمستقيم أعلى بينهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p065-r5
title: الكامل، الوحدة الخامسة · الصورة، ٦٥ · ص ٦٤ · البند ٥ · ٢٠٢٢ دور أول
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`؟
solution:


التقاطع الموجب عند واحد؛ بعده المستقيم أعلى من المنحنى على الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نطرح مقلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من المستقيم ونستعمل لوغاريتم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجب.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mtext dir="rtl">هـ</mtext><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mo>⇒</mo></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></mrow></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٠</mn><mo>⇒</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">١</mn><mtext> </mtext></mrow><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></mrow></mrow></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mi mathvariant="normal">هـ</mi></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mfrac><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mi mathvariant="normal">هـ</mi></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">هـ</mi><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">هـ</mi><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٣</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">هـ</mi><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٣</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p066-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦٦ · ص ٦٥ · البند ١ · ٢٠٢١ دور أول
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ج</mi></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><msubsup><mo>∫</mo><mrow><mi mathvariant="normal">ج</mi></mrow><mrow><mi mathvariant="normal">ب</mi></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mi mathvariant="normal">ج</mi></mrow></msubsup><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><msubsup><mo>∫</mo><mrow><mi mathvariant="normal">ج</mi></mrow><mrow><mi mathvariant="normal">ب</mi></mrow></msubsup><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`، معتمداً على الشكل جد المساحة المحصورة بين منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>،</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

![الرسم الأصلي لمنحنيي ق(س) و هـ(س) مع نقاط التقاطع أ وج وب والمنطقتين بينهما](assets/lessons/curriculum-evidence/97023777698a948cd07f.webp)
solution:
![الرسم الأصلي المستخدم في تحديد الحدود والإشارات](assets/lessons/curriculum-evidence/97023777698a948cd07f.webp)

من الشكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` أعلى قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أعلى بعدها؛ نطرح معادلتي التكاملين المعطاتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></msubsup><mo stretchy="true">(</mo><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>−</mo><msubsup><mo>∫</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">ب</mi></msubsup><mo stretchy="true">(</mo><mi mathvariant="normal">ق</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>−</mo><mi mathvariant="normal">هـ</mi><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo stretchy="true">)</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

الطرح الثاني يعكس الفرق ليصبح الارتفاع موجبًا؛ إذن هو مجموع المساحتين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p066-r2
title: الكامل، الوحدة الخامسة · الصورة، ٦٦ · ص ٦٥ · البند ٢ · ٢٠٢٢ دور ثالث
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة المنطقة المحصورة بين منحنيي كل من \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`؟
solution:


نكتب جيب ضعفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ضعفي حاصل ضرب الجيب وجيب التمام لتحديد التقاطعات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">جا</mtext><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo>×</mo><mtext dir="rtl">جتا</mtext><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

التقاطعات صفر وثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`؛ يتغير الأعلى عند ثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mo>π</mo><mn dir="ltr">٣</mn></mfrac><mo>،</mo><mo>π</mo></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mrow><mrow><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٠</mn><mo>⇒</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mfrac><mrow><mrow><mn dir="ltr">٠</mn><mo separator="true">,</mo></mrow><mi>π</mi></mrow><mrow><mrow><mn dir="ltr">٣</mn><mo separator="true">,</mo></mrow><mi>π</mi></mrow></mfrac></mrow></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac></msubsup><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>−</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>−</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>−</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mi>π</mi></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>+</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mi>π</mi></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mi>π</mi><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>+</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mi>π</mi><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>+</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p066-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦٦ · ص ٦٥ · البند ٣ · ٢٠٢١ دور ثالث
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`؟
solution:



عند التقاطع تتساوى الصادات؛ نساوي القاعدتين ونحلل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">)</mo></mrow></math>
\`\`\`

الخط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` زائد اثنين أعلى بين سالب اثنين وواحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




المساحة بالوحدات المربعة.
:::


:::exam-question
id: math-kamel-u5-p066-r4
title: الكامل، الوحدة الخامسة · الصورة، ٦٦ · ص ٦٥ · البند ٤ · ٢٠٢٤ دور أول
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` ومحور السينات والصادات والواقعة في الربع الأول؟
solution:


يتقاطع المنحنيان في الربع الأول عند اثنين، والقطع الهابط يصل المحور عند ثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٧</mn><mo>−</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

المنطقة المحدودة بالمحورين تقع تحت القطع الصاعد حتى اثنين ثم الهابط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo>⇒</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mtext> </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢٧</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢٧</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢٧</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٥٤</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p066-r5
title: الكامل، الوحدة الخامسة · الصورة، ٦٦ · ص ٦٥ · البند ٥ · ٢٠٢٤ دور ثانٍ
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة المنطقة المحصورة بين منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>\` ومحور السينات والصادات الموجبين؟
solution:


التقاطع الموجب واحد، والمستقيم يقطع المحور عند اثنين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>
\`\`\`

نقسم الفترة عند نقطة تغير القاعدة أو الإشارة حتى نستخدم التعبير الصحيح في كل جزء. ثم نجمع تكاملي الجزأين؛ فالفترتان متجاورتان.

نقسم عند واحد لتبدل الحد الأعلى للمنطقة الواقعة فوق المحور.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mtext> </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p067-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦٧ · ص ٦٦ · البند ١ · ٢٠١٧ دور ثانٍ؛ ٢٠٢٤ دور ثالث
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة المنطقة المحصورة بين منحنيي الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، والواقعة فوق محور السينات في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.
solution:


القطع أعلى من المستقيم لأن الفرق مربع؛ لكن المستقيم أسفل المحور قبل صفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`

نريد المنطقة فوق المحور، فيكون الحد السفلي صفرًا قبل صفر، والمستقيم بعده.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٠</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p067-r2
title: الكامل، الوحدة الخامسة · الصورة، ٦٧ · ص ٦٦ · البند ٢ · تجريبي مديرية طولكرم ٢٠٢٤
question: تطبيقات التكامل المحدود: المساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب المساحة المحصورة بين منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` ومحور الصادات والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` والمستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
solution:


نحدد المنطقة التي تحدها المنحنيات الأربعة على يمين محور الصادات؛ هناك يلتقي القطع بالمستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ويلتقي المستقيمان عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

اختيار هذا الجزء هو الذي يجعل حدود القطع والمستقيمين ومحور الصادات جميعها تشارك في حدوده.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

الخط خمسة ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هو الأعلى؛ الحد السفلي القطع حتى واحد ثم الخط الآخر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`

نحل معادلة التقاطع، ونراعي مجال الجزء عند اختيار الجذور.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn><mtext> </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mspace width="2em"/><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مساحة الشريحة الرأسية تساوي ارتفاعها الموجب مضروبًا في عرضها الصغير. الارتفاع هو الاقتران الأعلى ناقص الأدنى، والتكامل يجمع الشرائح.

نطرح الاقتران الأدنى من الأعلى، ثم نكامل الفرق بين حدي هذا الجزء.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup></mrow></math>
\`\`\`



نعوض الحد الأعلى ثم نطرح التعويض بالحد الأدنى كاملًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب قيمة كل قوس، ثم نطرح مع مراعاة الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٦</mn></mfrac><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`









\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`




نجمع مساحات الأجزاء.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">٤٧</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p073-r1
title: الكامل، الوحدة الخامسة · الصورة، ٧٣ · ص ٧٢ · البند ١ · أسئلة للمهتمين · الدرس الخامس · ١
question: أسئلة للمهتمين: تطبيقات التكامل المحدود والمساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد المساحة المحصورة بمحور الصادات ومنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\` والمماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi></mrow></math>\` المار بنقطة الأصل.
solution:

نفرض نقطة التماس ذات السين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؛ صادها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">أ</mi></msup></math>\` و ميل المماس هناك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">أ</mi></msup></math>\` لأن مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` هي نفسها.
معادلة المماس من نقطة وميلها:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">أ</mi></msup><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">أ</mi></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


يمر المماس بالأصل؛ نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">أ</mi></msup><mo>=</mo><mo>−</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">أ</mi></msup></mrow></math>
\`\`\`


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">أ</mi></msup></math>\` موجب، فنقسم عليه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mi mathvariant="normal">أ</mi><mspace width="2em"/><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


إذن المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ونقطة التماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. المنحنى الأسّي أعلى من مماسه، ومحور الصادات يحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نحسب الأصل ثم فرق قيمتيه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>−</mo><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo>=</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p073-r2
title: الكامل، الوحدة الخامسة · الصورة، ٧٣ · ص ٧٢ · البند ٢ · أسئلة للمهتمين · الدرس الخامس · ٢
question: أسئلة للمهتمين: تطبيقات التكامل المحدود والمساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد المساحة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow></math>\` ومحور السينات والخطين الرأسيين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`.
solution:

المساحة بين المنحنى والمحور تجمع الارتفاع الموجب. نقسم عند انعدام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\` تساويهما عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\`.
قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\` يكون جيب التمام أكبر، فيكون الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">]</mo></mrow><mn dir="ltr">٠</mn><mrow><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow></msubsup><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\` يصبح الجيب أكبر، فنقلب الفرق.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mrow><mo stretchy="false">[</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">]</mo></mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></msubsup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="false">(</mo><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo stretchy="false">)</mo></mrow><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نجمع المساحتين الموجبتين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٢</mn></msqrt><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p073-r3
title: الكامل، الوحدة الخامسة · الصورة، ٧٣ · ص ٧٢ · البند ٣ · أسئلة للمهتمين · الدرس الخامس · ٣
question: أسئلة للمهتمين: تطبيقات التكامل المحدود والمساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد المساحة المحصورة بين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">|</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">|</mo></mrow></mrow></math>\` والمماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

solution:

قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">|</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">|</mo></mrow></math>\` المقدار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، ف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. المماس أفقي ومعادلته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. المنطقة متناظرة حول محور الصادات.
نحل معادلة التقاطع مع المماس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">١</mn><mo>⇒</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١</mn><mtext dir="rtl"> أو </mtext><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>±</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mo separator="true">,</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


في النصف الموجب تتغير قاعدة القيمة المطلقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` يكون الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٢</mn></msqrt></math>\` يكون الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><msqrt><mn dir="ltr">٢</mn></msqrt></msubsup><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


نضاعف مجموع نصفي المنطقة الموجبين بسبب التناظر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><msqrt><mn dir="ltr">٢</mn></msqrt><mo>−</mo><mn dir="ltr">٨</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٨</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٣</mn></mfrac></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p073-r4
title: الكامل، الوحدة الخامسة · الصورة، ٧٣ · ص ٧٢ · البند ٤ · أسئلة للمهتمين · الدرس الخامس · ٤
question: أسئلة للمهتمين: تطبيقات التكامل المحدود والمساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة المنطقة المحصورة بين المنحنيين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mn dir="ltr">٤</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\`.
solution:

عند تقاطع المنحنيين تتساوى الصادات. نساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` بكل فرع، ونختار الجذر الذي يقع في مجاله.
في الفرع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٠</mn></mrow></math>\` نرتب ونحلل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>⇒</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


في الفرع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` نحل المعادلة الخطية.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⇒</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⇒</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نقسم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` لتغير قاعدة المنحنى. الفرع التربيعي أعلى من الخط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo fence="true">]</mo></mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٠</mn></msubsup><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` الفرع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\`سأعلى من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نجمع المساحتين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">٣</mn></mfrac></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u5-p073-r6
title: الكامل، الوحدة الخامسة · الصورة، ٧٣ · ص ٧٢ · البند ٦ · أسئلة للمهتمين · الدرس الخامس · ٦
question: أسئلة للمهتمين: تطبيقات التكامل المحدود والمساحة
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` بحيث إن المساحة المحصورة بين المنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` والمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\` تساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٦٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\` وحدة مساحة.
solution:

تعتمد القاعدتان على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`، فلا تتغيران بتغيير إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`. تقاطعهما يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>±</mo><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">ج</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></mrow></math>\`. بينهما المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` أعلى، والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">ج</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.
نحسب النصف الموجب ثم نضاعفه بسبب التناظر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">ج</mi><mi mathvariant="normal">∣</mi></mrow></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


قاعدة القوة تعطي الأصل ثم نعوض الحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn><msubsup><mrow><mo fence="true">[</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ج</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">ج</mi><mi mathvariant="normal">∣</mi></mrow></msubsup><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mi mathvariant="normal">∣</mi><mi mathvariant="normal">ج</mi><msup><mi mathvariant="normal">∣</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`


نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٨</mn></mfrac></math>\` ثم نأخذ الجذر التكعيبي.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">ج</mi><msup><mi mathvariant="normal">∣</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٨</mn><mspace width="2em"/><mi mathvariant="normal">∣</mi><mi mathvariant="normal">ج</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


للقيمة المطلقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` إشارتان ممكنتان.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl"> أو </mtext><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


القيمتان تحققان السؤال. لا يوجد شرط يستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "تطبيقات التكامل المحدود: المساحة",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة تطبيقات التكامل المحدود: المساحة من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "18 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
