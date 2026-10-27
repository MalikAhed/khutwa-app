import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `
:::mcq
id: physics-book-2024-p009-review-1-2
title: أسئلة الفصل — س1/2 — الكتاب، صفحة PDF 9
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 9، أسئلة الفصل — س1/2
question: ما مقدار الدفع على الحائط عند اصطدام جسم كتلته \\(2\\,\\mathrm{kg}\\) يتحرك أفقيًا بسرعة \\(4\\,\\mathrm{m/s}\\) بحائط وارتداده بنفس السرعة باتجاه معاكس لحركته، بوحدة \\(\\mathrm{N\\,s}\\)؟
- [ ] option-1 | \\(8\\)
- [x] option-2 | \\(16\\)
- [ ] option-3 | \\(0\\)
- [ ] option-4 | \\(32\\)
explanation:
المعطيات: كتلة الجسم \\(2\\,\\mathrm{kg}\\)، وسرعتاه قبل الاصطدام وبعده متساويتان مقدارًا ومتعاكستان اتجاهًا. المطلوب مقدار دفع الجسم على الحائط.

الزخم هو حاصل ضرب الكتلة في السرعة المتجهة. والدفع على الجسم يساوي تغير زخمه؛ لذلك يجب إدخال اتجاه السرعة في الحساب.

نختار اتجاه الاقتراب موجبًا، فيصبح الارتداد سالبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mo>+</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب دفع الحائط على الجسم بطرح الزخم الابتدائي من النهائي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">[</mo><mo>−</mo><mn>4</mn><mo>−</mo><mo stretchy="false">(</mo><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mo>−</mo><mn>8</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>16</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بحسب قانون نيوتن الثالث، دفع الجسم على الحائط يساوي هذا الدفع مقدارًا ويعاكسه اتجاهًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mi>I</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>16</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



إذن مقدار الدفع على الحائط \\(16\\,\\mathrm{N\\,s}\\)، باتجاه اقتراب الجسم.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p009-review-1-4
title: أسئلة الفصل — س1/4 — الكتاب، صفحة PDF 9
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 9، أسئلة الفصل — س1/4
question: جسم كتلته \\(0.5\\,\\mathrm{kg}\\) سقط من السكون من ارتفاع \\(180\\,\\mathrm{cm}\\) عن سطح الأرض، ما مقدار زخمه عند وصوله الأرض، بوحدة \\(\\mathrm{kg\\,m/s}\\)؟ اعتمد \`mathml: <math xmlns="http://www.w3.org/1998/Math/MathML" dir="ltr"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mfrac><mi mathvariant="normal">m</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac></mrow></math>\`.

- [ ] option-1 | \\(5\\)
- [ ] option-2 | \\(6\\)
- [x] option-3 | \\(3\\)
- [ ] option-4 | \\(9\\)
explanation:
المعطيات: الكتلة \\(0.5\\,\\mathrm{kg}\\)، السقوط من السكون، والارتفاع \\(180\\,\\mathrm{cm}\\). المطلوب مقدار الزخم عند الأرض.

نحوّل السنتيمتر إلى المتر بقسمته على \\(100\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><mn>180</mn><mn>100</mn></mfrac><mo>=</mo><mn>1.8</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



بإهمال مقاومة الهواء، تتحول طاقة الوضع إلى طاقة حركة. نستخدم تقريب المنهج لتسارع الجاذبية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>g</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نقسم على الكتلة غير الصفرية ثم نضرب الطرفين في \\(2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>g</mi><mi>h</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.8</mn><mo stretchy="false">)</mo><mo>=</mo><mn>36</mn></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن المطلوب مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mn>36</mn></msqrt><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الزخم يساوي حاصل ضرب الكتلة في السرعة، واتجاهه اتجاه الحركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



النتيجة: مقدار الزخم \\(3\\,\\mathrm{kg\\,m/s}\\)، واتجاهه إلى أسفل.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p009-review-1-5
title: أسئلة الفصل — س1/5 — الكتاب، صفحة PDF 9
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 9، أسئلة الفصل — س1/5
question: يدور قمر صناعي في مدار دائري حول الأرض، فإذا كانت كتلته \\(m\\) ومقدار سرعته \\(v\\) ثابت، فما مقدار التغير في زخمه لدى اجتيازه نصف المدار حول الأرض؟



- [ ] option-1 | \\(0\\)
- [ ] option-2 | \\(\\frac12 mv\\)
- [ ] option-3 | \\(mv\\)
- [x] option-4 | \\(2mv\\)
explanation:
المطلوب مقدار تغير الزخم بعد اجتياز نصف المدار الدائري. الكتلة ومقدار السرعة ثابتان.

الزخم كمية متجهة؛ لذلك لا يكفي ثبات مقدار السرعة للحكم بأن الزخم لم يتغير.

بعد نصف دورة تكون السرعة النهائية معاكسة للابتدائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mi>m</mi><msub><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub></mrow></math>
\`\`\`



التغير يساوي القيمة النهائية ناقص الابتدائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mo>=</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub><mo>−</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mo>=</mo><mo>−</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>−</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>−</mo><mn>2</mn><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub></mrow></math>
\`\`\`



نأخذ مقدار المتجه الناتج.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mn>2</mn><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



النتيجة: مقدار تغير الزخم يساوي \\(2mv\\)، واتجاهه معاكس للزخم الابتدائي.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p009-review-1-6
title: أسئلة الفصل — س1/6 — الكتاب، صفحة PDF 9
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 9، أسئلة الفصل — س1/6
question: جسم كتلته \\(4\\,\\mathrm{kg}\\) يتحرك بسرعة \\(2\\,\\mathrm{m/s}\\)، أثرت عليه قوة \\(8\\,\\mathrm{N}\\) بنفس اتجاه حركته لمدة \\(5\\,\\mathrm{s}\\)، كم يصبح مقدار زخمه بوحدة \\(\\mathrm{kg\\,m/s}\\)؟
- [ ] option-1 | \\(32\\)
- [ ] option-2 | \\(8\\)
- [ ] option-3 | \\(40\\)
- [x] option-4 | \\(48\\)
explanation:
المعطيات: الكتلة \\(4\\,\\mathrm{kg}\\)، السرعة الابتدائية \\(2\\,\\mathrm{m/s}\\)، القوة \\(8\\,\\mathrm{N}\\) باتجاه الحركة، والزمن \\(5\\) ثوانٍ. المطلوب الزخم النهائي.

نحسب الزخم الابتدائي من تعريف الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>=</mo><mi>m</mi><msub><mi>v</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الدفع هو حاصل ضرب القوة الثابتة في زمن تأثيرها، ويساوي التغير في الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>F</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>8</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mo>=</mo><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



القوة باتجاه الحركة؛ لذلك يكون الدفع موجبًا عند اتخاذ هذا الاتجاه موجبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><msub><mi>p</mi><mi>f</mi></msub><mo>−</mo><msub><mi>p</mi><mi>i</mi></msub></mrow></math>
\`\`\`



نضيف الزخم الابتدائي إلى الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><msub><mi>p</mi><mi>i</mi></msub><mo>+</mo><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mn>8</mn><mo>+</mo><mn>40</mn><mo>=</mo><mn>48</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



النتيجة: الزخم النهائي \\(48\\,\\mathrm{kg\\,m/s}\\) باتجاه الحركة.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p009-review-1-7
title: أسئلة الفصل — س1/7 — الكتاب، صفحة PDF 9
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 9، أسئلة الفصل — س1/7
question: كرة كتلتها \\(0.2\\,\\mathrm{kg}\\) تقترب أفقيًا من مضرب لاعب بسرعة \\(40\\,\\mathrm{m/s}\\) وترتد عنه بالاتجاه المعاكس بسرعة \\(50\\,\\mathrm{m/s}\\)، إذا دام التلامس \\(0.2\\,\\mathrm{s}\\)، كم يساوي مقدار متوسط القوة التي يؤثر بها المضرب على الكرة بوحدة \\(\\mathrm{N}\\)؟
- [ ] option-1 | \\(18\\)
- [ ] option-2 | \\(10\\)
- [x] option-3 | \\(90\\)
- [ ] option-4 | \\(2\\)
explanation:
المعطيات: الكتلة \\(0.2\\,\\mathrm{kg}\\)، سرعة الاقتراب \\(40\\,\\mathrm{m/s}\\)، سرعة الارتداد \\(50\\,\\mathrm{m/s}\\)، وزمن التلامس \\(0.2\\,\\mathrm{s}\\). المطلوب مقدار متوسط القوة.

نأخذ الاقتراب موجبًا؛ ولأن الكرة ترتد في الاتجاه المعاكس، تكون سرعتها النهائية سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mo>+</mo><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>50</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نظرية الدفع والزخم تربط متوسط القوة بزمن تأثيرها وتغير الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>0.2</mn><mo stretchy="false">[</mo><mo>−</mo><mn>50</mn><mo>−</mo><mo stretchy="false">(</mo><mo>+</mo><mn>40</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>0.2</mn><mo stretchy="false">(</mo><mo>−</mo><mn>90</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>18</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نقسم تغير الزخم على زمن التلامس.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mrow><mo>−</mo><mn>18</mn></mrow><mn>0.2</mn></mfrac><mo>=</mo><mo>−</mo><mn>90</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



السالب يعني أن القوة عكس اتجاه الاقتراب. مقدار متوسط القوة المطلوب \\(90\\,\\mathrm{N}\\).
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p010-review-1-8
title: أسئلة الفصل — س1/8 — الكتاب، صفحة PDF 10
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س1/8
question: في منحنى (القوة – الزمن)، ماذا تمثل المساحة تحت المنحنى؟
- [ ] option-1 | التغير في السرعة
- [ ] option-2 | التسارع
- [x] option-3 | الدفع
- [ ] option-4 | الزخم
explanation:
المساحة الجبرية تحت منحنى القوة–الزمن تمثل الدفع.

في جزء تكون فيه القوة ثابتة، مساحة المستطيل تساوي القوة مضروبة في الزمن؛ وهذا هو تعريف الدفع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>F</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`



وللقوة المتغيرة نجمع مساحات الأجزاء. نحسب المساحة فوق محور الزمن موجبة وتحته سالبة.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p010-review-1-10
title: أسئلة الفصل — س1/10 — الكتاب، صفحة PDF 10
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س1/10
question: إذا علمت مقدار الدفع المؤثر على جسم كتلته \\(m\\)، فأي مما يأتي تستطيع حسابه؟
- [ ] option-1 | سرعته الابتدائية
- [ ] option-2 | سرعته النهائية
- [ ] option-3 | تسارعه
- [x] option-4 | التغير في سرعته
explanation:
المعلوم مقدار الدفع وكتلة الجسم. المطلوب تحديد الكمية التي يمكن حسابها.

بحسب نظرية الدفع والزخم، الدفع يساوي تغير الزخم. ولثبات الكتلة يكون تغير الزخم هو الكتلة مضروبة في تغير السرعة المتجهة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mo>=</mo><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mo>=</mo><mi>m</mi><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`



نأخذ المقدارين ثم نقسم على الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>I</mi><mo>⃗</mo></mover><mi mathvariant="normal">∣</mi></mrow><mi>m</mi></mfrac></mrow></math>
\`\`\`



إذن يمكن حساب مقدار تغير السرعة. تحديد السرعة النهائية نفسها يحتاج أيضًا إلى معرفة السرعة الابتدائية واتجاه الدفع.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p010-review-1-11
title: أسئلة الفصل — س1/11 — الكتاب، صفحة PDF 10
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س1/11
question: قذيفة كتلتها \\(2\\,\\mathrm{kg}\\) انطلقت أفقيًا بسرعة \\(200\\,\\mathrm{m/s}\\) من فوهة مدفع ساكن كتلته \\(500\\,\\mathrm{kg}\\)، ما سرعة ارتداد المدفع بوحدة \\(\\mathrm{m/s}\\)؟
- [ ] option-1 | \\(1.25\\)
- [ ] option-2 | \\(0.75\\)
- [x] option-3 | \\(0.8\\)
- [ ] option-4 | \\(2.5\\)
explanation:
المعطيات: القذيفة \\(2\\,\\mathrm{kg}\\) وسرعتها \\(200\\,\\mathrm{m/s}\\)، والمدفع \\(500\\,\\mathrm{kg}\\) وكان ساكنًا. المطلوب سرعة ارتداد المدفع.

نعد المدفع والقذيفة نظامًا واحدًا. أثناء الإطلاق نهمل الدفع الخارجي الأفقي، فيحفظ الزخم الكلي.

نختار اتجاه القذيفة موجبًا؛ والزخم الابتدائي للنظام يساوي صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><msub><mi>P</mi><mi>f</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mi>m</mi><mi>v</mi><mo>+</mo><mi>M</mi><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>200</mn><mo stretchy="false">)</mo><mo>+</mo><mn>500</mn><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>400</mn><mo>+</mo><mn>500</mn><mi>V</mi></mrow></math>
\`\`\`



نطرح \\(400\\) من الطرفين ثم نقسم على \\(500\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>500</mn><mi>V</mi><mo>=</mo><mo>−</mo><mn>400</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn>400</mn></mrow><mn>500</mn></mfrac><mo>=</mo><mo>−</mo><mn>0.8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



النتيجة: مقدار سرعة الارتداد \\(0.8\\,\\mathrm{m/s}\\)، في عكس اتجاه انطلاق القذيفة.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-book-2024-p010-review-4-1
title: أسئلة الفصل — س4 — فرع 1 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(4\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س4 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ضرب لاعب كرة ساكنة كتلتها \\(0.6\\,\\mathrm{kg}\\)، فانطلقت بسرعة \\(15\\,\\mathrm{m/s}\\)، احسب:

أ- التغير في زخم الكرة.

solution:
المعطيات: كتلة الكرة \\(0.6\\,\\mathrm{kg}\\)، وكانت ساكنة ثم انطلقت بسرعة \\(15\\,\\mathrm{m/s}\\). المطلوب تغير زخمها.

الزخم هو الكتلة مضروبة في السرعة المتجهة. نختار اتجاه انطلاق الكرة موجبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>+</mo><mn>15</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نطرح الزخم الابتدائي من النهائي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>0.6</mn><mo stretchy="false">(</mo><mn>15</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>0.6</mn><mo stretchy="false">(</mo><mn>15</mn><mo stretchy="false">)</mo><mo>=</mo><mn>9</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



النتيجة: تغير الزخم \\(9\\,\\mathrm{kg\\,m/s}\\) باتجاه انطلاق الكرة.
:::

:::exam-question
id: physics-book-2024-p010-review-4-2
title: أسئلة الفصل — س4 — فرع 2 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(4\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س4 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ضرب لاعب كرة ساكنة كتلتها \\(0.6\\,\\mathrm{kg}\\)، فانطلقت بسرعة \\(15\\,\\mathrm{m/s}\\)، احسب:

ب- متوسط القوة التي أثر بها اللاعب على الكرة إذا دام التلامس \\(0.06\\,\\mathrm{s}\\).

solution:
المعطيات: الكتلة \\(0.6\\,\\mathrm{kg}\\)، السرعة الابتدائية صفر، النهائية \\(15\\,\\mathrm{m/s}\\)، وزمن التلامس \\(0.06\\,\\mathrm{s}\\). المطلوب متوسط القوة.

الدفع يساوي تغير الزخم؛ ومتوسط القوة هو الدفع مقسومًا على زمن تأثيرها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.6</mn><mo stretchy="false">(</mo><mn>15</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>9</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mi>I</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>9</mn><mn>0.06</mn></mfrac><mo>=</mo><mn>150</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



النتيجة: متوسط القوة \\(150\\,\\mathrm{N}\\) باتجاه انطلاق الكرة.
:::

:::exam-question
id: physics-book-2024-p010-review-5-1
title: أسئلة الفصل — س5 — فرع 1 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(5\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س5 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل تقترب سيارة كتلتها \\(1600\\,\\mathrm{kg}\\) من جدار بسرعة \\(4.5\\,\\mathrm{m/s}\\) وترتد عنه بالاتجاه المعاكس بسرعة \\(2.6\\,\\mathrm{m/s}\\)، فما:

1- التغير في زخم السيارة.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 1.](assets/lessons/physics/source-crops/physics-book-2024-p010-review-5-1-figure-01.webp)

solution:
المعطيات: كتلة السيارة \\(1600\\,\\mathrm{kg}\\)، الاقتراب بسرعة \\(4.5\\,\\mathrm{m/s}\\)، والارتداد بسرعة \\(2.6\\,\\mathrm{m/s}\\). المطلوب تغير الزخم.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p010-review-5-1-figure-01.webp)

نختار اتجاه الاقتراب موجبًا؛ لذلك سرعة الارتداد سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mo>+</mo><mn>4.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>2.6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الزخم هو حاصل ضرب الكتلة في متجه السرعة \\(p=mv\\). تغيره يساوي الزخم النهائي ناقص الابتدائي؛ ولأن الكتلة ثابتة نخرجها عاملاً مشتركاً فنحسب \\(m(v_{f}-v_{i})\\)مع إشارات السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>1600</mn><mo stretchy="false">[</mo><mo>−</mo><mn>2.6</mn><mo>−</mo><mo stretchy="false">(</mo><mo>+</mo><mn>4.5</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>1600</mn><mo stretchy="false">(</mo><mo>−</mo><mn>7.1</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>11360</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



النتيجة: مقدار تغير الزخم \\(11360\\,\\mathrm{kg\\,m/s}\\)، واتجاهه عكس اتجاه الاقتراب.
:::

:::exam-question
id: physics-book-2024-p010-review-5-2
title: أسئلة الفصل — س5 — فرع 2 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(5\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س5 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل تقترب سيارة كتلتها \\(1600\\,\\mathrm{kg}\\) من جدار بسرعة \\(4.5\\,\\mathrm{m/s}\\) وترتد عنه بالاتجاه المعاكس بسرعة \\(2.6\\,\\mathrm{m/s}\\)، فما:

2- الطاقة الحركية المفقودة.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5 — فرع 2.](assets/lessons/physics/source-crops/physics-book-2024-p010-review-5-1-figure-01.webp)

solution:
المعطيات: الكتلة \\(1600\\,\\mathrm{kg}\\)، السرعة قبل الاصطدام \\(4.5\\,\\mathrm{m/s}\\) وبعده \\(2.6\\,\\mathrm{m/s}\\). المطلوب الطاقة الحركية المفقودة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p010-review-5-1-figure-01.webp)

طاقة الحركة كمية قياسية تعتمد على مربع السرعة، لذلك لا نجعلها سالبة بسبب الارتداد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نحسب الطاقة قبل الاصطدام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1600</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>4.5</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><mn>800</mn><mo stretchy="false">(</mo><mn>20.25</mn><mo stretchy="false">)</mo><mo>=</mo><mn>16200</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



نحسب الطاقة بعده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>1600</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2.6</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>f</mi></msub><mo>=</mo><mn>800</mn><mo stretchy="false">(</mo><mn>6.76</mn><mo stretchy="false">)</mo><mo>=</mo><mn>5408</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



الطاقة المفقودة هي الطاقة الابتدائية ناقص الطاقة النهائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msub><mi>K</mi><mi>i</mi></msub><mo>−</mo><msub><mi>K</mi><mi>f</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>16200</mn><mo>−</mo><mn>5408</mn><mo>=</mo><mn>10792</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



النتيجة: فقدت السيارة \\(10792\\,\\mathrm{J}\\) من طاقتها الحركية؛ تحولت إلى صور أخرى كالحرارة والتشوه.
:::

:::exam-question
id: physics-tawjihi-2025-p009-q062
title: سؤال — الكتاب، صفحة PDF 5
question: سؤال
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 5، سؤال
answer-label: الإجابة والشرح من المجموعة المصححة
body:
مركبتان متساويتان في الكتلة، وسرعة إحداهما ضعف سرعة الأخرى، أيهما تحتاج قوة أقل لإيقافها في نفس الفترة الزمنية ولماذا؟

solution:
المعطيات: كتلتا المركبتين متساويتان وزمن إيقافهما واحد، وسرعة إحداهما ضعف الأخرى. المطلوب المركبة التي تحتاج قوة إيقاف أقل.

الإيقاف يعني جعل الزخم النهائي صفرًا. لذلك يساوي مقدار تغير الزخم مقدار الزخم الابتدائي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



من نظرية الدفع والزخم، مقدار متوسط القوة يساوي تغير الزخم مقسومًا على زمن التوقف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



تتساوى الكتلة والزمن في النسبة، فنختصرهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">f</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">w</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy="false">(</mo><mn>2</mn><mi>v</mi><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow><mrow><mi>m</mi><mi>v</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">f</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">w</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`



النتيجة: المركبة الأبطأ تحتاج نصف متوسط قوة إيقاف المركبة الأسرع.
:::

:::mcq
id: physics-tawjihi-2025-p005-q014
title: أسئلة الفصل — س1/1 — الكتاب، صفحة PDF 9
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 9، أسئلة الفصل — س1/1
question: أي الكميات الآتية تمثل (المعدل الزمني للتغير في الزخم)؟
- [ ] option-1 | الدفع
- [ ] option-2 | الشغل
- [x] option-3 | القوة
- [ ] option-4 | التسارع
explanation:
الإجابة: القوة المحصلة.

القوة المحصلة هي المعدل الزمني لتغير الزخم؛ أي مقدار تغير الزخم في كل وحدة زمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



وللقيمة اللحظية نأخذ معدل التغير اللحظي. وحدة النسبة \\(\\,\\mathrm{kg\\,m/s^{2}}\\)، وهي النيوتن.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p008-q043
title: أسئلة الفصل — س1/3 — الكتاب، صفحة PDF 9
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 9، أسئلة الفصل — س1/3
question: إذا مثلت العلاقة بيانيًا بين الزخم لجسم على المحور الصادي والزمن على المحور السيني ماذا يمثل ميل المنحنى؟
- [ ] option-1 | الزخم
- [ ] option-2 | مقلوب الدفع
- [ ] option-3 | الطاقة الحركية
- [x] option-4 | القوة
explanation:
المطلوب معنى ميل منحنى الزخم مقابل الزمن.

الميل يساوي التغير في الكمية على المحور الرأسي مقسومًا على التغير في الكمية على المحور الأفقي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext>slope</mtext><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



وبحسب قانون نيوتن الثاني بصيغته العامة، هذه النسبة هي متوسط القوة المحصلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



إذن الميل يمثل القوة المحصلة؛ وميل المماس عند لحظة معينة يمثل القوة اللحظية.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p005-q011
title: أسئلة الفصل — س1/9 — الكتاب، صفحة PDF 10
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س1/9
question: إذا دفع رجل كتلته \\(70\\,\\mathrm{kg}\\) يقف على أرض جليدية أفقية ولدًا ساكنًا كتلته \\(50\\,\\mathrm{kg}\\)، فكم يساوي التغير في زخم الرجل والولد معًا بوحدة \\(\\mathrm{kg\\,m/s}\\)؟
- [x] option-1 | \\(0\\)
- [ ] option-2 | \\(100\\)
- [ ] option-3 | \\(140\\)
- [ ] option-4 | \\(240\\)
explanation:
المطلوب تغير زخم الرجل والولد معًا، لا تغير زخم أحدهما منفردًا.

نعدهما نظامًا واحدًا. الأرض الجليدية تسمح بإهمال الاحتكاك الأفقي، والوزن والقوة العمودية يتوازنان رأسيًا.

قوتا الدفع بين الرجل والولد داخليتان. وبقانون نيوتن الثالث تتساويان مقدارًا وتتعاكسان اتجاهًا، وتؤثران خلال الزمن نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>−</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">y</mi></mrow></msub></mrow></math>
\`\`\`



نجمع تغيري الزخم لحساب تغير زخم النظام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>P</mi><mo>⃗</mo></mover><mo>=</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>+</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



النتيجة: تغير الزخم الكلي صفر \\(\\,\\mathrm{kg\\,m/s}\\)؛ فالزخم الكلي محفوظ رغم تغير زخم كل شخص.
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p009-q050
title: أسئلة الفصل — س2 — فرع 1 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(2\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س2 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بكل من:

الزخم.

solution:
الكتاب: الزخم الخطي، الصفحة المطبوعة \\(2\\)، صفحة \\(\\mathrm{PDF} 4\\).

**الإجابة بنص الكتاب:**

> الزخم: كمية فيزيائية متجهة تساوي حاصل ضرب كتلة الجسم في سرعته، وتكون باتجاه السرعة.




:::

:::exam-question
id: physics-tawjihi-2025-p009-q049
title: أسئلة الفصل — س2 — فرع 2 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(2\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س2 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بكل من:

الدفع.

solution:
الكتاب: الدفع، الصفحة المطبوعة \\(3\\)، صفحة \\(\\mathrm{PDF} 5\\).

**الإجابة بنص الكتاب:**

> الدفع: كمية فيزيائية متجهة تساوي حاصل ضرب متوسط القوة في زمن تأثيرها، واتجاهه باتجاه القوة.




:::

:::exam-question
id: physics-tawjihi-2025-p016-q102
title: أسئلة الفصل — س2 — فرع 3 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(2\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س2 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بكل من:

النظام المعزول.

solution:
الكتاب: حفظ الزخم — النظام المعزول، الصفحة المطبوعة \\(6\\)، صفحة \\(\\mathrm{PDF} 8\\).

**الإجابة بنص الكتاب:**

> فإذا كانت محصلة القوى الخارجية المؤثرة في مجموعة من الأجسام تساوي صفراً سميت مجموعة الأجسام بالنظام المعزول.




:::

:::exam-question
id: physics-tawjihi-2025-p009-q057
title: أسئلة الفصل — س3 — فرع 1 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(3\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س3 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

تنكسر بيضة نيئة إذا سقطت من ارتفاع ما باتجاه أرض صلبة من الإسمنت وقد لا تنكسر البيضة نفسها إذا وقعت على أرض رملية من نفس الارتفاع.

solution:
المعطيات المهمة: البيضة نفسها تسقط من الارتفاع نفسه، ثم تتوقف على كل سطح. المطلوب تفسير اختلاف احتمال انكسارها.

الزخم هو الكتلة مضروبة في متجه السرعة \\(p=mv\\)،وتغيره النهائي ناقص الابتدائي. بإهمال مقاومة الهواء تكون سرعة الاصطدام نفسها؛ والسرعة النهائية بعد التوقف صفر. لذلك يكون مقدار تغير الزخم نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><mn>0</mn><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



الدفع يساوي تغير الزخم، ومتوسط القوة المحصلة يساوي هذا التغير مقسومًا على زمن التوقف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



يغوص سطح الرمل فتزداد مدة توقف البيضة، بينما يوقفها الإسمنت خلال مدة أقصر.

مع ثبات تغير الزخم، زيادة الزمن تقلل متوسط القوة؛ لذلك يقل احتمال انكسار البيضة على الرمل. المقارنة تتعلق بمتوسط قوة الاصطدام، مع إهمال دفع الوزن القصير أثناءه.
:::

:::exam-question
id: physics-tawjihi-2025-p009-q051
title: أسئلة الفصل — س3 — فرع 2 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(3\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س3 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

تكون مواسير بنادق الصيد طويلة.

solution:
دفع الغاز على القذيفة يساوي تغير زخمها؛ وتفسير المنهج يفترض بقاء قوة الغاز إلى الأمام خلال حركتها في السبطانة.

السبطانة الأطول تسمح للغازات بدفع القذيفة مدة أطول ما دامت تؤثر إلى الأمام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mtext> </mtext><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`



زيادة الدفع تكسب القذيفة تغيرًا أكبر في الزخم، فتزداد سرعة خروجها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">Δ</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mfrac><mi>I</mi><mi>m</mi></mfrac></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p009-q052
title: أسئلة الفصل — س3 — فرع 3 — الكتاب، صفحة PDF 10
question: أسئلة الفصل — س\\(3\\) — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 10، أسئلة الفصل — س3 — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

سرعة ارتداد المدفع أقل بكثير من سرعة انطلاق القذيفة.

solution:
نعد المدفع والقذيفة نظاماً واحداً كان ساكناً قبل الإطلاق. خلال الإطلاق نهمل الدفع الخارجي الأفقي، فيُحفظ مجموع الزخم.

الزخم هو الكتلة مضروبة في السرعة. نرمز لكتلة المدفع وسرعته بـ \\(M\\) و\\(V\\)، ولكتلة القذيفة وسرعتها بـ \\(m\\) و\\(v\\)، ونختار اتجاه القذيفة موجباً.

الزخم الابتدائي صفر، لذلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>M</mi><mi>V</mi><mo>+</mo><mi>m</mi><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



نطرح زخم القذيفة من الطرفين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>M</mi><mi>V</mi><mo>=</mo><mo>−</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



نقسم على كتلة المدفع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mo>−</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mi>v</mi></mrow></math>
\`\`\`



الإشارة السالبة تعني أن المدفع يرتد عكس اتجاه القذيفة. ولمقارنة السرعتين نأخذ المقدارين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>v</mi><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mi>m</mi><mi>M</mi></mfrac></mrow></math>
\`\`\`



كتلة المدفع أكبر بكثير من كتلة القذيفة، فتكون النسبة \\(m/M\\) أصغر بكثير من \\(1\\). لذلك سرعة ارتداده أقل بكثير من سرعة القذيفة.
:::

:::mcq
id: physics-tawjihi-2025-p006-q026
title: أسئلة الوحدة — س1/5 — الكتاب، صفحة PDF 20
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 20، أسئلة الوحدة — س1/5
question: مضاعفة الطاقة الحركية لجسم زخمه الخطي \\(16\\,\\mathrm{kg\\,m/s}\\) بمقدار أربع مرات بثبوت الكتلة فإن الزخم يصبح بوحدة \\(\\mathrm{kg\\,m/s}\\):
- [ ] option-1 | \\(16\\)
- [ ] option-2 | \\(4\\)
- [ ] option-3 | \\(64\\)
- [x] option-4 | \\(32\\)
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



عند ثبات الكتلة يتناسب مربع الزخم مع طاقة الحركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>f</mi></msub><msub><mi>p</mi><mi>i</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><msub><mi>K</mi><mi>f</mi></msub><msub><mi>K</mi><mi>i</mi></msub></mfrac></msqrt></mrow></math>
\`\`\`



زيادة الطاقة إلى أربعة أمثالها تضاعف مقدار الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mn>16</mn><msqrt><mn>4</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mn>32</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p005-q015
title: أسئلة الوحدة — س1/8 — الكتاب، صفحة PDF 20
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 20، أسئلة الوحدة — س1/8
question: إذا مثلت العلاقة بيانيًا بين الدفع المؤثر على جسم على محور الصادات والتغير في السرعة على محور السينات، ماذا يمثل ميل المنحنى؟
- [ ] option-1 | الزخم
- [x] option-2 | كتلة الجسم
- [ ] option-3 | التسارع
- [ ] option-4 | القوة المؤثرة
explanation:
نظرية الدفع والزخم تكتب الدفع بدلالة التغير في السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">Δ</mi><mi>v</mi></mrow></math>
\`\`\`



الميل هو معامل المتغير الأفقي، أي كتلة الجسم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext>slope</mtext><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>I</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mo stretchy="false">(</mo><mi mathvariant="normal">Δ</mi><mi>v</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext>slope</mtext><mo>=</mo><mi>m</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p012-q074
title: أسئلة الوحدة — س2 — فرع 1 — الكتاب، صفحة PDF 21
question: أسئلة الوحدة — س\\(2\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 21، أسئلة الوحدة — س2 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اصطدمت كرة كتلتها \\(50\\,\\mathrm{g}\\) تسير بسرعة \\(5\\,\\mathrm{m/s}\\) بجدار، وارتدت عنه بطاقة حركية تعادل ربع طاقتها الحركية الابتدائية وعلى الخط نفسه. احسب:

1- الدفع المؤثر على الكرة.

solution:
المعطيات: كتلة الكرة \\(50\\)غ، وسرعة الاقتراب \\(5\\)م/ث، وطاقة الارتداد ربع الابتدائية. المطلوب دفع الجدار على الكرة.

نحوّل الغرام إلى كيلوغرام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mn>50</mn><mi mathvariant="normal">/</mi><mn>1000</mn><mo>=</mo><mn>0.05</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`



طاقة الحركة \\(K=\\frac{1}{2}mv^{2}\\). عند ثبات الكتلة، نسبة الطاقتين تساوي نسبة مربعي مقداري السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>f</mi></msub><msub><mi>K</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>f</mi></msub><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>i</mi></msub><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`



نأخذ الجذر الموجب لإيجاد مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>f</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>5</mn><msqrt><mrow><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></msqrt><mo>=</mo><mn>2.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نختار اتجاه الاقتراب موجبًا؛ الارتداد في الاتجاه المعاكس فيجعل \\(v_{f}\\) سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mo>+</mo><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>2.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الدفع يساوي تغير الزخم؛ لذلك نطرح الزخم الابتدائي من النهائي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.05</mn><mo stretchy="false">[</mo><mo>−</mo><mn>2.5</mn><mo>−</mo><mo stretchy="false">(</mo><mo>+</mo><mn>5</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.05</mn><mo stretchy="false">(</mo><mo>−</mo><mn>7.5</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>0.375</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: الدفع \\(-0\\)٫\\(375\\,\\mathrm{N\\,s}\\)، أي مقداره \\(0\\)٫\\(375\\,\\mathrm{N\\,s}\\) في عكس اتجاه الاقتراب.
:::

:::mcq
id: physics-tawjihi-2025-p007-q029
title: اختبار الوحدة — س7 — الكتاب، صفحة PDF 22
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 22، اختبار الوحدة — س7
question: اصطدمت كتلتان متماثلتان \\(m\\) تتحركان باتجاهين متعاكسين بنفس السرعة \\(v\\)؛ فإن التغير في زخم النظام:
- [x] option-1 | صفر
- [ ] option-2 | \\(\\frac12mv\\)
- [ ] option-3 | \\(mv\\)
- [ ] option-4 | \\(2mv\\)
explanation:
نستخدم حفظ الزخم لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



نجمع زخمي الجسمين مع الإشارات؛ اتجاه أحدهما موجب والآخر سالب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><mi>m</mi><mi>v</mi><mo>+</mo><mi>m</mi><mo stretchy="false">(</mo><mo>−</mo><mi>v</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



القوتان بينهما داخليتان، فيبقى الزخم الكلي محفوظًا أثناء التصادم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>f</mi></msub><mo>=</mo><msub><mi>P</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>P</mi><mi>f</mi></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>P</mi><mo>=</mo><msub><mi>P</mi><mi>f</mi></msub><mo>−</mo><msub><mi>P</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>P</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-tawjihi-2025-p004-q001
title: السؤال 001 — ص 3 — السؤال الأصلي 1
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 3، السؤال 1
question: جسم كتلته \\(5\\,\\mathrm{kg}\\) وزخمه \\(15\\,\\mathrm{kg\\,m/s}\\)، ما مقدار محصلة القوى التي يجب أن تؤثر على الجسم لزيادة سرعته إلى \\(9\\,\\mathrm{m/s}\\) خلال \\(15\\,\\mathrm{s}\\)، بوحدة \\(\\mathrm{N}\\)؟
- [ ] option-1 | \\(0.5\\)
- [x] option-2 | \\(2\\)
- [ ] option-3 | \\(2.4\\)
- [ ] option-4 | \\(4\\)
explanation:
المعطيات: الكتلة \\(m=5\\,\\mathrm{kg}\\)، والزخم الابتدائي \\(p_{i}=15\\,\\mathrm{kg\\,m/s}\\)، والسرعة النهائية \\(v_{f}=9\\,\\mathrm{m/s}\\)، والمدة \\(\\Delta t=15\\,\\mathrm{s}\\). المطلوب القوة المحصلة.

الزخم \\(p\\) يساوي الكتلة مضروبة في السرعة. نرمز للدفع بـ \\(I\\)، ولمتوسط القوة بـ \\(F\\)̄.

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



نستخرج السرعة الابتدائية من الزخم والكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>p</mi><mi>i</mi></msub><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>15</mn><mn>5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>3</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب القوة من تغير الزخم خلال الزمن المحدد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mrow><mn>5</mn><mo stretchy="false">(</mo><mn>9</mn><mo>−</mo><mn>3</mn><mo stretchy="false">)</mo></mrow><mn>15</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>30</mn><mn>15</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



إذن متوسط القوة المحصلة \\(2\\,\\mathrm{N}\\) باتجاه زيادة السرعة؛ وإذا كانت المحصلة ثابتة فهذه قيمتها طوال المدة.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p004-q002
title: السؤال 002 — ص 3 — السؤال الأصلي 2
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 3، السؤال 2
question: أي الكميات الفيزيائية الآتية تقاس بوحدة \\(\\frac{\\mathrm{J\\,s}}{\\mathrm{m}}\\)؟
- [ ] option-1 | الزخم الزاوي
- [ ] option-2 | القوة
- [ ] option-3 | عزم القوة
- [x] option-4 | الدفع
explanation:
الجول وحدة الشغل؛ ولأن الشغل يساوي القوة مضروبة في الإزاحة، فإن الجول يساوي \\(\\,\\mathrm{N\\,m}\\). نستبدل وحدة الجول ثم نختصر المتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">J</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">m</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">J</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow><mi mathvariant="normal">m</mi></mfrac><mo>=</mo><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



هذه وحدة حاصل ضرب القوة في الزمن، أي الدفع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mtext> </mtext><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`



الإجابة: الدفع، الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p004-q004
title: السؤال 004 — ص 3 — السؤال الأصلي 4
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 3، السؤال 4
question: جسمان \\(A,B\\)، كتلة الجسم \\(B\\) تساوي أربعة أمثال كتلة الجسم \\(A\\)، يتحرك الجسمان بحيث \\(v_A=2v_B\\)، ما مقدار الطاقة الحركية للجسم \\(A\\)؟
- [ ] option-1 | \\(K_A=\\frac14 K_B\\)
- [ ] option-2 | \\(K_A=\\frac12 K_B\\)
- [x] option-3 | \\(K_A=K_B\\)
- [ ] option-4 | \\(K_A=4K_B\\)
explanation:
المعطى \\(m_{B}=4m_{A}\\)، و\\(v_{A}=2v_{B}\\). المطلوب مقارنة طاقتي الحركة.

طاقة الحركة هي نصف الكتلة في مربع السرعة؛ نكتب نسبة الطاقتين حتى يختصر العامل\\(\\frac{1}{2}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>A</mi></msub><msubsup><mi>v</mi><mi>A</mi><mn>2</mn></msubsup></mrow><mrow><msub><mi>m</mi><mi>B</mi></msub><msubsup><mi>v</mi><mi>B</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mi>A</mi></msub><mrow><mn>4</mn><msub><mi>m</mi><mi>A</mi></msub></mrow></mfrac><msup><mrow><mo fence="true">(</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mi>B</mi></msub></mrow><msub><mi>v</mi><mi>B</mi></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`



الإجابة: \\(K_{A}=K_{B}\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p004-q005
title: السؤال 005 — ص 3 — السؤال الأصلي 5
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 3، السؤال 5
question: قذيفة كتلتها \\(2\\,\\mathrm{kg}\\) انطلقت أفقيًا بسرعة \\(200\\,\\mathrm{m/s}\\) من فوهة مدفع ساكن كتلته \\(500\\,\\mathrm{kg}\\)، ما التغير في زخم المدفع بوحدة \\(\\mathrm{kg\\,m/s}\\)؟
- [ ] option-1 | \\(500\\)
- [ ] option-2 | \\(160\\)
- [ ] option-3 | \\(250\\)
- [x] option-4 | \\(400\\)
explanation:
نأخذ المدفع والقذيفة نظامًا واحدًا ساكنًا أولًا، ونهمل الدفع الخارجي الأفقي أثناء الإطلاق؛ لذلك يبقى زخمهما الكلي صفرًا.

نحسب زخم القذيفة بعد الإطلاق باتخاذ اتجاهها موجبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>200</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>400</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



يحفظ الزخم الكلي الصفري؛ زخم المدفع النهائي معاكس لزخم القذيفة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>p</mi><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><msub><mi>p</mi><mrow><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">n</mi></mrow><mo separator="true">,</mo><mi>f</mi></mrow></msub><mo>−</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>p</mi><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>400</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



إذن مقدار تغير زخم المدفع \\(400\\,\\mathrm{kg\\,m/s}\\)، واتجاهه عكس انطلاق القذيفة.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p004-q006
title: السؤال 006 — ص 3 — السؤال الأصلي 6
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 3، السؤال 6
question: رجل وزنه \\(800\\,\\mathrm{N}\\) يدفع طفلًا وزنه \\(300\\,\\mathrm{N}\\) يقف على أرض تزلج بقوة مقدارها \\(50\\,\\mathrm{N}\\)، ما القوة التي يدفع بها الطفل الرجل بوحدة \\(\\mathrm{N}\\)؟ اعتبر اتجاه قوة الرجل على الطفل هو الاتجاه الموجب.
- [ ] option-1 | \\(50\\)
- [x] option-2 | \\(-50\\)
- [ ] option-3 | \\(125\\)
- [ ] option-4 | \\(-125\\)
explanation:
نطبق قانون نيوتن الثالث: قوتا التفاعل بين جسمين متساويتان مقداراً ومتعاكستان اتجاهاً، وتؤثر كل منهما في جسم مختلف.

لذلك وزن الرجل ووزن الطفل لا يغيران تساوي القوتين. مقدار قوة الطفل على الرجل \\(50\\,\\mathrm{N}\\)، واتجاهها عكس قوة الرجل على الطفل.

لنكتب الإشارة، نختار اتجاه قوة الرجل على الطفل موجباً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mo>→</mo><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>=</mo><mo>+</mo><mn>50</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">d</mi><mo>→</mo><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>−</mo><msub><mi>F</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mo>→</mo><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">d</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>F</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">d</mi><mo>→</mo><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>50</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الإجابة المنهجية: \\(-50\\,\\mathrm{N}\\)، الخيار الثاني، وفق هذا الاتجاه الموجب. أما مقدار القوة فهو \\(50\\,\\mathrm{N}\\)؛ السالب يحدد الاتجاه ولا يعني أن مقدار القوة سالب.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p004-q007
title: السؤال 007 — ص 3 — السؤال الأصلي 7
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 3، السؤال 7
question: إذا علمت أن المساحة تحت المنحنى لقوة متغيرة مع الزمن كما في الشكل المجاور تساوي \\(900\\,\\mathrm{N\\,s}\\)، فما متوسط قوة الدفع (بوحدة النيوتن)؟
- [ ] option-1 | \\(200\\)
- [x] option-2 | \\(150\\)
- [ ] option-3 | \\(100\\)
- [ ] option-4 | \\(50\\)
explanation:
المعطى أن المساحة تحت منحنى القوة–الزمن \\(900\\,\\mathrm{N\\,s}\\). المطلوب متوسط القوة.

![الرسم الأصلي](assets/lessons/curriculum-evidence/4a2d4d21d7bb462108e4.webp)

المساحة تحت منحنى القوة–الزمن تمثل الدفع. ومتوسط القوة هو القوة الثابتة التي تعطي الدفع نفسه خلال المدة نفسها؛ لذلك يساوي الدفع مقسوماً على المدة.

نقرأ من الرسم بداية التأثير عند \\(2\\,\\mathrm{s}\\) ونهايته عند \\(8\\) ثوانٍ.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mn>8</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mi>I</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>900</mn><mn>6</mn></mfrac><mo>=</mo><mn>150</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الإجابة: متوسط القوة \\(150\\,\\mathrm{N}\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى القوة مع الزمن، مع تدريج المحورين وحدي الفترة الزمنية.](assets/lessons/curriculum-evidence/4a2d4d21d7bb462108e4.webp)
:::

:::mcq
id: physics-tawjihi-2025-p005-q008
title: السؤال 008 — ص 4 — السؤال الأصلي 8
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 4، السؤال 8
question: في تصادم بين كرتين أثرت الكرة الأولى على الثانية بقوة \\(100\\,\\mathrm{N}\\) فتغير زخم الكرة الثانية بمقدار \\(5\\,\\mathrm{N\\,s}\\)، ما مقدار زمن تصادم الكرتين بوحدة (ثانية)؟
- [x] option-1 | \\(0.05\\)
- [ ] option-2 | \\(5\\)
- [ ] option-3 | \\(20\\)
- [ ] option-4 | \\(200\\)
explanation:
المعطى أن القوة \\(100\\,\\mathrm{N}\\) وتغير الزخم \\(5\\,\\mathrm{N\\,s}\\). المطلوب زمن التصادم.

نظرية الدفع والزخم تقول إن دفع القوة يساوي تغير الزخم. وللقوة الثابتة، أو باستعمال متوسطها خلال التصادم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow></math>
\`\`\`



نقسم الطرفين على القوة لإيجاد الزمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mi>F</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mfrac><mn>5</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.05</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`



الإجابة: زمن التصادم \\(0.05\\,\\mathrm{s}\\).
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p005-q009
title: السؤال 009 — ص 4 — السؤال الأصلي 9
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 4، السؤال 9
question: جسمان \\(A,B\\) لهما نفس الكتلة، إذا كانت \\(P_A=3P_B\\) فكم تساوي \\(K_A\\)؟
- [ ] option-1 | \\(3K_B\\)
- [x] option-2 | \\(9K_B\\)
- [ ] option-3 | \\(K_B\\)
- [ ] option-4 | \\(\\frac19 K_B\\)
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
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msubsup><mi>p</mi><mi>A</mi><mn>2</mn></msubsup><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo></mrow><mrow><msubsup><mi>p</mi><mi>B</mi><mn>2</mn></msubsup><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mn>2</mn><mi>m</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><msub><mi>p</mi><mi>A</mi></msub><msub><mi>p</mi><mi>B</mi></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`



نعوّض بنسبة الزخمين ثم نربعها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><msup><mn>3</mn><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac><mo>=</mo><mn>9</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>A</mi></msub><mo>=</mo><mn>9</mn><msub><mi>K</mi><mi>B</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p005-q010
title: السؤال 010 — ص 4 — السؤال الأصلي 10
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 4، السؤال 10
question: جسمان \\(X,Y\\) لهما نفس الكتلة، إذا كانت \\(K_X=9K_Y\\)، فما مقدار زخم الجسم \\(X\\) بدلالة مقدار زخم الجسم \\(Y\\)؟

- [ ] option-1 | \\(\\sqrt3 P_Y\\)
- [ ] option-2 | \\(\\frac13 P_Y\\)
- [x] option-3 | \\(3P_Y\\)
- [ ] option-4 | \\(9P_Y\\)
explanation:
المعطى تساوي الكتلتين، و\\(K_{X}=9K_{Y}\\). المطلوب مقدار زخم \\(X\\) بدلالة زخم \\(Y\\).

من تعريف الزخم \\(p=mv\\) نكتب السرعة بدلالة الزخم والكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>p</mi><mi>m</mi></mfrac></mrow></math>
\`\`\`



نعوّض في طاقة الحركة، ثم نربع الكسر ونختصر عاملاً من الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mrow><mo fence="true">(</mo><mfrac><mi>p</mi><mi>m</mi></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`



عند تساوي الكتلتين نختار هذه العلاقة لربط نسبة الطاقتين بنسبة مربعي الزخمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>X</mi></msub><msub><mi>K</mi><mi>Y</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>X</mi></msub><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>Y</mi></msub><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>9</mn></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأن المطلوب مقدار الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>X</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>Y</mi></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><msqrt><mn>9</mn></msqrt><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>X</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>3</mn><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>Y</mi></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



النتيجة تتعلق بالمقدارين؛ لا تحدد الطاقة اتجاه الزخم.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p005-q012
title: السؤال 012 — ص 4 — السؤال الأصلي 12
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 4، السؤال 12؛ تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 42
question: اصطدمت كرة كتلتها \\(2\\,\\mathrm{kg}\\) تتحرك بسرعة \\(4\\,\\mathrm{m/s}\\) عموديًا بحائط وارتدت عنه بنفس السرعة، فما مقدار التغير في كمية تحركها بوحدة \\(\\mathrm{kg\\,m/s}\\)؟

- [ ] option-1 | \\(0\\)
- [ ] option-2 | \\(8\\)
- [x] option-3 | \\(16\\)
- [ ] option-4 | \\(32\\)
explanation:
المعطى: الكتلة \\(2\\,\\mathrm{kg}\\)، وسرعة الاقتراب والارتداد متساويتان مقداراً وتختلفان اتجاهًا. المطلوب مقدار تغير الزخم.

الزخم هو الكتلة مضروبة في السرعة المتجهة. وتغيره يساوي النهائي ناقص الابتدائي، لذلك يجب مراعاة الاتجاه.

نختار اتجاه الاقتراب موجبًا، فتكون سرعة الارتداد سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mo>+</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>2</mn><mo stretchy="false">[</mo><mo>−</mo><mn>4</mn><mo>−</mo><mo stretchy="false">(</mo><mo>+</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mo>−</mo><mn>8</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>16</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



السالب يحدد اتجاه التغير؛ أما المقدار المطلوب فهو:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>16</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p005-q013
title: السؤال 013 — ص 4 — السؤال الأصلي 13
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 4، السؤال 13
question: ماذا يمثل ميل الخط المستقيم في الشكل المجاور للرسم البياني (الزخم – السرعة)؟
- [ ] option-1 | الدفع المؤثر على الجسم
- [x] option-2 | كتلة الجسم
- [ ] option-3 | التغير في الزخم
- [ ] option-4 | محصلة القوة المؤثرة على الجسم
explanation:
![الرسم الأصلي](assets/lessons/curriculum-evidence/05bd93d026c9c5050a9b.webp)

العلاقة بين مقدار الزخم والسرعة خطية عند ثبات الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



نقسم الزيادة في الزخم على الزيادة في السرعة، فنحصل على الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext>slope</mtext><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mtext>slope</mtext><mo>=</mo><mi>m</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![الرسم البياني للزخم P بدلالة السرعة v.](assets/lessons/curriculum-evidence/05bd93d026c9c5050a9b.webp)
:::





:::mcq
id: physics-tawjihi-2025-p005-q016
title: السؤال 016 — ص 4 — السؤال الأصلي 16
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 4، السؤال 16
question: أي الكميات الفيزيائية الآتية لها نفس وحدة الدفع؟
- [x] option-1 | الزخم
- [ ] option-2 | طاقة الحركة
- [ ] option-3 | الشغل
- [ ] option-4 | القوة المؤثرة
explanation:
**الإجابة:** الزخم

**الشاهد من الكتاب:**

> بين أن وحدة الدفع هي وحدة الزخم نفسها.

**المصدر:** صفحة \\(3\\) من الكتاب.



hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q017
title: السؤال 017 — ص 5 — السؤال الأصلي 17
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 17 · صياغة تعليمية معدّلة
question: يمثل الشكل منحنى الزخم مع الزمن لجسم يتحرك في خط مستقيم تحت تأثير قوة محصلة ثابتة. عند الزمن \\(2\\,\\mathrm{s}\\) كان زخمه \\(30\\,\\mathrm{N\\,s}\\)، وعند الزمن \\(4\\,\\mathrm{s}\\) أصبح \\(40\\,\\mathrm{N\\,s}\\). ما مقدار القوة المحصلة بالنيوتن؟
- [x] option-1 | \\(5\\)
- [ ] option-2 | \\(20\\)
- [ ] option-3 | \\(40\\)
- [ ] option-4 | \\(120\\)
explanation:
المعطيات: الزخم يزداد من \\(30\\) إلى \\(40\\,\\mathrm{N\\,s}\\) خلال الفترة من \\(2\\) إلى \\(4\\,\\mathrm{s}\\). المطلوب مقدار القوة المحصلة.

القوة المحصلة تساوي المعدل الزمني لتغير الزخم؛ لذلك نحسب ميل منحنى الزخم–الزمن.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>40</mn><mo>−</mo><mn>30</mn><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mn>4</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>2</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mfrac><mn>10</mn><mn>2</mn></mfrac><mo>=</mo><mn>5</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الإجابة: \\(5\\,\\mathrm{N}\\)؛ وإشارتها موجبة لأن الزخم يزداد في الاتجاه الموجب.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى الزخم P مع الزمن t وتدريج المحورين.](assets/lessons/curriculum-evidence/55a96b3e02f9595dca47.webp)
:::

:::mcq
id: physics-tawjihi-2025-p006-q018
title: السؤال 018 — ص 5 — السؤال الأصلي 18
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 18
question: اصطدم جسم كتلته \\(2\\,\\mathrm{kg}\\) يتحرك أفقيًا بسرعة \\(6\\,\\mathrm{m/s}\\) بجدار، فكان الدفع المؤثر عليه من الجدار \\(16\\,\\mathrm{N\\,s}\\)، فما التغير في سرعته بوحدة \\(\\mathrm{m/s}\\)؟ أهمل دفع القوى الأخرى خلال زمن التصادم.

- [ ] option-1 | \\(2\\)
- [ ] option-2 | \\(3\\)
- [ ] option-3 | \\(4\\)
- [x] option-4 | \\(8\\)
explanation:
نستخدم أن الدفع يساوي الكتلة مضروبة في تغير السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>v</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



نقسم الدفع على الكتلة؛ المطلوب تغير السرعة لا السرعة النهائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>v</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>I</mi><mi mathvariant="normal">∣</mi></mrow><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>v</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mn>16</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>v</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q019
title: السؤال 019 — ص 5 — السؤال الأصلي 19
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 19
question: جسم كتلته \\(4\\,\\mathrm{kg}\\) يتحرك بسرعة \\(2\\,\\mathrm{m/s}\\) أثرت عليه قوة لمدة \\(4\\,\\mathrm{s}\\) فازداد زخمه بمقدار \\(40\\,\\mathrm{N\\,s}\\)، فما مقدار القوة المؤثرة عليه بوحدة (النيوتن)؟
- [ ] option-1 | \\(8\\)
- [x] option-2 | \\(10\\)
- [ ] option-3 | \\(16\\)
- [ ] option-4 | \\(32\\)
explanation:
المعطى أن الزخم ازداد بمقدار \\(40\\,\\mathrm{N\\,s}\\) خلال \\(4\\) ثوانٍ. المطلوب القوة المحصلة.

نظرية الدفع والزخم تقول إن دفع القوة يساوي تغير الزخم. نرمز لمتوسط القوة بـ \\(F\\)̄، ولزمن التأثير بـ \\(\\Delta t\\)، ولتغير الزخم بـ \\(\\Delta p\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow></math>
\`\`\`



نقسم تغير الزخم على المدة لإيجاد متوسط القوة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>40</mn><mn>4</mn></mfrac><mo>=</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الإجابة: متوسط القوة \\(10\\,\\mathrm{N}\\)، وهو أيضاً مقدار القوة إذا كانت ثابتة.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q020
title: السؤال 020 — ص 5 — السؤال الأصلي 20
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 20
question: تتحرك سيارة كتلتها \\(900\\,\\mathrm{kg}\\) بسرعة مقدارها \\(v\\)، إذا بلغت قوة المحرك \\(1050\\,\\mathrm{N}\\) خلال نصف دقيقة، فأصبحت سرعة السيارة \\(55\\,\\mathrm{m/s}\\)، فما مقدار السرعة الابتدائية للسيارة؟
- [x] option-1 | \\(20\\,\\mathrm{m/s}\\)
- [ ] option-2 | \\(25\\,\\mathrm{m/s}\\)
- [ ] option-3 | \\(30\\,\\mathrm{m/s}\\)
- [ ] option-4 | \\(35\\,\\mathrm{m/s}\\)
explanation:
نهمل قوى المقاومة في هذا النموذج، فتساوي القوة المحصلة قوة المحرك. نظرية الدفع والزخم تعطي \\(F\\Delta t=m(v_{f}-v_{i})\\)، ومنها \\(\\Delta v=F\\Delta t/m\\).

نحوّل نصف الدقيقة إلى ثوانٍ ثم نحسب تغير السرعة الذي أحدثته قوة المحرك.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mn>30</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mfrac><mrow><mi>F</mi><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mfrac><mrow><mn>1050</mn><mo stretchy="false">(</mo><mn>30</mn><mo stretchy="false">)</mo></mrow><mn>900</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mfrac><mn>31500</mn><mn>900</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mn>35</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



القوة زادت السرعة، فنطرح الزيادة من السرعة النهائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><mi mathvariant="normal">Δ</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>55</mn><mo>−</mo><mn>35</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q021
title: السؤال 021 — ص 5 — السؤال الأصلي 21
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 21
question: سقط جسم كتلته \\(1\\,\\mathrm{kg}\\) سقوطًا حرًا من ارتفاع \\(180\\,\\mathrm{cm}\\) عن سطح الأرض، وارتد عنها رأسيًا لأعلى بسرعة \\(2\\,\\mathrm{m/s}\\)، وبإهمال دفع وزن الجسم خلال زمن التلامس القصير، فما دفع الجسم على الأرض بوحدة \\(\\mathrm{N\\,s}\\)؟ علمًا بأن \\(g=10\\,\\mathrm{m/s^2}\\).

- [ ] option-1 | \\(4\\) لأعلى
- [ ] option-2 | \\(4\\) لأسفل
- [ ] option-3 | \\(8\\) لأعلى
- [x] option-4 | \\(8\\) لأسفل
explanation:
المعطيات: الكتلة \\(1\\,\\mathrm{kg}\\)، وارتفاع السقوط \\(180\\,\\mathrm{cm}\\)، وسرعة الارتداد \\(2\\,\\mathrm{m/s}\\) لأعلى. المطلوب دفع الكرة على الأرض.

نحوّل الارتفاع إلى المتر بقسمته على \\(100\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mfrac><mn>180</mn><mn>100</mn></mfrac><mo>=</mo><mn>1.8</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



في السقوط الحر من السكون، وبإهمال مقاومة الهواء، تتحول طاقة الوضع إلى طاقة حركة. نستخدم ذلك لإيجاد سرعة الكرة قبل اصطدامها بالأرض.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mi>h</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نقسم على الكتلة ثم نضرب في \\(2\\) ونأخذ الجذر الموجب لإيجاد مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1.8</mn><mo stretchy="false">)</mo></mrow></msqrt><mo>=</mo><msqrt><mn>36</mn></msqrt><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نختار الأعلى موجبًا، فتكون سرعة السقوط سالبة وسرعة الارتداد موجبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mo>−</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>+</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بما أن زمن التلامس قصير ودفع الوزن مهمل بحسب السؤال. عندئذ يساوي دفع الأرض على الكرة تغير زخم الكرة تقريبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">h</mi><mo>→</mo><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">h</mi><mo>→</mo><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mn>1</mn><mo stretchy="false">[</mo><mn>2</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>6</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



قانون نيوتن الثالث يجعل دفع الكرة على الأرض مساوياً له في المقدار ومعاكساً في الاتجاه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">l</mi><mo>→</mo><mi mathvariant="normal">e</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">h</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: \\(8\\,\\mathrm{N\\,s}\\) إلى أسفل.

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q022
title: السؤال 022 — ص 5 — السؤال الأصلي 22
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 22
question: يتحرك جسم كتلته \\(m\\) بسرعة \\(v\\)، فما النسبة بين طاقته الحركية إلى زخمه \\(\\frac{k}{p}\\)؟
- [ ] option-1 | \\(\\frac{m}{2}\\)
- [ ] option-2 | \\(\\frac{2}{m}\\)
- [x] option-3 | \\(\\frac{v}{2}\\)
- [ ] option-4 | \\(\\frac{2}{v}\\)
explanation:
نكتب طاقة الحركة والزخم بدلالة الكتلة والسرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



نختصر الكتلة وعاملًا من السرعة، على أن يكون الجسم متحركًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>K</mi><mi>p</mi></mfrac><mo>=</mo><mfrac><mrow><mstyle scriptlevel="0" displaystyle="false"><mfrac><mn>1</mn><mn>2</mn></mfrac></mstyle><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><mi>v</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>K</mi><mi>p</mi></mfrac><mo>=</mo><mfrac><mi>v</mi><mn>2</mn></mfrac><mspace width="2em"/><mo stretchy="false">(</mo><mi>v</mi><mo mathvariant="normal">≠</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q023
title: السؤال 023 — ص 5 — السؤال الأصلي 23
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 23
question: جسمان \\(Y,X\\)، إذا كانت كتلة الجسم \\(Y\\) تساوي \\(\\frac14 m_X\\)، وزخمه \\(\\frac14 P_X\\)، فما مقدار الطاقة الحركية \\(K_Y\\)؟
- [ ] option-1 | \\(16K_X\\)
- [ ] option-2 | \\(\\frac1{64}K_X\\)
- [ ] option-3 | \\(\\frac1{16}K_X\\)
- [x] option-4 | \\(\\frac14 K_X\\)
explanation:
المعطيات: \\(m_{Y}/m_{X}=1/4\\)، و\\(p_{Y}/p_{X}=1/4\\). المطلوب طاقة \\(Y\\) بدلالة طاقة \\(X\\).

من تعريف الزخم \\(p=mv\\) نكتب السرعة بدلالة الزخم والكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>p</mi><mi>m</mi></mfrac></mrow></math>
\`\`\`



نعوّض في طاقة الحركة، ثم نربع الكسر ونختصر عاملاً من الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mrow><mo fence="true">(</mo><mfrac><mi>p</mi><mi>m</mi></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`



نستخدم هذه العلاقة لأن السؤال يعطي نسب الكتل والزخوم، لا السرعات.

نقارن الطاقتين باستخدام الزخم والكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>Y</mi></msub><msub><mi>K</mi><mi>X</mi></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><msub><mi>p</mi><mi>Y</mi></msub><msub><mi>p</mi><mi>X</mi></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mfrac><msub><mi>m</mi><mi>X</mi></msub><msub><mi>m</mi><mi>Y</mi></msub></mfrac></mrow></math>
\`\`\`



نربع نسبة الزخم ثم نضرب في مقلوب نسبة الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>Y</mi></msub><msub><mi>K</mi><mi>X</mi></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>Y</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msub><mi>K</mi><mi>X</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q024
title: السؤال 024 — ص 5 — السؤال الأصلي 24
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 24
question: جسمان \\(a,b\\)، إذا كانت كتلتاهما \\(m_a=4m_b\\)، ولهما نفس الطاقة الحركية، فما النسبة بين زخميهما \\(P_a:P_b\\)؟
- [x] option-1 | \\(2:1\\)
- [ ] option-2 | \\(1:2\\)
- [ ] option-3 | \\(4:1\\)
- [ ] option-4 | \\(1:4\\)
explanation:
العلاقة \\(K=p^{2}/(2m)\\) تعطي مقدار الزخم \\(p=\\sqrt{2mK}\\). نأخذ الجذر الموجب لأن المقارنة بين المقدارين، لا الاتجاهين.

عند تساوي طاقتي الحركة يتناسب مقدار الزخم مع الجذر التربيعي للكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>a</mi></msub><msub><mi>p</mi><mi>b</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><mrow><msub><mi>m</mi><mi>a</mi></msub><msub><mi>K</mi><mi>a</mi></msub></mrow><mrow><msub><mi>m</mi><mi>b</mi></msub><msub><mi>K</mi><mi>b</mi></msub></mrow></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>a</mi></msub><msub><mi>p</mi><mi>b</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mi>a</mi></msub><msub><mi>m</mi><mi>b</mi></msub></mfrac></msqrt></mrow></math>
\`\`\`



نعوّض بأن كتلة \\(a\\) أربعة أمثال كتلة \\(b\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>a</mi></msub><msub><mi>p</mi><mi>b</mi></msub></mfrac><mo>=</mo><msqrt><mn>4</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>a</mi></msub><msub><mi>p</mi><mi>b</mi></msub></mfrac><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>a</mi></msub><mo>:</mo><msub><mi>p</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p006-q025
title: السؤال 025 — ص 5 — السؤال الأصلي 25
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 5، السؤال 25
question: جسمان \\(A,B\\)، إذا كانت \\(m_A=0.5m_B\\)، وكانت \\(K_B=8K_A\\)، فما مقدار كمية التحرك \\(P_A\\)؟
- [x] option-1 | \\(0.25P_B\\)
- [ ] option-2 | \\(P_B\\)
- [ ] option-3 | \\(4P_B\\)
- [ ] option-4 | \\(8P_B\\)
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



نكتب نسبة الزخمين بدلالة نسبتي الكتلة والطاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>A</mi></msub><msub><mi>p</mi><mi>B</mi></msub></mfrac><mo>=</mo><msqrt><mrow><mfrac><msub><mi>m</mi><mi>A</mi></msub><msub><mi>m</mi><mi>B</mi></msub></mfrac><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac></mrow></msqrt></mrow></math>
\`\`\`



كتلة \\(A\\) نصف كتلة \\(B\\) وطاقته ثمن طاقته، فنأخذ جذر حاصل الضرب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>A</mi></msub><msub><mi>p</mi><mi>B</mi></msub></mfrac><mo>=</mo><msqrt><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>8</mn></mfrac></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>A</mi></msub><msub><mi>p</mi><mi>B</mi></msub></mfrac><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>16</mn></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mi>A</mi></msub><msub><mi>p</mi><mi>B</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`



إذن مقدار زخم \\(A\\) يساوي ربع مقدار زخم \\(B\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>A</mi></msub><mo>=</mo><mn>0.25</mn><msub><mi>p</mi><mi>B</mi></msub></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p007-q027
title: السؤال 027 — ص 6 — السؤال الأصلي 27
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 27
question: كرة كتلتها \\(0.3\\,\\mathrm{kg}\\) تسير بسرعة \\(30\\,\\mathrm{m/s}\\) اصطدمت بحائط فارتدت في الاتجاه المعاكس بسرعة \\(20\\,\\mathrm{m/s}\\)، إذا كان زمن التصادم \\(0.1\\,\\mathrm{s}\\)، ما متوسط قوة الدفع المؤثرة عليها بوحدة النيوتن؟
- [ ] option-1 | \\(30\\)
- [ ] option-2 | \\(60\\)
- [ ] option-3 | \\(90\\)
- [x] option-4 | \\(150\\)
explanation:
الزخم هو الكتلة مضروبة في متجه السرعة \\(p=mv\\)؛ ولثبات الكتلة يكون تغيره \\(m(v_{f}-v_{i})\\). نظرية الدفع والزخم تقول إن دفع القوة المحصلة يساوي هذا التغير. نستخدمها هنا لربط القوة أو زمن تأثيرها بتغير سرعة الجسم، مع ثبات كتلته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نأخذ الاقتراب موجبًا، فيكون الارتداد سالبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>30</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>−</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب تغير الزخم الذي سببه الحائط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>0.3</mn><mo stretchy="false">(</mo><mo>−</mo><mn>20</mn><mo>−</mo><mn>30</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>0.3</mn><mo stretchy="false">(</mo><mo>−</mo><mn>50</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mo>−</mo><mn>15</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نقسم على زمن التلامس؛ المطلوب مقدار متوسط القوة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mrow><mo>−</mo><mn>15</mn></mrow><mn>0.1</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mo>−</mo><mn>150</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mn>150</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p007-q028
title: السؤال 028 — ص 6 — السؤال الأصلي 28
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 28
question: إذا دفع رجل كتلته \\(80\\,\\mathrm{kg}\\) يقف على أرض جليدية أفقية ولدًا ساكنًا كتلته \\(20\\,\\mathrm{kg}\\)، وتحرك الولد بسرعة \\(2\\,\\mathrm{m/s}\\)، فكم يساوي التغير في زخم الرجل والولد معًا بوحدة \\(\\mathrm{kg\\,m/s}\\)؟
- [ ] option-1 | \\(240\\)
- [ ] option-2 | \\(140\\)
- [ ] option-3 | \\(100\\)
- [x] option-4 | \\(0\\)
explanation:
نعد الرجل والولد نظاماً واحداً. على الأرض الجليدية نهمل الاحتكاك الأفقي، فتكون محصلة الدفع الخارجي الأفقي صفراً ويحفظ الزخم الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



زخم الجسم يساوي كتلته مضروبة في سرعته. نحسب زخم الولد باتخاذ اتجاهه موجبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mn>20</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">y</mi></mrow></msub><mo>=</mo><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



لأن زخم النظام كان صفرًا، يكتسب الرجل زخمًا مساويًا ومعاكسًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نجمع الزخمين لنجد أن مجموعهما لم يتغير.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>P</mi><mo>=</mo><mo stretchy="false">(</mo><mn>40</mn><mo>−</mo><mn>40</mn><mo stretchy="false">)</mo><mo>−</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>P</mi><mo>=</mo><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>−</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>P</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::



:::mcq
id: physics-tawjihi-2025-p007-q030
title: السؤال 030 — ص 6 — السؤال الأصلي 30
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 30
question: ما زخم نظام مكون من جسمين، الأول كتلته \\(m\\) والثاني كتلته \\(3m\\) ويتحركان باتجاهين متعاكسين وبالسرعة نفسها \\(v\\)؟
- [ ] option-1 | \\(0\\)
- [ ] option-2 | \\(mv\\)
- [x] option-3 | \\(2mv\\)
- [ ] option-4 | \\(4mv\\)
explanation:
نأخذ اتجاه الجسم الأكبر كتلة موجبًا، فتكون سرعة الجسم الآخر سالبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mn>3</mn><mi>m</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>m</mi></msub><mo>=</mo><mo>−</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`



الزخم الكلي هو المجموع المتجه للزخمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mn>3</mn><mi>m</mi><mi>v</mi><mo>−</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p007-q031
title: السؤال 031 — ص 6 — السؤال الأصلي 31
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 31
question: جسمان \\(A,B\\) لهما نفس الكتلة، إذا كانت الطاقة الحركية للجسم \\(A\\) تساوي مثلي الطاقة الحركية للجسم \\(B\\)، فكم يساوي زخم الجسم \\(A\\)؟
- [ ] option-1 | \\(P_A=P_B\\)
- [ ] option-2 | \\(P_A=4P_B\\)
- [x] option-3 | \\(P_A=\\sqrt2 P_B\\)
- [ ] option-4 | \\(P_A=2P_B\\)
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



تساوي الكتلتين يجعل نسبة مربعي الزخمين مساوية لنسبة الطاقتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msubsup><mi>p</mi><mi>A</mi><mn>2</mn></msubsup><msubsup><mi>p</mi><mi>B</mi><mn>2</mn></msubsup></mfrac><mo>=</mo><mfrac><msub><mi>K</mi><mi>A</mi></msub><msub><mi>K</mi><mi>B</mi></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msubsup><mi>p</mi><mi>A</mi><mn>2</mn></msubsup><msubsup><mi>p</mi><mi>B</mi><mn>2</mn></msubsup></mfrac><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`



نأخذ الجذر الموجب لأننا نقارن مقداري الزخمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>A</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mtext> </mtext><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>B</mi></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p007-q032
title: السؤال 032 — ص 6 — السؤال الأصلي 32
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 32
question: يدفع رجل كتلته \\(50\\,\\mathrm{kg}\\) يقف على أرضية جليدية أفقية ولدًا ساكنًا كتلته \\(30\\,\\mathrm{kg}\\)، كم يساوي التغير في زخم الرجل والولد معًا بوحدة \\(\\mathrm{kg\\,m/s}\\)؟
- [x] option-1 | \\(0\\)
- [ ] option-2 | \\(120\\)
- [ ] option-3 | \\(100\\)
- [ ] option-4 | \\(200\\)
explanation:
نعد الرجل والولد نظامًا واحدًا، ونهمل الاحتكاك الأفقي على الجليد. محصلة الدفع الخارجي الأفقي تساوي صفرًا، فتتساوى تغيرات زخميهما مقدارًا وتتعاكس اتجاهًا.

قوة الرجل على الولد وقوة الولد على الرجل تؤثران خلال الزمن نفسه وباتجاهين متعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>=</mo><mo>−</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">y</mi></mrow></msub></mrow></math>
\`\`\`



لذلك يلغي تغيرا الزخم أحدهما الآخر في النظام كله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>P</mi><mo>⃗</mo></mover><mo>=</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi></mrow></msub><mo>+</mo><mi mathvariant="normal">Δ</mi><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">y</mi></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>P</mi><mo>⃗</mo></mover><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p007-q033
title: السؤال 033 — ص 6 — السؤال الأصلي 33
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 33
question: انفجرت قذيفة ساكنة كتلتها \\(16\\,\\mathrm{kg}\\) إلى جزأين، فإذا كانت كتلة الجزء الأول \\(12\\,\\mathrm{kg}\\) ويتحرك بسرعة \\(4\\,\\mathrm{m/s}\\)، فما مقدار طاقة حركة الجزء الثاني بوحدة (الجول)؟
- [x] option-1 | \\(288\\)
- [ ] option-2 | \\(192\\)
- [ ] option-3 | \\(144\\)
- [ ] option-4 | \\(96\\)
explanation:
الزخم هو حاصل ضرب الكتلة في السرعة. نعد جزأي القذيفة نظاماً واحداً، ونهمل الدفع الخارجي خلال الانفجار القصير. قوى الانفجار بين الجزأين داخلية، لذلك يحفظ الزخم الكلي.

لا نفترض حفظ طاقة الحركة في الانفجار؛ فقد تتحول طاقة داخلية إلى طاقة حركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



نطرح كتلة الجزء الأول من الكتلة الأصلية لإيجاد كتلة الجزء الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>16</mn><mo>−</mo><mn>12</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`



الجسم كان ساكنًا؛ يجب أن يكون زخما الجزأين متساويين مقدارًا ومتعاكسين اتجاهًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>12</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>+</mo><mn>4</mn><msub><mi>v</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>4</mn><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mn>48</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>48</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب طاقة الجزء الثاني باستخدام مربع سرعته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>12</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>144</mn><mo stretchy="false">)</mo><mo>=</mo><mn>288</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p007-q034
title: السؤال 034 — ص 6 — السؤال الأصلي 34
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 34
question: سيارة كتلتها \\(m\\) تتحرك بسرعة مقدارها \\(V\\)، فإذا فقدت \\(20\\%\\) من سرعتها أثناء تحركها بنفس الاتجاه، ما مقدار التغير في زخمها؟
- [ ] option-1 | \\(1.2mV\\)
- [ ] option-2 | \\(0.8mV\\)
- [x] option-3 | \\(0.2mV\\)
- [ ] option-4 | \\(mV\\)
explanation:
الزخم \\(p=mv\\)؛ مع ثبات الكتلة تتبع نسبة الزخم نسبة السرعة نفسها.

فقد \\(20\\%\\) من السرعة يترك \\(80\\%\\) منها في الاتجاه نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mn>0.20</mn><mo stretchy="false">)</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mn>0.8</mn><mi>V</mi></mrow></math>
\`\`\`



نطرح الزخم الابتدائي من النهائي؛ السالب يعني نقصان الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><mn>0.8</mn><mi>V</mi><mo>−</mo><mi>V</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mo>−</mo><mn>0.2</mn><mi>m</mi><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mn>0.2</mn><mi>m</mi><mi>V</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p007-q035
title: السؤال 035 — ص 6 — السؤال الأصلي 35
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 35
question: جسمان \\(a,b\\)، إذا علمت أن \\(V_a=2V_b\\) وأن \\(P_a=4P_b\\) فما مقدار \\(K_a\\)؟
- [ ] option-1 | \\(3K_b\\)
- [ ] option-2 | \\(9K_b\\)
- [x] option-3 | \\(8K_b\\)
- [ ] option-4 | \\(12K_b\\)
explanation:
الزخم \\(p=mv\\)، لذلك نستبدل أحد عاملي السرعة في \\(K=\\frac{1}{2}mv^{2}\\) بالمقدار \\(p/m\\) لنحصل على \\(K=\\frac{1}{2}pv\\).

نكتب طاقة الحركة على صورة نصف حاصل ضرب مقدار الزخم في السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>p</mi><mi>v</mi></mrow></math>
\`\`\`



نضرب نسبة الزخمين في نسبة السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>a</mi></msub><msub><mi>K</mi><mi>b</mi></msub></mfrac><mo>=</mo><mfrac><msub><mi>p</mi><mi>a</mi></msub><msub><mi>p</mi><mi>b</mi></msub></mfrac><mfrac><msub><mi>v</mi><mi>a</mi></msub><msub><mi>v</mi><mi>b</mi></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>a</mi></msub><msub><mi>K</mi><mi>b</mi></msub></mfrac><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>a</mi></msub><msub><mi>K</mi><mi>b</mi></msub></mfrac><mo>=</mo><mn>8</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p007-q036
title: السؤال 036 — ص 6 — السؤال الأصلي 36
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 6، السؤال 36
question: جسم كتلته \\(6\\,\\mathrm{kg}\\) يتحرك بسرعة مقدارها \\(V\\)، أثرت عليه قوة مقدارها \\(12\\,\\mathrm{N}\\) في نفس اتجاه حركته ولمدة \\(3\\,\\mathrm{s}\\) فأصبح مقدار سرعته \\(2V\\)، فكم يصبح مقدار زخمه بوحدة \\(\\mathrm{kg\\,m/s}\\)؟
- [ ] option-1 | \\(24\\)
- [ ] option-2 | \\(36\\)
- [ ] option-3 | \\(60\\)
- [x] option-4 | \\(72\\)
explanation:
الدفع \\(F\\Delta t\\) يساوي تغير الزخم \\(m(v_{f}-v_{i})\\)، ولذلك يمكن استخراج السرعة الابتدائية من القوة والزمن.

القوة تضاعف السرعة؛ لذا الزيادة في السرعة تساوي \\(V\\) نفسها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mn>2</mn><mi>V</mi><mo>−</mo><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>v</mi><mo>=</mo><mi>V</mi></mrow></math>
\`\`\`



نساوي الدفع بتغير الزخم لنستخرج السرعة الابتدائية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>12</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>=</mo><mn>6</mn><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>6</mn><mi>V</mi><mo>=</mo><mn>36</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



السرعة النهائية مثْلا \\(V\\)، فنحسب الزخم عندها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mn>6</mn><mo stretchy="false">(</mo><mn>2</mn><mo>⋅</mo><mn>6</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mn>72</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p008-q037
title: السؤال 037 — ص 7 — السؤال الأصلي 37
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 37
question: قذيفة كتلتها \\(5\\,\\mathrm{kg}\\)، أطلقت أفقيًا بسرعة \\(60\\,\\mathrm{m/s}\\) من زورق حربي كتلته \\(400\\,\\mathrm{kg}\\) ساكن على سطح الماء، بإهمال مقاومة الماء، ما مقدار سرعة ارتداد الزورق بعد إطلاق القذيفة مباشرة بوحدة \\(\\mathrm{m/s}\\)؟
- [ ] option-1 | \\(2\\)
- [ ] option-2 | \\(5\\)
- [ ] option-3 | \\(1.5\\)
- [x] option-4 | \\(0.75\\)
explanation:
المعطيات: كتلة القذيفة \\(5\\,\\mathrm{kg}\\) وسرعتها \\(60\\,\\mathrm{m/s}\\)، وكتلة الزورق \\(400\\,\\mathrm{kg}\\) وكان ساكناً. المطلوب مقدار سرعة ارتداد الزورق.

نعد الزورق والقذيفة نظاماً واحداً. بإهمال مقاومة الماء يحفظ الزخم الأفقي أثناء الإطلاق لأن قوى الدفع بينهما داخلية.

الزخم الخطي يساوي الكتلة مضروبة في السرعة، وحفظه يعني تساوي مجموع الزخم قبل الإطلاق وبعده. نرمز لكتلة القذيفة وسرعتها بـ \\(m\\) و\\(v\\)، ولكتلة الزورق وسرعته بـ \\(M\\) و\\(V\\).

نختار اتجاه القذيفة موجباً؛ الزخم الابتدائي للنظام صفر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mi>m</mi><mi>v</mi><mo>+</mo><mi>M</mi><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>60</mn><mo stretchy="false">)</mo><mo>+</mo><mn>400</mn><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>300</mn><mo>+</mo><mn>400</mn><mi>V</mi></mrow></math>
\`\`\`



ننقل زخم القذيفة إلى الطرف الآخر ثم نقسم على كتلة الزورق.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>400</mn><mi>V</mi><mo>=</mo><mo>−</mo><mn>300</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mo>−</mo><mn>300</mn></mrow><mn>400</mn></mfrac><mo>=</mo><mo>−</mo><mn>0.75</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: مقدار سرعة الارتداد \\(0.75\\,\\mathrm{m/s}\\)، في عكس اتجاه القذيفة، وهو الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p008-q038
title: السؤال 038 — ص 7 — السؤال الأصلي 38
kicker: صياغة تعليمية معدّلة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 38 · صياغة تعليمية معدّلة
question: نظام من كرتين، كتلة الكرة الثانية \\(m\\) وكتلة الأولى نصفها، وتتحركان بالسرعة نفسها مقداراً \\(V>0\\) في اتجاهين متعاكسين. ما مقدار الزخم الكلي للنظام؟
- [ ] option-1 | صفر
- [x] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>V</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>m</mi><mi>V</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mi>m</mi><mi>V</mi></mrow></math>\`
explanation:
المعطيات: كتلة الثانية \\(m\\)، وكتلة الأولى \\(m/2\\)، ومقدار سرعة كل منهما \\(V\\).

الزخم متجه؛ نجمعه جبرياً بعد اختيار اتجاه الكرة الثانية موجباً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>m</mi><mn>2</mn></mfrac><mo stretchy="false">(</mo><mo>−</mo><mi>V</mi><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>V</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>V</mi><mo>+</mo><mi>m</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>V</mi></mrow></math>
\`\`\`



الإجابة: مقدار الزخم\\(\\frac{1}{2}mV\\)، واتجاهه اتجاه الكرة الثانية الأثقل.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p008-q039
title: السؤال 039 — ص 7 — السؤال الأصلي 39
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 39
question: أثرت قوة في جسم ساكن بدفع مقداره \\(0.8\\,\\mathrm{kg\\,m/s}\\) فتحرك الجسم بسرعة \\(0.8\\,\\mathrm{m/s}\\)، ما كتلة الجسم بوحدة الكيلو غرام؟
- [ ] option-1 | \\(0.2\\)
- [ ] option-2 | \\(0.8\\)
- [ ] option-3 | \\(1.6\\)
- [x] option-4 | \\(1\\)
explanation:
المعطى: الجسم ساكن أولاً، والدفع \\(0.8\\,\\mathrm{kg\\,m/s}\\)، وسرعته النهائية \\(0.8\\,\\mathrm{m/s}\\). المطلوب كتلته.

الدفع يساوي تغير الزخم، والزخم يساوي الكتلة مضروبة في السرعة. نرمز للدفع بـ \\(I\\) وللكتلة بـ \\(m\\)، وللسرعتين النهائية والابتدائية بـ \\(v_{f}\\) و\\(v_{i}\\). ولثبات الكتلة نحصل على:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



لأن الجسم بدأ من السكون، تكون سرعته الابتدائية صفراً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.8</mn><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><mn>0.8</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نقسم الطرفين على \\(0.8\\) لإيجاد الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mn>0.8</mn><mn>0.8</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`



الإجابة: كتلة الجسم \\(1\\,\\mathrm{kg}\\)، وهي الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p008-q040
title: السؤال 040 — ص 7 — السؤال الأصلي 40
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 40
question: جسمان \\(m_1,m_2\\)، كتلة الجسم الأول تساوي نصف كتلة الجسم الثاني \\(m_1=\\frac12 m_2\\)، وطاقته الحركية تساوي ثمن الطاقة الحركية للجسم الثاني \\(K_1=\\frac18 K_2\\)، ما النسبة بين زخم الجسم الأول إلى زخم الجسم الثاني \\(P_1:P_2\\)؟
- [ ] option-1 | \\(1:8\\)
- [x] option-2 | \\(1:4\\)
- [ ] option-3 | \\(16:1\\)
- [ ] option-4 | \\(1:16\\)
explanation:
لأن \\(p=mv\\) و\\(K=\\frac{1}{2}mv^{2}\\)، فإن \\(K=p^{2}/(2m)\\)، ومنه مقدار الزخم \\(p=\\sqrt{2mK}\\). نستخدمها لوجود نسب للكتل وطاقتي الحركة.

نقارن الزخمين باستخدام الكتلة وطاقة الحركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mfrac><mo>=</mo><msqrt><mrow><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mfrac><msub><mi>K</mi><mn>1</mn></msub><msub><mi>K</mi><mn>2</mn></msub></mfrac></mrow></msqrt></mrow></math>
\`\`\`



نضرب النسبتين ثم نأخذ الجذر التربيعي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mfrac><mo>=</mo><msqrt><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>8</mn></mfrac></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>:</mo><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>:</mo><mn>4</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p008-q041
title: السؤال 041 — ص 7 — السؤال الأصلي 41
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 41
question: إذا علمت أن المساحة تحت المنحنى لقوة متغيرة مع الزمن كما في الشكل المجاور تساوي \\(1200\\,\\mathrm{N\\,s}\\)، فما متوسط قوة الدفع بوحدة نيوتن؟
- [ ] option-1 | \\(50\\)
- [ ] option-2 | \\(100\\)
- [x] option-3 | \\(200\\)
- [ ] option-4 | \\(150\\)
explanation:
المعطى أن المساحة تحت منحنى القوة–الزمن \\(1200\\,\\mathrm{N\\,s}\\). المطلوب متوسط القوة.

![الرسم الأصلي](assets/lessons/curriculum-evidence/0fb5bf2567348ee258ce.webp)

المساحة تحت منحنى القوة–الزمن تمثل الدفع. ومتوسط القوة يساوي الدفع مقسوماً على مدة تأثير القوة.

يبدأ التأثير عند \\(2\\,\\mathrm{s}\\) وينتهي عند \\(8\\) ثوانٍ.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mn>8</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mi>I</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>1200</mn><mn>6</mn></mfrac><mo>=</mo><mn>200</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الإجابة: متوسط القوة \\(200\\,\\mathrm{N}\\)، وهو الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![منحنى القوة F مع الزمن t، مع تدريج القوة وزمني البداية والنهاية.](assets/lessons/curriculum-evidence/0fb5bf2567348ee258ce.webp)
:::



:::mcq
id: physics-tawjihi-2025-p008-q044
title: السؤال 044 — ص 7 — السؤال الأصلي 44
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 44
question: أي الآتي يكافئ وحدة الجول "\\(J\\)" في النظام الدولي للوحدات؟
- [ ] option-1 | \\(\\mathrm{kg\\,m/s}\\)
- [x] option-2 | \\(\\mathrm{kg}\\,(\\mathrm{m/s})^2\\)
- [ ] option-3 | \\(\\mathrm{kg\\,m^2/s}\\)
- [ ] option-4 | \\(\\mathrm{kg\\,m/s^2}\\)
explanation:
الجول وحدة الشغل؛ وشغل قوة موازية للإزاحة يساوي القوة مضروبة في الإزاحة، لذلك الجول يساوي \\(\\,\\mathrm{N\\,m}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">J</mi><mo>=</mo><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></mrow></math>
\`\`\`



من قانون القوة \\(F=ma\\) تكون وحدة النيوتن \\(\\,\\mathrm{kg\\,m/s^{2}}\\). نعوّض بهذه الوحدة ثم نجمع عاملي المتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">J</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><msup><mi mathvariant="normal">s</mi><mn>2</mn></msup></mfrac><mtext> </mtext><mi mathvariant="normal">m</mi><mo>=</mo><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow><msup><mrow><mo fence="true">(</mo><mfrac><mi mathvariant="normal">m</mi><mi mathvariant="normal">s</mi></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p008-q045
title: السؤال 045 — ص 7 — السؤال الأصلي 45
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 7، السؤال 45
question: جسم كتلته \\(m\\) وسرعته \\(V\\) وطاقته الحركية \\(k\\)، إذا أصبحت طاقته الحركية مثلي ما كانت عليه، فكم تصبح سرعته؟
- [ ] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt><mi>V</mi></mrow></math>\`
- [x] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msqrt><mn>2</mn></msqrt><mi>V</mi></mrow></math>\`
- [ ] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mi>V</mi></mrow></math>\`
- [ ] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>V</mi></mrow></math>\`
explanation:
طاقة الحركة هي الطاقة الناتجة عن حركة الجسم. نرمز لها بـ \\(K\\)، ولكتلة الجسم بـ \\(m\\)، ولمقدار سرعته بـ \\(v\\)؛ وتحسب بالقانون \\(K=\\frac{1}{2}mv^{2}\\). نستخدمه لأن الكتلة ثابتة والمطلوب نسبة السرعتين، ونرمز للسرعة الجديدة بـ \\(v_{f}\\).

الكتلة ثابتة، لذلك تتناسب طاقة الحركة مع مربع السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>f</mi></msub><msub><mi>K</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><msup><mi>V</mi><mn>2</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>f</mi></msub><msub><mi>K</mi><mi>i</mi></msub></mfrac><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`



نعوض بنسبة الطاقة \\(2\\)، ثم نضرب الطرفين في \\(V^{2}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>=</mo><mfrac><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><msup><mi>V</mi><mn>2</mn></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>v</mi><mi>f</mi><mn>2</mn></msubsup><mo>=</mo><mn>2</mn><msup><mi>V</mi><mn>2</mn></msup></mrow></math>
\`\`\`



نأخذ الجذر التربيعي الموجب لأن المطلوب مقدار السرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><msqrt><mn>2</mn></msqrt><mtext> </mtext><mi>V</mi></mrow></math>
\`\`\`



الإجابة: مقدار السرعة الجديد \\(\\sqrt{2}V\\)، وهو الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::exam-question
id: physics-tawjihi-2025-p009-q046
title: السؤال 046 — ص 8 — السؤال الأصلي 1
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: النظام المغلق؟
solution:
الإجابة: النظام المغلق مجموعة أجسام تبقى كتلتها ثابتة خلال عملية تبادل القوى.

الكتاب: قانون حفظ الزخم — النظام المغلق، الصفحة المطبوعة \\(6\\)، صفحة \\(\\mathrm{PDF} 8\\).

> مجموعة الأجسام التي تبقى كتلتها ثابتة خلال أية عملية تبادل للقوى




:::

:::exam-question
id: physics-tawjihi-2025-p009-q047
title: السؤال 047 — ص 8 — السؤال الأصلي 2
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: نظرية الدفع – كمية التحرك؟
solution:
الإجابة: الدفع الناتج عن القوة المحصلة يساوي التغير في زخم الجسم خلال فترة تأثيرها.

الكتاب: نظرية الدفع–الزخم، الصفحة المطبوعة \\(5\\)، صفحة \\(\\mathrm{PDF} 7\\).

> الدفع الذي تحدثه القوة المحصلة في الجسم خلال فترة زمنية ما يساوي التغير في زخم الجسم خلال تلك الفترة.




:::

:::exam-question
id: physics-tawjihi-2025-p009-q048
title: السؤال 048 — ص 8 — السؤال الأصلي 3
question: السؤال الثاني: أ – ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بـ: متوسط قوة الدفع؟
solution:
الإجابة: القوة الثابتة التي تكسب الجسم الدفع نفسه الذي تكسبه القوة المتغيرة خلال المدة نفسها.

الكتاب: متوسط قوة الدفع، الصفحة المطبوعة \\(4\\)، صفحة \\(\\mathrm{PDF} 6\\).

> القوة الثابتة التي إذا أثرت في الجسم ... أكسبته نفس الكمية من الدفع.




:::









:::exam-question
id: physics-tawjihi-2025-p009-q053
title: السؤال 053 — ص 8 — السؤال الأصلي 3
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: صعوبة إيقاف عربة نقل محملة بالبضاعة عن إيقافها وهي فارغة إذا كانت السرعة نفسها بالحالتين وخلال نفس الزمن.
solution:
الزخم هو حاصل ضرب الكتلة في السرعة المتجهة؛ لذلك يكون صفرًا عند السكون. الشاحنة المحملة كتلتها أكبر، بينما سرعة البداية وزمن التوقف متماثلان. الدفع يساوي تغير الزخم، أي إن متوسط القوة مضروبًا في زمن تأثيرها يساوي هذا التغير. نستخدم ذلك لمقارنة القوة اللازمة للتوقف.

السرعة متساوية في الحالتين، فتجعل الكتلة الأكبر الزخم أكبر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mo>&gt;</mo><msub><mi>p</mi><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">y</mi></mrow></msub></mrow></math>
\`\`\`



للتوقف نزيل الزخم كله خلال الزمن نفسه، فتزداد القوة المطلوبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>v</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">l</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">d</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>&gt;</mo><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">y</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p009-q054
title: السؤال 054 — ص 8 — السؤال الأصلي 4
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: تزود المركبات الحديثة بوسادات هوائية بحيث تندفع لحماية الركاب في حالة وقوع حالة التصادم.
solution:
الزخم هو حاصل ضرب الكتلة في السرعة المتجهة؛ لذلك يكون صفرًا عند السكون. الوسادة الهوائية تزيد زمن توقف الراكب. نستخدم نظرية الدفع والزخم التي تجعل متوسط القوة مساوياً لتغير الزخم مقسوماً على زمن التوقف.

يحتاج الراكب إلى فقدان زخمه عند التوقف، سواء أوقفته الوسادة أو سطح صلب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



تطول مدة التوقف عند انضغاط الوسادة، فتقل القوة التي تحقق تغير الزخم نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>↓</mo></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p009-q055
title: السؤال 055 — ص 8 — السؤال الأصلي 5
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: القفز من منطقة عالية على أرض رملية أكثر أمنًا من السقوط على أرض صلبة.
solution:
الزخم هو حاصل ضرب الكتلة في السرعة المتجهة؛ لذلك يكون صفرًا عند السكون. نقارن السقوط من الارتفاع نفسه، مع إهمال مقاومة الهواء. عندئذ يصل الشخص بالسرعة نفسها تقريباً إلى الرمل أو الأرض الصلبة، ثم يتوقف.

تغير الزخم يساوي الزخم النهائي ناقص الابتدائي؛ ولأن السرعة النهائية صفر، يكون مقدار تغير الزخم نفسه في الحالتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><mn>0</mn><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



نظرية الدفع والزخم تجعل متوسط القوة المحصلة مساوياً لتغير الزخم مقسوماً على زمن التوقف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



الرمل يسمح بالتوقف خلال مدة أطول. ومع ثبات تغير الزخم، زيادة الزمن تقلل متوسط القوة، فيقل احتمال الإصابة مقارنة بالأرض الصلبة.
:::

:::exam-question
id: physics-tawjihi-2025-p009-q056
title: السؤال 056 — ص 8 — السؤال الأصلي 6
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 6 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: إذا أحدثت ضربتان التغير نفسه في زخم الخصم، فإن الضربة ذات زمن التلامس الأقصر تؤثر فيه بمتوسط قوة أكبر.
solution:
نظرية الدفع والزخم تربط تغير الزخم بمتوسط القوة وزمن تأثيرها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mtext> </mtext><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`



نقسم على زمن التلامس الموجب، ونقارن المقادير.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`



لأن مقدار تغير الزخم ثابت في الضربتين، فإن تقليل المقام يزيد متوسط القوة. لذلك تكون القوة المتوسطة أكبر في الضربة الأقصر زمناً.
:::



:::exam-question
id: physics-tawjihi-2025-p009-q059
title: السؤال 059 — ص 8 — السؤال الأصلي 9
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 9
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: يصنع المدفع بحيث تكون كتلته كبيرة جدًا نسبة إلى كتلة قذيفته.
solution:
حفظ الزخم يعني أن مجموع زخم الأجسام قبل العملية يساوي مجموع زخمها بعدها. نستخدمه لأن قوى التفاعل بين الأجسام داخلية، ونهمل الدفع الخارجي في الاتجاه المدروس خلال التصادم أو الإطلاق. نجمع الزخم مع إشارات السرعات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



نرمز لكتلة المدفع وسرعته بالرمزين \\(M\\) و\\(V\\)، ولكتلة القذيفة وسرعتها بالرمزين \\(m\\) و\\(v\\).

زخم النظام قبل الإطلاق صفر، لذلك يكون زخما المدفع والقذيفة متعاكسين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>M</mi><mover accent="true"><mi>V</mi><mo>⃗</mo></mover><mo>+</mo><mi>m</mi><mover accent="true"><mi>v</mi><mo>⃗</mo></mover><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



لأن الزخمين متعاكسان ومتساويان مقدارًا، نساوي مقداريهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>M</mi><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><mi>v</mi><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



نقسم على \\(M\\) ثم على مقدار سرعة القذيفة، لنقارن مقداري السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><mi>V</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><mi>v</mi><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mo>≪</mo><mn>1</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p009-q061
title: السؤال 061 — ص 8 — السؤال الأصلي 11
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 8، السؤال 11
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: عندما يقفز شخص من مكان عالٍ إلى الأرض فإنه يثني قدميه.
solution:
الزخم هو حاصل ضرب الكتلة في السرعة المتجهة؛ لذلك يكون صفرًا عند السكون. ثني الركبتين يزيد زمن التوقف عند الهبوط. بحسب نظرية الدفع والزخم، متوسط القوة المحصلة يساوي تغير الزخم مقسوماً على الزمن.

يلزم إزالة الزخم نفسه للوصول إلى السكون بعد القفزة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi><mo>=</mo><mi>m</mi><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow></math>
\`\`\`



ثني الركبتين يجعل التوقف تدريجيًا خلال زمن أطول، فيقل متوسط القوة المحصلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">Δ</mi><mi>p</mi><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mi mathvariant="normal">∣</mi><mo>↓</mo></mrow></math>
\`\`\`


:::



:::exam-question
id: physics-tawjihi-2025-p010-q063
title: السؤال 063 — ص 9 — السؤال الأصلي 13
question: السؤال الثاني: ب – علل لما يلي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 9، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: كمية الزخم الخطي محفوظة في جميع الأنظمة المغلقة والمعزولة؟
solution:
العزل يعني أن محصلة القوى الخارجية على النظام صفر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



لذلك لا تعطي القوى الخارجية دفعًا يغيّر الزخم الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>P</mi><mo>⃗</mo></mover><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>F</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi><mi mathvariant="normal">t</mi></mrow></msub><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



انعدام التغير يجعل مجموع الزخم قبل العملية مساويًا لمجموعه بعدها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub></mrow></math>
\`\`\`



شرط الحفظ هو العزل: ثبات الكتلة في نظام مغلق وحده لا يكفي إذا أثرت محصلة قوة خارجية غير صفرية.
:::

:::exam-question
id: physics-tawjihi-2025-p010-q064
title: السؤال 064 — ص 9 — السؤال الأصلي 1
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 9، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسمان، الأول كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>m</mi></mrow></math>\` والثاني كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mi>m</mi></mrow></math>\`، إذا كان الزخم الخطي للجسم الأول يساوي ثلثي الزخم الخطي للجسم الثاني، ومجموع طاقتيهما الحركية \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>68</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>\`، ما مقدار الطاقة الحركية للجسم الثاني؟
solution:
طاقة الحركة هي طاقة الجسم بسبب حركته، وتساوي نصف كتلته في مربع سرعته. والزخم يساوي الكتلة مضروبة في السرعة؛ بالتعويض عن السرعة بالزخم مقسومًا على الكتلة نحصل على:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`



نقسم طاقة الأول على طاقة الثاني. عند قسمة كسرين نضرب الأول في مقلوب الثاني، لذلك تظهر نسبة الكتلتين معكوسة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mn>1</mn></msub><msub><mi>K</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msubsup><mi>p</mi><mn>1</mn><mn>2</mn></msubsup><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub><mo stretchy="false">)</mo></mrow><mrow><msubsup><mi>p</mi><mn>2</mn><mn>2</mn></msubsup><mi mathvariant="normal">/</mi><mo stretchy="false">(</mo><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><msub><mi>p</mi><mn>1</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></mrow></math>
\`\`\`



نعوّض بنسبة الزخمين والكتلتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mn>1</mn></msub><msub><mi>K</mi><mn>2</mn></msub></mfrac><mo>=</mo><msup><mrow><mo fence="true">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo fence="true">)</mo></mrow><mn>2</mn></msup><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>8</mn><mn>9</mn></mfrac></mrow></math>
\`\`\`



إذن طاقة الأول تساوي ثمانية أتساع طاقة الثاني. نعوّض في مجموعهما \\(68\\) جولًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>8</mn><mn>9</mn></mfrac><msub><mi>K</mi><mn>2</mn></msub><mo>+</mo><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mn>68</mn></mrow></math>
\`\`\`



نكتب معامل الحد الثاني \\(1=9/9\\) لنجمع الكسرين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>17</mn><mn>9</mn></mfrac><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mn>68</mn></mrow></math>
\`\`\`



نضرب في مقلوب معامل الطاقة الثانية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mn>68</mn><mo>×</mo><mfrac><mn>9</mn><mn>17</mn></mfrac><mo>=</mo><mn>36</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`



وللتحقق، طاقة الأول \\(32\\) جولًا، ومجموع الطاقتين \\(68\\) جولًا.
:::

:::exam-question
id: physics-tawjihi-2025-p010-q065
title: السؤال 065 — ص 9 — السؤال الأصلي 2
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 9، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كرة تتحرك بزخم خطي مقداره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>P</mi></mrow></math>\`، اصطدمت عموديًا بحائط رأسي وارتدت عنه بطاقة حركية تساوي ربع طاقتها الحركية الابتدائية قبل اصطدامها بالحائط. أثبت أن مقدار الدفع الذي يؤثر به الجدار على الكرة يعطى بالعلاقة:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>P</mi><mi mathvariant="normal">.</mi></mrow></math>
\`\`\`

solution:
التصادم عمودي على الحائط بحسب المعطيات؛ لذلك تقع السرعتان على خط واحد، وتنعكس جهة الزخم بعد الارتداد.

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



الدفع يساوي تغير الزخم، لذلك سنطرح الزخم الابتدائي من النهائي بعد تحديد اتجاهيهما.

ربع طاقة الحركة يعني نصف مقدار الزخم، لأن الكتلة ثابتة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>f</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><msqrt><mfrac><msub><mi>K</mi><mi>f</mi></msub><msub><mi>K</mi><mi>i</mi></msub></mfrac></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>f</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>p</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`



نختار اتجاه الارتداد موجبًا؛ إذن الزخم الابتدائي سالب والنهائي موجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>=</mo><mo>−</mo><mi>P</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>P</mi></mrow></math>
\`\`\`



نطرح الزخمين لنجد دفع الحائط على الكرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><msub><mi>p</mi><mi>f</mi></msub><mo>−</mo><msub><mi>p</mi><mi>i</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>P</mi><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mi>P</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>P</mi></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p010-q066
title: السؤال 066 — ص 9 — السؤال الأصلي 3
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 9، السؤال 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` على سطح أفقي أملس تحت تأثير قوة متغيرة مع الزمن كما في الشكل المجاور، احسب:

1. دفع القوة خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
2. متوسط القوة المؤثرة خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
3. أكبر سرعة يمكن أن يمتلكها الجسم في نفس اتجاه حركته.

![منحنى قوة متقطعة F بدلالة الزمن t مع المستويات الموجبة والسالبة.](assets/lessons/curriculum-evidence/4fa6dd31855f257897fd.webp)
solution:
نظرية الدفع والزخم تقول إن دفع القوة المحصلة يساوي تغير الزخم. نستخدمها هنا لربط القوة أو زمن تأثيرها بتغير سرعة الجسم، مع ثبات كتلته.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/4fa6dd31855f257897fd.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة منحنى القوة–الزمن هي الدفع. نحسب مساحة المستطيل بالطول×العرض، والمثلث بنصف القاعدة×الارتفاع؛ وتكون المساحة تحت محور الزمن سالبة.

نجمع مساحات الرسم مع إشاراتها؛ المنطقة تحت محور الزمن تعطي دفعًا سالبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>−</mo><mn>10</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>40</mn><mo>−</mo><mn>20</mn><mo>−</mo><mn>10</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نقسم الدفع الكلي على الثماني ثواني لإيجاد متوسط القوة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mi>I</mi><mn>8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>10</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mn>1.25</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



تزداد السرعة حتى نهاية الجزء الموجب عند الثانية \\(4\\)، ثم تبدأ القوة السالبة بخفضها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mo>=</mo><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نضيف أكبر دفع متراكم إلى الزخم الابتدائي لنجد أكبر سرعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mtext>max</mtext></msub><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub><mo>+</mo><mfrac><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mtext>max</mtext></msub><mo>=</mo><mn>4</mn><mo>+</mo><mfrac><mn>40</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mtext>max</mtext></msub><mo>=</mo><mn>14</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p010-q067
title: السؤال 067 — ص 9 — السؤال الأصلي 4
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 9، السؤال 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ضرب لاعب كرة ساكنة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` فانطلقت بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، إذا علمت أن زمن التصادم بين قدم اللاعب والكرة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.02</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`. احسب:

1. مقدار الدفع الذي أثر به اللاعب على الكرة.
2. متوسط مقدار القوة التي أثر بها اللاعب على الكرة.
solution:
الزخم هو حاصل ضرب الكتلة في السرعة المتجهة؛ لذلك يكون صفرًا عند السكون. المعطيات: الكتلة \\(0.5\\,\\mathrm{kg}\\)، والسرعة الابتدائية صفر، والنهائية \\(20\\,\\mathrm{m/s}\\)، وزمن التلامس \\(0.02\\,\\mathrm{s}\\).

الدفع يساوي تغير الزخم، ومتوسط القوة يساوي الدفع مقسوماً على زمن التلامس.

الكرة كانت ساكنة، لذا يساوي الدفع زخمها النهائي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>20</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.5</mn><mo stretchy="false">(</mo><mn>20</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نقسم الدفع على زمن التلامس لإيجاد متوسط القوة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>10</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mn>500</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p010-q068
title: السؤال 068 — ص 9 — السؤال الأصلي 5
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 9، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور العلاقة بين السرعة والزمن لجسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\`، احسب:

1. مقدار الدفع المؤثر على الجسم خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\` من لحظة بدء حركته.
2. مقدار متوسط قوة الدفع خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\` من لحظة بدء حركته.
3. مقدار متوسط قوة الدفع خلال الفترة ما بين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\` و\`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.

![منحنى السرعة v مع الزمن t لجسم كتلته 2 kg.](assets/lessons/curriculum-evidence/9f54baf7f5c0fd0a5c02.webp)
solution:
نظرية الدفع والزخم تقول إن دفع القوة المحصلة يساوي تغير الزخم. نستخدمها هنا لربط القوة أو زمن تأثيرها بتغير سرعة الجسم، مع ثبات كتلته.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/9f54baf7f5c0fd0a5c02.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نقرأ من منحنى السرعة القيم عند الأزمنة المطلوبة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo><mo>=</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الدفع خلال أول ثلاث ثوانٍ يعتمد على فرق السرعتين عند طرفي الفترة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>3</mn></mrow></msub><mo>=</mo><mi>m</mi><mo stretchy="false">[</mo><mi>v</mi><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo>−</mo><mi>v</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>8</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>8</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>16</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



خلال أربع ثوانٍ تعود السرعة إلى قيمتها الأولى، فيكون متوسط القوة صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo></mrow><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mo>=</mo><mfrac><mn>0</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mo>=</mo><mn>0</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



بين الثانية \\(1\\) والثانية \\(3\\) نقسم تغير الزخم على مدة مقدارها ثانيتان.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mn>1</mn><mo>→</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>8</mn><mo>−</mo><mn>4</mn><mo stretchy="false">)</mo></mrow><mrow><mn>3</mn><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mn>1</mn><mo>→</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mn>8</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mn>1</mn><mo>→</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>4</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p011-q069
title: السؤال 069 — ص 10 — السؤال الأصلي 6
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 10، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كرة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>50</mn><mtext> </mtext><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` تسير نحو الغرب بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` اصطدمت بجدار رأسي وارتدت عنه بطاقة حركية تعادل \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>64</mn><mi mathvariant="normal">%</mi></mrow></math>\` من طاقتها الحركية الابتدائية وعلى الخط نفسه. أجب عما يلي:

1. ما الدفع المؤثر على الكرة؟
2. ما متوسط قوة دفع الجدار على الكرة إذا كان زمن التصادم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.03</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`؟
3. ما نوع التصادم؟
solution:
المعطيات: كتلة الكرة \\(50\\) غراماً، وسرعة الاقتراب \\(10\\,\\mathrm{m/s}\\) غرباً، وطاقة الارتداد \\(64\\%\\) من الطاقة الابتدائية. المطلوب الدفع ومتوسط قوة الجدار ونوع التصادم.

نحوّل الغرام إلى الكيلوغرام بقسمته على \\(1000\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mo>=</mo><mfrac><mn>50</mn><mn>1000</mn></mfrac><mo>=</mo><mn>0.05</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>
\`\`\`



طاقة الحركة تساوي نصف الكتلة في مربع السرعة. ولأن الكتلة ثابتة، تساوي نسبة الطاقتين نسبة مربعي مقداري السرعتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>K</mi><mi>f</mi></msub><msub><mi>K</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>f</mi></msub><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>i</mi></msub><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0.64</mn></mrow></math>
\`\`\`



نأخذ الجذر الموجب لإيجاد مقدار سرعة الارتداد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">∣</mi><msub><mi>v</mi><mi>f</mi></msub><mi mathvariant="normal">∣</mi><mo>=</mo><mn>10</mn><msqrt><mn>0.64</mn></msqrt><mo>=</mo><mn>10</mn><mo stretchy="false">(</mo><mn>0.8</mn><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نختار الشرق موجباً. السرعة الابتدائية غرباً سالبة، والارتداد شرقاً موجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mo>+</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الدفع يساوي تغير الزخم، أي الزخم النهائي ناقص الابتدائي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>0.05</mn><mo stretchy="false">[</mo><mn>8</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>10</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo><mo>=</mo><mn>0.05</mn><mo stretchy="false">(</mo><mn>18</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.9</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



متوسط القوة هو الدفع مقسوماً على زمن التلامس.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mi>I</mi><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>0.9</mn><mn>0.03</mn></mfrac><mo>=</mo><mn>30</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



الدفع \\(0.9\\,\\mathrm{N\\,s}\\) ومتوسط القوة \\(30\\,\\mathrm{N}\\)، وكلاهما نحو الشرق. التصادم غير مرن لأن طاقة الحركة بعده \\(64\\%\\) من طاقتها قبله، فلم تحفظ.
:::

:::exam-question
id: physics-tawjihi-2025-p011-q070
title: السؤال 070 — ص 10 — السؤال الأصلي 7
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 10، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
انفجر جسم ساكن إلى جسمين كتلة كل منهما \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo separator="true">,</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>\`، فكانت الطاقة الناتجة عن الانفجار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>K</mi></mrow></math>\`. أثبت أن الطاقة الحركية التي يكتسبها الجسم الثاني \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>K</mi><mn>2</mn></msub></mrow></math>\` تعطى بالعلاقة:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>K</mi><mi mathvariant="normal">.</mi></mrow></math>
\`\`\`


solution:
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



نعد الجزأين نظاماً واحداً ونهمل الدفع الخارجي خلال الانفجار القصير. قوى الانفجار داخلية، فيبقى الزخم الكلي محفوظاً. الطاقة \\(K\\) هنا هي الطاقة الحركية الكلية الناتجة بعد الانفجار، وليست طاقة حركة محفوظة من جسم كان ساكناً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>i</mi></msub><mo>=</mo><mo>∑</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mi>f</mi></msub></mrow></math>
\`\`\`



كان الجسم ساكنًا؛ لذلك يصبح زخما الجزأين متساويين مقدارًا ومتعاكسين اتجاهًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover accent="true"><mi>p</mi><mo>⃗</mo></mover><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>p</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>p</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math>
\`\`\`



نستبدل مربع الزخم بضعفي حاصل ضرب الكتلة في الطاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>p</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>m</mi><mi>K</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>K</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>K</mi><mn>2</mn></msub></mrow></math>
\`\`\`



الطاقة الحركية الكلية الناتجة هي مجموع طاقتي الجزأين، فنكتب طاقة الأول بدلالة طاقة الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mn>1</mn></msub><mo>+</mo><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mi>K</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>K</mi><mo>−</mo><msub><mi>K</mi><mn>2</mn></msub><mo stretchy="false">)</mo><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>K</mi><mn>2</mn></msub></mrow></math>
\`\`\`



نجمع الحدين اللذين يحتويان طاقة الجزء الثاني ثم نقسم على مجموع الكتلتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>K</mi><mo>=</mo><mo stretchy="false">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy="false">)</mo><msub><mi>K</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>K</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p011-q072
title: السؤال 072 — ص 10 — السؤال الأصلي 9
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 10، السؤال 9
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يستقر على سطح أفقي أملس، أثرت عليه قوة متغيرة مثلت بيانيًا مع الزمن كما في الشكل المجاور. اعتمادًا على البيانات المثبتة عليه، احسب:

1. دفع القوة خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>30</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
2. سرعة الجسم عند الزمن \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\` من بدء الحركة.

![منحنى القوة مع الزمن من 0 إلى 30 s، مع قيم 4 و8 و12 N.](assets/lessons/curriculum-evidence/8eca29486ef8e059c15d.webp)
solution:
المعطيات: كتلة الجسم \\(4\\,\\mathrm{kg}\\)، وكان ساكناً على سطح أفقي أملس. المطلوب دفع أول \\(30\\,\\mathrm{s}\\)، والسرعة عند \\(10\\) ثوانٍ.

![الرسم الأصلي](assets/lessons/curriculum-evidence/8eca29486ef8e059c15d.webp)

الدفع يساوي المساحة تحت منحنى القوة–الزمن. نقسم الرسم إلى ثلاثة أجزاء؛ جميعها فوق المحور فتكون مساحاتها موجبة.

من \\(0\\) إلى \\(10\\) ثوانٍ يتشكل شبه منحرف. مساحته تساوي متوسط القوتين عند طرفيه مضروباً في المدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>10</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>+</mo><mn>12</mn></mrow><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>80</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



من \\(10\\) إلى \\(20\\,\\mathrm{s}\\) يتشكل مستطيل، ومساحته القوة مضروبة في المدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>10</mn><mo>→</mo><mn>20</mn></mrow></msub><mo>=</mo><mn>12</mn><mo stretchy="false">(</mo><mn>20</mn><mo>−</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>120</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



من \\(20\\) إلى \\(30\\,\\mathrm{s}\\) يتشكل مثلث، ومساحته نصف القاعدة في الارتفاع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>20</mn><mo>→</mo><mn>30</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>30</mn><mo>−</mo><mn>20</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>12</mn><mo stretchy="false">)</mo><mo>=</mo><mn>60</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نجمع المساحات لإيجاد الدفع الكلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>30</mn></mrow></msub><mo>=</mo><mn>80</mn><mo>+</mo><mn>120</mn><mo>+</mo><mn>60</mn><mo>=</mo><mn>260</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



لإيجاد السرعة عند \\(10\\) ثوانٍ نستعمل دفع أول عشر ثوانٍ فقط. نظرية الدفع والزخم تقول إن الدفع يساوي تغير الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>10</mn></mrow></msub><mo>=</mo><mi>m</mi><mo stretchy="false">[</mo><mi>v</mi><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>−</mo><mi>v</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo stretchy="false">]</mo></mrow></math>
\`\`\`



الجسم ساكن أولاً؛ نعوّض بالكتلة ثم نقسم على \\(4\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>80</mn><mo>=</mo><mn>4</mn><mo stretchy="false">[</mo><mi>v</mi><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>−</mo><mn>0</mn><mo stretchy="false">]</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>v</mi><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>80</mn><mn>4</mn></mfrac><mo>=</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



الإجابة: الدفع الكلي \\(260\\,\\mathrm{N\\,s}\\)، والسرعة عند \\(10\\) ثوانٍ \\(20\\,\\mathrm{m/s}\\) باتجاه القوة.
:::

:::exam-question
id: physics-tawjihi-2025-p011-q073
title: السؤال 073 — ص 10 — السؤال الأصلي 10
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 10، السؤال 10
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ضرب لاعب كرة ساكنة كتلتها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>1</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` فانطلقت بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، احسب:

1. التغير في زخم الكرة.
2. متوسط القوة التي أثر بها اللاعب على الكرة إذا استمر زمن التلامس \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
solution:
الزخم هو الكتلة مضروبة في السرعة المتجهة. والدفع يساوي تغير الزخم، لذلك نحسب التغير أولاً، ثم نقسمه على زمن التلامس لإيجاد متوسط القوة. نأخذ اتجاه انطلاق الكرة موجباً.

نطرح الزخم الصفري قبل الضربة من الزخم بعدها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>10</mn><mo>−</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>1</mn><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نقسم تغير الزخم على نصف ثانية لإيجاد متوسط القوة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mfrac><mn>10</mn><mn>0.5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`


:::



:::exam-question
id: physics-tawjihi-2025-p012-q075
title: السؤال 075 — ص 11 — السؤال الأصلي 12
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 11، السؤال 12
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتحرك بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` على سطح أفقي أملس، أثرت عليه قوة متغيرة مثلت بيانيًا كما في الشكل المجاور، احسب:

1. أقصى سرعة يمكن أن يصل إليها الجسم في نفس اتجاه حركته.
2. متوسط القوة المؤثرة خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`.
3. زمن توقف الجسم.

![منحنى القوة مع الزمن، بمنطقة مثلثية موجبة ثم قوة ثابتة سالبة.](assets/lessons/curriculum-evidence/4f17bfc6e9cbab88b71d.webp)
solution:
المعطيات: كتلة الجسم \\(2\\,\\mathrm{kg}\\)، وسرعته الابتدائية \\(2\\,\\mathrm{m/s}\\)، والقوة تتغير كما في الرسم. نأخذ اتجاه الحركة الابتدائية موجباً.

![الرسم الأصلي](assets/lessons/curriculum-evidence/4f17bfc6e9cbab88b71d.webp)

الدفع هو المساحة الجبرية تحت منحنى القوة–الزمن، ويساوي تغير الزخم. تزيد القوة الموجبة الزخم حتى الثانية \\(4\\)، ثم تبدأ القوة السالبة بإنقاصه؛ لذلك تكون السرعة الموجبة القصوى عند الثانية \\(4\\).

الجزء الموجب مثلث؛ مساحته نصف القاعدة في الارتفاع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>13</mn><mo stretchy="false">)</mo><mo>=</mo><mn>26</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نكتب الدفع بدلالة تغير الزخم ثم نقسم على الكتلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mtext>max</mtext></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mtext>max</mtext></msub><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub><mo>+</mo><mfrac><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>4</mn></mrow></msub><mi>m</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>v</mi><mtext>max</mtext></msub><mo>=</mo><mn>2</mn><mo>+</mo><mfrac><mn>26</mn><mn>2</mn></mfrac><mo>=</mo><mn>15</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



لحساب متوسط القوة خلال \\(6\\) ثوانٍ، نضيف مساحة المستطيل السالب من الثانية \\(4\\) إلى الثانية \\(6\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>4</mn><mo>→</mo><mn>6</mn></mrow></msub><mo>=</mo><mo>−</mo><mn>10</mn><mo stretchy="false">(</mo><mn>6</mn><mo>−</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mo>−</mo><mn>20</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>6</mn></mrow></msub><mo>=</mo><mn>26</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



متوسط القوة يساوي الدفع الكلي مقسوماً على المدة الكلية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mn>0</mn><mo>→</mo><mn>6</mn></mrow></msub><mo>=</mo><mfrac><mn>6</mn><mn>6</mn></mfrac><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



عند الثانية \\(4\\) يكون زخم الجسم حاصل ضرب كتلته في سرعته القصوى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo stretchy="false">(</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>15</mn><mo stretchy="false">)</mo><mo>=</mo><mn>30</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



بعدها تنقصه القوة \\(-10\\,\\mathrm{N}\\). نرمز بزمن التوقف \\(t\\) إلى الزمن المقاس من بداية الحركة، فتكون مدة تأثير القوة السالبة \\(t-4\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>30</mn><mo>−</mo><mn>10</mn><mo stretchy="false">(</mo><mi>t</mi><mo>−</mo><mn>4</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



ننقل حد القوة ثم نقسم على \\(10\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>10</mn><mo stretchy="false">(</mo><mi>t</mi><mo>−</mo><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>30</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mo>−</mo><mn>4</mn><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mo>=</mo><mn>7</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`



الإجابة: السرعة القصوى \\(15\\,\\mathrm{m/s}\\)، ومتوسط القوة خلال أول \\(6\\) ثوانٍ \\(1\\,\\mathrm{N}\\)، وزمن التوقف \\(7\\) ثوانٍ من بداية الحركة.

:::

:::exam-question
id: physics-tawjihi-2025-p012-q076
title: السؤال 076 — ص 11 — السؤال الأصلي 13
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 11، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يتغير زخمه الخطي كما في الشكل المجاور. إذا علمت أن الطاقة الحركية الضائعة خلال أول ثانيتين \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>500</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>\`، جد:

1. متوسط القوة المؤثرة عليه من بدء الحركة وحتى سكونه.
2. زمن توقف الجسم \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>t</mi></mrow></math>\`.

![منحنى الزخم P مع الزمن t، مع القيمة الابتدائية 60 وقيمتين مجهولتين.](assets/lessons/curriculum-evidence/f3547865c50d781d8377.webp)
solution:
المعطى: الكتلة \\(2\\,\\mathrm{kg}\\)، والزخم الابتدائي \\(60\\,\\mathrm{kg\\,m/s}\\)، والطاقة المفقودة خلال أول ثانيتين \\(500\\,\\mathrm{J}\\). المطلوب القوة وزمن التوقف.

![الرسم الأصلي](assets/lessons/curriculum-evidence/f3547865c50d781d8377.webp)

نستخدم \\(K=p^{2}/(2m)\\) لأن الرسم يعطي الزخم؛ هذه العلاقة تأتي من تعويض \\(v=p/m\\) في \\(K=\\frac{1}{2}mv^{2}\\). نرمز الزخم عند الثانية \\(2\\) بالرمز \\(p_{2}\\)، ولا نضرب \\(p\\) في \\(2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>−</mo><msub><mi>K</mi><mn>2</mn></msub><mo>=</mo><mn>500</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msup><mn>60</mn><mn>2</mn></msup><mo>−</mo><msubsup><mi>p</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>500</mn></mrow></math>
\`\`\`



نضرب الطرفين في \\(4\\) ثم نعزل مربع الزخم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3600</mn><mo>−</mo><msubsup><mi>p</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>2000</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>p</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>1600</mn></mrow></math>
\`\`\`



الرسم ما زال فوق محور الزمن عند الثانية \\(2\\)؛ إذن الزخم موجب، فنأخذ الجذر الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo>+</mo><mn>40</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



ميل منحنى الزخم مقابل الزمن يساوي القوة المحصلة؛ والخط مستقيم، فالقوة ثابتة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mn>40</mn><mo>−</mo><mn>60</mn></mrow><mrow><mn>2</mn><mo>−</mo><mn>0</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mo>−</mo><mn>20</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mo>−</mo><mn>10</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



ينقص الزخم \\(10\\,\\mathrm{kg\\,m/s}\\) كل ثانية. عند التوقف يكون الزخم صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>p</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>60</mn><mo>−</mo><mn>10</mn><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0</mn><mo>=</mo><mn>60</mn><mo>−</mo><mn>10</mn><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>10</mn><mi>t</mi><mo>=</mo><mn>60</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mo>=</mo><mn>6</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>
\`\`\`



الإجابة: القوة\\(-10\\,\\mathrm{N}\\) في عكس الحركة، وزمن التوقف \\(6\\) ثوانٍ.
:::

:::exam-question
id: physics-tawjihi-2025-p012-q077
title: السؤال 077 — ص 11 — السؤال الأصلي 14
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 11، السؤال 14
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سائق سيارة كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>m</mi><mo>=</mo><mn>60</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يقود سيارة بسرعة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>25</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\`، شاهد حيوانًا على الطريق، فضغط على الكوابح ليتفادى الاصطدام بالحيوان، فاندفع إلى الأمام إلا أن حزام الأمان أوقفه عن الحركة خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`. أجب عما يأتي:

1. ما متوسط القوة التي أثر بها حزام الأمان في السائق؟
2. ما متوسط القوة التي سيؤثر بها المقود في السائق عند ارتطامه به خلال \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>0.001</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\` في حال عدم وضع حزام الأمان؟
3. ماذا تستنتج من خلال إجابتك عن الفرعين السابقين؟
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



نختار اتجاه حركة السائق موجبًا؛ إيقافه يجعل تغير الزخم سالبًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>60</mn><mo stretchy="false">(</mo><mn>0</mn><mo>−</mo><mn>25</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mn>60</mn><mo stretchy="false">(</mo><mo>−</mo><mn>25</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>p</mi><mo>=</mo><mo>−</mo><mn>1500</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نقسم على زمن توقف السائق بالحزام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo>−</mo><mn>1500</mn></mrow><mn>0.5</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>3000</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



المقود يوقفه خلال مدة أقصر كثيرًا، فنقسم تغير الزخم نفسه على هذه المدة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo>−</mo><mn>1500</mn></mrow><mn>0.001</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mo>=</mo><mo>−</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



يطيل الحزام زمن التوقف \\(500\\) مرة، فيقل مقدار القوة بالمقدار نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">t</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mfrac><mn>0.5</mn><mn>0.001</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">w</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow><mrow><mi mathvariant="normal">∣</mi><msub><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">t</mi></mrow></msub><mi mathvariant="normal">∣</mi></mrow></mfrac><mo>=</mo><mn>500</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p012-q078
title: السؤال 078 — ص 11 — السؤال الأصلي 15
question: السؤال الثالث: المسائل الحسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 11، السؤال 15
answer-label: الإجابة والشرح من المجموعة المصححة
body:
جسم كتلته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi></mrow></mrow></math>\` يستقر على سطح أفقي أملس، أثرت عليه قوة متغيرة بيانيًا مع الزمن كما في الشكل المجاور. إذا علمت أن سرعة الجسم أصبحت \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>27</mn><mtext> </mtext><mrow><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>\` عند \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>15</mn><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></math>\`، بالاعتماد على البيانات المثبتة في الشكل، جد:

1. مقدار \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>F</mi></mrow></math>\`.
2. أكبر طاقة حركية يكتسبها الجسم.

![منحنى القوة مع الزمن بقيمة F مجهولة، ومعالم عند 3 و6 و12 و15 s.](assets/lessons/curriculum-evidence/0de7cc380ef21822d99e.webp)
solution:
نظرية الدفع والزخم تقول إن دفع القوة المحصلة يساوي تغير الزخم. نستخدمها هنا لربط القوة أو زمن تأثيرها بتغير سرعة الجسم، مع ثبات كتلته.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/0de7cc380ef21822d99e.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mover accent="true"><mi>F</mi><mo>ˉ</mo></mover><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi mathvariant="normal">Δ</mi><mi>p</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><mo stretchy="false">(</mo><msub><mi>v</mi><mi>f</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مساحة منحنى القوة–الزمن هي الدفع. نحسب مساحة المستطيل بالطول×العرض، والمثلث بنصف القاعدة×الارتفاع؛ وتكون المساحة تحت محور الزمن سالبة.

الجسم ساكن أولًا، لذا يساوي دفع الخمس عشرة ثانية زخمه عند نهايتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>15</mn></mrow></msub><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>15</mn></mrow></msub><mo>=</mo><mn>5</mn><mo stretchy="false">(</mo><mn>27</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>15</mn></mrow></msub><mo>=</mo><mn>135</mn><mtext> </mtext><mrow><mi mathvariant="normal">N</mi><mtext> </mtext><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نجمع المساحات الثلاث الموجبة ونطرح المثلث السالب في الرسم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>135</mn><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mi>F</mi><mo>+</mo><mn>3</mn><mi>F</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>6</mn><mo stretchy="false">)</mo><mi>F</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نجمع معاملات \\(F\\) في المساحات الموجبة: \\(1.5+3+3=7.5\\). ومساحة المثلث السالب تساوي \\(-15\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>135</mn><mo>=</mo><mn>7.5</mn><mi>F</mi><mo>−</mo><mn>15</mn></mrow></math>
\`\`\`



ننقل الحد السالب ثم نقسم على معامل القوة المجهولة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>7.5</mn><mi>F</mi><mo>=</mo><mn>150</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>F</mi><mo>=</mo><mn>20</mn><mtext> </mtext><mi mathvariant="normal">N</mi></mrow></math>
\`\`\`



خلال الفترة الممثلة من \\(0\\) إلى \\(15\\,\\mathrm{s}\\) يبلغ مقدار الزخم أقصاه عند الثانية \\(12\\)، قبل أن تصبح القوة سالبة. وبعدها يبقى الزخم موجباً لكنه يتناقص.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mtext>max</mtext></msub><mo>=</mo><msub><mi>I</mi><mrow><mn>0</mn><mo>→</mo><mn>12</mn></mrow></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mtext>max</mtext></msub><mo>=</mo><mn>7.5</mn><mo stretchy="false">(</mo><mn>20</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>p</mi><mtext>max</mtext></msub><mo>=</mo><mn>150</mn><mtext> </mtext><mrow><mi mathvariant="normal">k</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">s</mi></mrow></mrow></math>
\`\`\`



نحسب طاقة الحركة عند أكبر مقدار للزخم في هذه الفترة. من \\(p=mv\\) و\\(K=\\frac{1}{2}mv^{2}\\) نحصل على \\(K=p^{2}/(2m)\\)، لذلك نستخدم الزخم الأقصى مباشرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mtext>max</mtext></msub><mo>=</mo><mfrac><msubsup><mi>p</mi><mtext>max</mtext><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mtext>max</mtext></msub><mo>=</mo><mfrac><msup><mn>150</mn><mn>2</mn></msup><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mtext>max</mtext></msub><mo>=</mo><mfrac><mn>22500</mn><mn>10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>K</mi><mtext>max</mtext></msub><mo>=</mo><mn>2250</mn><mtext> </mtext><mi mathvariant="normal">J</mi></mrow></math>
\`\`\`

:::
`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "الزخم (كمية التحرك) الخطي والدفع",
  "summary": "أسئلة الكتاب بترتيب المصدر، تليها أسئلة إضافية مع الاحتفاظ باختلاف المعطيات.",
  "outcome": "مراجعة الزخم (كمية التحرك) الخطي والدفع من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "130 سؤالًا",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
