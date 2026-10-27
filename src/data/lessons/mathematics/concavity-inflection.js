import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `:::exam-question
id: math-book-p048-activity-1
title: الكتاب، ص ٤٦ · نشاط-١
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٦، نشاط-١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل منحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. ما إشارة ميل المماس للمنحنى عند كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`؟ لاحظ أن مماسي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` يقعان فوق منحناه.

![منحنى الاقتران والنقاط جـ، د، هـ، و](assets/lessons/mathematics/source-crops/u2-book-p048-activity.webp)
solution:
ميل المماس هو مقدار صعوده أو هبوطه عند الاتجاه نحو اليمين: الصاعد موجب والهابط سالب.

![المنحنى ومماساته الأصلية](assets/lessons/mathematics/source-crops/u2-book-p048-activity.webp)

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جـ</mi></math>\` المماس صاعد فميله موجب، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\` هابط فميله سالب. كلا المماسين فوق المنحنى في جوارهما؛ وهذا يصف التقعر للأسفل.
:::


:::exam-question
id: math-book-p048-activity-2
title: الكتاب، ص ٤٦ · نشاط-٢
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٦، نشاط-٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما إشارة ميل المماس للمنحنى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، و؟ لاحظ أن مماسي الاقتران عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`، و يقعان تحت منحناه.

![منحنى الاقتران والنقاط جـ، د، هـ، و](assets/lessons/mathematics/source-crops/u2-book-p048-activity.webp)
solution:
ميل المماس هو مقدار صعوده أو هبوطه عند الاتجاه نحو اليمين: الصاعد موجب والهابط سالب.

![المنحنى ومماساته الأصلية](assets/lessons/mathematics/source-crops/u2-book-p048-activity.webp)

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` المماس هابط فميله سالب، وعند و صاعد فميله موجب. كلا المماسين تحت المنحنى في جوارهما؛ وهذا يصف التقعر للأعلى.
:::


:::exam-question
id: math-book-p048-ex1
title: الكتاب، ص ٤٦ · مثال١
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٦، مثال١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حدد مجالات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`.
solution:
 التقعر تحدده المشتقة الثانية: الموجبة تقعر للأعلى والسالبة تقعر للأسفل، لأنها تصف تزايد ميل المماس أو تناقصه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. تكون موجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></math>\` وسالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`؛ نقيد الفترات بالمجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mspace width="2em"/><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p049-ex2
title: الكتاب، ص ٤٧ · مثال٢
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٧، مثال٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مجالات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">س</mi></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.
solution:
 التقعر للأعلى يقابله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وللأسفل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

نقسم كل حد في البسط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` لنبسط الاشتقاق، مع إبقاء الشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></math>
\`\`\`



نطبق قاعدة القوة مرتين:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mfrac></mrow></math>
\`\`\`



البسط موجب، والمقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></math>\` له إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` وموجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mspace width="2em"/><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



لا توجد نقطة انعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` لأنها ليست من مجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.
:::


:::exam-question
id: math-book-p049-ex3
title: الكتاب، ص ٤٧ · مثال ٣
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٧، مثال ٣
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد نقاط الانعطاف (إن وجدت) للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">]</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi>π</mi></mrow><mo stretchy="true">[</mo></mrow></mrow></math>\`.
solution:
 نقطة الانعطاف نقطة يتغير عندها التقعر؛ نختبر إشارة المشتقة الثانية، ولا نكتفي بصفرها.

نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` لتسهيل الاشتقاق:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



قاعدة السلسلة تضرب في مشتقة الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` عند كل اشتقاق:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` ينعدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\` فقط. قبله يكون الجيب موجبًا فـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة، وبعده الجيب سالب فـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` موجبة. إذن يتغير التقعر من الأسفل إلى الأعلى.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الإجابة: نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p050-ex4
title: الكتاب، ص ٤٨ · مثال ٤
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٨، مثال ٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بيّن أنه لا يوجد للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msqrt><mrow><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></msqrt></mrow></math>\` نقطة انعطاف في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">[</mo></mrow></math>\`.
solution:
 الانعطاف يحتاج تغير التقعر؛ لذلك نحسب المشتقة الثانية ونختبر إشارتها.

نشتق الجذر بقاعدة السلسلة:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><mi mathvariant="normal">س</mi><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



نشتق حاصل الضرب؛ مشتقة القوة الأخيرة تضرب في مشتقة الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></math>
\`\`\`



نوحد المقام، بكتابة الحد الأول مضروبًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٩</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mrow><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mrow><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`



داخل الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` موجبًا؛ فالمشتقة الثانية سالبة دائمًا. التقعر للأسفل في الفترة كلها ولا يتغير، لذلك لا توجد نقطة انعطاف.
:::


:::exam-question
id: math-book-p050-ex5
title: الكتاب، ص ٤٨ · مثال٥
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٨، مثال٥
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، فجد فترات التقعر للأعلى وللأسفل، ثم جد نقط الانعطاف إن وجدت.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى، والسالبة تعني تقعرًا للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



أخذنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` عاملًا مشتركًا. أصفار المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` يكون العاملان سالبين فيكون حاصل الضرب موجبًا؛ بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تختلف إشارتاهما فيكون سالبًا؛ بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` كلاهما موجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mspace width="1em"/><mtext dir="rtl">و</mtext><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، والاقتران متصل، فتوجد نقطتا انعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="2em"/><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



الإجابة: نقطتا الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p051-ex6-c
title: الكتاب، ص ٤٩ · مثال٦-ج
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٩، مثال٦-ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. اعتمادًا عليه، جد مجالات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

![منحنى المشتقة الأولى قَ(س) وعليه القيم −٣، −١، ١، ٣](assets/lessons/mathematics/source-crops/u2-book-p051-ex6.webp)
solution:
الرسم للمشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. ازدياد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` يعني أن ميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يزداد، فيكون تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` للأعلى؛ وتناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` يعني التقعر للأسفل.

![منحنى المشتقة الأولى](assets/lessons/mathematics/source-crops/u2-book-p051-ex6.webp)

المشتقة الأولى تصعد حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، ثم تهبط حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ثم تصعد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mspace width="1em"/><mtext dir="rtl">و</mtext><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p051-ex6-d
title: الكتاب، ص ٤٩ · مثال٦-د
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٤٩، مثال٦-د
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. اعتمادًا عليه، جد قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي يكون عندها نقط انعطاف إن وجدت.

![منحنى المشتقة الأولى قَ(س) وعليه القيم −٣، −١، ١، ٣](assets/lessons/mathematics/source-crops/u2-book-p051-ex6.webp)
solution:
الرسم للمشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. ازدياد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` يعني أن ميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يزداد، فيكون تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` للأعلى؛ وتناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` يعني التقعر للأسفل.

![منحنى المشتقة الأولى](assets/lessons/mathematics/source-crops/u2-book-p051-ex6.webp)

المشتقة الأولى تصعد حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، ثم تهبط حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ثم تصعد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mspace width="1em"/><mtext dir="rtl">و</mtext><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند الانتقال بين هذه الفترات؛ إذن الإحداثيان السينيان لنقطتي الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. لا يعطي الرسم قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` الصادية.
:::


:::exam-question
id: math-book-p053-exercise-1-a
title: الكتاب، ص ٥١ · تمرين-١-أ
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-١-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عين فترات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`.
solution:
 ندرس التقعر من إشارة المشتقة الثانية: الموجب للأعلى والسالب للأسفل.

نوزع العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` على حدود العامل الأول ليسهل الاشتقاق:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٨</mn><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`. تكون سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\` وموجبة بعده.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mrow><mrow><mi mathvariant="normal">∞</mi><mo separator="true">,</mo></mrow><mn dir="ltr">١</mn></mrow></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mspace width="2em" /><mtext dir="rtl">للأعلى: </mtext><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mrow><mrow><mn dir="ltr">٣</mn><mo separator="true">,</mo></mrow><mi mathvariant="normal">∞</mi></mrow></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p053-exercise-1-b
title: الكتاب، ص ٥١ · تمرين-١-ب
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-١-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عين فترات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>∈</mo></math>\` ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`[.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` على ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`[.

نحدد التقعر من إشارة المشتقة الثانية: الموجب للأعلى، والسالب للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



في الفترة السالبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` سالبة، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` موجبًا. في الفترة الموجبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` موجبة، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` سالبًا.

الإجابة: مقعر للأعلى في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`[، ومقعر للأسفل في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`[.
:::


:::exam-question
id: math-book-p053-exercise-1-c
title: الكتاب، ص ٥١ · تمرين-١-ج
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-١-ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عين فترات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`.
solution:
 نحدد التقعر بإشارة المشتقة الثانية؛ الموجب للأعلى والسالب للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



داخل المجال يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` موجبًا. العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` موجب قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وسالب بعدها؛ إذن:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mspace width="2em"/><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p053-exercise-1-d
title: الكتاب، ص ٥١ · تمرين-١-د
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-١-د
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عين فترات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></msup></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\`.

المشتقة الثانية الموجبة تعني التقعر للأعلى. نشتق بقاعدة القوة ثم نضرب في مشتقة الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`؛ هذه قاعدة السلسلة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mrow><mn dir="ltr">٤</mn><msqrt><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></msqrt></mrow></mfrac></mrow></math>
\`\`\`



على المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\` يكون المقام موجبًا؛ إذن المشتقة الثانية موجبة في المجال كله.

الإجابة: مقعر للأعلى في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">∞</mi></math>\`[، ولا توجد فترة تقعر للأسفل.
:::


:::exam-question
id: math-book-p053-exercise-1-e
title: الكتاب، ص ٥١ · تمرين-١-هـ
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-١-هـ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عين فترات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`.

المشتقة الثانية السالبة تعني التقعر للأسفل. نشتق مرتين بقاعدة السلسلة؛ في كل مرة نضرب في مشتقة الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`



داخل الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow><mo>&lt;</mo><mi mathvariant="normal">π</mi></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mfrac><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></mfrac></mrow><mo>&lt;</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، فالجيب موجب، والمشتقة الثانية سالبة.

الإجابة: مقعر للأسفل في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`[، ولا توجد فترة تقعر للأعلى.
:::


:::exam-question
id: math-book-p053-exercise-2-a
title: الكتاب، ص ٥١ · تمرين-٢-أ
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-٢-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حدد نقط الانعطاف في الحالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
solution:
 نقطة الانعطاف تحتاج تغير التقعر مع اتصال الاقتران. ندرس إشارة المشتقة الثانية:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، وتكون سالبة قبله وموجبة بعده؛ يتغير التقعر من الأسفل إلى الأعلى، والاقتران متصل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٠</mn><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الإجابة: نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p053-exercise-2-b
title: الكتاب، ص ٥١ · تمرين-٢-ب
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-٢-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حدد نقط الانعطاف في الحالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

نقطة الانعطاف تحتاج تغير التقعر؛ ندرس إشارة المشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٠</mn><mo>⟹</mo></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mfrac><mfrac><mi>π</mi><mrow><mrow><mrow><mn dir="ltr">٢</mn><mo separator="true">,</mo></mrow><mn dir="ltr">٣</mn></mrow><mi>π</mi></mrow></mfrac><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`



الإشارة سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`، وموجبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`، وسالبة بعدها؛ يتغير التقعر عند المرشحين، والاقتران متصل.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p053-exercise-2-c
title: الكتاب، ص ٥١ · تمرين-٢-ج
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-٢-ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حدد نقط الانعطاف في الحالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mroot><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٣</mn></mroot></mrow></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mtext dir="rtl">الجذر</mtext></mrow></math>\` التكعيبي لـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.

الجذر التكعيبي معرف ومتصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`. نكتبه قوة أسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`؛ نشتق بقاعدة القوة ونضرب في مشتقة الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` في كل مرة، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٥</mn></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٣</mn><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٩</mn><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`



الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></math>\` يحفظ إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`: المشتقة الثانية سالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٥</mn></mrow></math>\`، وموجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٥</mn></mrow></math>\`.

رغم عدم وجود مشتقة ثانية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، فإن الاقتران متصل هناك ويتغير تقعره؛ فيكون انعطافًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الإجابة: نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p053-exercise-4
title: الكتاب، ص ٥١ · تمرين-٤
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-٤
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></mrow></math>\` نقطة انعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، فجد قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.
solution:
المعطى: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mrow></math>\`، ولها انعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.

لأن المشتقة الثانية كثيرة حدود فهي متصلة؛ عند تغير التقعر يلزم أن تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نتحقق من تغير الإشارة بعد التعويض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` وموجبة بعدها، فشرط الانعطاف متحقق.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p053-exercise-5-c
title: الكتاب، ص ٥١ · تمرين-٥-ج
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥١، تمرين-٥-ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` اقتران متصل في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. ما قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` التي يكون لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عندها نقط انعطاف؟
solution:


المشتقة الثانية تصف تغير ميل المنحنى: إذا كانت موجبة فالميل يزداد والتقعر للأعلى، وإذا كانت سالبة فالتقعر للأسفل. نقطة الانعطاف تحتاج تغير التقعر مع اتصال الاقتران؛ انعدام المشتقة الثانية وحده لا يكفي.

التقعر للأعلى يسار الصفر وللأسفل يمينه؛ لأن إشارة المشتقة الثانية تتبدل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الاقتران متصل عند الصفر؛ نستخدم قيمته لإكمال الإحداثيين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، ونقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-book-p057-worksheet-3-a
title: الكتاب، ص ٥٥ · ورقة عمل-٣-أ
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥٥، ورقة عمل-٣-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، وعلمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. جد فترات التقعر ونقط الانعطاف لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

![منحنى المشتقة الثانية قً(س) خط مستقيم يقطع محور السينات عند ٣](assets/lessons/mathematics/source-crops/u2-book-p057-worksheet3.webp)
solution:
المعطى رسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`، والمطلوب التقعر ونقطة الانعطاف.

![الرسم الأصلي للمشتقة الثانية، وصفرهاعند ٣](assets/lessons/mathematics/source-crops/u2-book-p057-worksheet3.webp)

من الرسم: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` تحت محور السينات قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، وفوقه بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`. إشارة المشتقة الثانية السالبة تعني التقعر للأسفل، والموجبة تعني التقعر للأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، لذا تقع نقطة انعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`. لا توجد معلومة لتحديد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عدديًا.

الإجابة: مقعر للأسفل في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`[، وللأعلى في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">∞</mi></math>\`[؛ انعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-book-p057-worksheet-5-a
title: الكتاب، ص ٥٥ · ورقة عمل-٥-أ
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥٥، ورقة عمل-٥-أ
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اعتمادًا على الشكل الذي يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، جد فترات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

![منحنى المشتقة الأولى وقيم السينات −٤، −٣، ٢، ٣](assets/lessons/mathematics/source-crops/u2-book-p057-worksheet5.webp)
solution:
الرسم للمشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. عندما تصعد المشتقة الأولى يزداد ميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` فيكون التقعر للأعلى، وعندما تهبط يكون التقعر للأسفل.

![الرسم الأصلي للمشتقة الأولى](assets/lessons/mathematics/source-crops/u2-book-p057-worksheet5.webp)

تصعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وتهبط بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mspace width="1em"/><mtext dir="rtl">و</mtext><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p057-worksheet-5-b
title: الكتاب، ص ٥٥ · ورقة عمل-٥-ب
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٥٥، ورقة عمل-٥-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اعتمادًا على الشكل الذي يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، جد الإحداثيات السينية لنقط الانعطاف.

![منحنى المشتقة الأولى وقيم السينات −٤، −٣، ٢، ٣](assets/lessons/mathematics/source-crops/u2-book-p057-worksheet5.webp)
solution:
الرسم للمشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. عندما تصعد المشتقة الأولى يزداد ميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` فيكون التقعر للأعلى، وعندما تهبط يكون التقعر للأسفل.

![الرسم الأصلي للمشتقة الأولى](assets/lessons/mathematics/source-crops/u2-book-p057-worksheet5.webp)

تصعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وتهبط بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mspace width="1em"/><mtext dir="rtl">و</mtext><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ وهما الإحداثيان السينيان لنقطتي الانعطاف.
:::


:::mcq
id: math-book-p080-test-3
title: الكتاب، ص ٧٨ · اختبار-٣
kicker: الكتاب، ص ٧٨ · اختبار-٣
reference: الكتاب، ص ٧٨، اختبار-٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` متصلًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لجميع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>∈</mo></math>\` ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`[، وله ثلاث نقاط حرجة فقط في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما العبارة الصحيحة؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>&lt;</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true">)</mo></mrow></mrow></mrow></math>\`
explanation:
 المشتقة الثانية الموجبة تعني أن المشتقة الأولى متزايدة. المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، لذلك تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` موجبة يمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متزايدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></math>\` يقع يمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` في هذه الفترة، فتكون قيمته أكبر:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-book-p080-test-4
title: الكتاب، ص ٧٨ · اختبار-٤
kicker: الكتاب، ص ٧٨ · اختبار-٤
reference: الكتاب، ص ٧٨، اختبار-٤
question: الشكل المجاور يمثل منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. ما مجموعة حل المتباينة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>∞</mo></mrow><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mrow><mtext dir="ltr">−∞</mtext><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true">]</mo><mrow><mtext dir="ltr">−∞</mtext><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">[</mo></mrow></mrow><mo>∪</mo><mrow><mrow><mo stretchy="true">]</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mo>∞</mo></mrow><mo stretchy="true">[</mo></mrow></mrow></mrow></math>\`
explanation:
 المشتقة الثانية هي ميل منحنى المشتقة الأولى؛ تكون سالبة حيث يهبط هذا المنحنى.

![منحنى المشتقة الأولى الأصلي](assets/lessons/mathematics/source-crops/u2-book-p080-test4.webp)

الرسم يصعد قبل الرأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، ويهبط بعده. عند الرأس الميل صفر وليس سالبًا، فنستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">عندما</mtext><mspace width="1em"/><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![منحنى المشتقة الأولى وقمته عند س = ٢](assets/lessons/mathematics/source-crops/u2-book-p080-test4.webp)
:::


:::exam-question
id: math-book-p082-test-7-b
title: الكتاب، ص ٨٠ · اختبار-٧-ب
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٨٠، اختبار-٧-ب
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\` معرفًا في [\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`[. جد فترات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر تحدده المشتقة الثانية: الموجب للأعلى والسالب للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وموجبة بعده.

نحصر النتيجة في المجال المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mspace width="2em"/><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p082-test-7-c
title: الكتاب، ص ٨٠ · اختبار-٧-ج
question: التقعر ونقط الانعطاف
reference: الكتاب، ص ٨٠، اختبار-٧-ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\` معرفًا في [\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`[. جد نقط الانعطاف لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر تحدده المشتقة الثانية: الموجب للأعلى والسالب للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وموجبة بعده.

يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` والاقتران متصل، فتوجد نقطة انعطاف. نعوض لإيجاد إحداثيها الصادي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::mcq
id: math-kamel-u2-p033-r2
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٣٣ · البند-٢
kicker: الكامل، الوحدة ٢ · النسخة المصورة، ص ٣٣ · البند-٢
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٣٣، البند-٢
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` كثير حدود من الدرجة الثالثة، فما أكبر عدد من نقاط الانعطاف لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [x] option-2 | صفر
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`
explanation:
 المطلوب انعطاف منحنى المشتقة الأولى؛ لذلك ندرس المشتقة الثانية لهذا المنحنى، وهي المشتقة الثالثة ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

نكتب كثير الحدود التكعيبي مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><msup><mo stretchy="false">)</mo><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



هذه ثابتة الإشارة، فلا يتغير تقعر منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`.

الإجابة: صفر نقاط انعطاف.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u2-p033-r4
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٣٣ · البند-٤
kicker: الكامل، الوحدة ٢ · النسخة المصورة، ص ٣٣ · البند-٤
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٣٣، البند-٤
question: إذا كان المستقيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` مماسًا لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`، فما ظل زاوية الانعطاف عند هذه النقطة؟
- [x] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:
 ظل زاوية ميل المماس يساوي ميله، أي معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` عندما نكتب معادلته بالصورة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo></mrow></math>\` مس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.

نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ص</mi></math>\` في المعادلة المعطاة:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">ص</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إذن الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`. النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تحقق المعادلة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

الإجابة: ظل زاوية المماس عند الانعطاف يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u2-p027-r3
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٢٧ · البند-٣
kicker: الكامل، الوحدة ٢ · النسخة المصورة، ص ٢٧ · البند-٣
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٢٧، البند-٣
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما إحداثيات نقطة الانعطاف لمنحنى الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow><mo stretchy="true">)</mo></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></math>\`
explanation:
 نقطة الانعطاف تتطلب تغير التقعر، فنختبر إشارة المشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وهي سالبة قبله وموجبة بعده. يتغير التقعر والاقتران متصل؛ نحسب الإحداثي الصادي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u2-p027-r6
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٢٧ · البند-٦
kicker: الكامل، الوحدة ٢ · النسخة المصورة، ص ٢٧ · البند-٦
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٢٧، البند-٦
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mroot><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٣</mn></mroot><mo>+</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، فما قياس زاوية الانعطاف لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` إن وجدت؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi>π</mi></math>\`
- [ ] option-4 | لا توجد زاوية انعطاف
explanation:
 نحتاج نقطة الانعطاف وميل مماسها. نكتب الجذر التكعيبي قوة أسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`، ونستخدم قاعدة السلسلة، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٣</mn></mrow></math>\`:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٣</mn><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`



نشتق مرة أخرى؛ نضرب في مشتقة الداخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٨</mn><mrow><mn dir="ltr">٩</mn><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`



القوة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></math>\` تحفظ إشارة الداخل. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>\`، وموجبة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصلة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وقيمتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فتوجد نقطة انعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.

عند الاقتراب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، مقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` موجب ويقترب من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، فيؤول الميل إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow></math>\` من الجهتين؛ هذا مماس رأسي معادلته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. المماس الرأسي يصنع زاوية قائمة مع الاتجاه الموجب لمحور السينات.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-kamel-u2-p045-r1
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٥ · البند-١
question: التقعر ونقط الانعطاف
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٥، البند-١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></mrow></math>\`، فجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` مجالات التقعر للأعلى وللأسفل لمنحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` نقاط الانعطاف إن وجدت.
solution:
نرمز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>=</mo><mi mathvariant="normal">هـ</mi></mrow></math>\`. ندرس إشارة المشتقة الثانية للتقعر. نشتق حاصل الضرب مرتين:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`



العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` موجب دائمًا؛ فتتبع الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`. تكون سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` وموجبة بعده. نقيد الفترات بالمجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mspace width="2em"/><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



التقعر يتغير عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصلة، فتوجد نقطة انعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



الإجابة: نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p045-r2
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٥ · البند-٢
question: التقعر ونقط الانعطاف
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٥، البند-٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يبين منحنى كثير الحدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، والمماس له عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. معتمدًا عليه جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` مجالات التزايد والتناقص للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` مجالات التقعر للأعلى وللأسفل للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow><mrow><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">س</mi><mo>←</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></mrow></mrow></math>\`.

![منحنى المشتقة الأولى والمماس عند س = ٢](assets/lessons/mathematics/source-crops/u23-kamel-p045-r2-diagram.webp)
solution:
 إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` تحدد اتجاه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ وتزايد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` أو تناقصها يحدد التقعر.

![منحنى المشتقة الأولى والمماس الأصلي](assets/lessons/mathematics/source-crops/u23-kamel-p045-r2-diagram.webp)

منحنى المشتقة الأولى فوق المحور ولا ينعدم إلا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متزايدة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mtext dir="rtl">ح</mtext></mrow></math>
\`\`\`



المشتقة الأولى تهبط قبل الصفر وتصعد بعده؛ فيتبدل التقعر من الأسفل إلى الأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نقرأ نقطة التماس والمقطع الصادي؛ فميل المماس هو المشتقة الثانية عند اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نحوّل البسط إلى فرق قيم المشتقة الأولى؛ وتغيّر المدخل يساوي ضعفي تغيّر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mfrac><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`



نستخدم تعريف المشتقة عند اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>→</mo><mn dir="ltr">١</mn></mrow></munder><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



النتيجة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ق</mi></mrow></math>\` متزايد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` مقعر للأعلى في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">∞</mi></math>\`[، ومقعر للأسفل في ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`[. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow><mtext dir="rtl">النهاية</mtext></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p047-r1
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٧ · البند-١
question: التقعر ونقط الانعطاف
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٧، البند-١
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان للاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mtext dir="rtl">جا</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` نقطة انعطاف أفقي هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">كً</mi><mrow><mo stretchy="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 المعطى أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` نقطة انعطاف أفقي: المماس أفقي فـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وعند الانعطاف تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ع</mi><mo>″</mo></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` حيث المشتقة الثانية موجودة كما نستخدم هنا.

نشتق العلاقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>+</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mrow></math>\` بقاعدة السلسلة:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ع</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`؛ حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>⟹</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٠</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>⟹</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` بالسلسلة، ثم نشتق حاصل الضرب:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ك</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ك</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ك</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">٧٢</mn></mrow></math>
\`\`\`



الإجابة:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧٢</mn></math>\`.
:::


:::exam-question
id: math-kamel-u2-p047-r2
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٧ · البند-٢
question: التقعر ونقط الانعطاف
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٧، البند-٢
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` كثير حدود من الدرجة الثالثة، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـً</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـً</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، ويمر منحناه بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وكانت معادلة المماس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، أوجد قاعدة الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`.
solution:
 نكتب كثير الحدود التكعيبي بالمعاملات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`



المشتقة الثانية متصلة وتغير إشارتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\`، فلا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\` أن تكون صفرًا هناك:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`



المماس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` أفقي، فيعطينا قيمة الاقتران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` والميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">ج</mi><mo>+</mo><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>\` في معادلة الميل فنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`؛ ثم في معادلة القيمة فنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⟹</mo><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تعطي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٦</mn><mo>⟹</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>⟹</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. وللتحقق، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></mfrac></math>\` وموجبة بعده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p047-r5
title: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٧ · البند-٥
question: التقعر ونقط الانعطاف
reference: الكامل، الوحدة ٢ · النسخة المصورة، ص ٤٧، البند-٥ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">هـ</mi></mrow></math>\` اقترانًا قابلًا للاشتقاق مرتين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`، بحيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>\`. أوجد: الإحداثيات السينية للقيم القصوى المحلية ونوعها، وفترات التزايد والتناقص، وفترات التقعر وإحداثي نقطة الانعطاف السيني.
solution:
المشتقة الثانية هي مشتقة المشتقة الأولى؛ لذلك تحدد إشارتها أين تتزايد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` وأين تتناقص.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo>⟹</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` متزايدة على الجزء السالب. وبما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فهي سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` وموجبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mo>⟹</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` متناقصة على الجزء الموجب. وبما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فهي موجبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وسالبة بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` متزايدة تمامًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

إشارة المشتقة الأولى الموجبة تعني تزايد الاقتران، والسالبة تعني تناقصه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` تتغير إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mo>′</mo></msup></math>\` من السالب إلى الموجب؛ إذن هناك صغرى محلية. وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` تتغير من الموجب إلى السالب؛ إذن هناك عظمى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi mathvariant="normal">س</mi><mtext dir="rtl">الصغرى</mtext></msub><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mspace width="1em"/><msub><mi mathvariant="normal">س</mi><mtext dir="rtl">العظمى</mtext></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



ولتحديد التقعر نعود إلى إشارة المشتقة الثانية: المنحنى مقعر للأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وللأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">∞</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`. يتصل الاقتران عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` ويتغير التقعر عندها، فهي إحداثي الانعطاف السيني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mtext dir="rtl">انعطاف</mtext></mrow></msub><mo>=</mo><mn dir="ltr">٠</mn></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`

:::


:::mcq
id: math-kamel-u2-p023-r1
title: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ١ · ٢٠٠٧ دراسات
kicker: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ١ · ٢٠٠٧ دراسات
reference: السؤال، الصورة، · المفتاح
question: يقع الاقتران فوق جميع مماساته عندما يكون الاقتران:
- [x] option-1 | مقعراً للأعلى
- [ ] option-2 | مقعراً للأسفل
- [ ] option-3 | متزايداً
- [ ] option-4 | متناقصاً
explanation:
الإجابة: مقعر للأعلى.

**المصدر:** صفحة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤٦</mn></math>\` من الكتاب.

«مقعر للأعلى في الفترة ]\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`،\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`[ إذا كان واقعاً فوق جميع مماساته».

![التعريف من الكتاب](assets/lessons/curriculum-evidence/39eb60ad9dd1a34cb56d.webp)
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p023-r2
title: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٢ · ٢٠٠٧ دراسات
kicker: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٢ · ٢٠٠٧ دراسات
reference: السؤال، الصورة، · المفتاح
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتران كثير حدود من الدرجة الثانية فإن الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`:
- [x] option-1 | لا توجد له نقاط انعطاف
- [ ] option-2 | توجد له نقطة انعطاف واحدة فقط
- [ ] option-3 | يوجد له نقطتي انعطاف
- [ ] option-4 | توجد له نقطة انعطاف واحدة على الأقل
explanation:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

نكتب الاقتران التربيعي؛ معامل التربيع غير صفر لأنه من الدرجة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



بقاعدة القوة تكون المشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow></math>\`، ثم الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow></math>\`. هي ثابتة غير صفرية فلا تتبدل إشارتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: لا توجد له نقاط انعطاف
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p023-r3
title: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٣ · ٢٠٠٧ دراسات، ٢٠١٨
kicker: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٣ · ٢٠٠٧ دراسات، ٢٠١٨
reference: السؤال، الصورة، · المفتاح
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mrow><mo>|</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>|</mo></mrow></mrow></math>\`، فإن:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` غير موجودة
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة عظمى
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف
explanation:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

القيمة المطلقة تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` يمين الصفر، وسالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` يساره.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



للتأكد من المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`: تعريفها هو نهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">[</mo><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo stretchy="true" fence="true">]</mo></mrow><mi mathvariant="normal">هـ</mi></mfrac></math>\`. هنا تساوي النسبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">هـ</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow><mi mathvariant="normal">هـ</mi></mfrac><mo>=</mo><mrow><mo stretchy="true" fence="true">|</mo><mi mathvariant="normal">هـ</mi><mo stretchy="true" fence="true">|</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ نهايتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، فتوجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. من المشتقتين الثانيتين للفرعين يتبدل التقعر من الأسفل إلى الأعلى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الاقتران متصل عند الصفر؛ فتكون نقطة انعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p023-r4
title: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٤ · ٢٠٠٧ إكمال
kicker: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٤ · ٢٠٠٧ إكمال
reference: السؤال، الصورة، · المفتاح
question: إذا كانت النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">ل</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi></mrow></math>\` ثابت، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn></mrow></math>\`
explanation:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

المعطى هو المشتقة الأولى، فنشتقها مرة واحدة للحصول على الثانية. لأنها كثيرة حدود متصلة، يلزم أن تكون صفرًا عند تغير التقعر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ل</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نعوّض الإحداثي السيني لنقطة الانعطاف ونحل المعادلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



بعد التعويض، تكون المشتقة الثانية سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` مباشرة وموجبة بعده، فيتحقق تغير التقعر:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p023-r5
title: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٥ · ٢٠٠٨
kicker: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٥ · ٢٠٠٨
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` موجودة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">[</mo></mrow></math>\` ويوجد عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` نقطة انعطاف، فإن إحدى العبارات التالية صحيحة دائماً:
- [ ] option-1 | منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` مقعر للأسفل على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true">]</mo></mrow></math>\` وللأعلى على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` له نقطة حرجة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi></mrow></math>\` له نقطة حرجة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi></mrow></math>\` له نقطة حرجة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">[</mo></mrow></math>\`
explanation:


المشتقة الثانية تصف تغير ميل المنحنى: إذا كانت موجبة فالميل يزداد والتقعر للأعلى، وإذا كانت سالبة فالتقعر للأسفل. نقطة الانعطاف تحتاج تغير التقعر مع اتصال الاقتران؛ انعدام المشتقة الثانية وحده لا يكفي.

عند الانعطاف تتبدل المشتقة الأولى من التزايد إلى التناقص أو العكس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



فتكون للمشتقة الأولى قيمة قصوى محلية؛ ومشتقتها موجودة، لذا تساوي صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo><mtext>َ</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi></mrow></math>\` له نقطة حرجة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">[</mo></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p023-r6
title: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٦ · ٢٠١٠
kicker: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٦ · ٢٠١٠
reference: السؤال، الصورة، · المفتاح
question: إذا كان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة عظمى واحدة وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` يمر بالنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فإن تلك القيمة العظمى هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
explanation:
 اختبار المشتقة الثانية يقول: عند نقطة حرجة ذات مشتقة أولى صفرية، تكون القيمة عظمى محلية إذا كانت المشتقة الثانية سالبة.

المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فيثبت وجود عظمى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. مرور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بالنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` يعني أن قيمتها هناك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`. وبما أن العظمى واحدة حسب السؤال، فهي المطلوبة.

الإجابة:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p023-r7
title: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٧ · ٢٠١١
kicker: الكامل، الوحدة الثانية · الصورة، ٢٣ · ص ٢٢ · البند ٧ · ٢٠١١
reference: السؤال، الصورة، · المفتاح
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">[</mo></mrow></math>\`، فإن:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى محلية
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى محلية
explanation:
 العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يقع داخل الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، لذلك يشمله الشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="2em"/><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



اختبار المشتقة الثانية: المشتقة الأولى الصفرية مع ثانية موجبة تثبت صغرى محلية.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` صغرى محلية؛ لا نحتاج معلومة المشتقة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` لهذا الاستنتاج.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p024-r2
title: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٢ · ٢٠١٤
kicker: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٢ · ٢٠١٤
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متصلاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لجميع قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">[</mo></mrow></math>\`، ولاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` ثلاث نقاط حرجة فقط في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢,٥</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢,٥</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢,٥</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢,٥</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
 المشتقة الثانية السالبة تعني أن المشتقة الأولى متناقصة. مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` سالبة يمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متناقصة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></math>\` يقع يمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` فيها، فتكون قيمته أصغر:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p024-r3
title: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٣ · ٢٠١٤
kicker: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٣ · ٢٠١٤
reference: السؤال، الصورة، · المفتاح
question: إذا كان الشكل المجاور يمثل منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` فإن نقطة انعطاف منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
الرسم للمشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. إذا تناقصت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` كان تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` للأسفل، وإذا تزايدت كان للأعلى.

![الرسم الأصلي للمشتقة الأولى](assets/lessons/curriculum-evidence/de952485e5c9897a0fd3.webp)

يهبط الرسم إلى الرأس عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` ثم يصعد؛ لذلك يتغير تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` من الأسفل إلى الأعلى عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` موجودة في جوار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصلة هناك.

الإجابة: نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`. لا يحدد رسم المشتقة القيمة الصادية ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` نفسها.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![منحنى المشتقة مع النهايتين المفتوحتين والنقطة المعلّمة والتدريجات الأصلية](assets/lessons/curriculum-evidence/de952485e5c9897a0fd3.webp)
:::


:::mcq
id: math-kamel-u2-p024-r4
title: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٤ · ٢٠١٤ — الإكمال
kicker: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٤ · ٢٠١٤ — الإكمال
reference: السؤال، الصورة، · المفتاح
question: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` هي نقطة انعطاف لمنحنى إحدى الاقترانات الآتية:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`
explanation:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`: المشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` ثم الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فتتبدل إشارتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`. أما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` فثانيته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ثابتة، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></mrow></math>\` ثانيته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\` غير موجبة، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` ثانيته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` غير سالبة؛ لا يغير أي منها التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ك</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



المشتقة الثانية سالبة يسار الصفر وموجبة يمينه؛ والصادي واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p024-r5
title: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٥ · ٢٠١٥؛ ٢٠٢٠ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٥ · ٢٠١٥؛ ٢٠٢٠ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: إذا كان لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">م</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\` نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` فإن قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi></mrow></math>\` تساوي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
 نستخدم المشتقة الثانية لتحديد الانعطاف؛ لأنها كثيرة حدود متصلة، يلزم أن تكون صفرًا عند تغير التقعر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٦</mn><mo>⟹</mo><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



بعد التعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، وهي سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` وموجبة بعده، فيتحقق تغير التقعر.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p024-r6
title: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٦ · ٢٠١٥
kicker: الكامل، الوحدة الثانية · الصورة، ٢٤ · ص ٢٣ · البند ٦ · ٢٠١٥
reference: السؤال، الصورة، · المفتاح
question: الشكل المجاور يبين منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، إن مجموعة حل المتباينة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">[</mo><mo>∪</mo><mo stretchy="true">]</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`
explanation:
المشتقة الثانية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` هي ميل منحنى المشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`؛ لذلك تكون موجبة حيث يصعد هذا المنحنى.

![الرسم الأصلي للمشتقة الأولى](assets/lessons/curriculum-evidence/e6150ed0f3355c22aa17.webp)

يصعد الرسم قبل الرأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وعند الرأس الميل صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![رسم المشتقة والمحورين والإسقاط المتقطع كما ورد في السؤال](assets/lessons/curriculum-evidence/e6150ed0f3355c22aa17.webp)
:::


:::mcq
id: math-kamel-u2-p025-r1
title: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ١ · ٢٠١٦
kicker: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ١ · ٢٠١٦
reference: السؤال، الصورة، · المفتاح
question: بالاعتماد على الشكل المجاور الذي يمثل منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، ما النقطة التي يكون عندها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` موجبتين؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">و</mi></mrow></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` الموجبة تعني أن المنحنى يصعد، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` الموجبة تعني أن ميله يزداد فيكون مقعرًا للأعلى. نبحث عن تحقق الشرطين معًا.

![الرسم الأصلي للاقتران والنقاط](assets/lessons/curriculum-evidence/b62df947c549fb3bf4e2.webp)

عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` يصعد المنحنى بعد القاع، ويزداد ميله، فيتحقق الشرطان. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` يصعد لكنه مقعر للأسفل، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` الميل صفر، وعند و الميل سالب.

الإجابة: النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![المنحنى الملوّن مع النقاط المسماة ومحوري الإحداثيات في المصدر](assets/lessons/curriculum-evidence/b62df947c549fb3bf4e2.webp)
:::


:::mcq
id: math-kamel-u2-p025-r2
title: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ٢ · ٢٠١٦
kicker: صياغة تعليمية معدّلة
reference: السؤال، الصورة، · المفتاح · صياغة تعليمية معدّلة
question: إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mstyle scriptlevel="0" displaystyle="true"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mstyle><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` معرفًا على \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi>π</mi><mo stretchy="false">]</mo></mrow></math>\`، فما أكبر فترة مفتوحة متصلة ضمن هذا المجال يكون عليها منحناه مقعرًا للأسفل؟
- [ ] option-1 | \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi>π</mi><mo stretchy="false">)</mo></mrow></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mrow><mn dir="ltr">٠</mn><mo separator="true">,</mo></mrow><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mrow><mrow><mn dir="ltr">٤</mn><mo separator="true">,</mo></mrow><mi>π</mi></mrow></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
- [x] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mrow><mn dir="ltr">٠</mn><mo separator="true">,</mo></mrow><mi>π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`
explanation:
يكون المنحنى مقعرًا للأسفل عندما تكون مشتقته الثانية سالبة؛ لذلك نشتق مرتين ثم نحل متباينة الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mo>⟺</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



ضمن المجال من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`، يكون جيب التمام موجبًا قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` وسالبًا بعدها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">إذا </mtext><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` تحقق التقعر أيضًا، لكنها ليست أكبر فترة؛ فهي جزء من الفترة المطلوبة. لذلك لا ينافس البديل الثاني البديل الرابع في الصياغة الحالية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p025-r3
title: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ٣ · ٢٠١٦
kicker: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ٣ · ٢٠١٦
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` كثير حدود وكان الشكل المجاور يبين إشارة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن العبارة الصحيحة دائماً هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة عظمى محلية
explanation:
 اختبار المشتقة الثانية يقول: إذا كانت المشتقة الأولى صفرًا والثانية موجبة عند نقطة، فهي صغرى محلية.

![جدول إشارة المشتقة الثانية الأصلي](assets/lessons/curriculum-evidence/d23fb242dbe17a7b4568.webp)

من الجدول \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`. بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></math>\` فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، ومع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` يتحقق الاختبار.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` صغرى محلية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![مخطط إشارة المشتقة الثانية الأصلي مع الصفر والإشارات على خط الأعداد](assets/lessons/curriculum-evidence/d23fb242dbe17a7b4568.webp)
:::


:::mcq
id: math-kamel-u2-p025-r4
title: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ٤ · ٢٠١٧
kicker: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ٤ · ٢٠١٧
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\` فإن قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي يكون عندها نقط انعطاف \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
explanation:
 نقطة الانعطاف تحتاج تغير التقعر؛ ندرس المشتقة الثانية.

قاعدة السلسلة تعطي مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`، ثم نستخدم متطابقة ضعف الزاوية:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` تتغير الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`؛ تنعدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`. قبلها يكون جيب التمام موجبًا فـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة، وبعدها سالبًا فـ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` موجبة. إذن يتغير التقعر.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mo>=</mo><msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><msqrt><mn dir="ltr">٢</mn></msqrt><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></msup></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`



الإجابة المطلوبة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`؛ ونقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo>،</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p025-r5
title: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ٥ · ٢٠١٧
kicker: الكامل، الوحدة الثانية · الصورة، ٢٥ · ص ٢٤ · البند ٥ · ٢٠١٧
reference: السؤال، الصورة، · المفتاح
question: الشكل المجاور يمثل منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` يكون:
- [x] option-1 | مقعراً للأسفل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-2 | مقعراً للأسفل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-3 | متناقصاً \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`
- [ ] option-4 | متناقصاً \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`
explanation:
الرسم للمشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` للأسفل يعني أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` تتناقص، أو أن ميل رسمها سالب.

![الرسم الأصلي للمشتقة الأولى](assets/lessons/curriculum-evidence/df82c1dc4b34213ad10b.webp)

بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` ثابتة، فالمشتقة الثانية صفر. بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` يهبط رسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، فتكون المشتقة الثانية سالبة.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` مقعرة للأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي للمشتقة الأولى، بقطعه ونهاياته المفتوحة وتدريجاته](assets/lessons/curriculum-evidence/df82c1dc4b34213ad10b.webp)
:::


:::mcq
id: math-kamel-u2-p026-r1
title: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ١ · ٢٠١٧ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ١ · ٢٠١٧ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: الشكل المجاور هو \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` فإن نقطة الانعطاف لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | لا يوجد له نقطة انعطاف
explanation:
الرسم للمشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. تصاعدها يعني تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` للأعلى، وتناقصها يعني التقعر للأسفل.

![الرسم الأصلي للمشتقة الأولى](assets/lessons/curriculum-evidence/f35936a840e83e0ad549.webp)

تصعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ثم تهبط بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`؛ يتغير تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`. وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` هناك يضمن اتصال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

الإجابة: نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`؛ لا يحدد الرسم قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عددياً.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![منحنى المشتقة مع النهايتين المفتوحتين والتدريجات والإسقاط المتقطع](assets/lessons/curriculum-evidence/f35936a840e83e0ad549.webp)
:::


:::mcq
id: math-kamel-u2-p026-r2
title: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ٢ · ٢٠١٧ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ٢ · ٢٠١٧ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود، وكانت زاوية ميل المماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عند أي نقطة عليه في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">[</mo></mrow></math>\` هي زاوية منفرجة، فإن العبارة الصحيحة هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأعلى في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأسفل في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">[</mo></mrow></math>\`
explanation:


التقعر يتحدد بإشارة المشتقة الثانية: إذا كانت سالبة كان المنحنى مقعرًا للأسفل. المعطى يصف مماس منحنى المشتقة الأولى؛ ميل هذا المماس هو المشتقة الثانية.

ظل الزاوية المنفرجة سالب، وهو ميل مماس المشتقة الأولى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo>&lt;</mo><mtext dir="rtl">ي</mtext><mo>&lt;</mo><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mtext dir="rtl">ي</mtext><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن المشتقة الثانية سالبة، فيكون منحنى الاقتران مقعرًا للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="false">]</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">[</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأسفل في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">[</mo></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p026-r3
title: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ٣ · ٢٠١٧ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ٣ · ٢٠١٧ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∀</mo><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">[</mo></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن العبارة الصحيحة فيما يلي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى محلية
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`
explanation:
 اختبار المشتقة الثانية: إذا كانت الأولى صفرًا والثانية سالبة، فالقيمة عظمى محلية.

العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` داخل الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، فيشمله شرط المشتقة الثانية السالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mspace width="2em"/><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` عظمى محلية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p026-r4
title: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ٤ · ٢٠١٧ — الدور الثاني
kicker: صياغة تعليمية معدّلة
reference: السؤال، الصورة، · المفتاح · صياغة تعليمية معدّلة
question: إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mstyle scriptlevel="0" displaystyle="true"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mstyle><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فما أكبر فترة مفتوحة يكون عليها منحناه مقعرًا للأعلى، أي واقعًا فوق مماساته ضمن تلك الفترة؟
- [x] option-1 | \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>\`
- [ ] option-2 | \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>\`
- [ ] option-3 | \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>\`
- [ ] option-4 | \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>\`
explanation:
التقعر للأعلى يعني أن المنحنى يقع فوق مماساته، ونختبره بإيجابية المشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>&gt;</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`



الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">∞</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\` جزء من هذه الفترة؛ لكنها ليست الفترة الأكبر المطلوبة. أما قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` فالمشتقة الثانية سالبة، فيكون التقعر للأسفل.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p026-r5
title: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ٥ · ٢٠١٨
kicker: الكامل، الوحدة الثانية · الصورة، ٢٦ · ص ٢٥ · البند ٥ · ٢٠١٨
reference: السؤال، الصورة، · المفتاح
question: إذا كانت النقطتان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` هما نقطتا انعطاف لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">ك</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، فإن قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi></mrow></math>\` هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
 المعطى مشتقة أولى، فنشتقها مرة واحدة للحصول على الثانية:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



الثانية كثيرة حدود متصلة؛ عند الانعطاف يجب أن تنعدم. النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` تحقق ذلك لأي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`، فنستخدم النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`:



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٢</mn><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



للتحقق، تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`؛ موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، وسالبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`، وموجبة بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`. يتغير التقعر عند النقطتين فعلًا.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p027-r1
title: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ١ · ٢٠١٨
kicker: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ١ · ٢٠١٨
reference: السؤال، الصورة، · المفتاح
question: الشكل المجاور يمثل منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن العبارة الصحيحة:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأعلى في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأعلى في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`
explanation:
الرسم يمثل المشتقة الثانية؛ الموجب منها يعني تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` للأعلى، والسالب يعني التقعر للأسفل.

![الرسم الأصلي للمشتقة الثانية](assets/lessons/curriculum-evidence/5bf3d8f96d88404be98a.webp)

بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يكون الرسم تحت المحور فالتقعر للأسفل، وبين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` فوقه فالتقعر للأعلى.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` مقعرة للأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`. المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` لا نحتاجه لتحديد التقعر.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الأصلي للمشتقة الثانية مع المحاور والإسقاطات والعلامات العددية](assets/lessons/curriculum-evidence/5bf3d8f96d88404be98a.webp)
:::


:::mcq
id: math-kamel-u2-p027-r2
title: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ٢ · ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ٢ · ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لجميع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">[</mo></mrow></math>\`، وكان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` ثلاث نقاط حرجة فقط بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما العبارة الصحيحة مما يأتي؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
 المشتقة الثانية الموجبة تعني أن المشتقة الأولى متزايدة. وبما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` فهي سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` داخل الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` تتناقص حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ والعدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يقع قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، فتكون قيمته أكبر من قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p027-r4
title: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ٤ · ٢٠١٩ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ٤ · ٢٠١٩ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٥</mn></msup><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٤</mn></msup></mrow></math>\`، فما مجموعة قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi></mrow></math>\` التي يكون عندها نقط انعطاف للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>{</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo>}</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>{</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>}</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>{</mo><mrow><mn dir="ltr">٣</mn></mrow><mo>}</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>{</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>}</mo></mrow></mrow></math>\`
explanation:


المشتقة الثانية تصف تغير ميل المنحنى: إذا كانت موجبة فالميل يزداد والتقعر للأعلى، وإذا كانت سالبة فالتقعر للأسفل. نقطة الانعطاف تحتاج تغير التقعر مع اتصال الاقتران؛ انعدام المشتقة الثانية وحده لا يكفي.

العامل الأول موجب دائمًا، والأس الرابع لا يغيّر الإشارة حول أربعة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٤</mn></msup><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن الإشارة تتبع العامل ذي الأس الفردي، فتتبدل عند ثلاثة فقط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٥</mn></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٥</mn></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عند أربعة تنعدم المشتقة الثانية دون تبدل الإشارة؛ فلا يحدث انعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>{</mo><mrow><mn dir="ltr">٣</mn></mrow><mo>}</mo></mrow></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p027-r5
title: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ٥ · ٢٠١٩ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٧ · ص ٢٦ · البند ٥ · ٢٠١٩ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ك</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\` اقتراناً له نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما ظل زاوية الانعطاف؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-2 | صفر
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
explanation:
 المشتقة الثانية كثيرة حدود متصلة؛ عند الانعطاف تنعدم ويتغير التقعر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`



نعوض موضع الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` في الثانية:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



بعد التعويض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>=</mo><mrow><mn dir="ltr">٦</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` تتغير من السالب إلى الموجب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فيتحقق الشرط.

ظل زاوية المماس يساوي الميل، وهو المشتقة الأولى عند النقطة:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



الإجابة: ظل زاوية المماس عند الانعطاف يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p028-r1
title: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ١ · ٢٠٢٠
kicker: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ١ · ٢٠٢٠
reference: السؤال، الصورة، · المفتاح
question: إذا كان لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
explanation:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة المشتقة الأولى؛ نشتق العلاقة السابقة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نعوّض الإحداثي السيني لنقطة الانعطاف ونحل المعادلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



الجيب أقل من النصف قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\` على ستة وأكبر منه بعدها قرب النقطة؛ فتتبدل الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p028-r2
title: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٢ · ٢٠٢٠
kicker: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٢ · ٢٠٢٠
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٨</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فأي من الخصائص التالية تحقق في منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∀</mo><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`؟
- [ ] option-1 | متزايد
- [ ] option-2 | متناقص
- [x] option-3 | مقعر لأسفل
- [ ] option-4 | مقعر لأعلى
explanation:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

نشتق المشتقة الأولى؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\` ضعفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تشمل عامل اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



جيب التمام بين سالب واحد وواحد؛ فتظل المشتقة الثانية سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>≤</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>≤</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٨</mn><mo>≤</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>≤</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: مقعر لأسفل
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p028-r3
title: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٣ · ٢٠٢٠
kicker: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٣ · ٢٠٢٠
reference: السؤال، الصورة، · المفتاح
question: معتمداً على الشكل المجاور الذي يمثل منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، ما المجال الذي يقع فيه منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` تحت جميع مماساته؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">[</mo><mo>∪</mo><mo stretchy="true">]</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">[</mo></mrow></math>\`
explanation:
![الشكل الأصلي](assets/lessons/curriculum-evidence/a0378ffe96841c2a951b.webp)

أن يكون المنحنى تحت مماساته يعني أن تقعره للأسفل؛ عندئذ تتناقص ميول المماسات. وهذه الميول تمثلها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` في الرسم.

من الرسم يتناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` حتى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، ثم يتزايد بعدها. إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وهو المجال المطلوب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>∈</mo><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![منحنى المشتقة والمحورين والتدريجات كما في الرسم الأزرق الأصلي](assets/lessons/curriculum-evidence/a0378ffe96841c2a951b.webp)
:::


:::mcq
id: math-kamel-u2-p028-r4
title: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٤ · ٢٠٢٠ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٤ · ٢٠٢٠ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mfrac><mrow><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قياس زاوية الانعطاف لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | صفر
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>π</mo></mrow></math>\`
explanation:
زاوية الانعطاف هي زاوية ميل المماس عند نقطة الانعطاف. نحدد النقطة من تغير إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`، ثم نحسب الميل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` هناك.

نشتق القوة بقاعدة السلسلة، فنضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mroot><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></mroot></mrow></math>
\`\`\`



الجذر التكعيبي سالب قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\` وموجب بعدها، فيتغير التقعر هناك.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msup><mn dir="ltr">٠</mn><mrow><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



ظل زاوية ميل المماس يساوي ميله. الزاوية بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`، والظل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` في الربع الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p028-r5
title: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٥ · ٢٠٢٠ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٨ · ص ٢٧ · البند ٥ · ٢٠٢٠ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: بالاعتماد على الشكل المجاور الذي يمثل منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما النقطة / النقاط التي يكون عندها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` سالبة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">و</mi></mrow></math>\`
explanation:
![الشكل الأصلي](assets/lessons/curriculum-evidence/f7de6a077c5a83a3c524.webp)

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` تعني أن المماس أفقي. و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` تعني أن التقعر للأسفل.

من الرسم تتحقق الصفتان عند القمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`. أما القاع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` فمماسه أفقي وتقعره للأعلى.

الإجابة: النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![منحنى ق مع النقاط والحروف المعلّمة عليه في السؤال](assets/lessons/curriculum-evidence/f7de6a077c5a83a3c524.webp)
:::


:::mcq
id: math-kamel-u2-p029-r1
title: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ١ · ٢٠٢٠ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ١ · ٢٠٢٠ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: يمثل الشكل المجاور منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` فماذا تمثل النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | عظمى محلية
- [ ] option-2 | صغرى محلية
- [ ] option-3 | ليست حرجة لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | نقطة انعطاف
explanation:
![الشكل الأصلي](assets/lessons/curriculum-evidence/7e5b0e935a745afc7aa5.webp)

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، أي أن النقطة ساكنة. نستخدم اختبار المشتقة الثانية: إذا كانت سالبة عند نقطة ساكنة، تكون القيمة عظمى محلية.

الرسم يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`؛ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` يقع تحت محور السينات، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` نقطة عظمى محلية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![الرسم الخطي للمشتقة الثانية مع النهايات المفتوحة ومحوري الإحداثيات](assets/lessons/curriculum-evidence/7e5b0e935a745afc7aa5.webp)
:::


:::mcq
id: math-kamel-u2-p029-r2
title: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٢ · ٢٠٢٠ — الدور الثالث
kicker: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٢ · ٢٠٢٠ — الدور الثالث
reference: السؤال، الصورة، · المفتاح
question: ليكن الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mo>−</mo><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo><mo stretchy="true">]</mo></mrow></math>\`، فما الإحداثي السيني لنقطة الانعطاف للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
explanation:
نقطة الانعطاف تحتاج تغير التقعر، أي تغير إشارة المشتقة الثانية. نشتق مرتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>+</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



نساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` بالصفر لتحديد المرشح.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>=</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`، لكنه لا يحقق المعادلة لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. لذا يجوز القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` عند الحلول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext><mo>=</mo><msqrt><mn dir="ltr">٣</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>≤</mo><mtext dir="rtl">س</mtext><mo>≤</mo><mi>π</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٣</mn></mfrac></math>\` وسالبة بعدها في المجال؛ فيتغير التقعر. الإحداثي السيني المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٣</mn></mfrac></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p029-r3
title: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٣ · ٢٠٢١
kicker: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٣ · ٢٠٢١
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">]</mo></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` لجميع قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">[</mo></mrow></math>\`، وكان للاقتران ثلاث نقط حرجة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">]</mo></mrow></math>\`، فإذا علمت أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما العبارة الصحيحة فيما يلي؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` تعني أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` متناقصة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`. بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، تكون قيمها قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` أكبر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mtext dir="rtl">س</mtext><mo>&lt;</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



المشتقة الموجبة تعني تزايد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ لذلك قيمته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` أكبر من قيمته عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>&gt;</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p029-r4
title: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٤ · ٢٠٢١
kicker: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٤ · ٢٠٢١
reference: السؤال، الصورة، · المفتاح
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` وكانت النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
عند الانعطاف تتغير إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`. ولأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` كثير حدود، يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` هناك. نشتق مرتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أس</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` في المشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>=</mo><mrow><mn dir="ltr">٦</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، فتتغير إشارتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. ولإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` نعوض النقطة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` نفسها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p029-r5
title: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٥ · ٢٠٢١ — الدور الثالث
kicker: الكامل، الوحدة الثانية · الصورة، ٢٩ · ص ٢٨ · البند ٥ · ٢٠٢١ — الدور الثالث
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\`، فما العبارة الصحيحة فيما يلي؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأسفل على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`
- [ ] option-4 | النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف لمنحنى الاقتران
explanation:
نحدد التزايد والتناقص من إشارة المشتقة الأولى. مشتقة الأسّي تضرب في مشتقة الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></msup></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` موجب لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` سالبة لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متناقص على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p030-r1
title: الكامل، الوحدة الثانية · الصورة، ٣٠ · ص ٢٩ · البند ١ · ٢٠٢١ — الدور الثاني
kicker: صياغة تعليمية معدّلة
reference: السؤال، الصورة، · المفتاح · صياغة تعليمية معدّلة
question: أي العبارات الآتية صحيحة دائمًا؟
- [x] option-1 | كل كثير حدود من الدرجة الثانية، على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`، له نقطة حرجة واحدة فقط.
- [ ] option-2 | إذا كان \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` كثير حدود و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، فإن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
- [ ] option-3 | الاقتران \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup></mrow></math>\` مقعر للأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`.
- [ ] option-4 | إذا كانت \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>\` موجودة عند نقطة داخلية من المجال، فلا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mi mathvariant="normal">د</mi></mrow></math>\` أن تكون عندها قيمة قصوى محلية.
explanation:
نفحص العبارات باستعمال معنى النقطة الحرجة وشروط القيم القصوى والتقعر.

لكثير الحدود التربيعي معامل رئيس غير صفري. مشتقته خطية، وتنعدم في نقطة واحدة فقط، ولا تكون غير موجودة في أي نقطة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo separator="true">,</mo><mspace width="1em"/><mi mathvariant="normal">أ</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn><mo>⟹</mo><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mfrac><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></mfrac></mrow></math>
\`\`\`



إذن العبارة الأولى صحيحة دائمًا.

العبارة الثانية غير لازمة: قد تكون قيمة المشتقة الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ولا تكون المشتقة الثانية صفرًا. مثال ذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



في العبارة الثالثة، المشتقة الثانية غير سالبة، فيكون التقعر للأعلى لا للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msup><mi mathvariant="normal">د</mi><mn dir="ltr">٢</mn></msup><mrow><mi mathvariant="normal">د</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



والعبارة الرابعة عكس شرط القصوى: إذا كانت المشتقة موجودة وغير صفرية عند نقطة داخلية، فلا تكون تلك النقطة موضع قصوى محلية.

الإجابة: العبارة الأولى.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p030-r2
title: الكامل، الوحدة الثانية · الصورة، ٣٠ · ص ٢٩ · البند ٢ · ٢٠٢٢
kicker: الكامل، الوحدة الثانية · الصورة، ٣٠ · ص ٢٩ · البند ٢ · ٢٠٢٢
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi></mrow></math>\`، وكان قياس زاوية الانعطاف لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` هو \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
زاوية الانعطاف هي زاوية ميل المماس عند نقطة الانعطاف. نحدد هذه النقطة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` أولًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>−</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



تنعدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وتتبدل من السالب إلى الموجب؛ إذن الانعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



ميل المماس هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، ويساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>−</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p030-r3
title: الكامل، الوحدة الثانية · الصورة، ٣٠ · ص ٢٩ · البند ٣ · ٢٠٢٢
kicker: الكامل، الوحدة الثانية · الصورة، ٣٠ · ص ٢٩ · البند ٣ · ٢٠٢٢
reference: السؤال، الصورة، · المفتاح
question: يمثل الشكل المجاور منحنى الاقتران كثير الحدود \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، أي العبارات الآتية صحيحة دائماً؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
![الشكل الأصلي](assets/lessons/curriculum-evidence/1f0e7338a1c6b223da53.webp)

من الرسم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`: المنحنى على محور السينات، فهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ ويصعد فميله \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`؛ ويتقعر للأسفل فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.

نرتب السالب ثم الصفر ثم الموجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>&lt;</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>&lt;</mo><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![منحنى ق مع المحورين المسمّيين س وص والقيمة المعلّمة على محور السينات](assets/lessons/curriculum-evidence/1f0e7338a1c6b223da53.webp)
:::


:::mcq
id: math-kamel-u2-p030-r4
title: الكامل، الوحدة الثانية · الصورة، ٣٠ · ص ٢٩ · البند ٤ · ٢٠٢٤ — الدور الأول
kicker: الكامل، الوحدة الثانية · الصورة، ٣٠ · ص ٢٩ · البند ٤ · ٢٠٢٤ — الدور الأول
reference: السؤال، الصورة، · المفتاح
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mrow><mo>|</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo>|</mo></mrow></mrow></math>\` فما العبارة الصحيحة فيما يلي؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` غير موجودة
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة عظمى محلية
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف
explanation:
نكتب القيمة المطلقة حسب إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ فهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≥</mo><mn dir="ltr">٠</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>≥</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مشتقة كل فرع مرتين تعطينا التقعر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصل عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. تغيرت إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` من السالب إلى الموجب؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` نقطة انعطاف.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p031-r1
title: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ١ · ٢٠٢٤ — الدور الأول
kicker: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ١ · ٢٠٢٤ — الدور الأول
reference: السؤال، الصورة، · المفتاح
question: الشكل المجاور يمثل منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` المعرف على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">و</mi><mo stretchy="true">[</mo></mrow></math>\`، أي من الفترات التالية يكون عندها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">لَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">لً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقداراً سالباً؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">د</mi><mo>،</mo><mtext dir="rtl">هـ</mtext><mo stretchy="true">[</mo></mrow></math>\`
explanation:
![الشكل الأصلي](assets/lessons/curriculum-evidence/849240b5cb42afaf43d1.webp)

إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` تؤخذ من موضعه فوق المحور أو تحته، وإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ل</mi><mo>′</mo></msup></math>\` من الصعود والهبوط، وإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ل</mi><mo>″</mo></msup></math>\` من التقعر.

من الرسم في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` فوق المحور فموجب، ويتناقص فمشتقته سالبة، وتقعره للأعلى فمشتقته الثانية موجبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ل</mtext><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mspace width="2em"/><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mspace width="2em"/><msup><mtext dir="rtl">ل</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



حاصل ضرب موجب وسالب وموجب سالب. إذن الفترة المطلوبة من الخيارات هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
example:
![منحنى ل مع الحروف على المحور والنهايات المفتوحة والإسقاطات المتقطعة](assets/lessons/curriculum-evidence/849240b5cb42afaf43d1.webp)
:::


:::mcq
id: math-kamel-u2-p031-r2
title: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٢ · ٢٠٢٤ — الدور الأول
kicker: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٢ · ٢٠٢٤ — الدور الأول
reference: السؤال، الصورة، · المفتاح
question: ما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` التي تجعل لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` كثير حدود، لا يتغير تقعره عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` إلا إذا انعدمت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` هناك. نشتق مرتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">بس</mtext><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` ونحل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>=</mo><mrow><mn dir="ltr">٦</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` وموجبة بعدها؛ فتتحقق نقطة الانعطاف.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p031-r3
title: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٣ · ٢٠٢٤ — الدور الثاني
kicker: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٣ · ٢٠٢٤ — الدور الثاني
reference: السؤال، الصورة، · المفتاح
question: إذا كان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` نقطة انعطاف عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
نشتق مرتين لأن الانعطاف يتعلق بتغير التقعر. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` كثير حدود، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` صفرًا عند نقطة الانعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أس</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تصبح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>=</mo><mrow><mn dir="ltr">١٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، وتتبدل إشارتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p031-r4
title: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٤ · تجريبي رام الله والبيرة — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٤ · تجريبي رام الله والبيرة — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فما العبارة الصحيحة دائماً من العبارات الآتية؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى محلية
explanation:
بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>\`، ينطبق الشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. ومع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` نستعمل اختبار المشتقة الثانية: النقطة الساكنة ذات المشتقة الثانية السالبة تعطي عظمى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قيمة عظمى محلية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p031-r5
title: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٥ · تجريبي سلفيت — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣١ · ص ٣٠ · البند ٥ · تجريبي سلفيت — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كان المستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\` مماساً للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عند نقطة الانعطاف \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` فإن ظل زاوية الانعطاف هو:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | صفر
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
زاوية الانعطاف هي زاوية ميل المماس عند نقطة الانعطاف. وظل زاوية الميل يساوي ميل المستقيم.

نرتب المعادلة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mrow><mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`؛ معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الميل</mtext><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.

إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">ظل زاوية الانعطاف</mtext><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p032-r1
title: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ١ · تجريبي الوسطى — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ١ · تجريبي الوسطى — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` يمر بالنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فأي مما يلي قيمة عظمى للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | صفر
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`. ومع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` نستعمل اختبار المشتقة الثانية: سالبيتها عند نقطة ساكنة تدل على عظمى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن القيمة العظمى المحلية هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p032-r2
title: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٢ · تجريبي الخليل — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٢ · تجريبي الخليل — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة عظمى محلية
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف
explanation:
حاصل ضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` موجب، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` موجبة؛ لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` موجبة أيضًا، لأن العاملين لهما الإشارة نفسها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، أي أن النقطة ساكنة. اختبار المشتقة الثانية الموجبة عند نقطة ساكنة يدل على صغرى محلية.

إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p032-r4
title: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٤ · تجريبي الخليل — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٤ · تجريبي الخليل — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` التي تجعل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعراً للأسفل؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mn dir="ltr">١٢</mn></mrow></math>\`
explanation:
التقعر للأسفل يتطلب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` يعامل كعدد عند الاشتقاق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نطلب سلبية المشتقة الثانية، ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` الموجبة دون عكس المتباينة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>&lt;</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p032-r5
title: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٥ · تجريبي الخليل — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٥ · تجريبي الخليل — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً يحقق شروط نظرية رول في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">]</mo></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi></mrow></math>\` التي تحددها النظرية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، فإن إحدى العبارات صحيحة:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة صغرى محلية للاقتران
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة عظمى محلية للاقتران
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>≠</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:
نظرية رول تضمن وجود نقطة داخل الفترة مشتقتها صفر؛ والنقطة التي عينها السؤال هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.

نستخدم اختبار المشتقة الثانية عند النقطة الساكنة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فيثبت الاختبار وجود قيمة عظمى محلية عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.

إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قيمة عظمى محلية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p032-r6
title: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٦ · تجريبي الخليل — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣٢ · ص ٣١ · البند ٦ · تجريبي الخليل — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>∈</mo><mo stretchy="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">]</mo></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∀</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>&gt;</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></mrow></math>\`، أي العبارات التالية صحيحة دائماً؟
- [ ] option-1 | منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">]</mo></mrow></math>\`
- [ ] option-2 | منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">]</mo></mrow></math>\`
- [x] option-3 | منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر لأعلى في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر لأسفل في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
explanation:


المعطى يعني أن المشتقة الأولى أكبر كلما كبرت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>&gt;</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo stretchy="false">)</mo><mo>&gt;</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



إذن الميول تتزايد، وهذا هو التقعر للأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="false">]</mo><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">[</mo></mrow></math>
\`\`\`



النتيجة: منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر لأعلى في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p033-r1
title: الكامل، الوحدة الثانية · الصورة، ٣٣ · ص ٣٢ · البند ١ · تجريبي الخليل — ٢٠١٩
kicker: الكامل، الوحدة الثانية · الصورة، ٣٣ · ص ٣٢ · البند ١ · تجريبي الخليل — ٢٠١٩
reference: السؤال، الصورة، · المفتاح
question: إذا كانت النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قياس زاوية الانعطاف؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>π</mo></mrow></math>\`
explanation:
زاوية الانعطاف هي زاوية ميل المماس عند نقطة الانعطاف. إحداثيها السيني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، لذلك نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فهو ميل هذا المماس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



زاوية الميل بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`؛ الزاوية ذات الظل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` في هذا المجال هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p033-r3
title: الكامل، الوحدة الثانية · الصورة، ٣٣ · ص ٣٢ · البند ٣ · تجريبي طوباس — ٢٠٢٠
kicker: الكامل، الوحدة الثانية · الصورة، ٣٣ · ص ٣٢ · البند ٣ · تجريبي طوباس — ٢٠٢٠
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\` فإن النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` هي:
- [x] option-1 | قيمة عظمى محلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\`
- [ ] option-2 | قيمة صغرى محلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\`
- [ ] option-3 | قيمة صغرى مطلقة للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\`
- [ ] option-4 | نقطة انعطاف للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\`
explanation:


تناقص المشتقة الأولى حول ثلاثة يجعل المشتقة الثانية هناك غير موجبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>≤</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



وحاصل الضرب موجب؛ فالعاملان غير صفر ويتفقان في الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



المشتقة الأولى صفر عند واحد؛ فنستخدم اختبار المشتقة الثانية للعظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: قيمة عظمى محلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p033-r6
title: الكامل، الوحدة الثانية · الصورة، ٣٣ · ص ٣٢ · البند ٦ · تجريبي شمال الخليل — ٢٠٢٤
kicker: الكامل، الوحدة الثانية · الصورة، ٣٣ · ص ٣٢ · البند ٦ · تجريبي شمال الخليل — ٢٠٢٤
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود مقعراً للأسفل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>∀</mo><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، ما العبارة الصحيحة دائماً مما يأتي؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&gt;</mo><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
explanation:


التقعر للأسفل يعني أن المشتقة الأولى تتناقص.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



فتكون قيمة المشتقة عند المدخل الأكبر أصغر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p034-r1
title: الكامل، الوحدة الثانية · الصورة، ٣٤ · ص ٣٣ · البند ١ · تجريبي نابلس — ٢٠٢٤
kicker: الكامل، الوحدة الثانية · الصورة، ٣٤ · ص ٣٣ · البند ١ · تجريبي نابلس — ٢٠٢٤
reference: السؤال، الصورة، · المفتاح
question: إذا كان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مماس أفقي عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، فإن النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` هي:
- [ ] option-1 | نقطة انعطاف
- [ ] option-2 | نقطة قيمة عظمى محلية
- [x] option-3 | نقطة قيمة صغرى محلية
- [ ] option-4 | نقطة قيمة عظمى مطلقة
explanation:


المماس الأفقي يجعل المشتقة الأولى صفرًا عند اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نرتب المتباينة المعطاة؛ فالمشتقة الثانية أكبر من اثنين، وبالتالي موجبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٢</mn><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



المشتقة الثانية الموجبة عند النقطة الساكنة تعطي قيمة صغرى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: نقطة قيمة صغرى محلية
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u2-p034-r2
title: الكامل، الوحدة الثانية · الصورة، ٣٤ · ص ٣٣ · البند ٢ · خارجي
kicker: الكامل، الوحدة الثانية · الصورة، ٣٤ · ص ٣٣ · البند ٢ · خارجي
reference: السؤال، الصورة، · المفتاح
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` يقع في الربع الثالث، معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص في نفس الفترة وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup><mo>×</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، أي العبارات التالية صحيحة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر لأعلى في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر لأسفل في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">[</mo></mrow></math>\`
explanation:
المعطى أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متناقص وقيمه سالبة في الربع الثالث؛ نحتاج إثبات تناقص \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`. نستخدم مقارنة قيمتين، فلا نفترض وجود مشتقة ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

لنأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo>&lt;</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></mrow></math>\` داخل المجال. التناقص يعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، والأسّي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></math>\` موجب ومتزايد.

نضرب المتباينة الأولى في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow></msup></math>\` الموجب فلا تتغير إشارتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub></msup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo stretchy="false">)</mo><mo>&gt;</mo><msup><mi mathvariant="normal">هـ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub></msup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



وبما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow></msup><mo>&lt;</mo><msup><mi mathvariant="normal">هـ</mi><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></msup></mrow></math>\`، فإن الضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` السالب يعكس المتباينة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub></msup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo><mo>&gt;</mo><msup><mi mathvariant="normal">هـ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></msup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بجمع المقارنتين نحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>&gt;</mo><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`، إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` متناقص؛ الخيار الثالث.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u2-p035-r1
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ١ · ٢٠٠٧
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حدد فترات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، ثم أوجد نقطة الانعطاف.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وموجبة بعده؛ إذن يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب الصادي لنقطة الانعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نقطة الانعطاف هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p035-r2
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٢ · ٢٠٠٨
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جد مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo><mo stretchy="true">]</mo></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية: موجبها تقعر للأعلى وسالبها تقعر للأسفل. مشتقة الجيب جيب تمام، ومشتقة جيب التمام سالب جيب؛ وعند وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` نضرب بمشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

نشتق حاصل ضرب الجيب وجيب التمام بقاعدة الضرب: مشتقة الأول في الثاني، ثم الأول في مشتقة الثاني.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><msup><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



استعملنا هوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`، ينعدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\`؛ وهو موجب قبلها وسالب بعدها. لذلك تنعكس الإشارة بعد الضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo separator="true">,</mo><mi>π</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p035-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٣ · الجزء ١ · ٢٠٠٨ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` موجب؛ العاملان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` لهما الإشارة نفسها خارج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، وإشارتان مختلفتان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">]</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">٤</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">[</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: متزايد على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true">]</mo><mo>∪</mo><mo stretchy="true">[</mo><mn dir="ltr">٤</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`، ومتناقص على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p035-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٣ · الجزء ٢ · ٢٠٠٨ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) مجالات التقعر للأعلى وللأسفل.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` موجب؛ فتتبع الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p035-r4
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٤ · ٢٠٠٩
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`، جد مجالات التقعر للأعلى للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
التقعر للأعلى يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` المعطاة بقاعدة القسمة: مشتقة البسط في المقام ناقص البسط في مشتقة المقام، على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup></mrow><mrow><mo stretchy="false">(</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



المقام موجب دائمًا؛ لذلك تكفي إيجابية البسط.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>−</mo><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>&lt;</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>&lt;</mo><mtext dir="rtl">س</mtext><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



إذن التقعر للأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p035-r5-a
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٥ · الجزء ١ · ٢٠١٠
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل منحنى المشتقة الأولى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>\` لاقتران قابل للاشتقاق مرتين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`. ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` الإحداثي السيني لقمة هذا المنحنى، و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` الإحداثي السيني لقاعه، حيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mi mathvariant="normal">ب</mi></mrow></math>\`. حدّد فترات تقعر منحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` للأعلى وللأسفل بدلالة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.

![منحنى المشتقة الأولى الأصلي](assets/lessons/curriculum-evidence/4f33791ea20f7bf2b5e2.webp)
solution:
المعروض هو منحنى المشتقة الأولى، وليس منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`. تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يتحدد بإشارة المشتقة الثانية، أي بميل منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`.

![منحنى المشتقة الأولى الأصلي](assets/lessons/curriculum-evidence/4f33791ea20f7bf2b5e2.webp)

من يسار الرسم حتى القمة، يصعد منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، فتكون مشتقته موجبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بين القمة والقاع، يهبط منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، فتكون مشتقته سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



وبعد القاع يصعد منحنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` من جديد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mspace width="1em"/><mtext dir="rtl">على </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">التقعر للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mtext dir="rtl">التقعر للأسفل: </mtext><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo separator="true">,</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p035-r5-b
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٥ · الجزء ٢ · ٢٠١٠
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل منحنى المشتقة الأولى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>\` لاقتران قابل للاشتقاق مرتين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ح</mi></math>\`. ليكن \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` الإحداثي السيني لقمة منحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>\`، و\`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` الإحداثي السيني لقاعه، حيث \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">أ</mi><mo>&lt;</mo><mi mathvariant="normal">ب</mi></mrow></math>\`. ما الإحداثيات السينية لنقاط انعطاف منحنى \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\`، بدلالة هذين الرمزين؟

![منحنى المشتقة الأولى الأصلي](assets/lessons/curriculum-evidence/4f33791ea20f7bf2b5e2.webp)
solution:
نقطة الانعطاف هي نقطة يتغير عندها اتجاه تقعر منحنى الاقتران، مع اتصال الاقتران عندها. هنا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` قابل للاشتقاق، فهو متصل.

![منحنى المشتقة الأولى الأصلي](assets/lessons/curriculum-evidence/4f33791ea20f7bf2b5e2.webp)

قبل قمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` يكون هذا المنحنى صاعدًا، وبعدها هابطًا. لذلك تتغير إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` من الموجب إلى السالب: يتغير تقعر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` من الأعلى إلى الأسفل.

وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">ع</mi><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow></mrow></math>\` يتحول منحنى المشتقة الأولى من الهبوط إلى الصعود، فتتغير إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` من السالب إلى الموجب.

إذن كلا الموضعين يحقق تغير التقعر، ولا توجد مواضع أخرى لهذا التغير في الرسم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mspace width="1em"/><mtext dir="rtl">و</mtext><mspace width="1em"/><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p035-r6-a
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٦ · الجزء ١ · ٢٠١٠ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) القيم القصوى للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مربع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` لا يغيّر الإشارة عند الصفر؛ فلا توجد قيمة قصوى هناك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عند ثلاثة تنتقل المشتقة من السالب إلى الموجب؛ فتكون صغرى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup></mrow><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١٩</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



النتيجة: قيمة صغرى محلية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١٩</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\` عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p035-r6-b
title: الكامل، الوحدة الثانية · الصورة، ٣٥ · ص ٣٤ · البند ٦ · الجزء ٢ · ٢٠١٠ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



خارج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يتفق العاملان في الإشارة فيكون الجداء موجبًا؛ وبينهما يختلفان فيكون سالبًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p036-r1-a
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ١ · الجزء ١ · ٢٠١١
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">١٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦٠</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧٢</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` حاصل جمعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` وضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` استعملنا العاملين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. يتفق العاملان قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، ويختلفان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p036-r1-b
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ١ · الجزء ٢ · ٢٠١١
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">١٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. الإحداثيات السينية لنقاط الانعطاف.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٧٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦٠</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٧٢</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` حاصل جمعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\` وضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` استعملنا العاملين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`. يتفق العاملان قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، ويختلفان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`؛ إذن الإحداثيان السينيان لنقطتي الانعطاف هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
:::


:::exam-question
id: math-kamel-u2-p036-r2-a
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٢ · الجزء ١ · ٢٠١٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. القيم القصوى المحلية.
solution:


الاقتران حاصل ضرب عوامل تتغير مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نشتق كل عامل مع إبقاء بقية العوامل، ثم نجمع النتائج.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إشارة المشتقة موجبة ثم سالبة ثم موجبة؛ فتوجد عظمى عند الصفر وصغرى عند اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` قيمة محلية عظمى، و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\` قيمة محلية صغرى.
:::


:::exam-question
id: math-kamel-u2-p036-r2-b
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٢ · الجزء ٢ · ٢٠١٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. مجالات التقعر للأعلى وللأسفل.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` موجب؛ فتكون المشتقة الثانية سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وموجبة بعده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p036-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٣ · الجزء ١ · ٢٠١٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 المعطى هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` نفسها. المشتقة الموجبة تعني التزايد والسالبة تعني التناقص؛ فلا نحتاج اشتقاق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`.

المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` موجب دائمًا، فتتبع إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi mathvariant="normal">س</mi><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` سالبة، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` تكون موجبة، وتنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.

إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متناقص على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، ومتزايد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">∞</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`. ويمكن إدراج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` في الفترتين لأن التناقص أو التزايد يُفحص بمقارنة قيم الاقتران داخل كل فترة، ولا يلزم أن تكون المشتقة غير صفرية عند طرفها.
:::


:::exam-question
id: math-kamel-u2-p036-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٣ · الجزء ٢ · ٢٠١٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر للأعلى يقابل مشتقة ثانية موجبة، وللأسفل يقابل مشتقة ثانية سالبة؛ لذا نحسبها من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` المعطاة. قاعدة القسمة هي: مشتقة البسط في المقام، ناقص البسط في مشتقة المقام، على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



المقام موجب دائمًا. البسط موجب بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وسالب خارجهما؛ فالمشتقة الثانية موجبة بينهما وسالبة خارجهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p036-r3-c
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٣ · الجزء ٣ · ٢٠١٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`. الإحداثيات السينية لنقط الانعطاف.
solution:
 نقطة الانعطاف نقطة اتصال يتغير عندها التقعر. نحدد التقعر من إشارة المشتقة الثانية: الموجب للأعلى والسالب للأسفل؛ لذا نحسبها من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` المعطاة. قاعدة القسمة هي: مشتقة البسط في المقام، ناقص البسط في مشتقة المقام، على مربع المقام.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



المقام موجب دائمًا. البسط موجب بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، وسالب خارجهما؛ فالمشتقة الثانية موجبة بينهما وسالبة خارجهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصل لأن مشتقته المعطاة موجودة؛ إذن الإحداثيان السينيان لنقطتي الانعطاف هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
:::


:::exam-question
id: math-kamel-u2-p036-r4-a
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٤ · الجزء ١ · ٢٠١٣
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) القيم العظمى والصغرى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


نشتق؛ مشتقة مربع الجيب تشمل مشتقة الجيب، ومشتقة جيب التمام تشمل عامل اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الجيب موجب داخل المجال؛ فيتزايد الاقتران من الطرف الأيسر إلى الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



قيم الطرفين أصغر وأكبر من قيمهما المجاورة داخل المجال، على الترتيب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



النتيجة: صغرى عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وعظمى عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p036-r4-b
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٤ · الجزء ٢ · ٢٠١٣
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>−</mo><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) فترات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية: موجبها تقعر للأعلى وسالبها تقعر للأسفل. مشتقة الجيب جيب تمام، ومشتقة جيب التمام سالب جيب؛ وعند وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` نضرب بمشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

مشتقة مربع الجيب تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` ينعدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`؛ وهو موجب قبلها وسالب بعدها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p036-r6-a
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٦ · الجزء ١ · ٢٠١٣ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، جد ما يأتي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) القيم الصغرى والعظمى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



المربع موجب خارج الصفر؛ فتتبع الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` زائد ثلاثة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الإشارة تتبدل من السالب للموجب عند سالب ثلاثة؛ ولا تتبدل عند الصفر.

نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



النتيجة: صغرى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٣,٥</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p036-r6-b
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٦ · الجزء ٢ · ٢٠١٣ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، جد ما يأتي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) فترات تقعر \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` للأعلى وللأسفل.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



يتفق العاملان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` خارج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، ويختلفان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p036-r7
title: الكامل، الوحدة الثانية · الصورة، ٣٦ · ص ٣٥ · البند ٧ · ٢٠١٤
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود من الدرجة الثالثة، جد قاعدة الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا علمت أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة قيمة صغرى محلية وأن النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نكتب التكعيبي بمعاملات مجهولة، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\` لأن الدرجة الثالثة. نستخدم نقطة الانعطاف لتحديد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">د</mi></math>\`، والصغرى لتحديد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>+</mo><mtext dir="rtl">ب</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mtext dir="rtl">جس</mtext><mo>+</mo><mtext dir="rtl">د</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">بس</mtext><mo>+</mo><mtext dir="rtl">ج</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أس</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`



نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">د</mtext><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



عند الصغرى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ج</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ج</mtext><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



من الأولى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mrow><mo>−</mo><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">أ</mi></mrow></mrow></mrow></math>\`. نعوض في الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٢</mn><mtext dir="rtl">أ</mtext><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">١٦</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ج</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٦</mn><mo>×</mo><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>×</mo><mn dir="ltr">٢</mn></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` موجبة، فتتحقق الصغرى، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` تتغير إشارتها عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p037-r1-a
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ١ · الجزء ١ · ٢٠١٤ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


نحدد التزايد من إشارة المشتقة؛ الموجب يعني التزايد والسالب يعني التناقص.

بقاعدة السلسلة، مشتقة مربع الجيب هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`. لذلك:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



استعملنا الهوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></mrow></math>\`. داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` تكون الزاوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`، فيكون جيبها موجبًا.

إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متزايد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\`، ولا توجد فترة تناقص.
:::


:::exam-question
id: math-kamel-u2-p037-r1-b
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ١ · الجزء ٢ · ٢٠١٤ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) مجالات التقعر للأعلى وللأسفل لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية: موجبها تقعر للأعلى وسالبها تقعر للأسفل. مشتقة الجيب جيب تمام، ومشتقة جيب التمام سالب جيب؛ وعند وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` نضرب بمشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

مشتقة مربع الجيب تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` ينعدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\`؛ وهو موجب قبلها وسالب بعدها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p037-r2-a
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٢ · الجزء ١ · ٢٠١٤ — إكمال الضفة
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` سالب، والجداء \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` موجب خارج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` وسالب بينهما؛ لذلك تنعكس إشارته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">]</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">[</mo></mrow></math>
\`\`\`



النتيجة: متزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo><mo>∪</mo><mo stretchy="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p037-r2-b
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٢ · الجزء ٢ · ٢٠١٤ — إكمال الضفة
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. مجالات التقعر ونقط الانعطاف للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\` سالب؛ لذلك تكون المشتقة الثانية موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وسالبة بعده، ويتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب الصادي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">١٨</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نقطة الانعطاف هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p037-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٣ · الجزء ١ · ٢٠١٥
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. عين مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` موجب ما عدا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`؛ فلا تتغير الإشارة عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`، وتتبع بقية الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">]</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">[</mo></mrow></math>
\`\`\`



النتيجة: متزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p037-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٣ · الجزء ٢ · ٢٠١٥
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. أوجد القيم القصوى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المربع لا يغيّر الإشارة عند الصفر؛ أما عند الواحد فتنتقل من الموجب إلى السالب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



النتيجة: قيمة عظمى عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p037-r3-c
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٣ · الجزء ٣ · ٢٠١٥
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`. عين مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` سالب و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` موجب، فيكون الجداء سالبًا. بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\` كلاهما موجب. بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\` يختلفان.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p037-r4-a
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٤ · الجزء ١ · ٢٠١٥ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. القيم القصوى للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">١٠</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الإشارة موجبة ثم سالبة ثم موجبة؛ فتوجد عظمى عند الصفر وصغرى عند اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



النتيجة: قيمة عظمى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، وقيمتها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`. قيمة صغرى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، وقيمتها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p037-r4-b
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٤ · الجزء ٢ · ٢٠١٥ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` موجب؛ فتكون المشتقة الثانية سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وموجبة بعده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p037-r5-a
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٥ · الجزء ١ · ٢٠١٦
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` موجب؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` مختلفا الإشارة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وموجبان بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: متناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true">]</mo><mo>∪</mo><mo stretchy="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p037-r5-b
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٥ · الجزء ٢ · ٢٠١٦
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) القيم القصوى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



المشتقة سالبة ثم موجبة ثم سالبة؛ إذن الصفر صغرى واثنان عظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عند الطرفين نقارن بالقيم المجاورة داخل المجال: الأيسر عظمى والأيمن صغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></math>
\`\`\`



النتيجة: عظمى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`. صغرى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p037-r5-c
title: الكامل، الوحدة الثانية · الصورة، ٣٧ · ص ٣٦ · البند ٥ · الجزء ٣ · ٢٠١٦
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



داخل المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وسالبة بعده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p038-r2-a
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٢ · الجزء ١ · ٢٠١٦ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` موجب ما عدا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`؛ لذلك تتبع الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، ولا تتغير عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: متناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p038-r2-b
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٢ · الجزء ٢ · ٢٠١٦ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) القيم العظمى والصغرى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المشتقة سالبة قبل الواحد وموجبة بعده؛ والصفر لا يغيّر الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mi mathvariant="normal">س</mi><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بالتناقص من الطرف الأيسر والتزايد نحو الأيمن، يكون كلا الطرفين عظمى محلية داخل المجال.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



النتيجة: عظمى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\`. صغرى محلية: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p038-r2-c
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٢ · الجزء ٣ · ٢٠١٦ — الإكمال
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



داخل المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يتفق العاملان قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\`، ويختلفان بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p038-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٣ · الجزء ١ · ٢٠١٧
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، معرفاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


الاقتران حاصل ضرب عوامل تتغير مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نشتق كل عامل مع إبقاء بقية العوامل، ثم نجمع النتائج.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` موجب، والعاملان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` يتفقان خارج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ويختلفان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: متزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo><mo>∪</mo><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p038-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٣ · الجزء ٢ · ٢٠١٧
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، معرفاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) القيم القصوى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


الاقتران حاصل ضرب عوامل تتغير مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`؛ نشتق كل عامل مع إبقاء بقية العوامل، ثم نجمع النتائج.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المشتقة موجبة ثم سالبة ثم موجبة؛ فتوجد عظمى عند سالب واحد وصغرى عند واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الاقتران يصعد من الطرف الأيسر ونحو الأيمن؛ فالأيسر صغرى والأيمن عظمى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mrow><mo fence="true">(</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١١٢</mn></mrow></math>
\`\`\`



النتيجة: عظمى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١١٢</mn></mrow></math>\`. صغرى: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p038-r3-c
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٣ · الجزء ٣ · ٢٠١٧
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، معرفاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نحتاج المشتقة الثانية لأن موجبها يدل على التقعر للأعلى وسالبها على التقعر للأسفل.

نستعمل مربع الفرق: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`، ثم نوزع كل حد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` على الحدود داخل القوس ونجمع المتشابه. بهذه التوسعة يصبح الاشتقاق حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



داخل المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وموجبة بعده. إذن التقعر للأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وللأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p038-r4-a
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٤ · الجزء ١ · ٢٠١٧ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نحدد التزايد من إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` غير سالبة في المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\`، لذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>≥</mo><mn dir="ltr">١</mn></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` على المجال كله. إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متزايد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\`، ولا توجد فيه فترة تناقص.
:::


:::exam-question
id: math-kamel-u2-p038-r4-b
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٤ · الجزء ٢ · ٢٠١٧ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) القيم العظمى والصغرى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



الجيب غير سالب في المجال، فتكون المشتقة موجبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



الاقتران متزايد؛ إذن طرفه الأيسر صغرى وطرفه الأيمن عظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نبسّط القيمة عند الطرف الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



النتيجة: عظمى محلية مطلقة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`. صغرى محلية: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p038-r4-c
title: الكامل، الوحدة الثانية · الصورة، ٣٨ · ص ٣٧ · البند ٤ · الجزء ٣ · ٢٠١٧ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة المشتقة الأولى؛ نشتق العلاقة السابقة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نشتق الناتج؛ إشارة المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة للأسفل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر لتحديد حدود الفترات التي نفحص إشارتها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نحل شرط أن تكون المشتقة الثانية موجبة لإيجاد التقعر للأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">]</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">[</mo></mrow></math>
\`\`\`



نحل شرط الإشارة السالبة؛ فيكون المنحنى مقعرًا للأسفل في:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">]</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo separator="true">,</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo stretchy="false">[</mo></mrow></math>
\`\`\`



النتيجة: مقعر لأعلى في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo stretchy="true">[</mo></mrow></math>\`، ومقعر لأسفل في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo stretchy="true">[</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p039-r2-a
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٢ · الجزء ١ · ٢٠١٨
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` موجب؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` مختلفا الإشارة خارج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وموجبان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: متناقص على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true">]</mo><mo>∪</mo><mo stretchy="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتزايد على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p039-r2-b
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٢ · الجزء ٢ · ٢٠١٨
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) القيم القصوى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



الإشارة سالبة ثم موجبة ثم سالبة؛ الصفر صغرى واثنان عظمى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نضم الطرفين ونقارن القيم: الأكبر عظمى مطلقة والأصغر صغرى مطلقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>\` عظمى محلية مطلقة. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` صغرى مطلقة. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\` عظمى محلية. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` صغرى محلية ومطلقة.
:::


:::exam-question
id: math-kamel-u2-p039-r2-c
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٢ · الجزء ٣ · ٢٠١٨
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



داخل المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وسالبة بعده؛ لذلك يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p039-r2-d
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٢ · الجزء ٤ · ٢٠١٨
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>\` معرفاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`) نقطة الانعطاف للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



داخل المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow></math>\` موجبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وسالبة بعده؛ لذلك يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب الصادي لنقطة الانعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نقطة الانعطاف هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p039-r3
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٣ · ٢٠١٩
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف أفقي هي النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ك</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، احسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">عً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نقطة الانعطاف الأفقي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، كما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` لأن المشتقة الثانية موجودة عند الانعطاف.

نشتق المعادلة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٤</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow></mrow><mo>+</mo><mi mathvariant="normal">ك</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mtext dir="rtl">س</mtext><mo>+</mo><msup><mtext dir="rtl">ك</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ومشتقتيها لإيجاد القيم المطلوبة لك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١٢</mn><mo>+</mo><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٢٤</mn><mo>+</mo><msup><mtext dir="rtl">ك</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ك</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><msup><mi mathvariant="normal">ك</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، فمشتقتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></mrow><msup><mi mathvariant="normal">ك</mi><mo>′</mo></msup></mrow></math>\` بقاعدة السلسلة. نشتق الناتج بقاعدة الضرب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ع</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ع</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><msup><mtext dir="rtl">ك</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ك</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ك</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ع</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">١٢٨</mn><mo>+</mo><mn dir="ltr">١٢٠</mn><mo>=</mo><mn dir="ltr">٢٤٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p039-r4-a
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٤ · الجزء ١ · ٢٠١٩
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` موجب؛ داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` موجبًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` سالبًا، وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` كلاهما موجب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: متزايد في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتناقص في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p039-r4-b
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٤ · الجزء ٢ · ٢٠١٩
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) القيم القصوى المحلية والمطلقة للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تنتقل المشتقة من السالب للموجب عند ثلاثة؛ فهي صغرى محلية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الاقتران يهبط من الطرف الأيسر ويصعد نحو الأيمن؛ فكلاهما عظمى محلية، ثم نقارن القيم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى محلية ومطلقة. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٢٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية ومطلقة.
:::


:::exam-question
id: math-kamel-u2-p039-r4-c
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٤ · الجزء ٣ · ٢٠١٩
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر يصف اتجاه انحناء المنحنى؛ تكون المشتقة الثانية موجبة للتقعر للأعلى وسالبة للتقعر للأسفل. لذلك نحسبها ونفحص إشارتها داخل المجال المعطى.

بقاعدة القوة، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mrow><msup><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\`، ونشتق حدود المجموع حدًا حدًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة الناتج السابق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك ثم نحلل الباقي لإظهار الأصفار.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر؛ فتقسم هذه القيم المجال إلى فترات نفحصها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



داخل المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وموجبة بعده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p039-r4-d
title: الكامل، الوحدة الثانية · الصورة، ٣٩ · ص ٣٨ · البند ٤ · الجزء ٤ · ٢٠١٩
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`) نقط الانعطاف لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية لأن موجبها يعني التقعر للأعلى وسالبها يعني التقعر للأسفل. نقطة الانعطاف تتطلب تبدّل التقعر، لا مجرد انعدام المشتقة.

بقاعدة القوة نضرب بالأس ثم ننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نشتق الناتج مرة ثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك لتسهيل فحص الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تكون الإشارة سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وموجبة بعده، فيتغير التقعر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢٤</mn><mo>+</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نقطة الانعطاف هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p040-r1-a
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ١ · الجزء ١ · ٢٠١٩ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٥</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نساوي العوامل بالصفر لتقسيم المجال إلى فترات ثابتة الإشارة.

العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` موجب، والعاملان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` يتفقان خارج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ويختلفان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تكون المشتقة موجبة هنا؛ فيتزايد الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٦</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



وتكون سالبة هنا؛ فيتناقص الاقتران على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\` و\`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتناقص على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p040-r1-b
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ١ · الجزء ٢ · ٢٠١٩ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) القيم القصوى المحلية للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٥</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



المشتقة موجبة ثم سالبة ثم موجبة؛ فتوجد عظمى عند سالب واحد وصغرى عند ثلاثة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



التزايد من الطرف الأيسر يجعله صغرى محلية، والتزايد نحو الأيمن يجعله عظمى محلية؛ نقارن القيم للمطلق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٥٩</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى محلية. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٢٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى مطلقة. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٥٩</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى مطلقة.
:::


:::exam-question
id: math-kamel-u2-p040-r1-c
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ١ · الجزء ٣ · ٢٠١٩ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">]</mo></mrow></math>\`، أوجد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية لأن موجبها يعني التقعر للأعلى وسالبها يعني التقعر للأسفل. نقطة الانعطاف تتطلب تبدّل التقعر، لا مجرد انعدام المشتقة.

بقاعدة القوة نضرب بالأس ثم ننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نشتق الناتج مرة ثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك لتسهيل فحص الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تكون الإشارة سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وموجبة بعده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بالتعويض: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mo>+</mo><mn dir="ltr">٥</mn></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>\`؛ إذن نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p040-r2
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ٢ · ٢٠١٩ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi><mo>،</mo><mi mathvariant="normal">د</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، وكان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، ومعادلة المماس لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عند نقطة الانعطاف هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ص</mi><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، أوجد قاعدة الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">د</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة المشتقة الأولى؛ نشتق العلاقة السابقة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة عند الصفر تحدد الثابت، والانعطاف عند واحد يجعل المشتقة الثانية صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نكتب المماس بصيغة تبين الميل؛ ثم نستخدمه عند واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نعوّض المعاملات، ونتحقق من وقوع النقطة على المماس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>\`
:::


:::exam-question
id: math-kamel-u2-p040-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ٣ · الجزء ١ · ٢٠٢٠
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo><mo stretchy="true">[</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة تقعرًا للأسفل. مشتقة مربع الجيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\` بقاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></mrow></math>\`، نجمع الحدين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



في المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`، تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` صفرًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`؛ أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`. تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` موجبة خارج هاتين القيمتين وسالبة بينهما؛ لذلك تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة خارجهما وموجبة بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mi>π</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p040-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ٣ · الجزء ٢ · ٢٠٢٠
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo><mo stretchy="true">[</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) نقطة / نقاط الانعطاف.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة تقعرًا للأسفل. نقطة الانعطاف نقطة اتصال يتغير عندها التقعر. مشتقة مربع الجيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\` بقاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></mrow></math>\`، نجمع الحدين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



في المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`، تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` صفرًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`؛ أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`. تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` موجبة خارج هاتين القيمتين وسالبة بينهما؛ لذلك تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة خارجهما وموجبة بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mi>π</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند القيمتين، ونحسب الصادي. عند كلتيهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



إذن نقطتا الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p040-r3-c
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ٣ · الجزء ٣ · ٢٠٢٠
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mtext dir="rtl">جا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo><mo stretchy="true">[</mo></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) زاوية / زوايا الانعطاف.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة تقعرًا للأسفل. نقطة الانعطاف نقطة اتصال يتغير عندها التقعر. مشتقة مربع الجيب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\`، ومشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></math>\` بقاعدة السلسلة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></mrow></math>\`، نجمع الحدين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



في المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`، تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` صفرًا عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٢</mn></mfrac></math>\`؛ أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٤</mn></mfrac></math>\`. تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` موجبة خارج هاتين القيمتين وسالبة بينهما؛ لذلك تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة خارجهما وموجبة بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo separator="true">,</mo><mi>π</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



زاوية الانعطاف هي زاوية ميل المماس عند نقطة الانعطاف. ظل هذه الزاوية يساوي ميل المماس، وهو المشتقة الأولى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><msub><mi>θ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><msub><mi>θ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نختار زاوية الميل بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`؛ الميل السالب في الربع الثاني والموجب في الأول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>θ</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>θ</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p040-r4-a
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ٤ · الجزء ١ · ٢٠٢٠ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mroot><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`) مجالات التقعر للأعلى وللأسفل للاقتران.
solution:
المشتقة الثانية الموجبة تعطي تقعرًا للأعلى والسالبة للأسفل. نكتب الجذر التكعيبي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\`، ثم نستخدم قاعدة القوة مرتين، عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mroot><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></mroot><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mroot><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></mroot><msup><mo stretchy="false">)</mo><mn dir="ltr">٥</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



القوة الخامسة تحفظ إشارة الجذر، والجذر التكعيبي له إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`. عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\` يكون المقام سالبًا، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` موجبة. وعندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` يكون المقام موجبًا، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة.

إذن التقعر للأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وللأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">∞</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p040-r4-b
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ٤ · الجزء ٢ · ٢٠٢٠ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mroot><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`) نقطة / نقاط الانعطاف (إن وجدت).
solution:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mroot><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></mroot><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></msup></mrow></mfrac></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة المشتقة الأولى؛ نشتق العلاقة السابقة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></msup></mrow></mfrac></mrow></math>
\`\`\`



المشتقة الثانية موجبة يسار الصفر وسالبة يمينه؛ والاقتران متصل عنده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوّض الصفر لإكمال الإحداثيين؛ عدم وجود المشتقة عند النقطة لا يمنع الانعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف.
:::


:::exam-question
id: math-kamel-u2-p040-r4-c
title: الكامل، الوحدة الثانية · الصورة، ٤٠ · ص ٣٩ · البند ٤ · الجزء ٣ · ٢٠٢٠ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mroot><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\`، أوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`) قياس زاوية / زوايا الانعطاف (إن وجدت).
solution:
زاوية الانعطاف هي زاوية المماس عند نقطة الانعطاف. نحدد الانعطاف ونوع المماس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mroot><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></mroot><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mroot><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></mroot><msup><mo stretchy="false">)</mo><mn dir="ltr">٥</mn></msup></mrow></mfrac><mspace width="1em"/><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo mathvariant="normal">≠</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` موجبة يسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وسالبة يمينه، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` متصل عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\`؛ إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` نقطة انعطاف.

ميل القاطع من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` إلى نقطة قريبة على المنحنى يساوي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>−</mo><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٠</mn></mrow></mfrac><mo>=</mo><mfrac><mroot><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></mroot><mtext dir="rtl">س</mtext></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="false">(</mo><mroot><mtext dir="rtl">س</mtext><mn dir="ltr">٣</mn></mroot><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



قرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` يقترب المقام من الصفر الموجب، فيكبر الميل بلا حد؛ هذا يعني مماسًا رأسيًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. زاويته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\`.
:::


:::exam-question
id: math-kamel-u2-p041-r1
title: الكامل، الوحدة الثانية · الصورة، ٤١ · ص ٤٠ · البند ١ · ٢٠٢٠ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور منحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` لكثير حدود \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` من الدرجة الثالثة. أوجد قاعدة الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` إذا علمت أن منحناه يمر بنقطة الأصل.

![الرسم الأصلي للمشتقة مع المحاور والأعداد المشار إليها](assets/lessons/curriculum-evidence/39aab604d6e3ba363898.webp)
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/39aab604d6e3ba363898.webp)

 الرسم يمثل المشتقة الأولى، وهي تربيعية لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` تكعيبي. رأس القطع عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، فنكتبها في صورة مربع يحدد الرأس.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



من الرسم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`؛ بالتعويض:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>=</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نكتب التكعيبي بمعاملات مجهولة ثم نشتقه بقاعدة القوة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">د</mi></mrow></math>
\`\`\`



مساواة معاملات القوى المتناظرة تعطي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٣</mn><mo>⟹</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>⟹</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">د</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



مرور \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` بالأصل يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، أي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. إذن:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p041-r2
title: الكامل، الوحدة الثانية · الصورة، ٤١ · ص ٤٠ · البند ٢ · ٢٠٢٠ — الدور الثالث
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>\` نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان قياس زاوية الانعطاف عند نقطة الانعطاف تلك يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، أوجد قيم الثوابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`.
solution:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">ج</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة المشتقة الأولى؛ نشتق العلاقة السابقة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم شرط الانعطاف في المشتقة الثانية لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



ظل زاوية الانعطاف هو ميل المماس؛ فنجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi>π</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نعوّض بنقطة الانعطاف في الاقتران لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p041-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٤١ · ص ٤٠ · البند ٣ · الجزء ١ · ٢٠٢١
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
التقعر يتبع إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`، لأن مشتقة المدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نوحد المقام ثم نحلل فرق المربعين لنعرف الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` والمقام موجبان. تتبع إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` إشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.

إذن التقعر للأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وللأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">∞</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p041-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٤١ · ص ٤٠ · البند ٣ · الجزء ٢ · ٢٠٢١
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٢</mn><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` نقط الانعطاف (إن وجدت) للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نقطة الانعطاف تتطلب تغير التقعر. نشتق مرتين؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` بالصفر. المقام غير صفري لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mo>±</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl"> أو س</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نستبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` لأنه خارج المجال. بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mrow><mo>(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo>)</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>&lt;</mo><mn dir="ltr">١</mn></mrow></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` سالبة؛ وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` تكون موجبة. إذن يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.

نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ق</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><mo>+</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١٦</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p041-r5-a
title: الكامل، الوحدة الثانية · الصورة، ٤١ · ص ٤٠ · البند ٥ · الجزء ١ · ٢٠٢١ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية لأن موجبها يعني التقعر للأعلى وسالبها يعني التقعر للأسفل. نقطة الانعطاف تتطلب تبدّل التقعر، لا مجرد انعدام المشتقة.

بقاعدة القوة نضرب بالأس ثم ننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نشتق الناتج مرة ثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٨</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك لتسهيل فحص الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يتفق العاملان قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` فيكون الجداء موجبًا، ويختلفان بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` فيكون سالبًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p041-r5-b
title: الكامل، الوحدة الثانية · الصورة، ٤١ · ص ٤٠ · البند ٥ · الجزء ٢ · ٢٠٢١ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` نقط الانعطاف (إن وجدت) للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية لأن موجبها يعني التقعر للأعلى وسالبها يعني التقعر للأسفل. نقطة الانعطاف تتطلب تبدّل التقعر، لا مجرد انعدام المشتقة.

بقاعدة القوة نضرب بالأس ثم ننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نشتق الناتج مرة ثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٨</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العامل المشترك لتسهيل فحص الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



أو



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يتفق العاملان قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` فيكون الجداء موجبًا، ويختلفان بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` فيكون سالبًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند كل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`. نحسب الصاديين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٨١</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٨١</mn><mo>+</mo><mn dir="ltr">٣٦</mn><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نقطتا الانعطاف هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo>،</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p042-r1
title: الكامل، الوحدة الثانية · الصورة، ٤٢ · ص ٤١ · البند ١ · ٢٠٢١ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\` وكان لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` قيمة عظمى محلية قيمتها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\` وله نقطة انعطاف عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فأوجد قيم الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
solution:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة المشتقة الأولى؛ نشتق العلاقة السابقة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم انعدام المشتقة الثانية عند نقطة الانعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نجد النقطتين الساكنتين ونميز العظمى بإشارة المشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



العظمى عند اثنين وقيمتها ثمانية؛ نعوّض لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p042-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٤٢ · ص ٤١ · البند ٣ · الجزء ١ · ٢٠٢١ — الدور الثالث
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` القيم القصوى المحلية والمطلقة للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:


مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`



نأخذ العوامل المشتركة ونحلل لتسهيل معرفة الأصفار والإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. نحدد هذه النقاط، ثم نفحص تغير إشارة المشتقة لتمييز العظمى والصغرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إشارة المشتقة موجبة ثم سالبة ثم موجبة؛ فتوجد عظمى عند سالب أربعة وصغرى عند اثنين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



التزايد من الطرف الأيسر يجعله صغرى محلية، والتزايد نحو الأيمن يجعله عظمى محلية؛ نقارن القيم للمطلق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نعوّض في الاقتران لإيجاد قيمه عند نقاط القيم القصوى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٧٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى محلية. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٢٨</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` صغرى مطلقة. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٨٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى مطلقة. \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">١٦</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` عظمى محلية.
:::


:::exam-question
id: math-kamel-u2-p042-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٤٢ · ص ٤١ · البند ٣ · الجزء ٢ · ٢٠٢١ — الدور الثالث
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`، فأوجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` مجالات التقعر للأعلى وللأسفل لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 نستخدم المشتقة الثانية لأن موجبها يعني التقعر للأعلى وسالبها يعني التقعر للأسفل. نقطة الانعطاف تتطلب تبدّل التقعر، لا مجرد انعدام المشتقة.

بقاعدة القوة نضرب بالأس ثم ننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`



نشتق الناتج مرة ثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك لتسهيل فحص الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` وموجبة بعده.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p042-r4
title: الكامل، الوحدة الثانية · الصورة، ٤٢ · ص ٤١ · البند ٤ · ٢٠٢١ — الدور الثالث
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان المستقيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ص</mi><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` يمس منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi></mrow></math>\` عند نقطة انعطاف \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وهي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة الثوابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo>،</mo><mi mathvariant="normal">ج</mi></mrow></math>\`؟
solution:


لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

مشتقة المجموع تساوي مجموع مشتقات حدوده؛ نشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">د</mi><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mi mathvariant="normal">ج</mi><mi mathvariant="normal">س</mi><mo fence="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`



المشتقة الثانية هي مشتقة المشتقة الأولى؛ نشتق العلاقة السابقة مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



عند الانعطاف تكون المشتقة الثانية صفرًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`



النقطة على المنحنى، وميل المماس سالب اثني عشر؛ نحصل على معادلتين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نطرح معادلة القيمة من معادلة الميل، ثم نعوّض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نرجع إلى المعادلتين لإيجاد بقية الثوابت.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p042-r5
title: الكامل، الوحدة الثانية · الصورة، ٤٢ · ص ٤١ · البند ٥ · ٢٠٢٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><msup><mtext dir="rtl">جتا</mtext><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\` معرفاً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo><mo stretchy="true">[</mo></mrow></math>\`، فحدد فترات التقعر للأعلى وللأسفل لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نشتق مرتين لتحديد التقعر. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">جا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">π</mi></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">π</mi></mrow></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٣</mn></mfrac></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٣</mn></mfrac></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac><mtext dir="rtl"> أو </mtext><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">س</mtext><mo>=</mo><mfrac><mi>π</mi><mn dir="ltr">٦</mn></mfrac><mtext dir="rtl"> أو س</mtext><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



بين هاتين القيمتين تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow><mo>&lt;</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، فتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` موجبة، وخارجهما سالبة.

إذن التقعر للأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٦</mn></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وللأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٦</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">π</mi></mrow><mn dir="ltr">٦</mn></mfrac><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p043-r2-a
title: الكامل، الوحدة الثانية · الصورة، ٤٣ · ص ٤٢ · البند ٢ · الجزء ١ · ٢٠٢٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وكان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` قيم الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
solution:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mrow><mi mathvariant="normal">أ</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">ب</mi><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msup></mrow></mrow></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وانعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`.

من نقطة القيمة المعطاة:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نشتق مرتين؛ لأن الانعطاف يتصل بتغير إشارة المشتقة الثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



عند الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\` يلزم أن تساوي المشتقة الثانية صفرًا؛ فهي متصلة لكثير الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` عاملًا مشتركًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نقطة الانعطاف تقع في المجال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` فلا يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` صفرًا. نقسم عليه.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`



للتحقق من الانعطاف:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



على المجال الموجب تتغير الإشارة من موجب إلى سالب عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\`.

الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p043-r2-b
title: الكامل، الوحدة الثانية · الصورة، ٤٣ · ص ٤٢ · البند ٢ · الجزء ٢ · ٢٠٢٢
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، وكان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` ظل زاوية ميل المماس عند نقطة الانعطاف لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

solution:
المطلوب ظل زاوية ميل المماس عند نقطة الانعطاف. نستخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من المعطيات، ثم نحسب ميل المماس عند الانعطاف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>⟹</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نشتق مرتين لفرض شرط الانعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نخرج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\` عاملًا مشتركًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` ونقطة الانعطاف عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، فإن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، ويجوز القسمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mrow><msup><mi mathvariant="normal">ب</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow></math>
\`\`\`



ظل زاوية الميل يساوي ميل المماس، والميل عند النقطة هو المشتقة الأولى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo>⋅</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٨</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mfrac><mn dir="ltr">٨١</mn><mn dir="ltr">٨</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٥٤</mn><mn dir="ltr">٨</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٨</mn></mfrac></mrow></math>
\`\`\`



الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mtext dir="rtl">زاوية الميل</mtext></mrow><mo>=</mo><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٨</mn></mfrac></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p043-r3
title: الكامل، الوحدة الثانية · الصورة، ٤٣ · ص ٤٢ · البند ٣ · ٢٠٢٢ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وكان لمنحنى \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مماساً أفقياً عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؟
solution:
المماس الأفقي ميله صفر، وميله يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`. والنقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` على المنحنى تعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">بس</mtext><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ب</mtext><mo>−</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>+</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`



من معادلة النقطة نجد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، ثم نعوض في معادلة الميل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mtext dir="rtl">أ</mtext><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p043-r4-a
title: الكامل، الوحدة الثانية · الصورة، ٤٣ · ص ٤٢ · البند ٤ · الجزء ١ · ٢٠٢٢ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\` قيمة عظمى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، وقيمة صغرى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` قيمة الثابتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
solution:
القيمة القصوى الداخلية لكثير حدود تكون عند مشتقة صفرية. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أس</mtext><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نطرح الأولى من الثانية لإزالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نعوض في الأولى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ب</mtext><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



للتحقق، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>=</mo><mrow><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\`؛ فهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، فتثبت العظمى ثم الصغرى.
:::


:::exam-question
id: math-kamel-u2-p043-r4-b
title: الكامل، الوحدة الثانية · الصورة، ٤٣ · ص ٤٢ · البند ٤ · الجزء ٢ · ٢٠٢٢ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi></mrow></math>\` قيمة عظمى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، وقيمة صغرى محلية عند \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فجد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نحتاج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup></math>\` لمعرفة التقعر، ونستعيد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` من شرطَي القيمتين القصويين. عندهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` كثير حدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أس</mtext><mo>+</mo><mtext dir="rtl">ب</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>+</mo><mn dir="ltr">٤</mn><mtext dir="rtl">أ</mtext><mo>+</mo><mtext dir="rtl">ب</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



بطرح الأولى من الثانية:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">أ</mtext><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`؛ لا نحتاج \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` لأنها ثابتة في هذه المشتقة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">أ</mtext><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



تنعدم عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`، وتكون سالبة قبلها وموجبة بعدها. إذن التقعر للأسفل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mo>،</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`، وللأعلى على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mi mathvariant="normal">∞</mi><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p043-r5-a
title: الكامل، الوحدة الثانية · الصورة، ٤٣ · ص ٤٢ · البند ٥ · الجزء ١ · ٢٠٢٢ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` مجالات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة تقعرًا للأسفل. نستعمل قاعدة السلسلة للمربع: نشتق القوة الخارجية ثم نضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نساويها بالصفر ونحل، مع أخذ الجذرين لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير مقيد بالإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>±</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac></mrow></math>
\`\`\`



تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\` موجبة إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>&gt;</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، أي خارج الجذرين، وسالبة بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo separator="true">,</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p043-r5-b
title: الكامل، الوحدة الثانية · الصورة، ٤٣ · ص ٤٢ · البند ٥ · الجزء ٢ · ٢٠٢٢ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>−</mo></math>\` نقط الانعطاف للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة تقعرًا للأسفل. نقطة الانعطاف نقطة اتصال يتغير عندها التقعر. نستعمل قاعدة السلسلة للمربع: نشتق القوة الخارجية ثم نضرب في مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`، وهي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٦</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`



نساويها بالصفر ونحل، مع أخذ الجذرين لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` غير مقيد بالإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>±</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac></mrow></math>
\`\`\`



تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\` موجبة إذا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>&gt;</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، أي خارج الجذرين، وسالبة بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo separator="true">,</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند الجذرين؛ ولكليهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`، لذا الصادي واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">٤</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>=</mo><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٩</mn></mfrac></mrow></math>
\`\`\`



نقطتا الانعطاف هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo>،</mo><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٣</mn></msqrt></mfrac><mo>،</mo><mfrac><mn dir="ltr">٦٤</mn><mn dir="ltr">٩</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p044-r2
title: الكامل، الوحدة الثانية · الصورة، ٤٤ · ص ٤٣ · البند ٢ · ٢٠٢٣ — الدور الأول
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٦</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">س</mi></mrow></math>\` معرفاً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`، جد لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` فترات التقعر للأعلى وللأسفل ونقاط الانعطاف.
solution:
 نستخدم المشتقة الثانية لأن موجبها يعني التقعر للأعلى وسالبها يعني التقعر للأسفل. نقطة الانعطاف تتطلب تبدّل التقعر، لا مجرد انعدام المشتقة.

بقاعدة القوة نضرب بالأس ثم ننقصه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ونشتق كل حد على حدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نشتق الناتج مرة ثانية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`



نأخذ العامل المشترك لتسهيل فحص الإشارة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي المشتقة الثانية بالصفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



داخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` سالبة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` وموجبة بعده، فيتغير التقعر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نحسب الصادي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢٤</mn><mo>+</mo><mn dir="ltr">١٨</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نقطة الانعطاف هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p044-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٤٤ · ص ٤٣ · البند ٣ · الجزء ١ · ٢٠٢٣ — الدور الأول
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` لكثير الحدود \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` المعرف على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، إذا علمت أن للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقاط انعطاف عند كل من \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، معتمداً عليه جد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

![الرسم الأصلي للمشتقة مع المحورين والتدريجات ونهايتي المجال](assets/lessons/curriculum-evidence/951c1027ee502c8858bd.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/951c1027ee502c8858bd.webp)



نقرأ إشارة المشتقة الأولى من موقع رسمها: فوق المحور موجبة وتحته سالبة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الإشارة الموجبة تعطي التزايد، فنضم نقاط الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



الإشارة السالبة تعطي التناقص.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متزايد على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo><mo>∪</mo><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، ومتناقص على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p044-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٤٤ · ص ٤٣ · البند ٣ · الجزء ٢ · ٢٠٢٣ — الدور الأول
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` لكثير الحدود \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` المعرف على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">]</mo></mrow></math>\`، إذا علمت أن للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقاط انعطاف عند كل من \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`، معتمداً عليه جد كلاً مما يلي: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. مجالات التزايد والتناقص للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.

![الرسم الأصلي للمشتقة مع المحورين والتدريجات ونهايتي المجال](assets/lessons/curriculum-evidence/951c1027ee502c8858bd.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/951c1027ee502c8858bd.webp)



المشتقة الثانية هي ميل منحنى المشتقة الأولى؛ نقرأ تغيّر هذا الميل من تقعر الرسم.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">)</mo><mtext>َ</mtext><mo>=</mo><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup></mrow></math>
\`\`\`



رسم المشتقة الأولى مقعر للأسفل خارج سالب واحد وواحد؛ فميوله تتناقص هناك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">]</mo><mo>−</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo><mo>∪</mo><mo stretchy="false">[</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٣</mn><mo stretchy="false">[</mo></mrow></math>
\`\`\`



وبين القيمتين يكون مقعرًا للأعلى؛ فتتزايد ميوله.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` متناقص على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo><mo>∪</mo><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">[</mo></mrow></math>\`، ومتزايد على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p046-r1-a
title: الكامل، الوحدة الثانية · الصورة، ٤٦ · ص ٤٥ · البند ١ · الجزء ١ · ٢٠٢٤ — الدور الأول
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. فترات التقعر للأعلى وللأسفل لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">[</mo></mrow></math>\`.
solution:
 التقعر للأعلى عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وللأسفل عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`، ونكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` لاشتقاقها بقاعدة القوة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



نوحد المقام ثم نحلل فرق المربعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



لأن المجال موجب، فالمقام و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` موجبان؛ تتبع الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. لذلك تكون سالبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وموجبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p046-r1-b
title: الكامل، الوحدة الثانية · الصورة، ٤٦ · ص ٤٥ · البند ١ · الجزء ٢ · ٢٠٢٤ — الدور الأول
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mo stretchy="true">]</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true">]</mo></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. نقاط الانعطاف (إن وجدت) للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 التقعر للأعلى عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`، وللأسفل عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mrow><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`، ونكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup></mrow></mrow></math>\` لاشتقاقها بقاعدة القوة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



نوحد المقام ثم نحلل فرق المربعين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`



لأن المجال موجب، فالمقام و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` موجبان؛ تتبع الإشارة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`. لذلك تكون سالبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` وموجبة بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo separator="true">,</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo separator="true">,</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، فنجد الصادي.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نقطة الانعطاف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p046-r2
title: الكامل، الوحدة الثانية · الصورة، ٤٦ · ص ٤٥ · البند ٢ · ٢٠٢٤ — الدور الأول
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` كثير حدود بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` نقطة انعطاف أفقي عند النقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">ع</mi><mn dir="ltr">٢</mn></msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>≠</mo><mn dir="ltr">٠</mn></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لً</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
نقطة الانعطاف الأفقي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">ق</mi><mo>″</mo></msup><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نشتق العلاقة المعطاة أولًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msup><mtext dir="rtl">س</mtext><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٦</mn><mtext dir="rtl">س</mtext><mo>+</mo><msup><mtext dir="rtl">ع</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ق</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mtext dir="rtl">س</mtext><mo>+</mo><mn dir="ltr">٦</mn><mo>+</mo><msup><mtext dir="rtl">ع</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ومشتقتيها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>+</mo><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>+</mo><msup><mtext dir="rtl">ع</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ع</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٠</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>+</mo><msup><mtext dir="rtl">ع</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ع</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>+</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ع</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ع</mi></mrow><msup><mi mathvariant="normal">ع</mi><mo>′</mo></msup></mrow></math>\`. نشتق مرة ثانية بقاعدة الضرب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ع</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">س</mtext></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><msup><mtext dir="rtl">ع</mtext><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mo stretchy="false">]</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mtext dir="rtl">ع</mtext><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><msup><mtext dir="rtl">ع</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mtext dir="rtl">س</mtext><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mtext dir="rtl">ل</mtext><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mn dir="ltr">٧٢</mn><mo>+</mo><mn dir="ltr">٠</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٧٤</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u2-p046-r3-a
title: الكامل، الوحدة الثانية · الصورة، ٤٦ · ص ٤٥ · البند ٣ · الجزء ١ · ٢٠٢٤ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٤</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`. فترات التقعر للأعلى وللأسفل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة تقعرًا للأسفل. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></math>\` هي نفسها؛ وبقاعدة الضرب نشتق عاملًا ونثبت الآخر ثم نجمع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`



نطبق قاعدة الضرب مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`



استعملنا عددين مجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وحاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`، هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`. العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></math>\` موجب دائمًا، فتتفق إشارتا العاملين قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ويختلفان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u2-p046-r3-b
title: الكامل، الوحدة الثانية · الصورة، ٤٦ · ص ٤٥ · البند ٣ · الجزء ٢ · ٢٠٢٤ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٤</mn></mrow><mo stretchy="true">)</mo></mrow><msup><mtext dir="rtl">هـ</mtext><mi mathvariant="normal">س</mi></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mi mathvariant="normal">ح</mi></mrow></math>\`، جد: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. نقطة / نقاط الانعطاف لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` إن وجدت.
solution:
 المشتقة الثانية الموجبة تعني تقعرًا للأعلى والسالبة تقعرًا للأسفل. نقطة الانعطاف نقطة اتصال يتغير عندها التقعر. مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></math>\` هي نفسها؛ وبقاعدة الضرب نشتق عاملًا ونثبت الآخر ثم نجمع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`



نطبق قاعدة الضرب مرة أخرى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>+</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></math>
\`\`\`



استعملنا عددين مجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` وحاصل ضربهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`، هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`. العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mrow><mi mathvariant="normal">هـ</mi></mrow><mrow><mi mathvariant="normal">س</mi></mrow></msup></math>\` موجب دائمًا، فتتفق إشارتا العاملين قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\` وبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ويختلفان بينهما.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأعلى: </mtext><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">∞</mi><mo separator="true">,</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mi mathvariant="normal">∞</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">للأسفل: </mtext><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo separator="true">,</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يتغير التقعر عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\` وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. نحسب الصاديين، ونستعمل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></msup></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn></mrow></msup></mrow></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٣٦</mn><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">٢٢</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٦</mn></msup></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١٤</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نقطتا الانعطاف هما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo>،</mo><mfrac><mn dir="ltr">٢٢</mn><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٦</mn></mrow></msup></mrow></mfrac><mo stretchy="true" fence="true">)</mo></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٢</mn><mo>،</mo><mrow><mo>−</mo><mrow><mn dir="ltr">١٠</mn><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p046-r4
title: الكامل، الوحدة الثانية · الصورة، ٤٦ · ص ٤٥ · البند ٤ · ٢٠٢٤ — الدور الثاني
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، بالاعتماد على الشكل المجاور الذي يمثل منحنيي الاقترانين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـَ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، حدد نوع التقعر لمنحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true">[</mo></mrow></math>\`؟

![المنحنيان هـ ول مع تسمياتهما ومحوري الإحداثيات كما في المصدر](assets/lessons/curriculum-evidence/d1b5b08b6f2fda882a8a.webp)
solution:
![الشكل الأصلي](assets/lessons/curriculum-evidence/d1b5b08b6f2fda882a8a.webp)



لأن المطلوب يتعلق بالتقعر أو الانعطاف، ندرس إشارة المشتقة الثانية: الموجب تقعر للأعلى والسالب للأسفل. نختبر تغير الإشارة عند القيم المرشحة؛ الصفر وحده لا يثبت وجود انعطاف.

يسار الصفر: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` الأولى موجبة وهابطة، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` سالبة وصاعدة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mtext>َ</mtext><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mtext>ً</mtext><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>&lt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نشتق حاصل الضرب لإيجاد المشتقة الثانية للاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>=</mo><mi mathvariant="normal">هـ</mi><mtext>ً</mtext><mi mathvariant="normal">ل</mi><mo>+</mo><mi mathvariant="normal">هـ</mi><mtext>َ</mtext><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



كل حاصل ضرب موجب، فالمجموع موجب ويكون التقعر للأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mtext>ً</mtext><mi mathvariant="normal">ل</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mtext>َ</mtext><msup><mi mathvariant="normal">ل</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mrow><mo mathvariant="normal">′</mo><mo mathvariant="normal">′</mo></mrow></msup><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأعلى على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">٠</mn><mo stretchy="true">[</mo></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u2-p048-r3
title: الكامل، الوحدة الثانية · الصورة، ٤٨ · ص ٤٧ · البند ٣ · خارجي
question: التقعر ونقاط الانعطاف
reference: السؤال، الصورة، · الحل
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>×</mo><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان منحنى الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` يقع فوق محور السينات ومتزايداً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mo>∞</mo><mo stretchy="true">[</mo></mrow></math>\`، ومتناقصاً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">]</mo><mo>−</mo><mo>∞</mo><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">]</mo></mrow></math>\`، جد مجالات تقعر الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
solution:


الاقتران يكون مقعرًا للأعلى عندما تكون مشتقته الأولى متزايدة. المعطيات تصف ترتيب قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`؛ لذلك نقارن قيم حاصل الضرب الذي يمثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` دون افتراض وجود مشتقة لك.

يسار الواحد يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` تكعيب ناقص واحد سالبًا، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` موجبًا ومتناقصًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>&lt;</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>≤</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>&lt;</mo><msup><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>≤</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo stretchy="false">)</mo><mo>≥</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



لأن العامل الأول سالب، وضربه في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` الأكبر يعطي ناتجًا أصغر؛ ثم تثبيت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` الموجب يحفظ ترتيب العامل الأول. لذلك:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo stretchy="false">)</mo><mo>≤</mo><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo><mo>&lt;</mo><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo stretchy="false">)</mo><mo>&lt;</mo><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



يمين الواحد كلا العاملين غير سالب ومتزايد، والعامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msup></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` متزايد تمامًا و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` موجب؛ لذلك يتزايد حاصل ضربهما أيضًا. وتكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` سالبة قبل الواحد وموجبة بعده، فيتفق ترتيبها عبر الواحد مع التزايد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>≤</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>&lt;</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ق</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



إذن المشتقة الأولى تتزايد على المجال كله؛ وهذا يعني التقعر للأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mtext dir="rtl">ح</mtext></mrow></math>
\`\`\`



النتيجة: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` مقعر للأعلى على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\`.
:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "التقعر ونقط الانعطاف",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة التقعر ونقط الانعطاف من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "35 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
