import { defineMarkdownLesson } from "../../../markdown/lesson-model.js";

export const lessonSource = `
:::mcq
id: physics-book-2024-p028-review-1-1
title: أسئلة الفصل — س1/1 — الكتاب، صفحة PDF 28
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س1/1
question: تعتمد مقاومية السلك على:
- [ ] option-1 | مقاومته
- [ ] option-2 | طوله
- [ ] option-3 | مساحة مقطعه العرضي
- [x] option-4 | نوع مادته
explanation:
الإجابة: نوع مادته، عند تثبيت درجة الحرارة.

المقاومية \\(\\rho\\) تصف مادة الموصل بعد توحيد أبعاده القياسية. أما مقاومة السلك \\(R\\) فتتأثر أيضاً بطوله ومساحة مقطعه، ولذلك لا نخلط بين الخاصية المادية وبين مقاومة سلك معين.

يعرف الكتاب المقاومية بأنها:

> مقاومة موصل منتظم المقطع، طوله متر واحد، ومساحة مقطعه العرضي \\(1\\,\\mathrm{m^{2}}\\)

هذا شاهد لتعريف الخاصية الذي نستعمله لتمييزها عن أثر أبعاد السلك، وليس اقتباساً حرفياً لعبارة «نوع مادته».

**المصدر:** صفحة \\(24\\) من الكتاب.




hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p028-review-1-2
title: أسئلة الفصل — س1/2 — الكتاب، صفحة PDF 28
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س1/2
question: ما عدد الإلكترونات التي تعبر مقطع موصل يمر به تيار شدته \\(2\\,\\mathrm{A}\\) خلال ثانيتين؟
- [x] option-1 | \\(2.5\\times10^{19}\\)
- [ ] option-2 | \\(25\\times10^{19}\\)
- [ ] option-3 | \\(6.25\\times10^{18}\\)
- [ ] option-4 | \\(1.25\\times10^{18}\\)
explanation:
شدة التيار هي مقدار الشحنة التي تعبر مقطع الموصل في وحدة الزمن. لذلك نضرب التيار في الزمن لإيجاد الشحنة، مع قياس الزمن بالثانية والشحنة بالكولوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`



لإيجاد عدد الإلكترونات نقسم مقدار الشحنة الكلية على مقدار شحنة إلكترون واحد؛ فعدد الإلكترونات موجب حتى عندما تكون شحنتها سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>e</mi><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>Q</mi><mi mathvariant="normal">∣</mi></mrow><mi>e</mi></mfrac></mrow></math>
\`\`\`



نحسب الشحنة التي تعبر المقطع خلال ثانيتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>
\`\`\`



نقسم الشحنة الكلية على مقدار شحنة إلكترون واحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mi>Q</mi><mi>e</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mn>4</mn><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`



القسمة على \\(10^{-19}\\) تكافئ الضرب في \\(10^{19}\\)؛ نقسم المعاملين ثم نكتب قوة العشرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mn>4</mn><mn>1.6</mn></mfrac><mo>×</mo><msup><mn>10</mn><mn>19</mn></msup><mo>=</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>19</mn></msup></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p028-review-1-3
title: أسئلة الفصل — س1/3 — الكتاب، صفحة PDF 28
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س1/3
question: يمثل الشكل جزءًا من دارة كهربائية. إذا كانت شدة التيار المار في المقاومة \\(4\\,\\Omega\\) تساوي \\(1\\,\\mathrm{A}\\)، فما شدة التيار \\(I_2\\) بوحدة \\(\\mathrm{A}\\)؟
- [ ] option-1 | \\(1\\)
- [x] option-2 | \\(2\\)
- [ ] option-3 | \\(3\\)
- [ ] option-4 | \\(4\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/f5ac5418d669cb1d5542.webp)

المقاومتان \\(4\\,\\mathrm{\\Omega}\\) موصولتان بين العقدتين نفسيهما، فتكونان على التوازي ولهما فرق الجهد نفسه. نحسب فرق الجهد من المقاومة التي نعرف تيارها باستخدام قانون أوم \\(V=IR\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



إذن تيار المقاومة الثانية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>4</mn><mi mathvariant="normal">Ω</mi><mo separator="true">,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>4</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



لا تتراكم الشحنة في العقدة في الحالة المستقرة؛ لذلك يساوي التيار الخارج مجموع التيارات الداخلة. التيار \\(I_{2}\\) في الرسم يمر بعد اجتماع فرعي \\(4\\,\\mathrm{\\Omega}\\)، فيساوي مجموع تياريهما، ولا يشمل تيار فرع \\(2\\,\\mathrm{\\Omega}\\) السفلي الذي يلتقي به لاحقاً عند \\(B\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`




hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/3.](assets/lessons/curriculum-evidence/f5ac5418d669cb1d5542.webp)
:::

:::mcq
id: physics-book-2024-p028-review-1-5
title: أسئلة الفصل — س1/5 — الكتاب، صفحة PDF 28
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س1/5
question: سلك فلزي مقاوميته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ρ</mi></mrow></math>\`، أعيد تشكيله إلى مثلي طوله الأصلي، فإن مقاوميته بعد التشكيل وبفرض ثبوت درجة حرارته تساوي:
- [ ] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>ρ</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ρ</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mi>ρ</mi></mrow></math>\`
explanation:
المطلوب هو المقاومية \\(\\rho\\)، لا مقاومة السلك \\(R\\). المقاومية خاصية للمادة عند درجة حرارة محددة؛ ولأن المادة ودرجة الحرارة لم تتغيرا، لا تتغير المقاومية بتغيير شكل السلك وطوله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ρ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>1</mn></msub><mo>=</mo><mi>ρ</mi></mrow></math>
\`\`\`



الإجابة: \\(\\rho\\)، وهو الخيار الثالث.

مرجع تعريف المقاومية: الصفحة المطبوعة \\(24\\)، صفحة \\(\\mathrm{PDF} 26\\). نص السؤال الأصلي الذي يطلب المقاومية: المطبوعة \\(26\\)، صفحة \\(\\mathrm{PDF} 28\\).

تعريف المقاومية

السؤال في الكتاب
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p028-review-1-6
title: أسئلة الفصل — س1/6 — الكتاب، صفحة PDF 28
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س1/6
question: في الشكل المجاور، ما المقاومة المكافئة بين \\(A\\) و\\(B\\) بوحدة \\(\\Omega\\)؟
- [x] option-1 | \\(5\\)
- [ ] option-2 | \\(6\\)
- [ ] option-3 | \\(2\\)
- [ ] option-4 | \\(3\\)
explanation:
![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p028-review-1-6-figure-01.webp)

نعد الأسلاك المثالية نقاطًا متساوية الجهد. بتتبع السلكين العلويين نرى أن طرفي كل من \\(6\\,\\mathrm{\\Omega}\\) و\\(12\\,\\mathrm{\\Omega}\\) يعودان إلى العقدة نفسها؛ أي إنهما موصولتان بقصر كهربائي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>6</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>12</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



وفق قانون أوم \\(I=V/R\\) لا يمر فيهما تيار، فلا تؤثران في المقاومة المكافئة. يبقى التيار نفسه يمر في \\(3\\,\\mathrm{\\Omega}\\) ثم \\(2\\,\\mathrm{\\Omega}\\) دون تفرع مؤثر؛ فهما على التوالي، ونجمع مقاومتيهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`




hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/6.](assets/lessons/physics/source-crops/physics-book-2024-p028-review-1-6-figure-01.webp)
:::

:::mcq
id: physics-tawjihi-2025-p042-q255
title: أسئلة الفصل — س1/4 — الكتاب، صفحة PDF 28
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س1/4
question: عند زيادة فرق الجهد بين طرفي سلك فلزي (مقاومة أومية)، فإن:
- [ ] option-1 | شدة التيار الكهربائي المار فيه تقل
- [ ] option-2 | مقاومة مادة السلك تزداد
- [x] option-3 | مقاومة السلك تبقى ثابتة
- [ ] option-4 | شدة المجال الكهربائي فيه تبقى ثابتة
explanation:
المقاومة الأومية هي التي يتناسب فيها التيار طردياً مع فرق الجهد عند ثبوت درجة الحرارة. لذلك نستخدم قانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`



المقاومة هي نسبة الجهد إلى التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>V</mi><mi>I</mi></mfrac></mrow></math>
\`\`\`



عند زيادة الجهد يزداد التيار بالنسبة نفسها، فتبقى هذه النسبة ثابتة. الإجابة: **مقاومة السلك تبقى ثابتة، الخيار الثالث**.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p043-q268
title: أسئلة الفصل — س2 — فرع 1 — الكتاب، صفحة PDF 28
question: أسئلة الفصل — س\\(2\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س2 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بالمصطلحات الآتية:

السرعة الانسياقية.

solution:
الإجابة: السرعة الانسياقية: متوسط سرعة الشحنات الحرة التي تشكل التيار الكهربائي في موصل.

الكتاب الرسمي الكامل: السرعة الانسياقية، الصفحة المطبوعة \\(60\\)، صفحة \\(\\mathrm{PDF} 64\\).

> بمتوسط سرعة الشحنات الحرة التي تشكل التيار الكهربائي في موصل.

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=64)


:::

:::exam-question
id: physics-tawjihi-2025-p043-q260
title: أسئلة الفصل — س2 — فرع 2 — الكتاب، صفحة PDF 28
question: أسئلة الفصل — س\\(2\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س2 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بالمصطلحات الآتية:

كثافة التيار.

solution:
الإجابة: كثافة التيار هي شدة التيار الكهربائي لكل وحدة مساحة.

الكتاب الرسمي الكامل: كثافة التيار الكهربائي، الصفحة المطبوعة \\(63\\)، صفحة \\(\\mathrm{PDF} 67\\).

> شدة التيار الكهربائي لكل وحدة مساحة

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=67)


:::

:::exam-question
id: physics-tawjihi-2025-p043-q261
title: أسئلة الفصل — س2 — فرع 3 — الكتاب، صفحة PDF 28
question: أسئلة الفصل — س\\(2\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 28، أسئلة الفصل — س2 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بالمصطلحات الآتية:

الموصلية.

solution:
الإجابة: الموصلية الكهربائية هي النسبة بين كثافة التيار والمجال الكهربائي، وتساوي مقلوب المقاومية: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mi>ρ</mi></mrow></math>\`.

الكتاب الرسمي الكامل: ثابت الموصلية الكهربائية، الصفحة المطبوعة \\(64\\)، صفحة \\(\\mathrm{PDF} 68\\).

> وتدعى النسبة بين كثافة التيار والمجال الكهربائي بثابت الموصلية الكهربائية للفلز، وهي خاصية فيزيائية للفلز تعتمد على نوع مادة الفلز وعلى درجة حرارته

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=68)


:::

:::mcq
id: physics-tawjihi-2025-p036-q211
title: السؤال 211 — ص 35 — السؤال الأصلي 1
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 35، السؤال 1
question: مصباح كهربائي مكتوب عليه \\(100\\,\\mathrm{W},220\\,\\mathrm{V}\\)، ما هي القدرة الكلية المستهلكة عند وصل مصباحين متماثلين من النوع نفسه على التوالي مع مصدر فرق جهده \\(220\\,\\mathrm{V}\\) بوحدة \\(\\mathrm{W}\\)؟
- [ ] option-1 | \\(20\\)
- [x] option-2 | \\(50\\)
- [ ] option-3 | \\(100\\)
- [ ] option-4 | \\(200\\)
explanation:
المصباحان متماثلان، وجهد المصدر \\(220\\,\\mathrm{V}\\). نستخدم نموذج المسألة المدرسي الذي يعامل مقاومة كل مصباح ثابتة.

القدرة هي الطاقة المستهلكة في كل ثانية. وبما أن \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>P</mi><mo>=</mo><mi>V</mi><mi>I</mi></mrow></math>\` وقانون أوم يعطي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi><mo>=</mo><mi>V</mi><mi mathvariant="normal">/</mi><mi>R</mi></mrow></math>\`، فإن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mi>V</mi><mrow><mo fence="true">(</mo><mfrac><mi>V</mi><mi>R</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>R</mi></mfrac></mrow></math>
\`\`\`



بيانات المصباح تعني أنه يستهلك \\(100\\,\\mathrm{W}\\) عندما يكون الجهد عليه \\(220\\,\\mathrm{V}\\). نضرب في المقاومة ثم نقسم على القدرة لإيجادها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>P</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><msup><mn>220</mn><mn>2</mn></msup><mn>100</mn></mfrac><mo>=</mo><mn>484</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



على التوالي يمر التيار نفسه في المصباحين، وتُجمع مقاومتاهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mn>484</mn><mo>+</mo><mn>484</mn><mo>=</mo><mn>968</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نستخدم جهد المصدر ومقاومة المصباحين معاً لحساب القدرة الكلية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mfrac><msup><mn>220</mn><mn>2</mn></msup><mn>968</mn></mfrac><mo>=</mo><mn>50</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



الإجابة:\\(50\\,\\mathrm{W}\\)، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p036-q212
title: السؤال 212 — ص 35 — السؤال الأصلي 2
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 35، السؤال 2
question: في الدارة المجاورة، إذا كانت قراءة الفولتميتر \\(4\\,\\mathrm{V}\\)، فكم تكون شدة التيار الكهربائي المار خلال المقاومة \\(6\\,\\Omega\\) بوحدة الأمبير؟
- [x] option-1 | \\(0.8\\)
- [ ] option-2 | \\(1\\)
- [ ] option-3 | \\(1.2\\)
- [ ] option-4 | \\(2\\)
explanation:
المطلوب تيار مقاومة \\(6\\,\\mathrm{\\Omega}\\)، والفولتميتر يقيس \\(4\\,\\mathrm{V}\\) على مقاومة \\(2\\,\\mathrm{\\Omega}\\). قانون أوم يربط جهد المقاومة بتيارها ومقاومتها:

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ac0b649aa9eaf0cd4ca9.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



الفولتميتر المثالي لا يسحب تياراً، لذلك تيار مقاومة \\(2\\,\\mathrm{\\Omega}\\) هو التيار الكلي الذي ينقسم بين فرعي \\(6\\,\\mathrm{\\Omega}\\) و\\(4\\,\\mathrm{\\Omega}\\). نحسبه من جهد \\(2\\,\\mathrm{\\Omega}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نختزل مقاومتي التوازي لنجد فرق الجهد المشترك بينهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>6</mn><mo>×</mo><mn>4</mn></mrow><mrow><mn>6</mn><mo>+</mo><mn>4</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>24</mn><mn>10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>2.4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>2.4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>4.8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نقسم جهد الفرع على مقاومته لإيجاد التيار المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>6</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mfrac><mn>4.8</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>6</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0.8</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة تحتوي مقاومات 2 Ω و6 Ω و4 Ω وفولتميتر ومصدر جهد.](assets/lessons/curriculum-evidence/ac0b649aa9eaf0cd4ca9.webp)
:::

:::mcq
id: physics-tawjihi-2025-p036-q213
title: السؤال 213 — ص 35 — السؤال الأصلي 3
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 35، السؤال 3
question: فلز يمر به تيار كثافته \\(4\\times10^6\\,\\mathrm{A/m^2}\\)، عندما أثر فيه مجال كهربائي شدته \\(0.2\\,\\mathrm{V/m}\\)، فكم تساوي مقاومية الفلز بوحدة \\(\\Omega\\,\\mathrm{m}\\)؟
- [ ] option-1 | \\(2\\times10^7\\)
- [ ] option-2 | \\(0.5\\times10^{-5}\\)
- [ ] option-3 | \\(0.25\\times10^{-6}\\)
- [x] option-4 | \\(0.5\\times10^{-7}\\)
explanation:
المعطى كثافة التيار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>J</mi><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\` وشدة المجال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>E</mi><mo>=</mo><mn>0.2</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`. المطلوب المقاومية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ρ</mi></mrow></math>\`.

كثافة التيار هي التيار لكل وحدة مساحة مقطع، لذلك \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>J</mi><mo>=</mo><mi>I</mi><mi mathvariant="normal">/</mi><mi>A</mi></mrow></math>\`. وللموصل المنتظم يكون المجال فرق الجهد لكل وحدة طول: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>E</mi><mo>=</mo><mi>V</mi><mi mathvariant="normal">/</mi><mi>L</mi></mrow></math>\`.

نستخدم قانون أوم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>\` ومقاومة الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mi>L</mi><mi mathvariant="normal">/</mi><mi>A</mi></mrow></math>\`، لأنهما يربطان الجهد والتيار بالمادة وأبعاد الموصل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>I</mi><mi>R</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>I</mi><mi>L</mi></mfrac><mrow><mo fence="true">(</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`



نختصر الطول الموجود في البسط والمقام، ثم نعوّض \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi><mi mathvariant="normal">/</mi><mi>A</mi><mo>=</mo><mi>J</mi></mrow></math>\`:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>I</mi><mi>A</mi></mfrac><mo>=</mo><mi>ρ</mi><mi>J</mi></mrow></math>
\`\`\`



نقسم على كثافة التيار غير الصفرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mfrac><mi>E</mi><mi>J</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mfrac><mn>0.2</mn><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></mfrac><mo>=</mo><mn>0.05</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



لنكتبها بصيغة الخيار الرابع، نضرب المعامل في \\(10\\) وننقص الأس واحداً، فتبقى القيمة نفسها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mn>0.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



الإجابة: الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p036-q214
title: السؤال 214 — ص 35 — السؤال الأصلي 4
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 35، السؤال 4
question: من المعادلة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mi>X</mi><mi>L</mi></mrow><mrow><mi>σ</mi><mi>A</mi></mrow></mfrac></mrow></math>\` والتي تمثل صورة أخرى من قانون أوم، حيث \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>L</mi></mrow></math>\` طول الموصل و\`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>A</mi></mrow></math>\` مساحة مقطعه و\`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>σ</mi></mrow></math>\` ثابت الموصلية، فما هي وحدة الكمية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>X</mi></mrow></math>\`؟
- [ ] option-1 | فولت · متر
- [x] option-2 | أمبير
- [ ] option-3 | أوم · متر
- [ ] option-4 | أوم
explanation:
نقارن الصيغة المعطاة بقانون أوم \\(V=IR\\). المقاومية \\(\\rho\\) هي مقلوب الموصلية \\(\\sigma\\)، لذا مقاومة الموصل المنتظم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac><mo>=</mo><mfrac><mi>L</mi><mrow><mi>σ</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`



بالتعويض في قانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mi>I</mi><mi>L</mi></mrow><mrow><mi>σ</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`



بمقارنتها مع \\(V=XL/(\\sigma A)\\)، نجد أن \\(X\\) تمثل شدة التيار \\(I\\)؛ ووحدتها **الأمبير \\(A\\)**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p036-q215
title: السؤال 215 — ص 35 — السؤال الأصلي 5
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 35، السؤال 5
question: ما الكمية الفيزيائية التي تقاس بوحدة \\(\\frac{\\mathrm{A}}{\\mathrm{V\\,m}}\\)؟
- [ ] option-1 | كثافة شدة التيار
- [ ] option-2 | السرعة الانسياقية
- [x] option-3 | ثابت الموصلية
- [ ] option-4 | المقاومية
explanation:
الموصلية \\(\\sigma\\) هي مقلوب المقاومية \\(\\rho\\). ووحدة المقاومية \\(\\,\\mathrm{\\Omega\\,m}\\)، لذلك:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>σ</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></mfrac></mrow></math>
\`\`\`

من قانون أوم، الأوم يساوي فولتًا لكل أمبير. نعوّض هذه الوحدة:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>σ</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow><mo stretchy="false">)</mo><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></mfrac><mo>=</mo><mfrac><mi mathvariant="normal">A</mi><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></mfrac></mrow></math>
\`\`\`

إذن الكمية هي **ثابت الموصلية**.

**شاهد القاعدة أو السياق من الكتاب \\(1\\):**

> مقاومة موصل منتظم المقطع، طوله متر واحد، ومساحة مقطعه العرضي \\(1\\,\\mathrm{m^{2}}\\)



**شاهد القاعدة أو السياق من الكتاب \\(2\\):**

> إن وحدة قياس المقاومة في النظام الدولي هي \\((\\mathrm{V}/\\mathrm{A})\\)، ويطلق عليها اسم أوم، ورمزها \\((\\Omega )\\).

**المصدر:** صفحة \\(24\\) من الكتاب.



hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p036-q216
title: السؤال 216 — ص 35 — السؤال الأصلي 6
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 35، السؤال 6
question: موصل طوله \\(L\\) ثابت موصليته \\(\\sigma\\)، مثلت العلاقة بين فرق الجهد على طرفيه وكثافة شدة التيار المار فيه فكانت كما في الشكل المجاور. ما العلاقة الرياضية التي تمثل ميل الخط المستقيم الناتج؟
- [ ] option-1 | \\(\\frac\\rho L\\)
- [ ] option-2 | \\(\\frac L\\rho\\)
- [ ] option-3 | \\(\\rho L\\)
- [x] option-4 | \\(\\frac1{\\rho L}\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/bee441f4c29c079a5f81.webp)

الرأسي هو كثافة التيار \\(J\\) والأفقي هو الجهد \\(V\\). ميل المستقيم يساوي التغير الرأسي مقسوماً على التغير الأفقي، أي \\(\\Delta J/\\Delta V\\). نربط الكميتين بقانون أوم.

كثافة التيار هي التيار لكل وحدة مساحة مقطع، لذلك \\(J=I/A\\)، ومنها \\(I=JA\\). نعوّض ذلك ومقاومة الموصل \\(R=\\rho L/A\\) في قانون أوم \\(V=IR\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mo stretchy="false">(</mo><mi>J</mi><mi>A</mi><mo stretchy="false">)</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



نختصر مساحة المقطع \\(A\\) الموجودة في البسط والمقام:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>ρ</mi><mi>L</mi><mi>J</mi></mrow></math>
\`\`\`



نقسم على \\(\\rho L\\) لنجعل \\(J\\) بدلالة \\(V\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>ρ</mi><mi>L</mi></mrow></mfrac><mi>V</mi></mrow></math>
\`\`\`



في المعادلة \\(J=mV\\) يمثل معامل \\(V\\) ميل المستقيم؛ لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>J</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>V</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>ρ</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`



وهو الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى كثافة التيار J مقابل فرق الجهد V.](assets/lessons/curriculum-evidence/bee441f4c29c079a5f81.webp)
:::

:::mcq
id: physics-tawjihi-2025-p036-q217
title: السؤال 217 — ص 35 — السؤال الأصلي 7
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 35، السؤال 7 · صياغة تعليمية معدّلة
question: عبرت شحنات موجبة مقدارها \\(3\\) ميكروكولوم مقطع موصل في اتجاه، وعبرت شحنات سالبة مقدارها \\(2\\) ميكروكولوم المقطع نفسه في الاتجاه المعاكس خلال \\(20\\,\\mathrm{s}\\). ما مقدار شدة التيار بالميكروأمبير؟
- [ ] option-1 | \\(4\\)
- [ ] option-2 | \\(0.05\\)
- [ ] option-3 | \\(100\\)
- [x] option-4 | \\(0.25\\)
explanation:
التيار الاصطلاحي يتبع حركة الشحنة الموجبة ويعاكس حركة السالبة. لذلك تسهم الحركتان المتعاكستان هنا في التيار نفسه.

نجمع مقداري الشحنتين، ثم نقسم على الزمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>Q</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>5</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">C</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><msub><mi>Q</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">e</mi></mrow></msub><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>20</mn></mfrac><mo>=</mo><mn>0.25</mn><mtext> </mtext><mi>μ</mi><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



لأن \\(\\,\\mathrm{\\mu C/s}\\) يساوي ميكروأمبير، فالإجابة \\(0.25\\) ميكروأمبير.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p037-q218
title: السؤال 218 — ص 36 — السؤال الأصلي 8
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 8
question: سلك نحاسي طوله \\(L\\) ومساحة مقطعه \\(A\\)، سحب إلى ثلاثة أمثال طوله السابق مع ثبات حجم السلك ودرجة حرارته، ماذا يحدث لمقاومة السلك ومقاوميته؟



- [x] option-1 | تزداد مقاومة السلك وتبقى مقاوميته ثابتة.
- [ ] option-2 | تزداد كل من مقاومة السلك ومقاوميته.
- [ ] option-3 | تقل مقاومة السلك وتزداد مقاوميته.
- [ ] option-4 | تبقى مقاومة السلك ثابتة وتقل مقاوميته.
explanation:
المطلوب مقارنة مقاومة السلك ومقاوميته بعد سحبه إلى ثلاثة أمثال طوله. نستخدم النموذج المدرسي: يبقى حجم السلك ومادته ودرجة حرارته ثابتة.

المقاومية \\(\\rho\\) خاصية للمادة عند درجة حرارة معينة، فتظل ثابتة. أما المقاومة \\(R\\) فتعتمد أيضاً على طول السلك ومساحة مقطعه:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



بما أن حجم السلك يساوي مساحة مقطعه مضروبة في طوله، فإن ثبات الحجم يعطي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><msub><mi>L</mi><mn>2</mn></msub><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mn>3</mn><msub><mi>L</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`



نقسم على الطول غير الصفري \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><msub><mi>L</mi><mn>1</mn></msub></mrow></math>\`:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mn>3</mn></mfrac></mrow></math>
\`\`\`



نقسم المقاومة الجديدة على القديمة. تُختصر المقاومية الثابتة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>L</mi><mn>2</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>3</mn><mrow><mo fence="true">(</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant="normal">/</mi><mn>3</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>3</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow></math>
\`\`\`



إذن **تزداد المقاومة، وتبقى المقاومية ثابتة؛ الخيار الأول**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p037-q219
title: السؤال 219 — ص 36 — السؤال الأصلي 9
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 9
question: ما مقدار المقاومة المكافئة في الشكل المجاور؟
- [ ] option-1 | \\(2.7\\)
- [ ] option-2 | \\(6.3\\)
- [ ] option-3 | \\(1.38\\)
- [x] option-4 | \\(5\\)
explanation:
تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/198e8ba62abd75f44314.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



مقاومتا الثلاثة والستة أوم بين العقدتين نفسيهما؛ نختزلهما أولًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mo>×</mo><mn>6</mn></mrow><mrow><mn>3</mn><mo>+</mo><mn>6</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>18</mn><mn>9</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



هذه المكافئة على التوالي مع الثمانية أوم، ثم يوازي مجموعهما مقاومة العشرة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب مقاومة الفرعين المتوازيين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>10</mn><mo>×</mo><mn>10</mn></mrow><mrow><mn>10</mn><mo>+</mo><mn>10</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mfrac><mn>100</mn><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بمقاومات 10 Ω و3 Ω و8 Ω و6 Ω.](assets/lessons/curriculum-evidence/198e8ba62abd75f44314.webp)
:::

:::mcq
id: physics-tawjihi-2025-p037-q220
title: السؤال 220 — ص 36 — السؤال الأصلي 10
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 10
question: ما الكمية الفيزيائية التي تقاس بوحدة \\(\\mathrm{V\\,m/A}\\)؟
- [ ] option-1 | كثافة التيار
- [ ] option-2 | السرعة الانسياقية
- [ ] option-3 | ثابت الموصلية
- [x] option-4 | المقاومية
explanation:
نستخرج وحدة المقاومية من علاقة مقاومة الموصل بأبعاده؛ لأن هذه العلاقة تحتوي الكمية المطلوبة ومقادير نعرف وحداتها:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`

نضرب الطرفين في مساحة المقطع \\(A\\)، ثم نقسم على الطول \\(L\\) لعزل المقاومية.

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>R</mi><mi>A</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`

لأن الأوم يساوي فولتًا لكل أمبير، نحصل على الوحدة المذكورة.

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>ρ</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Ω</mi><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow><mi mathvariant="normal">m</mi></mfrac></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>ρ</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><mi mathvariant="normal">A</mi></mfrac></mrow></math>
\`\`\`

**شاهد القاعدة أو السياق من الكتاب \\(1\\):**

> مقاومة موصل منتظم المقطع، طوله متر واحد، ومساحة مقطعه العرضي \\(1\\,\\mathrm{m^{2}}\\)



**شاهد القاعدة أو السياق من الكتاب \\(2\\):**

> إن وحدة قياس المقاومة في النظام الدولي هي \\((\\mathrm{V}/\\mathrm{A})\\)، ويطلق عليها اسم أوم، ورمزها \\((\\Omega )\\).

**المصدر:** صفحة \\(24\\) من الكتاب.



hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p037-q221
title: السؤال 221 — ص 36 — السؤال الأصلي 11
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 11
question: إذا وصلت \\(5\\) مقاومات مقدار كل منها \\(1\\) أوم على التوازي إلى فرق جهد مقداره \\(5\\) فولت، فما شدة التيار الكهربائي المار في كل مقاومة بوحدة الأمبير؟
- [ ] option-1 | \\(0.25\\)
- [ ] option-2 | \\(1\\)
- [x] option-3 | \\(5\\)
- [ ] option-4 | \\(2\\)
explanation:
المطلوب تيار كل مقاومة، وقيمتها \\(1\\,\\mathrm{\\Omega}\\). نستخدم قانون أوم الذي يربط جهد المقاومة بتيارها ومقاومتها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل مقاومة بقطبي المصدر نفسيهما؛ لذلك يكون فرق الجهد على كل منها \\(5\\,\\mathrm{V}\\). لا نقسم هذا الجهد على عدد المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نحسب تيار المقاومة الواحدة من جهدها ومقاومتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><mfrac><mn>5</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p037-q222
title: السؤال 222 — ص 36 — السؤال الأصلي 12
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 12
question: سلك فلزي مقاومته \\(R\\) وطوله \\(L\\)، إذا تم سحب السلك إلى ثلاثة أضعاف طوله الأصلي مع بقاء حجمه ودرجة حرارته ثابتين، فما مقدار مقاومته بعد السحب؟

- [ ] option-1 | \\(3R\\)
- [x] option-2 | \\(9R\\)
- [ ] option-3 | \\(\\frac R3\\)
- [ ] option-4 | \\(\\frac R9\\)
explanation:
المطلوب المقاومة بعد السحب إلى ثلاثة أمثال الطول، مع ثبات الحجم. نرمز لمساحة المقطع بـ \\(A\\) وللمقاومية النوعية للمادة بـ \\(\\rho\\). نستخدم \\(R=\\rho L/A\\) لأن المقاومة تتناسب مع الطول وعكسياً مع مساحة المقطع؛ وبحسب المعطيات تبقى المادة ودرجة حرارتها ثابتتين، فتثبت \\(\\rho\\).

الحجم \\(AL\\) ثابت، إذن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><msub><mi>L</mi><mn>2</mn></msub><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mn>3</mn><msub><mi>L</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mn>3</mn></mfrac></mrow></math>
\`\`\`



نقسم صيغة المقاومة الجديدة على القديمة، فتُختصر المقاومية الثابتة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>L</mi><mn>2</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>3</mn><mrow><mo fence="true">(</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant="normal">/</mi><mn>3</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>=</mo><mn>9</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>9</mn><mi>R</mi></mrow></math>
\`\`\`

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p037-q223
title: السؤال 223 — ص 36 — السؤال الأصلي 13
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 13
question: سلك فلزي مقاومته \\(R\\) ومساحة مقطعه العرضي \\(A\\) وسرعته الانسياقية \\(v_d\\) موصول بين نقطتين فرق الجهد بينهما \\(V\\)، إذا أعيد تشكيل السلك نفسه مع ثبات حجمه ودرجة حرارته ليصبح طوله نصف طوله الأصلي، ثم أعيد توصيله بفرق الجهد نفسه، فكم تصبح السرعة الانسياقية للإلكترونات الحرة فيه في هذه الحالة؟



- [ ] option-1 | \\(v_d\\)
- [ ] option-2 | \\(\\frac{v_d}2\\)
- [ ] option-3 | \\(\\frac{v_d}{4}\\)
- [x] option-4 | \\(2v_d\\)
explanation:
المطلوب السرعة الانسياقية بعد تقليل الطول إلى النصف مع إعادة توصيله بفرق الجهد نفسه. بحسب المعطيات يبقى حجم السلك ودرجة حرارته ومادته ثابتة. حجم السلك يساوي \\(AL\\). نقسم معادلة ثبات الحجم على الطول الجديد \\(L_{1}/2\\) لنجد مساحة المقطع الجديدة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo stretchy="false">(</mo><msub><mi>L</mi><mn>1</mn></msub><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>L</mi><mn>1</mn></msub><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub></mrow></math>
\`\`\`



من \\(R=\\rho L/A\\)، تقل المقاومة إلى الربع:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`



قانون أوم \\(I=V/R\\) يعطي تيارًا أربعة أمثال القديم عند ثبات \\(V\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`



السرعة الانسياقية هي متوسط الحركة الموجهة للإلكترونات. إذا كان عدد الإلكترونات الحرة في وحدة الحجم \\(n\\)، فإن الشحنة العابرة خلال زمن \\(\\Delta t\\) تساوي \\(neAv_{d}\\Delta t\\)؛ لأن الشحنات تقطع مسافة \\(v_{d}\\Delta t\\) فيعبر حجم \\(Av_{d}\\Delta t\\). بقسمة الشحنة على الزمن نحصل على \\(I=neAv_{d}\\). تبقى \\(n\\) و\\(e\\) ثابتتين، لذا:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>v</mi><mrow><mi>d</mi><mn>2</mn></mrow></msub><msub><mi>v</mi><mrow><mi>d</mi><mn>1</mn></mrow></msub></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>2</mn></msub><msub><mi>I</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><mn>4</mn><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>d</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p037-q224
title: السؤال 224 — ص 36 — السؤال الأصلي 14
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 14
question: ينعدم التيار الكهربي بين النقطتين \\(d,b\\) عند فتح المفتاح بسبب انعدام:
- [ ] option-1 | القوة الدافعة الكهربية
- [ ] option-2 | مقاومة الأسلاك
- [x] option-3 | المجال الكهربي بين النقطتين
- [ ] option-4 | المقاومة الداخلية للبطارية
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/dc10fb121464dce91169.webp)

فتح المفتاح يقطع مسار الدارة، فيتوقف التيار المستمر بعد استقرار الشحنات. في الجزء المتصل من الموصل بين \\(d\\) و\\(b\\) تعيد الشحنات توزيع نفسها حتى ينعدم المجال الذي يدفعها حركة موجهة؛ لذلك تكون قراءة التيار صفرًا.

إذن الإجابة هي **انعدام المجال الكهربائي بين النقطتين**. تبقى القوة الدافعة للبطارية موجودة، ويظهر فرق الجهد عند المفتاح المفتوح.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بمصدر ε ومقاومة R ومفتاح ونقطتين d وb.](assets/lessons/curriculum-evidence/dc10fb121464dce91169.webp)
:::

:::mcq
id: physics-tawjihi-2025-p037-q225
title: السؤال 225 — ص 36 — السؤال الأصلي 15
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 36، السؤال 15
question: في الشكل المجاور، لماذا تنعدم قراءة الأميتر \\(A\\) بين \\(a,b\\) عند فتح المفتاح \\(S\\)؟
- [x] option-1 | بسبب انعدام المجال الكهربائي بينهما
- [ ] option-2 | المقاومة الخارجية تساوي صفر
- [ ] option-3 | لأن مقاومة الأسلاك مهملة
- [ ] option-4 | لأن القوة الدافعة الكهربائية = صفر
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/33737d069d96980b9f22.webp)

فتح المفتاح يقطع مسار الدارة، فيتوقف التيار المستمر بعد استقرار الشحنات. في الجزء المتصل من الموصل بين \\(a\\) و\\(b\\) تعيد الشحنات توزيع نفسها حتى ينعدم المجال الذي يدفعها حركة موجهة؛ لذلك تكون قراءة التيار صفرًا.

إذن الإجابة هي **انعدام المجال الكهربائي بين النقطتين**. تبقى القوة الدافعة للبطارية موجودة، ويظهر فرق الجهد عند المفتاح المفتوح.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بمفتاح S ومقياس تيار A بين النقطتين a وb.](assets/lessons/curriculum-evidence/33737d069d96980b9f22.webp)
:::

:::mcq
id: physics-tawjihi-2025-p038-q226
title: السؤال 226 — ص 37 — السؤال الأصلي 16
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 37، السؤال 16
question: في الشكل المجاور يمر تيار كهربي في موصل مساحة مقطعه غير منتظمة. إذا تضاعف قطر الموصل أربع مرات فأي العبارات الآتية تعتبر صحيحة؟
- [ ] option-1 | شدة التيار تقل إلى \\(\\frac1{16}\\) قيمتها الأصلية.
- [ ] option-2 | شدة التيار تتضاعف أربع مرات.
- [x] option-3 | كثافة التيار الكهربي تقل إلى \\(\\frac1{16}\\) قيمتها الأصلية.
- [ ] option-4 | كثافة التيار الكهربي تتضاعف \\(16\\) مرة.
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/3e81420caa2bd69180cb.webp)

في التيار المستقر لا تتراكم الشحنة داخل الموصل، لذلك يمر التيار نفسه في المقطعين. أما كثافة التيار فتعني شدة التيار لكل وحدة مساحة، \\(J=I/A\\).

مساحة المقطع الدائري \\(A=\\pi d^{2}/4\\)، فتتناسب مع مربع القطر. عند زيادة القطر إلى أربعة أمثاله:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>A</mi><mn>2</mn></msub><msub><mi>A</mi><mn>1</mn></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><msub><mi>d</mi><mn>2</mn></msub><msub><mi>d</mi><mn>1</mn></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>4</mn><mn>2</mn></msup><mo>=</mo><mn>16</mn></mrow></math>
\`\`\`



نقسم الكثافتين، فيُختصر التيار الثابت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>J</mi><mn>2</mn></msub><msub><mi>J</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mi>I</mi><mi mathvariant="normal">/</mi><msub><mi>A</mi><mn>2</mn></msub></mrow><mrow><mi>I</mi><mi mathvariant="normal">/</mi><msub><mi>A</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>16</mn></mfrac></mrow></math>
\`\`\`



إذن **تقل كثافة التيار إلى \\(1/16\\) قيمتها**، الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![موصل متغير المقطع مع البعدين R و4R واتجاه التيار I.](assets/lessons/curriculum-evidence/3e81420caa2bd69180cb.webp)
:::

:::mcq
id: physics-tawjihi-2025-p038-q228
title: السؤال 228 — ص 37 — السؤال الأصلي 18
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 37، السؤال 18
question: تنسب وحدة \\(\\mathrm{A/(V\\,m)}\\) للكمية:
- [ ] option-1 | كثافة شدة التيار
- [ ] option-2 | المقاومية
- [x] option-3 | ثابت الموصلية
- [ ] option-4 | المقاومة
explanation:
**ثابت الموصلية \\(\\sigma\\)**. فهو مقلوب المقاومية، والمقاومية وحدتها \\(\\Omega \\cdot \\mathrm{m}\\).

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>σ</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></mfrac></mrow></math>
\`\`\`

وبما أن \\(\\Omega =\\mathrm{V}/\\mathrm{A}\\)، نحصل على:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><mi>σ</mi><mo stretchy="false">]</mo><mo>=</mo><mfrac><mi mathvariant="normal">A</mi><mrow><mi mathvariant="normal">V</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></mfrac></mrow></math>
\`\`\`

**شاهد القاعدة أو السياق من الكتاب \\(1\\):**

> مقاومة موصل منتظم المقطع، طوله متر واحد، ومساحة مقطعه العرضي \\(1\\,\\mathrm{m^{2}}\\)



**شاهد القاعدة أو السياق من الكتاب \\(2\\):**

> إن وحدة قياس المقاومة في النظام الدولي هي \\((\\mathrm{V}/\\mathrm{A})\\)، ويطلق عليها اسم أوم، ورمزها \\((\\Omega )\\).

**المصدر:** صفحة \\(24\\) من الكتاب.



hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p038-q229
title: السؤال 229 — ص 37 — السؤال الأصلي 19
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 37، السؤال 19
question: إذا كانت الكثافة الحجمية للإلكترونات الحرة في سلك \\(8.5\\times10^{28}\\,\\mathrm{e/m^3}\\) والسرعة الانسياقية للإلكترونات الحرة فيه \\(2.3\\times10^{-5}\\,\\mathrm{m/s}\\)، ما كثافة شدة التيار الكهربائي المار في هذا السلك بوحدة \\(\\mathrm{A/m^2}\\)؟
- [ ] option-1 | \\(9.3\\times10^4\\)
- [ ] option-2 | \\(9.8\\times10^2\\)
- [ ] option-3 | \\(3.9\\times10^7\\)
- [x] option-4 | \\(3.12\\times10^5\\)
explanation:
المعطيات: \\(n=8.5\\times 10^{28}\\,\\mathrm{electron/m^{3}}\\)، و\\(v_{d}=2.3\\times 10^{-5}\\,\\mathrm{m/s}\\). المطلوب مقدار كثافة التيار.

خلال زمن \\(\\Delta t\\) تقطع الإلكترونات مسافة \\(v_{d}\\Delta t\\)، فيعبر المقطع \\(A\\) عدد \\(nAv_{d}\\Delta t\\) من الإلكترونات. نضرب في مقدار شحنة الإلكترون \\(e\\) لنجد الشحنة، ثم نقسم على الزمن والمساحة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac><mo>=</mo><mi>n</mi><mi>e</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



نعوّض بمقدار شحنة الإلكترون \\(e=1.6\\times 10^{-19}\\,\\mathrm{C}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mo stretchy="false">(</mo><mn>8.5</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mo stretchy="false">(</mo><mn>8.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.3</mn><mo stretchy="false">)</mo><mo>×</mo><msup><mn>10</mn><mrow><mn>28</mn><mo>−</mo><mn>19</mn><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mn>31.28</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mo>=</mo><mn>3.128</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`



الخيار الرابع \\(3.12\\times 10^{5}\\) هو الأقرب، مع ملاحظة أن التقريب إلى ثلاث خانات معنوية يعطي \\(3.13\\times 10^{5}\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p038-q230
title: السؤال 230 — ص 37 — السؤال الأصلي 20
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 37، السؤال 20
question: الشكل المجاور يبين موصل مساحة مقطعه غير منتظمة، يسري فيه تيار كهربي بالاتجاه المبين، اعتمادًا على الشكل، أي العبارات الآتية تعتبر صحيحة؟
- [x] option-1 | السرعة الانسياقية أكبر ما يمكن عند النقطة \\(B\\).
- [ ] option-2 | شدة المجال الكهربي أكبر ما يمكن عند النقطة \\(A\\).
- [ ] option-3 | شدة التيار الكهربي أقل ما يمكن عند النقطة \\(C\\).
- [ ] option-4 | شدة التيار الكهربي لوحدة المساحة أقل ما يمكن عند النقطة \\(A\\).
explanation:
كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b0d968d1c151e67b03e2.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



في التيار المستقر لا تتراكم الشحنة داخل الموصل، فيعبر التيار نفسه جميع المقاطع. يظهر في الرسم أن المقطع \\(B\\) هو الأضيق، ثم \\(A\\)، ثم \\(C\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mi>B</mi></msub><mo>&lt;</mo><msub><mi>A</mi><mi>A</mi></msub><mo>&lt;</mo><msub><mi>A</mi><mi>C</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><msub><mi>I</mi><mi>B</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><msub><mi>I</mi><mi>C</mi></msub></mrow></math>
\`\`\`



من \\(I=neAv_{d}\\)، نقسم على \\(neA\\) لنجد السرعة الانسياقية. في المادة نفسها \\(n\\) ثابتة؛ ومع ثبات التيار تكون السرعة عكسية مع المساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>I</mi><mrow><mi>n</mi><mi>e</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>d</mi><mi>B</mi></mrow></msub><mo>&gt;</mo><msub><mi>v</mi><mrow><mi>d</mi><mi>A</mi></mrow></msub><mo>&gt;</mo><msub><mi>v</mi><mrow><mi>d</mi><mi>C</mi></mrow></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![موصل غير منتظم المقطع وثلاثة مواضع A وB وC.](assets/lessons/curriculum-evidence/b0d968d1c151e67b03e2.webp)
:::

:::mcq
id: physics-tawjihi-2025-p038-q231
title: السؤال 231 — ص 37 — السؤال الأصلي 21
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 37، السؤال 21
question: النسبة بين كثافة التيار الكهربي الذي يسري في موصل والمجال الكهربي تسمى:
- [ ] option-1 | فرق الجهد بين طرفيه
- [x] option-2 | ثابت الموصلية
- [ ] option-3 | مقاومته الكهربية
- [ ] option-4 | مقاومية
explanation:
الإجابة: ثابت الموصلية الكهربائية، الخيار الثاني. وهو نسبة كثافة التيار إلى المجال الكهربائي، ويساوي مقلوب المقاومية: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mi>ρ</mi></mrow></math>\`.

الكتاب الرسمي الكامل: ثابت الموصلية الكهربائية، الصفحة المطبوعة \\(64\\)، صفحة \\(\\mathrm{PDF} 68\\).

> وتدعى النسبة بين كثافة التيار والمجال الكهربائي بثابت الموصلية الكهربائية للفلز، وهي خاصية فيزيائية للفلز تعتمد على نوع مادة الفلز وعلى درجة حرارته

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=68)


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p038-q232
title: السؤال 232 — ص 37 — السؤال الأصلي 22
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 37، السؤال 22
question: إذا مر تيار كهربي شدته \\(0.32\\,\\mathrm{A}\\) في موصل فلزي فما مقدار الشحنة الكهربية التي تخترق مقطعه خلال \\(1\\,\\mathrm{s}\\) بوحدة الكولوم؟
- [x] option-1 | \\(0.32\\)
- [ ] option-2 | \\(3.125\\)
- [ ] option-3 | \\(2\\times10^{18}\\)
- [ ] option-4 | \\(2\\times10^{-18}\\)
explanation:
المعطى تيار شدته \\(0.32\\,\\mathrm{A}\\) وزمن مقداره \\(1\\,\\mathrm{s}\\). المطلوب الشحنة العابرة.

شدة التيار هي الشحنة التي تعبر مقطع الموصل في وحدة الزمن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



نضرب الطرفين في الزمن لإيجاد الشحنة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mn>0.32</mn><mo>×</mo><mn>1</mn><mo>=</mo><mn>0.32</mn><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>
\`\`\`



إذن الشحنة \\(0.32\\,\\mathrm{C}\\)، الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p039-q233
title: السؤال 233 — ص 38 — السؤال الأصلي 23
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 23
question: ما مقدار المقاومة المكافئة بين النقطتين \\(A,B\\) بوحدة الأوم؟
- [ ] option-1 | \\(2\\)
- [ ] option-2 | \\(3\\)
- [x] option-3 | \\(5\\)
- [ ] option-4 | \\(9\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/1b04d07a36ca82b18883.webp)

نبدأ بتتبع الأسلاك، لأن سلكاً مثالياً قد يصل طرفي مقاومة مباشرة. عندئذ يكون الطرفان عند الجهد نفسه، فتكون المقاومة مقصورة ولا تؤثر في المكافئة.

في الرسم تصل الأسلاك طرفي \\(6\\,\\mathrm{\\Omega}\\)، وكذلك طرفي \\(12\\,\\mathrm{\\Omega}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>6</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>12</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



من قانون أوم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi><mo>=</mo><mi>V</mi><mi mathvariant="normal">/</mi><mi>R</mi></mrow></math>\`، لا يمر تيار في أي من هاتين المقاومتين.

يبقى مسار من \\(A\\) إلى \\(B\\) يمر في \\(2\\,\\mathrm{\\Omega}\\) ثم \\(3\\,\\mathrm{\\Omega}\\) دون تفرع. إذن هما على التوالي، وتُجمع مقاومتاهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



الإجابة:\\(5\\,\\mathrm{\\Omega}\\)، الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![شبكة مقاومات 3 Ω و6 Ω و12 Ω و2 Ω بين الطرفين a وb.](assets/lessons/curriculum-evidence/1b04d07a36ca82b18883.webp)
:::

:::mcq
id: physics-tawjihi-2025-p039-q234
title: السؤال 234 — ص 38 — السؤال الأصلي 24
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 24
question: إذا علمت أن المقاومة المكافئة لمجموعة المقاومات في الشكل المجاور تساوي \\(3\\,\\Omega\\)، فما قيمة \\(R\\) بوحدة الأوم؟
- [ ] option-1 | \\(1\\)
- [ ] option-2 | \\(2\\)
- [x] option-3 | \\(3\\)
- [ ] option-4 | \\(4\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/c31af7743a5240f6334b.webp)

تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



كل زوج متساوٍ موصول على التوازي، فتساوي مكافئته نصف مقاومة واحدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mi>R</mi><mo>×</mo><mi>R</mi></mrow><mrow><mi>R</mi><mo>+</mo><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><msup><mi>R</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



الزوجان متصلان على التوالي، فنساوي مجموعهما بالمكافئة المعطاة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`




hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مجموعتان على التوالي، في كل منهما مقاومتان R على التوازي.](assets/lessons/curriculum-evidence/c31af7743a5240f6334b.webp)
:::

:::mcq
id: physics-tawjihi-2025-p039-q235
title: السؤال 235 — ص 38 — السؤال الأصلي 25
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 25
question: في الشكل المجاور إذا كانت \\(R_1>R_2\\) فإن:
- [ ] option-1 | \\(I_2<I_1\\)
- [x] option-2 | \\(I_2>I_1\\)
- [ ] option-3 | \\(I_1=I_2\\)
- [ ] option-4 | \\(V_2<V_1\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/cf5e2a9c6fef49aacec4.webp)

طرفا المقاومتين موصولان بالعقدتين نفسيهما، فهما على التوازي ولهما فرق الجهد نفسه \\(V\\). قانون أوم يعطي التيار بقسمة الجهد على المقاومة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>V</mi><msub><mi>R</mi><mn>1</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>V</mi><msub><mi>R</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`



عند الجهد نفسه، تمر شدة تيار أكبر في المقاومة الأصغر. بما أن \\(R_{1}>R_{2}\\)، فإن **\\(I_{2}>I_{1}\\)**، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مقاومتان R₁ وR₂ موصولتان بين a وb وتياراهما I₁ وI₂.](assets/lessons/curriculum-evidence/cf5e2a9c6fef49aacec4.webp)
:::

:::mcq
id: physics-tawjihi-2025-p039-q236
title: السؤال 236 — ص 38 — السؤال الأصلي 26
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 26
question: وصل طالب ثلاث مقاومات متماثلة كما في الشكل المجاور، إذا كان فرق الجهد بين قطبي البطارية \\(36\\,\\mathrm{V}\\)، فما قراءة كل من الفولتميتر \\(V_1\\) والفولتميتر \\(V_2\\)؟
- [x] option-1 | \\(V_1=24\\,\\mathrm{V},\\,V_2=12\\,\\mathrm{V}\\)
- [ ] option-2 | \\(V_1=18\\,\\mathrm{V},\\,V_2=18\\,\\mathrm{V}\\)
- [ ] option-3 | \\(V_1=12\\,\\mathrm{V},\\,V_2=24\\,\\mathrm{V}\\)
- [ ] option-4 | \\(V_1=27\\,\\mathrm{V},\\,V_2=9\\,\\mathrm{V}\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/fa49c73969484e9e135e.webp)

في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



المقاومتان على اليمين متوازيتان ومتماثلتان؛ لنسمّ قيمة كل مقاومة \\(R\\). نطبق حاصل الضرب على المجموع لإيجاد مكافئتهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mi>R</mi><mo>×</mo><mi>R</mi></mrow><mrow><mi>R</mi><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`



نهمل تيار الفولتميتر المثالي. التيار الكلي يمر في المقاومة المنفردة ثم يتفرع بين المقاومتين؛ وبقانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>36</mn><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mn>36</mn><mrow><mn>3</mn><mi>R</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac></mrow></math>
\`\`\`



قراءة \\(V_{1}\\) هي جهد المقاومة المنفردة، فنضرب التيار الكلي في \\(R\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>36</mn><mo>×</mo><mi>R</mi><mo>×</mo><mfrac><mn>2</mn><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(R\\) المشتركة، فيبقى:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>36</mn><mo>×</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>24</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



باقي جهد المصدر يقع على الجزء المتوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>36</mn><mo>−</mo><mn>24</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ثلاث مقاومات R وفولتميتران V₁ وV₂ ومصدر 36 V.](assets/lessons/curriculum-evidence/fa49c73969484e9e135e.webp)
:::

:::mcq
id: physics-tawjihi-2025-p039-q237
title: السؤال 237 — ص 38 — السؤال الأصلي 27
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 27
question: ما مقدار المقاومة المكافئة بين نقطتين \\(A,B\\) بوحدة الأوم؟
- [ ] option-1 | \\(6\\)
- [ ] option-2 | \\(5\\)
- [ ] option-3 | \\(3\\)
- [x] option-4 | \\(2\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/f3be2cc2c48e1baf3d23.webp)

نتتبع السلك الخارجي: النقطة \\(A\\) متصلة مباشرة بالطرف الأيسر لـ \\(6\\,\\mathrm{\\Omega}\\)، والطرف العلوي لـ \\(3\\,\\mathrm{\\Omega}\\)، والطرف السفلي لـ \\(2\\,\\mathrm{\\Omega}\\) العمودية. أما أطرافها الأخرى فتلتقي في عقدة وسطية لا تتصل بأي مصدر أو طرف خارجي آخر.

إذن هذه المجموعة فرع متدلٍ متصل بالدارة عند عقدة واحدة؛ لا يمر فيها تيار مستمر، وتكون جهود المقاومات الثلاث صفرًا. يمكن حذفها عند حساب المقاومة بين \\(A\\) و\\(B\\).

المسار الوحيد الذي يصل \\(A\\) إلى \\(B\\) يمر في المقاومة الأفقية \\(2\\,\\mathrm{\\Omega}\\)، ولذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`




hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![توصيل مقاومات 3 Ω و6 Ω ومقاومتين 2 Ω بين A وB.](assets/lessons/curriculum-evidence/f3be2cc2c48e1baf3d23.webp)
:::

:::mcq
id: physics-tawjihi-2025-p039-q238
title: السؤال 238 — ص 38 — السؤال الأصلي 28
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 28
question: ما مقدار المقاومة المكافئة لمجموعة المقاومات الموصولة بين النقطتين \\(a,b\\) في الشكل المجاور، بوحدة الأوم؟
- [ ] option-1 | \\(3\\)
- [x] option-2 | \\(4\\)
- [ ] option-3 | \\(7\\)
- [ ] option-4 | \\(17\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/f11a466a5e28e5c9c281.webp)

تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



الطرف \\(b\\) هو العقدة السفلية. تنتهي مقاومة \\(3\\,\\mathrm{\\Omega}\\) إلى طرف مفتوح خارج مسار \\(a\\) إلى \\(b\\)؛ لذلك لا يمر فيها تيار.

أما طرفا \\(10\\,\\mathrm{\\Omega}\\) فيوصلهما السلك مباشرة، فيتساوى جهدهما ولا تؤثر هذه المقاومة في المكافئة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>3</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>10</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



المقاومات الست والأربع والاثنتا عشرة أوم بين العقدتين نفسيهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>1</mn></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نضيف المقاومة الواقعة على التوالي عند الطرف الأول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![شبكة مقاومات 2 Ω و6 Ω و12 Ω و4 Ω و10 Ω و3 Ω بين a وb.](assets/lessons/curriculum-evidence/f11a466a5e28e5c9c281.webp)
:::

:::mcq
id: physics-tawjihi-2025-p039-q239
title: السؤال 239 — ص 38 — السؤال الأصلي 29
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 29
question: ما مقدار نصف قطر مقطع سلك طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>L</mi></mrow></math>\` بحيث مقاومته تكافئ مقاومة أربع أسلاك نصف قطر كل منها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>r</mi></mrow></math>\` وطول كل منها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>L</mi></mrow></math>\` موصولة على التوالي ولكنها من نفس النوع؟
- [ ] option-1 | \\(0.25r\\)
- [x] option-2 | \\(0.5r\\)
- [ ] option-3 | \\(2r\\)
- [ ] option-4 | \\(4r\\)
explanation:
المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



مكافئة الأسلاك الأربعة على التوالي تساوي أربعة أمثال مقاومة السلك الواحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mn>4</mn><mfrac><mrow><mi>ρ</mi><mi>L</mi></mrow><mrow><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



مساحة المقطع الدائري \\(\\pi r^{2}\\)؛ نسمي نصف القطر المطلوب رمزًا جديدًا، ونساوي مقاومة السلك الجديد بهذه المكافئة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi>ρ</mi><mi>L</mi></mrow><mrow><mi>π</mi><msubsup><mi>r</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">w</mi></mrow><mn>2</mn></msubsup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>ρ</mi><mi>L</mi></mrow><mrow><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(\\rho L/\\pi\\) المشتركة غير الصفرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msubsup><mi>r</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">w</mi></mrow><mn>2</mn></msubsup></mfrac><mo>=</mo><mfrac><mn>4</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>
\`\`\`



نضرب في مربعي نصفي القطر ثم نقسم على \\(4\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>r</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">w</mi></mrow><mn>2</mn></msubsup><mo>=</mo><mfrac><msup><mi>r</mi><mn>2</mn></msup><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">w</mi></mrow></msub><mo>=</mo><msqrt><mfrac><msup><mi>r</mi><mn>2</mn></msup><mn>4</mn></mfrac></msqrt><mo>=</mo><mfrac><mi>r</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن نصف القطر طول موجب. الإجابة:\\(0.5r\\)، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p039-q240
title: السؤال 240 — ص 38 — السؤال الأصلي 30
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 38، السؤال 30
question: مقاومة فلزية طولها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>L</mi></mrow></math>\` ومقاومية مادتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ρ</mi></mrow></math>\` أعيد تشكيلها بحيث تضاعف طولها مرتين، فكم يصبح مقدار مقاوميتها؟
- [ ] option-1 | \\(\\frac14\\rho\\)
- [ ] option-2 | \\(\\frac12\\rho\\)
- [x] option-3 | \\(\\rho\\)
- [ ] option-4 | \\(2\\rho\\)
explanation:
المطلوب **المقاومية**، وهي خاصية للمادة عند درجة حرارة محددة. تغيير أبعاد السلك لا يغير نوع مادته؛ ومع افتراض ثبات درجة حرارته تبقى المقاومية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ρ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>1</mn></msub><mo>=</mo><mi>ρ</mi></mrow></math>
\`\`\`



إذن الخيار الثالث صحيح. الذي يتغير بتغيير الطول والمساحة هو المقاومة \\(R=\\rho L/A\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p040-q241
title: السؤال 241 — ص 39 — السؤال الأصلي 31
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 39، السؤال 31
question: سلك فلزي مقاومته \\(R\\) ومساحة مقطعه العرضي \\(A\\) وطوله \\(L\\) موصول بين نقطتين فرق الجهد بينهما \\(V\\)، إذا أعيد تشكيله ليصبح طوله \\(2L\\) مع بقاء فرق الجهد بين طرفيه ثابتًا، ماذا يحدث لشدة التيار لوحدة المساحة في هذه الحالة؟  تبقى مادة السلك وحجمه ودرجة حرارته ثابتة أثناء إعادة التشكيل.

- [ ] option-1 | تبقى ثابتة
- [ ] option-2 | تزداد للضعف
- [ ] option-3 | تقل للربع
- [x] option-4 | تقل للنصف
explanation:
المطلوب شدة التيار لكل وحدة مساحة، أي كثافة التيار \\(J=I/A\\). بثبات المادة ودرجة حرارتها تثبت المقاومية \\(\\rho\\). نستخدم قانون أوم ومقاومة الموصل المنتظم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



نعوّض عن \\(R\\) ثم نقسم على المساحة؛ فتُختصر \\(A\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>A</mi></mfrac><mrow><mo fence="true">(</mo><mfrac><mrow><mi>V</mi><mi>A</mi></mrow><mrow><mi>ρ</mi><mi>L</mi></mrow></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mi>V</mi><mrow><mi>ρ</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`



عند مضاعفة الطول مع ثبات \\(V\\) و\\(\\rho\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>J</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>V</mi><mrow><mi>ρ</mi><mo stretchy="false">(</mo><mn>2</mn><mi>L</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mi>V</mi><mrow><mi>ρ</mi><mi>L</mi></mrow></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><msub><mi>J</mi><mn>1</mn></msub><mn>2</mn></mfrac></mrow></math>
\`\`\`



إذن **تقل إلى النصف**، الخيار الرابع.

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p040-q242
title: السؤال 242 — ص 39 — السؤال الأصلي 32
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 39، السؤال 32
question: الشكل المرسوم يمثل العلاقة بين مقاومة موصل \\(R\\) وطوله \\(L\\)، إذا كانت مساحة المقطع للموصل \\(A\\) والمقاومية الكهربية له \\(\\rho\\)، فإن ميل الخط المستقيم يمثل:
- [ ] option-1 | \\(\\rho\\)
- [x] option-2 | \\(\\frac\\rho A\\)
- [ ] option-3 | \\(A\\)
- [ ] option-4 | \\(\\rho\\times A\\)
explanation:
المحور الرأسي يمثل المقاومة \\(R\\) والأفقي يمثل الطول \\(L\\). ميل المستقيم هو التغير الرأسي مقسوماً على التغير الأفقي. نستخدم علاقة المقاومة بالطول لنعرف هذا الميل:

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3140b6ae5be266577a0c.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



عند ثبات مساحة المقطع تكون المقاومة متناسبة مع طول الموصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>ρ</mi><mi>A</mi></mfrac><mi>L</mi></mrow></math>
\`\`\`



ميل منحنى المقاومة مقابل الطول هو معامل الطول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>R</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mi>ρ</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى مقاومة الموصل R مقابل طوله L.](assets/lessons/curriculum-evidence/3140b6ae5be266577a0c.webp)
:::

:::mcq
id: physics-tawjihi-2025-p040-q243
title: السؤال 243 — ص 39 — السؤال الأصلي 33
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 39، السؤال 33
question: يعبر الشكل المجاور عن موصل مصنوع من:
- [x] option-1 | سيليكون
- [ ] option-2 | حديد
- [ ] option-3 | فضة
- [ ] option-4 | نحاس
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/f603e0b66c0480d9c3ce.webp)

المحور الرأسي للتيار والأفقي للجهد. الموصل الأومي يعطي خطاً مستقيماً لأن التيار يتناسب مع الجهد عند ثبوت الحرارة.

الرسم هنا غير خطي: يبقى التيار صغيراً قرب الجهود المنخفضة ثم يزداد سريعاً بعد نحو \\(0.6\\,\\mathrm{V}\\). هذا السلوك يوافق شبه موصل، أي مادة تختلف قابليتها للتوصيل عن الفلزات الأومية وتستخدم في الثنائيات.

من الخيارات، **السيليكون** هو شبه الموصل؛ أما الحديد والفضة والنحاس ففلزات. الإجابة الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى شدة التيار مقابل فرق الجهد غير الخطي للموصل.](assets/lessons/curriculum-evidence/f603e0b66c0480d9c3ce.webp)
:::

:::mcq
id: physics-tawjihi-2025-p040-q244
title: السؤال 244 — ص 39 — السؤال الأصلي 34
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 39، السؤال 34
question: في الدارة الكهربائية المجاورة، إذا علمت أن قراءة الأميتر والمفتاح \\(S\\) مفتوح تساوي \\(2\\,\\mathrm{A}\\)، فما قراءة الأميتر \\(A\\) بعد غلق المفتاح بوحدة الأمبير؟
- [ ] option-1 | \\(1\\)
- [x] option-2 | \\(3\\)
- [ ] option-3 | \\(5\\)
- [ ] option-4 | \\(6\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a3bc1db21831179573ce.webp)

في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



قبل الإغلاق، المقاومتان الداخليتان على التوازي؛ نحسب مكافئتهما ثم مقاومة الدارة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>12</mn><mo>×</mo><mn>6</mn></mrow><mrow><mn>12</mn><mo>+</mo><mn>6</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>72</mn><mn>18</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



من قانون أوم \\(V=IR\\)، نحسب جهد المصدر بضرب التيار الكلي في مقاومة الدارة. نعامل المصدر والأسلاك والأميتر بالمثالية المعتادة لعدم ذكر مقاومة داخلية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>24</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



عند غلق المفتاح يصل سلك مثالي بين طرفي فرعي \\(12\\,\\mathrm{\\Omega}\\) و\\(6\\,\\mathrm{\\Omega}\\). يتساوى جهد الطرفين فينعدم التيار فيهما؛ وهذا معنى القصر. تبقى المقاومات الخارجية فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>24</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة مقاومات ومفتاح S وأميتر A.](assets/lessons/curriculum-evidence/a3bc1db21831179573ce.webp)
:::

:::mcq
id: physics-tawjihi-2025-p040-q245
title: السؤال 245 — ص 39 — السؤال الأصلي 35
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 39، السؤال 35
question: ما الكمية التي تقاس بوحدة كولوم · فولت؟
- [ ] option-1 | السرعة الانسياقية
- [ ] option-2 | القدرة
- [ ] option-3 | القوة الدافعة الكهربائية
- [x] option-4 | الطاقة الحرارية
explanation:
فرق الجهد هو الطاقة المنقولة لكل وحدة شحنة، \\(V=W/Q\\). نضرب في الشحنة لنجد الطاقة:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mi>Q</mi><mi>V</mi></mrow></math>
\`\`\`

لذلك وحدة \\(\\,\\mathrm{C\\,V}\\) تساوي الجول:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">C</mi><mo>⋅</mo><mi mathvariant="normal">V</mi><mo>=</mo><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`

إذن هي وحدة **طاقة**؛ ومن الخيارات المعطاة الإجابة هي **الطاقة الحرارية**.

**شاهد القاعدة أو السياق من الكتاب:**

> وتقاس القوة الدافعة الكهربائية بوحدة \\((\\mathrm{J}/\\mathrm{C})\\)، أي الفولت \\((V)\\).

**المصدر:** صفحة \\(27\\) من الكتاب.



hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p040-q246
title: السؤال 246 — ص 39 — السؤال الأصلي 36
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 39، السؤال 36
question: ماذا يحدث عند تقليل فرق الجهد بين طرفي سلك فلزي، مقاومة أومية؟
- [x] option-1 | مقاومة السلك تبقى ثابتة
- [ ] option-2 | تزداد شدة التيار الكهربائي المار فيه
- [ ] option-3 | تقل مقاومية مادة السلك
- [ ] option-4 | شدة المجال الكهربائي تبقى ثابتة
explanation:
المقاومة الأومية هي التي يتناسب فيها التيار طردياً مع الجهد عند ثبوت درجة الحرارة. يعبر قانون أوم عن ذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`



عند خفض الجهد ينخفض التيار بالنسبة نفسها، فتظل نسبة الجهد إلى التيار ثابتة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>V</mi><mi>I</mi></mfrac><mo>=</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi></mrow></mrow></math>
\`\`\`



إذن **مقاومة السلك تبقى ثابتة، الخيار الأول**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p040-q247
title: السؤال 247 — ص 39 — السؤال الأصلي 37
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 39، السؤال 37
question: رسمت العلاقة بيانيًا لأربعة موصلات مختلفة بين التيار المار فيها وفرق الجهد الكهربي بين طرفيها كما في الشكل المجاور، أي من هذه الموصلات لها أكبر مقاومة؟
- [ ] option-1 | \\(X\\)
- [ ] option-2 | \\(y\\)
- [ ] option-3 | \\(z\\)
- [x] option-4 | \\(H\\)
explanation:
الرسم يضع الجهد على المحور الرأسي والتيار على الأفقي؛ لذلك يساوي الميل تغير الجهد على تغير التيار. من قانون أوم \\(V=IR\\) يمثل هذا الميل المقاومة \\(R\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/6204118a386b839f10bb.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>V</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow></mfrac></mrow></math>
\`\`\`



الخط \\(H\\) هو الأشد ميلًا؛ أي إن الجهد فيه أكبر للتيار نفسه. لذلك مقاومته هي الأكبر، والخيار الرابع صحيح.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>H</mi></msub><mo>&gt;</mo><msub><mi>R</mi><mi>Z</mi></msub><mo>&gt;</mo><msub><mi>R</mi><mi>Y</mi></msub><mo>&gt;</mo><msub><mi>R</mi><mi>X</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![أربعة خطوط لفرق الجهد V مقابل التيار I موسومة H وz وy وX.](assets/lessons/curriculum-evidence/6204118a386b839f10bb.webp)
:::

:::mcq
id: physics-tawjihi-2025-p041-q248
title: السؤال 248 — ص 40 — السؤال الأصلي 38
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 40، السؤال 38
question: موصل فلزي، الكثافة الحجمية للإلكترونات الحرة فيه \\(2\\times10^{28}\\,\\mathrm{e/m^3}\\) موصل مع مصدر فرق جهد مقداره \\(10\\,\\mathrm{V}\\). الشكل المجاور يمثل العلاقة بين السرعة الانسياقية للإلكترونات الحرة فيه ومقلوب طوله. فإذا كان ميل الخط المستقيم الممثل لهذه العلاقة يساوي \\(5\\)، فما موصلية السلك بوحدة \\(\\Omega^{-1}\\,\\mathrm{m^{-1}}\\)؟
- [ ] option-1 | \\(6.25\\times10^9\\)
- [ ] option-2 | \\(6.25\\times10^{-9}\\)
- [x] option-3 | \\(1.6\\times10^9\\)
- [ ] option-4 | \\(1.6\\times10^{-9}\\)
explanation:
المعطى كثافة الإلكترونات \\(n=2\\times 10^{28}\\,\\mathrm{electron/m^{3}}\\)، وجهد \\(V=10\\,\\mathrm{V}\\)، وميل علاقة السرعة الانسياقية بمقلوب الطول \\(m=5\\). المطلوب الموصلية \\(\\sigma\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/50e24568bfdfc1381706.webp)

كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



الموصلية \\(\\sigma\\) هي مقلوب المقاومية \\(\\rho\\). في موصل أومي منتظم نربط كثافة التيار بالمجال، ونحسب المجال من فرق الجهد مقسومًا على طول الموصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mi>σ</mi><mi>E</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>V</mi><mi>L</mi></mfrac></mrow></math>
\`\`\`



نكتب السرعة الانسياقية بدلالة المجال، ثم نستبدل المجال بالجهد على الطول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>J</mi><mrow><mi>n</mi><mi>e</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mrow><mi>σ</mi><mi>E</mi></mrow><mrow><mi>n</mi><mi>e</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mrow><mi>σ</mi><mi>V</mi></mrow><mrow><mi>n</mi><mi>e</mi></mrow></mfrac><mfrac><mn>1</mn><mi>L</mi></mfrac></mrow></math>
\`\`\`



معامل مقلوب الطول هو ميل الرسم، ومنه نعزل الموصلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi>σ</mi><mi>V</mi></mrow><mrow><mi>n</mi><mi>e</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>n</mi><mi>e</mi></mrow><mi>V</mi></mfrac></mrow></math>
\`\`\`



نعوّض بالقيم مع مقدار شحنة الإلكترون.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mn>10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mo>×</mo><mn>2</mn><mo>×</mo><mn>1.6</mn></mrow><mn>10</mn></mfrac><mo>×</mo><msup><mn>10</mn><mrow><mn>28</mn><mo>−</mo><mn>19</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">Ω</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى السرعة الانسياقية v_d مقابل مقلوب الطول 1/L.](assets/lessons/curriculum-evidence/50e24568bfdfc1381706.webp)
:::

:::mcq
id: physics-tawjihi-2025-p041-q249
title: السؤال 249 — ص 40 — السؤال الأصلي 39
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 40، السؤال 39
question: وصلت مقاومة فلزية بفرق جهد مقداره \\(10\\,\\mathrm{V}\\) لفترة زمنية \\(\\Delta t\\)، فتولدت فيها كمية من الطاقة الحرارية مقدارها \\(2000\\,\\mathrm{J}\\). ما مقدار كمية الشحنة التي عبرت مقطع هذه المقاومة خلال هذه الفترة الزمنية بوحدة الكولوم؟
- [ ] option-1 | \\(20000\\)
- [ ] option-2 | \\(0.02\\)
- [ ] option-3 | \\(20\\)
- [x] option-4 | \\(200\\)
explanation:
المعطى طاقة حرارية مقدارها \\(2000\\,\\mathrm{J}\\) وجهد مقداره \\(10\\,\\mathrm{V}\\). المطلوب الشحنة التي عبرت المقاومة.

فرق الجهد هو الطاقة المنقولة لكل وحدة شحنة. تتحول هذه الطاقة في المقاومة إلى حرارة، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mi>Q</mi><mi>V</mi></mrow></math>
\`\`\`



نقسم على فرق الجهد غير الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mfrac><mi>W</mi><mi>V</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mfrac><mn>2000</mn><mn>10</mn></mfrac><mo>=</mo><mn>200</mn><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>
\`\`\`



الإجابة: **\\(200\\,\\mathrm{C}\\)، الخيار الرابع**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p041-q250
title: السؤال 250 — ص 40 — السؤال الأصلي 40
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 40، السؤال 40
question: ثلاثة أسلاك فلزية مصنوعة من مواد مختلفة، ومتساوية في مساحة المقطع. الشكل المجاور يبين العلاقة البيانية بين مقاومة هذه الأسلاك وأطوالها. أي الآتية تعتبر صحيحة فيما يتعلق بالمقاومية لكل منها؟
- [ ] option-1 | \\(\\rho_a=\\rho_b=\\rho_c\\)
- [ ] option-2 | \\(\\rho_a>\\rho_c>\\rho_b\\)
- [x] option-3 | \\(\\rho_c>\\rho_b>\\rho_a\\)
- [ ] option-4 | \\(\\rho_a>\\rho_b>\\rho_c\\)
explanation:
الرسم يضع المقاومة \\(R\\) على الرأسي والطول \\(L\\) على الأفقي. نستخدم \\(R=\\rho L/A\\) لأنها تربط هاتين الكميتين بالمقاومية المطلوبة. ميل المستقيم هو التغير في المقاومة مقسوماً على التغير في الطول:

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/f73254a205eb027517fe.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



الأسلاك لها مساحة المقطع نفسها؛ لذلك يقارن ميل كل خط مقاومية مادته مباشرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>R</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>L</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mi>ρ</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



نرتب الخطوط من الأشد ميلًا إلى الأقل ميلًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mi>c</mi></msub><mo>&gt;</mo><msub><mi>m</mi><mi>b</mi></msub><mo>&gt;</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ρ</mi><mi>c</mi></msub><mo>&gt;</mo><msub><mi>ρ</mi><mi>b</mi></msub><mo>&gt;</mo><msub><mi>ρ</mi><mi>a</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ثلاثة خطوط a وb وc للعلاقة بين R وL.](assets/lessons/curriculum-evidence/f73254a205eb027517fe.webp)
:::

:::mcq
id: physics-tawjihi-2025-p041-q251
title: السؤال 251 — ص 40 — السؤال الأصلي 41
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 40، السؤال 41
question: موصلان فلزيان من مادتين مختلفتين لهما نفس الطول ومختلفان في الحجم، تم توصيلهما على التوالي مع بطارية قوتها الدافعة الكهربائية \\(6\\,\\mathrm{V}\\)، فكان فرق الجهد بين طرفي كل موصل \\(3\\,\\mathrm{V}\\). أي العبارات الآتية تعتبر صحيحة؟
- [ ] option-1 | \\(J_1=J_2\\)
- [x] option-2 | \\(\\rho_1A_2=\\rho_2A_1\\)
- [ ] option-3 | \\(v_{d2}=v_{d1}\\)
- [ ] option-4 | \\(\\rho_1=\\rho_2\\)
explanation:
الموصلان على التوالي، ولهما الطول نفسه والجهد نفسه \\(3\\,\\mathrm{V}\\). المطلوب العلاقة بين مقاوميتيهما ومساحتي مقطعيهما.

على التوالي يمر التيار نفسه دون تفرع. وبقانون أوم، مقاومة كل موصل هي جهده مقسوماً على هذا التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>3</mn><mi>I</mi></mfrac></mrow></math>
\`\`\`



إذن المقاومتان متساويتان. نعوّض علاقة المقاومة بأبعاد الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mi>L</mi><mi mathvariant="normal">/</mi><mi>A</mi></mrow></math>\`:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>ρ</mi><mn>1</mn></msub><mi>L</mi></mrow><msub><mi>A</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ρ</mi><mn>2</mn></msub><mi>L</mi></mrow><msub><mi>A</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`



نختصر الطول المشترك غير الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>A</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>ρ</mi><mn>2</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`



نضرب الطرفين في \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mrow></math>\` لإزالة المقامين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>2</mn></msub><msub><mi>A</mi><mn>1</mn></msub></mrow></math>
\`\`\`



الإجابة: الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p041-q252
title: السؤال 252 — ص 40 — السؤال الأصلي 42
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 40، السؤال 42
question: موصلان فلزيان مصنوعان من نفس المادة، إذا كانت شدة التيار الكهربائي المار فيهما متساوية، والسرعة الانسياقية للإلكترونات الحرة في الموصل الأول تساوي ثلاثة أمثال السرعة الانسياقية للإلكترونات الحرة في الموصل الثاني، فما النسبة بين نصف قطر مقطعيهما \\(\\frac{r_1}{r_2}\\)؟
- [ ] option-1 | \\(\\frac31\\)
- [ ] option-2 | \\(\\frac13\\)
- [x] option-3 | \\(\\frac1{\\sqrt3}\\)
- [ ] option-4 | \\(\\frac{\\sqrt3}1\\)
explanation:
كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



المادة نفسها تعطي كثافة الإلكترونات نفسها، والتيار المتساوي يجعل حاصل ضرب المساحة في السرعة متساويًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mi>e</mi><msub><mi>A</mi><mn>1</mn></msub><msub><mi>v</mi><mrow><mi>d</mi><mn>1</mn></mrow></msub><mo>=</mo><mi>n</mi><mi>e</mi><msub><mi>A</mi><mn>2</mn></msub><msub><mi>v</mi><mrow><mi>d</mi><mn>2</mn></mrow></msub></mrow></math>
\`\`\`



نعوّض بأن السرعة الأولى ثلاثة أمثال الثانية، ثم نختصر \\(ne\\) والسرعة الثانية غير الصفرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mn>3</mn><msub><mi>v</mi><mrow><mi>d</mi><mn>2</mn></mrow></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><msub><mi>v</mi><mrow><mi>d</mi><mn>2</mn></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`



مساحة المقطع الدائري \\(A=\\pi r^{2}\\)، لذلك تتناسب مع مربع نصف قطره، نأخذ الجذر الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>r</mi><mn>1</mn></msub><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo>=</mo><msqrt><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>r</mi><mn>1</mn></msub><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>3</mn></msqrt></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p042-q256
title: السؤال 256 — ص 41 — السؤال الأصلي 46
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 41، السؤال 46
question: سلك فلزي مقاومته \\(R\\) ومساحة مقطعه العرضي \\(A\\) موصول بين نقطتين فرق الجهد بينهما \\(V\\). إذا أعيد تشكيله ليقل طوله إلى النصف، فماذا يحدث للسرعة الانسياقية للإلكترونات الحرة فيه في هذه الحالة إذا أعيد توصيله إلى نفس فرق الجهد؟  تبقى مادة السلك وحجمه ودرجة حرارته ثابتة أثناء إعادة التشكيل.

- [x] option-1 | \\(v_{d2}=2v_{d1}\\)
- [ ] option-2 | \\(v_{d2}=v_{d1}\\)
- [ ] option-3 | \\(v_{d2}=\\frac14v_{d1}\\)
- [ ] option-4 | \\(v_{d2}=\\frac12v_{d1}\\)
explanation:
المطلوب السرعة الانسياقية بعد تقليل الطول إلى النصف مع إعادة توصيله بفرق الجهد نفسه. بحسب السؤال يبقى حجم السلك ودرجة حرارته ومادته ثابتة. حجم السلك يساوي \\(AL\\)؛ لذلك ثباته يعني:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo stretchy="false">(</mo><msub><mi>L</mi><mn>1</mn></msub><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`



نقسم على الطول الجديد \\(L_{1}/2\\) لنجد المساحة الجديدة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>L</mi><mn>1</mn></msub><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub></mrow></math>
\`\`\`



من \\(R=\\rho L/A\\)، تقل المقاومة إلى الربع:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`



قانون أوم \\(I=V/R\\) يعطي تيارًا أربعة أمثال القديم عند ثبات \\(V\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`



السرعة الانسياقية هي متوسط الحركة الموجهة للإلكترونات. إذا كان عدد الإلكترونات الحرة في وحدة الحجم \\(n\\)، فإن الشحنة العابرة خلال زمن \\(\\Delta t\\) تساوي \\(neAv_{d}\\Delta t\\)؛ لأن الشحنات تقطع مسافة \\(v_{d}\\Delta t\\) فيعبر حجم \\(Av_{d}\\Delta t\\). بقسمة الشحنة على الزمن نحصل على \\(I=neAv_{d}\\). تبقى \\(n\\) و\\(e\\) ثابتتين، لذا:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>v</mi><mrow><mi>d</mi><mn>2</mn></mrow></msub><msub><mi>v</mi><mrow><mi>d</mi><mn>1</mn></mrow></msub></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>2</mn></msub><msub><mi>I</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><mn>4</mn><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>d</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mi>d</mi><mn>1</mn></mrow></msub></mrow></math>
\`\`\`

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p042-q257
title: السؤال 257 — ص 41 — السؤال الأصلي 47
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 41، السؤال 47
question: سلك من الألمنيوم مقاومته \\(R\\)، سحب إلى أربع أضعاف طوله السابق، فما مقاومة السلك بعد سحبه؟  تبقى مادة السلك وحجمه ودرجة حرارته ثابتة أثناء إعادة التشكيل.

- [ ] option-1 | \\(\\frac1{16}R\\)
- [ ] option-2 | \\(\\frac14R\\)
- [x] option-3 | \\(16R\\)
- [ ] option-4 | \\(4R\\)
explanation:
يبقى حجم السلك ومادته ودرجة حرارته ثابتة أثناء السحب. نستخدم \\(R=\\rho L/A\\)؛ فالمقاومة تزداد بزيادة الطول وتقل بزيادة مساحة المقطع.

الحجم \\(AL\\) ثابت، والطول الجديد أربعة أمثال القديم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><msub><mi>L</mi><mn>2</mn></msub><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mn>4</mn><msub><mi>L</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mn>4</mn></mfrac></mrow></math>
\`\`\`



نقسم مقاومة السلك الجديدة على القديمة فتُختصر المقاومية الثابتة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>L</mi><mn>2</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>16</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>16</mn><mi>R</mi></mrow></math>
\`\`\`

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p042-q258
title: السؤال 258 — ص 41 — السؤال الأصلي 48
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 41، السؤال 48
question: يبين الشكل المجاور موصلًا مساحة مقطعه غير منتظمة يسري فيه تيار كهربائي. فما ترتيب المقاطع من حيث السرعة الانسياقية \\(v_d\\)؟
- [ ] option-1 | \\(v_{dC}>v_{dB}>v_{dA}\\)
- [ ] option-2 | \\(v_{dA}>v_{dB}>v_{dC}\\)
- [ ] option-3 | \\(v_{dA}=v_{dB}=v_{dC}\\)
- [x] option-4 | \\(v_{dB}>v_{dA}>v_{dC}\\)
explanation:
كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/fe693f89b225b1edfbc6.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



الأقطار الموضحة تجعل المقطع الثاني أصغر مساحة، والثالث أكبر مساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mi>B</mi></msub><mo>&lt;</mo><msub><mi>A</mi><mi>A</mi></msub><mo>&lt;</mo><msub><mi>A</mi><mi>C</mi></msub></mrow></math>
\`\`\`



في التيار المستقر لا تتراكم الشحنة داخل أي جزء من الموصل؛ لذلك يمر التيار نفسه في المقاطع. نقسم \\(I=neAv_{d}\\) على \\(neA\\)؛ في المادة نفسها تثبت \\(n\\)و\\(e\\)، فتتناسب السرعة عكسياً مع المساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>I</mi><mrow><mi>n</mi><mi>e</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>d</mi><mi>B</mi></mrow></msub><mo>&gt;</mo><msub><mi>v</mi><mrow><mi>d</mi><mi>A</mi></mrow></msub><mo>&gt;</mo><msub><mi>v</mi><mrow><mi>d</mi><mi>C</mi></mrow></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ثلاثة مقاطع A وB وC لموصل غير منتظم بأبعادها المبينة.](assets/lessons/curriculum-evidence/fe693f89b225b1edfbc6.webp)
:::





:::exam-question
id: physics-tawjihi-2025-p043-q263
title: السؤال 263 — ص 42 — السؤال الأصلي 4
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: المقاومة الأومية؟
solution:
الإجابة: المقاومة الأومية تحقق قانون أوم، وتبقى فيها النسبة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mi mathvariant="normal">/</mi><mi>I</mi></mrow></math>\` ثابتة عند ثبوت درجة الحرارة.

الكتاب الرسمي الكامل: المقاومة الأومية وغير الأومية، الصفحة المطبوعة \\(64\\)، صفحة \\(\\mathrm{PDF} 68\\).

> يطلق على الموصلات التي ينطبق عليها قانون أوم موصلات ذات مقاومة خطية (أومية)

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=68)


:::

:::exam-question
id: physics-tawjihi-2025-p043-q265
title: السؤال 265 — ص 42 — السؤال الأصلي 7
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: المقاومة اللاأومية؟
solution:
الإجابة: المقاومة اللاأومية لا تحقق قانون أوم؛ فلا تبقى النسبة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mi mathvariant="normal">/</mi><mi>I</mi></mrow></math>\` ثابتة عند تغيير الجهد.

الكتاب الرسمي الكامل: المقاومة الأومية وغير الأومية، الصفحة المطبوعة \\(64\\)، صفحة \\(\\mathrm{PDF} 68\\).

> وهناك مواد لا ينطبق عليها قانون أوم؛ فيطلق عليها موصلات لا خطية (لا أومية)

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=68)


:::

:::exam-question
id: physics-tawjihi-2025-p043-q266
title: السؤال 266 — ص 42 — السؤال الأصلي 8
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 8
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: قانون جول؟
solution:
الإجابة: قانون جول: معدل تولد الحرارة في مقاومة ثابتة يتناسب طردياً مع مربع التيار: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>P</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi></mrow></math>\`. وعند ثبات التيار خلال زمن \\(t\\) تكون الطاقة الحرارية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>E</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi><mi>t</mi></mrow></math>\`.

الكتاب الرسمي الكامل: الأثر الحراري للتيار الكهربائي؛قانون جول، الصفحة المطبوعة \\(66\\)، صفحة \\(\\mathrm{PDF} 70\\).

> معدل كمية الحرارة المتولدة في مقاومة فلزية ثابتة تتناسب طردياً مع مربع شدة التيار المار فيها

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=70)


:::

:::exam-question
id: physics-tawjihi-2025-p043-q267
title: السؤال 267 — ص 42 — السؤال الأصلي 9
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 9
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: التيار الاصطلاحي؟
solution:
الإجابة: التيار الاصطلاحي يأخذ اتجاه حركة الشحنات الموجبة؛ من الجهد المرتفع إلى الجهد المنخفض في الدارة الخارجية.

الكتاب الرسمي الكامل: اتجاه التيار الاصطلاحي، الصفحة المطبوعة \\(59\\)، صفحة \\(\\mathrm{PDF} 63\\).

> هو اتجاه حركة الشحنات الكهربائية الموجبة من منطقة الجهد المرتفع إلى منطقة الجهد المنخفض في الدارة الكهربائية

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=63)


:::



:::exam-question
id: physics-tawjihi-2025-p043-q269
title: السؤال 269 — ص 42 — السؤال الأصلي 11
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 11
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: المقاومية؟
solution:
الإجابة: المقاومية: مقاومة موصل منتظم المقطع من المادة، طوله متر واحد ومساحة مقطعه متر مربع.

الكتاب: المقاومة الكهربائية وقانون أوم، الصفحة المطبوعة \\(24\\)، صفحة \\(\\mathrm{PDF} 26\\).

> مقاومة موصل منتظم المقطع، طوله متر واحد، ومساحة مقطعه العرضي \\(1\\,\\mathrm{m^{2}}\\)




:::

:::exam-question
id: physics-tawjihi-2025-p043-q270
title: السؤال 270 — ص 42 — السؤال الأصلي 6
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح الفرق بين التيار الإلكتروني والتيار الاصطلاحي من حيث التعريف.
solution:
الإجابة: التيار الإلكتروني هو حركة الإلكترونات الحرة في الموصل بعكس اتجاه المجال. أما التيار الاصطلاحي فيأخذ اتجاه حركة الشحنات الموجبة، ويعاكس حركة الإلكترونات.

الكتاب الرسمي الكامل: التيار الإلكتروني، الصفحة المطبوعة \\(60\\)، صفحة \\(\\mathrm{PDF} 64\\).

> فيتولد عن حركة الإلكترونات بعكس اتجاه المجال تيار كهربائي مستمر يسمى بالتيار الإلكتروني

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=64)



التيار الاصطلاحي: الصفحة المطبوعة \\(59\\)، صفحة \\(\\mathrm{PDF}63\\) من الكتاب الرسمي الكامل.

> هو اتجاه حركة الشحنات الكهربائية الموجبة من منطقة الجهد المرتفع إلى منطقة الجهد المنخفض في الدارة الكهربائية

![تعريف اتجاه التيار الاصطلاحي](assets/lessons/curriculum-evidence/22fc9b7b707997237074.webp)

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=63)
:::

:::exam-question
id: physics-tawjihi-2025-p043-q271
title: السؤال 271 — ص 42 — السؤال الأصلي 1
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: ارتفاع درجة حرارة المواد الموصلة عند مرور تيار كهربائي فيها.
solution:
يبذل المجال الكهربائي شغلًا على الإلكترونات. وعند تصادمها المتكرر بذرات الفلز تنقل إليها طاقة، فتزداد الطاقة الداخلية واهتزازات الذرات، وترتفع درجة حرارة الموصل.
:::

:::exam-question
id: physics-tawjihi-2025-p043-q272
title: السؤال 272 — ص 42 — السؤال الأصلي 2
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: حركة الإلكترونات المتعرجة في الموصل إذا ما تعرضت إلى مجال كهربائي.
solution:
يؤثر المجال في الإلكترونات بقوة عكس اتجاهه لأنها سالبة الشحنة. لكن التصادمات المتكررة بذرات الفلز تغيّر اتجاه حركتها، فيصبح مسارها متعرجًا مع بقاء حركة انسياقية متوسطة.
:::

:::exam-question
id: physics-tawjihi-2025-p043-q273
title: السؤال 273 — ص 42 — السؤال الأصلي 3
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 3؛ تصنيف أسئلة الفيزياء توجيهي 2025، ص 43، السؤال 8
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: تكون السرعة الانسياقية للإلكترونات الحرة في الموصلات صغيرة جدًا.
solution:
التصادمات المتكررة بذرات الفلز تعوق استمرار تسارع الإلكترونات في اتجاه واحد؛ فيكون متوسط حركتها الموجهة، أي السرعة الانسياقية، صغيرًا.
:::

:::exam-question
id: physics-tawjihi-2025-p043-q274
title: السؤال 274 — ص 42 — السؤال الأصلي 4
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 42، السؤال 4؛ تصنيف أسئلة الفيزياء توجيهي 2025، ص 43، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: تضيء المصابيح بسرعة عند غلق الدارة رغم بعدها عن مصدر الجهد.
solution:
الإلكترونات موجودة أصلًا في جميع أجزاء الأسلاك والمصباح. عند غلق الدارة ينتشر التأثير الكهربائي بسرعة كبيرة، فتبدأ الإلكترونات المحلية بالانسياب؛ ولا يلزم انتظار إلكترونات تسافر من البطارية إلى المصباح.
:::

:::exam-question
id: physics-tawjihi-2025-p044-q276
title: السؤال 276 — ص 43 — السؤال الأصلي 6
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 43، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: توصل الأجهزة في المنازل على التوازي.
solution:
في التوازي يتصل كل جهاز مباشرة بطرفي المصدر، فيحصل على **فرق الجهد المناسب نفسه**. ولكل جهاز فرع مستقل؛ لذا فإن إطفاء جهاز أو انقطاع فرعه لا يقطع التيار عن بقية الأجهزة.
:::

:::exam-question
id: physics-tawjihi-2025-p044-q277
title: السؤال 277 — ص 43 — السؤال الأصلي 7
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 43، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: ينعدم (يتلاشى) التيار الكهربائي في دارة كهربائية عند فتح الدارة.
solution:
عند فتح الدارة ينقطع المسار المغلق، فتتوزع الشحنات من جديد حتى يتلاشى المجال الذي كان يدفع التيار المستمر في الأجزاء الموصلة. عندئذ تنعدم الحركة الانسياقية والتيار بعد استقرار الدارة.

قد يبقى فرق جهد عبر المفتاح المفتوح؛ انعدام التيار لا يعني زوال القوة الدافعة للبطارية.
:::

:::exam-question
id: physics-tawjihi-2025-p044-q279
title: السؤال 279 — ص 43 — السؤال الأصلي 1
question: السؤال الثاني: ج – قارن
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 43، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين كل مما يلي: المقاومة الأومية والمقاومة اللاأومية من حيث المفهوم.
solution:
الإجابة: الأومية: تحقق قانون أوم عند ثبوت درجة الحرارة، وتبقى فيها النسبة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mi mathvariant="normal">/</mi><mi>I</mi></mrow></math>\` ثابتة.

اللاأومية: لا تحقق قانون أوم، وتتغير فيها النسبة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mi mathvariant="normal">/</mi><mi>I</mi></mrow></math>\` مع الجهد.

الكتاب الرسمي الكامل: المقاومة الأومية وغير الأومية، الصفحة المطبوعة \\(64\\)، صفحة \\(\\mathrm{PDF} 68\\).

> موصلات ذات مقاومة خطية (أومية) ... وهناك مواد لا ينطبق عليها قانون أوم؛ فيطلق عليها موصلات لا خطية (لا أومية)

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=68)


:::

:::exam-question
id: physics-tawjihi-2025-p045-q281
title: السؤال 281 — ص 44 — السؤال الأصلي 1
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 44، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يبين العلاقة بين مقاومة موصل فلزي وطوله. إذا كانت مساحة المقطع العرضي للموصل ثابتة ومنتظمة ومقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، احسب:
أ. موصلية الفلز.
ب. مقدار السرعة الانسياقية للإلكترونات الحرة، إذا كان عدد الإلكترونات الحرة في وحدة الحجم من هذا الموصل تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6.25</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>3</mn></msup></mrow></mrow></math>\` ويمر فيه تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`.

![منحنى المقاومة R بالأوم مقابل طول الموصل L بالمتر.](assets/lessons/curriculum-evidence/e4c55bfc71dc44616d88.webp)
solution:
المعطى مساحة المقطع \\(2\\,\\mathrm{mm^{2}}\\)، وكثافة الإلكترونات \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>n</mi><mo>=</mo><mn>6.25</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup></mrow></math>\` \\(\\,\\mathrm{electron/m^{3}}\\)، والتيار \\(2\\,\\mathrm{A}\\). المطلوب الموصلية والسرعة الانسياقية.

نحوّل المساحة إلى \\(\\,\\mathrm{m^{2}}\\). نربّع معامل تحويل الطول لأن المساحة حاصل ضرب طولين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow><mo>=</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



![منحنى المقاومة مقابل الطول](assets/lessons/curriculum-evidence/e4c55bfc71dc44616d88.webp)

**أ. الموصلية**

المحور الرأسي للمقاومة والأفقي للطول. ميل المستقيم هو زيادة المقاومة مقسومة على زيادة الطول. نقرأ من الرسم \\(6\\,\\mathrm{\\Omega}\\) خلال \\(60\\) متراً:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>R</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>L</mi></mrow></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>60</mn></mfrac><mo>=</mo><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



مقاومة الموصل المنتظم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mi>L</mi><mi mathvariant="normal">/</mi><mi>A</mi></mrow></math>\`. بإعادة كتابتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi><mo>=</mo><mo stretchy="false">(</mo><mi>ρ</mi><mi mathvariant="normal">/</mi><mi>A</mi><mo stretchy="false">)</mo><mi>L</mi></mrow></math>\`، نجد أن معامل الطول يمثل الميل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mi>ρ</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



نضرب في المساحة لإيجاد المقاومية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mi>m</mi><mi>A</mi><mo>=</mo><mo stretchy="false">(</mo><mn>0.1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



الموصلية هي مقلوب المقاومية، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">Ω</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`



**ب. السرعة الانسياقية**

هي متوسط الحركة الموجهة للإلكترونات. يربطها بالتيار القانون \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>\`، حيث \\(e\\) مقدار شحنة الإلكترون، و\\(n\\) عدد الإلكترونات الحرة في وحدة الحجم. نستخدمه لأن هذه المقادير معلومة هنا.

نقسم على \\(neA\\) لإيجاد السرعة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>I</mi><mrow><mi>n</mi><mi>e</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy="false">(</mo><mn>6.25</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نجمع أسس العدد \\(10\\) عند الضرب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mi>e</mi><mi>A</mi><mo>=</mo><mo stretchy="false">(</mo><mn>6.25</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><msup><mn>10</mn><mrow><mn>28</mn><mo>−</mo><mn>19</mn><mo>−</mo><mn>6</mn></mrow></msup><mo>=</mo><mn>20</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mo>=</mo><mn>20000</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>2</mn><mn>20000</mn></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p045-q282
title: السؤال 282 — ص 44 — السؤال الأصلي 2
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 44، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
موصل طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>400</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` ومساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، رسمت العلاقة البيانية بين شدة المجال الكهربائي وشدة التيار المار فيه فكانت كما في الشكل المجاور. إذا علمت أن ميل الخط المستقيم يساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.01</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mi mathvariant="normal">m</mi><mtext> </mtext><mi mathvariant="normal">A</mi><mo stretchy="false">)</mo></mrow></mrow></math>\`، احسب:
1. المقاومية.
2. مقاومة الموصل.
3. شدة المجال الكهربائي عندما تكون شدة التيار المار في الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`.

![منحنى شدة المجال E مقابل شدة التيار I.](assets/lessons/curriculum-evidence/9f1403683a152a1c686d.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/9f1403683a152a1c686d.webp)

في تحويل المساحة نربّع معامل تحويل الطول: \\(1\\,\\mathrm{mm^{2}} = 10^{-6}\\,\\mathrm{m^{2}}\\).

المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



للموصل المنتظم \\(E=V/L\\)؛ نعوّض \\(V=IR\\) و\\(R=\\rho L/A\\)، فتُختصر \\(L\\). معامل \\(I\\) يمثل ميل منحنى \\(E\\) مقابل \\(I\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>I</mi><mi>R</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mi>I</mi><mi>L</mi></mfrac><mrow><mo fence="true">(</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mi>ρ</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



نحوّل المساحة ونستخرج المقاومية من الميل المعطى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>0.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mi>m</mi><mi>A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mn>0.01</mn><mo stretchy="false">(</mo><mn>0.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>9</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحسب المقاومة من طول الموصل ومساحته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>L</mi></mrow><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>9</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>400</mn><mo stretchy="false">)</mo></mrow><mrow><mn>0.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>2.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



عند التيار المطلوب نحسب المجال من ميل الرسم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mn>0.01</mn><mo>×</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mn>0.02</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p045-q283
title: السؤال 283 — ص 44 — السؤال الأصلي 3
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 44، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور ثلاثة منحنيات \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mo separator="true">,</mo><mn>2</mn><mo separator="true">,</mo><mn>3</mn></mrow></math>\` توضح العلاقة بين شدة التيار الكهربائي المار في ثلاث مقاومات مع فرق الجهد بين طرفي كل مقاومة. هل هذه المقاومات أومية؟ فسر إجابتك.

![ثلاثة منحنيات مرقمة 1 و2 و3 لفرق الجهد V مقابل التيار I.](assets/lessons/curriculum-evidence/60354eccdc336ffd966a.webp)
solution:
المقاومة الأومية هي التي يتناسب فيها التيار طردياً مع فرق الجهد عند ثبوت الحرارة؛ أي تبقى \\(V/I\\) ثابتة. في الرسم الجهد رأسي والتيار أفقي، والمنحنيات الثلاثة خطوط مستقيمة تمر بالأصل؛ لذلك تبقى النسبة ثابتة لكل منها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/60354eccdc336ffd966a.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>R</mi><mi>I</mi></mrow></math>
\`\`\`



نقرأ عند ثلاثة أمبير جهود الخطوط الثلاثة لنرى ثبات مقاومة كل خط مع اختلافها بين الخطوط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>18</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>12</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>6</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



إذن **المقاومات الثلاث أومية**؛ ثبات ميل كل خط يعني ثبات مقاومته، ولا يشترط أن تتساوى مقاومات الخطوط الثلاثة.
:::

:::exam-question
id: physics-tawjihi-2025-p045-q284
title: السؤال 284 — ص 44 — السؤال الأصلي 4
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 44، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك نحاس طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` ومساحة مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، ويحمل تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. إذا كانت مقاومية النحاس \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.72</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، والكثافة الحجمية للإلكترونات الحرة فيه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8.4</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>3</mn></msup></mrow></mrow></math>\`، فاحسب:
1. كثافة شدة التيار في الموصل.
2. السرعة الانسياقية.
3. شدة المجال الكهربائي.
solution:
في تحويل المساحة نربّع معامل تحويل الطول: \\(1\\,\\mathrm{mm^{2}} = 10^{-6}\\,\\mathrm{m^{2}}\\).

كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



نحوّل مساحة المقطع ثم نحسب التيار لكل وحدة مساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mn>20</mn><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`



نقسم كثافة التيار على كثافة الإلكترونات ومقدار شحنة الواحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>J</mi><mrow><mi>n</mi><mi>e</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup></mrow><mrow><mo stretchy="false">(</mo><mn>8.4</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup></mrow><mrow><mn>13.44</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.49</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



للموصل المنتظم \\(E=\\rho J\\)؛ وهي صيغة قانون أوم لكل وحدة مساحة. نضرب كثافة التيار في المقاومية للحصول على المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mi>ρ</mi><mi>J</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1.72</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mn>0.344</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p046-q285
title: السؤال 285 — ص 45 — السؤال الأصلي 5
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 45، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك نحاسي طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` ومساحة مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، ويحمل تيارًا كهربائيًا \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. إذا كانت مقاومية النحاس \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.72</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` والكثافة الحجمية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8.4</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>3</mn></msup></mrow></mrow></math>\`، احسب:
أ. مقاومة الموصل.
ب. السرعة الانسياقية.
ج. شدة المجال.
solution:
في تحويل المساحة نربّع معامل تحويل الطول: \\(1\\,\\mathrm{mm^{2}} = 10^{-6}\\,\\mathrm{m^{2}}\\).

المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



نحوّل مساحة المقطع إلى المتر المربع ونحسب المقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>L</mi></mrow><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>1.72</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>100</mn><mo stretchy="false">)</mo></mrow><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>1.72</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>1.72</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب سرعة الإلكترونات الانسياقية من شدة التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>I</mi><mrow><mi>n</mi><mi>e</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>20</mn><mrow><mo stretchy="false">(</mo><mn>8.4</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>20</mn><mrow><mn>13.44</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.49</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



للموصل المنتظم يكون المجال \\(E=V/L\\)، وقانون أوم يعطي \\(V=IR\\). نعوّض جهد السلك لنحسب المجال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>I</mi><mi>R</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mn>20</mn><mo stretchy="false">(</mo><mn>1.72</mn><mo stretchy="false">)</mo></mrow><mn>100</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>34.4</mn><mn>100</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mn>0.344</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p046-q287
title: السؤال 287 — ص 45 — السؤال الأصلي 7
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 45، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك من الحديد طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` ومساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، ويحمل تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. إذا كانت مقاومية الحديد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>9.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، احسب ما يأتي:
1. فرق الجهد الكهربائي بين طرفي السلك.
2. السرعة الانسياقية للإلكترونات الحرة فيه، إذا كانت كثافة الإلكترونات الحرة للحديد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8.5</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>3</mn></msup></mrow></mrow></math>\`.
solution:
في تحويل المساحة نربّع معامل تحويل الطول: \\(1\\,\\mathrm{mm^{2}} = 10^{-6}\\,\\mathrm{m^{2}}\\).

كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



مقاومة السلك المنتظم \\(R=\\rho L/A\\)؛ نستخدمها لأننا نعرف مادته وأبعاده. نحوّل المساحة ثم نعوّض.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>9.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>100</mn><mo stretchy="false">)</mo></mrow><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>9.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>9.7</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نستخدم قانون أوم لإيجاد جهد السلك؛ فالجهد يساوي شدة التيار مضروبة في المقاومة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>20</mn><mo stretchy="false">(</mo><mn>9.7</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>194</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



من \\(I=neAv_{d}\\) نقسم على \\(neA\\) لإيجاد السرعة؛ نستخدم مقدار شحنة الإلكترون \\(e=1.6\\times 10^{-19}\\,\\mathrm{C}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>I</mi><mrow><mi>n</mi><mi>e</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>20</mn><mrow><mo stretchy="false">(</mo><mn>8.5</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>20</mn><mrow><mn>13.6</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.47</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p046-q288
title: السؤال 288 — ص 45 — السؤال الأصلي 8
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 45، السؤال 8
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك نحاسي طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>200</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` ومساحة مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، ويحمل تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. إذا كانت موصلية سلك النحاس تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5.8</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">Ω</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>\`، فاحسب:
1. شدة المجال الكهربي.
2. إذا استخدم جزء من السلك طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، فما مقدار مقاوميته ومقاومة هذا الجزء من السلك؟
solution:
في تحويل المساحة نربّع معامل تحويل الطول: \\(1\\,\\mathrm{mm^{2}} = 10^{-6}\\,\\mathrm{m^{2}}\\).

المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



كثافة التيار هي التيار لكل وحدة مساحة مقطع؛ أي \\(J=I/A\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



الموصلية \\(\\sigma\\) هي مقلوب المقاومية \\(\\rho\\). في موصل أومي منتظم نربط كثافة التيار بالمجال، ونحسب المجال من فرق الجهد مقسومًا على طول الموصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mi>σ</mi><mi>E</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>V</mi><mi>L</mi></mfrac></mrow></math>
\`\`\`



نحسب كثافة التيار من المساحة المعطاة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mn>10</mn><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`



نقسم كثافة التيار على الموصلية لإيجاد المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>J</mi><mi>σ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow><mrow><mn>5.8</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup></mrow></mfrac><mo>≈</mo><mn>0.0862</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



قطع جزء من السلك لا يغير مقاومية مادته؛ نحسبها من الموصلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mfrac><mn>1</mn><mi>σ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>5.8</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.724</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحسب مقاومة الجزء ذي الطول المطلوب ومساحة المقطع نفسها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>L</mi></mrow><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>1.724</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>100</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>0.862</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p046-q289
title: السؤال 289 — ص 45 — السؤال الأصلي 9
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 45، السؤال 9
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور جد قيمة المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\` التي تجعل البطارية تزود الدارة بقدرة كهربائية تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>48</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>\`، بإهمال المقاومة الداخلية للبطارية.

![مصدر 24 V ومقاومة 8 Ω على التوالي مع فرعين 12 Ω وR.](assets/lessons/curriculum-evidence/96d625a018212b15cebb.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/96d625a018212b15cebb.webp)

تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



البطارية مثالية، فكل قدرتها \\(48\\,\\mathrm{W}\\) تصل للمقاومات. القدرة \\(P=VI\\) ومع \\(I=V/R\\) تصبح \\(P=V^{2}/R\\)؛ نضرب في \\(R\\) ونقسم على \\(P\\) لإيجاد المكافئة المطلوبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>P</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mfrac><msup><mn>24</mn><mn>2</mn></msup><mn>48</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



الثمانية أوم على التوالي مع الفرعين؛ نطرحها لإيجاد مكافئة التوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نكتب مقلوب مكافئة الفرعين ثم نعزل المقاومة المجهولة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>12</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p046-q290
title: السؤال 290 — ص 45 — السؤال الأصلي 10
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 45، السؤال 10
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في تجربة لقياس مقاومة سلك طويل من الفضة مساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، وصل طرفا السلك في دارة كهربائية كما في الشكل أ، ثم أخذت قراءات مختلفة لتيار الدارة وفرق الجهد بين طرفي السلك، ومثلت العلاقة بينهما بيانيًا كما في الشكل ب. إذا علمت أن درجة حرارته بقيت ثابتة وأن مقاومية الفضة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\`، معتمدًا على الأشكال، أجب عما يأتي:
1. الطول الكلي للسلك الذي استخدم في التجربة.
2. احسب مقاومة السلك إذا أعيد تشكيله ليزداد طوله للضعف، مع ثبات حجمه ودرجة حرارته.

![الشكل أ: دارة قياس السلك الفضي مع أميتر وفولتميتر.](assets/lessons/curriculum-evidence/0938822f5f6950c87699.webp)
![الشكل ب: منحنى فرق الجهد V مقابل التيار I للسلك.](assets/lessons/curriculum-evidence/33249f9d8a3ca7244060.webp)

solution:
في تحويل المساحة نربّع معامل تحويل الطول: \\(1\\,\\mathrm{mm^{2}} = 10^{-6}\\,\\mathrm{m^{2}}\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0938822f5f6950c87699.webp)

المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



![منحنى الجهد والتيار الأصلي](assets/lessons/curriculum-evidence/33249f9d8a3ca7244060.webp)

من قانون أوم \\(V=IR\\)، ميل منحنى \\(V\\) مقابل \\(I\\) يساوي \\(R\\). نقرأ من الرسم \\(V=4\\,\\mathrm{V}\\) عند \\(I=2\\,\\mathrm{A}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب طول السلك من مقاومته ومقاوميته بعد تحويل المساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><mi>A</mi></mrow><mi>ρ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>125</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



بحسب المعطيات يبقى حجم السلك ودرجة حرارته ثابتين عند التشكيل. الحجم \\(AL\\) ثابت، والطول الجديد \\(2L_{1}\\)، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mn>2</mn><msub><mi>L</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mrow></math>
\`\`\`



نقسم على \\(2L_{1}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



نقسم صيغة \\(R=\\rho L/A\\) الجديدة على القديمة، فتُختصر \\(\\rho\\) الثابتة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>L</mi><mn>2</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p047-q291
title: السؤال 291 — ص 46 — السؤال الأصلي 11
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 46، السؤال 11
answer-label: الإجابة والشرح من المجموعة المصححة
body:
مقاومة كهربائية تستهلك طاقة بمعدل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>400</mn><mtext> </mtext><mrow><mi mathvariant="normal">J</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` وتعمل على فرق جهد مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، صنعت من سلك فلزي مساحة مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>\` وطوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>25</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، احسب:
1. موصلية السلك الفلزي.
2. شدة المجال الكهربي في المقاومة.
3. الكثافة الحجمية للإلكترونات الحرة في سلك المقاومة إذا كانت السرعة الانسياقية للإلكترونات الحرة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>7.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`.
solution:
المعطيات: قدرة المقاومة \\(400\\mathrm{J/s}\\)، أي \\(400\\,\\mathrm{W}\\)، وجهدها \\(100\\,\\mathrm{V}\\)، وطول السلك \\(25\\) متراً، ومساحة مقطعه \\(2.8\\times 10^{-8}\\,\\mathrm{m^{2}}\\). المطلوب الموصلية والمجال وكثافة الإلكترونات.

القدرة هي الطاقة المستهلكة كل ثانية. تربطها بالجهد والتيار العلاقة \\(P=VI\\)؛ نقسم على الجهد لإيجاد التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>P</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mn>400</mn><mn>100</mn></mfrac><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



قانون أوم يربط جهد المقاومة بالتيار \\(V=IR\\). نقسم على التيار لنجد مقاومتها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>V</mi><mi>I</mi></mfrac><mo>=</mo><mfrac><mn>100</mn><mn>4</mn></mfrac><mo>=</mo><mn>25</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



**أ. الموصلية**

مقاومة السلك المنتظم ترتبط بمقاومية مادته وطوله ومساحة مقطعه بالعلاقة \\(R=\\rho L/A\\). نضرب في \\(A\\) ونقسم على \\(L\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>R</mi><mi>A</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`



الموصلية \\(\\sigma\\) هي مقلوب المقاومية؛ لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac><mo>=</mo><mfrac><mi>L</mi><mrow><mi>R</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>25</mn><mrow><mn>25</mn><mo stretchy="false">(</mo><mn>2.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(25\\) المشتركة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>3.57</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">Ω</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`



**ب. المجال الكهربائي**

في الموصل المنتظم، شدة المجال هي فرق الجهد مقسوماً على الطول؛ نستخدم هذه العلاقة لأن الجهد والطول معلومان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>V</mi><mi>L</mi></mfrac><mo>=</mo><mfrac><mn>100</mn><mn>25</mn></mfrac><mo>=</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



**ج. كثافة الإلكترونات**

الكثافة \\(n\\) هي عدد الإلكترونات الحرة في وحدة الحجم. التيار يساوي حاصل ضرب \\(n\\) في مقدار شحنة الإلكترون \\(e\\) ومساحة المقطع \\(A\\) والسرعة الانسياقية \\(v_{d}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



نقسم على \\(eAvd\\) لعزل \\(n\\)، ونستخدم \\(e=1.6\\times 10^{-19}\\,\\mathrm{C}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>=</mo><mfrac><mi>I</mi><mrow><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>=</mo><mfrac><mn>4</mn><mrow><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>7.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نضرب المعاملات ونجمع الأسس في المقام:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn>1.6</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.8</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>7.4</mn><mo stretchy="false">)</mo><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn><mo>−</mo><mn>8</mn><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><mn>33.152</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>29</mn></mrow></msup><mo>=</mo><mn>3.3152</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>28</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>=</mo><mfrac><mn>4</mn><mrow><mn>3.3152</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>28</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>1.21</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p047-q292
title: السؤال 292 — ص 46 — السؤال الأصلي 12
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 46، السؤال 12
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت الكثافة الحجمية للإلكترونات الحرة في سلك نحاس \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8.5</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>3</mn></msup></mrow></mrow></math>\` ومساحة مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>\`، وشدة التيار المار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` ومقاوميته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، احسب ما يأتي:
أ. السرعة الانسياقية للإلكترونات الحرة.
ب. شدة المجال الكهربي المؤثرة في السلك.
solution:
كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



نحسب السرعة الانسياقية مباشرة من التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mi>I</mi><mrow><mi>n</mi><mi>e</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy="false">(</mo><mn>8.5</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mn>5.44</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></mfrac><mo>≈</mo><mn>3.68</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب كثافة التيار ثم نضربها في المقاومية لإيجاد المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mn>2</mn><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`



نستخدم قانون أوم بدلالة كثافة التيار: \\(E=\\rho J\\)، لأننا نعرف المقاومية وكثافة التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mi>ρ</mi><mi>J</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mn>8.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p047-q293
title: السؤال 293 — ص 46 — السؤال الأصلي 13
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 46، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور العلاقة بين شدة التيار الكهربي المار في موصل فلزي وفرق الجهد بين طرفيه. إذا كان طول الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>25</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` ونصف قطر مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، احسب ثابت الموصلية الكهربية للموصل.

![منحنى التيار I مقابل الجهد V مع التدريج حتى 0.4 A و40 V.](assets/lessons/curriculum-evidence/96b3796426c02307957f.webp)
solution:
المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/96b3796426c02307957f.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



يمثل المحور الرأسي التيار والأفقي الجهد. نقرأ \\(I=0.4\\,\\mathrm{A}\\) عند \\(V=40\\,\\mathrm{V}\\)؛ بقانون أوم \\(R=V/I\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>40</mn><mn>0.4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>100</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحوّل نصف القطر ونحسب مساحة المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>0.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mi>π</mi><mo stretchy="false">(</mo><mn>0.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mn>0.25</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



من \\(R=\\rho L/A\\) نضرب في \\(A\\) ونقسم على \\(L\\) لنعزل المقاومية \\(\\rho =RA/L\\). الموصلية \\(\\sigma\\) هي مقلوب المقاومية، لذا \\(\\sigma =1/\\rho =L/(RA)\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mi>L</mi><mrow><mi>R</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>25</mn><mrow><mn>100</mn><mo stretchy="false">(</mo><mn>0.25</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac><mo>≈</mo><mn>3.18</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">Ω</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p047-q294
title: السؤال 294 — ص 46 — السؤال الأصلي 14
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 46، السؤال 14
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور جزءًا من دارة كهربائية. إذا كانت قراءة الفولتميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>18</mn></mrow></math>\` فولت، فما قراءة الأميتر؟

![جزء دارة بين a وb بمقاومات 3 Ω و6 Ω و4 Ω ومقياسين.](assets/lessons/curriculum-evidence/3808939b2af7af5aba88.webp)
solution:
قانون أوم يربط فرق الجهد بين طرفي المقاومة بالتيار المار فيها. نستخدم جهد المقاومة نفسها، ثم نقسم على مقاومتها لإيجاد تيارها أو نضرب التيار في المقاومة لإيجاد الجهد.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3808939b2af7af5aba88.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



نختزل مقاومتي التوازي ثم نضيف مقاومة الأربعة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mo>×</mo><mn>6</mn></mrow><mrow><mn>3</mn><mo>+</mo><mn>6</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>18</mn><mn>9</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نستخدم نموذج المقياسين المثاليين: لا يسحب الفولتميتر تياراً ولا يضيف الأميتر مقاومة. الفولتميتر يقيس جهد الجزء كله، فنحسب تياره الكلي بقانون أوم \\(I=V/R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>18</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



جهد التوازي هو حاصل ضرب تياره الكلي في مكافئته؛ نقسمه على مقاومة فرع الأميتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>6</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::



:::exam-question
id: physics-tawjihi-2025-p047-q296
title: السؤال 296 — ص 46 — السؤال الأصلي 16
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 46، السؤال 16
answer-label: الإجابة والشرح من المجموعة المصححة
body:
فرن كهربائي مكتوب عليه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2000</mn><mtext> </mtext><mi mathvariant="normal">W</mi><mo separator="true">,</mo><mn>200</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، صنعت مقاومته من سلك فلزي مساحة مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\` وموصلية مادته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">Ω</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>\`. إذا تم تشغيله على فرق جهد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>200</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، احسب:
1. أكبر تيار كهربائي يمر في مقاومة الفرن.
2. طول السلك الفلزي الذي صنعت منه مقاومة الفرن.
3. تكاليف تشغيل الفرن الكهربائي لمدة \\(30\\) يومًا بمعدل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn></mrow></math>\` ساعات يوميًا، علمًا بأن سعر الكيلوواط ساعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn></mrow></math>\` قروش.

solution:
المعطى قدرة الفرن \\(2000\\,\\mathrm{W}\\) عند جهد \\(200\\,\\mathrm{V}\\). المطلوب تياره وطول سلك مقاومته وتكلفة تشغيله.

**أ. التيار**

القدرة هي الطاقة المستهلكة كل ثانية. تربطها بالتيار والجهد العلاقة \\(P=VI\\). نقسم على الجهد:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>P</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mn>2000</mn><mn>200</mn></mfrac><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



**ب. طول السلك**

نحسب المقاومة بقانون أوم \\(V=IR\\)، بقسمة الجهد على التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>200</mn><mn>10</mn></mfrac><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



المقاومة تعتمد على المقاومية وأبعاد السلك: \\(R=\\rho L/A\\). الموصلية \\(\\sigma\\) هي مقلوب المقاومية \\(\\rho\\)، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>L</mi><mrow><mi>σ</mi><mi>A</mi></mrow></mfrac></mrow></math>
\`\`\`



نضرب في \\(\\sigma A\\) لنعزل الطول:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mi>R</mi><mi>σ</mi><mi>A</mi></mrow></math>
\`\`\`



نحوّل مساحة المقطع؛\\(1\\,\\mathrm{mm^{2}}=10^{-6}\\,\\mathrm{m^{2}}\\)لأننا نربّع تحويل الملمتر إلى المتر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>0.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>20</mn><mo stretchy="false">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mo stretchy="false">(</mo><mn>20</mn><mo>×</mo><mn>5</mn><mo>×</mo><mn>0.2</mn><mo stretchy="false">)</mo><mo>×</mo><msup><mn>10</mn><mrow><mn>7</mn><mo>−</mo><mn>6</mn></mrow></msup><mo>=</mo><mn>200</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



**ج. التكلفة**

الكيلوواط ساعة وحدة طاقة: نضرب القدرة بالكيلوواط في زمن التشغيل بالساعات. المدة المعطاة \\(30\\) يومًا؛ إذن زمن التشغيل الكلي هو:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>2000</mn><mn>1000</mn></mfrac><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">W</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mo>=</mo><mn>3</mn><mo>×</mo><mn>30</mn><mo>=</mo><mn>90</mn><mtext> </mtext><mi mathvariant="normal">h</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mi>P</mi><mi>t</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>90</mn><mo>=</mo><mn>180</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">W</mi><mi mathvariant="normal">h</mi></mrow></mrow></math>
\`\`\`



كل كيلوواط ساعة ثمنه \\(10\\) قروش، إذن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow><mo>=</mo><mn>180</mn><mo>×</mo><mn>10</mn><mo>=</mo><mn>1800</mn><mtext> </mtext><mtext>قرش</mtext></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p048-q300
title: السؤال 300 — ص 47 — السؤال الأصلي 20
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 47، السؤال 20
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سخان كهربائي يعمل على فرق جهد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>210</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\` وينتج كمية من الحرارة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>\` في الدقيقة، احسب:
1. قدرة السخان.
2. اكتب كمية الشحنة التي تعبر مقطع سلك السخان بدلالة زمن مرور التيار \\(t\\)، على أن يُقاس \\(t\\) بالثانية.
3. طول السلك المستخدم إذا كانت مقاومة المتر الواحد منه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>30</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\`.
4. تكاليف استخدام السخان ساعتين يوميًا ولمدة أسبوع، حيث سعر الكيلوواط ساعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn></mrow></math>\` قروش.

solution:
شدة التيار هي مقدار الشحنة التي تعبر مقطع الموصل في وحدة الزمن. لذلك نضرب التيار في الزمن لإيجاد الشحنة، مع قياس الزمن بالثانية والشحنة بالكولوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>Q</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`



القدرة هي الطاقة المستهلكة في كل ثانية. للمقاومة الأومية نستخدم القدرة بدلالة الجهد والتيار، أو نعوّض من قانون أوم عندما تكون المقاومة معلومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mi>V</mi><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>R</mi></mfrac></mrow></math>
\`\`\`



القدرة هي الطاقة المنتجة في كل ثانية، لذلك \\(P=W/\\Delta t\\). الدقيقة \\(60\\,\\mathrm{s}\\)، فنقسم الحرارة المتولدة في الدقيقة على \\(60\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>30000</mn><mn>60</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mn>500</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



نحسب التيار، ثم نستخدم \\(Q=It\\) لكتابة الشحنة بدلالة الزمن \\(t\\) المقاس بالثانية، كما طلب السؤال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>500</mn><mn>210</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>50</mn><mn>21</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Q</mi><mo>=</mo><mfrac><mn>50</mn><mn>21</mn></mfrac><mi mathvariant="normal">Δ</mi><mi>t</mi><mtext> </mtext><mi mathvariant="normal">C</mi></mrow></math>
\`\`\`



نجد مقاومة السخان ثم نقسمها على مقاومة المتر الواحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><msup><mn>210</mn><mn>2</mn></msup><mn>500</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>88.2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>88.2</mn><mn>30</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>2.94</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



لحساب الطاقة بالكيلوواط ساعة نحوّل\\(500\\,\\mathrm{W}\\) إلى \\(0.5\\) كيلوواط، ونضرب في عدد ساعات التشغيل \\(2\\times 7\\). ثم نضرب الطاقة في السعر بالقروش:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mn>0.5</mn><mo>×</mo><mn>2</mn><mo>×</mo><mn>7</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mn>7</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">W</mi><mi mathvariant="normal">h</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow><mo>=</mo><mn>7</mn><mo>×</mo><mn>10</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow><mo>=</mo><mn>70</mn><mtext> </mtext><mtext>قرش</mtext></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p048-q301
title: السؤال 301 — ص 47 — السؤال الأصلي 21
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 47، السؤال 21
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور العلاقة بين شدة التيار الكهربائي المار في موصل فلزي وفرق الجهد الكهربائي بين طرفيه. إذا كان طول الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` وقطر مقطعه العرضي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، والكثافة الحجمية للإلكترونات الحرة لمادة الموصل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>n</mi><mi>e</mi></msub><mo>=</mo><mn>9</mn><mo>×</mo><msup><mn>10</mn><mn>25</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>3</mn></msup></mrow></mrow></math>\`، احسب السرعة الانسياقية للإلكترونات الحرة داخل الموصل تحت تأثير مجال كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.3</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">C</mi></mrow></mrow></math>\`.

![منحنى V مقابل I مع القيم 10 و15 و20 A و2 و3 و4 V.](assets/lessons/curriculum-evidence/cee63e7c2117b5373385.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/cee63e7c2117b5373385.webp)

كثافة التيار هي التيار لكل وحدة مساحة مقطع. ولحاملات شحنة عددها \\(n\\) في وحدة الحجم، تكون شدة التيار حاصل ضرب \\(n\\) في مقدار شحنة الحامل \\(e\\) وفي المساحة \\(A\\) والسرعة الانسياقية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>n</mi><mi>e</mi><mi>A</mi><msub><mi>v</mi><mi>d</mi></msub></mrow></math>
\`\`\`



المحور الرأسي \\(V\\) والأفقي \\(I\\)، لذا بقانون أوم \\(R=V/I\\). وحدتا المجال متكافئتان لأن الفولت=\\(\\,\\mathrm{J/C}\\) والجول=\\(\\,\\mathrm{N\\,m}\\)، فيكون \\(\\,\\mathrm{V/m}=\\,\\mathrm{N/C}\\). لذلك المجال المعطى \\(0.3\\,\\mathrm{N/C}\\) يساوي \\(0.3\\,\\mathrm{V/m}\\). في الموصل المنتظم \\(E=V/L\\)، فنستخدم \\(V=EL\\) لحساب الجهد المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>4</mn><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>E</mi><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>0.3</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نحسب التيار عند هذا الجهد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>3</mn><mn>0.2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نقسم القطر المعطى على اثنين، ثم نحسب مساحة المقطع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mi>π</mi><mo stretchy="false">(</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mn>2.25</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نقسم \\(I=neAv_{d}\\) على \\(neA\\) لإيجاد السرعة. نستخدم مقدار شحنة الإلكترون \\(e=1.6\\times 10^{-19}\\,\\mathrm{C}\\) ونحفظ قيمة المساحة دون تقريب وسيط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>15</mn><mrow><mo stretchy="false">(</mo><mn>9</mn><mo>×</mo><msup><mn>10</mn><mn>25</mn></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>19</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.25</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mfrac><mn>15</mn><mn>101.788</mn></mfrac><mo>≈</mo><mn>0.147</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p049-q303
title: السؤال 303 — ص 48 — السؤال الأصلي 23
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 48، السؤال 23
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك موصل، إذا كانت كثافة شدة التيار الكهربائي المار فيه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`، وشدة المجال الكهربائي المؤثر فيه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، احسب:
1. ثابت الموصلية لهذا السلك.
2. الطول اللازم من هذا السلك لعمل سخان كهربائي قدرته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">W</mi></mrow></mrow></math>\` ويعمل على فرق جهد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>240</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\` ومساحة مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>\`.
solution:
في تحويل المساحة نربّع معامل تحويل الطول: \\(1\\,\\mathrm{mm^{2}} = 10^{-6}\\,\\mathrm{m^{2}}\\).

المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



القدرة هي الطاقة المستهلكة في كل ثانية. للمقاومة الأومية نستخدم القدرة بدلالة الجهد والتيار، أو نعوّض من قانون أوم عندما تكون المقاومة معلومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mi>V</mi><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>R</mi></mfrac></mrow></math>
\`\`\`



الموصلية \\(\\sigma\\) هي مقلوب المقاومية \\(\\rho\\). في موصل أومي منتظم نربط كثافة التيار بالمجال، ونحسب المجال من فرق الجهد مقسومًا على طول الموصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mn>1</mn><mi>ρ</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mi>σ</mi><mi>E</mi></mrow></math>
\`\`\`



نحسب موصلية مادة السلك من كثافة التيار والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mi>J</mi><mi>E</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><mn>12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>σ</mi><mo>=</mo><mn>1.667</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><msup><mi mathvariant="normal">Ω</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`



نحوّل القدرة إلى واط ونحسب المقاومة اللازمة للسخان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mn>1.6</mn><mo>×</mo><mn>1000</mn><mo>=</mo><mn>1600</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><msup><mn>240</mn><mn>2</mn></msup><mn>1600</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>36</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



من \\(R=\\rho L/A\\) و\\(\\rho =1/\\sigma\\) نحصل على \\(R=L/(\\sigma A)\\). نضرب في \\(\\sigma A\\) لنعزل الطول، ثم نستخدم \\(A=0.6\\times 10^{-6}\\,\\mathrm{m^{2}}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mi>R</mi><mi>σ</mi><mi>A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>36</mn><mrow><mo fence="true">(</mo><mfrac><msup><mn>10</mn><mn>8</mn></msup><mn>6</mn></mfrac><mo fence="true">)</mo></mrow><mo stretchy="false">(</mo><mn>0.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نجمع أسس \\(10\\) ونختصر \\(36\\) على \\(6\\)، مع الاحتفاظ بقيمة الموصلية الدقيقة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>6</mn><mo>×</mo><mn>0.6</mn><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup><mo>=</mo><mn>360</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p049-q304
title: السؤال 304 — ص 48 — السؤال الأصلي 24
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 48، السؤال 24
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك من الحديد طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mi>π</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` وقطر مقطعه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، وصل بفرق جهد مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`. إذا كانت مقاومية الحديد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>9.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">Ω</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، احسب:
1. مقاومة سلك الحديد.
2. كثافة شدة التيار المار في السلك.
3. شدة المجال الكهربائي المؤثرة في السلك.
4. مقاومة السلك إذا أعيد تشكيله ليصبح طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>75</mn><mi mathvariant="normal">%</mi></mrow></math>\` مما كان عليه.

solution:
المقاومة تعتمد على أبعاد الموصل ومقاومية مادته: تزيد بزيادة الطول وتقل بزيادة مساحة المقطع. نستخدم هذه العلاقة لأن السؤال يغيّر الأبعاد أو يربط المقاومة بها، مع ثبات درجة الحرارة عند المقارنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>L</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



كثافة التيار هي التيار لكل وحدة مساحة مقطع؛ أي \\(J=I/A\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>I</mi><mi>A</mi></mfrac></mrow></math>
\`\`\`



الموصلية \\(\\sigma\\) هي مقلوب المقاومية \\(\\rho\\). في موصل أومي منتظم نربط كثافة التيار بالمجال، ونحسب المجال من فرق الجهد مقسومًا على طول الموصل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mi>σ</mi><mi>E</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>V</mi><mi>L</mi></mfrac></mrow></math>
\`\`\`



القطر المعطى \\(1\\,\\mathrm{mm}\\)؛ نقسمه على \\(2\\) فنجد نصف القطر \\(0.5\\,\\mathrm{mm}\\)؛ نحوّله إلى المتر ونستخدم مساحة الدائرة \\(A=\\pi r^{2}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>0.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mn>0.25</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نحسب المقاومة من المقاومية والطول والمساحة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>9.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mi>π</mi><mo stretchy="false">)</mo></mrow><mrow><mn>0.25</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>1.88</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>0.752</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب المجال من الجهد والطول. ثم نستخدم \\(J=\\sigma E\\) ومقلوب الموصلية \\(\\rho =1/\\sigma\\) فنحصل على \\(J=E/\\rho\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>6</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>3</mn><mi>π</mi></mfrac><mo>≈</mo><mn>0.9549</mn><mtext> </mtext><mrow><mi mathvariant="normal">V</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>J</mi><mo>=</mo><mfrac><mi>E</mi><mi>ρ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi mathvariant="normal">/</mi><mi>π</mi></mrow><mrow><mn>9.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>8</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>1.016</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mtext> </mtext><mrow><mi mathvariant="normal">A</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`



بحسب المعطيات يثبت الحجم والمادة ودرجة الحرارة عند التشكيل. من \\(A_{2}L_{2}=A_{1}L_{1}\\) نجد \\(A_{1}/A_{2}=L_{2}/L_{1}\\). بالتعويض في نسبة المقاومتين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>2</mn></msub><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>L</mi><mn>2</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><msub><mi>L</mi><mn>2</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`



الطول الجديد \\(75\\%\\) من القديم، أي \\(0.75\\) منه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mn>0.75</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>0.752</mn><mo stretchy="false">(</mo><mn>0.5625</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>0.423</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`

:::
`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "التيار الكهربائي والمقاومة",
  "summary": "أسئلة الكتاب بترتيب المصدر، تليها أسئلة إضافية مع الاحتفاظ باختلاف المعطيات.",
  "outcome": "مراجعة التيار الكهربائي والمقاومة من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "102 سؤالًا",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
