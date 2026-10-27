import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `
:::mcq
id: physics-book-2024-p042-review-1-1
title: أسئلة الفصل — س1/1 — الكتاب، صفحة PDF 42
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 42، أسئلة الفصل — س1/1
question: عند غلق دارة المصباح الكهربائي في المنزل، فإن الزمن اللازم لإضاءة المصباح يحدد:
- [ ] option-1 | بعدد التصادمات بين الإلكترونات في الثانية الواحدة في أسلاك التوصيل.
- [ ] option-2 | بالسرعة الانسياقية للإلكترونات الحرة في أسلاك التوصيل.
- [x] option-3 | بسرعة انتشار خطوط المجال الكهربائي في أسلاك التوصيل.
- [ ] option-4 | بالإضاءة اللحظية للمصباح الكهربائي.
explanation:
الإجابة: **بسرعة انتشار المجال الكهربائي في أسلاك التوصيل، الخيار الثالث**.

الإلكترونات موجودة أصلاً في الأسلاك والمصباح. عند غلق الدارة يصل تأثير المجال بسرعة كبيرة فتتحرك الإلكترونات القريبة من المصباح، ولا تنتظر وصول إلكترونات من البطارية. هذه السرعة تختلف عن السرعة الانسياقية البطيئة للإلكترونات.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p042-review-1-2
title: أسئلة الفصل — س1/2 — الكتاب، صفحة PDF 42
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 42، أسئلة الفصل — س1/2
question: يمثل الشكل جزءًا من دارة كهربائية؛ إذا كانت قراءة الأميتر \\(2\\,\\mathrm{A}\\)، فما قراءة الفولتميتر؟
- [ ] option-1 | \\(9\\,\\mathrm{V}\\)
- [ ] option-2 | \\(12\\,\\mathrm{V}\\)
- [x] option-3 | \\(18\\,\\mathrm{V}\\)
- [ ] option-4 | \\(24\\,\\mathrm{V}\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-2-figure-01.webp)

تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



قانون أوم يعطي \\(V=IR\\). قراءة الأميتر \\(2\\,\\mathrm{A}\\) هي تيار فرع \\(3\\,\\mathrm{\\Omega}\\)؛ نضربهما لنحسب جهد هذا الفرع:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



مقاومة \\(6\\,\\mathrm{\\Omega}\\) موصولة بالعقدتين نفسيهما، فهي على التوازي ولها الجهد نفسه \\(6\\,\\mathrm{V}\\). نحسب تيارها بقسمة الجهد على المقاومة، ثم نجمع تياري الفرعين لنجد التيار في \\(4\\,\\mathrm{\\Omega}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>6</mn></msub><mo>=</mo><mfrac><mn>6</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>6</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mo>+</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الفولتميتر يقيس جهد التوازي مع جهد المقاومة المتصلة به على التوالي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>6</mn><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/2.](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-2-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p042-review-1-3
title: أسئلة الفصل — س1/3 — الكتاب، صفحة PDF 42
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 42، أسئلة الفصل — س1/3
question: في الدارة المبينة، إذا كانت قراءة الأميتر \\(A_{1}\\) تساوي \\(5\\,\\mathrm{A}\\)، فما قراءة \\(A_{2}\\)؟
- [ ] option-1 | \\(1.5\\,\\mathrm{A}\\)
- [x] option-2 | \\(2\\,\\mathrm{A}\\)
- [ ] option-3 | \\(2.5\\,\\mathrm{A}\\)
- [ ] option-4 | \\(3\\,\\mathrm{A}\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-3-figure-01.webp)

في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



مكافئة الحمل المتوازي هي حاصل ضرب المقاومتين على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>20</mn><mo>×</mo><mn>30</mn></mrow><mrow><mn>20</mn><mo>+</mo><mn>30</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>600</mn><mn>50</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



الأميتر الأول في فرع البطارية، فيقيس مجموع التيارين في \\(20\\,\\mathrm{\\Omega}\\) و\\(30\\,\\mathrm{\\Omega}\\). نستخدم قانون أوم \\(V=IR\\) لنحسب جهد الحمل من التيار الكلي \\(5\\,\\mathrm{A}\\) ومكافئة الحمل \\(12\\,\\mathrm{\\Omega}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>60</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الأميتر الثاني في فرع الثلاثين أوم، فنقسم جهد الفرع على مقاومته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>A</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>60</mn><mn>30</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>A</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/3.](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-3-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p042-review-1-4
title: أسئلة الفصل — س1/4 — الكتاب، صفحة PDF 42
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 42، أسئلة الفصل — س1/4
question: في الدارة المبينة، قراءة الفولتميتر \\(16\\,\\mathrm{V}\\) والمفتاح \\(S\\) مفتوح؛ فكم تصبح عند غلقه؟
- [x] option-1 | \\(12\\,\\mathrm{V}\\)
- [ ] option-2 | \\(14\\,\\mathrm{V}\\)
- [ ] option-3 | \\(16\\,\\mathrm{V}\\)
- [ ] option-4 | \\(18\\,\\mathrm{V}\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-4-figure-01.webp)

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



قبل الإغلاق فرع \\(4\\,\\mathrm{\\Omega}\\) اليمنى مفتوح. تبقى \\(2\\,\\mathrm{\\Omega}\\) و\\(4\\,\\mathrm{\\Omega}\\) الوسطى على التوالي، والفولتميتر يقيس جهد \\(4\\,\\mathrm{\\Omega}\\). نستخدم قانون أوم \\(I=V/R\\) لنحسب التيار فيها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mn>16</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نستخرج جهد المصدر الذي يبقى نفسه بعد إغلاق المفتاح.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>24</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



بعد الإغلاق تصبح مقاومتا الأربعة أوم على التوازي، ونحسب الجهد عليهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow><mrow><mn>4</mn><mo>+</mo><mn>4</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>16</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mn>24</mn><mrow><mn>2</mn><mo>+</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نضرب التيار الكلي في مكافئة التوازي لنجد جهد الفولتميتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>6</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/4.](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-4-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p042-review-1-5
title: أسئلة الفصل — س1/5 — الكتاب، صفحة PDF 42
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 42، أسئلة الفصل — س1/5
question: في الدارة المبينة، قراءة الفولتميتر \\(30\\,\\mathrm{V}\\) والمفتاح \\(S\\) مفتوح؛ فكم تصبح عند غلقه؟
- [ ] option-1 | \\(30\\,\\mathrm{V}\\)
- [ ] option-2 | \\(35\\,\\mathrm{V}\\)
- [ ] option-3 | \\(40\\,\\mathrm{V}\\)
- [x] option-4 | \\(45\\,\\mathrm{V}\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-5-figure-01.webp)

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



عندما يكون المفتاح مفتوحاً لا يمر تيار في فرع \\(6\\,\\mathrm{\\Omega}\\) العلوي. الفولتميتر يقيس جهد \\(3\\,\\mathrm{\\Omega}\\)، ونستخدم قانون أوم \\(I=V/R\\) لنحسب تيارها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mn>30</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نحسب جهد المصدر من المقاومتين المتصلتين على التوالي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>6</mn><mo>+</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>9</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>90</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



بعد الإغلاق تتوازى مقاومتَا الستة أوم؛ نحسب التيار الجديد ثم جهد الثلاثة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>6</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow><mrow><mn>6</mn><mo>+</mo><mn>6</mn></mrow></mfrac><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mn>90</mn><mrow><mn>3</mn><mo>+</mo><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mn>90</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>15</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>45</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/5.](assets/lessons/physics/source-crops/physics-book-2024-p042-review-1-5-figure-01.webp)
:::

:::exam-question
id: physics-book-2024-p043-review-2-1
title: أسئلة الفصل — س2 — فرع 1 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(2\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س2 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، جد:

أ- فرق الجهد بين النقطتين \\(a\\) و\\(b\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س2 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-2-1-figure-01.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p043-review-2-1-figure-01.webp)

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



نختزل مقاومتي الستة والاثني عشر أوم؛ مكافئتهما على التوالي مع الأربعة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>6</mn><mo>×</mo><mn>12</mn></mrow><mrow><mn>6</mn><mo>+</mo><mn>12</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>72</mn><mn>18</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>4</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



الفرعان متساويان على التوازي؛ نضيف المقاومة المتصلة قبلهما. قانون أوم يربط الجهد والتيار بالمقاومة \\(V=IR\\)؛ نقسم جهد المصدر على المقاومة الكلية لنجد التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>8</mn><mo>∥</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>8</mn><mo>×</mo><mn>8</mn></mrow><mrow><mn>8</mn><mo>+</mo><mn>8</mn></mrow></mfrac><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>24</mn><mrow><mn>2</mn><mo>+</mo><mn>4</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>24</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



للفرعين الجهد نفسه والمقاومة نفسها \\(8\\,\\mathrm{\\Omega}\\)، لذلك ينقسم التيار \\(4\\,\\mathrm{A}\\) بالتساوي. نختار طرف البطارية السالب مرجعاً صفرياً للجهد، وهو الطرف الموصول بأرضي الرسم. تقع \\(b\\) فوق مكافئة \\(6\\)و\\(12\\,\\mathrm{\\Omega}\\) البالغة \\(4\\,\\mathrm{\\Omega}\\)؛ فيعطي قانون أوم جهدها بالنسبة إلى هذا المرجع:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



النقطة \\(a\\) عند موجب المصدر، فجهدها \\(24\\,\\mathrm{V}\\). فرق الجهد \\(V_{ab}\\) يعني جهد \\(a\\) مطروحاً منه جهد \\(b\\)؛ نطرح بهذا الترتيب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>24</mn><mo>−</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p043-review-2-2
title: أسئلة الفصل — س2 — فرع 2 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(2\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س2 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، جد:

ب- جهد النقطة \\(b\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س2 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-2-1-figure-01.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p043-review-2-1-figure-01.webp)

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



نختزل مقاومتي الستة والاثني عشر أوم؛ مكافئتهما على التوالي مع الأربعة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>6</mn><mo>×</mo><mn>12</mn></mrow><mrow><mn>6</mn><mo>+</mo><mn>12</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>72</mn><mn>18</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>4</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



الفرعان متساويان على التوازي؛ نضيف المقاومة المتصلة قبلهما. قانون أوم يربط الجهد والتيار بالمقاومة \\(V=IR\\)؛ نقسم جهد المصدر على المقاومة الكلية لنجد التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>8</mn><mo>∥</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>8</mn><mo>×</mo><mn>8</mn></mrow><mrow><mn>8</mn><mo>+</mo><mn>8</mn></mrow></mfrac><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>24</mn><mrow><mn>2</mn><mo>+</mo><mn>4</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>24</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



للفرعين الجهد نفسه والمقاومة نفسها \\(8\\,\\mathrm{\\Omega}\\)، لذلك ينقسم التيار \\(4\\,\\mathrm{A}\\) بالتساوي. رمز التأريض في الرسم يحدد جهد طرف البطارية السالب بصفر. تقع \\(b\\) فوق مكافئة \\(6\\)و\\(12\\,\\mathrm{\\Omega}\\) البالغة \\(4\\,\\mathrm{\\Omega}\\)، فيعطي قانون أوم \\(V=IR\\) جهدها فوق هذا المرجع:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p043-review-3-1
title: أسئلة الفصل — س3 — فرع 1 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(3\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س3 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة المجاورة، قراءة الأميتر \\(A\\) تساوي \\(3\\,\\mathrm{A}\\). جد:

أ- شدة كل من التيارين \\(I_{1}\\) و\\(I_{2}\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-3-1-figure-01.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p043-review-3-1-figure-01.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



نختار السلك السفلي مرجعاً صفرياً. تيار الفرع الأوسط \\(3\\,\\mathrm{A}\\) يمر في \\(2\\,\\mathrm{\\Omega}\\)؛ بقانون أوم \\(V=IR\\) يكون جهد العقدة العليا:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



المصدر الأيسر يرفع جهده إلى تسعة فولت، فيكون فرق الجهد على الثلاثة أوم ثلاثة فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>9</mn><mo>−</mo><mn>6</mn></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



التياران يدخلان العقدة ويخرجان معًا في الفرع الأوسط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p043-review-3-2
title: أسئلة الفصل — س3 — فرع 2 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(3\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س3 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة المجاورة، قراءة الأميتر \\(A\\) تساوي \\(3\\,\\mathrm{A}\\). جد:

ب- مقدار القوة الدافعة الكهربائية \\(\\varepsilon\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-3-1-figure-01.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p043-review-3-1-figure-01.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



نختار السلك السفلي مرجعاً صفرياً. من قانون أوم \\(V=IR\\)، جهد العقدة العليا يساوي تيار \\(2\\,\\mathrm{\\Omega}\\) مضروباً في مقاومتها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



جهد القطب الموجب للمصدر الأيسر \\(9\\,\\mathrm{V}\\)، وجهد العقدة \\(6\\,\\mathrm{V}\\)؛ فرق الجهد على \\(3\\,\\mathrm{\\Omega}\\) هو \\(9-6\\). بقانون أوم نقسم هذا الفرق على المقاومة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>9</mn><mo>−</mo><mn>6</mn></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نطرح تيار اليسار من التيار الأوسط لنجد تيار المصدر المجهول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



التيار \\(I_{2}\\)يمر من القطب الموجب للمصدر الأيمن عبر \\(4.5\\,\\mathrm{\\Omega}\\) نحو العقدة ذات الجهد \\(6\\,\\mathrm{V}\\). ينخفض الجهد بمقدار \\(I_{2}\\times 4.5\\) عبر المقاومة، لذلك يجب أن يغطي جهد المصدر جهد العقدة وهذا الهبوط معاً:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>6</mn><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p043-review-4-1
title: أسئلة الفصل — س4 — فرع 1 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(4\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س4 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة المجاورة، قراءة الفولتميتر والمفتاح \\(S\\) مفتوح \\(3.08\\,\\mathrm{V}\\)، وعند غلقه \\(2.97\\,\\mathrm{V}\\)، وقراءة الأميتر \\(1.65\\,\\mathrm{A}\\). احسب:

أ- القوة الدافعة الكهربائية للبطارية \\(\\varepsilon\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س4 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-4-1-figure-01.webp)

solution:
![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p043-review-4-1-figure-01.webp)

نفترض الفولتميتر مثاليًا، فلا يسحب تيارًا. عندما يكون المفتاح مفتوحًا لا يمر تيار في البطارية، فلا يحدث هبوط جهد \\(Ir\\) على مقاومتها الداخلية. لذلك تساوي قراءة الفولتميتر القوة الدافعة الكهربائية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>ε</mi><mo>−</mo><mi>I</mi><mi>r</mi><mo>=</mo><mi>ε</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>3.08</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`




:::

:::exam-question
id: physics-book-2024-p043-review-4-3
title: أسئلة الفصل — س4 — فرع 3 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(4\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س4 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة المجاورة، قراءة الفولتميتر والمفتاح \\(S\\) مفتوح \\(3.08\\,\\mathrm{V}\\)، وعند غلقه \\(2.97\\,\\mathrm{V}\\)، وقراءة الأميتر \\(1.65\\,\\mathrm{A}\\). احسب:

ج- المقاومة الخارجية \\(R\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س4 — فرع 3.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-4-1-figure-01.webp)

solution:
قانون أوم يربط جهد المقاومة بتيارها ومقاومتها، \\(V=IR\\). نستخدمه لإيجاد المقاومة الخارجية من جهدها والتيار المار فيها:

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p043-review-4-1-figure-01.webp)

نعتبر المقياسين مثاليين. عند إغلاق المفتاح يقيس الفولتميتر جهد طرفي البطارية، وهو نفسه جهد المقاومة الخارجية؛ لأن الأسلاك والأميتر لا يحدثان هبوطاً ملحوظاً في الجهد:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>R</mi></msub><mo>=</mo><mn>2.97</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نقسم هذا الجهد على تيار الدارة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><msub><mi>V</mi><mi>R</mi></msub><mi>I</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>2.97</mn><mn>1.65</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>1.8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p043-review-5-1
title: أسئلة الفصل — س5 — فرع 1 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(5\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س5 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل دارة تحوي مصابيح متماثلة. أجب:

أ- هل يتغير جهد المصباح \\(a\\) عند إغلاق المفتاح؟ فسر إجابتك.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-5-1-figure-01.webp)

solution:
![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p043-review-5-1-figure-01.webp)

المصباح \\(a\\) موصول بين طرفي البطارية مباشرة؛ لذلك يساوي جهده جهدها. نفترض البطارية مثالية كما في الرسم.

إغلاق المفتاح يغير فرع المصابيح \\(b\\) و\\(c\\) و\\(d\\)، لكنه لا يغير جهد طرفي البطارية؛ إذن **لا يتغير جهد \\(a\\)**.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>a</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><mi>ε</mi></mrow></math>
\`\`\`




:::

:::exam-question
id: physics-book-2024-p043-review-5-2
title: أسئلة الفصل — س5 — فرع 2 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(5\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س5 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل دارة تحوي مصابيح متماثلة. أجب:

ب- هل يتغير جهد المصباح \\(d\\) عند إغلاق المفتاح؟ فسر إجابتك.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-5-1-figure-01.webp)

solution:
![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p043-review-5-1-figure-01.webp)

نعامل البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). قبل غلق المفتاح يمر تيار الفرع في \\(b\\) ثم \\(d\\)، فهما على التوالي ومجموعهما \\(2R\\). نرمز لجهد البطارية المثالية بـ \\(\\varepsilon\\). قانون أوم يعطي تيار المسار بقسمة الجهد عليه على مقاومته؛ وهنا مقاومة الفرع \\(2R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



جهد \\(d\\) هو تياره مضروبًا في مقاومته:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>d</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mi>R</mi><mo>=</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



بعد الغلق يتصل \\(b\\) و\\(c\\) بالعقدتين نفسيهما، فهما على التوازي؛ مكافئتهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>R</mi><mo>⋅</mo><mi>R</mi></mrow><mrow><mi>R</mi><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



هذه المكافئة على التوالي مع \\(d\\)، لذا:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>3</mn><mi>R</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



يمر تيار الفرع كله في \\(d\\)، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>d</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mi>R</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



وبما أن \\(2\\varepsilon /3\\) أكبر من \\(\\varepsilon /2\\)، **يزداد جهد المصباح \\(d\\)**.
:::

:::exam-question
id: physics-book-2024-p043-review-5-3
title: أسئلة الفصل — س5 — فرع 3 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(5\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س5 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل دارة تحوي مصابيح متماثلة. أجب:

ج- ماذا يحدث لإضاءة المصباح \\(b\\) عند إغلاق المفتاح؟ فسر إجابتك.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 3.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-5-1-figure-01.webp)

solution:
![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p043-review-5-1-figure-01.webp)

نعامل البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). قبل غلق المفتاح يمر تيار الفرع في \\(b\\) ثم \\(d\\)، فهما على التوالي ومجموعهما \\(2R\\). بقانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



يمر هذا التيار في \\(b\\)، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mi>R</mi><mo>=</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



بعد الغلق يتصل \\(b\\) و\\(c\\) بالعقدتين نفسيهما، فهما على التوازي؛ مكافئتهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>R</mi><mo>⋅</mo><mi>R</mi></mrow><mrow><mi>R</mi><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



هذه المكافئة على التوالي مع \\(d\\)، لذا:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>3</mn><mi>R</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



الجهد على \\(b\\) يساوي جهد الجزء المتوازي؛ نضرب تيار الفرع في مكافئته:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><msub><mi>R</mi><mrow><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac></mrow></math>
\`\`\`



الإضاءة ترتبط بالقدرة المتحولة في المصباح. عند ثبات مقاومته \\(P=V^{2}/R\\)؛ لذا انخفاض جهده من \\(\\varepsilon /2\\) إلى \\(\\varepsilon /3\\) يقلل قدرته وإضاءته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>P</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><msub><mi>P</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>3</mn></mrow><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>
\`\`\`




:::

:::exam-question
id: physics-tawjihi-2025-p055-q337
title: مثال 7 — فرع 2 — الكتاب، صفحة PDF 37
question: مثال \\(7\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 37، مثال 7 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بطارية تخزين قوتها الدافعة \\(25\\,\\mathrm{V}\\) ومقاومتها الداخلية \\(0.2\\,\\Omega\\). احسب فرق الجهد بين طرفيها:

\\(B-\\) عندما تشحن بتيار قدره \\(8\\,\\mathrm{A}\\).

solution:
المعطى القوة الدافعة الكهربائية \\(\\varepsilon =25\\,\\mathrm{V}\\)، والمقاومة الداخلية \\(r=0.2\\,\\mathrm{\\Omega}\\)، وتيار الشحن \\(I=8\\,\\mathrm{A}\\). المطلوب جهد طرفي البطارية \\(V\\).

أثناء الشحن يدخل التيار القطب الموجب للبطارية؛ فيلزم جهد خارجي يغطي قوتها الدافعة والهبوط \\(Ir\\) في مقاومتها الداخلية. لذلك نختار صيغة الشحن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>ε</mi><mo>+</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>25</mn><mo>+</mo><mn>8</mn><mo stretchy="false">(</mo><mn>0.2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>25</mn><mo>+</mo><mn>1.6</mn><mo>=</mo><mn>26.6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



جهد الشحن أكبر من القوة الدافعة بمقدار \\(1.6\\,\\mathrm{V}\\).
:::

:::mcq
id: physics-tawjihi-2025-p050-q310
title: أسئلة الفصل — س1/6 — الكتاب، صفحة PDF 43
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س1/6
question: في الدارة المبينة المصابيح متماثلة، والمصابيح \\(a\\),\\(c\\),\\(d\\) مضاءة والمفتاح \\(S\\) مفتوح. إذا أغلق \\(S\\) فأي منها تزداد شدة إضاءته؟
- [ ] option-1 | \\(c\\)
- [ ] option-2 | \\(a\\) و\\(c\\)
- [x] option-3 | \\(c\\) و\\(d\\)
- [ ] option-4 | \\(a\\) و\\(c\\) و\\(d\\)
explanation:
![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p043-review-1-6-figure-01.webp)

نفترض البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). نرمز لجهد البطارية المثالية بـ \\(\\varepsilon\\). قبل الغلق يتصل \\(c\\)و\\(d\\) بالعقدتين نفسيهما فيكونان على التوازي؛ للمقاومتين المتساويتين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>c</mi><mi>d</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>R</mi><mo>⋅</mo><mi>R</mi></mrow><mrow><mi>R</mi><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



المصباح \\(a\\) على التوالي مع هذه المكافئة، فيمر فيه تيار الدارة كله وتجمع المقاومتان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`



قانون أوم يعطي تيار الدارة بقسمة جهد البطارية على المقاومة المكافئة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



جهد الجزء المتوازي يساوي تيار الدارة في مكافئته:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>d</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac></mrow></math>
\`\`\`



بعد الغلق يصبح \\(a\\) و\\(b\\) على التوازي أيضًا، فمكافئة الجزء الأيسر \\(R/2\\). الجزآن المتساويان على التوالي يتقاسمان جهد البطارية بالتساوي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>d</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



إذن يزداد جهد كل من \\(c\\) و\\(d\\). سطوع المصباح يرتبط بقدرته، أي الطاقة التي يستهلكها كل ثانية. القدرة \\(P=VI\\) ومع قانون أوم \\(I=V/R\\) تصبح \\(P=V^{2}/R\\). عند ثبات مقاومة المصباح، زيادة جهده تزيد قدرته؛ لذلك **تزداد إضاءة \\(c\\)و\\(d\\)**.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/6.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-1-6-figure-01.webp)
:::

:::exam-question
id: physics-tawjihi-2025-p052-q319
title: أسئلة الفصل — س4 — فرع 2 — الكتاب، صفحة PDF 43
question: أسئلة الفصل — س\\(4\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 43، أسئلة الفصل — س4 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة المجاورة، قراءة الفولتميتر والمفتاح \\(S\\) مفتوح \\(3.08\\,\\mathrm{V}\\)، وعند غلقه \\(2.97\\,\\mathrm{V}\\)، وقراءة الأميتر \\(1.65\\,\\mathrm{A}\\). احسب:

ب- المقاومة الداخلية للبطارية \\(r\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س4 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p043-review-4-1-figure-01.webp)

solution:
المعطيات: قراءة الفولتميتر \\(3.08\\,\\mathrm{V}\\) والمفتاح مفتوح، و\\(2.97\\,\\mathrm{V}\\) عند غلقه، والتيار \\(1.65\\,\\mathrm{A}\\). المطلوب المقاومة الداخلية \\(r\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p043-review-4-1-figure-01.webp)

نفترض الفولتميتر مثاليًا؛ عندما يكون المفتاح مفتوحًا لا يمر تيار في البطارية، فلا يوجد هبوط جهد على مقاومتها الداخلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><msub><mi>V</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>3.08</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



عندما تغذي البطارية الدارة، ينخفض جهد طرفيها عن قوتها الدافعة بمقدار \\(Ir\\)، وفق قانون أوم للمقاومة الداخلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



ننقل \\(Ir\\) إلى الطرف الآخر وفرق الجهد إلى الطرف المقابل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mi>r</mi><mo>=</mo><mi>ε</mi><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mi>r</mi><mo>=</mo><mn>3.08</mn><mo>−</mo><mn>2.97</mn><mo>=</mo><mn>0.11</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نقسم على التيار لإيجاد المقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>0.11</mn><mn>1.65</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>1</mn><mn>15</mn></mfrac><mtext> </mtext><mi mathvariant="normal">Ω</mi><mo>≃</mo><mn>0.0667</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::mcq
id: physics-tawjihi-2025-p047-q295
title: أسئلة الوحدة — س1/10 — الكتاب، صفحة PDF 45
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 45، أسئلة الوحدة — س1/10
question: في الدارة الكهربائية المجاورة، ما قراءة الأميتر \\(A\\)؟
- [ ] option-1 | \\(1\\,\\mathrm{A}\\)
- [ ] option-2 | \\(1.2\\,\\mathrm{A}\\)
- [ ] option-3 | \\(1.6\\,\\mathrm{A}\\)
- [x] option-4 | \\(2\\,\\mathrm{A}\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p045-unit-1-10-figure-01.webp)

تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



الأميتر المثالي مقاومته صفر. في الرسم يصل بين طرفي مقاومتي \\(4\\,\\mathrm{\\Omega}\\) مباشرة؛ لذلك يتساوى جهد الطرفين، وهذا هو القصر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>4</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



بقانون أوم \\(I=V/R\\)، لا يمر تيار في مقاومتي \\(4\\,\\mathrm{\\Omega}\\) لأن جهدهما صفر. تبقى \\(3\\,\\mathrm{\\Omega}\\) و\\(5\\,\\mathrm{\\Omega}\\) على التوالي، ويمر تيارهما كله في الأميتر. نقسم جهد المصدر على مجموعهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>16</mn><mrow><mn>3</mn><mo>+</mo><mn>5</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>16</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الوحدة — س1/10.](assets/lessons/physics/source-crops/physics-book-2024-p045-unit-1-10-figure-01.webp)
:::

:::mcq
id: physics-tawjihi-2025-p050-q306
title: السؤال 306 — ص 49 — السؤال الأصلي 1
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 49، السؤال 1
question: إذا كان اتجاه التيار الكهربائي بعكس اتجاه سهم القوة الدافعة الكهربائية للمصدر الكهربائي، فما مقدار فرق الجهد بين طرفي المصدر؟
- [x] option-1 | أكبر من \\(\\varepsilon\\)
- [ ] option-2 | أقل من \\(\\varepsilon\\)
- [ ] option-3 | يساوي \\(\\varepsilon\\)
- [ ] option-4 | صفر
explanation:
التيار المعاكس لاتجاه القوة الدافعة يشحن المصدر؛ لذلك يلزم جهد أكبر من قوته الدافعة لتجاوز مقاومته الداخلية.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/8d1b0a806eb4b8557f65.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>ε</mi><mo>+</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



نفترض أن للمصدر مقاومة داخلية موجبة \\(r>0\\)؛ الحد المضاف موجب عند مرور تيار شحن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mi>r</mi><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>&gt;</mo><mi>ε</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مصدر كهربائي ومقاومته الداخلية واتجاه التيار بين الطرفين b وa.](assets/lessons/curriculum-evidence/8d1b0a806eb4b8557f65.webp)
:::

:::mcq
id: physics-tawjihi-2025-p050-q307
title: السؤال 307 — ص 49 — السؤال الأصلي 2
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 49، السؤال 2
question: إذا كان اتجاه التيار الكهربائي بنفس اتجاه سهم القوة الدافعة الكهربائية للمصدر الكهربائي، فما مقدار فرق الجهد بين طرفي المصدر؟
- [ ] option-1 | أكبر من \\(\\varepsilon\\)
- [ ] option-2 | يساوي \\(\\varepsilon\\)
- [x] option-3 | أقل من \\(\\varepsilon\\)
- [ ] option-4 | صفر
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/abcc9cbb1528b17011f8.webp)

يبين الرسم مقاومة داخلية \\(r\\) للمصدر. عندما يمر التيار داخل المصدر مع اتجاه قوته الدافعة، يخرج من قطبه الموجب ويغذي الدارة؛ وهذه حالة التفريغ.

يمر التيار نفسه في المقاومة الداخلية، فيحدث فيها هبوط جهد \\(Ir\\). لذلك يكون جهد طرفي المصدر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>ε</mi><mo>−</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



مع مرور تيار \\(I>0\\) ومقاومة داخلية \\(r>0\\)، يكون الهبوط \\(Ir\\) موجباً:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>&lt;</mo><mi>ε</mi></mrow></math>
\`\`\`



الإجابة: أقل من \\(\\varepsilon\\)، الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مصدر كهربائي ومقاومته الداخلية واتجاه التيار بين الطرفين b وa.](assets/lessons/curriculum-evidence/abcc9cbb1528b17011f8.webp)
:::

:::mcq
id: physics-tawjihi-2025-p050-q308
title: السؤال 308 — ص 49 — السؤال الأصلي 3
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 49، السؤال 3
question: في الدارة المجاورة، عند غلق المفتاح \\(S\\)، ماذا يحدث لإضاءة المصباح \\(L\\)؟
- [ ] option-1 | تزداد
- [ ] option-2 | تقل
- [x] option-3 | تنعدم
- [ ] option-4 | تبقى ثابتة
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/dfc0db8be7a2b3d68e3b.webp)

غلق المفتاح يصل طرفي المصباح بسلك مباشر، فيجعل جهدهما متساويًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>L</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



بغياب فرق الجهد لا يمر تيار في فتيل المصباح، فتنعدم قدرته وإضاءته.

القدرة هي الطاقة المنتقلة كل ثانية. من \\(P=VI\\) وقانون أوم \\(I=V/R\\) نحصل على \\(P=V^{2}/R\\)؛ نعوض بجهد المصباح الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>L</mi></msub><mo>=</mo><mfrac><msubsup><mi>V</mi><mi>L</mi><mn>2</mn></msubsup><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>L</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة مصابيح K وL وM ومفتاح S وبطارية.](assets/lessons/curriculum-evidence/dfc0db8be7a2b3d68e3b.webp)
:::

:::mcq
id: physics-tawjihi-2025-p050-q309
title: السؤال 309 — ص 49 — السؤال الأصلي 4
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 49، السؤال 4
question: في الشكل المجاور، ثلاثة مصابيح متماثلة، ماذا يحدث لإضاءة كل من المصباحين \\(B,C\\) بعد غلق المفتاح \\(S\\)؟
- [ ] option-1 | ينطفئ \\(C\\) وتقل إضاءة \\(B\\).
- [x] option-2 | ينطفئ \\(C\\) وتزداد إضاءة \\(B\\).
- [ ] option-3 | تزيد إضاءة \\(C\\) وتقل إضاءة \\(B\\).
- [ ] option-4 | ينطفئ \\(C\\) وتبقى إضاءة \\(B\\) كما هي.
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/6c275d671083cadd61fe.webp)

نفترض البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). عند غلق المفتاح يصبح طرفا \\(C\\) موصولين بسلك مباشر؛ فينعدم فرق الجهد عليه، فلا يمر فيه تيار وينطفئ.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>C</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



قبل الغلق كانت المصابيح الثلاثة على التوالي. بعد الغلق يبقى \\(A\\) و\\(B\\) فقط في مسار التيار، فتقل المقاومة الكلية. بقانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>&gt;</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub></mrow></math>
\`\`\`



قدرة المصباح \\(B\\) هي \\(P=I^{2}R\\)؛ وزيادة تياره عند ثبات \\(R\\) تزيد قدرته وإضاءته. إذن **ينطفئ \\(C\\) وتزداد إضاءة \\(B\\)**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ثلاثة مصابيح A وB وC ومفتاح S ومصدر جهد.](assets/lessons/curriculum-evidence/6c275d671083cadd61fe.webp)
:::



:::mcq
id: physics-tawjihi-2025-p051-q311
title: السؤال 311 — ص 50 — السؤال الأصلي 6
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 50، السؤال 6
question: يبين الشكل المجاور ثلاثة مصابيح متماثلة، ماذا سيحدث لإضاءة المصباحين \\(x\\)، \\(y\\) عند غلق المفتاح \\(S\\)؟
- [ ] option-1 | تزداد إضاءة \\(x\\)، تزداد إضاءة \\(y\\).
- [x] option-2 | تزداد إضاءة \\(x\\)، تقل إضاءة \\(y\\).
- [ ] option-3 | تقل إضاءة \\(x\\)، تزداد إضاءة \\(y\\).
- [ ] option-4 | تقل إضاءة \\(x\\)، تقل إضاءة \\(y\\).
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/a6b194fedeefdff09e48.webp)

نفترض البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). قبل الغلق يكون \\(x\\) و\\(y\\) على التوالي ويتقاسمان جهد المصدر بالتساوي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>x</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>y</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



بعد الغلق يصبح \\(y\\) و\\(z\\) على التوازي، فمكافئتهما \\(R/2\\)؛ وهي على التوالي مع \\(x\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>3</mn><mi>R</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



جهد \\(x\\) هو التيار الكلي في مقاومته، وجهد \\(y\\) هو جهد الجزء المتوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>x</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mi>R</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>y</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac></mrow></math>
\`\`\`



بما أن \\(P=V^{2}/R\\) عند ثبات \\(R\\)، **تزداد إضاءة \\(x\\) وتقل إضاءة \\(y\\)**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مصابيح X وY وZ ومفتاح S وبطارية.](assets/lessons/curriculum-evidence/a6b194fedeefdff09e48.webp)
:::

:::mcq
id: physics-tawjihi-2025-p051-q312
title: السؤال 312 — ص 50 — السؤال الأصلي 7
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 50، السؤال 7
question: في الشكل المجاور ماذا يحدث لقراءة الأميتر عند فتح المفتاح \\(S\\)؟
- [ ] option-1 | تنعدم
- [ ] option-2 | تبقى ثابتة
- [x] option-3 | تقل
- [ ] option-4 | تزداد
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/6f1eebaa4b438cad3156.webp)

المطلوب أثر فتح المفتاح في تيار الدارة الذي يقيسه الأميتر. نتتبع المسار في الحالتين، مع اعتبار المصدر مثالياً كما في الرسم.

عندما يكون المفتاح مغلقاً يصل سلك مباشر بين طرفي المقاومة اليمنى، فينعدم الجهد عليها ولا تؤثر في المكافئة. تبقى مقاومة واحدة \\(R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mi>R</mi></mrow></math>
\`\`\`



عندما نفتح المفتاح يمر التيار في المقاومتين دون تفرع، فهما على التوالي وتُجمع قيمتاهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mi>R</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>
\`\`\`



قانون أوم يعطي التيار بقسمة جهد المصدر على المقاومة. يبقى الجهد \\(\\varepsilon\\) ثابتاً، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mn>2</mn></mfrac></mrow></math>
\`\`\`



إذن **تقل قراءة الأميتر، الخيار الثالث**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بمقاومتين R ومصدر ε وأميتر ومفتاح.](assets/lessons/curriculum-evidence/6f1eebaa4b438cad3156.webp)
:::

:::mcq
id: physics-tawjihi-2025-p051-q313
title: السؤال 313 — ص 50 — السؤال الأصلي 8
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 50، السؤال 8 · صياغة تعليمية معدّلة
question: جميع المقاومات في الشكل متساوية وقيمة كل منها \\(R>0\\)، والمفاتيح مثالية. من الحالات الآتية التي تجعل الدارة مغلقة ويمر فيها تيار، أيها يعطي أكبر مقاومة مكافئة؟
- [ ] option-1 | غلق \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>1</mn></msub></mrow></math>\` فقط.
- [ ] option-2 | غلق \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>\` معاً.
- [x] option-3 | غلق \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>3</mn></msub></mrow></math>\` فقط.
- [ ] option-4 | غلق \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>S</mi><mn>3</mn></msub></mrow></math>\` معاً.
explanation:
نقارن الحالات المغلقة فقط كما يطلب السؤال. التوالي يجمع المقاومات، ومقاومتان متساويتان على التوازي تعطيان \\(R/2\\).

عند غلق \\(S_{1}\\) وحده يبقى الجزء الأيمن مفتوحاً، فلا تدخل هذه الحالة في المقارنة.

عند غلق \\(S_{1}\\) و \\(S_{2}\\)، يكون الجزء الأيسر \\(R/2\\) والأيمن \\(R\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>12</mn></msub><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>+</mo><mi>R</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>R</mi></mrow></math>
\`\`\`



عند غلق \\(S_{3}\\) وحده، يمر التيار في مقاومة واحدة من كل جزء.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>3</mn></msub><mo>=</mo><mi>R</mi><mo>+</mo><mi>R</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>
\`\`\`



عند غلق \\(S_{2}\\) و \\(S_{3}\\)، يكون الأيسر \\(R\\) والأيمن \\(R/2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>23</mn></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>R</mi></mrow></math>
\`\`\`



إذن أكبر مقاومة ضمن الحالات المغلقة هي \\(2R\\)، عند غلق \\(S_{3}\\) وحده.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مجموعتا مقاومات وثلاثة مفاتيح S₁ وS₂ وS₃ وبطارية.](assets/lessons/curriculum-evidence/5f12b9bbae3957afebc4.webp)
:::

:::mcq
id: physics-tawjihi-2025-p051-q315
title: السؤال 315 — ص 50 — السؤال الأصلي 10
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 50، السؤال 10
question: في الشكل المجاور يمثل دارة كهربائية أخذت عدة قراءات للفولتميتر والأميتر من خلال تغير المقاومة \\(R\\)، فتم الحصول على العلاقة الخطية في الشكل المجاور، ماذا يمثل ميل المنحنى للخط المستقيم؟
- [ ] option-1 | \\(R+r\\)
- [ ] option-2 | \\(R-r\\)
- [ ] option-3 | \\(R\\)
- [x] option-4 | \\(r\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/79114a1a1d5c5ad53223.webp)

المحور الرأسي يمثل \\(\\varepsilon -V\\)، والأفقي يمثل التيار \\(I\\). ميل المستقيم هو التغير الرأسي مقسوماً على التغير الأفقي.

عندما يغذي المصدر الدارة يكون جهد طرفيه \\(V=\\varepsilon -Ir\\)، حيث \\(r\\) مقاومته الداخلية؛ لأن \\(Ir\\) هو هبوط الجهد فيها. نضيف \\(Ir\\) ونطرح \\(V\\) لنعيد ترتيب العلاقة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>−</mo><mi>V</mi><mo>=</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



في العلاقة \\(\\varepsilon -V=rI\\) يكون معامل \\(I\\) هو الميل، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mo stretchy="false">(</mo><mi>ε</mi><mo>−</mo><mi>V</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mi>r</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة القياس والرسم البياني ε−V مقابل I.](assets/lessons/curriculum-evidence/79114a1a1d5c5ad53223.webp)
:::

:::mcq
id: physics-tawjihi-2025-p051-q316
title: السؤال 316 — ص 50 — السؤال الأصلي 11
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 50، السؤال 11
question: ما الصيغة الرياضية التي تصف فرق الجهد بين قطبي بطارية في حالة شحن؟
- [ ] option-1 | \\(V=\\varepsilon-Ir\\)
- [x] option-2 | \\(V=\\varepsilon+Ir\\)
- [ ] option-3 | \\(V=\\varepsilon\\div Ir\\)
- [ ] option-4 | \\(V=\\varepsilon\\times Ir\\)
explanation:
الإجابة: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi><mo>=</mo><mi>ε</mi><mo>+</mo><mi>I</mi><mi>r</mi></mrow></math>\`، الخيار الثاني. حيث \\(\\varepsilon\\) القوة الدافعة، و\\(I\\) تيار الشحن، و\\(r\\) المقاومة الداخلية.

الكتاب: فرق الجهد بين قطبي المصدر في حالة الشحن، الصفحة المطبوعة \\(35\\)، صفحة \\(\\mathrm{PDF} 37\\).

> وفي هذه الحالة يكون فرق الجهد بين قطبي المصدر أكبر من القوة الدافعة الكهربائية.




hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p052-q317
title: السؤال 317 — ص 51 — السؤال الأصلي 12
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 51، السؤال 12
question: في الشكل المجاور، إذا علمت أن قراءة الفولتميتر بعد إغلاق المفتاح تساوي \\(6\\,\\mathrm{V}\\) فإن قراءته قبل إغلاق المفتاح تساوي بوحدة الفولت:
- [ ] option-1 | \\(0\\)
- [ ] option-2 | \\(6\\)
- [x] option-3 | \\(8\\)
- [ ] option-4 | \\(9\\)
explanation:
نستخدم قانون أوم \\(V=IR\\) لإيجاد التيار، ثم نربط جهد البطارية بقوتها الدافعة ومقاومتها الداخلية.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/5e9c25399863a3743086.webp)

بعد غلق المفتاح يكون جهد الستة فولت على المقاومة الخارجية ذات الثلاثة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>6</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



عندما تغذي البطارية الدارة ينخفض جهد طرفيها بمقدار \\(Ir\\)؛ أي \\(V=\\varepsilon -Ir\\). ننقل هذا الهبوط للطرف الآخر لإيجاد \\(\\varepsilon =V+Ir\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>6</mn><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نفترض الفولتميتر مثاليًا؛ قبل الإغلاق لا يمر تيار، فلا يوجد هبوط داخلي، فتساوي قراءة الفولتميتر القوة الدافعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![بطارية بمقاومة داخلية 1 أوم ومقاومة خارجية 3 أوم وفولتميتر ومفتاح.](assets/lessons/curriculum-evidence/5e9c25399863a3743086.webp)
:::

:::mcq
id: physics-tawjihi-2025-p052-q318
title: السؤال 318 — ص 51 — السؤال الأصلي 13
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 51، السؤال 13
question: بطارية تخزين، قوتها الدافعة الكهربائية \\(20\\,\\mathrm{V}\\)، ومقاومتها الداخلية \\(0.2\\,\\Omega\\)، ما فرق الجهد بين طرفيها عندما تشحن بتيار مقداره \\(6\\,\\mathrm{A}\\)، بوحدة الفولت؟
- [ ] option-1 | \\(0\\)
- [ ] option-2 | \\(18.8\\)
- [ ] option-3 | \\(20\\)
- [x] option-4 | \\(21.2\\)
explanation:
المعطى \\(\\varepsilon =20\\,\\mathrm{V}\\) و\\(r=0.2\\,\\mathrm{\\Omega}\\) و\\(I=6\\,\\mathrm{A}\\). أثناء الشحن يدخل التيار القطب الموجب، فيلزم جهد خارجي يغطي القوة الدافعة والهبوط \\(Ir\\) في المقاومة الداخلية. لذلك نضيف هذا الهبوط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>ε</mi><mo>+</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



نعوّض بالقيم المعطاة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>20</mn><mo>+</mo><mn>6</mn><mo stretchy="false">(</mo><mn>0.2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>20</mn><mo>+</mo><mn>1.2</mn><mo>=</mo><mn>21.2</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p052-q320
title: السؤال 320 — ص 51 — السؤال الأصلي 15
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 51، السؤال 15
question: يمثل الشكل المجاور التغيرات في الجهود عبر دارة كهربائية بسيطة، فما الهبوط في الجهد الكهربائي عبر البطارية بوحدة الفولت؟
- [x] option-1 | \\(2\\)
- [ ] option-2 | \\(8\\)
- [ ] option-3 | \\(10\\)
- [ ] option-4 | \\(12\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/ee7e86af61f291ad34c8.webp)

نقرأ من الرسم أن المصدر يرفع الجهد إلى \\(6\\,\\mathrm{V}\\)، ثم تهبط قيمته عبر المقاومة الداخلية إلى \\(4\\,\\mathrm{V}\\).

المطلوب مقدار الهبوط **الداخلي** في البطارية، وهو الفرق بين هذين المستويين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mi>r</mi><mo>=</mo><mn>6</mn><mo>−</mo><mn>4</mn><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



إذن الخيار الأول صحيح. أما جهد طرفي البطارية فهو \\(4\\,\\mathrm{V}\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى الجهد الكهربائي عند نقاط الدارة مع البطارية والمقاومتين r وR.](assets/lessons/curriculum-evidence/ee7e86af61f291ad34c8.webp)
:::

:::mcq
id: physics-tawjihi-2025-p052-q321
title: السؤال 321 — ص 51 — السؤال الأصلي 16
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 51، السؤال 16
question: يمثل الشكل المجاور منحنى التغيرات في الجهد عبر دارة كهربائية بسيطة، ما مقدار المقاومة الخارجية \\(R\\) بوحدة الأوم علمًا بأن المقاومة الداخلية \\(r\\) تساوي \\(1\\) أوم؟
- [x] option-1 | \\(2\\)
- [ ] option-2 | \\(3\\)
- [ ] option-3 | \\(4\\)
- [ ] option-4 | \\(6\\)
explanation:
قانون أوم يربط هبوط الجهد على المقاومة بتيارها: \\(V=IR\\). نستخدمه أولاً للمقاومة الداخلية المعلومة، ثم للمقاومة الخارجية المطلوبة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ee6deca632dabadc6ad9.webp)

الهبوط على المقاومة الداخلية هو الفرق بين تسعة وستة فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mi>r</mi><mo>=</mo><mn>9</mn><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mi>r</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نعرف المقاومة الداخلية، فنحسب تيار الدارة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>3</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الهبوط الخارجي ستة فولت؛ نقسمه على التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>6</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بسيطة ومنحنى الجهد الكهربائي وفيه المستويان 9 V و6 V.](assets/lessons/curriculum-evidence/ee6deca632dabadc6ad9.webp)
:::

:::mcq
id: physics-tawjihi-2025-p052-q322
title: السؤال 322 — ص 51 — السؤال الأصلي 17
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 51، السؤال 17
question: يمثل الشكل المجاور جزءًا من دارة كهربائية، شدة التيار المار فيها \\(3\\,\\mathrm{A}\\)، ما مقدار القدرة الداخلة بين النقطتين \\(a,b\\) بوحدة الواط؟
- [ ] option-1 | \\(30\\)
- [ ] option-2 | \\(150\\)
- [ ] option-3 | \\(180\\)
- [x] option-4 | \\(210\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/70a96bd9a48a88950043.webp)

المعطى تيار \\(3\\,\\mathrm{A}\\) يمر من \\(a\\) إلى \\(b\\). المطلوب القدرة الداخلة إلى هذا الجزء وفق تعريف الكتاب.

القدرة هي الطاقة المنتقلة في وحدة الزمن. يعرف الكتاب القدرة الداخلة بأنها ما يصل عبر الطرفين مضافاً إليه ما تزوده المصادر الموافقة لاتجاه التيار. وبحفظ الطاقة تساوي ما تتحول إليه الطاقة داخل الجزء: حرارة في المقاومات وطاقة مخزنة في المصادر التي تُشحن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><msub><mi>P</mi><mrow><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>+</mo><msub><mi>P</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">g</mi></mrow></msub></mrow></math>
\`\`\`



المقاومات \\(10\\)و\\(4\\)و\\(6\\,\\mathrm{\\Omega}\\) على التوالي، فيمر فيها التيار نفسه. قدرة التسخين في مقاومة هي \\(I^{2}R\\)؛ لذلك نجمع المقاومات ونضرب في مربع التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>10</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>20</mn><mo stretchy="false">)</mo><mo>=</mo><mn>180</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



مصدر \\(10\\,\\mathrm{V}\\) قطبه الموجب إلى اليسار، فيدخل التيار قطبه الموجب، أي يُشحن. تخزين الطاقة لكل وحدة شحنة يساوي \\(10\\,\\mathrm{V}\\)؛ بضربه في التيار، وهو الشحنة لكل ثانية، نجد قدرته الممتصة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mi>I</mi><mi>ε</mi><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>30</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>180</mn><mo>+</mo><mn>30</mn><mo>=</mo><mn>210</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



الإجابة:\\(210\\,\\mathrm{W}\\)، الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![جزء من دارة بين a وb يتضمن ثلاث مقاومات وبطاريتين وتيارًا 3 A.](assets/lessons/curriculum-evidence/70a96bd9a48a88950043.webp)
:::

:::mcq
id: physics-tawjihi-2025-p052-q323
title: السؤال 323 — ص 51 — السؤال الأصلي 18
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 51، السؤال 18 · صياغة تعليمية معدّلة
question: في الدارة بالشكل، البطاريتان مثاليتان والطرفان \\(A\\) و \\(B\\) مفتوحان. القوة الدافعة للمصدر الأيسر \\(16\\,\\mathrm{V}\\) وقطبه الموجب أعلى، والمصدر الأيمن \\(4\\,\\mathrm{V}\\) وقطبه الموجب عند \\(B\\). مقاومات الحلقة اليسرى \\(2\\) و \\(6\\) و \\(4\\,\\mathrm{\\Omega}\\) كما في الشكل، والمقاومة بين العقدة العليا و \\(A\\) تساوي \\(10\\,\\mathrm{\\Omega}\\). احسب \\(V_{\\mathrm{AB}}=V_{A}-V_{B}\\) بالفولت.
- [ ] option-1 | \\(0\\)
- [ ] option-2 | \\(2\\)
- [x] option-3 | \\(4\\)
- [ ] option-4 | \\(6\\)
explanation:
لا يمر تيار في الفرع المنتهي عند \\(A\\) لأنه مفتوح؛ لذلك لا يحدث هبوط جهد على مقاومته \\(10\\,\\mathrm{\\Omega}\\). كذلك لا يمر تيار في الفرع المنتهي عند \\(B\\).

تبقى المقاومات \\(2\\) و \\(6\\) و \\(4\\,\\mathrm{\\Omega}\\) على التوالي في الحلقة اليسرى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>16</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نختار جهد العقدة السفلية \\(d\\) صفراً. جهد العقدة العليا، ومن ثم \\(A\\)، يساوي الارتفاع عبر \\(6\\,\\mathrm{\\Omega}\\) عكس اتجاه تيارها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>A</mi></msub><mo>=</mo><mn>6</mn><mi>I</mi><mo>=</mo><mn>6</mn><mrow><mo fence="true">(</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



قطب مصدر \\(4\\,\\mathrm{V}\\) الموجب عند \\(B\\)؛ لذلك يكون \\(B\\) أعلى من \\(d\\) بأربعة فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>B</mi></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi>A</mi></msub><mo>−</mo><msub><mi>V</mi><mi>B</mi></msub><mo>=</mo><mn>8</mn><mo>−</mo><mn>4</mn><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الإجابة: \\(4\\,\\mathrm{V}\\)، أي إن جهد \\(A\\) أعلى من جهد \\(B\\) بأربعة فولت.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بمصدرين ومقاومات بين النقطتين A وB.](assets/lessons/curriculum-evidence/380d9133bfbf1567c3ca.webp)
:::

:::mcq
id: physics-tawjihi-2025-p053-q324
title: السؤال 324 — ص 52 — السؤال الأصلي 19
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 52، السؤال 19
question: عند إغلاق المفتاح \\(S\\) في الشكل المجاور ماذا يحدث لقراءة كل من الأميتر والفولتميتر على الترتيب؟
- [ ] option-1 | تزداد، تزداد
- [ ] option-2 | تقل، تبقى ثابتة
- [x] option-3 | تزداد، تقل
- [ ] option-4 | تزداد، تبقى ثابتة
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/52614cc896af638de5e3.webp)

المطلوب مقارنة التيار الكلي وجهد الطرفين. للبطارية في الرسم مقاومة داخلية \\(r\\)، ومقاومة الحمل هي \\(R_{\\mathrm{load}}\\). يمر تيار الدارة في مجموعهما، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>+</mo><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



غلق المفتاح يضيف مقاومة مساوية على التوازي، فتقل مقاومة الحمل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi><mo separator="true">,</mo><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi><mo separator="true">,</mo><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



تقل المقاومة الخارجية من \\(R\\) إلى \\(R/2\\)؛ فيقل مقام علاقة التيار \\(\\varepsilon /(r+R_{\\mathrm{load}})\\)، فتزداد قراءة الأميتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>↑</mo></mrow></math>
\`\`\`



زيادة التيار تزيد الهبوط الداخلي، فتقل قراءة جهد الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>↓</mo></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![بطارية ذات مقاومة داخلية ومقاومتان R ومقياسا تيار وجهد ومفتاح.](assets/lessons/curriculum-evidence/52614cc896af638de5e3.webp)
:::

:::mcq
id: physics-tawjihi-2025-p053-q325
title: السؤال 325 — ص 52 — السؤال الأصلي 20
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 52، السؤال 20
question: في الشكل المجاور دارة كهربائية تتكون من أربعة مصابيح متماثلة \\(K,M,N,L\\) وبطارية ومفتاح والمصابيح الأربعة تشع ضوءًا، ماذا يحدث لشدة إضاءة \\(L\\) عند غلق المفتاح \\(S\\)؟
- [ ] option-1 | تقل
- [ ] option-2 | تبقى ثابتة
- [x] option-3 | تنعدم
- [ ] option-4 | تزداد
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/92a61a713e2241e12a6c.webp)

غلق المفتاح يصل طرفي المصباح بسلك مباشر، فيصبحان عند الجهد نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>L</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



تنعدم القدرة في فتيله، لذلك ينطفئ.

القدرة هي الطاقة المنتقلة كل ثانية. من \\(P=VI\\) وقانون أوم \\(I=V/R\\) نحصل على \\(P=V^{2}/R\\)؛ نعوض بجهد المصباح الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>L</mi></msub><mo>=</mo><mfrac><msubsup><mi>V</mi><mi>L</mi><mn>2</mn></msubsup><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>L</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![أربعة مصابيح K وM وN وL ومفتاح S وبطارية.](assets/lessons/curriculum-evidence/92a61a713e2241e12a6c.webp)
:::

:::mcq
id: physics-tawjihi-2025-p053-q326
title: السؤال 326 — ص 52 — السؤال الأصلي 21
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 52، السؤال 21
question: يبين الشكل المجاور دارة كهربائية تحوي مصابيح متماثلة، ماذا يحدث لإضاءة المصباح \\(b\\) عند إغلاق المفتاح \\(S\\)؟
- [x] option-1 | تقل
- [ ] option-2 | تنعدم
- [ ] option-3 | تبقى ثابتة
- [ ] option-4 | تزداد
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/5d4778f78eea2092ea31.webp)

نعامل البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). قبل غلق المفتاح يمر تيار الفرع في \\(b\\) ثم \\(d\\)، فهما على التوالي ومجموعهما \\(2R\\). بقانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



يمر هذا التيار في \\(b\\)، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mi>R</mi><mo>=</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



بعد الغلق يتصل \\(b\\) و\\(c\\) بالعقدتين نفسيهما، فهما على التوازي؛ مكافئتهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>R</mi><mo>⋅</mo><mi>R</mi></mrow><mrow><mi>R</mi><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



هذه المكافئة على التوالي مع \\(d\\)، لذا:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>3</mn><mi>R</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



الجهد على \\(b\\) يساوي جهد الجزء المتوازي؛ نضرب تيار الفرع في مكافئته:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><msub><mi>R</mi><mrow><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac></mrow></math>
\`\`\`



الإضاءة ترتبط بالقدرة المتحولة في المصباح. عند ثبات مقاومته \\(P=V^{2}/R\\)؛ لذا انخفاض جهده من \\(\\varepsilon /2\\) إلى \\(\\varepsilon /3\\) يقلل قدرته وإضاءته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>P</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><msub><mi>P</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>3</mn></mrow><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>
\`\`\`




hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة أربعة مصابيح a وb وc وd ومفتاح S.](assets/lessons/curriculum-evidence/5d4778f78eea2092ea31.webp)
:::

:::mcq
id: physics-tawjihi-2025-p053-q327
title: السؤال 327 — ص 52 — السؤال الأصلي 22
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 52، السؤال 22
question: الدارة الكهربائية المبينة في الشكل المجاور تحتوي على أربعة مصابيح متماثلة، أي من هذه المصابيح شدة إضاءته هي الأعلى؟
- [ ] option-1 | \\(A\\)
- [ ] option-2 | \\(B\\)
- [x] option-3 | \\(C\\)
- [ ] option-4 | \\(D\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/e547d36ba2405206bfcd.webp)

نعامل مقاومة كل مصباح ثابتة ومقدارها \\(R\\). السلك الرأسي الأيمن يصل طرفي \\(D\\) مباشرة، فيصبح فرق الجهد عليه صفرًا ولا يضيء.

المصباح \\(C\\) موصول مباشرة بطرفي المصدر، بينما \\(A\\) و\\(B\\) على التوالي في فرع آخر، فيتقاسمان جهد المصدر بالتساوي. نسمّي جهد المصدر \\(V\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>A</mi></msub><mo>=</mo><msub><mi>V</mi><mi>B</mi></msub><mo>=</mo><mfrac><mi>V</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



الإضاءة تتبع القدرة؛ ومع تساوي المقاومات نستخدم \\(P=V^{2}/R\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>C</mi></msub><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>A</mi></msub><mo>=</mo><msub><mi>P</mi><mi>B</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mi>V</mi><mi mathvariant="normal">/</mi><mn>2</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



إذن **\\(C\\) أشد إضاءة**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![أربعة مصابيح A وB وC وD مع التوصيلات ومصدر الجهد.](assets/lessons/curriculum-evidence/e547d36ba2405206bfcd.webp)
:::

:::mcq
id: physics-tawjihi-2025-p053-q328
title: السؤال 328 — ص 52 — السؤال الأصلي 23
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 52، السؤال 23
question: يبين الشكل المجاور خمسة مصابيح متماثلة في ثلاث دارات كهربائية، وصلت مع بطاريات متماثلة مقاومتها الداخلية مهملة. ما الترتيب التصاعدي للدارات الكهربائية وفق قراءة الأميتر \\(A\\) في كل منها؟
- [ ] option-1 | \\(1>2>3\\)
- [ ] option-2 | \\(1>3>2\\)
- [x] option-3 | \\(3>1>2\\)
- [ ] option-4 | \\(3=2=1\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/0dd4e17e669b305b1060.webp)

البطاريات متماثلة ومقاومتها الداخلية مهملة. نعتمد مقاومة ثابتة \\(R\\) لكل مصباح.

الدارة \\(1\\) فيها مصباح واحد؛ الدارة \\(2\\) فيها مصباحان على التوالي، فتُجمع مقاومتاهما؛ والدارة \\(3\\) فيها مصباحان على التوازي، فتكون مكافئتهما \\(R^{2}/(2R)=R/2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>3</mn></msub><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



بقانون أوم \\(I=\\varepsilon /R\\)، يكون التيار أكبر كلما قلت المقاومة عند ثبات الجهد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>ε</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mi>R</mi></mfrac></mrow></math>
\`\`\`



الترتيب التصاعدي: **\\(I_{2}<I_{1}<I_{3}\\)**؛ وهو نفسه ترتيب الخيار الثالث المكتوب \\(3>1>2\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ثلاث دارات مرقمة 1 و2 و3 بمصابيح وأميترات وبطاريات.](assets/lessons/curriculum-evidence/0dd4e17e669b305b1060.webp)
:::

:::mcq
id: physics-tawjihi-2025-p053-q329
title: السؤال 329 — ص 52 — السؤال الأصلي 24
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 52، السؤال 24
question: في الشكل المجاور، ما مقدار المقاومة المكافئة بين النقطتين \\(a,b\\)؟
- [ ] option-1 | \\(2\\)
- [ ] option-2 | \\(3\\)
- [ ] option-3 | \\(6\\)
- [x] option-4 | \\(4\\)
explanation:
تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/84d2ae98f7045ce29f24.webp)



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



السلك الأيسر يجعل القمتين العلوية والسفلية عند جهد الطرف الأول؛ لذلك تتوازى المقاومتان العموديتان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>15</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow><mrow><mn>15</mn><mo>+</mo><mn>10</mn></mrow></mfrac><mo>=</mo><mfrac><mn>150</mn><mn>25</mn></mfrac><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



هذه المكافئة على التوالي مع \\(4\\,\\mathrm{\\Omega}\\). الفرعان الآخران،\\(8\\,\\mathrm{\\Omega}\\) و\\(40\\,\\mathrm{\\Omega}\\)، يتصلان مباشرة بين الطرفين \\(a\\)و\\(b\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب مكافئة الفروع الثلاثة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>40</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>4</mn></mrow><mn>40</mn></mfrac><mo>=</mo><mfrac><mn>10</mn><mn>40</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![شبكة مقاومات بشكل معين بين a وb تتضمن 15 Ω و10 Ω و4 Ω و8 Ω و40 Ω.](assets/lessons/curriculum-evidence/84d2ae98f7045ce29f24.webp)
:::

:::mcq
id: physics-tawjihi-2025-p054-q330
title: السؤال 330 — ص 53 — السؤال الأصلي 25
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 53، السؤال 25
question: في الدارة الكهربائية المجاورة، إذا احترقت فتيلة أحد المصباحين المتماثلين، ماذا يحدث لقراءة الفولتميتر؟
- [x] option-1 | تزداد
- [ ] option-2 | تقل
- [ ] option-3 | تنعدم
- [ ] option-4 | تبقى ثابتة
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/d15aedec5276270de438.webp)

الفولتميتر يقيس جهد طرفي البطارية، ولها مقاومة داخلية \\(r\\) في الرسم.

قبل احتراق الفتيلة يمر تيار \\(I\\) في الدارة وفي المقاومة الداخلية. يحدث فيها هبوط جهد \\(Ir\\)؛ لذلك يكون جهد الطرفين أقل من القوة الدافعة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



المصباحان على التوالي؛ احتراق فتيلة أحدهما يقطع المسار، فينعدم التيار بعد الاستقرار. نفترض الفولتميتر مثالياً فلا يسحب تياراً:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



يزول الهبوط الداخلي، فيصبح جهد الطرفين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mi>ε</mi></mrow></math>
\`\`\`



إذن **تزداد قراءة الفولتميتر، الخيار الأول**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مصباحان وبطارية ذات مقاومة داخلية وفولتميتر.](assets/lessons/curriculum-evidence/d15aedec5276270de438.webp)
:::

:::mcq
id: physics-tawjihi-2025-p054-q331
title: السؤال 331 — ص 53 — السؤال الأصلي 26
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 53، السؤال 26
question: في الدارة الكهربائية المبينة في الشكل المجاور، إذا علمت أن قدرة المقاومة \\(4\\,\\Omega\\) تساوي \\(16\\,\\mathrm{W}\\)، فما فرق الجهد بين النقطتين \\(a,b\\) بوحدة الفولت؟
- [ ] option-1 | \\(2\\)
- [x] option-2 | \\(4\\)
- [ ] option-3 | \\(8\\)
- [ ] option-4 | \\(12\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/9abb2dd334b218d38b95.webp)

القدرة المستنفدة في مقاومة \\(P=I^{2}R\\)؛ نستخدمها لأن قدرة \\(4\\,\\mathrm{\\Omega}\\) معلومة. نقسم على \\(R\\) ثم نأخذ الجذر لإيجاد مقدار التيار؛ واتجاهه في المقاومة من \\(c\\) إلى \\(d\\) بحسب سهم الحلقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><msqrt><mfrac><mi>P</mi><mi>R</mi></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><msqrt><mfrac><mn>16</mn><mn>4</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



فرق الجهد بين العقدتين الوسطيتين يساوي جهد هذه المقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>d</mi></mrow></msub><mo>=</mo><mi>I</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



لا يمر تيار في فرعي الطرفين \\(a\\)و\\(b\\) المفتوحين؛ لذلك لا هبوط على \\(10\\,\\mathrm{\\Omega}\\) ويكون \\(V_{b}=V_{d}\\). مصدر \\(4\\,\\mathrm{V}\\) قطبه الموجب عند \\(c\\)، فيجعل \\(V_{a}=V_{c}-4\\). نطرح جهد \\(b\\) منجهد \\(a\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo stretchy="false">(</mo><msub><mi>V</mi><mi>c</mi></msub><mo>−</mo><mn>4</mn><mo stretchy="false">)</mo><mo>−</mo><msub><mi>V</mi><mi>d</mi></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>c</mi><mi>d</mi></mrow></msub><mo>−</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>8</mn><mo>−</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة تتضمن مصدري 12 V و4 V ومقاومات R و4 Ω و10 Ω ونقطتي a وb.](assets/lessons/curriculum-evidence/9abb2dd334b218d38b95.webp)
:::

:::mcq
id: physics-tawjihi-2025-p054-q332
title: السؤال 332 — ص 53 — السؤال الأصلي 27
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 53، السؤال 27
question: يمثل الشكل المجاور جزءًا من دارة كهربائية يسري فيها تيار كهربائي مقداره \\(2\\,\\mathrm{A}\\)، فما جهد النقطة \\(a\\) بوحدة الفولت؟
- [ ] option-1 | \\(12\\)
- [ ] option-2 | \\(9\\)
- [ ] option-3 | \\(3\\)
- [x] option-4 | \\(11\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/623d44329adbba078f46.webp)

نعد جهد الأرض عند \\(b\\) صفرًا. عند عبور مقاومة مع التيار ينخفض الجهد بمقدار \\(IR\\)، وعند عبور البطارية من سالبها إلى موجبها يرتفع بمقدار \\(\\varepsilon\\). نتحرك من \\(a\\) نحو \\(b\\) مع التيار. ينخفض الجهد على التسعة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>V</mi><mrow><mn>9</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>9</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>V</mi><mrow><mn>9</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



البطارية ترفع الجهد ثمانية فولت، ثم ينخفض فولت واحد على مقاومتها الداخلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>V</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mn>8</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>V</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mn>7</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نساوي جهد النهاية بجهد الأرض ونحل لجهد البداية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><mn>18</mn><mo>+</mo><mn>7</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>18</mn><mo>−</mo><mn>7</mn><mo>=</mo><mn>11</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![جزء دارة بين a وb المؤرضة فيه مقاومة 9 Ω وبطارية 8 V ومقاومة داخلية 0.5 Ω.](assets/lessons/curriculum-evidence/623d44329adbba078f46.webp)
:::

:::mcq
id: physics-tawjihi-2025-p054-q333
title: السؤال 333 — ص 53 — السؤال الأصلي 28
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 53، السؤال 28
question: ماذا يحدث لمقدار القدرة المستنفدة في الدارة المجاورة عند غلق المفتاح \\(S\\)؟
- [x] option-1 | تزداد
- [ ] option-2 | تبقى ثابتة
- [ ] option-3 | تقل
- [ ] option-4 | تصبح صفرًا
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/3e15ae57d5ea4fe4132a.webp)

نقارن المقاومة الكلية في الحالتين، مع اعتبار المصدر مثالياً كما في الرسم.

المفتاح المفتوح يترك المقاومات الثلاث في مسار واحد دون تفرع، فهي على التوالي وتُجمع قيمها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mi>R</mi><mo>+</mo><mi>R</mi><mo>=</mo><mn>3</mn><mi>R</mi></mrow></math>
\`\`\`



عند غلق المفتاح يصل السلك بين العقدة السفلية اليسرى والعقدة العلوية اليمنى. يصبح فرق الجهد بينهما صفراً، فلا يمر تيار في المسار الذي يحتوي المقاومتين اليمنى والسفلية. تبقى المقاومة اليسرى في مسار المصدر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mi>R</mi></mrow></math>
\`\`\`



القدرة هي الطاقة المستنفدة في كل ثانية. للمقاومات \\(P=VI\\)، وبالتعويض عن \\(I\\) منقانون أوم \\(I=V/R\\)، نحصل على \\(P=V^{2}/R\\). نستخدمها لأن جهد المصدر ثابت ونقارن المقاومة الكلية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mi>R</mi></mfrac><mo>=</mo><mn>3</mn><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub></mrow></math>
\`\`\`



إذن **تزداد القدرة المستنفدة، الخيار الأول**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بثلاث مقاومات R ومفتاح قطري S وبطارية.](assets/lessons/curriculum-evidence/3e15ae57d5ea4fe4132a.webp)
:::

:::mcq
id: physics-tawjihi-2025-p054-q334
title: السؤال 334 — ص 53 — السؤال الأصلي 29
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 53، السؤال 29
question: الشكل المجاور يمثل جزءًا من دارة كهربائية، ما قيمة \\(V_{ab}\\) بوحدة الفولت؟
- [x] option-1 | صفر
- [ ] option-2 | \\(10\\)
- [ ] option-3 | \\(20\\)
- [ ] option-4 | \\(15\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/b2c3f42843d11a441de8.webp)

الأميتر موصول مباشرة بين \\(a\\)و\\(b\\)، لذلك فرق الجهد المطلوب هو جهد الأميتر نفسه.

الأميتر المثالي مقاومته صفر. بقانون أوم، فرق الجهد على عنصر يساوي تياره مضروباً في مقاومته:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mi>A</mi></msub><msub><mi>R</mi><mi>A</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



إذن الإجابة **صفر، الخيار الأول**. لا يؤثر اتجاه سهم التيار في النتيجة لأن مقاومة الأميتر صفر.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مصدر 10 V ومقاومة 2 Ω وأميتر يقرأ 5 A والطرفان a وb.](assets/lessons/curriculum-evidence/b2c3f42843d11a441de8.webp)
:::

:::mcq
id: physics-tawjihi-2025-p054-q335
title: السؤال 335 — ص 53 — السؤال الأصلي 30
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 53، السؤال 30
question: في الشكل المجاور، دارة كهربائية تحتوي مصابيح متماثلة، أي من هذه المصابيح تزداد شدة إضاءته عند إغلاق المفتاح \\(S\\)؟
- [ ] option-1 | \\(a\\)
- [ ] option-2 | \\(a,b\\)
- [x] option-3 | \\(b,d\\)
- [ ] option-4 | \\(a,d\\)
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/4e4a917c3522cd245494.webp)

نفترض البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). على التوالي يمر التيار نفسه دون تفرع، فتُجمع المقاومات. وعلى التوازي يتصل الفرعان بالعقدتين نفسيهما، ولمقاومتين تكون المكافئة حاصل ضربهما على مجموعهما. قبل الغلق يكون \\(c\\)و\\(b\\) على التوالي بمكافئة \\(2R\\)، وهذا الفرع يوازي \\(a\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">p</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mo separator="true">,</mo><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>R</mi><mo stretchy="false">(</mo><mn>2</mn><mi>R</mi><mo stretchy="false">)</mo></mrow><mrow><mi>R</mi><mo>+</mo><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



المصباح \\(d\\) على التوالي مع هذا الحمل كله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mo separator="true">,</mo><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mrow><mn>2</mn><mi>R</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>R</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



نستخدم قانون أوم \\(I=V/R\\)؛ نقسم جهد البطارية \\(\\varepsilon\\) على المقاومة الكلية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mi>ε</mi></mrow><mrow><mn>5</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



جهد الحمل المتوازي هو التيار الكلي في مكافئته، ويتقاسمه \\(b\\) و\\(c\\) بالتساوي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">p</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mo separator="true">,</mo><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mi>ε</mi></mrow><mrow><mn>5</mn><mi>R</mi></mrow></mfrac><mfrac><mrow><mn>2</mn><mi>R</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mn>5</mn></mfrac></mrow></math>
\`\`\`



بعد الغلق يقصر السلك المصباح \\(c\\)، فيبقى \\(b\\) وحده موازيًا لـ \\(a\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">p</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mo separator="true">,</mo><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mo separator="true">,</mo><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mi>R</mi><mo>+</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac><mo>&gt;</mo><mfrac><mrow><mn>3</mn><mi>ε</mi></mrow><mrow><mn>5</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



الإضاءة ترتبط بالقدرة المتحولة في المصباح، أي الطاقة المتحولة في كل ثانية. للمقاومة الثابتة \\(P=I^{2}R\\)؛ لذلك زيادة التيار الكلي المار في \\(d\\) تزيد قدرته وإضاءته. أما جهد \\(b\\) فيصبح:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mo separator="true">,</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac><mo>&gt;</mo><mfrac><mi>ε</mi><mn>5</mn></mfrac></mrow></math>
\`\`\`



من \\(P_{b}=V_{b}^{2}/R\\) تزداد قدرة \\(b\\) أيضًا. إذن **تزداد إضاءة \\(b\\) و\\(d\\)**.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة مصابيح a وb وc وd ومفتاح S.](assets/lessons/curriculum-evidence/4e4a917c3522cd245494.webp)
:::

:::mcq
id: physics-tawjihi-2025-p054-q336
title: السؤال 336 — ص 53 — السؤال الأصلي 31
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 53، السؤال 31
question: ما مقدار المقاومة المكافئة لمجموعة المقاومات الموصولة بين النقطتين \\(a,b\\) في الشكل المجاور، بوحدة الأوم؟
- [x] option-1 | \\(2\\)
- [ ] option-2 | \\(4\\)
- [ ] option-3 | \\(8\\)
- [ ] option-4 | \\(6\\)
explanation:
المطلوب المقاومة المكافئة بين \\(a\\) و\\(b\\). في الرسم توجد مقاومة \\(7\\,\\mathrm{\\Omega}\\) تصل بين عقدتين داخليتين.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/91191ba9271e874564e9.webp)

نتحقق أولًا من فرق الجهد بين هاتين العقدتين، بدل حذف المقاومة لمجرد شكل الرسم. نفترض جهد \\(a\\) يساوي \\(V\\) وجهد \\(b\\) يساوي صفرًا.

نجرّب تيارًا صفريًا في مقاومة \\(7\\,\\mathrm{\\Omega}\\)؛ عندها ينفصل الفرعان الداخليان، ونحسب جهد كل عقدة من قانون أوم.

في الفرع العلوي مقاومتان \\(2\\) و\\(4\\,\\mathrm{\\Omega}\\) على التوالي؛ يمر بهما التيار نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mfrac><mi>V</mi><mrow><mn>2</mn><mo>+</mo><mn>4</mn></mrow></mfrac><mo>=</mo><mfrac><mi>V</mi><mn>6</mn></mfrac></mrow></math>
\`\`\`



جهد العقدة العليا بالنسبة إلى \\(b\\) هو جهد مقاومة \\(4\\,\\mathrm{\\Omega}\\) اليمنى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mn>4</mn><mfrac><mi>V</mi><mn>6</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>V</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



في الفرع القطري مقاومتان \\(4\\) و\\(8\\,\\mathrm{\\Omega}\\) على التوالي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">d</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mfrac><mi>V</mi><mrow><mn>4</mn><mo>+</mo><mn>8</mn></mrow></mfrac><mo>=</mo><mfrac><mi>V</mi><mn>12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>8</mn><mfrac><mi>V</mi><mn>12</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>V</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



الجهدان متساويان؛ إذن فرض عدم مرور تيار في مقاومة \\(7\\,\\mathrm{\\Omega}\\) يحقق الدارة فعلًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>7</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub></mrow><mn>7</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



تبقى ثلاثة فروع بين النقطتين نفسيهما: \\(6\\,\\mathrm{\\Omega}\\) و\\(12\\,\\mathrm{\\Omega}\\) و\\(4\\,\\mathrm{\\Omega}\\). في التوازي نجمع مقلوبات المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![شبكة مقاومات تتضمن مقاومة وسطية 7 Ω بين الطرفين a وb.](assets/lessons/curriculum-evidence/91191ba9271e874564e9.webp)
:::



:::mcq
id: physics-tawjihi-2025-p055-q338
title: السؤال 338 — ص 54 — السؤال الأصلي 33
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 54، السؤال 33
question: يمثل الشكل المجاور جزءًا من دارة كهربائية، فكم تكون قراءة الأميتر بوحدة الأمبير؟
- [ ] option-1 | \\(1\\)
- [ ] option-2 | \\(2\\)
- [x] option-3 | صفر
- [ ] option-4 | \\(1.5\\)
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/7d5fc95787429b0ef51c.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



عند العقدة العلوية يدخل أمبير واحد من المقاومة المائلة ويخرج أمبير واحد نحو اليمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



حفظ الشحنة لا يترك تيارًا يمر في الفرع الرأسي الذي يحتوي الأميتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>0</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ثلاث مقاومات 3 Ω وأميتر وتيارات محددة 2 A و1 A عند الوصلات.](assets/lessons/curriculum-evidence/7d5fc95787429b0ef51c.webp)
:::

:::mcq
id: physics-tawjihi-2025-p055-q339
title: السؤال 339 — ص 54 — السؤال الأصلي 34
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 54، السؤال 34
question: في الشكل المجاور ما مقدار المقاومة المكافئة بين النقطتين \\(a,b\\) بوحدة أوم؟
- [ ] option-1 | \\(24\\)
- [x] option-2 | \\(4\\)
- [ ] option-3 | \\(6\\)
- [ ] option-4 | \\(12\\)
explanation:
المطلوب المقاومة المكافئة بين النقطتين \\(a\\) و\\(b\\)، وجميع المقاومات في الرسم بوحدة الأوم.

![الرسم الأصلي للسؤال](assets/lessons/curriculum-evidence/0cc93d89c02f0ee4d7b7.webp)

نعد الأسلاك مثالية، أي مقاومتها صفر. لذلك تتصل القمة العليا والقمة السفلى بالنقطة \\(a\\) من دون مقاومة بينهما، فتكون كلها عقدة واحدة.

نسمي نقطة التقاء المقاومات في وسط الرسم \\(m\\). المقاومتان العموديتان، كل منهما \\(12\\,\\mathrm{\\Omega}\\)، تتصلان بين العقدتين \\(m\\) و\\(a\\) نفسيهما؛ إذن هما على التوازي. في التوازي يتساوى الجهد، وتجمع التيارات، لذلك نجمع مقلوبات المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



في المسار الأوسط من \\(b\\) إلى \\(a\\)، تمر الشحنة في مقاومة \\(2\\,\\mathrm{\\Omega}\\) ثم في المكافئة \\(6\\,\\mathrm{\\Omega}\\). هاتان على التوالي، أي يمر فيهما التيار نفسه؛ لذلك نجمع مقاومتيهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>6</mn><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



أصبحت بين \\(a\\) و\\(b\\) ثلاثة فروع: \\(24\\,\\mathrm{\\Omega}\\)، و\\(12\\,\\mathrm{\\Omega}\\)، و\\(8\\,\\mathrm{\\Omega}\\). لأنها تتصل بالعقدتين نفسيهما، نطبق التوازي مرة أخرى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`



نوحد المقامات إلى \\(24\\)، ثم نجمع ونبسط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn></mrow><mn>24</mn></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>24</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`



نأخذ مقلوب الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



الإجابة: \\(4\\,\\mathrm{\\Omega}\\)، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![شبكة مقاومات بشكل معين مع التوصيلات بين a وb.](assets/lessons/curriculum-evidence/0cc93d89c02f0ee4d7b7.webp)
:::

:::mcq
id: physics-tawjihi-2025-p055-q340
title: السؤال 340 — ص 54 — السؤال الأصلي 35
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 54، السؤال 35
question: يبين الشكل أربع مصابيح متماثلة، إذا انقطع فتيل المصباح \\(3\\) فأي الآتية صحيح؟
- [x] option-1 | تزداد إضاءة المصباح \\(4\\)، وتقل إضاءة المصباح \\(1\\).
- [ ] option-2 | تقل إضاءة المصباح \\(4\\)، وتقل إضاءة المصباح \\(2\\).
- [ ] option-3 | تقل إضاءة المصباح \\(4\\)، وتزداد إضاءة المصباح \\(2\\).
- [ ] option-4 | تزداد إضاءة المصباح \\(4\\)، وتزداد إضاءة المصباح \\(2\\).
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/49ec9283fd944dbbfa0f.webp)

نفترض البطارية مثالية ومقاومة كل مصباح ثابتة ومقدارها \\(R\\). قبل انقطاع فتيل \\(3\\)، كل زوج من المصابيح على التوازي بمكافئة \\(R/2\\)، والزوجان على التوالي. لذلك يتقاسمان جهد المصدر بالتساوي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>1</mn><mo separator="true">,</mo><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi></mrow></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mn>4</mn><mo separator="true">,</mo><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi></mrow></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



بعد الانقطاع يفتح فرع \\(3\\) ويبقى \\(4\\) وحده في المجموعة اليمنى، بينما تبقى \\(1\\)و\\(2\\) على التوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mo separator="true">,</mo><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>+</mo><mi>R</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>R</mi></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`



بقانون أوم، التيار الكلي الجديد:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mn>3</mn><mi>R</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



جهد \\(4\\) هو التيار في \\(R\\)، وجهد \\(1\\) هو جهد مكافئة الزوج الأيسر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>4</mn><mo separator="true">,</mo><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mi>R</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mn>1</mn><mo separator="true">,</mo><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mfrac><mi>R</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac></mrow></math>
\`\`\`



مع ثبات المقاومة، القدرة \\(P=V^{2}/R\\). لذا **تزداد إضاءة \\(4\\) وتقل إضاءة \\(1\\)**، الخيار الأول.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![أربعة مصابيح مرقمة 1 إلى 4 موزعة على مجموعتين.](assets/lessons/curriculum-evidence/49ec9283fd944dbbfa0f.webp)
:::

:::mcq
id: physics-tawjihi-2025-p055-q341
title: السؤال 341 — ص 54 — السؤال الأصلي 36
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 54، السؤال 36؛ تصنيف أسئلة الفيزياء توجيهي 2025، ص 50، السؤال 9
question: في الدارة الكهربائية المجاورة، إذا كانت قراءة الفولتميتر \\(24\\,\\mathrm{V}\\) والمفتاح \\(S\\) مغلقًا، فكم تصبح قراءته عند فتح المفتاح؟
- [ ] option-1 | \\(16\\,\\mathrm{V}\\)
- [ ] option-2 | \\(20\\,\\mathrm{V}\\)
- [ ] option-3 | \\(24\\,\\mathrm{V}\\)
- [x] option-4 | \\(30\\,\\mathrm{V}\\)
explanation:
نستخدم قانون أوم \\(V=IR\\) لإيجاد تيار الحمل، ثم نستخرج جهد المصدر الثابت ونحسب القراءة بعد فتح المفتاح.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3b6a81e82d44e34eb0f9.webp)

عند غلق المفتاح تتصل مقاومتا \\(6\\,\\mathrm{\\Omega}\\) بالعقدتين نفسيهما فتتوازيان. لمقاومتين على التوازي \\(R_{p}=R_{1}R_{2}/(R_{1}+R_{2})\\)، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>6</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow><mrow><mn>6</mn><mo>+</mo><mn>6</mn></mrow></mfrac><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mn>24</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نستخرج جهد المصدر بإضافة هبوط الجهد على الأومين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>24</mn><mo>+</mo><mn>8</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>40</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



فتح المفتاح يترك مقاومة ستة أوم واحدة؛ نحسب جهدها الجديد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mn>40</mn><mrow><mn>2</mn><mo>+</mo><mn>6</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mfrac><mn>40</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>30</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة بمقاومة 2 Ω ومقاومتين 6 Ω وفولتميتر ومفتاح S.](assets/lessons/curriculum-evidence/3b6a81e82d44e34eb0f9.webp)
:::

:::mcq
id: physics-tawjihi-2025-p055-q342
title: السؤال 342 — ص 54 — السؤال الأصلي 37
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 54، السؤال 37
question: في الدارة الكهربائية المجاورة، إذا كانت قراءة الفولتميتر \\(V\\) تساوي \\(20\\) فولت، فما قراءة الأميتر \\(A\\)؟
- [ ] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`
explanation:
المعطى قراءة الفولتميتر \\(20\\,\\mathrm{V}\\)، والمطلوب قراءة الأميتر \\(A\\).

![الرسم الأصلي للسؤال](assets/lessons/curriculum-evidence/d719b6ee21e97ff23853.webp)

نستخدم نموذج المقياسين المثاليين: الفولتميتر لا يسحب تيارًا، والأميتر مقاومته صفر.

المقاومتان \\(20\\,\\mathrm{\\Omega}\\) على التوازي؛ لأن طرفيهما متصلان بالعقدتين نفسيهما. الفولتميتر بين هاتين العقدتين، لذلك الجهد على كل مقاومة منهما \\(20\\,\\mathrm{V}\\).

قانون أوم يربط جهد المقاومة \\(V\\) بتيارها \\(I\\) ومقاومتها \\(R\\): التيار يساوي الجهد مقسومًا على المقاومة. نطبقه على كل فرع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>20</mn><mn>20</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>20</mn><mn>20</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الأميتر قبل التفرع؛ فيقيس التيار الكلي الذي يتوزع على الفرعين. نجمع التيارين لأن الشحنة لا تتراكم عند العقدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الإجابة: \\(2\\,\\mathrm{A}\\)، الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مقاومة 10 Ω ومقاومتان 20 Ω وأميتر وفولتميتر وبطارية.](assets/lessons/curriculum-evidence/d719b6ee21e97ff23853.webp)
:::

:::mcq
id: physics-tawjihi-2025-p056-q343
title: السؤال 343 — ص 55 — السؤال الأصلي 38
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 55، السؤال 38
question: في الدارة الكهربائية المبينة في الشكل المجاور إذا كانت القدرة المستنفدة في المقاومة \\(R_1\\) تساوي \\(20\\,\\mathrm{W}\\)، بإهمال المقاومة الداخلية للقوة الدافعة الكهربائية، فما مقدار المقاومة \\(R_2\\)؟
- [ ] option-1 | \\(0.5\\,\\Omega\\)
- [x] option-2 | \\(4\\,\\Omega\\)
- [ ] option-3 | \\(5\\,\\Omega\\)
- [ ] option-4 | \\(14\\,\\Omega\\)
explanation:
المقاومتان على التوالي، فيمر فيهما التيار نفسه. القدرة المستنفدة في مقاومة \\(P=I^{2}R\\)؛ نستخدم قدرة \\(R_{1}=5\\,\\mathrm{\\Omega}\\) لإيجاد مقدار التيار، بقسمة \\(P\\) على \\(R\\) ثم أخذ الجذر الموجب.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ccd716e837784e009da4.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><msqrt><mfrac><mn>20</mn><mn>5</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نهمل المقاومة الداخلية، فيكون جهد المقاومتين \\(18\\,\\mathrm{V}\\). بقانون أوم \\(R_{\\mathrm{total}}=V/I\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mfrac><mn>18</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>9</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نطرح المقاومة المعلومة لنجد المقاومة الثانية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>9</mn><mo>−</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![دارة مقاومتي R₁=5 Ω وR₂ ومصدر جهد 18 V.](assets/lessons/curriculum-evidence/ccd716e837784e009da4.webp)
:::

:::exam-question
id: physics-tawjihi-2025-p057-q344
title: السؤال 344 — ص 56 — السؤال الأصلي 1
question: السؤال الثاني (التيار الكهربائي): أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بالهبوط في الجهد؟
solution:
الإجابة: الهبوط في جهد البطارية هو مقدار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi><mi>r</mi></mrow></math>\` المستنفد في مقاومتها الداخلية أثناء التفريغ؛ وهو الفرق بين قوتها الدافعة وجهد طرفيها.

الكتاب: فرق الجهد بين قطبي المصدر؛الهبوط في الجهد، الصفحة المطبوعة \\(34\\)، صفحة \\(\\mathrm{PDF} 36\\).

> ويسمى المقدار \\((I \\times  r)\\) الهبوط في الجهد.




:::

:::exam-question
id: physics-tawjihi-2025-p057-q345
title: السؤال 345 — ص 56 — السؤال الأصلي 1
question: السؤال الثاني (التيار الكهربائي): أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بقولنا: إن القوة الدافعة الكهربائية تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn></mrow></math>\` فولت.
solution:
القوة الدافعة الكهربائية هي الشغل الذي يبذله المصدر لكل وحدة شحنة ينقلها داخله من السالب إلى الموجب. لذلك فإن \\(5\\,\\mathrm{V}\\) تعني **\\(5\\,\\mathrm{J}\\) لكل كولوم**.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>W</mi><mi>Q</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mi>ε</mi><mi>Q</mi><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p057-q346
title: السؤال 346 — ص 56 — السؤال الأصلي 2
question: السؤال الثاني (التيار الكهربائي): أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بالقوة الدافعة الكهربائية تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn></mrow></math>\` فولت؟
solution:
القوة الدافعة الكهربائية هي الشغل الذي يبذله المصدر لكل وحدة شحنة ينقلها داخله من السالب إلى الموجب. لذلك فإن \\(2\\,\\mathrm{V}\\) تعني **\\(2\\,\\mathrm{J}\\) لكل كولوم**.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>W</mi><mi>Q</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mi>ε</mi><mi>Q</mi><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p057-q347
title: السؤال 347 — ص 56 — السؤال الأصلي 3
question: السؤال الثاني (التيار الكهربائي): أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بالقوة الدافعة الكهربائية لبطارية ما تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>9</mn></mrow></math>\` فولت؟
solution:
القوة الدافعة الكهربائية هي الشغل الذي يبذله المصدر لكل وحدة شحنة ينقلها داخله من السالب إلى الموجب. لذلك فإن \\(9\\,\\mathrm{V}\\) تعني **\\(9\\,\\mathrm{J}\\) لكل كولوم**.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>W</mi><mi>Q</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mi>ε</mi><mi>Q</mi><mo>=</mo><mn>9</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>9</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p057-q348
title: السؤال 348 — ص 56 — السؤال الأصلي 4
question: السؤال الثاني (التيار الكهربائي): أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بالقوة الدافعة الكهربائية؟
solution:
الإجابة: القوة الدافعة الكهربائية: الشغل الذي يبذله المصدر لنقل وحدة الشحنة الموجبة داخله من القطب السالب إلى الموجب.

الكتاب: القوة الدافعة الكهربائية، الصفحة المطبوعة \\(27\\)، صفحة \\(\\mathrm{PDF} 29\\).

> مقدار الشغل الذي تبذله البطارية في نقل وحدة الشحنات الموجبة من القطب السالب إلى القطب الموجب




:::

:::exam-question
id: physics-tawjihi-2025-p057-q349
title: السؤال 349 — ص 56 — السؤال الأصلي 5
question: السؤال الثاني (التيار الكهربائي): أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بالقوة الدافعة الكهربائية تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`؟
solution:
القوة الدافعة الكهربائية هي الشغل الذي يبذله المصدر لكل وحدة شحنة ينقلها داخله من السالب إلى الموجب. لذلك فإن \\(12\\,\\mathrm{V}\\) تعني **\\(12\\,\\mathrm{J}\\) لكل كولوم**.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>W</mi><mi>Q</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mi>ε</mi><mi>Q</mi><mo>=</mo><mn>12</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p057-q350
title: السؤال 350 — ص 56 — السؤال الأصلي 1
question: السؤال الثاني (التيار الكهربائي): ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: القدرة المستنفدة في المقاومات الخارجية أقل من القدرة الناتجة من البطارية.
solution:
للبطارية مقاومة داخلية \\(r\\) يمر فيها التيار، فيتحول جزء من القدرة إلى حرارة داخلها. القدرة هي الطاقة في كل ثانية. قدرة البطارية \\(\\varepsilon I\\)، والقدرة الحرارية في مقاومة تساوي \\(I^{2}\\)مضروباً في قيمتها. إذا كانت مكافئة الحمل الخارجي \\(R\\)، فإن حفظ الطاقة يعطي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mi>I</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi><mo>+</mo><msup><mi>I</mi><mn>2</mn></msup><mi>r</mi></mrow></math>
\`\`\`



إذن القدرة التي تصل للمقاومة الخارجية أقل من قدرة البطارية بمقدار القدرة الداخلية \\(I^{2}r\\)، عندما \\(I\\ne 0\\) و\\(r>0\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mi>ε</mi><mi>I</mi><mo>−</mo><msup><mi>I</mi><mn>2</mn></msup><mi>r</mi><mo>&lt;</mo><mi>ε</mi><mi>I</mi></mrow></math>
\`\`\`




:::

:::exam-question
id: physics-tawjihi-2025-p057-q351
title: السؤال 351 — ص 56 — السؤال الأصلي 2
question: السؤال الثاني (التيار الكهربائي): ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: قراءة الفولتميتر الموصول بين قطبي البطارية في دارة مغلقة قد تكون أكبر أو أقل من قوتها الدافعة الكهربائية.
solution:
للبطارية مقاومة داخلية \\(r\\). أثناء **التفريغ** يستهلك التيار جزءًا من قوتها الدافعة داخلها، فيقل جهد الطرفين بمقدار \\(Ir\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">d</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



أثناء **الشحن** يدفع المصدر الخارجي التيار عكس اتجاه القوة الدافعة للبطارية، فيغطي جهده القوة الدافعة والهبوط الداخلي معًا:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mi>ε</mi><mo>+</mo><mi>I</mi><mi>r</mi></mrow></math>
\`\`\`



لذلك قد تكون قراءة الفولتميتر أقل من \\(\\varepsilon\\) في التفريغ وأكبر منها في الشحن.
:::

:::exam-question
id: physics-tawjihi-2025-p057-q352
title: السؤال 352 — ص 56 — السؤال الأصلي 3
question: السؤال الثاني (التيار الكهربائي): ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: يهبط فرق الجهد بين طرفي بعض البطاريات عنه عندما كانت مفتوحة.
solution:
والدارة مفتوحة لا يمر تيار في البطارية، فلا يوجد هبوط على مقاومتها الداخلية؛ ويكون جهد طرفيها مساويًا لقوتها الدافعة \\(\\varepsilon\\).

عند توصيل حمل وتفريغ البطارية يمر تيار، فيحدث هبوط داخلي مقداره \\(Ir\\)، فينقص جهد طرفيها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mi>I</mi><mi>r</mi><mo>&lt;</mo><mi>ε</mi></mrow></math>
\`\`\`



وذلك عند وجود مقاومة داخلية موجبة وتيار غير صفري.
:::

:::exam-question
id: physics-tawjihi-2025-p057-q353
title: السؤال 353 — ص 56 — السؤال الأصلي 4
question: السؤال الثاني (التيار الكهربائي): ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: قياس مقدار مقاومة مجهولة باستخدام قانون أوم يكون أقل دقة من استخدام قنطرة ويتستون.
solution:
في ترتيب قياس يوصل فيه الفولتميتر عبر المقاومة المجهولة، قد يقرأ الأميتر مجموع تيارها وتيار الفولتميتر. الفولتميتر الحقيقي يسحب تيارًا صغيرًا، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><msub><mi>I</mi><mi>R</mi></msub><mo>+</mo><msub><mi>I</mi><mi>V</mi></msub></mrow></math>
\`\`\`



إذا قسمنا الجهد على قراءة الأميتر، نحصل على مقاومة أصغر من الحقيقية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mi>V</mi><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>+</mo><msub><mi>I</mi><mi>V</mi></msub></mrow></mfrac><mo>&lt;</mo><mfrac><mi>V</mi><msub><mi>I</mi><mi>R</mi></msub></mfrac><mo>=</mo><mi>R</mi></mrow></math>
\`\`\`



أما قنطرة ويتستون، فهي دارة مقارنة بين أذرع تحتوي مقاومات. عند اتزانها ينعدم فرق الجهد والتيار في كاشف الاتزان؛ فنستخرج المجهولة من نسب المقاومات المعلومة دون اعتماد على قراءة تيار في الكاشف.

تتحقق أفضلية القنطرة هنا ضمن هذا الترتيب ودقة المقاومات وأجهزة القياس؛ ولا تعني أن طريقة قانون أوم أقل دقة في كل إعداد.
:::

:::exam-question
id: physics-tawjihi-2025-p057-q354
title: السؤال 354 — ص 56 — السؤال الأصلي 5
question: السؤال الثاني (التيار الكهربائي): ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: يستهلك جزء من القدرة التي تنتجها البطارية داخل البطارية نفسها.
solution:
البطارية الحقيقية تحتوي مقاومة داخلية \\(r\\). عند مرور تيار \\(I\\) تستنفد هذه المقاومة قدرة حرارية وفق \\(P=I^{2}R\\)، أي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>r</mi></mrow></math>
\`\`\`



وفق حفظ الطاقة تتوزع القدرة التي ينتجها المصدر بين المقاومتين الداخلية والخارجية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mi>I</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>r</mi><mo>+</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi></mrow></math>
\`\`\`




:::

:::exam-question
id: physics-tawjihi-2025-p057-q356
title: السؤال 356 — ص 56 — السؤال الأصلي 7
question: السؤال الثاني (التيار الكهربائي): ب- علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: لتقليل نسبة الخطأ في قياس مقاومة مجهولة باستخدام قانون أوم، يستخدم فولتميتر مقاومته كبيرة جدًا بالنسبة لمقدار المقاومة المجهولة.
solution:
الفولتميتر يوصل على التوازي مع المقاومة المجهولة، فيكون فرق الجهد عليهما نفسه \\(V\\). من قانون أوم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>V</mi></msub><mo>=</mo><mfrac><mi>V</mi><msub><mi>R</mi><mi>V</mi></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



نقسم التيارين فيُختصر الجهد:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>I</mi><mi>V</mi></msub><msub><mi>I</mi><mi>R</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>V</mi><mi mathvariant="normal">/</mi><msub><mi>R</mi><mi>V</mi></msub></mrow><mrow><mi>V</mi><mi mathvariant="normal">/</mi><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>R</mi><msub><mi>R</mi><mi>V</mi></msub></mfrac></mrow></math>
\`\`\`



إذا كانت \\(R_{V}\\) أكبر كثيرًا من \\(R\\)، يصبح تيار الفولتميتر صغيرًا جدًا مقارنة بتيار المقاومة. وفي ترتيب الأميتر الذي يقرأ مجموعهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><msub><mi>I</mi><mi>R</mi></msub><mo>+</mo><msub><mi>I</mi><mi>V</mi></msub><mo>≈</mo><msub><mi>I</mi><mi>R</mi></msub></mrow></math>
\`\`\`



فتقترب القراءة من تيار المقاومة الحقيقي، ويقل خطأ حسابها من \\(V/I_{A}\\).
:::

:::exam-question
id: physics-tawjihi-2025-p057-q357
title: السؤال 357 — ص 56 — السؤال الأصلي غير مرقم
question: السؤال الثاني (التيار الكهربائي): ج- قارن بين
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال غير مرقم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين البطارية في حالة الشحن وفي حالة التفريغ من حيث اتجاه التيار المار فيها.
solution:
الإجابة: التفريغ: التيار داخل البطارية من السالب إلى الموجب، مع سهم القوة الدافعة.

الشحن: التيار داخل البطارية من الموجب إلى السالب، عكس سهم القوة الدافعة.

الكتاب: فرق الجهد بين قطبي المصدر؛حالة التفريغ، الصفحة المطبوعة \\(34\\)، صفحة \\(\\mathrm{PDF} 36\\).

> إذا كان اتجاه التيار في المصدر بنفس اتجاه سهم القوة الدافعة للمصدر (في حالة التفريغ)




حالة الشحن: الصفحة المطبوعة \\(35\\)، صفحة \\(\\mathrm{PDF}37\\).

> إذا كان اتجاه التيار بعكس اتجاه سهم القوة الدافعة الكهربائية للمصدر (في حالة الشحن)



:::

:::exam-question
id: physics-tawjihi-2025-p057-q358
title: السؤال 358 — ص 56 — السؤال الأصلي غير مرقم
question: السؤال الثاني (التيار الكهربائي): د- وضح ماذا يحدث لكل مما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 56، السؤال غير مرقم
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح ماذا يحدث لشدة إضاءة المصباح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\` عند إغلاق المفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>S</mi></mrow></math>\` في الدارة الكهربائية المجاورة التي تحتوي مصابيح متماثلة.

![مصابيح a وb وc وd ومفتاح S ومصدر جهد.](assets/lessons/curriculum-evidence/a56f3f2ec8c7cbe77e24.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a56f3f2ec8c7cbe77e24.webp)

المفتاح عند إغلاقه يصل طرفي المصباح الداخلي بسلك مباشر، فيصبح جهدهما واحدًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



تنعدم القدرة الكهربائية في الفتيل، فينطفئ المصباح.

القدرة هي الطاقة المنتقلة كل ثانية. من \\(P=VI\\) وقانون أوم \\(I=V/R\\) نحصل على \\(P=V^{2}/R\\)؛ نعوض بالجهد الصفري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>C</mi></msub><mo>=</mo><mfrac><msubsup><mi>V</mi><mi>C</mi><mn>2</mn></msubsup><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>C</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p058-q359
title: السؤال 359 — ص 57 — السؤال الأصلي 1
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 57، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، جد:

1. شدة التيار الكهربائي المار في كل بطارية.
2. جهد النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\`.

![دارة ببطاريتي 12 V و15 V ومقاومات واتجاهات I₁ وI₂ وI ونقطة تأريض.](assets/lessons/curriculum-evidence/e475ca10f82fb9897682.webp)
solution:
المطلوب تيارات الفروع وجهد النقطة \\(a\\). نأخذ جهد نقطة التأريض صفرًا، ونلتزم بأسهم التيارات المرسومة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/e475ca10f82fb9897682.webp)

عند العقدة لا تتراكم الشحنة؛ التيار \\(I\\) يتوزع إلى \\(I_{1}\\) و \\(I_{2}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`



في الفرع الأوسط يسير \\(I_{2}\\) من الأرض صعودًا عبر مقاومة \\(2\\,\\mathrm{\\Omega}\\). الجهد ينخفض مع التيار، لذلك يكون جهد \\(a\\) سالبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>0</mn><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`



في الفرع الأيسر نبدأ من الأرض، ونعبر مصدر \\(12\\,\\mathrm{V}\\) من سالب إلى موجب ثم مقاومة \\(4\\,\\mathrm{\\Omega}\\) مع التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`



نساوي تعبيري جهد \\(a\\) ونرتب الحدود.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>12</mn><mo>−</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math>
\`\`\`



في الفرع الأيمن نسير من الأرض عكس \\(I\\) عبر المقاومة، ثم نعبر مصدر \\(15\\,\\mathrm{V}\\) من موجبه إلى سالبه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>4</mn><mi>I</mi><mo>−</mo><mn>15</mn></mrow></math>
\`\`\`



نعوّض بالتيار الكلي من قانون العقدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo stretchy="false">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy="false">)</mo><mo>−</mo><mn>15</mn><mo>=</mo><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>15</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><mn>6</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>15</mn></mrow></math>
\`\`\`



نضرب المعادلة \\(2I_{1}-I_{2}=6\\) في \\(2\\) لتسهيل حذف \\(I_{1}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>12</mn></mrow></math>
\`\`\`



نطرح هذه المعادلة من المعادلة \\(4I_{1}+6I_{2}=15\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>8</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><mo>=</mo><mn>0.375</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نعوّض في المعادلة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>0.375</mn><mo>=</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>6.375</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>3.1875</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نجمع تياري الفرعين ثم نحسب جهد \\(a\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3.1875</mn><mo>+</mo><mn>0.375</mn><mo>=</mo><mn>3.5625</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>0.375</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>0.75</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



جميع التيارات موجبة؛ إذن اتجاهاتها توافق الأسهم. النقطة \\(a\\) أقل جهدًا من الأرض بمقدار \\(0.75\\,\\mathrm{V}\\).
:::

:::exam-question
id: physics-tawjihi-2025-p058-q360
title: السؤال 360 — ص 57 — السؤال الأصلي 2
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 57، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، إذا علمت أن قراءة الجلفانوميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>G</mi></mrow></math>\` تساوي صفرًا، احسب:

1. مقدار المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
2. المقاومة المكافئة بين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow></math>\`.

![قنطرة: الذراعان العلويان0.5Rو8Ω، والسفلي الأيسر6Ω، والسفلي الأيمن(2R+7R)موازٍ لـ9R، وجلفانوميتر بين العقدتين الوسطيتين.](assets/lessons/curriculum-evidence/001a961ceb4d5287ceda.webp)
solution:
![القنطرة الأصلية](assets/lessons/curriculum-evidence/001a961ceb4d5287ceda.webp)

المطلوب قيمة \\(R\\) والمقاومة المكافئة بين \\(a\\)و\\(b\\). في الرسم المقاومة العلوية اليمنى \\(8\\,\\mathrm{\\Omega}\\)، والسفلية اليسرى \\(6\\,\\mathrm{\\Omega}\\).

**أ. قيمة \\(R\\)**

الجلفانوميتر كاشف يمر فيه تيار عند اختلاف جهدي عقدتيه. قراءته صفر هنا تعني تساوي الجهدين واتزان القنطرة.

نختزل أولاً الذراع السفلي الأيمن. تمر الشحنة نفسها في \\(2R\\)و\\(7R\\) دون تفرع بينهما، فهما على التوالي وتُجمعان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>s</mi></msub><mo>=</mo><mn>2</mn><mi>R</mi><mo>+</mo><mn>7</mn><mi>R</mi><mo>=</mo><mn>9</mn><mi>R</mi></mrow></math>
\`\`\`



هذا المسار موصول بطرفي مقاومة \\(9R\\) الأخرى، فهما على التوازي. مكافئة مقاومتين متوازيتين هي حاصل ضربهما مقسوماً على مجموعهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>9</mn><mi>R</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>9</mn><mi>R</mi><mo stretchy="false">)</mo></mrow><mrow><mn>9</mn><mi>R</mi><mo>+</mo><mn>9</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(9R\\) المشتركة غير الصفرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>9</mn><mi>R</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mn>4.5</mn><mi>R</mi></mrow></math>
\`\`\`



عند الاتزان تكون نسبتا هبوط الجهد في جانبي كل عقدة وسطية متساويتين؛ لأن العقدتين عند الجهد نفسه ويتصل المساران بطرفي الجهد نفسيهما. بتطبيق قانون أوم على أذرع القنطرة نحصل على نسبة مقاومتي اليسار إلى اليمين في كل مسار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>0.5</mn><mi>R</mi></mrow><mn>8</mn></mfrac><mo>=</mo><mfrac><mn>6</mn><mrow><mn>4.5</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



نضرب تبادلياً لإزالة المقامين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn>0.5</mn><mi>R</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4.5</mn><mi>R</mi><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2.25</mn><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>48</mn></mrow></math>
\`\`\`



نقسم على \\(2.25\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>48</mn><mn>2.25</mn></mfrac><mo>=</mo><mfrac><mn>64</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن المقاومة موجبة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><msqrt><mfrac><mn>64</mn><mn>3</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>8</mn><msqrt><mn>3</mn></msqrt></mfrac><mtext> </mtext><mi mathvariant="normal">Ω</mi><mo>≈</mo><mn>4.619</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



**ب. المقاومة المكافئة بين \\(a\\)و\\(b\\)**

تيار الجلفانوميتر صفر، فلا يؤثر فرعه في تيار الطرفين. نجمع أذرع كل مسار على التوالي، ثم نوازي المسارين. نبقي قيمة \\(R\\) الدقيقة حتى النهاية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mn>0.5</mn><mrow><mo fence="true">(</mo><mfrac><mn>8</mn><msqrt><mn>3</mn></msqrt></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><mn>8</mn><mo>=</mo><mn>8</mn><mo>+</mo><mfrac><mn>4</mn><msqrt><mn>3</mn></msqrt></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mn>6</mn><mo>+</mo><mn>4.5</mn><mrow><mo fence="true">(</mo><mfrac><mn>8</mn><msqrt><mn>3</mn></msqrt></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>6</mn><mo>+</mo><mfrac><mn>36</mn><msqrt><mn>3</mn></msqrt></mfrac><mo>=</mo><mn>6</mn><mo>+</mo><mn>12</mn><msqrt><mn>3</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub></mrow><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>+</mo><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>8</mn><mo>+</mo><mn>4</mn><mi mathvariant="normal">/</mi><msqrt><mn>3</mn></msqrt><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>6</mn><mo>+</mo><mn>12</mn><msqrt><mn>3</mn></msqrt><mo stretchy="false">)</mo></mrow><mrow><mo stretchy="false">(</mo><mn>8</mn><mo>+</mo><mn>4</mn><mi mathvariant="normal">/</mi><msqrt><mn>3</mn></msqrt><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn>6</mn><mo>+</mo><mn>12</mn><msqrt><mn>3</mn></msqrt><mo stretchy="false">)</mo></mrow></mfrac><mo>≈</mo><mn>7.444</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



إذن \\(R=8/\\sqrt{3}\\,\\mathrm{\\Omega}\\)، والمقاومة المكافئة نحو \\(7.444\\,\\mathrm{\\Omega}\\).
:::

:::exam-question
id: physics-tawjihi-2025-p058-q361
title: السؤال 361 — ص 57 — السؤال الأصلي 3
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 57، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا مثلت التغيرات في الجهد عبر الدارة الكهربائية البسيطة المبينة في الشكل بالرسم البياني المجاور لها، بالاعتماد على المعلومات المثبتة على كل منهما احسب مقدار كل من:

1. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
2. قراءة الفولتميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\`.
3. المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.

![منحنى التغيرات في الجهد الكهربائي على امتداد الدارة.](assets/lessons/curriculum-evidence/7a6bd253b40782760627.webp)
![الدارة الكهربائية التي يقابلها منحنى الجهد وفيها مصدران ومقاومة مجهولة R وفولتميتر.](assets/lessons/curriculum-evidence/2cebb34aaa1785c23c5b.webp)
solution:
قانون أوم \\(V=IR\\) يربط هبوط الجهد على المقاومة بتيارها. سنقرأ الهبوط من الرسم، ثم نستخدمه لإيجاد التيار والمقاومة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/7a6bd253b40782760627.webp)

في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



![الشكل المكمل الأصلي](assets/lessons/curriculum-evidence/2cebb34aaa1785c23c5b.webp)

الرسم يعطي القوة الدافعة المحصلة ستة وثلاثين فولت. البطارية المجهولة تساعد التيار وبطارية الأربعة عشر فولت تعاكسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>−</mo><mn>14</mn><mo>=</mo><mn>36</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>50</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الهبوط الداخلي اثنا عشر فولت موزع على مقاومتين داخليتين مجموعهما ثلاثة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>36</mn><mo>−</mo><mn>24</mn></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>12</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الجهد الخارجي أربعة وعشرون فولت؛ نستخرج مكافئته ثم نطرح المقاومة المتسلسلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mfrac><mn>24</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>6</mn><mo>−</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحل علاقة التوازي، ثم نحسب قراءة الفولتميتر عبره.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>6</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mi>I</mi><msub><mi>R</mi><mi>p</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p058-q362
title: السؤال 362 — ص 57 — السؤال الأصلي 4
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 57، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور دارة كهربائية، معتمدًا على البيانات المثبتة عليه، احسب:

1. شدة التيار المار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>I</mi><mn>3</mn></msub></mrow></math>\`.
2. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
3. فرق الجهد الكهربائي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\` عبر المسار الأوسط.

![دارة متعددة الفروع مع التيارين I₁=3 A وI₂=1 A والمصادر والمقاومات والأميتر.](assets/lessons/curriculum-evidence/b300ebd6bdb7b014ef3d.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b300ebd6bdb7b014ef3d.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



التياران المعطيان يدخلان العقدة العليا، فيساوي التيار الخارج مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn><mo>+</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



فرق الجهد \\(V_{ab}\\) يعني \\(V_{a}-V_{b}\\). نسير من \\(b\\) إلى \\(a\\) في الفرع الأوسط: نعبر المصدر من سالب إلى موجب فيرتفع الجهد \\(12\\,\\mathrm{V}\\)، ثم تعبر المقاومتين مع تيار \\(1\\,\\mathrm{A}\\) فينخفض بمقدار \\(I_{2}(6+1)\\). لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>1</mn><mo stretchy="false">(</mo><mn>6</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>1</mn><mo stretchy="false">(</mo><mn>7</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



في الفرع الأيمن ينخفض الجهد مع التيار على خمس أوم، ثم ترفعه البطارية المجهولة ذات الموجب في الأسفل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mi>ε</mi></mrow></math>
\`\`\`



لأن \\(V_{ab}=5\\,\\mathrm{V}\\)، فإن \\(V_{b}-V_{a}=-5\\,\\mathrm{V}\\). نطرح \\(V_{a}\\) من معادلة الفرع الأيمن، ثم نضيف \\(20\\) لنعزل \\(\\varepsilon\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn>5</mn><mo>=</mo><mo>−</mo><mn>4</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo>+</mo><mi>ε</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo>−</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p058-q363
title: السؤال 363 — ص 57 — السؤال الأصلي 5
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 57، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا مثلت التغيرات في الجهد عبر الدارة الكهربائية البسيطة المبينة في الشكل بالرسم البياني المجاور لها، بالاعتماد على المعلومات المثبتة على كل منهما احسب مقدار كل من:

1. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math>\`.
2. تيار الدارة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi></mrow></math>\`.
3. المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>R</mi><mn>1</mn></msub></mrow></math>\`.

![منحنى الجهد الكهربائي على امتداد الدارة.](assets/lessons/curriculum-evidence/49c12e28619d309d0260.webp)
![دارة بمصدرين ومقاومتين R₁ وR₂=8 Ω.](assets/lessons/curriculum-evidence/2d3f96d492b41e9e3957.webp)
solution:
نستخدم قانون أوم \\(V=IR\\) لربط هبوط الجهد بالتيار والمقاومة. يبين الرسم مجموع القوى الدافعة، ثم الهبوط الداخلي، ثم الهبوط على المقاومات الخارجية.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/49c12e28619d309d0260.webp)

في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



![الشكل المكمل الأصلي](assets/lessons/curriculum-evidence/2d3f96d492b41e9e3957.webp)

القوة الدافعة المحصلة من الرسم أربعة وعشرون فولت؛ المصدران متعاكسان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>−</mo><mn>34</mn><mo>=</mo><mn>24</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>58</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نقسم الهبوط الداخلي على مجموع المقاومتين الداخليتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>24</mn><mo>−</mo><mn>18</mn></mrow><mrow><mn>1</mn><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>6</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الهبوط الخارجي ثمانية عشر فولت؛ نحسب مكافئة مقاومتي التوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>18</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نستخرج المقاومة المجهولة من مقلوبات مقاومات التوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>24</mn></mfrac><mo>−</mo><mfrac><mn>3</mn><mn>24</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>24</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>24</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p059-q364
title: السؤال 364 — ص 58 — السؤال الأصلي 6
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 58، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور دارة كهربائية، معتمدًا على البيانات المثبتة على الشكل، احسب:

1. شدة التيار المار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>I</mi><mn>3</mn></msub></mrow></math>\`.
2. قراءة الفولتميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\`.
3. فرق الجهد الكهربائي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\` عبر المسار الأوسط.

![دارة ببطاريتين ومقاومات وقراءة تيار I₁=0.25 A وفولتميتر.](assets/lessons/curriculum-evidence/b2f6bfe9b463761b721d.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b2f6bfe9b463761b721d.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



نبدأ من \\(b\\) إلى \\(a\\) في الفرع الأيسر. نعبر مصدر \\(10\\,\\mathrm{V}\\) من سالب إلى موجب، ثم المقاومات مع تيار \\(0.25\\,\\mathrm{A}\\). المصدر يرفع الجهد \\(10\\,\\mathrm{V}\\)، والمقاومات تخفضه بمقدار \\(IR\\)؛ ومجموعها \\(3+1+4\\,\\mathrm{\\Omega}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>10</mn><mo>−</mo><mn>0.25</mn><mo stretchy="false">(</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>10</mn><mo>−</mo><mn>0.25</mn><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



يمر هذا الجهد عبر مقاومتي الفرع الأيمن على التوالي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>8</mn><mrow><mn>5</mn><mo>+</mo><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>8</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



التياران \\(I_{1}\\)و \\(I_{2}\\)يدخلان العقدة \\(a\\) ويخرج \\(I_{3}\\). من حفظ الشحنة \\(I_{1}+I_{2}=I_{3}\\)، فيكون \\(I_{2}=I_{3}-I_{1}\\). الفولتميتر يقيس جهد طرفي البطارية الوسطى؛ وهي تغذي الدارة، لذلك قراءته \\(\\varepsilon -I_{2}r\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>0.25</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>0.75</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>14</mn><mo>−</mo><mn>0.75</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>13.25</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p059-q365
title: السؤال 365 — ص 58 — السؤال الأصلي 7
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 58، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، بالاعتماد على البيانات المثبتة على الشكل أثبت أن:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>A</mi></msub><mo>=</mo><msub><mi>V</mi><mi>B</mi></msub><mo>=</mo><msub><mi>V</mi><mi>C</mi></msub><mi mathvariant="normal">.</mi></mrow></math>
\`\`\`



![دارة مثلثة رؤوسها A وB وC وبكل ضلع بطارية 3 V ومقاومة 2 Ω.](assets/lessons/curriculum-evidence/0770df249b8c752553ea.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0770df249b8c752553ea.webp)

تكون المقاومات على التوالي عندما يمر فيها التيار نفسه دون تفرع في العقدة المشتركة. عندئذ تتجمع فروق الجهد، فتساوي المقاومة المكافئة مجموع المقاومات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow></msub><mo>=</mo><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`



في الحلقة نختار الاتجاه الذي نعبر فيه البطاريات من سالبها إلى موجبها؛ ترفع كل واحدة الجهد \\(3\\,\\mathrm{V}\\)، فنجمع القوى الدافعة. يساوي التيار مجموع هذه القوى مقسوماً على مجموع المقاومات المتوالية. البطاريات الثلاث تساعد بعضها حول المثلث، والمقاومات الثلاث على التوالي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn></mrow><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>9</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نسير في كل ضلع مع اتجاه التيار: عبور البطارية من سالبها إلى موجبها يرفع الجهد \\(3\\,\\mathrm{V}\\)، وعبور مقاومة \\(2\\,\\mathrm{\\Omega}\\) يخفضه بمقدار \\(IR\\). الارتفاع والهبوط متساويان هنا، لذلك محصلة تغير الجهد بين رأسي كل ضلع صفر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>V</mi><mo>=</mo><mn>3</mn><mo>−</mo><mi>I</mi><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>V</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>1.5</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



يتساوى جهد كل رأس مع جهد الرأس التالي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>A</mi></msub><mo>−</mo><msub><mi>V</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>B</mi></msub><mo>−</mo><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>A</mi></msub><mo>=</mo><msub><mi>V</mi><mi>B</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>A</mi></msub><mo>=</mo><msub><mi>V</mi><mi>C</mi></msub></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p059-q366
title: السؤال 366 — ص 58 — السؤال الأصلي 8
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 58، السؤال 8
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الرسم المجاور جزءًا من دارة كهربائية، اعتمادًا على القيم المثبتة على الشكل، احسب:

1. قراءة الأميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>A</mi></mrow></math>\`.
2. القدرة الداخلة بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>c</mi><mo separator="true">,</mo><mi>a</mi></mrow></math>\`.

![جزء دارة بين c وa بتيار 4 A وثلاثة مصادر وأميتر في أحد الفروع.](assets/lessons/curriculum-evidence/18cfbb6365c4ad5e5542.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/18cfbb6365c4ad5e5542.webp)

الشحنة لا تتراكم عند العقدة، لذلك مجموع تياري الفرعين يساوي \\(4\\,\\mathrm{A}\\). نسمي تيار الفرع العلوي \\(x\\)، فيمر الباقي \\(4-x\\) في الفرع السفلي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">u</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mi>x</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">w</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>4</mn><mo>−</mo><mi>x</mi></mrow></math>
\`\`\`



الفرعان على التوازي ولهما فرق الجهد نفسه. عند السير مع التيار يخفض كل مقاوم الجهد بمقدار \\(IR\\) وفق قانون أوم، وتخفضه كل بطارية في هذين الفرعين لأننا نعبرها من موجب إلى سالب. لذلك نجمع هبوط المقاومة وقيمة القوة الدافعة في كل فرع ثم نساوي المجموعين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>8</mn><mo>+</mo><mi>x</mi><mo stretchy="false">(</mo><mn>7</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>7</mn><mo>+</mo><mo stretchy="false">(</mo><mn>4</mn><mo>−</mo><mi>x</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>8</mn><mo>+</mo><mn>8</mn><mi>x</mi><mo>=</mo><mn>7</mn><mo>+</mo><mn>12</mn><mo>−</mo><mn>3</mn><mi>x</mi></mrow></math>
\`\`\`



نجمع حدود \\(x\\) في طرف والأعداد في الطرف الآخر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>8</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo>=</mo><mn>19</mn><mo>−</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>11</mn><mi>x</mi><mo>=</mo><mn>11</mn></mrow></math>
\`\`\`



نحل لإيجاد تيار الأميتر ثم فرق الجهد المشترك.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">p</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>8</mn><mo>+</mo><mn>1</mn><mo stretchy="false">(</mo><mn>7</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نجمع الهبوط من الطرف الأول إلى الأخير، مع طرح ارتفاع جهد المصدر الأيمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>a</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>16</mn><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>−</mo><mn>7</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>a</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>16</mn><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>−</mo><mn>7</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>a</mi></mrow></msub><mo>=</mo><mn>33</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



القدرة هي الطاقة المنتقلة في كل ثانية. القدرة الداخلة وفق تعريف الكتاب تشمل \\(I\\times V_{\\mathrm{ca}}\\) عبر الطرفين، مضافاً إليها \\(I\\times \\varepsilon\\) للمصدر \\(7\\,\\mathrm{V}\\) الذي يساعد التيار، لأن التيار يدخل قطبه السالب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>33</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>7</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>160</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p059-q368
title: السؤال 368 — ص 58 — السؤال الأصلي 10
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 58، السؤال 10
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة أوجد شدة التيارات \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>I</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>\`.

![دارة بمصدر 6 V ومقاومات 3 Ω و6 Ω و4 Ω والتيارات I₁ وI₂ وI₃.](assets/lessons/curriculum-evidence/3f46f6d7289dadc2128e.webp)
solution:
نستخدم قانون أوم \\(V=IR\\) لربط الجهد بالتيار؛ وبعد اختزال المقاومات نحسب التيار بقسمة الجهد على المقاومة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3f46f6d7289dadc2128e.webp)

في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



مقاومتا الثلاثة والستة أوم بين العقدتين نفسيهما، فنختزلهما ثم نضيف الأربعة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow><mrow><mn>3</mn><mo>+</mo><mn>6</mn></mrow></mfrac><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب تيار المصدر، وهو التيار المتجه إلى المقاومة العليا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>6</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



جهد الجزء المتوازي يساوي فولتَين، فنحسب تيار كل فرع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



للتأكد من حفظ الشحنة عند العقدة \\(C\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p059-q369
title: السؤال 369 — ص 58 — السؤال الأصلي 11
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 58، السؤال 11
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الرسم المجاور جزءًا من دارة كهربائية، فإذا علمت أن فرق الجهد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>d</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، اعتمادًا على القيم المثبتة على الشكل، احسب:

1. قراءة الأميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>A</mi></mrow></math>\`.
2. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>3</mn></msub></mrow></math>\`.
3. فرق الجهد الكهربائي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\`.

![جزء دارة بين d وa بمصادر ε₁ وε₂ وε₃ وأميتر وتيار فرعي 1 A.](assets/lessons/curriculum-evidence/a4090b8f2bfdaf6a4ec4.webp)
solution:
نستخدم قانون أوم \\(V=IR\\) لإيجاد التيار من الجهد المعلوم، ثم نجمع تغيرات الجهد في كل مسار.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a4090b8f2bfdaf6a4ec4.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



فرق الجهد على مقاومة الأربعة أوم معلوم، فنحسب التيار الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><msub><mi>V</mi><mrow><mi>d</mi><mi>c</mi></mrow></msub><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>12</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



في الفرع العلوي يسير \\(1\\,\\mathrm{A}\\) من \\(c\\) إلى \\(b\\). يعبر مقاومة \\(7\\,\\mathrm{\\Omega}\\) والمقاومة الداخلية \\(1\\,\\mathrm{\\Omega}\\) مع التيار فينخفض الجهد بمقدار \\(8\\,\\mathrm{V}\\)، ثم يعبر مصدر \\(8\\,\\mathrm{V}\\) من موجب إلى سالب فينخفض \\(8\\,\\mathrm{V}\\) أخرى. لذلك \\(V_{\\mathrm{cb}}=V_{c}-V_{b}\\) هو مجموع الانخفاضين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>7</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo><mo>+</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>c</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



من قانون العقدة يمر في الفرع السفلي \\(3-1\\,\\mathrm{A}\\). له الجهد نفسه \\(16\\,\\mathrm{V}\\)؛ وهو مجموع هبوط \\(I(2+1)\\)وقوة المصدر \\(\\varepsilon _{3}\\)التي تعاكس التيار، لذلك \\(\\varepsilon _{3}=16-I(2+1)\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">w</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">w</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>16</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>16</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



من \\(b\\) إلى \\(a\\) نسير مع تيار \\(3\\,\\mathrm{A}\\): تهبط المقاومتان \\(3\\,\\mathrm{\\Omega}\\) و \\(1\\,\\mathrm{\\Omega}\\) بالجهد \\(12\\,\\mathrm{V}\\)، ثم يرفعه مصدر \\(7\\,\\mathrm{V}\\) لأننا نعبره من سالب إلى موجب. نكتب جهد \\(a\\) مطروحاً منه جهد \\(b\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo>−</mo><mn>3</mn><mo stretchy="false">(</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mn>7</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo>−</mo><mn>3</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>7</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo>−</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p060-q370
title: السؤال 370 — ص 59 — السؤال الأصلي 12
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 59، السؤال 12
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند تمثيل التغيرات في الجهد عبر الدارة الكهربائية المبينة في الشكل رقم \\(1\\) نتج الرسم البياني الظاهر في الشكل رقم \\(2\\). باعتماد القيم المثبتة على كلا الشكلين، جد:

1. مقدار القوة الدافعة الكهربائية للبطارية.
2. قراءة الأميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>A</mi></mrow></math>\`.
3. قيمة المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.

![الشكل 1: دارة بمقاومة مجهولة وأميتر ومصدر جهد.](assets/lessons/curriculum-evidence/86cac9a81a055850e987.webp)
![الشكل 2: منحنى تغير الجهد في الدارة مع المستويين 12 و10.](assets/lessons/curriculum-evidence/4c4e64e22e39e4e734e3.webp)
solution:
نستخدم قانون أوم \\(V=IR\\) لربط هبوط الجهد بتيار المقاومة. الرسم البياني يفصل ارتفاع المصدر عن الهبوط الداخلي ثم الخارجي.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/86cac9a81a055850e987.webp)

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



![الشكل المكمل الأصلي](assets/lessons/curriculum-evidence/4c4e64e22e39e4e734e3.webp)

ارتفاع الجهد في الرسم يمثل القوة الدافعة، والهبوط التالي يقع على المقاومة الداخلية ذات الأوم الواحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mrow><mn>12</mn><mo>−</mo><mn>10</mn></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>2</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الهبوط الخارجي عشرة فولت، فنقسمه على التيار لإيجاد المكافئة الخارجية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mfrac><mn>10</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



السلك العمودي الأيسر يصل عقدتي مقاومتي الستة أوم، فيتجاوزهما. تبقى مقاومة الثلاثة أوم على التوالي مع الزوج الأيمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>5</mn><mo>−</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نستخرج المقاومة المجهولة من مكافئتها مع الستة أوم على التوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>6</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p060-q371
title: السؤال 371 — ص 59 — السؤال الأصلي 13
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 59، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور دارة كهربائية متصلة بالأرض عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>e</mi></mrow></math>\`، إذا علمت أن قراءة الفولتميتر تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>21</mn></mrow></math>\` فولت احسب:

أ- قيمة المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.

ب- جهد النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\`.

ج- القدرة الداخلة في الفرع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></math>\`.

![دارة مؤرضة عند e بمصدر 25 V وفولتميتر ومقاومات 2 Ω و4 Ω و8 Ω و24 Ω وR.](assets/lessons/curriculum-evidence/4507c92f899a00073b22.webp)
solution:
قانون أوم \\(V=IR\\) يربط الجهد بالتيار. سنحسب التيار من هبوط الجهد على \\(2\\,\\mathrm{\\Omega}\\)، ثم نستخدم توصيل المقاومات لتحديد الجهود والقدرة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/4507c92f899a00073b22.webp)

في التوازي يتصل طرفا كل فرع بالعقدتين نفسيهما، فيتساوى فرق الجهد على الفروع وتُجمع تياراتها. لهذا نجمع مقلوبات المقاومات؛ ولمقاومتين فقط يمكن استعمال حاصل ضربهما مقسومًا على مجموعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><msub><mi>R</mi><mi>p</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo>+</mo><mo>⋯</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mrow><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>+</mo><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac><mtext>  </mtext><mtext>(لمقاومتين)</mtext></mrow></math>
\`\`\`



الفولتميتر يقيس جهد مصدر \\(25\\,\\mathrm{V}\\) مع مقاومة \\(2\\,\\mathrm{\\Omega}\\). يسير التيار في المصدر من سالب إلى موجب، ثم تهبط \\(2\\,\\mathrm{\\Omega}\\) بجهده \\(Ir\\)؛ لذلك \\(21=25-2I\\). ننقل \\(21\\) للطرف الآخر ونقسم على \\(2\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>25</mn><mo>−</mo><mn>21</mn></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الفرعان الخارجيان اثنا عشر وأربعة وعشرون أوم على التوازي؛ نحسب جهد الحمل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mo stretchy="false">(</mo><mn>4</mn><mo>+</mo><mn>8</mn><mo stretchy="false">)</mo><mo>∥</mo><mn>24</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>12</mn><mo>×</mo><mn>24</mn></mrow><mrow><mn>12</mn><mo>+</mo><mn>24</mn></mrow></mfrac><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نقطة التأريض \\(e\\) متصلة بطرف الحمل الأيسر، وجهد \\(a\\) أعلى منها بجهد الحمل \\(IR\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نطرح جهد الحمل من قراءة الفولتميتر لنجد هبوط الجهد على المقاومة المجهولة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>21</mn><mo>−</mo><mn>16</mn></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>2.5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



الفرع \\(abc\\) يضم \\(4\\) و \\(8\\,\\mathrm{\\Omega}\\) فقط، ولا يحتوي مصدرًا. قدرته الداخلة تتحول كلها إلى حرارة؛ من \\(P=VI\\) نحسبها بعد إيجاد تياره بقانون أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mn>16</mn><mn>12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>16</mn><mrow><mo fence="true">(</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mfrac><mn>64</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p060-q372
title: السؤال 372 — ص 59 — السؤال الأصلي 14
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 59، السؤال 14
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كانت قراءة الأميتر المبين في الدارة المجاورة تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، جد:

أ- مقدار القوة الدافعة الكهربائية للبطارية.

ب- جهد النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\`.

![دارة بثلاثة فروع ومصدري 5 V و10 V ومصدر ε وأميتر ونقطة تأريض.](assets/lessons/curriculum-evidence/5ad0d3792d4c41f91df2.webp)
solution:
عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة. اتجاه التيار المجهول يجوز افتراضه، وإذا ظهر سالبًا فالاتجاه الحقيقي معاكس.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/5ad0d3792d4c41f91df2.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



في الحلقة المغلقة مجموع تغيرات الجهد صفر، لأننا نعود إلى نقطة البداية نفسها. عبور المقاومة مع التيار يعطي \\(-IR\\) وعكسه \\(+IR\\)؛ وعبور البطارية من سالبها إلى موجبها يعطي \\(+\\varepsilon\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><mi mathvariant="normal">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



تيار الفرع السفلي أمبير واحد باتجاه اليمين؛ ننتقل من الأرض إلى العقدة المطلوبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>10</mn><mo>−</mo><mn>1</mn><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>10</mn><mo>−</mo><mn>1</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>7</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



في الفرع العلوي يتجه \\(I_{2}\\)من \\(a\\) إلىاليسار. نعبر مصدر \\(5\\,\\mathrm{V}\\) من سالب إلى موجب، فيساعد التيار ويرفع الجهد \\(5\\,\\mathrm{V}\\)، ثم تهبط المقاومتان بمقدار \\(3I_{2}\\)حتى نصل إلى الأرض. إذن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>+</mo><mn>5</mn><mo>−</mo><mn>3</mn><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`



نضيف \\(3I_{2}\\)للطرفين ونقسم على \\(3\\) لإيجاد التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>+</mo><mn>5</mn></mrow><mrow><mn>2</mn><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>12</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



باقي التيار القادم إلى العقدة يأتي من الفرع الأوسط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



القوة الدافعة الوسطى تساوي جهد العقدة مضافًا إليه الهبوط في مقاومتي فرعها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>7</mn><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>0.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>7</mn><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>11.5</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p060-q373
title: السؤال 373 — ص 59 — السؤال الأصلي 15
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 59، السؤال 15
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بالاعتماد على الدارة الموضحة في الشكل المجاور، وبإهمال المقاومات الداخلية للبطاريات، أجب عن الآتي:

أ- احسب قراءة الأميتر.

ب- أثبت أن القدرة الداخلة خلال الفرع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></math>\` تساوي القدرة المستنفدة خلال نفس الفرع.

![دارة بمصدري 5 V و2 V ومقاومات 1 Ω و2 Ω و3 Ω وأميتر والفرع abc.](assets/lessons/curriculum-evidence/dc01e0d2978e32bd9115.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/dc01e0d2978e32bd9115.webp)

عند العقدة لا تتراكم الشحنة؛ لذلك مجموع التيارات الداخلة يساوي مجموع الخارجة. نحدد اتجاه كل تيار بالحساب: إذا ظهرت قيمته سالبة فهو يعاكس الاتجاه الذي افترضناه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



في الحلقة المغلقة مجموع تغيرات الجهد صفر، لأننا نعود إلى نقطة البداية نفسها. عبور المقاومة مع التيار يعطي \\(-IR\\) وعكسه \\(+IR\\)؛ وعبور البطارية من سالبها إلى موجبها يعطي \\(+\\varepsilon\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><mi mathvariant="normal">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نأخذ جهد العقدة اليمنى صفرًا، ونسمي جهد العقدة العلوية الوسطى مقدارًا مجهولًا. قطبا المصدرين يحددان جهدي العقدتين الأخريين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>c</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mi>u</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mi>u</mi><mo>+</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mo separator="true">,</mo><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mi>u</mi><mo>−</mo><mn>2</mn></mrow></math>
\`\`\`



المصادر المثالية تربط هذه العقد بجهود محددة، لكن تياراتها غير معلومة. نجمع قانون حفظ الشحنة للعقد المرتبطة كلها؛ فتُختصر التيارات الداخلية بينها، ويبقى مجموع التيارات الخارجة عبر المقاومات إلى \\(c\\) مساويًا صفرًا. نكتب كل تيار بفرق الجهد مقسومًا على مقاومته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>u</mi><mn>1</mn></mfrac><mo>+</mo><mfrac><mrow><mi>u</mi><mo>−</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo>+</mo><mfrac><mrow><mi>u</mi><mo>+</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نضرب في \\(6\\) للتخلص من المقامات، ثم نفك الأقواس ونجمع الحدود.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>6</mn><mi>u</mi><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mi>u</mi><mo>−</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mi>u</mi><mo>+</mo><mn>5</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>6</mn><mi>u</mi><mo>+</mo><mn>2</mn><mi>u</mi><mo>−</mo><mn>4</mn><mo>+</mo><mn>3</mn><mi>u</mi><mo>+</mo><mn>15</mn><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>11</mn><mi>u</mi><mo>+</mo><mn>11</mn><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>11</mn><mi>u</mi><mo>=</mo><mo>−</mo><mn>11</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><mo>−</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



تيار الأميتر يأتي من اليمين إلى اليسار، ومقداره أمبير واحد؛ وتيار الفرع السفلي من الطرف الأيسر إلى الأيمن أمبيران.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mrow><mo fence="true">∣</mo><mfrac><mrow><mo>−</mo><mn>1</mn></mrow><mn>1</mn></mfrac><mo fence="true">∣</mo></mrow><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo>−</mo><mn>1</mn><mo>+</mo><mn>5</mn></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



القدرة هي الطاقة المنتقلة في كل ثانية. وفق تعريف الكتاب، القدرة الداخلة إلى الفرع تساوي \\(I\\times V_{\\mathrm{ac}}\\) عبر الطرفين مضافاً إليه \\(I\\times 5\\) الذي يزوده مصدر \\(5\\,\\mathrm{V}\\) الموافق للتيار. إشارة \\(V_{\\mathrm{ac}}\\) السالبة تعني أن جزءاً من قدرة هذا المصدر يخرج من الفرع عبر طرفيه:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><msub><mi>V</mi><mrow><mi>a</mi><mi>c</mi></mrow></msub><mo>+</mo><mn>5</mn><msub><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mn>5</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



الفرع \\(abc\\) يحتوي مقاومة \\(2\\,\\mathrm{\\Omega}\\) ومصدر \\(5\\,\\mathrm{V}\\) الذي يغذي التيار. مصدره يزود الطاقة، وتستهلك المقاومة قدرة حرارية \\(I^{2}R\\). نحسبها لنقارن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><msubsup><mi>I</mi><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow><mn>2</mn></msubsup><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p060-q374
title: السؤال 374 — ص 59 — السؤال الأصلي 16
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 59، السؤال 16
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور جزءًا من دارة كهربائية، أجب عما يلي:

أ- احسب فرق الجهد الكهربائي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\`.

ب- احسب القوة الدافعة المجهولة.

ج- ما القدرة المستنفدة في الفرع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>b</mi></mrow></math>\`؟

![جزء دارة بين b وa بتيارين فرعيين 1 A و2 A ومصدر مجهول وآخر 10 V.](assets/lessons/curriculum-evidence/eb0d6e53ffaf505a962e.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/eb0d6e53ffaf505a962e.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



قانون أوم يجعل هبوط الجهد في مقاومة مساوياً لتيارها مضروباً في مقاومتها. نسمي عقدة اجتماع الفرعين عقدة وسطى؛ فينخفض جهدها عن \\(b\\) بمقدار \\(1\\,\\mathrm{A}\\times 1\\,\\mathrm{\\Omega}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><mn>1</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`



التياران \\(1\\)و\\(2\\,\\mathrm{A}\\) يجتمعان، فيمر \\(3\\,\\mathrm{A}\\) نحو \\(a\\). عند السير نحو \\(a\\) ينخفض الجهد بمقدار \\(3\\times 2\\) على المقاومة، ثم يرتفع \\(10\\,\\mathrm{V}\\) لأننا نعبر المصدر من سالب إلى موجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><mn>1</mn><mo>−</mo><mn>3</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mn>10</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><msub><mi>V</mi><mi>b</mi></msub><mo>+</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الفرع السفلي يصل بين العقدتين نفسيهما. عبور المصدر \\(\\varepsilon\\) من سالب إلى موجب يرفع الجهد \\(\\varepsilon\\)، ثم هبوط مقاومة \\(4\\,\\mathrm{\\Omega}\\) مع تيار \\(2\\,\\mathrm{A}\\) يساوي \\(8\\,\\mathrm{V}\\)؛ يجب أن تساوي المحصلة\\(-1\\,\\mathrm{V}\\) كما في الفرع العلوي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>7</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



القدرة المستنفدة هي الطاقة المتحولة كل ثانية إلى حرارة أو إلى طاقة مخزنة في مصدر يُشحن. البطاريتان هنا تساعدان التيار فلا تُشحنان؛ لذلك نحسب مجموع قدرات المقاومات الحرارية \\(I^{2}R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>16</mn><mo>+</mo><mn>18</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>35</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p060-q375
title: السؤال 375 — ص 59 — السؤال الأصلي 17
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 59، السؤال 17 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة بالشكل، البطاريتان والأميتر والأسلاك مثالية. احسب:
1. قراءة الأميتر \\(A\\).
2. القدرة المستهلكة في الجزء \\(a\\)→\\(c\\)→\\(b\\)، وتشمل حرارة مقاومة \\(2\\,\\mathrm{\\Omega}\\) والحمل المتوازي بين \\(c\\) و \\(b\\)، وقدرة شحن بطارية \\(10\\,\\mathrm{V}\\).

![الدارة الأصلية](assets/lessons/curriculum-evidence/d1fd487f20c97481cdfd.webp)
solution:
المقاومتان \\(8\\,\\mathrm{\\Omega}\\) بين \\(c\\) و \\(b\\) متوازيتان؛ لأنهما تتصلان بالعقدتين نفسيهما.

![فرعا 8 أوم والمسار a→c→b](assets/lessons/curriculum-evidence/d1fd487f20c97481cdfd.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>8</mn><mo>×</mo><mn>8</mn></mrow><mrow><mn>8</mn><mo>+</mo><mn>8</mn></mrow></mfrac><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



المصدران متعاكسان، والمقاومات \\(1\\) و \\(2\\) و \\(3\\,\\mathrm{\\Omega}\\) ومكافئة التوازي على التوالي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>20</mn><mo>−</mo><mn>10</mn><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>10</mn><mn>10</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



يتوزع التيار بالتساوي بين مقاومتي \\(8\\,\\mathrm{\\Omega}\\) المتساويتين؛ الأميتر يقيس تيار إحداهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



في المسار \\(a\\)→\\(c\\)→\\(b\\) تتحول قدرة إلى حرارة في \\(2\\,\\mathrm{\\Omega}\\) وفي الحمل المكافئ \\(4\\,\\mathrm{\\Omega}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>R</mi></msub><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



يدخل التيار القطب الموجب لبطارية \\(10\\,\\mathrm{V}\\)؛ فتُشحن وتستهلك قدرة كهربائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mi>ε</mi><mi>I</mi><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi>a</mi><mo>→</mo><mi>c</mi><mo>→</mo><mi>b</mi></mrow></msub><mo>=</mo><mn>6</mn><mo>+</mo><mn>10</mn><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



الإجابتان: قراءة الأميتر \\(0.5\\,\\mathrm{A}\\)، والقدرة المستهلكة \\(16\\,\\mathrm{W}\\).
:::

:::exam-question
id: physics-tawjihi-2025-p061-q376
title: السؤال 376 — ص 60 — السؤال الأصلي 18
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 60، السؤال 18
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور دارة كهربائية مغلقة، احسب:

أ- شدة التيار الكهربائي المار في كل بطارية.

ب- فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow></math>\`، \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\`.

ج- قارن بين قانون كيرشوف الأول والثاني من حيث النص والمبدأ العلمي لكل منهما.

![دارة مغلقة بثلاثة فروع ومصدري 20 V و40 V ومقاومات 10 Ω و30 Ω.](assets/lessons/curriculum-evidence/87ae58c86d7b7706d513.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/87ae58c86d7b7706d513.webp)

عند العقدة لا تتراكم الشحنة في الحالة المستقرة؛ لذلك مجموع التيارات الداخلة يساوي مجموع التيارات الخارجة. اتجاه التيار المجهول يجوز افتراضه، وإذا ظهر سالبًا فالاتجاه الحقيقي معاكس.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



في الحلقة المغلقة مجموع تغيرات الجهد صفر، لأننا نعود إلى نقطة البداية نفسها. عبور المقاومة مع التيار يعطي \\(-IR\\) وعكسه \\(+IR\\)؛ وعبور البطارية من سالبها إلى موجبها يعطي \\(+\\varepsilon\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><mi mathvariant="normal">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نعرّف \\(V=V_{a}-V_{b}\\)، لأن \\(a\\) على العقدة اليسرى و \\(b\\) على العقدة اليمنى. نفترض تياري البطاريتين نحو العقدة اليسرى كما في الأسهم، ثم خروجهما عبر \\(30\\,\\mathrm{\\Omega}\\). صيغة كل فرع \\(V=\\varepsilon -IR\\) تطرح هبوط المقاومة من ارتفاع المصدر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>20</mn><mo>−</mo><mn>10</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>40</mn><mo>−</mo><mn>30</mn><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mn>30</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`



نعوّض بالتيارين بدلالة الجهد لنحل معادلة العقدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>V</mi><mn>30</mn></mfrac><mo>=</mo><mfrac><mrow><mn>20</mn><mo>−</mo><mi>V</mi></mrow><mn>10</mn></mfrac><mo>+</mo><mfrac><mrow><mn>40</mn><mo>−</mo><mi>V</mi></mrow><mn>30</mn></mfrac></mrow></math>
\`\`\`



نضرب في \\(30\\) لإزالة المقامات، ثم نفك الأقواس ونجمع حدود \\(V\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>20</mn><mo>−</mo><mi>V</mi><mo stretchy="false">)</mo><mo>+</mo><mo stretchy="false">(</mo><mn>40</mn><mo>−</mo><mi>V</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>60</mn><mo>−</mo><mn>3</mn><mi>V</mi><mo>+</mo><mn>40</mn><mo>−</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>5</mn><mi>V</mi><mo>=</mo><mn>100</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نرجع إلى علاقات الفروع لإيجاد التيارات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>20</mn><mo>−</mo><mn>20</mn></mrow><mn>10</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>40</mn><mo>−</mo><mn>20</mn></mrow><mn>30</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>20</mn><mn>30</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



**ج. مقارنة القانونين**

الأول يصف التيارات عند نقطة التفرع:

> مجموع التيارات التي تدخل أية نقطة تفرع يساوي مجموع التيارات التي تخرج من نقطة التفرع.

**المصدر:** صفحة \\(36\\) من الكتاب.

![نص القانون الأول](assets/lessons/curriculum-evidence/5d30cc6304951096d333.webp)

مبدؤه حفظ الشحنة، ويقول الكتاب:

> وبما أن الشحنة الكهربائية محفوظة

**المصدر:** صفحة \\(35\\) من الكتاب.

![حفظ الشحنة عند العقدة](assets/lessons/curriculum-evidence/68b3b9960cd5865b53c8.webp)

الثاني يصف تغيرات الجهد حول حلقة مغلقة:

> مجموع تغيرات الجهد عبر حلقة مقفلة في الدارة الكهربائية يساوي صفراً.

ويذكر الكتاب أن هذا القانون «يعبر عن قانون حفظ الطاقة». المصدر: الصفحة المطبوعة \\(37\\)، صفحة \\(\\mathrm{PDF}39\\).

![نص القانون الثاني ومبدؤه](assets/lessons/curriculum-evidence/dcad48d399892ca8a9cf.webp)

صفحة القانون الأول · صفحة القانون الثاني
:::

:::exam-question
id: physics-tawjihi-2025-p061-q377
title: السؤال 377 — ص 60 — السؤال الأصلي 19
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 60، السؤال 19
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور إذا علمت أن قراءة الأميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` وقراءة الفولتميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، أجب:

1. احسب القوة الدافعة المجهولة.
2. احسب المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
3. احسب القدرة المستنفدة عبر المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn></mrow></math>\` أوم.

![دارة بمصدر 6 V ومصدر ε ومقاومات 1 Ω و2 Ω و10 Ω وR ومقياسي تيار وجهد.](assets/lessons/curriculum-evidence/a9cd321da7a2c3b99624.webp)
solution:
نستخدم قانون أوم لربط جهد المقاومة بتيارها: \\(V=IR\\). نختار اتجاه تياري الفرعين من اليسار إلى اليمين؛ القيمة السالبة ستعني الاتجاه المعاكس.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a9cd321da7a2c3b99624.webp)

الفولتميتر يقيس خمسة فولت بين عقدتي التوازي. في الفرع العلوي تزيد قوة البطارية عن فرق الجهد، فيكون تياره عكس اتجاه الفرع السفلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">u</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>5</mn><mo>−</mo><mn>6</mn></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">u</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo>−</mo><mn>1</mn></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">u</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نأخذ تياري الفرعين من اليسار إلى اليمين؛ الإشارة السالبة تعني أن التيار العلوي الحقيقي يتجه إلى اليسار. من حفظ الشحنة عند العقدة، التيار الكلي \\(2\\,\\mathrm{A}\\) يساوي مجموع تياري الفرعين؛ لذا تيار \\(R\\) هو \\(2-(-1)\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>=</mo><mn>2</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



القوة الدافعة المجهولة تغطي الهبوط الخارجي على الاثني عشر أوم وجهد الفرعين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>10</mn><mo stretchy="false">)</mo><mo>+</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo><mo>+</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>29</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



القدرة الحرارية هي الطاقة المتحولة في المقاومة كل ثانية، وتعطىبـ \\(P=I^{2}R\\). إشارة التيار تحدد اتجاهه؛ أما تربيعه فيجعل القدرة المستنفدة موجبة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mn>1</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mn>1</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p061-q378
title: السؤال 378 — ص 60 — السؤال الأصلي 20
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 60، السؤال 20
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل جزءًا من دارة كهربائية، اعتمادًا على البيانات المبينة على الرسم احسب:

1. فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>X</mi><mo separator="true">,</mo><mi>Y</mi></mrow></math>\`، \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub></mrow></math>\`.
2. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
3. القدرة المستنفدة في المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn></mrow></math>\` أوم.

![جزء دارة بين x وy فيه تيار 4 أمبير وتيار فرعي 3 أمبير ومصدر مجهول E وآخر 14 فولت.](assets/lessons/curriculum-evidence/e20650f97a8e9a62dc7b.webp)
solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/e20650f97a8e9a62dc7b.webp)

عبور المقاومة مع التيار يخفض الجهد بمقدار \\(IR\\)، وعبور البطارية من سالب إلى موجب يرفعه بمقدار \\(\\varepsilon\\). نستخدم هذه الإشارات لجمع التغيرات على المسار.

الفرع العلوي يحمل ثلاثة أمبير، لذلك فرق الجهد بين عقدتي التوازي اثنا عشر فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الشحنة لا تتراكم عند العقدة \\(b\\)، لذلك مجموع تياري الفرعين يساوي \\(4\\,\\mathrm{A}\\). فيمر في الفرع السفلي \\(4-3\\,\\mathrm{A}\\)؛ المصدر فيه قطبه الموجب على اليسار فيعاكس هذا التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">w</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>4</mn><mo>−</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">w</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>12</mn><mo>−</mo><mn>1</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



المطلوب \\(V_{xy}=V_{x}-V_{y}\\)، أي مجموع انخفاضات الجهد من \\(x\\) إلى \\(y\\). ينخفض الجهد \\(4\\times 2\\) قبل التفرع، ثم \\(12\\) عبر الفرعين؛ مصدر \\(14\\,\\mathrm{V}\\) يرفعه فنطرح \\(14\\)، ثم ينخفض \\(4\\times 1\\) بعده:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mn>12</mn><mo>−</mo><mn>14</mn><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



القدرة الحرارية في مقاومة هي \\(I^{2}R\\)؛ نستخدم تيار \\(3\\,\\mathrm{A}\\) المار في \\(4\\,\\mathrm{\\Omega}\\) تحديداً:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mn>4</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mn>4</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>36</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p061-q379
title: السؤال 379 — ص 60 — السؤال الأصلي 21
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 60، السؤال 21
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بالاعتماد على البيانات التي على الشكل المجاور، احسب:

أ- فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>h</mi><mo separator="true">,</mo><mi>d</mi></mrow></math>\`، \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>h</mi><mi>d</mi></mrow></msub></mrow></math>\`.

ب- مقدار المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\` التي تجعل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>76</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`.

![جزء دارة ذو ثلاثة أطراف a وd وh ومصادر ومقاومات وتيارين 2 و3 أمبير.](assets/lessons/curriculum-evidence/6f8c88cf7052468d5365.webp)
solution:
عند العقدة مجموع التيارات الداخلة يساوي الخارجة لحفظ الشحنة. فرق جهد المقاومة يساوي \\(IR\\)؛ ومع التيار يهبط الجهد، ومن موجب البطارية إلى سالبها يهبط بمقدار قوتها الدافعة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/6f8c88cf7052468d5365.webp)

التياران من الأعلى واليمين يدخلان العقدة الوسطى، فيخرج خمسة أمبير إلى اليسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>b</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi>b</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نحسب هبوط الجهد من الطرف العلوي إلى العقدة، ثم من العقدة إلى الطرف الأيسر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>h</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>9</mn><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>h</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>9</mn><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>h</mi></msub><mo>−</mo><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>21</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><msub><mi>V</mi><mi>d</mi></msub><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>10</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><msub><mi>V</mi><mi>d</mi></msub><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>11</mn><mo stretchy="false">)</mo><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><msub><mi>V</mi><mi>d</mi></msub><mo>=</mo><mn>49</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نجمع الفرعين للحصول على فرق الجهد الأول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>h</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>21</mn><mo>+</mo><mn>49</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>h</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>70</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



من الطرف الأيمن إلى العقدة تؤثر المقاومات والمصدران بإشاراتهما، ثم نضيف فرق الجهد إلى الطرف الأيسر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mi>R</mi><mo>+</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mn>6</mn><mo>−</mo><mn>12</mn><mo>+</mo><mn>49</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>R</mi><mo>+</mo><mn>61</mn></mrow></math>
\`\`\`



نساوي التعبير بفرق الجهد المطلوب ونستخرج المقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><mi>R</mi><mo>+</mo><mn>61</mn><mo>=</mo><mn>76</mn></mrow></math>
\`\`\`



نطرح \\(61\\) من الطرفين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><mi>R</mi><mo>=</mo><mn>76</mn><mo>−</mo><mn>61</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><mi>R</mi><mo>=</mo><mn>15</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>15</mn><mn>3</mn></mfrac><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p061-q380
title: السؤال 380 — ص 60 — السؤال الأصلي 22
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 60، السؤال 22
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور جزءًا من دارة كهربائية. احسب:

1. الطاقة الكهربائية التي تستهلكها المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn></mrow></math>\` أوم خلال دقيقة.
2. مقدار التيار الكهربائي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>\`.
3. جهد النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mi>a</mi></msub></mrow></math>\`.

![جزء دارة بتيار 3 أمبير ومصدري 6 فولت و9 فولت ومقاومات ونقطة تأريض.](assets/lessons/curriculum-evidence/d7d9e12035abafe842aa.webp)
solution:
المعطى تيار \\(3\\,\\mathrm{A}\\) ومقاومة \\(4\\,\\mathrm{\\Omega}\\)، والمطلوب طاقتها ثم التياران وجهد \\(a\\). الطاقة الحرارية تساوي القدرة مضروبة في الزمن؛ وقدرة المقاومة \\(P=I^{2}R\\)، لذلك طاقتها خلال زمن \\(t\\) هي \\(W=I^{2}Rt\\). عند العقدة تتساوى التيارات الداخلة والخارجة؛ ونحسب جهد كل فرع بجمع تغيراته من الأرض إلى العقدة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/d7d9e12035abafe842aa.webp)

مقاومة الأربعة أوم تحمل التيار الكلي ثلاثة أمبير؛ نحول الدقيقة إلى ثوانٍ.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><msup><mi>I</mi><mn>2</mn></msup><mi>R</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>60</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>W</mi><mo>=</mo><mn>2160</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



نسمي جهد العقدة بعد هذه المقاومة مقدارًا مجهولًا بالنسبة إلى الأرض. يربط كل فرع هذا الجهد بتياره. من العقدة \\(j\\) إلىالأرض، مصدر \\(9\\,\\mathrm{V}\\) يرفع الجهد \\(9\\) ثم تهبط مقاومة \\(3\\,\\mathrm{\\Omega}\\) بمقدار \\(3I_{1}\\)؛ لذلك \\(0=V_{j}+9-3I_{1}\\). وفي الفرع الآخر يرتفع الجهد \\(6\\,\\mathrm{V}\\) ويهبط عبر \\(2+1\\,\\mathrm{\\Omega}\\)، لذلك \\(0=V_{j}+6-3I_{2}\\). نعيد ترتيب العلاقتين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>j</mi></msub><mo>=</mo><mn>3</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>9</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>j</mi></msub><mo>=</mo><mn>3</mn><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`



نساوي تعبيري \\(V_{j}\\)، ثم ننقل الحدود ونقسم على \\(3\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>9</mn><mo>=</mo><mn>3</mn><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>3</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`



نجمع معادلتي مجموع التيارين وفرقِهما لحذف \\(I_{2}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>j</mi></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>−</mo><mn>9</mn><mo>=</mo><mo>−</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نضيف الهبوط على المقاومة السابقة للعثور على جهد الطرف الأول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><msub><mi>V</mi><mi>j</mi></msub><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mo>−</mo><mn>3</mn><mo>+</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>9</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p061-q381
title: السؤال 381 — ص 60 — السؤال الأصلي 23
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 60، السؤال 23
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بالاعتماد على المعلومات المثبتة على الدارة الكهربائية المبينة في الشكل، احسب ما يلي:

1. فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow></math>\`، \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\`.
2. المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
3. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math>\`.

![دارة متعددة الفروع بمصدر E₁=12 V ومصدر E₂ ومقاومة مجهولة R واتجاهات التيارات.](assets/lessons/curriculum-evidence/de08966cbe1f14244bb4.webp)
solution:
نستخدم \\(V=IR\\) للمقاومة. عبر المصدر من السالب إلى الموجب يرتفع الجهد بمقدار \\(\\varepsilon\\)، ومع التيار ينخفض بمقدار \\(IR\\) في كل مقاومة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/de08966cbe1f14244bb4.webp)

الفرع الأيسر يحمل أمبيرين؛ نطرح هبوط الجهد في مقاومتيه من قوته الدافعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



يمر نصف أمبير في المقاومة اليمنى، فنحسبها من جهد الفرعين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>2</mn><mn>0.5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



تيار \\(2\\,\\mathrm{A}\\) يدخل العقدة \\(a\\)، ويخرج منها \\(0.5\\,\\mathrm{A}\\) إلى اليمين والباقي في الفرع الأوسط. من حفظ الشحنة يكون التيار الأوسط \\(2-0.5\\,\\mathrm{A}\\). قطب بطاريته الموجب في الأسفل، فنطرح ارتفاعها من الهبوط المقاومي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>−</mo><mn>0.5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>1.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>=</mo><mn>1.5</mn><mo stretchy="false">(</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>−</mo><msub><mi>ε</mi><mn>2</mn></msub></mrow></math>
\`\`\`



نعزل القوة الدافعة المجهولة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn><mo>−</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p062-q382
title: السؤال 382 — ص 61 — السؤال الأصلي 25
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 61، السؤال 25
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، إذا كانت القدرة المستنفدة في البطارية الأولى \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>1</mn></msub></mrow></math>\` تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.25</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>\`، علمًا بأن اتجاهات التيارات صحيحة، جد ما يأتي:

1. قراءة الأميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>A</mi></mrow></math>\`.
2. مقدار القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math>\`.

![دارة بثلاثة فروع واتجاهي I₁ وI₂ وأميتر ومصدري ε₁=9 V وε₂.](assets/lessons/curriculum-evidence/cf0202b07b950e2b820f.webp)
solution:
المطلوب تيار الأميتر وقوة المصدر الثاني. الحرارة المتولدة داخل البطارية قدرتها \\(P=I^{2}r\\)، حيث \\(r\\) مقاومتها الداخلية. نأخذ جهد السلك السفلي صفرًا؛ عند العقدة يساوي التيار الهابط مجموع التيارين الداخلين.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/cf0202b07b950e2b820f.webp)

البطارية الأولى تغذي الدارة وفق السهم، فالقدرة المستنفدة داخلها حرارة مقاومتها الداخلية. من \\(P=I_{1}^{2}r\\) نقسم على \\(r\\) ثم نأخذ الجذر الموجب لمقدار التيار؛ اتجاهه معطى صحيح في السؤال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mn>0.25</mn><mn>1</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نحسب جهد العقدة العليا من الفرع الأيسر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>9</mn><mo>−</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>9</mn><mo>−</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>7</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الأميتر في الفرع الأوسط ذي الأومين، فيكون تياره ثلاثة أمبير ونصف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>7</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>3.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الفرع الأيمن يزوّد باقي التيار؛ نضيف هبوطه إلى جهد العقدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3.5</mn><mo>−</mo><mn>0.5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p062-q383
title: السؤال 383 — ص 61 — السؤال الأصلي 26
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 61، السؤال 26
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة إذا علمت أن قراءة الفولتميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\` تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، احسب:

1. مقدار كل من \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>ε</mi><mn>2</mn></msub></mrow></math>\`.
2. القدرة الداخلة في الدارة.

![دارة تحتوي ثلاثة مصادر وفولتميتر واتجاهات التيارات ومقاومات 1 Ω و2 Ω و3 Ω.](assets/lessons/curriculum-evidence/000b8159a062acf22ae2.webp)
solution:
الفولتميتر يقيس فرق الجهد بين نقطتي توصيله ولا يمر فيه تيار في النموذج المثالي. نستعمل \\(V=IR\\) وإشارات المصادر لإيجاد الجهود. قدرة المصدر الذي يفرغ طاقته هي \\(\\varepsilon I\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/000b8159a062acf22ae2.webp)

الفولتميتر يقيس جهد المصدر الأيسر مع مقاومته؛ الفرق عن اثني عشر فولت يقع على الأوم الواحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>12</mn><mo>−</mo><mn>10</mn></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نهبط عبر الثلاثة أوم إلى العقدة الوسطى لنحسب جهدها، وهو قوة البطارية الوسطى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>10</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نختار السلك السفلي الأيسر مرجعاً صفرياً، فتكون العقدة الوسطى العليا عند\\(+4\\,\\mathrm{V}\\). التيار الأيمن \\(4\\,\\mathrm{A}\\) يصعد عبر المصدر \\(\\varepsilon _{1}\\)إلىاليسار؛ لذلك يمر في \\(2\\,\\mathrm{\\Omega}\\) من مرجع الصفر إلى العقدة اليمنى. الجهد يهبط مع التيار، فيكون جهد هذه العقدة\\(-4\\times 2\\,\\mathrm{V}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



المصدر \\(12\\,\\mathrm{V}\\) في اليسار والمصدر \\(\\varepsilon _{1}=12\\,\\mathrm{V}\\) في اليمين يمر فيهما التيار من السالب إلى الموجب، فيزودان الدارة بالطاقة. أما \\(\\varepsilon _{2}\\)فيدخل التيار قطبه الموجب فيُشحن؛ لا نعده مصدراً للقدرة الداخلة. قدرة كل مصدر يغذي الدارة هي \\(\\varepsilon I\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>12</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mn>12</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>72</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p062-q384
title: السؤال 384 — ص 61 — السؤال الأصلي 27
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 61، السؤال 27
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المبينة في الشكل المجاور، إذا كان فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow></math>\` يساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، جد:

1. شدة التيار الكهربائي المار في كل فرع.
2. القدرة الداخلة في الدارة.

![دارة ببطاريتي 30 V و15 V وثلاثة تيارات فرعية ومقاومات.](assets/lessons/curriculum-evidence/0114496e41119e89730d.webp)
solution:
نستعمل \\(V=IR\\) لأن فرق الجهد على المقاومة وتيارها مرتبطان بقانون أوم. عند العقدة نجمع التيارات الداخلة للحصول على الخارج؛ وقدرة كل مصدر مساعد للتيار هي \\(\\varepsilon I\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0114496e41119e89730d.webp)

فرق الجهد المعطى يقع على مقاومة الأربعة أوم، فنحسب تيار الفرع الأيسر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>16</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



المصدر الأيسر يغطي هبوط الجهد في الخمسة أوم المتسلسلة والجهد بين عقدتي الفرع الأوسط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>30</mn><mo>−</mo><mn>4</mn><mo stretchy="false">(</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>30</mn><mo>−</mo><mn>4</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نحسب التيار الأوسط ثم نستخرج تيار الفرع الأيمن من حفظ الشحنة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>10</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mo>−</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



في المصدرين يخرج التيار من القطب الموجب نحو العقدة العليا؛ لذلك يغذيان الدارة. قدرتهما الكلية هي مجموع \\(\\varepsilon I\\) لكل مصدر. نستخدم \\(4\\,\\mathrm{A}\\) لمصدر \\(30\\,\\mathrm{V}\\) و \\(1\\,\\mathrm{A}\\) لمصدر \\(15\\,\\mathrm{V}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>30</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>15</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>135</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p062-q385
title: السؤال 385 — ص 61 — السؤال الأصلي 28
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 61، السؤال 28
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور جزءًا من دارة كهربائية، معتمدًا على البيانات المثبتة على الشكل، جد القدرة المستنفدة بين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow></math>\`.

![جزء دارة بين b وa بتيارين فرعيين 1 A و3 A وبطاريتين ومقاومات.](assets/lessons/curriculum-evidence/3c563d70e3548824eccd.webp)
solution:
عند التفرع يُحفظ التيار. القدرة المستنفدة تشمل حرارة المقاومات \\(I^{2}R\\)، بما فيها الداخلية، وقدرة شحن البطارية \\(\\varepsilon I\\) إذا دخلها التيار من موجبها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3c563d70e3548824eccd.webp)

سهمَا التيارين في الفرعين يتجهان إلى اليسار، فيمر أربعة أمبير من الطرف الأيمن قبل التفرع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نحسب الحرارة في المقاومات بما فيها المقاومتان الداخليتان المبيّنتان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>5</mn><mo>+</mo><mn>5</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>3</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>94</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



بطارية الثمانية فولت يدخل التيار من قطبها الموجب، فتُشحن وتستهلك قدرة إضافية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mn>8</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">g</mi></mrow></msub><mo>=</mo><mn>32</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



نجمع القدرة الحرارية وقدرة الشحن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>94</mn><mo>+</mo><mn>32</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>126</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p063-q387
title: السؤال 387 — ص 62 — السؤال الأصلي 30
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 62، السؤال 30
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، احسب:

1. شدة التيارات الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>I</mi><mn>2</mn></msub><mo separator="true">,</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math>\`.
2. القدرة الداخلة في الفرع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mi>b</mi><mi>c</mi><mi>d</mi></mrow></math>\`.

![دارة بمصادر 24 V و12 V و4 V ومقاومات وتيارات I₁ وI₂ وI₃ ونقاط a وb وc وd.](assets/lessons/curriculum-evidence/b84416a428f14a76c930.webp)
solution:
المطلوب \\(I_{1}\\) و\\(I_{2}\\) و\\(I_{3}\\) والقدرة الداخلة في الفرع \\(abcd\\). نلتزم باتجاه الأسهم في الرسم.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b84416a428f14a76c930.webp)

قانون كيرتشوف الأول ناتج عن حفظ الشحنة؛ عند \\(d\\) يدخل \\(I_{1}\\) و\\(I_{2}\\) ويخرج \\(I_{3}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`



نستخدم قانون تغير الجهد. عبور مقاومة مع التيار يخفض الجهد بمقدار \\(IR\\)؛ وعبور مصدر من سالب إلى موجب يرفعه بقيمة المصدر.

في الفرع الأوسط يسير \\(I_{3}\\) من \\(d\\) إلى \\(a\\) عبر \\(4\\,\\mathrm{\\Omega}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><msub><mi>V</mi><mi>d</mi></msub><mo>=</mo><mo>−</mo><mn>4</mn><msub><mi>I</mi><mn>3</mn></msub></mrow></math>
\`\`\`



في المسار الأيسر \\(a\\)→\\(b\\)→\\(c\\)→\\(d\\) نجمع ارتفاع \\(24\\,\\mathrm{V}\\) وهبوط مقاومتي \\(2\\,\\mathrm{\\Omega}\\) وهبوط مصدر \\(4\\,\\mathrm{V}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>d</mi></msub><mo>−</mo><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>24</mn><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>20</mn></mrow></math>
\`\`\`



نساوي هذا الجهد بجهد الفرع الأوسط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn>4</mn><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>2</mn></msub><mo>−</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>5</mn></mrow></math>
\`\`\`



في المسار الأيمن \\(a\\)→\\(d\\) نمر في مقاومتي \\(4\\,\\mathrm{\\Omega}\\) ثم نحسب ارتفاع مصدر \\(12\\,\\mathrm{V}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>d</mi></msub><mo>−</mo><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>8</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>8</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>12</mn></mrow></math>
\`\`\`



نساويه أيضًا بجهد الفرع الأوسط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>−</mo><mn>4</mn><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>8</mn><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`



نعوّض \\(I_{3}=I_{1}+I_{2}\\) في المعادلتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`



نضرب المعادلة الأولى في \\(3\\) ثم نطرح الثانية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><mn>6</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>15</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>5</mn><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2.4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نعود بالتعويض لإيجاد التيارين الآخرين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>2.4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>0.2</mn><mo>+</mo><mn>2.4</mn><mo>=</mo><mn>2.6</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



جهد الفرع بين \\(a\\) و\\(d\\) يساوي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2.6</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>10.4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



القدرة الداخلة للفرع \\(abcd\\) تشمل القدرة عبر طرفيه وقدرة المصدر \\(24\\,\\mathrm{V}\\) الذي يزود الفرع بالطاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi><mi>d</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><msub><mi>V</mi><mrow><mi>a</mi><mi>d</mi></mrow></msub><mo>+</mo><mn>24</mn><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi><mi>d</mi></mrow></msub><mo>=</mo><mn>2.4</mn><mo stretchy="false">(</mo><mo>−</mo><mn>10.4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>24</mn><mo stretchy="false">(</mo><mn>2.4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>a</mi><mi>b</mi><mi>c</mi><mi>d</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>24.96</mn><mo>+</mo><mn>57.6</mn><mo>=</mo><mn>32.64</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



للتحقق: مقاومتا \\(2\\,\\mathrm{\\Omega}\\) تستهلكان قدرة حرارية، ومصدر \\(4\\,\\mathrm{V}\\) يمتص قدرة لأن التيار يدخله من قطبه الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mo stretchy="false">(</mo><mn>2.4</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2.4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>23.04</mn><mo>+</mo><mn>9.6</mn><mo>=</mo><mn>32.64</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p063-q388
title: السؤال 388 — ص 62 — السؤال الأصلي 31
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 62، السؤال 31
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يبين دارة كهربائية، معتمدًا على البيانات المثبتة على الشكل، جد:

1. جهد النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>b</mi></mrow></math>\` عندما يكون المفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>1</mn></msub></mrow></math>\` مفتوحًا، والمفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>2</mn></msub></mrow></math>\` مغلقًا.
2. القدرة المستنفدة في المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\` عندما يكون المفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>2</mn></msub></mrow></math>\` مفتوحًا، والمفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>S</mi><mn>1</mn></msub></mrow></math>\` مغلقًا.

![دارة بمصدرين ε₁=10 V وε₂=1 V ومفتاحين S₁ وS₂ ومقاومات ونقطة تأريض.](assets/lessons/curriculum-evidence/ee5b2bca927fb7775162.webp)
solution:
المفتاح المفتوح يقطع تيار فرعه. في المسار المتبقي نجمع المقاومات المتسلسلة لأن تيارها واحد، ثم نستخدم \\(I=\\varepsilon /R\\). حرارة المقاومة قدرتها \\(P=I^{2}R\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ee5b2bca927fb7775162.webp)

مع فتح المفتاح الأول وغلق الثاني، توجد مقاومتا الثمانية والاثني عشر أوم على التوالي مع مصدر العشرة فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>10</mn><mrow><mn>8</mn><mo>+</mo><mn>12</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>10</mn><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الأرض عند أسفل مقاومة الاثني عشر أوم، فنحسب جهد العقدة العليا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



عند عكس حالتي المفتاحين يبقى مسار آخر؛ المصدران يساعدان بعضهما حول الحلقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>10</mn><mo>+</mo><mn>1</mn></mrow><mrow><mn>8</mn><mo>+</mo><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>11</mn><mn>11</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نحسب القدرة الحرارية في مقاومة الثلاثة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p063-q389
title: السؤال 389 — ص 62 — السؤال الأصلي 32
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 62، السؤال 32
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل المجاور تخطيطًا يوضح التغيرات في الجهد في دارة كهربائية بسيطة، عند الحركة عبر الدارة باتجاه عكس عقارب الساعة، جد:

1. مقدار المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
2. فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow></math>\`، \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\`.
3. القدرة المستنفدة في البطارية.

![دارة كهربائية ومنحنى الجهد أسفلها مرتبطان بخطوط رأسية متقطعة تحدد نقاط الدارة.](assets/lessons/curriculum-evidence/913ea858fc6b953edb5c.webp)
solution:
من منحنى الجهد نقرأ فرق الجهد على المقاومة الداخلية وعلى الحمل. نستعمل \\(V=IR\\)؛ والفروع المتوازية لها الجهد نفسه، لذلك تُجمع مقلوبات مقاوماتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/913ea858fc6b953edb5c.webp)

نقرأ هبوط الجهد الداخلي من الرسم ونقسمه على المقاومة الداخلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>12</mn><mo>−</mo><mn>8</mn></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الجهد الخارجي ثمانية فولت، فتكون مكافئة فروع التوازي أربعة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>8</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نستخرج مقاومة الفرع الأوسط من علاقة الفروع الثلاثة، ثم نطرح الخمسة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>5</mn><mo>+</mo><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mrow><mn>5</mn><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>24</mn></mfrac></mrow></math>
\`\`\`



نوحد المقامات إلى \\(24\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mrow><mn>5</mn><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>24</mn></mfrac><mo>−</mo><mfrac><mn>3</mn><mn>24</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>24</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac></mrow></math>
\`\`\`



نأخذ مقلوب الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>5</mn><mo>+</mo><mi>R</mi><mo>=</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>12</mn><mo>−</mo><mn>5</mn><mo>=</mo><mn>7</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



تيار الفرع الأوسط يحدد جهد المقاومة المجهولة بين النقطتين المطلوبتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mfrac><mn>8</mn><mn>12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy="false">(</mo><mn>7</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mfrac><mn>14</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



المطلوب القدرة المستنفدة داخل البطارية التي تغذي الدارة، وهي حرارة مقاومتها الداخلية \\(r\\). نستخدم \\(P_{\\mathrm{internal}}=I^{2}r\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p063-q390
title: السؤال 390 — ص 62 — السؤال الأصلي 33
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 62، السؤال 33
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل جزءًا من دارة كهربائية، اعتمادًا على البيانات المثبتة على الشكل، احسب:

1. مقدار القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
2. القدرة الداخلة بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>c</mi></mrow></math>\`.
3. مقدار الهبوط في الجهد عبر البطارية التي قوتها الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>14</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`.

![جزء دارة بين a وc يتضمن تياري 3 A و4 A ومصدرًا مجهولًا ومصدر 14 V.](assets/lessons/curriculum-evidence/e1316f21e4d07a563e72.webp)
solution:
الفروع المتوازية لها فرق الجهد نفسه، وعند العقدة يُحفظ التيار. نستخدم \\(V=IR\\) ونراعي قطبية المصدر. وفق تعريف الكتاب، القدرة الداخلة لجزء الدارة تساوي قدرة طرفيه \\(IV\\) مضافة إليها قدرة المصدر المساعد داخله \\(\\varepsilon I\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/e1316f21e4d07a563e72.webp)

الفرع السفلي يحمل ثلاثة أمبير من اليسار إلى اليمين، فنحسب فرق الجهد المشترك بين الفرعين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">p</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">p</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



التيار الكلي أربعة أمبير؛ الباقي يمر في الفرع العلوي حيث البطارية تعاكسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">u</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>4</mn><mo>−</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">u</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>12</mn><mo>−</mo><mn>1</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نحسب فرق الجهد بين الطرفين؛ بطارية الأربعة عشر فولت تساعد التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>+</mo><mn>12</mn><mo>−</mo><mn>14</mn><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>c</mi></mrow></msub><mo>=</mo><mn>14</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نجمع قدرة الطرفين وقدرة المصدر المساعد للحصول على القدرة الداخلة وفق تعريف الكتاب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>14</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>14</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>112</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



هبوط جهد بطارية الأربعة عشر فولت يقع على مقاومتها الداخلية ذات الأوم الواحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>V</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>V</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p063-q391
title: السؤال 391 — ص 62 — السؤال الأصلي 34
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 62، السؤال 34
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل أدناه، إذا انعدمت قراءة الجلفانوميتر، فما مقدار المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`؟

![قنطرة بمقاومات 20 Ω و10 Ω و1 Ω وR و2R وجلفانوميتر بين الطرفين a وb.](assets/lessons/curriculum-evidence/e50afabfba3bafbbd9c3.webp)
solution:
انعدام قراءة الجلفانوميتر يعني تساوي جهدي نقطتي وصله. لذلك تتساوى نسبتا مقاومتي جزأي كل مسار من القنطرة؛ ونختزل أولًا زوج المقاومات المتوازية بقاعدة حاصل الضرب على المجموع.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/e50afabfba3bafbbd9c3.webp)

فرع المقاومة السفلي الأيمن يحتوي مقاومتين متوازيتين؛ نختزلهما أولًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi><mo separator="true">,</mo><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>R</mi><mo>∥</mo><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi><mo separator="true">,</mo><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>2</mn><mi>R</mi><mo stretchy="false">)</mo><mi>R</mi></mrow><mrow><mn>2</mn><mi>R</mi><mo>+</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><mn>3</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



عند اتزان القنطرة تتساوى نسبتا المقاومات على جانبيها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>20</mn><mn>10</mn></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>R</mi></mrow><mrow><mn>2</mn><mi>R</mi><mi mathvariant="normal">/</mi><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`



المقاومة \\(R\\) موجبة، لذلك جاز اختصارها في المكافئة السابقة. نسبة \\(20/10\\) تساوي \\(2\\)؛ نضرب معادلة الاتزان في \\(2R/3\\) لإزالة المقام:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>4</mn><mi>R</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>4</mn><mi>R</mi><mo>−</mo><mn>3</mn><mi>R</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>R</mi><mn>3</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p064-q392
title: السؤال 392 — ص 63 — السؤال الأصلي 35
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 63، السؤال 35
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، إذا كانت القدرة المستنفدة في البطارية والمفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>S</mi></mrow></math>\` مفتوحًا تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>50</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>\`، فإذا أصبحت القدرة المستنفدة في البطارية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>72</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>\` عند غلق المفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>S</mi></mrow></math>\`، احسب:

1. المقاومة الداخلية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>r</mi></mrow></math>\`.
2. القوة الدافعة الكهربائية للبطارية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
3. قراءة الفولتميتر قبل وبعد إغلاق الدارة الكهربائية.

![بطارية ε ومقاومتها r وفولتميتر ومقاومتان 4 Ω و12 Ω ومفتاح S.](assets/lessons/curriculum-evidence/9e1a40a271bbb4e442bd.webp)
solution:
القدرة المستنفدة داخل البطارية هي \\(P=I^{2}r\\). المقاومة الداخلية \\(r\\) ثابتة في الحالتين؛ لذلك نستخرج نسبة التيارين من نسبة القدرتين. عند الغلق تصبح المقاومتان الخارجيتان على التوازي.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/9e1a40a271bbb4e442bd.webp)

قبل غلق المفتاح يكون الحمل أربعة أوم، وبعده تتوازى الأربعة مع الاثني عشر فتكون المكافئة ثلاثة أوم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>o</mi></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>c</mi></msub><mo>=</mo><mn>4</mn><mo>∥</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><mn>12</mn></mrow><mrow><mn>4</mn><mo>+</mo><mn>12</mn></mrow></mfrac><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نسبة القدرتين الداخليتين تساوي مربع نسبة التيارين، لأن المقاومة الداخلية نفسها في الحالتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>I</mi><mi>c</mi></msub><msub><mi>I</mi><mi>o</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><mn>72</mn><mn>50</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>I</mi><mi>c</mi></msub><msub><mi>I</mi><mi>o</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><mn>36</mn><mn>25</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>6</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`



في الدارة البسيطة، التيار يساوي القوة الدافعة مقسومة على مجموع المقاومة الداخلية والخارجية. نستخدمها لأن المصدر والمقاومة الداخلية نفسيهما في الحالتين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>o</mi></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mi>r</mi><mo>+</mo><mn>4</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mfrac><mi>ε</mi><mrow><mi>r</mi><mo>+</mo><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`



عند قسمة \\(I_{c}\\) على \\(I_{o}\\) نختصر \\(\\varepsilon\\) المشتركة غير الصفرية؛ فتكون النسبة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi>r</mi><mo>+</mo><mn>4</mn></mrow><mrow><mi>r</mi><mo>+</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>5</mn><mi>r</mi><mo>+</mo><mn>20</mn><mo>=</mo><mn>6</mn><mi>r</mi><mo>+</mo><mn>18</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>20</mn><mo>−</mo><mn>18</mn><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب تيار الحالة الأولى ثم القوة الدافعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>o</mi></msub><mo>=</mo><msqrt><mfrac><mn>50</mn><mn>2</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>o</mi></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>30</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نحسب جهد الحمل في الحالتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>o</mi></msub><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>o</mi></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>30</mn><mrow><mn>2</mn><mo>+</mo><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>30</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>c</mi></msub><mo>=</mo><mn>6</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>c</mi></msub><mo>=</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p064-q393
title: السؤال 393 — ص 63 — السؤال الأصلي 36
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 63، السؤال 36
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وصلت أربع مقاومات كما في الشكل المجاور، احسب:

1. قيمة المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\` التي تجعل القنطرة في حالة اتزان.
2. شدة التيار المار في المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>30</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\`.

![قنطرة من مقاومات 20 Ω و10 Ω و30 Ω وR وجلفانوميتر وبطارية 18 V.](assets/lessons/curriculum-evidence/5e05e98081b69df9fd22.webp)
solution:
اتزان القنطرة يعني تساوي جهدي طرفي الجلفانوميتر وانعدام تياره؛ لذلك تتساوى نسب مقاومات الذراعين. بعد ذلك نستعمل قانون أوم \\(I=V/R\\) في كل مسار.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/5e05e98081b69df9fd22.webp)

عند اتزان القنطرة نساوي نسب مقاومات الأذرع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>20</mn><mn>10</mn></mfrac><mo>=</mo><mfrac><mn>30</mn><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>20</mn><mi>R</mi><mo>=</mo><mn>30</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نقسم الطرفين على \\(20\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>300</mn><mn>20</mn></mfrac><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



لا يمر تيار في الجلفانوميتر، فيتصل الثلاثون والخمسة عشر أوم على التوالي عبر جهد المصدر كله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>30</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mfrac><mn>18</mn><mrow><mn>30</mn><mo>+</mo><mn>15</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>30</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mfrac><mn>18</mn><mn>45</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>30</mn><mi mathvariant="normal">Ω</mi></mrow></msub><mo>=</mo><mn>0.4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p064-q394
title: السؤال 394 — ص 63 — السؤال الأصلي 37
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 63، السؤال 37
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل جزءًا من دارة كهربائية، اعتمادًا على البيانات المثبتة على الشكل، احسب:

1. فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>b</mi><mo separator="true">,</mo><mi>d</mi></mrow></math>\`.
2. مقدار القدرة الداخلة في الدارة.
3. الطاقة المستنفدة في المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>24</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>\` خلال ثانيتين.

![دارة بثلاثة فروع ومصدري 45 V و15 V ومقاومات 24 Ω و2 Ω و10 Ω ونقطة تأريض c.](assets/lessons/curriculum-evidence/d585dcffa501df53da92.webp)
solution:
نحسب محصلة قوتي المصدرين من قطبيتهما. للفروع المتوازية الجهد نفسه، ومكافئة مقاومتين هي حاصل ضربهما على مجموعهما. نستخدم \\(V=IR\\)؛ وقدرة المصدر المساعد \\(\\varepsilon I\\). طاقة المقاومة خلال زمن \\(t\\) تساوي قدرتها \\(I^{2}R\\) مضروبة في \\(t\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/d585dcffa501df53da92.webp)

المصدران في الفرع الأوسط متعاكسان، والحمل الخارجي فرعان متوازيان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>45</mn><mo>−</mo><mn>15</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>30</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mn>24</mn><mo>∥</mo><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>24</mn><mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo></mrow><mrow><mn>24</mn><mo>+</mo><mn>12</mn></mrow></mfrac><mo>=</mo><mn>8</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب التيار الأوسط ثم جهد الحمل وتيار كل فرع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>30</mn><mrow><mn>2</mn><mo>+</mo><mn>8</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>30</mn><mn>10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mn>3</mn><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mn>24</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>24</mn></msub><mo>=</mo><mfrac><mn>24</mn><mn>24</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mn>24</mn><mrow><mn>2</mn><mo>+</mo><mn>10</mn></mrow></mfrac><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نأخذ الأرض مرجعًا؛ نحسب جهدي النقطتين ثم نطرح بالترتيب المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mn>24</mn><mo>−</mo><mn>45</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo>−</mo><mn>21</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>d</mi></msub><mo>=</mo><mn>24</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>d</mi></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mi>d</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>21</mn><mo>−</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mi>d</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>41</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



بطارية \\(45\\,\\mathrm{V}\\) يغادرها التيار من القطب الموجب، فهي المصدر الذي يغذي الدارة. أما بطارية \\(15\\,\\mathrm{V}\\) فيدخل التيار قطبها الموجب فتُشحن، فلا نعدها ضمن القدرة الداخلة التي تنتجها المصادر. نضرب \\(45\\) فيتيارها \\(3\\,\\mathrm{A}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>45</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>135</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`



نستخدم تيار مقاومة الأربعة والعشرين أوم وزمن الثانيتين لحساب الطاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mn>24</mn></msub><mo>=</mo><msup><mn>1</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>24</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>W</mi><mn>24</mn></msub><mo>=</mo><mn>48</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p064-q395
title: السؤال 395 — ص 63 — السؤال الأصلي 38
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 63، السؤال 38
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل دارة كهربائية، إذا كان \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>b</mi><mi>a</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، جد:

1. مقدار المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
2. القوة الدافعة للبطارية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.

![دارة متعددة الفروع بمصدري 6 V و9 V ومصدر ε وتيار 3 A وتيارين I₁ وI₂.](assets/lessons/curriculum-evidence/ab779c32c5557ac3c4d7.webp)
solution:
نختار السلك السفلي مرجعاً صفرياً للجهد؛ فلا نحتاج إلى وجود تأريض فعلي لحساب فروق الجهد. مع التيار ينخفض الجهد \\(IR\\) في المقاومة، ومن موجب المصدر إلى سالبه ينخفض \\(\\varepsilon\\). وعند العقدة يُحفظ التيار؛ بهذه القواعد نتتبع الجهود في الرسم.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ab779c32c5557ac3c4d7.webp)

نأخذ السلك السفلي صفرًا؛ قطبية مصدر الستة فولت تجعل جهد النقطة الأولى سالب ستة فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mo>−</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>+</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo>−</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



تيار الفرع الأوسط صاعد، فيمر أمبير واحد في مقاومة الأوم؛ مصدر التسعة فولت يخفض الجهد نحو العقدة العليا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>0</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>1</mn><mo>−</mo><mn>9</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



التيار الأيمن ثلاثة أمبير، فنستخرج التيار الأيسر ثم المقاومة المجهولة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn>6</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>10</mn><mo stretchy="false">)</mo></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



ينخفض الجهد ثلاثة فولت على المقاومة العليا اليمنى؛ قطبية البطارية المجهولة تجعل قوتها الدافعة فرقًا إلى السلك السفلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi><mo separator="true">,</mo><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn><mo>−</mo><mn>3</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi><mo separator="true">,</mo><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>13</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>13</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p064-q396
title: السؤال 396 — ص 63 — السؤال الأصلي 39
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 63، السؤال 39
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور جزءًا من دارة كهربائية يسري فيها تيار كهربائي، احسب:

1. المقاومة المكافئة بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>X</mi><mo separator="true">,</mo><mi>Y</mi></mrow></math>\`.
2. مقدار المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
3. القدرة الداخلة.

![شبكة مقاومات بين X وY فيها 5 Ω و10 Ω و6 Ω و8 Ω وR وتياران فرعيان 1 A و2 A.](assets/lessons/curriculum-evidence/ddfaa229b62a5c01d6a6.webp)
solution:
نستخدم \\(V=IR\\) لكل مقاومة. عند العقدة تتساوى التيارات الداخلة والخارجة، ولأي مسارين بين \\(X\\) و \\(Y\\) فرق الجهد نفسه. بعد إيجاد الجهد والتيار الكليين نحسب \\(R\\) المكافئة=\\(V/I\\) والقدرة=\\(VI\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/ddfaa229b62a5c01d6a6.webp)

الفرع السفلي يحمل أمبيرين، فيكون هبوط الجهد على الثمانية أوم ستة عشر فولت. التيار الأوسط الهابط يجعل جهد العقدة العليا أعلى بستة فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>X</mi></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>X</mi></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">m</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



نحسب التيار في مقاومة الخمسة أوم من الفرق بين هذين الهبوطين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mn>16</mn><mo>−</mo><mn>6</mn></mrow><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>5</mn></msub><mo>=</mo><mfrac><mn>10</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>5</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



بعد نزول أمبير في الفرع الأوسط يبقى أمبير واحد في العشرة أوم، فنحسب الجهد الكلي والمقاومة المكافئة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>10</mn></msub><mo>=</mo><mn>2</mn><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>10</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo>+</mo><mn>1</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>X</mi><mi>Y</mi></mrow></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mfrac><mn>20</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">q</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



يتجمع في المقاومة المجهولة ثلاثة أمبير، وجهدها ما تبقى من هبوط الفرع السفلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>20</mn><mo>−</mo><mn>16</mn></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نضرب الجهد الكلي في التيار الكلي لإيجاد القدرة الداخلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>20</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>80</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p065-q397
title: السؤال 397 — ص 64 — السؤال الأصلي 40
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 64، السؤال 40
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، إذا كانت القنطرة متزنة، احسب:

1. المقاومة المكافئة الكلية للدارة.
2. قراءة الفولتميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\`.
3. جهد النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>b</mi></mrow></math>\`، \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mi>b</mi></msub></mrow></math>\`.

![قنطرة متزنة ضمن دارة بمصدر 60 V ومقاومات وأميتر وفولتميتر ونقطة تأريض.](assets/lessons/curriculum-evidence/a302d32fb1a97f3fbef1.webp)
solution:
اتزان القنطرة يعني انعدام تيار الجلفانوميتر وتساوي جهدي طرفيه، فتتساوى نسب مقاومات الأذرع. بعدها نجمع المتسلسل ونختزل المتوازي؛ وجهد بطارية تفرغ طاقتها هو \\(\\varepsilon -Ir\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a302d32fb1a97f3fbef1.webp)

اتزان القنطرة يحدد المقاومة المجهولة، ثم يسمح بإهمال تيار الجلفانوميتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>3</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>9</mn><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><mi>R</mi><mo>=</mo><mn>6</mn><mo stretchy="false">(</mo><mn>9</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>54</mn><mn>3</mn></mfrac><mo>=</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب مكافئة القنطرة ونضيف المقاومات المتسلسلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mo stretchy="false">(</mo><mn>3</mn><mo>+</mo><mn>6</mn><mo stretchy="false">)</mo><mo>∥</mo><mo stretchy="false">(</mo><mn>9</mn><mo>+</mo><mn>18</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>9</mn><mo>×</mo><mn>27</mn></mrow><mrow><mn>9</mn><mo>+</mo><mn>27</mn></mrow></mfrac><mo>=</mo><mfrac><mn>243</mn><mn>36</mn></mfrac><mo>=</mo><mn>6.75</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>6</mn><mo>+</mo><mn>6.75</mn><mo>+</mo><mn>1.25</mn><mo>+</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحسب التيار ثم جهد طرفي البطارية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>60</mn><mn>15</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>60</mn><mo>−</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>56</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الأميتر المثالي يصل النقطة \\(c\\) بالأرض، فجهد \\(c\\) صفر. الفولتميتر يقيس \\(V_{c}-V_{\\mathrm{negative}}=56\\,\\mathrm{V}\\)؛ إذن جهد الطرف السالب\\(-56\\,\\mathrm{V}\\).

ننتقل من الطرف السالب إلى \\(b\\) عكس التيار عبر \\(1.25\\,\\mathrm{\\Omega}\\)، فيرتفع الجهد بمقدار \\(IR=4\\times 1.25\\,\\mathrm{V}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">v</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>56</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo>−</mo><mn>56</mn><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>1.25</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><mo>−</mo><mn>51</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p065-q398
title: السؤال 398 — ص 64 — السؤال الأصلي 41
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 64، السؤال 41
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، إذا علمت أن الهبوط في جهد المصدر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math>\` يساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn></mrow></math>\` فولت، احسب:

1. شدة التيار المار في كل مصدر.
2. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>ε</mi><mn>3</mn></msub></mrow></math>\`.
3. القدرة المستنفدة في الدارة الكهربائية.

![ثلاثة مصادر ε₁=20 V وε₂=12 V وε₃ ومقاومات وتيارات فرعية.](assets/lessons/curriculum-evidence/027c5fd63f2002ed8042.webp)
solution:
هبوط جهد البطارية هنا هو \\(Ir\\) على مقاومتها الداخلية. نستخدم \\(V=IR\\) لحساب التيارات، ونحفظ التيار عند العقدة. القدرة المستنفدة تشمل حرارة المقاومات وقدرة شحن المصدر الذي يدخله التيار من موجبِه.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/027c5fd63f2002ed8042.webp)

هبوط الجهد في المصدر الثاني يقع على مقاومته الداخلية ذات الأوم الواحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نحسب فرق الجهد بين عقدتي الدارة من الفرع الأيسر، وهو قوة المصدر الأوسط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>12</mn><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



المصدر الأيمن يرفع الجهد عشرين فولت، والباقي يقع على الأربعة أوم؛ ثم نجمع التيارين عند العقدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>20</mn><mo>−</mo><mn>4</mn></mrow><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>16</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



نحسب حرارة المقاومات، ثم قدرة شحن المصدر الأوسط الذي يدخل التيار من قطبه الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>3</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>16</mn><mo>+</mo><mn>64</mn><mo>+</mo><mn>24</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>104</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p065-q399
title: السؤال 399 — ص 64 — السؤال الأصلي 42
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 64، السؤال 42
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور رسمًا تخطيطيًا يوضح التغيرات في الجهد عبر أجزاء الدارة الكهربائية البسيطة المجاورة له، معتمدًا على البيانات المثبتة، جد:

1. القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
2. شدة التيار الكهربائي في الدارة.
3. مقدار المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
4. قراءة الفولتميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\`.

![رسم تخطيطي لمنحنى الجهد مع المستويين 24 V و15 V وربطه بعناصر الدارة.](assets/lessons/curriculum-evidence/803bf07a139e682603d4.webp)
![دارة بمصدر مجهول ε ومصدر 6 V ومقاومة مجهولة R وفولتميتر.](assets/lessons/curriculum-evidence/433a366bb7d62b2e0119.webp)
solution:
نقرأ ارتفاع جهد المصادر وهبوطه داخلها من المنحنى. نستخدم \\(V=IR\\)؛ وللمقاومات المتوازية نجمع المقلوبات. جهد بطارية تفرغ طاقتها هو \\(\\varepsilon -Ir\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/803bf07a139e682603d4.webp)
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/433a366bb7d62b2e0119.webp)

المصدران يساعدان التيار؛ ارتفاع الجهد من الرسم يساوي مجموع قوتيهما الدافعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>+</mo><mn>6</mn><mo>=</mo><mn>24</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



الهبوط الداخلي تسعة فولت على مجموع مقاومتي المصدرين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>24</mn><mo>−</mo><mn>15</mn></mrow><mrow><mn>2</mn><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>9</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



الهبوط الخارجي خمسة عشر فولت؛ نحسب المكافئة الخارجية ثم مكافئة زوج التوازي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mfrac><mn>15</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>5</mn><mo>−</mo><mn>2</mn><mo>−</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نحل علاقة التوازي لإيجاد المقاومة المجهولة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>R</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>4</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نعتبر الفولتميتر مثالياً فلا يسحب تياراً. هو على طرفي مصدر \\(6\\,\\mathrm{V}\\) الذي يغذي التيار؛ لذلك يقيس القوة الدافعة ناقص الهبوط على مقاومته الداخلية \\(1\\,\\mathrm{\\Omega}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>6</mn><mo>−</mo><mn>3</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">r</mi></mrow></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p065-q400
title: السؤال 400 — ص 64 — السؤال الأصلي 43
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 64، السؤال 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة المجاورة، إذا كان فرق الجهد \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، احسب:

1. قراءة الأميتر \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>A</mi></mrow></math>\`.
2. المقاومة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
3. القدرة الداخلة في الدارة.

![دارة بمصدري 1.5 V و6 V ومقاومات 4 Ω و5 Ω وR وأميتر بين الطرفين x وy.](assets/lessons/curriculum-evidence/7a5bb5c0ea3a68f7d2b0.webp)
solution:
نستخدم \\(V=IR\\) على كل مقاومة، ثم حفظ التيار عند العقدة. مع التيار تهبط الجهود في المقاومات وعند عبور المصدر من موجبه إلى سالبه. قدرة المصدر المساعد هي \\(\\varepsilon I\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/7a5bb5c0ea3a68f7d2b0.webp)

فرق الجهد المعطى على مقاومة الخمسة أوم يحدد التيار الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><msub><mi>V</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.8</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



المصدر السفلي يجعل العقدة اليسرى أعلى من الطرف الأخير بستة فولت، فتكون أعلى من العقدة الوسطى بفولتَين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi>x</mi></msub><mo>=</mo><mn>6</mn><mo>−</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>−</mo><msub><mi>V</mi><mi>x</mi></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mfrac><mn>2</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>A</mi></msub><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



يمر باقي التيار في الفرع العلوي؛ بطاريته تعاكس التيار، فنستخرج المقاومة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>0.8</mn><mo>−</mo><mn>0.5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>0.3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mn>1.5</mn></mrow><mn>0.3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>0.5</mn><mn>0.3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



القدرة الداخلة تنتج من مصدر الستة فولت الذي يزوّد التيار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>6</mn><mo stretchy="false">(</mo><mn>0.8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>4.8</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p065-q401
title: السؤال 401 — ص 64 — السؤال الأصلي 44
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 64، السؤال 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، إذا أغلق المفتاح \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>S</mi></mrow></math>\` وبقيت قراءة الأميتر صفرًا، جد:

1. مقدار المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>R</mi><mn>1</mn></msub></mrow></math>\`.
2. شدة التيار الكهربائي المار في البطارية.

![قنطرة فيها أميتر ومقاومات R₁ وR₂=15 Ω وR₃=20 Ω وR₄=60 Ω وبطارية 12 V ومفتاح S.](assets/lessons/curriculum-evidence/e9e7bfd864246736fcba.webp)
solution:
صفر التيار في فرع القنطرة يعني تساوي جهدي طرفيه، ومنه تتساوى نسب مقاومات الأذرع. بعد إهمال تيار الفرع الأوسط نجمع المقاومات المتسلسلة ونختزل المتوازي، ثم نستعمل قانون أوم.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/e9e7bfd864246736fcba.webp)

انعدام تيار الأميتر يعني اتزان القنطرة، فنساوي نسب مقاومات الأذرع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>1</mn></msub><mn>15</mn></mfrac><mo>=</mo><mfrac><mn>20</mn><mn>60</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>R</mi><mn>1</mn></msub><mn>15</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>15</mn><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



لا يمر تيار في الفرع الأوسط؛ نحسب مكافئة المسارين المتوازيين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mo stretchy="false">(</mo><mn>5</mn><mo>+</mo><mn>20</mn><mo stretchy="false">)</mo><mo>∥</mo><mo stretchy="false">(</mo><mn>15</mn><mo>+</mo><mn>60</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mn>25</mn><mo>∥</mo><mn>75</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>25</mn><mo>×</mo><mn>75</mn></mrow><mrow><mn>25</mn><mo>+</mo><mn>75</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1875</mn><mn>100</mn></mfrac><mo>=</mo><mn>18.75</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`



نضيف المقاومة الداخلية للبطارية ثم نحسب تيارها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>18.75</mn><mo>+</mo><mn>1.25</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">Ω</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>12</mn><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.6</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p066-q403
title: السؤال 403 — ص 65 — السؤال الأصلي 46
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 65، السؤال 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الدارة الكهربائية المجاورة، إذا كانت قراءة الأميتر تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، جد:

1. مقدار القوة الدافعة الكهربائية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
2. جهد النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>X</mi></mrow></math>\`.
3. القدرة الداخلة في الدارة.

![دارة مؤرضة بمصدر 18 V ومصدر مجهول ε وأميتر يقرأ 4 A ومقاومات 3 Ω و2 Ω.](assets/lessons/curriculum-evidence/89ec1a0929f2389d2cd0.webp)
solution:
الأرض مرجع جهدها صفر. نستخدم \\(V=IR\\)، وحفظ التيار عند العقدة. في مصدر يزوّد التيار تكون قوته الدافعة جهد طرفيه مضافًا إليه الهبوط في مقاومة فرعه، وقدرته الداخلة \\(\\varepsilon I\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/89ec1a0929f2389d2cd0.webp)

الأميتر يحمل أربعة أمبير عبر مقاومة الثلاثة أوم إلى الأرض، فيحدد جهد العقدة العليا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>x</mi></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>x</mi></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



من مصدر الثمانية عشر فولت نحسب تيار الفرع الأيمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>18</mn><mo>−</mo><mn>12</mn></mrow><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>6</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`



يتكفل المصدر الأيسر بباقي التيار؛ نضيف هبوطه إلى جهد العقدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mo>−</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>12</mn><mo>+</mo><mn>1</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>15</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



المصدران يساعدان التيار، فنحسب مجموع قدرتيهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>15</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>+</mo><mn>18</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mn>69</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p066-q404
title: السؤال 404 — ص 65 — السؤال الأصلي 47
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 65، السؤال 47
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور جزءًا من دارة كهربائية، إذا علمت أن فرق الجهد بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub></mrow></math>\` يساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>\`، وبإهمال المقاومات الداخلية للبطاريات، احسب:

1. القوة الدافعة المجهولة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>ε</mi></mrow></math>\`.
2. القدرة المستنفدة بين النقطتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi><mo separator="true">,</mo><mi>b</mi></mrow></math>\`.

![جزء دارة بين a وb بتيار 2 A ومقاومتين 2 Ω و4 Ω ومصدر مجهول وآخر موسوم 20.](assets/lessons/curriculum-evidence/780f75f48e1980fae036.webp)
solution:
نستخدم تغير الجهد: المقاومة تخفضه \\(IR\\) مع التيار، والمصدر يرفعه من السالب إلى الموجب. القدرة المستنفدة هي حرارة المقاومات \\(I^{2}R\\) وقدرة شحن المصدر المعاكس \\(\\varepsilon I\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/780f75f48e1980fae036.webp)

نسير مع التيار من الطرف الأول إلى الثاني؛ تنخفض الجهود في المقاومتين والمصدر المجهول، ثم ترتفع عشرين فولت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>=</mo><msub><mi>V</mi><mi>a</mi></msub><mo>−</mo><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo><mo>−</mo><mi>ε</mi><mo>+</mo><mn>20</mn></mrow></math>
\`\`\`



نطرح \\(V_{a}\\) من الطرفين، ونجمع هبوط المقاومتين \\(2\\times 6=12\\,\\mathrm{V}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>b</mi></msub><mo>−</mo><msub><mi>V</mi><mi>a</mi></msub><mo>=</mo><mo>−</mo><mn>12</mn><mo>−</mo><mi>ε</mi><mo>+</mo><mn>20</mn><mo>=</mo><mn>8</mn><mo>−</mo><mi>ε</mi></mrow></math>
\`\`\`



نضرب في\\(-1\\) ليصبح ترتيب الجهد \\(V_{a}-V_{b}\\) كما طلب السؤال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mrow><mi>a</mi><mi>b</mi></mrow></msub><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn><mo>+</mo><mn>8</mn><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">V</mi></mrow></math>
\`\`\`



المصدر المجهول يعاكس التيار ويُشحن؛ نضيف قدرته الممتصة إلى حرارة المقاومتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>24</mn><mo>+</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mrow><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>44</mn><mtext> </mtext><mi mathvariant="normal">W</mi></mrow></math>
\`\`\`


:::
`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "دارات التيار المستمر",
  "summary": "أسئلة الكتاب بترتيب المصدر، تليها أسئلة إضافية مع الاحتفاظ باختلاف المعطيات.",
  "outcome": "مراجعة دارات التيار المستمر من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "146 سؤالًا",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
