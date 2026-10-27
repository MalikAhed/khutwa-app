import { createBiologyLesson } from "./shared.js";

export const source = `:::mcq
id: bio-b-p040-q1-1
title: الرزمة التعليمية، صفحة 40، السؤال 1-1
question: كم عدد أنواع الغاميتات التي تنتج عن الطراز الجيني AAMmBbrr؟
reference: [الرزمة التعليمية، صفحة PDF 40](https://moe.edu.ps/m/4061#page=40)
- [ ] option-1 | 2
- [x] option-2 | 4
- [ ] option-3 | 8
- [ ] option-4 | 16
explanation:
الغاميت يأخذ أليلاً واحداً من كل زوج عند الانقسام المنصف. الزوج المتماثل لا يولد اختياراً جديداً، والزوج غير المتماثل يعطي احتمالين.
في AAMmBbrr الزوجان المتغيران هما Mm و Bb، بينما A و r ثابتان. وبالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`



الأنواع هي AMBr و AMbr و AmBr و Ambr؛ فالاختيار 4.
hint: اقرأ السؤال وقارن بين البدائل الأصلية.
:::

:::mcq
id: bio-b-p040-q1-2
title: الرزمة التعليمية، صفحة 40، السؤال 1-2
question: كم عدد أنواع الطرز الجينية الناتجة عن تزاوج فردين أحدهما يحمل الطراز الجيني AaBbmm والآخر يحمل الطراز الجيني AABbMm؟
reference: [الرزمة التعليمية، صفحة PDF 40](https://moe.edu.ps/m/4061#page=40)
- [ ] option-1 | 16
- [x] option-2 | 12
- [ ] option-3 | 4
- [ ] option-4 | 3
explanation:
نعد الطرز الجينية المختلفة لكل زوج، ثم نضرب أعدادها لأن الجينات تتوزع مستقلة في نموذج مندل. ينقل كل غاميت أليلاً واحداً من كل زوج.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>A</mi><mo>⇒</mo><mi>A</mi><mi>A</mi><mo separator="true">,</mo><mi>A</mi><mi>a</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>B</mi><mi>B</mi><mo separator="true">,</mo><mi>B</mi><mi>b</mi><mo separator="true">,</mo><mi>b</mi><mi>b</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>m</mi><mo>×</mo><mi>M</mi><mi>m</mi><mo>⇒</mo><mi>M</mi><mi>m</mi><mo separator="true">,</mo><mi>m</mi><mi>m</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>3</mn><mo>×</mo><mn>2</mn><mo>=</mo><mn>12</mn></mrow></math>
\`\`\`



إذن 12 نوعاً من الطرز الجينية؛ ولا نعد كل خانة في مربع التزاوج طرازاً مختلفاً.
hint: اقرأ السؤال وقارن بين البدائل الأصلية.
:::

:::mcq
id: bio-b-p040-q1-9
title: الرزمة التعليمية، صفحة 40، السؤال 1-9
question: كم عدد أنواع الطرز الشكلية المتكوّنة عن تزاوج فردين أحدهما يحمل الطراز الجيني aabbdd والآخر يحمل الطراز الجيني AABBDD (علماً بأنها صفات مندلية)؟
reference: [الرزمة التعليمية، صفحة PDF 40](https://moe.edu.ps/m/4061#page=40)
- [ ] option-1 | 8
- [ ] option-2 | 4
- [ ] option-3 | 2
- [x] option-4 | 1
explanation:
في السيادة التامة يكفي وجود أليل كبير لإظهار الصفة السائدة.
الأول aabbdd يعطي غاميت abd فقط، والثاني AABBDD يعطي غاميت ABD فقط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>a</mi><mi>b</mi><mi>d</mi><mo>×</mo><mi>A</mi><mi>B</mi><mi>D</mi><mo>⇒</mo><mi>A</mi><mi>a</mi><mi>B</mi><mi>b</mi><mi>D</mi><mi>d</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>100</mn><mi mathvariant="normal">%</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



جميع النسل له الطراز الجيني نفسه ويظهر الصفات السائدة الثلاث؛ لذلك يوجد طراز شكلي واحد.
hint: اقرأ السؤال وقارن بين البدائل الأصلية.
:::

:::mcq
id: bio-q-p065-q1
title: تصنيف الأسئلة، السؤال 1، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65
question: ما نوع وراثة صفة لون الأزهار في نبات البازيلاء؟
- [x] option-1 | أ. سيادة تامة
- [ ] option-2 | ب. سيادة غير تامة
- [ ] option-3 | ج. سيادة مشتركة
- [ ] option-4 | د. جينات قاتلة
explanation:
**الإجابة:** أ. سيادة تامة

**الشاهد من الكتاب:**

> في نبات البازيلاء، صفة لون الأزهار الأرجوانية(P) سائدة على البيضاء(p)، ولون القرون الخضراء(G) سائدة على اللون الأصفر(g).

**المصدر:** صفحة 26 من الكتاب.



hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p065-q2
title: تصنيف الأسئلة، السؤال 2، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65
question: أي التزاوجات الآتية تنتج عنها النسبة 1:1:1:1؟
- [ ] option-1 | أ. AArr × AaRr
- [ ] option-2 | ب. Rr × rr
- [ ] option-3 | ج. AaRr × Aarr
- [x] option-4 | د. aarr × AaRr
explanation:
الغاميت يحمل أليلاً واحداً من كل زوج، وعند التوزيع المستقل يمكن اجتماع أليل كل صفة مع أي أليل للصفة الأخرى.
نفسر النسبة المطلوبة هنا على أنها **نسبة الطرز الشكلية** في مسائل السيادة التامة. وتعني أربعة طرز شكلية متساوية الاحتمال، وتنتج من تلقيح ثنائي غير نقي بفرد متنحٍ للصفتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>R</mi><mi>r</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>r</mi><mi>r</mi></mrow></math>
\`\`\`



غاميتات الأول AR و Ar و aR و ar متساوية بالتوزيع المستقل، والثاني ar فقط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>R</mi><mi>r</mi><mo separator="true">,</mo><mi>A</mi><mi>a</mi><mi>r</mi><mi>r</mi><mo separator="true">,</mo><mi>a</mi><mi>a</mi><mi>R</mi><mi>r</mi><mo separator="true">,</mo><mi>a</mi><mi>a</mi><mi>r</mi><mi>r</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mtext> </mtext><mi>e</mi><mi>a</mi><mi>c</mi><mi>h</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بالسيادة التامة تظهر أربعة طرز شكلية بنسبة 1:1:1:1؛ لذلك الاختيار د.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p065-q3
title: تصنيف الأسئلة، السؤال 3، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65
question: نبات بازيلاء يحمل الطراز الجيني RrTt لصفتين، فما عدد أنواع الغاميتات التي يكونها؟
- [ ] option-1 | أ. 2
- [x] option-2 | ب. 4
- [ ] option-3 | ج. 6
- [ ] option-4 | د. 8
explanation:
أثناء تكوين الغاميت ينفصل أليلا كل زوج، فيحمل الغاميت R أو r، ويحمل T أو t.
لأن الزوجين غير متماثلين ويتوزعان مستقلاً، نزاوج كل اختيار من الأول مع كل اختيار من الثاني:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>T</mi><mo separator="true">,</mo><mi>R</mi><mi>t</mi><mo separator="true">,</mo><mi>r</mi><mi>T</mi><mo separator="true">,</mo><mi>r</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`



إذن أربعة أنواع، وهو البديل ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p065-q4
title: تصنيف الأسئلة، السؤال 4، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65
question: ما عدد أنواع الغاميتات التي يكونها فرد طرازه الجيني AabbEemmRr؟
- [ ] option-1 | أ. 6
- [x] option-2 | ب. 8
- [ ] option-3 | ج. 9
- [ ] option-4 | د. 12
explanation:
نحسب الأزواج غير المتماثلة لأن كل واحد منها يعطي اختيارين في الغاميت؛ أما الزوج المتماثل فيعطي نوعاً واحداً من الأليل.
في AabbEemmRr الأزواج المتغيرة Aa و Ee و Rr، والثابتان bb و mm.
بالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>8</mn></mrow></math>
\`\`\`



وتكون الأنواع AbEmR و AbEmr و AbemR و Abemr و abEmR و abEmr و abemR و abemr؛ فالبديل ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p065-q5
title: تصنيف الأسئلة، السؤال 5، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65
question: إذا كان التركيب الجيني لأبوين هو AaBBCC × AABbCc، فأي الأفراد التالية ابن العائلة؟
- [ ] option-1 | أ. AabbCc
- [ ] option-2 | ب. aaBBCC
- [x] option-3 | ج. AaBbCc
- [ ] option-4 | د. AaBBcc
explanation:
نختبر كل جين على حدة؛ يأخذ الابن أليلاً من كل والد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>A</mi><mo>⇒</mo><mi>A</mi><mi>A</mi><mtext> </mtext><mi>o</mi><mi>r</mi><mtext> </mtext><mi>A</mi><mi>a</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>B</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>B</mi><mi>B</mi><mtext> </mtext><mi>o</mi><mi>r</mi><mtext> </mtext><mi>B</mi><mi>b</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><mi>C</mi><mo>×</mo><mi>C</mi><mi>c</mi><mo>⇒</mo><mi>C</mi><mi>C</mi><mtext> </mtext><mi>o</mi><mi>r</mi><mtext> </mtext><mi>C</mi><mi>c</mi></mrow></math>
\`\`\`



الطراز AaBbCc يجمع إمكاناً من كل موضع؛ ويمكن إنتاجه من غاميت aBC للأول وغاميت Abc للثاني.
لا يمكن aa أو bb أو cc لأن أحد الوالدين متماثل للأليل الكبير في كل موضع؛ لذلك الاختيار ج.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p065-q6
title: تصنيف الأسئلة، السؤال 6، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65
question: أي الآتية ينتج من تزاوج فردين كلاهما يحمل الطراز الجيني AaBB لصفتين مندليتين؟
- [ ] option-1 | أ. AaBb
- [x] option-2 | ب. aaBB
- [ ] option-3 | ج. aaBb
- [ ] option-4 | د. AABb
explanation:
الأبوان كلاهما AaBB. ينفصل A عن a عند تكوين الغاميت، بينما B ثابت؛ فينتج كل منهما AB و aB.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>a</mi><mi>B</mi><mo>×</mo><mi>a</mi><mi>B</mi><mo>⇒</mo><mi>a</mi><mi>a</mi><mi>B</mi><mi>B</mi></mrow></math>
\`\`\`



هذا الطراز ممكن واحتماله ربع النسل. أما جميع البدائل الأخرى فتحتوي Bb؛ ولا يملك أي من الأبوين الأليل b لينقله. إذن البديل ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p065-q7
title: تصنيف الأسئلة، السؤال 7، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65 · صياغة تعليمية معدّلة
kicker: صياغة تعليمية معدّلة
question: ما عدد أنواع الغاميتات المختلفة من حيث الأليلين A و B التي يمكن أن ينتجها فرد طرازه الجيني AAbb؟
- [x] option-1 | أ. 1
- [ ] option-2 | ب. 2
- [ ] option-3 | ج. 3
- [ ] option-4 | د. 4
explanation:
النوع الجيني للغاميت يختلف عن العدد الكلي للخلايا الناتجة. يحمل الغاميت أليلًا واحدًا من كل زوج.

الزوج AA يعطي الأليل A فقط.

الزوج bb يعطي الأليل b فقط.

بدمج الأليلين نحصل على النوع Ab وحده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">g</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mtext> </mtext><mi mathvariant="normal">t</mi><mi mathvariant="normal">y</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mo>×</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`



الإجابة: أ، نوع واحد هو Ab.

**المصدر:** صفحة 24 من الكتاب.

hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p065-q8
title: تصنيف الأسئلة، السؤال 8، صفحة 65
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 65
question: أنجبت عائلة ثلاث بنات، ما احتمال أن يكون المولود الرابع لهذه العائلة بنتاً؟
- [ ] option-1 | أ. 1/16
- [ ] option-2 | ب. 1/8
- [ ] option-3 | ج. 1/4
- [x] option-4 | د. 1/2
explanation:
في النموذج المندلي لجنس الإنسان تعطي الأم XX بويضات X، ويعطي الأب XY حيوانات منوية X أو Y باحتمالين متساويين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>X</mi><mo>×</mo><mi>X</mi><mo>⇒</mo><mi>X</mi><mi>X</mi><mo separator="true">,</mo><mspace width="2em"/><mi>X</mi><mo>×</mo><mi>Y</mi><mo>⇒</mo><mi>X</mi><mi>Y</mi></mrow></math>
\`\`\`



احتمال البنت في كل ولادة نصف، والولادات السابقة مستقلة عن اختيار الغاميت في الولادة التالية.
إذن بعد ثلاث بنات أيضاً احتمال بنت في الولادة الرابعة 1/2؛ الاختيار د.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q9
title: تصنيف الأسئلة، السؤال 9، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: إذا أنجبت عائلة ما طفلين، ما احتمال أن يكون الأول ذكراً والثاني أنثى؟
- [ ] option-1 | أ. 100%
- [ ] option-2 | ب. 75%
- [ ] option-3 | ج. 50%
- [x] option-4 | د. 25%
explanation:
نفترض تساوي فرص X و Y في الحيوانات المنوية، والأم تعطي X؛ لذا احتمال ذكر لكل ولادة 1/2، واحتمال أنثى 1/2.
الحدثان مستقلان والمطلوب ترتيب محدد: ذكر أولاً ثم أنثى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo>=</mo><mn>25</mn><mi mathvariant="normal">%</mi></mrow></math>
\`\`\`



فالاختيار د. لا نضاعف الاحتمال، لأن ترتيب أنثى ثم ذكر ليس مطلوباً.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q10
title: تصنيف الأسئلة، السؤال 10، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: رجل وزوجته يمتلكان صفة القدرة على ثني اللسان "سائدة" أنجبا طفلة لا تمتلك هذه الصفة، فما احتمال إنجابهما لطفل ذكر يحمل صفة القدرة على ثني اللسان؟
- [ ] option-1 | أ. 1/4
- [ ] option-2 | ب. 3/4
- [ ] option-3 | ج. 1/8
- [x] option-4 | د. 3/8
explanation:
نستخدم نموذج السؤال الذي يعد ثني اللسان صفة سائدة بسيطة: نرمز للقدرة بـ A ولعدمها بـ a. الطفلة غير القادرة aa أخذت a من كلا الوالدين؛ ومع قدرتهما يكون كل منهما Aa.
غاميتا كل والد A و a؛ وعند تزاوجهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>a</mi><mo>⇒</mo><mi>A</mi><mi>A</mi><mo>:</mo><mi>A</mi><mi>a</mi><mo>:</mo><mi>a</mi><mi>a</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>2</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



احتمال القدرة ثلاثة أرباع، واحتمال الذكر نصف. وباستقلال الجنس عن هذه الصفة في النموذج:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>8</mn></mrow></math>
\`\`\`



إذن د. هذا تطبيق لفرضية الوراثة المبسطة في السؤال.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q11
title: تصنيف الأسئلة، السؤال 11، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: ما نسبة ظهور الطراز الجيني GgRr لأبوين طرازهما الجيني GgRr؟
- [x] option-1 | أ. 4/16
- [ ] option-2 | ب. 8/16
- [ ] option-3 | ج. 2/16
- [ ] option-4 | د. 1/16
explanation:
غير متماثل الجينات Gg يتكون من أليل G وآخر g؛ ومثله Rr. الأبوان GgRr، وينتج كل منهما GR و Gr و gR و gr بالتوزيع المستقل.
لكل موضع على حدة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>G</mi><mi>g</mi><mo>×</mo><mi>G</mi><mi>g</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>G</mi><mi>g</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>R</mi><mi>r</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>R</mi><mi>r</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



وباستقلال الموضعين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>G</mi><mi>g</mi><mi>R</mi><mi>r</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo>=</mo><mn>4</mn><mi mathvariant="normal">/</mi><mn>16</mn></mrow></math>
\`\`\`



إذن الاختيار أ.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q12
title: تصنيف الأسئلة، السؤال 12، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: عند حدوث تلقيح ذاتي لنبات طرازه الجيني AaBbdd فما احتمال إنتاج فرد طرازه الجيني aabbdd؟
- [ ] option-1 | أ. 1/2
- [ ] option-2 | ب. 1/4
- [ ] option-3 | ج. 1/8
- [x] option-4 | د. 1/16
explanation:
التلقيح الذاتي يجعل النبات AaBbdd أباً وأماً في التزاوج نفسه؛ وتكون غاميتاته ABd و Abd و aBd و abd.
نحتاج الأليلات المتنحية في المواضع الثلاثة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>a</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>a</mi><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>b</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>d</mi><mi>d</mi><mo>×</mo><mi>d</mi><mi>d</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>d</mi><mi>d</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`



بالتوزيع المستقل نضرب الاحتمالات:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>a</mi><mi>a</mi><mi>b</mi><mi>b</mi><mi>d</mi><mi>d</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mn>1</mn><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>16</mn></mrow></math>
\`\`\`



إذن د.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q13
title: تصنيف الأسئلة، السؤال 13، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: عند تلقيح نباتين طرازهما الجيني (RrTt - rrTt) فما احتمال إنتاج أفراد غير متماثلة الجينات للصفتين معاً؟
- [ ] option-1 | أ. 1/8
- [x] option-2 | ب. 1/4
- [ ] option-3 | ج. 3/4
- [ ] option-4 | د. 1/2
explanation:
المطلوب فرد غير متماثل للزوجين، أي RrTt. ينتج الأول RT و Rt و rT و rt، والثاني rT و rt.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>r</mi><mi>r</mi><mo>⇒</mo><mi>R</mi><mi>r</mi><mo>:</mo><mi>r</mi><mi>r</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>R</mi><mi>r</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mo>×</mo><mi>T</mi><mi>t</mi><mo>⇒</mo><mi>T</mi><mi>T</mi><mo>:</mo><mi>T</mi><mi>t</mi><mo>:</mo><mi>t</mi><mi>t</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>2</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>T</mi><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



لأن الموضعين يتوزعان مستقلاً:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>R</mi><mi>r</mi><mi>T</mi><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`



إذن البديل ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q14
title: تصنيف الأسئلة، السؤال 14، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: عند إجراء تلقيح بين نبتتي بازيلاء إحداهما خضراء وملساء القرون سائدة بصورة نقية والثانية صفراء ومجعدة القرون، فما نسبة إنتاج نباتات تحمل صفتي القرون الصفراء والملساء معاً؟
- [x] option-1 | أ. صفر
- [ ] option-2 | ب. 25%
- [ ] option-3 | ج. 50%
- [ ] option-4 | د. 75%
explanation:
لنرمز للأخضر السائد بـ G وللأصفر بـ g، ولملساء القرون السائدة بـ S وللمجعدة بـ s. النقاء في الوالد السائد يعني GGSS، والوالد المتنحي ggss.
الأول يعطي GS فقط، والثاني gs فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>G</mi><mi>G</mi><mi>S</mi><mi>S</mi><mo>×</mo><mi>g</mi><mi>g</mi><mi>s</mi><mi>s</mi><mo>⇒</mo><mi>G</mi><mi>g</mi><mi>S</mi><mi>s</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>100</mn><mi mathvariant="normal">%</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



كل النسل أخضر أملس؛ أما الأصفر فيحتاج gg ولا ينتج هنا. إذن احتمال أصفر أملس صفر، وهو أ.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q15
title: تصنيف الأسئلة، السؤال 15، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: ما عدد أنواع الطرز الجينية الناتجة من تزاوج فردين يحمل أحدهما طرازه الجيني AaBbRr والآخر AABbRr؟
- [ ] option-1 | أ. 48
- [ ] option-2 | ب. 32
- [x] option-3 | ج. 18
- [ ] option-4 | د. 16
explanation:
نعد الطرز الجينية، لا الطرز الشكلية؛ لذلك BB و Bb مختلفان ولو أظهرا الصفة السائدة نفسها.
كل غاميت يحمل أليلاً واحداً لكل موضع، وفي التزاوج المعطى:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>A</mi><mo>⇒</mo><mi>A</mi><mi>A</mi><mo separator="true">,</mo><mi>A</mi><mi>a</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>B</mi><mi>B</mi><mo separator="true">,</mo><mi>B</mi><mi>b</mi><mo separator="true">,</mo><mi>b</mi><mi>b</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>R</mi><mi>r</mi><mo>⇒</mo><mi>R</mi><mi>R</mi><mo separator="true">,</mo><mi>R</mi><mi>r</mi><mo separator="true">,</mo><mi>r</mi><mi>r</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



بالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>3</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>18</mn></mrow></math>
\`\`\`



إذن ج.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q16
title: تصنيف الأسئلة، السؤال 16، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: ما نسبة الطرز الشكلية في أفراد الجيل الثاني الناتجة من تزاوج أبوين أحدهما الطراز الجيني له AA، والآخر aa؟
- [ ] option-1 | أ. 100%
- [x] option-2 | ب. 3:1
- [ ] option-3 | ج. 1:1
- [ ] option-4 | د. 2:1
explanation:
نبدأ بالأبوين النقيين؛ غاميت الأول A فقط والثاني a فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>A</mi><mo>×</mo><mi>a</mi><mi>a</mi><mo>⇒</mo><msub><mi>F</mi><mn>1</mn></msub><mo>:</mo><mi>A</mi><mi>a</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>100</mn><mi mathvariant="normal">%</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الجيل الثاني ينتج من تزاوج أفراد الجيل الأول، وغاميتا كل منهم A و a:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>a</mi><mo>⇒</mo><mi>A</mi><mi>A</mi><mo>:</mo><mi>A</mi><mi>a</mi><mo>:</mo><mi>a</mi><mi>a</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>2</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



بالسيادة التامة يظهر AA و Aa الصفة السائدة، و aa المتنحية؛ لذلك النسبة الشكلية 3:1، وهي ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q17
title: تصنيف الأسئلة، السؤال 17، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: ما عدد أنواع الطرز الجينية لأفراد الجيل الأول الناتجة من تزاوج فردين كلاهما طرازه الجيني AaBb؟
- [ ] option-1 | أ. 4
- [ ] option-2 | ب. 8
- [x] option-3 | ج. 9
- [ ] option-4 | د. 16
explanation:
كل فرد AaBb ينتج AB و Ab و aB و ab. عند التزاوج يكون لكل موضع ثلاثة طرز جينية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>a</mi><mo>⇒</mo><mi>A</mi><mi>A</mi><mo separator="true">,</mo><mi>A</mi><mi>a</mi><mo separator="true">,</mo><mi>a</mi><mi>a</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>B</mi><mi>B</mi><mo separator="true">,</mo><mi>B</mi><mi>b</mi><mo separator="true">,</mo><mi>b</mi><mi>b</mi></mrow></math>
\`\`\`



ولأن الموضعين مستقلان نقرن كل طراز للأول بكل طراز للثاني:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>3</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow></math>
\`\`\`



الأنواع: AABB و AABb و AAbb و AaBB و AaBb و Aabb و aaBB و aaBb و aabb. إذن ج؛ أما 16 فهو عدد خانات المربع مع تكرار بعض الطرز.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p066-q18
title: تصنيف الأسئلة، السؤال 18، صفحة 66
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 66
question: أي التزاوجات الآتية تمثل تلقيحاً تجريبياً لصفتين معاً؟
- [ ] option-1 | أ. AaBb × AaBb
- [ ] option-2 | ب. Aabb × AaBB
- [ ] option-3 | ج. aaBb × AAbb
- [x] option-4 | د. AaBb × aabb
explanation:
التلقيح التجريبي هو تزاوج الفرد ذي الصفات السائدة مع فرد متنحٍ متماثل الجينات؛ لأن أليلات المتنحي المعروفة تكشف ما يقدمه الفرد المختبَر من غاميتات.
للصفتين يجب أن يكون الطرف الكاشف aabb.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>B</mi><mi>b</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>b</mi><mi>b</mi></mrow></math>
\`\`\`



غاميتات الطرفين AB و Ab و aB و ab مقابل ab، فتظهر أربعة أصناف تكشف عدم نقاوة AaBb. إذن د.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q19
title: تصنيف الأسئلة، السؤال 19، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: ما احتمال إنجاب فرد طرازه الجيني AaBb عند تزاوج AaBb × aaBb؟
- [ ] option-1 | أ. صفر
- [x] option-2 | ب. 25%
- [ ] option-3 | ج. 50%
- [ ] option-4 | د. 75%
explanation:
المطلوب AaBb. يحمل كل غاميت أليلاً من كل زوج؛ الأول AaBb يعطي AB و Ab و aB و ab، والثاني aaBb يعطي aB و ab.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>a</mi><mi>a</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mn>2</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



باستقلال الموضعين نضرب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mi>a</mi><mi>B</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo>=</mo><mn>25</mn><mi mathvariant="normal">%</mi></mrow></math>
\`\`\`



إذن ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q20
title: تصنيف الأسئلة، السؤال 20، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: إذا حصل تلقيح اختباري لنبات بازيلاء أصفر وأملس البذور (غير نقي الصفتين)، فأي الطرز الشكلية الآتية يمكن أن يظهر بين أفراد النسل الناتج؟
- [ ] option-1 | أ. أصفر (نقي الصفة) مجعد البذور
- [ ] option-2 | ب. أصفر أملس نقي للصفتين
- [ ] option-3 | ج. أخضر أملس البذور (نقي الصفة)
- [x] option-4 | د. أصفر أملس غير نقي للصفتين
explanation:
نرمز للأصفر بـ Y وللأخضر بـ y، وللأملس بـ R وللمجعد بـ r. الفرد المختبر غير نقي YyRr، والتلقيح الاختباري يستعمل yyrr.
غاميتاته YR و Yr و yR و yr، والمتنحي يعطي yr فقط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>Y</mi><mi>y</mi><mi>R</mi><mi>r</mi><mo>×</mo><mi>y</mi><mi>y</mi><mi>r</mi><mi>r</mi><mo>⇒</mo><mi>Y</mi><mi>y</mi><mi>R</mi><mi>r</mi><mo separator="true">,</mo><mi>Y</mi><mi>y</mi><mi>r</mi><mi>r</mi><mo separator="true">,</mo><mi>y</mi><mi>y</mi><mi>R</mi><mi>r</mi><mo separator="true">,</mo><mi>y</mi><mi>y</mi><mi>r</mi><mi>r</mi></mrow></math>
\`\`\`



إذن يمكن ظهور أصفر أملس غير نقي للصفتين، أي د. ولا يظهر أصفر نقي YY ولا أملس نقي RR؛ لأن الطرف المختبِر لا يقدم Y أو R.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q21
title: تصنيف الأسئلة، السؤال 21، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: كم نوع من الغاميتات ينتجه فرد طرازه الجيني BbAaGg؟
- [ ] option-1 | أ. 3
- [ ] option-2 | ب. 6
- [x] option-3 | ج. 8
- [ ] option-4 | د. 9
explanation:
في BbAaGg ثلاثة أزواج غير متماثلة. ينفصل أليلا كل زوج، فيحمل الغاميت B أو b، و A أو a، و G أو g.
بالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>8</mn></mrow></math>
\`\`\`



الأنواع BAG و BAg و BaG و Bag و bAG و bAg و baG و bag. إذن ج.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q22
title: تصنيف الأسئلة، السؤال 22، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: إذا حصل تلقيح اختباري لنبتة بازيلاء طويلة أرجوانية الأزهار طرازها الجيني RrTt، فأي الطرز الآتية يمكن أن يحمله أحد أفراد النسل الناتج؟
- [ ] option-1 | أ. RRtt
- [ ] option-2 | ب. RrTT
- [ ] option-3 | ج. RRTT
- [x] option-4 | د. Rrtt
explanation:
التلقيح الاختباري يستعمل فرداً متنحياً للصفتين؛ لذا التزاوج:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>r</mi><mi>r</mi><mi>t</mi><mi>t</mi></mrow></math>
\`\`\`



الأول يعطي RT و Rt و rT و rt، والثاني rt فقط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mi>T</mi><mi>t</mi><mo separator="true">,</mo><mi>R</mi><mi>r</mi><mi>t</mi><mi>t</mi><mo separator="true">,</mo><mi>r</mi><mi>r</mi><mi>T</mi><mi>t</mi><mo separator="true">,</mo><mi>r</mi><mi>r</mi><mi>t</mi><mi>t</mi></mrow></math>
\`\`\`



إذن Rrtt ممكن، وهو د. أما الطرز المحتوية RR أو TT فلا تنتج، لأن الطرف المتنحي لا يقدم R أو T.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q23
title: تصنيف الأسئلة، السؤال 23، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: ما عدد أنواع الغاميتات التي ينتجها فرد طرازه الجيني RrBbAa؟
- [ ] option-1 | أ. 2
- [ ] option-2 | ب. 4
- [ ] option-3 | ج. 6
- [x] option-4 | د. 8
explanation:
كل غاميت يحمل أليلاً واحداً من كل زوج. الأزواج Rr و Bb و Aa جميعها غير متماثلة، فتسمح بخيارين مستقلين لكل موضع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>=</mo><mn>8</mn></mrow></math>
\`\`\`



الأنواع RBA و RBa و RbA و Rba و rBA و rBa و rbA و rba؛ فالبديل د.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q24
title: تصنيف الأسئلة، السؤال 24، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: عند تلقيح نبتتين الطراز الجيني للأول BbRRDd والثاني BbRrdd، ما احتمال إنتاج أفراد غير متماثلة الجينات للصفات الثلاث؟
- [x] option-1 | أ. 1/8
- [ ] option-2 | ب. 1/4
- [ ] option-3 | ج. 1/2
- [ ] option-4 | د. 3/9
explanation:
غير متماثل الجينات للصفات الثلاث يعني BbRrDd. كل غاميت يأخذ أليلاً واحداً في كل موضع، فنفصل التزاوجات:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>R</mi><mo>×</mo><mi>R</mi><mi>r</mi><mo>⇒</mo><mi>R</mi><mi>R</mi><mo>:</mo><mi>R</mi><mi>r</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>R</mi><mi>r</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>d</mi><mo>×</mo><mi>d</mi><mi>d</mi><mo>⇒</mo><mi>D</mi><mi>d</mi><mo>:</mo><mi>d</mi><mi>d</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>D</mi><mi>d</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



نضرب لاحتمال اجتماعها، لأن توزيعها مستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mi>b</mi><mi>R</mi><mi>r</mi><mi>D</mi><mi>d</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><msup><mo stretchy="false">)</mo><mn>3</mn></msup><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>8</mn></mrow></math>
\`\`\`



إذن أ.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q25
title: تصنيف الأسئلة، السؤال 25، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: تم إجراء تلقيح بين فردين طرازهما الجيني Eett وEETt، أي من الطرز الجينية الآتية يظهر في النسل الناتج؟
- [x] option-1 | أ. EEtt
- [ ] option-2 | ب. eeTt
- [ ] option-3 | ج. EETT
- [ ] option-4 | د. EeTT
explanation:
الأول Eett يعطي Et و et، والثاني EETt يعطي ET و Et؛ فيحمل كل غاميت أليلاً واحداً لكل موضع.
اتحاد Et من الأول مع Et من الثاني يعطي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mi>t</mi><mo>×</mo><mi>E</mi><mi>t</mi><mo>⇒</mo><mi>E</mi><mi>E</mi><mi>t</mi><mi>t</mi></mrow></math>
\`\`\`



إذن أ ممكن.
لا يمكن ee لأن الثاني EE، ولا TT لأن الأول tt؛ وهذا يستبعد بقية البدائل.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q26
title: تصنيف الأسئلة، السؤال 26، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: صفة الطول في نبات معين سائدة على صفة القصر، إذا لقح نبات طويل غير نقي مع آخر طويل الساق نقي، ما احتمال إنتاج نباتات قصيرة الساق؟
- [ ] option-1 | أ. 1
- [ ] option-2 | ب. 1/2
- [ ] option-3 | ج. 1/4
- [x] option-4 | د. صفر
explanation:
نرمز للطول السائد بـ T وللقصر بـ t. الطويل غير النقي Tt، والطويل النقي TT.
الأول ينتج T و t، والثاني T فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mo>×</mo><mi>T</mi><mi>T</mi><mo>⇒</mo><mi>T</mi><mi>T</mi><mo>:</mo><mi>T</mi><mi>t</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



القصر يحتاج tt؛ ولا يحصل أي ابن على t من الوالد TT. إذن احتمال القصر صفر؛ الاختيار د.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q27
title: تصنيف الأسئلة، السؤال 27، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: ما احتمال ظهور الطراز الجيني AAbbCC من تزاوج فردين أحدهما AaBbCc والآخر AABbCc؟
- [x] option-1 | أ. 1/32
- [ ] option-2 | ب. 1/16
- [ ] option-3 | ج. 1/8
- [ ] option-4 | د. 1/4
explanation:
نحتاج AA و bb و CC معاً. في كل موضع ينفصل الأليلان ويأخذ النسل واحداً من كل والد:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>A</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mi>A</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>b</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><mi>c</mi><mo>×</mo><mi>C</mi><mi>c</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>C</mi><mi>C</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`



باستقلال الجينات نضرب احتمالات الطرز المطلوبة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>A</mi><mi>A</mi><mi>b</mi><mi>b</mi><mi>C</mi><mi>C</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>32</mn></mrow></math>
\`\`\`



إذن أ.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q28
title: تصنيف الأسئلة، السؤال 28، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: ما عدد أنواع الغاميتات التي يكونها فرد طرازه الجيني TTGGMmCc؟
- [ ] option-1 | أ. 2
- [x] option-2 | ب. 4
- [ ] option-3 | ج. 6
- [ ] option-4 | د. 8
explanation:
في TTGGMmCc الزوجان TT و GG متماثلان، فيقدمان T و G فقط. أما Mm و Cc فغير متماثلين، وينفصل كل زوج ليقدم أليلاً واحداً للغاميت.
بالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`



الأنواع TGMC و TGMc و TGmC و TGmc؛ فالبديل ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p067-q29
title: تصنيف الأسئلة، السؤال 29، صفحة 67
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 67
question: ما الأهمية الاقتصادية لاستخدام التلقيح التجريبي؟
- [x] option-1 | أ. المحافظة على نقاوة الصفة
- [ ] option-2 | ب. تقليل كمية الإنتاج
- [ ] option-3 | ج. اكتشاف الطفرات
- [ ] option-4 | د. تحسين الصفات المرغوبة
explanation:
**الإجابة المقصودة: المحافظة على نقاوة الصفة.**

في التلقيح التجريبي نزاوج الفرد ذا الصفة السائدة بفرد متنحٍّ نقي؛ لأن ظهور الصفة المتنحية في النسل يكشف أن الفرد المختبَر يحمل أليلها أيضاً؛ فالصفة المتنحية لا تظهر إلا بوجود أليلين متنحيين.

إذا ظهر نسل متنحٍّ عرفنا أن الفرد السائد غير نقي، فنستطيع تمييزه من الأفراد النقية واختيارها للإكثار. هذه هي الصلة بالمحافظة على نقاوة الصفة.

التحسين الاقتصادي الأوسع قد يستفيد من الاختبار، لكن وظيفته المباشرة هنا هي **الكشف عن النقاوة**؛ لا يغيّر الاختبار جينات الفرد نفسه.

**مثال الكتاب الذي يوضح كشف الطراز بالتلقيح التجريبي:**

> يمثل الشكل(8) تلقيح تجريبي لأفراد الجيل الأول(رمادي طبيعي الأجنحة مع أسود ضامر الأجنحة)، فظهر أفراد النسل بنسبة1:1 رمادي اللون طبيعي الأجنحة إلى أسود اللون ضامر الأجنحة.

**المصدر:** صفحة 34 من الكتاب.



**تعريف الاختبار في الكتاب الكامل الرسمي:**

> إجراء تلقيح بين الفرد السائد مجهول النقاوة وفرد يحمل الصفة المتنحية

**المصدر:** صفحة 48 من الكتاب.



hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p068-q1-1
title: تصنيف الأسئلة، السؤال 1، الفرع 1، صفحة 68
question: السؤال 1، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب الطرز الجينية لأنواع الغاميتات التي يكونها الفرد ذو الطراز الجيني AABbCC.
solution:
يحمل الغاميت أليلاً واحداً من كل زوج. في AABbCC يثبت A و C لأن الزوجين متماثلان، بينما ينفصل B عن b.
لذلك غاميتا الفرد هما ABC و AbC، وبالتوزيع المتكافئ يشكل كل منهما نصف الغاميتات.
:::

:::exam-question
id: bio-q-p068-q1-2
title: تصنيف الأسئلة، السؤال 1، الفرع 2، صفحة 68
question: السؤال 1، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب الطرز الجينية لأنواع الغاميتات التي يكونها الفرد ذو الطراز الجيني AABB.
solution:
كلا الزوجين في AABB متماثل الجينات. يأخذ كل غاميت أليلاً واحداً من كل زوج: A من AA و B من BB.
إذن جميع الغاميتات من نوع AB فقط؛ لا توجد أليلات a أو b في هذا الفرد لتنتقل إلى غاميتاته.
:::

:::exam-question
id: bio-q-p068-q2-1
title: تصنيف الأسئلة، السؤال 2، الفرع 1، صفحة 68
question: السؤال 2، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما أنواع الغاميتات التي يكونها الفرد ذو الطراز الجيني AABbCc؟
solution:
الطراز AABbCc يثبت A في كل غاميت، ويتيح B أو b من الزوج الثاني و C أو c من الثالث.
بالتوزيع المستقل نقرن كل اختيار من الزوج الثاني بكل اختيار من الثالث:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>B</mi><mi>C</mi><mo separator="true">,</mo><mi>A</mi><mi>B</mi><mi>c</mi><mo separator="true">,</mo><mi>A</mi><mi>b</mi><mi>C</mi><mo separator="true">,</mo><mi>A</mi><mi>b</mi><mi>c</mi></mrow></math>
\`\`\`



هذه أربعة أنواع متساوية الاحتمال، كل نوع ربع الغاميتات.
:::

:::exam-question
id: bio-q-p068-q2-2
title: تصنيف الأسئلة، السؤال 2، الفرع 2، صفحة 68
question: السؤال 2، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما أنواع الغاميتات التي يكونها الفرد ذو الطراز الجيني AaBb؟
solution:
في AaBb ينفصل A عن a، وينفصل B عن b، ويحمل كل غاميت أليلاً واحداً من كل زوج.
بالتوزيع المستقل نحصل على:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>B</mi><mo separator="true">,</mo><mi>A</mi><mi>b</mi><mo separator="true">,</mo><mi>a</mi><mi>B</mi><mo separator="true">,</mo><mi>a</mi><mi>b</mi></mrow></math>
\`\`\`



كل نوع احتماله ربع؛ ولا يحمل الغاميت الزوج Aa أو Bb كاملاً.
:::

:::exam-question
id: bio-q-p068-q3-1
title: تصنيف الأسئلة، السؤال 3، الفرع 1، صفحة 68
question: السؤال 3، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تزاوج بين نباتي بازيلاء الأولى تحمل الطراز الجيني TtRrBb، والثانية تحمل الطراز الجيني TtRrbb، فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t)، وجين البذور الملساء (R) سائد على جين البذور المجعدة (r)، وجين صفة الأزهار المحورية (B) سائد على جين صفة الأزهار الطرفية (b).

1- اكتب الطرز الشكلية للأبوين.

solution:
في السيادة التامة يظهر الأليل الكبير أثره ولو وجد مرة واحدة؛ فلا يظهر المتنحي إلا عند تماثل الأليلين الصغيرين.
الأول TtRrBb يحمل T و R و B، فيكون طويل الساق أملس البذور محوري الأزهار.
الثاني TtRrbb يحمل T و R لكن زوج الموضع الأخير bb، فيكون طويل الساق أملس البذور طرفي الأزهار.

:::

:::exam-question
id: bio-q-p068-q3-2
title: تصنيف الأسئلة، السؤال 3، الفرع 2، صفحة 68
question: السؤال 3، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تزاوج بين نباتي بازيلاء الأولى تحمل الطراز الجيني TtRrBb، والثانية تحمل الطراز الجيني TtRrbb، فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t)، وجين البذور الملساء (R) سائد على جين البذور المجعدة (r)، وجين صفة الأزهار المحورية (B) سائد على جين صفة الأزهار الطرفية (b).

2- اكتب أنواع الغاميتات للنبات ذي الطراز الجيني TtRrbb.

solution:
نأخذ أليلاً من Tt وأليلاً من Rr وأليلاً من bb. الزوج الأخير ثابت، فيكون الحرف b في كل غاميت.
بالتوزيع المستقل نقابل T أو t بكل من R أو r:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>R</mi><mi>b</mi><mo separator="true">,</mo><mi>T</mi><mi>r</mi><mi>b</mi><mo separator="true">,</mo><mi>t</mi><mi>R</mi><mi>b</mi><mo separator="true">,</mo><mi>t</mi><mi>r</mi><mi>b</mi></mrow></math>
\`\`\`



هي أربعة أنواع، كل منها ربع الغاميتات؛ لأن هناك زوجين غير متماثلين فقط.

:::

:::exam-question
id: bio-q-p068-q3-3
title: تصنيف الأسئلة، السؤال 3، الفرع 3، صفحة 68
question: السؤال 3، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تزاوج بين نباتي بازيلاء الأولى تحمل الطراز الجيني TtRrBb، والثانية تحمل الطراز الجيني TtRrbb، فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t)، وجين البذور الملساء (R) سائد على جين البذور المجعدة (r)، وجين صفة الأزهار المحورية (B) سائد على جين صفة الأزهار الطرفية (b).

3- ما احتمال الحصول على الطراز الشكلي طويل الساق أملس البذور محورية الأزهار بين أفراد الجيل الأول؟

solution:
الطول يكفيه T، والأملس يكفيه R، والمحوري يكفيه B؛ لأنها الصفات السائدة المعطاة. الأبوان TtRrBb و TtRrbb، ونحسب كل موضع مستقلاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mo>×</mo><mi>T</mi><mi>t</mi><mo>⇒</mo><mi>T</mi><mi>T</mi><mo>:</mo><mi>T</mi><mi>t</mi><mo>:</mo><mi>t</mi><mi>t</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>2</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>T</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>R</mi><mi>r</mi><mo>⇒</mo><mi>R</mi><mi>R</mi><mo>:</mo><mi>R</mi><mi>r</mi><mo>:</mo><mi>r</mi><mi>r</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>2</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>R</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>b</mi><mi>b</mi><mo>⇒</mo><mi>B</mi><mi>b</mi><mo>:</mo><mi>b</mi><mi>b</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



الشرطة تعني أن الأليل الثاني لا يغير ظهور الصفة السائدة. وبالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>9</mn><mi mathvariant="normal">/</mi><mn>32</mn></mrow></math>
\`\`\`



إذن احتمال طويل أملس محوري 9/32.

:::

:::exam-question
id: bio-q-p068-q3-4
title: تصنيف الأسئلة، السؤال 3، الفرع 4، صفحة 68
question: السؤال 3، الفرع 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تزاوج بين نباتي بازيلاء الأولى تحمل الطراز الجيني TtRrBb، والثانية تحمل الطراز الجيني TtRrbb، فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t)، وجين البذور الملساء (R) سائد على جين البذور المجعدة (r)، وجين صفة الأزهار المحورية (B) سائد على جين صفة الأزهار الطرفية (b).

4- ما احتمال الحصول على الطراز الجيني ttrrbb بين أفراد الجيل الأول؟

solution:
المطلوب ttrrbb، أي متماثل متنحٍ في المواضع الثلاثة. الأبوان المعطيان TtRrBb و TtRrbb؛ وينفصل أليلا كل زوج في غاميتاتهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mo>×</mo><mi>T</mi><mi>t</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>t</mi><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>R</mi><mi>r</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>r</mi><mi>r</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>b</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>b</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



بالتوزيع المستقل نضرب احتمالات اجتماع هذه الطرز:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>t</mi><mi>t</mi><mi>r</mi><mi>r</mi><mi>b</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>32</mn></mrow></math>
\`\`\`



إذن الاحتمال 1/32.

:::

:::exam-question
id: bio-q-p068-q4-1
title: تصنيف الأسئلة، السؤال 4، الفرع 1، صفحة 68
question: السؤال 4، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الجدول المجاور بعض نتائج عملية التلقيح لنباتي بازيلاء حيث يشير الرمز R للون الأزهار الأرجوانية، والرمز r للون الأزهار الأبيض، والرمز H لموقع الأزهار المحورية، والرمز h لموقع الأزهار الطرفية.

| الغاميتات | RH | Rh | rH | rh |
|---|---|---|---|---|
| Rh | RRHh | | | 1 |
| rh | 3 | Rrhh | 2 | rrhh |

1- اكتب الطرز الجينية للنباتين الأبوين للصفتين معاً.
solution:
من عناوين أعمدة الجدول نجد الغاميتات RH و Rh و rH و rh؛ فيقدم صاحب الأعمدة R أو r و H أو h، لذا طراز صاحب الأعمدة RrHh.
ومن عناوين الصفوف نجد Rh و rh فقط؛ يتغير R إلى r ويبقى h ثابتاً، لذا طراز صاحب الصفوف Rrhh.
إذن التزاوج:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mi>H</mi><mi>h</mi><mo>×</mo><mi>R</mi><mi>r</mi><mi>h</mi><mi>h</mi></mrow></math>
\`\`\`



كل غاميت يحمل أليلاً واحداً لكل جين؛ اجتماع Rh مع RH يفسر RRHh في الخانة المعطاة.
:::

:::exam-question
id: bio-q-p068-q4-2
title: تصنيف الأسئلة، السؤال 4، الفرع 2، صفحة 68
question: السؤال 4، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الجدول المجاور بعض نتائج عملية التلقيح لنباتي بازيلاء حيث يشير الرمز R للون الأزهار الأرجوانية، والرمز r للون الأزهار الأبيض، والرمز H لموقع الأزهار المحورية، والرمز h لموقع الأزهار الطرفية.

| الغاميتات | RH | Rh | rH | rh |
|---|---|---|---|---|
| Rh | RRHh | | | 1 |
| rh | 3 | Rrhh | 2 | rrhh |

2- اكتب الطرز الشكلية للنباتات المشار إليها بالأرقام 1-2-3.
solution:
اللون الأرجواني يظهر بوجود R، والأبيض يحتاج rr؛ والمحوري يظهر بوجود H، والطرفي يحتاج hh. نكوّن طراز كل خانة بجمع أليلات غاميت الصف مع العمود:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mo>:</mo><mi>R</mi><mi>h</mi><mo>×</mo><mi>r</mi><mi>h</mi><mo>⇒</mo><mi>R</mi><mi>r</mi><mi>h</mi><mi>h</mi></mrow></math>
\`\`\`



إذن 1 أرجواني طرفي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>:</mo><mi>r</mi><mi>h</mi><mo>×</mo><mi>r</mi><mi>H</mi><mo>⇒</mo><mi>r</mi><mi>r</mi><mi>H</mi><mi>h</mi></mrow></math>
\`\`\`



إذن 2 أبيض محوري.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>3</mn><mo>:</mo><mi>r</mi><mi>h</mi><mo>×</mo><mi>R</mi><mi>H</mi><mo>⇒</mo><mi>R</mi><mi>r</mi><mi>H</mi><mi>h</mi></mrow></math>
\`\`\`



إذن 3 أرجواني محوري.
:::

:::exam-question
id: bio-q-p068-q4-3
title: تصنيف الأسئلة، السؤال 4، الفرع 3، صفحة 68
question: السؤال 4، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الجدول المجاور بعض نتائج عملية التلقيح لنباتي بازيلاء حيث يشير الرمز R للون الأزهار الأرجوانية، والرمز r للون الأزهار الأبيض، والرمز H لموقع الأزهار المحورية، والرمز h لموقع الأزهار الطرفية.

| الغاميتات | RH | Rh | rH | rh |
|---|---|---|---|---|
| Rh | RRHh | | | 1 |
| rh | 3 | Rrhh | 2 | rrhh |

3- ما احتمال ظهور نباتات بيضاء الأزهار محورية الموقع؟
solution:
من الغاميتات RH و Rh و rH و rh في الأعمدة يكون الأب RrHh، ومن Rh و rh في الصفوف يكون الآخر Rrhh. الأبيض يحتاج rr والمحوري يحتاج H واحداً على الأقل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>R</mi><mi>r</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>r</mi><mi>r</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>h</mi><mo>×</mo><mi>h</mi><mi>h</mi><mo>⇒</mo><mi>H</mi><mi>h</mi><mo>:</mo><mi>h</mi><mi>h</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>H</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



الشرطة في H- تعني أن وجود H كافٍ للمحوري. وباستقلال الجينين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>r</mi><mi>r</mi><mi>H</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>8</mn></mrow></math>
\`\`\`



وهذا يطابق خانة واحدة من خانات التزاوج الثماني.
:::

:::exam-question
id: bio-q-p068-q5-1
title: تصنيف الأسئلة، السؤال 5، الفرع 1، صفحة 68
question: السؤال 5، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في أحد أنواع الكلاب اللون البني (B) سائد على اللون الأبيض (b) والأذن الطويلة (T) تسود على الأذن القصيرة (t). حدث تزاوج بين ذكر بني اللون قصير الأذن مع أنثى بيضاء طويلة الأذن كلاهما متماثلة الجينات.

1- اكتب الطرز الجينية والشكلية والنسب المئوية لأفراد الجيل الأول.
solution:
البني سائد B والأبيض متنحٍ b؛ والطويل سائد T والقصير متنحٍ t. مع شرط تماثل الجينات يكون الذكر البني القصير BBtt، والأنثى البيضاء الطويلة bbTT.
الذكر ينتج Bt فقط، والأنثى bT فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>B</mi><mi>t</mi><mi>t</mi><mo>×</mo><mi>b</mi><mi>b</mi><mi>T</mi><mi>T</mi><mo>⇒</mo><mi>B</mi><mi>t</mi><mo>×</mo><mi>b</mi><mi>T</mi><mo>⇒</mo><mi>B</mi><mi>b</mi><mi>T</mi><mi>t</mi></mrow></math>
\`\`\`



جميع أفراد الجيل الأول BbTt بنسبة 100%؛ لوجود B و T يظهرون بنيي اللون طوال الأذن.
:::

:::exam-question
id: bio-q-p068-q5-2
title: تصنيف الأسئلة، السؤال 5، الفرع 2، صفحة 68
question: السؤال 5، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 68
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في أحد أنواع الكلاب اللون البني (B) سائد على اللون الأبيض (b) والأذن الطويلة (T) تسود على الأذن القصيرة (t). حدث تزاوج بين ذكر بني اللون قصير الأذن مع أنثى بيضاء طويلة الأذن كلاهما متماثلة الجينات.

2- كيف تبرهن أن أفراد الجيل الأول غير متماثلي الجينات؟
solution:
نعرف أولاً طراز الجيل الأول: الأبوان النقيان BBtt و bbTT يعطيان Bt و bT فقط؛ فيكون جميع النسل BbTt، ويظهر بنياً طويل الأذن لأن B و T سائدان.
لاختبار عدم نقاوته نزاوجه بأبيض قصير الأذن bbtt. المختبَر يعطي BT و Bt و bT و bt بالتوزيع المستقل، والمتنحي يعطي bt فقط.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>b</mi><mi>b</mi><mi>t</mi><mi>t</mi><mo>⇒</mo><mi>B</mi><mi>b</mi><mi>T</mi><mi>t</mi><mo separator="true">,</mo><mi>B</mi><mi>b</mi><mi>t</mi><mi>t</mi><mo separator="true">,</mo><mi>b</mi><mi>b</mi><mi>T</mi><mi>t</mi><mo separator="true">,</mo><mi>b</mi><mi>b</mi><mi>t</mi><mi>t</mi></mrow></math>
\`\`\`



تظهر أربعة طرز بنسبة 1:1:1:1؛ ظهور الأبيض والقصير يكشف حمل الفرد الأول للأليلين المتنحيين b و t، فيبرهن عدم نقاوته للصفتين.
:::

:::exam-question
id: bio-q-p069-q6-1
title: تصنيف الأسئلة، السؤال 6، الفرع 1، صفحة 69
question: السؤال 6، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تلقيح بين نبتتين ثم جمعت البذور وزرعت فكان أفراد الجيل الناتج كما يلي: 46 نبتة طويلة الساق ملساء البذور، 44 نبتة طويلة الساق مجعدة البذور، 15 نبتة قصيرة الساق ملساء البذور، 14 نبتة قصيرة الساق مجعدة البذور. فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t) وجين البذور الملساء (A) سائدة على جين البذور المجعدة (a)، اكتب ما يلي:

1- الطرز الجينية للأبوين.
solution:
T للطول السائد وt للقصر، وA للأملس السائد وa للمجعد.

نجمع الأفراد بحسب كل صفة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>طويل</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>44</mn><mo>=</mo><mn>90</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>قصير</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>15</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>29</mn></mrow></math>
\`\`\`



تقترب النسبة من3:1. ظهورtt يعني أن كلا الوالدين أعطىt؛ والنسبة3:1 هي المتوقعة منTt×Tt.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>أملس</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>15</mn><mo>=</mo><mn>61</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>مجعد</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>44</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>58</mn></mrow></math>
\`\`\`



تقترب النسبة من1:1؛ وهذا هو المتوقع منAa×aa: نصفAa أملس ونصفaa مجعد.

إذن، وفق النسب النظرية المقصودة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>T</mi><mi>t</mi></mrow></math>
\`\`\`



إذن **طرازا الأبوين AaTt وaaTt**، مع جواز تبديل ترتيبهما.

**المصدر:** الصفحات 24، 25، 26 من الكتاب.

:::

:::exam-question
id: bio-q-p069-q6-2
title: تصنيف الأسئلة، السؤال 6، الفرع 2، صفحة 69
question: السؤال 6، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تلقيح بين نبتتين ثم جمعت البذور وزرعت فكان أفراد الجيل الناتج كما يلي: 46 نبتة طويلة الساق ملساء البذور، 44 نبتة طويلة الساق مجعدة البذور، 15 نبتة قصيرة الساق ملساء البذور، 14 نبتة قصيرة الساق مجعدة البذور. فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t) وجين البذور الملساء (A) سائدة على جين البذور المجعدة (a)، اكتب ما يلي:

2- الطرز الشكلية للأبوين.
solution:
T للطول السائد وt للقصر، وA للأملس السائد وa للمجعد.

نجمع الأفراد بحسب كل صفة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>طويل</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>44</mn><mo>=</mo><mn>90</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>قصير</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>15</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>29</mn></mrow></math>
\`\`\`



تقترب النسبة من3:1. ظهورtt يعني أن كلا الوالدين أعطىt؛ والنسبة3:1 هي المتوقعة منTt×Tt.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>أملس</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>15</mn><mo>=</mo><mn>61</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>مجعد</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>44</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>58</mn></mrow></math>
\`\`\`



تقترب النسبة من1:1؛ وهذا هو المتوقع منAa×aa: نصفAa أملس ونصفaa مجعد.

إذن، وفق النسب النظرية المقصودة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>T</mi><mi>t</mi></mrow></math>
\`\`\`



وجودA يكفي للأملس وT يكفي للطول؛ لذلك **الأول طويل الساق أملس البذور، والثاني طويل الساق مجعد البذور**.

**المصدر:** الصفحات 24، 25، 26 من الكتاب.

:::

:::exam-question
id: bio-q-p069-q6-3
title: تصنيف الأسئلة، السؤال 6، الفرع 3، صفحة 69
question: السؤال 6، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تلقيح بين نبتتين ثم جمعت البذور وزرعت فكان أفراد الجيل الناتج كما يلي: 46 نبتة طويلة الساق ملساء البذور، 44 نبتة طويلة الساق مجعدة البذور، 15 نبتة قصيرة الساق ملساء البذور، 14 نبتة قصيرة الساق مجعدة البذور. فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t) وجين البذور الملساء (A) سائدة على جين البذور المجعدة (a)، اكتب ما يلي:

3- الطرز الجينية لأنواع غاميتات الأبوين.
solution:
T للطول السائد وt للقصر، وA للأملس السائد وa للمجعد.

نجمع الأفراد بحسب كل صفة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>طويل</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>44</mn><mo>=</mo><mn>90</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>قصير</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>15</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>29</mn></mrow></math>
\`\`\`



تقترب النسبة من3:1. ظهورtt يعني أن كلا الوالدين أعطىt؛ والنسبة3:1 هي المتوقعة منTt×Tt.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>أملس</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>15</mn><mo>=</mo><mn>61</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>مجعد</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>44</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>58</mn></mrow></math>
\`\`\`



تقترب النسبة من1:1؛ وهذا هو المتوقع منAa×aa: نصفAa أملس ونصفaa مجعد.

إذن، وفق النسب النظرية المقصودة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>T</mi><mi>t</mi></mrow></math>
\`\`\`



يحمل الغاميت أليلاً واحداً من كل زوج.

فيAaTt نزاوجA أوa بكل منT أوt؛ فتكون الأنواع **AT وAt وaT وat**.

فيaaTt يثبتa؛ فتكون الأنواع **aT وat**.

هذه الأنواع متساوية الاحتمال لكل والد عند التوزيع المستقل.

**المصدر:** الصفحات 24، 25، 26 من الكتاب.

:::

:::exam-question
id: bio-q-p069-q6-4
title: تصنيف الأسئلة، السؤال 6، الفرع 4، صفحة 69
question: السؤال 6، الفرع 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
أجري تلقيح بين نبتتين ثم جمعت البذور وزرعت فكان أفراد الجيل الناتج كما يلي: 46 نبتة طويلة الساق ملساء البذور، 44 نبتة طويلة الساق مجعدة البذور، 15 نبتة قصيرة الساق ملساء البذور، 14 نبتة قصيرة الساق مجعدة البذور. فإذا علمت أن جين طول الساق (T) سائد على جين قصر الساق (t) وجين البذور الملساء (A) سائدة على جين البذور المجعدة (a)، اكتب ما يلي:

4- احتمال ظهور نباتات طويلة الساق مجعدة البذور في الجيل الناتج.
solution:
T للطول السائد وt للقصر، وA للأملس السائد وa للمجعد.

نجمع الأفراد بحسب كل صفة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>طويل</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>44</mn><mo>=</mo><mn>90</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>قصير</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>15</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>29</mn></mrow></math>
\`\`\`



تقترب النسبة من3:1. ظهورtt يعني أن كلا الوالدين أعطىt؛ والنسبة3:1 هي المتوقعة منTt×Tt.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>أملس</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>46</mn><mo>+</mo><mn>15</mn><mo>=</mo><mn>61</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo stretchy="false">(</mo><mtext>مجعد</mtext><mo stretchy="false">)</mo><mo>=</mo><mn>44</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>58</mn></mrow></math>
\`\`\`



تقترب النسبة من1:1؛ وهذا هو المتوقع منAa×aa: نصفAa أملس ونصفaa مجعد.

إذن، وفق النسب النظرية المقصودة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>T</mi><mi>t</mi></mrow></math>
\`\`\`



المطلوب طويل مجعد.

فيTt×Tt يظهر الطول بوجودT في3من4؛ وفيAa×aa يكون النصفaa مجعداً.

نضرب الاحتمالين لاستقلال الصفتين. نرمز إلى الطويل بـT-؛ أي وجودT مع أي أليل آخر، وإلى المجعد بـaa:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>T</mi><mo>−</mo><mi>a</mi><mi>a</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac></mrow></math>
\`\`\`



إذن الاحتمال **3/8**.

**المصدر:** الصفحات 24، 25، 26 من الكتاب.

:::

:::exam-question
id: bio-q-p069-q7
title: تصنيف الأسئلة، السؤال 7، صفحة 69
question: السؤال 7
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
فسر: لا نلجأ للتلقيح التجريبي في حالة الصفات المتنحية.
solution:
في السيادة التامة لا تظهر الصفة المتنحية إلا إذا كان الأليلان متنحيين؛ فالمظهر المتنحي يكشف طرازه الجيني مباشرة، مثل aa.
أما صاحب الصفة السائدة فقد يكون AA أو Aa، لذلك يُلقح مع aa لكشف ما إذا كان يحمل الأليل المتنحي.
لهذا لا نحتاج التلقيح التجريبي لمعرفة نقاوة الفرد المتنحي في هذا النموذج.
:::

:::exam-question
id: bio-q-p069-q8
title: تصنيف الأسئلة، السؤال 8، صفحة 69
question: السؤال 8
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحتا PDF 69 و72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بالتلقيح التجريبي؟
solution:
**الإجابة:** تلقيح الفرد ذي الصفة السائدة مجهول النقاوة بفرد متنحٍّ نقي؛ تكشف نتائج النسل طرازه الجيني.

**الشاهد من الكتاب:**

> إجراء تلقيح بين الفرد السائد مجهول النقاوة وفرد يحمل الصفة المتنحية

**المصدر:** صفحة 48 من الكتاب.



:::

:::exam-question
id: bio-q-p069-q9-1
title: تصنيف الأسئلة، السؤال 9، الفرع 1، صفحة 69
question: السؤال 9، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تم تلقيح نبتتي بازيلاء إحداهما طويلة الساق حمراء الأزهار غير نقية للصفتين، والأخرى غير معروفة الطراز الشكلي، فكانت نسب أفراد الجيل الأول كالتالي: (4) طويلة بيضاء، (12) طويلة حمراء، (4) قصيرة بيضاء، (12) قصيرة حمراء. فإذا علمت أن جين اللون الأحمر (R) سائد على جين اللون الأبيض (r)، وأن جين طول الساق (T) سائد على جين قصر الساق (t).

1- ما الطراز الجيني والشكلي للنبات المجهول؟
solution:
النبات الأول طويل أحمر غير نقي للصفتين، إذن TtRr؛ فالطول T والأحمر R سائدان.
نحسب النسب المنفصلة: الطويل



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>16</mn></mrow></math>
\`\`\`



، والقصير



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>16</mn></mrow></math>
\`\`\`



؛ نسبة 1:1 مع Tt تدل على أن المجهول tt.
الأحمر



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>12</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>24</mn></mrow></math>
\`\`\`



، والأبيض



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>8</mn></mrow></math>
\`\`\`



؛ نسبة 3:1 مع Rr تدل على أن المجهول Rr.
إذن طراز النبات المجهول ttRr، فيظهر قصير الساق أحمر الأزهار.
تتفق النتيجة مع تزاوج TtRr مع ttRr؛ غاميتات المجهول tR و tr.
:::

:::exam-question
id: bio-q-p069-q9-2
title: تصنيف الأسئلة، السؤال 9، الفرع 2، صفحة 69
question: السؤال 9، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تم تلقيح نبتتي بازيلاء إحداهما طويلة الساق حمراء الأزهار غير نقية للصفتين، والأخرى غير معروفة الطراز الشكلي، فكانت نسب أفراد الجيل الأول كالتالي: (4) طويلة بيضاء، (12) طويلة حمراء، (4) قصيرة بيضاء، (12) قصيرة حمراء. فإذا علمت أن جين اللون الأحمر (R) سائد على جين اللون الأبيض (r)، وأن جين طول الساق (T) سائد على جين قصر الساق (t).

2- ما الطراز الجيني لغاميتات الأبوين؟
solution:
الأول غير نقي للطول والأحمر، فهو TtRr. نسبة الطويل إلى القصير 16:16 تجعل المجهول tt، ونسبة الأحمر إلى الأبيض 24:8 تجعله Rr؛ إذن المجهول ttRr.
كل غاميت يحمل أليلاً واحداً لكل جين. في الأول نقرن T أو t بكل من R أو r:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>R</mi><mo separator="true">,</mo><mi>T</mi><mi>r</mi><mo separator="true">,</mo><mi>t</mi><mi>R</mi><mo separator="true">,</mo><mi>t</mi><mi>r</mi></mrow></math>
\`\`\`



في الثاني يثبت t ويُختار R أو r:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mi>R</mi><mo separator="true">,</mo><mi>t</mi><mi>r</mi></mrow></math>
\`\`\`



الأنواع متساوية لكل والد بالتوزيع المستقل.
:::

:::exam-question
id: bio-q-p069-q10-1
title: تصنيف الأسئلة، السؤال 10، الفرع 1، صفحة 69
question: السؤال 10، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في نبات البازيلاء صفة الأزهار المحورية A سائدة على الطرفية a، وصفة الساق الطويلة T سائدة على القصيرة t، وصفة لون القرون الخضراء G سائدة على الصفراء g. أجري تلقيح بين نباتين أحدهما محوري الأزهار قصير الساق أخضر القرون، أما الآخر فهو محوري الأزهار طويل الساق وأصفر القرون، فكانت الأفراد الناتجة بالطرز والأعداد الآتية: (149) محوري الأزهار طويل الساق أخضر القرون؛ (152) محوري الأزهار قصير الساق أخضر القرون؛ (49) طرفي الأزهار طويل الساق أخضر القرون؛ (48) طرفي الأزهار قصير الساق أخضر القرون.

1- اكتب الطرز الجينية للنباتين الأبوين.
solution:
A للمحوري السائد، T للطول السائد، G للأخضر السائد. نفصل الأعداد لكل صفة.
محوري



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>149</mn><mo>+</mo><mn>152</mn><mo>=</mo><mn>301</mn></mrow></math>
\`\`\`



 مقابل طرفي



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>49</mn><mo>+</mo><mn>48</mn><mo>=</mo><mn>97</mn></mrow></math>
\`\`\`



، أي نحو 3:1؛ وكلا الأبوين محوري، فيكونان Aa و Aa.
طويل



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>149</mn><mo>+</mo><mn>49</mn><mo>=</mo><mn>198</mn></mrow></math>
\`\`\`



 مقابل قصير



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>152</mn><mo>+</mo><mn>48</mn><mo>=</mo><mn>200</mn></mrow></math>
\`\`\`



، أي نحو 1:1؛ الأول القصير tt والثاني الطويل Tt.
جميع النسل أخضر، والوالد الثاني أصفر gg؛ وفق النسبة النظرية الكاملة يكون الأول GG، فيعطي G لكل الأبناء.
إذن طرازا الأبوين بحسب ترتيب السؤال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>t</mi><mi>t</mi><mi>G</mi><mi>G</mi><mo>×</mo><mi>A</mi><mi>a</mi><mi>T</mi><mi>t</mi><mi>g</mi><mi>g</mi></mrow></math>
\`\`\`



هنا استُدل بالنسب النظرية المقصودة من عينة كبيرة؛ النسب العددية ليست مساواة مطلقة.
:::

:::exam-question
id: bio-q-p069-q10-2
title: تصنيف الأسئلة، السؤال 10، الفرع 2، صفحة 69
question: السؤال 10، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في نبات البازيلاء صفة الأزهار المحورية A سائدة على الطرفية a، وصفة الساق الطويلة T سائدة على القصيرة t، وصفة لون القرون الخضراء G سائدة على الصفراء g. أجري تلقيح بين نباتين أحدهما محوري الأزهار قصير الساق أخضر القرون، أما الآخر فهو محوري الأزهار طويل الساق وأصفر القرون، فكانت الأفراد الناتجة بالطرز والأعداد الآتية: (149) محوري الأزهار طويل الساق أخضر القرون؛ (152) محوري الأزهار قصير الساق أخضر القرون؛ (49) طرفي الأزهار طويل الساق أخضر القرون؛ (48) طرفي الأزهار قصير الساق أخضر القرون.

2- اكتب الطرز الجينية لأنواع غاميتات الأبوين.
solution:
يحمل الغاميت أليلاً واحداً من كل جين. نحدد طراز كل أب أولاً من نسب صفات النسل.
عدد المحوريين:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>149</mn><mo>+</mo><mn>152</mn><mo>=</mo><mn>301</mn></mrow></math>
\`\`\`


عدد الطرفيين:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>49</mn><mo>+</mo><mn>48</mn><mo>=</mo><mn>97</mn></mrow></math>
\`\`\`


النسبة تقارب3:1، فتوافق تزاوجAa×Aa في النموذج المنهجي.
الطويل مقابل القصير:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>149</mn><mo>+</mo><mn>49</mn><mo>=</mo><mn>198</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>152</mn><mo>+</mo><mn>48</mn><mo>=</mo><mn>200</mn></mrow></math>
\`\`\`


النسبة تقارب1:1، فتوافقTt×tt. الأب الأول قصير، فهوtt والثانيTt.
كل النسل أخضر مع أب أصفرgg؛ لذلك الأخضرGG وفق النموذج المقصود.
إذن الأبوان:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>t</mi><mi>t</mi><mi>G</mi><mi>G</mi><mo>×</mo><mi>A</mi><mi>a</mi><mi>T</mi><mi>t</mi><mi>g</mi><mi>g</mi></mrow></math>
\`\`\`


الأول يعطيt وG دائماً، ويتغيرA أوa؛ فغاميتاهAtG وatG.
الثاني يعطيg دائماً، ونجمعA أوa معT أوt بالتوزيع المستقل؛ فأنواعهATg وAtg وaTg وatg.

**المصدر:** الصفحات 24، 25، 26 من الكتاب.

:::

:::exam-question
id: bio-q-p069-q10-3
title: تصنيف الأسئلة، السؤال 10، الفرع 3، صفحة 69
question: السؤال 10، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 69
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في نبات البازيلاء صفة الأزهار المحورية A سائدة على الطرفية a، وصفة الساق الطويلة T سائدة على القصيرة t، وصفة لون القرون الخضراء G سائدة على الصفراء g. أجري تلقيح بين نباتين أحدهما محوري الأزهار قصير الساق أخضر القرون، أما الآخر فهو محوري الأزهار طويل الساق وأصفر القرون، فكانت الأفراد الناتجة بالطرز والأعداد الآتية: (149) محوري الأزهار طويل الساق أخضر القرون؛ (152) محوري الأزهار قصير الساق أخضر القرون؛ (49) طرفي الأزهار طويل الساق أخضر القرون؛ (48) طرفي الأزهار قصير الساق أخضر القرون.

3- اكتب الطرز الجينية للنباتات التي طرزها الشكلية (محورية الأزهار قصيرة الساق خضراء القرون).
solution:
نشتق الأبوين من الأعداد: محوري 301 إلى طرفي 97 يقارب 3:1 فيدل على Aa مع Aa؛ طويل 198 إلى قصير 200 يقارب 1:1، فيدل على tt مع Tt؛ وكل النسل أخضر مع والد gg فيدل في النموذج على GG مع gg.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>t</mi><mi>t</mi><mi>G</mi><mi>G</mi><mo>×</mo><mi>A</mi><mi>a</mi><mi>T</mi><mi>t</mi><mi>g</mi><mi>g</mi></mrow></math>
\`\`\`



المحوري يحتاج A واحداً على الأقل، فيمكن AA أو Aa. القصر يحتاج tt، وكل النسل من زوج اللون Gg.
إذن الطرازان الموافقان لمحوري قصير أخضر هما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>A</mi><mi>t</mi><mi>t</mi><mi>G</mi><mi>g</mi><mo separator="true">,</mo><mi>A</mi><mi>a</mi><mi>t</mi><mi>t</mi><mi>G</mi><mi>g</mi></mrow></math>
\`\`\`



ولا يظهر AattGG مثلاً لأن الأب الأصفر لا يعطي G.
:::

:::exam-question
id: bio-q-p070-q11
title: تصنيف الأسئلة، السؤال 11، صفحة 70
question: السؤال 11
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 70
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك نبتة بازيلاء طويلة الساق، كيف تعرف فيما إذا كانت تحمل هذه الصفة بصورة نقية أم بصورة غير نقية؟
solution:
نرمز للطول السائد بـ T وللقصر بـ t. الطويل قد يكون TT أو Tt، فنلقحه اختبارياً بنبات قصير tt يقدم t فقط.
إذا كان الطويل TT فإنه يقدم T فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>T</mi><mo>×</mo><mi>t</mi><mi>t</mi><mo>⇒</mo><mi>T</mi><mi>t</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>100</mn><mi mathvariant="normal">%</mi><mo stretchy="false">)</mo></mrow></math>
\`\`\`



فيكون كل النسل طويلاً.
إذا كان الطويل Tt فإنه يقدم T أو t:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mo>×</mo><mi>t</mi><mi>t</mi><mo>⇒</mo><mi>T</mi><mi>t</mi><mo>:</mo><mi>t</mi><mi>t</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



ظهور نبات قصير يثبت عدم نقاوة الطويل. أما عدم ظهور القصير في عينة محدودة فلا يثبت النقاء يقيناً؛ نحتاج عدداً كافياً من النسل للاستدلال.
:::

:::exam-question
id: bio-q-p070-q12-1
title: تصنيف الأسئلة، السؤال 12، الفرع 1، صفحة 70
question: السؤال 12، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 70
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تزاوج بين أنواع من القطط حسب الجدول المرفق، إذا علمت أن اللون الأسود (B) سائد على الأبيض (b) والذيل الطويل (T) سائد على الذيل القصير (t).

| الغاميتات | BT | 1 | bT | bt |
|---|---|---|---|---|
| Bt | 2 | BBtt | | |
| bt | 3 | | 4 | |

1- اكتب الطرز الجينية للأرقام (1، 2، 4).
solution:
نستعمل قاعدة اجتماع أليل من غاميت الصف مع أليل من غاميت العمود.
الخانة BBtt نتجت من Bt مع الغاميت 1، فيجب أن يكون 1 هو Bt أيضاً.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo>:</mo><mi>B</mi><mi>t</mi><mo>×</mo><mi>B</mi><mi>T</mi><mo>⇒</mo><mi>B</mi><mi>B</mi><mi>T</mi><mi>t</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo>:</mo><mi>b</mi><mi>t</mi><mo>×</mo><mi>b</mi><mi>T</mi><mo>⇒</mo><mi>b</mi><mi>b</mi><mi>T</mi><mi>t</mi></mrow></math>
\`\`\`



إذن 1: Bt، و 2: BBTt، و 4: bbTt. الغاميت يحمل أليلاً واحداً لكل جين، بينما أفراد الخانات يحملون زوجين.
:::

:::exam-question
id: bio-q-p070-q12-2
title: تصنيف الأسئلة، السؤال 12، الفرع 2، صفحة 70
question: السؤال 12، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 70
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تزاوج بين أنواع من القطط حسب الجدول المرفق، إذا علمت أن اللون الأسود (B) سائد على الأبيض (b) والذيل الطويل (T) سائد على الذيل القصير (t).

| الغاميتات | BT | 1 | bT | bt |
|---|---|---|---|---|
| Bt | 2 | BBtt | | |
| bt | 3 | | 4 | |

2- ما الطراز الشكلي للأبوين؟
solution:
نحدد طراز كل والد من أنواع غاميتاته. الأعمدة هي BT و Bt و bT و bt، فيكون صاحبها BbTt. الصفان Bt و bt يثبتان t ويغيران B إلى b، فيكون صاحبهما Bbtt.
B للأسود السائد و T للطويل السائد؛ لذلك BbTt أسود طويل الذيل، و Bbtt أسود قصير الذيل.
إذن الطرازان الشكليان: أسود طويل الذيل مع أسود قصير الذيل.
:::

:::exam-question
id: bio-q-p070-q12-3
title: تصنيف الأسئلة، السؤال 12، الفرع 3، صفحة 70
question: السؤال 12، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 70
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تزاوج بين أنواع من القطط حسب الجدول المرفق، إذا علمت أن اللون الأسود (B) سائد على الأبيض (b) والذيل الطويل (T) سائد على الذيل القصير (t).

| الغاميتات | BT | 1 | bT | bt |
|---|---|---|---|---|
| Bt | 2 | BBtt | | |
| bt | 3 | | 4 | |

3- ما الطراز الجيني للأبوين؟
solution:
الغاميت ينقل أليلاً واحداً لكل جين. غاميتات الأعمدة BT و Bt و bT و bt تكشف وجود B و b و T و t في والد واحد، فيكون BbTt.
غاميتا الصفوف Bt و bt تكشفان وجود B و b وثبات t، فيكون الآخر Bbtt.
إذن التزاوج:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>B</mi><mi>b</mi><mi>t</mi><mi>t</mi></mrow></math>
\`\`\`



ويؤكد ذلك أن تقاطع Bt مع Bt في الجدول يعطي BBtt.
:::

:::exam-question
id: bio-q-p070-q12-4
title: تصنيف الأسئلة، السؤال 12، الفرع 4، صفحة 70
question: السؤال 12، الفرع 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 70
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تزاوج بين أنواع من القطط حسب الجدول المرفق، إذا علمت أن اللون الأسود (B) سائد على الأبيض (b) والذيل الطويل (T) سائد على الذيل القصير (t).

| الغاميتات | BT | 1 | bT | bt |
|---|---|---|---|---|
| Bt | 2 | BBtt | | |
| bt | 3 | | 4 | |

4- ما احتمال إنتاج أفراد تمتلك الطراز الشكلي للفرد رقم 3؟
solution:
من غاميتات الجدول نعرف الأبوين BbTt و Bbtt. الخانة 3 تجمع bt من الصف مع BT من العمود، فيكون طرازها BbTt، أي أسود طويل الذيل لأن B و T سائدان.
نحتاج ظهور الصفتين معاً، لا الطراز الجيني نفسه فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mo>×</mo><mi>t</mi><mi>t</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>T</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



بالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>b</mi><mi>l</mi><mi>a</mi><mi>c</mi><mi>k</mi><mo separator="true">,</mo><mi>l</mi><mi>o</mi><mi>n</mi><mi>g</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>8</mn></mrow></math>
\`\`\`



إذن احتمال أفراد يشبهون 3 شكلياً3/8.
:::

:::exam-question
id: bio-q-p070-q13-1
title: تصنيف الأسئلة، السؤال 13، الفرع 1، صفحة 70
question: السؤال 13، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 70
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في أحد أنواع النباتات العشبية المزهرة في جبال فلسطين يسود جين صفة الحواف الملساء للأوراق (M) على جين الحواف المسننة للأوراق (m)، ويسود جين لون الأزهار الأرجواني (G) على جين لون الأزهار الأبيض (g). فإذا أجري تلقيح بين نبات حواف أوراقه مسننة أرجواني الأزهار مع آخر مجهول الطراز الشكلي كان النسل الناتج كما يأتي: 12 نبات حواف أوراقه ملساء أرجواني الأزهار؛ 18 نبات حواف أوراقه مسننة أرجواني الأزهار؛ 20 نبات حواف أوراقه ملساء أبيض الأزهار؛ 12 نبات حواف أوراقه مسننة أبيض الأزهار.

1- ما الطراز الشكلي للنبات المجهول (للصفتين معاً)؟
solution:
M للأوراق الملساء السائدة و G للأرجواني السائد. النبات المعروف مسنن، فيكون mm، وهو أرجواني وظهر نسل أبيض gg؛ لذا يحمل g ويكون mmGg.
مجموع الملساء



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>12</mn><mo>+</mo><mn>20</mn><mo>=</mo><mn>32</mn></mrow></math>
\`\`\`



، والمسننة



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>18</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>30</mn></mrow></math>
\`\`\`



؛ نسبة تقارب 1:1 مع mm تدل على أن المجهول Mm.
الأرجواني



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>12</mn><mo>+</mo><mn>18</mn><mo>=</mo><mn>30</mn></mrow></math>
\`\`\`



، والأبيض



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>20</mn><mo>+</mo><mn>12</mn><mo>=</mo><mn>32</mn></mrow></math>
\`\`\`



؛ نسبة تقارب 1:1 مع Gg تدل على أن المجهول gg.
إذن المجهول Mmgg: حواف أوراقه ملساء وأزهاره بيضاء.
غاميتا المعروف mG و mg، وغاميتا المجهول Mg و mg؛ فتتوقع أربعة أصناف متساوية تقريباً.
:::

:::exam-question
id: bio-q-p070-q13-2
title: تصنيف الأسئلة، السؤال 13، الفرع 2، صفحة 70
question: السؤال 13، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 70
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في أحد أنواع النباتات العشبية المزهرة في جبال فلسطين يسود جين صفة الحواف الملساء للأوراق (M) على جين الحواف المسننة للأوراق (m)، ويسود جين لون الأزهار الأرجواني (G) على جين لون الأزهار الأبيض (g). فإذا أجري تلقيح بين نبات حواف أوراقه مسننة أرجواني الأزهار مع آخر مجهول الطراز الشكلي كان النسل الناتج كما يأتي: 12 نبات حواف أوراقه ملساء أرجواني الأزهار؛ 18 نبات حواف أوراقه مسننة أرجواني الأزهار؛ 20 نبات حواف أوراقه ملساء أبيض الأزهار؛ 12 نبات حواف أوراقه مسننة أبيض الأزهار.

2- ما الطرز الجينية لنباتات النسل الناتج (للصفتين معاً)؟
solution:
المعروف مسنن mm وأرجواني؛ ووجود أبيض يجعله Gg. نسبة الملساء 32 إلى المسننة 30 تقارب 1:1، فيكون المجهول Mm؛ ونسبة الأرجواني 30 إلى الأبيض 32 تقارب 1:1، فيكون المجهول gg.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>m</mi><mi>G</mi><mi>g</mi><mo>×</mo><mi>M</mi><mi>m</mi><mi>g</mi><mi>g</mi></mrow></math>
\`\`\`



الأول يعطي mG و mg، والثاني Mg و mg. نجمع الغاميتات في كل احتمال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>G</mi><mo>×</mo><mi>M</mi><mi>g</mi><mo>⇒</mo><mi>M</mi><mi>m</mi><mi>G</mi><mi>g</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>G</mi><mo>×</mo><mi>m</mi><mi>g</mi><mo>⇒</mo><mi>m</mi><mi>m</mi><mi>G</mi><mi>g</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>×</mo><mi>M</mi><mi>g</mi><mo>⇒</mo><mi>M</mi><mi>m</mi><mi>g</mi><mi>g</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>g</mi><mo>×</mo><mi>m</mi><mi>g</mi><mo>⇒</mo><mi>m</mi><mi>m</mi><mi>g</mi><mi>g</mi></mrow></math>
\`\`\`



إذن هذه الطرز الجينية الأربعة للنسل، وكل منها ربع نظرياً بالتوزيع المستقل.
:::

:::mcq
id: bio-q-p071-q1
title: تصنيف الأسئلة، السؤال 1، صفحة 71
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 71
question: إذا تزاوج فردان، الطراز الجيني للأول AaBbCc والطراز الجيني للثاني aaBbCc، فما عدد أنواع الطرز الشكلية المحتملة لأفراد الجيل الأول؟
- [ ] option-1 | أ. (2)
- [ ] option-2 | ب. (4)
- [ ] option-3 | ج. (6)
- [x] option-4 | د. (8)
explanation:
في الوراثة المندلية ذات السيادة التامة نعد المظهر السائد والمتنحي لكل موضع، ثم نضرب أعداد المظاهر المستقلة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>a</mi><mi>a</mi><mo>⇒</mo><mi>A</mi><mo>−</mo><mtext> </mtext><mi>o</mi><mi>r</mi><mtext> </mtext><mi>a</mi><mi>a</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>B</mi><mo>−</mo><mtext> </mtext><mi>o</mi><mi>r</mi><mtext> </mtext><mi>b</mi><mi>b</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><mi>c</mi><mo>×</mo><mi>C</mi><mi>c</mi><mo>⇒</mo><mi>C</mi><mo>−</mo><mtext> </mtext><mi>o</mi><mi>r</mi><mtext> </mtext><mi>c</mi><mi>c</mi><mspace width="1em"/><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`



الشرطة تعني أن وجود الأليل الكبير يكفي للمظهر السائد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>=</mo><mn>8</mn></mrow></math>
\`\`\`



إذن د. اختلاف BB عن Bb يزيد الطرز الجينية، لكنه لا يزيد المظاهر هنا.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p071-q2
title: تصنيف الأسئلة، السؤال 2، صفحة 71
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 71
question: تم إجراء تلقيح بين فردين طرازهما الجيني (TtbbGg) و(TtBbGg)، ما احتمال إنتاج فرد طرازه الجيني (TTBbgg)؟
- [ ] option-1 | أ. 1/4
- [ ] option-2 | ب. 1/8
- [ ] option-3 | ج. 1/16
- [x] option-4 | د. 1/32
explanation:
المطلوب TTBbgg من الأبوين TtbbGg و TtBbGg. كل غاميت يعطي أليلاً لكل موضع، فنحسب الاحتمالات المنفصلة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mo>×</mo><mi>T</mi><mi>t</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>T</mi><mi>T</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>b</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>G</mi><mi>g</mi><mo>×</mo><mi>G</mi><mi>g</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>g</mi><mi>g</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`



الجينات مستقلة في نموذج المسألة، لذا احتمال اجتماع الطرز:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>T</mi><mi>T</mi><mi>B</mi><mi>b</mi><mi>g</mi><mi>g</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>32</mn></mrow></math>
\`\`\`



إذن د.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p071-q3
title: تصنيف الأسئلة، السؤال 3، صفحة 71
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 71
question: لعائلة ثلاثة أطفال، ما احتمال أن يكون الأول ذكراً والثاني أنثى والثالث ذكراً؟
- [x] option-1 | أ. 1/8
- [ ] option-2 | ب. 1/4
- [ ] option-3 | ج. 1/2
- [ ] option-4 | د. 1
explanation:
الأم تعطي بويضة X، والأب يعطي حيواناً منوياً X أو Y؛ لذلك نفترض احتمال ذكر 1/2 واحتمال أنثى 1/2 في كل ولادة.
الولادات مستقلة، والترتيب المطلوب محدد: ذكر ثم أنثى ثم ذكر؛ فنضرب احتمالات هذا المسار وحده:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>8</mn></mrow></math>
\`\`\`



إذن أ؛ لا نضيف ترتيبات أخرى لوجود ذكرين وأنثى لأنها غير مطلوبة.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p071-q4
title: تصنيف الأسئلة، السؤال 4، صفحة 71
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 71
question: كم عدد أنواع الغاميتات التي ينتجها فرد بالتركيب الجيني (AaBbRR)؟
- [ ] option-1 | أ. (2)
- [x] option-2 | ب. (4)
- [ ] option-3 | ج. (6)
- [ ] option-4 | د. (8)
explanation:
الغاميت يحمل أليلاً واحداً من كل زوج. في AaBbRR يثبت R، بينما يعطي Aa اختيارين ويعطي Bb اختيارين.
بالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>2</mn><mo>×</mo><mn>1</mn><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`



الأنواع ABR و AbR و aBR و abR؛ فالاختيار ب.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p071-q5
title: تصنيف الأسئلة، السؤال 5، صفحة 71
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 71
question: أي من الآتية يعد من الطرز الجينية لغاميتات فرد يحمل التركيب الجيني (AaBbRR)؟
- [ ] option-1 | أ. (ABb)
- [ ] option-2 | ب. (ABr)
- [x] option-3 | ج. (abR)
- [ ] option-4 | د. (AaR)
explanation:
يجب أن يحمل الغاميت أليلاً واحداً من كل موضع. من Aa يمكن A أو a، ومن Bb يمكن B أو b، ومن RR لا يمكن إلا R.
إذن الأنواع الممكنة ABR و AbR و aBR و abR؛ ومن البدائل يوجد abR، وهو ج.
ABb يضم أليلين من موضع B ولا يحمل R، و AaR يضم أليلين من موضع A ولا يحمل B؛ و ABr يحتوي r غير الموجود في الوالد.
hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p072-q1a
title: تصنيف الأسئلة، السؤال 1a، صفحة 72
question: السؤال 1a
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود: قانون مندل الثاني (التوزيع المستقل).
solution:
**الإجابة:** إذا تزاوج فردان مختلفان في أكثر من زوج من الصفات المتضادة، فإن كل زوج من هذه الصفات يورث مستقلاً عن غيره من أزواج الصفات المتضادة الأخرى، عندما تنطبق شروط التوزيع المستقل.

**الشاهد من الكتاب:**

> وينص قانون مندل الثاني(التوزيع المستقل) على ما يأتي: إذا تزاوج فردان مختلفان في أكثر من زوج من الصفات المتضادة فإن كل زوج من هذه الصفات يورث مستقلاً عن غيره من أزواج الصفات المتضادة الأخرى.

**المصدر:** صفحة 25 من الكتاب.



:::


:::exam-question
id: bio-q-p072-q1b
title: تصنيف الأسئلة، السؤال 1b، صفحة 72
question: السؤال 1b
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح الدور الذي يؤديه التلقيح التجريبي.
solution:
يكشف التلقيح التجريبي هل الفرد ذو الصفة السائدة نقي أم غير نقي.

نزاوجه بمتنحٍّ نقيaa؛ فإذا أعطى نسلًا متنحيًا عرفنا أنه يحملa، أي إنهAa. أماAA×aa فيعطي نسلاً سائدًا كله في النسبة النظرية.

بهذا يمكن اختيار الأفراد النقية لإكثار الصفة المرغوبة؛ وهذه فائدة اقتصادية مستنتجة من وظيفة الاختبار.

**مثال الكتاب على الاختبار:**

> يمثل الشكل(8) تلقيح تجريبي لأفراد الجيل الأول(رمادي طبيعي الأجنحة مع أسود ضامر الأجنحة)، فظهر أفراد النسل بنسبة1:1 رمادي اللون طبيعي الأجنحة إلى أسود اللون ضامر الأجنحة.

**المصدر:** صفحة 34 من الكتاب.



:::

:::exam-question
id: bio-q-p072-q2-1
title: تصنيف الأسئلة، السؤال 2، الفرع 1، صفحة 72
question: السؤال 2، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في نبات البازيلاء الساق الطويلة (T) سائدة على الساق القصيرة (t)، والبذور الملساء (R) سائدة على المجعدة (r)، والأزهار المحورية (D) سائدة على الطرفية (d). أجري تلقيح بين نباتين أحدهما طويل أملس طرفي الأزهار مع آخر قصير أملس محوري الأزهار، فكان النسل الناتج: طويل ملساء محوري (151)، طويل ملساء طرفي (155)، طويل مجعد محوري (53)، طويل مجعد طرفي (50).

1- اكتب الطرز الجينية لكل من النباتين الأبوين.
solution:
T للطول و R للأملس و D للمحوري، وكلها سائدة. الأول طويل أملس طرفي، والثاني قصير أملس محوري.
جميع 409 أفراد النسل طوال، والأب الثاني tt؛ فيكون الأول TT في النسبة النظرية المقصودة، والنسل Tt.
الأملس



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>151</mn><mo>+</mo><mn>155</mn><mo>=</mo><mn>306</mn></mrow></math>
\`\`\`



، والمجعد



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>53</mn><mo>+</mo><mn>50</mn><mo>=</mo><mn>103</mn></mrow></math>
\`\`\`



؛ النسبة نحو 3:1، فتدل على Rr مع Rr.
المحوري



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>151</mn><mo>+</mo><mn>53</mn><mo>=</mo><mn>204</mn></mrow></math>
\`\`\`



، والطرفي



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>155</mn><mo>+</mo><mn>50</mn><mo>=</mo><mn>205</mn></mrow></math>
\`\`\`



؛ النسبة نحو 1:1، ومع الطرفي dd يكون المحوري Dd.
إذن بحسب ترتيب الأبوين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>T</mi><mi>R</mi><mi>r</mi><mi>d</mi><mi>d</mi><mo>×</mo><mi>t</mi><mi>t</mi><mi>R</mi><mi>r</mi><mi>D</mi><mi>d</mi></mrow></math>
\`\`\`



التوزيع المستقل لهذه الأزواج يفسر الأصناف الأربعة المعطاة.
:::

:::exam-question
id: bio-q-p072-q2-2
title: تصنيف الأسئلة، السؤال 2، الفرع 2، صفحة 72
question: السؤال 2، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في نبات البازيلاء الساق الطويلة (T) سائدة على الساق القصيرة (t)، والبذور الملساء (R) سائدة على المجعدة (r)، والأزهار المحورية (D) سائدة على الطرفية (d). أجري تلقيح بين نباتين أحدهما طويل أملس طرفي الأزهار مع آخر قصير أملس محوري الأزهار، فكان النسل الناتج: طويل ملساء محوري (151)، طويل ملساء طرفي (155)، طويل مجعد محوري (53)، طويل مجعد طرفي (50).

2- اكتب الطرز الجينية المتوقعة لأفراد النباتات ذات الطراز الشكلي طويل ملساء طرفي.
solution:
نستنتج الأبوين أولاً: جميع النسل طويل مع والد قصير tt فيجعل الآخر TT في النموذج؛ والأملس 306 مقابل المجعد 103 يقارب 3:1 فيجعل الأبوين Rr؛ والمحوري 204 مقابل الطرفي 205 يقارب 1:1 فيعطي dd مع Dd.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>T</mi><mi>R</mi><mi>r</mi><mi>d</mi><mi>d</mi><mo>×</mo><mi>t</mi><mi>t</mi><mi>R</mi><mi>r</mi><mi>D</mi><mi>d</mi></mrow></math>
\`\`\`



الطول في النسل Tt دائماً. الأملس يمكن RR أو Rr لأن R سائد. الطرفي لا يكون إلا dd.
إذن الطرازان الموافقان لطويل أملس طرفي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mi>R</mi><mi>R</mi><mi>d</mi><mi>d</mi><mo separator="true">,</mo><mi>T</mi><mi>t</mi><mi>R</mi><mi>r</mi><mi>d</mi><mi>d</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: bio-q-p072-q2-3
title: تصنيف الأسئلة، السؤال 2، الفرع 3، صفحة 72
question: السؤال 2، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في نبات البازيلاء الساق الطويلة (T) سائدة على الساق القصيرة (t)، والبذور الملساء (R) سائدة على المجعدة (r)، والأزهار المحورية (D) سائدة على الطرفية (d). أجري تلقيح بين نباتين أحدهما طويل أملس طرفي الأزهار مع آخر قصير أملس محوري الأزهار، فكان النسل الناتج: طويل ملساء محوري (151)، طويل ملساء طرفي (155)، طويل مجعد محوري (53)، طويل مجعد طرفي (50).

3- اكتب الطرز الجينية المتوقعة لأفراد النباتات ذات الطراز الشكلي طويل مجعد محوري.
solution:
نستنتج طراز الأبوين قبل تحديد طراز النسل المطلوب.
كل النسل طويل مع أب قصيرtt؛ لذلك الطويلTT في النموذج المنهجي، والنسل كلهTt.
عدد الأملس والمجعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>151</mn><mo>+</mo><mn>155</mn><mo>=</mo><mn>306</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>53</mn><mo>+</mo><mn>50</mn><mo>=</mo><mn>103</mn></mrow></math>
\`\`\`


تقارب النسبة3:1، فتوافقRr×Rr.
عدد المحوري والطرفي:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>151</mn><mo>+</mo><mn>53</mn><mo>=</mo><mn>204</mn></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>155</mn><mo>+</mo><mn>50</mn><mo>=</mo><mn>205</mn></mrow></math>
\`\`\`


تقارب النسبة1:1، فتوافقDd×dd؛ والطرفي المعطىdd.
إذن الأبوان:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>T</mi><mi>R</mi><mi>r</mi><mi>d</mi><mi>d</mi><mo>×</mo><mi>t</mi><mi>t</mi><mi>R</mi><mi>r</mi><mi>D</mi><mi>d</mi></mrow></math>
\`\`\`


المطلوب طويل مجعد محوري. كل النسلTt، والمجعدrr، والمحوريDd حصراً لأن الأب الطرفي لا يعطي إلاd.
إذن الطراز المطلوب:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>T</mi><mi>t</mi><mi>r</mi><mi>r</mi><mi>D</mi><mi>d</mi></mrow></math>
\`\`\`



**المصدر:** الصفحات 24، 25، 26 من الكتاب.

:::

:::exam-question
id: bio-q-p072-q3-1
title: تصنيف الأسئلة، السؤال 3، الفرع 1، صفحة 72
question: السؤال 3، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في أحد أنواع النباتات النادرة يسود جين الحواف المتعرجة للأوراق (D) على جين الحواف المنشارية للأوراق (d)، ويسود جين لون الأزهار الأصفر (R) على جين لون الأزهار الأبيض (r). إذا نقلت حبوب لقاح من نبات مجهول الطراز الجيني والطراز الشكلي إلى مياسم أزهار نبات حواف أوراقه متعرجة صفراء الأزهار، فنتجت نباتات بالأعداد والصفات الآتية: (46) نباتاً حواف أوراقه متعرجة أصفر الأزهار؛ (44) نباتاً حواف أوراقه متعرجة أبيض الأزهار؛ (15) نباتاً حواف أوراقه منشارية أصفر الأزهار؛ (14) نباتاً حواف أوراقه منشارية أبيض الأزهار.

1- اكتب الطراز الشكلي للنبات المجهول.
solution:
D للمتعرج السائد و R للأصفر السائد. نجمع المظاهر لكل صفة:
المتعرج



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>46</mn><mo>+</mo><mn>44</mn><mo>=</mo><mn>90</mn></mrow></math>
\`\`\`



، والمنشاري



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>15</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>29</mn></mrow></math>
\`\`\`



؛ النسبة تقارب 3:1، فتوافق Dd مع Dd، فيكون المجهول متعرجاً.
الأصفر



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>46</mn><mo>+</mo><mn>15</mn><mo>=</mo><mn>61</mn></mrow></math>
\`\`\`



، والأبيض



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>44</mn><mo>+</mo><mn>14</mn><mo>=</mo><mn>58</mn></mrow></math>
\`\`\`



؛ النسبة تقارب 1:1، فتوافق Rr مع rr. ولأن النبات المعروف أصفر Rr، فالمجهول أبيض rr.
إذن المجهول Ddrr: حواف أوراقه متعرجة وأزهاره بيضاء.
:::

:::exam-question
id: bio-q-p072-q3-2
title: تصنيف الأسئلة، السؤال 3، الفرع 2، صفحة 72
question: السؤال 3، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في أحد أنواع النباتات النادرة يسود جين الحواف المتعرجة للأوراق (D) على جين الحواف المنشارية للأوراق (d)، ويسود جين لون الأزهار الأصفر (R) على جين لون الأزهار الأبيض (r). إذا نقلت حبوب لقاح من نبات مجهول الطراز الجيني والطراز الشكلي إلى مياسم أزهار نبات حواف أوراقه متعرجة صفراء الأزهار، فنتجت نباتات بالأعداد والصفات الآتية: (46) نباتاً حواف أوراقه متعرجة أصفر الأزهار؛ (44) نباتاً حواف أوراقه متعرجة أبيض الأزهار؛ (15) نباتاً حواف أوراقه منشارية أصفر الأزهار؛ (14) نباتاً حواف أوراقه منشارية أبيض الأزهار.

2- اكتب الطرز الجينية للأبوين.
solution:
ظهور منشارية dd من أبوين يعطي أحدهما المظهر المتعرج، مع نسبة 90 متعرج إلى 29 منشاري، يوافق Dd مع Dd.
ونسبة 61 أصفر إلى 58 أبيض تقارب 1:1؛ وبما أن النبات المعروف أصفر يكون Rr، والمجهول rr.
إذن طراز النبات المعروف DdRr، وطراز النبات المجهول Ddrr:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>d</mi><mi>R</mi><mi>r</mi><mo>×</mo><mi>D</mi><mi>d</mi><mi>r</mi><mi>r</mi></mrow></math>
\`\`\`



الأول يعطي DR و Dr و dR و dr، والثاني Dr و dr؛ فيتوقع 3:3:1:1 للمظاهر الأربعة.
:::

:::exam-question
id: bio-q-p072-q3-3
title: تصنيف الأسئلة، السؤال 3، الفرع 3، صفحة 72
question: السؤال 3، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 72
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في أحد أنواع النباتات النادرة يسود جين الحواف المتعرجة للأوراق (D) على جين الحواف المنشارية للأوراق (d)، ويسود جين لون الأزهار الأصفر (R) على جين لون الأزهار الأبيض (r). إذا نقلت حبوب لقاح من نبات مجهول الطراز الجيني والطراز الشكلي إلى مياسم أزهار نبات حواف أوراقه متعرجة صفراء الأزهار، فنتجت نباتات بالأعداد والصفات الآتية: (46) نباتاً حواف أوراقه متعرجة أصفر الأزهار؛ (44) نباتاً حواف أوراقه متعرجة أبيض الأزهار؛ (15) نباتاً حواف أوراقه منشارية أصفر الأزهار؛ (14) نباتاً حواف أوراقه منشارية أبيض الأزهار.

3- اكتب الطرز الجينية لغاميتات النبات المجهول.
solution:
نشتق المجهول من النسب:90 متعرجاً إلى 29 منشارياً تقارب 3:1، فتدل على Dd مع Dd؛ و 61 أصفر إلى 58 أبيض تقارب 1:1، ومع النبات المعروف الأصفر يكون المجهول rr.
إذن المجهول Ddrr. ينفصل D عن d عند تكوين الغاميت، ويبقى r ثابتاً لأنه rr.
النوعان هما Dr و dr، كل منهما نصف الغاميتات؛ فلا يمكن غاميت يحمل R غير الموجود فيه.
:::

:::exam-question
id: bio-q-p073-q5-1
title: تصنيف الأسئلة، السؤال 5، الفرع 1، صفحة 73
question: السؤال 5، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند تلقيح نبات بازيلاء أرجواني الأزهار أملس البذور مجهول الطراز الجيني مع نبات بازيلاء آخر مجهول الطراز الشكلي ظهرت النتائج الآتية: 150 نبات أرجواني الأزهار أملس البذور؛ 150 نبات أرجواني الأزهار مجعد البذور؛ 50 نبات أبيض الأزهار أملس البذور؛ 50 نبات أبيض الأزهار مجعد البذور. مستخدماً الرموز الآتية: (R) لجين اللون الأرجواني، (r) لجين اللون الأبيض، (G) لجين البذور الملساء، (g) لجين البذور المجعدة.

1- اكتب الطراز الجيني للنبات الأول للصفتين معاً.
solution:
R للأرجواني السائد و G للأملس السائد. الأول أرجواني أملس، لكن وجود أبيض rr ومجعد gg بين النسل يعني أنه يحمل r و g أيضاً.
لذلك لا يمكن أن يكون RR أو GG، بل RrGg.
للتأكد: مجموع الأرجواني 300 مقابل الأبيض 100 هو 3:1، فيوافق Rr مع Rr؛ والأملس 200 مقابل المجعد 200 هو 1:1، فيوافق Gg مع gg.
إذن طراز النبات الأول RrGg؛ غاميتاته RG و Rg و rG و rg.
:::

:::exam-question
id: bio-q-p073-q5-2
title: تصنيف الأسئلة، السؤال 5، الفرع 2، صفحة 73
question: السؤال 5، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند تلقيح نبات بازيلاء أرجواني الأزهار أملس البذور مجهول الطراز الجيني مع نبات بازيلاء آخر مجهول الطراز الشكلي ظهرت النتائج الآتية: 150 نبات أرجواني الأزهار أملس البذور؛ 150 نبات أرجواني الأزهار مجعد البذور؛ 50 نبات أبيض الأزهار أملس البذور؛ 50 نبات أبيض الأزهار مجعد البذور. مستخدماً الرموز الآتية: (R) لجين اللون الأرجواني، (r) لجين اللون الأبيض، (G) لجين البذور الملساء، (g) لجين البذور المجعدة.

2- اكتب الطراز الشكلي والجيني للنبات المجهول للصفتين معاً.
solution:
الأرجواني 300 إلى الأبيض 100 نسبة 3:1، فيكون كلا الأبوين Rr؛ لأن الأبيض rr يحتاج r من كليهما.
الأملس 200 إلى المجعد 200 نسبة 1:1، فيكون Gg مع gg. النبات الأول أملس، فيكون هو Gg، والآخر gg.
إذن النبات المجهول Rrgg: أرجواني الأزهار لوجود R، ومجعد البذور لأن gg متنحٍ متماثل.
تزاوج RrGg مع Rrgg يوافق النسبة 3:3:1:1 المعطاة.
:::

:::exam-question
id: bio-q-p073-q5-3
title: تصنيف الأسئلة، السؤال 5، الفرع 3، صفحة 73
question: السؤال 5، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند تلقيح نبات بازيلاء أرجواني الأزهار أملس البذور مجهول الطراز الجيني مع نبات بازيلاء آخر مجهول الطراز الشكلي ظهرت النتائج الآتية: 150 نبات أرجواني الأزهار أملس البذور؛ 150 نبات أرجواني الأزهار مجعد البذور؛ 50 نبات أبيض الأزهار أملس البذور؛ 50 نبات أبيض الأزهار مجعد البذور. مستخدماً الرموز الآتية: (R) لجين اللون الأرجواني، (r) لجين اللون الأبيض، (G) لجين البذور الملساء، (g) لجين البذور المجعدة.

3- اكتب الطرز الجينية لغاميتات النباتين.
solution:
نستنتج الأبوين من المظاهر: الأرجواني إلى الأبيض 300:100 يقتضي Rr مع Rr؛ والأملس إلى المجعد 200:200 يقتضي Gg مع gg، والأول هو الأملس.
إذن الأول RrGg، والثاني Rrgg.
الغاميت يأخذ أليلاً واحداً لكل جين؛ بالتوزيع المستقل ينتج الأول RG و Rg و rG و rg.
الثاني يثبت g ويختار R أو r، فينتج Rg و rg.
كل نوع متساوي الاحتمال بين غاميتات والده.
:::

:::exam-question
id: bio-q-p073-q5-4
title: تصنيف الأسئلة، السؤال 5، الفرع 4، صفحة 73
question: السؤال 5، الفرع 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند تلقيح نبات بازيلاء أرجواني الأزهار أملس البذور مجهول الطراز الجيني مع نبات بازيلاء آخر مجهول الطراز الشكلي ظهرت النتائج الآتية: 150 نبات أرجواني الأزهار أملس البذور؛ 150 نبات أرجواني الأزهار مجعد البذور؛ 50 نبات أبيض الأزهار أملس البذور؛ 50 نبات أبيض الأزهار مجعد البذور. مستخدماً الرموز الآتية: (R) لجين اللون الأرجواني، (r) لجين اللون الأبيض، (G) لجين البذور الملساء، (g) لجين البذور المجعدة.

4- ما احتمال ظهور نباتات تحمل الطراز الشكلي (أرجوانية الأزهار مجعدة البذور)؟
solution:
الأرجواني R سائد، والمجعد لا يظهر إلا في gg. من 300 أرجواني إلى 100 أبيض نستنتج Rr مع Rr، ومن 200 أملس إلى 200 مجعد نستنتج Gg مع gg؛ فالأبوان RrGg و Rrgg.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>R</mi><mi>r</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>R</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>G</mi><mi>g</mi><mo>×</mo><mi>g</mi><mi>g</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>g</mi><mi>g</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`



الشرطة تعني أن وجود R كافٍ للأرجواني. وبالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>R</mi><mo>−</mo><mi>g</mi><mi>g</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>8</mn></mrow></math>
\`\`\`



وهذا يطابق 150 أرجوانياً مجعداً من مجموع 400.
:::

:::exam-question
id: bio-q-p073-q6-1
title: تصنيف الأسئلة، السؤال 6، الفرع 1، صفحة 73
question: السؤال 6، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب جميع الطرز الجينية المحتملة للأبوين لصفتين معاً في التزاوجات المطلوبة للحصول على النسب الآتية في الوراثة المندلية:

9:3:3:1.
solution:
نفترض سيادة تامة وجينين يتوزعان مستقلاً. نسبة 9:3:3:1 تنتج من اجتماع نسبة 3:1 في كل صفة.
نسبة 3:1 لصفة واحدة تأتي من تزاوج غير نقيين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>a</mi><mo>⇒</mo><mi>A</mi><mo>−</mo><mo>:</mo><mi>a</mi><mi>a</mi><mo>=</mo><mn>3</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mi>B</mi><mo>−</mo><mo>:</mo><mi>b</mi><mi>b</mi><mo>=</mo><mn>3</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



إذن الأبوان كلاهما AaBb، وغاميتات كل منهما AB و Ab و aB و ab.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>B</mi><mi>b</mi><mo>×</mo><mi>A</mi><mi>a</mi><mi>B</mi><mi>b</mi></mrow></math>
\`\`\`



احتمالات المظاهر بالترتيب سائدان، سائد أول فقط، سائد ثانٍ فقط، متنحيان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>:</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>:</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>:</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>9</mn><mo>:</mo><mn>3</mn><mo>:</mo><mn>3</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`


:::

:::exam-question
id: bio-q-p073-q6-2
title: تصنيف الأسئلة، السؤال 6، الفرع 2، صفحة 73
question: السؤال 6، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب جميع الطرز الجينية المحتملة للأبوين لصفتين معاً في التزاوجات المطلوبة للحصول على النسب الآتية في الوراثة المندلية:

1:1.
solution:
للحصول على مظهرين بنسبة 1:1 مع دراسة جينين مستقلين وسيادة تامة، يجب أن تنعزل صفة واحدة بنسبة 1:1، بينما تعطي الصفة الثانية مظهراً واحداً.
الصفة المنعزلة يلزمها غير نقي مع متنحٍ، مثل Aa مع aa؛ والصفة الثابتة يكون فيها أحد الطرفين نقياً سائداً، أوكلاهما متنحياً.
الأزواج الكاملة التالية، دون إعادة الزوج بعد تبديل ترتيب الأبوين، تحقق الشرط:

| الأب الأول | الأب الثاني |
|---|---|
| AABb | AAbb |
| AABb | Aabb |
| AABb | aabb |
| AAbb | AaBb |
| AAbb | aaBb |
| AaBB | aaBB |
| AaBB | aaBb |
| AaBB | aabb |
| AaBb | aaBB |
| Aabb | aaBB |
| Aabb | aabb |
| aaBb | aabb |

مثلاً AABb مع Aabb يثبت المظهر السائد A، بينما Bb مع bb يعطي المظهرين B و b بنسبة 1:1. كل صف يطبق الفكرة نفسها على إحدى الصفتين.
هذه قائمة مشتقة للصفتين؛ مثال Aa مع aa وحده يصف صفة واحدة فقط.
:::

:::exam-question
id: bio-q-p073-q6-3
title: تصنيف الأسئلة، السؤال 6، الفرع 3، صفحة 73
question: السؤال 6، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب جميع الطرز الجينية المحتملة للأبوين لصفتين معاً في التزاوجات المطلوبة للحصول على النسب الآتية في الوراثة المندلية:

3:3:1:1.
solution:
نسبة 3:3:1:1 تعني اجتماع نسبة 3:1 في جين، مع 1:1 في الجين الآخر، عند السيادة التامة والتوزيع المستقل.
لـ 3:1 نحتاج غير نقي مع غير نقي؛ ولـ 1:1 نحتاج غير نقي مع متنحٍ. لذلك الاحتمالان، مع جواز عكس الأبوين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>B</mi><mi>b</mi><mo>×</mo><mi>A</mi><mi>a</mi><mi>b</mi><mi>b</mi></mrow></math>
\`\`\`



أو:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>B</mi><mi>b</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>B</mi><mi>b</mi></mrow></math>
\`\`\`



في الأول Aa مع Aa يعطي 3:1، و Bb مع bb يعطي 1:1؛ وفي الثاني تتبادل الصفتان الدور.
حواصل الاحتمالات 3/8 و 3/8 و 1/8 و 1/8 تعطي النسبة المطلوبة، ولا توجد أزواج أخرى لهذين الجينين تحت هذه الفروض.
:::

:::exam-question
id: bio-q-p073-q7-1
title: تصنيف الأسئلة، السؤال 7، الفرع 1، صفحة 73
question: السؤال 7، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند إجراء تلقيح بين نباتي بازيلاء أحدهما أملس البذور (R) أخضر البذور (a)، مع نبات آخر مجهول الطراز الجيني والشكلي، كانت النتائج: 50% من النباتات مجعدة البذور و50% من النباتات صفراء البذور. باستخدام رموز مناسبة حدد المطلوب:

1- الطراز الشكلي والطراز الجيني للنبات المجهول.
solution:
نستعمل R للأملس السائد و r للمجعد، و A للأصفر السائد و a للأخضر. النبات الأول أملس أخضر، إذن R?aa.
وجود نصف النسل مجعداً rr يستلزم r من الأول؛ فيكون Rr، والنسبة 1:1 تستلزم أن المجهول rr.
النبات الأول aa، وظهور نصف النسل أصفر ونصفه أخضر يقتضي أن يعطي المجهول A و a بالتساوي، أي Aa.
إذن المجهول rrAa: مجعد البذور أصفرها.
الأول Rraa يعطي Ra و ra، والمجهول rrAa يعطي rA و ra؛ فتوافق هذه الغاميتات النتائج.
:::

:::exam-question
id: bio-q-p073-q7-2
title: تصنيف الأسئلة، السؤال 7، الفرع 2، صفحة 73
question: السؤال 7، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند إجراء تلقيح بين نباتي بازيلاء أحدهما أملس البذور (R) أخضر البذور (a)، مع نبات آخر مجهول الطراز الجيني والشكلي، كانت النتائج: 50% من النباتات مجعدة البذور و50% من النباتات صفراء البذور. باستخدام رموز مناسبة حدد المطلوب:

2- الطراز الجيني للنبات الأول.
solution:
نرمز للأملس بـ R وللمجعد بـ r، وللأصفر بـ A وللأخضر بـ a. الأول أخضر، والصفة متنحية، فيكون aa.
وهو أملس لكنه أنجب مجعداً rr، فلا بد أن يعطي r؛ لذا زوج الشكل Rr.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>r</mi><mo>×</mo><mi>r</mi><mi>r</mi><mo>⇒</mo><mi>R</mi><mi>r</mi><mo>:</mo><mi>r</mi><mi>r</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



هذا يفسر نسبة النصف مجعداً. إذن الطراز الجيني للأول Rraa. أما نسبة النصف أصفر مع aa فتجعل الآخر Aa للون، أي rrAa للصفتين.
:::

:::exam-question
id: bio-q-p073-q7-3
title: تصنيف الأسئلة، السؤال 7، الفرع 3، صفحة 73
question: السؤال 7، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند إجراء تلقيح بين نباتي بازيلاء أحدهما أملس البذور (R) أخضر البذور (a)، مع نبات آخر مجهول الطراز الجيني والشكلي، كانت النتائج: 50% من النباتات مجعدة البذور و50% من النباتات صفراء البذور. باستخدام رموز مناسبة حدد المطلوب:

3- ما الطرز الجينية لغاميتات النبات الأول؟
solution:
الأخضر متنحٍ a، فالنبات الأول aa. والأملس R سائد، لكن ظهور 50% مجعد rr يثبت حمل الأول r، ويوافق Rr مع rr؛ لذلك الأول Rraa.
عند تكوين الغاميت ينفصل R عن r، بينما يظل a ثابتاً لأن زوج اللون aa.
إذن الغاميتان Ra و ra، كل منهما نصف الغاميتات؛ ولا نكتب Rr أو aa داخل غاميت واحد لأن كل غاميت يأخذ أليلاً واحداً لكل موضع.
:::

:::exam-question
id: bio-q-p073-q7-4
title: تصنيف الأسئلة، السؤال 7، الفرع 4، صفحة 73
question: السؤال 7، الفرع 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عند إجراء تلقيح بين نباتي بازيلاء أحدهما أملس البذور (R) أخضر البذور (a)، مع نبات آخر مجهول الطراز الجيني والشكلي، كانت النتائج: 50% من النباتات مجعدة البذور و50% من النباتات صفراء البذور. باستخدام رموز مناسبة حدد المطلوب:

4- ما نسبة ظهور نباتات ملساء البذور خضراء البذور؟
solution:
R للأملس و r للمجعد، و A للأصفر و a للأخضر. من النصف المجعد نستنتج Rr مع rr، ومن النصف الأصفر مع كون الأول أخضر aa نستنتج aa مع Aa.
إذن الأبوان Rraa و rrAa؛ الأول يعطي Ra و ra، والثاني rA و ra.
الأملس يأتي من Rr مع rr باحتمال 1/2، والأخضر يأتي من aa مع Aa باحتمال 1/2.
بالتوزيع المستقل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>s</mi><mi>m</mi><mi>o</mi><mi>o</mi><mi>t</mi><mi>h</mi><mo separator="true">,</mo><mi>g</mi><mi>r</mi><mi>e</mi><mi>e</mi><mi>n</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo>=</mo><mn>25</mn><mi mathvariant="normal">%</mi></mrow></math>
\`\`\`



إذن ربع النسل ملساء خضراء.
:::

:::exam-question
id: bio-q-p073-q8-1
title: تصنيف الأسئلة، السؤال 8، الفرع 1، صفحة 73
question: السؤال 8، الفرع 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تلقيح بين نباتي بازيلاء، الأول محوري الأزهار والثاني أصفر البذور، فكانت النتائج في النسل الناتج: نصف النسل محوري الأزهار، وثلاثة أرباعه أصفر البذور. علماً بأن جين موقع الأزهار المحوري (B) سائد على جين موقع الأزهار الطرفي (b)، وجين البذور الصفراء (E) سائد على جين البذور الخضراء (e).

1- اكتب الطرز الجينية للنبات الأول والثاني للصفتين معاً.
solution:
B للمحوري السائد و b للطرفي؛ E للأصفر السائد و e للأخضر.
نصف النسل محوري، أي إن صفة الموقع تنعزل 1:1؛ فيلزم Bb مع bb. ولأن الأول محوري فهو Bb، والثاني bb.
ثلاثة أرباع النسل أصفر، أي إن صفة اللون تنعزل 3:1؛ فيلزم Ee مع Ee.
إذن وفق ترتيب السؤال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mi>E</mi><mi>e</mi><mo>×</mo><mi>b</mi><mi>b</mi><mi>E</mi><mi>e</mi></mrow></math>
\`\`\`



الأول يعطي BE و Be و bE و be، والثاني bE و be؛ فتفسر هذه الغاميتات النسب المعطاة.
:::

:::exam-question
id: bio-q-p073-q8-2
title: تصنيف الأسئلة، السؤال 8، الفرع 2، صفحة 73
question: السؤال 8، الفرع 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تلقيح بين نباتي بازيلاء، الأول محوري الأزهار والثاني أصفر البذور، فكانت النتائج في النسل الناتج: نصف النسل محوري الأزهار، وثلاثة أرباعه أصفر البذور. علماً بأن جين موقع الأزهار المحوري (B) سائد على جين موقع الأزهار الطرفي (b)، وجين البذور الصفراء (E) سائد على جين البذور الخضراء (e).

2- ما الطراز الشكلي للنبات الأول من حيث لون البذور؟
solution:
الأصفر E سائد على الأخضر e. ظهور ثلاثة أرباع النسل أصفر يقتضي في نموذج الوراثة المندلية Ee مع Ee:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mi>e</mi><mo>×</mo><mi>E</mi><mi>e</mi><mo>⇒</mo><mi>E</mi><mi>E</mi><mo>:</mo><mi>E</mi><mi>e</mi><mo>:</mo><mi>e</mi><mi>e</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>2</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



لذلك يحمل النبات الأول Ee؛ ومع وجود E يظهر أصفر البذور.
أما نسبة النصف محوري فتحدد موقعي الأزهار Bb للأول و bb للثاني، ولا تغير استنتاج لون البذور.
:::

:::exam-question
id: bio-q-p073-q8-3
title: تصنيف الأسئلة، السؤال 8، الفرع 3، صفحة 73
question: السؤال 8، الفرع 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تلقيح بين نباتي بازيلاء، الأول محوري الأزهار والثاني أصفر البذور، فكانت النتائج في النسل الناتج: نصف النسل محوري الأزهار، وثلاثة أرباعه أصفر البذور. علماً بأن جين موقع الأزهار المحوري (B) سائد على جين موقع الأزهار الطرفي (b)، وجين البذور الصفراء (E) سائد على جين البذور الخضراء (e).

3- اكتب الطرز الجينية لغاميتات النبات الثاني.
solution:
نسبة النصف محوري تدل على Bb مع bb؛ وبما أن الأول محوري فهو Bb والثاني bb.
نسبة الثلاثة أرباع أصفر تدل على Ee مع Ee؛ إذن الثاني bbEe.
الغاميت يأخذ أليلاً واحداً لكل جين: يثبت b في كل غاميت، وينفصل E عن e.
لذلك غاميتا النبات الثاني bE و be، كل منهما باحتمال 1/2.
:::

:::exam-question
id: bio-q-p073-q8-4
title: تصنيف الأسئلة، السؤال 8، الفرع 4، صفحة 73
question: السؤال 8، الفرع 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 73
answer-label: الإجابة والشرح من المجموعة المصححة
body:
حصل تلقيح بين نباتي بازيلاء، الأول محوري الأزهار والثاني أصفر البذور، فكانت النتائج في النسل الناتج: نصف النسل محوري الأزهار، وثلاثة أرباعه أصفر البذور. علماً بأن جين موقع الأزهار المحوري (B) سائد على جين موقع الأزهار الطرفي (b)، وجين البذور الصفراء (E) سائد على جين البذور الخضراء (e).

4- ما احتمال إنتاج نباتات محورية الأزهار خضراء البذور؟
solution:
المحوري يحتاج B، والأخضر يحتاج ee. من نصف النسل المحوري نستنتج Bb مع bb، ومن ثلاثة أرباع الأصفر نستنتج Ee مع Ee؛ إذن الأبوان BbEe و bbEe.
غاميتات الأول BE و Be و bE و be، والثاني bE و be.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>b</mi><mi>b</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mo>−</mo><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>E</mi><mi>e</mi><mo>×</mo><mi>E</mi><mi>e</mi><mo>⇒</mo><mi>P</mi><mo stretchy="false">(</mo><mi>e</mi><mi>e</mi><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn></mrow></math>
\`\`\`



نضرب الاحتمالين لأن الجينين مستقلان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>B</mi><mo>−</mo><mi>e</mi><mi>e</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mo>×</mo><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn><mi mathvariant="normal">/</mi><mn>8</mn></mrow></math>
\`\`\`



إذن احتمال محوري أخضر 1/8.
:::

:::mcq
id: bio-q-p082-q24
title: تصنيف الأسئلة، السؤال 24، صفحة 82
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 82
question: ما احتمالية إصابة أحد الأبناء بمرض هنتنغتون، إذا كان أحد الوالدين طرازه الجيني (Hh) والآخر غير مصاب؟
- [ ] option-1 | أ. 100%
- [ ] option-2 | ب. 75%
- [x] option-3 | ج. 50%
- [ ] option-4 | د. 25%
explanation:
مرض هنتنغتون صفة سائدة في نموذج الكتاب؛ لذلك نرمز لأليل المرض بـH وللسليم بـh. يبيّن الشكل6 مصاباًHh وسليمةhh.

الأبوان في السؤالHh وhh. يعطي الأولH أوh، ويعطي السليمh فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>h</mi><mo>×</mo><mi>h</mi><mi>h</mi><mo>⟶</mo><mi>H</mi><mi>h</mi><mo>:</mo><mi>h</mi><mi>h</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



نصف الأبناءHh مصاب، ونصفهمhh سليم؛ إذن احتمال الإصابة لكل طفل **50%**.

**الشاهد الذي يثبت سيادة المرض:**

> بعض الجينات القاتلة سائدة مثل مرض هنتنغتون

**المصدر:** صفحة 58 من الكتاب.



**تزاوج الكتاب المطابق للمسألة:**

**المصدر:** صفحة 59 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/fdc801c147f2f6d61a66.webp)

hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p082-q25
title: تصنيف الأسئلة، السؤال 25، صفحة 82
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 82
question: تزوج رجل مصاب بمرض هنتنغتون (غير نقي) من فتاة سليمة من المرض، ما احتمالية الإصابة لأحد الأطفال؟
- [ ] option-1 | أ. 25%
- [x] option-2 | ب. 50%
- [ ] option-3 | ج. 75%
- [ ] option-4 | د. 100%
explanation:
مرض هنتنغتون صفة سائدة في نموذج الكتاب؛ لذلك نرمز لأليل المرض بـH وللسليم بـh. يبيّن الشكل6 مصاباًHh وسليمةhh.

الأبوان في السؤالHh وhh. يعطي الأولH أوh، ويعطي السليمh فقط:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>h</mi><mo>×</mo><mi>h</mi><mi>h</mi><mo>⟶</mo><mi>H</mi><mi>h</mi><mo>:</mo><mi>h</mi><mi>h</mi><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



نصف الأبناءHh مصاب، ونصفهمhh سليم؛ إذن احتمال الإصابة لكل طفل **50%**.

**الشاهد الذي يثبت سيادة المرض:**

> بعض الجينات القاتلة سائدة مثل مرض هنتنغتون

**المصدر:** صفحة 58 من الكتاب.



**تزاوج الكتاب المطابق للمسألة:**

**المصدر:** صفحة 59 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/fdc801c147f2f6d61a66.webp)

hint: راجع المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p116-q1-3
title: صفحة 116، السؤال 1-3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 116
question: ما عدد أنواع الطرز الشكلية الناتجة المتوقعة من التزاوج الآتي في الوراثة المندلية: aaBbDd × AaBBDd؟
- [ ] option-1 | 5
- [ ] option-2 | 16
- [x] option-3 | 4
- [ ] option-4 | 8
explanation:
في السيادة التامة نعد المظاهر المختلفة لكل موضع، ثم نضرب لأن الجينات مستقلة في المسألة. كل غاميت ينقل أليلاً لكل موضع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>a</mi><mi>a</mi><mo>×</mo><mi>A</mi><mi>a</mi><mo>⇒</mo><mi>A</mi><mi>a</mi><mo separator="true">,</mo><mi>a</mi><mi>a</mi><mo>⇒</mo><mn>2</mn><mtext> </mtext><mi>p</mi><mi>h</mi><mi>e</mi><mi>n</mi><mi>o</mi><mi>t</mi><mi>y</mi><mi>p</mi><mi>e</mi><mi>s</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>b</mi><mo>×</mo><mi>B</mi><mi>B</mi><mo>⇒</mo><mi>B</mi><mi>B</mi><mo separator="true">,</mo><mi>B</mi><mi>b</mi><mo>⇒</mo><mn>1</mn><mtext> </mtext><mi>p</mi><mi>h</mi><mi>e</mi><mi>n</mi><mi>o</mi><mi>t</mi><mi>y</mi><mi>p</mi><mi>e</mi></mrow></math>
\`\`\`



الموضع الثاني يظهر الصفة السائدة في الحالتين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>d</mi><mo>×</mo><mi>D</mi><mi>d</mi><mo>⇒</mo><mi>D</mi><mi>D</mi><mo separator="true">,</mo><mi>D</mi><mi>d</mi><mo separator="true">,</mo><mi>d</mi><mi>d</mi><mo>⇒</mo><mn>2</mn><mtext> </mtext><mi>p</mi><mi>h</mi><mi>e</mi><mi>n</mi><mi>o</mi><mi>t</mi><mi>y</mi><mi>p</mi><mi>e</mi><mi>s</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>×</mo><mn>1</mn><mo>×</mo><mn>2</mn><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`



إذن أربعة طرز شكلية، وهو الاختيار الثالث.
hint: راجع معطيات السؤال وقارن البدائل الأصلية.
:::

:::mcq
id: bio-q-p116-q1-4
title: صفحة 116، السؤال 1-4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 116
question: تم إجراء تلقيح تجريبي لفرد طرازه الجيني AaRRTt، ما عدد أنواع الطرز الجينية للأبناء؟
- [ ] option-1 | 2
- [x] option-2 | 4
- [ ] option-3 | 6
- [ ] option-4 | 8
explanation:
التلقيح التجريبي يعني التزاوج مع فرد متنحٍ متماثل الجينات لكل الصفات، أي aarrtt.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>R</mi><mi>R</mi><mi>T</mi><mi>t</mi><mo>×</mo><mi>a</mi><mi>a</mi><mi>r</mi><mi>r</mi><mi>t</mi><mi>t</mi></mrow></math>
\`\`\`



الفرد المختبر يثبت R ويختار A أو a و T أو t، فينتج ART و ARt و aRT و aRt. أما المتنحي فيعطي art فقط.
النسل الممكن:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mi>a</mi><mi>R</mi><mi>r</mi><mi>T</mi><mi>t</mi><mo separator="true">,</mo><mi>A</mi><mi>a</mi><mi>R</mi><mi>r</mi><mi>t</mi><mi>t</mi><mo separator="true">,</mo><mi>a</mi><mi>a</mi><mi>R</mi><mi>r</mi><mi>T</mi><mi>t</mi><mo separator="true">,</mo><mi>a</mi><mi>a</mi><mi>R</mi><mi>r</mi><mi>t</mi><mi>t</mi></mrow></math>
\`\`\`



إذن أربعة طرز جينية. ويمكن التأكد من عددها: موضع A يعطي نوعين، و R نوعاً واحداً، و T نوعين؛ حاصلها 4.
hint: راجع معطيات السؤال وقارن البدائل الأصلية.
:::`;

export default createBiologyLesson("mendelian-inheritance", source);
