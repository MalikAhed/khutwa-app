import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `
:::mcq
id: physics-book-2024-p018-review-1-1
title: أسئلة الفصل — س1/1 — الكتاب، صفحة PDF 18
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 18، أسئلة الفصل — س1/1
question: تدافع صديقان في صالة تزلج فتحركا في اتجاهين متعاكسين؛ كتلة أحدهما \\(55\\,\\mathrm{kg}\\) وسرعته \\(3\\,\\mathrm{m/s}\\)، وكتلة الآخر \\(50\\,\\mathrm{kg}\\) وسرعته \\(3.3\\,\\mathrm{m/s}\\). التغير في زخم الصديقين معًا بوحدة \\(\\mathrm{kg\\,m/s}\\):
- [ ] option-1 | \\(165\\)
- [ ] option-2 | \\(330\\)
- [ ] option-3 | \\(1050\\)
- [x] option-4 | \\(0\\)
explanation:
نعد الصديقين نظاماً واحداً ونهمل الاحتكاك الأفقي في صالة التزلج. قوى التدافع بينهما داخلية، لذلك لا يتغير الزخم الكلي للنظام.

للتأكد من المعطيات، نختار اتجاه الصديق الأول موجباً، فيكون اتجاه الثاني سالباً. الزخم الكلي هو مجموع الكتلة في السرعة لكل منهما مع الإشارة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>f</mi></msub><mo>=</mo><mn>55</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>+</mo><mn>50</mn><mo stretchy="false">(</mo><mo>−</mo><mn>3.3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>f</mi></msub><mo>=</mo><mn>165</mn><mo>−</mo><mn>165</mn><mo>=</mo><mn>0</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



وبحفظ الزخم يكون الزخم الابتدائي مساوياً له، فيكون التغير صفراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>P</mi><mo>=</mo><msub><mi>P</mi><mi>f</mi></msub><mo>−</mo><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



الإجابة: تغير الزخم الكلي صفر \\(\\,\\mathrm{kg\\,m/s}\\)، وهو الخيار الرابع.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p018-review-1-2
title: أسئلة الفصل — س1/2 — الكتاب، صفحة PDF 18
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 18، أسئلة الفصل — س1/2
question: في الشكل ثلاث كرات زجاجية متماثلة \\(A,B,C\\). تتحرك \\(A\\) بسرعة \\(6\\,\\mathrm{m/s}\\) نحو \\(B,C\\) الساكنتين والمتلامستين فتصطدم بـ\\(B\\) تصادمًا مرنًا، بإهمال الاحتكاك. ماذا يحدث بعد التصادم مباشرة؟
- [x] option-1 | تسكن الكرتان \\(A\\) و\\(B\\) وتتحرك \\(C\\) بسرعة \\(6\\,\\mathrm{m/s}\\).
- [ ] option-2 | تسكن الكرتان \\(A\\) و\\(B\\) وتتحرك \\(C\\) بسرعة \\(3\\,\\mathrm{m/s}\\).
- [ ] option-3 | تسكن \\(A\\) وتتحرك \\(B\\) و\\(C\\) بسرعة \\(2\\,\\mathrm{m/s}\\).
- [ ] option-4 | تتحرك الكرات الثلاث بسرعة \\(2\\,\\mathrm{m/s}\\).
explanation:
التصادم المرن يحفظ الزخم وطاقة الحركة. في التصادم المباشر على خط واحد بين كتلتين متماثلتين، تؤدي قاعدتا الحفظ إلى تبادل السرعتين: يأخذ كل منهما سرعة الآخر. نستخدم هذه النتيجة هنا لأن الكرات متماثلة والتصادم مرن ومباشر.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p018-review-1-2-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mi>B</mi><mi>i</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>B</mi><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mi>A</mi><mi>i</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>B</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



تنقل \\(B\\) الحركة إلى \\(C\\) المماثلة والساكنة، فتسكن \\(B\\) وتنطلق \\(C\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>B</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>C</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/2.](assets/lessons/physics/source-crops/physics-book-2024-p018-review-1-2-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p018-review-1-3
title: أسئلة الفصل — س1/3 — الكتاب، صفحة PDF 18
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 18، أسئلة الفصل — س1/3
question: إذا رمى رائد فضاء حجرًا صغيرًا وهو في الفضاء الخارجي، أي العبارات الآتية صحيحة؟
- [ ] option-1 | يتحرك رائد الفضاء والحجر بنفس السرعة ولكن باتجاهين متعاكسين.
- [ ] option-2 | يتحرك رائد الفضاء والحجر بسرعتين مختلفتين مقدارًا ولكن بالاتجاه نفسه.
- [x] option-3 | يتحرك رائد الفضاء بسرعة أقل من سرعة الحجر وباتجاه معاكس لحركة الحجر.
- [ ] option-4 | لا يتحرك أي منهما.
explanation:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p018-review-1-3-figure-01.webp)

نهمل الدفع الخارجي أثناء الرمي، فتكون القوى بين الرائد والحجر داخلية ويحفظ الزخم الكلي. نختار مرجعاً كانا فيه ساكنين قبل الرمي، فيكون الزخم الابتدائي صفراً.

حفظ الزخم يعني مساواة المجموع قبل الرمي بالمجموع بعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



نرمز لكتلة الرائد وسرعته بالرمزين \\(M\\) و\\(V\\)، ولكتلة الحجر وسرعته بالرمزين \\(m\\) و\\(v\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>M</mi><mover accent="true"><mi>V</mi><mo>⃗</mo></mover><mo>+</mo><mi>m</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نقسم على كتلة الرائد لنجد أن حركته تعاكس الحجر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>V</mi><mo>⃗</mo></mover><mo>=</mo><mo>−</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mover accent="true"><mi>v</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`



كتلة الحجر أصغر من كتلة الرائد، لذلك تكون سرعة الرائد أقل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>&lt;</mo><mi>M</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi><mo>&lt;</mo><mi mathvariant="normal">∣</mi><mi>v</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/3.](assets/lessons/physics/source-crops/physics-book-2024-p018-review-1-3-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p018-review-1-4
title: أسئلة الفصل — س1/4 — الكتاب، صفحة PDF 18
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 18، أسئلة الفصل — س1/4
question: جسمان \\(A,B\\) لهما نفس الكتلة؛ إذا كان زخم \\(A\\) مثلي زخم \\(B\\) فإن:
- [ ] option-1 | \\(K_A=2K_B\\)
- [x] option-2 | \\(K_A=4K_B\\)
- [ ] option-3 | \\(K_A=\\frac12 K_B\\)
- [ ] option-4 | \\(K_A=\\frac14 K_B\\)
explanation:
نربط طاقة الحركة بالزخم لأن المعطيات تتضمن الزخم أو نسبة طاقتين. من تعريف الزخم نستبدل السرعة بالزخم مقسومًا على الكتلة، مع افتراض أن الكتلة غير صفرية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>p</mi><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mrow><mo fence="true">(</mo><mfrac><mi>p</mi><mi>m</mi></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`



عند تساوي الكتلتين تتناسب طاقة الحركة مع مربع مقدار الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><msub><mi>p</mi><mi>A</mi></msub><msub><mi>p</mi><mi>B</mi></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`



زخم \\(A\\) مثْلا زخم \\(B\\)، فتكون طاقته أربعة أمثالها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p019-review-1-8
title: أسئلة الفصل — س1/8 — الكتاب، صفحة PDF 19
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س1/8
question: عندما يصطدم جسمان مختلفان في الكتلة فإن الدفع الذي يؤثر به كل جسم على الآخر:
- [x] option-1 | متساوٍ في المقدار ومتعاكس في الاتجاه لكل أنواع التصادمات.
- [ ] option-2 | متساوٍ في المقدار ومتعاكس في الاتجاه للتصادمات المرنة فقط.
- [ ] option-3 | متساوٍ لكل أنواع التصادمات.
- [ ] option-4 | متساوٍ في المقدار ومتعاكس في الاتجاه للتصادمات عديمة المرونة فقط.
explanation:
قانون نيوتن الثالث يقول إن القوة التي يؤثر بها الجسم الأول على الثاني تساوي قوة الثاني على الأول مقداراً وتعاكسها اتجاهاً، مهما اختلفت كتلتاهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>12</mn></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>21</mn></msub></mrow></math>
\`\`\`



الدفع هو متوسط القوة مضروباً في زمن تأثيرها. ولأن القوتين تؤثران خلال زمن التصادم نفسه، فإن الدفعين يتساويان مقداراً ويتعاكسان اتجاهاً أيضاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mn>12</mn></msub><mo>=</mo><msub><mover accent="true"><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mo>ˉ</mo></mover><mn>12</mn></msub><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mn>12</mn></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mo>ˉ</mo></mover><mn>21</mn></msub><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mn>21</mn></msub></mrow></math>
\`\`\`



هذه العلاقة تصح لكل أنواع التصادمات، ولا تشترط حفظ طاقة الحركة. الخيار الأول هو البيان الكامل؛ فالدفعان ليسا متساويين كمتجهين في الاتجاه نفسه، بل متعاكسان.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p019-review-1-9
title: أسئلة الفصل — س1/9 — الكتاب، صفحة PDF 19
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س1/9
question: يتحرك جسمان نحو بعضهما بسرعة \\(5\\,\\mathrm{m/s}\\) و\\(2\\,\\mathrm{m/s}\\)، فاصطدما تصادمًا مرنًا فارتد الثاني بنصف سرعته. ما سرعة الأول بعد التصادم مباشرة بوحدة \\(\\mathrm{m/s}\\)؟
- [ ] option-1 | \\(2\\)
- [ ] option-2 | \\(4\\)
- [x] option-3 | \\(6\\)
- [ ] option-4 | \\(8\\)
explanation:
في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نأخذ اتجاه الجسم الأول موجبًا؛ سرعة الثاني قبل التصادم سالبة وبعد ارتداده موجبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



في التصادم المرن تنعكس السرعة النسبية مع ثبات مقدارها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوّض بالإشارات ثم نعزل سرعة الجسم الأول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>5</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>7</mn><mo>=</mo><mn>1</mn><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



مقدار سرعة الجسم الأول بعد التصادم \\(6\\)م/ث، واتجاهه عكس اتجاهه الابتدائي؛ الإشارة\\(-6\\) تعبر عن هذا الاتجاه.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-book-2024-p019-review-3-2
title: أسئلة الفصل — س3 — فرع 2 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(3\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س3 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم سرعته \\(55\\,\\mathrm{m/s}\\) وكتلته \\(m_1\\) تصادم تصادمًا مرنًا مع جسم ساكن كتلته \\(5\\,\\mathrm{kg}\\). بعد التصادم تحرك الجسم الأول في الاتجاه المعاكس بسرعة \\(20\\,\\mathrm{m/s}\\). احسب:

2- سرعة الجسم الثاني بعد التصادم مباشرة.

solution:
في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نختار اتجاه الجسم الأول قبل التصادم موجبًا، فيكون ارتداده سالبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mn>55</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mn>0</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نساوي سرعة الاقتراب بسرعة الابتعاد لأن التصادم مرن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>55</mn><mo>−</mo><mn>0</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>20</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>55</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>20</mn></mrow></math>
\`\`\`



نطرح \\(20\\) من الطرفين لإيجاد سرعة الجسم الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>55</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>35</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: سرعة الجسم الثاني \\(35\\,\\mathrm{m/s}\\) في اتجاه الحركة الابتدائية للجسم الأول.
:::

:::exam-question
id: physics-book-2024-p019-review-4
title: أسئلة الفصل — س4 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(4\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عربة قطار كتلتها \\(2000\\,\\mathrm{kg}\\) تتحرك على قضبان مستقيمة أفقية بسرعة \\(2\\,\\mathrm{m/s}\\)، اصطدمت بها عربة أخرى كتلتها \\(3000\\,\\mathrm{kg}\\) تسير بالاتجاه نفسه وبسرعة \\(5\\,\\mathrm{m/s}\\) وتحركتا معًا كجسم واحد. ما مقدار السرعة المشتركة بعد التصادم؟

solution:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



تلتحم العربتان؛ نساوي زخمهما قبل التصادم بزخم الكتلة المجمعة بعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo stretchy="false">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy="false">)</mo><msub><mi>v</mi><mi>f</mi></msub></mrow></math>
\`\`\`



السرعتان في الاتجاه نفسه، فنجمع الزخمين ثم نقسم على مجموع الكتلتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mn>2000</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mn>3000</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2000</mn><mo>+</mo><mn>3000</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>19000</mn><mn>5000</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mn>3.8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p019-review-5-1
title: أسئلة الفصل — س5 — فرع 1 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(5\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س5 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تنزلق الكتلتان \\(2\\,\\mathrm{kg}\\)، \\(4\\,\\mathrm{kg}\\) من السكون من ارتفاع \\(5\\,\\mathrm{m}\\) على مستوى أملس كما في الشكل. إذا اصطدمتا تصادمًا مرنًا، جد:

1- سرعة كل من الكرتين قبل التصادم مباشرة.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p019-review-5-1-figure-01.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p019-review-5-1-figure-01.webp)

كل جسم يبدأ من السكون ويهبط \\(5\\) أمتار على سطح أملس، فتتحول طاقة وضعه إلى طاقة حركة دون فقد بالاحتكاك. نساوي طاقتي الوضع والحركة، ثم نقسم على الكتلة ونضرب في \\(2\\) ونأخذ الجذر الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>
\`\`\`



الارتفاع واحد، لذا تتساوى السرعتان مقدارًا بغض النظر عن الكتلتين؛ نستخدم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الشكل يضع كتلة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يسارًا وكتلة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يمينًا؛ نختار اليمين موجبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p019-review-5-2
title: أسئلة الفصل — س5 — فرع 2 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(5\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س5 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تنزلق الكتلتان \\(2\\,\\mathrm{kg}\\)، \\(4\\,\\mathrm{kg}\\) من السكون من ارتفاع \\(5\\,\\mathrm{m}\\) على مستوى أملس كما في الشكل. إذا اصطدمتا تصادمًا مرنًا، جد:

2- سرعة كل من الكرتين بعد التصادم مباشرة.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p019-review-5-1-figure-01.webp)

solution:
حفظ الزخم يعني مساواة مجموع زخم الجسمين قبل التصادم بمجموعه بعده. نستخدمه لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p019-review-5-1-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



قبل التصادم يحول كل جسم طاقة وضعه إلى حركة؛ نأخذ اليمين موجبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></msqrt><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحفظ الزخم الكلي مع مراعاة الاتجاهين المتعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mo>−</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نبسط الزخم الابتدائي إلى \\(-20\\)، ثم نقسم طرفي المعادلة على \\(2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn></mrow></math>
\`\`\`



التصادم مرن، فسرعة الابتعاد تساوي سرعة الاقتراب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>10</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>20</mn></mrow></math>
\`\`\`



نعوّض بالسرعة الثانية في معادلة الزخم لنستخرج السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>20</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>40</mn><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>50</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>50</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نعوض بقيمة السرعة الأولى في العلاقة بين السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>50</mn><mn>3</mn></mfrac><mo>+</mo><mn>20</mn><mo>=</mo><mfrac><mrow><mo>−</mo><mn>50</mn><mo>+</mo><mn>60</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>10</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p019-review-5-3
title: أسئلة الفصل — س5 — فرع 3 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(5\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س5 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تنزلق الكتلتان \\(2\\,\\mathrm{kg}\\)، \\(4\\,\\mathrm{kg}\\) من السكون من ارتفاع \\(5\\,\\mathrm{m}\\) على مستوى أملس كما في الشكل. إذا اصطدمتا تصادمًا مرنًا، جد:

3- أقصى ارتفاع تصل إليه كل من الكرتين بعد الاصطدام مباشرة.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 3.](assets/lessons/physics/source-crops/physics-book-2024-p019-review-5-1-figure-01.webp)

solution:
نرمز للكرة ذات الكتلة \\(2\\,\\mathrm{kg}\\) بالجسم الأول، ولذات الكتلة \\(4\\,\\mathrm{kg}\\) بالجسم الثاني. نأخذ اليمين موجباً، ونستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\) وفق تقريب المنهج.

![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p019-review-5-1-figure-01.webp)

نحتاج أولاً إلى سرعتيهما بعد التصادم، ثم نحول طاقة حركة كل منهما إلى طاقة وضع أثناء الصعود.

قبل التصادم يهبط كل جسم \\(5\\) أمتار من السكون على سطح أملس؛ لذلك تتحول طاقة الوضع إلى طاقة حركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نقسم على الكتلة ونضرب في \\(2\\)، ثم نأخذ الجذر لإيجاد مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></msqrt><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الأول يتحرك يميناً والثاني يساراً، فتكون سرعتاهما قبل التصادم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



أثناء التصادم نهمل الدفع الخارجي الأفقي، فيحفظ مجموع الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><mo stretchy="false">(</mo><mo>−</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نبسط الطرف الأيسر إلى \\(-20\\)، ثم نقسم الطرفين على \\(2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn></mrow></math>
\`\`\`



التصادم مرن، لذلك تساوي سرعة الابتعاد النسبية سرعة الاقتراب النسبية مقداراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>10</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>20</mn></mrow></math>
\`\`\`



نضيف \\(v_{1f}\\) للطرفين، ثم نعوض في معادلة الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>20</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>10</mn></mrow></math>
\`\`\`



نفك القوس ونجمع حدود السرعة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>40</mn><mo>=</mo><mo>−</mo><mn>10</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>50</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>50</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب السرعة الثانية بالتعويض في العلاقة بين السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>50</mn><mn>3</mn></mfrac><mo>+</mo><mn>20</mn><mo>=</mo><mfrac><mn>10</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



أثناء صعود كل كرة تتحول طاقة حركتها إلى طاقة وضع. عند أعلى نقطة تنعدم سرعتها، فنكتب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><mo>=</mo><mi>m</mi><mi>g</mi><mi>h</mi></mrow></math>
\`\`\`



نقسم على \\(mg\\) لإيجاد الارتفاع. مربع السرعة يجعل الارتفاع موجباً بغض النظر عن اتجاه الانطلاق.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`



للجسم الأول ذي الكتلة \\(2\\,\\mathrm{kg}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>50</mn><mi mathvariant="normal">/</mi><mn>3</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2500</mn><mi mathvariant="normal">/</mi><mn>9</mn></mrow><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>125</mn><mn>9</mn></mfrac><mo>≃</mo><mn>13.89</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



للجسم الثاني ذي الكتلة \\(4\\,\\mathrm{kg}\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>10</mn><mi mathvariant="normal">/</mi><mn>3</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>100</mn><mi mathvariant="normal">/</mi><mn>9</mn></mrow><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>9</mn></mfrac><mo>≃</mo><mn>0.556</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



الارتفاعان مقاسان من أسفل المسار.
:::

:::exam-question
id: physics-tawjihi-2025-p018-q115
title: مثال 2 — فرع 1 — الكتاب، صفحة PDF 15
question: مثال \\(2\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 15، مثال 2 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كرة كتلتها \\(2\\,\\mathrm{kg}\\) تتحرك تجاه الغرب بسرعة \\(6\\,\\mathrm{m/s}\\) فتصطدم بأخرى كتلتها \\(3\\,\\mathrm{kg}\\) تتحرك تجاه الشرق بسرعة \\(4\\,\\mathrm{m/s}\\). أصبحت سرعة الأولى بعد التصادم \\(4.5\\,\\mathrm{m/s}\\) شرقًا كما في الشكل. بقي الجسمان على الخط نفسه ودام التصادم \\(0.02\\,\\mathrm{s}\\). جد:

1- سرعة الكرة الثانية بعد التصادم مباشرة.

![الرسم الأصلي من كتاب الفيزياء — مثال 2 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p015-example-2-1-figure-01.webp)

solution:
نختار الشرق موجباً؛ بذلك تكون سرعة الكرة الأولى قبل التصادم \\(-6\\,\\mathrm{m/s}\\)، وسرعة الثانية \\(+4\\,\\mathrm{m/s}\\)، وسرعة الأولى بعده \\(+4.5\\,\\mathrm{m/s}\\).

![الرسم الأصلي](assets/lessons/physics/source-crops/physics-book-2024-p015-example-2-1-figure-01.webp)

نعد الكرتين نظاماً واحداً ونهمل الدفع الخارجي الأفقي أثناء التصادم؛ لذلك يحفظ مجموع الزخم. الزخم هو حاصل ضرب الكتلة في السرعة المتجهة.

نحسب الزخم الابتدائي بإشارات السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mo>−</mo><mn>6</mn><mo stretchy="false">)</mo><mo>+</mo><mn>3</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>12</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نساويه بمجموع الزخمين بعد التصادم، مع تسمية سرعة الكرة الثانية المجهولة \\(v_{2f}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>4.5</mn><mo stretchy="false">)</mo><mo>+</mo><mn>3</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



ننقل زخم الكرة الأولى للطرف الآخر ثم نقسم على \\(3\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>9</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo>−</mo><mn>9</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mo>−</mo><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: مقدار سرعة الكرة الثانية \\(3\\,\\mathrm{m/s}\\) غرباً.
:::

:::mcq
id: physics-tawjihi-2025-p015-q096
title: أسئلة الفصل — س1/5 — الكتاب، صفحة PDF 18
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 18، أسئلة الفصل — س1/5
question: اصطدم جسم كتلته \\(m\\) وسرعته \\(v\\) تصادمًا عديم المرونة بجسم آخر ساكن مماثل له في الكتلة، فإن الطاقة الضائعة:
- [ ] option-1 | \\(\\frac12 mv^2\\)
- [ ] option-2 | \\(mv^2\\)
- [ ] option-3 | \\(\\frac34 mv^2\\)
- [x] option-4 | \\(\\frac14 mv^2\\)
explanation:
التصادم عديم المرونة يعني التحام الجسمين وتحركهما بسرعة مشتركة. نهمل الدفع الخارجي أثناء التصادم، فيحفظ مجموع الزخم؛ والزخم حاصل ضرب الكتلة في السرعة المتجهة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>v</mi><mo>+</mo><mn>0</mn><mo>=</mo><mn>2</mn><mi>m</mi><msub><mi>v</mi><mi>f</mi></msub></mrow></math>
\`\`\`



نقسم طرفي معادلة الزخم على \\(2m\\)، وهي كتلة موجبة، لإيجاد السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>v</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



طاقة الحركة تساوي نصف الكتلة في مربع السرعة. بعد الالتحام الكتلة الكلية \\(2m\\)، وتربيع السرعة \\(v/2\\) يعطي \\(v^{2}/4\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نطرح الطاقة المتبقية من الطاقة الابتدائية لإيجاد المفقود.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p015-q092
title: أسئلة الفصل — س1/6 — الكتاب، صفحة PDF 19
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س1/6
question: في التصادم عديم المرونة، عندما تكون الطاقة الحركية النهائية غير صفرية، تكون النسبة بين الطاقة الحركية للنظام قبل التصادم إلى الطاقة الحركية بعد التصادم:
- [ ] option-1 | أقل من واحد
- [ ] option-2 | واحدًا
- [x] option-3 | أكبر من واحد
- [ ] option-4 | صفرًا
explanation:
في التصادم عديم المرونة يلتحم الجسمان ويتحركان بسرعة مشتركة، ويتحول جزء من طاقة الحركة إلى تشوه وحرارة وصوت؛ لذلك تكون الطاقة الابتدائية أكبر من النهائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><msub><mi>K</mi><mi>f</mi></msub><mo>+</mo><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo separator="true">,</mo><mspace width="2em"/><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`



النسبة المطلوبة تُحسب عندما تكون معرفة، أي عندما \\(K_{f}>0\\). نقسم معادلة الطاقة على الطاقة النهائية الموجبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>i</mi></msub><msub><mi>K</mi><mi>f</mi></msub></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><msub><mi>K</mi><mi>f</mi></msub></mfrac><mo>&gt;</mo><mn>1</mn></mrow></math>
\`\`\`



إذن الجواب المنهجي «أكبر من واحد». أما إذا توقفت المجموعة بعد الالتحام، فتصبح \\(K_{f}=0\\) وتكون النسبة غير معرفة؛ ليست لهذه الحالة قيمة أخرى من القيم المعروضة.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p015-q095
title: أسئلة الفصل — س1/7 — الكتاب، صفحة PDF 19
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س1/7
question: أي الكميات الفيزيائية تبقى محفوظة دائمًا في أية عملية تصادم في نظام معزول؟
- [ ] option-1 | طاقة الحركة
- [x] option-2 | الزخم
- [ ] option-3 | السرعة
- [ ] option-4 | الطاقة الميكانيكية
explanation:
الإجابة: الزخم الكلي للنظام.

العزل يعني انعدام محصلة القوة الخارجية؛ لذلك يكون دفعها صفرًا، فينعدم تغير الزخم الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>P</mi><mo>⃗</mo></mover><mo>=</mo><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



طاقة الحركة قد تتحول إلى حرارة أو تشوه في تصادم غير مرن، لكن ذلك لا يغير الزخم الكلي للنظام المعزول.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p016-q103
title: أسئلة الفصل — س2 — فرع 1 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(2\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س2 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

هناك فقد كبير للطاقة الحركية في التصادم عديم المرونة.

solution:
في التصادم عديم المرونة يلتحم الجسمان ويتحركان بسرعة مشتركة؛ لذلك تنعدم حركة كل منهما بالنسبة إلى الآخر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



السرعة النسبية هي فرق السرعتين، فتكون بعد الالتحام صفراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



للمعطيات الابتدائية نفسها، انعدام الحركة النسبية يجعل طاقة الحركة النهائية أقل مما تكون عليه إذا بقي الجسمان منفصلين بسرعتين مختلفتين؛ لذلك يكون الفقد أكبر.

الطاقة لا تختفي، بل يتحول جزء من طاقة الحركة إلى تشوه وحرارة وصوت، مع بقاء الزخم الكلي محفوظاً في النظام المعزول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><msub><mi>K</mi><mi>f</mi></msub><mo>+</mo><msub><mi>E</mi><mrow><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p016-q104
title: أسئلة الفصل — س2 — فرع 2 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(2\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س2 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

إذا سقطت كرة من الطين تجاه أرضية صلبة فإنها لا ترتد بشكل ملحوظ.

solution:
تتشوه كرة الطين عند اصطدامها، فتنتقل معظم طاقة حركتها إلى التشوه والحرارة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><msub><mi>K</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">f</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi></mrow></msub></mrow></math>
\`\`\`



طاقة الحركة تتناسب مع مربع السرعة عند ثبات الكتلة. لذلك، عندما لا يبقى للارتداد إلا طاقة حركة صغيرة جداً، تكون سرعة الارتداد صغيرة جداً أيضاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>≃</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>≃</mo><mn>0</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p018-q114
title: أسئلة الفصل — س3 — فرع 1 — الكتاب، صفحة PDF 19
question: أسئلة الفصل — س\\(3\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 19، أسئلة الفصل — س3 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم سرعته \\(55\\,\\mathrm{m/s}\\) وكتلته \\(m_1\\) تصادم تصادمًا مرنًا مع جسم ساكن كتلته \\(5\\,\\mathrm{kg}\\). بعد التصادم تحرك الجسم الأول في الاتجاه المعاكس بسرعة \\(20\\,\\mathrm{m/s}\\). احسب:

1- كتلة الجسم الأول.

solution:
المعطيات: سرعة الجسم الأول قبل التصادم \\(55\\,\\mathrm{m/s}\\)، وبعده \\(20\\,\\mathrm{m/s}\\) في الاتجاه المعاكس. الجسم الثاني كتلته \\(5\\,\\mathrm{kg}\\) وكان ساكناً. المطلوب كتلة الجسم الأول \\(m_{1}\\).

نختار اتجاه حركة الأول قبل التصادم موجباً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>55</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحتاج سرعة الجسم الثاني بعد التصادم. التصادم مرن، لذلك تساوي سرعة الابتعاد النسبية سرعة الاقتراب النسبية مقداراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>55</mn><mo>−</mo><mn>0</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>20</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نطرح \\(20\\) من الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>55</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>35</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نهمل الدفع الخارجي أثناء التصادم، فيحفظ مجموع الزخم، أي مجموع الكتلة مضروبة في السرعة المتجهة لكل جسم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mn>55</mn><mo stretchy="false">)</mo><mo>+</mo><mn>5</mn><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mo>−</mo><mn>20</mn><mo stretchy="false">)</mo><mo>+</mo><mn>5</mn><mo stretchy="false">(</mo><mn>35</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>55</mn><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mo>−</mo><mn>20</mn><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><mn>175</mn></mrow></math>
\`\`\`



نضيف \\(20m_{1}\\) للطرفين لجمع حدود الكتلة المجهولة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>75</mn><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mn>175</mn></mrow></math>
\`\`\`



نقسم على \\(75\\)، ثم نبسط الكسر بقسمة بسطه ومقامه على \\(25\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>175</mn><mn>75</mn></mfrac><mo>=</mo><mfrac><mn>7</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`


:::

:::mcq
id: physics-tawjihi-2025-p013-q081
title: أسئلة الوحدة — س1/1 — الكتاب، صفحة PDF 20
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 20، أسئلة الوحدة — س1/1
question: اصطدم جسم كتلته \\(m\\) وسرعته \\(v\\) تصادمًا عديم المرونة مع جسم آخر ساكن كتلته ثلاثة أمثال الأول، فإن الطاقة الضائعة نتيجة التصادم تساوي:
- [ ] option-1 | \\(\\frac12 mv^2\\)
- [ ] option-2 | \\(\\frac14 mv^2\\)
- [ ] option-3 | \\(\\frac18 mv^2\\)
- [x] option-4 | \\(\\frac38 mv^2\\)
explanation:
التصادم عديم المرونة يعني التحام الجسمين وتحركهما بسرعة واحدة. نعدهما نظاماً واحداً ونهمل الدفع الخارجي خلال التصادم، فيحفظ مجموع الزخم.

يلتحم الجسم المتحرك مع جسم ساكن كتلته \\(3m\\)؛ نحفظ الزخم لإيجاد السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>v</mi><mo>=</mo><mo stretchy="false">(</mo><mi>m</mi><mo>+</mo><mn>3</mn><mi>m</mi><mo stretchy="false">)</mo><msub><mi>v</mi><mi>f</mi></msub></mrow></math>
\`\`\`



نقسم طرفي معادلة الزخم على \\(4m\\)، وهي كتلة موجبة، لإيجاد السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>v</mi><mn>4</mn></mfrac></mrow></math>
\`\`\`



طاقة الحركة تساوي نصف الكتلة في مربع السرعة. نحسبها للكتلة المجمعة \\(4m\\) والسرعة المشتركة \\(v/4\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mi>m</mi><mo stretchy="false">)</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



الطاقة الابتدائية هي طاقة الجسم المتحرك فقط، لأن الآخر ساكن. نطرح الطاقة المتبقية من نصف \\(mv^{2}\\)؛ ونوحد المقامين بكتابة \\(1/2=4/8\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p013-q079
title: السؤال 079 — ص 12 — السؤال الأصلي 1
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 12، السؤال 1
question: تصادم جسمان تصادمًا مرنًا، الأول كتلته \\(m\\) ويتحرك بسرعة \\(2v\\) باتجاه جسم آخر كتلته \\(2m\\) يتحرك بسرعة مقدارها \\(v\\) نحو الجسم الأول، فكم تساوي السرعة النسبية للجسم الأول بالنسبة إلى الثاني بعد التصادم مباشرة؟ اعتبر اتجاه الحركة الابتدائية للجسم الأول موجبًا.
- [ ] option-1 | صفرًا
- [ ] option-2 | \\(-2v\\)
- [x] option-3 | \\(-3v\\)
- [ ] option-4 | \\(-4v\\)
explanation:
في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نختار اتجاه الجسم الأول موجبًا، فتكون السرعة الثانية سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>2</mn><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mi>v</mi></mrow></math>
\`\`\`



نحسب السرعة النسبية قبل التصادم بطرح السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>v</mi><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mi>v</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>v</mi></mrow></math>
\`\`\`



في التصادم المرن تنعكس السرعة النسبية مع بقاء مقدارها ثابتًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>3</mn><mi>v</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p013-q080
title: السؤال 080 — ص 12 — السؤال الأصلي 2
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 12، السؤال 2
question: اصطدم جسم \\(m\\) وسرعته \\(v\\) تصادمًا عديم المرونة مع جسم آخر ساكن كتلته \\(3m\\)، فإن الطاقة الحركية المتبقية للجسمين بعد التصادم:
- [x] option-1 | \\(\\frac18 mv^2\\)
- [ ] option-2 | \\(\\frac14 mv^2\\)
- [ ] option-3 | \\(\\frac38 mv^2\\)
- [ ] option-4 | \\(\\frac12 mv^2\\)
explanation:
التصادم عديم المرونة يعني التحام الجسمين وتحركهما بسرعة واحدة. نعدهما نظاماً واحداً ونهمل الدفع الخارجي خلال التصادم، فيحفظ مجموع الزخم.

نحفظ الزخم لإيجاد سرعة الجسمين بعد الالتحام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>v</mi><mo>=</mo><mo stretchy="false">(</mo><mi>m</mi><mo>+</mo><mn>3</mn><mi>m</mi><mo stretchy="false">)</mo><msub><mi>v</mi><mi>f</mi></msub></mrow></math>
\`\`\`



نقسم طرفي معادلة الزخم على \\(4m\\)، وهي كتلة موجبة، لإيجاد السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>v</mi><mn>4</mn></mfrac></mrow></math>
\`\`\`



طاقة الحركة تساوي نصف الكتلة في مربع السرعة؛ نستخدم الكتلة الكلية \\(4m\\) والسرعة المشتركة \\(v/4\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mi>m</mi><mo stretchy="false">)</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p013-q082
title: السؤال 082 — ص 12 — السؤال الأصلي 4
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 12، السؤال 4
question: اصطدمت كرة كتلتها \\(2\\,\\mathrm{kg}\\) تتحرك بسرعة \\(2\\,\\mathrm{m/s}\\) بكرة أخرى ساكنة كتلتها \\(3\\,\\mathrm{kg}\\) تصادمًا مرنًا، فما مقدار التغير في الطاقة الحركية الناتج عن التصادم بوحدة الجول؟
- [x] option-1 | صفر
- [ ] option-2 | \\(\\frac14\\)
- [ ] option-3 | \\(\\frac13\\)
- [ ] option-4 | \\(\\frac12\\)
explanation:
التصادم مرن، لذلك يبقى مجموع طاقتي الحركة محفوظًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>+</mo><msub><mi>K</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>K</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><msub><mi>K</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



التغير في طاقة النظام هو النهائي ناقص الابتدائي، فيساوي صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><msub><mi>K</mi><mi>f</mi></msub><mo>−</mo><msub><mi>K</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mn>0</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p013-q083
title: السؤال 083 — ص 12 — السؤال الأصلي 5
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 12، السؤال 5
question: إذا سقطت كرة على الأرض وارتدت إلى نفس الارتفاع الذي سقطت منه فإن:
- [x] option-1 | التصادم المرن
- [ ] option-2 | التصادم عديم المرونة
- [ ] option-3 | التصادم غير المرن
- [ ] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>P</mi><mtext>الكرة</mtext></msub><mo>=</mo><mn>0</mn></mrow></math>\`
explanation:
نهمل مقاومة الهواء في السقوط والصعود. عندئذ تتحول طاقة الوضع إلى حركة أثناء النزول، ثم تتحول طاقة الارتداد إلى وضع أثناء الصعود.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mi>m</mi><mi>g</mi><msub><mi>h</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mi>m</mi><mi>g</mi><msub><mi>h</mi><mi>f</mi></msub></mrow></math>
\`\`\`



عودة الكرة إلى الارتفاع نفسه تعني \\(h_{f}=h_{i}\\)، فتتساوى طاقتا الحركة قبل الاصطدام وبعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mi>m</mi><mi>g</mi><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mi>m</mi><mi>g</mi><msub><mi>h</mi><mi>i</mi></msub><mo>=</mo><msub><mi>K</mi><mi>i</mi></msub></mrow></math>
\`\`\`



التصادم الذي يحفظ طاقة الحركة يسمى تصادماً مرناً؛ لذلك الخيار الأول صحيح.

ثبات طاقة الحركة لا يعني أن زخم الكرة لم يتغير؛ فالكرة تعكس اتجاه حركتها عند الارتداد.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p013-q084
title: السؤال 084 — ص 12 — السؤال الأصلي 6
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 12، السؤال 6
question: في الشكل المجاور: ثلاث كرات زجاجية متماثلة الكتلة \\(A,B,C\\)، إذا تحركت الكرة \\(C\\) بسرعة مقدارها \\(12\\,\\mathrm{m/s}\\) نحو الكرتين \\(A,B\\) الساكنتين والمتلامستين فاصطدمت بالكرة \\(A\\) تصادمًا مرنًا – بإهمال الاحتكاك – فإنه بعد التصادم مباشرة:
- [ ] option-1 | تتحرك الكرات الثلاثة بسرعة \\(4\\,\\mathrm{m/s}\\).
- [ ] option-2 | تسكن الكرة \\(C\\) وتتحرك الكرتان \\(B\\)، \\(A\\) بسرعة \\(4\\,\\mathrm{m/s}\\).
- [x] option-3 | تسكن الكرتان \\(C\\)، \\(A\\) وتتحرك الكرة \\(B\\) بسرعة \\(12\\,\\mathrm{m/s}\\).
- [ ] option-4 | تسكن الكرتان \\(C\\)، \\(A\\) وتتحرك الكرة \\(B\\) بسرعة \\(6\\,\\mathrm{m/s}\\).
explanation:
في التصادم المرن بين كرتين متماثلتين تتبادلان السرعتين؛ تنقل \\(C\\) سرعتها إلى \\(A\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/3bcf7824f8d56b2b0833.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>C</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>A</mi></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



تنقل \\(A\\) الحركة إلى \\(B\\) الملامسة لها، فتسكن \\(A\\) وتنطلق \\(B\\) بالسرعة نفسها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>C</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mi>B</mi><mi>f</mi></mrow></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ثلاث كرات B وA وC على سطح أفقي وسهم سرعة للكرة C.](assets/lessons/curriculum-evidence/3bcf7824f8d56b2b0833.webp)
:::

:::mcq
id: physics-tawjihi-2025-p013-q085
title: السؤال 085 — ص 12 — السؤال الأصلي 7
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 12، السؤال 7
question: ما الصيغة التي تمثل القانون الثالث لنيوتن في التصادم بين جسمين؟
- [ ] option-1 | \\(F=\\frac{\\Delta P}{\\Delta t}\\)
- [x] option-2 | \\(\\Delta P_1=-\\Delta P_2\\)
- [ ] option-3 | \\(P=0\\)
- [ ] option-4 | \\(\\Delta P=0\\)
explanation:
قانون نيوتن الثالث يجعل قوتي التصادم متساويتين مقدارًا ومتعاكستين اتجاهًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>12</mn></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>21</mn></msub></mrow></math>
\`\`\`



العلاقة صحيحة في كل لحظة، لذلك تنطبق أيضاً على متوسطي القوتين. نضرب المتوسطين في مدة التصادم نفسها، ثم نستبدل الدفع بتغير الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mo>ˉ</mo></mover><mn>12</mn></msub><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mo>−</mo><msub><mover accent="true"><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mo>ˉ</mo></mover><mn>21</mn></msub><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mn>1</mn></msub><mo>=</mo><mo>−</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mn>2</mn></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p014-q086
title: السؤال 086 — ص 13 — السؤال الأصلي 8
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 13، السؤال 8
question: في تجربة السكة الهوائية تصادمت عربتان مختلفتان في الكتلة وتتحركان باتجاهين متعاكسين تصادمًا مرنًا، فإذا كانت كتلة العربة الأولى \\(m\\)، وكتلة العربة الثانية \\(4m\\) وسرعة العربة الأولى قبل التصادم \\(v\\) وسرعة العربة الثانية قبل التصادم \\(2v\\)، فما مقدار السرعة النسبية للعربتين بعد التصادم؟
- [ ] option-1 | \\(0\\)
- [x] option-2 | \\(3v\\)
- [ ] option-3 | \\(2v\\)
- [ ] option-4 | \\(4v\\)
explanation:
في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نختار اتجاه العربة الأولى موجبًا؛ الثانية تتحرك باتجاه معاكس بسرعة مقدارها \\(2v\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>+</mo><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn><mi>v</mi></mrow></math>
\`\`\`



مقدار سرعة الاقتراب هو الفرق بين السرعتين ذواتي الإشارة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><mi>v</mi><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>2</mn><mi>v</mi><mo stretchy="false">)</mo><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>3</mn><mi>v</mi></mrow></math>
\`\`\`



التصادم مرن، لذلك يبقى مقدار السرعة النسبية نفسه بعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>3</mn><mi>v</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p014-q087
title: السؤال 087 — ص 13 — السؤال الأصلي 9
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 13، السؤال 9
question: عند اصطدام كرتين إحداهما أكبر كتلة من الأخرى، فإن مقدار القوة التي تحدثها كل منهما على الأخرى تكون:
- [ ] option-1 | الكتلة الأكبر تحدث قوة أكبر
- [ ] option-2 | الكتلة الأصغر تحدث قوة أكبر
- [x] option-3 | القوتان متساويتان في المقدار ومتعاكستان في الاتجاه
- [ ] option-4 | تعتمد على مقدار سرعة الأجسام قبل التصادم
explanation:
قوة الكرة الأولى على الثانية وقوة الثانية على الأولى زوج فعل ورد فعل؛ وقانون نيوتن الثالث يجعل هذا الزوج متساويًا مقدارًا ومتعاكسًا اتجاهًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>12</mn></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>21</mn></msub></mrow></math>
\`\`\`



لذلك تتساوى القوتان مقدارًا حتى لو اختلفت الكتلتان. وبحسب قانون نيوتن الثاني \\(a=F/m\\)، تؤدي القوة نفسها إلى تسارع أكبر للكتلة الأصغر؛ اختلاف الكتلة يغيّر التسارع، لا علاقة الفعل ورد الفعل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>F</mi><mn>12</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mi mathvariant="normal">∣</mi><msub><mi>F</mi><mn>21</mn></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>a</mi><mn>1</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>F</mi><mi mathvariant="normal">∣</mi></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>a</mi><mn>2</mn></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>F</mi><mi mathvariant="normal">∣</mi></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p014-q088
title: السؤال 088 — ص 13 — السؤال الأصلي 10
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 13، السؤال 10
question: أي العبارات الآتي صحيحة بالنسبة للتصادم غير المرن؟
- [ ] option-1 | السرعة النسبية لأحد الجسمين قبل وبعد التصادم متساوية مقدارًا ومتعاكسة اتجاهًا.
- [ ] option-2 | التغير في زخم أحد الجسمين يكون أكبر من التغير في الزخم للجسم الآخر.
- [x] option-3 | الدفع الذي يؤثر به أحد الجسمين المتصادمين على الجسم الآخر متساوٍ في المقدار ومتعاكس في الاتجاه.
- [ ] option-4 | النسبة بين الطاقة الحركية للنظام قبل التصادم إلى الطاقة الحركية للنظام بعد التصادم تساوي واحد صحيح.
explanation:
بحسب قانون نيوتن الثالث، تتساوى قوتا التصادم مقداراً وتتعاكسان اتجاهاً في كل لحظة، سواء كان التصادم مرناً أم غير مرن.

حتى في التصادم غير المرن تظل قوتا التأثير المتبادل متعاكستين في كل لحظة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>12</mn></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mn>21</mn></msub></mrow></math>
\`\`\`



الدفع يساوي متوسط القوة مضروباً في زمن تأثيرها. تشترك القوتان في زمن التصادم، فتنتج عنهما دفعتان متساويتان مقداراً ومتعاكستان اتجاهاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mn>12</mn></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mn>21</mn></msub></mrow></math>
\`\`\`



المرونة تؤثر في حفظ طاقة الحركة، ولا تغير هذه العلاقة بين الدفعين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>&lt;</mo><msub><mi>K</mi><mi>i</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p014-q089
title: السؤال 089 — ص 13 — السؤال الأصلي 11
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 13، السؤال 11
question: اصطدم جسم \\(A\\) كتلته \\(m_1\\) ومتحرك بسرعة \\(v_1\\) بكرة كتلتها \\(m_2\\) وسرعتها \\(v_2\\)، حيث \\(m_1>m_2\\) و\\(v_2>v_1\\) تصادمًا عديم المرونة، فإن التغير في الزخم:
- [ ] option-1 | يكون أكبر للكرة منه للجسم \\(A\\).
- [ ] option-2 | يكون أكبر للجسم \\(A\\) منه للكرة.
- [x] option-3 | متساوٍ في المقدار ومتعاكس في الاتجاه.
- [ ] option-4 | متساوٍ في المقدار ومتماثل في الاتجاه.
explanation:
نهمل الدفع الخارجي خلال التصادم القصير. قانون نيوتن الثالث يجعل قوتي التفاعل متساويتين مقداراً ومتعاكستين اتجاهاً، ولا يغير اختلاف الكتلتين والسرعتين هذه العلاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mrow><mi>B</mi><mo>→</mo><mi>A</mi></mrow></msub></mrow></math>
\`\`\`



هذه العلاقة تصح أيضاً لمتوسطي القوتين. وبضرب كل متوسط في زمن التصادم نفسه نحصل على دفعه؛ والدفع يساوي تغير الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>A</mi></msub><mo>=</mo><mo>−</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>B</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p014-q090
title: السؤال 090 — ص 13 — السؤال الأصلي 12
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 13، السؤال 12
question: كرتان \\(A,B\\) متماثلتان في الكتلة ومعلقتان بخيطين طول كل منهما \\(1\\,\\mathrm{m}\\)، سحبت الكرة \\(A\\) حتى أصبح الخيط أفقيًا، وتركت لتسقط من السكون وتصطدم بالكرة \\(B\\) الساكنة عند أخفض نقطة تصادمًا عديم المرونة، ما الارتفاع الذي تصل إليه الكرتان معًا بعد التصادم؟
- [ ] option-1 | \\(0.05\\,\\mathrm{m}\\)
- [x] option-2 | \\(0.25\\,\\mathrm{m}\\)
- [ ] option-3 | \\(0.5\\,\\mathrm{m}\\)
- [ ] option-4 | \\(1\\,\\mathrm{m}\\)
explanation:
نفصل الحركة إلى نزول، ثم تصادم، ثم صعود. نهمل مقاومة الهواء والاحتكاك أثناء التأرجح، فتتحول طاقة الوضع والحركة إحداهما إلى الأخرى. أما أثناء التصادم عديم المرونة فنحفظ الزخم في اتجاه الحركة، ولا نفترض حفظ طاقة الحركة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/28e58e454a2a277f156f.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>g</mi><mi>h</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نزول الكرة \\(A\\) من الوضع الأفقي يخفضها مسافة تساوي طول الخيط، وهو متر واحد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>i</mi></msub><mo>=</mo><mi>L</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>i</mi></msub><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>g</mi><msub><mi>h</mi><mi>i</mi></msub></mrow></math>
\`\`\`



خلال التصادم نهمل الدفع الخارجي في اتجاه الحركة، فنحفظ الزخم. الالتحام يجعل الكتلة النهائية \\(2m\\)، ومن ثم تصبح السرعة المشتركة نصف السرعة قبل الاصطدام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>v</mi><mo>=</mo><mn>2</mn><mi>m</mi><msub><mi>v</mi><mi>f</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>v</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



أثناء الصعود تتحول طاقة حركة الكتلة المجمعة \\(2m\\) إلى طاقة وضع، وتصبح سرعتها صفراً عند أعلى نقطة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><mo>=</mo><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo><mi>g</mi><msub><mi>h</mi><mi>f</mi></msub></mrow></math>
\`\`\`



نقسم على \\(2mg\\) لإيجاد الارتفاع؛ لذلك تعتمد النتيجة على مربع السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mfrac><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>g</mi><msub><mi>h</mi><mi>i</mi></msub></mrow><mrow><mn>8</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mfrac><msub><mi>h</mi><mi>i</mi></msub><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mn>0.25</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![موضعا الكرتين المعلقتين A وB قبل تحرير الكرة A.](assets/lessons/curriculum-evidence/28e58e454a2a277f156f.webp)
:::

:::mcq
id: physics-tawjihi-2025-p014-q091
title: السؤال 091 — ص 13 — السؤال الأصلي 13
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 13، السؤال 13
question: في الشكل المجاور ما الذي يجعل عدد الكرات التي تنطلق بعد التصادم يساوي عدد الكرات المتحركة قبل التصادم؟
- [ ] option-1 | حفظ الزخم والتغير في الطاقة الحركية
- [ ] option-2 | التغير في الزخم وحفظ الطاقة الحركية
- [x] option-3 | حفظ الزخم والطاقة الحركية معًا
- [ ] option-4 | التغير في الطاقة الميكانيكية
explanation:
الكرات متماثلة والتصادم مرن، فنتحقق من حفظ الزخم وطاقة الحركة معاً.

نرمز لعدد الكرات الداخلة بالرمز \\(n\\) ولعدد الخارجة بالرمز \\(k\\)، ولكتلة كل كرة بالرمز \\(m\\)، ولمقدار سرعة الداخلة بالرمز \\(v\\) والخارجة بالرمز \\(u\\).

حفظ الزخم يساوي مجموع زخم الكرات قبل التصادم بمجموعه بعده.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/489efac5b3c84821b73e.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mi>m</mi><mi>v</mi><mo>=</mo><mi>k</mi><mi>m</mi><mi>u</mi></mrow></math>
\`\`\`



حفظ طاقة الحركة يعطي علاقة ثانية بين العددين والسرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>n</mi><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نقسم معادلة الطاقة على معادلة الزخم لإلغاء عدد الكرات والكتلة. مع الحركة غير الصفرية نحصل على:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>v</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mi>u</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`



إذن \\(u=v\\). نرجع إلى معادلة الزخم ونختصر \\(mv\\) غير الصفر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>k</mi><mo>=</mo><mi>n</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ترتيبان لكرات معلقة يبينان المواضع قبل التصادم وبعده.](assets/lessons/curriculum-evidence/489efac5b3c84821b73e.webp)
:::



:::mcq
id: physics-tawjihi-2025-p015-q094
title: السؤال 094 — ص 14 — السؤال الأصلي 16
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 14، السؤال 16
question: في التصادم عديم المرونة بين جسمين، أي من الآتية تعتبر صحيحة؟
- [ ] option-1 | \\(\\sum K_f=\\sum K_i\\)
- [x] option-2 | \\(V_{12f}=0\\)
- [ ] option-3 | \\(\\sum K_f>\\sum K_i\\)
- [ ] option-4 | \\(V_{12i}=V_{21f}\\)
explanation:
يلتحم الجسمان في التصادم عديم المرونة، فتكون سرعتهما النهائية واحدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mi>f</mi></msub></mrow></math>
\`\`\`



السرعة النسبية هي فرق السرعتين، ولذلك تساوي صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::





:::mcq
id: physics-tawjihi-2025-p015-q097
title: السؤال 097 — ص 14 — السؤال الأصلي 19
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 14، السؤال 19
question: أي العبارات الآتية صحيحة بالنسبة للتصادم غير المرن؟
- [ ] option-1 | \\(\\sum P_i>\\sum P_f\\)
- [ ] option-2 | \\(\\sum P_i<\\sum P_f\\)
- [x] option-3 | \\(\\sum K_i\\ne\\sum K_f\\)
- [ ] option-4 | \\(\\sum K_i=\\sum K_f\\)
explanation:
يتحول جزء من طاقة الحركة في التصادم غير المرن إلى حرارة وصوت وتشوه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mo>∑</mo><msub><mi>K</mi><mi>i</mi></msub><mo>−</mo><mo>∑</mo><msub><mi>K</mi><mi>f</mi></msub><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`



إذن مجموع طاقتي الحركة قبل التصادم أكبر من مجموعهما بعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>K</mi><mi>i</mi></msub><mo>&gt;</mo><mo>∑</mo><msub><mi>K</mi><mi>f</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mi>K</mi><mi>i</mi></msub><mo mathvariant="normal">≠</mo><mo>∑</mo><msub><mi>K</mi><mi>f</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p015-q098
title: السؤال 098 — ص 14 — السؤال الأصلي 20
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 14، السؤال 20
question: جسم كتلته \\(m\\) يتحرك بسرعة \\(V\\) نحو جسم آخر ساكن كتلته \\(2m\\)، اصطدم به وارتد في الاتجاه المعاكس، إذا علمت أن الدفع المؤثر على الجسم الساكن يساوي \\(\\frac{4mV}{3}\\)، فجد مقدار سرعة الجسم الأول بعد التصادم مباشرة؟
- [ ] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\`
- [ ] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>V</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>V</mi></mrow></math>\`
- [x] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>V</mi></mrow></math>\`
explanation:
نختار اتجاه حركة الجسم الأول قبل التصادم موجباً. كتلة الأول \\(m\\) وسرعته \\(V\\)، والجسم الثاني ساكن أولاً. نرمز لسرعة الأول بعد التصادم بالرمز \\(v_{1f}\\).

الدفع يساوي تغير الزخم، والزخم هو الكتلة مضروبة في السرعة المتجهة. ولأن الثاني بدأ من السكون، يساوي زخمه النهائي الدفع الذي تلقاه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>m</mi><mi>V</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



نهمل الدفع الخارجي خلال التصادم، فيحفظ مجموع الزخم. الزخم الابتدائي هو \\(mV\\) للجسم الأول فقط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>V</mi><mo>=</mo><mi>m</mi><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mfrac><mrow><mn>4</mn><mi>m</mi><mi>V</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



ننقل زخم الثاني للطرف الآخر ونوحد المقام بكتابة \\(mV=3mV/3\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mi>m</mi><mi>V</mi><mo>−</mo><mfrac><mrow><mn>4</mn><mi>m</mi><mi>V</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mrow><mi>m</mi><mi>V</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



نقسم على الكتلة غير الصفرية \\(m\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mi>V</mi><mn>3</mn></mfrac></mrow></math>
\`\`\`



السالب يدل على الارتداد؛ مقدار السرعة المطلوب هو \\(V/3\\)، وهو الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::exam-question
id: physics-tawjihi-2025-p016-q099
title: السؤال 099 — ص 15 — السؤال الأصلي 1
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 15، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: البندول القذفي؟
solution:
**الإجابة:** أداة لحساب سرعة اصطدام رصاصة تستقر في قطعة خشبية معلقة بحبلين متساويين متوازيين غير مرنين.

**الشاهد من الكتاب:**

> البندول القذفي البسيط المستخدم لحساب سرعة اصطدام رصاصة تستقر في القطعة الخشبية، ويتكون من كتلة خشبية معلقة بحبلين متساويين في الطول متوازيين غير مرنين، حيث كتلة الخشبة المعلقة أكبر بكثير من كتلة الرصاصة.

**المصدر:** صفحة \\(15\\) من الكتاب.



:::

:::exam-question
id: physics-tawjihi-2025-p016-q100
title: السؤال 100 — ص 15 — السؤال الأصلي 2
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 15، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: التصادم غير المرن؟
solution:
الإجابة: تصادم لا تُحفظ فيه الطاقة الحركية، ويتحرك كل من الجسمين منفرداً بعده، بحسب تصنيف الكتاب.

الكتاب: التصادم غير المرن — تصنيف المثال \\(2\\)، الصفحة المطبوعة \\(13\\)، صفحة \\(\\mathrm{PDF} 15\\).

> بما أن الطاقة الحركية ليست محفوظة، وتحرك كل من الجسمين بشكل منفرد بعد التصادم مباشرة، فهو تصادم غير مرن.




:::

:::exam-question
id: physics-tawjihi-2025-p016-q101
title: السؤال 101 — ص 15 — السؤال الأصلي 3
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 15، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: التصادم المرن؟
solution:
الإجابة: تصادم يتحقق فيه حفظ الزخم وحفظ الطاقة الحركية.

الكتاب: التصادم المرن، الصفحة المطبوعة \\(11\\)، صفحة \\(\\mathrm{PDF} 13\\).

> ويتحقق فيه قانونا حفظ الزخم وحفظ الطاقة الحركية.




:::









:::exam-question
id: physics-tawjihi-2025-p016-q106
title: السؤال 106 — ص 15 — السؤال الأصلي 4
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 15، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: في التصادم عديم المرونة تكون النسبة بين الطاقة الحركية للنظام قبل التصادم إلى الطاقة الحركية للنظام بعد التصادم مباشرة أكبر من واحد، عندما تكون الطاقة الحركية النهائية غير صفرية.
solution:
في التصادم عديم المرونة يلتحم الجسمان ويتحركان بسرعة مشتركة، ويتحول جزء من طاقة الحركة إلى تشوه وحرارة وصوت؛ لذلك تكون الطاقة الابتدائية أكبر من النهائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><msub><mi>K</mi><mi>f</mi></msub><mo>+</mo><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo separator="true">,</mo><mspace width="2em"/><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>&gt;</mo><mn>0</mn></mrow></math>
\`\`\`



النسبة المطلوبة تُحسب عندما تكون معرفة، أي عندما \\(K_{f}>0\\). نقسم معادلة الطاقة على الطاقة النهائية الموجبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>i</mi></msub><msub><mi>K</mi><mi>f</mi></msub></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><msub><mi>K</mi><mi>f</mi></msub></mfrac><mo>&gt;</mo><mn>1</mn></mrow></math>
\`\`\`



إذن الجواب المنهجي «أكبر من واحد». أما إذا توقفت المجموعة بعد الالتحام، فتصبح \\(K_{f}=0\\) وتكون النسبة غير معرفة؛ ليست لهذه الحالة قيمة أخرى من القيم المعروضة.
:::

:::exam-question
id: physics-tawjihi-2025-p016-q107
title: السؤال 107 — ص 15 — السؤال الأصلي ج
question: السؤال الثاني: ج – قارن
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 15، السؤال ج
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين التصادم المرن والتصادم عديم المرونة من حيث: حفظ الزخم الخطي، السرعة النسبية للجسمين قبل وبعد التصادم.
solution:
نقارن التصادمين في نظام معزول، أي نهمل محصلة الدفع الخارجي خلال التصادم. عندئذ يحفظ مجموع الزخم في النوعين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



السرعة النسبية للجسم الأول بالنسبة إلى الثاني هي فرق سرعتيهما؛ نرمز للحالة قبل التصادم بالرمز \\(i\\) وبعده بالرمز \\(f\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



في التصادم المرن على خط واحد، تتساوى سرعتا الاقتراب والابتعاد مقداراً وتتعاكسان إشارةً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mi>v</mi><mrow><mn>12</mn><mi>i</mi></mrow></msub></mrow></math>
\`\`\`



في التصادم عديم المرونة يلتحم الجسمان، فتكون سرعتهما النهائية واحدة. لذلك تنعدم السرعة النسبية بعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>12</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p017-q108
title: السؤال 108 — ص 16 — السؤال الأصلي 1
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 16، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور تصادم كرتين، الأولى كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` وتسير بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` والثانية ساكنة وكتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`، وبعد التصادم تحركت الكرة الأولى باتجاه يصنع زاوية مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>37</mn><mo>∘</mo></msup></mrow></math>\` مع اتجاهها الأصلي وتحركت الثانية باتجاه عمودي على اتجاه الأولى بعد التصادم. جد سرعة كل من الكرتين بعد التصادم؟

![اتجاهات حركة الكرتين قبل التصادم وبعده مع الزاوية 37°.](assets/lessons/curriculum-evidence/40eb9ad96a0a5cb8766f.webp)
solution:
المعطيات: كتلة الكرة الأولى \\(1\\,\\mathrm{kg}\\) وسرعتها الابتدائية \\(10\\,\\mathrm{m/s}\\)، والثانية كتلتها \\(2\\,\\mathrm{kg}\\) وساكنة. المطلوب مقدارا السرعتين بعد التصادم.

![الرسم الأصلي](assets/lessons/curriculum-evidence/40eb9ad96a0a5cb8766f.webp)

نختار المحور الأفقي في اتجاه الحركة الأصلية، والعمودي إلى أعلى. نرمز لمقداري السرعتين النهائيتين بالرمزين \\(v_{1f}\\) و\\(v_{2f}\\).

السرعتان النهائيتان متعامدتان؛ لذلك تكون زاوية الثانية مع المحور الأفقي متممة لزاوية الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>β</mi><mo>=</mo><msup><mn>90</mn><mo>∘</mo></msup><mo>−</mo><msup><mn>37</mn><mo>∘</mo></msup><mo>=</mo><msup><mn>53</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



المركبة الأفقية لسرعة تميل بزاوية \\(\\theta\\) عن الأفقي هي \\(v \\cos \\theta\\)، والعمودية \\(v \\sin \\theta\\)؛ لأن جيب التمام يربط الضلع المجاور بالوتر والجيب يربط المقابل به.

نهمل الدفع الخارجي خلال التصادم، فيحفظ الزخم في كل محور على حدة. لا يوجد زخم عمودي قبل التصادم، فتتساوى المركبتان العموديتان المتعاكستان بعده مقداراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mi>sin</mi><mo>⁡</mo><msup><mn>37</mn><mo>∘</mo></msup><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mi>sin</mi><mo>⁡</mo><msup><mn>53</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



نستخدم تقريبي المنهج للجيب وجيب التمام عند \\(37^{\\circ}\\) و\\(53^{\\circ}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>sin</mi><mo>⁡</mo><msup><mn>37</mn><mo>∘</mo></msup><mo>≃</mo><mi>cos</mi><mo>⁡</mo><msup><mn>53</mn><mo>∘</mo></msup><mo>≃</mo><mn>0.6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>cos</mi><mo>⁡</mo><msup><mn>37</mn><mo>∘</mo></msup><mo>≃</mo><mi>sin</mi><mo>⁡</mo><msup><mn>53</mn><mo>∘</mo></msup><mo>≃</mo><mn>0.8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.6</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>1.6</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نقسم على \\(0.6\\) لإيجاد علاقة بين السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>1.6</mn><mn>0.6</mn></mfrac><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نحفظ الزخم الأفقي، ثم نعوض بالعلاقة السابقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>0.8</mn><mo stretchy="false">)</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>0.6</mn><mo stretchy="false">)</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>10</mn><mo>=</mo><mn>0.8</mn><mrow><mo fence="true">(</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo fence="true">)</mo></mrow><mo>+</mo><mn>1.2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نجمع معاملي السرعة الثانية بتوحيد المقامين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>10</mn><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><mn>32</mn><mn>15</mn></mfrac><mo>+</mo><mfrac><mn>18</mn><mn>15</mn></mfrac><mo fence="true">)</mo></mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>10</mn><mn>3</mn></mfrac><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نضرب في مقلوب المعامل، ثم نحسب السرعة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>10</mn><mrow><mo fence="true">(</mo><mfrac><mn>3</mn><mn>10</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: مقدار سرعة الأولى \\(8\\,\\mathrm{m/s}\\) والثانية \\(3\\,\\mathrm{m/s}\\)، واتجاهاهما كما في الرسم.
:::

:::exam-question
id: physics-tawjihi-2025-p017-q109
title: السؤال 109 — ص 16 — السؤال الأصلي 2
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 16، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ينزلق جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` من السكون من ارتفاع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>h</mi></mrow></math>\` على مستوى أملس، وعند أسفل المستوى اصطدم بجسم آخر ساكن كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`، وبعد التصادم التحم الجسمان وتحركا معًا كجسم واحد بطاقة حركية مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>50</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>\`، جد:
أ. الارتفاع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>h</mi></mrow></math>\` الذي انزلق منه الجسم الأول \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>m</mi><mn>1</mn></msub></mrow></math>\`.
ب. الدفع المؤثر على الجسم الثاني.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![جسم على مسار من ارتفاع h وجسم ساكن عند أسفل المسار.](assets/lessons/curriculum-evidence/200d29a297517bc744d8.webp)

solution:
نسمي سرعة الجسم الأول قبل التصادم \\(u\\)، والسرعة المشتركة بعد التحام الجسمين \\(V\\). كتلة كل جسم \\(2\\,\\mathrm{kg}\\)، والطاقة الحركية بعد التصادم \\(50\\,\\mathrm{J}\\).

![الرسم الأصلي](assets/lessons/curriculum-evidence/200d29a297517bc744d8.webp)

طاقة الحركة هي نصف الكتلة في مربع السرعة. بعد الالتحام نستعمل الكتلة الكلية \\(2+2=4\\,\\mathrm{kg}\\) لإيجاد \\(V\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>50</mn><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><msup><mi>V</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>V</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>50</mn><mn>2</mn></mfrac><mo>=</mo><mn>25</mn></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن \\(V\\) هنا مقدار السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نهمل الدفع الخارجي أثناء التصادم القصير، فيحفظ الزخم، أي مجموع الكتلة في السرعة لكل جسم. الثاني ساكن أولاً، فتكون المعادلة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>u</mi><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>2</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>u</mi><mo>=</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>20</mn><mn>2</mn></mfrac><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



لحساب ارتفاع البداية، نعود إلى مرحلة الانزلاق على المسار الأملس. الجسم بدأ من السكون، فتتحول طاقة وضعه إلى طاقة حركة دون فقد بالاحتكاك.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نقسم على \\(mg\\)، ونستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mn>10</mn><mn>2</mn></msup><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



الدفع على الجسم الثاني يساوي تغير زخمه. كان ساكناً، وأصبح يتحرك مع المجموعة بسرعة \\(5\\,\\mathrm{m/s}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>V</mi><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>5</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: الارتفاع \\(5\\) أمتار، والدفع على الثاني \\(10\\,\\mathrm{N\\,s}\\) في اتجاه حركة المجموعة.
:::

:::exam-question
id: physics-tawjihi-2025-p017-q110
title: السؤال 110 — ص 16 — السؤال الأصلي 3
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 16، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أثرت قوة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>15</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>\` على جسم ساكن كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` لمدة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.4</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`، فانطلق على سطح أفقي أملس ليصطدم بجسم آخر كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك بنفس الاتجاه بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، فإذا كان التصادم مرنًا، احسب سرعة كل من الجسمين بعد التصادم مباشرة.

![الجسمان واتجاها حركتهما، والقوة المؤثرة في الجسم الأول.](assets/lessons/curriculum-evidence/8b392b56b489ad100fb9.webp)
solution:
المعطيات: قوة \\(15\\,\\mathrm{N}\\) تؤثر مدة \\(0.4\\,\\mathrm{s}\\) في الجسم الأول الساكن، كتلته \\(0.5\\,\\mathrm{kg}\\). الجسم الثاني كتلته \\(2\\,\\mathrm{kg}\\) وسرعته \\(1\\,\\mathrm{m/s}\\) في الاتجاه نفسه. المطلوب سرعتهما بعد التصادم المرن.

![الرسم الأصلي](assets/lessons/curriculum-evidence/8b392b56b489ad100fb9.webp)

نحسب أولاً سرعة الجسم الأول قبيل التصادم، ونسميها \\(u_{1}\\). دفع القوة الثابتة يساوي القوة في الزمن، ويساوي تغير الزخم؛ ولأن الجسم بدأ من السكون يكون تغير زخمه \\(m_{1}u_{1}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mi>u</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>15</mn><mo stretchy="false">(</mo><mn>0.4</mn><mo stretchy="false">)</mo></mrow><mn>0.5</mn></mfrac><mo>=</mo><mfrac><mn>6</mn><mn>0.5</mn></mfrac><mo>=</mo><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بعد انتهاء الدفع يحدث التصادم. نهمل الدفع الخارجي خلال التصادم، فيحفظ مجموع الزخم. نأخذ اتجاه الحركة الأصلي موجباً ونسمي السرعتين بعده \\(v_{1f}\\) و\\(v_{2f}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.5</mn><mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.5</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نبسط الطرف الأيسر إلى \\(8\\) ثم نضرب الطرفين في \\(2\\) لإزالة معامل \\(0.5\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>16</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



لأن التصادم مرن، تساوي سرعة الابتعاد النسبية سرعة الاقتراب النسبية مقداراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>12</mn><mo>−</mo><mn>1</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نعزل السرعة الأولى، ثم نعوض في معادلة الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>11</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>16</mn><mo>=</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>11</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نجمع حدود السرعة الثانية ونضيف \\(11\\) للطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>27</mn><mo>=</mo><mn>5</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>27</mn><mn>5</mn></mfrac><mo>=</mo><mn>5.4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نعوض لإيجاد السرعة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>5.4</mn><mo>−</mo><mn>11</mn><mo>=</mo><mo>−</mo><mn>5.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: يرتد الأول بمقدار سرعة \\(5.6\\,\\mathrm{m/s}\\) عكس اتجاهه الأصلي، ويتحرك الثاني بسرعة \\(5.4\\,\\mathrm{m/s}\\) في الاتجاه الأصلي.
:::

:::exam-question
id: physics-tawjihi-2025-p017-q111
title: السؤال 111 — ص 16 — السؤال الأصلي 4
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 16، السؤال 4 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسمان كتلة كل منهما \\(m>0\\)، يتحرك الأول بسرعة مقدارها \\(v>0\\) والثاني بسرعة مقدارها \\(2v\\). تصادما خلال زمن قصير كان فيه الدفع الخارجي المحصل مهملاً. بعد التصادم تحرك الأول بسرعة \\(v/2\\) والثاني بسرعة \\(v\\)، وكلاهما شرقاً. احسب الزاوية بين اتجاهي السرعتين قبل التصادم.
solution:
نهمل الدفع الخارجي خلال التصادم؛ لذلك يساوي الزخم الكلي قبله الزخم الكلي بعده.

الزخمان النهائيان نحو الشرق، فنجمع مقداريهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>f</mi></msub><mo>=</mo><mi>m</mi><mfrac><mi>v</mi><mn>2</mn></mfrac><mo>+</mo><mi>m</mi><mi>v</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



إذن مقدار محصلة الزخمين الابتدائيين هو \\(3mv/2\\)، ومقداراهما \\(mv\\) و \\(2mv\\).

لمتجهين بينهما زاوية \\(\\theta\\)، يعطي مربع مقدار المحصلة مجموع مربعي المقدارين مضافاً إليه ضعف حاصل ضربهما في \\(\\cos \\theta\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>P</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>p</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>p</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>2</mn></msub><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mi>v</mi><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mi>m</mi><mi>v</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mi>v</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mi>m</mi><mi>v</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mi>v</mi><mo stretchy="false">)</mo><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نقسم على \\(m^{2}v^{2}\\)؛ وهو موجب لأن \\(m\\) و \\(v\\) موجبان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>9</mn><mn>4</mn></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>4</mn><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mfrac><mn>9</mn><mn>4</mn></mfrac><mo>−</mo><mn>5</mn><mo>=</mo><mo>−</mo><mfrac><mn>11</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mo>−</mo><mfrac><mn>11</mn><mn>16</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>cos</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn>11</mn><mn>16</mn></mfrac><mo fence="true">)</mo></mrow><mo>≈</mo><msup><mn>133.43</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



الزاوية منفرجة، وهي متسقة مع انخفاض مقدار محصلة الزخمين إلى \\(3mv/2\\).
:::

:::exam-question
id: physics-tawjihi-2025-p018-q112
title: السؤال 112 — ص 17 — السؤال الأصلي 5
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 17، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كرة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` تسير بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` لتصطدم بكرة أخرى كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` تتحرك باتجاهها وبسرعة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، كما في الشكل المجاور. إذا كان مقدار الدفع المؤثر على كل منهما أثناء التصادم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، جد سرعة كل من الكرتين بعد التصادم.

![كرتان تتجهان إحداهما نحو الأخرى، بكتلتين 3 kg و2 kg.](assets/lessons/curriculum-evidence/57515c2b0ca9f7f92f13.webp)
solution:
نأخذ اليمين موجبًا؛ الأولى تتحرك يمينًا والثانية يسارًا، والدفع على كل منهما يعاكس اقترابها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/57515c2b0ca9f7f92f13.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mo>+</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mo>−</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mo>+</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نظرية الدفع والزخم تعطي \\(I=m(v_{f}-v_{i})\\). نستخدمها لتغيير زخم الكرة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>6</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>18</mn><mo>=</mo><mo>−</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نكرر الحساب للكرة الثانية مع إشارة دفعها الموجبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo stretchy="false">[</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>8</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>=</mo><mn>20</mn></mrow></math>
\`\`\`



نقسم على \\(2\\)، ثم نطرح \\(8\\) من الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>8</mn><mo>=</mo><mfrac><mn>20</mn><mn>2</mn></mfrac><mo>=</mo><mn>10</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>10</mn><mo>−</mo><mn>8</mn><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



إذن الأولى ترتد إلى اليسار بمقدار سرعة \\(2/3\\,\\mathrm{m/s}\\)، والثانية تتحرك إلى اليمين بسرعة \\(2\\,\\mathrm{m/s}\\).
:::

:::exam-question
id: physics-tawjihi-2025-p018-q113
title: السؤال 113 — ص 17 — السؤال الأصلي 6
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 17، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أطلقت رصاصة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>30</mn><mtext> </mtext><mi mathvariant="normal">g</mi></mrow></math>\` على قطعة خشبية ساكنة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4.97</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` معلقة كما في الشكل، فكانت سرعة المجموعة بعد التصادم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.26</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`. احسب:
1. سرعة الرصاصة قبل الاصطدام مباشرة.
2. أقصى ارتفاع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>h</mi></mrow></math>\` عن مستوى الاتزان تصله المجموعة بعد التصادم.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![بندول قذفي في وضعيه وارتفاع h عن مستوى الاتزان.](assets/lessons/curriculum-evidence/c621bdabb5ba2a8eb484.webp)

solution:
المعطيات: كتلة الرصاصة \\(30\\) غراماً، وكتلة الخشب \\(4.97\\,\\mathrm{kg}\\)، والسرعة المشتركة بعد استقرار الرصاصة في الخشب \\(1.26\\,\\mathrm{m/s}\\). المطلوب سرعة الرصاصة قبل الاصطدام وأقصى ارتفاع للمجموعة.

![الرسم الأصلي](assets/lessons/curriculum-evidence/c621bdabb5ba2a8eb484.webp)

نحوّل كتلة الرصاصة إلى الكيلوغرام بقسمتها على \\(1000\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mn>30</mn><mn>1000</mn></mfrac><mo>=</mo><mn>0.03</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`



كتلة المجموعة هي مجموع كتلة الخشب \\(M\\) وكتلة الرصاصة \\(m\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>M</mi><mo>+</mo><mi>m</mi><mo>=</mo><mn>4.97</mn><mo>+</mo><mn>0.03</mn><mo>=</mo><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`



نهمل الدفع الخارجي الأفقي خلال الاصطدام القصير، فيحفظ الزخم. الزخم هو الكتلة في السرعة؛ نسمي سرعة الرصاصة قبل الاصطدام \\(u\\)، والسرعة المشتركة بعده \\(V=1.26\\,\\mathrm{m/s}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>u</mi><mo>+</mo><mi>M</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy="false">)</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.03</mn><mi>u</mi><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>1.26</mn><mo stretchy="false">)</mo><mo>=</mo><mn>6.3</mn></mrow></math>
\`\`\`



نقسم على كتلة الرصاصة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>6.3</mn><mn>0.03</mn></mfrac><mo>=</mo><mn>210</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بعد الاصطدام ترتفع المجموعة، وتتحول طاقة حركتها إلى طاقة وضع. عند أعلى نقطة تصبح سرعتها صفراً؛ نهمل مقاومة الهواء ونستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy="false">)</mo><msup><mi>V</mi><mn>2</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy="false">)</mo><mi>g</mi><mi>h</mi></mrow></math>
\`\`\`



نقسم على الكتلة المجمعة ثم على \\(g\\) لإيجاد الارتفاع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><msup><mn>1.26</mn><mn>2</mn></msup><mn>20</mn></mfrac><mo>=</mo><mfrac><mn>1.5876</mn><mn>20</mn></mfrac><mo>=</mo><mn>0.07938</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



الإجابة: سرعة الرصاصة \\(210\\,\\mathrm{m/s}\\)، وأقصى ارتفاع نحو \\(0.0794\\,\\mathrm{m}\\)، أي نحو \\(7.94\\,\\mathrm{cm}\\).
:::





:::exam-question
id: physics-tawjihi-2025-p018-q116
title: السؤال 116 — ص 17 — السؤال الأصلي 9
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 17، السؤال 9
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم ساكن على سطح أفقي أملس، اصطدم به تصادمًا مرنًا في بعد واحد جسم آخر متحرك سرعته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mi>v</mi></mrow></math>\` وكتلته مثلي كتلة الأول، فانطلق الأول بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>\`. أثبت أن:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>1</mn></mfrac><mi mathvariant="normal">.</mi></mrow></math>
\`\`\`


solution:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نسمّي الجسم الساكن الأول وكتلته \\(m\\)، والمتحرك الثاني وكتلته \\(2m\\) وسرعته \\(2v\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>v</mi></mrow></math>
\`\`\`



نحفظ الزخم ونقسم على \\(m\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>+</mo><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mi>v</mi><mo stretchy="false">)</mo><mo>=</mo><mi>m</mi><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>m</mi><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mi>v</mi><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



التصادم مرن، لذلك تنعكس السرعة النسبية بين الجسمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>−</mo><mn>2</mn><mi>v</mi><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>v</mi><mo>+</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نعوّض في معادلة الزخم ثم نستخرج السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mi>v</mi><mo>=</mo><mn>2</mn><mi>v</mi><mo>+</mo><mn>3</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نطرح \\(2v\\) من الطرفين ثم نقسم على \\(3\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>v</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



نعوض في العلاقة بين السرعتين ونجمع الكسرين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>2</mn><mi>v</mi><mo>+</mo><mfrac><mrow><mn>2</mn><mi>v</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><mi>v</mi><mo>+</mo><mn>2</mn><mi>v</mi></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><mi>v</mi></mrow></math>
\`\`\`



نقسم السرعتين، فيختصر العامل \\(v\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><mi>v</mi><mi mathvariant="normal">/</mi><mn>3</mn></mrow><mrow><mn>2</mn><mi>v</mi><mi mathvariant="normal">/</mi><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mfrac><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>1</mn></mfrac></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p019-q117
title: السؤال 117 — ص 18 — السؤال الأصلي 10
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 18، السؤال 10
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك لليمين بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، اصطدم بجسم آخر كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` ويتحرك في اتجاه معاكس وبمقدار السرعة نفسها. أجب عن الآتية:
1. احسب سرعة كل من الجسمين بعد التصادم مباشرة إذا كان التصادم مرنًا.
2. عرف التصادم.
solution:
المعطيات: كتلة الأول \\(4\\,\\mathrm{kg}\\) وسرعته \\(2\\,\\mathrm{m/s}\\) يميناً، وكتلة الثاني \\(2\\,\\mathrm{kg}\\) وسرعته \\(2\\,\\mathrm{m/s}\\) يساراً. نأخذ اليمين موجباً، ونسمي سرعتيهما بعد التصادم \\(v_{1f}\\) و\\(v_{2f}\\).

نهمل الدفع الخارجي أثناء التصادم، فيحفظ مجموع الزخم. الزخم هو الكتلة مضروبة في السرعة المتجهة، لذلك نعوض بإشارات السرعات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mo>−</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



الطرف الأيسر يساوي \\(4\\)؛ نقسم الطرفين على \\(2\\) لتبسيط المعادلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



التصادم مرن، لذلك تساوي سرعة الابتعاد النسبية سرعة الاقتراب النسبية مقداراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`



نعوض في معادلة الزخم، ثم نجمع حدود السرعة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>=</mo><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`



نطرح \\(4\\) من الطرفين ثم نقسم على \\(3\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نعوض لإيجاد السرعة الثانية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>+</mo><mn>4</mn><mo>=</mo><mfrac><mn>10</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الأول يرتد إلى اليسار بمقدار سرعة \\(2/3\\,\\mathrm{m/s}\\)، والثاني يتحرك يميناً بمقدار سرعة \\(10/3\\,\\mathrm{m/s}\\).

أما تعريف التصادم، فيرد بنص الكتاب في الصفحة المطبوعة \\(9\\)، صفحة \\(\\mathrm{PDF} 11\\):

> التصادم: تأثير متبادل بين جسمين أو أكثر أحدهما على الأقل متحرك، وتؤثر خلاله الأجسام المتصادمة بعضها في بعض بقوة خلال فترة زمنية قصيرة نسبياً.




:::

:::exam-question
id: physics-tawjihi-2025-p019-q118
title: السؤال 118 — ص 18 — السؤال الأصلي 11
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 18، السؤال 11
answer-label: الإجابة والشرح من المجموعة المصححة
body:
بندول طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.8</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` معلق به كرة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`، سحبت الكرة حتى أصبح الخيط في وضع أفقي، ثم تركت لتتأرجح من السكون مع إهمال مقاومة الهواء فاصطدمت عند نقطة الاتزان بجسم ساكن كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` موضوع على سطح أفقي فارتدت الكرة بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، أجب عن:
1. احسب سرعة الكرة عندما تصل وضع الاتزان.
2. احسب سرعة الجسم بعد التصادم مباشرة.
3. ما نوع التصادم؟

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![بندول بطول 1.8 m وجسم ساكن عند نقطة الاتزان.](assets/lessons/curriculum-evidence/765ace5205a1bf210776.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/765ace5205a1bf210776.webp)

أثناء تأرجح الكرة نهمل مقاومة الهواء، ويكون شد الخيط عموديًا على الحركة فلا يبذل شغلًا؛ لذلك تتحول طاقة الوضع إلى حركة قبل التصادم.

الوضع الأفقي يجعل الهبوط مساويًا لطول الخيط. نساوي طاقة الوضع المفقودة بطاقة الحركة المكتسبة، ونستخدم \\(g=10 \\mathrm{m/s^{2}}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mn>1.8</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>u</mi><mn>1</mn><mn>2</mn></msubsup></mrow></math>
\`\`\`



نقسم على الكتلة الموجبة ثم نضرب في \\(2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>u</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mn>2</mn><mi>g</mi><mi>h</mi></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن المطلوب هنا مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.8</mn><mo stretchy="false">)</mo></mrow></msqrt><mo>=</mo><msqrt><mn>36</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نختار اتجاه الحركة قبل الاصطدام موجباً؛ سرعة ارتداد الكرة سالبة. خلال التصادم نهمل الدفع الخارجي الأفقي، فيحفظ مجموع الزخم؛ نعوض بالكتل والسرعات مع إشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mo>−</mo><mn>3.6</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>6</mn><mo>=</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>3.6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>9.6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>2.4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



لتحديد نوع التصادم نقارن مجموع طاقتي الحركة قبل التصادم وبعده، باستعمال \\(K=\\frac{1}{2}mv^{2}\\) لكل جسم. نحسب الطاقة قبل التصادم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>6</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



نجمع طاقتي الحركة بعده؛ تساويهما مع الطاقة الابتدائية يثبت المرونة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3.6</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.4</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>6.48</mn><mo>+</mo><mn>11.52</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>18</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><msub><mi>K</mi><mi>i</mi></msub></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p019-q119
title: السؤال 119 — ص 18 — السؤال الأصلي 12
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 18، السؤال 12
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تنزلق كتلة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` من السكون من ارتفاع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` على مسار أملس، وعلى أسفل المسار تصطدم اصطدامًا عديم المرونة بكرة أخرى ساكنة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`. احسب سرعة المجموعة بعد التصادم مباشرة.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![كتلة على مسار أملس من ارتفاع 5 m وكتلة ساكنة عند أسفله.](assets/lessons/curriculum-evidence/0e76cf39f969bdf47c20.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0e76cf39f969bdf47c20.webp)

نفصل الانزلاق على المسار عن التصادم. في الانزلاق الأملس تتحول طاقة الوضع إلى حركة، أما أثناء الالتحام فنحفظ الزخم ولا نفترض حفظ طاقة الحركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نقسم على الكتلة ونضرب في \\(2\\) ثم نأخذ الجذر لإيجاد مقدار السرعة.

ينزلق الجسم من السكون على مسار أملس؛ نحسب سرعته عند الأسفل من حفظ الطاقة مع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بعد التصادم عديم المرونة تلتحم الكتلتان؛ نحفظ الزخم خلال التصادم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>10</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>+</mo><mn>6</mn><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>10</mn><mo>+</mo><mn>6</mn><mo stretchy="false">)</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>16</mn><mi>V</mi><mo>=</mo><mn>100</mn></mrow></math>
\`\`\`



نقسم الزخم على مجموع الكتلتين لإيجاد السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>100</mn><mn>16</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>6.25</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p019-q120
title: السؤال 120 — ص 18 — السؤال الأصلي 13
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 18، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور، يتحرك جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` على سطح أفقي أملس بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>v</mi></mrow></math>\`، فيلتحم مع جسم آخر كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` ساكن على نفس السطح ومربوط بخيط طوله \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، ثم تحرك الجسمان معًا حتى أصبح الخيط يميل عن مستواه الرأسي بزاوية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>37</mn><mo>∘</mo></msup></mrow></math>\`. احسب:
1. سرعة الجسمين معًا بعد التصادم مباشرة.
2. سرعة الجسم الأول قبل التصادم مباشرة.
3. مقدار الطاقة الحركية المفقودة.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![الجسم المتحرك والجسم المعلق وموضعهما بعد التصادم والزاوية 37°.](assets/lessons/curriculum-evidence/a9df6d1bcaf3d8af3e5c.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a9df6d1bcaf3d8af3e5c.webp)

نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



في مرحلة السقوط أو الصعود على المسار الأملس نهمل الاحتكاك ومقاومة الهواء، فتتحول طاقة الوضع الثقالية إلى طاقة حركة أو العكس. عند البدء من السكون، أو الوصول إلى أقصى ارتفاع بسرعة صفر، نساوي هاتين الطاقتين؛ وهذا لا يعني حفظ طاقة الحركة أثناء تصادم غير مرن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>g</mi><mi>h</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



جيب تمام الزاوية في المثلث القائم هو الضلع المجاور مقسوماً على الوتر. لذلك يكون الإسقاط الرأسي للخيط المائل \\(L \\cos \\theta\\)، بينما كان \\(L\\) عند الاتزان؛ فرق الإسقاطين هو ارتفاع الجسم. نستخدم تقريب المنهج \\(\\cos 37^{\\circ}\\approx 0.8\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mi>L</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>cos</mi><mo>⁡</mo><msup><mn>37</mn><mo>∘</mo></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mn>0.8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>0.2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نفسر زاوية \\(37^{\\circ}\\) على أنها زاوية أقصى ارتفاع، أي تتوقف المجموعة عندها لحظة قبل الرجوع؛ فهذا هو نموذج المسألة المدرسي. بعد التصادم تتحول طاقة حركة المجموعة إلى وضع؛ نستخدم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>\` لإيجاد سرعتها المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.2</mn><mo stretchy="false">)</mo></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحفظ الزخم أثناء الالتحام لإيجاد سرعة الجسم الأول قبل التصادم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.5</mn><mi>u</mi><mo>=</mo><mo stretchy="false">(</mo><mn>0.5</mn><mo>+</mo><mn>2.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.5</mn><mi>u</mi><mo>=</mo><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.5</mn><mi>u</mi><mo>=</mo><mn>6.0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



طاقة الحركة هي نصف الكتلة في مربع السرعة. نطرح طاقة المجموعة بعد التصادم من طاقة الجسم الأول قبله؛ الجسم الثاني كان ساكناً، فلا يضيف طاقة ابتدائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>12</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>36</mn><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>30</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p019-q121
title: السؤال 121 — ص 18 — السؤال الأصلي 14
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 18، السؤال 14
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أطلقت رصاصة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>400</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` على قطعة خشبية ساكنة معلقة كبندول كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.8</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` وطول خيطه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\`، فاخترقتها وخرجت منها بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>300</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`. احسب كلًا من:
1. سرعة القطعة الخشبية بعد الاصطدام مباشرة.
2. جد أكبر زاوية يصنعها خيط البندول مع الخط الرأسي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>θ</mi></mrow></math>\`.

![البندول الخشبي في وضعيه وزاوية انحرافه θ.](assets/lessons/curriculum-evidence/96174843902369bc5a08.webp)
solution:
المعطيات: كتلة الرصاصة \\(0.2\\,\\mathrm{kg}\\)، وسرعتها قبل الاختراق \\(400\\,\\mathrm{m/s}\\) وبعده \\(300\\,\\mathrm{m/s}\\). كتلة الخشبة \\(1.8\\,\\mathrm{kg}\\)، وطول الخيط \\(10\\,\\mathrm{m}\\). نستخدم تقريب المنهج \\(g=10\\,\\mathrm{m/s^{2}}\\).

المطلوب سرعة الخشبة بعد الاختراق، ثم أكبر زاوية يصنعها الخيط مع الرأسي.

![الرسم الأصلي للسؤال](assets/lessons/curriculum-evidence/96174843902369bc5a08.webp)

الزخم هو الكتلة مضروبة في السرعة المتجهة. خلال الاختراق القصير نهمل الدفع الخارجي الأفقي، فيبقى مجموع الزخم الأفقي ثابتًا. نختار اتجاه الرصاصة موجبًا، ونرمز لسرعة الخشبة بعد الاختراق بالرمز \\(V\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.2</mn><mo stretchy="false">(</mo><mn>400</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.2</mn><mo stretchy="false">(</mo><mn>300</mn><mo stretchy="false">)</mo><mo>+</mo><mn>1.8</mn><mi>V</mi></mrow></math>
\`\`\`



الرصاصة تخرج من الخشبة؛ لذلك نحتفظ بزخمها بعد الاختراق في الطرف الأيمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>80</mn><mo>=</mo><mn>60</mn><mo>+</mo><mn>1.8</mn><mi>V</mi></mrow></math>
\`\`\`



نطرح \\(60\\)، ثم نقسم على كتلة الخشبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1.8</mn><mi>V</mi><mo>=</mo><mn>20</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>20</mn><mn>1.8</mn></mfrac><mo>=</mo><mfrac><mn>100</mn><mn>9</mn></mfrac><mo>≈</mo><mn>11.11</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بعد الاختراق تصعد الخشبة حتى تتوقف لحظة عند أقصى ارتفاع \\(h\\). نهمل مقاومة الهواء والاحتكاك، فتتحول طاقة حركتها إلى طاقة وضع ثقالية. طاقة الحركة هي نصف الكتلة مضروبًا في مربع السرعة، وطاقة الوضع المكتسبة هي الكتلة × تسارع الجاذبية × الارتفاع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>V</mi><mn>2</mn></msup><mo>=</mo><mi>m</mi><mi>g</mi><mi>h</mi></mrow></math>
\`\`\`



نختصر كتلة الخشبة غير الصفرية، ثم نقسم على \\(g\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><msup><mi>V</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>100</mn><mi mathvariant="normal">/</mi><mn>9</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>10000</mn><mrow><mn>81</mn><mo stretchy="false">(</mo><mn>20</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>500</mn><mn>81</mn></mfrac><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



من الرسم، الإسقاط الرأسي للخيط عند الزاوية \\(\\theta\\) هو \\(L\\cos \\theta\\)، حيث \\(L\\) طول الخيط و\\(\\cos\\) هو جيب التمام. الارتفاع المكتسب يساوي طول الخيط ناقص هذا الإسقاط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mi>L</mi><mo>−</mo><mi>L</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mi>L</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نقسم على \\(L\\) ثم نعزل جيب التمام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mi>h</mi><mi>L</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mn>500</mn><mi mathvariant="normal">/</mi><mn>81</mn></mrow><mn>10</mn></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mn>50</mn><mn>81</mn></mfrac><mo>=</mo><mfrac><mn>31</mn><mn>81</mn></mfrac></mrow></math>
\`\`\`



نستخدم معكوس جيب التمام لإيجاد الزاوية بالدرجات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>cos</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>31</mn><mn>81</mn></mfrac><mo fence="true">)</mo></mrow><mo>≈</mo><msup><mn>67.50</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



الجواب: سرعة الخشبة بعد الاختراق نحو \\(11.11\\,\\mathrm{m/s}\\) في اتجاه الرصاصة، وأكبر زاوية نحو \\(67.50^{\\circ}\\).
:::

:::exam-question
id: physics-tawjihi-2025-p020-q122
title: السؤال 122 — ص 19 — السؤال الأصلي 15
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 19، السؤال 15
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كرة فولاذية كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` وسرعتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، لحقت بها كرة فولاذية أخرى كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` وسرعتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` واصطدمت بها على نفس خط تحركها الأفقي وفي اتجاه واحد، فأصبحت سرعة الكرة الثانية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` وبنفس اتجاه حركتها الأصلي. احسب:
1. سرعة الكرة الأولى بعد التصادم مباشرة.
2. الطاقة الحركية الضائعة نتيجة التصادم.
solution:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



نختار اتجاه الحركة موجبًا ونحفظ الزخم الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1.5</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mo>+</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1.5</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نطرح زخم الكرة الثانية النهائي ثم نقسم على كتلة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>14</mn><mo>=</mo><mn>1.5</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1.5</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



طاقة الحركة هي نصف الكتلة في مربع السرعة. نحسب مجموع طاقتي الكرتين قبل التصادم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>6</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>10</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mn>27</mn><mo>+</mo><mn>25</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mn>52</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



نحسب المجموع بعده ثم نطرح؛ لا توجد طاقة حركة ضائعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>8</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>0.5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>48</mn><mo>+</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>52</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p020-q123
title: السؤال 123 — ص 19 — السؤال الأصلي 16
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 19، السؤال 16
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كرة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` وتتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، اصطدمت بكرة أخرى ساكنة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`. إذا تحركت الكرة الساكنة بعد التصادم مباشرة بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` على نفس الخط وبنفس اتجاه حركة الكرة الأولى قبل التصادم، احسب سرعة الكرة الأولى بعد التصادم.
solution:
نختار اتجاه حركة الكرة الأولى موجبًا. خلال التصادم نهمل الدفع الخارجي، فيبقى مجموع الزخم محفوظًا؛ والزخم هو حاصل ضرب الكتلة في السرعة بإشارتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mo>+</mo><mn>12</mn><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>12</mn><mo stretchy="false">(</mo><mn>2.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



ننقل زخم الكرة الثانية إلى الطرف الآخر ثم نقسم على كتلة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>18</mn><mo>=</mo><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>30</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>18</mn><mo>−</mo><mn>30</mn><mo>=</mo><mo>−</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo>−</mo><mn>12</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mo>−</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



إذن مقدار سرعتها \\(4\\,\\mathrm{m/s}\\)، واتجاهها عكس اتجاهها قبل التصادم.
:::

:::exam-question
id: physics-tawjihi-2025-p020-q124
title: السؤال 124 — ص 19 — السؤال الأصلي 17
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 19، السؤال 17
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تنزلق كتلة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` من السكون من ارتفاع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3.2</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>\` على مسار أملس، وعند أسفل المسار تصطدم تصادمًا مرنًا بجسم آخر ساكن كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` كما في الشكل المجاور. احسب:
1. سرعة الجسم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>m</mi><mn>2</mn></msub></mrow></math>\` بعد التصادم مباشرة.
2. أقصى ارتفاع تصل إليه الكتلة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>m</mi><mn>1</mn></msub></mrow></math>\` بعد التصادم مباشرة.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![مسار أملس من ارتفاع 3.2 m وموضعا الكتلتين m1 وm2.](assets/lessons/curriculum-evidence/d5e10d260fd2ac1b6e81.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/d5e10d260fd2ac1b6e81.webp)

نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



في مرحلة السقوط أو الصعود على المسار الأملس نهمل الاحتكاك ومقاومة الهواء، فتتحول طاقة الوضع الثقالية إلى طاقة حركة أو العكس. عند البدء من السكون، أو الوصول إلى أقصى ارتفاع بسرعة صفر، نساوي هاتين الطاقتين؛ وهذا لا يعني حفظ طاقة الحركة أثناء تصادم غير مرن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>g</mi><mi>h</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



على المسار الأملس تتحول طاقة وضع الجسم الأول إلى حركة؛ نستخدم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>\`.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3.2</mn><mo stretchy="false">)</mo></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحفظ الزخم خلال التصادم؛ الجسم الثاني ساكن قبله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo><mo>=</mo><mn>4</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>8</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



نقسم طرفي معادلة الزخم على \\(4\\) لتبسيطها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>8</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`



التصادم مرن، فسرعة الابتعاد تساوي سرعة الاقتراب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>8</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>8</mn></mrow></math>
\`\`\`



نعوّض لنجد سرعة الجسم الثاني وسرعة ارتداد الأول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>8</mn><mo>=</mo><mn>3</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>16</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نعوض في العلاقة بين السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>16</mn><mn>3</mn></mfrac><mo>−</mo><mn>8</mn><mo>=</mo><mfrac><mrow><mn>16</mn><mo>−</mo><mn>24</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mo>−</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



يرتفع الجسم الأول حتى تتحول طاقة حركته إلى وضع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><mfrac><msubsup><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow><mn>2</mn></msubsup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>8</mn><mi mathvariant="normal">/</mi><mn>3</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><mfrac><mfrac><mn>64</mn><mn>9</mn></mfrac><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>16</mn><mn>45</mn></mfrac><mo>≃</mo><mn>0.356</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p020-q125
title: السؤال 125 — ص 19 — السؤال الأصلي 18
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 19، السؤال 18
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كرة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` تتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>v</mi></mrow></math>\` فتصطدم تصادمًا مرنًا بشكل مباشر بكرة أخرى كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` ساكنة، فأصبحت سرعة الكرة الثانية بعد التصادم مباشرة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` بنفس اتجاه حركة الكرة الأولى قبل التصادم. احسب سرعة الكرة الأولى قبل وبعد التصادم مباشرة.
solution:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



التصادم مرن والثانية ساكنة أولًا؛ نعكس السرعة النسبية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>−</mo><mn>0</mn><mo>=</mo><mn>3</mn><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>3</mn><mo>−</mo><msub><mi>u</mi><mn>1</mn></msub></mrow></math>
\`\`\`



نحفظ الزخم الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.4</mn><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>0.4</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>0.6</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نعوّض بسرعة الجسم الأول النهائية ثم نجمع حدود السرعة الابتدائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.4</mn><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>0.4</mn><mo stretchy="false">(</mo><mn>3</mn><mo>−</mo><msub><mi>u</mi><mn>1</mn></msub><mo stretchy="false">)</mo><mo>+</mo><mn>1.8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.4</mn><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>3.0</mn><mo>−</mo><mn>0.4</mn><msub><mi>u</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.8</mn><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`



نستخرج السرعتين؛ السالب يعني ارتداد الكرة الأولى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>0.8</mn></mfrac><mo>=</mo><mn>3.75</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>3.75</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>0.75</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p020-q127
title: السؤال 127 — ص 19 — السؤال الأصلي 20
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 19، السؤال 20
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم ساكن كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` موضوع على سطح أفقي أملس، أثرت عليه قوة فأكسبته طاقة حركية مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>324</mn></mrow></math>\` جول، ثم توقف تأثير القوة، فتابع الجسم حركته حتى التحم مع جسم آخر ساكن على نفس السطح كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`، وتحرك الجسمان معًا. جد:
1. سرعة الجسمين بعد الالتحام مباشرة.
2. التغير في طاقة حركة النظام.
solution:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



طاقة الحركة هي \\(K=\\frac{1}{2}mu^{2}\\). نستخدم الطاقة التي اكتسبها الجسم لمعرفة سرعته قبل التصادم؛ نأخذ اتجاه حركته موجبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>324</mn><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mn>324</mn></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن \\(u\\) هنا مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><msqrt><mn>324</mn></msqrt><mo>=</mo><mn>18</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



يلتحم الجسمان، فنحفظ الزخم لإيجاد السرعة المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>18</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy="false">)</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>5</mn><mi>V</mi><mo>=</mo><mn>36</mn></mrow></math>
\`\`\`



نقسم الطرفين على \\(5\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>36</mn><mn>5</mn></mfrac><mo>=</mo><mn>7.2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب طاقة المجموعة بعد التصادم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>7.2</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mn>2.5</mn><mo stretchy="false">(</mo><mn>51.84</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>129.6</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



التغير هو النهائي ناقص الابتدائي؛ السالب يدل على نقص طاقة الحركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><msub><mi>K</mi><mi>f</mi></msub><mo>−</mo><msub><mi>K</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mn>129.6</mn><mo>−</mo><mn>324</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mo>−</mo><mn>194.4</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p021-q129
title: السؤال 129 — ص 20 — السؤال الأصلي 22
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 20، السؤال 22
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اصطدمت رصاصة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">g</mi></mrow></math>\` بقطعة خشبية معلقة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>990</mn><mtext> </mtext><mi mathvariant="normal">g</mi></mrow></math>\` فاستقرت بها، وارتفعت المجموعة عن وضع الاتزان مسافة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`. احسب سرعة الرصاصة قبل الاصطدام مباشرة.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![رصاصة وبندول خشبي قبل الاصطدام وبعد الارتفاع.](assets/lessons/curriculum-evidence/048d158e8b2c14576339.webp)

solution:
نرمز لكتلة الرصاصة بالرمز \\(m\\)، وكتلة الخشب بالرمز \\(M\\)، ولسرعة الرصاصة قبل التصادم بالرمز \\(u\\)، والسرعة المشتركة بعده بالرمز \\(V\\).

![الرسم الأصلي](assets/lessons/curriculum-evidence/048d158e8b2c14576339.webp)

نحول الكتلتين من الغرام إلى الكيلوغرام بالقسمة على \\(1000\\)، والارتفاع من السنتيمتر إلى المتر بالقسمة على \\(100\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mn>10</mn><mn>1000</mn></mfrac><mo>=</mo><mn>0.01</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>M</mi><mo>=</mo><mfrac><mn>990</mn><mn>1000</mn></mfrac><mo>=</mo><mn>0.99</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><mn>20</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.20</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحسب \\(V\\) من حركة المجموعة بعد التصادم. أثناء الصعود تتحول طاقة حركتها إلى طاقة وضع، وتصبح سرعتها صفراً عند أعلى نقطة؛ نهمل مقاومة الهواء ونستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy="false">)</mo><msup><mi>V</mi><mn>2</mn></msup><mo>=</mo><mo stretchy="false">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy="false">)</mo><mi>g</mi><mi>h</mi></mrow></math>
\`\`\`



نختصر الكتلة المجمعة، ونضرب في \\(2\\) ثم نأخذ الجذر الموجب لمقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>0.20</mn><mo stretchy="false">)</mo></mrow></msqrt><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نعود إلى لحظة استقرار الرصاصة في الخشب. نهمل الدفع الخارجي الأفقي خلال الاصطدام القصير، فيحفظ مجموع الزخم، أي الكتلة في السرعة لكل جسم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>u</mi><mo>+</mo><mi>M</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy="false">)</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.01</mn><mi>u</mi><mo>=</mo><mo stretchy="false">(</mo><mn>0.01</mn><mo>+</mo><mn>0.99</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`



نقسم على كتلة الرصاصة لإيجاد سرعتها قبل الاصطدام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>2</mn><mn>0.01</mn></mfrac><mo>=</mo><mn>200</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p021-q132
title: السؤال 132 — ص 20 — السؤال الأصلي 25
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 20، السؤال 25
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل المجاور كرة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` مربوطة بخيط مثبت من نقطة، أفلتت لتسقط من السكون من ارتفاع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>h</mi></mrow></math>\` لتصطدم بجسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` ساكن على أرض أفقية ملساء تصادمًا مرنًا، فانطلق هذا الجسم بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`. احسب:
1. الارتفاع الذي سقطت منه الكرة قبل التصادم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>h</mi></mrow></math>\`.
2. أقصى ارتفاع للكرة بعد التصادم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>h</mi><mi>f</mi></msub></mrow></math>\`.

اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

![موضعا البندول والجسم الساكن قبل التصادم وبعده، مع h وhf وسرعة الجسم.](assets/lessons/curriculum-evidence/0bdfb4db929e6e498ed3.webp)

solution:
![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0bdfb4db929e6e498ed3.webp)

نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



في التصادم المرن على خط واحد، سرعة ابتعاد الجسمين النسبية تساوي سرعة اقترابهما النسبية مقدارًا. نستخدم ذلك هنا لأن التصادم مرن؛ وتبقى السرعات في العلاقة بإشاراتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>i</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>i</mi></mrow></msub><mo>=</mo><mo>−</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نختار اتجاه الكرة قبل التصادم موجبًا؛ نستخدم انعكاس السرعة النسبية لأن التصادم مرن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>−</mo><mn>0</mn><mo>=</mo><mn>1.5</mn><mo>−</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>1.5</mn><mo>−</mo><msub><mi>u</mi><mn>1</mn></msub></mrow></math>
\`\`\`



نحفظ الزخم ونقسم على \\(1.2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1.2</mn><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>1.2</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>3.6</mn><mo stretchy="false">(</mo><mn>1.5</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>+</mo><mn>4.5</mn></mrow></math>
\`\`\`



نعوّض لنجد السرعة قبل التصادم وسرعة الارتداد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>1.5</mn><mo>−</mo><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><mn>4.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>6.0</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نعوض بالسرعة الابتدائية لإيجاد سرعة الارتداد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>1.5</mn><mo>−</mo><mn>3</mn><mo>=</mo><mo>−</mo><mn>1.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



عند السقوط من السكون تتحول طاقة الوضع إلى حركة، وعند الصعود إلى أعلى نقطة تتحول الحركة إلى وضع. نهمل مقاومة الهواء ونستخدم \\(g=10\\,\\mathrm{m/s^{2}}\\)؛ لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><msup><mn>3</mn><mn>2</mn></msup><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mn>0.45</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mfrac><msup><mn>1.5</mn><mn>2</mn></msup><mn>20</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>h</mi><mi>f</mi></msub><mo>=</mo><mn>0.1125</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p021-q133
title: السؤال 133 — ص 20 — السؤال الأصلي 26
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 20، السؤال 26
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mi>m</mi></mrow></math>\` ويسير بسرعة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mi>V</mi><mn>2</mn></mfrac></mrow></math>\`، انفجر إلى جزأين متساويين في الكتلة بحيث استمر كل منهما بالحركة بسرعة تساوي مثلي سرعة الجسم الأصلية، بحيث يصنعان بينهما زاوية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>θ</mi></mrow></math>\`. احسب:
1. مقدار الزاوية المحصورة بين الجزأين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>θ</mi></mrow></math>\`.
2. مقدار الطاقة الحركية الناتجة من الانفجار.

![انفجار كتلة 2m إلى جزأين واتجاها حركتهما والزاوية θ.](assets/lessons/curriculum-evidence/4f55afef86a10a8be1bb.webp)
solution:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/4f55afef86a10a8be1bb.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



نحسب الزخم قبل الانفجار؛ الجسم كتلته \\(2m\\) وسرعته \\(V/2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo><mfrac><mi>V</mi><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><mi>m</mi><mi>V</mi></mrow></math>
\`\`\`



كتلة كل جزء \\(m\\) وسرعته \\(V\\)، فيكون مقدار زخم كل منهما \\(mV\\). الزخم متجه؛ ومربع مقدار مجموع متجهين بينهما زاوية \\(\\theta\\) يساوي مجموع مربعيهما مع \\(2p_{1}p_{2}\\cos \\theta\\). نستخدم هذه العلاقة لأن المطلوب الزاوية بين الزخمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>P</mi><mi>f</mi><mn>2</mn></msubsup><mo>=</mo><mo stretchy="false">(</mo><mi>m</mi><mi>V</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mi>m</mi><mi>V</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mi>m</mi><mi>V</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نحفظ الزخم ثم نختصر العامل \\(m^{2}V^{2}\\) لإيجاد الزاوية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mi>m</mi><mi>V</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mi>m</mi><mi>V</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy="false">(</mo><mi>m</mi><mi>V</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`



نفترض \\(m>0\\) و\\(V\\ne 0\\) كما تقتضي الحركة، فنقسم على \\(m^{2}V^{2}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>cos</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mn>120</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



نحسب طاقة الحركة قبل الانفجار وبعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo><msup><mrow><mo fence="true">(</mo><mfrac><mi>V</mi><mn>2</mn></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>V</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>2</mn><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>V</mi><mn>2</mn></msup><mo fence="true">)</mo></mrow><mo>=</mo><mi>m</mi><msup><mi>V</mi><mn>2</mn></msup></mrow></math>
\`\`\`



الطاقة الناتجة هي الزيادة في طاقة الحركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><msub><mi>K</mi><mi>f</mi></msub><mo>−</mo><msub><mi>K</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mi>m</mi><msup><mi>V</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>V</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>K</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>V</mi><mn>2</mn></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p022-q134
title: السؤال 134 — ص 21 — السؤال الأصلي 27
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 21، السؤال 27
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك في خط مستقيم أفقي بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` على سطح أملس، فإذا اصطدم به عموديًا جسم آخر كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>30</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، والتصق الجسمان وسارا معًا بالسرعة نفسها، احسب سرعة الجسمين الملتصقين بعد التصادم مباشرة مقدارًا واتجاهًا.

![التصادم العمودي بين الجسمين واتجاه السرعة المشتركة والزاوية θ.](assets/lessons/curriculum-evidence/e228ee9729b3fbe4cc9d.webp)
solution:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات؛ ولا نفترض حفظ طاقة الحركة إلا إذا كان التصادم مرنًا.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/e228ee9729b3fbe4cc9d.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



نختار اليمين محور \\(x\\) والأسفل محور \\(y\\) كما في الشكل؛ نحفظ الزخم في كل اتجاه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>x</mi></msub><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>20</mn><mo stretchy="false">)</mo><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>x</mi></msub><mo>=</mo><mn>100</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>30</mn><mo stretchy="false">)</mo><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><mn>300</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بعد الالتصاق تصبح الكتلة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>15</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`، فنقسم مركبتي الزخم على هذه الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>x</mi></msub><mo>=</mo><mfrac><mn>100</mn><mn>15</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>x</mi></msub><mo>=</mo><mfrac><mn>20</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>y</mi></msub><mo>=</mo><mfrac><mn>300</mn><mn>15</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>V</mi><mi>y</mi></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



مركبتا السرعة متعامدتان، فتشكلان ضلعي مثلث قائم؛ لذا نستخدم فيثاغورس لإيجاد مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><msqrt><mrow><msubsup><mi>V</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>V</mi><mi>y</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msup><mrow><mo fence="true">(</mo><mfrac><mn>20</mn><mn>3</mn></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mn>20</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mfrac><msqrt><mn>4000</mn></msqrt><mn>3</mn></mfrac><mo>≃</mo><mn>21.08</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نقيس الزاوية من اتجاه الجسم الأول نحو الأسفل كما في الرسم. في المثلث القائم يساوي ظل الزاوية المقابل مقسومًا على المجاور؛ هنا هما \\(V\\)ᵧ و\\(V\\)ₓ.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>tan</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mfrac><msub><mi>V</mi><mi>y</mi></msub><msub><mi>V</mi><mi>x</mi></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>tan</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>≃</mo><msup><mn>71.57</mn><mo>∘</mo></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p022-q136
title: السؤال 136 — ص 21 — السؤال الأصلي 29
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 21، السؤال 29
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أثرت قوة مقدارها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>100</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>\` على جسم ساكن كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` لمدة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.2</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\` فحركته على سطح أملس ثم اصطدم تصادمًا مرنًا بجسم آخر ساكن، وبعد التصادم ارتد الجسم الأول بسرعة تساوي ثلث سرعته قبل التصادم، احسب:
1. سرعة الجسم الأول قبل التصادم وبعد التصادم مباشرة.
2. سرعة الجسم الثاني بعد التصادم مباشرة.
3. كتلة الجسم الثاني.
solution:
دفع القوة هو حاصل ضربها في زمن تأثيرها، ويساوي تغير الزخم. بما أن الجسم ساكن أولًا وعلى سطح أملس، يكون \\(F\\Delta t=m_{1}u_{1}\\)؛ فنقسم على كتلته لمعرفة سرعته قبل التصادم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>F</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>100</mn><mo stretchy="false">(</mo><mn>0.2</mn><mo stretchy="false">)</mo></mrow><mn>1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



ارتداده بثلث مقدار سرعته يجعل السرعة النهائية سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msub><mi>u</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mo>−</mo><mfrac><mn>20</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



التصادم مرن، لذلك تتساوى سرعتا الاقتراب والابتعاد النسبيتان مقداراً. نستخدم هذه العلاقة لإيجاد سرعة الجسم الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>20</mn><mo>−</mo><mn>0</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn>20</mn><mn>3</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>20</mn><mo>=</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>+</mo><mfrac><mn>20</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mfrac><mn>40</mn><mn>3</mn></mfrac><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نهمل الدفع الخارجي خلال التصادم، فيحفظ مجموع الزخم، أي مجموع الكتلة في السرعة المتجهة لكل جسم. نستخدمه لإيجاد كتلة الجسم الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mo stretchy="false">(</mo><mn>20</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mrow><mo fence="true">(</mo><mo>−</mo><mfrac><mn>20</mn><mn>3</mn></mfrac><mo fence="true">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mfrac><mn>40</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>20</mn><mo>=</mo><mfrac><mrow><mn>40</mn><msub><mi>m</mi><mn>2</mn></msub></mrow><mn>3</mn></mfrac><mo>−</mo><mfrac><mn>20</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>40</mn><msub><mi>m</mi><mn>2</mn></msub></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>80</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`



نضرب في \\(3\\) ثم نقسم على \\(40\\) لعزل الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>80</mn><mn>40</mn></mfrac><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p022-q137
title: السؤال 137 — ص 21 — السؤال الأصلي 30
question: السؤال الثالث: الأسئلة الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 21، السؤال 30
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` اصطدم بجسم آخر كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك نحوه بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، وكان زمن التصادم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.1</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\` وقوة الدفع بينهما تساوي \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>60</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>\`، احسب:
1. سرعة الجسمين بعد التصادم مباشرة.
2. ما نوع التصادم؟
solution:
نظرية الدفع والزخم تقول إن دفع القوة المحصلة يساوي تغير الزخم. نستخدمها هنا لربط القوة أو زمن تأثيرها بتغير سرعة الجسم، مع ثبات كتلته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نأخذ اتجاه الجسم الأول موجبًا؛ القوة المتبادلة تعطي كل جسم دفعًا مقداره \\(6\\) وباتجاهين متعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>F</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>60</mn><mo stretchy="false">(</mo><mn>0.1</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mo>+</mo><mn>6</mn></mrow></math>
\`\`\`



نحسب سرعة الجسم الأول من دفعه السالب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo stretchy="false">(</mo><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>5</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>−</mo><mn>10</mn><mo>=</mo><mo>−</mo><mn>6</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



سرعة الجسم الثاني قبل التصادم سالبة؛ نستخدم دفعه الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mo stretchy="false">[</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>2</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>=</mo><mn>6</mn></mrow></math>
\`\`\`



نطرح \\(2\\) من الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub><mo>=</mo><mn>6</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



طاقة الحركة تساوي نصف الكتلة في مربع السرعة. نقارن مجموع طاقتي الجسمين قبل التصادم وبعده لتحديد نوعه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>5</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mn>25</mn><mo>+</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mn>27</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>=</mo><mn>4</mn><mo>+</mo><mn>8</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>12</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



نقصت طاقة الحركة وبقي الجسمان بسرعتين مختلفتين، لذا التصادم غير مرن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>&lt;</mo><msub><mi>K</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mrow><mn>1</mn><mi>f</mi></mrow></msub><mo mathvariant="normal">≠</mo><msub><mi>v</mi><mrow><mn>2</mn><mi>f</mi></mrow></msub></mrow></math>
\`\`\`


:::
`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "التصادمات",
  "summary": "أسئلة الكتاب بترتيب المصدر، تليها أسئلة إضافية مع الاحتفاظ باختلاف المعطيات.",
  "outcome": "مراجعة التصادمات من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "90 سؤالًا",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
