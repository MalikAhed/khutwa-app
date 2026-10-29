import { createChemistryLesson } from "./shared.js";

export const source = `:::mcq
id: chemistry-gaza-p069-q01-d
title: الوحدة ٣ · الدرس ٨ · ص ٦٧ · س ٠١-d
kicker: أسئلة الفصل — الرزمة التعليمية ٢٠٢٤
reference: [الرزمة التعليمية، ص ٦٧ (PDF ٦٩)](https://moe.edu.ps/m/4059#page=69)
question: ما جهد الخلية الجلفانية القياسي التي تكون معادلة التفاعل الكلية فيها: \\(\\mathrm{Sn_{(s)}+2Ag^+_{(aq)}\\rightarrow 2Ag_{(s)}+Sn^{2+}_{(aq)}}\\)

- [ ] option-1 | 0.66 فولت
- [x] option-2 | 0.94 فولت
- [ ] option-3 | 1.46 فولت
- [ ] option-4 | 1.74 فولت
explanation:
تتحول Sn إلى Sn²⁺ بفقد إلكترونين، فهي المصعد الذي يحدث عنده التأكسد.
وتكتسب Ag⁺ الإلكترونات لتصبح Ag، فهي مادة الاختزال عند المهبط.
من جدول الكتاب، جهد اختزال Sn²⁺/Sn يساوي −0.14 V، وجهد Ag⁺/Ag يساوي +0.80 V.
جهد الخلية هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><msubsup><mi>E</mi><mrow><mi>c</mi><mi>a</mi><mi>t</mi><mi>h</mi><mi>o</mi><mi>d</mi><mi>e</mi></mrow><mo>∘</mo></msubsup><mo>−</mo><msubsup><mi>E</mi><mrow><mi>a</mi><mi>n</mi><mi>o</mi><mi>d</mi><mi>e</mi></mrow><mo>∘</mo></msubsup></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>0.80</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.14</mn><mo stretchy="false">)</mo><mo>=</mo><mo>+</mo><mn>0.94</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


إذن الجواب **0.94 فولت**.
لا نضرب جهد الفضة في 2 رغم معامل Ag⁺؛ لأن الجهد لا يعتمد على كمية المادة.

**المصدر:** الصفحات 64، 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: chemistry-gaza-p069-q03-c
title: الوحدة ٣ · الدرس ٨ · ص ٦٧ · س ٠٣-c · ٣ · أسئلة الفصل — الرزمة التعليمية ٢٠٢٤
question: ارسم الخلية الجلفانية التي تعتمد على المعادلة الكيميائية الكلية الآتية: \\(\\mathrm{Mn_{(s)}+Ni^{2+}_{(aq)}\\rightarrow Mn^{2+}_{(aq)}+Ni_{(s)}}\\)
reference: [الرزمة التعليمية، ص ٦٧ (PDF ٦٩)](https://moe.edu.ps/m/4059#page=69)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ارسم الخلية الجلفانية التي تعتمد على المعادلة الكيميائية الكلية الآتية: \\(\\mathrm{Mn_{(s)}+Ni^{2+}_{(aq)}\\rightarrow Mn^{2+}_{(aq)}+Ni_{(s)}}\\)

3. لأغراض هذا التمرين، استخدم قيم جدول الكتاب المعطاة: جهد اختزال Mn²⁺/Mn يساوي −1.03 فولت، وجهد اختزال Ni²⁺/Ni يساوي −0.25 فولت. احسب قيمة جهد الخلية القياسي بناءً على هاتين القيمتين \\(E^\\circ\\).

final-answer:
**جهد الخلية القياسي:** \\(E^\\circ_{\\mathrm{cell}}=+0.78\\,\\mathrm{V}\\)، وفق قيمتي التمرين المعطاتين.
solution:
نحدد القطبين من التفاعل المعطى.
Mn يتحول إلى Mn²⁺ بفقد إلكترونين؛ إذن هو المصعد السالب.
Ni²⁺ يكتسب إلكترونين ليصبح Ni؛ إذن قطب Ni هو المهبط الموجب.
يوضح الشكل الأصلي موضعي القطبين والجسر الملحي، وتسري الإلكترونات من Mn إلى Ni:
![الرسم الأصلي لخلية المنغنيز والنيكل](assets/lessons/curriculum-evidence/30a8aa6335427870bef4.webp)
نستخدم قيمتي جدول الكتاب اللتين حددهما السؤال لهذا الحساب: جهد اختزال Mn²⁺/Mn المعطى −1.03 V، وجهد اختزال Ni²⁺/Ni المعطى −0.25 V. النتيجة التالية مبنية على هاتين القيمتين.
جهد الخلية هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><msubsup><mi>E</mi><mrow><mi>N</mi><msup><mi>i</mi><mrow><mn>2</mn><mo>+</mo></mrow></msup><mi mathvariant="normal">/</mi><mi>N</mi><mi>i</mi></mrow><mo>∘</mo></msubsup><mo>−</mo><msubsup><mi>E</mi><mrow><mi>M</mi><msup><mi>n</mi><mrow><mn>2</mn><mo>+</mo></mrow></msup><mi mathvariant="normal">/</mi><mi>M</mi><mi>n</mi></mrow><mo>∘</mo></msubsup></mrow></math>
\`\`\`


طرح عدد سالب يكافئ جمع مقابله الموجب:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>−</mo><mn>0.25</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>1.03</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>−</mo><mn>0.25</mn><mo>+</mo><mn>1.03</mn><mo>=</mo><mo>+</mo><mn>0.78</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


الإشارة الموجبة تتفق مع تلقائية الاتجاه المعطى.

**المصدر:** الصفحات 64، 66 من الكتاب.

**تصحيح قيمة مرجعية:** يورد جدول الرزمة في صفحة 64 قيمة −1.03 V للزوج Mn²⁺/Mn، بينما يورد [جدول OpenStax لجهود الأقطاب](https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials) قيمة −1.185 V. هذا فرق يتجاوز التقريب؛ لذلك **0.78 V جواب الحساب بقيم التمرين المعطاة**، ولا يمثل جهد هذه الخلية المحسوب بالقيم المرجعية المصححة.

:::

:::exam-question
id: chemistry-gaza-p069-q04-b
title: الوحدة ٣ · الدرس ٨ · ص ٦٧ · س ٠٤-b · ب · أسئلة الفصل — الرزمة التعليمية ٢٠٢٤
question: الخلية الجلفانية الآتية: \\(\\mathrm{Ni_{(s)}\\,|\\,Ni^{2+}_{(aq)}\\,||\\,2H^+_{(aq)}\\,|\\,H_{2(g)}\\,|\\,Pt_{(s)}}\\)
reference: [الرزمة التعليمية، ص ٦٧ (PDF ٦٩)](https://moe.edu.ps/m/4059#page=69)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
الخلية الجلفانية الآتية: \\(\\mathrm{Ni_{(s)}\\,|\\,Ni^{2+}_{(aq)}\\,||\\,2H^+_{(aq)}\\,|\\,H_{2(g)}\\,|\\,Pt_{(s)}}\\)

ب. احسب جهد الخلية الجلفانية السابقة في الظروف القياسية.
final-answer:
**جهد الخلية القياسي:** \\(E^\\circ_{\\mathrm{cell}}=+0.25\\,\\mathrm{V}\\).
solution:
في الترميز الاصطلاحي، المصعد يساراً والمهبط يميناً.
إذن Ni هو المصعد؛ يفقد الإلكترونات ويتأكسد، بينما يكتسب H⁺ الإلكترونات عند المهبط.
من جدول الكتاب، جهد اختزال Ni يساوي −0.25 V، وجهد قطب الهيدروجين القياسي 0 V.
جهد الخلية هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>0</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.25</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


طرح السالب يعطي موجباً:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>+</mo><mn>0.25</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


البلاتين Pt سطح موصل خامل، فلا يدخل في المعادلة الكلية.

**المصدر:** الصفحات 63، 64، 66 من الكتاب.

:::

:::exam-question
id: chemistry-oj-p214-q01
title: الوحدة ٣ · الدرس ٨ · ص ٢١٤ · س ٠١ · وزاري ٢٠٢٥ دورة أولى
question: وضح المقصود بما يلي: جهد الخلية الجلفانية.
reference: [الملزمة، ص ٢١٤](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=214)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح المقصود بما يلي: جهد الخلية الجلفانية.
final-answer:
**جهد الخلية الجلفانية:** القوة الدافعة الكهربائية التي تسبب انتقال الإلكترونات في سلك التوصيل؛ **موجب في اتجاه عمل الخلية، وصفر عند الاتزان**.
solution:
**الإجابة:** القوة الدافعة الكهربائية التي تسبب انتقال الإلكترونات في سلك التوصيل؛ موجبة في اتجاه عمل الخلية.

الشاهد: «وتمثل قراءة الفولتميتر التي سجلتها جهد الخلية الجلفانية، وهي القوة الدافعة الكهربائية (الفولتية) التي تسبب انتقال الإلكترونات في سلك التوصيل.»
**المصدر:** صفحة 63 من الكتاب.

[عرض الشاهد الأصلي في الكتاب](assets/lessons/curriculum-evidence/611a21640e1589b98d6f.webp)

الشاهد: «لاحظت أن جهد الخلايا الجلفانية التي درستها موجب دائمًا، ويدل ذلك على أن تفاعلات التأكسد والاختزال التي تتم في الخلايا الجلفانية تحدث دائمًا بشكل تلقائي.»
**المصدر:** صفحة 66 من الكتاب.

[عرض الشاهد الأصلي في الكتاب](assets/lessons/curriculum-evidence/d460614bd197f3feef46.webp)

الإشارة موجبة في اتجاه العمل؛ عند الاتزان يصبح الجهد صفرًا.

:::

:::mcq
id: chemistry-oj-p226-q01
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠١
kicker: لجنة المبحث؛ وزاري ٢٠٢٥ رزم غزة
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)؛ [الملزمة، ص ٢٢٧](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=227)
question: إذا كانت جهود الاختزال القياسية للكلور والبروم هي +1.36 و +1.065 على الترتيب، فإن قيمة جهد التفاعل القياسي التالي \\(\\mathrm{Cl_{2(g)}+2HBr_{(aq)}\\rightarrow 2HCl_{(aq)}+Br_{2(l)}}\\) تساوي بالفولت:

- [ ] option-1 | \\(-0.435\\)
- [x] option-2 | \\(+0.295\\)
- [ ] option-3 | \\(-0.295\\)
- [ ] option-4 | \\(+0.77\\)
explanation:
HBr وHCl يمدان المحلول بأيونات H⁺، وهذه لا تتغير في التفاعل؛ لذلك نركز على Cl₂ وBr⁻.
الاختزال اكتساب إلكترونات؛ يختزل Cl₂ إلى Cl⁻:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><msub><mi>l</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mo>−</mo></msup><mo>→</mo><mn>2</mn><mi>C</mi><msup><mi>l</mi><mo>−</mo></msup></mrow></math>
\`\`\`


والتأكسد فقد إلكترونات؛ يتأكسد Br⁻ إلى Br₂:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><mi>B</mi><msup><mi>r</mi><mo>−</mo></msup><mo>→</mo><mi>B</mi><msub><mi>r</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mo>−</mo></msup></mrow></math>
\`\`\`


جهد التفاعل هو جهد اختزال الكلور ناقص جهد اختزال البروم، باستخدام القيم المعطاة:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>1.360</mn><mo>−</mo><mn>1.065</mn><mo>=</mo><mo>+</mo><mn>0.295</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


إذن الجواب **+0.295 فولت**.
القيمة 1.065 V من السؤال؛ أما جدول الكتاب فيعرض للبروم 1.06 V.

**المصدر:** الصفحات 64، 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p226-q02
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠٢
kicker: لجنة المبحث
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)
question: خلية جلفانية يحدث فيها التفاعل الآتي: \\(\\mathrm{X_{(s)}+Y^{2+}_{(aq)}\\rightarrow X^{2+}_{(aq)}+Y_{(s)}}\\)، جهد اختزال X = -0.76 فولت و \\(E^\\circ\\) للخلية = +0.51 فولت، فإن جهد اختزال Y بالفولت يساوي:
- [x] option-1 | \\(-0.25\\)
- [ ] option-2 | \\(-1.27\\)
- [ ] option-3 | \\(+0.25\\)
- [ ] option-4 | \\(+1.27\\)
explanation:
يتحول X إلى X²⁺ بفقد إلكترونين؛ إذن هو المصعد.
وتكتسب Y²⁺ الإلكترونات؛ إذن قطب Y هو المهبط.
المعطى جهد الخلية +0.51 V، وجهد اختزال X يساوي −0.76 V.
جهد الخلية هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><msubsup><mi>E</mi><mi>Y</mi><mo>∘</mo></msubsup><mo>−</mo><msubsup><mi>E</mi><mi>X</mi><mo>∘</mo></msubsup></mrow></math>
\`\`\`


نعوض:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.51</mn><mo>=</mo><msubsup><mi>E</mi><mi>Y</mi><mo>∘</mo></msubsup><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.76</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


طرح السالب يكافئ الجمع:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>0.51</mn><mo>=</mo><msubsup><mi>E</mi><mi>Y</mi><mo>∘</mo></msubsup><mo>+</mo><mn>0.76</mn></mrow></math>
\`\`\`


نطرح 0.76 من الطرفين لعزل المجهول:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mi>Y</mi><mo>∘</mo></msubsup><mo>=</mo><mn>0.51</mn><mo>−</mo><mn>0.76</mn><mo>=</mo><mo>−</mo><mn>0.25</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`



**المصدر:** صفحة 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p226-q03
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠٣
kicker: لجنة المبحث
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)
question: إذا كان جهد اختزال الخارصين = -0.76 فولت وجهد اختزال النيكل = -0.25 فولت، فإن \\(E^\\circ\\) للخلية الجلفانية \\(\\mathrm{Zn_{(s)}+Ni^{2+}_{(aq)}\\rightarrow Zn^{2+}_{(aq)}+Ni_{(s)}}\\) تساوي بالفولت:
- [ ] option-1 | \\(-0.51\\)
- [x] option-2 | \\(+0.51\\)
- [ ] option-3 | \\(-1.01\\)
- [ ] option-4 | \\(+1.01\\)
explanation:
Zn يفقد إلكترونين ويصبح Zn²⁺؛ إذن يتأكسد عند المصعد.
Ni²⁺ يكتسب الإلكترونين؛ إذن يختزل عند المهبط.
جهد الخلية هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><msubsup><mi>E</mi><mrow><mi>N</mi><msup><mi>i</mi><mrow><mn>2</mn><mo>+</mo></mrow></msup><mi mathvariant="normal">/</mi><mi>N</mi><mi>i</mi></mrow><mo>∘</mo></msubsup><mo>−</mo><msubsup><mi>E</mi><mrow><mi>Z</mi><msup><mi>n</mi><mrow><mn>2</mn><mo>+</mo></mrow></msup><mi mathvariant="normal">/</mi><mi>Z</mi><mi>n</mi></mrow><mo>∘</mo></msubsup></mrow></math>
\`\`\`


نعوض بالقيم المعطاة:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>−</mo><mn>0.25</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.76</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`


طرح السالب يكافئ جمع مقابله:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>−</mo><mn>0.25</mn><mo>+</mo><mn>0.76</mn><mo>=</mo><mo>+</mo><mn>0.51</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`



**المصدر:** الصفحات 64، 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p226-q04
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠٤
kicker: تجريبي ٢٠٢٥ قباطية
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)
question: خلية جلفانية رمزها الاصطلاحي: \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi mathvariant="normal">C</mi><msub><mi mathvariant="normal">d</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">s</mi><mo stretchy="false">)</mo></mrow></msub><mi mathvariant="normal">/</mi><mi mathvariant="normal">C</mi><msubsup><mi mathvariant="normal">d</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">a</mi><mi mathvariant="normal">q</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo>+</mo></mrow></msubsup><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">M</mi><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi><msubsup><mi mathvariant="normal">g</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">a</mi><mi mathvariant="normal">q</mi><mo stretchy="false">)</mo></mrow><mo>+</mo></msubsup><mo stretchy="false">(</mo><mn>1</mn><mi mathvariant="normal">M</mi><mo stretchy="false">)</mo><mi mathvariant="normal">/</mi><mi mathvariant="normal">A</mi><msub><mi mathvariant="normal">g</mi><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">s</mi><mo stretchy="false">)</mo></mrow></msub></mrow></math>\`، إذا علمت أن جهود الاختزال القياسي لكل من الفضة والكادميوم هي (+0.8، -0.402) فولت على الترتيب، فإن القوة الدافعة الكهربائية للخلية تساوي:
- [ ] option-1 | \\(+0.3981\\) فولت
- [x] option-2 | \\(+1.202\\) فولت
- [ ] option-3 | \\(-1.202\\) فولت
- [ ] option-4 | \\(+3.216\\) فولت
explanation:
في الخلية الجلفانية يكون الطرف الأعلى في جهد الاختزال مهبطاً؛ أي موضع اكتساب الإلكترونات.
Ag جهده +0.800 V، وهو أعلى من جهد Cd البالغ −0.402 V.
إذن الفضة مهبط والكادميوم مصعد، كما في الترميز:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><msub><mi>d</mi><mrow><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo></mrow></msub><mi mathvariant="normal">∣</mi><mi>C</mi><msubsup><mi>d</mi><mrow><mo stretchy="false">(</mo><mi>a</mi><mi>q</mi><mo stretchy="false">)</mo></mrow><mrow><mn>2</mn><mo>+</mo></mrow></msubsup><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mi>A</mi><msubsup><mi>g</mi><mrow><mo stretchy="false">(</mo><mi>a</mi><mi>q</mi><mo stretchy="false">)</mo></mrow><mo>+</mo></msubsup><mi mathvariant="normal">∣</mi><mi>A</mi><msub><mi>g</mi><mrow><mo stretchy="false">(</mo><mi>s</mi><mo stretchy="false">)</mo></mrow></msub></mrow></math>
\`\`\`


نحسب جهد الخلية بطرح جهد اختزال المصعد من جهد اختزال المهبط:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>0.800</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.402</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>0.800</mn><mo>+</mo><mn>0.402</mn><mo>=</mo><mo>+</mo><mn>1.202</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


لا نضرب جهد الفضة في 2 عند موازنة إلكتروني Cd؛ فالجهد لا يعتمد على كمية المادة.

**المصدر:** الصفحات 65، 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p226-q05
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠٥
kicker: لجنة المبحث
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)
question: إذا كانت جهود الاختزال القياسية لكل من المغنيسيوم والنيكل هي (-2.4، -0.23) فولت على الترتيب، فإن القوة الدافعة الكهربائية للخلية الجلفانية المكوّنة منهما تساوي:
- [ ] option-1 | \\(-2.17\\)
- [x] option-2 | \\(+2.17\\)
- [ ] option-3 | \\(-2.63\\)
- [ ] option-4 | \\(+2.63\\)
explanation:
المعطى جهد اختزال Mg يساوي −2.40 V، وجهد Ni يساوي −0.23 V.
الجهد الأعلى يعني ميلاً أكبر للاختزال؛ لذلك يختزل Ni²⁺ عند المهبط، ويتأكسد Mg عند المصعد.
جهد الخلية هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>−</mo><mn>0.23</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>2.40</mn><mo stretchy="false">)</mo></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>−</mo><mn>0.23</mn><mo>+</mo><mn>2.40</mn><mo>=</mo><mo>+</mo><mn>2.17</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


استخدمنا قيم السؤال كما هي؛ فلا نستبدلها بقيم جدول الكتاب المختلفة أثناء هذا الحساب.

**المصدر:** صفحة 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p226-q06
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠٦
kicker: لجنة المبحث
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)
question: إذا علمت أن جهود الاختزال القطبية لكل من \\(\\mathrm{Zn^{2+},Ag^+,Cu^{2+},Fe^{2+}}\\) على الترتيب (-0.76، +0.8، +0.34، -0.41) فولت، فإن أكبر جهد خلية يمكن الحصول عليه هو في الخلية المكوّنة من:
- [x] option-1 | الخارصين والفضة
- [ ] option-2 | الخارصين والنحاس
- [ ] option-3 | الخارصين والحديد
- [ ] option-4 | الحديد والفضة
explanation:
جهد الخلية يساوي جهد اختزال المهبط ناقص جهد اختزال المصعد.
للحصول على أكبر فرق، نجعل أعلى جهد مهبطاً وأدنى جهد مصعداً.
أعلى قيمة معطاة +0.80 V للفضة، وأدنى قيمة −0.76 V للخارصين:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>Z</mi><mi>n</mi><mi mathvariant="normal">/</mi><mi>A</mi><mi>g</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>0.80</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.76</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1.56</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


إذن الجواب **الخارصين والفضة**.
ونتحقق من أن بقية الخيارات تعطي قيماً أصغر:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>Z</mi><mi>n</mi><mi mathvariant="normal">/</mi><mi>C</mi><mi>u</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>0.34</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.76</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1.10</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>Z</mi><mi>n</mi><mi mathvariant="normal">/</mi><mi>F</mi><mi>e</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mo>−</mo><mn>0.41</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.76</mn><mo stretchy="false">)</mo><mo>=</mo><mn>0.35</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>F</mi><mi>e</mi><mi mathvariant="normal">/</mi><mi>A</mi><mi>g</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>0.80</mn><mo>−</mo><mo stretchy="false">(</mo><mo>−</mo><mn>0.41</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1.21</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


استخدمنا −0.41 V للحديد كما أعطيت في السؤال؛ جدول الكتاب يعطي −0.44 V، ولا يغير ذلك الاختيار.

**المصدر:** صفحة 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p226-q08
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠٨
kicker: لجنة المبحث
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)
question: إذا كانت جهود الاختزال القياسية لكل من البروم واليود هي (+1.06، +0.54) فولت على الترتيب، فإن قيمة جهد التفاعل القياسي التالي تساوي: \\(\\mathrm{2I^-_{(aq)}+Br_{2(l)}\\rightarrow I_2+2Br^-_{(aq)}}\\)

- [x] option-1 | \\(+0.52\\) فولت
- [ ] option-2 | \\(+1.6\\) فولت
- [ ] option-3 | \\(-1.6\\) فولت
- [ ] option-4 | \\(-0.52\\) فولت
explanation:
الاختزال هو اكتساب الإلكترونات؛ لذلك يختزل Br₂ عند المهبط:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>B</mi><msub><mi>r</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mo>−</mo></msup><mo>→</mo><mn>2</mn><mi>B</mi><msup><mi>r</mi><mo>−</mo></msup></mrow></math>
\`\`\`


والتأكسد هو فقد الإلكترونات؛ لذلك يتأكسد I⁻ عند المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msup><mi>I</mi><mo>−</mo></msup><mo>→</mo><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mo>−</mo></msup></mrow></math>
\`\`\`


جهد التفاعل هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>1.06</mn><mo>−</mo><mn>0.54</mn><mo>=</mo><mo>+</mo><mn>0.52</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


إذن الجواب **+0.52 فولت**.
لا نضرب الجهود في معاملات الموازنة؛ فالجهد لا يعتمد على كمية المادة.

**المصدر:** الصفحات 64، 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p226-q09
title: الوحدة ٣ · الدرس ٨ · ص ٢٢٦ · س ٠٩
kicker: لجنة المبحث
reference: [الملزمة، ص ٢٢٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=226)
question: إذا كانت جهود الاختزال القياسية لكل من الكلور واليود هي (+1.36، +0.54) فولت على الترتيب، فإن قيمة جهد التفاعل القياسي التالي تساوي: \\(\\mathrm{2I^-_{(aq)}+Cl_{2(g)}\\rightarrow I_2+2Cl^-_{(aq)}}\\)

- [x] option-1 | \\(+0.82\\) فولت
- [ ] option-2 | \\(+1.36\\) فولت
- [ ] option-3 | \\(+0.41\\) فولت
- [ ] option-4 | \\(-0.54\\) فولت
explanation:
يكتسب Cl₂ إلكترونين، فيختزل عند المهبط:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><msub><mi>l</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mo>−</mo></msup><mo>→</mo><mn>2</mn><mi>C</mi><msup><mi>l</mi><mo>−</mo></msup></mrow></math>
\`\`\`


ويفقد أيونا I⁻ إلكترونين معاً، فيتأكسدان عند المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mn>2</mn><msup><mi>I</mi><mo>−</mo></msup><mo>→</mo><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mo>−</mo></msup></mrow></math>
\`\`\`


جهد التفاعل هو جهد اختزال المهبط ناقص جهد اختزال المصعد:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msubsup><mi>E</mi><mrow><mi>c</mi><mi>e</mi><mi>l</mi><mi>l</mi></mrow><mo>∘</mo></msubsup><mo>=</mo><mn>1.36</mn><mo>−</mo><mn>0.54</mn><mo>=</mo><mo>+</mo><mn>0.82</mn><mtext>  </mtext><mi>V</mi></mrow></math>
\`\`\`


إذن الجواب **+0.82 فولت**.
الإشارة الموجبة تتفق مع تلقائية الاتجاه المعطى في الظروف القياسية.

**المصدر:** الصفحات 64، 66 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::
`;

export default createChemistryLesson("u03-l08-cell-potential-calculations", source);
