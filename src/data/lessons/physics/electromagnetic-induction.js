import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `
:::mcq
id: physics-book-2024-p071-review-1-1
title: أسئلة الفصل — س1/1 — الكتاب، صفحة PDF 71
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س1/1
question: أي الوحدات الآتية لا تعد وحدة لقياس معامل الحث؟
- [ ] option-1 | \\(\\Omega\\,\\mathrm{s}\\)
- [x] option-2 | \\(\\mathrm{A/J}\\)
- [ ] option-3 | \\(\\mathrm{J/A^2}\\)
- [ ] option-4 | \\(\\mathrm{T\\,m^2/A}\\)
explanation:
في الحث الذاتي، تغير تيار الملف يغير تدفقه فينشأ جهد حثي يعارض تغير التيار. معامل الحث \\(L\\) يقيس مقدار الجهد الحثي الناتج عن وحدة معدل تغير التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>L</mi><mrow><mo fence="true">∣</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo fence="true">∣</mo></mrow></mrow></math>
\`\`\`



نستخرج وحدة المحاثة من علاقتها بالقوة الدافعة ومعدل تغيّر التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>L</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">A</mi></mfrac></mrow></math>
\`\`\`



لأن قانون أوم \\(V=IR\\)،فالفولت لكل أمبير يساوي أوم؛ لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>L</mi><mo stretchy="false">]</mo><mo>=</mo><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`



الفولت هو جول لكل كولوم، والكولوم أمبير في ثانية، فنحول الوحدة كما يأتي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">A</mi></mfrac><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">J</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">C</mi></mrow><mo stretchy="false">)</mo><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">A</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">J</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mrow><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">A</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mi mathvariant="normal">A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">A</mi></mfrac><mo>=</mo><mfrac><mi mathvariant="normal">J</mi><msup><mi mathvariant="normal">A</mi><mn>2</mn></msup></mfrac></mrow></math>
\`\`\`



قانون فاراداي للفة واحدة يعطي\\(|\\varepsilon |=|\\Delta \\Phi |/\\Delta t\\)،فتكون وحدة التدفق \\(\\mathrm{Wb}\\) مساوية \\(\\mathrm{V}\\cdot \\mathrm{s}\\). والتدفق \\(\\Phi =BA\\) عند التعامد يجعل \\(\\mathrm{Wb}=\\mathrm{T}\\cdot \\mathrm{m}^{2}\\)؛ لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">A</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow><mi mathvariant="normal">A</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow><mi mathvariant="normal">A</mi></mfrac></mrow></math>
\`\`\`



إذن \\(\\Omega \\cdot \\mathrm{s}\\) و\\(\\mathrm{J}/\\mathrm{A}^{2}\\) و\\(\\mathrm{T}\\cdot \\mathrm{m}^{2}/\\mathrm{A}\\) وحدات متكافئة للحث، بينما \\(\\mathrm{A}/\\mathrm{J}\\) ليست منها؛ الخيار الثاني.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p071-review-1-2
title: أسئلة الفصل — س1/2 — الكتاب، صفحة PDF 71
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س1/2
question: ما الزاوية بين المجال المغناطيسي ومستوى الملف عندما يصل التدفق عبر الملف إلى نصف قيمته العظمى؟
- [ ] option-1 | \\(0^\\circ\\)
- [x] option-2 | \\(30^\\circ\\)
- [ ] option-3 | \\(45^\\circ\\)
- [ ] option-4 | \\(60^\\circ\\)
explanation:
التدفق المغناطيسي يقيس مقدار المجال الذي يخترق السطح. الزاوية \\(\\theta\\) في العلاقة مقيسة بين المجال والعمودي على السطح؛ أما الزاوية مع مستوى السطح فهي متممتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



صيغة التدفق تستعمل الزاوية \\(\\theta\\) مع العمود على سطح الملف. الزاوية \\(\\alpha\\) مع المستوى متممة لها، فيكون \\(\\theta =90^{\\circ}-\\alpha\\)، ومن ثم \\(\\cos \\theta =\\sin \\alpha\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi><mi>sin</mi><mo>⁡</mo><mi>α</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mtext>max</mtext></msub><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



نقسم التدفق على قيمته العظمى لنجد الزاوية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>sin</mi><mo>⁡</mo><mi>α</mi><mo>=</mo><mfrac><mi mathvariant="normal">Φ</mi><msub><mi mathvariant="normal">Φ</mi><mtext>max</mtext></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>sin</mi><mo>⁡</mo><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`



نأخذ الزاوية الهندسية بين المجال والمستوى في المجال من \\(0^{\\circ}\\) إلى \\(90^{\\circ}\\)؛ الزاوية التي جيبها نصف في هذا المجال هي \\(30^{\\circ}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>α</mi><mo>=</mo><msup><mn>30</mn><mo>∘</mo></msup></mrow></math>
\`\`\`

hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-book-2024-p071-review-1-4
title: أسئلة الفصل — س1/4 — الكتاب، صفحة PDF 71
question: أسئلة الفصل — س\\(1/4\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س1/4 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أي الآتية لا تعد وحدة لقياس التدفق المغناطيسي؟

أ- \\(\\mathrm{V}\\cdot \\mathrm{s}\\).

ب- \\(\\mathrm{Wb}\\cdot \\mathrm{A}\\).

ج- \\(\\mathrm{J}/\\mathrm{A}\\).

د- \\(\\mathrm{T}\\cdot \\mathrm{m}^{2}\\).
final-answer:
**ب — \\(\\mathrm{Wb}\\cdot\\mathrm{A}\\).**
solution:
وحدة التدفق الأساسية هي الويبر. ومن تعريف التدفق في مجال منتظم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



إذن \\(\\mathrm{T}\\cdot \\mathrm{m}^{2}\\)تساوي \\(\\mathrm{Wb}\\). ومن قانون فارادي، القوة الدافعة تساوي معدل تغير التدفق؛ لذلك \\(\\mathrm{V}\\cdot \\mathrm{s}\\) تساوي \\(\\mathrm{Wb}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow><mo>=</mo><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow><mo>=</mo><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الفولت \\(\\,\\mathrm{J/C}\\)، والكولوم \\(\\,\\mathrm{A\\,s}\\)؛ نعوض لاستخراج وحدة أخرى للتدفق.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mo>=</mo><mfrac><mi mathvariant="normal">J</mi><mi mathvariant="normal">C</mi></mfrac><mtext> </mtext><mi mathvariant="normal">s</mi><mo>=</mo><mfrac><mi mathvariant="normal">J</mi><mrow><mi mathvariant="normal">A</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mfrac><mtext> </mtext><mi mathvariant="normal">s</mi><mo>=</mo><mfrac><mi mathvariant="normal">J</mi><mi mathvariant="normal">A</mi></mfrac></mrow></math>
\`\`\`



أما ضرب الويبر في الأمبير فيعطي الجول، وهو وحدة طاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi><mtext> </mtext><mi mathvariant="normal">A</mi></mrow><mo>=</mo><mfrac><mi mathvariant="normal">J</mi><mi mathvariant="normal">A</mi></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi><mo>=</mo><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



الإجابة: ب، \\(\\mathrm{Wb}\\cdot \\mathrm{A}\\).
:::

:::exam-question
id: physics-book-2024-p071-review-2-1
title: أسئلة الفصل — س2 — فرع 1 — الكتاب، صفحة PDF 71
question: أسئلة الفصل — س\\(2\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س2 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بكل من:

الحث الكهرومغناطيسي.

final-answer:
**الحث الكهرومغناطيسي:** تولّد قوة دافعة كهربائية حثية عند تغير التدفق المغناطيسي، وتولّد تيار حثي إذا كانت الدارة مغلقة.
solution:
الإجابة: تولّد قوة دافعة كهربائية حثية عند تغير التدفق المغناطيسي، ويتولد تيار حثي إذا كانت الدارة مغلقة.

الكتاب: الحث الكهرومغناطيسي والتدفق، الصفحة المطبوعة \\(64\\)، صفحة \\(\\mathrm{PDF} 66\\).

> أن تياراً كهربائياً يتولد في ملف عندما يتغير المجال المغناطيسي داخله، وبذلك يعمل الملف كمصدر للقوة الدافعة الكهربائية




وفي الصفحة نفسها:

> وبناءً على مفهوم التدفق المغناطيسي، يمكن تعميم النتيجة السابقة: يتولد تيار حثي في ملف، إذا حدث تغير في التدفق المغناطيسي خلاله.



:::

:::exam-question
id: physics-book-2024-p071-review-2-2
title: أسئلة الفصل — س2 — فرع 2 — الكتاب، صفحة PDF 71
question: أسئلة الفصل — س\\(2\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س2 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بكل من:

قاعدة لنز.

final-answer:
**قاعدة لنز:** يكون اتجاه التيار الحثي بحيث يقاوم التغير في التدفق المغناطيسي الذي ولّده.
solution:
الإجابة: اتجاه التيار الحثي يكون بحيث يقاوم التغير في التدفق المغناطيسي الذي ولّده.

الكتاب: قانون لنز، الصفحة المطبوعة \\(67\\)، صفحة \\(\\mathrm{PDF} 69\\).

> يكون اتجاه التيار الحثي المتولد في دارة كهربائية أو ملف، بحيث يقاوم المولد له، وهو التغير في التدفق المغناطيسي




:::

:::exam-question
id: physics-book-2024-p071-review-3-2
title: أسئلة الفصل — س3 — فرع 2 — الكتاب، صفحة PDF 71
question: أسئلة الفصل — س\\(3\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س3 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حدد اتجاه التيار الحثي في الحلقة المبينة:

2- لحظة ازدياد شدة المجال المغناطيسي.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3 — فرع 2.](assets/lessons/curriculum-evidence/2a441505bd3560f5b9d1.webp)
final-answer:
**عكس عقارب الساعة.**
solution:
![الحلقة والمجال الأصليان](assets/lessons/curriculum-evidence/2a441505bd3560f5b9d1.webp)

التدفق يقيس المجال الذي يخترق سطح الحلقة. العلامات × تعني أن المجال إلى الداخل. مساحة الجزء الواقع داخل المجال ثابتة، لذلك ازدياد \\(B\\) يزيد التدفق الداخل.

قاعدة لنز تقول إن التيار الحثي يقاوم التغير في التدفق. ليقاوم الزيادة إلى الداخل يجب أن يولد مجالاً إلى الخارج.

نوجه إبهام اليد اليمنى إلى الخارج مع المجال الحثي؛ التفاف الأصابع يعطي تياراً عكس عقارب الساعة.
:::

:::exam-question
id: physics-book-2024-p072-review-4-1
title: أسئلة الفصل — س4 — فرع 1 — الكتاب، صفحة PDF 72
question: أسئلة الفصل — س\\(4\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 72، أسئلة الفصل — س4 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
مجال شدته \\(0.2\\,\\mathrm{T}\\) عمودي على مستوى ملف من \\(500\\) لفة، مساحة اللفة \\(100\\,\\mathrm{cm^2}\\). احسب القوة الدافعة الحثية:

1- عند إخراج الملف من المجال خلال \\(0.1\\,\\mathrm{s}\\).

final-answer:
**مقدار متوسط القوة الدافعة الحثية: \\(10\\,\\mathrm{V}\\).**
solution:
التدفق المغناطيسي يقيس مقدار المجال الذي يخترق السطح. الزاوية \\(\\theta\\) في العلاقة مقيسة بين المجال والعمودي على السطح؛ أما الزاوية مع مستوى السطح فهي متممتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



قانون فاراداي يربط متوسط القوة الدافعة الحثية بمعدل تغير التدفق خلال اللفة، مضروبًا في عدد اللفات. نستخدمه لأن إخراج الملف يغير التدفق خلال لفاته. والإشارة السالبة تحدد معارضة التغير وفق لنز؛ المطلوب هنا مقدار المتوسط، فنأخذ القيمة المطلقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



نحوّل مساحة اللفة إلى متر مربع، لأن شدة المجال بوحدة التسلا.

لأن \\(1\\,\\mathrm{cm}=10^{-2}\\,\\mathrm{m}\\)، فإن تربيع وحدة الطول يعطي \\(1\\,\\mathrm{cm^{2}}=10^{-4}\\,\\mathrm{m^{2}}\\)؛ لذلك نضرب المساحة بالسنتيمتر المربع في \\(10^{-4}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>100</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>0.01</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



المجال عمودي على مستوى الملف، أي موازٍ لعموده؛ لذلك \\(\\theta =0^{\\circ}\\)و\\(\\cos \\theta =1\\) فيكون التدفق \\(BA\\). وعند إخراج الملف كله يصبح تدفقه صفراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>i</mi></msub><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>i</mi></msub><mo>=</mo><mn>0.2</mn><mo stretchy="false">(</mo><mn>0.01</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>i</mi></msub><mo>=</mo><mn>0.002</mn><mtext> </mtext><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>f</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نضرب تغيّر تدفق اللفة في عدد اللفات، ثم نقسم على زمن الإخراج.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">Φ</mi><mi>f</mi></msub><mo>−</mo><msub><mi mathvariant="normal">Φ</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mn>500</mn><mo stretchy="false">(</mo><mn>0.002</mn><mo stretchy="false">)</mo></mrow><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mn>1</mn><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p072-review-4-2
title: أسئلة الفصل — س4 — فرع 2 — الكتاب، صفحة PDF 72
question: أسئلة الفصل — س\\(4\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 72، أسئلة الفصل — س4 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
مجال شدته \\(0.2\\,\\mathrm{T}\\) عمودي على مستوى ملف من \\(500\\) لفة، مساحة اللفة \\(100\\,\\mathrm{cm^2}\\). احسب القوة الدافعة الحثية:

2- عندما ينعكس اتجاه المجال خلال \\(0.2\\,\\mathrm{s}\\).

final-answer:
**مقدار متوسط القوة الدافعة الحثية: \\(10\\,\\mathrm{V}\\).**
solution:
قانون فاراداي يربط متوسط القوة الدافعة الحثية بمعدل تغير التدفق خلال اللفة، مضروبًا في عدد اللفات. نستخدمه لأن المجال ينعكس فيتغير التدفق. التدفق هو المجال الذي يخترق المساحة؛ ولأن المجال عمودي على مستوى الملف، يكون \\(\\Phi =BA\\)، مع اختيار عمود ثابت موجب. المطلوب مقدار المتوسط، لذلك نأخذ القيمة المطلقة للتغير.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



نحوّل المساحة، ونختار اتجاه المجال الأول موجبًا؛ انعكاس المجال يجعل قيمته النهائية سالبة.

لأن \\(1\\,\\mathrm{cm}=10^{-2}\\,\\mathrm{m}\\)، فإن تربيع وحدة الطول يعطي \\(1\\,\\mathrm{cm^{2}}=10^{-4}\\,\\mathrm{m^{2}}\\)؛ لذلك نضرب المساحة بالسنتيمتر المربع في \\(10^{-4}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>100</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>0.01</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>i</mi></msub><mo>=</mo><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نطرح المجالين بإشارتيهما؛ لذلك يكون مقدار التغيّر ضعف شدة المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>B</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mo>−</mo><mn>0.2</mn><mo>−</mo><mn>0.2</mn><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>B</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.4</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نحسب مقدار متوسط القوة الدافعة من تغيّر التدفق في جميع اللفات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mi>N</mi><mi>A</mi><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>B</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>500</mn><mo stretchy="false">(</mo><mn>0.01</mn><mo stretchy="false">)</mo><mfrac><mn>0.4</mn><mn>0.2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p072-review-5-1
title: أسئلة الفصل — س5 — فرع 1 — الكتاب، صفحة PDF 72
question: أسئلة الفصل — س\\(5\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 72، أسئلة الفصل — س5 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل كتلته \\(0.15\\,\\mathrm{kg}\\) وطوله \\(1\\,\\mathrm{m}\\) ينزلق تحت وزنه لأسفل بسرعة ثابتة \\(2\\,\\mathrm{m/s}\\) على سكة موصلة رأسية في مجال منتظم عمودي على الصفحة للخارج، ومقاومة الدارة \\(0.75\\,\\Omega\\). أوجد:

شدة المجال المغناطيسي.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p072-review-5-1-figure-01.webp)

final-answer:
**شدة المجال المغناطيسي: \\(0.75\\,\\mathrm{T}\\).**
solution:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p072-review-5-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



قانون أوم يعطي تيار الدارة المغلقة من القوة الدافعة الحثية مقسومة على مقاومتها الكلية \\(R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



السرعة ثابتة، فتتوازن قوة الوزن إلى أسفل مع القوة المغناطيسية إلى أعلى. نستخدم تسارع الجاذبية المعتمد في مسائل الكتاب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`



نعوض القوة الدافعة \\(BLv\\) في قانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>B</mi><mi>L</mi><mi>v</mi></mrow><mi>R</mi></mfrac></mrow></math>
\`\`\`



نعوض التيار في الاتزان ثم نضرب في \\(R\\)، وبعدها نقسم على \\(L^{2}v\\) لعزل مربع المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>B</mi><mrow><mo fence="true">(</mo><mfrac><mrow><mi>B</mi><mi>L</mi><mi>v</mi></mrow><mi>R</mi></mfrac><mo fence="true">)</mo></mrow><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>R</mi><mo>=</mo><msup><mi>B</mi><mn>2</mn></msup><msup><mi>L</mi><mn>2</mn></msup><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msup><mi>L</mi><mn>2</mn></msup><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن المطلوب مقدار المجال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msup><mi>L</mi><mn>2</mn></msup><mi>v</mi></mrow></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mfrac><mrow><mn>0.15</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.75</mn><mo stretchy="false">)</mo></mrow><mrow><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mfrac><mn>1.125</mn><mn>2</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mn>0.5625</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>0.75</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p072-review-5-2
title: أسئلة الفصل — س5 — فرع 2 — الكتاب، صفحة PDF 72
question: أسئلة الفصل — س\\(5\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 72، أسئلة الفصل — س5 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل كتلته \\(0.15\\,\\mathrm{kg}\\) وطوله \\(1\\,\\mathrm{m}\\) ينزلق تحت وزنه لأسفل بسرعة ثابتة \\(2\\,\\mathrm{m/s}\\) على سكة موصلة رأسية في مجال منتظم عمودي على الصفحة للخارج، ومقاومة الدارة \\(0.75\\,\\Omega\\). أوجد:

مقدار التيار الحثي.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p072-review-5-1-figure-01.webp)

final-answer:
**مقدار التيار الحثي: \\(2\\,\\mathrm{A}\\).**
solution:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p072-review-5-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



قانون أوم يعطي تيار الدارة المغلقة من القوة الدافعة الحثية مقسومة على مقاومتها الكلية \\(R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



السرعة ثابتة، فتتوازن قوة الوزن إلى أسفل مع القوة المغناطيسية إلى أعلى. نستخدم تسارع الجاذبية المعتمد في مسائل الكتاب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`



نعوض القوة الدافعة \\(BLv\\) في قانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>B</mi><mi>L</mi><mi>v</mi></mrow><mi>R</mi></mfrac></mrow></math>
\`\`\`



نعوض التيار في الاتزان ثم نضرب في \\(R\\)، وبعدها نقسم على \\(L^{2}v\\) لعزل مربع المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>B</mi><mrow><mo fence="true">(</mo><mfrac><mrow><mi>B</mi><mi>L</mi><mi>v</mi></mrow><mi>R</mi></mfrac><mo fence="true">)</mo></mrow><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>R</mi><mo>=</mo><msup><mi>B</mi><mn>2</mn></msup><msup><mi>L</mi><mn>2</mn></msup><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msup><mi>L</mi><mn>2</mn></msup><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن المطلوب مقدار المجال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msup><mi>L</mi><mn>2</mn></msup><mi>v</mi></mrow></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mfrac><mrow><mn>0.15</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.75</mn><mo stretchy="false">)</mo></mrow><mrow><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mfrac><mn>1.125</mn><mn>2</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mn>0.5625</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>0.75</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نعوّض بشدة المجال لحساب التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>0.75</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>0.75</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1.5</mn><mn>0.75</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p072-review-5-3
title: أسئلة الفصل — س5 — فرع 3 — الكتاب، صفحة PDF 72
question: أسئلة الفصل — س\\(5\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 72، أسئلة الفصل — س5 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل كتلته \\(0.15\\,\\mathrm{kg}\\) وطوله \\(1\\,\\mathrm{m}\\) ينزلق تحت وزنه لأسفل بسرعة ثابتة \\(2\\,\\mathrm{m/s}\\) على سكة موصلة رأسية في مجال منتظم عمودي على الصفحة للخارج، ومقاومة الدارة \\(0.75\\,\\Omega\\). أوجد:

اتجاه التيار الحثي.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 3.](assets/lessons/physics/source-crops/physics-book-2024-p072-review-5-1-figure-01.webp)

final-answer:
**مع عقارب الساعة**؛ وفي القضيب من **\\(a\\) إلى \\(b\\)**، أي من اليمين إلى اليسار.
solution:
![القضيب والسكة الأصليان](assets/lessons/physics/source-crops/physics-book-2024-p072-review-5-1-figure-01.webp)

التدفق هو مقدار المجال الذي يخترق مساحة الدارة. عند هبوط القضيب تزداد المساحة المحصورة بينه وبين المقاومة العلوية، فيزداد التدفق الخارج من الصفحة.

وفق قاعدة لنز، التيار الحثي يقاوم هذا التغير؛ لذلك يولد مجالاً إلى الداخل ليقاوم زيادة التدفق الخارج.

نوجه إبهام اليد اليمنى إلى الداخل؛ التفاف الأصابع يعطي تياراً مع عقارب الساعة. في القضيب السفلي يسري من \\(a\\) إلى \\(b\\)، أي من اليمين إلى اليسار.

للتحقق، تيار القضيب إلى اليسار في مجال إلى الخارج يولد قوة مغناطيسية إلى أعلى؛ فتعاكس هبوطه كما يقتضي لنز.
:::

:::exam-question
id: physics-book-2024-p072-review-8-1
title: أسئلة الفصل — س8 — فرع 1 — الكتاب، صفحة PDF 72
question: أسئلة الفصل — س\\(8\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 72، أسئلة الفصل — س8 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني متصل بمصباح وبطارية وبالقرب منه مغناطيس قوي. ما تغير سطوع المصباح في كل حالة؟

أ- إذا قرب المغناطيس نحو الملف.

اعتبر مقاومة المصباح ثابتة، ومقدار القوة الدافعة الحثية المعاكسة أصغر من القوة الدافعة للبطارية، بحيث يبقى التيار في اتجاهه الأصلي.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س8 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p072-review-8-1-figure-01.webp)

final-answer:
**يقل سطوع المصباح أثناء اقتراب المغناطيس.**
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p072-review-8-1-figure-01.webp)

قانون لنز يحدد الاتجاه: المجال الحثي يعارض التغير في التدفق الذي سبّبه. نحدد أولًا هل التدفق الأصلي يزداد أم ينقص، ثم نحدد المجال الحثي، وبعده اتجاه التيار بقاعدة اليد اليمنى.

تقريب القطب الشمالي يزيد التدفق خلال الملف. فيصبح وجه الملف القريب شماليًا ليقاوم الاقتراب وفق قاعدة لنز.

بحسب المعطيات، القوة الدافعة الحثية المعاكسة أصغر من قوة البطارية؛ لذلك تقل محصلة القوتين الدافعتين ويبقى التيار في اتجاهه الأصلي.

القطب الموجب للبطارية إلى اليمين، فيدخل التيار الملف من طرفه الأيمن. بتتبع اللف يكون التيار هابطاً في الأجزاء الأمامية؛ قاعدة اليد اليمنى تجعل مجال البطارية داخل الملف يميناً ووجهه القريب من المغناطيس جنوبياً. لذلك التيار الحثي اللازم لجعل هذا الوجه شمالياً يعاكس تيار البطارية.

قانون أوم للدارة يعطي التيار من محصلة القوتين الدافعتين مقسومة على المقاومة الكلية \\(R\\)؛ ولأنهما متعاكستان نطرح:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>−</mo><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow><mi>R</mi></mfrac></mrow></math>
\`\`\`



عند ثبات مقاومة المصباح، قدرته \\(I^{2}R\\)؛ نقص التيار يقلل القدرة والسطوع أثناء الاقتراب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi></mrow></msub></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-book-2024-p072-review-8-2
title: أسئلة الفصل — س8 — فرع 2 — الكتاب، صفحة PDF 72
question: أسئلة الفصل — س\\(8\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 72، أسئلة الفصل — س8 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني متصل بمصباح وبطارية وبالقرب منه مغناطيس قوي. ما تغير سطوع المصباح في كل حالة؟

ب- إذا تحرك الملف والمغناطيس يمينًا بنفس السرعة.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س8 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p072-review-8-1-figure-01.webp)

final-answer:
**يبقى سطوع المصباح كما كان.**
solution:
![الملف والمغناطيس الأصليان](assets/lessons/physics/source-crops/physics-book-2024-p072-review-8-1-figure-01.webp)

التدفق هو المجال الذي يخترق مساحة الملف. عندما يتحرك الملف والمغناطيس يميناً بالسرعة نفسها، تبقى المسافة بينهما واتجاههما ثابتين؛ لذلك لا يتغير التدفق عبر الملف.

قانون فاراداي يربط القوة الدافعة الحثية بمعدل تغير التدفق \\(\\Phi\\) خلال اللفة وعدد اللفات \\(N\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



إذن لا يتغير تيار البطارية، ويبقى سطوع المصباح كما كان.
:::

:::mcq
id: physics-tawjihi-2025-p096-q567
title: أسئلة الفصل — س1/3 — الكتاب، صفحة PDF 71
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س1/3
question: ما المبدأ الذي استخدمه لنز لبناء قانونه في تحديد اتجاه التيار الحثي؟
- [ ] option-1 | حفظ الشحنة
- [x] option-2 | حفظ الطاقة
- [ ] option-3 | حفظ الزخم
- [ ] option-4 | حفظ الكتلة
explanation:
الإجابة: مبدأ حفظ الطاقة، الخيار الثاني.

الكتاب: قانون لنز ومبدأ حفظ الطاقة، الصفحة المطبوعة \\(67\\)، صفحة \\(\\mathrm{PDF} 69\\).

> لقد استخدم لنز مبدأ حفظ الطاقة للتوصل إلى قاعدة لتحديد قطبية القوة الدافعة الكهربائية الحثية المتولدة في ملف أو سلك، وبالتالي اتجاه التيار الحثي المتولد في ملف عندما يتغير فيه التدفق المغناطيسي.




hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p099-q586
title: أسئلة الفصل — س3 — فرع 1 — الكتاب، صفحة PDF 71
question: أسئلة الفصل — س\\(3\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 71، أسئلة الفصل — س3 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حدد اتجاه التيار الحثي في الحلقة المبينة:

1- لحظة سحبها لليمين بسرعة ثابتة.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3 — فرع 1.](assets/lessons/curriculum-evidence/2a441505bd3560f5b9d1.webp)
final-answer:
**مع عقارب الساعة.**
solution:
![الحلقة والمجال الأصليان](assets/lessons/curriculum-evidence/2a441505bd3560f5b9d1.webp)

العلامات × تمثل مجالاً إلى داخل الصفحة. التدفق يقيس المجال الذي يخترق مساحة الحلقة؛ عند سحبها يميناً ينقص الجزء الموجود داخل المجال، فينقص التدفق الداخل.

قاعدة لنز تقول إن التيار الحثي يقاوم التغير في التدفق؛ لذلك يولد مجالاً إلى الداخل ليقاوم هذا النقص.

نوجه إبهام اليد اليمنى إلى الداخل مع المجال الحثي؛ التفاف الأصابع يحدد تياراً مع عقارب الساعة.
:::

:::mcq
id: physics-tawjihi-2025-p096-q566
title: أسئلة الوحدة — س1/7 — الكتاب، صفحة PDF 74
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س1/7
question: سلك مستقيم في مجال مغناطيسي منتظم، وطوله عمودي على المجال. لتولد قوة دافعة حثية يجب تحريكه في اتجاه:
- [ ] option-1 | يوازي طوله واتجاه المجال.
- [ ] option-2 | يوازي طوله وعمودي على المجال.
- [x] option-3 | عمودي على كل من طوله واتجاه المجال.
- [ ] option-4 | عمودي على السلك وموازٍ للمجال.
explanation:
للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.

تنفصل الشحنات بين طرفي السلك عندما تكون القوة المغناطيسية على امتداد طوله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>B</mi></msub><mo>=</mo><mi>q</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`



من بين الخيارات المعطاة، الحركة عموديًا على طول السلك وعلى المجال تجعل القوة على امتداد السلك؛ لذلك تفصل الشحنات بين طرفيه وتولد أكبر قوة دافعة. عمومًا يكفي وجود مركبة للسرعة في هذا الاتجاه؛ أما الحركات الموازية للسلك أو للمجال في الخيارات الأخرى فلا تعطي فرق الجهد المطلوب بين الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p095-q558
title: أسئلة الوحدة — س1/9 — الكتاب، صفحة PDF 74
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س1/9
question: ما وحدة قياس التدفق المغناطيسي؟
- [ ] option-1 | \\(\\mathrm{Wb/m^2}\\)
- [x] option-2 | \\(\\mathrm{T\\,m^2}\\)
- [ ] option-3 | \\(\\mathrm{T\\,m}\\)
- [ ] option-4 | \\(\\mathrm{T/m}\\)
explanation:
**الإجابة:** \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>\`

**الشاهد من الكتاب:**

> \\(\\Phi _{B}\\): التدفق المغناطيسي، ويقاس بوحدة الويبر \\(\\mathrm{Wb} = T.m^{2}\\).

**المصدر:** صفحة \\(64\\) من الكتاب.



hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p099-q583
title: أسئلة الوحدة — س2/ب — فرع 3 — الكتاب، صفحة PDF 74
question: أسئلة الوحدة — س\\(2\\)/ب — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س2/ب — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرف كلًا من:

الويبر.

final-answer:
**الويبر:** وحدة قياس التدفق المغناطيسي؛ وهو التدفق خلال سطح مساحته \\(1\\,\\mathrm{m^2}\\) يخترقه عموديًا مجال منتظم شدته \\(1\\,\\mathrm{T}\\).
solution:
الويبر وحدة قياس التدفق المغناطيسي. وهو التدفق خلال سطح مساحته متر مربع واحد عندما يخترقه عموديًا مجال منتظم شدته تسلا واحدة.

التدفق \\(\\Phi =BA\\cos \\theta\\). عند المجال العمودي على السطح تكون الزاوية مع عموده \\(0^{\\circ}\\)، فيصبح التدفق \\(BA\\)؛ لذلك \\(1\\,\\mathrm{T}\\) عبر \\(1\\,\\mathrm{m^{2}}\\) يعطي:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow><mo>=</mo><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`

**شاهد القاعدة أو السياق من الكتاب \\(1\\):**

> \\(\\Phi _{B}\\): التدفق المغناطيسي، ويقاس بوحدة الويبر \\(\\mathrm{Wb} = T.m^{2}\\).



**شاهد القاعدة أو السياق من الكتاب \\(2\\):**

> \\(\\Phi _{B} = B.A = BA\\cos \\theta\\)

**المصدر:** صفحة \\(64\\) من الكتاب.



:::

:::mcq
id: physics-tawjihi-2025-p094-q552
title: السؤال 552 — ص 93 — السؤال الأصلي 1
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 93، السؤال 1
question: الشكل المجاور يمثل العلاقة بين شدة التيار الكهربائي والزمن في ملف حلزوني، إذا علمت أن معامل الحث الذاتي له \\(80\\,\\mathrm{mH}\\) فما مقدار القوة الدافعة المتولدة في الفترة الزمنية \\((c-d)\\) بوحدة الفولت؟
- [ ] option-1 | صفر
- [x] option-2 | \\(0.16\\)
- [ ] option-3 | \\(-0.8\\)
- [ ] option-4 | \\(1.6\\)
explanation:
في الحث الذاتي، تغير تيار الملف يغير تدفقه فينشأ جهد حثي يعارض تغير التيار. معامل الحث \\(L\\) يقيس مقدار الجهد الحثي الناتج عن وحدة معدل تغير التيار.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/6b2528eb052f654076ee.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>L</mi><mrow><mo fence="true">∣</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo fence="true">∣</mo></mrow></mrow></math>
\`\`\`



الملي يساوي جزءًا من ألف؛ لذلك نضرب عدد الملي هنري في عشرة أس سالب ثلاثة للتحويل إلى هنري.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>80</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>0.08</mn><mtext> </mtext><mi mathvariant="normal">H</mi></mrow></math>
\`\`\`



معدل تغير التيار هو الفرق بين قيمتيه مقسوماً على الفترة الزمنية؛ وهذا هو ميل منحنى التيار والزمن. نقرأ \\(c\\) عند \\(2\\) ثانيةو \\(2\\,\\mathrm{A}\\)،و\\(d\\) عند \\(3\\) ثوانوصفرأمبير:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>0</mn><mo>−</mo><mn>2</mn></mrow><mrow><mn>3</mn><mo>−</mo><mn>2</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn>2</mn></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نضرب مقدار الميل في المحاثة لنجد مقدار القوة الدافعة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.08</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى شدة التيار الكهربائي مع الزمن للملف الحلزوني](assets/lessons/curriculum-evidence/6b2528eb052f654076ee.webp)
:::

:::mcq
id: physics-tawjihi-2025-p094-q553
title: السؤال 553 — ص 93 — السؤال الأصلي 2
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 93، السؤال 2
question: في الشكل المجاور، حلقة فلزية مستطيلة الشكل وضعت بالقرب من سلك مستقيم طويل يحمل تياراً كهربائياً \\(I\\)، وبشكل موازٍ له، في أي اتجاه يتم تحريك السلك حتى يتولد تيار حثي في الحلقة باتجاه دوران عقارب الساعة؟
- [ ] option-1 | باتجاه \\((+x)\\)
- [ ] option-2 | باتجاه \\((-x)\\)
- [x] option-3 | باتجاه \\((-y)\\)
- [ ] option-4 | باتجاه \\((+y)\\)
explanation:
التدفق يقيس المجال الذي يخترق مساحة الحلقة. نحتاج معرفة هل يزداد أم ينقص، ثم نطبق قاعدة لنز التي تجعل التيار الحثي يقاوم هذا التغير.

![الرسم الأصلي](assets/lessons/curriculum-evidence/ee7cdcd1390aed2eaa99.webp)

نوجه إبهام اليد اليمنى مع تيار السلك إلى اليسار؛ التفاف الأصابع يجعل مجاله إلى داخل الصفحة عند الحلقة فوقه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



لربط التيار الحثي بمجاله نلف أصابع اليد اليمنى مع عقارب الساعة، فيشير الإبهام إلى الداخل؛ لذا نحتاج إلى نقص التدفق الداخل ليعوضه هذا التيار.

تقل شدة مجال السلك بزيادة البعد عنه؛ لذلك نحرك السلك إلى أسفل، في اتجاه المحور الصادي السالب، ليبتعد عن الحلقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi><mo>↓</mo></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![حلقة فلزية مستطيلة فوق سلك مستقيم طويل يمر فيه تيار](assets/lessons/curriculum-evidence/ee7cdcd1390aed2eaa99.webp)
:::

:::mcq
id: physics-tawjihi-2025-p094-q555
title: السؤال 555 — ص 93 — السؤال الأصلي 4
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 93، السؤال 4
question: الشكل المجاور يمثل العلاقة بين شدة التيار الكهربائي والزمن في ملف حلزوني، إذا علمت أن معامل الحث الذاتي له \\(100\\,\\mathrm{mH}\\) فما مقدار القوة الدافعة المتولدة بوحدة الفولت في الفترة الزمنية \\((b-c)\\)؟
- [x] option-1 | \\(0.2\\)
- [ ] option-2 | \\(0.3\\)
- [ ] option-3 | \\(0.5\\)
- [ ] option-4 | \\(0.6\\)
explanation:
في الحث الذاتي، تغير تيار الملف يغير تدفقه فينشأ جهد حثي يعارض تغير التيار. معامل الحث \\(L\\) يقيس مقدار الجهد الحثي الناتج عن وحدة معدل تغير التيار.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a94923163a4b8f222ae1.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>L</mi><mrow><mo fence="true">∣</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo fence="true">∣</mo></mrow></mrow></math>
\`\`\`



الملي يساوي جزءًا من ألف؛ لذلك نحول إلى هنري بضرب القيمة في عشرة أس سالب ثلاثة. ثم نقرأ التيار والزمن عند طرفي الفترة المحددة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>100</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">H</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mo>−</mo><mn>2</mn></mrow><mrow><mn>2</mn><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نضرب المحاثة في مقدار معدل تغيّر التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.1</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى شدة التيار الكهربائي مع الزمن للملف الحلزوني](assets/lessons/curriculum-evidence/a94923163a4b8f222ae1.webp)
:::

:::mcq
id: physics-tawjihi-2025-p094-q556
title: السؤال 556 — ص 93 — السؤال الأصلي 5
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 93، السؤال 5
question: ملفان حلزونيان \\((a,b)\\) متماثلان في الطول ومساحة المقطع، إذا كان \\(N_a=3N_b\\)، فما قيمة \\(\\frac{L_{in\\,a}}{L_{in\\,b}}\\)؟
- [ ] option-1 | \\(1/3\\)
- [ ] option-2 | \\(1/9\\)
- [ ] option-3 | \\(3/1\\)
- [x] option-4 | \\(9/1\\)
explanation:
المعطى: طول الملفين ومساحة مقطعيهما متساويان، وعدد لفات الأول ثلاثة أمثال الثاني. المطلوب نسبة محاثتيهما.

نقارن في الوسط نفسه وبالنفاذية نفسها \\(\\mu\\)، كما في نموذج الملفات الهوائية.

معامل الحث يقيس ارتباط تدفق اللفات \\(N\\Phi\\) بالتيار \\(I\\)؛ حيث \\(\\Phi\\) تدفق اللفة الواحدة. في نموذج الملف الطويل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`



نرمز للطول المحوري بـ\\(\\ell\\)،ولمساحة المقطع بـ \\(A\\)،ولنفاذية الوسط بـ \\(\\mu\\). مجال الملف الطويل يعتمد على عدد لفاته \\(N\\) وتياره \\(I\\) وطوله؛ وتدفق اللفة يساوي \\(BA\\) لأن المجال عمودي على المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>N</mi><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



نعوض ثم نختصر التيار المشترك غير الصفري.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy="false">(</mo><mi>μ</mi><mi>N</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi><mo stretchy="false">)</mo><mi>A</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`



عند قسمة المحاثتين تختصر النفاذية والمساحة والطول المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>L</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi></mrow></msub><msub><mi>L</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>b</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mi>μ</mi><msubsup><mi>N</mi><mi>a</mi><mn>2</mn></msubsup><mi>A</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi></mrow><mrow><mi>μ</mi><msubsup><mi>N</mi><mi>b</mi><mn>2</mn></msubsup><mi>A</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>L</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi></mrow></msub><msub><mi>L</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>b</mi></mrow></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><msub><mi>N</mi><mi>a</mi></msub><msub><mi>N</mi><mi>b</mi></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>L</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi></mrow></msub><msub><mi>L</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>b</mi></mrow></msub></mfrac><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup><mo>=</mo><mn>9</mn></mrow></math>
\`\`\`



الإجابة: \\(9/1\\)، الخيار الرابع، في الوسط نفسه.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p094-q557
title: السؤال 557 — ص 93 — السؤال الأصلي 6
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 93، السؤال 6
question: أي الآتية ينشأ عنه تيار حثي في الحلقة المبينة باتجاه دوران عقارب الساعة؟
- [x] option-1 | نقصان مساحة الحلقة
- [ ] option-2 | زيادة شدة المجال المغناطيسي
- [ ] option-3 | تحريك الحلقة بعيداً عن الناظر
- [ ] option-4 | تحريك الحلقة نحو اليمين
explanation:
التدفق المغناطيسي يقيس مقدار المجال الذي يخترق السطح. هنا المجال عمودي على الحلقة، فيكون التدفق حاصل ضرب مقدار المجال في مساحة الحلقة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3ff8b21d514cbe45c87d.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



العلامات المتقاطعة تعني أن المجال يتجه إلى داخل الصفحة. نلف أصابع اليد اليمنى مع عقارب الساعة، فيشير الإبهام إلى مجال التيار الحثي: إلى الداخل أيضاً.

وفق قانون لنز يعارض التيار الحثي تغير التدفق؛ لذلك يكون دوره هنا تعويض نقص التدفق الداخل.

عند ثبات المجال ينقص التدفق إذا نقصت مساحة الحلقة؛ وهذا هو التغيّر المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi><mo>↓</mo></mrow></math>
\`\`\`



أما نقل الحلقة داخل مجال منتظم مع ثبات مساحتها واتجاهها فلا يغير التدفق. وزيادة المجال تولد الاتجاه المعاكس. إذن نقصان المساحة، الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![حلقة دائرية داخل مجال مغناطيسي متجه إلى داخل الصفحة](assets/lessons/curriculum-evidence/3ff8b21d514cbe45c87d.webp)
:::



:::mcq
id: physics-tawjihi-2025-p095-q559
title: السؤال 559 — ص 94 — السؤال الأصلي 8
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 94، السؤال 8
question: يتولد تيار حثي اتجاهه مع عقارب الساعة في الحلقة المبينة في الشكل التي ينطبق مستواها على مستوى الصفحة إذا:
- [ ] option-1 | تحركت الحلقة بعيداً عن الناظر
- [ ] option-2 | تحركت الحلقة نحو الناظر
- [ ] option-3 | قلت مساحة الحلقة
- [x] option-4 | زادت مساحة الحلقة
explanation:
التدفق المغناطيسي يقيس مقدار المجال الذي يخترق السطح. المجال هنا عمودي على الحلقة؛ التدفق يساوي المجال مضروباً في مساحة الحلقة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3056e03f9419eacf17da.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



قاعدة لنز تجعل المجال الحثي يعارض التغير في التدفق، وقبضة اليد اليمنى تربط اتجاه التيار بمجاله: الإبهام مع المجال والتفاف الأصابع مع التيار.

النقاط تعني أن المجال يخرج من الصفحة. التيار مع عقارب الساعة يولّد مجالًا إلى الداخل، فيقاوم زيادة التدفق الخارج.

زيادة مساحة الحلقة تزيد التدفق الخارج عند ثبات المجال، فتولّد الاتجاه المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>↑</mo></mrow></math>
\`\`\`



نقل الحلقة نحو الناظر أو بعيداً عنه داخل المجال المنتظم لا يغير تدفقها. إذن زيادة المساحة، الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![حلقة دائرية في مجال مغناطيسي خارج من الصفحة](assets/lessons/curriculum-evidence/3056e03f9419eacf17da.webp)
:::

:::mcq
id: physics-tawjihi-2025-p095-q560
title: السؤال 560 — ص 94 — السؤال الأصلي 9
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 94، السؤال 9
question: في الشكل المقابل عند تقريب المغناطيس من الدائرة يكون اتجاه التيار المار عبر المقاومة \\(R\\):
- [ ] option-1 | من \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>x</mi></mrow></math>\` إلى \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>y</mi></mrow></math>\`
- [x] option-2 | من \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>y</mi></mrow></math>\` إلى \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>x</mi></mrow></math>\`
- [ ] option-3 | متغير الاتجاه دورياً
- [ ] option-4 | لا يسري تيار
explanation:
المطلوب اتجاه التيار في المقاومة عند اقتراب القطب الجنوبي من الطرف الأيسر للملف.

![مغناطيس يقترب من ملف متصل بمقاومة بين النقطتين x و y](assets/lessons/curriculum-evidence/daed5a0b4fa8338431dd.webp)

وفق قانون لنز، يعارض التيار الحثي زيادة التدفق بسبب الاقتراب. لذلك يصبح الوجه القريب جنوبيًا ليتنافر مع القطب الجنوبي ويقاوم اقترابه.

مجال الملف داخله يتجه من وجهه الجنوبي إلى الشمالي؛ فيلزم أن يكون إلى اليمين هنا. نوجّه إبهام اليد اليمنى إلى اليمين فتدل الأصابع على اتجاه التيار في اللفات.

لكي يكون المجال إلى اليمين، يلزم أن يكون التيار هابطاً في الأجزاء الأمامية من اللفات. بتتبع مسار السلك في الرسم، يدخل التيار الملف من طرفه الأيمن ويخرج من طرفه الأيسر؛ ثم يمر عبر المقاومة من طرفها الأيسر \\(y\\) إلى طرفها الأيمن \\(x\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>:</mo><mspace width="1em"/><mi>y</mi><mo>⟶</mo><mi>x</mi></mrow></math>
\`\`\`



إذن التيار من \\(y\\) إلى \\(x\\)، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مغناطيس يقترب من ملف متصل بمقاومة بين النقطتين x و y](assets/lessons/curriculum-evidence/daed5a0b4fa8338431dd.webp)
:::

:::mcq
id: physics-tawjihi-2025-p095-q561
title: السؤال 561 — ص 94 — السؤال الأصلي 10
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 94، السؤال 10
question: في الدارة المقابلة عند فتح المفتاح (ح) فإن القوة التي تنشأ بين المغناطيس والدارة مع بقاء المغناطيس ثابتاً هي:
- [ ] option-1 | قوة تجاذب
- [x] option-2 | قوة تنافر
- [ ] option-3 | تنافر ثم تجاذب
- [ ] option-4 | تجاذب ثم تنافر
explanation:
المطلوب القوة عند فتح المفتاح، أي أثناء تناقص تيار الملف لحظيًا. بعد زوال التيار لا يبقى مجال للملف في النموذج المثالي.

![مغناطيس بجوار ملف في دائرة تحتوي مفتاحاً ومصدراً](assets/lessons/curriculum-evidence/2aeed49a655873b6e70a.webp)

الخط الأطول في رمز البطارية هو طرفها الموجب. يسير التيار الاصطلاحي منه عبر المفتاح إلى الطرف الأيسر للملف، ثم يعود من الطرف الأيمن إلى السالب.

نتبع التيار في اللفات بأصابع اليد اليمنى؛ التيار صاعد في الأجزاء الأمامية، فيشير الإبهام إلى مجال الملف نحو اليسار. فيكون وجهه الأيسر شمالياً، مقابل القطب الشمالي للمغناطيس.

عند فتح المفتاح يتناقص التيار والتدفق. وفق قانون لنز، تنشأ قوة دافعة حثية تعارض هذا النقص، وتحاول إبقاء التيار في اتجاهه السابق أثناء اضمحلاله.

لذلك يبقى الوجهان المتقابلان شماليين لحظيًا. الأقطاب المتشابهة تتنافر؛ فالإجابة قوة تنافر أثناء زوال التيار.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مغناطيس بجوار ملف في دائرة تحتوي مفتاحاً ومصدراً](assets/lessons/curriculum-evidence/2aeed49a655873b6e70a.webp)
:::

:::mcq
id: physics-tawjihi-2025-p095-q562
title: السؤال 562 — ص 94 — السؤال الأصلي 11
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 94، السؤال 11
question: في الشكل المجاور، حلقة فلزية مستطيلة الشكل وضعت بالقرب من سلك مستقيم طويل يحمل تياراً كهربائياً \\(I\\)، وبشكل موازٍ له، متى يتولد تيار حثي في الحلقة باتجاه دوران عقارب الساعة؟
- [ ] option-1 | إذا تحركت الحلقة باتجاه \\((+X)\\)
- [ ] option-2 | إذا تحركت الحلقة باتجاه \\((-X)\\)
- [x] option-3 | إذا تحركت الحلقة باتجاه \\((+Y)\\)
- [ ] option-4 | إذا تحركت الحلقة باتجاه \\((-Y)\\)
explanation:
التدفق يقيس المجال الذي يخترق مساحة الحلقة. نحتاج معرفة هل يزداد أم ينقص، ثم نطبق قاعدة لنز التي تجعل التيار الحثي يقاوم هذا التغير.

![الرسم الأصلي](assets/lessons/curriculum-evidence/244308bc80fb73c90d82.webp)

نوجه إبهام اليد اليمنى مع تيار السلك إلى اليسار؛ التفاف الأصابع يجعل مجاله إلى داخل الصفحة عند الحلقة فوقه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



لربط التيار الحثي بمجاله نلف أصابع اليد اليمنى مع عقارب الساعة، فيشير الإبهام إلى الداخل؛ لذا نحتاج إلى نقص التدفق الداخل ليعوضه هذا التيار.

تقل شدة مجال السلك بزيادة البعد عنه؛ لذلك نحرك الحلقة إلى أعلى، في اتجاه المحور الصادي الموجب، لتبتعد عن السلك.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi><mo>↓</mo></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![حلقة مستطيلة فوق سلك مستقيم يحمل تياراً باتجاه اليسار](assets/lessons/curriculum-evidence/244308bc80fb73c90d82.webp)
:::

:::mcq
id: physics-tawjihi-2025-p095-q563
title: السؤال 563 — ص 94 — السؤال الأصلي 12
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 94، السؤال 12
question: في الشكل المجاور، في أي حالة من الآتية لا يتولد تيار حثي في الحلقة؟
- [ ] option-1 | تثبيت الحلقة وتحريك المغناطيس نحوها
- [ ] option-2 | تثبيت المغناطيس وتحريك الحلقة نحوه
- [x] option-3 | تحريك كلاهما معاً بنفس السرعة والاتجاه
- [ ] option-4 | تثبيت الحلقة وإبعاد المغناطيس عنها
explanation:
المطلوب الحالة التي لا يتولد فيها تيار حثي. نتحقق من تغير التدفق خلال الحلقة؛ الحركة وحدها لا تكفي لتوليد تيار.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/96abff939d9bcb239087.webp)

التدفق يقيس المجال الذي يخترق مساحة الحلقة. قانون فاراداي يجعل القوة الدافعة الحثية متناسبة مع معدل تغير التدفق \\(\\Phi\\) وعدد اللفات \\(N\\)؛ هنا حلقة واحدة، \\(N=1\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



عندما تتحرك الحلقة والمغناطيس معًا بالسرعة نفسها وفي الاتجاه نفسه، تبقى المسافة بينهما واتجاه الحلقة بالنسبة إلى المغناطيس ثابتين.

لذلك يبقى المجال الذي يخترق الحلقة وتدفقه ثابتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



وبانعدام القوة الدافعة الحثية لا يتولد تيار حثي في الحلقة. الإجابة: تحريك كليهما معًا بالسرعة نفسها وفي الاتجاه نفسه، وهو الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مغناطيس وحلقة دائرية متقابلان](assets/lessons/curriculum-evidence/96abff939d9bcb239087.webp)
:::

:::mcq
id: physics-tawjihi-2025-p096-q564
title: السؤال 564 — ص 95 — السؤال الأصلي 13
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 95، السؤال 13
question: أي من الآتية تعد وحدة قياس القوة الدافعة الكهربائية الحثية؟
- [ ] option-1 | \\(\\mathrm{T\\cdot s/m^2}\\)
- [x] option-2 | \\(\\mathrm{T\\cdot m^2/s}\\)
- [ ] option-3 | \\(\\mathrm{T\\cdot m\\cdot s}\\)
- [ ] option-4 | \\(\\mathrm{T/s}\\)
explanation:
القوة الدافعة الحثية تساوي عدد اللفات مضروبًا في مقدار معدل تغير تدفق اللفة، وفق قانون فاراداي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



عدد اللفات بلا وحدة. وحدة التدفق هي الويبر، والويبر يساوي تسلا مضروبًا في متر مربع؛ لذلك نقسم هذه الوحدة على الثانية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>ε</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow><mi mathvariant="normal">s</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>ε</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow><mi mathvariant="normal">s</mi></mfrac><mo>=</mo><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الإجابة: تسلا مضروبًا في متر مربع، مقسومًا على الثانية؛ الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p096-q565
title: السؤال 565 — ص 95 — السؤال الأصلي 14
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 95، السؤال 14
question: أيّ التغييرات الآتية يقلل محاثة ملف حلزوني طويل ذي وسط خطي؟ ادرس كل تغيير على حدة مع ثبات بقية العوامل.

- [ ] option-1 | زيادة مساحة الملف
- [ ] option-2 | زيادة عدد لفات الملف
- [x] option-3 | زيادة طول الملف
- [ ] option-4 | وضع قلب حديدي داخل الملف
explanation:
المطلوب التغيير الذي يقلل محاثة الملف الحلزوني. عند مقارنة عامل واحد نثبت بقية العوامل.

معامل الحث يقيس ارتباط تدفق اللفات \\(N\\Phi\\) بتيار الملف \\(I\\)؛ حيث \\(N\\) عدد اللفات و\\(\\Phi\\) تدفق اللفة الواحدة. في الملف الطويل ذي الوسط الخطي، يكون المجال متناسبًا مع التيار. نفترض ثبات نفاذية الوسط؛ فلا يتغير نوع القلب أو تشبعه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`



نرمز للطول المحوري بـ\\(\\ell\\)،ولمساحة المقطع بـ \\(A\\)،ولنفاذية الوسط بـ \\(\\mu\\). مجال الملف الطويل يعتمد على عدد لفاته \\(N\\) وتياره \\(I\\) وطوله؛ وتدفق اللفة يساوي \\(BA\\) لأن المجال عمودي على المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>N</mi><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



نعوض ثم نختصر التيار المشترك غير الصفري.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy="false">(</mo><mi>μ</mi><mi>N</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi><mo stretchy="false">)</mo><mi>A</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`



الطول المحوري في المقام؛ لذا فإن زيادته تقلل المحاثة عند ثبات عدد اللفات ومساحة المقطع ونفاذية الوسط.

أما زيادة المساحة أو عدد اللفات فتكبر البسط. ووضع قلب حديدي يزيد النفاذية في نموذج المسألة، فتزداد المحاثة.

الإجابة: زيادة طول الملف.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::





:::mcq
id: physics-tawjihi-2025-p096-q568
title: السؤال 568 — ص 95 — السؤال الأصلي 17
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 95، السؤال 17
question: أي الآتية لا تعد وحدة قياس التدفق المغناطيسي؟
- [x] option-1 | \\(\\mathrm{V/s}\\)
- [ ] option-2 | \\(\\mathrm{N\\cdot s\\cdot m/C}\\)
- [ ] option-3 | \\(\\mathrm{J/A}\\)
- [ ] option-4 | \\(\\mathrm{T\\cdot m^2}\\)
explanation:
التدفق المغناطيسي يقيس مقدار المجال الذي يخترق السطح. عندما يكون المجال عمودياً على السطح، تساوي وحدته تسلا مضروباً في متر مربع. نختبر بقية الوحدات بتحويلها إلى الويبر:

وفق قانون فاراداي، القوة الدافعة تساوي عدد اللفات مضروبًا في معدل تغير التدفق. وعدد اللفات بلا وحدة؛ لذا تكون وحدة التدفق فولتًا مضروبًا في ثانية.

الفولت يساوي جولًا لكل كولوم، والكولوم يساوي أمبيرًا مضروبًا في ثانية؛ فتساوي وحدة التدفق جولًا لكل أمبير.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">Φ</mi><mo stretchy="false">]</mo><mo>=</mo><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">Φ</mi><mo stretchy="false">]</mo><mo>=</mo><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi mathvariant="normal">Φ</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mi mathvariant="normal">J</mi><mi mathvariant="normal">A</mi></mfrac></mrow></math>
\`\`\`



نحوّل الخيار الذي يحتوي النيوتن والكولوم. حاصل ضرب النيوتن في المتر يساوي جولًا، والكولوم يساوي أمبيرًا مضروبًا في ثانية؛ ثم نختصر الثانية من البسط والمقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><mi mathvariant="normal">C</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">J</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mrow><mi mathvariant="normal">A</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><mi mathvariant="normal">C</mi></mfrac><mo>=</mo><mfrac><mi mathvariant="normal">J</mi><mi mathvariant="normal">A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><mi mathvariant="normal">C</mi></mfrac><mo>=</mo><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow></mrow></math>
\`\`\`



يبقى الفولت مقسومًا على الثانية مختلفًا عن الفولت مضروبًا فيها، لذلك هو الاختيار المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi mathvariant="normal">V</mi><mi mathvariant="normal">s</mi></mfrac><mo mathvariant="normal">≠</mo><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p096-q569
title: السؤال 569 — ص 95 — السؤال الأصلي 18
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 95، السؤال 18
question: يتغير التدفق المغناطيسي خلال ملف مكون من \\(N\\) لفة حسب المنحنى في الشكل المجاور، في أي فترة يكون المجال المغناطيسي الحثي المتولد في الملف بنفس اتجاه المجال المغناطيسي الأصلي؟
- [ ] option-1 | الفترة \\((A)\\)
- [ ] option-2 | الفترة \\((B)\\)
- [ ] option-3 | الفترة \\((C)\\)
- [x] option-4 | الفترة \\((D)\\)
explanation:
![منحنى التدفق الأصلي](assets/lessons/curriculum-evidence/da29c04d4f90df096d8a.webp)

التدفق يقيس المجال الذي يخترق مساحة الملف. وفق قاعدة لنز، المجال الحثي يقاوم تغير التدفق؛ يكون مع المجال الأصلي عندما يعوض نقصه.

في المنحنى، الفترة \\(D\\) هابطة؛ التدفق الموجب يتناقص فيها، لذلك يكون المجال الحثي مع المجال الأصلي.

الفترتان \\(A\\) و\\(B\\) صاعدتان، فيكون المجال الحثي معاكساً. الفترة \\(C\\) أفقية، فلا يتغير التدفق ولا ينشأ حث. إذن الفترة \\(D\\)، الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى التدفق المغناطيسي مع الزمن مقسماً إلى الفترات A وB وC وD](assets/lessons/curriculum-evidence/da29c04d4f90df096d8a.webp)
:::

:::mcq
id: physics-tawjihi-2025-p096-q570
title: السؤال 570 — ص 95 — السؤال الأصلي 19
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 95، السؤال 19
question: ملف حلزوني ذو وسط خطي ونفاذية ثابتة، طوله \\(L\\) ومساحة مقطعه \\(A\\) وعدد لفاته \\(N\\) ومحاثته \\(L_{in}\\)، إذا تم مضاعفة شدة التيار المار فيه، فكم يصبح مقدار معامل الحث الذاتي \\(L_{in}\\)؟

- [ ] option-1 | \\(\\frac{1}{2}L_{in}\\)
- [x] option-2 | \\(L_{in}\\)
- [ ] option-3 | \\(2L_{in}\\)
- [ ] option-4 | \\(4L_{in}\\)
explanation:
المعطى أن التيار يتضاعف، بينما تبقى أبعاد الملف وعدد لفاته كما هي. نستخدم النموذج المعتاد ذي النفاذية الثابتة \\(\\mu\\)؛ فيكون المجال متناسباً مع التيار.

معامل الحث هو نسبة ارتباط التدفق إلى التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`



في الملف الحلزوني الطويل، يتناسب المجال مع التيار عند ثبات النفاذية والأبعاد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>N</mi><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`



والتدفق يتناسب مع المجال لأن مساحة المقطع واتجاهه ثابتان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



لذلك يضاعف التيارُ المتضاعفُ التدفقَ أيضًا. نعوض ثم نختصر العامل \\(2\\) من البسط والمقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy="false">(</mo><mn>2</mn><mi mathvariant="normal">Φ</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mi>I</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub></mrow></math>
\`\`\`



الإجابة: يبقى معامل الحث كما هو، في نموذج النفاذية الثابتة.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p097-q571
title: السؤال 571 — ص 96 — السؤال الأصلي 20
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 96، السؤال 20 · صياغة تعليمية معدّلة
question: في الشكل يقترب القطب الشمالي \\(N\\) من الطرف الأيسر للملف. ما اتجاه دوران التيار الحثي في لفات الملف كما يراه ناظر من جهة المغناطيس؟
- [ ] option-1 | مع اتجاه عقارب الساعة.
- [x] option-2 | عكس اتجاه عقارب الساعة.
- [ ] option-3 | لا يتولد تيار حثي.
- [ ] option-4 | يتغير اتجاهه دورياً رغم استمرار الاقتراب بالطريقة نفسها.
explanation:
تقريب \\(N\\) يزيد التدفق خلال الملف. قانون لنز يقول إن المجال الحثي يقاوم التغير الذي ولده.

![اقتراب N من الملف](assets/lessons/curriculum-evidence/6416304c6c1d9ae190b7.webp)

لذلك يصبح الوجه القريب من المغناطيس شمالياً، فيتنافر مع \\(N\\) المقترب.

بقبضة اليد اليمنى، يكون وجه الحلقة شمالياً عندما يبدو التيار فيه عكس اتجاه عقارب الساعة.

الإجابة: عكس اتجاه عقارب الساعة، عند النظر من جهة المغناطيس.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![قطب شمالي لمغناطيس يقترب من ملف حلزوني متصل بمقاومة](assets/lessons/curriculum-evidence/6416304c6c1d9ae190b7.webp)
:::

:::mcq
id: physics-tawjihi-2025-p097-q572
title: السؤال 572 — ص 96 — السؤال الأصلي 21
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 96، السؤال 21
question: يمثل الشكل المجاور حلقة يوجد سلك يسري به تيار كهربائي شدته \\(I\\)، ماذا يحدث للتدفق المغناطيسي داخل الحلقة عندما تتحرك من النقطة \\(A\\) إلى النقطة \\(B\\)؟
- [x] option-1 | يزداد وينشأ تيار حثي مع عقارب الساعة
- [ ] option-2 | يقل وينشأ تيار حثي مع عقارب الساعة
- [ ] option-3 | يزداد وينشأ تيار حثي عكس عقارب الساعة
- [ ] option-4 | يقل وينشأ تيار حثي عكس عقارب الساعة
explanation:
قانون لنز يحدد الاتجاه: المجال الحثي يعارض التغير في التدفق الذي سبّبه. نحدد أولًا هل التدفق الأصلي يزداد أم ينقص، ثم نحدد المجال الحثي، وبعده اتجاه التيار بقاعدة اليد اليمنى.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a38f3b3b298411696559.webp)

التدفق هو المجال الذي يخترق مساحة الحلقة. عند انتقالها من \\(A\\) إلى \\(B\\) تقترب من السلك. مجال السلك الطويل يتناسب عكسياً مع البعد العمودي \\(r\\)؛ فكلما قل البعد زاد المجال والتدفق خلال الحلقة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>↑</mo></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع التيار يميناً؛ التفاف الأصابع يعطي مجالاً خارج الصفحة فوق السلك. يقاوم التيار زيادة التدفق الخارج بمجال إلى الداخل، فيسري مع عقارب الساعة.

إذن يزداد التدفق، ويتولد تيار مع عقارب الساعة؛ الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![حلقة تتحرك من النقطة A إلى B باتجاه سلك مستقيم يحمل تياراً](assets/lessons/curriculum-evidence/a38f3b3b298411696559.webp)
:::

:::mcq
id: physics-tawjihi-2025-p097-q573
title: السؤال 573 — ص 96 — السؤال الأصلي 22
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 96، السؤال 22
question: وحدة قياس التدفق المغناطيسي هي:
- [x] option-1 | \\(\\mathrm{T\\cdot m^2}\\)
- [ ] option-2 | \\(\\mathrm{T\\cdot m}\\)
- [ ] option-3 | \\(\\mathrm{T\\cdot m/A}\\)
- [ ] option-4 | \\(\\mathrm{T/(A\\cdot m)}\\)
explanation:
**الإجابة:** \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">T</mi><mo>⋅</mo><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>\`

**الشاهد من الكتاب:**

> \\(\\Phi _{B}\\): التدفق المغناطيسي، ويقاس بوحدة الويبر \\(\\mathrm{Wb} = T.m^{2}\\).

**المصدر:** صفحة \\(64\\) من الكتاب.



hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p097-q574
title: السؤال 574 — ص 96 — السؤال الأصلي 23
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 96، السؤال 23
question: مصباح مضيء يتصل مع حلقة دائرية مغمورة في مجال مغناطيسي منتظم عمودياً على مستوى الحلقة كما في الشكل، ماذا يحدث لإضاءة المصباح عند حركة الحلقة داخل المجال بعيداً عن الناظر؟
- [ ] option-1 | يطفئ المصباح
- [ ] option-2 | تزداد إضاءة المصباح
- [ ] option-3 | تقل إضاءة المصباح
- [x] option-4 | لا تتغير إضاءة المصباح
explanation:
![الحلقة والمصباح والبطارية الأصليون](assets/lessons/curriculum-evidence/d307299e3fc3ac27e965.webp)

التدفق يقيس المجال الذي يخترق مساحة الحلقة. الحركة بعيداً عن الناظر موازية للمجال العمودي على الحلقة؛ وتبقى شدة المجال ومساحة الحلقة واتجاهها ثابتة. لذلك يبقى التدفق ثابتاً.

قانون فاراداي يربط القوة الدافعة الحثية بمعدل تغير التدفق. للحلقة الواحدة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



لا تتولد قوة دافعة إضافية تغير تيار البطارية؛ فيبقى سطوع المصباح كما كان، الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![حلقة دائرية ومصباح داخل مجال مغناطيسي منتظم](assets/lessons/curriculum-evidence/d307299e3fc3ac27e965.webp)
:::

:::mcq
id: physics-tawjihi-2025-p097-q575
title: السؤال 575 — ص 96 — السؤال الأصلي 24
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 96، السؤال 24
question: ملف حلزوني هوائي طويل عدد لفاته \\(100\\) لفة وطوله \\(20\\,\\mathrm{cm}\\) ومساحة مقطعه \\(5\\,\\mathrm{cm^2}\\)، إذا سرى فيه تيار شدته \\(1\\,\\mathrm{A}\\)، فإن معامل الحث الذاتي للملف يساوي:

- [x] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">H</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow></mrow></math>\`
- [ ] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow></mrow></math>\`
- [ ] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`
explanation:
المعطيات: مئة لفة، وطول عشرون سنتيمترًا، ومساحة مقطع خمسة سنتيمترات مربعة. المطلوب معامل الحث. الملف هوائي طويل؛ لذلك نستخدم نفاذية الفراغ \\(\\mu _{0}\\) التي تقارب نفاذية الهواء.

معامل الحث هو نسبة ارتباط التدفق إلى التيار في الوسط الخطي. نستخدم الرمز \\(\\ell\\) للطول المحوري حتى نميزه عن معامل الحث.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`



في الملف الطويل، نحسب المجال من عدد اللفات والطول والتيار. ولأن المجال عمودي على المقطع، يكون تدفق كل لفة حاصل ضرب المجال في مساحة المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>N</mi><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



نعوض ثم نختصر التيار غير الصفري من البسط والمقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy="false">(</mo><mi>μ</mi><mi>N</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi><mo stretchy="false">)</mo><mi>A</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`



السنتيمتر يساوي جزءًا من مئة متر. وعند تحويل المساحة نربع عامل التحويل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mfrac><mn>20</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow><mo>=</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نعوض بنفاذية الهواء وعدد اللفات والأبعاد. لا نحتاج قيمة التيار بعد اختصاره في اشتقاق العلاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>100</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>0.20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mn>0.20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">H</mi></mrow></math>
\`\`\`



الوحدة هنري؛ فالإجابة الخيار الأول.

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p098-q576
title: السؤال 576 — ص 97 — السؤال الأصلي 25
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 97، السؤال 25
question: في الشكل المجاور، متى يتولد تيار حثي في المقاومة \\(R\\) في الدائرة \\((2)\\) بحيث يكون اتجاهه من \\(a\\) إلى \\(b\\)؟
- [ ] option-1 | عند تحريك الدائرتين معاً نحو اليمين بسرعة ثابتة
- [ ] option-2 | عند إخراج القالب الحديدي
- [ ] option-3 | عند فتح المفتاح \\(S\\) في الدائرة \\((1)\\)
- [x] option-4 | عند إنقاص المقاومة المتغيرة في الدائرة \\((1)\\)
explanation:
قانون لنز يحدد الاتجاه: المجال الحثي يعارض التغير في التدفق الذي سبّبه. نحدد أولًا هل التدفق الأصلي يزداد أم ينقص، ثم نحدد المجال الحثي، وبعده اتجاه التيار بقاعدة اليد اليمنى.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/62f2d319dd03d61c9eec.webp)

يسير تيار الملف الأول من القطب الموجب للبطارية، وهو الخط الأطول، عبر المفتاح إلى طرف الملف الأيسر، ثم يعود من طرفه الأيمن عبر المقاومة إلى السالب.

نلف أصابع اليد اليمنى مع تيار اللفات؛ التيار صاعد في أجزائها الأمامية، فيشير الإبهام إلى مجال الملف الأول يساراً. أما التيار المطلوب من \\(a\\) إلى \\(b\\) في المقاومة الثانية فيدخل الملف من طرفه الأيمن ويخرج من الأيسر؛ فيكون هابطاً في الأجزاء الأمامية ويولد مجالاً إلى اليمين.

إذن المجال المطلوب يعاكس زيادة المجال الأصلي. نحتاج إلى زيادة تيار الدارة الأولى؛ وبقانون أوم يزداد التيار عند إنقاص مقاومتها مع ثبات قوة البطارية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><msub><mi>ε</mi><mn>1</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>↑</mo></mrow></math>
\`\`\`



أما فتح المفتاح أو إخراج القلب الحديدي فينقص التدفق، فينشأ اتجاه معاكس. وتحريك الدارتين معًا لا يغيّر موضعهما النسبي. الإجابة: إنقاص المقاومة المتغيرة في الدارة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>:</mo><mspace width="1em"/><mi>a</mi><mo>⟶</mo><mi>b</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دائرتان متجاورتان تحوي الأولى ملفاً وبطارية ومفتاحاً ومقاومة متغيرة والثانية ملفاً ومقاومة R](assets/lessons/curriculum-evidence/62f2d319dd03d61c9eec.webp)
:::

:::mcq
id: physics-tawjihi-2025-p098-q577
title: السؤال 577 — ص 97 — السؤال الأصلي 26
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 97، السؤال 26
question: في أي الحالات الآتية يتولد تيار حثي مع عقارب الساعة في الحلقة الفلزية التي ينطبق مستواها على مستوى الصفحة والموضوعة في مجال مغناطيسي منتظم كما في الشكل المجاور؟
- [ ] option-1 | إذا تحركت الحلقة نحو الناظر
- [ ] option-2 | إذا تحركت الحلقة بعيداً عن الناظر
- [x] option-3 | إذا قلت مساحة الحلقة
- [ ] option-4 | إذا زادت مساحة الحلقة
explanation:
التدفق المغناطيسي يقيس مقدار المجال الذي يخترق السطح. هنا المجال عمودي على الحلقة، فيساوي مقدار التدفق حاصل ضرب \\(B\\) في مساحتها \\(A\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/c417fd334d3dcd19c57c.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



العلامات المتقاطعة تدل على مجال إلى داخل الصفحة. وبقاعدة اليد اليمنى يولّد التيار مع عقارب الساعة مجالًا إلى الداخل أيضًا.

وفق قانون لنز يعارض المجال الحثي تغير التدفق؛ فيكون دوره هنا تعويض نقص التدفق الداخل.

عند ثبات المجال ينقص التدفق إذا نقصت مساحة الحلقة؛ وهذا هو التغيّر المطلوب.





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi><mo>↓</mo></mrow></math>
\`\`\`



تحريك الحلقة نحو الناظر أو بعيداً عنه داخل المجال المنتظم لا يغير التدفق. إذن نقصان مساحة الحلقة، الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![حلقة مستطيلة داخل مجال مغناطيسي منتظم متجه إلى داخل الصفحة](assets/lessons/curriculum-evidence/c417fd334d3dcd19c57c.webp)
:::

:::mcq
id: physics-tawjihi-2025-p098-q578
title: السؤال 578 — ص 97 — السؤال الأصلي 27
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 97، السؤال 27
question: بالاعتماد على الشكل المجاور، في أي فترة يكون أكبر مقدار للقوة الدافعة الحثية؟
- [ ] option-1 | \\(A\\)
- [ ] option-2 | \\(C\\)
- [x] option-3 | \\(D\\)
- [ ] option-4 | \\(B\\)
explanation:
![منحنى التدفق الأصلي](assets/lessons/curriculum-evidence/e55e22f453501975209c.webp)

قانون فاراداي يجعل مقدار القوة الدافعة الحثية متناسباً مع مقدار معدل تغير التدفق \\(\\Phi\\) وعدد اللفات \\(N\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>N</mi><mrow><mo fence="true">∣</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo fence="true">∣</mo></mrow></mrow></math>
\`\`\`



معدل تغير التدفق هو ميل المنحنى: تغيره مقسوماً على زمن الفترة. نقارن الميل بالقيمة المطلقة، فلا تجعل الإشارة السالبة المقدار أصغر.

في \\(A\\) يرتفع التدفق من الصفر إلى قيمة صغيرة خلال ثانية. في \\(B\\) يبقى ثابتاً، فالميل صفر.

في \\(C\\) يرتفع من القيمة الصغيرة إلى القمة خلال ثانية. في \\(D\\) يهبط من القمة كلها إلى الصفر خلال ثانية؛ تغيره أكبر مقداراً من \\(C\\) و \\(A\\) في الزمن نفسه.

إذن أكبر مقدار للقوة الدافعة في الفترة \\(D\\)، الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى التدفق المغناطيسي مع الزمن مقسماً إلى الفترات A وB وC وD](assets/lessons/curriculum-evidence/e55e22f453501975209c.webp)
:::

:::mcq
id: physics-tawjihi-2025-p098-q580
title: السؤال 580 — ص 97 — السؤال الأصلي 29
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 97، السؤال 29
question: في الشكل المجاور، ملف متصل بمصباح كهربائي وبطارية، وبالقرب منه مغناطيس قوي، في أي حالة من الآتية لا تطرأ تغيرات على درجة سطوع المصباح؟
- [ ] option-1 | إذا قرب المغناطيس نحو الملف
- [ ] option-2 | إذا قرب الملف نحو المغناطيس
- [x] option-3 | إذا تحرك الملف والمغناطيس يساراً بالسرعة نفسها
- [ ] option-4 | إذا أبعد المغناطيس عن الملف
explanation:
![الملف والمغناطيس الأصليان](assets/lessons/curriculum-evidence/5f9baa1d99164cda0587.webp)

التدفق هو المجال الذي يخترق مساحة الملف. عند تحريك الملف والمغناطيس يساراً بالسرعة نفسها، تبقى المسافة بينهما واتجاههما ثابتين؛ لذلك يبقى التدفق ثابتاً.

وفق قانون فاراداي، تتولد قوة دافعة حثية من تغير التدفق؛ ومع ثباته:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



لا ينشأ جهد حثي إضافي يغير تيار البطارية، فيبقى السطوع كما كان؛ الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مغناطيس بجوار ملف متصل بمصباح وبطارية](assets/lessons/curriculum-evidence/5f9baa1d99164cda0587.webp)
:::

:::exam-question
id: physics-tawjihi-2025-p099-q581
title: السؤال 581 — ص 98 — السؤال الأصلي أ-1
question: السؤال الثاني: ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 98، السؤال أ-1 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بمعامل الحث الذاتي للملف؟ وما وحدة قياسه في النظام الدولي؟
final-answer:
- **معامل الحث الذاتي:** نسبة مقدار القوة الدافعة الحثية في الملف إلى مقدار المعدل الزمني لتغير التيار فيه.
- **وحدته:** الهنري \\(\\mathrm{H}\\).
solution:
معامل الحث الذاتي هو نسبة مقدار القوة الدافعة الحثية في الملف إلى مقدار المعدل الزمني لتغير التيار فيه. وحدته الهنري \\(H\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">f</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">Δ</mi><mi>t</mi><mi mathvariant="normal">∣</mi></mrow></mfrac></mrow></math>
\`\`\`



**المصدر:** الصفحات \\(129\\)، \\(131\\) من الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p099-q582
title: السؤال 582 — ص 98 — السؤال الأصلي أ-2
question: السؤال الثاني: ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 98، السؤال أ-2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بالتدفق المغناطيسي؟
final-answer:
**التدفق المغناطيسي:** مقدار اختراق المجال المغناطيسي لسطح؛ وفي المجال المنتظم \\(\\Phi_B=BA\\cos\\theta\\)، حيث \\(\\theta\\) الزاوية بين المجال والعمودي على السطح.
solution:
الإجابة: التدفق المغناطيسي يصف اختراق المجال المغناطيسي لسطح. في المجال المنتظم: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>B</mi></msub><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>\`، حيث \\(\\theta\\) الزاوية بين المجال والعمودي على السطح.

الكتاب: التدفق المغناطيسي، الصفحة المطبوعة \\(64\\)، صفحة \\(\\mathrm{PDF} 66\\).

> وبالمثل، يُعرّف قطع خطوط المجال المغناطيسي لمساحة ما: التدفق المغناطيسي




:::



:::exam-question
id: physics-tawjihi-2025-p099-q584
title: السؤال 584 — ص 98 — السؤال الأصلي أ-4
question: السؤال الثاني: ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 98، السؤال أ-4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بقانون فاراداي؟
final-answer:
**قانون فاراداي:** متوسط القوة الدافعة الحثية يتناسب طرديًا مع المعدل الزمني لتغير التدفق المغناطيسي. لملف من \\(N\\) لفة: \\(\\varepsilon_{\\mathrm{avg}}=-N\\frac{\\Delta\\Phi}{\\Delta t}\\)، حيث \\(\\Phi\\) تدفق اللفة الواحدة.
solution:
الإجابة: متوسط القوة الدافعة الحثية يتناسب طردياً مع المعدل الزمني لتغير التدفق. لملف من \\(N\\) لفة: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>N</mi><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>\`، حيث \\(\\Phi\\) تدفق اللفة الواحدة.

الكتاب: قانون فاراداي، الصفحة المطبوعة \\(66\\)، صفحة \\(\\mathrm{PDF} 68\\).

> متوسط القوة الدافعة الكهربائية الحثية تتناسب طردياً مع المعدل الزمني للتغير في التدفق المغناطيسي الذي يخترق الدارة الكهربائية.




:::

:::exam-question
id: physics-tawjihi-2025-p099-q585
title: السؤال 585 — ص 98 — السؤال الأصلي 1
question: السؤال الثاني — ب: أجب عن الأسئلة التالية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 98، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، حلقة فلزية مستطيلة الشكل وضعت بالقرب من سلك مستقيم طويل يحمل تياراً كهربائياً \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi></mrow></math>\`، وبشكل موازٍ له، حدد اتجاه التيار الحثي في الحلقة الفلزية عند تحريك السلك الذي يحمل تياراً كهربائياً بعيداً عنها لأسفل.

![حلقة فلزية مستطيلة فوق سلك مستقيم يتحرك إلى أسفل ويحمل تياراً](assets/lessons/curriculum-evidence/b35d54a5762783bbce8e.webp)
final-answer:
**مع عقارب الساعة.**
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b35d54a5762783bbce8e.webp)

التدفق هو المجال الذي يخترق مساحة الحلقة. نوجه إبهام اليد اليمنى مع تيار السلك إلى اليسار؛ التفاف الأصابع يعطي مجاله إلى داخل الصفحة في الحلقة أعلاه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



من علاقة مجال السلك، تقل شدته بزيادة البعد عنه. وتحريك السلك إلى أسفل يبعده عن الحلقة، فينقص التدفق الداخل.

وفق قانون لنز، يعارض التيار الحثي هذا النقص فيولد مجالًا إلى الداخل. وبقاعدة اليد اليمنى يكون اتجاه هذا التيار مع عقارب الساعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi><mo>↓</mo></mrow></math>
\`\`\`


:::



:::exam-question
id: physics-tawjihi-2025-p099-q587
title: السؤال 587 — ص 98 — السؤال الأصلي 3
question: السؤال الثاني — ب: أجب عن الأسئلة التالية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 98، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
فسّر: يتضاعف معامل الحث الذاتي لملف حلزوني طويل عند إنقاص طوله إلى النصف، مع ثبات عدد لفاته ومساحة مقطعه ونفاذية الوسط داخله.

final-answer:
لأن معامل الحث الذاتي **يتناسب عكسيًا مع طول الملف** عند ثبات العوامل الأخرى؛ لذا **\\(L^{\\prime}=2L\\)** عند جعل الطول نصف قيمته.
solution:
المطلوب تفسير تضاعف المحاثة عند جعل طول الملف نصف قيمته. المعطيات تثبت مساحة المقطع ونفاذية الوسط وعدد اللفات.

معامل الحث هو نسبة ارتباط التدفق إلى التيار في الوسط الخطي. نستخدم الرمز \\(\\ell\\) للطول المحوري حتى نميزه عن معامل الحث.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`



في الملف الطويل، نحسب المجال من عدد اللفات والطول والتيار. ولأن المجال عمودي على المقطع، يكون تدفق كل لفة حاصل ضرب المجال في مساحة المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>N</mi><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



نعوض ثم نختصر التيار غير الصفري من البسط والمقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy="false">(</mo><mi>μ</mi><mi>N</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi><mo stretchy="false">)</mo><mi>A</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`



نستبدل الطول بنصفه. القسمة على نصف عدد تساوي الضرب في اثنين مقسومًا على ذلك العدد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mrow><mi mathvariant="normal">ℓ</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo mathvariant="normal">′</mo></msubsup><mo>=</mo><mn>2</mn><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub></mrow></math>
\`\`\`



إذن تتضاعف المحاثة، ما دامت العوامل الأخرى ثابتة.

:::

:::exam-question
id: physics-tawjihi-2025-p099-q588
title: السؤال 588 — ص 98 — السؤال الأصلي 4
question: السؤال الثاني — ب: أجب عن الأسئلة التالية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 98، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
فسر: المحاثة كمية فيزيائية موجبة دائماً.
final-answer:
لأنه **نسبة بين مقدارين موجبين**: مقدار القوة الدافعة الحثية ومقدار معدل تغير التيار غير الصفري. الإشارة السالبة في قانون الحث تحدد اتجاه المعارضة وفق لنز، وليست إشارة المحاثة.
solution:
في نموذج الملف والوسط الخطي المدروس، معامل الحث هو النسبة الموجبة بين مقدار القوة الدافعة الحثية ومقدار معدل تغير التيار، عندما يكون التغير غير صفري.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">f</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">Δ</mi><mi>t</mi><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`



أما الإشارة السالبة في قانون القوة الدافعة فتعبر عن قانون لنز: اتجاه القوة الدافعة يعارض تغير التيار، ولا تعني أن المحاثة سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">f</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p099-q589
title: السؤال 589 — ص 98 — السؤال الأصلي 5
question: السؤال الثاني — ب: أجب عن الأسئلة التالية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 98، السؤال 5 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل يقترب القطب الجنوبي \\(S\\) للمغناطيس من الطرف الأيسر للملف المتصل بالمقاومة \\(R\\). حدد اتجاه التيار الحثي في المقاومة بين \\(a\\) و \\(b\\)، وفسر إجابتك.

![الشكل الكامل من الكتاب](assets/lessons/curriculum-evidence/80a793bc6181d9285992.webp)
final-answer:
**من \\(b\\) إلى \\(a\\)**؛ ليصبح الوجه الأيسر للملف **قطبًا جنوبيًا** يقاوم اقتراب القطب الجنوبي للمغناطيس.
solution:
عند اقتراب \\(S\\) يزداد التدفق الذي يسببه المغناطيس داخل الملف. قانون لنز يجعل التيار الحثي يقاوم هذه الزيادة.

![قطبية المغناطيس ومساراللف والموضعان aوb](assets/lessons/curriculum-evidence/80a793bc6181d9285992.webp)

لذلك يصبح الوجه الأيسر للملف جنوبياً ليتنافر مع \\(S\\) المقترب. ويبدو التيار مع عقارب الساعة عند النظر من جهة المغناطيس.

نتتبع اتجاه التيار على اللفات المرسومة بقاعدة اليد اليمنى، ثم على سلكي التوصيل؛ فيمر في المقاومة من \\(b\\) إلى \\(a\\).

الإجابة: من \\(b\\) إلى \\(a\\).
:::

:::exam-question
id: physics-tawjihi-2025-p100-q595
title: السؤال 595 — ص 99 — السؤال الأصلي 5
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 99، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني به \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>600</mn></mrow></math>\` لفة، ومساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>\`، قلبه من الحديد حيث معامل النفاذية المغناطيسية للحديد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>μ</mi><mo>=</mo><mn>22</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mo>⋅</mo><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>\`، ومعامل حثه الذاتي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">H</mi></mrow></math>\`، ويمر به تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. أوجد:
1. طول الملف.
2. متوسط القوة الدافعة الكهربائية الحثية المتولدة في الملف إذا انعدم التيار المار فيه خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.25</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
final-answer:
1. **طول الملف:** \\(0.6336\\pi\\,\\mathrm{m}\\approx1.99\\,\\mathrm{m}\\).
2. **مقدار متوسط القوة الدافعة الحثية:** \\(1\\,\\mathrm{V}\\).
solution:
المعطيات: عدد اللفات \\(600\\)، والمساحة والنفاذية ومعامل الحث معطاة بوحدات النظام الدولي. المطلوب طول الملف ومتوسط القوة الدافعة عند زوال التيار. نعامل النفاذية المعطاة ثابتة في نموذج المسألة.

معامل الحث هو نسبة ارتباط التدفق إلى التيار في الوسط الخطي. نستخدم الرمز \\(\\ell\\) للطول المحوري حتى نميزه عن معامل الحث.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`



في الملف الطويل، نحسب المجال من عدد اللفات والطول والتيار. ولأن المجال عمودي على المقطع، يكون تدفق كل لفة حاصل ضرب المجال في مساحة المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>N</mi><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



نعوض ثم نختصر التيار غير الصفري من البسط والمقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy="false">(</mo><mi>μ</mi><mi>N</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi><mo stretchy="false">)</mo><mi>A</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`



نعزل الطول بضرب الطرفين في الطول، ثم القسمة على معامل الحث.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mi mathvariant="normal">ℓ</mi><mo>=</mo><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>22</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>600</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>0.5</mn></mfrac></mrow></math>
\`\`\`



نربع عدد اللفات ونجمع أسّي العشرة في حاصل ضرب النفاذية والمساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>600</mn><mn>2</mn></msup><mo>=</mo><mn>360000</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn>22</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>360000</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo>=</mo><mn>0.3168</mn><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mfrac><mrow><mn>0.3168</mn><mi>π</mi></mrow><mn>0.5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mn>0.6336</mn><mi>π</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>≈</mo><mn>1.99</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



في الحث الذاتي، يتغير التدفق عندما يتغير التيار. معامل الحث يربط مقدار القوة الدافعة بمقدار معدل تغير التيار؛ لذا نستخدمه عند انعدام التيار المعطى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>I</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mn>0</mn><mo>−</mo><mn>0.5</mn><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.5</mn><mfrac><mn>0.5</mn><mn>0.25</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p100-q596
title: السؤال 596 — ص 99 — السؤال الأصلي 6
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 99، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` وعدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>200</mn></mrow></math>\` لفة ويمر فيه تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، وضع بداخله ملف دائري صغير عدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>50</mn></mrow></math>\` لفة ومساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>22</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\` بحيث كان الملفان متحدي المحور. الملف الحلزوني هوائي طويل. الحالتان الآتيتان مستقلتان، وتبدأ كل منهما من الحالة الابتدائية التي يمر فيها التيار \\(2\\,\\mathrm{A}\\)، وعمود الملف الدائري موازٍ للمجال. احسب مقدار متوسط القوة الدافعة الحثية المتولدة في الملف الدائري:
1. إذا فتح المفتاح وانعدمت شدة التيار في الملف الحلزوني خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
2. إذا دار الملف الدائري داخل الملف الحلزوني حول قطر ثابت يقع في مستوى الملف الأصلي ويكون عموديًا على المجال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.125</mn></mrow></math>\` دورة خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.05</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
3. في المطلوب السابق، وضح سبب تولد تيار حثي لحظي في الملف الدائري أثناء دورانه.

![ملف حلزوني يحتوي ملفاً دائرياً داخلياً متحد المحور ومتصلاً بدائرة](assets/lessons/curriculum-evidence/89dd1325ebfb52fc2c84.svg)

final-answer:
1. **عند فتح المفتاح:** \\(8.8\\pi\\times10^{-4}\\,\\mathrm{V}\\approx2.76\\times10^{-3}\\,\\mathrm{V}\\).
2. **عند الدوران:** \\(1.62\\times10^{-3}\\,\\mathrm{V}\\) تقريبًا.
3. **سبب التيار الحثي:** تغير زاوية الملف أثناء الدوران، ومن ثم تغير التدفق المغناطيسي خلاله رغم ثبات شدة المجال.
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/89dd1325ebfb52fc2c84.svg)

التدفق المغناطيسي يقيس مقدار المجال الذي يخترق السطح. الزاوية \\(\\theta\\) في العلاقة مقيسة بين المجال والعمودي على السطح؛ أما الزاوية مع مستوى السطح فهي متممتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



السنتيمتر يساوي جزءًا من مئة متر؛ ولتحويل السنتيمتر المربع نربع هذا العامل، فيساوي عشرة أس سالب أربعة متر مربع.

داخل الملف الحلزوني الطويل يساوي المجال نفاذية الهواء مضروبة في عدد اللفات والتيار، مقسومة على طول الملف؛ لذلك نستخدم بيانات الملف الكبير لحساب المجال الذي يخترق الملف الصغير.

نحوّل الأبعاد ثم نحسب المجال داخل الملف الحلزوني الذي يمر فيه التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>22</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>0.0022</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>N</mi><mn>1</mn></msub><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>200</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>0.20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>0.00016</mn><mi>π</mi></mrow><mn>0.2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



وفق قانون فاراداي، مقدار متوسط القوة الدافعة يساوي عدد اللفات مضروبًا في مقدار تغير تدفق اللفة، مقسومًا على الزمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><msub><mi>N</mi><mn>2</mn></msub><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi mathvariant="normal">Φ</mi><mi>f</mi></msub><mo>−</mo><msub><mi mathvariant="normal">Φ</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



عند فتح المفتاح ينعدم المجال؛ نحسب تغيّر تدفق جميع لفات الملف الصغير.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mn>1</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><msub><mi>N</mi><mn>2</mn></msub><mi>A</mi><mi>B</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mn>1</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mn>50</mn><mo stretchy="false">(</mo><mn>0.0022</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mn>1</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>8.8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mn>1</mn></msub><mi mathvariant="normal">∣</mi><mo>≈</mo><mn>2.76</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



في حالة الدوران نعود إلى الوضع الأصلي والتيار ثابت في الملف الكبير؛ فهي حالة مستقلة عن فتح المفتاح السابق.

في البداية يتحد محورا الملفين، فالعمود على الملف الصغير يوازي المجال، وزاويته صفر. وعند تدويره ثمن دورة يصبح تغير الزاوية خمسًا وأربعين درجة. الدوران المحدد في السؤال يغيّر زاوية العمود على الملف مع المجال؛ لذلك يتغير التدفق، بخلاف الدوران حول محور الملف نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><mn>0.125</mn><mo stretchy="false">(</mo><msup><mn>360</mn><mo>∘</mo></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mn>45</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>i</mi></msub><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>f</mi></msub><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mo>⁡</mo><msup><mn>45</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



نحسب متوسط القوة الدافعة من مقدار نقص التدفق أثناء الدوران.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><msub><mi>N</mi><mn>2</mn></msub><mi>B</mi><mi>A</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>cos</mi><mo>⁡</mo><msup><mn>45</mn><mo>∘</mo></msup><mo stretchy="false">)</mo></mrow><mn>0.05</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mn>50</mn><mo stretchy="false">(</mo><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.0022</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>0.05</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi><mo>≈</mo><mn>1.62</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



يتولد التيار أثناء الدوران لأن زاوية الملف تتغيّر، فيتغيّر التدفق رغم ثبات شدة المجال.

:::

:::exam-question
id: physics-tawjihi-2025-p101-q597
title: السؤال 597 — ص 100 — السؤال الأصلي 7
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 100، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، أثرت قوة على موصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo></mrow></math>\` طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، ينزلق على موصلين متوازيين، فتحرك بسرعة ثابتة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` باتجاه السينات السالب عمودياً على مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.5</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\`. أجب عن الآتية:
1. وضح منشأ القوة الدافعة الحثية في الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo></mrow></math>\`.
2. ما مقدار واتجاه التيار الحثي المتولد في كل من المقاومتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\` و\`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\`؟
3. ما مقدار القوة المغناطيسية المؤثرة في الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo></mrow></math>\` واتجاهها؟

توضيح لاتصالات الرسم: الطرف \\(a\\) أعلى القضيب والطرف \\(b\\) أسفله، والمجال المغناطيسي إلى داخل الصفحة. تصل كل من المقاومتين بين السكتين، فتكونان على التوازي مع القضيب، ونهمل مقاومة القضيب والسكتين.

![موصل ab منزلق بين سكتين في مجال مغناطيسي مع مقاومتين 2 أوم و5 أوم](assets/lessons/curriculum-evidence/70957a666abe2a61a388.webp)
final-answer:
1. **منشأ القوة الدافعة:** فصل الشحنات بفعل القوة المغناطيسية؛ تتجمع الإلكترونات عند الطرف العلوي \\(a\\)، ويصبح الطرف السفلي \\(b\\) موجبًا.
2. **التياران:** في مقاومة \\(2\\,\\Omega\\): **\\(2\\,\\mathrm{A}\\)**؛ وفي مقاومة \\(5\\,\\Omega\\): **\\(0.8\\,\\mathrm{A}\\)**. اتجاه كليهما **من السكة السفلى إلى العليا**.
3. **القوة المغناطيسية:** \\(1.4\\,\\mathrm{N}\\)، **إلى اليمين**.
solution:
للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/70957a666abe2a61a388.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



قانون أوم يعطي التيار في كل مقاومة من فرق الجهد بين طرفيها مقسوماً على مقاومتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



نحوّل الطول إلى متر بقسمته على مئة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>20</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



أولاً، نوجه أصابع اليد اليمنى مع السرعة يساراً ثم نحو المجال الداخل؛ يشير الإبهام إلى القوة على الشحنة الموجبة إلى أسفل. ولأن الإلكترون سالب، تكون القوة عليه إلى أعلى؛ فتتجمع الإلكترونات عند الطرف العلوي ويصبح السفلي موجبًا، وينشأ فرق جهد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mi>B</mi></msub><mo>=</mo><mi>q</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>2.5</mn><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



ثانياً، المقاومتان على التوازي؛ أي تتصلان بين السكتين نفسيهما. لذلك فرق الجهد على كل منهما يساوي \\(4\\,\\mathrm{V}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>2</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>2</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>5</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>5</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0.8</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



يسري التيار الاصطلاحي من السكة السفلى إلى العليا عبر كل مقاومة، أي إلى أعلى في المقاومتين، ويعود إلى أسفل في القضيب.

يتفرع التيار عند نقطة اتصال السكتين؛ وبحفظ الشحنة يساوي تيار القضيب مجموع تياري الفرعين.

القوة على موصل يحمل تيارًا عموديًا على المجال تساوي المجال مضروبًا في التيار وطول الموصل داخل المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`



نجمع تياري الفرعين لإيجاد تيار القضيب، ثم نحسب القوة المغناطيسية التي تعاكس حركته نحو اليسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>0.8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>2.8</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>B</mi><mi>L</mi><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>2.5</mn><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mn>1.4</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



اتجاه القوة المغناطيسية إلى اليمين، عكس حركة القضيب إلى اليسار؛ وهذا يتفق مع قانون لنز.
:::

:::exam-question
id: physics-tawjihi-2025-p101-q598
title: السؤال 598 — ص 100 — السؤال الأصلي 8
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 100، السؤال 8 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني طويل ذو قلب هوائي، طوله \\(0.25\\,\\mathrm{m}\\)، وعدد لفاته \\(300\\)، ومساحة مقطعه \\(4\\,\\mathrm{cm^{2}}\\). يزداد تياره من الصفر إلى \\(2\\,\\mathrm{A}\\) خلال \\(0.4\\,\\mathrm{s}\\). بجانبه ملف ثانٍ مغلق وثابت، ومحورا الملفين على خط واحد؛ لذلك يكون مستوى لفات الثاني عمودياً على المجال المحوري. يزداد التدفق المغناطيسي الذي يسببه الأول خلال الثاني باتجاه اليسار عند زيادة تيار الأول. جد:
1. معامل الحث الذاتي للملف الأول.
2. متوسط القوة الدافعة الذاتية فيه، باعتبار اتجاه تياره المتزايد موجباً.
3. اتجاه المجال الحثي في الملف الثاني مع التفسير.
استخدم\\(\\mu _{0}=4\\pi \\times 10^{-7}\\,\\mathrm{H/m}\\).
final-answer:
1. **معامل الحث الذاتي:** \\(L\\approx1.81\\times10^{-4}\\,\\mathrm{H}\\).
2. **متوسط القوة الدافعة الذاتية:** \\(\\varepsilon_{\\mathrm{avg}}\\approx-9.05\\times10^{-4}\\,\\mathrm{V}\\).
3. **المجال الحثي في الملف الثاني:** نحو **اليمين**، لمعارضة زيادة التدفق نحو اليسار.
solution:
المعطيات: قلب هوائي، \\(N=300\\)، والطول\\(\\ell =0.25\\,\\mathrm{m}\\)، ومساحة المقطع \\(4\\,\\mathrm{cm^{2}}\\). نحول المساحة؛ كل \\(\\,\\mathrm{cm^{2}}\\)يساوي \\(10^{-4}\\,\\mathrm{m^{2}}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



المحاثة تقيس ارتباط التدفق بالتيار. للملف الطويل الهوائي \\(L=\\mu _{0}N^{2}A/\\ell\\)؛ لذلك نستخدم بيانات اللف والهندسة المعطاة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>300</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>0.25</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>5.76</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>≈</mo><mn>1.81</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">H</mi></mrow></math>
\`\`\`



القوة الدافعة الذاتية تعارض تغير التيار. الاتجاه الموجب المختار هو اتجاه تيار يزداد، فتكون القوة الدافعة الذاتية سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>L</mi><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mn>0</mn></mrow><mn>0.4</mn></mfrac><mo>=</mo><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><mn>1.81</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>9.05</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



في الملف الثاني يزداد التدفق نحو اليسار. وفق لنز، يولد التيار الحثي مجالاً يعارض هذه الزيادة، فيكون مجاله نحو اليمين.

الإجابات: \\(L\\approx 1.81\\times 10^{-4}\\,\\mathrm{H}\\)، ومتوسط القوة الدافعة\\(-9.05\\times 10^{-4}\\,\\mathrm{V}\\)، والمجال الحثي في الثاني نحو اليمين.
:::

:::exam-question
id: physics-tawjihi-2025-p101-q599
title: السؤال 599 — ص 100 — السؤال الأصلي 9
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 100، السؤال 9
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور ملفاً دائرياً قطره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` وعدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>200</mn></mrow></math>\` لفة، موصول بطرفي مقاومة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>33</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\`، وموضوع في مستوى عمودي على مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.3</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` يتجه نحو الناظر. إذا انعكس اتجاه المجال المغناطيسي وتغيرت شدته إلى \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` خلال زمن \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`، أجب عما يلي:
1. ما مقدار شدة التيار الحثي المار في المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`؟
2. حدد اتجاه التيار الحثي في الحلقة، مع التفسير.

![حلقة دائرية ومقاومة 33 أوم قبل وبعد انعكاس المجال المغناطيسي](assets/lessons/curriculum-evidence/175bb9ee44491bec3afa.webp)
final-answer:
1. **متوسط شدة التيار الحثي:** \\(0.17\\,\\mathrm{A}\\) تقريبًا.
2. **اتجاهه:** عكس عقارب الساعة؛ ليولد مجالًا إلى الخارج يقاوم نقص التدفق الخارج وانعكاسه.
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/175bb9ee44491bec3afa.webp)

قانون فاراداي يربط متوسط القوة الدافعة الحثية بمعدل تغير التدفق خلال اللفة، مضروبًا في عدد اللفات. نستخدمه لأن انعكاس المجال يغير التدفق؛ المجال عمودي على الحلقة، فتدفق كل لفة \\(\\Phi =BA\\). المطلوب مقدار متوسط التيار أثناء التغير.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>N</mi><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



قانون لنز يحدد الاتجاه: المجال الحثي يعارض التغير في التدفق الذي سبّبه. نحدد أولًا هل التدفق الأصلي يزداد أم ينقص، ثم نحدد المجال الحثي، وبعده اتجاه التيار بقاعدة اليد اليمنى.

بعد حساب القوة الدافعة الحثية، نقسم مقدارها على المقاومة الكلية بقانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi></mrow><mi>R</mi></mfrac></mrow></math>
\`\`\`



القطر اثنا عشر سنتيمترًا، فنأخذ نصفه ونحوّله إلى متر قبل حساب المساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>12</mn><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><mn>100</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.06</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>0.0036</mn><mi>π</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نختار المجال الخارج موجبًا؛ بعد الانعكاس يصبح المجال النهائي سالبًا، لذا نجمع المقدارين عند حساب مقدار التغيّر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>i</mi></msub><mo>=</mo><mn>0.3</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>B</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mo>−</mo><mn>0.2</mn><mo>−</mo><mn>0.3</mn><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>B</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نحسب القوة الدافعة ثم نقسمها على المقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mi>A</mi><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>B</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mn>200</mn><mo stretchy="false">(</mo><mn>0.0036</mn><mi>π</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo></mrow><mn>0.2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>1.8</mn><mi>π</mi><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>1.8</mn><mi>π</mi></mrow><mn>33</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>≈</mo><mn>0.17</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



يولّد التيار مجالًا إلى الخارج ليقاوم نقص التدفق الخارج وانعكاسه؛ لذلك يكون اتجاهه عكس عقارب الساعة.
:::

:::exam-question
id: physics-tawjihi-2025-p101-q600
title: السؤال 600 — ص 100 — السؤال الأصلي 10
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 100، السؤال 10 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قضيب موصل أفقي طوله \\(1\\,\\mathrm{m}\\) وكتلته \\(0.15\\,\\mathrm{kg}\\) ينزلق إلى الأسفل على سكتين رأسيّتين موصلتين دون احتكاك. تتصل السكتان من أعلى بمقاومة لتكوين دارة مغلقة، ولا توجد بطارية. المقاومة الكلية للدارة \\(5\\,\\mathrm{\\Omega}\\)، ومجال منتظم شدته \\(0.75\\,\\mathrm{T}\\) عمودي إلى داخل الصفحة. عند وصول القضيب إلى سرعة ثابتة احسب:
1. مقدار القوة الدافعة الحثية في القضيب.
2. مقدار سرعته.
أهمل الحث الذاتي واستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\).
final-answer:
1. **القوة الدافعة الحثية:** \\(10\\,\\mathrm{V}\\).
2. **السرعة الثابتة:** \\(13.33\\,\\mathrm{m/s}\\) تقريبًا إلى الأسفل.
solution:
عند السرعة الثابتة محصلة القوى صفر. القوة المغناطيسية تعارض السقوط فتتجه للأعلى وتوازن الوزن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>m</mi><mi>g</mi></mrow></math>
\`\`\`



القضيب والتيار عموديان على المجال، فتكون \\(F_{B}=BIL\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>I</mi><mi>L</mi><mo>=</mo><mi>m</mi><mi>g</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mrow><mi>B</mi><mi>L</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>0.15</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow><mrow><mn>0.75</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



لا توجد بطارية، فتساوي القوة الدافعة الحثية حاصل ضرب التيار في المقاومة الكلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>I</mi><mi>R</mi><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



في قضيب يتحرك عمودياً على طوله وعلى المجال، القوة الدافعة الحركية مقدارها \\(BLv\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi>B</mi><mi>L</mi></mrow></mfrac><mo>=</mo><mfrac><mn>10</mn><mrow><mn>0.75</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>13.33</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابتان: \\(10\\,\\mathrm{V}\\)، والسرعة \\(13.33\\,\\mathrm{m/s}\\) إلى الأسفل.
:::

:::exam-question
id: physics-tawjihi-2025-p102-q603
title: السؤال 603 — ص 101 — السؤال الأصلي 13
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 101، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow></math>\` طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` يتحرك بسرعة ثابتة على موصلين متوازيين ومتصلين بمقاومة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\`، وبوجود مجال مغناطيسي منتظم مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\`، كما في الرسم المجاور. تكون فرق جهد بين طرفي الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`. احسب ما يلي:
1. مقدار السرعة التي يتحرك بها الموصل.
2. مقدار القوة الخارجية المؤثرة على الموصل.

توضيح لهندسة الرسم: الطرف \\(y\\) أعلى القضيب والطرف \\(x\\) أسفله، والسكتان أفقيتان تصل بينهما مقاومة \\(5\\,\\mathrm{\\Omega}\\). يتحرك القضيب إلى اليسار عموديًا على طوله، والمجال عمودي على مستوى الدارة. نهمل مقاومة القضيب والسكتين.

![موصل xy ينزلق على سكتين في مجال مغناطيسي ومتصل بمقاومة 5 أوم](assets/lessons/curriculum-evidence/2e9f2de199053dafeb4a.webp)
final-answer:
1. **مقدار السرعة:** \\(12.5\\,\\mathrm{m/s}\\).
2. **القوة الخارجية:** \\(1.6\\,\\mathrm{N}\\) إلى اليسار.
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/2e9f2de199053dafeb4a.webp)

السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و \\(\\theta\\) الزاوية بين اتجاه التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



تيار المقاومة يساوي فرق الجهد بين طرفيها مقسوماً على مقاومتها بقانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



نحوّل طول الموصل إلى متر، ثم نقسم فرق الجهد الحثي على حاصل ضرب المجال في الطول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>20</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><mi>B</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>10</mn><mrow><mn>4</mn><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>10</mn><mn>0.8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mn>12.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب التيار المار في المقاومة من فرق الجهد المعطى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>10</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



السرعة ثابتة، فتساوي القوة الخارجية مقدار القوة المغناطيسية. وبحسب سهم الحركة في الرسم تكون الخارجية إلى اليسار والمغناطيسية إلى اليمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>1.6</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p102-q604
title: السؤال 604 — ص 101 — السؤال الأصلي 14
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 101، السؤال 14
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل معدني طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>L</mi></mrow></math>\` وكتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>m</mi></mrow></math>\` ينزلق على سكة تحت تأثير وزنه للأسفل بسرعة ثابتة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>v</mi></mrow></math>\` في مستوى رأسي، على سكة موصلة موضوعة في مجال مغناطيسي منتظم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>B</mi></mrow></math>\` عمودي على الصفحة للخارج كما في الشكل المجاور. أثبت أن السرعة التي يتحرك بها الموصل تعطى بالعلاقة الآتية:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msup><mi>L</mi><mn>2</mn></msup><msup><mi>B</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`


حيث \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>g</mi></mrow></math>\` تسارع الجاذبية الأرضية.

![قضيب موصل ينزلق رأسياً بين سكتين متصلتين بمقاومة R في مجال مغناطيسي](assets/lessons/curriculum-evidence/c2f47d7bb5d66d1c7fe2.webp)
final-answer:
**العلاقة المثبتة:** \\(v=\\frac{mgR}{B^2L^2}\\).

**شرط الاتزان:** \\(mg=BIL\\)، مع \\(I=\\frac{BLv}{R}\\).
solution:
السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و \\(\\theta\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/c2f47d7bb5d66d1c7fe2.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



\\(R\\) المقاومة الكلية للدارة المغلقة. قانون أوم يربط التيار بالقوة الدافعة الحثية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



عند السرعة الثابتة تكون محصلة القوى صفرًا؛ لذلك توازن القوة المغناطيسية وزن الموصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mrow><mi>B</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`



نربط التيار بالقوة الدافعة الناتجة عن حركة الموصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>B</mi><mi>L</mi><mi>v</mi></mrow><mi>R</mi></mfrac></mrow></math>
\`\`\`



نساوي التعبيرين للتيار ثم نعزل السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mrow><mi>B</mi><mi>L</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>B</mi><mi>L</mi><mi>v</mi></mrow><mi>R</mi></mfrac></mrow></math>
\`\`\`



نضرب الطرفين في \\(BLR\\)، ثم نقسم على \\(B^{2}L^{2}\\) لعزل \\(v\\). هنا \\(B\\) و \\(L\\) و \\(R\\) موجبة في نموذج السكة الموصلة والمقاومة المحدودة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>R</mi><mo>=</mo><msup><mi>B</mi><mn>2</mn></msup><msup><mi>L</mi><mn>2</mn></msup><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>R</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p102-q605
title: السؤال 605 — ص 101 — السؤال الأصلي 15
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 101، السؤال 15
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo></mrow></math>\` طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` متصل على التوالي مع مقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\` في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>B</mi></mrow></math>\`. إذا تحرك الموصل لليمين بسرعة ثابتة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>v</mi></mrow></math>\` تحت تأثير قوة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.00864</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>\`، فتولدت قوة دافعة حثية مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.36</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\` وتياراً حثياً مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.072</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` باتجاه عكس عقارب الساعة كما في الشكل المجاور، احسب:
1. المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
2. شدة المجال المغناطيسي المنتظم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>B</mi></mrow></math>\`.
3. سرعة الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>v</mi></mrow></math>\` أثناء حركته في المجال المغناطيسي بوحدة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></math>\`.

![موصل ab يتحرك إلى اليمين على سكتين مع مقاومة R داخل مجال مغناطيسي](assets/lessons/curriculum-evidence/2bc0e62d8e57732d4c6a.webp)
final-answer:
1. **المقاومة:** \\(R=5\\,\\Omega\\).
2. **شدة المجال:** \\(B=0.3\\,\\mathrm{T}\\).
3. **السرعة:** \\(v=3\\,\\mathrm{m/s}\\).
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/2bc0e62d8e57732d4c6a.webp)

للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



بإهمال مقاومة السكتين والقضيب، يقع فرق الجهد الحثي كله على المقاومة. بقانون أوم يساوي فرق الجهد حاصل ضرب التيار في المقاومة؛ لذلك نقسمه على التيار لعزل المقاومة.

نحسب المقاومة من القوة الدافعة والتيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>ε</mi><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>0.36</mn><mn>0.072</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



القوة المغناطيسية على القضيب العمودي على المجال مقدارها حاصل ضرب المجال والتيار والطول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`



لأن السرعة ثابتة، تساوي القوة الخارجية مقدار القوة المغناطيسية؛ نعزل شدة المجال بعد تحويل الطول إلى متر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>40</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.40</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><msub><mi>F</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mrow><mi>I</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mn>0.00864</mn><mrow><mn>0.072</mn><mo stretchy="false">(</mo><mn>0.40</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mn>0.00864</mn><mn>0.0288</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>0.3</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نعوّض في علاقة القوة الدافعة الحركية لنجد السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><mi>B</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>0.36</mn><mrow><mn>0.3</mn><mo stretchy="false">(</mo><mn>0.40</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>0.36</mn><mn>0.12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p103-q606
title: السؤال 606 — ص 102 — السؤال الأصلي 16
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 102، السؤال 16
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo></mrow></math>\` طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>50</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` متصل على التوالي مع مقاومة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\` في مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\`. إذا تحرك الموصل بسرعة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\` حيث تولد فيه تيار حثي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` وبعكس عقارب الساعة كما في الشكل المجاور، احسب:
1. القوة الدافعة الكهربائية الحثية المتولدة.
2. مقدار السرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\` واتجاهها.
3. القوة الخارجية اللازمة حتى يتحرك الموصل بهذه السرعة الثابتة.

![موصل ab ومقاومة 2 أوم داخل مجال مغناطيسي متجه إلى داخل الصفحة](assets/lessons/curriculum-evidence/b9f7ffcc0d7f45e0fbf4.webp)
final-answer:
1. **القوة الدافعة الحثية:** \\(1\\,\\mathrm{V}\\).
2. **السرعة:** \\(4\\,\\mathrm{m/s}\\) إلى اليمين.
3. **القوة الخارجية:** \\(0.125\\,\\mathrm{N}\\) إلى اليمين.
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b9f7ffcc0d7f45e0fbf4.webp)

السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و \\(\\theta\\) الزاوية بين اتجاه التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



قانون لنز يحدد الاتجاه: المجال الحثي يعارض التغير في التدفق الذي سبّبه. نحدد أولًا هل التدفق الأصلي يزداد أم ينقص، ثم نحدد المجال الحثي، وبعده اتجاه التيار بقاعدة اليد اليمنى.

للموصل المستقيم المتحرك في مجال منتظم، إذا كان طوله وسرعته والمجال متعامدة، تكون القوة الدافعة الحركية حاصل ضرب المجال في طول الموصل داخل المجال وفي سرعته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>ε</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



بقانون أوم يساوي فرق الجهد التيار مضروبًا في المقاومة. نهمل مقاومة القضيب والسكتين، فتساوي القوة الدافعة الحثية فرق الجهد على المقاومة.

نحسب القوة الدافعة من التيار والمقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نحوّل طول الموصل إلى متر ونعزل السرعة من علاقة القوة الدافعة الحركية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>50</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.50</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><mi>B</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>0.5</mn><mo stretchy="false">(</mo><mn>0.50</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><mn>0.25</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى إلى الخارج؛ التفاف الأصابع يعطي التيار عكس عقارب الساعة. وفق لنز، هذا المجال الحثي يقاوم زيادة التدفق الداخل. لذلك يتحرك القضيب يمينًا ليزيد مساحة الحلقة.

القوة المغناطيسية على القضيب إلى اليسار، فتكون القوة الخارجية اللازمة لاستمرار السرعة إلى اليمين وبالمقدار نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.50</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>0.125</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p103-q607
title: السؤال 607 — ص 102 — السؤال الأصلي 17
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 102، السؤال 17
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` وعدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>200</mn></mrow></math>\` لفة ويمر به تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، وضع داخله ملف دائري صغير عدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>50</mn></mrow></math>\` لفة ومساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\` بحيث كان الملفان متحدين في المحور. احسب متوسط القوة الدافعة الحثية المتولدة في الملف الدائري إذا فتحت دائرة الملف الحلزوني وانعدمت شدة التيار فيه في زمن مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
final-answer:
**مقدار متوسط القوة الدافعة الحثية:** \\(8\\pi\\times10^{-5}\\,\\mathrm{V}\\approx2.51\\times10^{-4}\\,\\mathrm{V}\\).
solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

المعطيات تخص ملفين: الكبير يولد المجال، والصغير يستقبل التدفق المتغير. لذلك نستخدم عدد لفات الكبير في قانون مجاله، وعدد لفات الصغير في قانون القوة الدافعة.

السنتيمتر يساوي جزءًا من مئة متر؛ والسنتيمتر المربع يساوي مربع هذا العامل، أي عشرة أس سالب أربعة متر مربع.

نحوّل مساحة الملف الصغير وطول الملف الحلزوني إلى وحدات النظام الدولي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



داخل الملف الحلزوني الطويل، يساوي المجال نفاذية الهواء مضروبة في عدد اللفات والتيار، مقسومة على طول الملف.

نحسب المجال الأولي داخل الملف الحلزوني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>N</mi><mn>1</mn></msub><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>200</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>0.20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mn>0.00016</mn><mi>π</mi></mrow><mn>0.2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>i</mi></msub><mo>=</mo><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



يتحد محورا الملفين، فيكون المجال موازيًا للعمود على سطح الملف الصغير؛ لذلك تدفق اللفة يساوي حاصل ضرب المجال في مساحتها.

وفق قانون فاراداي، مقدار متوسط القوة الدافعة يساوي عدد لفات الملف الصغير مضروبًا في مقدار تغير تدفق اللفة، مقسومًا على الزمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><msub><mi>N</mi><mn>2</mn></msub><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi mathvariant="normal">Φ</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



عند فتح الدارة ينعدم المجال؛ لذلك يساوي مقدار تغيّر التدفق تدفقه الأولي في كل لفة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><msub><mi>N</mi><mn>2</mn></msub><mi>A</mi><mi mathvariant="normal">∣</mi><msub><mi>B</mi><mi>f</mi></msub><mo>−</mo><msub><mi>B</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mn>50</mn><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>≈</mo><mn>2.51</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p103-q608
title: السؤال 608 — ص 102 — السؤال الأصلي 18
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 102، السؤال 18
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني به \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>600</mn></mrow></math>\` لفة، ومساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>\`، قلبه من الحديد حيث معامل النفاذية المغناطيسية للحديد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>μ</mi><mo>=</mo><mn>22</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mo>⋅</mo><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>\`، ومعامل حثه الذاتي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">H</mi></mrow></math>\`، ويمر به تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. جد:
1. طول الملف.
2. متوسط القوة الدافعة الكهربائية الحثية المتولدة في الملف الحلزوني إذا انعدم التيار الكهربائي المار فيه خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
final-answer:
1. **طول الملف:** \\(0.6336\\pi\\,\\mathrm{m}\\approx1.99\\,\\mathrm{m}\\).
2. **مقدار متوسط القوة الدافعة الحثية:** \\(0.5\\,\\mathrm{V}\\).
solution:
المعطيات: عدد اللفات \\(600\\)، والمساحة والنفاذية ومعامل الحث معطاة بوحدات النظام الدولي. المطلوب طول الملف ومتوسط القوة الدافعة عند زوال التيار. نعامل النفاذية المعطاة ثابتة في نموذج المسألة.

معامل الحث هو نسبة ارتباط التدفق إلى التيار في الوسط الخطي. نستخدم الرمز \\(\\ell\\) للطول المحوري حتى نميزه عن معامل الحث.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant="normal">Φ</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`



في الملف الطويل، نحسب المجال من عدد اللفات والطول والتيار. ولأن المجال عمودي على المقطع، يكون تدفق كل لفة حاصل ضرب المجال في مساحة المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>N</mi><mi>I</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Φ</mi><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`



نعوض ثم نختصر التيار غير الصفري من البسط والمقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy="false">(</mo><mi>μ</mi><mi>N</mi><mi>I</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">ℓ</mi><mo stretchy="false">)</mo><mi>A</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><mi mathvariant="normal">ℓ</mi></mfrac></mrow></math>
\`\`\`



نعزل الطول بضرب الطرفين في الطول، ثم القسمة على معامل الحث.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mi mathvariant="normal">ℓ</mi><mo>=</mo><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>N</mi><mn>2</mn></msup><mi>A</mi></mrow><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>22</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>600</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>0.5</mn></mfrac></mrow></math>
\`\`\`



نربع عدد اللفات ونجمع أسّي العشرة في حاصل ضرب النفاذية والمساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>600</mn><mn>2</mn></msup><mo>=</mo><mn>360000</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn>22</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>360000</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo stretchy="false">)</mo><mo>=</mo><mn>0.3168</mn><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mfrac><mrow><mn>0.3168</mn><mi>π</mi></mrow><mn>0.5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>=</mo><mn>0.6336</mn><mi>π</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">ℓ</mi><mo>≈</mo><mn>1.99</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



في الحث الذاتي، يتغير التدفق عندما يتغير التيار. معامل الحث يربط مقدار القوة الدافعة بمقدار معدل تغير التيار؛ لذا نستخدمه عند انعدام التيار المعطى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><msub><mi>L</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>I</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mn>0</mn><mo>−</mo><mn>0.5</mn><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.5</mn><mfrac><mn>0.5</mn><mn>0.5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>ε</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">g</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p103-q609
title: السؤال 609 — ص 102 — السؤال الأصلي 19
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 102، السؤال 19
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور قضيب فلزي موصل للكهرباء كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.15</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` وطوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` ينزلق على السكة الموصلة الثابتة الطويلة تحت تأثير وزنه للأسفل بحيث يبقى ملامساً للسكة، ومن ثم دخل منطقة مجال مغناطيسي منتظم شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.75</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` باتجاه بعيداً عن الناظر. بعد إغلاق المفتاح الموضح في الشكل، احسب:
1. القوة الدافعة الحثية المتولدة في القضيب الفلزي حتى يتحرك بسرعة ثابتة للأسفل.
2. مقدار السرعة الثابتة التي يصل إليها القضيب الفلزي في منطقة المجال المغناطيسي.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![قضيب فلزي ينزلق رأسياً على سكتين في دائرة تحوي بطارية 5 فولت ومقاومة 5 أوم ومفتاحاً](assets/lessons/curriculum-evidence/273916504c5e0734372f.webp)

final-answer:
1. **القوة الدافعة الحثية:** \\(15\\,\\mathrm{V}\\).
2. **السرعة الثابتة:** \\(20\\,\\mathrm{m/s}\\) إلى الأسفل.
solution:
نحسب الحالة بعد غلق المفتاح؛ فتكتمل الدارة ويمر التيار الذي يولد قوة مغناطيسية توازن وزن القضيب عند السرعة الثابتة.

السلك الذي يحمل تيارًا يتأثر بقوة مغناطيسية لأن شحناته تتحرك. \\(L\\) هو طول الجزء الموجود داخل المجال، و\\(\\theta\\) الزاوية بين اتجاه التيار والمجال.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/273916504c5e0734372f.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mi>B</mi></msub><mo>=</mo><mi>I</mi><mi>L</mi><mi>B</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



عند السرعة الثابتة توازن القوة المغناطيسية وزن القضيب؛ نستخدم قيمة تسارع الجاذبية المعتمدة في مسائل الكتاب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>B</mi><mi>I</mi><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mrow><mi>B</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>0.15</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow><mrow><mn>0.75</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1.5</mn><mn>0.75</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



القوة إلى أعلى تستلزم تيارًا إلى اليمين في القضيب بقاعدة اليد اليمنى. الخط الأطول للبطارية في الرسم يقع إلى اليمين؛ لذلك يدفع تيار البطارية في القضيب إلى اليسار، عكس التيار المطلوب.

بتطبيق حفظ الطاقة حول الدارة، يساوي صافي القوة الدافعة هبوط الجهد على المقاومة؛ وهو حاصل ضرب التيار في المقاومة بقانون أوم.

مع هبوط القضيب في المجال الداخل تتولد قوة دافعة تدفع التيار إلى اليمين في القضيب. وتعاكسها بطارية الخمسة فولت في الرسم، فيكون فرق القوتين هو هبوط الجهد على المقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>−</mo><mn>5</mn><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo>+</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



لأن طول القضيب وسرعته والمجال متعامدة، فإن القوة الدافعة الحركية تساوي حاصل ضرب المجال والطول والسرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mi>B</mi><mi>L</mi><mi>v</mi></mrow></math>
\`\`\`



نقسم القوة الدافعة الحثية على حاصل ضرب المجال في طول القضيب لنجد السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><msub><mi>ε</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mrow><mi>B</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>15</mn><mrow><mn>0.75</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>15</mn><mn>0.75</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::
`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "الحث الكهرومغناطيسي",
  "summary": "أسئلة الكتاب بترتيب المصدر، تليها أسئلة إضافية مع الاحتفاظ باختلاف المعطيات.",
  "outcome": "مراجعة الحث الكهرومغناطيسي من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "85 سؤالًا",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
