import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p054-ex1
title: الكتاب، ص ٥٢ · مثال ١
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٢، مثال ١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عددان موجبان مجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\`، جد العددين إذا كان حاصل ضربهما أكبر ما يمكن.
solution:
نسمي العدد الأول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، فيكون الآخر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٠</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`. كلاهما موجب، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٦٠</mn></mrow></math>\`. نريد تكبير حاصل ضربهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٦٠</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٠</mn><mtext dir="rtl">س</mtext><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة تقيس تغير حاصل الضرب. نساويها بالصفر لتحديد المرشح.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` سالبة على المجال؛ إذن حاصل الضرب يبلغ قيمة عظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٠</mn></math>\`. والعدد الآخر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦٠</mn><mo>−</mo><mn dir="ltr">٣٠</mn></mrow><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>\`.

العددان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٠</mn></math>\`.
:::


:::exam-question
id: math-book-p054-ex2
title: الكتاب، ص ٥٢ · مثال٢
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٢، مثال٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يراد صنع صندوق هدايا بقاعدة مربعة الشكل من الكرتون المقوى حجمه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">د</mi></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`. جد أبعاده بحيث تكون تكلفة تصنيعه أقل ما يمكن. سعر المتر المربع ثابت.

![صندوق بقاعدة مربعة وضلع س وارتفاع ص](assets/lessons/mathematics/source-crops/u2-book-p054-ex2.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/u2-book-p054-ex2.webp)

نفرض ضلع القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` دسم والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` دسم، وكلاهما موجب. الحجم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مساحة القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">٨</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



الصندوق مغلق كما في الشكل. مادام سعر المساحة ثابتًا، نقلل المساحة: قاعدتان مربعتان وأربعة أوجه مستطيلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">سص</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mfrac><mn dir="ltr">٣٢</mn><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`



نشتق ثم نساوي بالصفر. القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` جائزة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المشتقة الثانية موجبة لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فتكون هذه المساحة أقل ما يمكن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mfrac><mn dir="ltr">٦٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mfrac><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نستعيد الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">٨</mn><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الأبعاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">دسم</mtext></mrow><mo>×</mo><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">دسم</mtext></mrow></mrow><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\` دسم.
:::


:::exam-question
id: math-book-p055-ex3
title: الكتاب، ص ٥٣ · مثال٣
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٣، مثال٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد أقصر مسافة بين النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` ومنحنى العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.

![نقطة ك ومنحنى العلاقة والنقطة ل](assets/lessons/mathematics/source-crops/u2-book-p055-ex3.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/u2-book-p055-ex3.webp)

نفرض نقطة على المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`. مربع المسافة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` هو مجموع مربعي الفرقين. نقلل المربع لتجنب الجذر؛ فتصغير العدد غير السالب يصغر جذره.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



من معادلة المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow></mrow></math>\`؛ نعوض ونوسع المربع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نكمل المربع؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



المربع أصغره \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فيكون أصغر مربع للمسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo>±</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



أقصر مسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">١٠</mn></msqrt></math>\` وحدة، وتتحقق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p055-ex4
title: الكتاب، ص ٥٣ · مثال ٤
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٣، مثال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد أقل محيط ممكن لمستطيل مساحته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.

![المستطيل الأصلي وعليه رمزا الطول والعرض](assets/lessons/mathematics/source-crops/math-book-p055-ex4-figure.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/math-book-p055-ex4-figure.webp)

نفرض الطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم والعرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` سم، وكلاهما موجب. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`، فنعبر عن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">سص</mtext><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`



المحيط ضعف مجموع الطول والعرض. نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` ليصبح في متغير واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mfrac><mn dir="ltr">٣٢</mn><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`



نشتق ثم نساوي بالصفر لتحديد المرشح.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٣٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٣٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` لأن الطول موجب. قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` تكون المشتقة سالبة وبعدها موجبة؛ فيتحول المحيط من التناقص إلى التزايد وتتحقق الصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



أقل محيط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\` سم.
:::


:::exam-question
id: math-book-p056-exercise-1
title: الكتاب، ص ٥٤ · تمرين-١
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٤، تمرين-١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يريد رجل عمل حديقة مستطيلة الشكل في أرضه وذلك بإحاطتها بسياج. فإذا كان لديه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨٠</mn></math>\` مترًا من الأسلاك، فما مساحة أكبر حديقة يمكن للرجل إحاطتها؟
solution:
نفرض الطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` مترًا والعرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` مترًا. السياج يحيط بالأضلاع الأربعة، فيساوي محيط المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٠</mn><mi mathvariant="normal">م</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>+</mo><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



البعدان موجبان، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٤٠</mn></mrow></math>\`. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الطول</mtext><mo>×</mo><mtext dir="rtl">العرض</mtext></mrow></math>\`؛ نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` ثم نشتق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mtext dir="rtl">س</mtext><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` سالبة على المجال، فتتحقق العظمى. نستعيد العرض والمساحة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠٠</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠٠</mn><mrow><msup><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، والأبعاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow><mo>×</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p056-exercise-2
title: الكتاب، ص ٥٤ · تمرين-٢
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٤، تمرين-٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
مقلمة على شكل أسطوانة دائرية قائمة مفتوحة من أعلى، سعتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٩٢</mn><mi mathvariant="normal">π</mi></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`. إذا كان سعر كل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` من البلاستيك المستخدم لصنع القاعدة يعادل ثلاثة أمثال سعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` من البلاستيك المستخدم لصنع الجوانب، جد أبعاد المقلمة ذات الأقل تكلفة.
solution:
نفرض نصف القطر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` سم، وكلاهما موجب. حجم الأسطوانة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">π</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mrow><mn dir="ltr">١٩٢</mn><mi mathvariant="normal">π</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mtext dir="rtl">ع</mtext><mo>=</mo><mn dir="ltr">١٩٢</mn><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">١٩٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



نأخذ سعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` من الجانب وحدة تكلفة. القاعدة تكلف ثلاثة أمثال مساحتها، ولا يوجد غطاء؛ لذا التكلفة النسبية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi>π</mi><mtext dir="rtl">س</mtext><mfrac><mn dir="ltr">١٩٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">٣٨٤</mn><mi>π</mi></mrow><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`



نشتق ونساوي بالصفر، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">π</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ت</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi>π</mi><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mrow><mn dir="ltr">٣٨٤</mn><mi>π</mi></mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٣٨٤</mn><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



المشتقة الثانية موجبة لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فتكون التكلفة أقل ما يمكن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ت</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi>π</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٧٦٨</mn><mi>π</mi></mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mfrac><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">١٩٢</mn><msup><mn dir="ltr">٤</mn><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٩٢</mn><mn dir="ltr">١٦</mn></mfrac><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نصف القطر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` سم والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` سم.
:::


:::exam-question
id: math-book-p056-exercise-3
title: الكتاب، ص ٥٤ · تمرين-٣
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٤، تمرين-٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
طريق منحني معادلته في المستوى الديكارتي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\`، والنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\` تمثل موقع مستشفى. يراد شق شارع فرعي مستقيم من النقطة و إلى موقع المستشفى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`. عين إحداثيات و ليكون طول الشارع و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` أقل ما يمكن.

![الطريق المنحني والنقطة و وموقع المستشفى م](assets/lessons/mathematics/source-crops/u2-book-p056-ex3.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/u2-book-p056-ex3.webp)

نفرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">و</mi><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` على الطريق، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\`، ومنه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`. طول الشارع هو المسافة من و إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. نقلل مربع المسافة لأن الجذر متزايد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ونوسع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



نكمل المربع بإضافة وطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mrow><mo fence="true">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mrow><mo fence="true">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



أصغر قيمة للمربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، وهي ضمن المجال. نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` من الطريق؛ الجذر هنا موجب وفق تعريفه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><msqrt><mrow><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>=</mo><msqrt><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></msqrt><mo>=</mo><mfrac><msqrt><mn dir="ltr">١٤</mn></msqrt><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">و</mi><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mfrac><msqrt><mn dir="ltr">١٤</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p056-exercise-4
title: الكتاب، ص ٥٤ · تمرين-٤
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٤، تمرين-٤ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسم في خط مستقيم، ويُعطى موضعه بالأمتار بعد \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\` ثانية بالعلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. إذا كانت سرعته المتوسطة على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">]</mo></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mn dir="ltr">١٠</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`، وكانت سرعته المتجهة أكبر ما يمكن عند \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ثانية، فاحسب \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:
السرعة المتوسطة هي التغير في الموضع مقسومًا على الزمن المنقضي؛ لذلك نحسب موضعي البداية والنهاية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ف</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



السرعة المتجهة اللحظية هي مشتقة الموضع. وعند القيمة العظمى الداخلية للسرعة تكون مشتقتها صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ف</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><mrow><mi mathvariant="normal">ب</mi><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><msup><mi>π</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">١٦</mn></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">جا</mi><mo>⁡</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><msup><mi>π</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">١٦</mn></mfrac><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نجمع معادلتي الثابتين لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، ثم نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١٨</mn><mo>⟹</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نؤكد أنها عظمى فعلًا، لا صغرى: بعد التعويض تصبح السرعة مجموعًا جيبيًا أكبر قيمته عند زاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٩</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mfrac><mrow><mi>π</mi><mi mathvariant="normal">ن</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi>θ</mi><mo>+</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi>θ</mi><mo>−</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo>≤</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>
\`\`\`



تتحقق المساواة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فيتحقق شرط العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn><mo separator="true">,</mo><mspace width="1em"/><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p056-exercise-5
title: الكتاب، ص ٥٤ · تمرين-٥
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٤، تمرين-٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد حجم أكبر أسطوانة دائرية قائمة يمكن وضعها داخل مخروط دائري قائم ارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` سم، ونصف قطر قاعدته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` سم.
solution:
نفرض ارتفاع الأسطوانة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` سم ونصف قطرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم. في المقطع الرأسي للمخروط، تتشابه المثلثات؛ تتناسب أنصاف الأقطار مع البعد من رأس المخروط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mtext dir="rtl">ع</mtext></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ع</mi></mrow><mo>&lt;</mo><mn dir="ltr">١٢</mn></mrow></math>\`، لذا نصف القطر موجب. حجم الأسطوانة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مساحة القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo><mo>=</mo><mi>π</mi><mtext dir="rtl">ع</mtext><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نستخدم قاعدة الضرب ثم السلسلة لاشتقاق الحجم بالنسبة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mi>π</mi><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi>π</mi><mtext dir="rtl">ع</mtext></mrow><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نأخذ العامل المشترك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mi>π</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



العامل الأول موجب داخل المجال؛ فتتبع المشتقة إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">ع</mi></mrow></math>\`: موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وسالبة بعدها. إذن العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo>=</mo><mi>π</mi><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٥٦</mn><mi>π</mi></mrow><mn dir="ltr">٩</mn></mfrac></mrow></math>
\`\`\`



الحجم الأكبر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢٥٦</mn><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٩</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mfrac></math>\`؛ الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` سم ونصف القطر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></math>\` سم.
:::


:::exam-question
id: math-book-p057-worksheet-4
title: الكتاب، ص ٥٥ · ورقة عمل-٤
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٥، ورقة عمل-٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">جـ</mi></mrow><mi mathvariant="normal">د</mi></mrow></math>\` مستطيل عرضه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\` سم وطوله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">جـ</mi></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\` سم. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` نقطة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">م</mi></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` سم، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` نقطة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">جـ</mi></mrow></math>\` بحيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">جـ</mi></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\` سم. جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بحيث تكون مساحة المثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></mrow><mi mathvariant="normal">جـ</mi></mrow></math>\` أكبر ما يمكن.
solution:
قاعدة المثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mi mathvariant="normal">ج</mi></mrow></math>\` طولها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`، وارتفاعه العمودي عنها هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">م</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. من وقوع النقطتين على الضلعين: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٨</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>≤</mo><mn dir="ltr">١٠</mn></mrow></math>\`؛ فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">س</mi></mrow><mo>≤</mo><mfrac><mn dir="ltr">٢٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.

مساحة المثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">نصف القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نشتق ونساوي بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



القيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` داخل المجال، والمشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\` سالبة؛ فتتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` سم، والمساحة العظمى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-book-p057-worksheet-6
title: الكتاب، ص ٥٥ · ورقة عمل-٦
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٥٥، ورقة عمل-٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك طوله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\` سم صنع منه مثلثان، كل منهما متساوي الأضلاع. ما طول ضلع كل من المثلثين ليكون مجموع مساحتيهما أصغر ما يمكن؟
solution:
المعطى سلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\` سم لصنع مثلثين متساويي الأضلاع. نريد طول ضلعيهما بحيث يكون مجموع المساحتين أصغرمايمكن.

كل مثلث محيطه ثلاثة أمثال ضلعه، فيكون:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi><mspace width="2em"/><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة مثلث متساوي الأضلاع طول ضلعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><msqrt><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></msqrt><mn dir="ltr">٤</mn></mfrac></math>\`. نجمع المساحتين ونعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><msqrt><mn dir="ltr">٣</mn></msqrt><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">]</mo></mrow></math>
\`\`\`



نشتق باستخدام قاعدة السلسلة للمربع الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><msqrt><mn dir="ltr">٣</mn></msqrt><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



المشتقة الثانية موجبة، فتتحقق الصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



الإجابة: طول ضلع كل مثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` سم.
:::


:::exam-question
id: math-book-p082-test-10
title: الكتاب، ص ٨٠ · اختبار-١٠
question: تطبيقات عملية على القيم القصوى
reference: الكتاب، ص ٨٠، اختبار-١٠
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما أبعاد مخروط دائري قائم ذي أكبر حجم يمكن وضعه داخل كرة نصف قطرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` سم؟
solution:
نفرض ارتفاع المخروط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` ونصف قطر قاعدته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، بوحدة السم. نأخذ مقطعًا يمر بمحور المخروط ومركز الكرة.

البعد بين مركز الكرة ومستوى القاعدة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">|</mo><mrow><mi mathvariant="normal">ع</mi><mo>−</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true" fence="true">|</mo></mrow></math>\`، ونصف القطر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` وتر المثلث القائم؛ نستخدم فيثاغورس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mtext dir="rtl">ع</mtext><mo>−</mo><mn dir="ltr">١٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٠٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٠</mn><mtext dir="rtl">ع</mtext><mo>−</mo><msup><mtext dir="rtl">ع</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



ارتفاع المخروط بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`. حجم المخروط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">ثلث مساحة القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><msup><mtext dir="rtl">ع</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` موجب؛ فتكون المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">٣</mn></mfrac></math>\` وسالبة بعدها، فيبلغ الحجم عظمى عند هذا الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٠</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٤٠٠</mn><mo>−</mo><mn dir="ltr">١٦٠٠</mn></mrow><mn dir="ltr">٩</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨٠٠</mn><mn dir="ltr">٩</mn></mfrac></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن نصف القطر طول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">٣</mn></mfrac></math>\` سم ونصف القطر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢٠</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac></math>\` سم.
:::


:::exam-question
id: math-kamel-u2-p051-r2
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١ · البند ٢
question: سؤال من المصدر
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١ · البند ٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ثني سلك طوله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` سم ليكون مثلثًا متساوي الساقين. جد أطوال أضلاع المثلث التي تجعل مساحته أكبر ما يمكن.
solution:
نفرض نصف القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم، فيكون طول القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`. من المحيط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`، يكون طول كل ساق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.

الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` ينصف القاعدة في المثلث متساوي الساقين. نطبق فيثاغورس على نصف المثلث.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ع</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mtext dir="rtl">س</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٦</mn><mo>−</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



ليكون الارتفاع ونصف القاعدة موجبين يجب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>\`. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">نصف القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`. نعظم مربعها لتجنب الجذر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٣٦</mn><mo>−</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">م</mtext><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٧٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٦</mn><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وسالبة بعدها داخل المجال؛ إذن العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.

طول القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` سم، وكل ساق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` سم؛ الأضلاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` سم.
:::


:::exam-question
id: math-kamel-u2-p051-r1
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١ · البند-١
question: تطبيقات عملية على القيم القصوى
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١، البند-١ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تتحرك النقطة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo separator="true">,</mo><mi mathvariant="normal">ص</mi><mo stretchy="false">)</mo></mrow></math>\` في الربع الأول على منحنى، ويكون ميل القاطع الواصل بين نقطة الأصل \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">و</mi></mrow></math>\` والنقطة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">م</mi></mrow></math>\` مساويًا \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`. إذا كانت \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` إسقاط \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">م</mi></mrow></math>\` على محور السينات، فأوجد أكبر مساحة للمثلث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">م</mi><mi mathvariant="normal">ب</mi><mi mathvariant="normal">و</mi></mrow></math>\`.

![القاطعوم والنقطةم وإسقاطهاب في الرسم الأصلي](assets/lessons/mathematics/source-crops/u2-kamel-p051-r1-diagram.webp)
solution:
ميل المستقيم الواصل من الأصل إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` هو مقدار الارتفاع مقسومًا على الإزاحة الأفقية؛ وبما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في الربع الأول، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">ص</mi><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` لنكتب الارتفاع بدلالة متغير واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



شرط الربع الأول يفرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، ولذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></math>\`.

![القاطع وم والنقطة م وإسقاطها ب في الرسم الأصلي](assets/lessons/mathematics/source-crops/u2-kamel-p051-r1-diagram.webp)

المثلث قائم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؛ قاعدته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` وارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`. مساحته نصف حاصل ضربهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>
\`\`\`



نشتق المساحة ونبحث عن أصفار المشتقة داخل الفترة المسموحة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٨</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وسالبة بعدها، فتكون المساحة عظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٧</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠٨</mn><mo>−</mo><mn dir="ltr">٨١</mn><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mtext dir="rtl">العظمى</mtext></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢٧</mn><mo stretchy="false">)</mo><mo>=</mo><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mfrac><mn dir="ltr">٨١</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl"> وحدة مربعة</mtext></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`

:::


:::exam-question
id: math-kamel-u2-p051-r3
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١ · البند-٣
question: سؤال من المصدر
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١ · البند-٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة أكبر مستطيل يمكن رسمه في الربع الأول، بحيث يقع رأسان من رؤوسه على محور السينات، أما الرأسان الآخران: فإحداهما يقع على المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، والآخر على المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٤٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
solution:
نفرض ارتفاع المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`. من المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` للرأس العلوي الأيسر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">ص</mi><mn dir="ltr">٢٠</mn></mfrac></math>\`، ومن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٤٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` للرأس الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٢</mn><mo>−</mo><mi mathvariant="normal">ص</mi></mrow></math>\`.

عرض المستطيل فرق الإحداثيين السينيين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">العرض</mtext><mo>=</mo><mn dir="ltr">٤٢</mn><mo>−</mo><mtext dir="rtl">ص</mtext><mo>−</mo><mfrac><mtext dir="rtl">ص</mtext><mn dir="ltr">٢٠</mn></mfrac><mo>=</mo><mn dir="ltr">٤٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢١</mn><mtext dir="rtl">ص</mtext></mrow><mn dir="ltr">٢٠</mn></mfrac></mrow></math>
\`\`\`



العرض والارتفاع موجبان؛ لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ص</mi></mrow><mo>&lt;</mo><mn dir="ltr">٤٠</mn></mrow></math>\`. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">العرض</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٢</mn><mtext dir="rtl">ص</mtext><mo>−</mo><mfrac><mn dir="ltr">٢١</mn><mn dir="ltr">٢٠</mn></mfrac><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢١</mn><mn dir="ltr">١٠</mn></mfrac><mtext dir="rtl">ص</mtext></mrow></math>
\`\`\`



نساوي المشتقة بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٢</mn><mo>=</mo><mfrac><mn dir="ltr">٢١</mn><mn dir="ltr">١٠</mn></mfrac><mtext dir="rtl">ص</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٢١</mn></mrow><mn dir="ltr">١٠</mn></mfrac></math>\` سالبة؛ فتتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">العرض</mtext><mo>=</mo><mn dir="ltr">٤٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢٠</mn></mfrac><mo>=</mo><mn dir="ltr">٢١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٢١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٢٠</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٢٠</mn></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u2-p051-r4
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١ · البند-٤
question: تطبيقات عملية على القيم القصوى
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١، البند-٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة أكبر شبه منحرف متساوي الساقين يمكن رسمه داخل منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>\`، بحيث إن رأسين هما صفرا الاقتران، والرأسين الآخرين يقعان على منحنى الاقتران فوق محور السينات.
solution:
نصف الدائرة نصف قطرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، وصفرا الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`؛ طول القاعدة السفلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`. التماثل في شبه المنحرف متساوي الساقين يجعل رأسيه العلويين عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>±</mo><mi mathvariant="normal">س</mi></mrow></math>\` وبالارتفاع نفسه.

طول القاعدة العليا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٦</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">س</mi></mrow><mo>≤</mo><mn dir="ltr">٤</mn></mrow></math>\`. مساحة شبه المنحرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">نصف مجموع القاعدتين</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>
\`\`\`



نشتق بقاعدتي الضرب والسلسلة، عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mfrac><mtext dir="rtl">س</mtext><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac></mrow></math>
\`\`\`



المقام موجب و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\` موجب؛ لذلك المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وسالبة بعدها. فتتحقق العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وتتجاوز قيمتي الطرفين أيضًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msqrt><mrow><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></msqrt><mo>=</mo><mn dir="ltr">٦</mn><msqrt><mn dir="ltr">١٢</mn></msqrt></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><msqrt><mn dir="ltr">١٢</mn></msqrt></mrow></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u2-p051-r6
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١ · البند-٦
question: تطبيقات عملية على القيم القصوى
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٥١، البند-٦
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة أكبر مستطيل يمكن وضعه داخل مثلث متساوي الساقين، طول قاعدته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` سم وارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` سم، بحيث ينطبق أحد أضلاعه على قاعدة المثلث، ويقع الرأسان الآخران على ساقي المثلث.
solution:
نفرض ارتفاع المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">١٠</mn></mrow></math>\`. من تشابه المثلث الصغير فوق المستطيل مع المثلث الأصلي، نسبة العرض إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` تساوي نسبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">العرض</mtext><mn dir="ltr">١٢</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">١٠</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">العرض</mtext><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">١٠</mn></mfrac></mrow></math>
\`\`\`



نضرب في الارتفاع لكتابة المساحة، ثم نشتق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">١٢</mn><mn dir="ltr">١٠</mn></mfrac><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢٤</mn><mn dir="ltr">١٠</mn></mfrac><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



نساوي بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>=</mo><mfrac><mn dir="ltr">٢٤</mn><mn dir="ltr">١٠</mn></mfrac><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٢٤</mn></mrow><mn dir="ltr">١٠</mn></mfrac></math>\` سالبة؛ فتتحقق العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`. العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mo>×</mo><mn dir="ltr">٥</mn></mrow><mn dir="ltr">١٠</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` سم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٠</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p049-r1
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ١ · ٢٠٠٧
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد مساحة أكبر مستطيل يمكن رسمه داخل دائرة نصف قطرها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\` سم.
solution:
نفرض نصفي ضلعي المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، وكلاهما موجب. قطر المستطيل قطر للدائرة، فيعطي فيثاغورس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mn dir="ltr">١٠٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٠٠</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



مساحة المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ص</mi></mrow></mrow></math>\`. نعظم مربعها لأنها موجبة؛ ومربعها يتجنب الجذر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١٠٠</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">م</mtext><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٣٢٠٠</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٦٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٣٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">١٠٠</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`. المشتقة موجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>&lt;</mo><mn dir="ltr">٥٠</mn></mrow></math>\` وسالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>&gt;</mo><mn dir="ltr">٥٠</mn></mrow></math>\`؛ فتتحقق العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٠٠</mn><mo>−</mo><mn dir="ltr">٥٠</mn><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` موجبان ومتساويان، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠٠</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠٠</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p049-r2
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ٢ · ٢٠٠٧ — دراسات
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
مثلث متساوي الساقين محيطه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨</mn></mrow></math>\` سم، أوجد أطوال أضلاعه عندما تكون مساحته أكبر ما يمكن.
solution:
نفرض نصف القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم. طول القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وكل ساق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` لأن المحيط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٨</mn></math>\`. الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` ينصف القاعدة؛ نطبق فيثاغورس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ع</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mtext dir="rtl">س</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨١</mn><mo>−</mo><mn dir="ltr">١٨</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



المثلث غير منعدم، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`. مساحته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ع</mi></mrow></math>\`، فنعظم مربعها لتجنب الجذر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٨١</mn><mo>−</mo><mn dir="ltr">١٨</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">م</mtext><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">١٦٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٥٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٥٤</mn><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وسالبة بعدها داخل المجال؛ فتتحقق العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.

القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` سم، وكل ساق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` سم. الأضلاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` سم.
:::


:::exam-question
id: math-kamel-u2-p049-r3
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ٣ · ٢٠٠٨
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
معتمداً على الشكل المجاور، جد بعدي المستطيل ذي المساحة الكبرى، الذي يمكن رسمه داخل مثلث قائم الزاوية، بحيث ينطبق أحد أضلاع هذا المستطيل على أحد ضلعي القائمة في المثلث، ورأساه الآخران على ضلعي المثلث الآخرين.

![المثلث القائم والمستطيل داخله وخطا قياس الضلعين المسمّيين بب](assets/lessons/mathematics/source-crops/math-kamel-u2-p049-r3-figure.webp)
solution:
![الشكل الأصلي](assets/lessons/mathematics/source-crops/math-kamel-u2-p049-r3-figure.webp)

من الشكل ضلعا القائمة طولهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. نفرض عرض المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` وارتفاعه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`. بتشابه المثلثات، ينقص العرض الخالي على الوتر بنسبة الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">س</mtext><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext></mrow></mfrac><mo>+</mo><mfrac><mtext dir="rtl">ص</mtext><mtext dir="rtl">ب</mtext></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mtext dir="rtl">ص</mtext><mo>=</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mtext dir="rtl">ب</mtext><mo>−</mo><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></mrow></math>\`. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>\`، فنعوض ثم نشتق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">بس</mtext><mo>−</mo><mfrac><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ب</mtext><mo>−</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>−</mo><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` سالبة؛ فتتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mtext dir="rtl">ب</mtext><mo>−</mo><mfrac><mtext dir="rtl">ب</mtext><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mtext dir="rtl">ب</mtext><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



البعدان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u2-p049-r4
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ٤ · ٢٠٠٨ — الإكمال
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد بعدي المستطيل ذي أكبر مساحة في الربع الأول، إذا كان رأسا قاعدته على محور السينات ورأساه العلويان على المنحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، وكانت أضلاعه موازية لمحوري الإحداثيات.
solution:
نكتب المنحنى حول محور تماثله بإكمال المربع؛ لأن الرأسين العلويين لهما الارتفاع نفسه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



إذا كان بعد كل رأس علوي عن المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ت</mi></math>\`، فإحداثياهما السينيان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">ت</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ت</mi></mrow></math>\`. العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ت</mi></mrow></math>\` والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">ت</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ن</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الحد الأعلى يحفظ الرأس الأيسر في الربع الأول، كما يبقى الارتفاع موجبًا في هذه الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`



للمساحة العظمى نشتق ونساوي المشتقة بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo>⟹</mo><mi mathvariant="normal">ن</mi><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ت</mi></math>\` طول. المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٢</mn></msqrt></math>\` وسالبة بعدها داخل المجال، فتتحقق أكبر مساحة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">العرض</mtext><mo>=</mo><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الارتفاع</mtext><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mo stretchy="false">(</mo><msqrt><mn dir="ltr">٢</mn></msqrt><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">البعدان: </mtext><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٢</mn></msqrt><mtext dir="rtl"> و </mtext><mn dir="ltr">٤</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p049-r5
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ٥ · ٢٠٠٩
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد أقصر مسافة بين النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` ومنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`.
solution:
نفرض نقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` على المنحنى. نقلل مربع المسافة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، لأن الجذر يحافظ على ترتيب الأعداد غير السالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٦</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



من المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١٦</mn></mrow></mrow></math>\`. نعوض ونوسع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٦</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">ص</mtext><mo>+</mo><mn dir="ltr">٣٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">ص</mtext><mo>+</mo><mn dir="ltr">٥٢</mn></mrow></math>
\`\`\`



نكمل المربع باستخدام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ص</mi></mrow></mrow><mo>=</mo><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">٥٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣٤</mn></mrow></math>
\`\`\`



أصغر مربع للمسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٤</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. عندها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">١٦</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>±</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، فتوجد النقطتان على المنحنى.

أقصر مسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٣٤</mn></msqrt></math>\` وحدة.
:::


:::exam-question
id: math-kamel-u2-p049-r6
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ٦ · ٢٠٠٩ — الإكمال
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد ميل المستقيم الذي يمر بالنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` ويصنع مع المحورين الإحداثيين في الربع الأول مثلثاً مساحته أصغر ما يمكن.
solution:
نفرض المقطع السيني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` والمقطع الصادي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، وكلاهما موجب. صيغة المقطعين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mi mathvariant="normal">س</mi><mi mathvariant="normal">أ</mi></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ص</mi><mi mathvariant="normal">ب</mi></mfrac></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تمثل المستقيم الواصل بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`.

نعوض مروره بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mfrac><mo>+</mo><mfrac><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext></mfrac><mo>=</mo><mfrac><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn></mrow><mtext dir="rtl">أ</mtext></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext></mrow><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`



لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` موجب و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` موجب، يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></math>\`. مساحة المثلث نصف حاصل ضرب المقطعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">أب</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup></mrow><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`



نستخدم قاعدة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></math>\`، فالمقام و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` موجبان؛ تتبع المشتقة إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`. سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وموجبة بعدها، فتتحقق الصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



ميل المستقيم من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٨</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` هو فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` على فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الميل</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p049-r7
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ٧ · ٢٠١٠
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يراد صنع وعاء معدني على هيئة أسطوانة دائرية قائمة مفتوحة من أعلى سعتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٨١</mn><mo>π</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`، فإذا كانت تكلفة المواد المستعملة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\` دنانير لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` من قاعدة الأسطوانة، وديناراً واحداً لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` من سطحها الجانبي، جد أبعاد الأسطوانة التي تجعل تكاليف صنعها أقل ما يمكن.
solution:
نفرض نصف القطر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` سم، وكلاهما موجب. الحجم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">π</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٨١</mn><mi mathvariant="normal">π</mi></mrow></mrow></math>\`، فيحدد الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">٨١</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



الوعاء مفتوح. تكلفة القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>×</mo><mrow><mi mathvariant="normal">π</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`، وتكلفة الجانب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>×</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ع</mi></mrow></mrow></math>\`، بوحدة الدينار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi>π</mi><mtext dir="rtl">س</mtext><mfrac><mn dir="ltr">٨١</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mfrac><mrow><mn dir="ltr">١٦٢</mn><mi>π</mi></mrow><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`



نشتق ونساوي بالصفر، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">π</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ت</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi>π</mi><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mrow><mn dir="ltr">١٦٢</mn><mi>π</mi></mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">١٦٢</mn><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



المشتقة الثانية موجبة لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فتتحقق أقل تكلفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ت</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi>π</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٣٢٤</mn><mi>π</mi></mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mfrac><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">٨١</mn><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نصف القطر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` سم والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` سم.
:::


:::exam-question
id: math-kamel-u2-p049-r8
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ٨ · ٢٠١١
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد معادلة المستقيم الذي يمر بالنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` ويصنع مع المحورين الإحداثيين في الربع الأول مثلثاً مساحته أصغر ما يمكن.
solution:
نفرض المقطع السيني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` والمقطع الصادي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، وكلاهما موجب. صيغة المقطعين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mi mathvariant="normal">س</mi><mi mathvariant="normal">أ</mi></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ص</mi><mi mathvariant="normal">ب</mi></mfrac></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` تمثل المستقيم. نعوض النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext></mfrac><mo>+</mo><mfrac><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٤</mn><mtext dir="rtl">ب</mtext></mfrac><mo>=</mo><mfrac><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow><mtext dir="rtl">أ</mtext></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext></mrow><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`



إيجابية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` تستلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\`. المساحة نصف حاصل ضرب المقطعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">أب</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup></mrow><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>
\`\`\`



نشتق بقاعدة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



المقام و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>\` موجبان؛ المشتقة سالبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` وموجبة بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`. إذن الصغرى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



الميل يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">أ</mi></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow><mn dir="ltr">٦</mn></mfrac></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، والمقطع الصادي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p049-r10
title: الكامل، الوحدة الثانية · الصورة، ٤٩ · ص ٤٨ · البند ١٠ · ٢٠١٢
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد الإحداثي السيني للنقطة الواقعة على منحنى العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢٣</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وتكون أقرب ما يمكن للنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نفرض النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` على المنحنى. بإضافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` للطرفين، تصبح معادلته:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



مربع الطرف الأيسر غير سالب، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٦</mn></mrow></math>\`. نقلل مربع المسافة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، لأن الجذر متزايد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٠</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣٣</mn></mrow></math>
\`\`\`



نكمل المربع؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٢٥</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



أصغر قيمة تتحقق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، وهي ضمن المجال. وعندها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، فتوجد نقطتان على المنحنى. الإحداثي السيني المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
:::


:::exam-question
id: math-kamel-u2-p050-r1
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ١ · ٢٠١٣
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة أكبر مستطيل محصور فوق محور السينات وتحت المنحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mstyle scriptlevel="0" displaystyle="true"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mstyle><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، بحيث يقع رأسا قاعدته على محور السينات ورأساه العلويان على المنحنى، وأضلاعه موازية للمحورين.
solution:
لأن المنحنى متماثل حول محور الصادات، والرأسان العلويان لهما الارتفاع نفسه، نكتب إحداثييهما السينيين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجبة.

عرض المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وارتفاعه قيمة المنحنى. شرط وجوده فوق المحور يعطي مجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><msqrt><mn dir="ltr">١٢</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`



نشتق المساحة لإيجاد القيمة التي تحول التزايد إلى تناقص.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



القيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` مرفوضة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` نصف عرض موجب. المشتقة موجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></math>\` وسالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><msqrt><mn dir="ltr">١٢</mn></msqrt></mrow></math>\`، فتتحقق العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">العرض</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الارتفاع</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mtext dir="rtl">العظمى</mtext></msub><mo>=</mo><mn dir="ltr">٤</mn><mo>⋅</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٣</mn></mfrac><mtext dir="rtl"> وحدة مربعة</mtext></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`

:::


:::exam-question
id: math-kamel-u2-p050-r2
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٢ · ٢٠١٤
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد باستخدام التفاضل أكبر حجم للشكل الناتج من دوران المستطيل محيطه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٠</mn></mrow></math>\` سم دورة كاملة حول أحد أضلاعه.
solution:
دوران المستطيل حول ضلع يصنع أسطوانة؛ هذا الضلع ارتفاعها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`، والآخر نصف قطرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. من المحيط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\` سم:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ع</mtext><mo>=</mo><mn dir="ltr">٦٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` موجبان، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٣٠</mn></mrow></math>\`. نكتب حجم الأسطوانة ثم نشتق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٠</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٠</mn><mi>π</mi><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><mi>π</mi><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



داخل المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجب؛ المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\` وسالبة بعدها. إذن الحجم الأكبر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٢٠</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo>=</mo><mi>π</mi><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠٠٠</mn><mi>π</mi></mrow></math>
\`\`\`



أكبر حجم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤٠٠٠</mn><mi mathvariant="normal">π</mi></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p050-r3
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٣ · ٢٠١٤ — الإكمال
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد أقرب نقطة واقعة على المنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\` إلى النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نفرض نقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` على المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`. نقلل مربع المسافة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` لتجنب الجذر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` ونوسع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نكمل المربع بإضافة وطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mrow><mo fence="true">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mrow><mo fence="true">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



أصغر مربع للمسافة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، وهي ضمن المجال. نختار الجذر غير السالب حسب تعريف المنحنى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><msqrt><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>=</mo><msqrt><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></msqrt></mrow></math>
\`\`\`



أقرب نقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msqrt><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p050-r4
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٤ · ٢٠١٥
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد أقصر مسافة بين النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` ومنحنى العلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.
solution:
نفرض نقطة على المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`. مربع المسافة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` هو مجموع مربعي الفرقين. نقلل المربع لتجنب الجذر؛ فتصغير العدد غير السالب يصغر جذره.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



من معادلة المنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow></mrow></math>\`؛ نعوض ونوسع المربع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نكمل المربع؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



المربع أصغره \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فيكون أصغر مربع للمسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mo>±</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



أقصر مسافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">١٠</mn></msqrt></math>\` وحدة، وتتحقق عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p050-r5
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٥ · ٢٠١٥ — الإكمال
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك طوله \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٦</mn></mrow></math>\` سم قسم إلى جزأين، صنع من أحدهما مربع ومن الآخر مستطيل طوله يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\` أمثال عرضه، ما أبعاد المربع والمستطيل ليكون مجموع مساحتيهما أقل ما يمكن؟
solution:
نفرض ضلع المربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم، وعرض المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` سم، وطوله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ص</mi></mrow></math>\`. السلك مجموع المحيطين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>+</mo><mn dir="ltr">٣</mn><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٨</mn><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٥٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">١٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext></mrow></math>
\`\`\`



المساحتان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`؛ نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ليصبح المجموع في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` وحدها. يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ص</mi></mrow><mo>&lt;</mo><mn dir="ltr">٧</mn></mrow></math>\` ليكون الشكلان غير منعدمين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



مشتقة المربع تضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مشتقة المدخل</mtext><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، بقاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">ص</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٤</mn><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٥٦</mn></mrow></math>
\`\`\`



نساوي بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٤</mn><mtext dir="rtl">ص</mtext><mo>−</mo><mn dir="ltr">٥٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٤</mn></math>\` موجبة، فتتحقق الصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">١٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



المربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٦</mn><mtext dir="rtl">سم</mtext></mrow><mo>×</mo><mn dir="ltr">٦</mn></mrow></math>\` سم، والمستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mtext dir="rtl">سم</mtext></mrow><mo>×</mo><mn dir="ltr">١٢</mn></mrow></math>\` سم.
:::


:::exam-question
id: math-kamel-u2-p050-r6
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٦ · ٢٠١٦
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow></math>\` مثلث قائم الزاوية في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، إذا كان طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></mrow></mrow></math>\` سم وطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></mrow></math>\` سم، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` نقطة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، أوجد طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ج</mi></mrow></math>\` بحيث يكون مجموع طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ج</mi></mrow></math>\` ومثلي طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi></mrow></math>\` أقل ما يمكن.
solution:
نفرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\` سم؛ بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">س</mi></mrow><mo>≤</mo><mn dir="ltr">٣</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ج</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. في المثلث القائم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">د</mi></mrow></math>\`، فيثاغورس يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi></mrow><mo>=</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\`.

نقلل المقدار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ج</mi></mrow><mo>+</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">د</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><msqrt><mrow><mn dir="ltr">٤</mn><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow><msqrt><mrow><mn dir="ltr">٤</mn><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac></mrow></math>
\`\`\`



نساوي بالصفر، ثم نضرب بالمقام الموجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>=</mo><msqrt><mrow><mn dir="ltr">٤</mn><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>
\`\`\`



الطرفان غير سالبين؛ لذلك التربيع يحفظ المعادلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac></mrow></math>
\`\`\`



نختار الجذر الموجب، وهو داخل المجال. المشتقة الثانية موجبة، فتتحقق الصغرى.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mrow><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></mfrac><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، لا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\`. نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وننطق المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">د ج</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



الطول المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><mrow><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٣</mn></mfrac></math>\` سم.
:::


:::exam-question
id: math-kamel-u2-p050-r7
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٧ · ٢٠١٧
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أرض مستطيلة الشكل رؤوسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` تتكون من حديقة مستطيلة الشكل مساحتها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٢٠٠</mn></mrow></math>\` متر مربع محاطة بأرصفة عرض كل من الرصيفين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">د</mi></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\` متر، وعرض كل من الرصيفين على الضلعين الآخرين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\` متر. أوجد أقل مساحة ممكنة لقطعة الأرض.
solution:
نفرض بعدي الحديقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` مترًا، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mn dir="ltr">٣٢٠٠</mn></mrow></math>\`. نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` في اتجاه الرصيفين ذوي العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فتزيده الأرصفة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، وتزيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` بمقدار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">٣٢٠٠</mn><mtext dir="rtl">س</mtext></mfrac><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة الأرض الخارجية حاصل ضرب البعدين بعد إضافة الأرصفة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢٠٠</mn><mo>+</mo><mn dir="ltr">٨</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">ص</mtext><mo>+</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢٣٢</mn><mo>+</mo><mn dir="ltr">٨</mn><mtext dir="rtl">س</mtext><mo>+</mo><mfrac><mn dir="ltr">١٢٨٠٠</mn><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`



نشتق ونساوي بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">١٢٨٠٠</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٢٨٠٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦٠٠</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` طول موجب، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>\`. المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢٥٦٠٠</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac></math>\` موجبة لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فتتحقق الصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">٣٢٠٠</mn><mn dir="ltr">٤٠</mn></mfrac><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤٠</mn><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٨٠</mn><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٨٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٨٧٢</mn></mrow></math>
\`\`\`



أقل مساحة للأرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٨٧٢</mn><mrow><msup><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p050-r8
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٨ · ٢٠١٧ — الدور الثاني
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
شبه منحرف فيه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\` أضلاع متساوية في الطول وطول كل منها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\` سم، جد أكبر مساحة ممكنة لشبه المنحرف.
solution:
نفرض أولًا أن القاعدة ذات الطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` هي الصغرى، والساقان طول كل منهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`. نسمي إسقاط كل ساق على اتجاه القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم؛ القاعدة الأخرى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mo>+</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`. بفيثاغورس:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



مساحة شبه المنحرف نصف مجموع القاعدتين في الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">[</mo><mn dir="ltr">٦</mn><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>
\`\`\`



نشتق بقاعدة الضرب، ومشتقة الجذر تساوي مشتقة المدخل مقسومة على ضعفي الجذر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt><mo>−</mo><mfrac><mrow><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><msqrt><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac></mrow></math>
\`\`\`



المقام و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>\` موجبان؛ فتكون المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وسالبة بعدها، وتتحقق العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><msqrt><mn dir="ltr">٢٧</mn></msqrt><mo>=</mo><mn dir="ltr">٢٧</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`



أما إذا كانت القاعدة ذات الطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` هي الكبرى، فالقاعدة الأخرى لا تتجاوز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` والارتفاع لا يتجاوز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، فتكون المساحة\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>≤</mo></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\`، وهي أقل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٧</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>\`. إذن أكبر مساحة في جميع الحالات هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٧</mn><msqrt><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></msqrt></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p050-r9
title: الكامل، الوحدة الثانية · الصورة، ٥٠ · ص ٤٩ · البند ٩ · ٢٠١٨
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow></math>\` مثلث قائم الزاوية في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، ومتساوي الساقين، وطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></mrow></mrow></math>\` سم. ما مساحة أكبر مستطيل يمكن رسمه داخل المثلث بحيث ينطبق أحد أضلاعه على الوتر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، ويقع الرأسان الآخران على ضلعي القائمة؟
solution:
في المثلث القائم متساوي الساقين، إذا كان طول الساق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\`، يعطي فيثاغورس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">ل</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mrow><msup><mn mathvariant="normal">٢</mn><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ل</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٧٢</mn></mrow></math>\`.

نحسب الارتفاع على الوتر بمساواة صيغتي مساحة المثلث: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><msup><mi mathvariant="normal">ل</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ع</mi></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mn dir="ltr">٧٢</mn><mn dir="ltr">١٢</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` سم.

نفرض ارتفاع المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٦</mn></mrow></math>\`. بتشابه المثلث العلوي مع المثلث الأصلي تكون نسبة العرض إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` مساوية لنسبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">العرض</mtext><mo>=</mo><mn dir="ltr">١٢</mn><mfrac><mrow><mn dir="ltr">٦</mn><mo>−</mo><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">العرض</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`؛ نشتق ونساوي بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` سالبة، فتتحقق العظمى. العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mrow><mn dir="ltr">٢</mn><mo>×</mo><mn dir="ltr">٣</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` سم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p052-r1
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ١ · ٢٠٢١ — الدور الثاني
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد حجم أكبر مخروط دائري قائم طول راسمه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mn dir="ltr">١٢</mn></mrow></msqrt></mrow></math>\` سم.
solution:
نفرض ارتفاع المخروط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` سم ونصف قطره نق سم. الراسم طوله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">١٢</mn></msqrt></math>\` وهو وتر المثلث القائم في المقطع المحوري؛ لذا بفيثاغورس:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">نق</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">نق</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



كلا البعدين موجب، إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ع</mi></mrow><mo>&lt;</mo><msqrt><mn dir="ltr">١٢</mn></msqrt></mrow></math>\`. حجم المخروط ثلث مساحة القاعدة في الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ح</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mi mathvariant="normal">ع</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ع</mi><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٣</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ح</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mi>π</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة بالصفر؛ نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، ونختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` لأن الارتفاع موجب. الإشارة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وسالبة بعدها داخل المجال، فتتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">نق</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ح</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mi>π</mi><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



أكبر حجم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u2-p052-r2
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ٢ · ٢٠٢٢
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد أكبر مساحة ممكنة لمستطيل يمكن رسمه داخل دائرة طول نصف قطرها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\` سم، بحيث يقع أحد أضلاعه على قطر الدائرة ورأساه الآخران على الدائرة.
solution:
 المثلث من مركز الدائرة إلى أحد الرأسين قائم؛ بفيثاغورس:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



كلا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` موجب، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></math>\`. المساحة هي العرض في الارتفاع. نعظم مربعها لأن تربيع عدد موجب يحفظ ترتيب القيم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نشتق مربع المساحة بقاعدة القوة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجب؛ تنعدم المشتقة عندما:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



تكون المشتقة موجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` أصغر من هذا المقدار، وسالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` أكبر منه؛ إذن يتحقق أكبر مربع للمساحة وأكبر مساحة. من فيثاغورس يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هو المقدار نفسه، ولأنهما موجبان فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٦</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p052-r3
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ٣ · ٢٠٢٢ — الدور الثاني
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow><mi mathvariant="normal">د</mi></mrow></math>\` مستطيل فيه طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></mrow></math>\` متراً، وطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></mrow></math>\` متراً، و نقطة على الضلع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`. عين موقع النقطة و بحيث تكون قيمة المقدار ثلاثة أمثال طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و مضافاً إليه طول و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` أقل ما يمكن.
solution:


نسمي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\`؛ من فيثاغورس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">و</mi></mrow><mo>=</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٦</mn><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\`، وو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ف</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msqrt><mrow><mn dir="ltr">١٦</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt><mo>+</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



مشتقة الجذر بقاعدة السلسلة هي مشتقة ما داخله على ضعفي الجذر. نشتق ثم نساوي بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mfrac><mi mathvariant="normal">س</mi><msqrt><mrow><mn dir="ltr">١٦</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mfrac><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نضرب في الجذر الموجب؛ نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><msqrt><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٦</mn><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></msqrt></mrow></math>\`. الطرفان غير سالبين، فيجوز تربيعهما دون تغيير الحلول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المشتقة الثانية موجبة، فتكون القيمة صغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ف</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٤٨</mn><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mfrac><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow></math>\` متر.
:::


:::exam-question
id: math-kamel-u2-p052-r4
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ٤ · ٢٠٢٣
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك طوله \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢٠</mn></mrow></math>\` سم، تم قطعه إلى أجزاء لتشكيل حواف (أحرف) صندوق على شكل متوازي مستطيلات قاعدته مربعة الشكل. ما أكبر حجم ذلك الصندوق؟
solution:


للصندوق ثمانية أحرف بطول ضلع القاعدة وأربعة بطول الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١٢٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`



الحجم مساحة القاعدة في الارتفاع؛ نشتق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



تتحول المشتقة من موجب إلى سالب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`؛ نحسب الحجم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">١٠</mn><mo>⟹</mo><mtext dir="rtl">ح</mtext><mo>=</mo><mn dir="ltr">١٠٠٠</mn><mtext dir="rtl">سم³</mtext></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٠٠٠</mn></mrow></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p052-r5
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ٥ · ٢٠٢٣ — الدور الثاني
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة أكبر مستطيل يمكن رسمه داخل دائرة طول نصف قطرها يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\` سم؟
solution:
 أي نصفه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`. المثلث من مركز الدائرة إلى أحد الرأسين قائم؛ بفيثاغورس:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">ص</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>
\`\`\`



كلا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` موجب، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٥</mn></mrow></math>\`. المساحة هي العرض في الارتفاع. نعظم مربعها لأن تربيع عدد موجب يحفظ ترتيب القيم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٢٥</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نشتق مربع المساحة بقاعدة القوة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mn dir="ltr">٣٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢٥</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجب؛ تنعدم المشتقة عندما:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٥</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٢٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



تكون المشتقة موجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` أصغر من هذا المقدار، وسالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` أكبر منه؛ إذن يتحقق أكبر مربع للمساحة وأكبر مساحة. من فيثاغورس يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ص</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هو المقدار نفسه، ولأنهما موجبان فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mfrac><mn dir="ltr">٢٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٠</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p052-r6
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ٦ · ٢٠٢٣ — الدور الثالث
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما مساحة أكبر مستطيل يمكن إحاطته بسياج طوله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٦</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\`؟
solution:


السياج هو المحيط؛ إذا كان أحد البعدين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` فالآخر نصف المحيط ناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نكتب المساحة ونشتق لإيجاد أكبر قيمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



المشتقة الثانية سالبة؛ البعدان متساويان ونحسب المساحة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>⟹</mo><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١٦</mn><mtext dir="rtl">م²</mtext></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١٦</mn></mrow></mrow><mrow><msup><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p052-r7
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ٧ · ٢٠٢٤ — الدور الأول
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يراد إنشاء خزان على شكل متوازي مستطيلات قاعدته مربعة الشكل ومفتوح من الأعلى بتكلفة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٨</mn></mrow></math>\` ديناراً، فإذا كانت تكلفة المتر المربع من القاعدة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\` ديناراً، وتكلفة المتر المربع من الجوانب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\` دنانير، أوجد أبعاد الخزان بحيث تكون سعته أكبر ما يمكن.
solution:
نفرض ضلع القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">م</mi></mrow></math>\` والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mi mathvariant="normal">م</mi></mrow></math>\`. مساحة القاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`، ومساحة الجوانب الأربعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">ع</mi></mrow></math>\`. نجمع تكلفتها وفق السعرين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mtext dir="rtl">سع</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٨</mn></mrow></math>
\`\`\`



نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\` ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">سع</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext></mfrac><mo>−</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



إيجابية الارتفاع تقتضي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>\`. حجم الخزان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مساحة القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext></mfrac><mo>−</mo><mtext dir="rtl">س</mtext><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



تنعدم المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` لأنه طول موجب. المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وسالبة بعدها، فتتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الأبعاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١</mn><mi mathvariant="normal">م</mi></mrow><mo>×</mo><mrow><mn dir="ltr">١</mn><mi mathvariant="normal">م</mi></mrow></mrow><mo>×</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p052-r8
title: الكامل، الوحدة الثانية · الصورة، ٥٢ · ص ٥١ · البند ٨ · ٢٠٢٤ — الدور الثاني
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow><mi mathvariant="normal">د</mi></mrow></math>\` شبه منحرف متساوي الساقين محيطه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn></mrow></math>\` سم وقياس الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٦٠</mn><mo>°</mo></mrow></mrow></mrow></math>\`. احسب أطوال أضلاعه التي تجعل مساحته أكبر ما يمكن؟
solution:
نفرض طول كل ساق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، وطول القاعدة الصغرى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، بوحدة السم. إسقاط الساق الأفقي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٦٠</mn></mrow></mrow><mo>=</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٦٠</mn></mrow></mrow><mo>=</mo><mfrac><msqrt><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></msqrt><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.

فرق القاعدتين ضعف الإسقاط، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ فتكون الكبرى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mi mathvariant="normal">س</mi></mrow></math>\`. من المحيط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mtext dir="rtl">ص</mtext><mo>+</mo><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo>+</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\` ليكون طول القاعدة الصغرى موجبًا. مساحة شبه المنحرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">نصف مجموع القاعدتين</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><mo>+</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mfrac><mrow><msqrt><mn dir="ltr">٣</mn></msqrt><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><msqrt><mn dir="ltr">٣</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



المشتقة تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`، وموجبة قبلها وسالبة بعدها؛ فتتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>+</mo><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`



الساقان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">د</mi></mrow></math>\`:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` سم لكل منهما. القاعدتان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` سم، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>\` سم.
:::


:::exam-question
id: math-kamel-u2-p053-r1
title: الكامل، الوحدة الثانية · الصورة، ٥٣ · ص ٥٢ · البند ١ · تجريبي — ٢٠٢٠
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow></math>\` مثلث قائم الزاوية في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></mrow></mrow></math>\`، وطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` نقطة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` نقطة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، و نقطة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`. جد أبعاد المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\` التي تكون عندها مساحة المستطيل أكبر ما يمكن.
solution:
نفرض بعدي المستطيل على ضلعي القائمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، بوحدة طول السؤال. تشابه المثلثات يعطي نسبة الجزء المستهلك من كل ضلع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٤</mn></mfrac><mo>+</mo><mfrac><mtext dir="rtl">ص</mtext><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></math>\`. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>\`؛ نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` ثم نشتق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></math>\` سالبة، فتتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



البعدان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u2-p053-r2
title: الكامل، الوحدة الثانية · الصورة، ٥٣ · ص ٥٢ · البند ٢ · تجريبي غرب غزة — ٢٠٢٠
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\` قطر في دائرة طوله \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\` سم، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` نقطة تبدأ حركتها من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` على محيط الدائرة باتجاه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`. أوجد قياس الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` بحيث تكون مساحة المثلث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow></math>\` أكبر ما يمكن.
solution:


زاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` قائمة لأنها تقابل قطر الدائرة؛ إذا كانت زاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">θ</mi></math>\`، فالساقان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">θ</mi></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">θ</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>⋅</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>θ</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi>θ</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الجيب أكبره واحد؛ نختار الزاوية داخل المجال الحاد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi>θ</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>⟹</mo><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
:::


:::exam-question
id: math-kamel-u2-p053-r3
title: الكامل، الوحدة الثانية · الصورة، ٥٣ · ص ٥٢ · البند ٣ · تجريبي الوسطى — ٢٠٢٠
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد أكبر حجم لمخروط دائري قائم يمكن رسمه داخل مخروط دائري قائم آخر نصف قطر قاعدته \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\` سم وارتفاعه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\` سم، بحيث ينطبق رأس المخروط الداخلي مع مركز قاعدة المخروط الخارجي.
solution:
نفرض ارتفاع المخروط الداخلي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ع</mi></math>\` ونصف قطره \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ع</mi></mrow><mo>&lt;</mo><mn dir="ltr">١٢</mn></mrow></math>\`. في مقطع المخروط الخارجي تتشابه المثلثات، فينخفض نصف القطر مع الارتفاع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mtext dir="rtl">ع</mtext></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



حجم المخروط الداخلي ثلث مساحة قاعدته\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>×</mo></math>\`ارتفاعه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mtext dir="rtl">ع</mtext><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نشتق بالضرب والسلسلة ثم نأخذ العامل المشترك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">[</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ع</mtext></mrow><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mtext dir="rtl">ع</mtext><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



العامل الأول موجب داخل المجال. لذلك المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وسالبة بعدها، فيكون الحجم أكبر ما يمكن عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><msup><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٥٦</mn><mi>π</mi></mrow><mn dir="ltr">٢٧</mn></mfrac></mrow></math>
\`\`\`



أكبر حجم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٢٥٦</mn><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢٧</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u2-p053-r4
title: الكامل، الوحدة الثانية · الصورة، ٥٣ · ص ٥٢ · البند ٤ · تجريبي طولكرم — ٢٠٢٣
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة أكبر مستطيل يمكن رسمه داخل شبه المنحرف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mi mathvariant="normal">ج</mi></mrow><mi mathvariant="normal">د</mi></mrow></math>\` الذي فيه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi></mrow></math>\` يوازي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\` عمودي على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، حيث طول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></mrow></mrow></math>\` سم، وطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">د</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></mrow></mrow></math>\` سم، وطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><mrow><mo>=</mo><mn dir="ltr">٥٠</mn></mrow></mrow></mrow></math>\` سم، بحيث يقع أحد أضلاعه على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\`، والضلع الآخر على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow></math>\`، ورأسه الرابع على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">د</mi></mrow></math>\`؟
solution:
نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. بما أن القاعدتين أفقيتان، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢٠</mn><mo>،</mo><mn dir="ltr">٣٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. رأس المستطيل الرابع يقع على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">د</mi></mrow></math>\`.

ميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">د</mi></mrow></math>\` فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` على فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الميل</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٣٠</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



بمروره \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">ج</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، تكون معادلته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نفرض ارتفاع المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`، فيكون عرضه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mi mathvariant="normal">ص</mi></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">ص</mi></mrow><mo>≤</mo><mn dir="ltr">٣٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">(</mo><mn dir="ltr">٥٠</mn><mo>−</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥٠</mn><mtext dir="rtl">ص</mtext><mo>−</mo><msup><mtext dir="rtl">ص</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">ص</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext></mrow></math>
\`\`\`



نساوي بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٥</mn></math>\` ضمن المجال، والمشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` سالبة؛ فتتحقق العظمى. العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥٠</mn><mo>−</mo><mn dir="ltr">٢٥</mn></mrow><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>\` سم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٢٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٢٥</mn></mrow></math>
\`\`\`



المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦٢٥</mn><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p053-r5
title: الكامل، الوحدة الثانية · الصورة، ٥٣ · ص ٥٢ · البند ٥ · تجريبي الخليل — ٢٠٢٤
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تتحرك النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mrow><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>،</mo><mi mathvariant="normal">ص</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` على منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، ورسم منها عمودان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ج</mi></mrow></math>\` على محوري السينات والصادات على الترتيب. جد بعدي المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`، حيث و نقطة الأصل، لتكون محيطه أقل ما يمكن.
solution:
إسقاط النقطة على المحورين يعطي بعدي المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. المحيط ضعف مجموع البعدين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



نساوي المشتقة بالصفر، ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` لأنه طول موجب. المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mfrac></math>\` موجبة لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فتتحقق الصغرى.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`



البعدان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` بوحدة الطول المستعملة. يطبع المفتاح سم، لكن نص السؤال لا يحدد وحدة قياس.
:::


:::exam-question
id: math-kamel-u2-p053-r6
title: الكامل، الوحدة الثانية · الصورة، ٥٣ · ص ٥٢ · البند ٦ · تجريبي طوباس — ٢٠٢٤
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` نقطتان ماديتان، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` تقع شرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` والمسافة الأفقية بينهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢٨</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\`. فإذا انطلقت النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` إلى الشمال بسرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mn dir="ltr">٢</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`، وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn></mrow></mrow><mi mathvariant="normal">ث</mi></mrow></math>\` انطلقت النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` إلى الشرق بسرعة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mrow><mn dir="ltr">٤</mn></mrow></mrow><mi mathvariant="normal">م</mi></mrow><mi mathvariant="normal">ث</mi></mfrac></math>\`، جد الزمن الذي تكون فيه المسافة بين النقطتين أقل ما يمكن؟
solution:
نقيس الزمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بالثواني من بدء حركة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`. نريد أقل مسافة في جميع الأزمنة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، فنفصل المرحلتين.

خلال أول ثانيتين تبقى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` ثابتة؛ الفصل الأفقي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٨</mn><mi mathvariant="normal">م</mi></mrow></math>\` والرأسي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` نم. بفيثاغورس:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢٨</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٧٨٤</mn><mo>+</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>≤</mo><mi mathvariant="normal">ن</mi><mo>≤</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



هذه تتزايد، فأصغر مربع للمسافة في المرحلة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧٨٤</mn></math>\` عند البداية.

بعد بدء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` في الحركة شرقًا، تكون قد تحركت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">م</mi></mrow></math>\`؛ لذلك الفصل الأفقي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٨</mn><mo>−</mo><mrow><mn dir="ltr">٤</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣٦</mn><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></mrow></mrow></math>\`، والرأسي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٣٦</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>≥</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نوسع ثم نشتق؛ تصغير المربع يصغر المسافة لأن الجذر متزايد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٩٦</mn><mo>−</mo><mn dir="ltr">٢٨٨</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢٠</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><msup><mo stretchy="false">)</mo><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢٨٨</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢٨٨</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mn dir="ltr">٢٨٨</mn><mn dir="ltr">٤٠</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣٦</mn><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٧٫٢</mn></mrow></math>
\`\`\`



المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٠</mn></math>\` موجبة، فتحقق هذه اللحظة أصغر مربع في المرحلة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣٦</mn><mn dir="ltr">٥</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١٢٩٦</mn><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢٥٩٫٢</mn><mo>&lt;</mo><mn dir="ltr">٧٨٤</mn></mrow></math>
\`\`\`



إذن هذه أقل مسافة في المرحلتين، وتحدث بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧٫٢</mn><mi mathvariant="normal">ث</mi></mrow></math>\` من انطلاق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٫٢</mn><mi mathvariant="normal">ث</mi></mrow></math>\` من انطلاق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
:::


:::exam-question
id: math-kamel-u2-p053-r7
title: الكامل، الوحدة الثانية · الصورة، ٥٣ · ص ٥٢ · البند ٧ · تجريبي نابلس — ٢٠٢٤
question: التطبيقات العملية على القيم القصوى
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
داخل المنطقة المثلثة المحدودة بالمستقيمين \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`، ومحور السينات، يُرسم مثلث قاعدته أفقية وطرفاها على المستقيمين، ورأسه الثالث على القطعة المحصورة بين تقاطعيهما مع محور السينات. أوجد أكبر مساحة ممكنة لهذا المثلث.
solution:
نختار ارتفاع القاعدة فوق محور السينات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ت</mi></math>\`. عند هذا الارتفاع نوجد موضعي طرفي القاعدة بالتعويض في المستقيمين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">يسار</mi></msub><mo>⟹</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">يسار</mi></msub><mo>=</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">يمين</mi></msub><mo>⟹</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">يمين</mi></msub><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



يتقاطع المستقيمان عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، لذا يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ت</mi></mrow><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></math>\` داخل المنطقة المحدودة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



طول القاعدة فرق الإحداثيين السينيين، وارتفاع المثلث عن رأسه على المحور يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ت</mi></math>\`، مهما كان موضع ذلك الرأس على القطعة المحددة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">يسار</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">يمين</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">يسار</mi></msub><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">يسار</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نشتق المساحة ونحدد نقطة توقفها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وسالبة بعدها، فتكون هذه أكبر مساحة ضمن المنطقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi mathvariant="normal">م</mi><mtext dir="rtl">العظمى</mtext></msub><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl"> وحدات مربعة</mtext></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`

:::


:::exam-question
id: math-kamel-u2-p054-r4
title: الكامل، الوحدة الثانية · الصورة، ٥٤ · ص ٥٣ · البند ٤ · أسئلة للمهتمين — ٤
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسيم يسير في خط مستقيم وفقاً للعلاقة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ف</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ف</mi></math>\` المسافة بالأمتار، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الزمن بالثواني. أوجد أقل تسارع ممكن لهذا الجسم.
solution:
السرعة مشتقة الموقع بالنسبة إلى الزمن، والتسارع مشتقة السرعة. نشتق العلاقة مرتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣٦</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٦</mn><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٧٢</mn><mtext dir="rtl">ن</mtext><mo>+</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نكمل المربع لتظهر أصغر قيمة؛ نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` عاملًا مشتركًا من الحدين الأولين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><msup><mtext dir="rtl">ن</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">]</mo><mo>+</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ت</mtext><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">ن</mtext><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩٢</mn></mrow></math>
\`\`\`



المربع غير سالب، فيكون التسارع\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>≥</mo></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٩٢</mn></mrow></math>\`. تتحقق المساواة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، وهو زمن مسموح.

أقل تسارع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mn dir="ltr">٩٢</mn><mi mathvariant="normal">م</mi></mrow></mrow><mrow><msup><mi mathvariant="normal">ث</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></math>\`؛ الإشارة تصف اتجاه التسارع وفق محور الحركة المختار.
:::


:::exam-question
id: math-kamel-u2-p054-r5
title: الكامل، الوحدة الثانية · الصورة، ٥٤ · ص ٥٣ · البند ٥ · أسئلة للمهتمين — ٥
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أوجد حجم أكبر أسطوانة دائرية قائمة يمكن رسمها داخل كرة نصف قطرها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow></math>\` سم.
solution:
نفرض نصف ارتفاع الأسطوانة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سم، ونصف قطر قاعدتها نق. مقطع يمر بمحور الأسطوانة يعطي مثلثًا قائمًا وتره نصف قطر الكرة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٣</mn></msqrt></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">نق</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">نق</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



الارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>\`. حجم الأسطوانة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مساحة القاعدة</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mi>π</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi>π</mi><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mi>π</mi><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ح</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi>π</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجب؛ تنعدم المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وتكون موجبة قبلها وسالبة بعدها. إذن تتحقق العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">نق</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الارتفاع</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ح</mtext><mo>=</mo><mi>π</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi>π</mi></mrow></math>
\`\`\`



أكبر حجم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">π</mi></mrow><mrow><msup><mi mathvariant="normal">سم</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p054-r6
title: الكامل، الوحدة الثانية · الصورة، ٥٤ · ص ٥٣ · البند ٦ · أسئلة للمهتمين — ٦
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لدى مزارع \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">٣٦٠</mn></mrow></math>\` مترًا من السلك، يريد بها إحاطة ست حظائر مستطيلة متطابقة متلاصقة مرتبة في صفين وثلاثة أعمدة، مع تسوير الحد الخارجي وجميع الفواصل الداخلية. كل فاصل مشترك يُحسب مرة واحدة. ما أكبر مساحة كلية للحظائر؟
solution:
لنرمز لطول المستطيل الخارجي الأفقي ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، ولعرضه الرأسي ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`. نعد أطوال السلك أولًا وفق التخطيط المحدد.

هناك ثلاثة أسوار أفقية بطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`: العلوي والسفلي والفاصل بين الصفين. وهناك أربعة أسوار رأسية بطول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`: الطرفان والفاصلان بين الأعمدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣٦٠</mn></mrow></math>
\`\`\`



المساحة الكلية هي مساحة المستطيل الخارجي. نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` من قيد السلك حتى تصبح المساحة بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` فقط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٣٦٠</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi><mo>=</mo><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩٠</mn><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



يشترط طولان موجبان، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">١٢٠</mn></mrow></math>\`. نشتق المساحة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩٠</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦٠</mn></mrow></math>
\`\`\`



المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٠</mn></math>\` وسالبة بعدها؛ إذن هذه المساحة العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٦٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩٠</mn><mo>−</mo><mn dir="ltr">٤٥</mn><mo>=</mo><mn dir="ltr">٤٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mtext dir="rtl">العظمى</mtext></msub><mo>=</mo><mn dir="ltr">٦٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٤٥</mn><mo stretchy="false">)</mo><mo>=</mo><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mn dir="ltr">٢٧٠٠</mn><mtext> </mtext><msup><mi mathvariant="normal">م</mi><mn dir="ltr">٢</mn></msup></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



للتحقق من السلك: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٦٠</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٤٥</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٣٦٠</mn></mrow></math>\` مترًا. وتتكون الحظائر الست من مستطيلات متطابقة، أبعاد كل منها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\` مترًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٢٫٥</mn></math>\` مترًا.

:::


:::exam-question
id: math-kamel-u2-p055-r1
title: الكامل، الوحدة الثانية · الصورة، ٥٥ · ص ٥٤ · البند ١ · أسئلة للمهتمين — ٧
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة أكبر مستطيل يمكن رسمه داخل مثلث قائم وتره \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn></mrow></math>\` وإحدى زواياه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٠</mn></mrow></math>\` درجة.
solution:
الساق المقابلة لزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٠</mn></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٤</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mn dir="ltr">٣٠</mn></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>\`، والساق الأخرى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢٤</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mn dir="ltr">٣٠</mn></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">١٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></mrow></math>\`.

نضع ضلعين متجاورين للمستطيل على ساقي المثلث، ونسمي طولهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\`. الرأس المقابل يقع على الوتر. المثلث الصغير فوق المستطيل مشابه للمثلث الكبير؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mi mathvariant="normal">ص</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></math>\`. نرتبها:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mtext dir="rtl">س</mtext><mn dir="ltr">١٢</mn></mfrac><mo>+</mo><mfrac><mtext dir="rtl">ص</mtext><mrow><mn dir="ltr">١٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">١٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt><mo>−</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">١٢</mn></mrow></math>\`. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ص</mi></mrow></math>\`؛ نشتق لتحديد العظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt><mtext dir="rtl">س</mtext><mo>−</mo><msqrt><mn dir="ltr">٣</mn></msqrt><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` وسالبة بعدها، فتتحقق العظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ص</mtext><mo>=</mo><mn dir="ltr">١٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt><mo>−</mo><mn dir="ltr">٦</mn><msqrt><mn dir="ltr">٣</mn></msqrt><mo>=</mo><mn dir="ltr">٦</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><msqrt><mn dir="ltr">٣</mn></msqrt><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٦</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٦</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u2-p055-r2
title: الكامل، الوحدة الثانية · الصورة، ٥٥ · ص ٥٤ · البند ٢ · أسئلة للمهتمين — ٨
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد أكبر مساحة ممكنة للمستطيل في الشكل التالي.

![المستطيل بين المنحنى والمستقيم الأفقي على الشبكة الإحداثية الأصلية](assets/lessons/curriculum-evidence/ff7ae0ce21ec04efcb2e.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/ff7ae0ce21ec04efcb2e.webp)

من الرسم أعلى المستطيل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`، وأسفله على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`. بالتماثل نفرض نصف العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فيكون العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

الارتفاع فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` العلوي والسفلي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الارتفاع</mtext><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><msqrt><mn dir="ltr">١٢</mn></msqrt></mrow></math>\` ليكون الارتفاع موجبًا. المساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">العرض</mtext><mo>×</mo><mtext dir="rtl">الارتفاع</mtext></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">م</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نساوي بالصفر ثم نختار الجذر الموجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وسالبة بعدها، فتتحقق العظمى. العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` والارتفاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">م</mtext><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`



أكبر مساحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\` وحدة مربعة.
:::


:::exam-question
id: math-kamel-u2-p055-r3
title: الكامل، الوحدة الثانية · الصورة، ٥٥ · ص ٥٤ · البند ٣ · أسئلة للمهتمين — ٩
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مساحة أكبر مستطيل أضلاعه موازية للمحورين ومحـصور داخل المنطقة بين المنحنيين \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، بحيث يقع رأساه السفليان على الأول ورأساه العلويان على الثاني.
solution:
الرأسان السفليان لهما الارتفاع نفسه؛ لذلك يكون إحداثياهما السينيان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، وكذلك الرأسان العلويان. عرض المستطيل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.

ارتفاع المستطيل هو قيمة المنحنى العلوي ناقص قيمة السفلي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ع</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



حتى يكون العرض والارتفاع موجبين داخل المنطقة، يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`



نشتق ثم نبحث داخل المجال عن موضع تغير إشارة المشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">م</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



رفضنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لأنه لا يمثل نصف عرض موجب. المشتقة موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وسالبة بعدها حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msqrt><mn dir="ltr">٣</mn></msqrt></math>\`؛ فتتحقق أكبر مساحة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">العرض</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الارتفاع</mtext><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi mathvariant="normal">م</mi><mtext dir="rtl">العظمى</mtext></msub><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mtext dir="rtl"> وحدات مربعة</mtext></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`

:::


:::exam-question
id: math-kamel-u2-p055-r4
title: الكامل، الوحدة الثانية · الصورة، ٥٥ · ص ٥٤ · البند ٤ · أسئلة للمهتمين — ١٠
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` الحرجة ومجالات تزايد وتناقص الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
اللوغاريتم الطبيعي يعرف عندما يكون مدخله موجبًا. نحل شرط المجال أولًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



العاملان يعطيان حاصل ضرب موجبًا عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></math>\`. مشتقة اللوغاريتم مشتقة المدخل مقسومة على المدخل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow><mrow><mtext dir="rtl">س</mtext><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



المقام موجب داخل المجال، فتتبع إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. وتنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، ولا توجد نقاط عدم اشتقاق داخل المجال.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\` وسالبة بعدها. إذن القيمة الحرجة الوحيدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، والتزايد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\` والتناقص على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p055-r5
title: الكامل، الوحدة الثانية · الصورة، ٥٥ · ص ٥٤ · البند ٥ · أسئلة للمهتمين — ١١
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتران كثير حدود ومتزايداً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\` ويقع في الربع الثاني، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi></mrow></math>\`، جد فترات التزايد والتناقص لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


في الربع الثاني تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` موجبة و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سالبة؛ نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` من المعطى ونشتق الكسر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متزايدة فمشتقتها غير سالبة؛ لذلك البسط موجب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` موجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo>⟹</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



المشتقة موجبة على الفترة، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` متزايدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">تزايد</mtext><mo>:</mo><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p056-r1-a
title: الكامل، الوحدة الثانية · الصورة، ٥٦ · ص ٥٥ · البند ١ · الجزء ١ · أسئلة للمهتمين — ١٣
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المشتقة الثانية \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup></mrow></math>\` داخل \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` قابل للاشتقاق مرتين داخل الفترة ومشتقته الأولى متصلة على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">]</mo></mrow></math>\`. ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` الإحداثي السيني لتقاطع الرسم الموجب مع محور السينات. إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` عند \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` عند \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">ب</mi><mo>&lt;</mo><mi mathvariant="normal">ج</mi></mrow></math>\`، وكان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فحدّد فترات تزايد \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` وتناقصه داخل \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>\`، ونوع القيم القصوى عند \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi></mrow></math>\`، بدلالة هذين الرمزين.

![الرسم الأصلي للمشتقة الثانية](assets/lessons/curriculum-evidence/7db2f317ab7c7a165230.webp)
solution:
نحتاج إشارة المشتقة الأولى لمعرفة تزايد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` وتناقصه. الرسم المعطى هو المشتقة الثانية؛ فهو يخبرنا أين تتزايد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` وأين تتناقص.

![الرسم الأصلي للمشتقة الثانية](assets/lessons/curriculum-evidence/7db2f317ab7c7a165230.webp)

بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` يقع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` تحت المحور؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` متناقصة. ولأنها تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، فهي موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` وسالبة بعده حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` يقع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` فوق المحور؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` متزايدة. صفرها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` يفصل الجزء السالب عن الجزء الموجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo separator="true">,</mo><mi mathvariant="normal">ج</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` يتناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. لكنه يبقى موجبًا حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`؛ لأن قيمته الأخيرة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` موجبة، وكل قيمة سابقة في فترة التناقص أكبر منها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بجمع الفترات ذات الإشارة نفسها نحصل على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">التزايد: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">التناقص: </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` تتغير المشتقة الأولى من موجب إلى سالب، فتوجد عظمى محلية. وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` تتغير من سالب إلى موجب، فتوجد صغرى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">العظمى عند </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">الصغرى عند </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo separator="true">,</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p056-r1-b
title: الكامل، الوحدة الثانية · الصورة، ٥٦ · ص ٥٥ · البند ١ · الجزء ٢ · أسئلة للمهتمين — ١٣
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المشتقة الثانية \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup></mrow></math>\` لاقتران قابل للاشتقاق مرتين على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>\`. ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` الإحداثي السيني الموجب لتقاطع الرسم مع محور السينات. حدّد فترات تقعر منحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` للأعلى وللأسفل داخل \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>\`، بدلالة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`.

![الرسم الأصلي للمشتقة الثانية](assets/lessons/curriculum-evidence/7db2f317ab7c7a165230.webp)
solution:
المشتقة الثانية الموجبة تعني تقعر المنحنى للأعلى، والسالبة تعني تقعره للأسفل؛ لذلك نقرأ موضع الرسم بالنسبة إلى محور السينات مباشرة.

![الرسم الأصلي للمشتقة الثانية](assets/lessons/curriculum-evidence/7db2f317ab7c7a165230.webp)

الرسم تحت المحور قبل صفر، وفوقه بين صفر و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\`، ثم تحته بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` حتى نهاية الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi mathvariant="normal">ج</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">التقعر للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi mathvariant="normal">ج</mi><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">التقعر للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p056-r1-c
title: الكامل، الوحدة الثانية · الصورة، ٥٦ · ص ٥٥ · البند ١ · الجزء ٣ · أسئلة للمهتمين — ١٣
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المشتقة الثانية \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup></mrow></math>\` لاقتران قابل للاشتقاق مرتين على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>\`. ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` الإحداثي السيني الموجب لتقاطع الرسم مع محور السينات. أوجد نقطتي انعطاف منحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\`، بدلالة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` وقيم الاقتران عندهما.

![الرسم الأصلي للمشتقة الثانية](assets/lessons/curriculum-evidence/7db2f317ab7c7a165230.webp)
solution:
نقطة الانعطاف تتطلب اتصال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` وتغير تقعره، لا مجرد انعدام مشتقته الثانية. الاتصال متحقق لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` قابل للاشتقاق.

![الرسم الأصلي للمشتقة الثانية](assets/lessons/curriculum-evidence/7db2f317ab7c7a165230.webp)

يتغير رسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` من أسفل المحور إلى أعلاه؛ فتتغير إشارته من السالب إلى الموجب، ويتحول تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` من الأسفل إلى الأعلى.

وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">جـ</mi></mrow></math>\` يتغير \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` من الموجب إلى السالب، فيتحول التقعر من الأعلى إلى الأسفل.

إذن الموضعان نقطتا انعطاف. نعبر عن الإحداثيين الصاديين بقيم الاقتران؛ لأن الرسم المعطى للمشتقة الثانية لا يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">جـ</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mspace width="1em"/><mtext dir="rtl">و</mtext><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mo separator="true">,</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ج</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p057-r1
title: الكامل، الوحدة الثانية · الصورة، ٥٧ · ص ٥٦ · البند ١ · أسئلة للمهتمين — ١٥
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` يمس منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عند نقطة الأصل، وكان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
solution:


الاقتران حاصل ضرب عوامل تتغير مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نشتق كل عامل مع إبقاء بقية العوامل، ثم نجمع النتائج.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`



ميل المماس المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`؛ نساويه بمشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند الأصل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



عند الصغرى الداخلية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` تنعدم المشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نتحقق من الصغرى بالمشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p057-r3
title: الكامل، الوحدة الثانية · الصورة، ٥٧ · ص ٥٦ · البند ٣ · أسئلة للمهتمين — ١٧
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، له قيمة عظمى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">م</mi></mrow></math>\`، وله قيمة صغرى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">م</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>\`، فما قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
solution:
نحدد موضعي العظمى والصغرى من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، ثم نعوض قيمتيهما في العلاقة المعطاة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أس</mtext><mo>+</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`. إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، وسالبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></math>\`، وموجبة بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></math>\`. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\` للعظمى و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>\` للصغرى.

نعوض كل موضع في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٨</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">م</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٣٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">أ</mtext><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p057-r4
title: الكامل، الوحدة الثانية · الصورة، ٥٧ · ص ٥٦ · البند ٤ · أسئلة للمهتمين — ١٨
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد قاعدة الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` من الدرجة الثالثة الذي يمر منحناه بنقطة الأصل وله نقطة حرجة عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وكانت معادلة المماس للمنحنى عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` الواقعة عليه \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>−</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\`.
solution:
نكتب التكعيبي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`؛ الحد الثابت صفر لأن المنحنى يمر بالأصل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mtext dir="rtl">ب</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">جس</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">بس</mtext><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`



المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mi mathvariant="normal">ص</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\` يصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٧</mn></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`، وميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. النقطة الحرجة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٨</mn><mtext dir="rtl">ب</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نطرح معادلة القيمة من معادلة الميل، ونطرح معادلة الميل من شرط النقطة الحرجة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٥</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



من الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow></mrow></math>\`. نعوض في الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٥</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٣</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٤٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٣</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢٤</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p058-r1
title: الكامل، الوحدة الثانية · الصورة، ٥٨ · ص ٥٧ · البند ١ · أسئلة للمهتمين — ٢١
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` وصغرى محلية قيمتها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\`، جد قيمة الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">ب</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



عند الانعطاف تنعدم المشتقة الثانية؛ وهي خطية هنا فتتغير إشارتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نشتق بعد التعويض؛ إشارة المشتقة تعطي الصغرى عند الصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>:</mo><mo>−</mo><mo>→</mo><mo>+</mo></mrow></math>
\`\`\`



قيمة الصغرى المعطاة تحدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p058-r2-a
title: الكامل، الوحدة الثانية · الصورة، ٥٨ · ص ٥٧ · البند ٢ · الجزء ١ · أسئلة للمهتمين — ٢٢
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>\`، جد الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` في الحالة التالية: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايداً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`.
solution:
 نريد جميع قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` التي تجعل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متزايدًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`. نبدأ بالمشتقة لأنها تبين اتجاه التغير.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`



إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فالمشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` السالب، وتبقى سالبة قربه؛ لذلك لا يتزايد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.

إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فالمشتقة موجبة لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متزايدًا.

تبقى الحالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`: يصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></math>\`، وهو متزايد تمامًا؛ انعدام مشتقته عند نقطة واحدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` لا يفسد ذلك.

إذن الشرط الكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p058-r4
title: الكامل، الوحدة الثانية · الصورة، ٥٨ · ص ٥٧ · البند ٤ · أسئلة للمهتمين — ٢٣
question: أسئلة للمهتمين بالوحدة الثانية
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثيري حدود معرفين على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\` وممثلين كما في الشكل المجاور، جد فترات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`؟

![الرسم الأصلي لمنحنيي ق وهـ والمحورين مع القيم المعلّمة](assets/lessons/curriculum-evidence/8d4f2d36596232557305.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/8d4f2d36596232557305.webp)

من الرسم في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` موجبة ومتناقصة، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>≤</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` سالبة ومتزايدة، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`.

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">هـ</mi></mfrac></mrow></mrow></math>\`. نشتق مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بقاعدة السلسلة، والكسر بقاعدة القسمة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">سهـ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">[</mo><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نقسم البسط على المقام حدًا حدًا لتظهر الإشارات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow><mrow><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><msup><mtext dir="rtl">هـ</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">[</mo><mtext dir="rtl">هـ</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الحد الأول غير موجب، والثاني سالب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، والثالث غير موجب لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذن المجموع سالب، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` متناقصة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "تطبيقات عملية على القيم القصوى",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة تطبيقات عملية على القيم القصوى من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "18 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
