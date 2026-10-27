import { createBiologyLesson } from "./shared.js";

export const source = `:::mcq
id: bio-b-p022-q1-5
title: الرزمة التعليمية، صفحة 22، السؤال 1-5
question: أي الأحماض الأمينية الآتية لا تشفر بأكثر من كودون؟
reference: [الرزمة التعليمية، صفحة PDF 22](https://moe.edu.ps/m/4061#page=22)
- [ ] option-1 | فينيل ألانين، ألانين
- [ ] option-2 | ميثيونين، تيروسين
- [x] option-3 | ميثيونين، تربتوفان
- [ ] option-4 | تربتوفان، غلايسين
explanation:
**الإجابة:** ميثيونين، تربتوفان

**الشاهد من الكتاب:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



hint: اقرأ السؤال وقارن بين البدائل الأصلية.
:::

:::exam-question
id: bio-b-p023-q2-2
title: الرزمة التعليمية، صفحة 23، السؤال 2-2
question: ما الكودون الذي يشفر الحمض الأميني تيروسين؟
reference: [الرزمة التعليمية، صفحة PDF 23](https://moe.edu.ps/m/4061#page=23)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لديك سلسلة عديد الببتيد الآتية (فينيل ألانين - تربتوفان - تيروسين - غلايسين - ميثيونين)، أجب بالاستعانة بالجدول المرفق:

| الحمض الأميني | الكودون المضاد |
| --- | --- |
| ميثيونين | UAC |
| غلايسين | CCA |
| تيروسين | AUG |
| تربتوفان | ACC |
| فينيل ألانين | AAA |

ما الكودون الذي يشفر الحمض الأميني تيروسين؟
solution:
الكودون على mRNA يتكامل مع الكودون المضاد على tRNA، ويكون اتجاههما متعاكساً.

نعرف أن كودون الميثيونين هو 5′-AUG-3′؛ والكودون المضاد له في الجدول UAC. لذلك تعرض ثلاثيات الكودون المضاد هنا من 3′ إلى 5′.

كودون التيروسين المضاد المعطى هو AUG؛ نكمل قواعده A↔U وC↔G:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>⟷</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>C</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



إذن الكودون المطلوب **UAC**. يشفر UAU التيروسين أيضاً، لكن المعطى يحدد UAC.

**المصدر:** الصفحات 15، 16، 19 من الكتاب.

:::

:::exam-question
id: bio-b-p023-q2-3
title: الرزمة التعليمية، صفحة 23، السؤال 2-3
question: ما كودونات الإيقاف؟
reference: [الرزمة التعليمية، صفحة PDF 23](https://moe.edu.ps/m/4061#page=23)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لديك سلسلة عديد الببتيد الآتية (فينيل ألانين - تربتوفان - تيروسين - غلايسين - ميثيونين)، أجب بالاستعانة بالجدول المرفق:

| الحمض الأميني | الكودون المضاد |
| --- | --- |
| ميثيونين | UAC |
| غلايسين | CCA |
| تيروسين | AUG |
| تربتوفان | ACC |
| فينيل ألانين | AAA |

ما كودونات الإيقاف؟
solution:
**الإجابة:** UAA وUAG وUGA، ولا تشفر أحماضاً أمينية.

**الشاهد من الكتاب 1:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



**الشاهد من الكتاب 2:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



:::

:::mcq
id: bio-q-p039-q1
title: تصنيف الأسئلة، صفحة 39، السؤال 1
question: بأي الكودونات الآتية يشفر الحمض الأميني سيستين؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 39
- [x] option-1 | UGU
- [ ] option-2 | UGA
- [ ] option-3 | UAG
- [ ] option-4 | AUG
explanation:
**الإجابة:** UGU

**الشاهد من الكتاب:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p039-q2
title: تصنيف الأسئلة، صفحة 39، السؤال 2
question: بأي الكودونات الآتية يشفر الحمض الأميني برولين؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 39
- [x] option-1 | CCA
- [ ] option-2 | UGA
- [ ] option-3 | UAG
- [ ] option-4 | AUG
explanation:
**الإجابة:** CCA

**الشاهد من الكتاب:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p039-q3
title: تصنيف الأسئلة، صفحة 39، السؤال 3
question: ما الحمض الأميني الذي يشفر بكودون واحد فقط؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 39
- [ ] option-1 | فالين
- [ ] option-2 | سيرين
- [x] option-3 | ميثيونين
- [ ] option-4 | فينيل ألانين
explanation:
**الإجابة:** ميثيونين

**الشاهد من الكتاب:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p039-q4
title: تصنيف الأسئلة، صفحة 39، السؤال 4
question: أي الآتية ليست من خصائص الكودون؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 39
- [x] option-1 | يمكن أن يشفر أكثر من حمض أميني.
- [ ] option-2 | يتكون من ثلاثة نيوكليوتيدات.
- [ ] option-3 | يمكن أن يشفر الحمض الأميني الذي يشفره كودون آخر.
- [ ] option-4 | يرتبط مع الكودون المضاد.
explanation:
العبارة غير الصحيحة هي: «يمكن أن يشفر أكثر من حمض أميني».
الكودون المعين يحدد حمضاً أمينياً واحداً أو إشارة إيقاف؛ فلا تتعدد دلالته على أحماض مختلفة.
يمكن بالعكس لعدة كودونات مختلفة أن تحدد الحمض نفسه؛ فمثلاً UUU وUUC كلاهما للفينيل ألانين.

عبارة «يرتبط مع الكودون المضاد» تصف الكودونات المشفّرة للأحماض الأمينية في هذا السؤال. أما كودونات الإيقاف فاستثناء: يرتبط بها عامل إيقاف بدلاً منtRNA. لذلك نحتفظ بالخيار الأول مع هذا التوضيح.

**شاهد القاعدة أو السياق من الكتاب 1:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



**شاهد القاعدة أو السياق من الكتاب 2:**

> تمثل الشيفرة الوراثية تسلسل النيوكليوتيدات في DNA، والتي تمثل وحدات ثلاثية على جزيء mRNA بالكودون.

**المصدر:** صفحة 14 من الكتاب.



**المصدر:** صفحة 20 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q22
title: تصنيف الأسئلة، صفحة 42، السؤال 22
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42
question: أي الكودونات الآتية تشفر الحمض الأميني تيروسين؟
- [ ] option-1 | أ- UAA
- [x] option-2 | ب- UAU
- [ ] option-3 | ج- UAG
- [ ] option-4 | د- AUG
explanation:
**الإجابة:** ب- UAU

**الشاهد من الكتاب:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q23
title: تصنيف الأسئلة، صفحة 42، السؤال 23
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42 · صياغة تعليمية معدّلة
kicker: صياغة تعليمية معدّلة
question: إذا كان المقطع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>G</mi><mi>C</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>\` من شريط DNA القالب، فما الكودون المضاد على tRNA الذي يقابل كودون mRNA المنسوخ عنه؟ تُكتب جميع البدائل من الطرف 3′ إلى الطرف 5′.
- [x] option-1 | أ- AGC
- [ ] option-2 | ب- UCG
- [ ] option-3 | ج- CGA
- [ ] option-4 | د- GCU
explanation:
يُنسخ mRNA متممًا للقالب وباتجاه معاكس: يقابل A القاعدة U، ويقابل G القاعدة C، ويقابل C القاعدة G.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>G</mi><mi>C</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>U</mi><mi>C</mi><mi>G</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



الكودون المضاد متمم لكودون mRNA وباتجاه معاكس له.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi></mrow><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>G</mi><mi>C</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



الإجابة: أ.

**المصدر:** صفحة 16 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p043-q3-4
title: تصنيف الأسئلة، صفحة 43، السؤال 3 (4)
question: إذا كان لديك سلسلة عديد الببتيد الآتية (أرجنين - برولين - ألانين - ميثيونين)، فأجب مستعيناً بالجدول المرفق:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لديك سلسلة عديد الببتيد الآتية (أرجنين - برولين - ألانين - ميثيونين)، فأجب مستعيناً بالجدول المرفق:

| الحمض الأميني | الكودون المضاد |
|---|---|
| برولين | GGU |
| ميثيونين | UAC |
| ألانين | CGA |
| أرجنين | GCU |

4- بماذا تختلف الكودونات التي تشفر نفس الحمض الأميني؟
solution:
**تختلف الكودونات التي تشفر الحمض نفسه في تتابع قواعدها النيتروجينية.**

نقرأ ذلك من جدول الشيفرة؛ فالكودونان UUU وUUC يشفران الفينيل ألانين، ويختلفان في القاعدة الثالثة.

لكن الاختلاف لا يقتصر دائماً على الثالثة: UUA وCUA يشفران الليوسين، ويختلفان في القاعدة الأولى.

**المصدر:** صفحة 15 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/6bf12ca76ec9c9270ea4.webp)

:::

:::mcq
id: bio-q-p056-q9
title: تصنيف الأسئلة، صفحة 56، السؤال 9
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 56
question: الكودون الذي يمثل البرولين فيما يلي هو:
- [ ] option-1 | أ- AUG
- [ ] option-2 | ب- UAG
- [ ] option-3 | ج- UGA
- [x] option-4 | د- CCG
explanation:
**الإجابة:** د- CCG

**الشاهد من الكتاب:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p059-q8
title: تصنيف الأسئلة، صفحة 59، السؤال 8
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 59
question: عدد النيوكليوتيدات في الكودونات التي تشفر لأحماض أمينية في الخلايا الحية:
- [ ] option-1 | أ- 180
- [x] option-2 | ب- 183
- [ ] option-3 | ج- 189
- [ ] option-4 | د- 192
explanation:
توجد أربعة أنواع من قواعد RNA، وكل كودون يتألف من ثلاث قواعد.
عدد الكودونات الممكنة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo>×</mo><mn>4</mn><mo>×</mo><mn>4</mn><mo>=</mo><mn>64</mn></mrow></math>
\`\`\`


منها ثلاثة للإيقاف؛ إذن كودونات الأحماض الأمينية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>64</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>61</mn></mrow></math>
\`\`\`


عند عد قواعد هذه الكودونات جميعاً مرة واحدة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>61</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>183</mn></mrow></math>
\`\`\`



 نيوكليوتيداً؛ فالاختيار ب.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p064-q5-a1
title: تصنيف الأسئلة، صفحة 64، السؤال 5 (a1)
question: عرفي الكودون.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 64
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرفي الكودون.
solution:
**الإجابة:** وحدة من ثلاث نيوكليوتيدات علىmRNA؛ تقرأها الرايبوسومات لتحديد حمض أميني معين أو إشارة إيقاف.

**الشاهد من الكتاب 1:**

> تمثل الشيفرة الوراثية تسلسل النيوكليوتيدات في DNA، والتي تمثل وحدات ثلاثية على جزيء mRNA بالكودون.

**المصدر:** صفحة 14 من الكتاب.



**الشاهد من الكتاب 2:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



:::

:::mcq
id: bio-b-p021-q1-6
title: الرزمة التعليمية، صفحة 21، السؤال 1-6
kicker: صياغة تعليمية معدّلة
question: ما عدد كودونات mRNA من كودون البدء حتى كودون إيقاف واحد شاملًا، لبناء عديد ببتيد مكوّن من 35 حمضًا أمينيًا؟
reference: [الرزمة التعليمية، صفحة PDF 21](https://moe.edu.ps/m/4061#page=21) · صياغة تعليمية معدّلة
- [ ] option-1 | 22
- [ ] option-2 | 23
- [ ] option-3 | 35
- [x] option-4 | 36
explanation:
كل حمض أميني يحتاج كودونًا واحدًا، ويُحتسب كودون البدء ضمن كودونات الأحماض لأنه يشفّر الميثيونين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>35</mn></mrow></math>
\`\`\`



نضيف كودون إيقاف واحدًا؛ فهو ينهي الترجمة ولا يضيف حمضًا أمينيًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi><mtext> </mtext><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">g</mi><mtext> </mtext><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">p</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>35</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>36</mn></mrow></math>
\`\`\`



الإجابة:36 كودونًا.

**المصدر:** الصفحات 15، 20 من الكتاب.

hint: اقرأ السؤال وقارن بين البدائل الأصلية.
:::

:::mcq
id: bio-b-p021-q1-7
title: الرزمة التعليمية، صفحة 21، السؤال 1-7
question: ما نوع الرابطة بين الكودون المضاد على tRNA والكودون على mRNA؟
reference: [الرزمة التعليمية، صفحة PDF 21](https://moe.edu.ps/m/4061#page=21)
- [ ] option-1 | ببتيدية
- [x] option-2 | هيدروجينية
- [ ] option-3 | نيتروجينية
- [ ] option-4 | أيونية
explanation:
**الإجابة:** هيدروجينية

**الشاهد من الكتاب:**

> يرتبط الكودون المضاد فيtRNA الحامل للحمض الأميني بروابط هيدروجينية مع الكودون المتمم علىmRNA في موقع(A).

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ السؤال وقارن بين البدائل الأصلية.
:::

:::mcq
id: bio-b-p022-q1-7
title: الرزمة التعليمية، صفحة 22، السؤال 1-7
kicker: صياغة تعليمية معدّلة
question: يبنى بروتين مكوّن من 20 حمضًا أمينيًا. كم نيوكليوتيدًا في المقطع من mRNA الممتد من كودون البدء إلى كودون إيقاف واحد شاملًا، دون الأجزاء غير المترجمة خارجه؟
reference: [الرزمة التعليمية، صفحة PDF 22](https://moe.edu.ps/m/4061#page=22) · صياغة تعليمية معدّلة
- [ ] option-1 | 20
- [ ] option-2 | 21
- [ ] option-3 | 60
- [x] option-4 | 63
explanation:
كل حمض يحتاج كودونًا ثلاثي النيوكليوتيدات. وكودون البدء يشفر أحد الأحماض العشرين، فلا نضيفه مرة ثانية. نضيف فقط كودون الإيقاف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>20</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>21</mn></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>21</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>63</mn></mrow></math>
\`\`\`



الإجابة:63 نيوكليوتيدًا في المقطع المحدد.

**المصدر:** الصفحات 15، 20 من الكتاب.

hint: اقرأ السؤال وقارن بين البدائل الأصلية.
:::

:::exam-question
id: bio-b-p023-q2-1
title: الرزمة التعليمية، صفحة 23، السؤال 2-1
question: اكتب تسلسل النيوكليوتيدات على سلسلة DNA.
reference: [الرزمة التعليمية، صفحة PDF 23](https://moe.edu.ps/m/4061#page=23) · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
المقطع الداخلي الآتي من عديد ببتيد مرتب من طرفه الأميني نحو طرفه الكربوكسيلي: فينيل ألانين ← تربتوفان ← تيروسين ← غلايسين ← ميثيونين. يُقرأ ترتيب الأسماء كما سُرد هنا، بدءًا بفينيل ألانين. بالاستعانة بالجدول، اكتب شريط DNA القالب المقابل مع اتجاهه.

| الحمض الأميني | الكودون المضاد مكتوبًا 3′→5′ |
|---|---|
| ميثيونين | UAC |
| غلايسين | CCA |
| تيروسين | AUG |
| تربتوفان | ACC |
| فينيل ألانين | AAA |
solution:
المطلوب مقطع داخلي، فلا يشترط أن يبدأ بالميثيونين. نحافظ على ترتيب الأحماض المعطى. الكودون المضاد متمم لكودون mRNA وباتجاه معاكس له.

| الحمض بالترتيب | الكودون المضاد \`latex: 3^{\\prime}\\to5^{\\prime}\` | كودون mRNA باتجاه \`latex: 5^{\\prime}\\to3^{\\prime}\` |
|---|---|---|
| فينيل ألانين | AAA | UUU |
| تربتوفان | ACC | UGG |
| تيروسين | AUG | UAC |
| غلايسين | CCA | GGU |
| ميثيونين | UAC | AUG |

إذن المقطع المنسوخ هو:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>U</mi><mi>U</mi><mi>U</mi><mtext> </mtext><mi>U</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



نكتب DNA القالب متممًا وباتجاه معاكس، مستخدمين T بدل U.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>C</mi><mi>C</mi><mtext> </mtext><mi>A</mi><mi>T</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>A</mi><mtext> </mtext><mi>T</mi><mi>A</mi><mi>C</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



هذا هو شريط القالب المطلوب.

**المصدر:** الصفحات 15، 16 من الكتاب.

:::

:::exam-question
id: bio-b-p023-q2-4
title: الرزمة التعليمية، صفحة 23، السؤال 2-4
question: اكتب تسلسل الكودونات على شريط mRNA.
reference: [الرزمة التعليمية، صفحة PDF 23](https://moe.edu.ps/m/4061#page=23) · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
المقطع الداخلي الآتي من عديد ببتيد مرتب من طرفه الأميني نحو طرفه الكربوكسيلي: فينيل ألانين ← تربتوفان ← تيروسين ← غلايسين ← ميثيونين. يُقرأ ترتيب الأسماء كما سُرد هنا، بدءًا بفينيل ألانين. اكتب كودونات mRNA المقابلة مع اتجاه الشريط، مستعينًا بالجدول.

| الحمض الأميني | الكودون المضاد مكتوبًا 3′→5′ |
|---|---|
| ميثيونين | UAC |
| غلايسين | CCA |
| تيروسين | AUG |
| تربتوفان | ACC |
| فينيل ألانين | AAA |
solution:
هذا مقطع داخلي، فلا يلزم أن يبدأ بالميثيونين. نرتب الكودونات حسب ترتيب الأحماض المعطى. يقابل كل كودون مضاد كودون متمم له وباتجاه معاكس.

| الحمض بالترتيب | الكودون المضاد \`latex: 3^{\\prime}\\to5^{\\prime}\` | كودون mRNA باتجاه \`latex: 5^{\\prime}\\to3^{\\prime}\` |
|---|---|---|
| فينيل ألانين | AAA | UUU |
| تربتوفان | ACC | UGG |
| تيروسين | AUG | UAC |
| غلايسين | CCA | GGU |
| ميثيونين | UAC | AUG |

نصل الكودونات دون قلب ترتيبها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>U</mi><mi>U</mi><mi>U</mi><mtext> </mtext><mi>U</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



هذا هو تسلسل المقطع المطلوب.

**المصدر:** الصفحات 15، 16 من الكتاب.

:::

:::mcq
id: bio-q-p040-q1
title: تصنيف الأسئلة، صفحة 40، السؤال 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 40
question: في أي مرحلة يشكل المحفز مكاناً لارتباط إنزيم بلمرة RNA؟
- [ ] option-1 | أ- بدء الترجمة
- [x] option-2 | ب- بدء النسخ
- [ ] option-3 | ج- إنهاء الترجمة
- [ ] option-4 | د- إنهاء النسخ
explanation:
**الإجابة:** ب- بدء النسخ

**الشاهد من الكتاب:**

> ترتبط عوامل النسخ Transcription Factors وإنزيم بلمرة RNA على بداية الجين المراد نسخه من سلسلة DNA (3′→5′) وبالتحديد على تتابع معين من النيوكليوتيدات تسمى المحفز Promoter، حيث يتم فتح سلسلتي DNA الملتفتين في هذا الموقع، ويبدأ إنزيم بلمرة RNA بعملية النسخ.

**المصدر:** صفحة 17 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p040-q2
title: تصنيف الأسئلة، صفحة 40، السؤال 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 40 · صياغة تعليمية معدّلة
kicker: صياغة تعليمية معدّلة
question: إذا كان المقطع \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>T</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>T</mi><mi>A</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>\` من شريط DNA القالب، فأي البدائل يبين الكودونات المضادة التي تقابل كودونات mRNA المنسوخة عنه، مع مراعاة الاتجاه المكتوب؟
- [ ] option-1 | أ- \\(3'\\text{-}\\mathrm{AUG\\ GGC\\ GAU}\\text{-}5'\\)
- [x] option-2 | ب- \\(3'\\text{-}\\mathrm{AUG\\ CCG\\ CUA}\\text{-}5'\\)
- [ ] option-3 | ج- \\(5'\\text{-}\\mathrm{AUG\\ GGC\\ CUA}\\text{-}3'\\)
- [ ] option-4 | د- \\(5'\\text{-}\\mathrm{UAC\\ GGC\\ GAU}\\text{-}3'\\)
explanation:
يُنسخ mRNA متممًا للقالب وباتجاه معاكس، مع استعمال U بدل T.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>T</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>T</mi><mi>A</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>A</mi><mi>U</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



تتقابل الكودونات المضادة مع كودونات mRNA تكامليًا وباتجاه معاكس.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi></mrow><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>U</mi><mi>A</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



الإجابة: ب.

**المصدر:** صفحة 16 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p040-q3
title: تصنيف الأسئلة، صفحة 40، السؤال 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 40
question: ما المسؤول عن تكوين الرابطة الببتيدية أثناء عملية ترجمة عديد الببتيد؟
- [ ] option-1 | أ- إنزيم البلمرة
- [x] option-2 | ب- rRNA
- [ ] option-3 | ج- بروتينات الرايبوسوم
- [ ] option-4 | د- المحفز
explanation:
**الإجابة:** ب- rRNA

**الشاهد من الكتاب 1:**

> يدخل في بناء الرايبوسوم، ويمثل الناحية الوظيفية فيه، ويعمل على ربط الحموض الأمينية المتجاورة بروابط ببتيدية أثناء عملية الترجمة، ويبنى rRNA على شكل كروي، حيث يوجد منه عدة أنواع.

**المصدر:** صفحة 17 من الكتاب.



**الشاهد من الكتاب 2:**

> يعملrRNA في الوحدة البنائية الكبيرة كإنزيم رايبوزايم(Ribozyme) على تكوين رابطة ببتيدية بين الحمض الأميني في موقع(P) والحمض الأميني في موقع(A)، وعندها ينفصلtRNA في موقع(P) عن الحمض الأميني الحامل له، ويخرج من الموقع(E).

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p040-q4
title: تصنيف الأسئلة، صفحة 40، السؤال 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 40 · صياغة تعليمية معدّلة
kicker: صياغة تعليمية معدّلة
question: بروتين يتكون من 8 أحماض أمينية. كم قاعدة نيتروجينية يحتويها مقطع mRNA من كودون البدء إلى كودون إيقاف واحد شاملًا، دون المناطق غير المترجمة خارجه؟
- [ ] option-1 | أ- 8
- [ ] option-2 | ب- 34
- [x] option-3 | ج- 27
- [ ] option-4 | د- 30
explanation:
يحتاج كل حمض أميني كودونًا واحدًا، والبدء محسوب ضمن الأحماض الثمانية. نضيف كودون إيقاف واحدًا لأنه لا يشفر حمضًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>8</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>9</mn></mrow></math>
\`\`\`



كل كودون يحوي 3 قواعد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>9</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>27</mn></mrow></math>
\`\`\`



الإجابة: ج،27 قاعدة نيتروجينية.

**المصدر:** الصفحات 15، 20 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p040-q5
title: تصنيف الأسئلة، صفحة 40، السؤال 5
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 40
question: كم عدد الحموض الأمينية الناتجة من سلسلة mRNA التالية: (AUG CGA AUC CAC UAG)؟
- [ ] option-1 | أ- 3
- [x] option-2 | ب- 4
- [ ] option-3 | ج- 5
- [ ] option-4 | د- 6
explanation:
نقرأ mRNA من 5′ إلى 3′، ونقسمه إلى كودونات من ثلاث قواعد.
AUG كودون البدء ويضيف الميثيونين، ثم CGA و AUC و CAC تضيف ثلاثة أحماض أخرى.
UAG كودون إيقاف لا يضيف حمضاً أمينياً.
إذن العدد:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>1</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`



 أحماض أمينية.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p040-q7
title: تصنيف الأسئلة، صفحة 40، السؤال 7
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 40
question: إلى ماذا يشير الرمز (س) في الشكل المرفق؟
- [x] option-1 | أ- الوحدة البنائية الكبيرة
- [ ] option-2 | ب- موقع P
- [ ] option-3 | ج- ميثيونين
- [ ] option-4 | د- موقع ارتباط mRNA
explanation:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/a455bac427a16c2024ae.webp)

يشير السهم (س) إلى الجزء الكبير العلوي الذي يحيط بـtRNA؛ فهو **الوحدة البنائية الكبيرة للرايبوسوم**.

أما الشريط أسفل الشكل فهو mRNA، والجزء السفلي الصغير هو الوحدة البنائية الصغيرة.

**المصدر:** صفحة 19 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/8102b16e82cce9ef3046.webp)

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
example:
![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/a455bac427a16c2024ae.webp)
:::

:::mcq
id: bio-q-p040-q9
title: تصنيف الأسئلة، صفحة 40، السؤال 9
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 40
question: ما الموقع الذي تنفصل فيه سلسلة عديد الببتيد عن tRNA أثناء مرحلة الإنهاء لعملية الترجمة؟
- [ ] option-1 | أ- A
- [x] option-2 | ب- P
- [ ] option-3 | ج- E
- [ ] option-4 | د- B
explanation:
**الإجابة:** ب- P

**الشاهد من الكتاب:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p041-q10
title: تصنيف الأسئلة، صفحة 41، السؤال 10
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 41
question: في أي مرحلة من مراحل نسخ mRNA تعود سلسلتا DNA للالتفاف بمجرد مرور إنزيم بلمرة RNA مع استمرار إضافة النيوكليوتيدات المتممة؟
- [ ] option-1 | أ- البدء
- [x] option-2 | ب- الاستطالة
- [ ] option-3 | ج- الإنهاء
- [ ] option-4 | د- المعالجة
explanation:
**الإجابة:** ب- الاستطالة

**الشاهد من الكتاب:**

> يعمل إنزيم بلمرة RNA على إضافة نيوكليوتيدات، بحيث تكون متممة لتلك الموجودة على سلسلة DNA، التي تعمل كقالب، حيث تبدأ سلسلة mRNA في التكون، وبمجرد مرور الإنزيم تعود سلسلتا DNA للالتفاف مرة أخرى، ويستمر إضافة النيوكليوتيدات المتممة، ويحدث استطالة لجزيءmRNA.

**المصدر:** صفحة 18 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p041-q11
title: تصنيف الأسئلة، صفحة 41، السؤال 11
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 41
question: ما الرابطة التي تربط الكودون المضاد مع الكودون المتمم أثناء مرحلة الاستطالة في الترجمة؟
- [x] option-1 | أ- هيدروجينية
- [ ] option-2 | ب- ببتيدية
- [ ] option-3 | ج- ثلاثية الفوسفات
- [ ] option-4 | د- ثنائية الكبريت
explanation:
**الإجابة:** أ- هيدروجينية

**الشاهد من الكتاب:**

> يرتبط الكودون المضاد فيtRNA الحامل للحمض الأميني بروابط هيدروجينية مع الكودون المتمم علىmRNA في موقع(A).

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p041-q12
title: تصنيف الأسئلة، صفحة 41، السؤال 12
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 41
question: إلى ماذا يشير الرمز (ص) في الشكل المرفق؟
- [ ] option-1 | أ- الوحدة البنائية الكبيرة
- [ ] option-2 | ب- الوحدة البنائية الصغيرة
- [x] option-3 | ج- tRNA البدء
- [ ] option-4 | د- موقع ارتباط mRNA
explanation:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/a302875587fc4bff5b19.webp)

يشير الخط (ص) إلى الجزيء الذي يحمل الميثيونين ويقابل كودون البدء AUG؛ فهو **tRNA البدء**.

يرتبط هذا الجزيء بكودون البدء في الموقع P عند بدء الترجمة.

**المصدر:** صفحة 19 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/8102b16e82cce9ef3046.webp)

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
example:
![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/a302875587fc4bff5b19.webp)
:::

:::mcq
id: bio-q-p041-q13
title: تصنيف الأسئلة، صفحة 41، السؤال 13
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 41 · صياغة تعليمية معدّلة
kicker: صياغة تعليمية معدّلة
question: في مخطط للنسخ كُتب شريط DNA القالب من 3′ إلى 5′. عند محاذاة السلاسل المتكاملة، ما اتجاها mRNA المنسوخ وشريط DNA المتمم للقالب، على الترتيب؟
- [ ] option-1 | أ- mRNA:5′→3′، و DNA المتمم:3′→5′
- [x] option-2 | ب- mRNA:5′→3′، و DNA المتمم:5′→3′
- [ ] option-3 | ج- mRNA:3′→5′، و DNA المتمم:5′→3′
- [ ] option-4 | د- mRNA:3′→5′، و DNA المتمم:3′→5′
explanation:
التكامل يكون بين شريطين متعاكسين في الاتجاه. ما دام القالب مكتوبًا 3′→5′، يكتب كل شريط متمم له في المحاذاة 5′→3′.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mo>⟶</mo><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mo>⟶</mo><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mo>−</mo><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mo>⟶</mo><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



الإجابة: ب؛ كلاهما 5′→3′ في المحاذاة المحددة.

**المصدر:** صفحة 16 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p041-q14
title: تصنيف الأسئلة، صفحة 41، السؤال 14
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 41
question: وفق تقسيم الكتاب لمكونات الرايبوسوم إلى أجزاء تركيبية وأجزاء وظيفية، أيّ البدائل يمثل الأجزاء التركيبية في هذا التقسيم؟

- [ ] option-1 | أ- rRNA
- [ ] option-2 | ب- mRNA
- [x] option-3 | ج- البروتينات
- [ ] option-4 | د- الإكسونات
explanation:
**الإجابة:** ج- البروتينات

**الشاهد من الكتاب:**

> ويتركب الرايبوسوم في الخلايا حقيقية النوى من وحدتين بنائيتين: وحدة بنائية صغيرة Small Subunit، ووحدة بنائية كبيرة Large Subunit. تتكون الوحدات البنائية للرايبوسوم من جزيئاتrRNA وبروتينات، وتمثل هذه البروتينات الأجزاء التركيبية للرايبوسوم، أما الأجزاء الوظيفية فتمثل جزيئاتrRNA.

**المصدر:** صفحة 18 من الكتاب.



يستعمل الكتاب هنا تقسيماً منهجياً: البروتينات للأجزاء التركيبية، وrRNA للأجزاء الوظيفية التي تكوّن الروابط الببتيدية.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q18
title: تصنيف الأسئلة، صفحة 42، السؤال 18
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42
question: أيّ البدائل الآتية يمثل شريط DNA القالب باتجاه قراءة إنزيم بلمرة RNA له أثناء النسخ؟

- [ ] option-1 | أ- سلسلة mRNA \\(5'\\rightarrow3'\\)
- [ ] option-2 | ب- سلسلة mRNA \\(3'\\rightarrow5'\\)
- [x] option-3 | ج- سلسلة DNA \\(3'\\rightarrow5'\\)
- [ ] option-4 | د- سلسلة DNA \\(5'\\rightarrow3'\\)
explanation:
**الإجابة:** ج- سلسلة DNA \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>→</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>\`

**الشاهد من الكتاب:**

> ترتبط عوامل النسخ Transcription Factors وإنزيم بلمرة RNA على بداية الجين المراد نسخه من سلسلة DNA (3′→5′) وبالتحديد على تتابع معين من النيوكليوتيدات تسمى المحفز Promoter، حيث يتم فتح سلسلتي DNA الملتفتين في هذا الموقع، ويبدأ إنزيم بلمرة RNA بعملية النسخ.

**المصدر:** صفحة 17 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q19
title: تصنيف الأسئلة، صفحة 42، السؤال 19
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42
question: ما دور RNA الرايبوسومي في عملية بناء البروتين؟
- [x] option-1 | أ- ربط الحموض الأمينية بروابط ببتيدية.
- [ ] option-2 | ب- نقل الحموض الأمينية إلى السيتوبلازم.
- [ ] option-3 | ج- نقل الحموض الأمينية إلى الرايبوسوم.
- [ ] option-4 | د- تشكيل قالب لصنع البروتين من قبل الرايبوسوم.
explanation:
**الإجابة:** أ- ربط الحموض الأمينية بروابط ببتيدية.

**الشاهد من الكتاب 1:**

> يدخل في بناء الرايبوسوم، ويمثل الناحية الوظيفية فيه، ويعمل على ربط الحموض الأمينية المتجاورة بروابط ببتيدية أثناء عملية الترجمة، ويبنى rRNA على شكل كروي، حيث يوجد منه عدة أنواع.

**المصدر:** صفحة 17 من الكتاب.



**الشاهد من الكتاب 2:**

> يعملrRNA في الوحدة البنائية الكبيرة كإنزيم رايبوزايم(Ribozyme) على تكوين رابطة ببتيدية بين الحمض الأميني في موقع(P) والحمض الأميني في موقع(A)، وعندها ينفصلtRNA في موقع(P) عن الحمض الأميني الحامل له، ويخرج من الموقع(E).

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q20
title: تصنيف الأسئلة، صفحة 42، السؤال 20
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42
question: أي الكودونات الآتية يرتبط بها عامل بروتيني للإيقاف بدلاً من tRNA على الموقع A عند إنهاء عملية الترجمة؟
- [ ] option-1 | أ- AUG
- [ ] option-2 | ب- UAC
- [x] option-3 | ج- UAG
- [ ] option-4 | د- UGU
explanation:
**الإجابة:** ج- UAG

**الشاهد من الكتاب:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q21
title: تصنيف الأسئلة، صفحة 42، السؤال 21
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42
question: أين يرتبط إنزيم بلمرة RNA في مرحلة البدء من عملية النسخ؟
- [ ] option-1 | أ- الإنترون
- [ ] option-2 | ب- الكودون المضاد
- [x] option-3 | ج- المحفز
- [ ] option-4 | د- ذيل الأدنين
explanation:
**الإجابة:** ج- المحفز

**الشاهد من الكتاب:**

> ترتبط عوامل النسخ Transcription Factors وإنزيم بلمرة RNA على بداية الجين المراد نسخه من سلسلة DNA (3′→5′) وبالتحديد على تتابع معين من النيوكليوتيدات تسمى المحفز Promoter، حيث يتم فتح سلسلتي DNA الملتفتين في هذا الموقع، ويبدأ إنزيم بلمرة RNA بعملية النسخ.

**المصدر:** صفحة 17 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q24
title: تصنيف الأسئلة، صفحة 42، السؤال 24
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42
question: ما الحمض النووي الذي يعمل على ربط الحموض الأمينية المتجاورة بروابط ببتيدية أثناء عملية الترجمة؟
- [ ] option-1 | أ- DNA
- [ ] option-2 | ب- tRNA
- [ ] option-3 | ج- mRNA
- [x] option-4 | د- rRNA
explanation:
**الإجابة:** د- rRNA

**الشاهد من الكتاب 1:**

> يدخل في بناء الرايبوسوم، ويمثل الناحية الوظيفية فيه، ويعمل على ربط الحموض الأمينية المتجاورة بروابط ببتيدية أثناء عملية الترجمة، ويبنى rRNA على شكل كروي، حيث يوجد منه عدة أنواع.

**المصدر:** صفحة 17 من الكتاب.



**الشاهد من الكتاب 2:**

> يعملrRNA في الوحدة البنائية الكبيرة كإنزيم رايبوزايم(Ribozyme) على تكوين رابطة ببتيدية بين الحمض الأميني في موقع(P) والحمض الأميني في موقع(A)، وعندها ينفصلtRNA في موقع(P) عن الحمض الأميني الحامل له، ويخرج من الموقع(E).

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p042-q25
title: تصنيف الأسئلة، صفحة 42، السؤال 25
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 42
question: إذا كانت الثلاثية \\(3'\\text{-}\\mathrm{CAG}\\text{-}5'\\) تمثل جزءًا من شريط DNA القالب الذي سيُنسخ إلى mRNA، فأي الآتية صحيحة؟



- [x] option-1 | أ- \\(3'\\text{-}\\mathrm{CAG}\\text{-}5'\\) هو تتابع الكودون المضاد على tRNA المقابل للكودون المنسوخ
- [ ] option-2 | ب- \\(3'\\text{-}\\mathrm{GUC}\\text{-}5'\\) تمثل كودوناً
- [ ] option-3 | ج- \\(5'\\text{-}\\mathrm{GTC}\\text{-}3'\\) تمثل كودوناً
- [ ] option-4 | د- \\(5'\\text{-}\\mathrm{CUG}\\text{-}3'\\) تمثل نيوكليوتيد DNA المقابل
explanation:
الكودون على mRNA، والكودون المضاد على tRNA، وهما متكاملان ومتعاكسا الاتجاه.
بما أن المعطى جزء من الجين المراد نسخه نعامله كقالب DNA:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>C</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>G</mi><mi>U</mi><mi>C</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>C</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



إذن البديل أ يصف تتابع الكودون المضاد على tRNA: 3′-CAG-5′. يتطابق تتابعه القاعدي هنا مع تتابع DNA القالب، لكن جزيء DNA نفسه لا يتحول إلى tRNA؛ فهما جزيئان مختلفان.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p043-q1-1
title: تصنيف الأسئلة، صفحة 43، السؤال 1 (1)
question: ادرس الشكل الآتي: ما اسم كل من السلاسل (أ، ب، ج)؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ادرس الشكل الآتي: ما اسم كل من السلاسل (أ، ب، ج)؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/eac24d952e98a5131567.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/eac24d952e98a5131567.webp)

في الشكل أ يحتوي T ويُنسخ منه شريط مكمل، فهو DNA القالب.
السلسلة ب تحتوي U وتضم مقاطع الإكسونات والإنترون معاً، فهي mRNA الأولي.
السلسلة ج ناتجة بعد إزالة مقاطع الإنترون ووصل الإكسونات، فهي mRNA الناضج.
:::

:::exam-question
id: bio-q-p043-q1-2
title: تصنيف الأسئلة، صفحة 43، السؤال 1 (2)
question: ادرس الشكل الآتي: ماذا تسمى عملية تحول السلسلة أ إلى السلسلة ب، وعملية تحول السلسلة ب إلى السلسلة ج؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ادرس الشكل الآتي: ماذا تسمى عملية تحول السلسلة أ إلى السلسلة ب، وعملية تحول السلسلة ب إلى السلسلة ج؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/eac24d952e98a5131567.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/eac24d952e98a5131567.webp)

التحول من أ إلى ب هو النسخ: تستخدم الخلية DNA القالب لتكوين mRNA الأولي المكمل له.
التحول من ب إلى ج هو المعالجة: تُزال مقاطع الإنترون من RNA الأولي وتُوصل الإكسونات لتكوين mRNA الناضج.
اختفاء الأجزاء الوسطية في ج هو الدليل في الرسم على أن التحول الثاني معالجة.
:::

:::exam-question
id: bio-q-p043-q2-1
title: تصنيف الأسئلة، صفحة 43، السؤال 2 (1)
question: إذا كان لديك الشيفرة الوراثية على جزيء DNA كما في الشكل المجاور، علماً بأن الرقم (2) يمثل إنتروناً عند نسخ DNA: اكتب الشيفرات المشار إليها بالأرقام (1) و(3).
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لديك الشيفرة الوراثية على جزيء DNA كما في الشكل المجاور، علماً بأن الرقم (2) يمثل إنتروناً عند نسخ DNA: اكتب الشيفرات المشار إليها بالأرقام (1) و(3).

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/1cd074ac864bd29f6593.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/1cd074ac864bd29f6593.webp)

في شريطي DNA تتكامل A مع T و C مع G، ويكون الشريطان متعاكسي الاتجاه. نملأ كل فراغ بالثلاثية المقابلة له في الرسم.
(1) يقابل ATG؛ إذن المتمم TAC.
(3) يقابل CTA؛ إذن المتمم GAT.
لا نحذف الإنترون عند إكمال DNA؛ حذفه يخص معالجة RNA بعد النسخ.
:::

:::exam-question
id: bio-q-p043-q3-1
title: تصنيف الأسئلة، صفحة 43، السؤال 3 (1)
question: إذا كان لديك سلسلة عديد الببتيد الآتية (أرجنين - برولين - ألانين - ميثيونين)، فأجب مستعيناً بالجدول المرفق:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
المقطع الداخلي التالي مرتب من طرفه الأميني إلى طرفه الكربوكسيلي: أرجنين، ثم برولين، ثم ألانين، ثم ميثيونين. اكتب شريط DNA القالب المقابل مع اتجاهه، مستعينًا بالجدول الذي يكتب الكودونات المضادة من 3′ إلى 5′.

| الحمض الأميني | الكودون المضاد 3′→5′ |
|---|---|
| برولين | GGU |
| ميثيونين | UAC |
| ألانين | CGA |
| أرجنين | GCU |
solution:
نبدأ بالأرجنين لأنه بداية المقطع المعطى، وليس بداية بروتين كامل. نستنتج الكودونات بتكامل المضاد المكتوب 3′→5′ مع mRNA المكتوب 5′→3′.

| الحمض | الكودون المضاد \`latex: 3^{\\prime}\\to5^{\\prime}\` | الكودون \`latex: 5^{\\prime}\\to3^{\\prime}\` |
|---|---|---|
| أرجنين | GCU | CGA |
| برولين | GGU | CCA |
| ألانين | CGA | GCU |
| ميثيونين | UAC | AUG |



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>C</mi><mi>G</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>A</mi><mtext> </mtext><mi>G</mi><mi>C</mi><mi>U</mi><mtext> </mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



نكتب شريط DNA القالب متممًا له وباتجاه معاكس.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>G</mi><mi>C</mi><mi>T</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>T</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>A</mi><mtext> </mtext><mi>T</mi><mi>A</mi><mi>C</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



هذا هو التسلسل المطلوب.

**المصدر:** الصفحات 15، 16 من الكتاب.

:::

:::exam-question
id: bio-q-p043-q3-2
title: تصنيف الأسئلة، صفحة 43، السؤال 3 (2)
question: إذا كان لديك سلسلة عديد الببتيد الآتية (أرجنين - برولين - ألانين - ميثيونين)، فأجب مستعيناً بالجدول المرفق:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لديك سلسلة عديد الببتيد الآتية (أرجنين - برولين - ألانين - ميثيونين)، فأجب مستعيناً بالجدول المرفق:

| الحمض الأميني | الكودون المضاد |
|---|---|
| برولين | GGU |
| ميثيونين | UAC |
| ألانين | CGA |
| أرجنين | GCU |

2- ما الكودون الذي يشفر الحمض الأميني برولين؟
solution:
يدل كودون الميثيونين المضاد UAC في الجدول، المقابل لكودون البدء AUG، على أن ثلاثيات الكودون المضاد معروضة من 3′ إلى 5′.

الكودون المضاد للبرولين في الجدول هو GGU. يقابله كودون على mRNA بالتكامل A↔U و C↔G وباتجاه معاكس:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>G</mi><mi>G</mi><mi>U</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>↔</mo><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>C</mi><mi>C</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



إذن الكودون CCA.
:::

:::exam-question
id: bio-q-p043-q3-3
title: تصنيف الأسئلة، صفحة 43، السؤال 3 (3)
question: إذا كان لديك سلسلة عديد الببتيد الآتية (أرجنين - برولين - ألانين - ميثيونين)، فأجب مستعيناً بالجدول المرفق:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا كان لديك سلسلة عديد الببتيد الآتية (أرجنين - برولين - ألانين - ميثيونين)، فأجب مستعيناً بالجدول المرفق:

| الحمض الأميني | الكودون المضاد |
|---|---|
| برولين | GGU |
| ميثيونين | UAC |
| ألانين | CGA |
| أرجنين | GCU |

3- ما كودون البدء في عملية الترجمة؟
solution:
**الإجابة:** AUG.

**الشاهد من الكتاب:**

> يرتبطmRNA بالوحدة البنائية الصغيرة في الرايبوسوم، بحيث يكون كودون البدء(AUG) في موقعP، ويرتبط جزيءtRNA الحامل للميثيونين على كودون البدء.

**المصدر:** صفحة 19 من الكتاب.



:::

:::exam-question
id: bio-q-p043-q4-1
title: تصنيف الأسئلة، صفحة 43، السؤال 4 (1)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ماذا تمثل السلاسل (أ، ب، ج)؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ماذا تمثل السلاسل (أ، ب، ج)؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/52be60c3376c3b45aca5.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/52be60c3376c3b45aca5.webp)

أ هو DNA القالب؛ يتميز بوجود T في AAT.
ب هو tRNA؛ تسلسله AAU يطابق تسلسل القالب مع U بدلاً من T، ويمثل الكودونات المضادة.
ج هو mRNA؛ كودوناته مكملة للقالب وللكودونات المضادة، ومنها AAA في العمود الأوسط.
:::

:::exam-question
id: bio-q-p043-q4-2
title: تصنيف الأسئلة، صفحة 43، السؤال 4 (2)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: أكمل الشيفرات الناقصة.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: أكمل الشيفرات الناقصة.

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/52be60c3376c3b45aca5.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/52be60c3376c3b45aca5.webp)

الكودون على mRNA مكمل للكودون المضاد على tRNA، وكلاهما متعاكس الاتجاه؛ A↔U و C↔G. أما DNA القالب فيحتوي T بدلاً من U.
في العمود الأوسط كودون mRNA هو AAA؛ يقابله tRNA: UUU، و DNA القالب: TTT؛ إذن (1) هو TTT و(2) هو UUU.
في العمود الأول يقابل DNA: AAT الكودون UUA؛ إذن (3) هو UUA.
في العمود الأخير يقابل القالب GCC الكودون CGG؛ إذن (4) هو CGG.
تُقرأ سلاسل mRNA من 5′ إلى 3′، والسلاسل المقابلة لها من 3′ إلى 5′.
:::

:::mcq
id: bio-q-p043-q26
title: تصنيف الأسئلة، صفحة 43، السؤال 26
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
question: ما نوع الرابطة بين الكودون المضاد على tRNA والكودون المتمم على mRNA؟
- [x] option-1 | أ- هيدروجينية
- [ ] option-2 | ب- ببتيدية
- [ ] option-3 | ج- أيونية
- [ ] option-4 | د- تساهمية
explanation:
**الإجابة:** أ- هيدروجينية

**الشاهد من الكتاب:**

> يرتبط الكودون المضاد فيtRNA الحامل للحمض الأميني بروابط هيدروجينية مع الكودون المتمم علىmRNA في موقع(A).

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p043-q28
title: تصنيف الأسئلة، صفحة 43، السؤال 28
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 43
question: أيّ البدائل الآتية يمثل ثلاثية في شريط DNA قالب تُنسخ إلى كودون إيقاف على mRNA، مع مراعاة الاتجاه المكتوب؟

- [x] option-1 | أ- \\(3'\\text{-}\\mathrm{ATC}\\text{-}5'\\)
- [ ] option-2 | ب- \\(5'\\text{-}\\mathrm{ACT}\\text{-}3'\\)
- [ ] option-3 | ج- \\(3'\\text{-}\\mathrm{UGA}\\text{-}5'\\)
- [ ] option-4 | د- \\(3'\\text{-}\\mathrm{UAA}\\text{-}5'\\)
explanation:
ننسخ DNA القالب إلى mRNA بالتكامل A↔U و T↔A و C↔G، مع تعاكس اتجاه الشريطين.
للخيار أ:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>T</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>⟷</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



UAG كودون إيقاف، إذن أ صحيح.
أما 5′-ACT-3′ إذا كان قالباً فيعطي 5′-AGU-3′ بعد كتابته بالاتجاه الصحيح، وليس UGA. والثلاثيتان المحتويتان U في الخيارين ج ود مكتوبتان 3′→5′؛ فلا تُقرأان ككودوني الإيقاف المدونين في جدول 5′→3′.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p044-q5-1
title: تصنيف الأسئلة، صفحة 44، السؤال 5 (1)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ماذا تمثل السلاسل (أ، ب، ج)؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ماذا تمثل السلاسل (أ، ب، ج)؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/f5bef7799afdee63959e.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/f5bef7799afdee63959e.webp)

ب هو DNA القالب لأن فيه T في الثلاثية TCC.
أ هو tRNA لأن كودوناته المضادة تطابق تسلسل القالب مع U بدلاً من T، مثل UCC مقابل TCC.
ج هو mRNA المكمل لهما؛ ففي العمود الأوسط الكودون CGA.
إذن أ: tRNA، ب: DNA القالب، ج: mRNA.
:::

:::exam-question
id: bio-q-p044-q5-2
title: تصنيف الأسئلة، صفحة 44، السؤال 5 (2)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: أكمل الشيفرات (1، 2، 3، 4، 5) على السلاسل.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: أكمل الشيفرات (1، 2، 3، 4، 5) على السلاسل.

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/f5bef7799afdee63959e.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/f5bef7799afdee63959e.webp)

في النسخ يتكامل DNA القالب مع mRNA: A↔U و T↔A و C↔G. ويقابل كودون mRNA كودون مضاد على tRNA بالاتجاه المعاكس.
العمود الأوسط: mRNA هو CGA؛ إذن tRNA عند (1) هو GCU، و DNA عند (2) هو GCT.
العمود الأخير: tRNA هو GUA؛ إذن DNA القالب عند (3) هو GTA، و mRNA عند (5) هو CAU.
العمود الأول: DNA هو TCC و tRNA هو UCC؛ إذن mRNA عند (4) هو AGG.
تُكتب كودونات mRNA من 5′ إلى 3′ وما يقابلها من القالب والكودونات المضادة من 3′ إلى 5′.
:::

:::exam-question
id: bio-q-p044-q5-3
title: تصنيف الأسئلة، صفحة 44، السؤال 5 (3)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ما رمز السلسلة التي تحتوي الكودونات المضادة؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ما رمز السلسلة التي تحتوي الكودونات المضادة؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/f5bef7799afdee63959e.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/f5bef7799afdee63959e.webp)

السلسلة أ، وهي tRNA.
الكودون المضاد ثلاث قواعد على tRNA تتعرف تكاملياً إلى كودون mRNA. في الشكل مثلاً UCC في أ يقابله AGG في ج؛ لذلك أ سلسلة الكودونات المضادة.
:::

:::exam-question
id: bio-q-p044-q6-1
title: تصنيف الأسئلة، صفحة 44، السؤال 6 (1)
question: لديك التسلسل الآتي على شريط DNA، مستعيناً بالجدول المرفق أجب:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك التسلسل الآتي على شريط DNA، مستعيناً بالجدول المرفق أجب:

TAC GGT GCC ACA CTT ATT

| الحمض الأميني | سيستين | برولين | أرجنين | حمض غلوتاميك |
|---|---|---|---|---|
| الكودون المضاد | ACA | GGU | GCC | CUU |

1- اكتب تسلسل الحموض الأمينية في سلسلة عديد الببتيد الناتج.
solution:
نعامل DNA المعطى قالباً من 3′ إلى 5′؛ فهذا يجعل GGT يقابل كودون البرولين CCA، المتكامل مع مضاده GGU في الجدول. ويصبح TAC في بدايته مقابلاً لـAUG كودون البدء. في النسخ A↔U و T↔A و C↔G، ويتكون mRNA من 5′ إلى 3′:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>T</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>T</mi><mtext> </mtext><mi>G</mi><mi>C</mi><mi>C</mi><mtext> </mtext><mi>A</mi><mi>C</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>T</mi><mi>T</mi><mtext> </mtext><mi>A</mi><mi>T</mi><mi>T</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>G</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



تحدد كودونات tRNA المضادة في الجدول الأحماض المقابلة: CCA للبرولين، CGG للأرجنين، UGU للسيستين، GAA للغلوتاميك.
AUG يعطي الميثيونين، و UAA للإيقاف ولا يضيف حمضاً.
إذن السلسلة: ميثيونين ← برولين ← أرجنين ← سيستين ← حمض غلوتاميك.
:::

:::exam-question
id: bio-q-p044-q6-2
title: تصنيف الأسئلة، صفحة 44، السؤال 6 (2)
question: لديك التسلسل الآتي على شريط DNA، مستعيناً بالجدول المرفق أجب:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك التسلسل الآتي على شريط DNA، مستعيناً بالجدول المرفق أجب:

TAC GGT GCC ACA CTT ATT

| الحمض الأميني | سيستين | برولين | أرجنين | حمض غلوتاميك |
|---|---|---|---|---|
| الكودون المضاد | ACA | GGU | GCC | CUU |

2- ما الكودون الذي يشفر الحمض الأميني غلوتاميك؟
solution:
الجدول يعطي CUU كودوناً مضاداً لحمض غلوتاميك. يتكامل مع كودون mRNA: C مع G و U مع A، وباتجاه معاكس:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>C</mi><mi>U</mi><mi>U</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>↔</mo><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>G</mi><mi>A</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



إذن الكودون المطلوب GAA، وهو أيضاً ناتج نسخ الثلاثية CTT في DNA القالب.
:::

:::exam-question
id: bio-q-p044-q6-3
title: تصنيف الأسئلة، صفحة 44، السؤال 6 (3)
question: لديك التسلسل الآتي على شريط DNA، مستعيناً بالجدول المرفق أجب:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك التسلسل الآتي على شريط DNA، مستعيناً بالجدول المرفق أجب:

TAC GGT GCC ACA CTT ATT

| الحمض الأميني | سيستين | برولين | أرجنين | حمض غلوتاميك |
|---|---|---|---|---|
| الكودون المضاد | ACA | GGU | GCC | CUU |

3- ما عدد جزيئات tRNA اللازمة لإتمام عملية الترجمة؟
solution:
DNA المعطى يُعامل قالباً من 3′ إلى 5′؛ بالتكامل A↔U و T↔A و C↔G نحصل على:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>G</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



الكودونات الخمسة الأولى تشفر خمسة أحماض أمينية؛ وكل حمض يصل على tRNA واحد.
UAA كودون إيقاف يرتبط به عامل بروتيني، فلا يحتاج tRNA.
إذن يلزم خمس عمليات حمل بواسطة tRNA، أي خمسة جزيئات في حسبة السؤال.
:::

:::exam-question
id: bio-q-p044-q7-a
title: تصنيف الأسئلة، صفحة 44، السؤال 7 (a)
question: قارن بين مرحلة الإنهاء في كل من عمليتي نسخ mRNA وترجمة عديد الببتيد من حيث نقطة بدايتها.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين مرحلة الإنهاء في كل من عمليتي نسخ mRNA وترجمة عديد الببتيد من حيث نقطة بدايتها.
solution:
**الإجابة:** في النسخ: وصول إنزيم بلمرة RNA إلى منطقة الإنهاء. في الترجمة: وصول أحد كودونات الإيقاف UAA أو UAG أو UGA إلى الموقع A وارتباط عامل الإيقاف.

**الشاهد من الكتاب 1:**

> يصل إنزيم بلمرة RNA إلى تتابع معين من النيوكليوتيدات يسمى منطقة الإنهاء Termination Point، حيث ينفصل الإنزيم عن سلسلة DNA، وتطلق سلسلة mRNA الجديدة التي تم تصنيعها، وتعود سلسلتا DNA للالتفاف حول بعضهما ثانية. وتسمى السلسلة الناتجة mRNA الأولي Primary mRNA، حيث تمر هذه السلسلة بمرحلة معالجة لينتج من خلالها mRNA الناضج (الوظيفي) Functional mRNA.

**المصدر:** صفحة 18 من الكتاب.



**الشاهد من الكتاب 2:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



:::

:::exam-question
id: bio-q-p044-q7-b
title: تصنيف الأسئلة، صفحة 44، السؤال 7 (b)
question: قارن بين مرحلة الإنهاء في كل من عمليتي نسخ mRNA وترجمة عديد الببتيد من حيث مكان حدوثها.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين مرحلة الإنهاء في كل من عمليتي نسخ mRNA وترجمة عديد الببتيد من حيث مكان حدوثها.
solution:
**الإجابة:** في الخلية حقيقية النواة: إنهاء النسخ في النواة، وإنهاء الترجمة في السيتوسول عند الرايبوسوم.

**الشاهد من الكتاب 1:**

> يتم نسخ mRNA من إحدى سلاسل DNA (السلسلة 3′→5′ تشكل قالباً لعملية النسخ)، التي تمثل سلسلة مفردة تحمل المعلومات الخاصة ببناء البروتين الذي تحتاجه الخلية. ينتقل mRNA من النواة إلى السيتوسول، حيث يشكل قالباً لصنع البروتين من قبل الرايبوسوم.

**المصدر:** صفحة 16 من الكتاب.



**الشاهد من الكتاب 2:**

> يرتبطmRNA بالوحدة البنائية الصغيرة في الرايبوسوم، بحيث يكون كودون البدء(AUG) في موقعP، ويرتبط جزيءtRNA الحامل للميثيونين على كودون البدء.

**المصدر:** صفحة 19 من الكتاب.



:::

:::exam-question
id: bio-q-p044-q7-c
title: تصنيف الأسئلة، صفحة 44، السؤال 7 (c)
question: قارن بين مرحلة الإنهاء في كل من عمليتي نسخ mRNA وترجمة عديد الببتيد من حيث النواتج.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين مرحلة الإنهاء في كل من عمليتي نسخ mRNA وترجمة عديد الببتيد من حيث النواتج.
solution:
**الإجابة:** النسخ: mRNA أولي يحتاج إلى معالجة. الترجمة: سلسلة عديد ببتيد تحتاج إلى تعديل لتصبح بروتيناً وظيفياً فعالاً.

**الشاهد من الكتاب 1:**

> يصل إنزيم بلمرة RNA إلى تتابع معين من النيوكليوتيدات يسمى منطقة الإنهاء Termination Point، حيث ينفصل الإنزيم عن سلسلة DNA، وتطلق سلسلة mRNA الجديدة التي تم تصنيعها، وتعود سلسلتا DNA للالتفاف حول بعضهما ثانية. وتسمى السلسلة الناتجة mRNA الأولي Primary mRNA، حيث تمر هذه السلسلة بمرحلة معالجة لينتج من خلالها mRNA الناضج (الوظيفي) Functional mRNA.

**المصدر:** صفحة 18 من الكتاب.



**الشاهد من الكتاب 2:**

> بعد الانتهاء من عملية الترجمة وإنتاج سلسلة عديد الببتيد، تخضع السلسلة لعمليات تعديل، لتكوين بروتين وظيفي فعال.

**المصدر:** صفحة 20 من الكتاب.



:::

:::exam-question
id: bio-q-p044-q8-a1
title: تصنيف الأسئلة، صفحة 44، السؤال 8 (a1)
question: وضح دور إنزيم بلمرة RNA خلال مرحلة البدء من عملية نسخ mRNA.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح دور إنزيم بلمرة RNA خلال مرحلة البدء من عملية نسخ mRNA.
solution:
**الإجابة:** يرتبط ببداية الجين المراد نسخه، وتحديداً بالمحفز؛ فيفتح شريطي DNA ويبدأ عملية النسخ.

**الشاهد من الكتاب:**

> ترتبط عوامل النسخ Transcription Factors وإنزيم بلمرة RNA على بداية الجين المراد نسخه من سلسلة DNA (3′→5′) وبالتحديد على تتابع معين من النيوكليوتيدات تسمى المحفز Promoter، حيث يتم فتح سلسلتي DNA الملتفتين في هذا الموقع، ويبدأ إنزيم بلمرة RNA بعملية النسخ.

**المصدر:** صفحة 17 من الكتاب.



:::

:::exam-question
id: bio-q-p044-q8-b
title: تصنيف الأسئلة، صفحة 44، السؤال 8 (b)
question: اشرح مرحلة الاستطالة في عملية الترجمة خلال بناء البروتين.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اشرح مرحلة الاستطالة في عملية الترجمة خلال بناء البروتين.
solution:
الاستطالة تعني إضافة الأحماض الأمينية تباعاً بحسب ترتيب كودونات mRNA.
1. يدخل tRNA الحامل للحمض التالي إلى الموقع A؛ ويتعرف كودونه المضاد إلى كودون mRNA بروابط هيدروجينية بين A و U وبين C و G.
2. يحفز rRNA في الوحدة الكبيرة تكوين رابطة ببتيدية؛ فتنتقل السلسلة المحمولة على tRNA في P إلى الحمض الذي يحمله tRNA في A.
3. يتقدم الرايبوسوم على mRNA بمقدار كودون واحد؛ فينتقل حامل السلسلة من A إلى P، وينتقل tRNA الفارغ إلى E ويخرج.
4. يصبح A فارغاً ليستقبل tRNA الموافق للكودون التالي؛ وتتكرر الدورة ما دام الكودون يشفر حمضاً أمينياً.
:::

:::exam-question
id: bio-q-p044-q9-1
title: تصنيف الأسئلة، صفحة 44، السؤال 9 (1)
question: إذا علمت أن الحمض الأميني الرابع في سلسلة عديد الببتيد المترجم من أحد السلاسل الآتية هو الميثيونين: ماذا تمثل الشيفرات 1، 2، 3؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن الحمض الأميني الرابع في سلسلة عديد الببتيد المترجم من أحد السلاسل الآتية هو الميثيونين: ماذا تمثل الشيفرات 1، 2، 3؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/0dc64fef9573c54be88e.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/0dc64fef9573c54be88e.webp)

في الموضع الأول يظهر TAC في السلسلة 1؛ وهو يحتوي T فيمثل DNA القالب.
يقابله كودون البدء AUG على mRNA، فتكون السلسلة 3 هي mRNA.
السلسلة 2 هي tRNA لأنها تحمل الكودونات المضادة المكملة للسلسلة 3؛ و UAC في موضعها الرابع يقابل AUG الذي يشفر الميثيونين المعطى.
إذن 1: DNA القالب، 2: tRNA، 3: mRNA.
:::

:::exam-question
id: bio-q-p044-q9-2
title: تصنيف الأسئلة، صفحة 44، السؤال 9 (2)
question: إذا علمت أن الحمض الأميني الرابع في سلسلة عديد الببتيد المترجم من أحد السلاسل الآتية هو الميثيونين: أكمل الشيفرات الوراثية الناقصة.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
إذا علمت أن الحمض الأميني الرابع في سلسلة عديد الببتيد المترجم من أحد السلاسل الآتية هو الميثيونين: أكمل الشيفرات الوراثية الناقصة.

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/0dc64fef9573c54be88e.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/0dc64fef9573c54be88e.webp)

الكودون على mRNA مكمل للكودون المضاد، A↔U و C↔G؛ ويكون DNA القالب مثله في المقابلة مع T بدلاً من U. تكتب السلاسل المقابلة متعاكسة الاتجاه.
الموضع الأول TAC في القالب يعطي AUG على mRNA و UAC على tRNA.
الموضع الثاني UCU على tRNA يعطي AGA على mRNA و TCT على DNA.
الموضع الثالث AGG على mRNA يعطي UCC على tRNA و TCC على DNA.
الميثيونين الرابع كودونه AUG؛ إذن مضاده UAC وقالب DNA له TAC.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>T</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>T</mi><mi>C</mi><mi>T</mi><mtext> </mtext><mi>T</mi><mi>C</mi><mi>C</mi><mtext> </mtext><mi>T</mi><mi>A</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>t</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>U</mi><mi>C</mi><mi>U</mi><mtext> </mtext><mi>U</mi><mi>C</mi><mi>C</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>G</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>U</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: bio-q-p044-q10
title: تصنيف الأسئلة، صفحة 44، السؤال 10
question: وضح مفهوم rRNA، وما الدور الحيوي الذي يقوم به؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح مفهوم rRNA، وما الدور الحيوي الذي يقوم به؟
solution:
**الإجابة:** هو RNA الرايبوسومي؛ يدخل في بناء الرايبوسوم ويمثل الناحية الوظيفية فيه. يعمل على ربط الحموض الأمينية المتجاورة بروابط ببتيدية أثناء الترجمة، ويبنى على شكل كروي ويوجد منه عدة أنواع.

**الشاهد من الكتاب:**

> يدخل في بناء الرايبوسوم، ويمثل الناحية الوظيفية فيه، ويعمل على ربط الحموض الأمينية المتجاورة بروابط ببتيدية أثناء عملية الترجمة، ويبنى rRNA على شكل كروي، حيث يوجد منه عدة أنواع.

**المصدر:** صفحة 17 من الكتاب.



:::

:::exam-question
id: bio-q-p044-q11-1
title: تصنيف الأسئلة، صفحة 44، السؤال 11 (1)
question: ادرس الشكل: ما الذي تدل عليه الأرقام (1)، (2)، (3)؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ادرس الشكل: ما الذي تدل عليه الأرقام (1)، (2)، (3)؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/250a6ca61707478cac0d.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/250a6ca61707478cac0d.webp)

(1) **الميثيونين**؛ هو الحمض الأميني المرتبط أعلى tRNA البدء.

(2) **الوحدة البنائية الصغيرة**؛ هي الجزء السفلي الذي يرتبط به mRNA أولاً.

(3) **موقع ارتباط mRNA**؛ هو الانغماد الذي يمر فيه الشريط على الوحدة الصغيرة.

**المصدر:** صفحة 19 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/8102b16e82cce9ef3046.webp)

:::

:::exam-question
id: bio-q-p044-q11-2
title: تصنيف الأسئلة، صفحة 44، السؤال 11 (2)
question: الأرقام (4) و(5) تدل على نهايتي سلسلة mRNA، فما النهاية التي يمثلها كل رقم منهما؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الأرقام (4) و(5) تدل على نهايتي سلسلة mRNA، فما النهاية التي يمثلها كل رقم منهما؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/250a6ca61707478cac0d.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/250a6ca61707478cac0d.webp)

تقرأ الرايبوسومات mRNA من الطرف 5′ إلى الطرف 3′، ويتعرف tRNA البدء إلى AUG قرب بداية المنطقة المترجمة.
في الشكل الطرف الأيسر المشار إليه بـ(4) هو 5′، والطرف الأيمن المشار إليه بـ(5) هو 3′؛ فتكون القراءة عبر الشكل من اليسار إلى اليمين.
:::

:::exam-question
id: bio-q-p044-q11-3
title: تصنيف الأسئلة، صفحة 44، السؤال 11 (3)
question: ما الموقع الذي يكون فيه tRNA الظاهر في الشكل في نهاية مرحلة البدء؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 44
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما الموقع الذي يكون فيه tRNA الظاهر في الشكل في نهاية مرحلة البدء؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/250a6ca61707478cac0d.webp)
solution:
**الإجابة:** الموقع P.

**الشاهد من الكتاب:**

> ترتبط الوحدة البنائية الكبيرة بالوحدة البنائية الصغيرة. ومع نهاية المرحلة يكونtRNA الحامل للميثيونين في موقع(P)، والموقع(A) يكون فارغاً ومستعداً لاستقبال جزيءtRNA التالي.

**المصدر:** صفحة 19 من الكتاب.



:::

:::exam-question
id: bio-q-p045-q12-1
title: تصنيف الأسئلة، صفحة 45، السؤال 12 (1)
question: الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 45
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:

1- ماذا تمثل السلاسل (1)، (2)، (3)؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/biology/source-crops/bio-q-p045-q12-figure.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/biology/source-crops/bio-q-p045-q12-figure.webp)

السلسلة 2 تبدأ AUG وتضم الكودونات التي تحدد الأحماض في الببتيد، فهي mRNA.
السلسلة 1 تكمل كودونات السلسلة 2، ومنها CCA مقابل GGU؛ فهي كودونات tRNA المضادة.
السلسلة 3 تحتوي T في TAC و ATG وتكمل mRNA، فهي DNA القالب.
إذن (1) tRNA، (2) mRNA، (3) DNA القالب.
:::

:::exam-question
id: bio-q-p045-q12-2
title: تصنيف الأسئلة، صفحة 45، السؤال 12 (2)
question: الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 45
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:

2- أكمل الشيفرات (أ)، (ب)، (ج).

![الشكل الأصلي المرفق بالسؤال](assets/lessons/biology/source-crops/bio-q-p045-q12-figure.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/biology/source-crops/bio-q-p045-q12-figure.webp)

تكتب كودونات mRNA من 5′ إلى 3′، والكودونات المضادة والقالب المقابل من 3′ إلى 5′. في RNA يتكامل A مع U و C مع G، وفي DNA يستخدم T بدل U.
أ على tRNA يقابل AUG في mRNA، إذن أ هو UAC.
ب على mRNA يقابل ACG في tRNA، إذن ب هو UGC.
ج على DNA القالب يقابل GGU في mRNA، إذن ج هو CCA.
:::

:::exam-question
id: bio-q-p045-q12-3
title: تصنيف الأسئلة، صفحة 45، السؤال 12 (3)
question: الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 45
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:

3- إذا تم اعتبار الترتيب الثلاثي (ACG) هو الأخير في عملية الترجمة، فماذا يسمى الكودون التالي له على mRNA؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/biology/source-crops/bio-q-p045-q12-figure.webp)
solution:
**الإجابة:** كودون إيقاف، ويكون أحد UAA أو UAG أو UGA.

**الشاهد من الكتاب 1:**

> AUG: ميثيونين أو بدء؛ UGG: تربتوفان؛ UGU وUGC: سيستين؛ CCU وCCC وCCA وCCG: برولين؛ UAU وUAC: تيروسين؛ UAA وUAG وUGA: توقف.

**المصدر:** صفحة 15 من الكتاب.



**الشاهد من الكتاب 2:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



:::

:::exam-question
id: bio-q-p045-q12-4
title: تصنيف الأسئلة، صفحة 45، السؤال 12 (4)
question: الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 45
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل المجاور يمثل سلاسل مختلفة من حموض نووية تسهم في بناء سلسلة عديد ببتيد معطاة، أجب عما يلي:

4- ما أسماء الحموض الأمينية المشار إليها بالرموز (د)، (ص)، (و)، مستعيناً بالجدول؟

| الحمض الأميني | غلايسين | تيروسين | سيستين |
|---|---|---|---|
| الكودون المضاد | CCA | AUG | ACG |

![الشكل الأصلي المرفق بالسؤال](assets/lessons/biology/source-crops/bio-q-p045-q12-figure.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/biology/source-crops/bio-q-p045-q12-figure.webp)

نطابق كل رمز مع الكودون فوقه على mRNA ثم مع الجدول: الكودون والكودون المضاد متكاملان ومتعاكسا الاتجاه، A↔U و C↔G.
د يقابل كودون GGU ومضاده CCA؛ فالحمض غلايسين.
ص يقابل كودون AUG، كودون البدء؛ فالحمض ميثيونين.
و يقابل كودون UGC ومضاده ACG؛ فالحمض سيستين.
إذن د: غلايسين، ص: ميثيونين، و: سيستين.
:::

:::exam-question
id: bio-q-p045-q14
title: تصنيف الأسئلة، صفحة 45، السؤال 14
question: قارن بين مرحلة الاستطالة ومرحلة الإنهاء خلال الترجمة من حيث دور الموقع (A).
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 45
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين مرحلة الاستطالة ومرحلة الإنهاء خلال الترجمة من حيث دور الموقع (A).
solution:
**الإجابة:** في الاستطالة يستقبل A جزيء tRNA الحامل للحمض التالي؛ وفي الإنهاء يستقبل عامل الإيقاف بدلاً من tRNA.

**الشاهد من الكتاب 1:**

> يرتبط الكودون المضاد فيtRNA الحامل للحمض الأميني بروابط هيدروجينية مع الكودون المتمم علىmRNA في موقع(A).

**المصدر:** صفحة 20 من الكتاب.



**الشاهد من الكتاب 2:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



:::

:::exam-question
id: bio-q-p045-q16-1
title: تصنيف الأسئلة، صفحة 45، السؤال 16 (1)
question: لديك السلسلة الآتية من DNA التي ستستخدم في بناء بروتين فاعل للخلية؛ التسلسل رقم (52) ينسخ منه إنترون والبقية ينتج منها إكسونات:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 45
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك السلسلة الآتية من DNA التي ستستخدم في بناء بروتين فاعل للخلية؛ التسلسل رقم (52) ينسخ منه إنترون والبقية ينتج منها إكسونات:

| رقم التسلسل | 50 | 51 | 52 | 53 |
|---|---|---|---|---|
| DNA | CGA | TCA | ATT | GGC |

1- اكتب النيوكليوتيدات في سلسلة DNA المتممة للسلسلة.
solution:
في DNA تتكامل A مع T و C مع G، ويكون الشريطان متعاكسي الاتجاه.
CGA→GCT، و TCA→AGT، و ATT→TAA، و GGC→CCG.
إذا كتبنا الشريط المعطى من 3′ إلى 5′ فالشريط المتمم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>G</mi><mi>C</mi><mi>T</mi><mtext> </mtext><mi>A</mi><mi>G</mi><mi>T</mi><mtext> </mtext><mi>T</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



نحتفظ بالثلاثية 52 هنا؛ حذف الإنترون يحدث في RNA أثناء المعالجة ولا يغير تسلسل DNA.
:::

:::exam-question
id: bio-q-p045-q16-4
title: تصنيف الأسئلة، صفحة 45، السؤال 16 (4)
question: لديك السلسلة الآتية منDNA والتي سيتم استخدامها في بناء بروتين فاعل للخلية؛ التسلسل رقم(52) ينسخ منه إنترون والبقية ينتج منها إكسونات:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 45
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك السلسلة القالب الآتية من DNA، مكتوبة من 3′ إلى 5′، والتي سيتم استخدامها في بناء بروتين فاعل للخلية؛ التسلسل رقم(52) ينسخ منه إنترون والبقية ينتج منها إكسونات:

| رقم التسلسل | 50 | 51 | 52 | 53 |
|---|---|---|---|---|
| DNA | CGA | TCA | ATT | GGC |

4- إذا تغيّر التتابع الثلاثي رقم (51) من TCA إلى ACT، ما أثر ذلك على الترجمة؟

solution:
المعطى ينص أن الثلاثية 51 أصبحت ACT على DNA القالب. في النسخ يقرأ القالب 3′→5′ ويُبنى mRNA المكمل 5′→3′، مع A↔U و T↔A و C↔G:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>C</mi><mi>T</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>⟷</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>G</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



UGA كودون إيقاف. ولأن الموضع 51 من الإكسونات يبقى بعد المعالجة، فتتوقف الترجمة عنده مبكراً وتنتج سلسلة أقصر من المقصودة.
سبب الإنهاء المبكر هو أن التتابع الجديد ACT في القالب يُنسخ إلى UGA، وليس مجرد حدوث تغير في تتابع القواعد.

:::

:::exam-question
id: bio-q-p046-q17
title: تصنيف الأسئلة، صفحة 46، السؤال 17
question: وضح مرحلة الاستطالة خلال نسخ mRNA للحصول على mRNA الأولي.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح مرحلة الاستطالة خلال نسخ mRNA للحصول على mRNA الأولي.
solution:
يتقدم إنزيم بلمرة RNA على DNA القالب من 3′ إلى 5′، ويضيف نيوكليوتيدات RNA إلى الطرف 3′ من السلسلة الجديدة؛ لذلك تنمو من 5′ إلى 3′.
تختار القواعد بالتكامل: A في القالب يقابله U، و T يقابله A، و C يقابله G والعكس.
تعود سلسلتا DNA خلف الإنزيم إلى الالتحام والالتفاف؛ ومع استمرار الإضافة تستطيل سلسلة mRNA الأولي.
:::

:::exam-question
id: bio-q-p046-q19
title: تصنيف الأسئلة، صفحة 46، السؤال 19
question: اشرح مراحل عملية نسخ mRNA.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اشرح مراحل عملية نسخ mRNA.
solution:
1. البدء: ترتبط عوامل النسخ وإنزيم بلمرة RNA بالمحفز عند بداية الجين؛ ويفتح DNA موضعياً ليظهر الشريط القالب.
2. الاستطالة: يقرأ الإنزيم القالب من 3′ إلى 5′، ويبني RNA من 5′ إلى 3′ بتكامل A↔U و T↔A و C↔G؛ ويعود DNA للالتفاف خلفه.
3. الإنهاء: يصل الإنزيم إلى منطقة الإنهاء، فينفصل عن DNA وتتحرر سلسلة mRNA الأولية، ويعود الشريطان للالتفاف.
السلسلة الأولية تحتاج معالجة لتصبح mRNA ناضجاً في نموذج الخلية حقيقية النواة.
:::

:::exam-question
id: bio-q-p046-q20
title: تصنيف الأسئلة، صفحة 46، السؤال 20
question: وضح المقصود بالترجمة كإحدى مراحل بناء البروتين.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بالترجمة كإحدى مراحل بناء البروتين.
solution:
**الإجابة:** تحويل المعلومات من لغة جزيئية لأخرى، بتحويل تسلسل النيوكليوتيدات في mRNA إلى تسلسل الحموض الأمينية في بناء البروتين.

**الشاهد من الكتاب:**

> تمثل عملية ترجمة المعلومات من لغة جزيئية لأخرى، وذلك بتحويل تسلسل النيوكليوتيدات فيmRNA إلى تسلسل الحموض الأمينية في عملية بناء البروتين.

**المصدر:** صفحة 18 من الكتاب.



:::

:::exam-question
id: bio-q-p046-q22-1
title: تصنيف الأسئلة، صفحة 46، السؤال 22 (1)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ماذا تمثل السلاسل (أ، ب، ج)؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: ماذا تمثل السلاسل (أ، ب، ج)؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/3d791376bebfb2e74967.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/3d791376bebfb2e74967.webp)

السلسلة أ فيها TAT، فتحتوي الثايمين وتكون DNA القالب.
ب فيها UAU الموافق للقالب مع استبدال T بـ U، فهي كودونات tRNA المضادة.
ج مكملة لهما؛ ومنها AUA في العمود الأوسط، فهي mRNA.
إذن أ: DNA القالب، ب: tRNA، ج: mRNA.
:::

:::exam-question
id: bio-q-p046-q22-2
title: تصنيف الأسئلة، صفحة 46، السؤال 22 (2)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: أكمل الشيفرات (1، 2، 3، 4) على السلاسل.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: أكمل الشيفرات (1، 2، 3، 4) على السلاسل.

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/3d791376bebfb2e74967.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/3d791376bebfb2e74967.webp)

في RNA تتكامل A مع U و C مع G، ويكون كودون mRNA ومضاده متعاكسي الاتجاه؛ أما DNA القالب فيحمل T بدل U.
بالعمود الأوسط AUA في mRNA يقابله UAU في tRNA و TAT في القالب؛ إذن (1) هو TAT و(2) هو UAU.
بالعمود الأول TAT في القالب يعطي AUA في mRNA؛ إذن (3) هو AUA.
بالعمود الأخير CCG في القالب يقابله GGC في mRNA؛ إذن (4) هو GGC.
نكتب mRNA من 5′ إلى 3′، وما يقابله من القالب والمضاد من 3′ إلى 5′.
:::

:::exam-question
id: bio-q-p046-q22-3
title: تصنيف الأسئلة، صفحة 46، السؤال 22 (3)
question: يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: اكتب نيوكليوتيدات سلسلة DNA المتممة للقالب.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في هذا التمثيل، اعتبر شريط DNA هو الشريط القالب للنسخ. اقرأ كودونات mRNA من اليسار إلى اليمين باتجاه 5′→3′، والمقابل لها على DNA وtRNA باتجاه 3′→5′.

يمثل الشكل المجاور سلاسل مختلفة من حموض نووية تسهم في بناء البروتين: اكتب نيوكليوتيدات سلسلة DNA المتممة للقالب.

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/3d791376bebfb2e74967.webp)

solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/3d791376bebfb2e74967.webp)

القالب في الرسم بعد إكماله هو TAT TAT CCG.
تكامل شريطي DNA هو A↔T و C↔G مع تعاكس الاتجاه: TAT→ATA، و TAT→ATA، و CCG→GGC.
إذا كان القالب 3′→5′، فإن الشريط المتمم:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>T</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>T</mi><mi>A</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>C</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: bio-q-p046-q25
title: تصنيف الأسئلة، صفحة 46، السؤال 25
question: صف تركيب الرايبوسوم، موضحاً المواقع الأربعة للرايبوسوم.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 46
answer-label: الإجابة والشرح من المجموعة المصححة
body:
صف تركيب الرايبوسوم، موضحاً المواقع الأربعة للرايبوسوم.
solution:
**الإجابة:** يتكون الرايبوسوم من وحدتين بنائيتين: صغيرة وكبيرة، تتألفان من rRNA وبروتينات. البروتينات أجزاؤه التركيبية وrRNA أجزاؤه الوظيفية.

له أربعة مواقع: موقع ارتباط mRNA في منطقة الانغماد بين الوحدتين، وثلاثة مواقع لارتباط tRNA على الوحدة الكبيرة، هي A (Aminoacyl)، وP (Peptidyl)، وE (Exit).

**الشاهد من الكتاب 1:**

> ويتركب الرايبوسوم في الخلايا حقيقية النوى من وحدتين بنائيتين: وحدة بنائية صغيرة Small Subunit، ووحدة بنائية كبيرة Large Subunit. تتكون الوحدات البنائية للرايبوسوم من جزيئاتrRNA وبروتينات، وتمثل هذه البروتينات الأجزاء التركيبية للرايبوسوم، أما الأجزاء الوظيفية فتمثل جزيئاتrRNA.

**المصدر:** صفحة 18 من الكتاب.



**الشاهد من الكتاب 2:**

> يحتوي الرايبوسوم على أربعة مواقع: موقع لارتباطmRNA: تمثل منطقة الانغماد بين الوحدتين البنائيتين. ثلاثة مواقع لارتباطtRNA: تمثل ثلاثة انغمادات على الوحدة البنائية الكبيرة للرايبوسوم، وموقعاً لارتباط جزيئاتtRNA، وهذه المواقع هي(A) و(P) و(E). وتعني ما يأتي:(A: Aminoacyl) و(P: Peptidyl) و(E: Exit).

**المصدر:** صفحة 19 من الكتاب.



:::

:::mcq
id: bio-q-p047-q1
title: تصنيف الأسئلة، صفحة 47، السؤال 1
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 47
question: الشكل المجاور يمثل إحدى مراحل عملية الترجمة، ما الكودون المضاد الذي يشير إليه السهم؟
- [ ] option-1 | \\(5'\\text{-}\\mathrm{AUG}\\text{-}3'\\)
- [x] option-2 | \\(3'\\text{-}\\mathrm{UAC}\\text{-}5'\\)
- [ ] option-3 | \\(5'\\text{-}\\mathrm{UAC}\\text{-}3'\\)
- [ ] option-4 | \\(3'\\text{-}\\mathrm{AUG}\\text{-}5'\\)
explanation:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/2ec0e59fb431b86f8c8f.webp)

السهم يشير إلى الكودون المضاد على tRNA البدء الحامل للميثيونين.
كودون البدء على mRNA هو 5′-AUG-3′، والتكامل A↔U و C↔G يقتضي مضاداً معاكس الاتجاه:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>↔</mo><mi>t</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



إذن الاختيار الثاني 3′-UAC-5′.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
example:
![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/2ec0e59fb431b86f8c8f.webp)
:::

:::mcq
id: bio-q-p047-q2
title: تصنيف الأسئلة، صفحة 47، السؤال 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 47
question: يتكون مقطع mRNA من كودون البدء حتى كودون إيقاف واحد شاملًا من 40 كودونًا، دون مناطق غير مترجمة خارجه. ما عدد الروابط الببتيدية في سلسلة عديد الببتيد الناتجة؟

- [ ] option-1 | (37)
- [x] option-2 | (38)
- [ ] option-3 | (39)
- [ ] option-4 | (40)
explanation:
الكودون وحدة من ثلاث قواعد يقرأها الرايبوسوم. نعد الكودونات الأربعين في منطقة الترجمة مع كودون الإيقاف وفق نموذج الدرس.
كودون الإيقاف لا يعطي حمضاً أمينياً؛ لذلك عدد الأحماض:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>40</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>39</mn></mrow></math>
\`\`\`


الرابطة الببتيدية تصل حمضين متجاورين. في سلسلة خطية، كل حمض بعد الأول يحتاج رابطة واحدة؛ لذلك عدد الروابط أقل من عدد الأحماض بواحد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>39</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>38</mn></mrow></math>
\`\`\`


الإجابة **38 رابطة ببتيدية، الخيار الثاني**، مع احتساب كودون الإيقاف ضمن الأربعين كما نص السؤال.

**المصدر:** الصفحات 14، 20 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p047-q3
title: تصنيف الأسئلة، صفحة 47، السؤال 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 47 · صياغة تعليمية معدّلة
kicker: صياغة تعليمية معدّلة
question: يتكون بروتين من 104 أحماض أمينية. كم قاعدة نيتروجينية في مقطع mRNA من كودون البدء إلى كودون إيقاف واحد شاملًا، دون المناطق غير المترجمة خارجه؟
- [ ] option-1 | (104)
- [ ] option-2 | (312)
- [x] option-3 | (315)
- [ ] option-4 | (317)
explanation:
عدد كودونات الأحماض 104، ويشمل كودون البدء لأنه يشفّر أحد هذه الأحماض. نضيف كودون إيقاف واحدًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>104</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>105</mn></mrow></math>
\`\`\`



كل كودون ثلاثي القواعد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>105</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>315</mn></mrow></math>
\`\`\`



الإجابة:315 قاعدة نيتروجينية في المقطع المحدد.

**المصدر:** الصفحات 15، 20 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p047-q4
title: تصنيف الأسئلة، صفحة 47، السؤال 4
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 47
question: أي الخطوات الآتية تحدث أولاً في مرحلة البدء خلال ترجمة mRNA؟
- [ ] option-1 | ارتباط الوحدة البنائية الكبيرة بالوحدة البنائية الصغيرة.
- [ ] option-2 | ارتباط mRNA بالوحدة البنائية الكبيرة.
- [ ] option-3 | ارتباط tRNA الحامل للميثيونين بالوحدة البنائية الصغيرة.
- [x] option-4 | ارتباط mRNA بالوحدة البنائية الصغيرة.
explanation:
**الإجابة:** ارتباط mRNA بالوحدة البنائية الصغيرة.

**الشاهد من الكتاب:**

> يرتبطmRNA بالوحدة البنائية الصغيرة في الرايبوسوم، بحيث يكون كودون البدء(AUG) في موقعP، ويرتبط جزيءtRNA الحامل للميثيونين على كودون البدء.

**المصدر:** صفحة 19 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p047-q6
title: تصنيف الأسئلة، صفحة 47، السؤال 6
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 47
question: أي الكودونات الآتية تمثل كودون إيقاف؟
- [ ] option-1 | \\(3'\\text{-}\\mathrm{UAG}\\text{-}5'\\)
- [ ] option-2 | \\(5'\\text{-}\\mathrm{AUG}\\text{-}3'\\)
- [x] option-3 | \\(5'\\text{-}\\mathrm{UGA}\\text{-}3'\\)
- [ ] option-4 | \\(3'\\text{-}\\mathrm{UAA}\\text{-}5'\\)
explanation:
كودونات جدول الشيفرة تُقرأ على mRNA من 5′ إلى 3′.
5′-UGA-3′ أحد كودونات الإيقاف، لذا فالاختيار الثالث صحيح.
أما 3′-UAG-5′ و 3′-UAA-5′ فبعد كتابتهما 5′→3′ يصبحان GAU و AAU، وهما يشفران أحماضاً أمينية؛ و AUG للميثيونين والبدء.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p048-q8
title: تصنيف الأسئلة، صفحة 48، السؤال 8
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
question: أي الآتية صحيح بخصوص الموقع (A) في نهاية مرحلة البدء أثناء عملية الترجمة؟
- [ ] option-1 | يكون tRNA الحامل للميثيونين في الموقع (A).
- [x] option-2 | يكون الموقع (A) فارغاً ومستعداً لاستقبال tRNA.
- [ ] option-3 | يقرأ الرايبوسوم أحد كودونات الإيقاف في الموقع (A).
- [ ] option-4 | يرتبط فيه عامل بروتيني للإيقاف مع كودون إيقاف.
explanation:
**الإجابة:** يكون الموقع (A) فارغاً ومستعداً لاستقبال tRNA.

**الشاهد من الكتاب:**

> ترتبط الوحدة البنائية الكبيرة بالوحدة البنائية الصغيرة. ومع نهاية المرحلة يكونtRNA الحامل للميثيونين في موقع(P)، والموقع(A) يكون فارغاً ومستعداً لاستقبال جزيءtRNA التالي.

**المصدر:** صفحة 19 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p048-qessay1-1
title: تصنيف الأسئلة، صفحة 48، السؤال essay1 (1)
question: كيف يتم تكوين الرابطة الببتيدية وتغيير موقع الرايبوسوم خلال مرحلة الاستطالة عند بناء البروتين في مرحلة الترجمة؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كيف يتم تكوين الرابطة الببتيدية وتغيير موقع الرايبوسوم خلال مرحلة الاستطالة عند بناء البروتين في مرحلة الترجمة؟
solution:
يحفز rRNA في الوحدة الكبيرة تكوين رابطة ببتيدية بين السلسلة المحمولة على tRNA في P والحمض الأميني المحمول على tRNA في A.
تنتقل السلسلة إلى tRNA في A، ويصبح tRNA في P خالياً من الحمض الأميني.
يتقدم الرايبوسوم بمقدار كودون واحد على mRNA؛ فينتقل tRNA الحامل للسلسلة من A إلى P، ويخرج الفارغ عبر E.
يصبح A متاحاً لدخول tRNA جديد وتكرار الإضافة.
:::

:::exam-question
id: bio-q-p048-qessay1-2
title: تصنيف الأسئلة، صفحة 48، السؤال essay1 (2)
question: يحتوي الرايبوسوم على أربعة مواقع للارتباط، وضح ذلك.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يحتوي الرايبوسوم على أربعة مواقع للارتباط، وضح ذلك.
solution:
**الإجابة:** موقع واحد لارتباط mRNA بين الوحدتين البنائيتين، وثلاثة مواقع لارتباط tRNA على الوحدة الكبيرة هي A وP وE.

**الشاهد من الكتاب:**

> يحتوي الرايبوسوم على أربعة مواقع: موقع لارتباطmRNA: تمثل منطقة الانغماد بين الوحدتين البنائيتين. ثلاثة مواقع لارتباطtRNA: تمثل ثلاثة انغمادات على الوحدة البنائية الكبيرة للرايبوسوم، وموقعاً لارتباط جزيئاتtRNA، وهذه المواقع هي(A) و(P) و(E). وتعني ما يأتي:(A: Aminoacyl) و(P: Peptidyl) و(E: Exit).

**المصدر:** صفحة 19 من الكتاب.



:::

:::exam-question
id: bio-q-p048-qessay1-3
title: تصنيف الأسئلة، صفحة 48، السؤال essay1 (3)
question: ما وظيفة كودون AUG؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما وظيفة كودون AUG؟
solution:
**الإجابة:** كودون البدء، يشفر الميثيونين ويبدأ عنده بناء سلسلة عديد الببتيد؛ يوجد عند البدء في موقع P.

**الشاهد من الكتاب:**

> يرتبطmRNA بالوحدة البنائية الصغيرة في الرايبوسوم، بحيث يكون كودون البدء(AUG) في موقعP، ويرتبط جزيءtRNA الحامل للميثيونين على كودون البدء.

**المصدر:** صفحة 19 من الكتاب.



:::

:::exam-question
id: bio-q-p048-qessay2-1
title: تصنيف الأسئلة، صفحة 48، السؤال essay2 (1)
question: علل: تخضع سلسلة عديد الببتيد الناتجة من الترجمة للتعديل بالالتفاف.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: تخضع سلسلة عديد الببتيد الناتجة من الترجمة للتعديل بالالتفاف.
solution:
لأن وظيفة البروتين تعتمد على شكله الفراغي، وتسلسل الأحماض الناتج مباشرة من الترجمة لا يكفي وحده لأداء الوظيفة.
تلتف السلسلة وتتخذ شكلاً محدداً يهيئ مواقع الارتباط أو النشاط المناسبة، فتتحول إلى بروتين وظيفي فعال.
:::

:::exam-question
id: bio-q-p048-qessay2-2
title: تصنيف الأسئلة، صفحة 48، السؤال essay2 (2)
question: علل: يلعب rRNA دوراً وظيفياً في الرايبوسوم.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: يلعب rRNA دوراً وظيفياً في الرايبوسوم.
solution:
**الإجابة:** لأن rRNA يحفّز تكوين الروابط الببتيدية بين الحموض الأمينية أثناء الترجمة.

**الشاهد من الكتاب:**

> يدخل في بناء الرايبوسوم، ويمثل الناحية الوظيفية فيه، ويعمل على ربط الحموض الأمينية المتجاورة بروابط ببتيدية أثناء عملية الترجمة، ويبنى rRNA على شكل كروي، حيث يوجد منه عدة أنواع.

**المصدر:** صفحة 17 من الكتاب.



:::

:::exam-question
id: bio-q-p048-qessay3-4a
title: تصنيف الأسئلة، صفحة 48، السؤال essay3 (4a)
question: قارن بين mRNA وtRNA من حيث التركيب.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين mRNA وtRNA من حيث التركيب.
solution:
**الإجابة:** mRNA سلسلة مفردة تحمل معلومات بناء البروتين. tRNA شريط مفرد يلتف إلى أربع حلقات في رسم الدرس، وتحمل الحلقة الثانية الكودون المضاد.

**الشاهد من الكتاب 1:**

> التي تمثل سلسلة مفردة تحمل المعلومات الخاصة ببناء البروتين الذي تحتاجه الخلية.

**المصدر:** صفحة 16 من الكتاب.



**الشاهد من الكتاب 2:**

> ويتكون tRNA من شريط مفرد يلتف على نفسه، ليكون 4 حلقات، انظر شكل (2)، حيث تحتوي الحلقة الثانية على ثلاثة نيوكليوتيدات تمثل كودوناً مضاداً يكون متمماً لأحد الكودونات على جزيء mRNA.

**المصدر:** صفحة 16 من الكتاب.



:::

:::exam-question
id: bio-q-p048-qessay3-4b
title: تصنيف الأسئلة، صفحة 48، السؤال essay3 (4b)
question: قارن بين mRNA وtRNA من حيث الوظيفة.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين mRNA وtRNA من حيث الوظيفة.
solution:
**الإجابة:** mRNA: يحمل معلومات بناء البروتين من النواة إلى السيتوسول ويشكل قالباً يقرأه الرايبوسوم.

tRNA: ينقل الحموض الأمينية من السيتوسول إلى الرايبوسوم لربطها في سلسلة عديد الببتيد.

**الشاهد من الكتاب 1:**

> يتم نسخ mRNA من إحدى سلاسل DNA (السلسلة 3′→5′ تشكل قالباً لعملية النسخ)، التي تمثل سلسلة مفردة تحمل المعلومات الخاصة ببناء البروتين الذي تحتاجه الخلية. ينتقل mRNA من النواة إلى السيتوسول، حيث يشكل قالباً لصنع البروتين من قبل الرايبوسوم.

**المصدر:** صفحة 16 من الكتاب.



**الشاهد من الكتاب 2:**

> يقوم tRNA بنقل الحموض الأمينية من السيتوسول إلى الرايبوسوم، ليتم ربطها في سلسلة عديد الببتيد.

**المصدر:** صفحة 16 من الكتاب.



:::

:::exam-question
id: bio-q-p048-qessay3-5
title: تصنيف الأسئلة، صفحة 48، السؤال essay3 (5)
question: قارن بين موقع (A) وموقع (P) على الرايبوسوم من حيث دورهما في مرحلة الإنهاء.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين موقع (A) وموقع (P) على الرايبوسوم من حيث دورهما في مرحلة الإنهاء.
solution:
**الإجابة:** A: يرتبط فيه عامل الإيقاف بكودون الإيقاف. P: تتحرر فيه سلسلة عديد الببتيد من tRNA.

**الشاهد من الكتاب:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



:::

:::exam-question
id: bio-q-p048-qessay3-6
title: تصنيف الأسئلة، صفحة 48، السؤال essay3 (6)
question: قارن بين الموقع (A) والموقع (P) على الوحدة البنائية الكبيرة للرايبوسوم من حيث الوظيفة.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين الموقع (A) والموقع (P) على الوحدة البنائية الكبيرة للرايبوسوم من حيث الوظيفة.
solution:
A موقع دخول tRNA الحامل للحمض الأميني التالي، حيث يزدوج الكودون المضاد مع كودون mRNA.
P موقع tRNA الذي يحمل سلسلة عديد الببتيد النامية.
عند تكوين الرابطة الببتيدية تنتقل السلسلة من حاملها في P إلى الحمض المحمول في A؛ ثم ينتقل حامل السلسلة من A إلى P عند تقدم الرايبوسوم.

**شاهد القاعدة أو السياق من الكتاب 1:**

> يرتبط الكودون المضاد فيtRNA الحامل للحمض الأميني بروابط هيدروجينية مع الكودون المتمم علىmRNA في موقع(A).

**المصدر:** صفحة 20 من الكتاب.



**شاهد القاعدة أو السياق من الكتاب 2:**

> يعملrRNA في الوحدة البنائية الكبيرة كإنزيم رايبوزايم(Ribozyme) على تكوين رابطة ببتيدية بين الحمض الأميني في موقع(P) والحمض الأميني في موقع(A)، وعندها ينفصلtRNA في موقع(P) عن الحمض الأميني الحامل له، ويخرج من الموقع(E).

**المصدر:** صفحة 20 من الكتاب.



**شاهد القاعدة أو السياق من الكتاب 3:**

> يتحركmRNA خلال الرايبوسوم بمقدار كودون واحد، فينتقلtRNA من موقع(A) إلى موقع(P)، ونتيجة لذلك يتغير موقعtRNA الحامل لعديد الببتيد من موقع(A) إلى موقع(P).

**المصدر:** صفحة 20 من الكتاب.



:::

:::exam-question
id: bio-q-p048-qessay4-a2
title: تصنيف الأسئلة، صفحة 48، السؤال essay4 (a2)
question: وضح الآلية التي تتم بها عملية تكوين الرابطة الببتيدية أثناء مرحلة الاستطالة في عملية الترجمة.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 48
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح الآلية التي تتم بها عملية تكوين الرابطة الببتيدية أثناء مرحلة الاستطالة في عملية الترجمة.
solution:
قبل تكوين الرابطة يكون tRNA في P حاملاً للسلسلة النامية، ويكون tRNA في A حاملاً للحمض التالي.
الرايبوزايم جزيء RNA يعمل محفزاً حيوياً، أي يسرّع تفاعلاً كيميائياً. يعمل rRNA في الوحدة الكبيرة بهذه الصفة؛ فيحفز تكوين رابطة ببتيدية بين نهاية السلسلة والحمض الجديد.
تصبح السلسلة مرتبطة بـ tRNA في A، ويصبح tRNA في P فارغاً؛ ثم تتهيأ حركة الرايبوسوم للدورة التالية.
:::

:::exam-question
id: bio-q-p049-q6-2
title: تصنيف الأسئلة، صفحة 49، السؤال 6 (2)
question: لديك السلسلة الآتية منDNA التي سيتم استخدامها في بناء بروتين فاعل للخلية؛ التسلسلان(69) و(70) ينسخ منهما إنترونات والبقية ينتج عنها إكسونات:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 49
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك السلسلة القالب الآتية من DNA، المعروضة من الطرف ٣′ إلى الطرف ٥′، والتي تُنسخ لبناء بروتين فاعل للخلية؛ التسلسلان(69) و(70) ينسخ منهما إنترونات والبقية ينتج عنها إكسونات:

| ترتيب الثلاثيات | 67 | 68 | 69 | 70 | 71 | 72 |
|---|---|---|---|---|---|---|
| DNA | TAC | GGT | GCC | ACA | CTT | ACA |

٢- إذا كانت الثلاثية رقم ٧٢ تقابل آخر حمض أميني في البروتين، وكانت الثلاثية ٧٣ تليها مباشرة دون إنترون بينهما، فما الثلاثيات الممكنة في الموضع ٧٣ على سلسلة DNA القالب؟ اكتبها من ٣′ إلى ٥′.

solution:
الثلاثية 72 تعطي آخر حمض أميني، لذا يجب أن يقابل الموضع التالي 73 كودون إيقاف على mRNA.
كودونات الإيقاف تُقرأ من 5′ إلى 3′ وهي UAA و UAG و UGA.
DNA القالب يقابلها بالتكامل A↔U و T↔A و C↔G وباتجاه معاكس:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>↔</mo><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>T</mi><mi>T</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>↔</mo><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>T</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>G</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>↔</mo><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>C</mi><mi>T</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



إذن الثلاثيات الممكنة في الموضع ٧٣ من DNA القالب، من ٣′ إلى ٥′، هي ATT أو ATC أو ACT. يكفي أن يقابلها أحد كودونات الإيقاف الثلاثة؛ لا تحدد المعطيات أيها بعينه. لا نكتب كودون mRNA جوابًا عن ثلاثية DNA، فالجدول يعرض سلسلة القالب.

:::

:::exam-question
id: bio-q-p049-q6-3
title: تصنيف الأسئلة، صفحة 49، السؤال 6 (3)
question: وضح مرحلة الإنهاء من عملية نسخ mRNA.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 49
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح مرحلة الإنهاء من عملية نسخ mRNA.
solution:
يصل إنزيم بلمرة RNA إلى تتابع منطقة الإنهاء في DNA.
عند هذه الإشارة يتوقف النسخ وينفصل الإنزيم عن القالب، وتتحرر سلسلة mRNA التي صُنعت.
تعود سلسلتا DNA إلى الالتفاف حول بعضهما؛ والناتج في الخلية حقيقية النواة mRNA أولي يعالج قبل الترجمة.
:::

:::exam-question
id: bio-q-p049-q7-1
title: تصنيف الأسئلة، صفحة 49، السؤال 7 (1)
question: الشكل أدناه يمثل الشيفرة الوراثية على جزيء DNA، علماً بأن رقم (2) يمثل إنتروناً عند النسخ: ماذا تمثل السلاسل (أ، ب، ج)؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 49 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
تمثل الرموز الآتية ثلاثة أنواع من جزيئات RNA:

| الرمز | الوصف |
|---|---|
| أ | ينقل الحمض الأميني إلى الريبوسوم، ويحمل كودونًا مضادًا |
| ب | نسخة وظيفية تنتج بعد إزالة الإنترونات وربط الإكسونات في خلية حقيقية النواة |
| ج | النسخة الأولية الناتجة من النسخ قبل هذه المعالجة، وتحتوي إكسونات وإنترونات |

ماذا يمثل كل من أ وب وج؟
solution:
نربط كل وصف بوظيفة الجزيء أو بمرحلة تصنيعه.

**أ:RNA الناقل tRNA**؛ وظيفته حمل الحمض الأميني ويحتوي الكودون المضاد.

**ب:mRNA الناضج**؛ أزيلت إنتروناته وربطت إكسوناته ليصبح نسخة وظيفية.

**ج:mRNA الأولي**؛ هو الناتج قبل إزالة الإنترونات، لذلك ما زالت الأجزاء غير الفاعلة موجودة فيه.

**المصدر:** الصفحات 16، 18 من الكتاب.

المعالجة: [الكتاب الرسمي الكامل،إزالةالإنترونات،ص 32 المطبوعة،PDF36](https://moe.edu.ps/storage/app/class12/Biology12%202025%20Tawjihi%20Elmi.pdf#page=36).

:::

:::exam-question
id: bio-q-p050-q8-1
title: تصنيف الأسئلة، صفحة 50، السؤال 8 (1)
question: من خلال دراستك لمرحلة البدء في عملية الترجمة لبناء سلسلة عديد الببتيد (البروتين): إلى ماذا تشير الأرقام (1، 2، 3، 4) في الشكل المجاور؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 50
answer-label: الإجابة والشرح من المجموعة المصححة
body:
من خلال دراستك لمرحلة البدء في عملية الترجمة لبناء سلسلة عديد الببتيد (البروتين): إلى ماذا تشير الأرقام (1، 2، 3، 4) في الشكل المجاور؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/ccd72159b07e9b353779.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/ccd72159b07e9b353779.webp)

(1) **موقع ارتباط mRNA**؛ الانغماد الذي يمر فيه الشريط.

(2) **tRNA البدء**؛ يحمل الحمض الأميني ويتكامل مع AUG.

(3) **الميثيونين**؛ الحمض المثبت أعلى tRNA.

(4) **كودون البدء AUG** على mRNA.

**المصدر:** صفحة 19 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/8102b16e82cce9ef3046.webp)

:::

:::exam-question
id: bio-q-p050-q8-2
title: تصنيف الأسئلة، صفحة 50، السؤال 8 (2)
question: كم عدد كودونات tRNA المضادة اللازمة في عملية الترجمة إذا استخدمت سلسلة mRNA الناضج التالية: AUG CGU AAA CGU UAA، في بناء بروتين فاعل؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 50
answer-label: الإجابة والشرح من المجموعة المصححة
body:
كم عدد مرات اقتران كودون مضاد في tRNA بكودون مشفِّر أثناء الترجمة، مع عدّ الكودون المتكرر مرة أخرى إذا استخدمت سلسلة mRNA الناضج التالية: AUG CGU AAA CGU UAA، في بناء بروتين فاعل؟

solution:
تُقرأ كودونات mRNA من 5′ إلى 3′، ويتكامل معها كودون tRNA المضاد بعكس الاتجاه: A↔U و C↔G.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>A</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



للكودونات المشفرة الأربعة مضادات:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>C</mi><mi>A</mi><mtext> </mtext><mi>U</mi><mi>U</mi><mi>U</mi><mtext> </mtext><mi>G</mi><mi>C</mi><mi>A</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



UAA للإيقاف ولا يقابله tRNA.
إذن المطلوب أربع مرات اقتران بواسطة tRNA: مرة لكل كودون من الكودونات المشفرة الأربعة، مع عدّ CGU مرتين. أما UAA فلا يُحضر له tRNA؛ تتعرف إليه عوامل الإنهاء. عدد أنواع المضادات المختلفة ثلاثة، لكنه ليس العدد المطلوب هنا.

:::

:::exam-question
id: bio-q-p050-q9-1
title: تصنيف الأسئلة، صفحة 50، السؤال 9 (1)
question: الشكل التالي يمثل سلاسل من أنواع مختلفة من الحموض النووية. ادرسه جيداً وأجب:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 50
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل التالي يمثل سلاسل من أنواع مختلفة من الحموض النووية. ادرسه جيداً وأجب:

| الكودون المضاد | UAU | UGC | GCA | ACG |
|---|---|---|---|---|
| الحمض الأميني | أيزوليوسين | ثريونين | أرجنين | سيستين |

1- ما نوع السلاسل (أ، ب، ج) المبينة في الشكل؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/3fb8a829c7d2bef82bb1.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/3fb8a829c7d2bef82bb1.webp)

نبدأ من الجدول، ثم نستخدم علاقة التكامل بين القواعد لتحديد دور كل سلسلة.

الجدول يعطي الكودون المضاد GCA، وهو موجود في ب. الكودون المضاد ثلاث قواعد على RNA الناقل tRNA ترتبط بكودون مكمل على RNA الرسول mRNA؛ إذن ب يمثل tRNA، وج يمثل mRNA.

تتكامل القواعد A مع U، وC مع G. لذلك يقابل المضاد GCA في ب الكودون CGU في ج.

DNA القالب هو الشريط الذي يُنسخ عنه mRNA بالتكامل. أ يطابق الكودون المضاد في القواعد المناظرة، مع T بدلاً من U؛ لذلك أ هو DNA القالب.

الإجابة: أ DNA القالب، ب tRNA، ج mRNA.
:::

:::exam-question
id: bio-q-p050-q9-2
title: تصنيف الأسئلة، صفحة 50، السؤال 9 (2)
question: الشكل التالي يمثل سلاسل من أنواع مختلفة من الحموض النووية. ادرسه جيداً وأجب:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 50
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل التالي يمثل سلاسل من أنواع مختلفة من الحموض النووية. ادرسه جيداً وأجب:

| الكودون المضاد | UAU | UGC | GCA | ACG |
|---|---|---|---|---|
| الحمض الأميني | أيزوليوسين | ثريونين | أرجنين | سيستين |

2- اكتب تسلسل النيوكليوتيدات في الشيفرات (1، 2، 3) في كل سلسلة.

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/3fb8a829c7d2bef82bb1.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/3fb8a829c7d2bef82bb1.webp)

نملأ الفراغات بالتكامل: A تقابل U في RNA، وC تقابل G. في DNA تحل T محل U.

ب يحمل الكودونات المضادة المذكورة في الجدول، وج يحمل كودونات mRNA المكملة لها. أما أ فهو DNA القالب، المكمل لج أيضاً.

في العمود الأيمن، ب هو UAU؛ لذلك ج هو AUA، ويكون DNA القالب عند (1) هو TAT.

في العمود الأيسر، ج هو UGC؛ لذلك ب عند (2) هو ACG. ويصبح أ أيضاً ACG، فيوافق الحرفين AC الظاهرين في الرسم.

في العمود الأوسط، ب هو GCA؛ لذلك ج عند (3) هو CGU. ويصبح أ هو GCA، فيوافق الحرفين GC الظاهرين.

الإجابة: (1) TAT، (2) ACG، (3) CGU.
:::

:::exam-question
id: bio-q-p050-q9-3
title: تصنيف الأسئلة، صفحة 50، السؤال 9 (3)
question: الشكل التالي يمثل سلاسل من أنواع مختلفة من الحموض النووية. ادرسه جيداً وأجب:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 50
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل التالي يمثل سلاسل من أنواع مختلفة من الحموض النووية. ادرسه جيداً وأجب:

| الكودون المضاد | UAU | UGC | GCA | ACG |
|---|---|---|---|---|
| الحمض الأميني | أيزوليوسين | ثريونين | أرجنين | سيستين |

3- اكتب تسلسل الحموض الأمينية في سلسلة عديد الببتيد الناتجة عن الترجمة.

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/3fb8a829c7d2bef82bb1.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/3fb8a829c7d2bef82bb1.webp)

نحدد كودونات RNA الرسول mRNA، ثم نستخدم جدول الشيفرة؛ لأن كل كودون يحدد حمضاً أمينياً أثناء الترجمة.

الكودون المضاد على tRNA يتكامل مع كودون mRNA: A مع U، وC مع G، وباتجاه معاكس.

يعطي السؤال المضاد GCA للأرجنين. كودونه المكمل هو CGU؛ وهذا يحدد في تمثيل السؤال قراءة الكودون من اليسار إلى اليمين باتجاه 5′ إلى 3′، والمضاد بالاتجاه المعاكس. الرمزان 5′ و3′ يميزان طرفي السلسلة.

من العمود الأيسر، كودون mRNA هو UGC، ويقابله السيستين في جدول الشيفرة.

في العمود الأوسط، المضاد GCA؛ لذلك الكودون CGU، ويقابله الأرجنين.

في العمود الأيمن، المضاد UAU؛ لذلك الكودون AUA، ويقابله الأيزوليوسين.

إذن تسلسل الأحماض الأمينية في الجزء المعروض هو: السيستين ثم الأرجنين ثم الأيزوليوسين، بترتيب قراءة الكودونات UGC ثم CGU ثم AUA.

هذا جزء من السلسلة؛ لا نفترض أن أول كودون فيه هو كودون بدء.
:::

:::exam-question
id: bio-q-p050-q10-1
title: تصنيف الأسئلة، صفحة 50، السؤال 10 (1)
question: اكتب تسلسل DNA القالب المقابل للكودونات المضادة المعطاة، مع اتجاهه.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 50 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الكودونات المضادة الآتية محمولة على أنواع مختلفة من tRNA، ومرتبة حسب تقابلها مع كودونات مقطع داخلي من mRNA. كتب كل كودون مضاد 3′→5′، والتسلسل المعطى هو: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>U</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>U</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>\`. اكتب تسلسل DNA القالب المقابل مع اتجاهه.
solution:
نقابل كل كودون مضاد بكودون mRNA متمم له وباتجاه معاكس: A↔U و C↔G.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">s</mi></mrow><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>U</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>G</mi><mi>U</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>U</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>U</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>A</mi><mi>U</mi><mtext> </mtext><mi>U</mi><mi>C</mi><mi>A</mi><mtext> </mtext><mi>G</mi><mi>C</mi><mi>A</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



نكتب DNA القالب متممًا للمقطع المنسوخ؛ في DNA نستخدم T بدل U.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>T</mi><mi>G</mi><mtext> </mtext><mi>T</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>T</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>G</mi><mi>T</mi><mtext> </mtext><mi>C</mi><mi>G</mi><mi>T</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



القالب المطلوب:3′-ATG TAC GTA AGT CGT-5′.

**المصدر:** الصفحات 15، 16، 20 من الكتاب.

:::

:::exam-question
id: bio-q-p051-q11-3
title: تصنيف الأسئلة، صفحة 51، السؤال 11 (3)
question: ما اسم المرحلة المبينة في الشكل؟
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 51
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما اسم المرحلة المبينة في الشكل؟

![الشكل الأصلي المرفق بالسؤال](assets/lessons/curriculum-evidence/207880400700394564df.webp)
solution:
![الشكل الأصلي للسؤال](assets/lessons/curriculum-evidence/207880400700394564df.webp)

يظهر tRNA البدء حاملاً الميثيونين عند AUG، مرتبطاً بالوحدة الصغيرة، قبل اكتمال ارتباط الوحدة الكبيرة.

إذن الشكل يمثل **مرحلة البدء في الترجمة**.

**المصدر:** صفحة 19 من الكتاب.

![الشاهد من الكتاب](assets/lessons/curriculum-evidence/8102b16e82cce9ef3046.webp)

:::

:::exam-question
id: bio-q-p051-q12-1
title: تصنيف الأسئلة، صفحة 51، السؤال 12 (1)
question: لديك السلسلة الآتية من جزيء DNA والمستخدمة في بناء بروتين فاعل للخلية: \\(3'\\text{-}\\mathrm{TACTTTGTAACCATC}\\text{-}5'\\). استعن بالجدول المرفق:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 51
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك السلسلة الآتية من جزيء DNA والمستخدمة في بناء بروتين فاعل للخلية: \\(3'\\text{-}\\mathrm{TACTTTGTAACCATC}\\text{-}5'\\). استعن بالجدول المرفق:

| الكودون | GUA | UGG | UUU | AAA | CAU |
|---|---|---|---|---|---|
| الحمض الأميني | فالين | تريبتوفان | فينيل ألانين | لايسين | هستدين |

1- اكتب النيوكليوتيدات في سلسلة DNA المتممة.
solution:
الشريطان في DNA متكاملان: A↔T و C↔G، ومتعاكسا الاتجاه.
نقسم المعطى لتسهيل المقابلة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>T</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>T</mi><mi>T</mi><mi>T</mi><mtext> </mtext><mi>G</mi><mi>T</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>C</mi><mi>C</mi><mtext> </mtext><mi>A</mi><mi>T</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



المتمم لكل ثلاثية هو ATG ثم AAA ثم CAT ثم TGG ثم TAG، ويكتب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>T</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>A</mi><mi>T</mi><mtext> </mtext><mi>T</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>T</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: bio-q-p051-q12-2
title: تصنيف الأسئلة، صفحة 51، السؤال 12 (2)
question: لديك السلسلة الآتية من جزيء DNA والمستخدمة في بناء بروتين فاعل للخلية: \\(3'\\text{-}\\mathrm{TACTTTGTAACCATC}\\text{-}5'\\). استعن بالجدول المرفق:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 51
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك السلسلة الآتية من جزيء DNA والمستخدمة في بناء بروتين فاعل للخلية: \\(3'\\text{-}\\mathrm{TACTTTGTAACCATC}\\text{-}5'\\). استعن بالجدول المرفق:

| الكودون | GUA | UGG | UUU | AAA | CAU |
|---|---|---|---|---|---|
| الحمض الأميني | فالين | تريبتوفان | فينيل ألانين | لايسين | هستدين |

2- اكتب ترتيب الحموض الأمينية بعد الترجمة.
solution:
القالب المعطى اتجاهه 3′→5′، لذلك يُنسخ mRNA المكمل من 5′→3′. في النسخ A↔U و T↔A و C↔G:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>T</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>T</mi><mi>T</mi><mi>T</mi><mtext> </mtext><mi>G</mi><mi>T</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>C</mi><mi>C</mi><mtext> </mtext><mi>A</mi><mi>T</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>A</mi><mi>U</mi><mtext> </mtext><mi>U</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



AUG للميثيونين، و AAA للايسين، و CAU للهستدين، و UGG للتربتوفان بحسب الجدول.
UAG للإيقاف فلا يضيف حمضاً.
إذن السلسلة: ميثيونين، لايسين، هستدين، تربتوفان.
:::

:::exam-question
id: bio-q-p051-q12-3
title: تصنيف الأسئلة، صفحة 51، السؤال 12 (3)
question: لديك السلسلة الآتية من جزيء DNA والمستخدمة في بناء بروتين فاعل للخلية: \\(3'\\text{-}\\mathrm{TACTTTGTAACCATC}\\text{-}5'\\). استعن بالجدول المرفق:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 51
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك السلسلة الآتية من جزيء DNA والمستخدمة في بناء بروتين فاعل للخلية: \\(3'\\text{-}\\mathrm{TACTTTGTAACCATC}\\text{-}5'\\). استعن بالجدول المرفق:

| الكودون | GUA | UGG | UUU | AAA | CAU |
|---|---|---|---|---|---|
| الحمض الأميني | فالين | تريبتوفان | فينيل ألانين | لايسين | هستدين |

3- ما عدد الروابط الببتيدية في سلسلة عديد الببتيد الناتجة؟
solution:
ننسخ DNA القالب 3′→5′ إلى mRNA 5′→3′ بالتكامل A↔U و T↔A و C↔G:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>A</mi><mi>U</mi><mtext> </mtext><mi>U</mi><mi>G</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



الكودونات الأربعة الأولى تشفر أربعة أحماض، أما UAG فللإيقاف.
كل رابطة تصل حمضين متجاورين؛ لذلك سلسلة من n حمضاً تحتاج n−1 رابطة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mn>4</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`



إذن توجد ثلاث روابط ببتيدية.
:::

:::mcq
id: bio-q-p052-q3
title: تصنيف الأسئلة، صفحة 52، السؤال 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 52 · صياغة تعليمية معدّلة
kicker: صياغة تعليمية معدّلة
question: تُقرأ سلسلة mRNA الآتية من أول كودون بدء حتى أول كودون إيقاف في الإطار نفسه: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>G</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>\`. كم حمضًا أمينيًا يضاف إلى عديد الببتيد؟
- [ ] option-1 | أ- 5
- [x] option-2 | ب- 3
- [ ] option-3 | ج- 7
- [ ] option-4 | د- 4
explanation:
يحدد كودون البدء إطار القراءة؛ نقسم المقطع من بدايته إلى ثلاثيات.

| الكودون | وظيفته |
|---|---|
| AUG | يشفر الميثيونين ويبدأ الترجمة |
| AAC | يشفر حمضًا أمينيًا |
| AUG | يشفر الميثيونين داخل السلسلة |
| UAG | إيقاف؛ لا يضاف مقابله حمض أميني |

توجد ثلاثة كودونات مشفرة قبل الإيقاف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo stretchy="false">(</mo><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">o</mi><mtext> </mtext><mi mathvariant="normal">a</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">)</mo><mo>=</mo><mn>3</mn></mrow></math>
\`\`\`



الإجابة: ب،3 أحماض أمينية.

**المصدر:** الصفحات 15، 20 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p052-q5
title: تصنيف الأسئلة، صفحة 52، السؤال 5
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 52
question: ما عدد كودونات mRNA من كودون البدء إلى كودون إيقاف واحد شاملًا، لبناء عديد ببتيد مكوّن من 40 حمضًا أمينيًا تضم 15 نوعًا؟

- [ ] option-1 | أ- 10
- [ ] option-2 | ب- 20
- [ ] option-3 | ج- 40
- [x] option-4 | د- 41
explanation:
الكودون ثلاث قواعد تحدد حمضاً أمينياً أو إشارة إيقاف. تكرار أنواع الأحماض لا يقلل عدد المواضع المطلوبة؛ كل واحد من الأحماض الأربعين يحتاج كودوناً.
ولعمل سلسلة عديد الببتيد وإنهاء ترجمتها، نضيف كودون الإيقاف الذي لا يضيف حمضاً:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>40</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>41</mn></mrow></math>
\`\`\`


إذن **41 كودوناً مع الإيقاف، الخيار د**. أما الكودونات المشفرة للأحماض وحدها فعددها40.

**المصدر:** الصفحات 15، 20 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p053-q8
title: تصنيف الأسئلة، صفحة 53، السؤال 8
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 53
question: أيّ البدائل الآتية يمثل ثلاثية في شريط DNA قالب تُنسخ إلى كودون إيقاف على mRNA، مع مراعاة الاتجاه المكتوب؟

- [x] option-1 | أ- \\(3'\\text{-}\\mathrm{ATC}\\text{-}5'\\)
- [ ] option-2 | ب- \\(5'\\text{-}\\mathrm{ACT}\\text{-}3'\\)
- [ ] option-3 | ج- \\(5'\\text{-}\\mathrm{UUA}\\text{-}3'\\)
- [ ] option-4 | د- \\(3'\\text{-}\\mathrm{UAA}\\text{-}5'\\)
explanation:
كودونات الإيقاف هي UAA و UAG و UGA على mRNA في اتجاه 5′→3′.
ننسخ DNA القالب بالتكامل وبالاتجاه المعاكس؛ الخيار أ يعطي:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>T</mi><mi>C</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>⟷</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>U</mi><mi>A</mi><mi>G</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



إذن أ صحيح.
5′-ACT-3′ إذا كان قالباً يعطي 5′-AGU-3′، و UUA يشفر اللّيوسين، و 3′-UAA-5′ يُقرأ 5′-AAU-3′ فيشفر الأسباراجين.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p054-q3-b2
title: تصنيف الأسئلة، صفحة 54، السؤال 3 (b2)
question: يمثل المخطط المقابل أحماضاً نووية مختلفة يحمل كل منها شفرات وراثية لبناء البروتين: سم الأحماض النووية (أ، ب، ج، د).
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 54 · صياغة تعليمية معدّلة
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الجدول مقطعًا في شريطي DNA، وكودونات mRNA المنسوخة عنه، والكودونات المضادة علىأنواع tRNA المقابلة. حدد هوية كل صف: أ وب وج ود. صفا RNA هما كودونات mRNA وكودونات tRNA المضادة، لا أنواع RNA أخرى.

| الرمز | التسلسل والاتجاه |
|---|---|
| أ | 5′-ATG CCG TAT-3′ |
| ب | 3′-TAC GGC ATA-5′ |
| ج | 3′-UAC GGC AUA-5′ |
| د | 5′-AUG CCG UAU-3′ |
solution:
وجود T يميز صفي DNA، ووجود U يميز صفي RNA.

**ب هو DNA القالب**؛ لأنه متمم للصف د وبالاتجاه المعاكس:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><msub><mi>A</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">m</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>:</mo><mspace width="1em"/><mn>3</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>T</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>C</mi><mtext> </mtext><mi>A</mi><mi>T</mi><mi>A</mi><mtext>-</mtext><mn>5</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`







\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><mspace width="1em"/><mn>5</mn><mo mathvariant="normal">′</mo><mtext>-</mtext><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>G</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>U</mi><mtext>-</mtext><mn>3</mn><mo mathvariant="normal">′</mo></mrow></math>
\`\`\`



إذن **د هو mRNA**.

**أ هو DNA المتمم للقالب، أي الشريط غيرالقالب**؛ يطابق mRNA في التتابع مع T بدل U.

**ج يمثل كودونات tRNA المضادة**؛ تتكامل مع كودونات د وباتجاه معاكس.

**المصدر:** صفحة 16 من الكتاب.

:::

:::exam-question
id: bio-q-p054-q3-c1
title: تصنيف الأسئلة، صفحة 54، السؤال 3 (c1)
question: قارن بين مرحلة بدء نسخ mRNA وبدء عملية الترجمة من حيث مكان الحدوث.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 54
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين مرحلة بدء نسخ mRNA وبدء عملية الترجمة من حيث مكان الحدوث.
solution:
**الإجابة:** في الخلية حقيقية النواة: النسخ في النواة، والترجمة على الرايبوسومات في السيتوسول.

**الشاهد من الكتاب 1:**

> يتم نسخ mRNA من إحدى سلاسل DNA (السلسلة 3′→5′ تشكل قالباً لعملية النسخ)، التي تمثل سلسلة مفردة تحمل المعلومات الخاصة ببناء البروتين الذي تحتاجه الخلية. ينتقل mRNA من النواة إلى السيتوسول، حيث يشكل قالباً لصنع البروتين من قبل الرايبوسوم.

**المصدر:** صفحة 16 من الكتاب.



**الشاهد من الكتاب 2:**

> يرتبطmRNA بالوحدة البنائية الصغيرة في الرايبوسوم، بحيث يكون كودون البدء(AUG) في موقعP، ويرتبط جزيءtRNA الحامل للميثيونين على كودون البدء.

**المصدر:** صفحة 19 من الكتاب.



:::

:::exam-question
id: bio-q-p054-q3-c2
title: تصنيف الأسئلة، صفحة 54، السؤال 3 (c2)
question: قارن بين مرحلة بدء نسخ mRNA وبدء عملية الترجمة من حيث إشارة حدوث كل منهما.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 54
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن بين مرحلة بدء نسخ mRNA وبدء عملية الترجمة من حيث إشارة حدوث كل منهما.
solution:
**الإجابة:** بدء النسخ: المحفز الذي ترتبط به عوامل النسخ وإنزيم بلمرة RNA. بدء الترجمة: كودون البدء AUG على mRNA.

**الشاهد من الكتاب 1:**

> ترتبط عوامل النسخ Transcription Factors وإنزيم بلمرة RNA على بداية الجين المراد نسخه من سلسلة DNA (3′→5′) وبالتحديد على تتابع معين من النيوكليوتيدات تسمى المحفز Promoter، حيث يتم فتح سلسلتي DNA الملتفتين في هذا الموقع، ويبدأ إنزيم بلمرة RNA بعملية النسخ.

**المصدر:** صفحة 17 من الكتاب.



**الشاهد من الكتاب 2:**

> يرتبطmRNA بالوحدة البنائية الصغيرة في الرايبوسوم، بحيث يكون كودون البدء(AUG) في موقعP، ويرتبط جزيءtRNA الحامل للميثيونين على كودون البدء.

**المصدر:** صفحة 19 من الكتاب.



:::

:::exam-question
id: bio-q-p058-q3-a1
title: تصنيف الأسئلة، صفحة 58، السؤال 3 (a1)
question: إذا أعطيت سلسلةDNAالتالية:TAC TTT AAA CCG ATT TAG ACT، علماً بأن الكودون الخامس هو إنترون:
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 58
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك شريط DNA القالب الآتي مكتوبًا من 3′ إلى 5′: TAC TTT AAA CCG ATT TAG ACT. التتابع الثلاثي الخامس يُنسخ ضمن إنترون. اكتب سلسلة mRNA الأولية الناتجة عن النسخ، مع اتجاهها، قبل إزالة الإنترون.

solution:
ناتج النسخ هو mRNA الأولي؛ لا نحذف الإنترون حتى مرحلة المعالجة. نعامل DNA المعطى قالباً باتجاه 3′→5′، ونبني RNA باتجاه 5′→3′ بالتكامل A↔U و T↔A و C↔G:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>D</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>T</mi><mi>A</mi><mi>C</mi><mtext> </mtext><mi>T</mi><mi>T</mi><mi>T</mi><mtext> </mtext><mi>A</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>C</mi><mi>C</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>T</mi><mi>T</mi><mtext> </mtext><mi>T</mi><mi>A</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>C</mi><mi>T</mi><mo>−</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>m</mi><mi>R</mi><mi>N</mi><mi>A</mi><mo>:</mo><msup><mn>5</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo>−</mo><mi>A</mi><mi>U</mi><mi>G</mi><mtext> </mtext><mi>A</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>U</mi><mi>U</mi><mi>U</mi><mtext> </mtext><mi>G</mi><mi>G</mi><mi>C</mi><mtext> </mtext><mi>U</mi><mi>A</mi><mi>A</mi><mtext> </mtext><mi>A</mi><mi>U</mi><mi>C</mi><mtext> </mtext><mi>U</mi><mi>G</mi><mi>A</mi><mo>−</mo><msup><mn>3</mn><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup></mrow></math>
\`\`\`



الثلاثية الخامسة UAA ما زالت موجودة في الشريط الأولي رغم كونها جزء الإنترون المعطى؛ تُزال لاحقاً عند طلب الشريط الناضج.
:::

:::mcq
id: bio-q-p059-q2
title: تصنيف الأسئلة، صفحة 59، السؤال 2
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 59
question: تمثل البدائل الآتية ثلاثيات في شريط DNA القالب، وكل منها مكتوب من 3′ إلى 5′. أيّها يُنسخ إلى كودون تختلف وظيفته في الترجمة عن كودونات البدائل الأخرى؟

- [ ] option-1 | أ- ATT
- [x] option-2 | ب- TAC
- [ ] option-3 | ج- ACT
- [ ] option-4 | د- ATC
explanation:
نفهم الثلاثيات المعطاة على أنها DNA القالب باتجاه 3′→5′. في النسخ A↔U و T↔A و C↔G، وينتج mRNA باتجاه 5′→3′.
TAC يعطي AUG، فيشفر الميثيونين ويعمل كودون بدء.
أما ATT فيعطي UAA، و ACT يعطي UGA، و ATC يعطي UAG؛ وكلها كودونات إيقاف.
إذن المختلف ب: TAC؛ له وظيفة البدء بدلاً من الإيقاف.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p059-q5
title: تصنيف الأسئلة، صفحة 59، السؤال 5
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 59
question: لترجمة عديد ببتيد مكوّنة من 40 حمضًا أمينيًا تضم 16 نوعًا، ما الحد الأدنى لعدد أنواع tRNA اللازمة إذا خصصنا نوعًا واحدًا لكل حمض أميني وأتيح إعادة شحنه واستعماله؟

- [ ] option-1 | أ- 9
- [ ] option-2 | ب- 18
- [x] option-3 | ج- 16
- [ ] option-4 | د- 40
explanation:
يقصد «على الأقل» عدد جزيئات أو أنواع الناقلات اللازمة مع إمكان إعادة استعمال tRNA بعد تسليمه الحمض الأميني.
هناك 16 نوعاً من الأحماض، فيلزم على الأقل ناقل مناسب لكل نوع؛ فيكون الحد الأدنى 16، أي البديل ج.
أما عدد مرات جلب الأحماض لبناء سلسلة من 40 حمضاً فهو 40 مرة. وقد يحتاج الحمض نفسه أكثر من نوع tRNA إذا استُعملت كودونات مختلفة، لذا 16 حد أدنى في نموذج السؤال.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p059-q9
title: تصنيف الأسئلة، صفحة 59، السؤال 9
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 59
question: ما الموقع الذي يرتبط فيه عامل بروتيني للإيقاف أثناء الانتهاء من عملية الترجمة؟
- [ ] option-1 | أ- P
- [x] option-2 | ب- A
- [ ] option-3 | ج- E
- [ ] option-4 | د- B
explanation:
**الإجابة:** ب- A

**الشاهد من الكتاب:**

> تستمر عملية الترجمة حتى يقرأ الرايبوسوم أحد كودونات الإيقاف(UAA أوUAG أوUGA) علىmRNA في الموقع(A)، وهنا يرتبط عامل بروتيني للإيقافRelease Factor مع كودون الإيقاف في موقعA بدلاً منtRNA. وبذلك تنفصل سلسلة عديد الببتيد عنtRNA في موقع(P)، ثم تنفصل الوحدتان البنائيتان للرايبوسوم بعضهما عن بعض، وتتوقف عملية الترجمة، وتنطلق سلسلة عديد الببتيد.

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: bio-q-p061-q5-a1
title: تصنيف الأسئلة، صفحة 61، السؤال 5 (a1)
question: عرفي المحفز.
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 61
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرفي المحفز.
solution:
**الإجابة:** تتابع معين من النيوكليوتيدات في بداية الجين المراد نسخه علىDNA؛ ترتبط به عوامل النسخ وإنزيم بلمرةRNA لبدء النسخ.

**الشاهد من الكتاب:**

> ترتبط عوامل النسخ Transcription Factors وإنزيم بلمرة RNA على بداية الجين المراد نسخه من سلسلة DNA (3′→5′) وبالتحديد على تتابع معين من النيوكليوتيدات تسمى المحفز Promoter، حيث يتم فتح سلسلتي DNA الملتفتين في هذا الموقع، ويبدأ إنزيم بلمرة RNA بعملية النسخ.

**المصدر:** صفحة 17 من الكتاب.



:::

:::mcq
id: bio-q-p062-q3
title: تصنيف الأسئلة، صفحة 62، السؤال 3
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 62
question: إحدى العمليات الحيوية التالية تحدث في نواة الخلية:
- [x] option-1 | أ- النسخ
- [ ] option-2 | ب- الترجمة
- [ ] option-3 | ج- التحلل الغلايكولي
- [ ] option-4 | د- التخمر الكحولي
explanation:
**الإجابة:** أ- النسخ، في الخلية حقيقية النواة التي يتناولها الدرس.

**الشاهد من الكتاب:**

> يتم نسخ mRNA من إحدى سلاسل DNA (السلسلة 3′→5′ تشكل قالباً لعملية النسخ)، التي تمثل سلسلة مفردة تحمل المعلومات الخاصة ببناء البروتين الذي تحتاجه الخلية. ينتقل mRNA من النواة إلى السيتوسول، حيث يشكل قالباً لصنع البروتين من قبل الرايبوسوم.

**المصدر:** صفحة 16 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p062-q5
title: تصنيف الأسئلة، صفحة 62، السؤال 5
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 62
question: لترجمة عديد ببتيد مكونة من 40 حمضًا أمينيًا تضم 20 نوعًا من الحموض الأمينية، ما الحد الأدنى لعدد أنواع tRNA اللازمة إذا خصصنا نوعًا واحدًا لكل حمض أميني وأتيح إعادة شحنه واستعماله؟

- [ ] option-1 | أ- 9
- [ ] option-2 | ب- 18
- [x] option-3 | ج- 20
- [ ] option-4 | د- 40
explanation:
يضم الببتيد 40 حمضاً موزعة على 20 نوعاً. يمكن إعادة استعمال tRNA بعد تفريغ حمضه وشحنه من جديد.
لذلك في حسبة الحد الأدنى يلزم ناقل مناسب لكل نوع من الأنواع العشرين؛ فالاختيار ج:20.
لكن عدد مرات النقل لبناء السلسلة هو 40؛ وإذا تعددت الكودونات اللازمة للنوع نفسه فقد يزيد عدد أنواع tRNA المطلوبة. ولهذا فالجواب 20 حد أدنى وفق افتراض السؤال.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: bio-q-p062-q9
title: تصنيف الأسئلة، صفحة 62، السؤال 9
reference: تصنيف أسئلة الأحياء توجيهي 2025 (1).pdf · صفحة PDF 62
question: ما التغير الحاصل على موقع tRNA الحامل لعديد الببتيد عند حركة الرايبوسوم بمقدار كودون واحد أثناء مرحلة الاستطالة؟
- [ ] option-1 | أ- الانتقال من الموقع (P) إلى الموقع (A)
- [x] option-2 | ب- الانتقال من الموقع (A) إلى الموقع (P)
- [ ] option-3 | ج- الانتقال من الموقع (A) إلى الموقع (E)
- [ ] option-4 | د- الانتقال من الموقع (E) إلى الموقع (P)
explanation:
**الإجابة:** ب- الانتقال من الموقع (A) إلى الموقع (P)

**الشاهد من الكتاب:**

> يتحركmRNA خلال الرايبوسوم بمقدار كودون واحد، فينتقلtRNA من موقع(A) إلى موقع(P)، ونتيجة لذلك يتغير موقعtRNA الحامل لعديد الببتيد من موقع(A) إلى موقع(P).

**المصدر:** صفحة 20 من الكتاب.



hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::`;

export default createBiologyLesson("gene-to-protein", source);
