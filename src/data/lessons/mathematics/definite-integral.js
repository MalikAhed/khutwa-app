import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p107-ex1
title: الكتاب، ص ١٠٥ · مثال محلول
question: التكامل المحدود
reference: [الكتاب، النسخة المصورة، ص ١٠٧](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=107)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></mrow></math>\` معرفًا في الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></math>\` تجزئة نونية منتظمة للفترة نفسها، فاحسب مجموع ريمان، معتبرًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٤٤</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٦</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٦</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mn dir="ltr">٧</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mn dir="ltr">١١</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٤</mn><mo>+</mo><mfrac><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p108-ex2
title: الكتاب، ص ١٠٦ · مثال ٢ · متقدم
question: التكامل المحدود
reference: [السؤال، النسخة المصورة، ص ١٠٨](assets/lessons/mathematics/source-crops/math-book-p108-ex2-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p108-ex2-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، احسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٣</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` باستخدام تعريف التكامل المحدود، معتبرًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>×</mo></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mo>−</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">١٨</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`





التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٣</mn></msubsup><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p109-ex3
title: الكتاب، ص ١٠٧ · مثال محلول
question: التكامل المحدود
reference: [الكتاب، النسخة المصورة، ص ١٠٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=109)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`، وكان مجموع ريمان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></math>\` تجزئة نونية منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فجد قيمة الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
solution:
المعطى تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`، ومجموع ريمان للتجزئة النونية المنتظمة.
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

التكامل المحدود يساوي نهاية مجموع ريمان عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` تؤول إلى ما لا نهاية.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac></mrow></math>
\`\`\`


نقسم عاملي البسط والمقام على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` لكل عامل، حتى تظهر كسور تؤول إلى صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


عندما تزداد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` بلا حد، يقترب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` من الصفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>=</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`


نقسم الطرفين على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


**الإجابة: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`**.
:::


:::exam-question
id: math-book-p109-q1
title: الكتاب، ص ١٠٧ · نشاط أو تمرين
question: التكامل المحدود
reference: [الكتاب، النسخة المصورة، ص ١٠٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=109)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فاحسب مجموع ريمان، معتبرًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٤٠</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mn dir="ltr">٧</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo>−</mo><mfrac><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p109-q2-a
title: الكتاب، ص ١٠٧ · نشاط أو تمرين
question: التكامل المحدود
reference: [الكتاب، النسخة المصورة، ص ١٠٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=109)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود لإيجاد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></msubsup><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
solution:
 المطلوب استعمال تعريف التكامل: نحسب مجموع ريمان ثم نهايته عندما يزداد عدد الفترات بلا حد.
العرض المشترك يساوي طول الفترة مقسومًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


قيمة الاقتران ثابتة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\` عند أي نقطة اختيار؛ لذلك يتكون المجموع من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` حدود متساوية، كل حد يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mi mathvariant="normal">ن</mi><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


لا تعتمد النتيجة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، فتكون نهايتها العدد نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></msubsup><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p109-q2-b
title: الكتاب، ص ١٠٧ · نشاط أو تمرين
question: التكامل المحدود
reference: [الكتاب، النسخة المصورة، ص ١٠٩](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=109)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود لإيجاد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mi mathvariant="normal">ر</mi><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mi mathvariant="normal">ر</mi><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mi mathvariant="normal">ن</mi></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`





التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p123-worksheet2-q2
title: الكتاب، ص ١٢١ · نشاط أو تمرين
question: التكامل المحدود
reference: [الكتاب، النسخة المصورة، ص ١٢٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=123)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` معرفًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مجموع ريمان</mtext><mo>=</mo><mrow><mrow><mn dir="ltr">٣٥</mn><mo>+</mo><mfrac><mn dir="ltr">٢٥</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`
solution:
 بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` فترة يبدأ طرفها الأصغر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`.
التكامل المحدود يساوي نهاية مجموع ريمان؛ الحد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢٥</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` يقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mi mathvariant="normal">ب</mi></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mrow><mo fence="true">(</mo><mn dir="ltr">٣٥</mn><mo>+</mo><mfrac><mn dir="ltr">٢٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٥</mn></mrow></math>
\`\`\`


أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`. نعوض بالحد الأعلى ونطرح الأدنى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣٥</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl"> أو </mtext><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`؛ الجذر السالب لا يمثل نهاية الفترة المعطاة.
:::


:::mcq
id: math-book-p124-unit-q1-e
title: الكتاب، ص ١٢٢ · اختبار الوحدة
kicker: اختبار الوحدة
reference: [الكتاب، النسخة المصورة، ص ١٢٤](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=124)
question: إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` معرفًا في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></math>\` تجزئة منتظمة للفترة، فما نهاية مجموع ريمان عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>←</mo><mi mathvariant="normal">∞</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`
- [ ] option-4 | غير موجودة
explanation:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mi mathvariant="normal">ر</mi><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mi mathvariant="normal">ر</mi><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`





التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-book-p126-unit-q7
title: الكتاب، ص ١٢٤ · اختبار الوحدة
question: التكامل المحدود
reference: [الكتاب، النسخة المصورة، ص ١٢٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=126)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود لإيجاد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msubsup><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٦</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٦</mn><mo>+</mo><mfrac><mn dir="ltr">٢٤</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`





التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msubsup><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p069-r1
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٩
question: التكامل المحدود
reference: الكامل، الوحدة ٥، النسخة المصورة، ص ٦٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلًا للتكامل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، حيث مجموع ريمان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>+</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`
solution:
التكامل المعطى يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، لذلك يجب أن تؤول مجموعات ريمان إلى نهاية محدودة تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` للثابتين.
نوحد مقام حدود المجموع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>
\`\`\`


إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` غير صفري، فدرجة البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ودرجة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ويتصرف الكسر مثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ن</mi></mrow></mrow><mn dir="ltr">٣</mn></mfrac></math>\`؛ فلا يملك نهاية محدودة. لذا يجب أن يختفي معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`. ويمكن عندها تحديد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من النهاية، لكن المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` فقط.
:::


:::exam-question
id: math-kamel-u5-p069-r2
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٩
question: التكامل المحدود
reference: الكامل، الوحدة ٥، النسخة المصورة، ص ٦٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
باستخدام تعريف التكامل المحدود، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><msubsup><mo>∫</mo><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
solution:
 عكس حدود التكامل يغير إشارته، وجمع التكاملين المتجاورين يعطي التكامل على الفترة الكاملة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


نستخدم التعريف كما طُلب: العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac></math>\`، والطرف الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


مجموع ريمان يضرب كل قيمة في العرض ثم يجمع. نستعمل مجموع الأعداد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ن</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mrow><mo fence="true">[</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac><mfrac><mrow><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٢٤</mn><mo>−</mo><mn dir="ltr">١٦</mn><mfrac><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></mfrac><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


التكامل نهاية المجموع، وحد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` يقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mrow><mo fence="true">(</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p069-r3
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٩
question: التكامل المحدود
reference: الكامل، الوحدة ٥، النسخة المصورة، ص ٦٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود لحساب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٣</mn></msubsup><mrow><mo stretchy="true">(</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`، علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٢</mn></msup></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ن</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٦</mn></mfrac></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
solution:
 نستخدم تعريف التكامل: نكوّن مجموع ريمان على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات ثم نأخذ نهايته.
العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac></math>\`، ونختار الطرف الأيمن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></math>\`؛ فتصبح قيمة الاقتران:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نضرب القيم في العرض ونجمع. مجموع الواحد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، ومجموع المربعات معطى في السؤال.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac><mrow><mo fence="true">[</mo><mfrac><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mi mathvariant="normal">ن</mi><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac><mrow><mo fence="true">[</mo><mfrac><mn dir="ltr">٩</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mfrac><mrow><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٦</mn></mfrac><mo>+</mo><mi mathvariant="normal">ن</mi><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٩</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`


نقسم عاملي البسط على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`. النسبتان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></math>\` تقتربان من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mrow><mo fence="true">[</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo fence="true">]</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٩</mn><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p057-r1
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٥٧
question: التكامل المحدود
reference: الكامل، الوحدة ٥، النسخة المصورة، ص ٥٧ · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ليكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` معرفاً على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` كما يأتي:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">{</mo><mtable rowspacing="0.36em" columnalign="left left" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mstyle scriptlevel="0" displaystyle="true"><mfrac><mrow><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac></mstyle><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٢</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn><mo separator="true">,</mo></mrow></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mn dir="ltr">٦</mn><mo separator="true">,</mo></mrow></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣.</mn></mrow></mstyle></mtd></mtr></mtable></mrow></mrow></math>
\`\`\`



احسب \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
solution:
نبسط البسط أولاً. الهوية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` تعطي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mo stretchy="false">(</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



فرق المربعين يتحلل إلى حاصل ضرب الفرق والمجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` غير صفري، فنختزل العامل المشترك.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` أعطيت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، وهي أيضاً قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` هناك. إذن القاعدة المبسطة تصح على الفترة كلها.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`



نوجد اقتراناً أصلياً ثم نطرح قيمته عند الحد الأدنى من قيمته عند الحد الأعلى.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo fence="true">]</mo></mrow><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">٩</mn><mo fence="true">)</mo></mrow><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>=</mo><mfrac><mn dir="ltr">٢٧</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mn dir="ltr">٨</mn><mo>=</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




:::


:::exam-question
id: math-kamel-u5-p057-r2
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٥٧
question: التكامل المحدود
reference: الكامل، الوحدة ٥، النسخة المصورة، ص ٥٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><msub><mtext dir="rtl">لو</mtext><mtext dir="rtl">هـ</mtext></msub><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>\` اقترانًا أصليًا ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mtext dir="rtl">هـ</mtext></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٤</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mtext dir="rtl">هـ</mtext></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mrow><msubsup><mo>∫</mo><mn dir="ltr">٩</mn><msup><mtext dir="rtl">هـ</mtext><mn dir="ltr">٢</mn></msup></msubsup><mfrac><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٣</mn><mo>−</mo><mtext dir="rtl">هـ</mtext></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>+</mo><mtext dir="rtl">هـ</mtext></mrow></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
solution:
 \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` أصل ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، فيكون تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` فرق قيم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\`. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">هـ</mi></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ت</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">[</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>+</mo><mi mathvariant="normal">هـ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mi mathvariant="normal">هـ</mi><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`


المكامل الثاني ثابت؛ تكامله الثابت مضروبًا في فرق الحدين، ولو كان الحد الأعلى أصغر من الأدنى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ت</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></mfrac><mo stretchy="false">(</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٩</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


نحلل فرق المربعين. لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>=</mo><mrow><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` ينتج سالب بعد الاختصار.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">ت</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


نعوض في العلاقة المعطاة ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">هـ</mi><mo>−</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>\` موجب؛ نقسم عليه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mi mathvariant="normal">هـ</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p057-r3
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٥٧
question: التكامل المحدود
reference: الكامل، الوحدة ٥، النسخة المصورة، ص ٥٧
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mrow><mn dir="ltr">١٢٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mn dir="ltr">٣</mn></msup></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩٦</mn></mrow></math>\`
solution:
 نفك المكعب ثم نضرب كل حد في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢٠</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`، حتى يصبح التكامل مجموع قوى منفردة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">١</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">١٢٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>−</mo><mn dir="ltr">٣٦٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>+</mo><mn dir="ltr">٣٦٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><mo>−</mo><mn dir="ltr">١٢٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`


قاعدة تكامل القوة تزيد الأس واحدًا وتقسم على الأس الجديد؛ نطبقها على كل حد.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٦</mn></msup><mo>−</mo><mn dir="ltr">٧٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msup><mo>+</mo><mn dir="ltr">٩٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msup><mo>−</mo><mn dir="ltr">٤٠</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup></mrow></math>
\`\`\`


التكامل المحدود يساوي قيمة الأصل عند الأعلى ناقص قيمته عند الأدنى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٦٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٧٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٩٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤٠</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢٨٠</mn><mo>−</mo><mn dir="ltr">٢٣٠٤</mn><mo>+</mo><mn dir="ltr">١٤٤٠</mn><mo>−</mo><mn dir="ltr">٣٢٠</mn><mo>=</mo><mn dir="ltr">٩٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩٦</mn><mo>−</mo><mn dir="ltr">٠</mn><mo>=</mo><mn dir="ltr">٩٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p069-r1-b
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦٩
question: التكامل المحدود
reference: الكامل، الوحدة ٥، النسخة المصورة، ص ٦٩
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` قابلًا للتكامل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، جد الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`، حيث مجموع ريمان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>+</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
solution:
التكامل المعطى يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، لذلك يجب أن تؤول مجموعات ريمان إلى نهاية محدودة تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` للثابتين.
نوحد مقام حدود المجموع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١</mn><mo>+</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>
\`\`\`


إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` غير صفري، فدرجة البسط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ودرجة المقام \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ويتصرف الكسر مثل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo>−</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ن</mi></mrow></mrow><mn dir="ltr">٣</mn></mfrac></math>\`؛ فلا يملك نهاية محدودة. لذا يجب أن يختفي معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` نقسم بسط الكسر ومقامه على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mrow><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow><mo>+</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></mrow><mrow><mrow><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></mfrac></mrow></math>
\`\`\`


عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` تؤول إلى ما لا نهاية تختفي حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ب</mi></mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


نضيف ثلثًا إلى الطرفين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


:::


:::mcq
id: math-kamel-u5-p013-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ١ · ٢٠٠٨
kicker: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ١ · ٢٠٠٨
reference: السؤال، الصورة، · الإجابة المطبوعة
question: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتران معرف على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة لها بحيث أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٠</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٧</mn></mrow></math>\`
explanation:
 التكامل المحدود في اتجاه الفترة المعطاة يساوي نهاية المجموع. نفصل حدود الكسر لتظهر حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` التي تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


المطلوب يعكس الحدين؛ عكس حدود التكامل يغير إشارته.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٠</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p013-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ٢ · ٢٠١٠
kicker: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ٢ · ٢٠١٠
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة لنفس الفترة بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
explanation:
 التكامل المحدود في اتجاه الفترة المعطاة يساوي نهاية المجموع. نفصل حدود الكسر لتظهر حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` التي تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


المطلوب يعكس الحدين؛ عكس حدود التكامل يغير إشارته.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">١</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p013-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ٣ · ٢٠١٠ إكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ٣ · ٢٠١٠ إكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\` اقتراناً أصلياً للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢٨</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢٨</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١٠</mn></mrow><mrow><mn dir="ltr">٧</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١٠</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
explanation:

كون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` أصلًا ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant="normal">ق</mi></mrow></math>\`. التكامل المحدود ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي قيمة الأصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` عند الحد الأعلى ناقص قيمته عند الحد الأدنى.
نعوض في قاعدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mrow><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٧</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٣</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`


نوحد المقامين عند طرح القيمتين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٧</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">٣٥</mn></mrow><mn dir="ltr">٢٨</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢٨</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p013-r4
title: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ٤ · ٢٠١٢
kicker: الكامل، الوحدة الخامسة · الصورة، ١٣ · ص ١٢ · البند ٤ · ٢٠١٢
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً أصلياً للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
explanation:

كون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` أصلًا ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant="normal">ق</mi></mrow></math>\`. التكامل المحدود ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي قيمة الأصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` عند الحد الأعلى ناقص قيمته عند الحد الأدنى.
نعوض قيم الأصل المعطاة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p014-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٤ · ص ١٣ · البند ١ · ٢٠١٣ الإكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ١٤ · ص ١٣ · البند ١ · ٢٠١٣ الإكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p014-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٤ · ص ١٣ · البند ٢ · ٢٠١٤ الإكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ١٤ · ص ١٣ · البند ٢ · ٢٠١٤ الإكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` معرفاً ومحدداً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` التي تجعل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | صفر
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mi mathvariant="normal">أ</mi></mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">أ</mi><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


نساوي النهاية بالتكامل المعطى ثم نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mspace width="2em"/><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p014-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٤ · ص ١٣ · البند ٣ · ٢٠١٤ إكمال ضفة
kicker: الكامل، الوحدة الخامسة · الصورة، ١٤ · ص ١٣ · البند ٣ · ٢٠١٤ إكمال ضفة
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً أصلياً للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">مَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">مَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:

كون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` أصلًا ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant="normal">ق</mi></mrow></math>\`. التكامل المحدود ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي قيمة الأصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` عند الحد الأعلى ناقص قيمته عند الحد الأدنى.
نعوض قيم الأصل المعطاة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٧</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


قيم مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` لا تستعمل في هذا الحساب.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p015-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ١ · ٢٠١٥
kicker: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ١ · ٢٠١٥
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين أصليين للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٨</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ل</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:

الأصلان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` لهما المشتقة نفسها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، فتكون مشتقة الفرق صفرًا؛ لذا الفرق ثابت نسميه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.
تكامل الثابت يساوي الثابت مضروبًا في طول الفترة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٨</mn><mo>=</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`


نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


نستعمل الثابت نفسه في الفترة المطلوبة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p015-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ٢ · ٢٠١٦
kicker: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ٢ · ٢٠١٦
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi></mrow></math>\` متصلاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` يساوي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p015-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ٣ · ٢٠١٦ إكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ٣ · ٢٠١٦ إكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٦</mn></mrow></mfrac></mrow></math>\`
explanation:

نكتب المقلوب قوة سالب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. قاعدة القوة تزيد الأس إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` وتقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`؛ ثم نحسب قيمة الأصل عند الأعلى ناقص الأدنى.
نحسب الأصل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∫</mo><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msup><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>+</mo><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`


نعوض بالحدين ونوحد المقام.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p015-r4
title: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ٤ · ٢٠١٦ إكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ١٥ · ص ١٤ · البند ٤ · ٢٠١٦ إكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mroot><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٣</mn></mrow></mroot><mo>×</mo><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
explanation:

الجذر التكعيبي يعني أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`. عند ضرب قوتين للأساس نفسه نجمع الأسين، لذلك يتبسط المكامل إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.
نجمع الأسين.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></msup><mo>=</mo><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`؛ نعوض الأعلى ونطرح الأدنى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p016-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ١ · ٢٠١٧
kicker: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ١ · ٢٠١٧
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` معرفاً ومحدداً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، فإن قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo>+</mo><mfrac><mn dir="ltr">٤</mn><mrow><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`


التكامل يحافظ على الجمع والمعامل الثابت. أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٣</mn><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>+</mo><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">٠</mn><mn dir="ltr">٢</mn></msubsup></mrow></math>
\`\`\`


نعوض بقيمة التكامل والحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٨</mn><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p016-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ٢ · ٢٠١٧
kicker: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ٢ · ٢٠١٧
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقترانان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين أصليين للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٥</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٨</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٥</mn></mrow></math>\`
explanation:


المعطى أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أصلان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ مشتقتاهما متساويتان، لذلك الفرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` ثابت. نسمه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.

تكامل الثابت يساوي الثابت مضروبًا بطول الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠</mn><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup><mi mathvariant="normal">ك</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ك</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نعوض الفرق بالثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` في المطلوب، ثم نكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p016-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ٣ · ٢٠١٧ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ٣ · ٢٠١٧ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><msqrt><mrow><mi mathvariant="normal">س</mi></mrow></msqrt><mo>×</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` يساوي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٧</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
explanation:

الجذر قوة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></math>\`؛ نجمعها مع أس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` فنحصل على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></math>\`. قاعدة القوة تزيد الأس إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></math>\` وتقسم عليه.
نبسط المكامل.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><msqrt><mi mathvariant="normal">س</mi></msqrt><mtext> </mtext><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup></mrow></math>
\`\`\`


نحسب الأصل ثم فرق قيمتيه.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mrow><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mrow><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mn dir="ltr">١</mn></msubsup><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٧</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٧</mn></mfrac><msup><mrow><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow><mrow><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٢</mn></mfrac></mrow></msup><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٧</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p016-r4
title: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ٤ · ٢٠١٨
kicker: الكامل، الوحدة الخامسة · الصورة، ١٦ · ص ١٥ · البند ٤ · ٢٠١٨
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:

\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">أ</mi></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi></mrow></math>\` حقيقيان، فيلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` موجبين. إذن المجال من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلىأب لا يمر بالصفر. أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` على المجال الموجب.
نعوض الحدين، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>−</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mn dir="ltr">١</mn><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


لوغاريتم حاصل الضرب هو مجموع اللوغاريتمين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">أ</mi><mo>+</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p017-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ١ · ٢٠١٨
kicker: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ١ · ٢٠١٨
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\` معرفاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٦</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:

التكامل يساوي نهاية مجموع ريمان، وحد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` يقترب من صفر.
نحسب التكامل من نهايته.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mi mathvariant="normal">أ</mi></msubsup><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`


أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></math>\`؛ نعوض الحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`


نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ثم نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`


نأخذ الجذرين ثم نطبق شرط نهاية الفترة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn><mtext dir="rtl"> أو </mtext><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


بما أن الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">أ</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` تبدأ من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p017-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ٢ · ٢٠١٨ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ٢ · ٢٠١٨ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين أصليين للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` بحيث أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`، فما قيمة الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">١</mn></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">م</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">ب</mi><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


لأن الاقترانين أصليان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` نفسه، تتساوى مشتقتاهما لكل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo>=</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`


حتى لا يتغير الطرف الأيسر مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` يجب أن يكون معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` صفرًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


يبقى الثابت سالب ستة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p017-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ٣ · ٢٠١٨ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ٣ · ٢٠١٨ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>\` هو اقتران أصلي للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فإن قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><msqrt><mrow><mn dir="ltr">٧</mn></mrow></msqrt></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` تساوي:
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><msqrt><mrow><mn dir="ltr">٢</mn></mrow></msqrt></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msqrt><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></math>
\`\`\`


لحساب التكامل المحدود نختار اقترانًا أصليًا، ثم نطرح قيمته عند الحد الأدنى من قيمته عند الحد الأعلى. نضع قيمة الحد الأدنى بين قوسين حتى لا تضيع إشارة السالب.

نحسب فرق قيمتي الأصل عند الجذر وواحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><msqrt><mn dir="ltr">٧</mn></msqrt></msubsup><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><msqrt><mrow><mn dir="ltr">٧</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt><mo>−</mo><msqrt><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></msqrt></mrow></mrow></math>
\`\`\`





نفصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ وجذر حاصل ضرب عددين موجبين يساوي حاصل ضرب جذريهما. لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msqrt><mn dir="ltr">٨</mn></msqrt><mo>=</mo><mrow><msqrt><mn dir="ltr">٤</mn></msqrt><mo>×</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></mrow></math>\`، ثم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mn dir="ltr">٢</mn><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msqrt><mn dir="ltr">٨</mn></msqrt><mo>−</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow><mo>=</mo><msqrt><mn dir="ltr">٢</mn></msqrt></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p017-r4
title: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ٤ · ٢٠١٨ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ١٧ · ص ١٦ · البند ٤ · ٢٠١٨ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mo>∞</mo></mrow></munder><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\`
explanation:

الاقتران كثير حدود ومتصل، فتساوي نهاية مجموع ريمان تكامله المحدود. نستخدم قاعدة القوة لإيجاد الأصل ثم نطرح قيمة الحد الأدنى من الأعلى.
نحسب التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mn dir="ltr">٣</mn><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msup><mo>−</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msup><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p018-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ١ · ٢٠١٩ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ١ · ٢٠١٩ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٣</mn></mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | صفر
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
explanation:

المطلوب تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`، لذلك الأصل المطلوب هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` نفسه؛ لا نحتاج إلى إيجاد المشتقة بالقاعدة.
نحسب قيم الاقتران عند الحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


نطرح قيمة الحد الأدنى.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p018-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ٢ · ٢٠١٩ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ٢ · ٢٠١٩ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقترانان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين أصليين للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`، جد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥٠</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤٠</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٠</mn></mrow></math>\`
explanation:
المعطى أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` أصلان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`؛ مشتقة الفرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>−</mo><mi mathvariant="normal">هـ</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">ق</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`، إذن الفرق ثابت. نكتبه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`.

تكامل الثابت على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ك</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



المطلوب يحتوي الفرق بالعكس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">هـ</mi><mo>−</mo><mi mathvariant="normal">م</mi></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><msup><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p018-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ٣ · ٢٠١٩ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ٣ · ٢٠١٩ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></mfrac></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-2 | صفر
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
explanation:

حدا التكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ثابتان. الرمز داخل التكامل متغير صوري؛ نسميه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\` ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ل</mi></mrow><mi mathvariant="normal">س</mi></mrow></math>\` حتى يتضح أن نتيجة التكامل عدد ثابت لا يعتمد على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.
نكتب الاقتران الثابت.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msubsup><mfrac><mn dir="ltr">١</mn><mrow><mn dir="ltr">١</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mi mathvariant="normal">س</mi></msup></mrow></mfrac><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">ك</mi></mrow></math>
\`\`\`


مشتقة الثابت تساوي صفرًا عند كل نقطة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo mathvariant="normal">′</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p018-r4
title: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ٤ · ٢٠١٩ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ١٨ · ص ١٧ · البند ٤ · ٢٠١٩ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا علمت أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣</mn></mrow></math>\`
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`


المعطى تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi></mrow><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>\`؛ نسحب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ثم نقسم عليها.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢٤</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


نساوي النهاية بقيمة التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p019-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ١ · ٢٠١٩ دور ثالث
kicker: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ١ · ٢٠١٩ دور ثالث
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` معرفاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mo>∞</mo></mrow></munder><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | غير موجودة
explanation:

الاقتران كثير حدود ومتصل، فتساوي نهاية مجموع ريمان تكامله المحدود. نستخدم قاعدة القوة لإيجاد الأصل ثم نطرح قيمة الحد الأدنى من الأعلى.
نحسب التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msubsup><mo>=</mo><msup><mn dir="ltr">٢</mn><mn dir="ltr">٢</mn></msup><mo>−</mo><msup><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p019-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ٢ · ٢٠٢٠ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ٢ · ٢٠٢٠ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mfrac><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mfrac><mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo>=</mo><mn dir="ltr">٧</mn><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p019-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ٣ · ٢٠٢٠ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ٣ · ٢٠٢٠ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\` للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`


النهاية تساوي التكامل المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>\`؛ نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p019-r4
title: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ٤ · ٢٠٢١ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ١٩ · ص ١٨ · البند ٤ · ٢٠٢١ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً قابلاً للتكامل على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٧</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
explanation:

نأخذ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عاملًا مشتركًا في بسط الكسر. العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>\` موجب على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فيجوز اختصاره.
نبسط الكسر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac><mo>=</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`


التكامل ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي نهاية مجموع ريمان.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><mrow><mo fence="true">(</mo><mn dir="ltr">٧</mn><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`


تكامل الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` مضروبًا في طول الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p020-r1
title: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ١ · ٢٠٢١ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ١ · ٢٠٢١ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">س</mi><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mrow><mfrac><mrow><mtext dir="rtl">هـ</mtext></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">قً</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
explanation:

نشتق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` بقاعدة الضرب؛ مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac></math>\`. المطلوب تكامل المشتقة الثانية، وأصلها المشتقة الأولى.
نحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo mathvariant="normal">′</mo><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>⋅</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">س</mi><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">س</mi></mfrac><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نحسب فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></math>\` عند الحدين؛ يلغى الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mi mathvariant="normal">ق</mi><mo mathvariant="normal">′</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mo mathvariant="normal">′</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>
\`\`\`


فرق اللوغاريتمين هو لوغاريتم النسبة، والنسبة تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mfrac><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></mfrac></mrow><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">هـ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p020-r2
title: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٢ · ٢٠٢١ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٢ · ٢٠٢١ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><msub><mtext dir="rtl">لو</mtext><mrow><mtext dir="rtl">هـ</mtext></mrow></msub><mi mathvariant="normal">ب</mi></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><msup><mtext dir="rtl">هـ</mtext><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext></mrow></math>\`
explanation:

وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi></mrow></math>\` يفرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\`. أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\` هو نصف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msup><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></msup></math>\`، لأن مشتقة الأس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.
نعوض بالحد الأعلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">لو</mi><mo>⁡</mo><mi mathvariant="normal">ب</mi></mrow></math>\` وبالحد الأدنى صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></msup><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">٠</mn><mrow><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">ب</mi></mrow></msubsup><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">هـ</mi><mrow><mn dir="ltr">٢</mn><msub><mtext dir="rtl">لو</mtext><mi mathvariant="normal">هـ</mi></msub><mo>⁡</mo><mi mathvariant="normal">ب</mi></mrow></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ونضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


الجذران \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>±</mo><mn dir="ltr">٢</mn></mrow></math>\`؛ الشرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>\` يختار الموجب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p020-r3
title: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٣ · ٢٠٢١ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٣ · ٢٠٢١ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقترانان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقترانين أصليين للاقتران المتصل \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></msubsup><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></mfrac><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:

فرق الأصلين ثابت لأن مشتقته \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mo>−</mo><mi mathvariant="normal">ق</mi></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`. نسميه \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\`، وهو غير صفري لوجوده في المقام.
نستبدل الفرق بالثابت ونحسب أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ك</mi></mfrac><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msubsup><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ك</mi></mfrac><msubsup><mrow><mo fence="true">[</mo><mfrac><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo fence="true">]</mo></mrow><mn dir="ltr">١</mn><mn dir="ltr">٥</mn></msubsup></mrow></math>
\`\`\`


نعوض الحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٢</mn><mi mathvariant="normal">ك</mi></mfrac></mrow></math>
\`\`\`


نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ك</mi></math>\` ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ك</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>−</mo><mrow><mi mathvariant="normal">هـ</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\` هو هذا الثابت نفسه؛ إذن يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p020-r4
title: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٤ · ٢٠٢١ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٤ · ٢٠٢١ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً متصلاً على \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ح</mi></mrow></math>\` ويمر بالنقطة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">قَ</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١٧</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\`
explanation:
المعطى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\`، وتكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>+</mo><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">قَ</mi></mrow></mrow></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٧</mn></math>\`.

بقاعدة الضرب، مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>+</mo><mrow><mrow><mi mathvariant="normal">س</mi><msup><mi mathvariant="normal">ق</mi><mo>′</mo></msup></mrow><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></math>\`؛ إذن هذا حاصل ضرب يصلح أصلًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٧</mn><mo>=</mo><mo stretchy="false">[</mo><mi mathvariant="normal">س</mi><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo><msubsup><mo stretchy="false">]</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٣</mn></msubsup><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></mrow></math>\` مع أقواس حاصل ضرب السالبين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٧</mn><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



وجود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">قَ</mi></math>\` في المكامل يفترض قابليته للاشتقاق حيث يستخدم السؤال التكامل.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p020-r5
title: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٥ · ٢٠٢٢ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٢٠ · ص ١٩ · البند ٥ · ٢٠٢٢ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً أصلياً للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` المتصل، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١١</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:

كون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` أصلًا ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يعني \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msup><mi mathvariant="normal">م</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant="normal">ق</mi></mrow></math>\`. التكامل المحدود ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي قيمة الأصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">م</mi></math>\` عند الحد الأعلى ناقص قيمته عند الحد الأدنى.
نفصل التكامل ونحسب أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>=</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup></mrow></math>
\`\`\`


نعوض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true" fence="true">(</mo><mn dir="ltr">١</mn><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\` والحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>=</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p021-r1
title: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ١ · ٢٠٢٢ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ١ · ٢٠٢٢ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٣</mn></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
explanation:

نهاية مجموع ريمان تمثل التكامل من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
نفصل الحدود ثم نأخذ النهاية.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٨</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow><mrow><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow></mfrac><mo>=</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn><mo>+</mo><mfrac><mn dir="ltr">٢</mn><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mtext> </mtext><mo>⟶</mo><mtext> </mtext><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


التكامل المعطى يعكس الحدين، فيساوي سالب النهاية.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p021-r2
title: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ٢ · ٢٠٢٢ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ٢ · ٢٠٢٢ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: ما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mtext dir="rtl">ظا</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mtext dir="rtl">ظتا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow></math>\`
- [ ] option-3 | صفر
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><msqrt><mrow><mn dir="ltr">٣</mn></mrow></msqrt></mrow></mfrac></mrow></math>\`
explanation:

على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٤</mn></mfrac><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٣</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\` الجيب وجيب التمام غير صفريين. نكتب الظل وظل التمام كنسبتين ثم نبسط.
نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mrow><msup><mi mathvariant="normal">ظا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">ظتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mfrac><mrow><mfrac><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow><mrow><mfrac><mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow><mrow><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><msup><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><msup><mrow><mi mathvariant="normal">قا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


مشتقة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msup><mi mathvariant="normal">قا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></math>\`؛ نعوض بالحدين.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><msubsup><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">ظا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">]</mo></mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٤</mn></mfrac></mrow><mrow><mfrac><mi>π</mi><mn dir="ltr">٣</mn></mfrac></mrow></msubsup><mo>=</mo><msqrt><mn dir="ltr">٣</mn></msqrt><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p021-r3
title: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ٣ · ٢٠٢١ دور ثالث
kicker: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ٣ · ٢٠٢١ دور ثالث
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mo>∞</mo></mrow></munder><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">١</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٨</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:


المعطى نهاية مجموع ريمان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`؛ إذن تكامله على هذه الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`. المطلوب تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ق</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.

نضع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\` لأن مدخل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، فيكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">د</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`، وعند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><msubsup><mo>∫</mo><mn dir="ltr">٦</mn><mn dir="ltr">٢</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow></math>
\`\`\`



عكس الحدود يغير إشارة التكامل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٦</mn><mn dir="ltr">٢</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٦</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`



نضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></math>\` في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mo>−</mo><mn dir="ltr">١٨</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mo>−</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p021-r4
title: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ٤ · ٢٠٢٤ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٢١ · ص ٢٠ · البند ٤ · ٢٠٢٤ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان اقتراناً معرفاً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٨</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٠</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٨</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>
\`\`\`


نهاية المجموع سالب ثلاثة؛ معامل اثنين يبقى خارج التكامل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mn dir="ltr">٣</mn></msubsup><mrow><mn dir="ltr">٢</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">ن</mi><mo>←</mo><mo>∞</mo></mrow></munder><mrow><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>−</mo><mfrac><mn dir="ltr">١٨</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>×</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p022-r1
title: الكامل، الوحدة الخامسة · الصورة، ٢٢ · ص ٢١ · البند ١ · تجريبي مديرية شرق غزة ٢٠٢٣
kicker: الكامل، الوحدة الخامسة · الصورة، ٢٢ · ص ٢١ · البند ١ · تجريبي مديرية شرق غزة ٢٠٢٣
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٠</mn></mrow></msubsup><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٤</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
explanation:

نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ع</mi><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` في التكامل المعطى؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi></mrow><mo>=</mo><mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، والحدان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` يصبحان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`.
نحوّل التكامل ثم نعكس الحدين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٣</mn><mn dir="ltr">١</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢٤</mn><mspace width="2em"/><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ع</mi><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">ع</mi><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`


نهاية مجموع ريمان على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` هي التكامل نفسه.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mtext> </mtext><mo>⟶</mo><mtext> </mtext><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`


نساوي النهاية بالتكامل ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p022-r2
title: الكامل، الوحدة الخامسة · الصورة، ٢٢ · ص ٢١ · البند ٢ · خارجي
kicker: الكامل، الوحدة الخامسة · الصورة، ٢٢ · ص ٢١ · البند ٢ · خارجي
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا علمت أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>\`، فجد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\` إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mfrac><mrow><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٩</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
explanation:

نقسم حدود الكسر على قوى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، مع مراعاة إشارة الطرح خارج القوس.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


التكامل المحدود يساوي نهاية مجموع ريمان؛ حدود \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` وقواه تقترب من صفر.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`


النهاية تساوي التكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`؛ نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u5-p023-r1
title: الكامل، الوحدة الخامسة · الصورة، ٢٣ · ص ٢٢ · البند ١ · ٢٠١٩ دور أول
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود في إيجاد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">٢</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٢</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٨</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">١٦</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">١٦</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١٣</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٢١</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٢</mn><mo>+</mo><mfrac><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`




التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">٢</mn><mn dir="ltr">٤</mn></msubsup><mn dir="ltr">٨</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٤٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p023-r2
title: الكامل، الوحدة الخامسة · الصورة، ٢٣ · ص ٢٢ · البند ٢ · ٢٠٢٠ دور ثانٍ
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` معتبراً \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></math>\`، احسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\` باستخدام تعريف التكامل المحدود.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn><mo>−</mo><mfrac><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`




التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p023-r3
title: الكامل، الوحدة الخامسة · الصورة، ٢٣ · ص ٢٢ · البند ٣ · ٢٠٢١ دور أول
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود في إيجاد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo>+</mo><mfrac><mn dir="ltr">٢٥</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`




التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٤</mn></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٥</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p023-r4
title: الكامل، الوحدة الخامسة · الصورة، ٢٣ · ص ٢٢ · البند ٤ · ٢٠٢١ دور ثانٍ
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود في إيجاد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٨</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">١٦</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mn dir="ltr">٨</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٨</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤٨</mn><mo>+</mo><mfrac><mn dir="ltr">٦٤</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`




التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٥</mn></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٤</mn><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٤٨</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p023-r5
title: الكامل، الوحدة الخامسة · الصورة، ٢٣ · ص ٢٢ · البند ٥ · ٢٠٢١ دور أول
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>+</mo><mn dir="ltr">١٢</mn><mo>+</mo><mo>…</mo><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow><mrow><msup><mi mathvariant="normal">ن</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mfrac></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
solution:

المجموع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٨</mn></mrow></math>\`\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mo>+</mo></math>\`...\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>+</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` أمثال مجموع الأعداد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`. مجموع هذه الأعداد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">ن</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac></math>\`.
نحسب مجموع الحدود.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٨</mn><mo>+</mo><mo>⋯</mo><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤</mn><mfrac><mrow><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


نعوض ونفصل القسمة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup></mfrac><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٨</mn><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`


التكامل يساوي النهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`؛ معامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` في المطلوب يبقى خارج التكامل.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ت</mi><mo>=</mo><mn dir="ltr">٢</mn><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٨</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p023-r6
title: الكامل، الوحدة الخامسة · الصورة، ٢٣ · ص ٢٢ · البند ٦ · ٢٠٢٣ دور أول
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود في إيجاد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٦</mn><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn><mo>−</mo><mfrac><mn dir="ltr">١٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`




التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p024-r1
title: الكامل، الوحدة الخامسة · الصورة، ٢٤ · ص ٢٣ · البند ١ · ٢٠٢٣ دور ثانٍ
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٥</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢٥</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>\`، ما قيمة/قيم الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`
solution:

نهاية مجموع ريمان هي التكامل، وحد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٢٥</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` يقترب من صفر.
نحسب التكامل بقاعدة القوة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٥</mn><mo>=</mo><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mi mathvariant="normal">ب</mi></msubsup><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><mo stretchy="false">[</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><msubsup><mo stretchy="false">]</mo><mn dir="ltr">١</mn><mi mathvariant="normal">ب</mi></msubsup><mo>=</mo><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


نضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` ونأخذ الجذرين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="normal">ب</mi><mn dir="ltr">٢</mn></msup><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn><mtext dir="rtl"> أو </mtext><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


يلزم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>&gt;</mo><mn dir="ltr">١</mn></mrow></math>\` لأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` هي الفترة المعطاة؛ لذلك نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u5-p024-r2
title: الكامل، الوحدة الخامسة · الصورة، ٢٤ · ص ٢٣ · البند ٢ · ٢٠٢٤ دور أول
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود في إيجاد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo>−</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`




التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></msubsup><mn dir="ltr">٣</mn><mo>−</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p024-r3
title: الكامل، الوحدة الخامسة · الصورة، ٢٤ · ص ٢٣ · البند ٣ · ٢٠٢٤ دور ثانٍ
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
استخدم تعريف التكامل المحدود في إيجاد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></msubsup><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
solution:
المعطى اقتران على الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات.
المطلوب حساب مجموع ريمان ثم أخذ نهايته لإيجاد التكامل المحدود.

التجزئة المنتظمة تقسم طول الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء متساوية؛ لذلك عرض الجزء الواحد:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



الطرف الأيمن للفترة رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` يساوي بداية الفترة مضافًا إليها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` عروض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوزع ونرتب بحسب قوى رقم الفترة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٧</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبةً في عرض فترتها؛ العرض ثابت هنا فيخرج خارج المجموع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><mrow><mo fence="true">(</mo><mn dir="ltr">٧</mn><mo>−</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ر</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نستخدم صيغة مجموع القوى للأعداد من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`؛ فهي تختصر جمع عدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` من الحدود.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">١</mn></msup><mo>=</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نجمع الثابت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` مرات، فيظهر العامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mi mathvariant="normal">ن</mi></munderover><msup><mi mathvariant="normal">ر</mi><mn dir="ltr">٠</mn></msup><mo>=</mo><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



نستبدل كل مجموع بصيغته، مع إبقاء معاملاته.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mrow><mo fence="true">[</mo><mo stretchy="false">(</mo><mo>−</mo><mfrac><mn dir="ltr">٢٠</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mfrac><msup><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></msup><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo stretchy="false">)</mo><mo fence="true">]</mo></mrow></mrow></math>
\`\`\`



نبسط الحدود والمعاملات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">[</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">(</mo><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٧</mn><mi mathvariant="normal">ن</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mfrac><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo>−</mo><mfrac><mn dir="ltr">٤٠</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`




التكامل المحدود يساوي نهاية مجموع ريمان عندما يزداد عدد الفترات بلا حد؛ عندها تؤول الحدود التي تحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mi mathvariant="normal">ن</mi></mfrac></math>\` أو قواه إلى صفر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٣</mn></msubsup><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi><mo>=</mo><munder><mrow><mi mathvariant="normal">نها</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></munder><msub><mi mathvariant="normal">م</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p024-r4
title: الكامل، الوحدة الخامسة · الصورة، ٢٤ · ص ٢٣ · البند ٤ · تجريبي قلقيلية ٢٠٢٣
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mtext dir="rtl">جا</mtext><mi mathvariant="normal">س</mi></mrow><mrow><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>≠</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mtd></mtr><mtr><mtd><mrow><mn dir="ltr">٣</mn></mrow></mtd><mtd><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></mtd></mtr></mtable></mrow></mrow></math>\`، ابحث قابلية التكامل للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mo>π</mo></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`.
final-answer:
**الاقتران قابل للتكامل على الفترة** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo>]</mo></mrow></math>\`؛ **وانقطاعه عند** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">π</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\` **قابل للإزالة.**
solution:

لإثبات قابلية التكامل نتحقق من المحدودية ومن مواضع عدم الاتصال. نضرب الكسر في المرافق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` ثم نستخدم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mrow><msup><mi mathvariant="normal">جا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">جتا</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.
بعيدًا عن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` غير صفري:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><msup><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo></mrow><mn dir="ltr">٢</mn></msup><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></mfrac></mrow></math>
\`\`\`


على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mi mathvariant="normal">π</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` يكون \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi></mrow></math>\` بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فلا ينعدم المقام.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١</mn><mo>≤</mo><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نهاية التعبير عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` هي:


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow><mrow><mn dir="ltr">١</mn><mo>+</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٠</mn><mrow><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mfrac><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`


قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac></math>\` هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، إذن الانقطاع هناك قابل للإزالة. التعبير متصل ومحدود في بقية الفترة، وتغيير قيمة محدودة عند نقطة واحدة لا يمنع التكامل؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` قابل للتكامل.
:::


:::exam-question
id: math-kamel-u5-p024-r5
title: الكامل، الوحدة الخامسة · الصورة، ٢٤ · ص ٢٣ · البند ٥ · خارجي
question: التكامل المحدود
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mtext dir="rtl">جتا</mtext><mi mathvariant="normal">س</mi></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munder><mtext dir="rtl">نها</mtext><mrow><mi mathvariant="normal">ن</mi><mo>→</mo><mo>∞</mo></mrow></munder><mfrac><mrow><mn dir="ltr">٥</mn><mo>π</mo></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mrow><mi mathvariant="normal">ن</mi></mrow></munderover><mrow><mo stretchy="true">(</mo><mrow><mtext dir="rtl">جتا</mtext><mrow><mo stretchy="true">(</mo><mrow><mfrac><mrow><mo>π</mo></mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac><mi mathvariant="normal">ر</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
solution:

نقارن المعامل أمام المجموع بعرض الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mi mathvariant="normal">π</mi><mn dir="ltr">٢</mn></mfrac><mo stretchy="true" fence="true">]</mo></mrow></math>\` المقسمة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء؛ العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mi mathvariant="normal">π</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`، ونقاط اليمين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mi mathvariant="normal">π</mi><mi mathvariant="normal">ر</mi></mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mfrac></math>\`.
المعامل المعطى عشرة أمثال العرض.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٥</mn><mi>π</mi></mrow><mi mathvariant="normal">ن</mi></mfrac><mo>=</mo><mn dir="ltr">١٠</mn><mfrac><mi>π</mi><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ن</mi></mrow></mfrac></mrow></math>
\`\`\`


التكامل يساوي نهاية مجموع ريمان، فتكون النهاية المطلوبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` أمثال تكامل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\`.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">١٠</mn><msubsup><mo>∫</mo><mn dir="ltr">٠</mn><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></msubsup><mi mathvariant="normal">جتا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mtext> </mtext><mi mathvariant="normal">د</mi><mi mathvariant="normal">س</mi></mrow></math>
\`\`\`


أصل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جتا</mi></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">جا</mi></math>\`، ونعوض الأعلى ونطرح الأدنى.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ل</mi><mo>=</mo><mn dir="ltr">١٠</mn><msubsup><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">جا</mi><mo>⁡</mo><mi mathvariant="normal">س</mi><mo stretchy="false">]</mo></mrow><mn dir="ltr">٠</mn><mrow><mfrac><mi>π</mi><mn dir="ltr">٢</mn></mfrac></mrow></msubsup><mo>=</mo><mn dir="ltr">١٠</mn><mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`


:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "التكامل المحدود",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة التكامل المحدود من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "16 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
