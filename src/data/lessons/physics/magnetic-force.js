import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `
:::mcq
id: physics-book-2024-p063-review-1-1
title: أسئلة الفصل — س1/1 — الكتاب، صفحة PDF 63
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 63، أسئلة الفصل — س1/1
question: تم تسريع جسيمات مشحونة لها الكتلة \\(m\\) والشحنة نفسها بسرعات مختلفة ثم أدخلت عموديًا في مجال شدته \\(B\\). أي رسم يمثل العلاقة بين نصف قطر المسار \\(r\\) والسرعة \\(v\\)؟
- [ ] option-1 | أ
- [ ] option-2 | ب
- [ ] option-3 | ج
- [x] option-4 | د
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p063-review-1-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



عندما تتحرك الشحنة عموديًا على مجال منتظم، تكون القوة المغناطيسية عمودية على سرعتها فتقوم بدور القوة المركزية. تغيّر اتجاه الحركة ولا تبذل شغلًا، فيبقى مقدار السرعة ثابتًا.

القوة المركزية هي القوة اللازمة لإبقاء الجسم في مسار دائري، واتجاهها نحو المركز ومقدارها \\(mv^{2}/r\\). هنا تؤدي القوة المغناطيسية هذا الدور، فنساويهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب في \\(r\\)، ثم نقسم على \\(|q|vB\\) غير الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(v\\) المشتركة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac><mi>v</mi></mrow></math>
\`\`\`



الكتلة والشحنة والمجال ثابتة، لذلك نصف القطر يتناسب طرديًا مع السرعة؛ نختار الخط المستقيم المار بالأصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>∝</mo><mi>v</mi></mrow></math>
\`\`\`



الرسم د، الخيار الرابع.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/1.](assets/lessons/physics/source-crops/physics-book-2024-p063-review-1-1-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p063-review-1-2
title: أسئلة الفصل — س1/2 — الكتاب، صفحة PDF 63
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 63، أسئلة الفصل — س1/2
question: يبين الشكل سلكًا فلزيًا طوله \\(30\\,\\mathrm{cm}\\)، موضوعًا في مجال منتظم شدته \\(0.25\\,\\mathrm{T}\\) نحو الناظر، ويمر فيه تيار \\(15\\,\\mathrm{A}\\). ما مقدار واتجاه القوة؟
- [x] option-1 | \\(0.75\\,\\mathrm{N}\\) باتجاه \\(-x\\)
- [ ] option-2 | \\(0.75\\,\\mathrm{N}\\) باتجاه \\(+x\\)
- [ ] option-3 | \\(1.1\\,\\mathrm{N}\\) باتجاه \\(-x\\)
- [ ] option-4 | \\(1.1\\,\\mathrm{N}\\) باتجاه \\(+x\\)
explanation:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p063-review-1-2-figure-01.webp)

السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



القوة تؤثر في الجزء الموجود داخل المجال فقط، وطوله في الرسم عشرون سنتيمترًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>20</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



السلك عمودي على المجال، لذلك نستخدم جيب الزاوية القائم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mi>I</mi><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>15</mn><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.25</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>0.75</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



لتحديد اتجاه القوة، نوجه أصابع اليد اليمنى مع التيار ثم نحو المجال؛ يعطي الإبهام اتجاه القوة. التيار لأسفل والمجال نحو الناظر، فتكون القوة إلى اليسار، أي \\(-X\\)، الخيار الأول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/2.](assets/lessons/physics/source-crops/physics-book-2024-p063-review-1-2-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p063-review-1-3
title: أسئلة الفصل — س1/3 — الكتاب، صفحة PDF 63
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 63، أسئلة الفصل — س1/3
question: يدخل جسم مشحون مجالًا مغناطيسيًا عموديًا عليه بسرعة \\(v\\)، ثم يدخل جسم مماثل له في الكتلة والشحنة بسرعة \\(2v\\). إذا كان تردد الأول \\(f\\)، فما تردد الثاني؟
- [x] option-1 | \\(f\\)
- [ ] option-2 | \\(2f\\)
- [ ] option-3 | \\(4f\\)
- [ ] option-4 | \\(0.5f\\)
explanation:
في المجال المنتظم، القوة المغناطيسية العمودية على السرعة تغير اتجاهها وتحفظ مقدارها. تؤدي دور القوة المركزية اللازمة للحركة الدائرية، لذلك نساوي مقدارها بالقوة المركزية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi mathvariant="normal">/</mi><mi>r</mi></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(|q|vB\\)، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mi>m</mi><mi>v</mi><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



زمن الدورة هو الزمن اللازم لقطع محيط المسار الدائري بسرعة ثابتة.

نحسب زمن الدورة من محيط المسار والسرعة، ثم نعوض بنصف قطر المسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow><mi>v</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>v</mi></mfrac><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



نختصر عامل السرعة \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



التردد هو عدد الدورات في الثانية، ويساوي مقلوب زمن الدورة. لذلك لا يعتمد هنا على السرعة؛ الجسمان لهما الكتلة والشحنة نفسيهما وفي المجال نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>f</mi><mn>2</mn></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>f</mi><mn>2</mn></msub><mo>=</mo><mi>f</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p064-review-1-5
title: أسئلة الفصل — س1/5 — الكتاب، صفحة PDF 64
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س1/5
question: ما نوع الجسيمات التي يتم الحصول عليها من منتقي السرعات؟
- [ ] option-1 | غير مشحونة لها نفس السرعة
- [x] option-2 | مشحونة لها نفس السرعة
- [ ] option-3 | غير مشحونة مختلفة في السرعة
- [ ] option-4 | مشحونة مختلفة في السرعة
explanation:
**الإجابة:** مشحونة لها نفس السرعة

**الشاهد من الكتاب:**

> يتبين من اسم هذا الجهاز أنه مرشح للسرعة، حيث يمكن باستخدامه التحكم في اختيار حزمة من الجسيمات المشحونة ذات سرعة محددة.

**المصدر:** صفحة \\(60\\) من الكتاب.



hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p064-review-1-6
title: أسئلة الفصل — س1/6 — الكتاب، صفحة PDF 64
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س1/6
question: القوة المتبادلة بين سلكين لا نهائيين متوازيين يحملان تيارًا تساوي \\(100\\,\\mathrm{N}\\). كم تصبح عند مضاعفة البعد بينهما؟
- [ ] option-1 | \\(400\\)
- [ ] option-2 | \\(200\\)
- [x] option-3 | \\(50\\)
- [ ] option-4 | \\(25\\)
explanation:
للسلكين الطويلين القوة لكل وحدة طول تساوي \\(\\mu _{0}I_{1}I_{2}/(2\\pi d)\\)، حيث \\(d\\) المسافة بينهما. عند ثبات التيارين والطول تتناسب القوة عكسيًا مع \\(d\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mn>2</mn></msub><msub><mi>F</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>d</mi><mn>1</mn></msub><msub><mi>d</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`



المسافة الجديدة ضعف الأصلية؛ نعوض بها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>=</mo><mn>100</mn><mo>×</mo><mfrac><mi>d</mi><mrow><mn>2</mn><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>100</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mn>2</mn></msub><mo>=</mo><mn>50</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-book-2024-p064-review-3-1
title: أسئلة الفصل — س3 — فرع 1 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(3\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س3 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك مستقيم طويل جدًا يمر فيه تيار \\(4\\,\\mathrm{A}\\)، غمر في مجال منتظم شدته \\(5\\times10^{-5}\\,\\mathrm{T}\\) باتجاه الناظر. النقطة \\(a\\) تبعد \\(2\\,\\mathrm{cm}\\) فوق السلك كما في الشكل. احسب:

أ- القوة على جزء طوله \\(1\\,\\mathrm{m}\\) من السلك واتجاهها.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p064-review-3-1-figure-01.webp)

final-answer:
**القوة:** \\(2\\times10^{-4}\\,\\mathrm{N}\\) **إلى أعلى**.
solution:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p064-review-3-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



السلك عمودي على المجال الخارجي؛ نحسب القوة على الطول المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



لتحديد اتجاه القوة نوجه أصابع اليد اليمنى مع التيار ثم نحو المجال؛ يشير الإبهام إلى القوة. التيار لليسار والمجال للخارج، فتكون القوة إلى أعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p064-review-3-2
title: أسئلة الفصل — س3 — فرع 2 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(3\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س3 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك مستقيم طويل جدًا يمر فيه تيار \\(4\\,\\mathrm{A}\\)، غمر في مجال منتظم شدته \\(5\\times10^{-5}\\,\\mathrm{T}\\) باتجاه الناظر. النقطة \\(a\\) تبعد \\(2\\,\\mathrm{cm}\\) فوق السلك كما في الشكل. احسب:

ب- شدة المجال الكلي في النقطة \\(a\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p064-review-3-1-figure-01.webp)

final-answer:
**المجال الكلي عند \\(a\\):** \\(10^{-5}\\,\\mathrm{T}\\) **نحو الناظر** \\((+Z)\\).
solution:
مجال السلك الطويل عند بعد عمودي \\(r\\) هو \\(B=\\mu _{0}I/(2\\pi r)\\)، أي \\(2\\times 10^{-7} I/r\\) في الهواء؛ نحول السنتيمترات إلى أمتار قبل التعويض.

نحوّل البعد إلى متر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.02</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يعطي اتجاه المجال. التيار لليسار فيكون مجاله عند \\(a\\) فوقه إلى داخل الصفحة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p064-review-3-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>4</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال الخارجي للخارج وأكبر مقدارًا؛ نطرح المجالين المتعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>−</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mi>a</mi></msub><mo>∥</mo><mo>+</mo><mi>Z</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p064-review-3-3
title: أسئلة الفصل — س3 — فرع 3 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(3\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س3 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك مستقيم طويل جدًا يمر فيه تيار \\(4\\,\\mathrm{A}\\)، غمر في مجال منتظم شدته \\(5\\times10^{-5}\\,\\mathrm{T}\\) باتجاه الناظر. النقطة \\(a\\) تبعد \\(2\\,\\mathrm{cm}\\) فوق السلك كما في الشكل. احسب:

ج- القوة في إلكترون يتحرك بسرعة \\(2\\times10^5\\,\\mathrm{m/s}\\) عند \\(a\\) بالاتجاه السيني الموجب.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3 — فرع 3.](assets/lessons/physics/source-crops/physics-book-2024-p064-review-3-1-figure-01.webp)

final-answer:
**القوة على الإلكترون:** \\(3.2\\times10^{-19}\\,\\mathrm{N}\\) **إلى أعلى** \\((+Y)\\).
solution:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p064-review-3-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نستخدم قانون مجال السلك \\(B=\\mu _{0}I/(2\\pi r)\\)، ونحول \\(2\\,\\mathrm{cm}\\) إلى \\(0\\)٫\\(02\\,\\mathrm{m}\\). نوجه إبهام اليد اليمنى مع تيار السلك، فالتفاف الأصابع يعطي مجاله للداخل عند \\(a\\) فوقه؛ والخارجي للخارج. نستخدم المجال الكلي عند النقطة، لأنه هو الذي يؤثر في الإلكترون.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>4</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



شحنة الإلكترون سالبة ومقدارها \\(e=1\\)٫\\(6\\times 10^{-19}\\,\\mathrm{C}\\). نحسب مقدار القوة لأن السرعة عمودية على المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mi>e</mi><mi>v</mi><msub><mi>B</mi><mi>a</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



لاتجاه القوة نوجه أصابع اليد اليمنى مع السرعة ثم نثنيها نحو المجال؛ يعطي الإبهام القوة لشحنة موجبة. السرعة نحو اليمين والمجال للخارج يعطيان أسفلًا للشحنة الموجبة؛ نعكس الاتجاه لأن الإلكترون سالب فتكون القوة لأعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>∥</mo><mo>−</mo><mi>Y</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>e</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>e</mi></msub><mo>∥</mo><mo>+</mo><mi>Y</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p064-review-4-1
title: أسئلة الفصل — س4 — فرع 1 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(4\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س4 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
النقطتان \\(a\\),\\(b\\) تمثلان مقطعي موصلين طويلين جدًا عموديين على الورقة، تيار كل منهما \\(5\\,\\mathrm{A}\\) باتجاهين متعاكسين. \\(c\\) تبعد \\(8\\,\\mathrm{cm}\\) عن \\(a\\) و\\(6\\,\\mathrm{cm}\\) عن \\(b\\)، والمسافة \\(ab\\) تساوي \\(10\\,\\mathrm{cm}\\). احسب:

أ- شدة المجال الكلي عند \\(c\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س4 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p064-review-4-1-figure-01.webp)

final-answer:
**شدة المجال الكلي:** \\(2.083\\times10^{-5}\\,\\mathrm{T}\\) تقريبًا.
solution:
مجال السلك الطويل عند بعد عمودي \\(r\\) هو \\(B=\\mu _{0}I/(2\\pi r)\\)، أي \\(2\\times 10^{-7} I/r\\) في الهواء؛ نحول السنتيمترات إلى أمتار قبل التعويض.

نقسم أطوال السنتيمتر على \\(100\\) لتحويلها إلى المتر: \\(6\\,\\mathrm{cm}=0.06\\,\\mathrm{m}\\)،\\(8\\,\\mathrm{cm}=0.08\\,\\mathrm{m}\\)،\\(10\\,\\mathrm{cm}=0.10\\,\\mathrm{m}\\). المثلث قائم عند \\(c\\) لأن مربع طول القاعدة يساوي مجموع مربعي الضلعين، وفق عكس قاعدة فيثاغورس.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p064-review-4-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>0.06</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0.08</mn><mn>2</mn></msup><mo>=</mo><msup><mn>0.10</mn><mn>2</mn></msup></mrow></math>
\`\`\`



نحسب مجالي السلكين باستعمال المسافتين العموديتين بالمتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>5</mn><mn>0.08</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>1.25</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>5</mn><mn>0.06</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>≈</mo><mn>1.667</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



قاعدة اليد اليمنى تحدد اتجاه المجال: الإبهام مع التيار، والتفاف الأصابع حول السلك يعطي المجال. عند \\(c\\) يكون مجال كل سلك عمودياً على خط الوصل بسلكه؛ ولأن خطي \\(ca\\) و\\(cb\\) متعامدان، يتعامد المجالان أيضاً.

لجمع متجهين متعامدين نستخدم فيثاغورس؛ مقدار المحصلة هو الجذر التربيعي لمجموع مربعيهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><msubsup><mi>B</mi><mi>a</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mi>b</mi><mn>2</mn></msubsup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><msup><mn>1.25</mn><mn>2</mn></msup><mo>+</mo><msup><mn>1.667</mn><mn>2</mn></msup></mrow></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>≈</mo><mn>2.083</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p064-review-4-2
title: أسئلة الفصل — س4 — فرع 2 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(4\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س4 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
النقطتان \\(a\\),\\(b\\) تمثلان مقطعي موصلين طويلين جدًا عموديين على الورقة، تيار كل منهما \\(5\\,\\mathrm{A}\\) باتجاهين متعاكسين. \\(c\\) تبعد \\(8\\,\\mathrm{cm}\\) عن \\(a\\) و\\(6\\,\\mathrm{cm}\\) عن \\(b\\)، والمسافة \\(ab\\) تساوي \\(10\\,\\mathrm{cm}\\). احسب:

ب- القوة التي يؤثر بها أحد الموصلين على وحدة الأطوال من الآخر.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س4 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p064-review-4-1-figure-01.webp)

final-answer:
**القوة لكل وحدة طول:** \\(5\\times10^{-5}\\,\\mathrm{N/m}\\)، وهي **قوة تنافر**.
solution:
كل سلك يولد مجالًا يؤثر بقوة على السلك الآخر. للسلكين المستقيمين الطويلين نستخدم القوة لكل وحدة طول، حيث \\(d\\) المسافة العمودية بينهما؛ التياران المتوافقان يتجاذبان والمتعاكسان يتنافران.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p064-review-4-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



نحول المسافة بين السلكين إلى المتر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>10</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نعوض التيارين والمسافة لحساب القوة لكل متر من السلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mn>5</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow><mn>0.10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



التياران متعاكسان، لذلك يدفع كل سلك الآخر بعيدًا عنه وتكون القوة تنافرًا.
:::

:::exam-question
id: physics-book-2024-p065-review-6
title: أسئلة الفصل — س6 — الكتاب، صفحة PDF 65
question: أسئلة الفصل — س\\(6\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 65، أسئلة الفصل — س6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني هوائي طويل طوله \\(2\\pi\\,\\mathrm{cm}\\) وعدد لفاته \\(25\\) بين لوحين متوازيين يبعدان \\(10\\,\\mathrm{cm}\\)، وجهداهما \\(+150\\,\\mathrm{V}\\) و\\(-150\\,\\mathrm{V}\\). تمر شحنة \\(1\\,\\mu\\mathrm{C}\\) بالنقطة \\(a\\) بسرعة \\(2\\times10^6\\,\\mathrm{m/s}\\) نحو الصادات الموجب. مقدار قوة لورنتز \\(5\\times10^{-3}\\,\\mathrm{N}\\). ما تيار الملف؟

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س6.](assets/lessons/physics/source-crops/physics-book-2024-p065-review-6-figure-01.webp)

final-answer:
**شدة تيار الملف:** \\(4\\,\\mathrm{A}\\).
solution:
البادئة ميكرو تعني \\(10^{-6}\\) من الوحدة الأساسية؛ نُبقيها صريحة عند التعويض.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p065-review-6-figure-01.webp)

مجال الملف الحلزوني الطويل عند النقطة \\(a\\) يحسب من عدد لفاته \\(N\\) وطوله \\(L\\) وتياره \\(I\\)؛ إذ يتناسب مع عدد اللفات في وحدة الطول \\(N/L\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



بين لوحين متوازيين يكون المجال الكهربائي منتظماً، ومقداره فرق الجهد بينهما مقسوماً على المسافة: \\(E=\\Delta V/d\\). نعوض فرق الجهد \\(300\\,\\mathrm{V}\\) والمسافة \\(10\\,\\mathrm{cm}=0.10\\,\\mathrm{m}\\). المجال \\(E\\) يعني القوة لكل وحدة شحنة؛ لذلك تكون القوة الكهربائية في الشحنة \\(q\\) هي \\(F_{E}=qE\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mn>150</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>150</mn><mo stretchy="false">)</mo></mrow><mn>0.10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>300</mn><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mn>3000</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>E</mi></msub><mo>=</mo><mi>q</mi><mi>E</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>E</mi></msub><mo>=</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3000</mn><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



القوة الكهربائية موازية للمجال الكهربائي الأفقي، والقوة المغناطيسية عمودية على السرعة الرأسية ومجال الملف الأفقي، فتكون إلى داخل الصفحة أو خارجها. إذن القوتان متعامدتان؛ محصلة لورنتز تحقق فيثاغورس:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>F</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>F</mi><mi>E</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>F</mi><mi>B</mi><mn>2</mn></msubsup></mrow></math>
\`\`\`



ننقل مربع القوة الكهربائية ونأخذ الجذر الموجب لأن المطلوب مقدار القوة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><msqrt><mrow><msup><mi>F</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>F</mi><mi>E</mi><mn>2</mn></msubsup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>−</mo><mo stretchy="false">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><msqrt><mrow><mn>25</mn><mo>−</mo><mn>9</mn></mrow></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mo>=</mo><msqrt><mn>16</mn></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



القوة المغناطيسية على الشحنة المتحركة هي \\(|q|vB \\sin \\theta\\). السرعة عمودية على مجال الملف، فيساوي الجيب \\(1\\)؛ نعزل \\(B\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><msub><mi>F</mi><mi>B</mi></msub><mrow><mi>q</mi><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow><mrow><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mn>0.004</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نحول طول الملف إلى المتر بقسمة السنتيمتر على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



من \\(B=\\mu _{0}NI/L\\) نضرب في \\(L\\) ونقسم على \\(\\mu _{0}N\\) لاستنتاج التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>B</mi><mi>L</mi></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>25</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p065-review-7
title: أسئلة الفصل — س7 — الكتاب، صفحة PDF 65
question: أسئلة الفصل — س\\(7\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 65، أسئلة الفصل — س7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بروتون كتلته \\(1.67\\times10^{-27}\\,\\mathrm{kg}\\) وشحنته \\(1.6\\times10^{-19}\\,\\mathrm{C}\\) يتحرك بسرعة \\(7\\times10^4\\,\\mathrm{m/s}\\) نحو السينات الموجب، في مجال كهربائي شدته \\(700\\,\\mathrm{V/m}\\) نحو الصادات الموجب. ما مقدار واتجاه المجال المغناطيسي اللازم ليواصل حركته نحو السينات الموجب؟

final-answer:
**أقل مجال مطلوب:** \\(10^{-2}\\,\\mathrm{T}\\) **نحو الناظر** \\((+Z)\\)، عموديًا على السرعة. يمكن إضافة مركبة موازية للسرعة دون تغيير القوة.
solution:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



لتحديد اتجاه القوة على البروتون الموجب، نوجه أصابع اليد اليمنى مع السرعة ثم نحو المجال؛ يشير الإبهام إلى القوة.

البروتون موجب، فقوته الكهربائية نحو الصادات الموجب؛ نحتاج قوة مغناطيسية مساوية نحو الأسفل. نبحث عن أقل مجال يحقق ذلك، فنختاره عمودياً على السرعة ليكون \\(\\sin \\theta =1\\). عند الاتزان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>E</mi><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`



نقسم الطرفين على الشحنة \\(q\\) غير الصفرية، فيتبقى \\(E=vB\\). ثم نقسم على السرعة \\(v\\) غير الصفرية لعزل \\(B\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mi>E</mi><mi>v</mi></mfrac></mrow></math>
\`\`\`



نقسم المجال الكهربائي على السرعة لإيجاد المقدار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mn>700</mn><mrow><mn>7</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mn>700</mn><mn>70000</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



سرعة البروتون إلى اليمين؛ المجال نحو الناظر يجعل القوة المغناطيسية إلى الأسفل فتتزن القوتان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`



هذا المجال عمودي على السرعة، وهو أقل مقدار يحقق الاتزان. يمكن إضافة مركبة موازية للسرعة دون أن تؤثر في القوة؛ لذلك يحدد الحل المركبة العمودية المطلوبة.
:::

:::exam-question
id: physics-tawjihi-2025-p085-q514
title: أناقش — فرع 4 — الكتاب، صفحة PDF 56
question: أناقش — فرع \\(4\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 56، أناقش — فرع 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:


دخل جسم مشحون مجالًا مغناطيسيًا منتظمًا ولم يتأثر بقوة مغناطيسية. فسر ذلك.

![الرسم الأصلي من كتاب الفيزياء — أناقش — فرع 4.](assets/lessons/physics/source-crops/physics-book-2024-p056-discuss-1-figure-01.webp)

final-answer:
**سرعة الجسم موازية للمجال أو معاكسة له**؛ أي إن الزاوية بينهما \\(0^\\circ\\) أو \\(180^\\circ\\)، فتكون القوة المغناطيسية صفرًا.
solution:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p056-discuss-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



مقدار القوة يتوقف على المركبة العمودية من السرعة؛ انعدامها يجعل القوة صفرًا.

الجسم مشحون ودخل المجال متحركاً؛ إذن الشحنة والسرعة والمجال غير صفرية. لا يبقى لانعدام القوة إلا أن تكون المركبة العمودية من السرعة صفراً، أي أن السرعة موازية للمجال أو معاكسة له.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">{</mo><msup><mn>0</mn><mo>∘</mo></msup><mo separator="true">,</mo><msup><mn>180</mn><mo>∘</mo></msup><mo stretchy="false">}</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p091-q543
title: مثال 5 — فرع 1 — الكتاب، صفحة PDF 60
question: مثال \\(5\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 60، مثال 5 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك نحاسي مستقيم كثافة كتلته الطولية \\(46.6\\,\\mathrm{g/m}\\)، موضوع أفقيًا ويمر فيه تيار \\(5\\,\\mathrm{A}\\) نحو السينات السالب. ما أقل مجال مغناطيسي يلزم لرفعه رأسيًا لأعلى؟

اتجاه المجال.

final-answer:
**نحو الناظر** \\((+Z)\\)، عموديًا على اتجاه التيار.
solution:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نريد مجالاً يولد قوة إلى أعلى لموازنة وزن السلك. أقل مقدار للمجال يتحقق عند أكبر قيمة لجيب الزاوية، وهي \\(1\\)؛ أي عندما يكون المجال عمودياً على التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi></mrow></math>
\`\`\`



نطبق قاعدة اليد اليمنى للقوة: نوجه الأصابع مع التيار ثم نحو المجال، فيعطي الإبهام اتجاه القوة. التيار إلى اليسار، ولكي يشير الإبهام إلى أعلى يجب أن يكون المجال نحو الناظر. هذا هو اتجاه المجال الأقل المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p090-q538
title: مثال 6 — فرع 1 — الكتاب، صفحة PDF 61
question: مثال \\(6\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 61، مثال 6 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل ثلاثة أسلاك مستقيمة طويلة جدًا يسري في كل منها تيار. احسب القوة المغناطيسية في وحدة الطول من السلك \\(b\\):

مقدار القوة.

![الرسم الأصلي من كتاب الفيزياء — مثال 6 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p061-example-6-1-figure-01.webp)

final-answer:
**القوة لكل وحدة طول:** \\(5\\times10^{-5}\\,\\mathrm{N/m}\\).
solution:
قوة سلك طويل على طول \\(L\\) من سلك موازٍ هي \\(F=\\mu _{0}I_{1}I_{2}L/(2\\pi d)\\). إذن القوة لكل وحدة طول هي \\(2\\times 10^{-7} I_{1}I_{2}/d\\) في الهواء. التياران المتعاكسان يتنافران؛ نحسب كل مساهمة باستقلال.

التيار في السلك \\(b\\) معاكس للتيارين الآخرين، فتؤثر عليه قوتا تنافر إلى أسفل وإلى اليسار.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p061-example-6-1-figure-01.webp)

نحوّل البعدين إلى متر بقسمتهما على \\(100\\): \\(6\\,\\mathrm{cm}=0.06\\,\\mathrm{m}\\)، و\\(8\\,\\mathrm{cm}=0.08\\,\\mathrm{m}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow><mn>0.06</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi>c</mi><mi>b</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow><mn>0.08</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi>c</mi><mi>b</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



القوتان متعامدتان، فنحسب المحصلة بفيثاغورس.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><msqrt><mrow><msup><mn>4</mn><mn>2</mn></msup><mo>+</mo><msup><mn>3</mn><mn>2</mn></msup></mrow></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::mcq
id: physics-tawjihi-2025-p081-q486
title: أسئلة الفصل — س1/4 — الكتاب، صفحة PDF 63
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 63، أسئلة الفصل — س1/4
question: مجال كهربائي \\(E\\) ومجال مغناطيسي \\(B\\) منتظمان في الاتجاه نفسه. إذا قذف بروتون في اتجاه خطوط المجالين، فأي عبارة صحيحة؟
- [ ] option-1 | يتحرك عكس المجال الكهربائي.
- [x] option-2 | يتحرك باتجاه المجال الكهربائي.
- [ ] option-3 | يتحرك في مسار دائري.
- [ ] option-4 | تقل سرعته في المقدار.
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



السرعة موازية للمجال المغناطيسي، لذلك لا توجد قوة مغناطيسية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>0</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



البروتون موجب، فتكون القوة الكهربائية في اتجاه المجال والسرعة؛ لذلك تزداد سرعته في هذا الاتجاه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>E</mi></msub><mo>=</mo><mi>q</mi><mover accent="true"><mi>E</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>a</mi><mo>⃗</mo></mover><mo>=</mo><mfrac><mrow><mi>q</mi><mover accent="true"><mi>E</mi><mo>⃗</mo></mover></mrow><mi>m</mi></mfrac></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p085-q508
title: أسئلة الفصل — س2/أ — فرع 1 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(2\\)/أ — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س2/أ — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود:

شدة المجال المغناطيسي \\(0.5\\,\\mathrm{T}\\).

final-answer:
مجال يؤثر بقوة **\\(0.5\\,\\mathrm{N}\\)** في شحنة مقدارها **\\(1\\,\\mathrm{C}\\)** تتحرك بسرعة **\\(1\\,\\mathrm{m/s}\\)** عموديًا عليه.
solution:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نربط شدة المجال بالقوة في شحنة تتحرك عموديًا عليه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><msub><mi>F</mi><mi>B</mi></msub><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi></mrow></mfrac><mspace width="1em"/><mo stretchy="false">(</mo><mi>θ</mi><mo>=</mo><msup><mn>90</mn><mo>∘</mo></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مجال نصف تسلا يؤثر بقوة نصف نيوتن في شحنة مقدارها كولوم واحد تتحرك بسرعة متر واحد لكل ثانية عموديًا عليه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p085-q505
title: أسئلة الفصل — س2/أ — فرع 2 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(2\\)/أ — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س2/أ — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود:

قوة لورنتز.

final-answer:
**قوة لورنتز:** محصلة القوتين الكهربائية والمغناطيسية المؤثرتين في جسم مشحون.
solution:
الإجابة: محصلة القوتين الكهربائية والمغناطيسية المؤثرتين في جسم مشحون.

الكتاب: قوة لورنتز، الصفحة المطبوعة \\(60\\)، صفحة \\(\\mathrm{PDF} 62\\).

> عند تعريض جسيم مشحون لكلا المجالين في آن واحد، فإن هذا الجسيم سيقع تحت تأثير القوتين الكهربائية والمغناطيسية، ومحصلة القوتين تعرف باسم قوة لورنتز




:::

:::exam-question
id: physics-tawjihi-2025-p085-q512
title: أسئلة الفصل — س2/ب — فرع 1 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(2\\)/ب — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س2/ب — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
فسر:

1- لا يبذل المجال المغناطيسي شغلًا على جسم مشحون عند قذفه عموديًا عليه.

final-answer:
لأن **القوة المغناطيسية عمودية على الإزاحة اللحظية**؛ لذلك شغلها **صفر**.
solution:
الشغل هو الجزء من تأثير القوة الذي يكون في اتجاه الإزاحة؛ يحسب بحاصل ضرب القوة والإزاحة وجيب تمام الزاوية بينهما. القوة المغناطيسية عمودية على السرعة، ولذلك عمودية على الإزاحة اللحظية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><msub><mi>F</mi><mi>B</mi></msub><mi mathvariant="normal">Δ</mi><mi>s</mi><mi>cos</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



وفق مبدأ الشغل والطاقة، الشغل الكلي يساوي تغير الطاقة الحركية. إذا كانت القوة المغناطيسية وحدها المؤثرة، فشغلها صفر؛ لذلك لا تتغير الطاقة الحركية ولا مقدار السرعة، مع تغير اتجاهها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><msub><mi>W</mi><mi>B</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mtext>constant</mtext></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p085-q511
title: أسئلة الفصل — س2/ب — فرع 2 — الكتاب، صفحة PDF 64
question: أسئلة الفصل — س\\(2\\)/ب — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 64، أسئلة الفصل — س2/ب — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
فسر:

2- عند قذف إلكترون داخل ملف حلزوني يحمل تيارًا باتجاه موازٍ لمحوره فإنه لا ينحرف.

final-answer:
لأن سرعة الإلكترون **موازية للمجال داخل الملف**، فتكون القوة المغناطيسية المؤثرة فيه **صفرًا**.
solution:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



المجال داخل الملف الحلزوني الطويل موازٍ لمحوره؛ والإلكترون قذف في اتجاه موازٍ لهذا المحور.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>∥</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`



جيب الزاوية بين السرعة والمجال يساوي صفرًا، لذلك لا تنشأ قوة مغناطيسية تغير المسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">{</mo><msup><mn>0</mn><mo>∘</mo></msup><mo separator="true">,</mo><msup><mn>180</mn><mo>∘</mo></msup><mo stretchy="false">}</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>sin</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p088-q525
title: أسئلة الفصل — س5 — الكتاب، صفحة PDF 65
question: أسئلة الفصل — س\\(5\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 65، أسئلة الفصل — س5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك \\(ab\\) طويل، وسلك \\(cd\\) كتلته \\(6\\,\\mathrm{g}\\) وطوله \\(1.5\\,\\mathrm{m}\\) موازٍ له في مستوى رأسي واحد، وقابل للانزلاق على حاملين رأسيين. تيار الدارة \\(120\\,\\mathrm{A}\\) باتجاهين متعاكسين في السلكين. على أي ارتفاع فوق \\(ab\\) يتزن \\(cd\\)؟

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5.](assets/lessons/physics/source-crops/physics-book-2024-p065-review-5-figure-01.webp)

final-answer:
**ارتفاع الاتزان:** \\(7.2\\,\\mathrm{cm}\\) فوق السلك \\(ab\\).
solution:
للسلكين المتوازيين القوة \\(F=\\mu _{0}I_{1}I_{2}L/(2\\pi r)\\)، حيث \\(r\\) المسافة بينهما؛ والوزن \\(mg\\) إلى أسفل. المعطى \\(m=6\\) جم=\\(0\\)٫\\(006\\,\\mathrm{kg}\\)، ونستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\) كما في الحساب المنهجي.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p065-review-5-figure-01.webp)

التياران متعاكسان؛ التنافر يرفع السلك العلوي، وعند الاتزان يساوي وزنه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>I</mi><mn>2</mn></msup><mi>L</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>g</mi></mrow></math>
\`\`\`



نضرب طرفي معادلة الاتزان في \\(r\\)، ثم نقسم على \\(mg\\) غير الصفري لعزل المسافة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>I</mi><mn>2</mn></msup><mi>L</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>m</mi><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>120</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>0.006</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>0.00432</mn><mn>0.06</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>0.072</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحول الارتفاع إلى السنتيمتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>7.2</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p088-q529
title: أسئلة الفصل — س8 — الكتاب، صفحة PDF 65
question: أسئلة الفصل — س\\(8\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 65، أسئلة الفصل — س8
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسيمان \\(X\\),\\(Y\\) حيث \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>m</mi><mi>X</mi></msub><mo>=</mo><mn>2</mn><msub><mi>m</mi><mi>Y</mi></msub></mrow></math>\`، قذفا تباعًا من النقطة \\(a\\) إلى أعلى الصفحة بالسرعة نفسها في مجال مغناطيسي منتظم مقترب من الناظر. شحنة \\(X\\) تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>−</mo><mn>2</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">C</mi></mrow></math>\`، وشحنة \\(Y\\) تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">C</mi></mrow></math>\`. نصف قطر دوران \\(X\\) قبل اصطدامه بالحاجز \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`. أوجد المسافة بين نقطتي اصطدامهما بالحاجز.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س8.](assets/lessons/curriculum-evidence/23cc3d272c1181e3f5a4.webp)
final-answer:
**المسافة بين نقطتي الاصطدام:** \\(40\\,\\mathrm{cm}\\).
solution:
عند الحركة عمودياً على المجال، تكون القوة المغناطيسية نحو مركز المسار الدائري. لذلك تساوي القوة المركزية اللازمة للحركة الدائرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi mathvariant="normal">/</mi><mi>r</mi></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(|q|vB\\)، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mi>m</mi><mi>v</mi><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



إذن نصف القطر يتناسب مع الكتلة مقسومة على مقدار الشحنة عند ثبات السرعة والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/23cc3d272c1181e3f5a4.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>r</mi><mi>X</mi></msub><msub><mi>r</mi><mi>Y</mi></msub></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mi>X</mi></msub><msub><mi>m</mi><mi>Y</mi></msub></mfrac><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>q</mi><mi>Y</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>q</mi><mi>X</mi></msub><mi mathvariant="normal">∣</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>r</mi><mi>X</mi></msub><msub><mi>r</mi><mi>Y</mi></msub></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>r</mi><mi>X</mi></msub><msub><mi>r</mi><mi>Y</mi></msub></mfrac><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`



إذن نصفا القطر متساويان. نحدد جهة الانحراف بقاعدة اليد اليمنى: نوجه الأصابع مع السرعة ثم نثنيها نحو المجال، فيشير الإبهام إلى القوة للشحنة الموجبة؛ ونعكس الجهة للسالبة. السرعة إلى أعلى والمجال نحو الناظر؛ فينحرف \\(Y\\) الموجب إلى اليمين و\\(X\\) السالب إلى اليسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>X</mi></msub><mo>=</mo><msub><mi>r</mi><mi>Y</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>X</mi></msub><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



كل جسيم يعود إلى الحاجز بعد نصف دائرة على جهة مختلفة، فتساوي المسافة مجموع القطرين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><msub><mi>r</mi><mi>X</mi></msub><mo>+</mo><mn>2</mn><msub><mi>r</mi><mi>Y</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>20</mn><mo>+</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::mcq
id: physics-tawjihi-2025-p083-q499
title: أسئلة الوحدة — س1/1 — الكتاب، صفحة PDF 73
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 73، أسئلة الوحدة — س1/1
question: إذا تحرك جسيم مشحون عموديًا على مجال مغناطيسي منتظم فإن جميع ما يلي صحيح ما عدا:
- [ ] option-1 | يتأثر بقوة مغناطيسية.
- [x] option-2 | يتغير مقدار سرعة الجسيم.
- [ ] option-3 | يتغير زخمه الخطي.
- [ ] option-4 | يتحرك بمسار دائري.
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



عند الحركة العمودية على المجال توجد قوة مركزية تغير اتجاه السرعة والزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



القوة عمودية على الحركة ولا تبذل شغلًا، فيبقى مقدار السرعة ثابتًا؛ لذلك عبارة تغير مقدارها هي الاستثناء.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mtext>constant</mtext></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p083-q501
title: أسئلة الوحدة — س1/11 — الكتاب، صفحة PDF 74
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س1/11
question: التردد الزاوي \\(\\omega\\) لجسم مشحون يتحرك في مجال منتظم يعطى بالعلاقة:
- [x] option-1 | \\(v/R\\)
- [ ] option-2 | \\(qm/R\\)
- [ ] option-3 | \\(R/v\\)
- [ ] option-4 | \\(mv/q\\)
explanation:
التردد الزاوي هو الزاوية المقطوعة في وحدة الزمن، ووحدته \\(\\,\\mathrm{rad/s}\\). في دورة كاملة تُقطع زاوية \\(2\\pi\\) راديان.

إذا رمزنا للزمن اللازم لدورة كاملة بـ \\(T\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac></mrow></math>
\`\`\`



محيط المسار \\(2\\pi R\\)؛ نقسمه على السرعة الثابتة \\(v\\) لحساب زمن الدورة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>R</mi></mrow><mi>v</mi></mfrac></mrow></math>
\`\`\`



نعوض في علاقة التردد الزاوي ونختصر \\(2\\pi\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>R</mi><mi mathvariant="normal">/</mi><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mi>v</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



إذن العلاقة المطلوبة \\(v/R\\)، الخيار الأول.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p085-q510
title: أسئلة الوحدة — س2/أ — فرع 1 — الكتاب، صفحة PDF 74
question: أسئلة الوحدة — س\\(2\\)/أ — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س2/أ — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

1- لا تنحرف الجسيمات المشحونة عند دخول منتقي السرعات بسرعة \\(v=E/B\\).

final-answer:
لأن القوتين الكهربائية والمغناطيسية **متساويتان مقدارًا ومتعاكستان اتجاهًا**، فمحصلتهما **صفر**.
solution:
في منتقي السرعات تكون السرعة عمودية على المجالين. تؤثر القوة الكهربائية في الشحنة بفعل المجال الكهربائي ومقدارها \\(|q|E\\)؛ وتؤثر المغناطيسية بفعل حركتها ومقدارها \\(|q|vB\\). نرتب المجالين لتتعاكس القوتان.

بما أن القوتين متعاكستان، تنعدم المحصلة إذا تساوى مقداراهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>E</mi></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>B</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>E</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`



نختصر مقدار الشحنة غير الصفري، ثم نقسم على \\(B\\) فنحصل على السرعة التي يتزن عندها التأثيران. عند هذه السرعة تكون المحصلة صفراً، لذلك لا يحدث تسارع أو انحراف:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>E</mi><mi>B</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>L</mi></msub><mo>=</mo><mover accent="true"><mn>0</mn><mo>⃗</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p085-q506
title: أسئلة الوحدة — س2/ب — فرع 1 — الكتاب، صفحة PDF 74
question: أسئلة الوحدة — س\\(2\\)/ب — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س2/ب — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرف كلًا من:

التسلا.

final-answer:
**التسلا:** شدة المجال المغناطيسي الذي يؤثر بقوة \\(1\\,\\mathrm{N}\\) في شحنة مقدارها \\(1\\,\\mathrm{C}\\) تتحرك بسرعة \\(1\\,\\mathrm{m/s}\\) عموديًا عليه.
solution:
**الإجابة:** التسلا وحدة شدة المجال المغناطيسي: المجال الذي يؤثر بقوة \\(1\\,\\mathrm{N}\\) في شحنة \\(1\\,\\mathrm{C}\\) تتحرك بسرعة \\(1\\,\\mathrm{m/s}\\) عمودياً عليه.

**الشاهد من الكتاب:**

> التسلا: شدة المجال المغناطيسي الذي يؤثر بقوة مقدارها \\(1\\,\\mathrm{N}\\) في شحنة مقدارها \\(1\\,\\mathrm{C}\\)، تتحرك بسرعة \\(1\\mathrm{m/s}\\)، باتجاه يتعامد مع اتجاه المجال المغناطيسي.

**المصدر:** صفحة \\(54\\) من الكتاب.



:::

:::mcq
id: physics-tawjihi-2025-p078-q466
title: السؤال 466 — ص 77 — السؤال الأصلي 1
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 77، السؤال 1
question: حزمة من الشحنات الموجبة دخلت منتقي السرعات كما في الشكل المجاور، ما السبب الذي جعلها تنحرف للأعلى؟
- [x] option-1 | سرعتها أكبر من \\(E/B\\).
- [ ] option-2 | سرعتها أقل من \\(E/B\\).
- [ ] option-3 | سرعتها يساوي \\(E/B\\).
- [ ] option-4 | سرعتها أكبر من \\(B/E\\).
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/09a1416f649eb3f5cffc.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



في منتقي السرعات يكون المرور المستقيم عندما تتساوى القوتان الكهربائية والمغناطيسية مقدارًا وتتعاكسان اتجاهًا. هذه الصيغة تفترض أن السرعة عمودية على المجال المغناطيسي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>E</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>E</mi><mi>B</mi></mfrac></mrow></math>
\`\`\`



الرسم يبين اللوح الموجب أعلى والسالب أسفل؛ فيتجه المجال الكهربائي من الموجب إلى السالب، أي لأسفل. العلامات × تمثل المجال المغناطيسي إلى داخل الصفحة.

نطبق قاعدة اليد اليمنى للشحنة الموجبة: أصابعنا مع السرعة إلى اليمين ثم نحو المجال للداخل؛ فتكون القوة المغناطيسية لأعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>B</mi></msub><mo>∥</mo><mo>+</mo><mi>Y</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>E</mi></msub><mo>∥</mo><mo>−</mo><mi>Y</mi></mrow></math>
\`\`\`



الانحراف لأعلى يعني أن القوة المغناطيسية أكبر من الكهربائية. نقسم المتباينة على \\(qB\\) الموجب، لذلك لا تنعكس إشارة المقارنة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>v</mi><mi>B</mi><mo>&gt;</mo><mi>q</mi><mi>E</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>&gt;</mo><mfrac><mi>E</mi><mi>B</mi></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مسار حزمة موجبة بين لوحين مشحونين داخل مجال مغناطيسي.](assets/lessons/curriculum-evidence/09a1416f649eb3f5cffc.webp)
:::

:::mcq
id: physics-tawjihi-2025-p078-q467
title: السؤال 467 — ص 77 — السؤال الأصلي 2
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 77، السؤال 2
question: يمثل الشكل المجاور سلكًا طويلًا \\((ab)\\) كتلته \\(3\\,\\mathrm{g}\\) وطوله \\(1\\,\\mathrm{m}\\) موازيًا للسلك \\((xy)\\)، وقع السلكان في مستوى رأسي واحد، فإذا كان السلك \\((ab)\\) قابلًا للانزلاق للأعلى والأسفل، ومر تيار شدته \\(100\\,\\mathrm{A}\\) في الدارة، ما المسافة التي يتزن عندها السلك بوحدة \\(\\mathrm{m}\\)؟ اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

- [ ] option-1 | \\(0.0067\\)
- [x] option-2 | \\(0.067\\)
- [ ] option-3 | \\(0.67\\)
- [ ] option-4 | \\(67\\)
explanation:
القوة بين سلكين طويلين متوازيين \\(F=\\mu _{0}I_{1}I_{2}L/(2\\pi r)\\). للدارة نفسها يمر التيار نفسه في السلكين، فيصبح حاصل الضرب \\(I^{2}\\). نستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\)، ونحول الكتلة \\(3\\) جم=\\(3\\times 10^{-3}\\,\\mathrm{kg}\\).

التياران في اتجاهين متعاكسين، لذلك يوازن التنافر وزن السلك العلوي عند الاتزان.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/8a617eca6530e90d7dbd.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>I</mi><mn>2</mn></msup><mi>L</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>g</mi></mrow></math>
\`\`\`



نضرب طرفي الاتزان في \\(r\\)، ثم نقسم على الوزن \\(mg\\) غير الصفري لعزل المسافة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>100</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>0.002</mn><mn>0.03</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>≈</mo><mn>0.0667</mn><mtext> </mtext><mi mathvariant="normal">m</mi><mo>≈</mo><mn>0.067</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![السلكان ab وxy وحاملا السلك المتحرك واتصال البطارية.](assets/lessons/curriculum-evidence/8a617eca6530e90d7dbd.webp)
:::

:::mcq
id: physics-tawjihi-2025-p078-q468
title: السؤال 468 — ص 77 — السؤال الأصلي 3
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 77، السؤال 3
question: يمثل الشكل المجاور مسار جسمين مشحونين في مجال مغناطيسي منتظم، ما نوع شحنة كل منهما؟
- [x] option-1 | \\(a,b\\) سالبتين.
- [ ] option-2 | \\(a,b\\) موجبتين.
- [ ] option-3 | \\(a\\) سالبة، \\(b\\) موجبة.
- [ ] option-4 | \\(a\\) موجبة، \\(b\\) سالبة.
explanation:
القوة المغناطيسية تكون نحو مركز تقوس المسار. نحدد نوع الشحنة بمقارنة هذا الاتجاه مع اتجاه القوة لشحنة موجبة وفق قاعدة اليد اليمنى: نوجه الأصابع مع السرعة ثم نحو المجال؛ يشير الإبهام إلى القوة، ونعكس الاتجاه للشحنة السالبة.

![المساران الأصليان](assets/lessons/curriculum-evidence/ca8ea42a81b1f18cdd49.webp)

علامات × تعني أن المجال إلى داخل الصفحة.

في المسار \\(a\\)، عند الجزء الأيسر من منحناه، السرعة إلى أعلى. اليد اليمنى تعطي قوة إلى اليسار للشحنة الموجبة، بينما المسار يتقوس نحو اليمين؛ إذن \\(a\\) سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>a</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`



في المسار \\(b\\)، عند الجزء الأيمن من منحناه، السرعة إلى أسفل. اليد اليمنى تعطي قوة إلى اليمين للشحنة الموجبة، بينما المسار يتقوس نحو اليسار؛ إذن \\(b\\) سالبة أيضاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>b</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`



الإجابة: الشحنتان سالبتان، الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مسارا الجسمين a وb واتجاه المجال المغناطيسي.](assets/lessons/curriculum-evidence/ca8ea42a81b1f18cdd49.webp)
:::

:::mcq
id: physics-tawjihi-2025-p078-q469
title: السؤال 469 — ص 77 — السؤال الأصلي 4
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 77، السؤال 4
question: يتحرك جسم مشحون في مسار دائري داخل منطقة مجال مغناطيسي منتظم تحت تأثير القوة المغناطيسية، ماذا سيحدث لكل من زخمه الخطي وطاقته الحركية الانتقالية أثناء وجوده داخل منطقة المجال المغناطيسي؟
- [ ] option-1 | يتغير زخمه وتتغير طاقته الحركية.
- [x] option-2 | يتغير زخمه ولا تتغير طاقته الحركية.
- [ ] option-3 | لا يتغير زخمه وتتغير طاقته الحركية.
- [ ] option-4 | لا يتغير زخمه ولا تتغير طاقته الحركية.
explanation:
الشغل يعتمد على مركبة القوة في اتجاه الإزاحة. القوة المغناطيسية عمودية على الحركة؛ زاويتها مع الإزاحة اللحظية \\(90^{\\circ}\\) وجيب تمامها صفر، لذلك لا تبذل شغلاً ولا تغير الطاقة الحركية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



الزخم هو حاصل ضرب الكتلة في متجه السرعة؛ لذلك يعتمد على اتجاه الحركة أيضاً. يتغير اتجاهه مع دوران الجسم رغم ثبات مقداره:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mo>=</mo><mi>m</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mtext>constant</mtext></mrow></math>
\`\`\`



إذن يتغير الزخم ولا تتغير الطاقة الحركية، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p078-q470
title: السؤال 470 — ص 77 — السؤال الأصلي 5
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 77، السؤال 5
question: ثلاث جسيمات \\((a,b,c)\\) تدخل منطقة مجال مغناطيسي منتظم فتنحرف كما في الشكل المجاور، ما نوع الشحنة على كل منها؟
- [x] option-1 | \\(a\\) موجب، \\(b\\) متعادل، \\(c\\) سالب.
- [ ] option-2 | \\(a\\) سالب، \\(b\\) متعادل، \\(c\\) سالب.
- [ ] option-3 | \\(a\\) موجب، \\(b\\) متعادل، \\(c\\) موجب.
- [ ] option-4 | \\(a\\) سالب، \\(b\\) متعادل، \\(c\\) موجب.
explanation:
لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0257446f81f976f18ea4.webp)

المجال إلى داخل الصفحة كما تدل ×. عند دخول \\(a\\) من اليسار تكون سرعته إلى اليمين، واليد اليمنى تعطي قوة إلى أعلى للشحنة الموجبة؛ وهذا يوافق تقوس \\(a\\)، إذن شحنته موجبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mo>+</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`



الجسيم \\(b\\) يتحرك مستقيماً إلى اليمين، عمودياً على المجال. لو كان مشحوناً لانحرف؛ إذن هو متعادل.

الجسيم \\(c\\) يدخل من أسفل بسرعة إلى أعلى. تعطي اليد اليمنى قوة إلى اليسار للشحنة الموجبة، بينما يتقوس مساره إلى اليمين؛ إذن شحنته سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>a</mi></msub><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>b</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>c</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`



الإجابة: \\(a\\) موجب، و\\(b\\) متعادل، و\\(c\\) سالب؛ الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![المسارات الثلاثة a وb وc في منطقة المجال.](assets/lessons/curriculum-evidence/0257446f81f976f18ea4.webp)
:::

:::mcq
id: physics-tawjihi-2025-p079-q471
title: السؤال 471 — ص 78 — السؤال الأصلي 6
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 78، السؤال 6
question: أدخلت أربع جسيمات متساوية في مقدار الشحنة ومقدار السرعة عموديًا مجالًا مغناطيسيًا منتظمًا فاتخذت المسارات المبينة في الشكل، أيها يحمل شحنة سالبة وله أكبر كتلة؟

- [ ] option-1 | \\(1\\)
- [x] option-2 | \\(2\\)
- [ ] option-3 | \\(3\\)
- [ ] option-4 | \\(4\\)
explanation:
لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/35efcc085b203352be5c.webp)

السرعة الابتدائية إلى أعلى والمجال إلى داخل الصفحة؛ الشحنة الموجبة تنحرف يسارًا، والسالبة يمينًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`



القوة المغناطيسية نحو مركز تقوس المسار، فتؤدي دور القوة المركزية للحركة الدائرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi mathvariant="normal">/</mi><mi>r</mi></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(v^{2}\\) غير الصفرية، فنختصر عاملاً من \\(v\\). عند ثبات مقدار الشحنة والسرعة والمجال، تتناسب الكتلة مع نصف القطر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow><mi>v</mi></mfrac><mi>r</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>∝</mo><mi>r</mi></mrow></math>
\`\`\`



المسار الثاني هو الأوسع بين المسارين السالبين، فيحمل الشحنة السالبة ذات الكتلة الأكبر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>1</mn></msub></mrow></math>
\`\`\`

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![المسارات المرقمة من 1 إلى 4 واتجاه المجال المغناطيسي.](assets/lessons/curriculum-evidence/35efcc085b203352be5c.webp)
:::

:::mcq
id: physics-tawjihi-2025-p079-q472
title: السؤال 472 — ص 78 — السؤال الأصلي 7
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 78، السؤال 7
question: أي الآتية من ميزات المجال المغناطيسي المنتظم؟
- [ ] option-1 | يؤثر بقوة مغناطيسية في جميع الجسيمات المتحركة فيه.
- [ ] option-2 | تتحرك جميع الجسيمات فيه بمسار دائري.
- [x] option-3 | يحافظ على ثبات طاقة حركة الجسم المشحون المتحرك فيه.
- [ ] option-4 | يغير مقدار سرعة الجسيمات المشحونة المتحركة فيه.
explanation:
الشغل يساوي حاصل ضرب القوة والإزاحة وجيب تمام الزاوية بينهما. القوة المغناطيسية عمودية على الإزاحة اللحظية للجسم المشحون، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><msub><mi>F</mi><mi>B</mi></msub><mi mathvariant="normal">Δ</mi><mi>s</mi><mi>cos</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



وفق مبدأ الشغل والطاقة، انعدام الشغل يعني أن المجال المغناطيسي لا يغير الطاقة الحركية؛ إذن الخيار الثالث صحيح.

ليس كل جسيم متحرك يتأثر؛ المتعادل أو المتحرك موازياً للمجال لا يتأثر بقوة مغناطيسية. والمسار الدائري يتطلب حركة عمودية على المجال، فلا ينطبق على كل اتجاه دخول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p079-q473
title: السؤال 473 — ص 78 — السؤال الأصلي 8
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 78، السؤال 8
question: أدخلت أربع جسيمات متساوية في مقدار كل من الشحنة والسرعة عموديًا على مجال مغناطيسي منتظم فاتخذت المسارات المبينة في الشكل المجاور، ما الجسم الذي يحمل شحنة سالبة وله أكبر كتلة؟
- [ ] option-1 | \\((1)\\)
- [x] option-2 | \\((2)\\)
- [ ] option-3 | \\((3)\\)
- [ ] option-4 | \\((4)\\)
explanation:
لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/11d74b77ba43dc473b57.webp)

السرعة الابتدائية إلى أعلى والمجال إلى داخل الصفحة؛ الشحنة الموجبة تنحرف يسارًا، والسالبة يمينًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`



القوة المغناطيسية نحو مركز تقوس المسار، فتؤدي دور القوة المركزية للحركة الدائرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi mathvariant="normal">/</mi><mi>r</mi></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(v^{2}\\) غير الصفرية، فنختصر عاملاً من \\(v\\). عند ثبات مقدار الشحنة والسرعة والمجال، تتناسب الكتلة مع نصف القطر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow><mi>v</mi></mfrac><mi>r</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>∝</mo><mi>r</mi></mrow></math>
\`\`\`



المسار الثاني هو الأوسع بين المسارين السالبين، فيحمل الشحنة السالبة ذات الكتلة الأكبر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>m</mi><mn>1</mn></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![أربعة مسارات لجسيمات داخل مجال مغناطيسي منتظم.](assets/lessons/curriculum-evidence/11d74b77ba43dc473b57.webp)
:::

:::mcq
id: physics-tawjihi-2025-p079-q474
title: السؤال 474 — ص 78 — السؤال الأصلي 9
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 78، السؤال 9
question: الشكل المجاور يمثل مجالًا كهربائيًا منتظمًا يؤثر نحو اليمين ومتعامدًا مع مجال مغناطيسي منتظم مبتعدًا عن الناظر، تتحرك شحنة كهربائية موجبة تحت تأثير المجالين بسرعة ثابتة نحو الأعلى، اعتمادًا على الرسم، فإن سرعة الشحنة إذا كان مقدار المجال الكهربائي \\(400\\,\\mathrm{V/m}\\) والمجال المغناطيسي \\(0.8\\) تسلا تساوي:
- [ ] option-1 | \\(2\\times10^{-3}\\,\\mathrm{m/s}\\)
- [ ] option-2 | \\(5\\,\\mathrm{m/s}\\)
- [ ] option-3 | \\(320\\,\\mathrm{m/s}\\)
- [x] option-4 | \\(500\\,\\mathrm{m/s}\\)
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/8fcb642485df1edbff39.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



الحركة المستقيمة بسرعة ثابتة تعني انعدام التسارع، لذلك تتزن القوتان. الشحنة موجبة فالقوة الكهربائية \\(qE\\) نحو اليمين. السرعة لأعلى والمجال للداخل. نوجه أصابع اليد اليمنى مع السرعة ثم نثنيها نحو المجال، فيشير الإبهام إلى القوة للشحنة الموجبة: لليسار. مقدارها \\(qvB\\) لأن الزاوية \\(90^{\\circ}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>E</mi><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`



نقسم الطرفين على \\(qB\\) غير الصفري، فنختصر الشحنة ونستنتج السرعة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>E</mi><mi>B</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>400</mn><mn>0.8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mn>500</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![اتجاه حركة الشحنة والمجالين الكهربائي والمغناطيسي.](assets/lessons/curriculum-evidence/8fcb642485df1edbff39.webp)
:::

:::mcq
id: physics-tawjihi-2025-p079-q475
title: السؤال 475 — ص 78 — السؤال الأصلي 10
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 78، السؤال 10
question: أربع جسيمات مشحونة تتحرك في مجال مغناطيسي كما في الشكل، الجسم الذي تكون القوة المغناطيسية المؤثرة فيه تساوي صفرًا هو:
- [ ] option-1 | \\(a\\)
- [ ] option-2 | \\(b\\)
- [ ] option-3 | \\(c\\)
- [x] option-4 | \\(d\\)
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/8a27e4a8e2a9337f2e77.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



تنعدم القوة عندما تكون السرعة موازية للمجال أو معاكسة له؛ جيب الزاوية حينئذ صفر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">{</mo><msup><mn>0</mn><mo>∘</mo></msup><mo separator="true">,</mo><msup><mn>180</mn><mo>∘</mo></msup><mo stretchy="false">}</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



الرسم يبين أن سرعة الجسيم الرابع موازية لخطوط المجال إلى أعلى، لذلك لا يتأثر بقوة مغناطيسية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mi>d</mi></msub><mo>∥</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>d</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![اتجاهات حركة الجسيمات a وb وc وd بالنسبة لخطوط المجال.](assets/lessons/curriculum-evidence/8a27e4a8e2a9337f2e77.webp)
:::

:::mcq
id: physics-tawjihi-2025-p079-q476
title: السؤال 476 — ص 78 — السؤال الأصلي 11
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 78، السؤال 11
question: جسم مشحون دخل منطقة مجال مغناطيسي منتظم بسرعة مقدارها \\(4\\times10^5\\,\\mathrm{m/s}\\)، حيث تحرك في مسار دائري قطره \\(2\\,\\mathrm{m}\\)، ما مقدار التردد الزاوي له بوحدة \\(\\mathrm{rad/s}\\)؟
- [x] option-1 | \\(4\\times10^5\\)
- [ ] option-2 | \\(2\\times10^5\\)
- [ ] option-3 | \\(4\\times10^{-5}\\)
- [ ] option-4 | \\(2\\times10^{-5}\\)
explanation:
التردد الزاوي هو الزاوية المقطوعة في الثانية. طول القوس يساوي نصف القطر مضروباً في الزاوية بالراديان؛ بقسمة الطرفين على الزمن نحصل على \\(v=r\\omega\\)، ومنه \\(\\omega =v/r\\).

المعطى قطر المسار، فنقسمه على اثنين لنحصل على نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>d</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>2</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



التردد الزاوي يساوي السرعة الخطية مقسومة على نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mi>v</mi><mi>r</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p080-q477
title: السؤال 477 — ص 79 — السؤال الأصلي 12
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 79، السؤال 12
question: يمثل الشكل المجاور مسار جسمين مشحونين بشحنتين متساويتين في المقدار ولهما نفس السرعة، ما نوع شحنة كل منهما؟
- [x] option-1 | \\(a\\) موجبة، \\(b\\) موجبة.
- [ ] option-2 | \\(a\\) سالبة، \\(b\\) سالبة.
- [ ] option-3 | \\(a\\) موجبة، \\(b\\) سالبة.
- [ ] option-4 | \\(a\\) سالبة، \\(b\\) موجبة.
explanation:
![المساران الأصليان](assets/lessons/curriculum-evidence/3b50392757209694d32d.webp)

لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

نحدد القوة من جهة انحناء المسار إلى مركزه، ثم نستخدم المجال المقترب من الناظر في الضرب الاتجاهي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>B</mi></msub><mo>=</mo><mi>q</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>∥</mo><mo>+</mo><mi>Z</mi></mrow></math>
\`\`\`



في المسار \\(a\\)، السرعة يميناً عند أعلاه والقوة نحو مركز الانحناء لأسفل. هذا يوافق القوة على الشحنة الموجبة.

في المسار \\(b\\)، السرعة لأعلى عند يساره والقوة نحو مركز الانحناء يميناً. هذا يوافق الشحنة الموجبة أيضاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>a</mi></msub><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>b</mi></msub><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`



إذن الشحنتان موجبتان، الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مسارا الجسمين a وb داخل مجال مغناطيسي واتجاها حركتهما.](assets/lessons/curriculum-evidence/3b50392757209694d32d.webp)
:::

:::mcq
id: physics-tawjihi-2025-p080-q478
title: السؤال 478 — ص 79 — السؤال الأصلي 13
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 79، السؤال 13
question: دخل بروتون مجالًا مغناطيسيًا منتظمًا شدته \\(1.5\\,\\mathrm{T}\\) بسرعة \\(3.1\\times10^7\\,\\mathrm{m/s}\\) باتجاه موازٍ لخطوط المجال المغناطيسي، تكون القوة المغناطيسية المؤثرة عليه بوحدة النيوتن:
- [ ] option-1 | \\(7.4\\times10^{-12}\\)
- [ ] option-2 | \\(1.9\\times10^{23}\\)
- [x] option-3 | صفر
- [ ] option-4 | \\(0.5\\times10^{-23}\\)
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



الحركة موازية لخطوط المجال، لذلك الزاوية بين السرعة والمجال صفر وجيبها صفر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>0</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p080-q479
title: السؤال 479 — ص 79 — السؤال الأصلي 14
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 79، السؤال 14
question: في الشكل المجاور مجال مغناطيسي \\(B\\) في مستوى الورقة واتجاهه نحو الشمال، إذا وضع سلك موصل قابل للحركة ويمر به تيار شدته \\(I\\) من اليمين إلى اليسار فإن السلك يتحرك:
- [ ] option-1 | في مستوى الورقة للأعلى.
- [ ] option-2 | في مستوى الورقة للأسفل.
- [x] option-3 | عمودي على مستوى الصفحة للداخل.
- [ ] option-4 | عمودي على مستوى الصفحة للخارج.
explanation:
المعطيات: التيار من اليمين إلى اليسار، والمجال إلى أعلى الصفحة. المطلوب اتجاه حركة السلك تحت تأثير القوة المغناطيسية.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/fcd34764ebd0808b263e.webp)

القوة على سلك يحمل تيارًا تكون عمودية على اتجاه التيار والمجال. نستخدم قاعدة اليد اليمنى لتحديد أحد الاتجاهين العموديين الممكنين.

وجّه أصابع اليد اليمنى إلى اليسار، أي مع التيار، ثم اثنها نحو أعلى الصفحة، أي نحو المجال؛ يشير الإبهام إلى داخل الصفحة.

ويمكن تسجيل ذلك باختيار اليمين اتجاه \\(x\\) الموجب، والأعلى \\(y\\) الموجب، وخارج الصفحة \\(z\\) الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mo>=</mo><mi>I</mi><mover accent="true"><mi>L</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>L</mi><mo>⃗</mo></mover><mo>∥</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>∥</mo><mo>+</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>+</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover></mrow></math>
\`\`\`



النتيجة: يتحرك السلك عموديًا إلى داخل الصفحة، وهو الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![اتجاه التيار في السلك وخطوط المجال المغناطيسي.](assets/lessons/curriculum-evidence/fcd34764ebd0808b263e.webp)
:::

:::mcq
id: physics-tawjihi-2025-p080-q480
title: السؤال 480 — ص 79 — السؤال الأصلي 15
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 79، السؤال 15
question: تنشأ قوة تنافر فقط بين سلكين طويلين لا نهائيين عندما يمر بهما تياران:
- [ ] option-1 | متعامدان.
- [ ] option-2 | بينهما زاوية حادة.
- [ ] option-3 | في نفس الاتجاه.
- [x] option-4 | في اتجاهين متعاكسين.
explanation:
كل سلك يحمل تياراً يولد مجالاً مغناطيسياً يؤثر بقوة في السلك الآخر. للتيارين المتعاكسين في سلكين مستقيمين متوازيين تكون القوة تنافراً، **فالخيار الرابع صحيح**.

لتتضح الجهة، نتخيل السلك الأيسر يحمل تياراً لأعلى والأيمن لأسفل. نوجه إبهام اليد اليمنى مع تيار الأيسر؛ التفاف الأصابع يجعل مجاله عند السلك الأيمن إلى داخل الصفحة.

لتحديد القوة على الأيمن نوجه الأصابع مع تياره الهابط ثم نثنيها نحو المجال للداخل؛ يشير الإبهام إلى اليمين، أي بعيداً عن الأيسر. وبالمثل تكون القوة على الأيسر إلى اليسار. إذن يبتعد كل منهما عن الآخر.

الشكل \\((7-9)\\)، الصفحة \\(59\\) المطبوعة، صفحة \\(\\mathrm{PDF}61\\) يبين التنافر للتيارين المتعاكسين والتجاذب للمتوافقين.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p080-q481
title: السؤال 481 — ص 79 — السؤال الأصلي 16
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 79، السؤال 16
question: شدة التيار الكهربائي الذي إذا مر في سلكين مستقيمين متوازيين طويلين المسافة بينهما \\(1\\,\\mathrm{m}\\) موضوعين في الفراغ تكون القوة المتبادلة بينهما لكل وحدة طول تساوي \\(2\\times10^{-7}\\,\\mathrm{N/m}\\) هي:
- [x] option-1 | الأمبير.
- [ ] option-2 | الفولت.
- [ ] option-3 | النيوتن.
- [ ] option-4 | الجول.
explanation:
كل سلك يولد مجالًا يؤثر بقوة على السلك الآخر. للسلكين المستقيمين الطويلين نستخدم القوة لكل وحدة طول، حيث \\(d\\) المسافة العمودية بينهما؛ التياران المتوافقان يتجاذبان والمتعاكسان يتنافران.

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`

شدة التيار المذكورة هي نفسها في السلكين؛ نضع \\(I_{1}=I_{2}=I\\) في العلاقة:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>I</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`

نعوض بالمسافة والقوة المعطاتين فنجد تيارًا مقداره أمبير واحد؛ هذا هو تعريف الأمبير المستخدم هنا.

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><msup><mi>I</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`

بعد اختصار \\(2\\times 10^{-7}\\) المشترك وغير الصفري:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>I</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`

نأخذ الجذر الموجب لأن المطلوب مقدار شدة التيار:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`

**شاهد القاعدة أو السياق من الكتاب:**

> القوة المتبادلة بين السلكين لكل وحدة طول \\((F/L)\\)، تعطى بالعلاقة: \\(F/L = \\mu _{0}I_{1}I_{2}/(2\\pi r)\\).

**المصدر:** صفحة \\(59\\) من الكتاب.



hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p080-q482
title: السؤال 482 — ص 79 — السؤال الأصلي 17
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 79، السؤال 17 · صياغة تعليمية معدّلة
question: تتحرك شحنة موجبة أفقياً نحو اليمين بين لوحين: الأعلى موجب والأسفل سالب. يؤثر مجال مغناطيسي منتظم عمودياً إلى داخل الصفحة. إذا انحرفت الشحنة إلى الأسفل، فأي علاقة صحيحة بين مقدار سرعتها \\(V\\) وشدتي المجالين \\(E\\) و \\(B\\)؟
- [ ] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mi>B</mi><mo>&gt;</mo><mi>E</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mi>B</mi><mo>&lt;</mo><mi>E</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mi>B</mi><mo>=</mo><mi>E</mi></mrow></math>\`
- [ ] option-4 | تنعدم القوتان معاً.
explanation:
المجال الكهربائي من اللوح الموجب إلى السالب، أي إلى الأسفل؛ فتكون قوة الشحنة الموجبة الكهربائية إلى الأسفل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>E</mi></msub><mo>=</mo><mi>q</mi><mi>E</mi></mrow></math>
\`\`\`



باليد اليمنى، اتجاه \\(v\\times B\\) إلى الأعلى لأن السرعة يميناً والمجال داخل الصفحة. والسرعة عمودية على المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>q</mi><mi>V</mi><mi>B</mi></mrow></math>
\`\`\`



الانحراف إلى الأسفل يدل على أن القوة الكهربائية أكبر من المغناطيسية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>E</mi><mo>&gt;</mo><mi>q</mi><mi>V</mi><mi>B</mi></mrow></math>
\`\`\`



نقسم على الشحنة الموجبة غير الصفرية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>&gt;</mo><mi>V</mi><mi>B</mi></mrow></math>
\`\`\`



الإجابة: \\(VB<E\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![انحراف الجسم الموجب بين لوحي منتقي السرعات.](assets/lessons/curriculum-evidence/1953efdf1bc6b7bf40b6.webp)
:::

:::mcq
id: physics-tawjihi-2025-p080-q483
title: السؤال 483 — ص 79 — السؤال الأصلي 18
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 79، السؤال 18
question: يتحرك بروتون بسرعة \\(3\\times10^7\\,\\mathrm{m/s}\\) باتجاه عمودي على مجال مغناطيسي شدته \\(0.2\\,\\mathrm{T}\\) فإن القوة التي يؤثر بها المجال على البروتون بوحدة النيوتن تساوي:
- [ ] option-1 | صفر
- [ ] option-2 | \\(2.4\\times10^{-13}\\)
- [x] option-3 | \\(9.6\\times10^{-13}\\)
- [ ] option-4 | \\(6.9\\times10^{19}\\)
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



السرعة عمودية على المجال، لذلك جيب الزاوية يساوي واحدًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`



شحنة البروتون \\(q=1\\)٫\\(6\\times 10^{-19}\\,\\mathrm{C}\\). نعوض بها وبالسرعة والمجال، ثم نجمع أسس العشرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><mn>3</mn><mo>×</mo><mn>0.2</mn><mo stretchy="false">)</mo><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn><mo>+</mo><mn>7</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0.96</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>12</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



للكتابة العلمية ننقل الفاصلة منزلة إلى اليمين، وننقص الأس منزلة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>9.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>13</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p081-q484
title: السؤال 484 — ص 80 — السؤال الأصلي 19
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 80، السؤال 19
question: دخل جسم مشحون كتلته \\(2\\times10^{-10}\\,\\mathrm{kg}\\) وشحنته \\(2\\,\\mathrm{\\mu C}\\) مجالًا مغناطيسيًا منتظمًا مقداره \\(0.2\\,\\mathrm{T}\\) بسرعة مقدارها \\(10^3\\,\\mathrm{m/s}\\) باتجاه عمودي على اتجاه المجال المغناطيسي، ما مقدار سرعة الجسم بعد مرور \\(3\\) ثوان على وجوده داخل المجال المغناطيسي بوحدة \\(\\mathrm{m/s}\\)؟
- [ ] option-1 | صفر
- [ ] option-2 | \\(1.04\\)
- [ ] option-3 | \\(3.33\\times10^2\\)
- [x] option-4 | \\(10^3\\)
explanation:
القوة المغناطيسية عمودية على السرعة والإزاحة اللحظية؛ شغلها صفر لأن جيب تمام \\(90^{\\circ}\\) يساوي صفراً. وبحسب مبدأ الشغل والطاقة، لا تتغير الطاقة الحركية بفعلها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>
\`\`\`



نقسم طرفي المعادلة على \\(\\frac{1}{2}m\\) غير الصفري، ثم نأخذ الجذر الموجب لأننا نقارن مقداري السرعة. يبقى المقدار ثابتاً مهما مر من الزمن داخل المجال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><msup><mn>10</mn><mn>3</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p081-q487
title: السؤال 487 — ص 80 — السؤال الأصلي 22
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 80، السؤال 22
question: أدخل جسمان مشحونان مجالًا مغناطيسيًا منتظمًا حيث كتلة الثاني \\(3\\) أمثال الأول وشحنة الثاني \\(2\\) مثلي شحنة الأول، فتحرك الاثنان في مسار دائري، ما النسبة بين تردد حركة الثاني إلى تردد الأول \\(f_2/f_1\\)؟
- [ ] option-1 | \\(3/2\\)
- [x] option-2 | \\(2/3\\)
- [ ] option-3 | \\(3/1\\)
- [ ] option-4 | \\(1/3\\)
explanation:
التردد هو عدد الدورات في الثانية. للجسم الذي تتحرك شحنته عمودياً على مجال منتظم، يعطى تردده بالعلاقة الآتية؛ فهي تربط القوة المغناطيسية المركزية بزمن الدورة. نرمز لمقدار الشحنة بـ \\(|q|\\) وللكتلة بـ \\(m\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`



نقسم تردد الثاني على الأول. المجال \\(B\\) والعامل \\(2\\pi\\) مشتركان فيختصران، ثم نعوض نسبة الشحنتين والكتلتين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>f</mi><mn>2</mn></msub><msub><mi>f</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>q</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>q</mi><mn>1</mn></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>f</mi><mn>2</mn></msub><msub><mi>f</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>f</mi><mn>2</mn></msub><msub><mi>f</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p081-q488
title: السؤال 488 — ص 80 — السؤال الأصلي 23
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 80، السؤال 23 · صياغة تعليمية معدّلة
question: جسم شحنته\\(+2\\) ميكروكولوم يتحرك بسرعة \\(2\\times 10^{5}\\,\\mathrm{m/s}\\) عمودياً على مجالين كهربائي ومغناطيسي منتظمين متعامدين. شدة المجال الكهربائي \\(2\\times 10^{5}\\,\\mathrm{V/m}\\)، والقوتان متعاكستان والجسم يواصل حركة مستقيمة منتظمة. ما مقدار المجال المغناطيسي بالتسلا؟
- [ ] option-1 | \\(0.5\\)
- [x] option-2 | \\(1\\)
- [ ] option-3 | \\(2\\)
- [ ] option-4 | \\(4\\times10^{10}\\)
explanation:
الحركة مستقيمة منتظمة، لذلك محصلة القوى صفر. ومع تعاكس القوتين يتساوى مقداراهما.

القوة الكهربائية \\(qE\\)، والمغناطيسية \\(qvB\\) لأن السرعة عمودية على المجال المغناطيسي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>E</mi><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`



نختصر \\(q\\ne 0\\)، ثم نقسم على السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mi>E</mi><mi>v</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



الإجابة: \\(1\\,\\mathrm{T}\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p081-q489
title: السؤال 489 — ص 80 — السؤال الأصلي 24
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 80، السؤال 24
question: إذا كانت القوة المتبادلة بين سلكين لا نهائيين ومتوازيين ويحمل كل منهما \\(I\\) هي \\(100\\,\\mathrm{N}\\)، فكم تصبح القوة عند مضاعفة تيار كل منهما؟
- [x] option-1 | \\(400\\)
- [ ] option-2 | \\(200\\)
- [ ] option-3 | \\(50\\)
- [ ] option-4 | \\(25\\)
explanation:
كل سلك يولد مجالًا يؤثر بقوة على السلك الآخر. للسلكين المستقيمين الطويلين نستخدم القوة لكل وحدة طول، حيث \\(d\\) المسافة العمودية بينهما؛ التياران المتوافقان يتجاذبان والمتعاكسان يتنافران.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



قوة السلكين تتناسب مع حاصل ضرب التيارين عند ثبات المسافة والطول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub><mi>L</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



مضاعفة كل تيار تضاعف حاصل الضرب أربع مرات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>F</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mi>F</mi><mfrac><mrow><mo stretchy="false">(</mo><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo stretchy="false">)</mo></mrow><mrow><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>F</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>4</mn><mi>F</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>F</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>100</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>F</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>400</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p082-q490
title: السؤال 490 — ص 81 — السؤال الأصلي 25
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 81، السؤال 25
question: يبين الشكل المجاور دخول جسمين مجالًا مغناطيسيًا منتظمًا شدته \\(B\\) فكان نصف قطر مسار الحركة لكل منهما متساويًا، فماذا يعني ذلك؟
- [ ] option-1 | الجسمان متساويان في مقدار الشحنة.
- [ ] option-2 | متساويان في نسبة \\(m/q\\).
- [ ] option-3 | الجسمان متساويان في مقدار الكتلة.
- [x] option-4 | متساويان في مقدار \\(mv/|q|\\).
explanation:
عندما تتحرك الشحنة عموديًا على مجال منتظم، تكون القوة المغناطيسية عمودية على سرعتها فتقوم بدور القوة المركزية. تغيّر اتجاه الحركة ولا تبذل شغلًا، فيبقى مقدار السرعة ثابتًا.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/eaf5229978f8db5639c9.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(|q|vB\\) غير الصفري، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



نستخدم علاقة نصف القطر السابقة لكل جسم في المجال نفسه.

نضرب علاقة نصف القطر في \\(B\\) فنحصل على \\(mv/|q|=Br\\). تساوي نصف القطر والمجال يجعل هذه النسبة متساوية، دون أن يفرض تساوي الكتلتين أو الشحنتين منفردتين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>q</mi><mn>1</mn></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>q</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi></mrow></mfrac></mrow></math>
\`\`\`



الإجابة: تساوي \\(mv/|q|\\)، الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مساران دائريان متساويا نصف القطر واتجاها الحركة في المجال.](assets/lessons/curriculum-evidence/eaf5229978f8db5639c9.webp)
:::

:::mcq
id: physics-tawjihi-2025-p082-q491
title: السؤال 491 — ص 81 — السؤال الأصلي 26
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 81، السؤال 26
question: يبين الشكل المجاور سلكين لا نهائيين يسري في كل منهما تيار كهربائي، فإذا علمت أن محصلة المجال المغناطيسي عند النقطة \\(a\\) يساوي صفرًا، فأي العبارات التالية صحيحة عند عكس اتجاه التيار في السلك الثاني \\(I_2\\)؟
- [ ] option-1 | نقطة التعادل تصبح عند النقطة \\(b\\) والقوة المتبادلة بين السلكين تنافر.
- [x] option-2 | نقطة التعادل تصبح عند النقطة \\(b\\) والقوة المتبادلة بين السلكين تجاذب.
- [ ] option-3 | نقطة التعادل تصبح عند النقطة \\(c\\) والقوة المتبادلة بين السلكين تجاذب.
- [ ] option-4 | نقطة التعادل تصبح عند النقطة \\(c\\) والقوة المتبادلة بين السلكين تنافر.
explanation:
مجال السلك الطويل يتناسب مع تياره \\(I\\) وينقص مع البعد العمودي \\(r\\). نوجه إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يحدد اتجاه المجال، ومنه نعرف مواضع التعادل.

عند \\(a\\) خارج السلكين، مجال \\(I_{1}\\) الصاعد إلى داخل الصفحة. ليعادله مجال \\(I_{2}\\) يجب أن يكون إلى الخارج، أي أن \\(I_{2}\\) هابط. ولأن \\(a\\) أقرب إلى \\(I_{1}\\)، يحتاج تياراً أصغر كي يعطي المجال نفسه:

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/771f41085e6da006f2eb.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>r</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>2</mn></msub><msub><mi>r</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`



عكس التيار الثاني يجعله موافقًا للأول؛ لذلك تتجاذب الأسلاك وتقع نقطة التعادل بينهما وأقرب إلى التيار الأصغر، وهي جهة النقطة \\(b\\) في الرسم، وليست منتصف المسافة.

نرمز لبعد نقطة التعادل عن السلك الأول بـ \\(x\\)، وللمسافة بين السلكين بـ \\(d\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>x</mi><mrow><mi>d</mi><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mfrac><mo>&lt;</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>x</mi><mo>&lt;</mo><mfrac><mi>d</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



إذن التعادل في الجهة القريبة من الأول عند \\(b\\) كما يقصد الرسم، مع التجاذب؛ الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![السلكان I1 وI2 والنقاط a وb وc.](assets/lessons/curriculum-evidence/771f41085e6da006f2eb.webp)
:::

:::mcq
id: physics-tawjihi-2025-p082-q492
title: السؤال 492 — ص 81 — السؤال الأصلي 27
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 81، السؤال 27
question: في الشكل المجاور: إذا كانت شدة التيار الكهربائي المار في السلك \\(2\\,\\mathrm{A}\\) وشدة المجال المغناطيسي المنتظم \\(0.1\\,\\mathrm{T}\\)، فما مقدار واتجاه القوة المغناطيسية المؤثرة في الجزء \\(bc\\) من السلك بوحدة نيوتن؟
- [x] option-1 | \\(0.04\\) باتجاه \\(+Z\\).
- [ ] option-2 | \\(0.04\\) باتجاه \\(-Z\\).
- [ ] option-3 | \\(0.02\\) باتجاه \\(-Z\\).
- [ ] option-4 | \\(0.02\\) باتجاه \\(+Z\\).
explanation:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\alpha\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a269aca1ed8b381b71b2.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>α</mi></mrow></math>
\`\`\`



المجال أفقي، لذلك الجزء الفعال من طول السلك المائل هو إسقاطه العمودي على المجال، وهو الارتفاع المبين \\(0\\)٫\\(20\\,\\mathrm{m}\\). الزاوية \\(\\theta\\) في الرسم مقاسة من الرأسي؛ لذلك يمكن أيضًا كتابة \\(L\\)⊥=\\(L \\cos \\theta\\)، دون الخلط بينها وبين زاوية السلك مع المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mo>⊥</mo></msub><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحسب القوة باستعمال الارتفاع، ثم نحدد اتجاهها من التيار الهابط والمجال المتجه يمينًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mi>I</mi><mi>B</mi><msub><mi>L</mi><mo>⊥</mo></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>0.1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



نوجه أصابع اليد اليمنى مع المركبة الهابطة للتيار ثم مع المجال إلى اليمين؛ يشير الإبهام إلى خارج الصفحة. المركبة الأفقية للتيار موازية للمجال فلا تولد قوة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover></mrow></math>
\`\`\`



إذن القوة \\(0.04\\,\\mathrm{N}\\) باتجاه \\(+Z\\)، الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![السلك المنكسر abc والارتفاع 0.2 m واتجاه المجال والتيار.](assets/lessons/curriculum-evidence/a269aca1ed8b381b71b2.webp)
:::

:::mcq
id: physics-tawjihi-2025-p082-q493
title: السؤال 493 — ص 81 — السؤال الأصلي 28
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 81، السؤال 28
question: يتحرك أيون يحمل شحنة موجبة \\(3.2\\times10^{-19}\\,\\mathrm{C}\\) في منطقة مجالين متعامدين: المغناطيسي شدته \\(0.1\\,\\mathrm{T}\\)، والكهربائي وشدته \\(5\\times10^2\\,\\mathrm{V/m}\\)، إذا تحرك الأيون عموديًا على المجالين، وكانت القوتان الكهربائية والمغناطيسية متعاكستين وتسارعه يساوي صفرًا، فما مقدار سرعته بوحدة \\(\\mathrm{m/s}\\)؟

- [ ] option-1 | \\(50\\)
- [ ] option-2 | \\(1.6\\times10^{-17}\\)
- [x] option-3 | \\(5\\times10^3\\)
- [ ] option-4 | \\(2\\times10^{-4}\\)
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



بما أن السرعة عمودية على المجالين كما في ترتيب منتقي السرعات، تنعدم المحصلة عندما تتساوى القوتان المتعاكستان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>E</mi><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`



نلغي الشحنة ونقسم المجال الكهربائي على المغناطيسي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>E</mi><mi>B</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup></mrow><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>500</mn><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



القيمة \\(5000\\,\\mathrm{m/s}\\) هي المركبة العمودية على \\(B\\)، وتساوي مقدار السرعة كله عندما لا توجد مركبة موازية له، كما في منتقي السرعات. من دون هذا الشرط يمكن أن تكون السرعة الكلية أكبر؛ لذا نحتفظ بالجواب المنهجي مع هذا التقييد.

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p082-q494
title: السؤال 494 — ص 81 — السؤال الأصلي 29
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 81، السؤال 29
question: تم مسارعة جسيمات مشحونة كتلتها \\(m\\) ولها نفس الشحنة في مجال كهربائي منتظم بسرعات مختلفة، ثم أدخلت في مجال مغناطيسي شدته \\(B\\) بشكل عمودي على خطوط المجال المغناطيسي. أي من الأشكال الآتية يمثل العلاقة بين نصف قطر المسار الدائري \\(r\\) للجسيمات المشحونة وسرعته \\(V\\)؟
- [ ] option-1 | الشكل \\((1)\\)
- [ ] option-2 | الشكل \\((2)\\)
- [ ] option-3 | الشكل \\((3)\\)
- [x] option-4 | الشكل \\((4)\\)
explanation:
مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/8da7f1324d657baa7a83.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



عندما تتحرك الشحنة عموديًا على مجال منتظم، تكون القوة المغناطيسية عمودية على سرعتها فتقوم بدور القوة المركزية. تغيّر اتجاه الحركة ولا تبذل شغلًا، فيبقى مقدار السرعة ثابتًا.

القوة المركزية هي القوة اللازمة لتغيير اتجاه السرعة في المسار الدائري، ومقدارها \\(mv^{2}/r\\). هنا تؤدي القوة المغناطيسية هذا الدور، فنساويهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(|q|vB\\)، فنختصر \\(v\\) غير الصفرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mi>m</mi><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac><mi>v</mi></mrow></math>
\`\`\`



الكتلة والشحنة والمجال ثابتة، لذلك نصف القطر يتناسب طرديًا مع السرعة؛ نختار الخط المستقيم المار بالأصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>∝</mo><mi>v</mi></mrow></math>
\`\`\`



إذن الشكل الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![الشكل 1: العلاقة بين r وV.](assets/lessons/curriculum-evidence/26733177b0793c703f7a.webp)
![الشكل 2: العلاقة بين r وV.](assets/lessons/curriculum-evidence/40a18072f59c65ecb795.webp)
![الشكل 3: العلاقة بين r وV.](assets/lessons/curriculum-evidence/3c7f1d0e0f5be7faae59.webp)
![الشكل 4: العلاقة بين r وV.](assets/lessons/curriculum-evidence/8da7f1324d657baa7a83.webp)
:::

:::mcq
id: physics-tawjihi-2025-p083-q495
title: السؤال 495 — ص 82 — السؤال الأصلي 30
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 82، السؤال 30
question: يبين الشكل المجاور سلكًا فلزيًا طوله \\(8\\,\\mathrm{cm}\\) ويحمل تيارًا كهربائيًا شدته \\(3\\,\\mathrm{A}\\)، جزء منه موضوع في مجال مغناطيسي منتظم شدته \\(0.2\\,\\mathrm{T}\\) يتجه نحو محور الصادات السالب \\(-Y\\)، ما مقدار واتجاه القوة المغناطيسية المؤثرة في السلك؟
- [x] option-1 | \\(3\\times10^{-2}\\,\\mathrm{N}\\) باتجاه \\(+Z\\).
- [ ] option-2 | \\(4.8\\times10^{-2}\\,\\mathrm{N}\\) باتجاه \\(+Z\\).
- [ ] option-3 | \\(2\\times10^{-2}\\,\\mathrm{N}\\) باتجاه \\(-Z\\).
- [ ] option-4 | \\(5\\times10^{-2}\\,\\mathrm{N}\\) باتجاه \\(-Z\\).
explanation:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/f23b4dfa592b800b53a6.webp)

السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



القوة تؤثر فقط في الجزء الموجود بين القطبين، وطوله خمسة سنتيمترات في الرسم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>0.05</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحسب المقدار لأن التيار أفقي والمجال رأسي، ثم نحدد الاتجاه بقاعدة اليد اليمنى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>0.05</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



نوجه أصابع اليد اليمنى مع التيار إلى اليسار ثم نحو المجال إلى أسفل؛ يشير الإبهام إلى القوة نحو الناظر، باتجاه \\(+Z\\)، الخيار الأول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mo>+</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![السلك بين القطبين N وS وطولاه 8 cm و5 cm واتجاه التيار.](assets/lessons/curriculum-evidence/f23b4dfa592b800b53a6.webp)
:::

:::exam-question
id: physics-tawjihi-2025-p083-q496
title: السؤال 496 — ص 82 — السؤال الأصلي 31
question: الزخم الخطي لجسيم مشحون
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 82، السؤال 31 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسيم كتلته \\(m>0\\) وشحنته \\(q\\ne 0\\) يتحرك بسرعة غير صفرية في سيكلترون ذي مجال مغناطيسي منتظم مقداره \\(B>0\\). السرعة عمودية على المجال، ونصف قطر أكبر مسار مسموح داخل الجهاز \\(R>0\\). في النموذج غير النسبي، استنتج علاقة أقصى زخم للجسيم بـ \\(R\\) عند ثبات \\(B\\) و\\(|q|\\).
final-answer:
**أقصى زخم:** \\(p_{\\max}=|q|BR\\)، ويتناسب **طرديًا مع \\(R\\)** عند ثبات \\(B\\) و\\(|q|\\).
solution:
القوة المغناطيسية عمودية على السرعة، فتقوم بدور القوة المركزية اللازمة للحركة الدائرية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نقسم على \\(v>0\\)، ثم نضرب في \\(r\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi><mi>r</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



لأن الزخم في النموذج غير النسبي هو \\(p=mv\\)، نحصل على:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi><mi>r</mi></mrow></math>
\`\`\`



عند أكبر نصف قطر \\(R\\) يكون الزخم أكبر ما يمكن داخل الجهاز.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mtext>max</mtext></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi><mi>R</mi></mrow></math>
\`\`\`



إذن أقصى زخم يتناسب طردياً مع نصف قطر الجهاز عند ثبات الشحنة والمجال.

:::

:::mcq
id: physics-tawjihi-2025-p083-q497
title: السؤال 497 — ص 82 — السؤال الأصلي 32
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 82، السؤال 32
question: دخل جسم مشحون كتلته \\(2\\times10^{-12}\\,\\mathrm{kg}\\) وشحنته \\(4\\,\\mathrm{\\mu C}\\) مجالًا مغناطيسيًا منتظمًا مقداره \\(0.4\\,\\mathrm{T}\\) وبسرعة مقدارها \\(2\\times10^4\\,\\mathrm{m/s}\\) باتجاه عمودي على المجال المغناطيسي، ما مقدار سرعة الجسم بعد مرور \\(4\\,\\mathrm{s}\\) على وجوده داخل المجال المنتظم بوحدة \\(\\mathrm{m/s}\\)؟
- [ ] option-1 | صفر
- [ ] option-2 | \\(1.37\\times10^{-7}\\)
- [ ] option-3 | \\(3.9\\times10^{-2}\\)
- [x] option-4 | \\(2\\times10^4\\)
explanation:
القوة المغناطيسية عمودية على الإزاحة اللحظية؛ جيب تمام \\(90^{\\circ}\\) صفر، لذلك شغلها صفر. وبحسب مبدأ الشغل والطاقة، لا تغير الطاقة الحركية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>
\`\`\`



نقسم معادلة الطاقة على \\(\\frac{1}{2}m\\) غير الصفري ونأخذ الجذر الموجب لمقدار السرعة. يتغير الاتجاه أثناء الحركة الدائرية، لكن المقدار يبقى كما كان عند الدخول:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p083-q498
title: السؤال 498 — ص 82 — السؤال الأصلي 33
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 82، السؤال 33
question: يستخدم جهاز منتقي السرعات كمرشح للسرعة، حيث يمكن باستخدامه التحكم في اختيار حزمة من الجسيمات المشحونة ذات سرعة محددة وتتحرك في خط مستقيم وذلك عندما تكون قوة لورنتز تساوي صفرًا، في أي الحالات الآتية تصبح قوة لورنتز = صفر؟
- [ ] option-1 | عندما يتساوى المجال الكهربائي والمجال المغناطيسي في المقدار ويتعاكسان في الاتجاه.
- [ ] option-2 | عندما يتساوى المجال الكهربائي والمجال المغناطيسي في المقدار وبالاتجاه نفسه.
- [ ] option-3 | عندما تتساوى القوة الكهربائية والقوة المغناطيسية في المقدار وبنفس الاتجاه.
- [x] option-4 | عندما تتساوى القوة الكهربائية والقوة المغناطيسية في المقدار وتتعاكسان في الاتجاه.
explanation:
قوة لورنتز هي مجموع القوتين الكهربائية والمغناطيسية كمتجهين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>L</mi></msub><mo>=</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>E</mi></msub><mo>+</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>B</mi></msub></mrow></math>
\`\`\`



لكي يكون المجموع صفراً، يجب أن تتساوى القوتان مقداراً وتتعاكسا اتجاهاً؛ عندئذ تلغي كل منهما الأخرى:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>E</mi></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>B</mi></msub></mrow></math>
\`\`\`



إذن الخيار الرابع. تساوي المجالين نفسه ليس شرطاً؛ فالقوة الكهربائية تعتمد على \\(qE\\)، والمغناطيسية على \\(qvB\\) عند التعامد.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p083-q500
title: السؤال 500 — ص 82 — السؤال الأصلي 35
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 82، السؤال 35
question: تم مسارعة جسيمات مشحونة كتلة كل منها \\(m\\) ولها نفس الشحنة في مجال كهربائي منتظم بسرعات متساوية ثم أدخلت في مناطق مجالات مغناطيسية مختلفة بشكل عمودي على خطوط المجال. أي من الأشكال الآتية يمثل العلاقة بين نصف قطر المدار الدائري للجسيمات وشدة المجال المغناطيسي؟
- [ ] option-1 | الشكل \\((1)\\)
- [x] option-2 | الشكل \\((2)\\)
- [ ] option-3 | الشكل \\((3)\\)
- [ ] option-4 | الشكل \\((4)\\)
explanation:
عندما تتحرك الشحنة عموديًا على مجال منتظم، تكون القوة المغناطيسية عمودية على سرعتها فتقوم بدور القوة المركزية. تغيّر اتجاه الحركة ولا تبذل شغلًا، فيبقى مقدار السرعة ثابتًا.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ca87ff45d51a4420eda8.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(|q|vB\\)، فنختصر \\(v\\) غير الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



عند ثبات الكتلة ومقدار الشحنة والسرعة، نصف قطر المسار يساوي ثابتًا مقسومًا على شدة المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>∝</mo><mfrac><mn>1</mn><mi>B</mi></mfrac></mrow></math>
\`\`\`



نختار المنحنى المتناقص؛ زيادة المجال تقلص نصف القطر، كما في الشكل الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>↓</mo></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![الشكل 1: العلاقة بين r وB.](assets/lessons/curriculum-evidence/9731c9c743a8ada74f50.webp)
![الشكل 2: العلاقة بين r وB.](assets/lessons/curriculum-evidence/ca87ff45d51a4420eda8.webp)
![الشكل 3: العلاقة بين r وB.](assets/lessons/curriculum-evidence/990bbb479ecbdbe3ecbf.webp)
![الشكل 4: العلاقة بين r وB.](assets/lessons/curriculum-evidence/8cb2a7110346192b4223.webp)
:::



:::mcq
id: physics-tawjihi-2025-p084-q502
title: السؤال 502 — ص 83 — السؤال الأصلي 37
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 83، السؤال 37
question: متى تنحرف الجسيمات المشحونة عن المسار المستقيم باتجاه القوة المغناطيسية عند دخولها منتقي السرعات بسرعة مقدارها \\(V\\)؟
- [ ] option-1 | \\(V=EB\\)
- [ ] option-2 | \\(V=\\frac{E}{B}\\)
- [ ] option-3 | \\(V<\\frac{E}{B}\\)
- [x] option-4 | \\(V>\\frac{E}{B}\\)
explanation:
في منتقي السرعات يكون المرور المستقيم عندما تتساوى القوتان الكهربائية والمغناطيسية مقدارًا وتتعاكسان اتجاهًا. هذه الصيغة تفترض أن السرعة عمودية على المجال المغناطيسي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>E</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>E</mi><mi>B</mi></mfrac></mrow></math>
\`\`\`



الانحراف باتجاه القوة المغناطيسية يعني أنها أكبر من القوة الكهربائية المعاكسة لها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>V</mi><mi>B</mi><mo>&gt;</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>E</mi></mrow></math>
\`\`\`



نلغي مقدار الشحنة ونقسم على شدة المجال المغناطيسي الموجبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mi>B</mi><mo>&gt;</mo><mi>E</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>&gt;</mo><mfrac><mi>E</mi><mi>B</mi></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p084-q503
title: السؤال 503 — ص 83 — السؤال الأصلي 38
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 83، السؤال 38
question: يبين الشكل المجاور سلكًا يسري فيه تيار كهربائي شدته \\(10\\,\\mathrm{A}\\) موضوع في مجال مغناطيسي منتظم شدته \\(0.01\\,\\mathrm{T}\\)، ما مقدار القوة المغناطيسية المؤثرة في السلك بوحدة نيوتن؟
- [ ] option-1 | \\(0.3\\)
- [ ] option-2 | \\(0.4\\)
- [ ] option-3 | \\(0.1\\)
- [x] option-4 | \\(0.5\\)
explanation:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/812dfa8928e726843603.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



الجزء داخل المجال هو الوتر لمثلث قائم ضلعاه \\(4\\,\\mathrm{m}\\) و\\(3\\,\\mathrm{m}\\). نستخدم فيثاغورس: مربع الوتر يساوي مجموع مربعي الضلعين القائمين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><msqrt><mrow><msup><mn>4</mn><mn>2</mn></msup><mo>+</mo><msup><mn>3</mn><mn>2</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><msqrt><mrow><mn>16</mn><mo>+</mo><mn>9</mn></mrow></msqrt><mo>=</mo><msqrt><mn>25</mn></msqrt><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



السلك كله في مستوى الصفحة والمجال عمودي عليها، لذلك زاويتهما قائمة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.01</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![السلك المائل في المجال وأبعاده الأفقية 4 m والرأسية 3 m.](assets/lessons/curriculum-evidence/812dfa8928e726843603.webp)
:::

:::mcq
id: physics-tawjihi-2025-p084-q504
title: السؤال 504 — ص 83 — السؤال الأصلي 39
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 83، السؤال 39
question: إذا كانت القوة المتبادلة بين سلكين لانهائيين متوازيين يحملان تيارًا كهربائيًا تساوي \\(50\\,\\mathrm{N/m}\\)، فكم تصبح القوة المتبادلة بينهما بوحدة \\(\\mathrm{N/m}\\) إذا قلت المسافة بينهما إلى النصف؟
- [ ] option-1 | \\(25\\)
- [ ] option-2 | \\(50\\)
- [x] option-3 | \\(100\\)
- [ ] option-4 | \\(200\\)
explanation:
كل سلك يولد مجالًا يؤثر بقوة على السلك الآخر. للسلكين المستقيمين الطويلين نستخدم القوة لكل وحدة طول، حيث \\(d\\) المسافة العمودية بينهما؛ التياران المتوافقان يتجاذبان والمتعاكسان يتنافران.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



عند بقاء التيارين ثابتين، تتناسب القوة لكل وحدة طول عكسياً مع المسافة بين السلكين.

تقليل المسافة إلى النصف يضاعف القوة لكل وحدة طول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mi>F</mi><mi>L</mi></mfrac><mo fence="true">)</mo></mrow><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><mi>F</mi><mi>L</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mi>F</mi><mi>L</mi></mfrac><mo fence="true">)</mo></mrow><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>50</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mi>F</mi><mi>L</mi></mfrac><mo fence="true">)</mo></mrow><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>100</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::





:::exam-question
id: physics-tawjihi-2025-p085-q507
title: السؤال 507 — ص 84 — السؤال الأصلي 3
question: السؤال الثاني: أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 84، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بمنتقي السرعات؟
final-answer:
**منتقي السرعات:** جهاز ينتقي حزمة من الجسيمات المشحونة ذات سرعة محددة باستخدام مجالين كهربائي ومغناطيسي متعامدين.
solution:
**الإجابة:** جهاز ينتقي حزمة من الجسيمات المشحونة ذات سرعة محددة باستخدام مجالين كهربائي ومغناطيسي متعامدين.

**الشاهد من الكتاب \\(1\\):**

> يتبين من اسم هذا الجهاز أنه مرشح للسرعة، حيث يمكن باستخدامه التحكم في اختيار حزمة من الجسيمات المشحونة ذات سرعة محددة.

**المصدر:** صفحة \\(60\\) من الكتاب.



**الشاهد من الكتاب \\(2\\):**

> لتمر في منطقة مجال كهربائي متعامد مع مجال مغناطيسي




:::



:::exam-question
id: physics-tawjihi-2025-p085-q509
title: السؤال 509 — ص 84 — السؤال الأصلي 1
question: السؤال الثاني: ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 84، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: لا تغير القوة المغناطيسية التي يؤثر بها مجال مغناطيسي منتظم مقدار سرعة الشحنة المتحركة فيه.
final-answer:
لأنها **عمودية على الإزاحة اللحظية ولا تبذل شغلًا**؛ فتظل الطاقة الحركية ومقدار السرعة ثابتين.
solution:
الشغل يعتمد على مركبة القوة في اتجاه الإزاحة؛ يحسب بضرب القوة في الإزاحة وجيب تمام الزاوية بينهما. القوة المغناطيسية عمودية على السرعة والإزاحة اللحظية، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><msub><mi>F</mi><mi>B</mi></msub><mi mathvariant="normal">Δ</mi><mi>s</mi><mi>cos</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



وفق مبدأ الشغل والطاقة، تغير الطاقة الحركية يساوي الشغل الكلي. عندما تكون القوة المغناطيسية وحدها المؤثرة، يكون هذا الشغل صفراً؛ فلا تتغير الطاقة الحركية أو مقدار السرعة، وإن تغير اتجاهها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><msub><mi>W</mi><mi>B</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mtext>constant</mtext></mrow></math>
\`\`\`


:::







:::exam-question
id: physics-tawjihi-2025-p085-q513
title: السؤال 513 — ص 84 — السؤال الأصلي 5
question: السؤال الثاني: ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 84، السؤال 5 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: لا يتأثر بروتون يتحرك موازياً لاتجاه المجال المغناطيسي داخل ملف حلزوني طويل بقوة مغناطيسية، رغم أن المجال غير منعدم.
final-answer:
لأن سرعة البروتون **موازية للمجال**، فالمركبة العمودية لسرعته تساوي صفرًا، وبالتالي **القوة المغناطيسية صفر**.
solution:
المجال داخل الملف الطويل يتجه على امتداد محوره. في هذه الحالة سرعة البروتون موازية للمجال، فتكون الزاوية بينهما صفراً.

مقدار القوة المغناطيسية يعتمد على المركبة العمودية للسرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>0</mn><mo>∘</mo></msup><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



إذن سبب انعدام القوة هو اتجاه الحركة الموازي للمجال، لا انعدام المجال نفسه.
:::



:::exam-question
id: physics-tawjihi-2025-p085-q515
title: السؤال 515 — ص 84 — السؤال الأصلي 1
question: السؤال الثاني: ج- ماذا يحدث في كل من
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 84، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ماذا يحدث للقوة المغناطيسية المتبادلة بين سلكين لا نهائيين متوازيين يحملان تيارًا كهربائيًا عند مضاعفة البعد بينهما؟
final-answer:
**تقل القوة إلى النصف:** \\(F'=F/2\\)، عند ثبات التيارين والطول.
solution:
كل سلك يولد مجالًا يؤثر بقوة على السلك الآخر. للسلكين المستقيمين الطويلين نستخدم القوة لكل وحدة طول، حيث \\(d\\) المسافة العمودية بينهما؛ التياران المتوافقان يتجاذبان والمتعاكسان يتنافران.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



عند ثبات التيارين والطول، تعتمد القوة على مقلوب المسافة بين السلكين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub><mi>L</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



نعوض بالمسافة الجديدة التي تساوي ضعف الأصلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>F</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub><mi>L</mi></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>2</mn><mi>d</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>F</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mi>F</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p085-q516
title: السؤال 516 — ص 84 — السؤال الأصلي 2
question: السؤال الثاني: ج- ماذا يحدث في كل من
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 84، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم مشحون عموديًا على مجال مغناطيسي منتظم فاتخذ مسارًا دائريًا. أجب عما يأتي:

1. هل يبذل المجال المغناطيسي شغلًا على الجسم المشحون؟ فسر إجابتك.
2. ماذا يحدث لنصف قطر المسار الدائري إذا أصبحت سرعة الجسم المشحون مثلي ما كانت عليه؟
3. ماذا يحدث لنصف قطر المسار الدائري إذا أصبحت شدة المجال المغناطيسي ثلث ما كانت عليه؟
final-answer:
1. **لا يبذل شغلًا**؛ لأن القوة المغناطيسية عمودية على الإزاحة اللحظية.
2. **يتضاعف نصف القطر:** \\(r'=2r\\).
3. **يصبح نصف القطر ثلاثة أمثاله:** \\(r'=3r\\).
solution:
مقدار القوة المغناطيسية على شحنة سرعتها عمودية على المجال هو \\(|q|vB\\). وهي عمودية على السرعة، فتغير الاتجاه وتعمل قوةً مركزية.

الشغل يقيس تأثير القوة في اتجاه الإزاحة. القوة عمودية على الإزاحة اللحظية، وجيب تمام \\(90^{\\circ}\\) صفر، لذلك لا يبذل المجال شغلاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><msub><mi>F</mi><mi>B</mi></msub><mi mathvariant="normal">Δ</mi><mi>s</mi><mi>cos</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نساوي القوة المغناطيسية بالمركزية لنربط نصف القطر بالسرعة والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب المعادلة في \\(r\\) ونقسم على \\(|q|vB\\) غير الصفري، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



إذا تضاعفت السرعة مع ثبات باقي العوامل، يتضاعف نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>r</mi><mi>v</mi><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy="false">(</mo><mn>2</mn><mi>v</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>r</mi><mi>v</mi><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mn>2</mn><mi>r</mi></mrow></math>
\`\`\`



إذا أصبح المجال ثلث قيمته مع ثبات السرعة، يصبح نصف القطر ثلاثة أمثال قيمته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>r</mi><mi>B</mi><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mo stretchy="false">(</mo><mi>B</mi><mi mathvariant="normal">/</mi><mn>3</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>r</mi><mi>B</mi><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mn>3</mn><mi>r</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p086-q517
title: السؤال 517 — ص 85 — السؤال الأصلي 1
question: السؤال الثاني: د- أجب عن الأسئلة التالية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 85، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح الأثر الذي يحدثه المجال المغناطيسي على الجسيمات المشحونة داخل المسرع النووي.
final-answer:
**يغيّر اتجاه حركة الجسيمات ويوجهها في أقواس دائرية**، دون أن يزيد طاقتها الحركية بمفرده.
solution:
يجعل المجال المغناطيسي قوةً عمودية على سرعة الجسيم المشحون. عند الحركة العمودية على المجال تتجه هذه القوة نحو مركز المسار؛ لذلك تسمى قوة مركزية وتوجه الجسيم في أقواس دائرية داخل المسرع.

القوة لا تملك مركبة في اتجاه الإزاحة اللحظية، فلا تبذل شغلاً ولا تزيد الطاقة الحركية بمفردها. دورها تغيير اتجاه الحركة، بينما يتولى المجال الكهربائي زيادة سرعة الجسيم عند مروره في الفجوة بين نصفي السيكلترون.

[آلية عمل السيكلترون في الكتاب الكامل، الصفحة \\(114\\) المطبوعة، صفحة \\(\\mathrm{PDF}118\\)](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=118).
:::

:::exam-question
id: physics-tawjihi-2025-p086-q518
title: السؤال 518 — ص 85 — السؤال الأصلي 2
question: السؤال الثاني: د- أجب عن الأسئلة التالية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 85، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قذف جسم مشحون عموديًا على مجال مغناطيسي منتظم، فاتخذ مسارًا دائريًا. ماذا يحدث لنصف قطر المسار الدائري إذا أصبحت سرعة الجسم المشحون مثلي ما كانت عليه؟ فسر إجابتك.
final-answer:
**يتضاعف نصف قطر المسار:** \\(r'=2r\\)؛ لأنه يتناسب طرديًا مع السرعة عند ثبات الكتلة والشحنة والمجال.
solution:
عندما تتحرك الشحنة عموديًا على مجال منتظم، تكون القوة المغناطيسية عمودية على سرعتها فتقوم بدور القوة المركزية. تغيّر اتجاه الحركة ولا تبذل شغلًا، فيبقى مقدار السرعة ثابتًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب المعادلة في \\(r\\) ونقسم على \\(|q|vB\\) غير الصفري، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



نصف القطر يتناسب مع السرعة عند ثبات الكتلة والشحنة والمجال.

نعوض بسرعة تساوي مثلي السرعة الأصلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>r</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy="false">(</mo><mn>2</mn><mi>v</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>r</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>2</mn><mi>r</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p087-q522
title: السؤال 522 — ص 86 — السؤال الأصلي 1
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 86، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور سلكين لا نهائيين المسافة بينهما \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، وملفًا دائريًا مكونًا من لفة واحدة ونصف قطره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` ويمر به تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` عكس عقارب الساعة، ويبعد مركزه عن السلك الثاني \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`. بالاعتماد على القيم المثبتة على الشكل أجب:

1. القوة المغناطيسية المتبادلة بين السلكين والمؤثرة على وحدة الأطوال لكل منهما.
2. مقدار واتجاه القوة المغناطيسية المؤثرة على جسم شحنته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mn>2</mn><mtext> </mtext><mrow><mi>μ</mi><mi mathvariant="normal">C</mi></mrow></mrow></math>\` ويتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` باتجاه محور السينات الموجب لحظة مروره بمركز الملف \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\`.

![سلكان متوازيان بتياري 9 A و3 A وملف دائري تياره 1 A ونقطة C.](assets/lessons/curriculum-evidence/ff84bffdebb36f757337.webp)
final-answer:
1. **القوة لكل وحدة طول:** \\(9\\times10^{-5}\\,\\mathrm{N/m}\\)، **تجاذب**.
2. **القوة على الشحنة:** \\(1.6\\times10^{-5}\\,\\mathrm{N}\\) **إلى أعلى** \\((+Y)\\).
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/ff84bffdebb36f757337.webp)

أولاً، القوة المتبادلة بين السلكين لكل متر. السلكان متوازيان وتياراهما في الاتجاه نفسه، لذلك يتجاذبان. مجال كل منهما يؤثر في الآخر؛ والعلاقة لكل وحدة طول هي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



نحول المسافة بينهما بقسمة السنتيمتر على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>6</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.06</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mo stretchy="false">(</mo><mn>9</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow><mn>0.06</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>9</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



ثانياً، نحتاج المجال الكلي عند \\(C\\) لحساب القوة على الشحنة. مجال السلك الطويل عند بعد عمودي \\(r\\) هو:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



المركز أسفل السلكين. بعده عن العلوي يساوي مجموع المسافتين، وبعده عن السفلي \\(3\\,\\mathrm{cm}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn>6</mn><mo>+</mo><mn>3</mn><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.09</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.03</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع التيار إلى اليمين؛ التفاف الأصابع يعطي مجالاً للداخل عند نقطة أسفل كل سلك. لذا نجمع المقدارين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>9</mn><mn>0.09</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>0.03</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>100</mn><mo>+</mo><mn>100</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مجال الحلقة الواحدة عند مركزها يحسب من نصف قطرها \\(R\\). تيارها عكس عقارب الساعة؛ بلف أصابع اليد اليمنى مع التيار يشير الإبهام إلى الخارج:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mi>c</mi></msub></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(\\pi\\) ونقسم المعاملات:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نختار الخارج موجباً؛ المجالان متعاكسان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>−</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



أي أن المجال الكلي مقداره \\(2\\times 10^{-5}\\,\\mathrm{T}\\) للداخل. مقدار القوة على الشحنة المتحركة هو \\(|q|vB \\sin \\theta\\)، حيث \\(\\theta\\) الزاوية بين السرعة والمجال. هنا السرعة لليمين والمجال للداخل، فهما متعامدان وجيب الزاوية \\(1\\). الميكرو يعني \\(10^{-6}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>16</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



للشحنة الموجبة، نوجه أصابع اليد اليمنى مع السرعة ثم نحو المجال؛ يشير الإبهام إلى أعلى. إذن القوة باتجاه \\(+Y\\).
:::

:::exam-question
id: physics-tawjihi-2025-p087-q523
title: السؤال 523 — ص 86 — السؤال الأصلي 2
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 86، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتسارع بروتون من السكون خلال فرق جهد مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1000</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، ثم يدخل مجالًا مغناطيسيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` بشكل عمودي على خطوط المجال المغناطيسي. إذا علمت أن كتلة البروتون \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` وشحنته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>\`، أوجد:

1. نصف قطر مسار البروتون.
2. الزمن الدوري له.
3. التردد الزاوي لحركة البروتون.
final-answer:
1. **نصف القطر:** \\(0.114\\,\\mathrm{m}\\) تقريبًا.
2. **الزمن الدوري:** \\(1.64\\times10^{-6}\\,\\mathrm{s}\\) تقريبًا.
3. **التردد الزاوي:** \\(3.83\\times10^6\\,\\mathrm{rad/s}\\) تقريبًا.
solution:
المعطيات: بروتون يبدأ من السكون، وفرق الجهد \\(1000\\,\\mathrm{V}\\)، والمجال \\(0.04\\,\\mathrm{T}\\). المطلوب نصف القطر وزمن الدورة والتردد الزاوي.

أولًا نجد سرعة دخوله المجال. الشغل الكهربائي يساوي الشحنة في مقدار فرق الجهد، ويتحول هنا إلى طاقة حركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نضرب في \\(2\\) ثم نقسم على الكتلة، ونأخذ الجذر الموجب لمقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>q</mi><mi>V</mi></mrow><mi>m</mi></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mn>3</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup></mrow></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>16</mn></mrow></msup></mrow><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup></mrow></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>1.9162</mn><mo>×</mo><msup><mn>10</mn><mn>11</mn></msup></mrow></msqrt><mo>≈</mo><mn>4.38</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



داخل المجال تكون القوة المغناطيسية عمودية على السرعة؛ فتغيّر الاتجاه وتقوم بدور القوة المركزية دون تغيير مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب في نصف القطر ونقسم على \\(qvB\\)؛ السرعة والشحنة والمجال غير صفرية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi>q</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4.38</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.04</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>7.3146</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>22</mn></mrow></msup></mrow><mrow><mn>6.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>21</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>0.114</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



زمن الدورة هو محيط الدائرة مقسومًا على السرعة. بالتعويض عن نصف القطر تُختصر السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow><mi>v</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>v</mi></mfrac><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi>q</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi></mrow><mrow><mi>q</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>6.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>21</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>1.64</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`



التردد الزاوي يقيس الزاوية المقطوعة في الثانية؛ الدورة الكاملة مقدارها \\(2\\pi\\) راديان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac></mrow></math>
\`\`\`



نعوض بالزمن الدوري ونختصر \\(2\\pi\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>q</mi><mi>B</mi></mrow><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>6.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>21</mn></mrow></msup></mrow><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>3.83</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



النتائج: نصف القطر \\(0.114\\,\\mathrm{m}\\)، وزمن الدورة \\(1.64\\times 10^{-6}\\,\\mathrm{s}\\)، والتردد الزاوي \\(3.83\\times 10^{6}\\,\\mathrm{rad/s}\\) تقريبًا.
:::

:::exam-question
id: physics-tawjihi-2025-p087-q524
title: السؤال 524 — ص 86 — السؤال الأصلي 3
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 86، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلكان لا نهائيان بينهما ملف دائري مكون من لفتين يكاد يلامس كلا السلكين وفي نفس المستوى. مر بروتون من مركز الملف الدائري بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` باتجاه محور السينات الموجب وفي نفس المستوى فتأثر بقوة مغناطيسية باتجاه محور الصادات السالب مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>57.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>20</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>\`. بالاعتماد على القيم المثبتة على الشكل احسب:

1. القوة المغناطيسية المتبادلة بين السلكين والمؤثرة في وحدة الطول لكل منهما.
2. مقدار واتجاه التيار المار في الملف الدائري.

![ملف دائري نصف قطره 4π cm بين سلكين بتياري 6 A و10 A.](assets/lessons/curriculum-evidence/9f82078b493469a72d9c.webp)
final-answer:
1. **القوة لكل وحدة طول:** \\(4.77\\times10^{-5}\\,\\mathrm{N/m}\\) تقريبًا، **تجاذب**.
2. **تيار الملف:** \\(\\dfrac{4}{\\pi}\\,\\mathrm{A}\\approx1.273\\,\\mathrm{A}\\)، **عكس عقارب الساعة**.
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/9f82078b493469a72d9c.webp)

الحلقة تكاد تلامس السلكين؛ نهمل الفجوتين الصغيرتين في هذا التقريب، فتكون المسافة بينهما نحو ضعف نصف قطرها. نحول السنتيمتر إلى المتر بالقسمة على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>0.08</mn><mi>π</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



أولاً، التياران موافقان أحدهما للآخر، فتكون القوة تجاذباً. القوة المتبادلة لكل وحدة طول بين سلكين طويلين تعتمد على حاصل ضرب التيارين والمسافة \\(d\\) بينهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow><mrow><mn>0.08</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>4.77</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



ثانياً، القوة على البروتون الموجب تتبع قاعدة اليد اليمنى: الأصابع مع السرعة ثم نحو المجال، والإبهام مع القوة. السرعة يميناً والقوة لأسفل، لذلك المجال الكلي نحو الناظر. ولأن السرعة عمودية على المجال، \\(F=qvB\\)؛ نعزل \\(B\\) بالقسمة على \\(qv\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>57.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>20</mn></mrow></msup></mrow><mrow><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>6</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>5.76</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup></mrow><mrow><mn>9.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>15</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mn>6</mn><mi>π</mi></mfrac><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مجال كل سلك طويل يحسب من \\(B=\\mu _{0}I/(2\\pi R)\\)، لأن بعد المركز عن كليهما \\(R\\). نوجه الإبهام مع التيار إلى أعلى؛ التفاف الأصابع يعطي مجال الأيمن للخارج عند يساره ومجال الأيسر للداخل عند يمينه. نختار الخارج موجباً ونطرح:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mn>10</mn><mo>−</mo><mn>6</mn></mrow><mrow><mn>0.04</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مجال الحلقة هو الفرق بين المحصلة المطلوبة ومجال السلكين، ويكون للخارج.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>−</mo><msub><mi>B</mi><mi>w</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>4</mn><mi>π</mi></mfrac><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



عند مركز ملف دائري، تتضافر مجالات \\(N\\) لفات فتعطينا \\(B_{c}=\\mu _{0}NI/(2R)\\). هنا \\(N=2\\). نضرب في \\(2R\\) ونقسم على \\(\\mu _{0}N\\) لعزل التيار. المجال للخارج يتطلب دوران التيار عكس عقارب الساعة بقاعدة اليد اليمنى:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi><msub><mi>B</mi><mi>c</mi></msub></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi></mrow></mfrac></mrow></math>
\`\`\`



نعوّض نصف القطر وعدد اللفات والمجال الذي وجدناه، ثم نبسّط البسط والمقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.04</mn><mi>π</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mi mathvariant="normal">/</mi><mi>π</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>4</mn><mi>π</mi></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi><mo>≈</mo><mn>1.273</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::



:::exam-question
id: physics-tawjihi-2025-p088-q526
title: السؤال 526 — ص 87 — السؤال الأصلي 5
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 87، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` وعدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn></mrow></math>\` لفة مغمور في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` باتجاه الشرق. مر إلكترون كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>31</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` من النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` فانحرف في مسار دائري تردده الزاوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5.1</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`. بالاعتماد على الشكل أجب:

1. لماذا تكون شدة المجال خارج الملف الحلزوني الذي طوله أكبر بكثير من قطره صغيرة جدًا؟
2. احسب شدة التيار الكهربائي المار في الملف الحلزوني.

![ملف حلزوني داخل مجال خارجي واتجاه لفاته والنقطة a.](assets/lessons/curriculum-evidence/48fa5daf936b88381b74.webp)
final-answer:
1. لأن **مساهمات اللفات خارج الملف الطويل تتعاكس وتلغي بعضها تقريبًا**.
2. **شدة التيار:** \\(1.25\\,\\mathrm{A}\\) تقريبًا.
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/48fa5daf936b88381b74.webp)

أولاً، خارج الملف الطويل تتعاكس معظم مساهمات اللفات، فتلغي إحداها الأخرى تقريباً. داخله تتضافر، لذلك يكون المجال الخارجي صغيراً جداً مقارنة بالداخلي.

ثانياً، نستخرج المجال الكلي الذي يدور فيه الإلكترون. التردد الزاوي هو الزاوية المقطوعة في الثانية؛ في الحركة الدائرية المغناطيسية يعطى بالعلاقة الآتية، حيث \\(e\\) مقدار شحنة الإلكترون و\\(m\\) كتلته:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>e</mi><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow><mi>m</mi></mfrac></mrow></math>
\`\`\`



نضرب في \\(m\\) ونقسم على \\(e\\) غير الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>ω</mi></mrow><mi>e</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>31</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5.1</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>4.641</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>2.900625</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نلف أصابع اليد اليمنى مع تيار اللفات؛ الجزء الأمامي يسري فيه التيار إلى أسفل فيشير الإبهام شرقاً، موافقاً للمجال الخارجي. لذلك مقدار المحصلة هو مجموع المجالين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>−</mo><msub><mi>B</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mn>2.900625</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo>−</mo><mn>0.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mn>2.500625</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مجال الملف الحلزوني الطويل يتناسب مع التيار وكثافة اللفات \\(N/L\\)؛ حيث \\(N\\) عدد اللفات و\\(L\\) طول الملف. نحول الطول بقسمة السنتيمتر على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>20</mn><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.20</mn><mi>π</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`



نضرب في \\(L\\) ونقسم على \\(\\mu _{0}N\\) لعزل التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><msub><mi>B</mi><mi>s</mi></msub><mi>L</mi></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>2.500625</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.20</mn><mi>π</mi><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>100</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>5.00125</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>≈</mo><mn>1.25</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p088-q527
title: السؤال 527 — ص 87 — السؤال الأصلي 6
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 87، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك مستقيم طويل جدًا يمر به تيار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` مغمور في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` باتجاه الناظر كما في الشكل المجاور، احسب:

1. القوة المغناطيسية المؤثرة في جزء من السلك طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`.
2. شدة المجال المغناطيسي الكلي في النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\`.
3. القوة المغناطيسية المؤثرة في إلكترون يمر بالنقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` باتجاه الشرق.

![سلك مستقيم داخل مجال منتظم ونقطة a على بعد 2 cm.](assets/lessons/curriculum-evidence/cf7cde372a2c22aeb51c.webp)
final-answer:
1. **القوة على السلك:** \\(2\\times10^{-4}\\,\\mathrm{N}\\) إلى أعلى.
2. **المجال عند \\(a\\):** \\(10^{-5}\\,\\mathrm{T}\\) نحو الناظر \\((+Z)\\).
3. **القوة على الإلكترون:** \\(9.6\\times10^{-19}\\,\\mathrm{N}\\) إلى أعلى \\((+Y)\\).
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/cf7cde372a2c22aeb51c.webp)

أولاً، السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نحدد اتجاه القوة على السلك بقاعدة اليد اليمنى: الأصابع مع التيار ثم نحو المجال، فيشير الإبهام إلى القوة.

السلك عمودي على المجال الخارجي؛ نحسب القوة على الطول المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



التيار لليسار والمجال للخارج؛ القوة إلى أعلى.

نأخذ \\(+X\\) نحو اليمين، و\\(+Y\\) إلى أعلى، و\\(+Z\\) نحو الناظر؛ ثم نطبق قاعدة اليد اليمنى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`



ثانياً، نوجه إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يعطي المجال. التيار لليسار فيكون مجاله عند \\(a\\) فوقه إلى داخل الصفحة.

مجال السلك الطويل يعتمد على بعد النقطة عنه، وليس على طول الجزء الذي حسبنا قوته. نحول \\(2\\,\\mathrm{cm}\\) إلى \\(0.02\\,\\mathrm{m}\\)، ثم نستخدم علاقة مجال السلك الطويل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>4</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال الخارجي للخارج وأكبر مقدارًا؛ نطرح المجالين المتعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>−</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mi>a</mi></msub><mo>∥</mo><mo>+</mo><mi>Z</mi></mrow></math>
\`\`\`



ثالثاً، القوة على الإلكترون تتوقف على المجال الكلي عند \\(a\\). مقدارها \\(|q|vB \\sin \\theta\\)؛ حيث \\(\\theta\\) الزاوية بين السرعة والمجال. السرعة للشرق والمجال للخارج، فهما متعامدان. مقدار شحنة الإلكترون \\(e=1.6\\times 10^{-19}\\,\\mathrm{C}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mi>e</mi><mi>v</mi><msub><mi>B</mi><mi>a</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mn>9.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الضرب الاتجاهي للسرعة نحو اليمين والمجال للخارج يعطي أسفلًا للشحنة الموجبة؛ نعكس الاتجاه لأن الإلكترون سالب فتكون القوة لأعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>∥</mo><mo>−</mo><mi>Y</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>e</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>e</mi></msub><mo>∥</mo><mo>+</mo><mi>Y</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p088-q528
title: السؤال 528 — ص 87 — السؤال الأصلي 7
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 87، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور سلكًا يسري فيه تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` في الاتجاه المبين. أجب عن الآتية:

1. ما شدة المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\`؟
2. حدد اتجاه المجال الكهربائي الواجب أن يؤثر عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\` بحيث تنعدم قوة لورنتز المؤثرة على البروتونات المارة باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>Y</mi></mrow></math>\`.

![سلك ذو قوسين بنصفي قطر 3 cm و5 cm حول النقطة C.](assets/lessons/curriculum-evidence/d477660d1887fd9b6359.webp)
final-answer:
1. **المجال عند \\(C\\):** \\(2.93\\times10^{-5}\\,\\mathrm{T}\\) تقريبًا، نحو الناظر \\((+Z)\\).
2. **اتجاه المجال الكهربائي:** إلى اليسار \\((-X)\\).
solution:
لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/d477660d1887fd9b6359.webp)

المجال عند المركز يتناسب مع مقدار القوس؛ مجال القوس يساوي كسر دورته مضروبًا في مجال دائرة كاملة لها نصف القطر والتيار نفسيهما. القوس الخارجي ثلاثة أرباع دائرة، والداخلي ربع دائرة. الأجزاء المستقيمة هنا شعاعية، فلا تسهم عند المركز. في قانون بيو سفار تتناسب مساهمة العنصر مع جيب الزاوية بين اتجاه التيار ومتجه البعد إلى \\(C\\)؛ الزاوية \\(0^{\\circ}\\) أو \\(180^{\\circ}\\) وجيبها صفر.

نلف أصابع اليد اليمنى مع تيار كل قوس، فيشير الإبهام إلى مجاله عند المركز. القوسان يدور فيهما التيار عكس عقارب الساعة، فيتجه مجالاهما نحو الناظر ونجمعهما. نحول \\(5\\,\\mathrm{cm}\\) إلى \\(0.05\\,\\mathrm{m}\\) و\\(3\\,\\mathrm{cm}\\) إلى \\(0.03\\,\\mathrm{m}\\).

للحلقة الكاملة \\(B=\\mu _{0}I/(2R)\\)؛ نضربه في كسر الدورة لكل قوس، ثم نجمع مساهمتيهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>2</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mrow><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow><mn>0.05</mn></mfrac><mo>+</mo><mfrac><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow><mn>0.03</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>15</mn><mo>+</mo><mn>8.3333</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>≈</mo><mn>2.93</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>∥</mo><mo>+</mo><mi>Z</mi></mrow></math>
\`\`\`



سرعة البروتون نحو الأعلى والمجال نحو الناظر، فتكون القوة المغناطيسية إلى اليمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`



حتى تنعدم قوة لورنتز نحتاج قوة كهربائية إلى اليسار؛ والبروتون موجب، فيتجه المجال الكهربائي إلى اليسار أيضًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mover accent="true"><mi>E</mi><mo>⃗</mo></mover><mo>=</mo><mo>−</mo><mi>q</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>E</mi><mo>⃗</mo></mover><mo>∥</mo><mo>−</mo><mi>X</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p089-q530
title: السؤال 530 — ص 88 — السؤال الأصلي 9
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 88، السؤال 9
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور سلكين مستقيمين طويلين لا نهائيين في الطول يحمل كل منهما تيارًا كهربائيًا. إذا مرت شحنة موجبة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mrow><mi>μ</mi><mi mathvariant="normal">C</mi></mrow></mrow></math>\` بالنقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` بسرعة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` باتجاه المحور الصادي الموجب فإنها تتأثر بقوة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>\` باتجاه محور السينات الموجب. جد مقدار واتجاه التيار في السلك الثاني.

![سلكان مستقيمان والنقطة a وأبعاد 3 cm و2 cm والتيار I₁=2 A.](assets/lessons/curriculum-evidence/1fb71e41f427d2aab7e0.webp)
final-answer:
**تيار السلك الثاني:** \\(18\\,\\mathrm{A}\\) **إلى أسفل** \\((-Y)\\).
solution:
البادئة ميكرو تعني \\(10^{-6}\\) من الوحدة الأساسية؛ نُبقيها صريحة عند التعويض.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/1fb71e41f427d2aab7e0.webp)

هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

الشحنة موجبة وسرعتها لأعلى وقوتها يميناً، لذلك قاعدة اليد اليمنى تقتضي أن يكون المجال المحصل نحو الناظر. السرعة عمودية على هذا المجال، فمقدار القوة \\(F=qvB\\)؛ نقسم على \\(qv\\) غير الصفري لاستخراج \\(B\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mi>q</mi><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mrow><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mn>0.01</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



السلك الأول على يمين النقطة. بتوجيه إبهام اليد اليمنى مع تياره لأسفل يكون مجاله عند النقطة للداخل. نحول المسافتين بقسمة السنتيمتر على \\(100\\): \\(r_{1}=0.02\\,\\mathrm{m}\\)، و\\(r_{2}=0.03\\,\\mathrm{m}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>2</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>−</mo><mi>Z</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نختار الخارج موجبًا؛ مجال السلك الثاني يجب أن يعوض مجال الأول ويعطي المحصلة المطلوبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo>+</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mn>1.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



السلك الثاني يبعد \\(3\\,\\mathrm{cm}\\). بقاعدة قبضة اليد اليمنى، إعطاء مجال للخارج عند النقطة يمينه يتطلب تياراً لأسفل. لعزل تياره من \\(B_{2}=\\mu _{0}I_{2}/(2\\pi r_{2})\\)نضرب في \\(2\\pi r_{2}\\)ثم نقسم على \\(\\mu _{0}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>r</mi><mn>2</mn></msub><msub><mi>B</mi><mn>2</mn></msub></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>0.03</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>3.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mn>2</mn></msub><mo>∥</mo><mo>−</mo><mi>Y</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p089-q531
title: السؤال 531 — ص 88 — السؤال الأصلي 10
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 88، السؤال 10 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل سلكان طويلان جداً عموديان على الصفحة: السلك الأول على اليمين يحمل تياراً\\(3\\,\\mathrm{A}\\) إلى داخل الصفحة، والثاني على اليسار يحمل \\(4.5\\,\\mathrm{A}\\) نحو الناظر. تبعد \\(C\\) عن الأيسر \\(0.3\\,\\mathrm{m}\\) وعن الأيمن \\(0.4\\,\\mathrm{m}\\)، والزاوية عند \\(C\\) قائمة. احسب:
1. مقدار واتجاه القوة التي يؤثر بها الأول على \\(0.25\\,\\mathrm{m}\\) من الثاني.
2. مقدار واتجاه محصلة المجال عند \\(C\\).
استخدم\\(\\mu _{0}=4\\pi \\times 10^{-7}\\,\\mathrm{T\\,m}\\)/أمبير.

![موضع السلكين والنقطةC](assets/lessons/curriculum-evidence/c3c37b6e75b35d081eb2.webp)
final-answer:
1. **القوة على السلك الثاني:** \\(1.35\\times10^{-6}\\,\\mathrm{N}\\) إلى اليسار، بعيدًا عن السلك الأول.
2. **المجال عند \\(C\\):** \\(3.35\\times10^{-6}\\,\\mathrm{T}\\) تقريبًا، إلى أعلى اليسار بزاوية \\(63.4^\\circ\\) فوق اتجاه اليسار.
solution:
المسافة بين السلكين وتر مثلث قائم؛ نستخدم فيثاغورس.

![الأبعاد 0.3و0.4م والزاوية القائمة](assets/lessons/curriculum-evidence/c3c37b6e75b35d081eb2.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><msqrt><mrow><msup><mn>0.3</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0.4</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mn>0.25</mn></msqrt><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



القوة على طول\\(\\ell\\)من سلكين طويلين تساوي \\(\\mu _{0}I_{1}I_{2}\\ell /(2\\pi d)\\). والتياران متعاكسان، فتكون القوة تنافراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.25</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>1.35</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



القوة على السلك الثاني الأيسر نحو اليسار، بعيداً عن الأول.

لحساب المجال، نستخدم أن مجال السلك الطويل يتناسب مع التيار وعكسياً مع البعد عنه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>4.5</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>0.3</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>3.0</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>0.4</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نختار موضع الأيسر أصلاً، واليمين\\(+x\\) والأعلى\\(+y\\). إحداثيا الأيمن(\\(0.5\\)، \\(0\\)). لإيجاد اتجاهي المجالين من هندسة الشكل، نرمز \\(C\\) بـ(\\(x\\)، \\(y\\)).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mn>0.3</mn><mn>2</mn></msup><mo>=</mo><mn>0.09</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn>0.5</mn><mo>−</mo><mi>x</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mn>0.4</mn><mn>2</mn></msup><mo>=</mo><mn>0.16</mn></mrow></math>
\`\`\`



نطرح المعادلتين لإلغاء \\(x^{2}\\)و \\(y^{2}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.25</mn><mo>−</mo><mi>x</mi><mo>=</mo><mn>0.16</mn><mo>−</mo><mn>0.09</mn><mo>=</mo><mn>0.07</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>x</mi><mo>=</mo><mn>0.18</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>y</mi><mo>=</mo><msqrt><mrow><mn>0.09</mn><mo>−</mo><msup><mn>0.18</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>0.24</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



المجال مماس لدوائر مركزها السلك. بقبضة اليد اليمنى، مجال الأيسر عند \\(C\\) نحو اليسار والأعلى. نسب مركبتيه هي\\(-0.24/0.3\\) و\\(+0.18/0.3\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>L</mi><mi>x</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>0.8</mn><mo stretchy="false">(</mo><mn>3.0</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>2.4</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>L</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0.6</mn><mo stretchy="false">(</mo><mn>3.0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1.8</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



عن السلك الأيمن، إزاحة \\(C\\) هي(\\(-0.32\\)، \\(0.24\\))م. تياره إلى الداخل، فيدور مجاله مع عقارب الساعة؛ لذلك مركبتاه عند \\(C\\) إلى اليمين والأعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>R</mi><mi>x</mi></mrow></msub><mo>=</mo><mfrac><mn>0.24</mn><mn>0.4</mn></mfrac><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.9</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>R</mi><mi>y</mi></mrow></msub><mo>=</mo><mfrac><mn>0.32</mn><mn>0.4</mn></mfrac><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1.2</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نجمع المركبات المتناظرة، ثم نستخدم فيثاغورس للمحصلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><mo>−</mo><mn>2.4</mn><mo>+</mo><mn>0.9</mn><mo>=</mo><mo>−</mo><mn>1.5</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>y</mi></msub><mo>=</mo><mn>1.8</mn><mo>+</mo><mn>1.2</mn><mo>=</mo><mn>3.0</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1.5</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><msup><mn>3</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>3.35</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



الاتجاه نحو أعلى اليسار. زاويته فوق الأفقي المتجه لليسار هي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>α</mi><mo>=</mo><msup><mrow><mi>tan</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>3</mn><mn>1.5</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><msup><mn>63.4</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



النتيجتان: قوة \\(1.35\\times 10^{-6}\\,\\mathrm{N}\\) لليسار، ومجال \\(3.35\\times 10^{-6}\\,\\mathrm{T}\\) بزاوية \\(63.4^{\\circ}\\)فوق اتجاه اليسار.
:::

:::exam-question
id: physics-tawjihi-2025-p089-q532
title: السؤال 532 — ص 88 — السؤال الأصلي 11
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 88، السؤال 11
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلكان مستقيمان لا نهائيان ومتوازيان \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow></math>\` يسري في كل منهما تيار كهربائي كما في الشكل، ومغموران في مجال مغناطيسي منتظم مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\`. إذا علمت أن المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` والناتج عن السلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>x</mi></mrow></math>\` يساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\`، احسب:

1. التيار الكهربائي المار في السلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>x</mi></mrow></math>\`.
2. المجال المغناطيسي الكلي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\`.
3. مقدار القوة المغناطيسية المؤثرة على وحدة الأطوال من السلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>y</mi></mrow></math>\`.

![سلكان x وy داخل مجال منتظم والنقطة a والتيار 16 A في y.](assets/lessons/curriculum-evidence/21831c2ad30cfb2fcc87.webp)
final-answer:
1. **تيار السلك \\(x\\):** \\(20\\,\\mathrm{A}\\).
2. **المجال الكلي عند \\(a\\):** \\(3.6\\times10^{-5}\\,\\mathrm{T}\\) إلى داخل الصفحة.
3. **القوة لكل وحدة طول من \\(y\\):** \\(3.84\\times10^{-4}\\,\\mathrm{N/m}\\).
solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/21831c2ad30cfb2fcc87.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



نستخرج تيار السلك الأول من مجاله عند \\(a\\). البعدان في الرسم \\(0.2\\,\\mathrm{m}\\) و\\(0.8\\,\\mathrm{m}\\)؛ نستعملهما بالمتر مباشرة. نضرب علاقة المجال في \\(2\\pi r\\) ونقسم على \\(\\mu _{0}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi><msub><mi>B</mi><mi>x</mi></msub></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع تيار السلك الثاني لأعلى؛ التفاف الأصابع يعطي مجاله نحو الناظر عند \\(a\\) الواقعة يساره. بعده عنها \\(0.80\\,\\mathrm{m}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>y</mi><mo separator="true">,</mo><mi>a</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>16</mn><mn>0.80</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>y</mi><mo separator="true">,</mo><mi>a</mi></mrow></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



بالقاعدة نفسها، مجال السلك الأول عند \\(a\\) الواقعة يمينه للداخل، والخارجي للداخل كما تدل ×. نختار الخارج موجباً ونجمع بإشارات الاتجاه:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>a</mi><mo separator="true">,</mo><mi>z</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>+</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>a</mi><mo separator="true">,</mo><mi>z</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>3.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



لحساب القوة على السلك الثاني نستخدم المجال الخارجي ومجال السلك الأول عنده، ولا ندخل مجاله الذاتي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>0.20</mn><mo>+</mo><mn>0.80</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>x</mi><mo separator="true">,</mo><mi>y</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>20</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>x</mi><mo separator="true">,</mo><mi>y</mi></mrow></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجالان عند السلك الثاني للداخل، والتيار لأعلى؛ نحسب القوة لكل وحدة طول فتكون إلى اليسار.

قوة المجال على السلك تساوي \\(I L B\\) عند التعامد؛ بقسمة الطرفين على الطول نحصل على \\(F/L=I B\\). مجال السلك نفسه لا يدخل في القوة المؤثرة عليه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mi>y</mi></msub><mi>L</mi></mfrac><mo>=</mo><mn>16</mn><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>+</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mi>y</mi></msub><mi>L</mi></mfrac><mo>=</mo><mn>3.84</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p089-q533
title: السؤال 533 — ص 88 — السؤال الأصلي 12
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 88، السؤال 12
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` وعدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn></mrow></math>\` لفة يحمل تيارًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. احسب:

1. شدة المجال المغناطيسي على محور الملف.
2. إذا وضع سلك مستقيم طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` داخل الملف ومنطبقًا على محوره ومر به تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، احسب القوة المغناطيسية التي يتأثر بها السلك من مجال الملف.
final-answer:
1. **شدة المجال:** \\(4\\times10^{-4}\\,\\mathrm{T}\\).
2. **القوة على السلك:** \\(0\\,\\mathrm{N}\\).
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

داخل الملف الحلزوني الطويل يتناسب المجال مع كثافة اللفات \\(N/L\\) ومع تيار الملف \\(I\\)؛ حيث \\(N\\) عدد اللفات و\\(L\\) طول الملف:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



نحول طول الملف إلى المتر ثم نحسب المجال على محوره.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>20</mn><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>0.20</mn><mi>π</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>100</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mrow><mn>0.20</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>0.2</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



ثانياً، قوة المجال في سلك يحمل تياراً تتناسب مع الجزء من طوله العمودي على المجال. نرمز لطول السلك بـ\\(\\ell\\)ولتياره بـ \\(I_{\\mathrm{wire}}\\) تمييزاً لهما عن طول الملف وتياره، و\\(\\theta\\) الزاوية بين السلك والمجال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi></mrow></msub><mi mathvariant="normal">ℓ</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



السلك على محور الملف، ومجال الملف موازٍ لمحوره؛ لذلك الزاوية \\(0^{\\circ}\\)أو \\(180^{\\circ}\\)، وجيبها صفر في الحالتين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>0</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p089-q534
title: السؤال 534 — ص 88 — السؤال الأصلي 13
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 88، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، تمثل النقطتان \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">)</mo></mrow></math>\` مقطعي موصلين مستقيمين طويلين جدًا ومتعامدين مع مستوى الورقة. يمر في الأول تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>Z</mi></mrow></math>\`، ويمر في الثاني تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>15</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>Z</mi></mrow></math>\`. وتقع النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\` في مستوى الورقة وتبعد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>30</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` عن النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` و\`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` عن النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>b</mi></mrow></math>\`. احسب:

1. شدة المجال المغناطيسي الكلي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\`.
2. مقدار القوة التي يؤثر فيها أحد الموصلين على وحدة الأطوال من الآخر.

![الموصلان a وb والنقطة C ومثلث أبعاده 30 cm و40 cm.](assets/lessons/curriculum-evidence/2e4baab2e7e1c389576f.webp)
final-answer:
1. **شدة المجال الكلي:** \\(1.003\\times10^{-5}\\,\\mathrm{T}\\) تقريبًا.
2. **القوة لكل وحدة طول:** \\(6\\times10^{-5}\\,\\mathrm{N/m}\\)، **تجاذب**.
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/2e4baab2e7e1c389576f.webp)

كل سلك يولد مجالًا يؤثر بقوة على السلك الآخر. للسلكين المستقيمين الطويلين نستخدم القوة لكل وحدة طول، حيث \\(d\\) المسافة العمودية بينهما؛ التياران المتوافقان يتجاذبان والمتعاكسان يتنافران.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>d</mi></mrow></mfrac></mrow></math>
\`\`\`



المثلث قائم عند النقطة المطلوبة؛ نحسب البعد بين السلكين من ضلعيه بالمتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><msqrt><mrow><msup><mn>0.30</mn><mn>2</mn></msup><mo>+</mo><msup><mn>0.40</mn><mn>2</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mo>=</mo><mn>0.50</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحسب مجال كل سلك من \\(B=\\mu _{0}I/(2\\pi r)\\)؛ حيث \\(r\\) بعد \\(C\\) العمودي عن السلك. نوجه الإبهام مع التيار الخارج من الصفحة؛ التفاف الأصابع يحدد اتجاه كل مجال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>10</mn><mn>0.30</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>6.667</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>15</mn><mn>0.40</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mn>7.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



كل مجال عمودي على نصف القطر الواصل من سلكه إلى \\(C\\)؛ وبما أن نصفي القطر متعامدان في الرسم، فالمجالان متعامدان أيضًا. لذلك نستخدم فيثاغورس لمقدار المحصلة.

نقيس الزاوية من مجال السلك الأول باتجاه مجال الثاني؛ ظلها يساوي مقدار الثاني مقسوماً على الأول:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><msubsup><mi>B</mi><mi>a</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mi>b</mi><mn>2</mn></msubsup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><mn>6.667</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn>7.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>1.003</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>tan</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mfrac><msub><mi>B</mi><mi>b</mi></msub><msub><mi>B</mi><mi>a</mi></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mn>48.37</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



نحسب القوة لكل وحدة طول؛ التياران في الاتجاه نفسه فتكون تجاذبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>15</mn><mo stretchy="false">)</mo></mrow><mn>0.50</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>F</mi><mi>L</mi></mfrac><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p090-q535
title: السؤال 535 — ص 89 — السؤال الأصلي 14
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 89، السؤال 14
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك مستقيم طويل جدًا يمر فيه تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، مغمور في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` بعيدًا عن الناظر كما في الشكل المجاور. احسب:

1. شدة المجال المغناطيسي الكلي في النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` التي تبعد عن السلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`.
2. القوة المغناطيسية المؤثرة في بروتون يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` لحظة مروره بالنقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` بالاتجاه السيني السالب.

![سلك أفقي داخل مجال منتظم والنقطة a على بعد 2 cm.](assets/lessons/curriculum-evidence/3b2d91555b915d930b37.webp)
final-answer:
1. **المجال عند \\(a\\):** \\(2\\times10^{-5}\\,\\mathrm{T}\\) إلى داخل الصفحة \\((-Z)\\).
2. **القوة على البروتون:** \\(6.4\\times10^{-19}\\,\\mathrm{N}\\) إلى أسفل \\((-Y)\\).
solution:
لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3b2d91555b915d930b37.webp)

نحدد مجال السلك بقاعدة اليد اليمنى: الإبهام مع التيار والتفاف الأصابع يعطي المجال. التيار إلى اليسار والنقطة أسفله، لذلك مجاله نحو الناظر.

نستخدم مجال السلك الطويل \\(B=\\mu _{0}I/(2\\pi r)\\)، حيث \\(r\\) بعد النقطة عن السلك بالمتر. هنا \\(r=2/100=0.02\\,\\mathrm{m}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>2</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>+</mo><mi>Z</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



المجال الخارجي للداخل وأكبر مقدارًا؛ نطرح المجالين المتعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>a</mi><mo separator="true">,</mo><mi>z</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>+</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>a</mi><mo separator="true">,</mo><mi>z</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مقدار القوة على شحنة متحركة هو \\(|q|vB \\sin \\theta\\)؛ هنا البروتون يتحرك يساراً والمجال للداخل، فهما متعامدان وجيب الزاوية \\(1\\). نستعمل مقدار شحنة البروتون \\(1.6\\times 10^{-19}\\,\\mathrm{C}\\). قاعدة اليد اليمنى تجعل القوة إلى أسفل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>6.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p090-q537
title: السؤال 537 — ص 89 — السؤال الأصلي 16
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 89، السؤال 16
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور ثلاثة أسلاك مستقيمة طويلة جدًا يسري في كل منها تيار كهربائي. إذا علمت أن اتجاه محصلة القوى المؤثرة على السلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>b</mi></mrow></math>\` تصنع زاوية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>45</mn><mo>∘</mo></msup></mrow></math>\` مع محور السينات السالب، احسب مقدار واتجاه التيار الكهربائي في السلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\`.

![ثلاثة أسلاك a وb وc والتيارات عند a وb تساوي 3 A واتجاه محصلة القوة على b.](assets/lessons/curriculum-evidence/5170f8e11c705c29cd8d.webp)
final-answer:
**تيار السلك \\(C\\):** \\(4\\,\\mathrm{A}\\) **نحو الناظر** \\((+Z)\\).
solution:
تيار السلك الأول يعاكس تيار السلك الأوسط، فيدفعه إلى أسفل؛ نحسب هذه القوة لكل وحدة طول.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/5170f8e11c705c29cd8d.webp)

قوة كل وحدة طول بين سلكين متوازيين هي \\(\\mu _{0}I_{1}I_{2}/(2\\pi d)\\). التياران المختلفان اتجاهًا يتنافران؛ لذلك تؤثر قوة \\(a\\) في \\(b\\) إلى أسفل كما يوافق الرسم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mrow><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow><mn>0.06</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>F</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mi>L</mi></mfrac><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



المحصلة تتجه أسفل اليسار بزاوية \\(45^{\\circ}\\) من الاتجاه السيني السالب. ظل الزاوية هو مقدار المركبة الرأسية مقسوماً على الأفقية؛ لأن ظل \\(45^{\\circ}=1\\) يتساوى المقداران:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>tan</mi><mo>⁡</mo><msup><mn>45</mn><mo>∘</mo></msup><mo>=</mo><mfrac><msub><mi>F</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><msub><mi>F</mi><mrow><mi>c</mi><mi>b</mi></mrow></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>tan</mi><mo>⁡</mo><msup><mn>45</mn><mo>∘</mo></msup><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi>c</mi><mi>b</mi></mrow></msub><mo>=</mo><msub><mi>F</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>
\`\`\`



السلك \\(c\\) يمين \\(b\\). لتكون القوة الأفقية على \\(b\\) يساراً، يجب أن يتنافر التياران. تيار \\(b\\) للداخل، فيكون تيار \\(c\\) للخارج. نساوي القوتين ونختصر العامل المشترك \\(2\\times 10^{-7}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><msub><mi>I</mi><mi>c</mi></msub></mrow><mn>0.08</mn></mfrac><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow><mn>0.06</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><msub><mi>I</mi><mi>c</mi></msub></mrow><mn>0.08</mn></mfrac><mo>=</mo><mfrac><mn>9</mn><mn>0.06</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>9</mn><mo stretchy="false">(</mo><mn>0.08</mn><mo stretchy="false">)</mo></mrow><mrow><mn>3</mn><mo stretchy="false">(</mo><mn>0.06</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mi>c</mi></msub><mo>∥</mo><mo>+</mo><mi>Z</mi></mrow></math>
\`\`\`


:::



:::exam-question
id: physics-tawjihi-2025-p090-q539
title: السؤال 539 — ص 89 — السؤال الأصلي 18
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 89، السؤال 18
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم مشحون بشحنة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>\`، وكتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>28</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`، يدور بسرعة ثابتة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` في مسار دائري متعامد مع مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\`. احسب:

1. نصف قطر المسار الدائري للجسم.
2. الزمن الدوري لحركة الجسم.
3. الطاقة الحركية للجسم بعد أن يتم \\(100\\) دورة داخل المجال المغناطيسي.
final-answer:
1. **نصف القطر:** \\(0.125\\,\\mathrm{m}\\).
2. **الزمن الدوري:** \\(7.85\\times10^{-8}\\,\\mathrm{s}\\) تقريبًا.
3. **الطاقة الحركية بعد \\(100\\) دورة:** \\(2\\times10^{-14}\\,\\mathrm{J}\\).
solution:
أولاً، القوة المغناطيسية عمودية على السرعة؛ تؤدي دور القوة المركزية التي تحفظ المسار الدائري. نساوي مقدار القوة المغناطيسية بالقوة المركزية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi mathvariant="normal">/</mi><mi>r</mi></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(|q|vB\\) غير الصفري، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>28</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.1</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>21</mn></mrow></msup></mrow><mrow><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>20</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>0.125</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



زمن الدورة يساوي محيط المسار مقسومًا على السرعة، ونحتفظ بأس العشرة عند القسمة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow><mi>v</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>0.125</mn><mo stretchy="false">)</mo></mrow><msup><mn>10</mn><mn>7</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>0.25</mn><mi>π</mi></mrow><mn>10000000</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mn>7.85</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`



ثالثاً، الشغل يعتمد على مركبة القوة في اتجاه الإزاحة. القوة المغناطيسية عمودية عليها، فلا تبذل شغلاً ولا تغير الطاقة الحركية حتى بعد مئة دورة. الطاقة الحركية لجسم كتلته \\(m\\) وسرعته \\(v\\) هي نصف حاصل ضرب الكتلة في مربع السرعة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>28</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mn>7</mn></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>14</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p090-q540
title: السؤال 540 — ص 89 — السؤال الأصلي 19
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 89، السؤال 19
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف دائري موضوع في مستوى أفقي، نصف قطره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` وعدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn></mrow></math>\` لفات، يسري فيه تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` عكس اتجاه عقارب الساعة. يؤثر عليه مجال مغناطيسي خارجي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` نحو \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>X</mi></mrow></math>\`. احسب:

1. محصلة المجال المغناطيسي في مركز الملف الدائري.
2. القوة المغناطيسية المؤثرة على بروتون لحظة مروره من مركز الملف الدائري بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` نحو \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>X</mi></mrow></math>\`.
final-answer:
باعتبار الدوران عكس الساعة عند النظر من أعلى، و\\(+Z\\) إلى أعلى:

1. **المجال المحصل:** \\(\\sqrt{13}\\times10^{-5}\\,\\mathrm{T}\\)، بزاوية \\(33.7^\\circ\\) فوق اتجاه \\(+X\\) نحو \\(+Z\\).
2. **القوة على البروتون:** \\(6.4\\times10^{-19}\\,\\mathrm{N}\\)، نحو \\(-Y\\).
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

عند مركز ملف دائري تتضافر مجالات اللفات المتشابهة، لذا نضرب مجال اللفة الواحدة في عدد اللفات \\(N\\). نستخدم نصف القطر \\(R\\) بالمتر، لا القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

نفسر اتجاه الدوران بالنظر إلى الملف من أعلى، مع \\(+Z\\) إلى أعلى و\\(+X\\) في الاتجاه الأفقي المعطى. هذا الافتراض يحدد إشارات الاتجاه في الحل.

نحول نصف قطر الملف إلى المتر، ثم نحسب مجاله؛ بلف أصابع اليد اليمنى مع التيار عكس الساعة عند النظر من أعلى يشير الإبهام رأسياً نحو الأعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.1</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>0.02</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال الخارجي أفقي نحو\\(+X\\) ومجال الملف رأسي؛ نركب المجالين المتعامدين بفيثاغورس، لأن مقدار المحصلة هو وتر مثلث ضلعاه مقداراهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>=</mo><mo stretchy="false">(</mo><mn>3</mn><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>+</mo><mn>2</mn><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><msup><mn>3</mn><mn>2</mn></msup><mo>+</mo><msup><mn>2</mn><mn>2</mn></msup></mrow></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mn>13</mn></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



ظل زاوية المحصلة فوق\\(+X\\) يساوي المركبة الرأسية مقسومة على الأفقية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>tan</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mfrac><msub><mi>B</mi><mi>z</mi></msub><msub><mi>B</mi><mi>x</mi></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>tan</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mn>33.7</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



السرعة موازية للمجال الخارجي، لذلك يسهم مجال الملف وحده في القوة؛ اتجاهها نحو الصادات السالب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mi>q</mi><mi>v</mi><msub><mi>B</mi><mi>z</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>6.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p091-q541
title: السؤال 541 — ص 90 — السؤال الأصلي 20
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 90، السؤال 20
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور سلكين مستقيمين لا نهائيين طويلين جدًا ومتوازيين والمسافة بينهما \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، يمر في كل منهما تيار كهربائي وفي نفس الاتجاه. فإذا انعدمت شدة المجال المغناطيسي عند نقطة في منتصف المسافة بينهما، وكانت القوة المؤثرة على وحدة الأطوال من أي من السلكين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، احسب:

1. شدة التيار المار في كل من السلكين.
2. القوة المغناطيسية المؤثرة على بروتون يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>Y</mi></mrow></math>\` في نفس مستوى السلكين، عند مروره بالنقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>b</mi></mrow></math>\` التي تبعد عن السلك الأول مسافة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`.

![سلكان رأسيان متوازيان والنقطتان a وb والمسافة 2 m.](assets/lessons/curriculum-evidence/b98b768a9809b56c5352.webp)
final-answer:
1. **تيار كل سلك:** \\(I_1=I_2=20\\,\\mathrm{A}\\).
2. **القوة على البروتون:** \\(1.92\\times10^{-18}\\,\\mathrm{N}\\) نحو \\(+X\\).
solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b98b768a9809b56c5352.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

المجال ينعدم في المنتصف، فيتساوى التياران لأن المسافتين متساويتان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>I</mi><mn>1</mn></msub><mn>1</mn></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>2</mn></msub><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mi>I</mi></mrow></math>
\`\`\`



نستخدم قوة كل وحدة طول بين سلكين: \\(F/L=\\mu _{0}I_{1}I_{2}/(2\\pi d)\\). هنا \\(d=2\\,\\mathrm{m}\\) والتياران متساويان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><msup><mi>I</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math>
\`\`\`



نضرب الطرفين في \\(2\\) ثم نقسم على \\(2\\times 10^{-7}\\)لعزل مربع التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>I</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>400</mn></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن \\(I\\) يمثل مقدار شدة التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



النقطة خارج السلكين على بعد مترين من الأول وأربعة من الثاني؛ التياران لأسفل فيتجه المجالان نحو الناظر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>20</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>20</mn><mn>4</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>10</mn><mo>+</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مقدار القوة على الشحنة المتحركة \\(|q|vB \\sin \\theta\\). سرعة البروتون لأعلى والمجال للخارج، فهما متعامدان وجيب الزاوية \\(1\\). قاعدة اليد اليمنى للشحنة الموجبة تعطي القوة نحو \\(+X\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>1.92</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>18</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p091-q542
title: السؤال 542 — ص 90 — السؤال الأصلي 21
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 90، السؤال 21
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل ملفًا حلزونيًا عدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>7</mn></mrow></math>\` لفات وطوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` يمر فيه تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، غمر في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` نحو اليسار. جد:

1. محصلة شدة المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` داخل الملف الحلزوني.
2. القوة المغناطيسية المؤثرة في بروتون يتحرك بسرعة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` لحظة مروره بالنقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` التي تقع على محور الملف الحلزوني واتجاهه موازي لمحور الملف الحلزوني نحو \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>−</mo><mi>X</mi></mrow></math>\`.

![ملف حلزوني ومحور النقطة a وخطوط مجال خارجي نحو اليسار.](assets/lessons/curriculum-evidence/0a1ea189e9049fa73ffc.webp)
final-answer:
1. **المجال المحصل:** \\(1.1864\\times10^{-3}\\,\\mathrm{T}\\) إلى اليسار \\((-X)\\).
2. **القوة على البروتون:** \\(0\\,\\mathrm{N}\\).
solution:
في نموذج الملف الحلزوني الطويل يحسب المجال من كثافة اللفات \\(N/L\\) والتيار \\(I\\)؛ حيث \\(N\\) عدد اللفات و\\(L\\) طول الملف:

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0a1ea189e9049fa73ffc.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



الطول المحوري \\(3\\,\\mathrm{cm}\\) يساوي \\(3/100=0.03\\,\\mathrm{m}\\). نستخدم \\(N=7\\) لفات و\\(I=2\\,\\mathrm{A}\\)؛ نلف أصابع اليد اليمنى مع التيار المرسوم صاعداً في مقدمة اللفات، فيشير الإبهام إلى مجال الملف نحو اليسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>7</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>0.03</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><mn>5.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mi>π</mi></mrow><mn>0.03</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mn>5.864</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال الخارجي أيضًا نحو اليسار، لذلك نجمع المقدارين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>5.864</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo>+</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>1.1864</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>−</mo><mi>X</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



البروتون يتحرك نحو اليسار موازيًا للمجال المحصل، لذلك جيب الزاوية يساوي صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>q</mi><mi>v</mi><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mi>sin</mi><mo>⁡</mo><msup><mn>0</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::



:::exam-question
id: physics-tawjihi-2025-p091-q544
title: السؤال 544 — ص 90 — السؤال الأصلي 23
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 90، السؤال 23
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك مستقيم طويل جدًا يمر فيه تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` مغمور في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` باتجاه الناظر كما في الشكل المجاور. احسب:

1. القوة المغناطيسية المؤثرة في جزء من السلك طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` مقدارًا واتجاهًا.
2. شدة المجال المغناطيسي الكلي في النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` التي تقع فوق السلك على بعد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`.
3. القوة المغناطيسية المؤثرة في إلكترون يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` لحظة مروره بالنقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` بالاتجاه السيني الموجب.

![سلك مستقيم داخل مجال منتظم ونقطة a فوقه على بعد 2 cm.](assets/lessons/curriculum-evidence/f2d4e57080d69936f2c5.webp)
final-answer:
1. **القوة على السلك:** \\(2\\times10^{-4}\\,\\mathrm{N}\\) إلى أعلى.
2. **المجال عند \\(a\\):** \\(10^{-5}\\,\\mathrm{T}\\) نحو الناظر \\((+Z)\\).
3. **القوة على الإلكترون:** \\(3.2\\times10^{-19}\\,\\mathrm{N}\\) إلى أعلى \\((+Y)\\).
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/f2d4e57080d69936f2c5.webp)

أولاً، السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نحدد اتجاه القوة على السلك بقاعدة اليد اليمنى: الأصابع مع التيار ثم نحو المجال، فيشير الإبهام إلى القوة.

السلك عمودي على المجال الخارجي؛ نحسب القوة على الطول المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



التيار لليسار والمجال للخارج؛ القوة إلى أعلى.

نأخذ \\(+X\\) نحو اليمين، و\\(+Y\\) إلى أعلى، و\\(+Z\\) نحو الناظر؛ ثم نطبق قاعدة اليد اليمنى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mo>−</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo stretchy="false">)</mo><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>+</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`



ثانياً، نوجه إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يعطي المجال. التيار لليسار فيكون مجاله عند \\(a\\) فوقه إلى داخل الصفحة.

مجال السلك الطويل يعتمد على بعد النقطة عنه، وليس على طول الجزء الذي حسبنا قوته. نحول \\(2\\,\\mathrm{cm}\\) إلى \\(0.02\\,\\mathrm{m}\\)، ثم نستخدم علاقة مجال السلك الطويل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>4</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال الخارجي للخارج وأكبر مقدارًا؛ نطرح المجالين المتعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>−</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mi>a</mi></msub><mo>∥</mo><mo>+</mo><mi>Z</mi></mrow></math>
\`\`\`



ثالثاً، الإلكترون يتأثر بالمجال الكلي عند \\(a\\). مقدار القوة \\(|q|vB \\sin \\theta\\)؛ حيث \\(\\theta\\) الزاوية بين السرعة والمجال. السرعة للشرق والمجال للخارج، فهما متعامدان. مقدار شحنة الإلكترون \\(e=1.6\\times 10^{-19}\\,\\mathrm{C}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mi>e</mi><mi>v</mi><msub><mi>B</mi><mi>a</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>e</mi></msub><mo>=</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الضرب الاتجاهي للسرعة نحو اليمين والمجال للخارج يعطي أسفلًا للشحنة الموجبة؛ نعكس الاتجاه لأن الإلكترون سالب فتكون القوة لأعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>∥</mo><mo>−</mo><mi>Y</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>q</mi><mi>e</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>e</mi></msub><mo>∥</mo><mo>+</mo><mi>Y</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p091-q545
title: السؤال 545 — ص 90 — السؤال الأصلي 24
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 90، السؤال 24
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يتحرك جسيم شحنته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8.4</mn><mtext> </mtext><mrow><mi>μ</mi><mi mathvariant="normal">C</mi></mrow></mrow></math>\` بسرعة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.3</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` باتجاه محور السينات الموجب. احسب مقدار القوة المغناطيسية المؤثرة في الشحنة واتجاهها في الحالتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>a</mi><mo separator="true">,</mo><mi>b</mi><mo stretchy="false">)</mo></mrow></math>\` المبينة في الشكل المجاور.

![الحالتان a وb لسرعة شحنة موجبة بالنسبة لمجال B نحو اليمين.](assets/lessons/curriculum-evidence/9ca900d00a8d6e1da47a.webp)
final-answer:
- **الحالة \\(a\\):** \\(1.26\\times10^{-4}\\,\\mathrm{N}\\) إلى داخل الصفحة.
- **الحالة \\(b\\):** \\(2.52\\times10^{-4}\\,\\mathrm{N}\\) إلى داخل الصفحة.
solution:
البادئة ميكرو تعني \\(10^{-6}\\) من الوحدة الأساسية؛ نُبقيها صريحة عند التعويض.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/9ca900d00a8d6e1da47a.webp)

مقدار القوة المغناطيسية على شحنة متحركة يعتمد على مركبة السرعة العمودية على المجال. \\(\\theta\\) هي الزاوية بين السرعة والمجال؛ وإذا تعامدا فإن جيبها يساوي \\(1\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

نحول الشحنة من المايكروكولوم إلى الكولوم، ونحسب العامل المشترك في القوتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mo>=</mo><mn>8.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>v</mi><mi>B</mi><mo>=</mo><mo stretchy="false">(</mo><mn>8.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>100</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>v</mi><mi>B</mi><mo>=</mo><mn>2.52</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



في الحالة الأولى تصنع السرعة زاوية ثلاثين درجة مع المجال، فنأخذ نصف العامل المشترك.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>a</mi></msub><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>30</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>a</mi></msub><mo>=</mo><mn>1.26</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



في الحالة الثانية السرعة عمودية على المجال، فيبقى العامل المشترك كله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>b</mi></msub><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>b</mi></msub><mo>=</mo><mn>2.52</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



في الحالتين للسرعة مركبة إلى أعلى والمجال إلى اليمين؛ الشحنة موجبة فتكون القوة إلى داخل الصفحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>y</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>=</mo><mo>−</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p092-q546
title: السؤال 546 — ص 91 — السؤال الأصلي 25
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 91، السؤال 25
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلكان طويلان لا نهائيان، الأول يسري به تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>18</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>X</mi></mrow></math>\`، والسلك الثاني موازي للسلك الأول ويقع أسفله على بعد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>30</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` ويسري به تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>12</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>X</mi></mrow></math>\`. احسب:

1. بعد نقطة التعادل عن السلك الأول.
2. القوة المؤثرة على بروتون يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>X</mi></mrow></math>\` لحظة مروره من النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` التي تقع فوق السلك الأول على بعد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`.
final-answer:
1. **نقطة التعادل:** بين السلكين، على بعد \\(0.18\\,\\mathrm{m}\\) أسفل السلك الأول.
2. **القوة على البروتون:** \\(1.344\\times10^{-18}\\,\\mathrm{N}\\) إلى أسفل \\((-Y)\\).
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد اتجاه القوة على شحنة موجبة، نوجّه أصابع اليد اليمنى مع السرعة ونثنيها نحو المجال؛ يشير الإبهام إلى القوة. للشحنة السالبة نعكس اتجاه القوة الناتج. النقطة ⊙ تعني خارج الصفحة، والعلامة ⊗ تعني داخلها.

عند توجيه إبهام اليد اليمنى مع كل تيار، تعطي الأصابع مجالين متعاكسين بين السلكين ومتوافقين خارجهما. لذلك التعادل بينهما. نرمز لبعده عن الأول بـ \\(x\\)، مع الشرط \\(0<x<0.30\\,\\mathrm{m}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>0.30</mn><mo>−</mo><mi>x</mi></mrow></math>
\`\`\`



نساوي مقداري المجالين المتعاكسين ثم نحل المعادلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>18</mn><mi>x</mi></mfrac><mo>=</mo><mfrac><mn>12</mn><mrow><mn>0.30</mn><mo>−</mo><mi>x</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>18</mn><mo stretchy="false">(</mo><mn>0.30</mn><mo>−</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mn>12</mn><mi>x</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>5.4</mn><mo>−</mo><mn>18</mn><mi>x</mi><mo>=</mo><mn>12</mn><mi>x</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>30</mn><mi>x</mi><mo>=</mo><mn>5.4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>x</mi><mo>=</mo><mn>0.18</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



النقطة المطلوبة للقوة تقع فوق السلك الأول؛ بعدها عن الثاني أربعون سنتيمترًا، وكلا المجالين نحو الناظر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>18</mn><mn>0.10</mn></mfrac><mo>+</mo><mfrac><mn>12</mn><mn>0.40</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>180</mn><mo>+</mo><mn>30</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>4.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مقدار القوة على البروتون \\(|q|vB \\sin \\theta\\). السرعة يميناً والمجال نحو الناظر، فهما متعامدان وجيب الزاوية \\(1\\). شحنة البروتون \\(1.6\\times 10^{-19}\\,\\mathrm{C}\\)، واليد اليمنى تعطي القوة إلى أسفل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>1.344</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>18</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>x</mi><mo>^</mo></mover><mo>×</mo><mover accent="true"><mi>z</mi><mo>^</mo></mover><mo>=</mo><mo>−</mo><mover accent="true"><mi>y</mi><mo>^</mo></mover></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p092-q547
title: السؤال 547 — ص 91 — السؤال الأصلي 26
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 91، السؤال 26
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور ملفًا حلزونيًا هوائيًا طويلًا عدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>160</mn></mrow></math>\` \\(\\,\\mathrm{turn/m}\\)، ويحمل تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>0.2</mn><mi>π</mi></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. إذا وضع بالقرب منه وعلى بعد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` سلك مستقيم لا نهائي الطول ويسري فيه تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi></mrow></math>\`، احسب مقدار واتجاه شدة التيار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi></mrow></math>\` الذي يمر في السلك بحيث تكون محصلة القوى المغناطيسية المؤثرة في شحنة كهربائية موجبة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi>μ</mi><mi mathvariant="normal">C</mi></mrow></mrow></math>\` لحظة مرورها بالنقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` وبسرعة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` نحو الشرق تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>\` وباتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>Z</mi></mrow></math>\`.

![ملف حلزوني وسلك مجاور على بعد 0.2 m والنقطة a.](assets/lessons/curriculum-evidence/198d9c40002f3211a4ea.svg)

final-answer:
**شدة التيار:** \\(11.8\\,\\mathrm{A}\\) **إلى داخل الصفحة** \\((-Z)\\).
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/198d9c40002f3211a4ea.svg)

القيمة \\(160\\,\\mathrm{turn/m}\\) هي كثافة اللفات \\(n=N/L\\)، وليست عدد اللفات الكلي \\(N\\). لذلك نستخدم \\(B=\\mu _{0}nI\\) مباشرة.

مجال الملف الطويل يتناسب مع كثافة اللفات والتيار. نلف أصابع اليد اليمنى مع تيار اللفات؛ التيار في الجزء الأمامي إلى اليمين فيشير الإبهام إلى أعلى، أي \\(+Y\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>n</mi><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>160</mn><mo stretchy="false">)</mo><mfrac><mn>0.2</mn><mi>π</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mn>1.28</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>+</mo><mi>Y</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الشحنة موجبة بحسب المعطيات. نوجه أصابع اليد اليمنى مع السرعة شرقاً ثم نحو المجال لأعلى، فيشير الإبهام إلى القوة نحو الناظر. المجالان هنا رأسيان والسرعة أفقية، لذلك يتعامدان. مقدار القوة \\(F=qvB\\)؛ نقسم على \\(qv\\) لاستخراج المجال الكلي. الميكرو يعني \\(10^{-6}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mi>q</mi><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>+</mo><mi>Y</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مجال السلك يجب أن يكون إلى أسفل ليخفض مجال الملف إلى المقدار المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>1.28</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>−</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>1.18</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>−</mo><mi>Y</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مجال السلك الطويل يعطى بـ \\(B_{w}=\\mu _{0}I_{w}/(2\\pi r)\\). نضرب في \\(2\\pi r\\) ونقسم على \\(\\mu _{0}\\) لعزل التيار. النقطة يمين السلك، وتوجيه الإبهام إلى الداخل يجعل التفاف الأصابع عندها لأسفل؛ إذن التيار إلى الداخل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>w</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi><msub><mi>B</mi><mi>w</mi></msub></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>w</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.18</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>w</mi></msub><mo>=</mo><mfrac><mrow><mn>2.36</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>w</mi></msub><mo>=</mo><mn>11.8</mn><mtext> </mtext><mi mathvariant="normal">A</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>−</mo><mi>Z</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p092-q550
title: السؤال 550 — ص 91 — السؤال الأصلي 29
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 91، السؤال 29
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك مستقيم موصل طويل جدًا، يحمل تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، موضوع أفقيًا داخل مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` في الشكل المجاور. جد ما يأتي:

1. محصلة المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` والتي تبعد عن السلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`.
2. كثافة الكتلة الطولية للسلك عندما يكون متزنًا.

![سلك أفقي في مجال إلى داخل الصفحة والنقطة a على بعد 0.2 m.](assets/lessons/curriculum-evidence/ea72e1189a1ae299b4a1.webp)
final-answer:
1. **المجال عند \\(a\\):** \\(6\\times10^{-6}\\,\\mathrm{T}\\) إلى داخل الصفحة \\((-Z)\\).
2. **كثافة الكتلة الطولية:** \\(0.8\\times10^{-6}\\,\\mathrm{kg/m}\\).
solution:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ea72e1189a1ae299b4a1.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع التيار إلى اليمين؛ التفاف الأصابع يعطي مجال السلك إلى الداخل عند \\(a\\) أسفله.

المجال حول سلك طويل يساوي \\(B=\\mu _{0}I/(2\\pi r)\\)، حيث \\(r=0.2\\,\\mathrm{m}\\) هو بعد النقطة عنه. لا نستخدم هذه المحصلة لحساب قوة السلك على نفسه؛ اتزانه يتحدد بالمجال الخارجي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>2</mn><mn>0.20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال الخارجي للداخل أيضًا، لذلك نجمع المجالين عند النقطة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo>+</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>a</mi></msub><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi><mspace width="1em"/><mo stretchy="false">(</mo><mo>−</mo><mi>Z</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



التيار يميناً والمجال الخارجي للداخل؛ قاعدة اليد اليمنى للقوة تعطي اتجاهها إلى أعلى، فتستطيع موازنة الوزن إلى أسفل. الاتزان يعني تساوي المقدارين. لا يدخل المجال الذاتي في قوة السلك على نفسه:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mi>L</mi><msub><mi>B</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mi>m</mi><mi>g</mi></mrow></math>
\`\`\`



نقسم معادلة الاتزان على \\(Lg\\) غير الصفريين؛ الكثافة الكتلية الطولية هي كتلة كل متر من السلك، أي \\(m/L\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>m</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mi>I</mi><msub><mi>B</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow><mi>g</mi></mfrac></mrow></math>
\`\`\`



نعوض بالتيار والمجال الخارجي وتسارع الجاذبية المستخدم في الكتاب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>m</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>m</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mn>10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>m</mi><mi>L</mi></mfrac><mo>=</mo><mn>0.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p093-q551
title: السؤال 551 — ص 92 — السؤال الأصلي 30
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 92، السؤال 30
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يبين مجالًا مغناطيسيًا منتظمًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.5</mn></mrow></math>\` تسلا دخل إليه بروتون عند \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` في اتجاه يتعامد مع المجال بسرعة تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، علمًا بأن شحنة البروتون \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>\` وكتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`. احسب:

1. القوة المغناطيسية المؤثرة في البروتون.
2. الزمن الدوري.
3. احسب تسارع البروتون وهو في المجال.

![مسار بروتون دائري داخل مجال مغناطيسي إلى داخل الصفحة عند النقطة a.](assets/lessons/curriculum-evidence/3ad195cd6f007e42b202.webp)
final-answer:
1. **القوة المغناطيسية:** \\(4.8\\times10^{-12}\\,\\mathrm{N}\\)، نحو مركز المسار، وإلى أعلى عند \\(a\\).
2. **الزمن الدوري:** \\(4.37\\times10^{-8}\\,\\mathrm{s}\\) تقريبًا.
3. **التسارع:** \\(2.87\\times10^{15}\\,\\mathrm{m/s^2}\\) تقريبًا، نحو مركز المسار.
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/3ad195cd6f007e42b202.webp)

أولاً، مقدار القوة المغناطيسية هو \\(qvB \\sin \\theta\\)؛ حيث \\(\\theta\\) بين السرعة والمجال. هنا \\(\\theta =90^{\\circ}\\)، وجيبها \\(1\\)، فتؤدي القوة دور القوة المركزية نحو مركز المسار. عند \\(a\\) السرعة يميناً والمجال للداخل، نوجه أصابع اليد اليمنى مع السرعة ثم نثنيها نحو المجال، فيشير الإبهام إلى قوة البروتون الموجب: إلى أعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>q</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>4.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>12</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



ثانياً، زمن الدورة هو زمن قطع محيط المسار بسرعة ثابتة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow><mi>v</mi></mfrac></mrow></math>
\`\`\`



مقدار القوة المركزية للحركة الدائرية \\(mv^{2}/r\\)،وتؤدي القوة المغناطيسية هذا الدور:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>q</mi><mi>v</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(qvB\\) غير الصفري، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi>q</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



نعوض في زمن الدورة، فيظهر عامل \\(v\\) مشتركاً في البسط والمقام:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>v</mi></mfrac><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi>q</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi></mrow><mrow><mi>q</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>3.34</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>2.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mo>=</mo><mn>4.37</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`



ثالثاً، التسارع المركزي هو تغير اتجاه السرعة نحو مركز المسار. قانون نيوتن الثاني \\(F=ma\\) يعطي مقداره بقسمة القوة على الكتلة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>a</mi><mi>c</mi></msub><mo>=</mo><mfrac><msub><mi>F</mi><mi>B</mi></msub><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>a</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>4.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>12</mn></mrow></msup></mrow><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>27</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>a</mi><mi>c</mi></msub><mo>=</mo><mn>2.87</mn><mo>×</mo><msup><mn>10</mn><mn>15</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p102-q602
title: السؤال 602 — ص 101 — السؤال الأصلي 12
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 101، السؤال 12
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>28</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يحمل شحنة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>\`، ويدور بسرعة ثابتة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` في مسار دائري متعامد مع مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\`. أجب عن الآتية:
1. احسب القوة المغناطيسية المؤثرة على الجسم.
2. احسب نصف قطر المسار الدائري للجسم.
3. احسب تردد حركة الجسم.

![جسم مشحون يتحرك في مسار دائري داخل مجال مغناطيسي إلى داخل الصفحة](assets/lessons/curriculum-evidence/8ea2d5533cb87b84d3e5.webp)
final-answer:
1. **القوة المغناطيسية:** \\(3.2\\times10^{-13}\\,\\mathrm{N}\\)، نحو مركز المسار.
2. **نصف القطر:** \\(0.125\\,\\mathrm{m}\\).
3. **التردد:** \\(1.27\\times10^7\\,\\mathrm{Hz}\\) تقريبًا.
solution:
![الرسم الأصلي](assets/lessons/curriculum-evidence/8ea2d5533cb87b84d3e5.webp)

أولاً، مقدار القوة المغناطيسية \\(|q|vB \\sin \\theta\\)؛ حيث \\(\\theta\\) الزاوية بين السرعة والمجال. السرعة عمودية على المجال، فجيب الزاوية \\(1\\). القوة نحو مركز المسار الدائري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>13</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



ثانياً، القوة المركزية هي القوة اللازمة للحركة الدائرية ومقدارها \\(mv^{2}/r\\). نساويها بالمغناطيسية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi>B</mi><mo>=</mo><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi mathvariant="normal">/</mi><mi>r</mi></mrow></math>
\`\`\`



نضرب في \\(r\\) ونقسم على \\(|q|vB\\) غير الصفري، فنختصر \\(v\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>q</mi><mi mathvariant="normal">∣</mi><mi>B</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>28</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.1</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>21</mn></mrow></msup></mrow><mrow><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>20</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>0.125</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



التردد عدد الدورات في الثانية؛ نقسم السرعة على محيط المسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mfrac><mi>v</mi><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mfrac><msup><mn>10</mn><mn>7</mn></msup><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>0.125</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mfrac><mn>10000000</mn><mrow><mn>0.25</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mn>1.27</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">H</mi><mi mathvariant="normal">z</mi></mrow></mrow></math>
\`\`\`


:::
`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "القوة المغناطيسية",
  "summary": "أسئلة الكتاب بترتيب المصدر، تليها أسئلة إضافية مع الاحتفاظ باختلاف المعطيات.",
  "outcome": "مراجعة القوة المغناطيسية من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "126 سؤالًا",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
