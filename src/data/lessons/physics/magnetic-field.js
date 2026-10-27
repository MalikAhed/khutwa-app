import { defineMarkdownLesson } from "../../../markdown/lesson-model.js?v=acff67f262f3c107";

export const lessonSource = `
:::mcq
id: physics-book-2024-p054-review-1-1
title: أسئلة الفصل — س1/1 — الكتاب، صفحة PDF 54
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 54، أسئلة الفصل — س1/1
question: أي الأشكال يمثل المجال المغناطيسي لسلك مستقيم طويل يسري فيه تيار شدته \\(I\\)؟
- [x] option-1 | أ
- [ ] option-2 | ب
- [ ] option-3 | ج
- [ ] option-4 | د
explanation:
خطوط مجال السلك المستقيم دوائر حوله. نحدد اتجاهها بقاعدة اليد اليمنى: نوجه الإبهام مع التيار إلى أعلى، فيعطي التفاف الأصابع اتجاه المجال.

في الرسم تعني النقطة مجالاً نحو الناظر، أي خارج الصفحة؛ وتعني علامة×مجالاً إلى داخل الصفحة. تطبيق القاعدة يعطي المجال خارج الصفحة يسار السلك وداخلها يمينه. إذن الشكلأ، الخيار الأول، يطابق الاتجاهين.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p054-review-1-1-figure-01.webp)
hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/1.](assets/lessons/physics/source-crops/physics-book-2024-p054-review-1-1-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p054-review-1-2
title: أسئلة الفصل — س1/2 — الكتاب، صفحة PDF 54
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 54، أسئلة الفصل — س1/2
question: إذا كانت شدة المجال داخل ملف حلزوني يمر به تيار مستمر عند نقطة على محوره \\(B\\) تسلا، فأنقص عدد لفاته إلى الربع دون تغيير طوله مع بقاء شدة التيار ثابتة، فما المجال الجديد؟
- [ ] option-1 | \\(4B\\)
- [ ] option-2 | \\(2B\\)
- [ ] option-3 | \\(0.5B\\)
- [x] option-4 | \\(0.25B\\)
explanation:
داخل الملف الحلزوني الطويل يكون المجال قريباً من المنتظم، ويعتمد على عدد اللفات في وحدة الطول. نستخدم علاقته لأن المطلوب أثر تغيير عدد اللفات \\(N\\) مع بقاء طول الملف \\(L\\) ثابتاً. نرمز إلى شدة التيار \\(I\\) ونفاذية الفراغ \\(\\mu _{0}\\)، ونقارن عند بقاء شدة التيار نفسها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`



مجال الملف يتناسب مع عدد لفاته عندما يبقى التيار والطول ثابتين.

نستبدل عدد اللفات بربعه، فينخفض المجال إلى الربع.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mi>N</mi><mi mathvariant="normal">/</mi><mn>4</mn><mo stretchy="false">)</mo><mi>I</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mi>B</mi><mn>4</mn></mfrac></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::mcq
id: physics-book-2024-p054-review-1-3
title: أسئلة الفصل — س1/3 — الكتاب، صفحة PDF 54
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 54، أسئلة الفصل — س1/3
question: يبين الشكل سلكين لا نهائيين، تيار كل منهما \\(2\\,\\mathrm{A}\\) نحو الناظر، والمسافة بينهما \\(4\\,\\mathrm{cm}\\). ما مقدار المجال عند النقطة \\(a\\) التي تبعد عن الأول \\(4\\,\\mathrm{cm}\\) بوحدة تسلا؟
- [ ] option-1 | \\(1\\times10^{-5}\\)
- [x] option-2 | \\(1.5\\times10^{-5}\\)
- [ ] option-3 | \\(2\\times10^{-5}\\)
- [ ] option-4 | \\(5\\times10^{-5}\\)
explanation:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p054-review-1-3-figure-01.webp)

هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



النقطة \\(a\\) تقع يمين السلكين. المسافة المعطاة \\(4\\,\\mathrm{cm}\\) إلى السلك الأقرب، والآخر أبعد \\(4\\,\\mathrm{cm}\\) إضافية هي المسافة بين السلكين. نحوّل المسافتين إلى المتر بالقسمة على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>4</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>+</mo><mn>4</mn></mrow><mn>100</mn></mfrac><mo>=</mo><mn>0.08</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



التياران نحو الناظر. بقاعدة اليد اليمنى نوجه الإبهام نحونا فتلتف الأصابع عكس عقارب الساعة؛ لذلك يكون المجال عند نقطة يمين السلك إلى أعلى. المجالان هنا إلى أعلى، فنجمع مقداريهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><mn>2</mn><mn>0.04</mn></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>0.08</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>50</mn><mo>+</mo><mn>25</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo>×</mo><mn>75</mn><mo>=</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
example:
![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س1/3.](assets/lessons/physics/source-crops/physics-book-2024-p054-review-1-3-figure-01.webp)
:::

:::mcq
id: physics-book-2024-p054-review-1-4
title: أسئلة الفصل — س1/4 — الكتاب، صفحة PDF 54
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 54، أسئلة الفصل — س1/4
question: أي العوامل تسبب نقصان شدة المجال داخل ملف حلزوني يمر فيه تيار كهربائي، مع ثبوت باقي العوامل؟
- [x] option-1 | زيادة طول الملف
- [ ] option-2 | زيادة عدد لفات الملف
- [ ] option-3 | إنقاص طول الملف
- [ ] option-4 | زيادة شدة التيار المار في الملف
explanation:
داخل ملف حلزوني طويل، يعتمد المجال على عدد اللفات \\(N\\) وشدة التيار \\(I\\) وطول الملف \\(L\\)، وفق العلاقة الآتية، حيث \\(\\mu _{0}\\)نفاذية الفراغ. نستخدمها لأن الخيارات تغير واحداً من هذه العوامل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`



نربط المجال بطول الملف مع تثبيت التيار وعدد اللفات.

زيادة الطول تقلل عدد اللفات في وحدة الطول، لذلك تقل شدة المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>∝</mo><mfrac><mn>1</mn><mi>L</mi></mfrac></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-book-2024-p055-review-2-a-1
title: أسئلة الفصل — س2/أ — فرع 1 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(2\\)/أ — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س2/أ — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرف ما يأتي:

المجال المغناطيسي.

solution:
الإجابة: المجال المغناطيسي: المنطقة المحيطة بالمغناطيس التي تظهر فيها آثار قوته المغناطيسية.

الكتاب: المجال المغناطيسي، الصفحة المطبوعة \\(44\\)، صفحة \\(\\mathrm{PDF} 46\\).

> المنطقة المحيطة بالمغناطيس التي تظهر فيها آثار قوته المغناطيسية.




:::

:::exam-question
id: physics-book-2024-p055-review-2-a-3
title: أسئلة الفصل — س2/أ — فرع 3 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(2\\)/أ — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س2/أ — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرف ما يأتي:

قانون أمبير.

solution:
الإجابة: قانون أمبير: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>∑</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>⋅</mo><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>L</mi><mo>⃗</mo></mover><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mo>∑</mo><mi>I</mi></mrow></math>\`. التيارات في المجموع الجبري هي التي تخترق السطح المحاط بالمسار المغلق.

الكتاب: قانون أمبير، الصفحة المطبوعة \\(49\\)، صفحة \\(\\mathrm{PDF} 51\\).

> لأي مسار مغلق يكون مجموع حاصل الضرب النقطي لشدة المجال المغناطيسي مع طول ذلك الجزء في المسار المغلق يساوي المجموع الجبري للتيارات التي تخترق المسار المغلق، مضروباً في ثابت النفاذية المغناطيسية للفراغ




:::

:::exam-question
id: physics-book-2024-p055-review-2-b-3
title: أسئلة الفصل — س2/ب — فرع 3 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(2\\)/ب — فرع \\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س2/ب — فرع 3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

3- تتقارب خطوط المجال بالقرب من محور السلك وتتباعد كلما ابتعدنا عنه.

solution:
خطوط المجال تمثل شدته؛ تقاربها يعني أن المجال أقوى. للسلك المستقيم الطويل يتناسب المجال عكسياً مع البعد العمودي \\(r\\) عنه عند ثبات التيار \\(I\\)، وفق العلاقة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



تقارب الخطوط يدل على مجال أكبر؛ لذلك تتباعد الخطوط مع الابتعاد عن السلك.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>↑</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>↓</mo></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p055-review-2-b-4
title: أسئلة الفصل — س2/ب — فرع 4 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(2\\)/ب — فرع \\(4\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س2/ب — فرع 4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

4- شدة المجال خارج الملف الحلزوني الذي طوله أكبر بكثير من نصف قطره تقترب من الصفر. قارن في المنطقة الخارجية البعيدة عن طرفي الملف، وفق تقريب الملف الطويل.

solution:
مجالات أجزاء اللفات تتراكب كمتجهات؛ أي إن المساهمات المتعاكسة تنقص إحداها الأخرى.

خارج الملف الحلزوني الطويل تتعاكس معظم هذه المساهمات فتكون المحصلة صغيرة جداً. داخل الملف تتضافر في اتجاه محوره فيكون المجال أقوى بكثير.

لذلك نعد المجال الخارجي قريباً من الصفر عندما يكون طول الملف أكبر بكثير من نصف قطره؛ وهو تقريب للملف الطويل، لا انعدام تام حول كل ملف محدود.
:::

:::exam-question
id: physics-book-2024-p055-review-3
title: أسئلة الفصل — س3 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
احسب مقدار واتجاه شدة المجال المغناطيسي في النقطة \\(c\\) كما في الشكل.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س3.](assets/lessons/physics/source-crops/physics-book-2024-p055-review-3-figure-01.webp)

solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p055-review-3-figure-01.webp)

المسافة من السلك العلوي إلى \\(c\\) هي ارتفاع المثلث القائم: وتره \\(10\\,\\mathrm{cm}\\) وقاعدته \\(6\\,\\mathrm{cm}\\) كما في الرسم. قاعدة فيثاغورس تقول إن مربع الوتر يساوي مجموع مربعي الضلعين القائمين؛ لذلك نطرح مربع القاعدة لإيجاد مربع الارتفاع.

نحوّل \\(10\\,\\mathrm{cm}\\) و \\(6\\,\\mathrm{cm}\\) إلى المتر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>10</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>6</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.06</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><msqrt><mrow><msup><mn>0.10</mn><mn>2</mn></msup><mo>−</mo><msup><mn>0.06</mn><mn>2</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><msqrt><mrow><mn>0.0100</mn><mo>−</mo><mn>0.0036</mn></mrow></msqrt><mo>=</mo><msqrt><mn>0.0064</mn></msqrt><mo>=</mo><mn>0.08</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



مجال السلك الطويل عند بعد عمودي \\(r\\) هو \\(B=\\mu _{0}I/(2\\pi r)\\)، أي \\(2\\times 10^{-7} I/r\\) في الهواء. نحدد اتجاهه بلف أصابع اليد اليمنى حول اتجاه الإبهام الذي يشير مع التيار.

التيار العلوي خارج الصفحة؛ مجاله عند النقطة أسفله إلى اليمين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>6</mn><mn>0.08</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



عند \\(c\\) نقع يمين السلك الأيسر الذي يخرج تياره من الصفحة، فيتجه مجاله إلى أعلى. ونقع يسار السلك الأيمن الذي يدخل تياره في الصفحة، فيتجه مجاله أيضاً إلى أعلى بقاعدة اليد اليمنى. لذلك نجمع المجالين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>y</mi></msub><mo>=</mo><mn>2</mn><mrow><mo fence="true">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>6</mn><mn>0.06</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجالان الأفقي \\(B_{x}\\) والرأسي \\(B_{y}\\) متعامدان. المحصلة هي وتر مثلث قائم ضلعاه هذان المجالان؛ لذلك نستخدم فيثاغورس:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><msubsup><mi>B</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mi>y</mi><mn>2</mn></msubsup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><mo stretchy="false">(</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mn>18.25</mn></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>≈</mo><mn>4.27</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>tan</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mfrac><msub><mi>B</mi><mi>y</mi></msub><msub><mi>B</mi><mi>x</mi></msub></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>1.5</mn></mfrac></mrow></math>
\`\`\`



الزاوية هنا من الاتجاه الأفقي الموجب إلى أعلى؛ نأخذ معكوس الظل لإيجادها:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>tan</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>4</mn><mn>1.5</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>≈</mo><msup><mn>69.4</mn><mo>∘</mo></msup></mrow></math>
\`\`\`



إذن المجال نحو أعلى اليمين، ومقداره \\(4.27\\times 10^{-5}\\,\\mathrm{T}\\) بزاوية \\(69.4^{\\circ}\\)فوق الأفقي.
:::

:::exam-question
id: physics-book-2024-p055-review-4
title: أسئلة الفصل — س4 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(4\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س4
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اعتمادًا على المعلومات المثبتة على الشكل المجاور، احسب المجال المغناطيسي الكلي عند النقطة \\(a\\).

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س4.](assets/lessons/physics/source-crops/physics-book-2024-p055-review-4-figure-01.webp)

solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p055-review-4-figure-01.webp)

قانون بيو سفار يعطي مساهمة جزء صغير من السلك في المجال. \\(\\theta\\) هي الزاوية بين اتجاه عنصر السلك ومتجه البعد من العنصر إلى النقطة؛ إذا كانا على استقامة واحدة فجيب الزاوية صفر، فتكون مساهمة هذا الجزء صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>L</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الأجزاء المستقيمة شعاعية بالنسبة إلى المركز، لذا لا تولد مجالًا عنده.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mn>0</mn><mspace width="1em"/><mo stretchy="false">(</mo><mi>θ</mi><mo>=</mo><msup><mn>0</mn><mo>∘</mo></msup><mtext> or </mtext><msup><mn>180</mn><mo>∘</mo></msup><mo stretchy="false">)</mo></mrow></math>
\`\`\`



مجال قوس عند مركزه هو النسبة التي تمثلها زاويته من دورة كاملة مضروبة في مجال الحلقة \\(\\mu _{0}I/(2r)\\). القوس زاويته \\(60^{\\circ}\\)، أي سدس دورة؛ نحسب مجال القوسين بنصفي القطر بالمتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">c</mi></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



لتحديد اتجاه مجال القوس نلف أصابع اليد اليمنى مع التيار، فيشير الإبهام إلى اتجاه المجال عند المركز. التيار في القوس الداخلي مع الساعة، فيعطي مجالاً للداخل؛ وفي الخارجي عكس الساعة، فيعطي مجالاً للخارج. المجالان متعاكسان، فنطرح الأصغر من الأكبر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>12</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><mrow><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup></mrow></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow><mn>12</mn></mfrac><mo>×</mo><mfrac><mn>50</mn><mi>π</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>400</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow><mn>12</mn></mfrac><mo>≈</mo><mn>3.33</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



مجال القوس الأصغر أقوى لأن المجال يتناسب عكسياً مع نصف القطر. لذلك **المحصلة \\(3.33\\times 10^{-6}\\,\\mathrm{T}\\) إلى داخل الصفحة**.
:::

:::exam-question
id: physics-book-2024-p055-review-5
title: أسئلة الفصل — س5 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(5\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الشكل يمثل ملفًا حلزونيًا عدد لفاته \\(7\\) وطوله \\(3\\,\\mathrm{cm}\\)، يمر فيه تيار \\(2\\,\\mathrm{A}\\) مع عقارب الساعة عند النظر إليه من اليمين. غمر في مجال شدته \\(3\\times10^{-4}\\,\\mathrm{T}\\) نحو اليمين. احسب محصلة المجال عند نقطة داخله.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س5.](assets/lessons/physics/source-crops/physics-book-2024-p055-review-5-figure-01.webp)

solution:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p055-review-5-figure-01.webp)

داخل الملف الحلزوني الطويل يكون المجال قريبًا من المنتظم، ويعتمد على عدد اللفات في وحدة الطول. لهذا نستخدم طول الملف المحوري \\(L\\)، ونميز بينه وبين طول السلك المصنوع منه. هنا \\(N\\) عدد اللفات ويساوي \\(7\\)، و\\(I\\) شدة التيار وتساوي \\(2\\,\\mathrm{A}\\)، و\\(\\mu _{0}\\)نفاذية الفراغ. نستخدم نموذج الملف الطويل للمجال الداخلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



نحوّل طول الملف إلى المتر. لتحديد الاتجاه نلف أصابع اليد اليمنى مع دوران التيار كما نراه من اليمين؛ الدوران مع الساعة يجعل الإبهام يشير إلى داخل هذا الوجه، أي نحو اليسار. ثم نحسب مقدار المجال:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>3</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.03</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>7</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mn>0.03</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><mn>5.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mi>π</mi></mrow><mn>0.03</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>≈</mo><mn>5.86</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال الخارجي إلى اليمين، فنطرحه من مجال الملف الأقوى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>5.86</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mo>−</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>≈</mo><mn>2.86</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



إذن المحصلة **\\(2.86\\times 10^{-4}\\,\\mathrm{T}\\) نحو اليسار**، في اتجاه مجال الملف الأقوى.
:::

:::exam-question
id: physics-book-2024-p055-review-6-1
title: أسئلة الفصل — س6 — فرع 1 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(6\\) — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س6 — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك موصل طوله \\(50\\pi\\,\\mathrm{m}\\) صنع منه ملف دائري نصف قطره \\(R\\) وعدد لفاته \\(N\\). مر به تيار \\(5\\,\\mathrm{A}\\) فولد في مركزه مجالًا شدته \\(2\\pi\\times10^{-3}\\,\\mathrm{T}\\). احسب:

نصف قطر الملف.

solution:
طول السلك يساوي مجموع محيطات اللفات؛ نستخرج حاصل ضرب عدد اللفات في نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>π</mi><mi>R</mi><mi>N</mi><mo>=</mo><mn>50</mn><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>N</mi><mo>=</mo><mfrac><mrow><mn>50</mn><mi>π</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mn>25</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



مجال مركز الملف الدائري ذي \\(N\\) لفة هو \\(B=\\mu _{0}NI/(2R)\\). لأن المجال والتيار معلومان، نستخرج منه نسبة عدد اللفات إلى نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mi>N</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



نبسط الثوابت: \\(4\\pi \\times 10^{-7}\\times 5\\div 2=\\pi \\times 10^{-6}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>N</mi><mi>R</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow><mrow><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>N</mi><mi>R</mi></mfrac><mo>=</mo><mn>2000</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`



نقسم حاصل الضرب \\(RN\\) علىالنسبة \\(N/R\\)؛ عند ضرب البسط في مقلوب المقام يُختصر \\(N\\) ويبقى \\(R^{2}\\). ثم نأخذ الجذر الموجب لأن نصف القطر طول موجب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>R</mi><mi>N</mi></mrow><mrow><mi>N</mi><mi mathvariant="normal">/</mi><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>25</mn><mn>2000</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0.0125</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><msqrt><mn>0.0125</mn></msqrt><mo>≈</mo><mn>0.1118</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-book-2024-p055-review-6-2
title: أسئلة الفصل — س6 — فرع 2 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(6\\) — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س6 — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلك موصل طوله \\(50\\pi\\,\\mathrm{m}\\) صنع منه ملف دائري نصف قطره \\(R\\) وعدد لفاته \\(N\\). مر به تيار \\(5\\,\\mathrm{A}\\) فولد في مركزه مجالًا شدته \\(2\\pi\\times10^{-3}\\,\\mathrm{T}\\). احسب:

عدد لفاته.

solution:
طول السلك يساوي مجموع محيطات اللفات؛ نستخرج حاصل ضرب عدد اللفات في نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>π</mi><mi>R</mi><mi>N</mi><mo>=</mo><mn>50</mn><mi>π</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mi>N</mi><mo>=</mo><mfrac><mrow><mn>50</mn><mi>π</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mn>25</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



مجال مركز الملف الدائري ذي \\(N\\) لفة هو \\(B=\\mu _{0}NI/(2R)\\). لأن المجال والتيار معلومان، نستخرج منه نسبة عدد اللفات إلى نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo><mi>N</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



نبسط الثوابت: \\(4\\pi \\times 10^{-7}\\times 5\\div 2=\\pi \\times 10^{-6}\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>N</mi><mi>R</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow><mrow><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>N</mi><mi>R</mi></mfrac><mo>=</mo><mn>2000</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`



نقسم حاصل الضرب \\(RN\\) علىالنسبة \\(N/R\\)؛ عند ضرب البسط في مقلوب المقام يُختصر \\(N\\) ويبقى \\(R^{2}\\). ثم نأخذ الجذر الموجب لأن نصف القطر طول موجب:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>R</mi><mi>N</mi></mrow><mrow><mi>N</mi><mi mathvariant="normal">/</mi><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>25</mn><mn>2000</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0.0125</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mn>2</mn></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><msqrt><mn>0.0125</mn></msqrt><mo>≈</mo><mn>0.1118</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نقسم \\(RN=25\\) علىنصفالقطر، ونحتفظ بقيمته دون تقريب أثناء الحساب. ثم نقرب عدد اللفات إلى أقرب عدد صحيح:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mn>25</mn><msqrt><mn>0.0125</mn></msqrt></mfrac><mo>≈</mo><mn>223.6</mn><mo>≈</mo><mn>224</mn></mrow></math>
\`\`\`



عدد اللفات **نحو \\(224\\) لفة**؛ وهذه قيمة تقريبية، لا مساواة دقيقة للمعطيات.
:::

:::exam-question
id: physics-book-2024-p055-review-7
title: أسئلة الفصل — س7 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(7\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلكان مستقيمان لا نهائيان: الأول تياره \\(2\\,\\mathrm{A}\\) نحو الصادات الموجب، والثاني \\(4\\,\\mathrm{A}\\) نحو السينات السالب. حلقة في مستواهما نصف قطرها \\(\\pi\\,\\mathrm{cm}\\) ومركزها عند \\((4\\,\\mathrm{cm},8\\,\\mathrm{cm})\\). أوجد مقدار واتجاه تيار الحلقة لتصبح شدة المجال في مركزها \\(10^{-5}\\,\\mathrm{T}\\) باتجاه الناظر.

![الرسم الأصلي من كتاب الفيزياء — أسئلة الفصل — س7.](assets/lessons/physics/source-crops/physics-book-2024-p055-review-7-figure-01.webp)

solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p055-review-7-figure-01.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد مجال السلك المستقيم، نجعل إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يبين دوران المجال حوله. وللملف الدائري نلف الأصابع مع التيار، فيشير الإبهام إلى مجال المركز. نستخدم الاتجاه الموافق لكل جزء من الرسم قبل جمع المجالات.

الحلقة هنا لفة واحدة، أي \\(N=1\\). مجال مركزها يعتمد على تيارها ونصف قطرها وفق العلاقة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



مركز الحلقة يبعد \\(4\\,\\mathrm{cm}\\) عن محورالصادات و \\(8\\,\\mathrm{cm}\\) عن محورالسينات. نحوّلهما إلى \\(0.04\\,\\mathrm{m}\\) و \\(0.08\\) مبالقسمة على \\(100\\). نستخدم البعد العمودي عن كل سلك؛ بقاعدة اليد اليمنى يكون مجال السلك الصاعد إلى داخل الصفحة يمينه، ومجال السلك المتجه إلى اليسار إلى داخل الصفحة أعلاه. إذن المجالان إلى الداخل:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>2</mn><mn>0.04</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>0.08</mn></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المحصلة المطلوبة إلى الخارج؛ لذلك يجب أن يعاكس مجال الحلقة مجالي السلكين ويزيد عليهما بالمقدار المطلوب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نستخرج تيار الحلقة بعد تحويل نصف قطرها إلى المتر؛ المجال للخارج يتطلب تيارًا عكس عقارب الساعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi><msub><mi>B</mi><mi>c</mi></msub></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>π</mi><mn>100</mn></mfrac><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::mcq
id: physics-tawjihi-2025-p070-q425
title: أسئلة الفصل — س1/5 — الكتاب، صفحة PDF 54
kicker: اختر الإجابة الصحيحة
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 54، أسئلة الفصل — س1/5
question: سلك معدني طوله \\(L\\) شكل حلقة من لفة واحدة ومر فيه تيار \\(I\\)، فكان المجال عند المركز \\(B\\). إذا لف السلك نفسه ملفًا دائريًا من لفتين ومر التيار نفسه، فما شدة المجال عند المركز؟
- [ ] option-1 | \\(2B\\)
- [ ] option-2 | \\(B\\)
- [x] option-3 | \\(4B\\)
- [ ] option-4 | \\(0.5B\\)
explanation:
لمجال مركز ملف دائري نضرب مجال اللفة الواحدة في عدد اللفات \\(N\\)، ونقسم على نصف القطر \\(r\\). لذلك يلزم الانتباه إلى تغير نصف القطر عندما يعاد لف السلك نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



طول السلك ثابت؛ مضاعفة اللفات تخفض نصف قطر كل لفة إلى النصف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>π</mi><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mi>π</mi><msub><mi>R</mi><mn>2</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>R</mi><mn>1</mn></msub><mn>2</mn></mfrac></mrow></math>
\`\`\`



المجال يتناسب مع عدد اللفات وعكسيًا مع نصف القطر، فيزداد بعامل أربعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mfrac><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>4</mn></mrow></math>
\`\`\`


hint: استخدم معطيات السؤال والعلاقات الفيزيائية في الكتاب.
:::

:::exam-question
id: physics-tawjihi-2025-p073-q437
title: أسئلة الفصل — س2/أ — فرع 2 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(2\\)/أ — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س2/أ — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرف ما يأتي:

كثافة خطوط المجال المغناطيسي.

solution:
كثافة خطوط المجال المغناطيسي هي عدد الخطوط التي تعبر وحدة المساحة العمودية عليها في تمثيل المجال بالخطوط.

يمكن فهم هذا التعريف من علاقة التدفق في الكتاب. التدفق يصف اختراق المجال لسطح، ويكتب للمجال المنتظم:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>B</mi></msub><mo>=</mo><mi>B</mi><mi>A</mi><mi>cos</mi><mo>⁡</mo><mi>θ</mi></mrow></math>
\`\`\`

هنا \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>A</mi></mrow></math>\` مساحة السطح، و\`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>θ</mi></mrow></math>\` الزاوية بين المجال والعمودي على السطح. عندما يكون السطح عمودياً على المجال، يتجه عموده مع المجال، فتكون الزاوية صفراً:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>cos</mi><mo>⁡</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi mathvariant="normal">Φ</mi><mi>B</mi></msub><mo>=</mo><mi>B</mi><mi>A</mi></mrow></math>
\`\`\`

نقسم على المساحة الموجبة لنحصل على التدفق لكل وحدة مساحة:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><msub><mi mathvariant="normal">Φ</mi><mi>B</mi></msub><mi>A</mi></mfrac></mrow></math>
\`\`\`

لذلك تمثل كثافة الخطوط مقدار المجال: كلما ازدحم عدد أكبر من الخطوط في المساحة نفسها كان المجال أشد.

هذا توضيح مستنتج من مفهوم التدفق وعلاقته، وليس اقتباساً حرفياً لتعريف كثافة الخطوط. في الكتاب، الصفحة المطبوعة \\(125\\)، صفحة \\(\\mathrm{PDF} 129\\):

> وبالمثل، يُعرّف قطع خطوط المجال المغناطيسي لمساحة ما: التدفق المغناطيسي

[فتح صفحة الكتاب](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=129)



:::

:::exam-question
id: physics-tawjihi-2025-p073-q444
title: أسئلة الفصل — س2/ب — فرع 1 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(2\\)/ب — فرع \\(1\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س2/ب — فرع 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

1- خطوط المجال المغناطيسي مغلقة.

solution:
لا تبدأ خطوط المجال أو تنتهي عند قطب منفرد؛ تخرج من الشمالي إلى الجنوبي خارج المغناطيس ثم تكمل مسارها داخله من الجنوبي إلى الشمالي، فتكوّن خطوطًا مغلقة.
:::

:::exam-question
id: physics-tawjihi-2025-p073-q442
title: أسئلة الفصل — س2/ب — فرع 2 — الكتاب، صفحة PDF 55
question: أسئلة الفصل — س\\(2\\)/ب — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 55، أسئلة الفصل — س2/ب — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل:

2- خطوط المجال المغناطيسي لا تتقاطع.

solution:
مماس خط المجال يحدد اتجاهه عند النقطة؛ لو تقاطع خطان لكان للمجال اتجاهان مختلفان في النقطة نفسها، وهذا لا يحدث.
:::

:::exam-question
id: physics-tawjihi-2025-p073-q441
title: أسئلة الوحدة — س2/أ — فرع 2 — الكتاب، صفحة PDF 74
question: أسئلة الوحدة — س\\(2\\)/أ — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س2/أ — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علّل: لماذا لا يتيح تناظر الملف الدائري استعمال قانون أمبير مباشرةً لحساب المجال عند مركزه، كما نفعل في حالة السلك المستقيم الطويل؟

solution:
قانون أمبير يربط مجموع مساهمات المجال على مسار مغلق بالتيار الذي يخترقه. لكي نستخرج مقدار المجال منه مباشرة، نحتاج مساراً يكون اتجاه المجال عليه معروفاً ومقداره ثابتاً في الأجزاء المؤثرة.

عند مركز الملف الدائري لا يتوافر مسار مناسب بهذا التماثل؛ فمعرفة المجال عند المركز وحده لا تحدد المجال على بقية المسار المغلق. لذلك نستخدم قانون بيو سفار الذي يحسب مساهمة كل جزء صغير من السلك، ثم نجمع هذه المساهمات.

إذن السبب هو غياب التماثل اللازم لاستخراج مجال المركز مباشرة، مع بقاء قانون أمبير صحيحاً.
:::

:::exam-question
id: physics-tawjihi-2025-p073-q439
title: أسئلة الوحدة — س2/ب — فرع 2 — الكتاب، صفحة PDF 74
question: أسئلة الوحدة — س\\(2\\)/ب — فرع \\(2\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س2/ب — فرع 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
عرف كلًا من:

خط المجال المغناطيسي.

solution:
الإجابة: خط المجال المغناطيسي: المسار الذي يتبعه قطب شمالي افتراضي مفرد، حر الحركة، عند وضعه في المجال.

الكتاب: خط المجال المغناطيسي، الصفحة المطبوعة \\(44\\)، صفحة \\(\\mathrm{PDF} 46\\).

> إن خط المجال المغناطيسي خط قوة له اتجاه، ويعبر عنه بالمسار الذي يتبعه القطب الشمالي الافتراضي المفرد حر الحركة تحت تأثير القوى المغناطيسية المؤثرة فيه عندما يوضع في المجال المغناطيسي.




:::

:::exam-question
id: physics-tawjihi-2025-p077-q465
title: أسئلة الوحدة — س3 — الكتاب، صفحة PDF 74
question: أسئلة الوحدة — س\\(3\\)
reference: كتاب الفيزياء — الرزمة التعليمية 2024، صفحة PDF 74، أسئلة الوحدة — س3
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يمثل الشكل سلكًا يسري فيه تيار \\(2\\,\\mathrm{A}\\) في الاتجاه المبين. ما شدة المجال عند \\(c\\)؟

![الرسم الأصلي من كتاب الفيزياء — أسئلة الوحدة — س3.](assets/lessons/physics/source-crops/physics-book-2024-p074-unit-3-figure-01.webp)

solution:
لتحديد مجال السلك المستقيم، نجعل إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يبين دوران المجال حوله. وللملف الدائري نلف الأصابع مع التيار، فيشير الإبهام إلى مجال المركز. نستخدم الاتجاه الموافق لكل جزء من الرسم قبل جمع المجالات.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/physics/source-crops/physics-book-2024-p074-unit-3-figure-01.webp)

قانون بيو سفار يعطي مساهمة جزء صغير من السلك في المجال. \\(\\theta\\) هي الزاوية بين اتجاه عنصر السلك ومتجه البعد من العنصر إلى النقطة؛ إذا كانا على استقامة واحدة فجيب الزاوية صفر، فتكون مساهمة هذا الجزء صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>L</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الأجزاء المستقيمة تقع على أنصاف أقطار تمر بالمركز، لذلك لا تسهم في مجاله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>∝</mo><mi>sin</mi><mo>⁡</mo><msup><mn>0</mn><mo>∘</mo></msup><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



مجال القوس عند مركزه يساوي كسر زاويته من دورة كاملة مضروبًا في مجال الحلقة الكاملة \\(\\mu _{0}I/(2r)\\). نحول نصفي القطر: \\(5\\,\\mathrm{cm}=0\\)٫\\(05\\,\\mathrm{m}\\)، و\\(3\\,\\mathrm{cm}=0\\)٫\\(03\\,\\mathrm{m}\\).

القوس الكبير ثلاثة أرباع دائرة، والصغير ربع دائرة؛ نحسب مجال كل منهما بالمتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.05</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mn>6</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.03</mn><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>10</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow></math>
\`\`\`



التيار في القوسين عكس عقارب الساعة، فيتجه المجالان نحو الناظر ونجمعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>≈</mo><mn>1.885</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>≈</mo><mn>1.047</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>B</mi><mn>1</mn></msub><mo>+</mo><msub><mi>B</mi><mn>2</mn></msub><mo>≈</mo><mn>2.932</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>≈</mo><mn>2.93</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



اتجاه المحصلة نحو الناظر، أي إلى خارج الصفحة.
:::

:::mcq
id: physics-tawjihi-2025-p067-q406
title: السؤال 406 — ص 66 — السؤال الأصلي 2
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 66، السؤال 2
question: في الشكل المجاور سلكان متوازيان لا نهائيان في الطول وفي مستوى الصفحة، إذا انعدمت شدة المجال المغناطيسي الناتجة عن تياريهما عند النقطة \\(x\\) فإن \\(I_2\\) يساوي:
- [ ] option-1 | \\(\\frac23 I_1\\) باتجاه معاكس له
- [ ] option-2 | \\(\\frac32 I_1\\) بنفس الاتجاه
- [x] option-3 | \\(\\frac32 I_1\\) باتجاه معاكس له
- [ ] option-4 | \\(\\frac23 I_1\\) بنفس الاتجاه
explanation:
النقطة خارج السلكين؛ بعدها عن الأول ضعف المسافة المرجعية وعن الثاني ثلاثة أمثالها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/039b7470fef4da8d6919.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>r</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><mi>r</mi></mrow></math>
\`\`\`



مجال السلك الطويل \\(B=\\mu _{0}I/(2\\pi r)\\)، فيتناسب مع \\(I/r\\). انعدام المحصلة يعني تساوي المقدارين، فنلغي العوامل المشتركة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>1</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>2</mn><mi>r</mi><mo stretchy="false">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>3</mn><mi>r</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>I</mi><mn>1</mn></msub><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>2</mn></msub><mrow><mn>3</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mi>r</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`



نطبق قاعدة اليد اليمنى: الإبهام مع تيار \\(I_{1}\\)إلىاليمين، فيكون مجاله عند \\(x\\) أسفل السلك إلى داخل الصفحة. لإلغائه يجب أن يكون مجال السلك العلوي خارج الصفحة عند \\(x\\)؛ وهذا يتطلب \\(I_{2}\\)إلىاليسار.

إذن \\(I_{2}=3I_{1}/2\\) وبعكس اتجاهه، الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلكان متوازيان يحملان I₁ وI₂ والنقطة x أسفلهما على الأبعاد r و2r.](assets/lessons/curriculum-evidence/039b7470fef4da8d6919.webp)
:::

:::mcq
id: physics-tawjihi-2025-p067-q407
title: السؤال 407 — ص 66 — السؤال الأصلي 3
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 66، السؤال 3
question: في الشكل المجاور، سلك لا نهائي الطول يمر به تيار شدته \\(15\\,\\mathrm{A}\\) وينطبق على محور ملف حلزوني عدد لفاته \\(100\\) لفة لكل متر، ويمر به تيار شدته \\(\\frac1\\pi\\,\\mathrm{A}\\)، فما قيمة شدة المجال المغناطيسي بوحدة تسلا عند النقطة \\(a\\)؟
- [ ] option-1 | \\(1\\times10^{-5}\\)
- [ ] option-2 | \\(2\\times10^{-5}\\)
- [x] option-3 | \\(3\\times10^{-5}\\)
- [ ] option-4 | \\(4\\times10^{-5}\\)
explanation:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/6831666c787b2e5ad8fb.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



النقطة \\(a\\) خارج الملف الحلزوني الطويل. في نموذج هذا الملف تتعاكس معظم مساهمات لفاته خارجياً فيكون مجاله الخارجي ضعيفاً؛ لذلك نهمله هنا ونبقي مجال السلك المستقيم.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mo separator="true">,</mo><mi mathvariant="normal">o</mi><mi mathvariant="normal">u</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">s</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>≈</mo><mn>0</mn></mrow></math>
\`\`\`



نحسب مجال السلك عند بعد عشرة سنتيمترات، بعد تحويله إلى المتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>15</mn><mn>0.10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلك مستقيم منطبق على محور ملف حلزوني ونقطة a على بعد 10 cm.](assets/lessons/curriculum-evidence/6831666c787b2e5ad8fb.webp)
:::

:::mcq
id: physics-tawjihi-2025-p067-q408
title: السؤال 408 — ص 66 — السؤال الأصلي 4
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 66، السؤال 4
question: سلك مستقيم لف على شكل دائري لفة واحدة، ومر به تيار كهربائي، إذا لف السلك نفسه على شكل ملف دائري أربع لفات، ومر به نفس التيار، فما النسبة بين شدة المجال المغناطيسي عند مركز الملف الأول \\(B_1\\) إلى شدة المجال المغناطيسي \\(B_2\\) عند مركز الملف الثاني \\(B_1/B_2\\)؟
- [ ] option-1 | \\(\\frac14\\)
- [ ] option-2 | \\(\\frac41\\)
- [x] option-3 | \\(\\frac1{16}\\)
- [ ] option-4 | \\(\\frac{16}1\\)
explanation:
لمجال مركز ملف دائري نضرب مجال اللفة الواحدة في عدد اللفات \\(N\\)، ونقسم على نصف القطر \\(r\\). لذلك يلزم الانتباه إلى تغير نصف القطر عندما يعاد لف السلك نفسه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



إعادة لف السلك إلى أربع لفات تجعل نصف القطر ربع قيمته لأن الطول ثابت.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>π</mi><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mi>π</mi><msub><mi>R</mi><mn>2</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>R</mi><mn>1</mn></msub><mn>4</mn></mfrac></mrow></math>
\`\`\`



نقارن المجالين مع ثبات التيار؛ زيادة اللفات ونقصان نصف القطر يعطيان عامل ستة عشر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>4</mn><mfrac><msub><mi>R</mi><mn>1</mn></msub><msub><mi>R</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mn>16</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>1</mn></msub><msub><mi>B</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>16</mn></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p067-q409
title: السؤال 409 — ص 66 — السؤال الأصلي 5
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 66، السؤال 5
question: في الشكل المجاور ملف دائري وسلك لا نهائي الطول يحمل تيارًا شدته \\(9\\) أضعاف تيار الملف الدائري، ما عدد لفات الملف الدائري بحيث ينعدم المجال المغناطيسي عند مركزه؟
- [ ] option-1 | \\(\\frac9\\pi\\) لفة
- [x] option-2 | \\(\\frac{4.5}\\pi\\) لفة
- [ ] option-3 | \\(\\frac\\pi9\\) لفة
- [ ] option-4 | \\(\\pi\\) لفة
explanation:
مجال مركز الملف هو \\(\\mu _{0}NI/(2R)\\)، ومجال السلك الطويل \\(\\mu _{0}I/(2\\pi d)\\)، حيث \\(d\\) بعد المركز عن السلك. بقاعدة اليد اليمنى يتجه المجالان في الرسم باتجاهين متعاكسين. لكي تنعدم المحصلة عند المركز، نساوي مجال الحلقة بمجال السلك المعاكس له.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/7545c3dba846ea41d7c1.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>9</mn><mi>I</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mn>2</mn><mi>R</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



المسافة بين مركز الملف والسلك \\(2R\\) كما في الرسم. نختصر \\(\\mu _{0}I\\) من الطرفين، ثم نضرب في \\(2R\\) لعزل \\(N\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>N</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>9</mn><mrow><mn>4</mn><mi>π</mi><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mrow><mn>9</mn><mo stretchy="false">(</mo><mn>2</mn><mi>R</mi><mo stretchy="false">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>9</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mn>4.5</mn><mi>π</mi></mfrac></mrow></math>
\`\`\`



القيمة كسرية؛ تُفهم كعدد لفات فعّال، حيث تحسب أجزاء اللفة بنسبتها الزاوية في النموذج المثالي. أما اشتراط لفات كاملة حصراً فلا يعطي عدداً صحيحاً يحقق الانعدام التام بهذه المعطيات.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلك يحمل 9I وملف دائري يحمل I نصف قطره R ومركزه يبعد 2R عن السلك.](assets/lessons/curriculum-evidence/7545c3dba846ea41d7c1.webp)
:::

:::mcq
id: physics-tawjihi-2025-p068-q410
title: السؤال 410 — ص 67 — السؤال الأصلي 6
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 67، السؤال 6
question: في الشكل المجاور ملف دائري يكاد يمس سلكًا لا نهائي الطول يحمل تيارًا شدته \\(4\\) أضعاف تيار الملف الدائري، ما عدد لفات الملف الدائري بحيث ينعدم المجال المغناطيسي عند مركزه؟
- [ ] option-1 | \\(\\frac1\\pi\\) لفة
- [ ] option-2 | \\(\\frac\\pi4\\) لفة
- [x] option-3 | \\(\\frac4\\pi\\) لفة
- [ ] option-4 | \\(4\\pi\\) لفة
explanation:
مجال مركز الملف هو \\(\\mu _{0}NI/(2R)\\)، ومجال السلك الطويل \\(\\mu _{0}I/(2\\pi d)\\)، حيث \\(d\\) بعد المركز عن السلك. بقاعدة اليد اليمنى يتجه المجالان في الرسم باتجاهين متعاكسين. لكي تنعدم المحصلة عند المركز، نساوي مجال الحلقة بمجال السلك المعاكس له.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/7e91461062389cde6722.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">(</mo><mn>4</mn><mi>I</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mi>π</mi><mo stretchy="false">(</mo><mi>R</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



يكاد الملف يمس السلك، لذلك نعد بعد مركزه عن السلك مساوياً لنصف قطره \\(R\\). نختصر \\(\\mu _{0}I\\) من الطرفين، ثم نضرب في \\(2R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>N</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mn>4</mn><mrow><mn>2</mn><mi>π</mi><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mo stretchy="false">(</mo><mn>2</mn><mi>R</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mi>π</mi><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><mfrac><mn>4</mn><mi>π</mi></mfrac></mrow></math>
\`\`\`



القيمة كسرية؛ تُفهم كعدد لفات فعّال، حيث تحسب أجزاء اللفة بنسبتها الزاوية في النموذج المثالي. أما اشتراط لفات كاملة حصراً فلا يعطي عدداً صحيحاً يحقق الانعدام التام بهذه المعطيات.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![ملف دائري نصف قطره R بجوار سلك مستقيم يكاد يلامسه واتجاها التيارين.](assets/lessons/curriculum-evidence/7e91461062389cde6722.webp)
:::

:::mcq
id: physics-tawjihi-2025-p068-q411
title: السؤال 411 — ص 67 — السؤال الأصلي 7
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 67، السؤال 7
question: لديك أربع أسلاك طويلة ومتقاطعة ومغلفة بمادة عازلة، وضعت لتشكل معًا مربعًا فإذا كان كلا منهما يحمل نفس التيار الكهربائي، أي المربعات الآتية ينعدم المجال المغناطيسي في مركزه؟
- [ ] option-1 | الرأسي الأيسر إلى أسفل والأيمن إلى أعلى، والأفقيان إلى اليسار.
- [x] option-2 | التياران الرأسيان إلى أعلى والأفقيان إلى اليمين.
- [ ] option-3 | التياران الرأسيان إلى أعلى، والأفقي العلوي إلى اليمين والسفلي إلى اليسار.
- [ ] option-4 | الرأسي الأيسر إلى أسفل والأيمن إلى أعلى، والأفقي العلوي إلى اليسار والسفلي إلى اليمين.
explanation:
المطلوب أن يكون مجموع مجالات الأسلاك الأربعة صفراً عند المركز. مقدار مجال السلك الطويل يزداد مع التيار وينقص مع البعد العمودي عنه؛ ولأن التيارات والأبعاد متساوية هنا، تتساوى مقادير المجالات.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/351c005ce5f65a336416.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



نحدد الاتجاه بقاعدة اليد اليمنى: الإبهام مع تيار السلك، والتفاف الأصابع يعطي اتجاه المجال حوله.

في الشكل الثاني التياران الرأسيان إلى أعلى؛ عند المركز يكون مجال السلك الأيسر إلى الداخل ومجال الأيمن إلى الخارج.

التياران الأفقيان إلى اليمين؛ عند المركز يكون مجال العلوي إلى الداخل ومجال السفلي إلى الخارج.

إذن يتلاشى مجال كل زوج، فتكون الإجابة الشكل الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msub><mi>B</mi><mn>0</mn></msub><mo>−</mo><msub><mi>B</mi><mn>0</mn></msub><mo>+</mo><msub><mi>B</mi><mn>0</mn></msub><mo>−</mo><msub><mi>B</mi><mn>0</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![الرسم أ: اتجاهات التيار في الأسلاك الأربعة.](assets/lessons/curriculum-evidence/2ea918b4fb65d173797d.webp)
![الرسم ب: اتجاهات التيار في الأسلاك الأربعة.](assets/lessons/curriculum-evidence/351c005ce5f65a336416.webp)
![الرسم ج: اتجاهات التيار في الأسلاك الأربعة.](assets/lessons/curriculum-evidence/29ee63c4f8d68f80ec78.webp)
![الرسم د: اتجاهات التيار في الأسلاك الأربعة.](assets/lessons/curriculum-evidence/25b7203655b40b1aa1a9.webp)
:::

:::mcq
id: physics-tawjihi-2025-p068-q412
title: السؤال 412 — ص 67 — السؤال الأصلي 8
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 67، السؤال 8
question: يقل المجال المغناطيسي داخل ملف حلزوني يمر فيه تيار كهربائي عند:
- [x] option-1 | زيادة طول الملف
- [ ] option-2 | زيادة عدد لفات الملف
- [ ] option-3 | إنقاص طول الملف
- [ ] option-4 | زيادة التيار المار في الملف
explanation:
داخل الملف الحلزوني الطويل يتناسب المجال مع كثافة اللفات، أي عدد اللفات في وحدة الطول. نرمز لعدد اللفات بـ \\(N\\)، وطول الملف بـ \\(L\\)، والتيار بـ \\(I\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`



نربط المجال بطول الملف مع تثبيت التيار وعدد اللفات.

زيادة الطول تقلل عدد اللفات في وحدة الطول، لذلك تقل شدة المجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>∝</mo><mfrac><mn>1</mn><mi>L</mi></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p068-q413
title: السؤال 413 — ص 67 — السؤال الأصلي 9
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 67، السؤال 9؛ تصنيف أسئلة الفيزياء توجيهي 2025، ص 66، السؤال 1
question: ملف دائري نصف قطره \\(r\\) وعدد لفاته \\(N\\) ويمر به تيار كهربائي \\(I\\)، إذا سحب من طرفيه باتجاه عمودي على سطحه بحيث أصبح ملفًا حلزونيًا، ما طول الملف الحلزوني بدلالة \\(r\\) اللازم لجعل شدة المجال المغناطيسي على محوره بعيدًا عن الأطراف مساويًا نصف شدة المجال المغناطيسي عند مركز الملف الدائري؟
- [ ] option-1 | \\(L=0.25r\\)
- [ ] option-2 | \\(L=0.5r\\)
- [ ] option-3 | \\(L=2r\\)
- [x] option-4 | \\(L=4r\\)
explanation:
نقارن مجال مركز الملف الدائري بمجال الملف الحلزوني على محوره بعيداً عن طرفيه، وفق نموذج الملف الطويل. يبقى عدد اللفات \\(N\\) والتيار \\(I\\) ثابتين.

مجال المركز الدائري يتناسب مع عدد اللفات والتيار، وعكسياً مع نصف القطر \\(r\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



مجال الملف الحلزوني يتناسب مع عدد اللفات في وحدة الطول \\(N/L\\)؛ حيث \\(L\\) طول الملف:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`



نشترط أن يكون مجال الملف الحلزوني نصف المجال الدائري. نقسم الطرفين على العامل المشترك غير الصفري \\(\\mu _{0}NI\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>1</mn><mi>L</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



بأخذ مقلوب الطرفين، لأن الطولين موجبان:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>4</mn><mi>r</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p068-q414
title: السؤال 414 — ص 67 — السؤال الأصلي 10
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 67، السؤال 10
question: وحدة قياس ثابت النفاذية المغناطيسية هي:
- [x] option-1 | \\(\\,\\mathrm{H/m}\\)
- [ ] option-2 | تسلا · م · أمبير
- [ ] option-3 | تسلا · \\(\\,\\mathrm{A/m}\\)
- [ ] option-4 | \\(\\,\\mathrm{T/m} \\cdot\\) أمبير
explanation:
مجال سلك طويل عند بعد \\(r\\) يتناسب مع التيار \\(I\\) ويعتمد على نفاذية الوسط \\(\\mu _{0}\\). نستخدم علاقة المجال لتحديد وحدة النفاذية من وحدات الكميات الأخرى:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`

نضرب الطرفين في \\(2\\pi r\\)، ثم نقسم على \\(I\\) لعزل النفاذية:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>r</mi><mi>B</mi></mrow><mi>I</mi></mfrac></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo stretchy="false">[</mo><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy="false">]</mo><mo>=</mo><mfrac><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><mi mathvariant="normal">A</mi></mfrac></mrow></math>
\`\`\`

الويبر \\(\\mathrm{Wb}\\) وحدة التدفق، وعلاقة التدفق تعطي \\(\\mathrm{Wb}=\\mathrm{T}\\cdot \\mathrm{m}^{2}\\). والهنري \\(H\\) وحدة الحث، ويساوي \\(\\mathrm{Wb}/\\mathrm{A}\\) وفق علاقة الحث الذاتي. لذلك نحول وحدة النفاذية كما يأتي:

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><mi mathvariant="normal">A</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant="normal">W</mi><mi mathvariant="normal">b</mi></mrow><mrow><mi mathvariant="normal">A</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></mfrac></mrow></math>
\`\`\`

\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi></mrow><mi mathvariant="normal">A</mi></mfrac><mo>=</mo><mfrac><mi mathvariant="normal">H</mi><mi mathvariant="normal">m</mi></mfrac></mrow></math>
\`\`\`

**شاهد القاعدة أو السياق من الكتاب:**

> وفي حالة الفراغ تسمى ثابت النفاذية المغناطيسية للفراغ. \\(\\mu _{0} = 4\\pi  \\times  10^{-7} \\mathrm{T\\,m/A}\\)

**المصدر:** صفحة \\(45\\) من الكتاب.



العلاقتان موثقتان في الكتاب الكامل: [التدفق، ص \\(125\\) المطبوعة، \\(\\mathrm{PDF} 129\\)](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=129)، و[الحث الذاتي، ص \\(129\\) المطبوعة، \\(\\mathrm{PDF} 133\\)](https://moe.edu.ps/storage/app/class12/Physics12%202025%20Tawjihi.pdf#page=133).

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p068-q415
title: السؤال 415 — ص 67 — السؤال الأصلي 11
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 67، السؤال 11
question: ملف حلزوني يمر به تيار كهربائي مستمر فيحدث مجالًا مغناطيسيًا شدته عند نقطة وسط هذا الملف على محوره تساوي \\(B\\) تسلا، إذا ضغط الملف بحيث أصبح طوله نصف ما كان عليه مع بقاء عدد لفاته ثابتًا، فإن المجال بالتسلا عند هذه النقطة تساوي:
- [ ] option-1 | صفر
- [ ] option-2 | \\(0.5B\\)
- [ ] option-3 | \\(B\\)
- [x] option-4 | \\(2B\\)
explanation:
في نموذج الملف الحلزوني الطويل، يتناسب مجال وسطه مع كثافة اللفات \\(N/L\\) ومع التيار \\(I\\). نرمز لعدد اللفات بـ \\(N\\) ولطول الملف بـ \\(L\\)؛ ونقارن عند بقاء التيار نفسه:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`



التيار وعدد اللفات ثابتان، لذلك يتناسب المجال عكسيًا مع طول الملف.

عندما ينخفض الطول إلى النصف تتضاعف كثافة اللفات والمجال.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mi>L</mi><mi mathvariant="normal">/</mi><mn>2</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p068-q416
title: السؤال 416 — ص 67 — السؤال الأصلي 12
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 67، السؤال 12
question: لزيادة شدة المجال المغناطيسي في مركز ملف دائري فإننا نقوم بـ:
- [ ] option-1 | زيادة نصف قطر الملف
- [x] option-2 | إنقاص نصف قطر الملف
- [ ] option-3 | إنقاص شدة التيار المار فيه
- [ ] option-4 | إنقاص عدد لفاته
explanation:
عند مركز ملف دائري تتضافر مجالات اللفات المتشابهة، لذا نضرب مجال اللفة الواحدة في عدد اللفات \\(N\\). نستخدم نصف القطر \\(r\\) بالمتر، لا القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



مجال المركز يتناسب عكسيًا مع نصف القطر عند ثبات التيار وعدد اللفات.

إنقاص نصف القطر يزيد المجال؛ أما إنقاص التيار أو اللفات فيقلله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>↓</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>↑</mo></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p069-q417
title: السؤال 417 — ص 68 — السؤال الأصلي 13
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 68، السؤال 13
question: الشكل المجاور يبين سلكًا مستقيمًا لا نهائي الطول يسري فيه تيار كهربائي في الاتجاه المبين، في أي نقطة من النقاط الموجودة حول السلك تكون شدة المجال المغناطيسي أكبر ما يمكن وباتجاه المحور الزيني السالب \\(-Z\\)؟
- [ ] option-1 | \\(a\\)
- [x] option-2 | \\(b\\)
- [ ] option-3 | \\(c\\)
- [ ] option-4 | \\(d\\)
explanation:
المطلوب نقطة تحقق شرطين: المجال باتجاه \\(-Z\\)، ومقداره أكبر ما يمكن. مجال السلك الطويل يتناسب عكسياً مع البعد العمودي \\(r\\) عنه:

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/c8dafeeae55ef8993ed6.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يعطي اتجاه المجال حول السلك.

التيار إلى أعلى، فيكون المجال إلى داخل الصفحة عند النقاط الواقعة يمين السلك.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">r</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">g</mi><mi mathvariant="normal">h</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>∥</mo><mo>−</mo><mi>Z</mi></mrow></math>
\`\`\`



النقطتان \\(a\\) و\\(b\\) تقعان يمين السلك، فتوافقان اتجاه \\(-Z\\). النقطة \\(c\\) إلى يساره ويكون مجالها بعكس الاتجاه المطلوب. نقارن بعدي \\(a\\) و\\(b\\): بعد \\(b\\) هو \\(r\\) وبعد \\(a\\) هو \\(2r\\)، لذا \\(b\\) هي الأقرب ويكون مجالها أكبر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>b</mi></msub><mo>=</mo><mn>2</mn><msub><mi>B</mi><mi>a</mi></msub></mrow></math>
\`\`\`



إذن النقطة المطلوبة هي \\(b\\)، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلك رأسي وتيار لأعلى والنقاط a وb وc وd مع الأبعاد r و2r.](assets/lessons/curriculum-evidence/c8dafeeae55ef8993ed6.webp)
:::

:::mcq
id: physics-tawjihi-2025-p069-q418
title: السؤال 418 — ص 68 — السؤال الأصلي 14
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 68، السؤال 14
question: ملف دائري نصف قطره \\(r\\) وعدد لفاته \\(N\\) يتولد عند مركزه مجال مغناطيسي شدته \\(1.2\\,\\mathrm{T}\\) عندما يمر به تيار شدته \\(I\\)، وعند مضاعفة نصف قطره مع بقاء عدد اللفات وشدة التيار ثابتة تكون شدة المجال المغناطيسي المتولد بوحدة تسلا هي:
- [x] option-1 | \\(0.6\\)
- [ ] option-2 | \\(2.4\\)
- [ ] option-3 | \\(1.2\\)
- [ ] option-4 | \\(3.6\\)
explanation:
مجال مركز ملف دائري يتناسب مع عدد لفاته \\(N\\) والتيار \\(I\\)، وعكسياً مع نصف قطره \\(r\\). هنا المطلوب أثر مضاعفة نصف القطر فقط مع ثبات \\(N\\) و\\(I\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



عدد اللفات والتيار ثابتان، فينخفض مجال الملف للنصف عند مضاعفة نصف قطره.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>r</mi><mn>1</mn></msub><msub><mi>r</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`



نعوض بالمجال الأصلي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1.2</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mn>0.6</mn><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p069-q419
title: السؤال 419 — ص 68 — السؤال الأصلي 15
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 68، السؤال 15
question: ملف دائري نصف قطره \\(10\\,\\mathrm{cm}\\) وعدد لفاته \\(50\\) لفة، مر به تيار شدته \\(2\\) أمبير، تكون شدة المجال في مركزه بوحدة تسلا؟
- [ ] option-1 | \\(40\\pi\\times10^{-5}\\)
- [ ] option-2 | \\(30\\pi\\times10^{-5}\\)
- [x] option-3 | \\(20\\pi\\times10^{-5}\\)
- [ ] option-4 | \\(10\\pi\\times10^{-5}\\)
explanation:
المعطيات: ملف دائري نصف قطره \\(10\\,\\mathrm{cm}\\)، عدد لفاته \\(50\\)، وشدة التيار \\(2\\,\\mathrm{A}\\). المطلوب شدة المجال في المركز.

كل لفة تولد مجالًا في المركز، وتتضافر مجالات اللفات المتشابهة. لذلك نضرب مجال اللفة الواحدة في عدد اللفات \\(N\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



\\(r\\) نصف القطر بالمتر، و\\(\\mu _{0}\\) نفاذية الفراغ.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



نحوّل نصف القطر بقسمته على \\(100\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo>=</mo><mn>0.10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نعوّض القيم في العلاقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>50</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.10</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نضرب العددين \\(50\\) و\\(2\\) أولًا، ونحسب المقام.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>50</mn><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>=</mo><mn>100</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.10</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.20</mn></mrow></math>
\`\`\`



ضرب \\(10^{-7}\\) في \\(100\\) يزيد الأس بمقدار \\(2\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow><mn>0.20</mn></mfrac></mrow></math>
\`\`\`



نقسم \\(4\\) على \\(0.20\\).



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>20</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



النتيجة: \\(20\\pi \\times 10^{-5}\\,\\mathrm{T}\\)، وهو الخيار الثالث.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p069-q420
title: السؤال 420 — ص 68 — السؤال الأصلي 16
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 68، السؤال 16
question: في الشكل المجاور سلك مستقيم لا نهائي الطول، يحمل تيارًا كهربائيًا شدته \\(2\\,\\mathrm{A}\\) نحو محور \\(+Y\\)، وضعت حلقة دائرية في مستوى السلك، نصف قطرها \\(\\pi\\,\\mathrm{cm}\\) يقع مركزها على بعد \\(4\\,\\mathrm{cm}\\) من السلك، ما مقدار واتجاه شدة التيار المار بالحلقة حتى ينعدم المجال المغناطيسي في مركز الحلقة؟
- [ ] option-1 | \\(2\\,\\mathrm{A}\\) عكس عقارب الساعة
- [ ] option-2 | \\(2\\,\\mathrm{A}\\) مع عقارب الساعة
- [ ] option-3 | \\(0.5\\,\\mathrm{A}\\) مع عقارب الساعة
- [x] option-4 | \\(0.5\\,\\mathrm{A}\\) عكس عقارب الساعة
explanation:
لينعدم المجال في المركز، يجب أن يتساوى مجال السلك ومجال الحلقة مقداراً ويتعاكسا اتجاهاً. نحسب مجال السلك من بعد المركز العمودي \\(r\\):

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/93b60007924e75efa99b.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد مجال السلك المستقيم، نجعل إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يبين دوران المجال حوله. وللملف الدائري نلف الأصابع مع التيار، فيشير الإبهام إلى مجال المركز. نستخدم الاتجاه الموافق لكل جزء من الرسم قبل جمع المجالات.

مجال مركز الحلقة يحسب من نصف قطرها \\(R\\). لدينا حلقة واحدة، لذلك \\(N=1\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



نحوّل السنتيمتر إلى متر بقسمة القيمة على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>4</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



مجال السلك عند مركز الحلقة إلى داخل الصفحة؛ نحسب مقداره من البعد العمودي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>2</mn><mn>0.04</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



الحلقة يجب أن تولد المقدار نفسه إلى الخارج؛ لذلك يكون تيارها عكس عقارب الساعة. نساوي \\(B_{c}\\) بمجال السلك \\(B_{w}\\)، ثم نضرب في \\(2R\\) ونقسم على \\(\\mu _{0}\\)لعزل تيار الحلقة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi><msub><mi>B</mi><mi>w</mi></msub></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>c</mi></msub><mo>=</mo><mn>0.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلك رأسي يحمل 2 A إلى أعلى وحلقة نصف قطرها π cm ومركزها على بعد 4 cm.](assets/lessons/curriculum-evidence/93b60007924e75efa99b.webp)
:::

:::mcq
id: physics-tawjihi-2025-p069-q421
title: السؤال 421 — ص 68 — السؤال الأصلي 17
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 68، السؤال 17
question: ملف حلزوني متصل ببطارية ومقاومة على التوالي، أي الآتية تؤدي إلى مضاعفة في شدة المجال المغناطيسي داخل الملف الحلزوني؟
- [ ] option-1 | مضاعفة طول الملف الحلزوني
- [x] option-2 | مضاعفة القوة الدافعة الكهربائية للبطارية
- [ ] option-3 | إنقاص عدد لفات الملف الحلزوني إلى النصف
- [ ] option-4 | مضاعفة مقدار المقاومة المتصلة به
explanation:
المطلوب مضاعفة المجال مع بقاء شكل الملف نفسه. قانون أوم للدارة يربط التيار بالقوة الدافعة \\(\\varepsilon\\) مقسومة على مقاومتها الكلية \\(R\\)، بما فيها مقاومة الملف والبطارية إن وجدت. عند ثبات هذه المقاومات:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi mathvariant="script">E</mi><msub><mi>R</mi><mrow><mi mathvariant="normal">t</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">l</mi></mrow></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi mathvariant="script">E</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>2</mn><mi mathvariant="script">E</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>I</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>2</mn><mi>I</mi></mrow></math>
\`\`\`



في الملف الحلزوني الطويل، المجال يتناسب مع التيار وكثافة اللفات \\(N/L\\)؛ حيث \\(N\\) عدد اللفات و\\(L\\) طول الملف. بما أن \\(N\\) و\\(L\\) ثابتان هنا، يتضاعف المجال مع التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mo stretchy="false">(</mo><mn>2</mn><mi>I</mi><mo stretchy="false">)</mo></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msup><mi>B</mi><mo mathvariant="normal">′</mo></msup><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p070-q422
title: السؤال 422 — ص 69 — السؤال الأصلي 18
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 69، السؤال 18
question: ملفان دائريان متحدان في المركز عدد لفات كل منهما \\(N\\) لفة، وموضوعان في مستوى الصفحة، الأول نصف قطره \\(R\\)، وشدة التيار المار فيه \\(I\\) أمبير وباتجاه عقارب الساعة، ما مقدار شدة التيار الكهربائي واتجاهه في الملف الثاني والذي نصف قطره \\(2R\\) حتى ينعدم المجال المغناطيسي الكلي عند المركز المشترك بينهما؟
- [ ] option-1 | \\(2I\\) مع عقارب الساعة
- [x] option-2 | \\(2I\\) عكس عقارب الساعة
- [ ] option-3 | \\(\\frac12 I\\) مع عقارب الساعة
- [ ] option-4 | \\(\\frac12 I\\) عكس عقارب الساعة
explanation:
للملف نلف أصابع اليد اليمنى مع التيار فيشير الإبهام إلى مجال المركز.

ينبغي أن يتساوى مجالا الملفين مقداراً ويتعاكسا اتجاهاً لينعدم المجموع. مجال مركز الملف الدائري يتناسب مع عدد لفاته \\(N\\) والتيار، وعكسياً مع نصف قطره:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



مجال الملف الأول إلى داخل الصفحة، فيجب أن يولد الثاني مجالًا مساويًا إلى الخارج.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>B</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><msub><mi>I</mi><mn>2</mn></msub></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>2</mn><mi>R</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`



نقسم على \\(\\mu _{0}N\\)، ثم نضرب في \\(4R\\)، وهي عوامل غير صفرية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>
\`\`\`



ولكي يكون مجال الثاني إلى الخارج يجب أن يكون تياره عكس عقارب الساعة، إذن الخيار الثاني.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>I</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p070-q423
title: السؤال 423 — ص 69 — السؤال الأصلي 19
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 69، السؤال 19
question: الشكل المجاور يبين سلكين لا نهائيين يسري في كل منهما تيار كهربائي شدته \\(2\\,\\mathrm{A}\\) بعيدًا عن الناظر، والمسافة بينهما \\(4\\,\\mathrm{cm}\\) في الهواء، ما مقدار شدة المجال المغناطيسي في النقطة \\(a\\) التي تقع في منتصف المسافة بينهما؟
- [x] option-1 | صفر
- [ ] option-2 | \\(2\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(+Y\\)
- [ ] option-3 | \\(2\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(-Y\\)
- [ ] option-4 | \\(2\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(+X\\)
explanation:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/d89e18b07ae8e0d57450.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع تيار السلك، فيعطي التفاف الأصابع اتجاه المجال.

النقطة في المنتصف، فيساوي بعدها عن كل سلك نصف المسافة الكلية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>4</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo>=</mo><mn>2</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow><mo>=</mo><mn>0.02</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



التياران متساويان والبعدان متساويان، لذلك يتساوى مقدارا المجالين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>B</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>2</mn><mn>0.02</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



وفق قاعدة اليد اليمنى، مجال السلك الأيسر عند \\(a\\) إلى أسفل، ومجال الأيمن إلى أعلى. إذن المجالان متعاكسان ويلغي أحدهما الآخر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mover accent="true"><mn>0</mn><mo>⃗</mo></mover></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مقطعان لسلكين عموديين على الصفحة والمسافة بينهما 4 cm والنقطة a في المنتصف.](assets/lessons/curriculum-evidence/d89e18b07ae8e0d57450.webp)
:::

:::mcq
id: physics-tawjihi-2025-p070-q424
title: السؤال 424 — ص 69 — السؤال الأصلي 20
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 69، السؤال 20
question: يبين الشكل المجاور سلكين لا نهائيين يسري في كل منهما تيار كهربائي شدته \\(4\\,\\mathrm{A}\\) نحو الناظر والمسافة بينهما \\(2\\,\\mathrm{cm}\\) في الهواء. ما شدة المجال في النقطة \\(a\\) التي تبعد عن السلك الأول مسافة \\(2\\,\\mathrm{cm}\\) بوحدة تسلا؟
- [ ] option-1 | \\(2\\times10^{-5}\\) باتجاه \\(+y\\)
- [x] option-2 | \\(6\\times10^{-5}\\) باتجاه \\(+y\\)
- [ ] option-3 | \\(2\\times10^{-5}\\) باتجاه \\(-y\\)
- [ ] option-4 | \\(6\\times10^{-5}\\) باتجاه \\(-y\\)
explanation:
لتحويل السنتيمتر إلى المتر نقسم على \\(100\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a8721b15182848e2c42e.webp)

هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



نوجه إبهام اليد اليمنى مع تيار السلك، فيعطي التفاف الأصابع اتجاه المجال.

النقطة خارج السلكين إلى اليمين. تبعد \\(2\\,\\mathrm{cm}\\) عن السلك الأقرب، وعن الآخر \\(2+2=4\\,\\mathrm{cm}\\). نقسم على \\(100\\) للتحويل إلى المتر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>0.02</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



التياران نحو الناظر يعطيان مجالين إلى أعلى عند النقطة، فنجمع المقدارين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>4</mn><mn>0.02</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>0.04</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>200</mn><mo>+</mo><mn>100</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>300</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المحصلة باتجاه \\(+Y\\)، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مقطعان لسلكين يحمل كل منهما 4 A وبينهما 2 cm والنقطة a إلى يمينهما.](assets/lessons/curriculum-evidence/a8721b15182848e2c42e.webp)
:::



:::mcq
id: physics-tawjihi-2025-p070-q426
title: السؤال 426 — ص 69 — السؤال الأصلي 22
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 69، السؤال 22
question: ملف حلزوني يمر فيه تيار كهربائي، تم تقسيمه إلى جزئين بنسبة طولية \\(3:2\\)، ما شدة المجال المغناطيسي \\(B_1:B_2\\) على محوريهما؟ افترض أن اللف منتظم وأن الجزأين يظلان ملفين طويلين يمر فيهما التيار نفسه، وقارن المجالين بعيدًا عن الأطراف.
- [x] option-1 | \\(1:1\\)
- [ ] option-2 | \\(2:3\\)
- [ ] option-3 | \\(3:2\\)
- [ ] option-4 | \\(5:1\\)
explanation:
نستخدم نموذج الملف الطويل المنتظم، ونقارن الجزأين عند مرور التيار نفسه. في هذا النموذج \\(B=\\mu _{0}nI\\)؛ حيث \\(n\\) عدد اللفات في وحدة الطول.

عند قطع الملف بنسبة طولية معينة ينقسم عدد اللفات بالنسبة نفسها، لذلك تبقى كثافة اللفات ثابتة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>N</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>L</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>N</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>n</mi></mrow></math>
\`\`\`



مع مرور التيار نفسه في الجزأين تكون شدة المجال على محوريهما متساوية بعيدًا عن الأطراف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>n</mi><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>B</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>:</mo><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



النسبة \\(1\\):\\(1\\) تخص التيار نفسه في الجزأين؛ إذا اختلف التياران بعد توصيلهما في دارتين مختلفتين تصبح نسبة المجالين مساوية لنسبة التيارين.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p071-q427
title: السؤال 427 — ص 70 — السؤال الأصلي 23
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 70، السؤال 23
question: أي الآتية يمثل اتجاه المجال المغناطيسي الناتج عن مرور تيار كهربائي شدته \\(I\\) في موصل طول الجزء منه \\(\\Delta L\\) عند نقطة تبعد عنه مسافة \\(r\\)؟
- [ ] option-1 | يكون اتجاه \\(\\vec B\\) عموديًا على اتجاه \\(\\vec r\\) وموازيًا لاتجاه \\(\\overrightarrow{\\Delta L}\\).
- [ ] option-2 | يكون اتجاه \\(\\vec B\\) عموديًا على اتجاه \\(\\overrightarrow{\\Delta L}\\) وموازيًا لاتجاه \\(\\vec r\\).
- [ ] option-3 | يكون اتجاه \\(\\vec B\\) موازيًا على اتجاه \\(\\vec r\\) وموازيًا لاتجاه \\(\\overrightarrow{\\Delta L}\\).
- [x] option-4 | يكون اتجاه \\(\\vec B\\) عموديًا على اتجاه \\(\\vec r\\) وعموديًا لاتجاه \\(\\overrightarrow{\\Delta L}\\).
explanation:
الضرب الاتجاهي لمتجهين يعطي متجهًا عموديًا عليهما. مجال عنصر السلك يتبع هذا الضرب بين اتجاه التيار واتجاه البعد إلى النقطة، ولذلك يكون عموديًا عليهما عندما يكون غير صفري.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>L</mi><mo>⃗</mo></mover><mo>×</mo><mover accent="true"><mi>r</mi><mo>^</mo></mover></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>
\`\`\`



ناتج الضرب الاتجاهي عمودي على المتجهين، فنختار العبارة الرابعة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>⊥</mo><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>L</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>⊥</mo><mover accent="true"><mi>r</mi><mo>⃗</mo></mover></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p071-q428
title: السؤال 428 — ص 70 — السؤال الأصلي 24
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 70، السؤال 24
question: ملف حلزوني هوائي طويل موصول بمصدر فرق جهد ثابت. أيّ التغييرات الآتية يزيد شدة المجال داخله؟ ادرس كل تغيير على حدة مع ثبات العوامل الهندسية الأخرى.

- [ ] option-1 | زيادة طول الملف
- [x] option-2 | نقصان مقاومة دائرته
- [ ] option-3 | نقصان عدد اللفات
- [ ] option-4 | نقصان شدة التيار
explanation:
مجال الملف الحلزوني الطويل يعتمد على عدد اللفات \\(N\\) وطوله \\(L\\) وشدة التيار \\(I\\). نفترض نموذج الملف الهوائي الطويل، حيث \\(\\mu _{0}\\) نفاذية الفراغ ويقاربها الهواء. عند ثبات \\(N\\)و\\(L\\) يزداد المجال بزيادة التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mi>N</mi><mi>L</mi></mfrac><mi>I</mi></mrow></math>
\`\`\`



الملف موصول بمصدر جهد ثابت بحسب السؤال، لذلك نقصان مقاومة الدارة يزيد التيار؛ لأن قانون أوم يربط التيار بجهد المصدر \\(V\\) مقسوماً على المقاومة الكلية \\(R\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mi>V</mi><mi>R</mi></mfrac></mrow></math>
\`\`\`



عند ثبات \\(V\\)، نقصان \\(R\\) يجعل \\(I\\) أكبر، فيزداد \\(B\\). **إذن الخيار الثاني صحيح: تقليل المقاومة يزيد التيار، فيزيد المجال.**

أما زيادة طول الملف فتقلل كثافة اللفات \\(N/L\\)، ونقصان عدد اللفات أو نقصان التيار يقلل المجال؛ لذلك لا يحقق أي من الخيارات الثلاثة الأخرى الزيادة المطلوبة.

hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p071-q429
title: السؤال 429 — ص 70 — السؤال الأصلي 25
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 70، السؤال 25
question: سلك فلزي طوله \\(L\\) متر على شكل حلقة فلزية بلفة واحدة، مر فيها تيار كهربائي شدته \\(1\\,\\mathrm{A}\\)، فكانت شدة المجال المغناطيسي في مركزها \\(B\\). إذا لف نفس السلك لتكوين ملف دائري عدد لفاته \\(N\\) لفة ومر فيه نفس شدة التيار الكهربائي، فأصبحت شدة المجال المغناطيسي في مركزه \\(4B\\)، فما عدد لفات الملف الدائري \\(N\\)؟
- [ ] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>\` لفة
- [x] option-2 | \\(2\\) لفة
- [ ] option-3 | \\(1\\) لفة
- [ ] option-4 | \\(4\\) لفة
explanation:
المعطيات: السلك نفسه والتيار نفسه، والمجال الجديد أربعة أمثال الأول. المطلوب عدد اللفات الجديد \\(N\\).

عند مركز ملف دائري، المجال يساوي نفاذية الفراغ مضروبة في عدد اللفات والتيار، ومقسومة على ضعفي نصف القطر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



زيادة عدد اللفات بالسلك نفسه تقلل نصف قطر كل لفة؛ لذلك لا نبقي نصف القطر ثابتًا.

نسمي نصف قطر اللفة الأصلية \\(r_{1}\\)، ونصف قطر الملف الجديد \\(r_{2}\\). طول السلك يساوي مجموع محيطات لفاته.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mn>2</mn><mi>π</mi><msub><mi>r</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>L</mi><mo>=</mo><mi>N</mi><mo stretchy="false">(</mo><mn>2</mn><mi>π</mi><msub><mi>r</mi><mn>2</mn></msub><mo stretchy="false">)</mo></mrow></math>
\`\`\`



نساوي الطولين ونقسم على \\(2\\pi\\) غير الصفرية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mi>N</mi><msub><mi>r</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>r</mi><mn>1</mn></msub><mi>N</mi></mfrac></mrow></math>
\`\`\`



نكتب مجال كل حالة، مع كون عدد اللفات الأصلي واحدًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><msub><mi>r</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>
\`\`\`



نقسم العلاقتين؛ فتختصر \\(\\mu _{0}\\) والتيار والعامل \\(2\\) لأنها مشتركة وغير صفرية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mn>2</mn></msub><msub><mi>B</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>N</mi><mfrac><msub><mi>r</mi><mn>1</mn></msub><msub><mi>r</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`



نعوّض \\(r_{2}=r_{1}/N\\) ونستخدم نسبة المجال المعطاة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>4</mn><mo>=</mo><mi>N</mi><mfrac><msub><mi>r</mi><mn>1</mn></msub><mrow><msub><mi>r</mi><mn>1</mn></msub><mi mathvariant="normal">/</mi><mi>N</mi></mrow></mfrac><mo>=</mo><msup><mi>N</mi><mn>2</mn></msup></mrow></math>
\`\`\`



عدد اللفات موجب؛ نأخذ الجذر الموجب.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mo>=</mo><msqrt><mn>4</mn></msqrt><mo>=</mo><mn>2</mn></mrow></math>
\`\`\`



الإجابة: لفتان، الخيار الثاني.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p071-q430
title: السؤال 430 — ص 70 — السؤال الأصلي 26
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 70، السؤال 26
question: يمثل الشكل المجاور سلكًا يسري فيه تيار كهربائي شدته \\(\\frac9\\pi\\,\\mathrm{A}\\) في الاتجاه المبين، ما مقدار واتجاه شدة المجال المغناطيسي عند النقطة \\(C\\) المبينة في الشكل؟
- [ ] option-1 | \\(1.0\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(-Z\\)
- [ ] option-2 | \\(1.0\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(+Z\\)
- [ ] option-3 | \\(0.5\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(-Z\\)
- [x] option-4 | \\(0.5\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(+Z\\)
explanation:
المطلوب مجال السلك عند مركز قوسه \\(C\\). في مجال القوس، تساهم الأجزاء الزاوية المتساوية بالتساوي؛ لذا نأخذ نسبة زاويته من مجال دائرة كاملة. نحدد اتجاهه بلف أصابع اليد اليمنى مع تيار القوس، فيشير الإبهام إلى مجال المركز.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/8796e442dea0347a2cf9.webp)

في الجزء الشعاعي يكون عنصر التيار موازيًا لمتجه البعد إلى المركز، فينعدم جيب الزاوية في قانون بيو سفار ومساهمته صفر. لذا الأجزاء المستقيمة لا تسهم؛ القوس يساوي واحدًا من اثني عشر من دائرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>θ</mi><msup><mn>360</mn><mo>∘</mo></msup></mfrac><mo>=</mo><mfrac><msup><mn>30</mn><mo>∘</mo></msup><msup><mn>360</mn><mo>∘</mo></msup></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mi>θ</mi><msup><mn>360</mn><mo>∘</mo></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>3</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.03</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نأخذ هذا الجزء من مجال الحلقة الكاملة، والتيار عكس عقارب الساعة فيعطي مجالًا نحو الناظر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>9</mn><mi mathvariant="normal">/</mi><mi>π</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.03</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>36</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow><mrow><mn>12</mn><mo>×</mo><mn>0.06</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mn>3.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><mn>0.72</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال باتجاه \\(+Z\\)، الخيار الرابع.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلك ذو قوس زاويته 30° ونصف قطره 3 cm حول النقطة C واتجاه التيار 9/π A.](assets/lessons/curriculum-evidence/8796e442dea0347a2cf9.webp)
:::

:::mcq
id: physics-tawjihi-2025-p071-q431
title: السؤال 431 — ص 70 — السؤال الأصلي 27
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 70، السؤال 27
question: ملف حلزوني يمر فيه تيار كهربائي، تم تقسيمه إلى جزأين بنسبة طولية \\(1:2\\)، ما شدة المجال \\(B_2:B_1\\) على محوريهما؟ افترض أن اللف منتظم وأن الجزأين يظلان ملفين طويلين يمر فيهما التيار نفسه، وقارن المجالين بعيدًا عن الأطراف.
- [ ] option-1 | \\(1:2\\)
- [ ] option-2 | \\(2:1\\)
- [ ] option-3 | \\(4:1\\)
- [x] option-4 | \\(1:1\\)
explanation:
نستخدم نموذج الملف الطويل المنتظم، ونقارن الجزأين عند مرور التيار نفسه. في هذا النموذج \\(B=\\mu _{0}nI\\)؛ حيث \\(n\\) عدد اللفات في وحدة الطول.

عند قطع الملف بنسبة طولية معينة ينقسم عدد اللفات بالنسبة نفسها، لذلك تبقى كثافة اللفات ثابتة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>N</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>L</mi><mn>2</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>N</mi><mn>1</mn></msub><msub><mi>L</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>n</mi></mrow></math>
\`\`\`



مع مرور التيار نفسه في الجزأين تكون شدة المجال على محوريهما متساوية بعيدًا عن الأطراف.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>n</mi><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>B</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>:</mo><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>:</mo><mn>1</mn></mrow></math>
\`\`\`



النسبة \\(1\\):\\(1\\) تخص التيار نفسه في الجزأين؛ إذا اختلف التياران بعد توصيلهما في دارتين مختلفتين تصبح نسبة المجالين مساوية لنسبة التيارين.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p071-q432
title: السؤال 432 — ص 70 — السؤال الأصلي 28
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 70، السؤال 28
question: الشكل المجاور يبين سلكين مستقيمين لا نهائيي الطول ومتوازيين، ويحملان تيارين كهربائيين متعاكسين، ما مقدار شدة التيار الكهربائي \\(I_2\\) بوحدة الأمبير والذي يجعل محصلة شدة المجال المغناطيسي في النقطة \\(a\\) تساوي صفرًا؟
- [ ] option-1 | \\(10\\)
- [ ] option-2 | \\(15\\)
- [ ] option-3 | \\(50\\)
- [x] option-4 | \\(25\\)
explanation:
مجال السلك المستقيم الطويل يزداد مع تياره \\(I\\) وينقص مع البعد العمودي \\(r\\) عنه. في الهواء:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mi>I</mi><mi>r</mi></mfrac></mrow></math>
\`\`\`



نحدد اتجاهه بقاعدة اليد اليمنى: الإبهام مع التيار، والتفاف الأصابع يعطي اتجاه المجال.

النقطة خارج السلكين؛ بعدها عن السلك ذي التيار المعلوم عشرة سنتيمترات وعن الآخر خمسة وعشرون.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b887a444d197b54857fe.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>10</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mo stretchy="false">(</mo><mn>10</mn><mo>+</mo><mn>15</mn><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.25</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



التياران متعاكسان فيتعاكس المجالان هنا؛ نساوي المقدارين لإيجاد التيار المجهول.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>10</mn><mn>0.10</mn></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>2</mn></msub><mn>0.25</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>100</mn><mo stretchy="false">(</mo><mn>0.25</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>25</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلكان رأسيان بينهما 15 cm والتيار I₁=10 A والنقطة a تبعد 10 cm إلى اليمين.](assets/lessons/curriculum-evidence/b887a444d197b54857fe.webp)
:::

:::mcq
id: physics-tawjihi-2025-p072-q433
title: السؤال 433 — ص 71 — السؤال الأصلي 29
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 71، السؤال 29
question: سلكان مستقيمان طويلان جدًا ومتوازيان وضعا بشكل متعامد على مستوى الصفحة وعلى بعد \\(10\\,\\mathrm{cm}\\) من بعضهما، فإذا مر بهما تياران متساويان مقدار كل منهما \\(4\\,\\mathrm{A}\\)، ما مقدار واتجاه شدة المجال المغناطيسي الناشئ عنهما عند منتصف المسافة بينهما؟
- [ ] option-1 | صفر
- [x] option-2 | \\(3.2\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(-X\\)
- [ ] option-3 | \\(3.2\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(-Y\\)
- [ ] option-4 | \\(1.6\\times10^{-5}\\,\\mathrm{T}\\) باتجاه \\(+X\\)
explanation:
مجال السلك المستقيم الطويل يزداد مع تياره \\(I\\) وينقص مع البعد العمودي \\(r\\) عنه. في الهواء:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mi>I</mi><mi>r</mi></mfrac></mrow></math>
\`\`\`



نحدد اتجاهه بقاعدة اليد اليمنى: الإبهام مع التيار، والتفاف الأصابع يعطي اتجاه المجال.

منتصف المسافة يبعد خمسة سنتيمترات عن كل سلك؛ نحولها إلى متر ثم نحسب مجال أحدهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mo stretchy="false">(</mo><mn>10</mn><mi mathvariant="normal">/</mi><mn>2</mn><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.05</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/b2a0b3c2039435a4211b.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>4</mn><mn>0.05</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



الرسم يبين تيارًا علويًا للداخل وسفليًا للخارج؛ كلا المجالين عند المنتصف إلى اليسار.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>2</mn><msub><mi>B</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>∥</mo><mo>−</mo><mi>X</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![مقطعان لسلكين بتيارين متعاكسين 4 A ونقطة بينهما تبعد 5 cm عن كل منهما.](assets/lessons/curriculum-evidence/b2a0b3c2039435a4211b.webp)
:::

:::mcq
id: physics-tawjihi-2025-p072-q434
title: السؤال 434 — ص 71 — السؤال الأصلي 30
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 71، السؤال 30
question: ملف حلزوني طوله \\(30\\,\\mathrm{cm}\\) ونصف قطره \\(3\\,\\mathrm{cm}\\) وينتج مجالًا مغناطيسيًا شدته \\(B\\)، فإذا ضغط الملف ليصبح ملفًا دائريًا فإن شدة المجال المغناطيسي عند المركز تصبح:
- [ ] option-1 | \\(9B\\)
- [ ] option-2 | \\(44B\\)
- [ ] option-3 | \\(10B\\)
- [x] option-4 | \\(5B\\)
explanation:
نقارن عند ثبات التيار \\(I\\) وعدد اللفات \\(N\\) ونصف القطر \\(r\\). قبل الضغط نستخدم مجال الملف الحلزوني الطويل، وهو متناسب مع كثافة اللفات \\(N/L\\)؛ وبعد الضغط نستخدم مجال مركز الملف الدائري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



نقسم العلاقتين فتلغى العوامل المشتركة، ويكفي استخدام الطول ونصف القطر بالوحدة نفسها.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mi>c</mi></msub><msub><mi>B</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mi>c</mi></msub><msub><mi>B</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><mn>30</mn><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>3</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mi>c</mi></msub><msub><mi>B</mi><mi>s</mi></msub></mfrac><mo>=</mo><mfrac><mn>30</mn><mn>6</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>B</mi><mi>c</mi></msub><msub><mi>B</mi><mi>s</mi></msub></mfrac><mo>=</mo><mn>5</mn></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mn>5</mn><mi>B</mi></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
:::

:::mcq
id: physics-tawjihi-2025-p072-q435
title: السؤال 435 — ص 71 — السؤال الأصلي 31
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 71، السؤال 31
question: أي الأشكال الآتية تكون شدة المجال المغناطيسي \\(\\Delta B\\) الناشئ عن العنصر من الموصل \\(\\Delta L\\) الذي يسري فيه تيار كهربائي كما هو مبين في الأشكال عند النقطة \\(a\\) هي الأعلى؟
- [ ] option-1 | الشكل \\(1\\)
- [ ] option-2 | الشكل \\(2\\)
- [ ] option-3 | الشكل \\(3\\)
- [x] option-4 | الشكل \\(4\\)
explanation:
قانون بيو سفار يعطي مساهمة جزء صغير من السلك في المجال. \\(\\theta\\) هي الزاوية بين اتجاه عنصر السلك ومتجه البعد من العنصر إلى النقطة؛ إذا كانا على استقامة واحدة فجيب الزاوية صفر، فتكون مساهمة هذا الجزء صفرًا.

![الشكل 1 من الخيارات الأصلية](assets/lessons/curriculum-evidence/bdf1071cf7d7714da903.webp)

![الشكل 2 من الخيارات الأصلية](assets/lessons/curriculum-evidence/a60b6f8110149aa6d47a.webp)

![الشكل 3 من الخيارات الأصلية](assets/lessons/curriculum-evidence/204b4b476321d62b4b2b.webp)

![الشكل 4 من الخيارات الأصلية](assets/lessons/curriculum-evidence/ca16c719f210e36cbcc1.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>L</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



شدة مجال العنصر تتناسب مع التيار وجيب الزاوية، وعكسيًا مع مربع البعد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant="normal">Δ</mi><mi>L</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mi>I</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>
\`\`\`



نقارن العوامل بعد حذف العامل المشترك الموجب \\(\\mu _{0}\\Delta L/(4\\pi )\\). في الأشكال الأول والثاني والرابع تكون الزاوية \\(90^{\\circ}\\)، فجيبها يساوي \\(1\\).

الشكل الأول:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mi>I</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow><mrow><mo stretchy="false">(</mo><mn>2</mn><mi>r</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>I</mi><mrow><mn>4</mn><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الشكل الثاني:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>2</mn><mi>I</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow><mrow><mo stretchy="false">(</mo><mn>2</mn><mi>r</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>I</mi><mrow><mn>2</mn><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الشكل الثالث شعاعي؛ الزاوية \\(180^{\\circ}\\) وجيبها صفر، لذلك لا يسهم رغم كبر التيار:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>20</mn><mi>I</mi><mi>sin</mi><mo>⁡</mo><msup><mn>180</mn><mo>∘</mo></msup></mrow><mrow><mo stretchy="false">(</mo><mn>5</mn><mi>r</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



الشكل الرابع:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mrow><mn>5</mn><mi>I</mi><mi>sin</mi><mo>⁡</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow><mrow><mo stretchy="false">(</mo><mn>3</mn><mi>r</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>I</mi></mrow><mrow><mn>9</mn><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><msub><mi>B</mi><mn>1</mn></msub><mo>:</mo><mi mathvariant="normal">Δ</mi><msub><mi>B</mi><mn>2</mn></msub><mo>:</mo><mi mathvariant="normal">Δ</mi><msub><mi>B</mi><mn>3</mn></msub><mo>:</mo><mi mathvariant="normal">Δ</mi><msub><mi>B</mi><mn>4</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>:</mo><mfrac><mn>2</mn><mn>4</mn></mfrac><mo>:</mo><mn>0</mn><mo>:</mo><mfrac><mn>5</mn><mn>9</mn></mfrac></mrow></math>
\`\`\`



عامل الشكل الرابع هو الأكبر، فتكون شدة مجاله هي الأعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><mn>5</mn><mn>9</mn></mfrac><mo>&gt;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&gt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>
\`\`\`


hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![الشكل 1: عنصر موصل وتيار I ونقطة a على بعد 2r.](assets/lessons/curriculum-evidence/bdf1071cf7d7714da903.webp)
![الشكل 2: عنصر موصل وتيار 2I ونقطة a على بعد 2r.](assets/lessons/curriculum-evidence/a60b6f8110149aa6d47a.webp)
![الشكل 3: عنصر موصل وتيار 20I ونقطة a على امتداده على بعد 5r.](assets/lessons/curriculum-evidence/204b4b476321d62b4b2b.webp)
![الشكل 4: عنصر موصل وتيار 5I ونقطة a على بعد 3r.](assets/lessons/curriculum-evidence/ca16c719f210e36cbcc1.webp)
:::

:::mcq
id: physics-tawjihi-2025-p072-q436
title: السؤال 436 — ص 71 — السؤال الأصلي 32
kicker: اختر الإجابة الصحيحة
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 71، السؤال 32
question: يبين الشكل سلكين طويلين جدًا متوازيين يحملان تيارين كهربائيين \\(I_1,I_2\\)، المسافة بينهما تساوي \\(D\\)، فإذا انعدمت شدة المجال المغناطيسي عند النقطة \\(p\\) التي تبعد مسافة \\(D/3\\) عن السلك الأول، فما مقدار واتجاه شدة التيار \\(I_2\\) في السلك الثاني؟
- [ ] option-1 | \\(3I_1\\) لأعلى
- [ ] option-2 | \\(2I_1\\) لأعلى
- [ ] option-3 | \\(3I_1\\) لأسفل
- [x] option-4 | \\(2I_1\\) لأسفل
explanation:
مجال السلك المستقيم الطويل يزداد مع تياره \\(I\\) وينقص مع البعد العمودي \\(r\\) عنه. في الهواء:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mi>I</mi><mi>r</mi></mfrac></mrow></math>
\`\`\`



نحدد اتجاهه بقاعدة اليد اليمنى: الإبهام مع التيار، والتفاف الأصابع يعطي اتجاه المجال.

النقطة بين السلكين وعلى ثلث المسافة من السلك الأول، فيكون بعدها عن الثاني ثلثي المسافة.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/73f6b5ec0ee0755ac5e3.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>D</mi><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>D</mi></mrow><mn>3</mn></mfrac></mrow></math>
\`\`\`



لكي ينعدم المجال نساوي المقدارين. نختصر الثابت \\(\\mu _{0}/(2\\pi )\\) المشترك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mfrac><msub><mi>I</mi><mn>1</mn></msub><mrow><mi>D</mi><mi mathvariant="normal">/</mi><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>2</mn></msub><mrow><mn>2</mn><mi>D</mi><mi mathvariant="normal">/</mi><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`



نضرب الطرفين في \\(2D/3\\)، مع كون \\(D\\) مسافة موجبة:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mfrac><mrow><mn>2</mn><mi>D</mi><mi mathvariant="normal">/</mi><mn>3</mn></mrow><mrow><mi>D</mi><mi mathvariant="normal">/</mi><mn>3</mn></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>
\`\`\`



بين السلكين لا يتعاكس المجالان إلا إذا كان التياران في الاتجاه نفسه؛ الأول لأسفل فيكون الثاني لأسفل أيضًا.
hint: راجع المعطيات والوحدات ثم اختر الإجابة وفق نص المصدر.
example:
![سلكان يحملان I₁ وI₂ والمسافة D والنقطة p تبعد D/3 عن سلك I₁.](assets/lessons/curriculum-evidence/73f6b5ec0ee0755ac5e3.webp)
:::



:::exam-question
id: physics-tawjihi-2025-p073-q438
title: السؤال 438 — ص 72 — السؤال الأصلي 2
question: السؤال الثاني: الأسئلة المقالية — أ- ما المقصود بـ
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 72، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب نص قانون أمبير والصيغة الرياضية له.
solution:
الإجابة: قانون أمبير: لأي مسار مغلق، يساوي مجموع حاصل الضرب القياسي لشدة المجال وطول عنصر المسار نفاذية الفراغ مضروبة في المجموع الجبري للتيارات التي تخترق المسار. \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>∑</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>⋅</mo><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>L</mi><mo>⃗</mo></mover><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mo>∑</mo><mi>I</mi></mrow></math>\`.

الكتاب: قانون أمبير، الصفحة المطبوعة \\(49\\)، صفحة \\(\\mathrm{PDF} 51\\).

> لأي مسار مغلق يكون مجموع حاصل الضرب النقطي لشدة المجال المغناطيسي مع طول ذلك الجزء في المسار المغلق يساوي المجموع الجبري للتيارات التي تخترق المسار المغلق، مضروباً في ثابت النفاذية المغناطيسية للفراغ




:::



:::exam-question
id: physics-tawjihi-2025-p073-q445
title: السؤال 445 — ص 72 — السؤال الأصلي 5
question: السؤال الثاني: الأسئلة المقالية — ب- علل لما يأتي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 72، السؤال 5
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: ينعدم المجال المغناطيسي عند نقطة تقع على استقامة سلك مستقيم يحمل تيارًا، خارج الجزء الحامل للتيار وعلى امتداده.

solution:
نستخدم قانون بيو سفار، لأن النقطة على امتداد السلك وليست عند بعد عمودي عنه؛ مساهمة كل عنصر تتناسب مع جيب الزاوية بين عنصر السلك ومتجه البعد إلى النقطة.

النقطة المعطاة على استقامة السلك وخارج جزئه الحامل للتيار. يكون متجه البعد من كل عنصر إلى النقطة موازياً لعنصر التيار أو معاكساً له، فينعدم جيب الزاوية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>∈</mo><mo stretchy="false">{</mo><msup><mn>0</mn><mo>∘</mo></msup><mo separator="true">,</mo><msup><mn>180</mn><mo>∘</mo></msup><mo stretchy="false">}</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>sin</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



إذن مساهمة كل عنصر تساوي صفرًا، ومجموعها يساوي صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∑</mo><mfrac><mrow><mi mathvariant="normal">Δ</mi><mi>L</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`

:::

:::exam-question
id: physics-tawjihi-2025-p073-q446
title: السؤال 446 — ص 72 — السؤال الأصلي 6
question: السؤال الثاني: الأسئلة المقالية — ب- علل لما يأتي
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 72، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل: يستخدم قانون أمبير لإيجاد شدة المجال المغناطيسي لملف حلزوني يسري فيه تيار كهربائي.
solution:
قانون أمبير يربط مجموع \\(B\\cdot \\Delta L\\) حول مسار مغلق بالتيار الذي يحصره. الملف الطويل يوفر مسارًا تكون فيه مساهمات الأضلاع معروفة؛ لذلك يصلح لاستخراج المجال.

نختار مسارًا مستطيلًا له ضلع داخل الملف موازٍ للمجال وآخر خارجه حيث المجال مهمل، والضلعان الآخران عموديان عليه.

على الضلعين العموديين يكون الضرب القياسي صفراً لأن جيب تمام \\(90^{\\circ}\\) يساوي صفراً. وخارج الملف نهمل المجال؛ فلا يبقى إلا الضلع الداخلي. نرمز لطوله بـ \\(L\\) ولعدد اللفات التي يحصرها بـ \\(N\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><mover accent="true"><mi>B</mi><mo>⃗</mo></mover><mo>⋅</mo><mi mathvariant="normal">Δ</mi><mover accent="true"><mi>L</mi><mo>⃗</mo></mover><mo>=</mo><mi>B</mi><mi>L</mi></mrow></math>
\`\`\`



التماثل يجعل المجال ثابت المقدار على الضلع الداخلي وموازياً له، فتكون مساهمته \\(BL\\). التيار المحصور يساوي \\(NI\\) لأن المسار يحصر \\(N\\) لفة، يمر في كل منها التيار \\(I\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mi>L</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mi>L</mi></mfrac></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p073-q447
title: السؤال 447 — ص 72 — السؤال الأصلي 1
question: السؤال الثاني: الأسئلة المقالية — ج- قارن
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 72، السؤال 1
answer-label: الإجابة والشرح من المجموعة المصححة
body:
قارن: شكل خطوط المجال المغناطيسي الناشئ من سلك طويل يحمل تيارًا كهربائيًا، وشكل خطوط المجال المغناطيسي عند مركز ملف دائري يحمل تيارًا كهربائيًا.
solution:
الإجابة: حول السلك المستقيم: دوائر متحدة المركز، مراكزها على محور السلك ومستوياتها عمودية عليه. قرب مركز الملف الدائري: خطوط مستقيمة تقريباً وعمودية على مستوى الملف.

الكتاب: المجال المغناطيسي لسلك طويل مستقيم، الصفحة المطبوعة \\(45\\)، صفحة \\(\\mathrm{PDF} 47\\).

> المجال حول السلك على شكل دوائر متحدة المركز ومركزها محور السلك ومستواها عمودي على السلك




وفي نشاط تخطيط الملف الدائري، الصفحة المطبوعة \\(47\\)، صفحة \\(\\mathrm{PDF} 49\\):

> لعلك لاحظت أن انحناء خطوط المجال المغناطيسي يقل بالاقتراب من مركز الملف، حيث تكون مستقيمة بالقرب من مركز الملف.

فتح صفحة الملف الدائري

![وصف خطوط مركز الملف وشكلها الأصلي](assets/lessons/curriculum-evidence/58dad08b05a4f9a4f52b.webp)

:::

:::exam-question
id: physics-tawjihi-2025-p074-q449
title: السؤال 449 — ص 73 — السؤال الأصلي 2
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 73، السؤال 2
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اعتمادًا على الشكل المجاور، أثبت أن شدة المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` تعطى بالعلاقة:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mn>12</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>−</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo fence="true">)</mo></mrow><mi mathvariant="normal">.</mi></mrow></math>
\`\`\`



![قوسان دائريان بنصفي قطر R₁ وR₂ وزاوية 60° واتجاهات التيار حول النقطة a.](assets/lessons/curriculum-evidence/35acd15c54913590d6e1.webp)
solution:
مجال قوس عند مركزه يساوي كسر زاويته من دورة كاملة مضروبًا في مجال حلقة كاملة. هنا الوسط نفسه في القوسين ونرمز لنفاذيته \\(\\mu\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/35acd15c54913590d6e1.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">c</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">e</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`



قانون بيو سفار يعطي مساهمة جزء صغير من السلك في المجال. \\(\\theta\\) هي الزاوية بين اتجاه عنصر السلك ومتجه البعد من العنصر إلى النقطة؛ إذا كانا على استقامة واحدة فجيب الزاوية صفر، فتكون مساهمة هذا الجزء صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>L</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الأجزاء الشعاعية لا تسهم عند المركز لأن اتجاه عنصر التيار موازٍ لمتجه البعد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>∝</mo><mi>sin</mi><mo>⁡</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



كل قوس زاويته ستون درجة، أي سدس دائرة؛ نحسب مجاله بهذا الجزء من مجال الحلقة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mrow><mn>2</mn><msub><mi>R</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mrow><mn>12</mn><msub><mi>R</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mrow><mn>12</mn><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>
\`\`\`



نلف أصابع اليد اليمنى مع تيار القوس، فيشير الإبهام إلى مجاله عند المركز. القوس الأصغر مع الساعة فيعطي مجالاً للداخل، والأكبر عكس الساعة فيعطي مجالاً للخارج؛ فنطرح المقدارين لأنهما متعاكسان. ولأن \\(R_{1}<R_{2}\\) يكون مجال القوس الداخلي أكبر فتتجه المحصلة للداخل.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>B</mi><mn>1</mn></msub><mo>−</mo><msub><mi>B</mi><mn>2</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mrow><mn>12</mn><msub><mi>R</mi><mn>1</mn></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mrow><mn>12</mn><msub><mi>R</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>
\`\`\`



نخرج العامل المشترك \\(\\mu I/12\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><mi>I</mi></mrow><mn>12</mn></mfrac><mrow><mo fence="true">(</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>1</mn></msub></mfrac><mo>−</mo><mfrac><mn>1</mn><msub><mi>R</mi><mn>2</mn></msub></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p075-q453
title: السؤال 453 — ص 74 — السؤال الأصلي 6
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 74، السؤال 6
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلكان مستقيمان لا نهائيان، يحمل الأول تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` باتجاه السينات الموجب، في حين يحمل الثاني تيارًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` باتجاه الصادات السالب كما في الشكل المجاور. جد مقدار واتجاه شدة المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\`.

![سلكان متعامدان يحملان 2 A للأسفل و4 A لليمين والنقطة a على البعدين 8 cm و4 cm.](assets/lessons/curriculum-evidence/d300ac5d8629318424e0.webp)
solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/d300ac5d8629318424e0.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد مجال السلك المستقيم، نجعل إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يبين دوران المجال حوله. نطبقها على كل سلك عند النقطة \\(a\\) قبل جمع المجالين.

بعد النقطة عن السلك الأفقي أربعة سنتيمترات وعن الرأسي ثمانية؛ نقسم على \\(100\\) للتحويل إلى متر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>h</mi></msub><mo>=</mo><mn>4</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>v</mi></msub><mo>=</mo><mn>8</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.08</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نحسب مساهمة كل سلك:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>h</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>4</mn><mn>0.04</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>h</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>v</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>2</mn><mn>0.08</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>v</mi></msub><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



التيار الأفقي لليمين والنقطة فوقه، والرأسي لأسفل والنقطة يمينه؛ كلا المجالين نحو الناظر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><msub><mi>B</mi><mi>h</mi></msub><mo>+</mo><msub><mi>B</mi><mi>v</mi></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>+</mo><mn>0.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi mathvariant="normal">n</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">t</mi></mrow></msub><mo>=</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المحصلة نحو الناظر، أي باتجاه \\(+Z\\).
:::

:::exam-question
id: physics-tawjihi-2025-p075-q454
title: السؤال 454 — ص 74 — السؤال الأصلي 7
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 74، السؤال 7
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور سلكًا يسري فيه تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`. جد شدة المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>C</mi></mrow></math>\`.

![سلك مؤلف من قوسين متصلين حول C بنصفي قطر 3 cm و5 cm واتجاه تيار 2 A.](assets/lessons/curriculum-evidence/a0e0da48e3a9d6a0dc8c.webp)
solution:
المطلوب مجال القوسين عند المركز \\(C\\). نلف أصابع اليد اليمنى مع تيار كل قوس، فيشير الإبهام إلى اتجاه مساهمته في مجال المركز.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a0e0da48e3a9d6a0dc8c.webp)

قانون بيو سفار يعطي مساهمة جزء صغير من السلك في المجال. \\(\\theta\\) هي الزاوية بين اتجاه عنصر السلك ومتجه البعد من العنصر إلى النقطة؛ إذا كانا على استقامة واحدة فجيب الزاوية صفر، فتكون مساهمة هذا الجزء صفرًا.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>L</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



الأجزاء المستقيمة تقع على أنصاف أقطار تمر بالمركز، لذلك لا تسهم في مجاله.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>∝</mo><mi>sin</mi><mo>⁡</mo><msup><mn>0</mn><mo>∘</mo></msup><mo>=</mo><mn>0</mn></mrow></math>
\`\`\`



مجال القوس عند مركزه يساوي كسر زاويته من دورة كاملة مضروبًا في مجال الحلقة الكاملة \\(\\mu _{0}I/(2r)\\). نحول نصفي القطر: \\(5\\,\\mathrm{cm}=0\\)٫\\(05\\,\\mathrm{m}\\)، و\\(3\\,\\mathrm{cm}=0\\)٫\\(03\\,\\mathrm{m}\\).

القوس الكبير ثلاثة أرباع دائرة، والصغير ربع دائرة؛ نحسب مجال كل منهما بالمتر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.05</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mfrac><mrow><mo stretchy="false">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mn>0.03</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>10</mn><mi>π</mi></mrow><mn>3</mn></mfrac><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



التيار في القوسين عكس عقارب الساعة، فيتجه المجالان نحو الناظر ونجمعهما.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>≈</mo><mn>1.885</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>2</mn></msub><mo>≈</mo><mn>1.047</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msub><mi>B</mi><mn>1</mn></msub><mo>+</mo><msub><mi>B</mi><mn>2</mn></msub><mo>≈</mo><mn>2.932</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>≈</mo><mn>2.93</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



اتجاه المحصلة نحو الناظر.
:::

:::exam-question
id: physics-tawjihi-2025-p075-q456
title: السؤال 456 — ص 74 — السؤال الأصلي 9
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 74، السؤال 9؛ تصنيف أسئلة الفيزياء توجيهي 2025، ص 74، السؤال 10
answer-label: الإجابة والشرح من المجموعة المصححة
body:
مستخدمًا قانون بيو سفار اشتق العلاقة التي تبين قيمة المجال المغناطيسي في مركز ملف دائري عدد لفاته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>N</mi></mrow></math>\` لفة ونصف قطره \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\` عندما يسري فيه تيار شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>I</mi></mrow></math>\`.
solution:
نبدأ بقانون بيو سفار: مساهمة كل جزء صغير \\(\\Delta L\\) تتناسب مع \\(I\\Delta L \\sin \\theta\\)، وعكسيًا مع مربع بعده عن المركز. \\(\\theta\\) الزاوية بين اتجاه الجزء ومتجه البعد.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi mathvariant="normal">Δ</mi><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi><mi mathvariant="normal">Δ</mi><mi>L</mi><mi>sin</mi><mo>⁡</mo><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



في مركز الحلقة يكون كل عنصر من السلك عموديًا على نصف القطر، والمسافة إلى كل عنصر ثابتة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mn>90</mn><mo>∘</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mo>∑</mo><mi mathvariant="normal">Δ</mi><mi>L</mi></mrow></math>
\`\`\`



بقاعدة اليد اليمنى تكون مساهمة كل عنصر عند المركز عمودية على مستوى الحلقة وفي الجهة نفسها؛ لذلك نجمع مقاديرها. مجموع أطوال العناصر يساوي محيط الدائرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mo>∑</mo><mi mathvariant="normal">Δ</mi><mi>L</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>R</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi><mo stretchy="false">(</mo><mn>2</mn><mi>π</mi><mi>R</mi><mo stretchy="false">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>
\`\`\`



نختصر \\(\\pi\\)، ونختصر \\(R\\) من \\(R^{2}\\)، ونقسم \\(2\\) على \\(4\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



كل لفة تضيف المجال نفسه عند المركز، فنضرب في عدد اللفات.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mi>N</mi><msub><mi>B</mi><mn>1</mn></msub></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p075-q458
title: السؤال 458 — ص 74 — السؤال الأصلي 11
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 74، السؤال 11
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور سلكين مستقيمين لا نهائيين، يحمل الأول تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` نحو محور الصادات الموجب، والثاني \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>6</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` نحو محور السينات السالب. وضعت حلقة دائرية في مستوى السلكين نصف قطرها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` ويقع مركزها في النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn>6</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow><mo separator="true">,</mo><mn>12</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow><mo stretchy="false">)</mo></mrow></math>\`. أوجد مقدار واتجاه شدة التيار المار بالحلقة لتصبح شدة المجال المغناطيسي في مركز الملف \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` باتجاه الناظر.

![حلقة نصف قطرها π cm بين سلكين متعامدين بتياري 3 A و6 A والبعدين 6 cm و12 cm.](assets/lessons/curriculum-evidence/86480302f8fac74730c1.webp)
solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/86480302f8fac74730c1.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد مجال السلك المستقيم، نجعل إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يبين دوران المجال حوله. وللملف الدائري نلف الأصابع مع التيار، فيشير الإبهام إلى مجال المركز. نستخدم الاتجاه الموافق لكل جزء من الرسم قبل جمع المجالات.

الحلقة ذات لفة واحدة، لذلك \\(N=1\\) في علاقة مجال المركز. نستعمل نصف قطرها \\(R\\) بالمتر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



إحداثي المركز الأفقي يعطي بعده عن السلك الرأسي، وإحداثيه الرأسي يعطي بعده عن السلك الأفقي. نقسم السنتيمتر على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>v</mi></msub><mo>=</mo><mn>6</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.06</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>h</mi></msub><mo>=</mo><mn>12</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.12</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



بقاعدة اليد اليمنى، السلك الرأسي إلى أعلى يعطي مجالاً للداخل يمينه، والأفقي إلى اليسار يعطي مجالاً للداخل فوقه. إذن نجمع مقداريهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>3</mn><mn>0.06</mn></mfrac><mo>+</mo><mfrac><mn>6</mn><mn>0.12</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>50</mn><mo>+</mo><mn>50</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نختار الخارج موجباً. المحصلة المطلوبة موجبة، ومجال السلكين سالب؛ لذلك يجب أن يكون مجال الحلقة للخارج وأكبر من مجالي السلكين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال للخارج يتطلب تياراً عكس عقارب الساعة. لإيجاد تيار الحلقة نضرب علاقة \\(B_{c}\\) في \\(2R\\) ثم نقسم على \\(\\mu _{0}\\)، مع \\(N=1\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi><msub><mi>B</mi><mi>c</mi></msub></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p076-q459
title: السؤال 459 — ص 75 — السؤال الأصلي 12
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 75، السؤال 12
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ملف حلزوني يسري به تيار كهربائي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\`، أثر عليه مجال مغناطيسي منتظم خارجي شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` نحو \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>X</mi></mrow></math>\`، فكانت محصلة المجال المغناطيسي عند النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>a</mi></mrow></math>\` التي تقع على محور الملف الحلزوني \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` نحو \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>−</mo><mi>X</mi></mrow></math>\`، أجب عما يأتي:

1. اتجاه التيار الكهربائي في المقاومة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>R</mi></mrow></math>\`.
2. عدد لفات الملف الحلزوني لكل وحدة طول.

![ملف حلزوني ومجال خارجي أفقي إلى اليمين ومقاومة R بالنقطتين c وd ومصدر جهد.](assets/lessons/curriculum-evidence/03ceecb8695b378b01e6.webp)
solution:
مجال الملف الحلزوني موازٍ لمحوره؛ نلف أصابع اليد اليمنى مع تيار اللفات ليشير الإبهام إلى مجاله. وعدد اللفات لكل متر \\(n\\) يربط بالمجال بالعلاقة \\(B=\\mu _{0}nI\\).

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/03ceecb8695b378b01e6.webp)

نجعل الاتجاه إلى اليمين موجبًا؛ المحصلة إلى اليسار، لذلك يجب أن يكون مجال الملف إلى اليسار وأكبر من المجال الخارجي.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>+</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>=</mo><mo>−</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>s</mi></msub><mo>=</mo><mo>−</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نلف أصابع اليد اليمنى مع تيار اللفات بحيث يشير الإبهام إلى اليسار. في الجزء الأمامي الظاهر من اللفة يكون التيار إلى أعلى؛ بتتبعه إلى المقاومة، يدخل من \\(c\\) ويخرج من \\(d\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>I</mi><mi>R</mi></msub><mo>:</mo><mtext> </mtext><mi>c</mi><mo>⟶</mo><mi>d</mi></mrow></math>
\`\`\`



نقسم شدة مجال الملف على حاصل ضرب النفاذية في التيار لإيجاد عدد اللفات لكل متر.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi mathvariant="normal">∣</mi><msub><mi>B</mi><mi>s</mi></msub><mi mathvariant="normal">∣</mi></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>5</mn><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>=</mo><mfrac><mn>25</mn><mi>π</mi></mfrac><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>n</mi><mo>≈</mo><mn>7.96</mn><mtext> </mtext><msup><mi mathvariant="normal">m</mi><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>
\`\`\`



أي نحو \\(7.96\\) لفة لكل متر؛ الإشارة السالبة للمجال تحدد اتجاهه إلى اليسار، ولا تجعل كثافة اللفات سالبة.
:::

:::exam-question
id: physics-tawjihi-2025-p076-q460
title: السؤال 460 — ص 75 — السؤال الأصلي 13
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 75، السؤال 13
answer-label: الإجابة والشرح من المجموعة المصححة
body:
في الشكل أدناه، احسب مقدار واتجاه شدة المجال المغناطيسي في النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>c</mi></mrow></math>\`.

![ثلاثة أسلاك عند رؤوس مثلث بتيارات 8 A و6 A و6 A والنقطة c وسط القاعدة وأبعاد 10 cm و6 cm.](assets/lessons/curriculum-evidence/358df7acb360a87f15e5.webp)
solution:
مجال كل سلك طويل عند بعد عمودي \\(r\\) هو \\(B=\\mu _{0}I/(2\\pi r)=2\\times 10^{-7} I/r\\) في الهواء، والمسافة بالمتر. بقاعدة اليد اليمنى نوجه الإبهام مع التيار لنعرف اتجاه المجال من التفاف الأصابع.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/358df7acb360a87f15e5.webp)

المسافتان \\(10\\,\\mathrm{cm}\\) و\\(6\\,\\mathrm{cm}\\) تساويان \\(0.10\\,\\mathrm{m}\\) و\\(0.06\\,\\mathrm{m}\\) بعد القسمة على \\(100\\). ارتفاع المثلث \\(h\\) يصنع مثلثاً قائماً مع نصف القاعدة؛ نستخدم فيثاغورس لأن مربع الوتر يساوي مجموع مربعي الضلعين القائمين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><msqrt><mrow><msup><mn>0.10</mn><mn>2</mn></msup><mo>−</mo><msup><mn>0.06</mn><mn>2</mn></msup></mrow></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><msqrt><mrow><mn>0.0100</mn><mo>−</mo><mn>0.0036</mn></mrow></msqrt><mo>=</mo><msqrt><mn>0.0064</mn></msqrt></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>h</mi><mo>=</mo><mn>0.08</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



تيار السلك العلوي خارج الصفحة، فيعطي مجاله إلى اليمين عند \\(c\\) أسفله. عند \\(c\\) نقع يمين السلك الأيسر الذي يخرج تياره من الصفحة، ويسار السلك الأيمن الذي يدخل تياره فيها؛ بقاعدة اليد اليمنى يتجه المجالان السفليان إلى أعلى.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>8</mn><mn>0.08</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>y</mi></msub><mo>=</mo><mn>2</mn><mrow><mo fence="true">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>6</mn><mn>0.06</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>y</mi></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المركبتان متعامدتان، فيعطينا فيثاغورس مقدار المحصلة. ولأنهما موجبتان فالمحصلة إلى أعلى اليمين. ظل زاويتها من الأفقي الموجب يساوي المركبة الرأسية مقسومة على الأفقية:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><msup><mn>2</mn><mn>2</mn></msup><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup></mrow></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>≈</mo><mn>4.47</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>tan</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mfrac><mn>4</mn><mn>2</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>≈</mo><msup><mn>63.43</mn><mo>∘</mo></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p076-q462
title: السؤال 462 — ص 75 — السؤال الأصلي 15
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 75، السؤال 15
answer-label: الإجابة والشرح من المجموعة المصححة
body:
سلكان مستقيمان ولا نهائيّا الطول موضوعان بشكل عمودي على الصفحة، ويمر بهما تياران كهربائيان كما في الشكل المجاور، وضعت حلقة دائرية نصف قطرها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، بحيث يبعد مركز الحلقة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>10</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\` عن كلا السلكين. احسب شدة المجال المغناطيسي عند مركز الحلقة.

![حلقة يمر فيها 1 A وسلكان عموديان على الصفحة بتياري 10 A و15 A وبعد 10 cm عن المركز.](assets/lessons/curriculum-evidence/aa7696509a2caba7033a.webp)
solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/aa7696509a2caba7033a.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لدينا حلقة ذات لفة واحدة، فنأخذ \\(N=1\\) في علاقة مجال المركز. نحول الأطوال من سنتيمتر إلى متر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>r</mi><mo>=</mo><mn>10</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.10</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



بقاعدة اليد اليمنى، نوجه الإبهام مع تيار كل سلك؛ يعطي التفاف الأصابع المجال. السلك الأيسر نحو الناظر فيكون مجاله لأعلى يمينه، والسفلي بعيداً عن الناظر فيكون مجاله لليمين فوقه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>15</mn><mn>0.10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>x</mi></msub><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>y</mi><mo separator="true">,</mo><mi>w</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>10</mn><mn>0.10</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mrow><mi>y</mi><mo separator="true">,</mo><mi>w</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



الحلقة في مستوى أفقي كما يبين شكلها المنظوري. نلف الأصابع مع تيارها؛ الجزء الأمامي يسري فيه التيار إلى اليمين، فيشير الإبهام إلى أعلى. لذلك نضيف مجالها إلى المركبة الرأسية.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>0.02</mn><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>y</mi></msub><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المركبتان متعامدتان، فنحسب المقدار بفيثاغورس. ظل الزاوية يساوي المركبة الرأسية مقسومة على الأفقية؛ وكلتاهما موجبة فالاتجاه إلى أعلى اليمين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><msqrt><mrow><msup><mn>3</mn><mn>2</mn></msup><mo>+</mo><msup><mn>4</mn><mn>2</mn></msup></mrow></msqrt><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi>tan</mi><mo>⁡</mo></mrow><mrow><mo>−</mo><mn>1</mn></mrow></msup><mfrac><mn>4</mn><mn>3</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>θ</mi><mo>≈</mo><msup><mn>53.13</mn><mo>∘</mo></msup></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p076-q463
title: السؤال 463 — ص 75 — السؤال الأصلي 16
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 75، السؤال 16
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل المجاور سلكين مستقيمين لا نهائيين، يحمل الأول تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` نحو محور الصادات الموجب، والثاني \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>4</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` نحو محور السينات السالب، ووضعت حلقة دائرية في مستوى السلكين نصف قطرها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، ويقع مركزها في النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow><mo separator="true">,</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow><mo stretchy="false">)</mo></mrow></math>\`. أوجد مقدار واتجاه شدة التيار الكهربائي المار بالحلقة لتصبح شدة المجال المغناطيسي في مركز الحلقة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` باتجاه \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo>+</mo><mi>Z</mi></mrow></math>\`.

![حلقة نصف قطرها π cm مع سلكين متعامدين بتياري 2 A و4 A والبعدين 4 cm و8 cm.](assets/lessons/curriculum-evidence/648c994d3c30040ae0cd.webp)
solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/648c994d3c30040ae0cd.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد مجال السلك المستقيم، نجعل إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يبين دوران المجال حوله. وللملف الدائري نلف الأصابع مع التيار، فيشير الإبهام إلى مجال المركز. نستخدم الاتجاه الموافق لكل جزء من الرسم قبل جمع المجالات.

الحلقة ذات لفة واحدة، لذلك \\(N=1\\) في علاقة مجال المركز. نستعمل نصف قطرها \\(R\\) بالمتر:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



إحداثي المركز الأفقي يعطي بعده عن السلك الرأسي، وإحداثيه الرأسي يعطي بعده عن السلك الأفقي. نقسم السنتيمتر على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>v</mi></msub><mo>=</mo><mn>4</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>h</mi></msub><mo>=</mo><mn>8</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.08</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



بقاعدة اليد اليمنى، السلك الرأسي إلى أعلى يعطي مجالاً للداخل يمينه، والأفقي إلى اليسار يعطي مجالاً للداخل فوقه. إذن نجمع مقداريهما:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mrow><mo fence="true">(</mo><mfrac><mn>2</mn><mn>0.04</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>0.08</mn></mfrac><mo fence="true">)</mo></mrow></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo stretchy="false">(</mo><mn>50</mn><mo>+</mo><mn>50</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



نختار الخارج موجباً. المحصلة المطلوبة موجبة، ومجال السلكين سالب؛ لذلك يجب أن يكون مجال الحلقة للخارج وأكبر من مجالي السلكين:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال للخارج يتطلب تياراً عكس عقارب الساعة. لإيجاد تيار الحلقة نضرب علاقة \\(B_{c}\\) في \\(2R\\) ثم نقسم على \\(\\mu _{0}\\)، مع \\(N=1\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi><msub><mi>B</mi><mi>c</mi></msub></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1.5</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::

:::exam-question
id: physics-tawjihi-2025-p077-q464
title: السؤال 464 — ص 76 — السؤال الأصلي 17
question: السؤال الثالث: مسائل حسابية
reference: تصنيف أسئلة الفيزياء توجيهي 2025، ص 76، السؤال 17
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الشكل سلكين مستقيمين لا نهائيين، يحمل الأول تيارًا كهربائيًا شدته \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>2</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` نحو محور الصادات الموجب، والثاني \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mn>8</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>\` نحو السينات الموجب، وضعت حلقة دائرية في مستوى السلكين نصف قطرها \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>π</mi><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow></mrow></math>\`، ويقع مركزها في النقطة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mo stretchy="false">(</mo><mn>4</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow><mo separator="true">,</mo><mn>8</mn><mtext> </mtext><mrow><mi mathvariant="normal">c</mi><mi mathvariant="normal">m</mi></mrow><mo stretchy="false">)</mo></mrow></math>\`. أوجد مقدار واتجاه شدة التيار المار بالحلقة لتصبح شدة المجال المغناطيسي في مركز الحلقة \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>\` بعيدًا عن الناظر.

\`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>\`.

![سلكان متعامدان بتياري 2 A إلى أعلى و8 A إلى اليمين وحلقة نصف قطرها π cm.](assets/lessons/curriculum-evidence/a7192d40d583dcb465cb.webp)
solution:
هذه علاقة مجال سلك مستقيم طويل عند نقطة تبعد عنه عموديًا مسافة \\(r\\). نستخدمها لكل سلك على حدة، ثم نجمع المجالات كمتجهات وفق اتجاهاتها.

![الرسم الأصلي المرتبط بالسؤال](assets/lessons/curriculum-evidence/a7192d40d583dcb465cb.webp)



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>r</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mtext> </mtext><mrow><mi mathvariant="normal">T</mi><mtext> </mtext><mi mathvariant="normal">m</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi></mrow></mrow></math>
\`\`\`



لتحديد مجال السلك المستقيم، نجعل إبهام اليد اليمنى مع التيار؛ التفاف الأصابع يبين دوران المجال حوله. وللملف الدائري نلف الأصابع مع التيار، فيشير الإبهام إلى مجال المركز. نستخدم الاتجاه الموافق لكل جزء من الرسم قبل جمع المجالات.

الحلقة ذات لفة واحدة، لذلك \\(N=1\\). نصف قطرها \\(R\\) هو المسافة من مركزها إلى السلك الدائري:



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>N</mi><mi>I</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>
\`\`\`



نقسم قيم السنتيمتر على \\(100\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>v</mi></msub><mo>=</mo><mn>4</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.04</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>r</mi><mi>h</mi></msub><mo>=</mo><mn>8</mn><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mn>0.08</mn><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>R</mi><mo>=</mo><mi>π</mi><mi mathvariant="normal">/</mi><mn>100</mn><mo>=</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">m</mi></mrow></math>
\`\`\`



نختار المجال نحو الناظر موجباً. بقاعدة اليد اليمنى، السلك الرأسي يعطي مجالاً للداخل يمينه، والأفقي يعطي مجالاً للخارج فوقه.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>2</mn><mn>0.04</mn></mfrac><mo>+</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mfrac><mn>8</mn><mn>0.08</mn></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><mo>−</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>+</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>w</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المحصلة المطلوبة للداخل، لذلك يجب أن يكون مجال الحلقة إلى الداخل بمقدار ضعف مجال السلكين.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>+</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo>=</mo><mo>−</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>=</mo><mo>−</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mtext> </mtext><mi mathvariant="normal">T</mi></mrow></math>
\`\`\`



المجال للداخل يتطلب دوران التيار مع عقارب الساعة. نعزل مقدار التيار من علاقة الحلقة بضربها في \\(2R\\) ثم القسمة على \\(\\mu _{0}\\)، مع \\(N=1\\):



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>R</mi><mi mathvariant="normal">∣</mi><msub><mi>B</mi><mi>c</mi></msub><mi mathvariant="normal">∣</mi></mrow><msub><mi>μ</mi><mn>0</mn></msub></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy="false">(</mo><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup><mo stretchy="false">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mi>π</mi></mrow></mfrac></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi mathvariant="normal">A</mi></mrow></math>
\`\`\`


:::
`;

export default defineMarkdownLesson({
  "status": "published",
  "language": "ar",
  "title": "المجال المغناطيسي",
  "summary": "أسئلة الكتاب بترتيب المصدر، تليها أسئلة إضافية مع الاحتفاظ باختلاف المعطيات.",
  "outcome": "مراجعة المجال المغناطيسي من الأسئلة الأصلية.",
  "mode": "أسئلة وبطاقات",
  "duration": "94 سؤالًا",
  "level": "الثاني عشر · العلمي",
  "reward": 10
}, lessonSource);
