import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `:::exam-question
id: math-book-p102-ex1-a
title: الكتاب، ص ١٠٠ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٢](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=102)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أي من الآتية يعتبر تجزئة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`؟ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\`.
final-answer:
**نعم، هي تجزئة للفترة.**
solution:


يلزم أن تبدأ التجزئة ببداية الفترة وتنتهي بنهايتها، وأن تتزايد عناصرها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>&lt;</mo><mn dir="ltr">١</mn><mo>&lt;</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


هذه العناصر تحقق الشروط؛ إذن هي تجزئة للفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mrow><mo stretchy="true">{</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">}</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p102-ex1-b
title: الكتاب، ص ١٠٠ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٢](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=102)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أي من الآتية يعتبر تجزئة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`؟ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\`.
final-answer:
**ليست تجزئة للفترة.**
solution:
أول عنصر يجب أن يساوي سالب واحد، لكنه صفر هنا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٠</mn><mo>≠</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`

إذن هذه المجموعة ليست تجزئة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

:::


:::exam-question
id: math-book-p102-ex1-c
title: الكتاب، ص ١٠٠ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٢](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=102)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أي من الآتية يعتبر تجزئة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`؟ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\`.
final-answer:
**ليست تجزئة للفترة.**
solution:
العنصر أربعة خارج الفترة، كما أن تكراره يخالف التزايد التام.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>&gt;</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`

إذن هذه المجموعة ليست تجزئة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

:::


:::exam-question
id: math-book-p102-ex1-d
title: الكتاب، ص ١٠٠ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٢](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=102)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أي من الآتية يعتبر تجزئة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`؟ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\`.
final-answer:
**ليست تجزئة للفترة.**
solution:
العناصر يجب أن تتزايد؛ الانتقال من واحد إلى صفر يخالف ذلك.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`

إذن هذه المجموعة ليست تجزئة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

:::


:::exam-question
id: math-book-p103-ex2
title: الكتاب، ص ١٠١ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=103)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` تجزئات خماسية للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.
final-answer:
1. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mo>{</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٧</mn><mo>}</mo></mrow></math>\`
2. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mo>{</mo><mn dir="ltr">٢</mn><mo>،</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٧</mn><mo>}</mo></mrow></math>\`
3. \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mo>{</mo><mn dir="ltr">٢</mn><mo>،</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٧</mn><mo>}</mo></mrow></math>\`
solution:


التجزئة الخماسية تحتاج ست نقاط: الطرفان وأربع نقاط بينهما.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mrow><mo stretchy="true">{</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">}</mo></mrow></mrow></math>
\`\`\`


يمكن اختيار نقاط داخلية أخرى ما دامت متزايدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mrow><mo stretchy="true">{</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mfrac><mn dir="ltr">٩</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">}</mo></mrow></mrow></math>
\`\`\`


وهذه تجزئة ثالثة تحقق الشروط نفسها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mrow><mo stretchy="true">{</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">}</mo></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p103-think1
title: الكتاب، ص ١٠١ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=103)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كم تجزئة خماسية للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يمكن تكوينها؟
final-answer:
**عدد لا نهائي من التجزئات الخماسية.**
solution:
يمكن تغيير إحدى النقاط الداخلية باستمرار مع إبقائها بين جاراتها؛ فلا ينحصر عدد التجزئات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>&lt;</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>&lt;</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`

إذن يمكن تكوين عدد لا نهائي من التجزئات الخماسية، ولا يشترط أن تكون منتظمة.

:::


:::exam-question
id: math-book-p103-ex3
title: الكتاب، ص ١٠١ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=103)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\` تجزئة ثلاثية للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فاكتب جميع الفترات الجزئية الناتجة عنها، ثم احسب طول كل منها.
final-answer:
1. **الفترة الأولى:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo>]</mo></mrow></math>\`؛ **طولها:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`.
2. **الفترة الثانية:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>]</mo></mrow></math>\`؛ **طولها:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn></mrow></math>\`.
3. **الفترة الثالثة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٦</mn><mo>]</mo></mrow></math>\`؛ **طولها:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`.
solution:
التجزئة تقسم الفترة عند كل نقطة داخلية. كل نقطتين متتاليتين تحددان فترة جزئية.

الفترات هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. طول كل فترة يساوي طرفها الأكبر ناقص الأصغر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



إذن الأطوال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` على الترتيب.
:::


:::exam-question
id: math-book-p103-activity-q1
title: الكتاب، ص ١٠١ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=103)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٨</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\` تجزئة رباعية للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فما العلاقة بين أطوال الفترات الجزئية الناتجة عنها؟
final-answer:
**الأطوال متساوية، وطول كل فترة جزئية ٢.**
solution:
طول كل فترة جزئية يساوي طرفها الأكبر ناقص الأصغر؛ نحسب فروق النقاط المتتالية فنجدها متساوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٦</mn></mrow><mo>=</mo><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٨</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p103-activity-q2
title: الكتاب، ص ١٠١ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=103)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
للتجزئة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٨</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\`، كم عدد الفترات الجزئية؟
final-answer:
**٤ فترات جزئية.**
solution:
كل نقطتين متتاليتين تحددان فترة؛ عدد الفترات أقل من عدد النقاط بواحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p103-activity-q3
title: الكتاب، ص ١٠١ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=103)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
للتجزئة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٨</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\`، كم عدد عناصر التجزئة؟ ماذا تلاحظ؟
final-answer:
**٥ عناصر؛ عدد العناصر يزيد واحدًا على عدد الفترات الجزئية.**
solution:
نعد النقاط بما فيها طرفا الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mo>=</mo><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p104-ex4
title: الكتاب، ص ١٠٢ · مثال ٤ · متوسط
question: التجزئة ومجموع ريمان
reference: [السؤال، النسخة المصورة، ص ١٠٤](assets/lessons/mathematics/source-crops/math-book-p104-ex4-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p104-ex4-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب تجزئة خماسية منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">١٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.
final-answer:
**التجزئة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mo>{</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٧</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo>،</mo><mn dir="ltr">١٣</mn><mo>}</mo></mrow></math>\`
solution:
نقسم طول الفترة الكلية على خمس فترات لنحصل على العرض المشترك.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٣</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



نبدأ بسالب اثنين ونضيف ثلاثة في كل مرة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mrow><mo stretchy="true">{</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٧</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo>،</mo><mn dir="ltr">١٣</mn></mrow><mo stretchy="true">}</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p104-think1
title: الكتاب، ص ١٠٢ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٤](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=104)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
هل هناك تجزئات خماسية منتظمة أخرى للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">١٣</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`؟
final-answer:
**لا؛ توجد تجزئة خماسية منتظمة واحدة فقط لهذه الفترة.**
solution:
التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.

عدد الفترات والطرفان يحددان عرضًا واحدًا؛ لذلك لا توجد تجزئة منتظمة أخرى.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٣</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`



كل نقطة تُحدد بإضافة مضاعفات هذا العرض إلى البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">ر</mi></mrow></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p104-ex5
title: الكتاب، ص ١٠٢ · مثال ٥ · متوسط
question: التجزئة ومجموع ريمان
reference: [السؤال، النسخة المصورة، ص ١٠٤](assets/lessons/mathematics/source-crops/math-book-p104-ex5-question.webp) · [الحل المطبوع ](assets/lessons/mathematics/source-crops/math-book-p104-ex5-answer.webp)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi>σ</mi><mn dir="ltr">٦</mn></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٥</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان طول الفترة الجزئية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>\`
solution:
الطول الكلي يساوي عدد الفترات مضروبًا في عرض الواحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نضيف خمسة للطرفين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٧</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p104-derive
title: الكتاب، ص ١٠٢ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٤](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=104)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في التجزئة المنتظمة، علل أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></mrow></math>\`.
final-answer:
**لأن النقطة الثانية تبعد عن بداية الفترة بمقدار عرضَي فترتين جزئيتين متساويتين.**
solution:
عرض الفترة الجزئية في التجزئة المنتظمة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></math>\`، لأننا نقسم الطول الكلي بالتساوي على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` أجزاء.


النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\` تأتي بعد فترتين من البداية؛ نضيف عرضين متساويين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mrow><mn dir="ltr">٢</mn><mfrac><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mi mathvariant="normal">ن</mi></mfrac></mrow></mrow></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p105-ex6-a
title: الكتاب، ص ١٠٣ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=105)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لتكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١٩</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٩</mn></mrow></msub></math>\`.
final-answer:
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٩</mn></msub><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>\`.
solution:
التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.

نحسب عرض الفترة الواحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٩</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">١٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\` تلي البداية بعرضين، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٩</mn></mrow></msub></math>\` بتسعة عروض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



نعوّض بالتسعة في القاعدة نفسها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٩</mn></msub><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٩</mn><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p105-ex6-b
title: الكتاب، ص ١٠٣ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=105)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لتكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١٩</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. جد العنصر الثامن.
final-answer:
**العنصر الثامن:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٧</mn></msub><mo>=</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`
solution:
عرض كل فترة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٩</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">١٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.


العنصر الأول هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></math>\`؛ لذلك العنصر الثامن هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٧</mn></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٧</mn></msub><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٧</mn><mfrac><mrow><mn dir="ltr">١٩</mn><mo>+</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p105-ex6-c
title: الكتاب، ص ١٠٣ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=105)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لتكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١٩</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`. جد الفترة الجزئية الخامسة.
final-answer:
**الفترة الجزئية الخامسة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٣</mn></mfrac><mo>،</mo><mfrac><mn dir="ltr">٢٢</mn><mn dir="ltr">٣</mn></mfrac><mo>]</mo></mrow></math>\`
solution:
عرض كل فترة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٩</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">١٢</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.


الفترة الخامسة تقع بين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msub></math>\`؛ عرض كل فترة خمسة أثلاث.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msub><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٤</mn><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



نضيف عرضًا واحدًا لنجد طرفها الآخر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mrow><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٣</mn></mfrac><mo>+</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">٢٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`

إذن الفترة المطلوبة هي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msub><mo>،</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msub></mrow><mo stretchy="true">]</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٣</mn></mfrac><mo>،</mo><mfrac><mn dir="ltr">٢٢</mn><mn dir="ltr">٣</mn></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p105-ex7
title: الكتاب، ص ١٠٣ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=105)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٤</mn><mo>،</mo><mn dir="ltr">٥</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\` تجزئة ثلاثية للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فاحسب مجموع ريمان، معتبرًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
solution:
![مستطيلات مجموع ريمان](assets/lessons/mathematics/source-crops/math-book-p105-ex7-figure.webp)

 مجموع ريمان هو مجموع قيمة الاقتران عند نقطة الاختيار مضروبة في عرض فترتها.
نختار الطرف الأيسر حسب الشرط. العرض المشترك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`؛ ونقاط الاختيار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


نعوض القيم ونضرب كل قيمة في عرض فترتها، ثم نجمع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p106-ex8
title: الكتاب، ص ١٠٤ · مثال محلول
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=106)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></math>\` تجزئة رباعية منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فاحسب مجموع ريمان، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٠</mn></mrow></math>\`
solution:
 مجموع ريمان هو مجموع قيمة الاقتران عند نقطة الاختيار مضروبة في عرض فترتها.
العرض المشترك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`. نقاط الطرف الأيسر هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.
نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow><mo>−</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><msup><mo stretchy="false">)</mo><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">١٥</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn><mo>−</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


نعوض القيم ونضرب كل قيمة في عرض فترتها، ثم نجمع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٣٠</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p106-q1-a
title: الكتاب، ص ١٠٤ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=106)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٦</mn></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فجد العنصر الثالث في التجزئة.
final-answer:
**العنصر الثالث:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>\`
solution:
التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.

عرض الفترة نصف، والعنصر الثالث هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





نضيف عرضين إلى البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p106-q1-b
title: الكتاب، ص ١٠٤ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=106)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٦</mn></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٢</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فجد الفترة الجزئية الرابعة.
final-answer:
**الفترة الجزئية الرابعة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">١</mn><mo>]</mo></mrow></math>\`
solution:
عرض كل فترة هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`.


الفترة الرابعة تبدأ عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٣</mn></mrow></msub></math>\` وتنتهي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></math>\`؛ العرض نصف.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نضيف نصفًا للطرف الأول.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msub><mo>،</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msub></mrow><mo stretchy="true">]</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p106-q2
title: الكتاب، ص ١٠٤ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=106)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان العنصر الخامس في التجزئة المنتظمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٠</mn></mrow></msub></math>\` للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">ج</mi><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، جد قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ج</mi></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`
solution:
التجزئة المنتظمة تقسم الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` فترات متساوية؛ عرض كل واحدة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٧</mn><mo>−</mo><mi mathvariant="normal">ج</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">١٠</mn></mfrac></math>\`. العنصر الخامس هو النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></math>\`، لأن عد العناصر يبدأ ب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></math>\`.

إذن نضيف أربعة عروض إلى البداية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mi mathvariant="normal">ج</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٧</mn><mo>−</mo><mi mathvariant="normal">ج</mi><mo stretchy="false">)</mo></mrow><mn dir="ltr">١٠</mn></mfrac></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\` ثم نوزع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٢٨</mn><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ج</mi><mo>+</mo><mn dir="ltr">٢٨</mn></mrow></math>
\`\`\`



نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٨</mn></math>\` ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٦</mn><mi mathvariant="normal">ج</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ج</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p106-q3
title: الكتاب، ص ١٠٤ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=106)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><msup><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msup></mrow></mrow></math>\` معرفًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></math>\` تجزئة منتظمة للفترة نفسها، فجد مجموع ريمان، معتبرًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></math>\`
solution:
 مجموع ريمان هو مجموع قيمة الاقتران عند نقطة الاختيار مضروبة في عرض فترتها.
العرض المشترك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`. نقاط الطرف الأيمن هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.
نعوض في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></mrow></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٤</mn><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٩</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٢٥</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٩</mn></mrow></math>
\`\`\`


نعوض القيم ونضرب كل قيمة في عرض فترتها، ثم نجمع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">١</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٩</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mo>−</mo><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">١٩</mn><mo>=</mo><mo>−</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p106-q4
title: الكتاب، ص ١٠٤ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٠٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=106)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mi mathvariant="normal">س</mi></mrow><mrow><mi mathvariant="normal">س</mi><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\` معرفًا على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٨</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٥</mn></mrow></msub></mrow><mo>=</mo><mrow><mo stretchy="true" fence="true">{</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">٨</mn><mo stretchy="true" fence="true">}</mo></mrow></mrow></math>\` تجزئة للفترة، فاحسب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` علمًا بأن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">مجموع ريمان</mtext><mo>=</mo><mn dir="ltr">٥٫٦</mn></mrow></math>\`، معتبرًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">٢١</mn><mn dir="ltr">٨</mn></mfrac></mrow></math>\`
solution:
المطلوب مجموع ريمان، ثم استخدام قيمته المعطاة لتعيين الثابت.

مجموع ريمان يجمع قيمة الاقتران عند نقطة الاختيار مضروبةً في عرض فترتها.
نحسب عرض كل فترة بطرح طرفها الأيسر من طرفها الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msub><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٥</mn></msub><mo>=</mo><mn dir="ltr">٨</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نختار الطرف الأيسر لكل فترة لأن الشرط هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`.
نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow><mrow><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow><mrow><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow><mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow></mrow><mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`



نعوض نقطة الاختيار في قاعدة الاقتران.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">أ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٦</mn><mo fence="true">)</mo></mrow></mrow><mrow><mrow><mo fence="true">(</mo><mn dir="ltr">٦</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



نضرب كل قيمة في عرض فترتها، ثم نجمع. نضع القيم السالبة بين قوسين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mo>−</mo><mi mathvariant="normal">أ</mi><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٣</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٥</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٤</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نحسب المنتجات أولًا.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٣</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mfrac><mi mathvariant="normal">أ</mi><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٩</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٥</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نوحد مقامات المعاملات على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٠</mn></math>\`: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mrow><mrow><mrow><mo>−</mo><mn dir="ltr">٦٠</mn></mrow><mo>+</mo><mn dir="ltr">١٠</mn></mrow><mo>+</mo><mn dir="ltr">١٥</mn></mrow><mo>+</mo><mn dir="ltr">٥٤</mn></mrow><mo>+</mo><mn dir="ltr">٤٥</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣٠</mn></mfrac><mo>=</mo><mfrac><mrow><mn dir="ltr">٦٤</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣٠</mn></mfrac></mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">١٥</mn></mfrac></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">١٥</mn></mfrac></mrow></math>
\`\`\`



نساوي المجموع بالقيمة المعطاة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٣٢</mn><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">١٥</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢٨</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`




نقسم الطرفين على معامل الثابت المجهول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mfrac><mn dir="ltr">٢٨</mn><mn dir="ltr">٥</mn></mfrac><mfrac><mn dir="ltr">٣٢</mn><mn dir="ltr">١٥</mn></mfrac></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢١</mn><mn dir="ltr">٨</mn></mfrac></mrow></math>
\`\`\`


:::


:::exam-question
id: math-book-p123-worksheet2-q1
title: الكتاب، ص ١٢١ · نشاط أو تمرين
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٢٣](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=123)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٨</mn></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` والعنصر الثالث فيها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`، وكانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></math>\` تجزئة منتظمة للفترة نفسها والعنصر الخامس فيها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، جد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`.
final-answer:
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>\`.
solution:
التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.

العنصر الثالث يأتي بعد عرضين في التجزئة الثمانية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٨</mn></mfrac></mrow></mrow></math>
\`\`\`


العنصر الخامس يأتي بعد أربعة عروض في التجزئة الاثني عشرية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></mrow></math>
\`\`\`


نطرح المعادلتين: يختفيأ، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">١٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٨</mn></mfrac></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">١٢</mn></mfrac></mrow></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn><mo>=</mo><mfrac><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></math>
\`\`\`


إذن الطول أربعة وعشرون، ومن المعادلة الأولى نجد الطرفين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>−</mo><mfrac><mn dir="ltr">٢٤</mn><mn dir="ltr">٤</mn></mfrac></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`





نضيف الطول إلى البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow><mo>+</mo><mn dir="ltr">٢٤</mn></mrow><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`
:::


:::mcq
id: math-book-p124-unit-q1-d
title: الكتاب، ص ١٢٢ · اختبار الوحدة
kicker: اختبار الوحدة
reference: [الكتاب، النسخة المصورة، ص ١٢٤](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=124)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٠</mn></mrow></msub></mrow><mo>=</mo></mrow></math>\` {\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، ...، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٧</mn></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`} تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`؟
- [ ] option-1 | صفرًا
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
explanation:
بين النقطة الثانية والنقطة العاشرة ثمانية عروض متساوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٧</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٨</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



البداية تسبق النقطة الثانية بعرض واحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::exam-question
id: math-book-p125-unit-q5
title: الكتاب، ص ١٢٣ · اختبار الوحدة
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٢٥](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=125)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان العنصر السابع فيها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` والعنصر الرابع يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\`، فما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؟
final-answer:
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`.
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٢٢</mn></mrow></math>\`.
solution:
بين العنصرين الرابع والسابع ثلاث فترات؛ نحسب عرض الواحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٧</mn></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`



العنصر الرابع يأتي بعد ثلاثة عروض من البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٧</mn><mo>−</mo><mrow><mn dir="ltr">٣</mn><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





نضيف اثني عشر عرضًا لنجد النهاية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mrow><mn dir="ltr">١٢</mn><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-book-p126-unit-q6
title: الكتاب، ص ١٢٤ · اختبار الوحدة
question: التجزئة ومجموع ريمان
reference: [الكتاب، النسخة المصورة، ص ١٢٦](https://moe.edu.ps/storage/app/gaza/subjects/12v/%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA%20%D8%B9%D9%84%D9%85%D9%8A%20%D9%A1%D9%A2%20%D8%BA%D8%B2%D8%A9%20%D9%85%D8%AA%D9%85%D8%A7%D8%B2%D8%AC%D8%A9.pdf#page=126)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` اقترانين معرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ومجموع ريمان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، فجد مجموع ريمان ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">هـ</mi></math>\` معتبرًا \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></mrow></math>\`، حيث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></math>\` تجزئة منتظمة للفترة.
final-answer:
**مجموع ريمان للاقتران هـ:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧٤</mn></mrow></math>\`
solution:
مجموع ريمان يجمع قيمة الاقتران عند كل نقطة اختيار مضروبة في عرض فترتها. نستخدم التجزئة ونقاط الاختيار نفسها ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` ولهـ، لذلك يتوزع المجموع على الحدين في العلاقة المعطاة.

المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mtext dir="rtl">هـ</mtext><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mrow><mn dir="ltr">٣</mn><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true">)</mo></mrow></mrow><mo>+</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`


عرض كل فترة اثنان؛ الأطراف اليمنى هي أربعة وستة وثمانية وعشرة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نوزّع المجموع على ثلاثة أمثال \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ق</mi></math>\` وعلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">س</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mrow><mn dir="ltr">٣</mn><mo>×</mo><mn dir="ltr">٦</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٢</mn><mrow><mo stretchy="true">(</mo><mrow><mrow><mrow><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٦</mn></mrow><mo>+</mo><mn dir="ltr">٨</mn></mrow><mo>+</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></mrow></mrow></math>
\`\`\`







نجمع الجزأين.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mn dir="ltr">١٨</mn><mo>+</mo><mn dir="ltr">٥٦</mn></mrow><mo>=</mo><mn dir="ltr">٧٤</mn></mrow></math>
\`\`\`
:::


:::mcq
id: math-kamel-u5-p006-r4
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦ · البند ٤ · سهل
kicker: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦ · البند ٤ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u5-p006-r4-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u5-p006-r4-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi>σ</mi><mn dir="ltr">٨</mn></msub><mo>=</mo><mo>{</mo><mn dir="ltr">١</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٦٥</mn><mo>}</mo></mrow></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٦٥</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true">[</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub><mo>،</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub></mrow><mo stretchy="true">]</mo></mrow></math>\` فترة جزئية لهذه التجزئة، فما قيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٨</mn></munderover><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٤</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٥</mn></math>\`
explanation:
المطلوب مجموع أطوال الفترات الجزئية.

كل حد هو بداية فترة مطروحة من نهايتها. عند جمع الأطوال تلغى النقاط الداخلية لأن كل واحدة تظهر مرة بالموجب ومرة بالسالب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٨</mn></munderover><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo stretchy="false">)</mo><mo>+</mo><mo>⋯</mo><mo>+</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٨</mn></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٧</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٨</mn></munderover><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٨</mn></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub><mo>=</mo><mn dir="ltr">٦٥</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٦٤</mn></mrow></math>
\`\`\`



إذن المجموع يساوي طول الفترة الكلية، وهو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦٤</mn></math>\`.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u5-p009-r3
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٩ · البند ٣ · سهل
kicker: الكامل، الوحدة ٥ · النسخة المصورة، ص ٩ · البند ٣ · سهل
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u5-p009-r3-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u5-p009-r3-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi>σ</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>{</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٥٤</mn><mo>،</mo><mn dir="ltr">٥٩</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٩٩</mn><mo>}</mo></mrow></math>\` تجزئة منتظمة في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٩٩</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فما عدد الفترات الجزئية الناتجة عن هذه التجزئة؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٩</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢١</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٢</mn></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi>σ</mi><mi mathvariant="normal">ن</mi></msub><mo>=</mo><mo>{</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٥٤</mn><mo>،</mo><mn dir="ltr">٥٩</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٩٩</mn><mo>}</mo></mrow></math>
\`\`\`


العنصران المتجاوران أربعة وخمسون وتسعة وخمسون يحددان عرضًا يساوي خمسة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mrow><mn dir="ltr">٥٩</mn><mo>−</mo><mn dir="ltr">٥٤</mn></mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`

التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.


نقسم الطول الكلي على عرض الفترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٩٩</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u5-p004-r1
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٤ · البند ١ · متوسط
kicker: الكامل، الوحدة ٥ · النسخة المصورة، ص ٤ · البند ١ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u5-p004-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u5-p004-r1-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi>σ</mi><mi mathvariant="normal">ن</mi></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان العنصر الرابع فيها يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٦</mn></math>\`، فإن عدد عناصر \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi>σ</mi><mi mathvariant="normal">ن</mi></msub></math>\` يساوي:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٩</mn></math>\`
explanation:
العنصر الرابع يأتي بعد ثلاثة عروض من الصفر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

نقسم طول الفترة على العرض ثم نزيد نقطة البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mfrac><mn dir="ltr">٢٠</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u5-p005-r2
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٥ · البند ٢ · متوسط
kicker: الكامل، الوحدة ٥ · النسخة المصورة، ص ٥ · البند ٢ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u5-p005-r2-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u5-p005-r2-key.webp)
question: إذا كان العنصر السادس في تجزئة نونية منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>،</mo><mn dir="ltr">٤</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فما عدد عناصر هذه التجزئة؟
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٣</mn></math>\`
explanation:
العنصر السادس يأتي بعد خمسة عروض؛ نطرح البداية من قيمته.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`



التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.


نقسم الطول الكلي على العرض ثم نضيف واحدًا لعدد النقاط.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">٤</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١١</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u5-p006-r2
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦ · البند ٢ · متوسط
kicker: الكامل، الوحدة ٥ · النسخة المصورة، ص ٦ · البند ٢ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u5-p006-r2-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u5-p006-r2-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi>σ</mi><mn dir="ltr">٥</mn></msub></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\`، وكان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥</mn></munderover><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>\`، فإن طول الفترة الجزئية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true">[</mo><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msub><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow><mo>=</mo></mrow></math>\`
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠</mn></math>\`
- [ ] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٫٥</mn></math>\`
- [x] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥</mn></munderover><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`


طول الفترة الكلي عشرة، موزع على خمس فترات متساوية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

الفترة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` هي آخر فترة جزئية، وعرضها نفسه.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msub></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u5-p007-r1
title: الكامل، الوحدة ٥ · النسخة المصورة، ص ٧ · البند ١ · متوسط
kicker: الكامل، الوحدة ٥ · النسخة المصورة، ص ٧ · البند ١ · متوسط
reference: [السؤال والخيارات الأصلية](assets/lessons/mathematics/source-crops/math-kamel-u5-p007-r1-question.webp) · [مفتاح الكامل](assets/lessons/mathematics/source-crops/math-kamel-u5-p007-r1-key.webp)
question: إذا كانت \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi>σ</mi><mi mathvariant="normal">م</mi></msub><mo>=</mo><mo>{</mo><mn dir="ltr">٠</mn><mo>،</mo><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac><mo>،</mo><mfrac><mn dir="ltr">١٠</mn><mi mathvariant="normal">ن</mi></mfrac><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٢٠</mn><mo>}</mo></mrow></math>\` تجزئة منتظمة للفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`، فإن عدد عناصر التجزئة هو:
- [ ] option-1 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-3 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\`
- [ ] option-4 | \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mrow></math>\`
explanation:
المتتالية الصريحة تبدأ من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` وتنتهي عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\`، والفارق بين كل نقطتين متتاليتين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac></math>\`؛ إذن هذا هو عرض الفترة الجزئية، مع \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` عدد صحيح موجب.
عدد الفترات يساوي الطول الكلي مقسومًا على العرض.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mrow><mfrac><mn dir="ltr">٥</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></mfrac><mo>=</mo><mn dir="ltr">٢٠</mn><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`


عدد النقاط يزيد واحدًا على عدد الفترات لأننا نعد طرف البداية أيضًا.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.
:::


:::mcq
id: math-kamel-u5-p004-r2
title: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٢ · ٢٠٠٨ إكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٢ · ٢٠٠٨ إكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة ذاتها، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></math>\`، فإن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` يساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢٦</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`
explanation:
المطلوب مجموع ريمان.

مجموع ريمان يجمع قيمة الاقتران عند نقطة الاختيار مضروبةً في عرض فترتها.
نحسب عرض كل فترة بطرح طرفها الأيسر من طرفها الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نختار الطرف الأيمن لكل فترة لأن الشرط هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></mrow></math>\`.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`



نضرب كل قيمة في عرض فترتها، ثم نجمع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٩</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٩</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١٣</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p004-r3
title: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٣ · ٢٠٠٩
kicker: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٣ · ٢٠٠٩
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mn dir="ltr">١</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">١٥</mn><mo stretchy="true">}</mo></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما عدد عناصر هذه التجزئة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢١</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٥</mn></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mn dir="ltr">١</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٥</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٧</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">١٥</mn><mo stretchy="true">}</mo></mrow></math>
\`\`\`


نطرح أول نقطتين للحصول على العرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>
\`\`\`

نقسم الطول على العرض لنحسب عدد الفترات، ثم نضيف نقطة البداية؛ فعدد النقاط يزيد واحدًا على عدد الفترات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">١٥</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p004-r4
title: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٤ · ٢٠٠٩ إكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٤ · ٢٠٠٩ إكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١٢</mn><mo>،</mo><mn dir="ltr">٢٠</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان العنصر السادس فيها يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، فما عدد عناصر هذه التجزئة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٥</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٧</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
العنصر السادس يبعد خمسة عروض عن البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نقسم الطول على العرض ثم نضيف واحدًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">٢٠</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١٧</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p004-r5
title: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٥ · ٢٠١٠
kicker: الكامل، الوحدة الخامسة · الصورة، ٤ · ص ٣ · البند ٥ · ٢٠١٠
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٦</mn></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٨</mn><mo stretchy="true">}</mo></mrow></math>\` تجزئة منتظمة للفترة، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٥</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٦</mn></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٨</mn><mo stretchy="true">}</mo></mrow></math>
\`\`\`


من العنصر الثاني إلى الأخير خمس فترات، عرض الواحدة اثنان.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٥</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نطرح عرضًا من العنصر الثاني لنجد البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p005-r1
title: الكامل، الوحدة الخامسة · الصورة، ٥ · ص ٤ · البند ١ · ٢٠١٠ إكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ٥ · ص ٤ · البند ١ · ٢٠١٠ إكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٨</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فإن الفترة الجزئية الأخيرة هي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢٫٧٥</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢٫٥</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢٣</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`
explanation:
عرض كل فترة نصف؛ آخر فترة تنتهي عند ثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٨</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





نطرح العرض من النهاية للحصول على بدايتها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mrow><mn dir="ltr">٣</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow><mo>=</mo><mrow><mo stretchy="true">[</mo><mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p005-r3
title: الكامل، الوحدة الخامسة · الصورة، ٥ · ص ٤ · البند ٣ · ٢٠١٢
kicker: الكامل، الوحدة الخامسة · الصورة، ٥ · ص ٤ · البند ٣ · ٢٠١٢
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٣</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان العنصر التاسع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>\`، فإن قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` تساوي:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
- [x] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
العنصر التاسع يأتي بعد ثمانية عروض من ثلاثة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn></mrow><mn dir="ltr">٨</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`





نضيف اثني عشر عرضًا إلى البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>+</mo><mfrac><mn dir="ltr">١٢</mn><mn dir="ltr">٤</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p005-r4
title: الكامل، الوحدة الخامسة · الصورة، ٥ · ص ٤ · البند ٤ · ٢٠١٢ إكمال
kicker: الكامل، الوحدة الخامسة · الصورة، ٥ · ص ٤ · البند ٤ · ٢٠١٢ إكمال
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان العنصر الثاني فيها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>=</mo><mn dir="ltr">١٫٣</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٩</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢١</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٢</mn></mrow></math>\`
explanation:
العنصر الثاني يحدد العرض بطرح البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">١٣</mn><mn dir="ltr">١٠</mn></mfrac><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">١٠</mn></mfrac></mrow></math>
\`\`\`

نقسم طول الفترة على عرض الواحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">١٠</mn></mfrac></mfrac><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p006-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦ · ص ٥ · البند ١ · ٢٠١٣
kicker: الكامل، الوحدة الخامسة · الصورة، ٦ · ص ٥ · البند ١ · ٢٠١٣
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mn dir="ltr">١</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">١٧</mn><mo>،</mo><mn dir="ltr">١٩</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٩٩</mn><mo stretchy="true">}</mo></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٩٩</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما عدد الفترات الجزئية الناتجة عن التجزئة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٨</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤٩</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٠</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥١</mn></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mn dir="ltr">١</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">١٧</mn><mo>،</mo><mn dir="ltr">١٩</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٩٩</mn><mo stretchy="true">}</mo></mrow></math>
\`\`\`


العنصران المتجاوران سبعة عشر وتسعة عشر يحددان العرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mrow><mn dir="ltr">١٩</mn><mo>−</mo><mn dir="ltr">١٧</mn></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

نقسم طول الفترة على العرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٩٩</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٤٩</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p006-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦ · ص ٥ · البند ٣ · ٢٠١٦
kicker: الكامل، الوحدة الخامسة · الصورة، ٦ · ص ٥ · البند ٣ · ٢٠١٦
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان طول الفترة الجزئية يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`، فإن عدد عناصرها:
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٩</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
explanation:
نقسم طول الفترة على ثلث لنجد عدد الفترات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٥</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٣</mn></mfrac></mfrac><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>
\`\`\`







عدد النقاط يزيد واحدًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١٩</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p007-r2
title: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٢ · ٢٠١٩ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٢ · ٢٠١٩ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٦</mn></mrow></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`، فما عدد عناصر التجزئة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٥</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٤</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٩</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٨</mn></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٦</mn></mrow></msub><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`


\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٦</mn></mrow></msub></math>\` يأتي بعد ست فترات؛ بخلاف العنصر السادس فهو لا يعني خمس فترات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`





نقسم الطول على العرض ثم نضيف واحدًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">٧</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١٩</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p007-r3
title: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٣ · ٢٠١٩ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٣ · ٢٠١٩ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٨</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان طول الفترة الجزئية \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، فما قيمة العنصر الثامن من هذه التجزئة؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢٢</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
explanation:
العنصر الثامن هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٧</mn></mrow></msub></math>\`، أي يسبق النهاية بعرض واحد.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٧</mn></msub><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p007-r4
title: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٤ · ٢٠٢٠ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٤ · ٢٠٢٠ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: لتكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٥٠</mn></mrow></msub></mrow></math>\` تجزئة منتظمة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٥٠</mn></mrow></munderover><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥٠</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></math>\`
explanation:
مجموع أطوال الفترات الجزئية يساوي طول الفترة الكلية؛ النقاط الداخلية تلغى عند جمع الفروق.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥٠</mn></munderover><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub><mo stretchy="false">)</mo><mo>+</mo><mo>⋯</mo><mo>+</mo><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٥٠</mn></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤٩</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><munderover><mo>∑</mo><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">١</mn></mrow><mn dir="ltr">٥٠</mn></munderover><mo stretchy="false">(</mo><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٥٠</mn></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٠</mn></msub><mo>=</mo><mn dir="ltr">٣١</mn><mo>−</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p007-r5
title: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٥ · ٢٠٢٠ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٧ · ص ٦ · البند ٥ · ٢٠٢٠ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo stretchy="true">}</mo></mrow></math>\` تجزئة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn><mo>،</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`
explanation:
المطلوب مجموع ريمان.

مجموع ريمان يجمع قيمة الاقتران عند نقطة الاختيار مضروبةً في عرض فترتها.
نحسب عرض كل فترة بطرح طرفها الأيسر من طرفها الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نختار الطرف الأيسر لكل فترة لأن الشرط هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نضرب كل قيمة في عرض فترتها، ثم نجمع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٦</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p008-r1
title: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ١ · ٢٠٢٠ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ١ · ٢٠٢٠ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٠٠</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">١٦</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت الفترة الجزئية الواحدة والعشرون هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٨</mn><mo>،</mo><mi mathvariant="normal">ع</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٦</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٢</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٢</mn></mrow></math>\`
explanation:
التجزئة المنتظمة لها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠٠</mn></math>\` فترة متساوية. الفترة الحادية والعشرون هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub></mrow><mo>،</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢١</mn></mrow></msub></mrow><mo stretchy="true" fence="true">]</mo></mrow></math>\`؛ لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub></mrow><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`.

عرض كل فترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٦</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">١٠٠</mn></mfrac></math>\`، ونصل إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub></math>\` بإضافة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\` عرضًا إلى البداية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٢٠</mn><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>−</mo><mi mathvariant="normal">أ</mi><mo stretchy="false">)</mo></mrow><mn dir="ltr">١٠٠</mn></mfrac><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">١٦</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`



نضرب الطرفين في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` ثم نوزع السالب.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١٦</mn><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤٠</mn><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">٢٤</mn><mn dir="ltr">٤</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">٦</mn></mrow></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p008-r2
title: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ٢ · ٢٠٢٠ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ٢ · ٢٠٢٠ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٣</mn><mo stretchy="true">}</mo></mrow></math>\` تجزئة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٨</mn></mrow><mrow><mn dir="ltr">٣</mn></mrow></mfrac></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢١</mn></mrow><mrow><mn dir="ltr">٥</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المطلوب مجموع ريمان، ثم استخدام قيمته المعطاة لتعيين الثابت.

مجموع ريمان يجمع قيمة الاقتران عند نقطة الاختيار مضروبةً في عرض فترتها.
نحسب عرض كل فترة بطرح طرفها الأيسر من طرفها الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mn dir="ltr">٣</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نختار الطرف الأيسر لكل فترة لأن الشرط هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><msup><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نضرب كل قيمة في عرض فترتها، ثم نجمع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١٠</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`



نساوي المجموع بالقيمة المعطاة.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">أ</mi><mo>−</mo><mn dir="ltr">١٠</mn><mo>=</mo><mn dir="ltr">٣٠</mn></mrow></math>
\`\`\`



ننقل الحد الثابت بطرحه من الطرفين.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣٠</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نقسم الطرفين على معامل الثابت المجهول.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mfrac><mn dir="ltr">٤٠</mn><mn dir="ltr">١٠</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p008-r3
title: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ٣ · ٢٠٢٠ دور ثالث
kicker: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ٣ · ٢٠٢٠ دور ثالث
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">٢٠</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان العنصر الرابع فيها يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn></mrow></math>\`، فما عدد الفترات الجزئية الناتجة من تلك التجزئة؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٠</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١١</mn></mrow></math>\`
- [x] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\`
explanation:
العنصر الرابع يبعد ثلاثة عروض عن البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mn dir="ltr">٦</mn><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`

عدد الفترات هو الطول الكلي على عرض الواحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mn dir="ltr">٢٠</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p008-r4
title: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ٤ · ٢٠٢١ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٨ · ص ٧ · البند ٤ · ٢٠٢١ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: ليكن عدد عناصر التجزئة المنتظمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩</mn></mrow></math>\` عناصر، وكانت الفترة الجزئية الرابعة منها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٥</mn><mo>،</mo><mfrac><mrow><mn dir="ltr">٢١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٩</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`
explanation:
التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.

عرض الفترة الرابعة هو فرق طرفيها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">٢١</mn><mn dir="ltr">٤</mn></mfrac><mo>−</mo><mn dir="ltr">٥</mn></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



تسع نقاط تحدد ثماني فترات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo>=</mo><mrow><mn dir="ltr">٨</mn><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p009-r1
title: الكامل، الوحدة الخامسة · الصورة، ٩ · ص ٨ · البند ١ · ٢٠٢٢ دور أول
kicker: صياغة تعليمية معدّلة
reference: السؤال، الصورة، · الإجابة المطبوعة · صياغة تعليمية معدّلة
question: قُسّمت الفترة \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">[</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mn dir="ltr">١٢</mn><mo stretchy="false">]</mo></mrow></math>\` إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠٠</mn></math>\` فترة جزئية متساوية. ما رتبة النقطة التي قيمتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٠٫٨</mn></math>\` بين نقاط التجزئة المرتبة تصاعدياً، إذا عُدّت النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` هي الأولى؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٩٠</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٩</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٨</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨٧</mn></mrow></math>\`
explanation:
التجزئة المنتظمة تعني تساوي أطوال الفترات الجزئية. نقسم طول الفترة الكلية على عدد الفترات.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٢</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">١٠٠</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١٠</mn><mn dir="ltr">١٠٠</mn></mfrac><mo>=</mo><mn dir="ltr">٠٫١</mn></mrow></math>
\`\`\`



النقطة ذات الدليل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` تبعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\` أطوال جزئية عن البداية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٠٫١</mn><mi mathvariant="normal">ر</mi></mrow></math>
\`\`\`



نعوض القيمة المطلوبة ثم نعزل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ر</mi></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٠٫٨</mn><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٠٫١</mn><mi mathvariant="normal">ر</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨٫٨</mn><mo>=</mo><mn dir="ltr">٠٫١</mn><mi mathvariant="normal">ر</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mn dir="ltr">٨٨</mn></mrow></math>
\`\`\`



لكن النقطة ذات الدليل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٠</mn></math>\` هي الأولى؛ لذلك تزيد الرتبة واحداً على الدليل.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">الرتبة</mtext><mo>=</mo><mn dir="ltr">٨٨</mn><mo>+</mo><mn dir="ltr">١</mn><mo>=</mo><mn dir="ltr">٨٩</mn></mrow></math>
\`\`\`




hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p009-r2
title: الكامل، الوحدة الخامسة · الصورة، ٩ · ص ٨ · البند ٢ · ٢٠٢٣ دور أول
kicker: الكامل، الوحدة الخامسة · الصورة، ٩ · ص ٨ · البند ٢ · ٢٠٢٣ دور أول
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٣٥</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">}</mo></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [ ] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٫٥</mn></mrow></math>\`
- [x] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٣٥</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true">}</mo></mrow></math>
\`\`\`


التجزئة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub></math>\` تقسم الفترة إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\` فترة متساوية، وتحتوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢١</mn></math>\` نقطة. العدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` هو نقطة التقسيم الأولى بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، والعدد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٥</mn></math>\` هو النقطة التاسعة عشرة قبل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\`؛ لذلك بينهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٩</mn><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\` فترة، وليس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\` فترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٣٥</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">١٨</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



بما أن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` يقع بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` بفترة واحدة، نطرح عرض الفترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` لنرجع إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p009-r4
title: الكامل، الوحدة الخامسة · الصورة، ٩ · ص ٨ · البند ٤ · ٢٠٢٤ دور ثانٍ
kicker: الكامل، الوحدة الخامسة · الصورة، ٩ · ص ٨ · البند ٤ · ٢٠٢٤ دور ثانٍ
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">}</mo></mrow></math>\` تجزئة منتظمة عدد عناصرها \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٠</mn></mrow></math>\` للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
- [x] option-1 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></math>\`
- [ ] option-2 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢</mn></mrow></math>\`
- [ ] option-3 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٢٨</mn></mrow><mrow><mn dir="ltr">١٠</mn></mrow></mfrac></mrow></math>\`
- [ ] option-4 | \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mfrac><mrow><mn dir="ltr">٢٦</mn></mrow><mrow><mn dir="ltr">١١</mn></mrow></mfrac></mrow></math>\`
explanation:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub><mo>=</mo><mo stretchy="true">{</mo><mi mathvariant="normal">أ</mi><mo>،</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mo>…</mo><mo>،</mo><mn dir="ltr">٦</mn><mo stretchy="true">}</mo></mrow></math>
\`\`\`


عشر نقاط تعني تسع فترات؛ من العنصر الثاني إلى الأخير ثماني فترات.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٨</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نطرح عرضًا لنجد البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٣</mn></mrow></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::mcq
id: math-kamel-u5-p009-r5
title: الكامل، الوحدة الخامسة · الصورة، ٩ · ص ٨ · البند ٥ · تجريبي مديرية قلقيلية ٢٠٢٤
kicker: الكامل، الوحدة الخامسة · الصورة، ٩ · ص ٨ · البند ٥ · تجريبي مديرية قلقيلية ٢٠٢٤
reference: السؤال، الصورة، · الإجابة المطبوعة
question: إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">١٩</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، فما ترتيب الحد الذي قيمته \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٤</mn></mrow></math>\`؟
- [ ] option-1 | الثامن
- [ ] option-2 | التاسع
- [x] option-3 | العاشر
- [ ] option-4 | السابع
explanation:
التجزئة منتظمة، فيكون عرض كل فترة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٩</mn><mo>−</mo><mrow><mo stretchy="true" fence="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">١٢</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">٢٠</mn><mn dir="ltr">١٢</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mrow></math>\`.


عرض الواحدة خمسة أثلاث؛ نحسب عدد العروض حتى أربعة عشر.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ر</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٤</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٣</mn></mfrac></mfrac><mo>=</mo><mn dir="ltr">٩</mn></mrow></math>
\`\`\`





الرتبة تزيد واحدًا على الدليل.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ر</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">١٠</mn></mrow></math>
\`\`\`
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات.

:::


:::exam-question
id: math-kamel-u5-p010-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٠ · ص ٩ · البند ١ · ٢٠١١ إكمال
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٢</mn><mo>،</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان العنصر السابع يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٨</mn></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>\`
solution:
العنصر السابع يأتي بعد ستة عروض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نضيف اثني عشر عرضًا إلى البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">١٢</mn></mrow><mo>=</mo><mn dir="ltr">١٤</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p010-r2-a
title: الكامل، الوحدة الخامسة · الصورة، ١٠ · ص ٩ · البند ٢-أ · ٢٠٢٠ دور أول
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لتكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">١٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان العنصر الخامس والسابع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">١٠</mn></mrow></math>\` على الترتيب. أوجد طول الفترة الكلية.
final-answer:
**طول الفترة الكلية:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
solution:
بين العنصرين الخامس والسابع عرضان، فنحسب عرض الواحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



العنصر الخامس يبعد أربعة عروض عن البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`





نطرح البداية من النهاية لنجد الطول الكلي.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mn dir="ltr">١٤</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p010-r2-b
title: الكامل، الوحدة الخامسة · الصورة، ١٠ · ص ٩ · البند ٢-ب · ٢٠٢٠ دور أول
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لتكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة نونية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">١٤</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان العنصر الخامس والسابع \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٦</mn><mo>،</mo><mn dir="ltr">١٠</mn></mrow></math>\` على الترتيب. أوجد قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`
solution:
بين العنصرين الخامس والسابع عرضان، فنحسب عرض الواحدة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٦</mn></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



العنصر الخامس يبعد أربعة عروض عن البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٦</mn><mo>−</mo><mrow><mn dir="ltr">٤</mn><mo>×</mo><mn dir="ltr">٢</mn></mrow></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`





التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.


نقسم الطول الكلي على العرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٤</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p010-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٠ · ص ٩ · البند ٣ · ٢٠٢٠ دور أول
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\` معرفاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٥</mn></mrow></msub></mrow></math>\` تجزئة خماسية منتظمة لهذه الفترة بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٥</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٣٦</mn></mrow></math>\`، أوجد قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></math>\`.
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`
solution:
المطلوب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` من مجموع ريمان \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\`، ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mi mathvariant="normal">س</mi><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>\` على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">١</mn><mo>،</mo><mi mathvariant="normal">ب</mi><mo stretchy="true" fence="true">]</mo></mrow></math>\` بخمس فترات منتظمة واختيار الأطراف اليمنى. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow></math>\` لعرض الفترة.

عرض الفترة موجب، والنقاط اليمنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">Δ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ...، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">Δ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mrow><mrow><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">ب</mi><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٥</mn></mfrac></mrow><mo>&gt;</mo><mn dir="ltr">٠</mn></mrow></mrow></math>
\`\`\`



قيم الاقتران في تلك النقاط هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mrow><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">Δ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mrow><mrow><mn dir="ltr">١٠</mn><mi mathvariant="normal">Δ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، ...، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>+</mo><mrow><mrow><mn dir="ltr">٢٥</mn><mi mathvariant="normal">Δ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`. نجمعها ونضرب في العرض.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mo>=</mo><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">[</mo><mn dir="ltr">٥</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٦</mn><mo>=</mo><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">(</mo><mn dir="ltr">١٥</mn><mo>+</mo><mn dir="ltr">٧٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` ثم ننقل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٦</mn></math>\` إلى الطرف الآخر.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٥</mn><msup><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نحلل بالعددين اللذين يعطي حاصل الضرب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">٣٠٠</mn></mrow></math>\` ومجموعهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، وهما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١٥</mn></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٥</mn><msup><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></msup><mo>+</mo><mn dir="ltr">٢٠</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١٢</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نختار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>\`؛ \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mtext dir="rtl">الجذر</mtext><mo>−</mo><mfrac><mn dir="ltr">٤</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>\` سالب فلا يمثل عرض فترة.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٥</mn><mrow><mrow><mo stretchy="true" fence="true">(</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac><mo stretchy="true" fence="true">)</mo></mrow></mrow><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p011-r1
title: الكامل، الوحدة الخامسة · الصورة، ١١ · ص ١٠ · البند ١ · ٢٠٢١
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكان العنصر الخامس عشر يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow></math>\`، وكان \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٨</mn></mrow></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\`، فما قيمة كل من \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ن</mi></mrow></math>\`؟
final-answer:
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`.
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>\`.
solution:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٨</mn></mrow></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">٣</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>
\`\`\`


فرق \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٨</mn></mrow></msub></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msub></math>\` يتكون من ثلاثة عروض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mfrac><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٤</mn></mfrac><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></math>
\`\`\`



العنصر الخامس عشر هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١٤</mn></mrow></msub></math>\`؛ نطرح أربعة عشر عرضًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٤</mn></mfrac></mrow><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow></mrow></math>
\`\`\`





التجزئة المنتظمة تعني أن عروض الفترات الجزئية متساوية. عرض كل فترة يساوي طول الفترة الكلية مقسومًا على عدد أجزائها؛ وعدد نقاط التجزئة يزيد واحدًا على عدد الفترات.


نقسم الطول الكلي على العرض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٨</mn><mo>−</mo><mrow><mo stretchy="true">(</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mfrac><mo>=</mo><mn dir="ltr">٤٠</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p011-r2
title: الكامل، الوحدة الخامسة · الصورة، ١١ · ص ١٠ · البند ٢ · ٢٠٢١ دور ثانٍ
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان العنصر التاسع فيها يساوي مثلي العنصر الثالث، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>\`
solution:
العنصر التاسع هو النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٨</mn></mrow></msub></math>\`، والثالث \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msub></math>\`؛ لأن البداية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></math>\`. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` ل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow></math>\` لعرض الفترة.

التجزئة منتظمة، لذلك \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></math>\`، وقيمة النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow><mo>=</mo><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">ث</mi></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٨</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٢</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٨</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">أ</mi><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٤</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`



نعوض العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">أ</mi></mrow><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>−</mo><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">أ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p011-r3
title: الكامل، الوحدة الخامسة · الصورة، ١١ · ص ١٠ · البند ٣ · ٢٠٢١ دور ثانٍ
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` اقتراناً معرفاً ومحدداً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١٠</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢٧</mn></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></math>\`، فما قيمة المقدار \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">١٠</mn></mrow><mo stretchy="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mn dir="ltr">٠</mn></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\`؟
final-answer:
**قيمة المقدار:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٢</mn></mrow></math>\`
solution:
المعطى مجموع الأطراف اليمنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٧</mn></math>\` واليسرى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`، لتجزئة منتظمة من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢٠</mn></math>\` فترة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mn dir="ltr">٠</mn><mo>،</mo><mn dir="ltr">١٠</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\`.

عرض كل الفترات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mrow><mo stretchy="true" fence="true">(</mo><mrow><mn dir="ltr">١٠</mn><mo>−</mo><mn dir="ltr">٠</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mn dir="ltr">٢٠</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>\`. مجموع اليمين يستعمل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`...\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢٠</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`، واليسار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٠</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`...\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true" fence="true">(</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">١٩</mn></mrow></msub></mrow><mo stretchy="true" fence="true">)</mo></mrow></mrow></math>\`.

عند الطرح تلغى كل القيم الداخلية، ويتبقى عرض الفترة مضروبًا في فرق قيمتي النهاية والبداية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٧</mn><mo>−</mo><mn dir="ltr">١٦</mn><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١١</mn><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo stretchy="false">[</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`



نضرب في \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo stretchy="false">)</mo><mo>−</mo><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p011-r4
title: الكامل، الوحدة الخامسة · الصورة، ١١ · ص ١٠ · البند ٤ · ٢٠٢٢ دور أول
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>\` معرفاً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow></math>\` تجزئة رباعية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث أن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>\` عندما \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mo>*</mo></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>\`
solution:
 مجموع ريمان يجمع قيمة الاقتران عند نقطة الاختيار مضروبة في عرض فترتها.
أربع فترات منتظمة على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo stretchy="true" fence="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>،</mo><mn dir="ltr">٧</mn><mo stretchy="true" fence="true">]</mo></mrow></math>\` تعطي العرض المشترك:


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


شرط \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\` يعني اختيار الطرف الأيسر؛ نقاط الاختيار هي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>+</mo><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`


نجمع القيم ونضرب كل واحدة في العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\`. المجموع معطى ويساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٦</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">[</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">٦</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn dir="ltr">١٠</mn><mo>+</mo><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">١٦</mn><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١٦</mn><mo>+</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣٢</mn><mo>+</mo><mn dir="ltr">٨</mn><mi mathvariant="normal">ب</mi></mrow></math>
\`\`\`


نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٢</mn></math>\` من الطرفين ثم نقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٨</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٨</mn><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١٦</mn><mo>−</mo><mn dir="ltr">٣٢</mn><mo>=</mo><mo>−</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p011-r5
title: الكامل، الوحدة الخامسة · الصورة، ١١ · ص ١٠ · البند ٥ · ٢٠٢٢ دور ثانٍ
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لتكن \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٢</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">ب</mi><mo>،</mo><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان العنصر الخامس فيها يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١١</mn></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>\`
solution:
طول الفترة هو النهاية ناقص البداية: \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mrow><mo stretchy="true" fence="true">(</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">ب</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true" fence="true">)</mo></mrow><mo>−</mo><mi mathvariant="normal">ب</mi></mrow><mo>=</mo><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>\`. نقسمه على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` لنجد عرض كل فترة؛ لأن التجزئة منتظمة.

العرض يساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ب</mi></math>\` زائد واحد على اثني عشر؛ العنصر الخامس يأتي بعد أربعة عروض.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١١</mn><mo>=</mo><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mfrac><mrow><mn dir="ltr">٤</mn><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">ب</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">)</mo></mrow></mrow><mn dir="ltr">١٢</mn></mfrac></mrow></mrow></math>
\`\`\`



نضرب في ثلاثة ثم نجمع الحدود.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٣</mn><mo>=</mo><mrow><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ب</mi></mrow><mo>+</mo><mn dir="ltr">١</mn></mrow></mrow></math>
\`\`\`


نطرح واحدًا ونقسم على أربعة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٨</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p011-r6
title: الكامل، الوحدة الخامسة · الصورة، ١١ · ص ١٠ · البند ٦ · ٢٠٢٢ دور ثانٍ
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><msup><mtext dir="rtl">هـ</mtext><mrow><mi mathvariant="normal">س</mi></mrow></msup></mrow></math>\` معرفاً في الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٢</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة نفسها فجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` معتبراً \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٧</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>\`
solution:
المطلوب مجموع ريمان.

مجموع ريمان يجمع قيمة الاقتران عند نقطة الاختيار مضروبةً في عرض فترتها.
نحسب عرض كل فترة بطرح طرفها الأيسر من طرفها الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">١</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



نختار الطرف الأيمن لكل فترة لأن الشرط هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></mrow></math>\`.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">١</mn><mo fence="true">)</mo></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mi mathvariant="normal">هـ</mi><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></msup><mo>+</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



نضرب كل قيمة في عرض فترتها، ثم نجمع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">١</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٣</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>+</mo><mi mathvariant="normal">هـ</mi><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mi mathvariant="normal">هـ</mi><mo>+</mo><mn dir="ltr">٧</mn><mo>+</mo><msup><mi mathvariant="normal">هـ</mi><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p012-r1
title: الكامل، الوحدة الخامسة · الصورة، ١٢ · ص ١١ · البند ١ · ٢٠٢١ دور ثالث
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٨</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` بحيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>\` لجميع قيم \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ر</mi></mrow></math>\` الممكنة، فما عدد عناصر التجزئة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` علماً بأن العنصر الخامس فيها يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn></mrow></math>\`؟
final-answer:
**عدد عناصر التجزئة: ٢٥ عنصرًا.**
solution:
المعطيات التي سنستخدمها:

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub><mo>−</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn dir="ltr">١</mn></mrow><mrow><mn dir="ltr">٤</mn></mrow></mfrac></mrow></math>
\`\`\`

العنصر الخامس يبعد أربعة أرباع عن البداية.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٣</mn><mo>−</mo><mrow><mn dir="ltr">٤</mn><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





نقسم طول الفترة على العرض ثم نضيف واحدًا.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mrow><mfrac><mrow><mn dir="ltr">٨</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٤</mn></mfrac></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo>=</mo><mn dir="ltr">٢٥</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p012-r2
title: الكامل، الوحدة الخامسة · الصورة، ١٢ · ص ١١ · البند ٢ · ٢٠٢٣ دور ثالث
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان عدد عناصر التجزئة المنتظمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` هو \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٣</mn></mrow></math>\` وكانت الفترة الجزئية السادسة هي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mfrac><mrow><mn dir="ltr">١٧</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>،</mo><mfrac><mrow><mn dir="ltr">٢٠</mn></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، جد كلاً من الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`.
final-answer:
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>\`.
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">١٩</mn></mrow></math>\`.
solution:
الفترة السادسة تحدد عرض الواحدة بفرق طرفيها.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δس</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">٢٠</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></math>
\`\`\`



بدايتها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msub></math>\`؛ نطرح خمسة عروض للوصول إلى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mfrac><mn dir="ltr">١٧</mn><mn dir="ltr">٢</mn></mfrac><mo>−</mo><mrow><mn dir="ltr">٥</mn><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





ثلاثة عشر عنصرًا تعني اثنتي عشرة فترة.

\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mrow><mn dir="ltr">١</mn><mo>+</mo><mrow><mn dir="ltr">١٢</mn><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٢</mn></mfrac></mrow></mrow><mo>=</mo><mn dir="ltr">١٩</mn></mrow></math>
\`\`\`
:::


:::exam-question
id: math-kamel-u5-p012-r3
title: الكامل، الوحدة الخامسة · الصورة، ١٢ · ص ١١ · البند ٣ · ٢٠٢٤ دور ثانٍ
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٢١</mn></mrow></msub></mrow></math>\` تجزئة منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` وكان العنصر الخامس عشر فيها يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣٢</mn></mrow></math>\` وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">١٤</mn></mrow></msub></mrow></math>\` تجزئة منتظمة لنفس الفترة وكان العنصر الثامن فيها يساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٥</mn></mrow></math>\`، فما قيمة كل من الثابتين \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mi mathvariant="normal">ب</mi></mrow></math>\`؟
final-answer:
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\`.
- \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mn dir="ltr">٤٦</mn></mrow></math>\`.
solution:
التجزئة المنتظمة تقسم الفترة إلى أجزاء متساوية. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\` للطرف الأول و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ل</mi></math>\` لطول الفترة الكلية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ب</mi><mo>−</mo><mi mathvariant="normal">أ</mi></mrow></math>\`.
العنصر الخامس عشر يأتي بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٤</mn></math>\` عرضًا في التجزئة ذات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢١</mn></math>\` فترة. والعنصر الثامن يأتي بعد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٧</mn></math>\` عروض في التجزئة ذات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٤</mn></math>\` فترة.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٣٢</mn><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mn dir="ltr">١٤</mn><mn dir="ltr">٢١</mn></mfrac><mi mathvariant="normal">م</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٢٥</mn><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mn dir="ltr">٧</mn><mn dir="ltr">١٤</mn></mfrac><mi mathvariant="normal">م</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mi mathvariant="normal">م</mi></mrow></math>
\`\`\`


نطرح الثانية من الأولى؛ يختفي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">أ</mi></math>\`، و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac></mrow><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧</mn><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٣</mn></mfrac><mo>−</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٢</mn></mfrac><mo fence="true">)</mo></mrow><mi mathvariant="normal">م</mi><mo>=</mo><mfrac><mi mathvariant="normal">م</mi><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٤٢</mn></mrow></math>
\`\`\`


نعوض في المعادلة الثانية ثم نحسب النهاية.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٢٥</mn><mo>−</mo><mfrac><mn dir="ltr">٤٢</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢٥</mn><mo>−</mo><mn dir="ltr">٢١</mn><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ب</mi><mo>=</mo><mi mathvariant="normal">أ</mi><mo>+</mo><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٤</mn><mo>+</mo><mn dir="ltr">٤٢</mn><mo>=</mo><mn dir="ltr">٤٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p012-r4
title: الكامل، الوحدة الخامسة · الصورة، ١٢ · ص ١١ · البند ٤ · ٢٠٢٤ دور ثالث
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٢</mn></mrow></msup><mo>−</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow></math>\` تجزئة رباعية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">٢</mn><mo>،</mo><mn dir="ltr">٦</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، احسب \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٦</mn></mrow></math>\`
solution:
المطلوب مجموع ريمان.

مجموع ريمان يجمع قيمة الاقتران عند نقطة الاختيار مضروبةً في عرض فترتها.
نحسب عرض كل فترة بطرح طرفها الأيسر من طرفها الأيمن.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١</mn></msub><mo>=</mo><mn dir="ltr">٠</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٣</mn></msub><mo>=</mo><mn dir="ltr">٤</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi mathvariant="normal">س</mi><mn dir="ltr">٤</mn></msub><mo>=</mo><mn dir="ltr">٦</mn><mo>−</mo><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`



نختار الطرف الأيسر لكل فترة لأن الشرط هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msubsup><mi mathvariant="normal">س</mi><mi mathvariant="normal">ر</mi><mo>∗</mo></msubsup></mrow><mo>=</mo><mrow><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></mrow></math>\`.




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٨</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٢</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٠</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٢</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٤</mn><mrow><mo fence="true">(</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١٦</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">١٦</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`






\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٤</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



نضرب كل قيمة في عرض فترتها، ثم نجمع.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">١٢</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٤</mn><mo fence="true">)</mo></mrow><mo>+</mo><mn dir="ltr">٢</mn><mo>⋅</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٢٤</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mo>−</mo><mn dir="ltr">٨</mn><mo fence="true">)</mo></mrow><mo>+</mo><mrow><mo fence="true">(</mo><mn dir="ltr">٠</mn><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">١٦</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p012-r5
title: الكامل، الوحدة الخامسة · الصورة، ١٢ · ص ١١ · البند ٥ · خارجي
question: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mrow><mo stretchy="true">{</mo><mtable><mtr><mtd><mrow><mrow><mo stretchy="true">|</mo><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">س</mi><mo>−</mo><mn dir="ltr">٣</mn></mrow><mo stretchy="true">|</mo></mrow></mrow></mtd><mtd><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>&lt;</mo><mn dir="ltr">٤</mn></mrow></mtd></mtr><mtr><mtd><mrow><mrow><mo stretchy="true">[</mo><mrow><mfrac><mrow><mi mathvariant="normal">س</mi></mrow><mrow><mn dir="ltr">٢</mn></mrow></mfrac><mo>+</mo><mn dir="ltr">١</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></mtd><mtd><mrow><mn dir="ltr">٤</mn><mo>≤</mo><mi mathvariant="normal">س</mi><mo>≤</mo><mn dir="ltr">٧</mn></mrow></mtd></mtr></mtable></mrow></mrow></math>\` معرفاً على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow></math>\` تجزئة رباعية منتظمة للفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، أجد \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٤</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow></mrow></math>\` معتبراً \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi><mo>−</mo><mn dir="ltr">١</mn></mrow></msub></mrow></math>\`.
final-answer:
**مجموع ريمان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٢٤</mn></mrow></math>\`
solution:
 مجموع ريمان هو مجموع قيمة الاقتران عند نقطة الاختيار مضروبة في العرض.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow><mn dir="ltr">٤</mn></mfrac><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`


نختار الطرف الأيسر كما يشترط السؤال؛ نقاط الاختيار \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`. نحدد الفرع الذي تنتمي إليه كل نقطة قبل التعويض.
النقاط الثلاث الأولى أصغر من \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٤</mn></math>\`، فنستخدم القيمة المطلقة، وهي تعطي مقدارًا غير سالب.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">∣</mi><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mo>−</mo><mn dir="ltr">٥</mn><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">٥</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">∣</mi><mn dir="ltr">٢</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mi mathvariant="normal">∣</mi><mn dir="ltr">٦</mn><mo>−</mo><mn dir="ltr">٣</mn><mi mathvariant="normal">∣</mi><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


النقطة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` في الفرع الثاني. رمز أكبر عدد صحيح يعني أكبر عدد صحيح لا يتجاوز المدخل؛ لذلك أكبر عدد صحيح لا يتجاوز \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣٫٥</mn></math>\` هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ق</mi><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>=</mo><mrow><mo fence="true">⌊</mo><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>+</mo><mn dir="ltr">١</mn><mo fence="true">⌋</mo></mrow><mo>=</mo><mo stretchy="false">⌊</mo><mn dir="ltr">٣٫٥</mn><mo stretchy="false">⌋</mo><mo>=</mo><mn dir="ltr">٣</mn></mrow></math>
\`\`\`


نضرب القيم في العرض \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` ونجمع.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">م</mi><mo>=</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٢</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">١٠</mn><mo>+</mo><mn dir="ltr">٢</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٢٤</mn></mrow></math>
\`\`\`


:::


:::exam-question
id: math-kamel-u5-p068-r1
title: الكامل، الوحدة الخامسة · الصورة، ٦٨ · ص ٦٧ · البند ١ · أسئلة للمهتمين · الدرس الأول · ١
question: أسئلة للمهتمين: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان الاقتران \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mrow><mo stretchy="true">(</mo><mrow><mi mathvariant="normal">س</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">س</mi></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">س</mi><mo>∈</mo><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msubsup><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow><mrow><mo>∗</mo></mrow></msubsup><mo>=</mo><msub><mi mathvariant="normal">س</mi><mrow><mi mathvariant="normal">ر</mi></mrow></msub></mrow></math>\`، وكانت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub></mrow></math>\` تجزئة منتظمة في \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mi mathvariant="normal">أ</mi><mo>،</mo><mn dir="ltr">٥</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\`، حيث \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">م</mi><mrow><mo stretchy="true">(</mo><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mn dir="ltr">٣</mn></mrow></msub><mo>،</mo><mi mathvariant="normal">ق</mi></mrow><mo stretchy="true">)</mo></mrow><mo>=</mo><mn dir="ltr">٧٢</mn></mrow></math>\`، فما قيمة الثابت \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi></mrow></math>\`؟
final-answer:
**القيمتان الممكنتان:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>\`.
solution:
المطلوب بدايتا الفترة الممكنتان. نكتب \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow></math>\` لعرض الفترة الموجب.

النهاية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`، وعدد الفترات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`، لذلك الأطراف اليمنى \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mrow><mrow><mn dir="ltr">٢</mn><mi mathvariant="normal">Δ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٥</mn><mo>−</mo><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi></mrow></mrow></math>\`، \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\`؛ وقيمة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ق</mi><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>\` أمثال كل طرف.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧٢</mn><mo>=</mo><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">[</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٢</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo>−</mo><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">)</mo><mo>+</mo><mn dir="ltr">٤</mn><mo stretchy="false">(</mo><mn dir="ltr">٥</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٧٢</mn><mo>=</mo><mn dir="ltr">٤</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">(</mo><mn dir="ltr">١٥</mn><mo>−</mo><mn dir="ltr">٣</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٦٠</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">١٢</mn><msup><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></msup></mrow></math>
\`\`\`



ننقل الحدود ونقسم على \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mn dir="ltr">٢</mn></msup><mo>−</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>+</mo><mn dir="ltr">٦</mn><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mn dir="ltr">٠</mn></mrow></math>
\`\`\`



كلا الجذرين \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٢</mn></math>\` و \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\` موجب، فيصلحان عرضين. نحسب البداية \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mn dir="ltr">٥</mn><mo>−</mo><mrow><mrow><mn dir="ltr">٣</mn><mi mathvariant="normal">Δ</mi></mrow><mi mathvariant="normal">س</mi></mrow></mrow></mrow></math>\` لكل واحد.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn><mo>:</mo><mspace width="1em"/><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٢</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٣</mn><mo>:</mo><mspace width="1em"/><mi mathvariant="normal">أ</mi><mo>=</mo><mn dir="ltr">٥</mn><mo>−</mo><mn dir="ltr">٣</mn><mo stretchy="false">(</mo><mn dir="ltr">٣</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`



إذن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow></mrow></math>\` أو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">أ</mi><mo>=</mo><mrow><mo>−</mo><mn dir="ltr">٤</mn></mrow></mrow></math>\`.
:::


:::exam-question
id: math-kamel-u5-p068-r2
title: الكامل، الوحدة الخامسة · الصورة، ٦٨ · ص ٦٧ · البند ٢ · أسئلة للمهتمين · الدرس الأول · ٢
question: أسئلة للمهتمين: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت النسبة بين قيمتي العنصر الخامس إلى العنصر السادس في التجزئة المنتظمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><msub><mi mathvariant="normal">σ</mi><mrow><mi mathvariant="normal">ن</mi></mrow></msub></mrow></math>\` على الفترة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><mo stretchy="true">[</mo><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>،</mo><mn dir="ltr">٧</mn></mrow><mo stretchy="true">]</mo></mrow></mrow></math>\` تساوي \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٣</mn><mo>:</mo><mn dir="ltr">٥</mn></mrow></math>\`، فما قيمة \`mathml:<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi></mrow></math>\`؟
final-answer:
**الإجابة:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>\`
solution:
نكتب \`mathml: <math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>\` لعرض الفترة. العنصر الخامس هو \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٤</mn></mrow></msub></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">د</mi></mrow></mrow></mrow></math>\`، والسادس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mrow><msub><mi mathvariant="normal">س</mi><mrow><mn dir="ltr">٥</mn></mrow></msub></mrow><mo>=</mo><mrow><mrow><mo>−</mo><mn dir="ltr">١</mn></mrow><mo>+</mo><mrow><mn dir="ltr">٥</mn><mi mathvariant="normal">د</mi></mrow></mrow></mrow></math>\`.
النسبة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٣</mn></math>\`:\`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` تعني أن قسمة قيمة الخامس على السادس تساوي \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac></math>\`، مع عدم صفر المقام.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٤</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow></mrow><mrow><mo>−</mo><mn dir="ltr">١</mn><mo>+</mo><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow></mrow></mfrac><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`


نضرب تبادليًا، ثم نطرح \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">١٥</mn><mi mathvariant="normal">د</mi></mrow></math>\` ونضيف \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">٥</mn></math>\` للطرفين.


\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn dir="ltr">٥</mn><mo>+</mo><mn dir="ltr">٢٠</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mo>−</mo><mn dir="ltr">٣</mn><mo>+</mo><mn dir="ltr">١٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn dir="ltr">٥</mn><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mn dir="ltr">٢</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mo>Δ</mo><mi mathvariant="normal">س</mi></mrow><mo>=</mo><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٥</mn></mfrac></mrow></math>
\`\`\`


عدد الفترات يساوي طول الفترة الكلية مقسومًا على العرض.


\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">٧</mn><mo>−</mo><mrow><mo stretchy="false">(</mo><mo>−</mo><mn dir="ltr">١</mn><mo stretchy="false">)</mo></mrow></mrow><mrow><mfrac><mn dir="ltr">٢</mn><mn dir="ltr">٥</mn></mfrac></mrow></mfrac><mo>=</mo><mn dir="ltr">٨</mn><mfrac><mn dir="ltr">٥</mn><mn dir="ltr">٢</mn></mfrac><mo>=</mo><mn dir="ltr">٢٠</mn></mrow></math>
\`\`\`


عند هذا العرض قيمة العنصر السادس \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١</mn></math>\`، فيكون المقام غير صفري كما لزم.
:::


:::exam-question
id: math-kamel-u5-p068-r3
title: الكامل، الوحدة الخامسة · الصورة، ٦٨ · ص ٦٧ · البند ٣ · أسئلة للمهتمين · الدرس الأول · ٣
question: أسئلة للمهتمين: التجزئة ومجموع ريمان
reference: السؤال، الصورة، · الإجابة المطبوعة · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لتكن \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` عدداً صحيحاً موجباً، ولتكن التجزئة المنتظمة:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mrow><mo fence="true">{</mo><mn dir="ltr">٢</mn><mo separator="true">,</mo><mtext> </mtext><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac><mo separator="true">,</mo><mtext> </mtext><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">٦</mn><mi mathvariant="normal">ن</mi></mfrac><mo separator="true">,</mo><mo>…</mo><mo separator="true">,</mo><mn dir="ltr">١٤</mn><mo fence="true">}</mo></mrow><mi mathvariant="normal">.</mi></mrow></math>
\`\`\`



أوجد عدد نقاط σ بدلالة \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\`، ثم اكتب الفترة الجزئية الثانية عشرة عندما \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\`.
final-answer:
- **عدد النقاط:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\`.
- **الفترة الجزئية الثانية عشرة عند ن = ١٨:** \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mo>[</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٦</mn></mfrac><mo>،</mo><mn dir="ltr">٤</mn><mo>]</mo></mrow></math>\`.
solution:
الفرق بين كل نقطتين متتاليتين يساوي طول الفترة الجزئية.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></math>
\`\`\`



عدد الفترات يساوي طول الفترة الكلية مقسوماً على طول الفترة الجزئية.



\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mfrac><mrow><mn dir="ltr">١٤</mn><mo>−</mo><mn dir="ltr">٢</mn></mrow><mrow><mfrac><mn dir="ltr">٣</mn><mi mathvariant="normal">ن</mi></mfrac></mrow></mfrac><mo>=</mo><mn dir="ltr">١٢</mn><mfrac><mi mathvariant="normal">ن</mi><mn dir="ltr">٣</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi></mrow></math>
\`\`\`



كل تجزئة ذات \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mi mathvariant="normal">ن</mi></math>\` فترات لها \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>\` نقطة، لأننا نعدّ طرفي الفترة أيضاً.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext dir="rtl">عدد النقاط</mtext><mo>=</mo><mn dir="ltr">٤</mn><mi mathvariant="normal">ن</mi><mo>+</mo><mn dir="ltr">١</mn></mrow></math>
\`\`\`



عند \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mrow><mi mathvariant="normal">ن</mi><mo>=</mo><mn dir="ltr">١٨</mn></mrow></math>\` نحصل على:



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">س</mi><mo>=</mo><mfrac><mn dir="ltr">٣</mn><mn dir="ltr">١٨</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">١</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`



الفترة الجزئية رقم \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\` تبدأ عند النقطة ذات الدليل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١١</mn></math>\` وتنتهي عند ذات الدليل \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl"><mn dir="ltr">١٢</mn></math>\`.



\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١١</mn></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١١</mn><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mfrac><mn dir="ltr">٢٣</mn><mn dir="ltr">٦</mn></mfrac></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="rtl" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١٢</mn></msub><mo>=</mo><mn dir="ltr">٢</mn><mo>+</mo><mfrac><mn dir="ltr">١٢</mn><mn dir="ltr">٦</mn></mfrac><mo>=</mo><mn dir="ltr">٤</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math xmlns="http://www.w3.org/1998/Math/MathML" dir="rtl" display="block"><mrow><menclose notation="box"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="false"><mstyle scriptlevel="0" displaystyle="true"><mrow><mrow><mo stretchy="false">[</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١١</mn></msub><mo separator="true">,</mo><msub><mi mathvariant="normal">س</mi><mn dir="ltr">١٢</mn></msub><mo stretchy="false">]</mo></mrow><mo>=</mo><mrow><mrow><mo stretchy="true" fence="true">[</mo><mfrac><mn dir="ltr">٢٣</mn><mrow><mrow><mn dir="ltr">٦</mn><mo separator="true">,</mo></mrow><mn dir="ltr">٤</mn></mrow></mfrac><mo stretchy="true" fence="true">]</mo></mrow></mrow></mrow></mstyle></mstyle></mstyle></menclose></mrow></math>
\`\`\`




:::`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "التجزئة ومجموع ريمان",
  "summary": "أسئلة من الكتاب والكامل بإجابات موثقة من المصادر.",
  "outcome": "مراجعة التجزئة ومجموع ريمان من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "34 أسئلة",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
