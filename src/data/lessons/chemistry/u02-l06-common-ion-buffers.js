import { createChemistryLesson } from "./shared.js?v=acff67f262f3c107";

export const source = `:::exam-question
id: chemistry-gaza-p047-q02-s3
title: الوحدة ٢ · الدرس ٦ · ص ٤٥ · س ٢ · ٣ · أسئلة الوحدة — الرزمة التعليمية ٢٠٢٤؛ وزاري ٢٠٢٢؛ وزاري ٢٠٢١؛ وزاري ٢٠١٧
question: ما المقصود بكل من المصطلحات الآتية: المحلول المنظم
reference: [الرزمة التعليمية، ص ٤٥ (PDF ٤٧)](https://moe.edu.ps/m/4059#page=47)؛ [الملزمة، ص ١٤٧](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=147)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بكل من المصطلحات الآتية: المحلول المنظم
solution:
**المحلول المنظم:** محلول يقاوم التغير الكبير في الرقم الهيدروجيني عند إضافة كميات قليلة من حمض قوي أو قاعدة قوية. يتكون في أمثلة هذا الدرس من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ مثل HNO₂/NO₂⁻ أو NH₃/NH₄⁺.

[عرض نص الكتاب الأصلي](assets/lessons/curriculum-evidence/ced2e0be37974b116b7d.webp)

**المصدر:** صفحة 42 من الكتاب.

:::

:::exam-question
id: chemistry-gaza-p047-q03-s1
title: الوحدة ٢ · الدرس ٦ · ص ٤٥ · س ٣ · ١ · أسئلة الوحدة — الرزمة التعليمية ٢٠٢٤
question: علل ما يأتي: ترتفع قيمة الرقم الهيدروجيني عند إذابة ملح KNO2 في محلول حمض HNO2.
reference: [الرزمة التعليمية، ص ٤٥ (PDF ٤٧)](https://moe.edu.ps/m/4059#page=47)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
علل ما يأتي: ترتفع قيمة الرقم الهيدروجيني عند إذابة ملح KNO2 في محلول حمض HNO2.
solution:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

الأيون المشترك أيون يأتي من الحمض وملحه معاً. هنا NO₂⁻ ينتج من المصدرين:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>2</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub><mo>→</mo><msup><mi>K</mi><mo>+</mo></msup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>2</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`


زيادة NO₂⁻ تحرك الاتزان إلى اليسار لتخفيف أثر الزيادة وفق لوتشاتلييه، فيقل تأين الحمض وتركيز الهيدرونيوم. لذلك **ترتفع pH**، ولا يتغير Ka عند ثبوت الحرارة.

**المصدر:** الصفحات 41، 42 من الكتاب.

:::

:::mcq
id: chemistry-oj-p129-q08
title: الوحدة ٢ · الدرس ٦ · ص ١٢٩ · س ٨
kicker: وزاري ٢٠٢٤ رزم غزة (١)
reference: [الملزمة، ص ١٢٩](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=129)
question: ماذا يحدث لقيمة pH عند إضافة \\(\\mathrm{NH_4Cl}\\) إلى محلول \\(\\mathrm{NH_3}\\)؟
- [ ] option-1 | تزداد
- [ ] option-2 | تبقى ثابتة
- [ ] option-3 | تصبح 7
- [x] option-4 | تقل
explanation:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

**تقل pH**. NH₄Cl يضيف الأيون المشترك NH₄⁺ إلى اتزان الأمونيا:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><msub><mi>H</mi><mn>3</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><mi>N</mi><msubsup><mi>H</mi><mn>4</mn><mo>+</mo></msubsup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup></mrow></math>
\`\`\`


وفق لوتشاتلييه ينحاز الاتزان لليسار لتقليل NH₄⁺ الزائد، فينخفض OH⁻ وتقل pH؛ ولا يلزم أن تصل إلى 7.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: chemistry-oj-p135-q01-s3
title: الوحدة ٢ · الدرس ٦ · ص ١٣٥ · س ٥ · ٣ · وزاري ٢٠٢٣ دورة أولى
question: لديك الحموض الآتية: \\((\\mathrm{CH_3COOH}\\char"060C\\mathrm{HCN}\\char"060C\\mathrm{HNO_2})\\)، إذا علمت أن قيم \\(K_a\\) لها هي: \\((1.8\\times10^{-5}\\char"060C{}4.2\\times10^{-10}\\char"060C{}5.6\\times10^{-4})\\) لكنها غير مرتبة، وأن الاتزان ينحاز نحو المواد المتفاعلة في كل من التفاعلين الآتيين: \\(\\mathrm{CH_3COOH_{(aq)}+{NO_2}^{-}_{(aq)}\\rightleftharpoons HNO_2{}_{(aq)}+CH_3COO^-_{(aq)}}\\)؛ \\(\\mathrm{HCN_{(aq)}+CH_3COO^-_{(aq)}\\rightleftharpoons CN^-_{(aq)}+CH_3COOH_{(aq)}}\\)
reference: [الملزمة، ص ١٣٥](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=135)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
لديك الحموض الآتية: \\((\\mathrm{CH_3COOH}\\char"060C\\mathrm{HCN}\\char"060C\\mathrm{HNO_2})\\)، إذا علمت أن قيم \\(K_a\\) لها هي: \\((1.8\\times10^{-5}\\char"060C{}4.2\\times10^{-10}\\char"060C{}5.6\\times10^{-4})\\) لكنها غير مرتبة، وأن الاتزان ينحاز نحو المواد المتفاعلة في كل من التفاعلين الآتيين: \\(\\mathrm{CH_3COOH_{(aq)}+{NO_2}^{-}_{(aq)}\\rightleftharpoons HNO_2{}_{(aq)}+CH_3COO^-_{(aq)}}\\)؛ \\(\\mathrm{HCN_{(aq)}+CH_3COO^-_{(aq)}\\rightleftharpoons CN^-_{(aq)}+CH_3COOH_{(aq)}}\\)

ما أثر إضافة ملح NaNO2 إلى محلول حمض HNO2 على قيمة pH؟ فسر إجابتك.
solution:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

**ترتفع pH**. الأيون المشترك هو NO₂⁻ الموجود أصلاً من تأين الحمض والمضاف من تفكك الملح.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><mi>a</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub><mo>→</mo><mi>N</mi><msup><mi>a</mi><mo>+</mo></msup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>2</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>2</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`


زيادة أحد النواتج تدفع الاتزان لليسار وفق لوتشاتلييه، فيقل الهيدرونيوم وترتفع pH. Ka يبقى ثابتاً عند نفس الحرارة.

**المصدر:** الصفحات 41، 42 من الكتاب.

:::

:::exam-question
id: chemistry-oj-p136-q03-s6
title: الوحدة ٢ · الدرس ٦ · ص ١٣٦ · س ١٤ · ٦ · وزاري ٢٠٢١ دورة أولى؛ من الكتاب؛ تجريبي ٢٠٢٥ شمال الخليل
question: يبين الجدول أدناه ثوابت التأين لبعض الحموض الضعيفة.
reference: [الملزمة، ص ١٣٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=136)؛ [الملزمة، ص ١٤٤](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=144)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
يبين الجدول أدناه ثوابت التأين لبعض الحموض الضعيفة.

| صيغة الحمض | \\(\\mathrm{HClO}\\) | \\(\\mathrm{HNO_2}\\) | \\(\\mathrm{HCN}\\) | \\(\\mathrm{CH_3COOH}\\) |
| --- | --- | --- | --- | --- |
| \\(K_a\\) | \\(2.9\\times10^{-8}\\) | \\(5.6\\times10^{-4}\\) | \\(4.2\\times10^{-10}\\) | \\(1.8\\times10^{-5}\\) |



ما أثر إذابة ملح KNO2 في محلول حمض HNO2 على قيمة pH؟ وضح إجابتك.
solution:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

**ترتفع pH**؛ KNO₂ يذوب مولداً NO₂⁻، وهو أيون مشترك مع تأين HNO₂.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub><mo>→</mo><msup><mi>K</mi><mo>+</mo></msup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>2</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>2</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`


حسب لوتشاتلييه ينحاز الاتزان إلى اليسار لتخفيف زيادة NO₂⁻، فيقل الهيدرونيوم وترتفع pH. K⁺ لا يفسر الأثر لأنه متفرج.

**المصدر:** الصفحات 41، 42 من الكتاب.

:::

:::mcq
id: chemistry-oj-p143-q01
title: الوحدة ٢ · الدرس ٦ · ص ١٤٣ · س ١
kicker: ٢٠٢٥ رزم غزة؛ ٢٠٢٤ رزم غزة
reference: [الملزمة، ص ١٤٣](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=143)
question: ما أثر إضافة الملح HCOONa إلى محلول الحمض الضعيف HCOOH؟
- [ ] option-1 | تقل \\(K_a\\)
- [ ] option-2 | تقل pH
- [ ] option-3 | يزيد تركيز \\([\\mathrm{H_3O^+}]\\)
- [x] option-4 | تزيد pH
explanation:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

**تزيد pH**. HCOONa يضيف HCOO⁻، الأيون المشترك مع الحمض، فيحرك الاتزان نحو الحمض غير المتأين وفق لوتشاتلييه.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>C</mi><mi>O</mi><mi>O</mi><mi>H</mi><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><mi>H</mi><mi>C</mi><mi>O</mi><msup><mi>O</mi><mo>−</mo></msup></mrow></math>
\`\`\`


لذلك يقل الهيدرونيوم وترتفع pH؛ Ka لا تقل، بل تبقى ثابتة عند نفس الحرارة.

**المصدر:** الصفحات 41، 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p143-q02
title: الوحدة ٢ · الدرس ٦ · ص ١٤٣ · س ٢
kicker: وزاري ٢٠٢٣ د٣؛ ٢٠٢٤ دورة ثانية
reference: [الملزمة، ص ١٤٣](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=143)
question: ما أثر إضافة بلورات الملح KC إلى محلول الحمض الضعيف HC؟
- [ ] option-1 | نقصان قيمة pH للمحلول
- [ ] option-2 | زيادة تأين الحمض HC
- [ ] option-3 | زيادة قيمة \\(K_a\\) للحمض HC
- [x] option-4 | نقصان \\([\\mathrm{H_3O^+}]\\) في المحلول
explanation:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

الصحيح **ينقص [H₃O⁺]**. بلورات KC تضيف C⁻، الأيون المشترك مع الحمض HC.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mi>C</mi><mo>→</mo><msup><mi>K</mi><mo>+</mo></msup><mo>+</mo><msup><mi>C</mi><mo>−</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>C</mi><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><msup><mi>C</mi><mo>−</mo></msup></mrow></math>
\`\`\`


زيادة C⁻ تدفع الاتزان إلى اليسار وفق لوتشاتلييه؛ يقل تأين HC والهيدرونيوم وترتفع pH. لا يتغير Ka بثبوت الحرارة.

**المصدر:** الصفحات 41، 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p143-q03
title: الوحدة ٢ · الدرس ٦ · ص ١٤٣ · س ٣
kicker: وزاري ٢٠٢١ دورة أولى
reference: [الملزمة، ص ١٤٣](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=143)
question: أي الآتية يمكن إضافته لمحلول HF لزيادة تفككه في الماء؟
- [ ] option-1 | \\(\\mathrm{HCl}\\)
- [ ] option-2 | \\(\\mathrm{NaF}\\)
- [ ] option-3 | \\(\\mathrm{KNO_3}\\)
- [x] option-4 | \\(\\mathrm{NaOH}\\)
explanation:
قاعدة لوتشاتلييه: إزالة ناتج من اتزان تدفع التفاعل لتكوين مزيد منه. الحمض أو القاعدة القويان يستهلكان أحد أيوني الماء، فيؤثر ذلك في تأين المادة الضعيفة.

**NaOH**؛ OH⁻ يستهلك H₃O⁺ الناتج من تأين HF، فينحاز الاتزان يميناً لتعويضه ويزيد مقدار الحمض المتأين.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>F</mi><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><msup><mi>F</mi><mo>−</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup><mo>→</mo><mn>2</mn><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi></mrow></math>
\`\`\`


HCl و NaF يثبطان التأين بإضافة H₃O⁺ أو F⁻، و KNO₃ لا يستهلك أحد نواتج التأين.

**المصدر:** الصفحات 41، 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p143-q04
title: الوحدة ٢ · الدرس ٦ · ص ١٤٣ · س ٤
kicker: وزاري ٢٠٢١ د٣
reference: [الملزمة، ص ١٤٣](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=143)
question: ما المادة التي يمكن إضافتها إلى محلول القاعدة NH3 لزيادة تفككها؟
- [x] option-1 | \\(\\mathrm{HCl}\\)
- [ ] option-2 | \\(\\mathrm{NaOH}\\)
- [ ] option-3 | \\(\\mathrm{NaCl}\\)
- [ ] option-4 | \\(\\mathrm{NH_4Cl}\\)
explanation:
قاعدة لوتشاتلييه: إزالة ناتج من اتزان تدفع التفاعل لتكوين مزيد منه. الحمض أو القاعدة القويان يستهلكان أحد أيوني الماء، فيؤثر ذلك في تأين المادة الضعيفة.

**HCl**؛ يمد المحلول بالهيدرونيوم الذي يستهلك OH⁻ الناتج من تأين الأمونيا، فيتحرك الاتزان نحو اليمين لتعويضه.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><msub><mi>H</mi><mn>3</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><mi>N</mi><msubsup><mi>H</mi><mn>4</mn><mo>+</mo></msubsup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>H</mi><mn>3</mn></msub><msup><mi>O</mi><mo>+</mo></msup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup><mo>→</mo><mn>2</mn><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi></mrow></math>
\`\`\`


NaOH و NH₄Cl يضيفان أحد النواتج فيثبطان التأين، و NaCl لا يحقق الزيادة المطلوبة.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: chemistry-oj-p143-q05
title: الوحدة ٢ · الدرس ٦ · ص ١٤٣ · س ٥ · وزاري ٢٠٢٢ د٢
question: ما المقصود بقاعدة لوتشاتلييه؟
reference: [الملزمة، ص ١٤٣](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=143)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما المقصود بقاعدة لوتشاتلييه؟
solution:
**الإجابة:** إذا تعرض نظام متزن إلى مؤثر خارجي أحدث فيه اضطرابًا، فإن النظام يعدل من حالته إلى أن يصل إلى حالة اتزان جديدة للتخفيف من أثر ذلك المؤثر.

![نص الكتاب](assets/lessons/curriculum-evidence/7faf12dec56a40e326a4.webp)

**المصدر:** صفحة 42 من الكتاب.

:::

:::exam-question
id: chemistry-oj-p144-q01
title: الوحدة ٢ · الدرس ٦ · ص ١٤٤ · س ١ · وزاري ٢٠٢٣ مكرر٢
question: ما أثر إذابة ملح CH3NH3Cl في محلول القاعدة الضعيفة CH3NH2 على قيمة الرقم الهيدروجيني pH للمحلول؟ فسر إجابتك.
reference: [الملزمة، ص ١٤٤](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=144)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما أثر إذابة ملح CH3NH3Cl في محلول القاعدة الضعيفة CH3NH2 على قيمة الرقم الهيدروجيني pH للمحلول؟ فسر إجابتك.
solution:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

**تقل pH**. الأيون المشترك ينتج من القاعدة وملحها معاً، وهنا هو CH₃NH₃⁺.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><msub><mi>H</mi><mn>3</mn></msub><mi>N</mi><msub><mi>H</mi><mn>2</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><mi>C</mi><msub><mi>H</mi><mn>3</mn></msub><mi>N</mi><msubsup><mi>H</mi><mn>3</mn><mo>+</mo></msubsup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>C</mi><msub><mi>H</mi><mn>3</mn></msub><mi>N</mi><msub><mi>H</mi><mn>3</mn></msub><mi>C</mi><mi>l</mi><mo>→</mo><mi>C</mi><msub><mi>H</mi><mn>3</mn></msub><mi>N</mi><msubsup><mi>H</mi><mn>3</mn><mo>+</mo></msubsup><mo>+</mo><mi>C</mi><msup><mi>l</mi><mo>−</mo></msup></mrow></math>
\`\`\`


زيادة CH₃NH₃⁺ تدفع الاتزان لليسار وفق لوتشاتلييه لتخفيف الزيادة، فينخفض OH⁻ وتقل pH. Cl⁻ متفرج.

**المصدر:** صفحة 42 من الكتاب.

:::

:::exam-question
id: chemistry-oj-p144-q03
title: الوحدة ٢ · الدرس ٦ · ص ١٤٤ · س ٣ · وزاري ٢٠٢١ دورة ثانية
question: ما أثر إذابة ملح N2H5Cl في محلول القاعدة الضعيفة N2H4 على قيمة pH؟ وضح إجابتك.
reference: [الملزمة، ص ١٤٤](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=144)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما أثر إذابة ملح N2H5Cl في محلول القاعدة الضعيفة N2H4 على قيمة pH؟ وضح إجابتك.
solution:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

**تقل pH**؛ الملح يضيف N₂H₅⁺، الأيون المشترك مع تأين الهيدرازين.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>N</mi><mn>2</mn></msub><msub><mi>H</mi><mn>4</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>N</mi><mn>2</mn></msub><msubsup><mi>H</mi><mn>5</mn><mo>+</mo></msubsup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>N</mi><mn>2</mn></msub><msub><mi>H</mi><mn>5</mn></msub><mi>C</mi><mi>l</mi><mo>→</mo><msub><mi>N</mi><mn>2</mn></msub><msubsup><mi>H</mi><mn>5</mn><mo>+</mo></msubsup><mo>+</mo><mi>C</mi><msup><mi>l</mi><mo>−</mo></msup></mrow></math>
\`\`\`


حسب لوتشاتلييه ينحاز الاتزان إلى اليسار لتخفيف زيادة N₂H₅⁺، فيقل OH⁻ ويرتفع تركيز الهيدرونيوم وتقل pH.

**المصدر:** صفحة 42 من الكتاب.

:::

:::exam-question
id: chemistry-oj-p144-q04
title: الوحدة ٢ · الدرس ٦ · ص ١٤٤ · س ٤ · وزاري ٢٠٢٣ دورة ثالثة
question: ما أثر إذابة ملح N2H5NO3 إلى محلول القاعدة الضعيفة N2H4 على قيمة الرقم الهيدروجيني pH للمحلول؛ فسر إجابتك موضحًا بالمعادلات الكيميائية.
reference: [الملزمة، ص ١٤٤](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=144)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما أثر إذابة ملح N2H5NO3 إلى محلول القاعدة الضعيفة N2H4 على قيمة الرقم الهيدروجيني pH للمحلول؛ فسر إجابتك موضحًا بالمعادلات الكيميائية.
solution:
الأيون المشترك موجود أصلًا في اتزان التأين؛ زيادته تدفع الاتزان لاستهلاكه وفق لوتشاتلييه، فتقل درجة التأين. ثابت التأين لا يتغير ما دامت الحرارة ثابتة.

**تقل pH**؛ أيون N₂H₅⁺ الناتج من الملح مشترك مع ناتج تأين القاعدة.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>N</mi><mn>2</mn></msub><msub><mi>H</mi><mn>4</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>N</mi><mn>2</mn></msub><msubsup><mi>H</mi><mn>5</mn><mo>+</mo></msubsup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup></mrow></math>
\`\`\`





\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>N</mi><mn>2</mn></msub><msub><mi>H</mi><mn>5</mn></msub><mi>N</mi><msub><mi>O</mi><mn>3</mn></msub><mo>→</mo><msub><mi>N</mi><mn>2</mn></msub><msubsup><mi>H</mi><mn>5</mn><mo>+</mo></msubsup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>3</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`


لوتشاتلييه: زيادة ناتج تدفع الاتزان إلى اليسار، فيقل تأين القاعدة وينخفض OH⁻، ومن ثم تقل pH. NO₃⁻ لا يفسر التغير لأنه متفرج.

**المصدر:** صفحة 42 من الكتاب.

:::

:::mcq
id: chemistry-oj-p146-q01
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ١
kicker: وزاري ٢٠٢٥ د١
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146)
question: أي الأزواج الآتية يمكن أن يكون محلولًا منظمًا؟
- [ ] option-1 | \\(\\mathrm{HCl/NaCl}\\)
- [x] option-2 | \\(\\mathrm{HNO_2/NaNO_2}\\)
- [ ] option-3 | \\(\\mathrm{HNO_3/NaNO_3}\\)
- [ ] option-4 | \\(\\mathrm{H_2SO_4/NaHSO_4}\\)
explanation:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

**HNO₂/NaNO₂**؛ المحلول المنظم يجمع حمضاً ضعيفاً وقاعدته الملازمة بكمّيتين معتبرتين. HNO₂ ضعيف، و NaNO₂ يزود NO₂⁻. الأزواج الأخرى تحوي حمضاً قوياً، فلا تحقق التركيب المقصود.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p146-q02
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ٢
kicker: ٢٠٢٥ رزم غزة؛ ٢٠٢٤ رزم غزة
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146)
question: أي المحاليل التالية تقاوم التغير الكبير في pH بإضافة كميات قليلة من قاعدة قوية؟
- [ ] option-1 | \\(\\mathrm{HCN/KNO_3}\\)
- [x] option-2 | \\(\\mathrm{HF/KF}\\)
- [ ] option-3 | \\(\\mathrm{HClO_4/KClO_4}\\)
- [ ] option-4 | \\(\\mathrm{NaCl/HCl}\\)
explanation:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

**HF/KF**؛ HF حمض ضعيف و F⁻ من ملحه قاعدته الملازمة. الجزء الحمضي يستهلك OH⁻ القليل المضاف، والجزء القاعدي يستطيع استهلاك حمض مضاف؛ فيقاوم الخليط التغير الكبير في pH.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>H</mi><mi>F</mi><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup><mo>→</mo><msup><mi>F</mi><mo>−</mo></msup><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi></mrow></math>
\`\`\`


HCN/KNO₃ لا يحوي ملح الحمض نفسه، وبقية الأزواج حموضها قوية.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p146-q03
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ٣
kicker: صياغة تعليمية معدّلة
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146) · صياغة تعليمية معدّلة
question: أي ملح من البدائل يضاف إلى محلول الحمض الضعيف HNO₂ ليزوده مباشرة بأيون NO₂⁻ المشترك، فتتكون منظومة منظمة إذا بقي الحمض والقاعدة الملازمة بكميتين مناسبتين؟
- [ ] option-1 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>K</mi><mi>N</mi><msub><mi>O</mi><mn>3</mn></msub></mrow></math>\`
- [ ] option-2 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>H</mi><mi>C</mi><mi>l</mi></mrow></math>\`
- [x] option-3 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>K</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub></mrow></math>\`
- [ ] option-4 | \`mathml: <math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>K</mi><mi>O</mi><mi>H</mi></mrow></math>\`
explanation:
المحلول المنظم يتكون من حمض ضعيف وقاعدته الملازمة، مثل حمض ضعيف وأحد أملاحه.

الحمض هنا HNO₂، وقاعدته الملازمة NO₂⁻. الملح KNO₂ يذوب ويعطي هذا الأيون مباشرة.



\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>K</mi><mi>N</mi><msub><mi>O</mi><mn>2</mn></msub><mo>⟶</mo><msup><mi>K</mi><mo>+</mo></msup><mo>+</mo><mi>N</mi><msubsup><mi>O</mi><mn>2</mn><mo>−</mo></msubsup></mrow></math>
\`\`\`



يبقى في المحلول الزوج HNO₂/NO₂⁻ القادر على مقاومة التغير الكبير في pH عند إضافة كمية قليلة من حمض أو قاعدة.

الإجابة: KNO₂. أما KOH فليس ملح الأيون المشترك المطلوب في صياغة السؤال.
hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p146-q04
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ٤
kicker: وزاري ٢٠٢٣ مكرر٢
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146)
question: أي من أزواج المحاليل الآتية لا يصلح كمحلول منظم؟
- [ ] option-1 | \\(\\mathrm{NaHCO_3/H_2CO_3}\\)
- [ ] option-2 | \\(\\mathrm{N_2H_5^+/N_2H_4}\\)
- [x] option-3 | \\(\\mathrm{NaCl/HCl}\\)
- [ ] option-4 | \\(\\mathrm{F^-/HF}\\)
explanation:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

**NaCl/HCl** لا يصلح؛ HCl قوي و Cl⁻ قاعدة بالغة الضعف، فلا يشكلان الزوج الضعيف المنظم. الأزواج الأخرى حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p146-q05
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ٥
kicker: وزاري ٢٠٢١ دورة أولى
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146)
question: أي الأزواج الآتية لا يصلح كمحلول منظم؟
- [x] option-1 | \\(\\mathrm{HNO_3/KNO_3}\\)
- [ ] option-2 | \\(\\mathrm{HOCl/NaOCl}\\)
- [ ] option-3 | \\(\\mathrm{H_2CO_3/NaHCO_3}\\)
- [ ] option-4 | \\(\\mathrm{NH_3/NH_4Cl}\\)
explanation:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

**HNO₃/KNO₃** لا يصلح؛ HNO₃ قوي يتأين كلياً، فلا يبقى مخزون معتبر من حمض ضعيف يستهلك القاعدة المضافة. HOCl/OCl⁻ و H₂CO₃/HCO₃⁻ و NH₃/NH₄⁺ أزواج ضعيفة متلازمة تصلح ضمن حدود الكمية.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p146-q06
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ٦
kicker: وزاري ٢٠٢٠ د٢
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146)
question: أي الآتية يمكن أن يكون أحد المكونات الأساسية في محلول منظم؟
- [ ] option-1 | \\(\\mathrm{NaCl}\\)
- [x] option-2 | \\(\\mathrm{N_2H_4}\\)
- [ ] option-3 | \\(\\mathrm{HNO_3}\\)
- [ ] option-4 | \\(\\mathrm{KOH}\\)
explanation:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

**N₂H₄**؛ قاعدة ضعيفة يمكن جمعها مع ملح يمدها بحمضها الملازم N₂H₅⁺، مثل N₂H₅Cl، لتكوين منظم. NaCl ليس زوجاً منظماً بمفرده، و HNO₃ و KOH قويان.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p146-q07
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ٧
kicker: وزاري ٢٠١٩ د١؛ ٢٠٢٤ رزم غزة
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146)
question: أي الأزواج الآتية يصلح كمحلول منظم؟
- [x] option-1 | \\(\\mathrm{HCN/KCN}\\)
- [ ] option-2 | \\(\\mathrm{HCl/KOH}\\)
- [ ] option-3 | \\(\\mathrm{HNO_3/KNO_3}\\)
- [ ] option-4 | \\(\\mathrm{H_2O/OH^-}\\)
explanation:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

**HCN/KCN**؛ HCN حمض ضعيف، والملح يعطي CN⁻ قاعدته الملازمة. وجودهما معاً بكميتين معتبرتين يتيح استهلاك حمض قليل أو قاعدة قليلة مضافة، فتقاوم pH التغير الكبير. الأزواج الأخرى لا تحقق هذا التركيب.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::mcq
id: chemistry-oj-p146-q08
title: الوحدة ٢ · الدرس ٦ · ص ١٤٦ · س ٨
kicker: وزاري ٢٠١٩ دورة ثالثة
reference: [الملزمة، ص ١٤٦](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=146)
question: أي المحاليل الآتية يقاوم التغير الكبير في قيمة pH بإضافة كميات قليلة من قاعدة قوية؟

- [x] option-1 | \\(\\mathrm{NH_3/NH_4Cl}\\)
- [ ] option-2 | \\(\\mathrm{HClO_4/NaClO_4}\\)
- [ ] option-3 | \\(\\mathrm{KOH/KI}\\)
- [ ] option-4 | \\(\\mathrm{HCN/KNO_3}\\)
explanation:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

**NH₃/NH₄Cl**؛ قاعدة ضعيفة وحمضها الملازم من الملح، فيتكون منظم. NH₄⁺ يستهلك OH⁻ المضاف:


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>N</mi><msubsup><mi>H</mi><mn>4</mn><mo>+</mo></msubsup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup><mo>→</mo><mi>N</mi><msub><mi>H</mi><mn>3</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi></mrow></math>
\`\`\`


تتغير pH قليلاً؛ فالمحلول يقاوم التغير الكبير ولا يثبتها تمامًا، وقدرة التنظيم محدودة. الأزواج الأخرى لا تحتوي الزوج الضعيف المتلازم المطلوب.

**المصدر:** صفحة 42 من الكتاب.

hint: اقرأ المعطيات وحدد المطلوب، ثم قارن الخيارات الأصلية.
:::

:::exam-question
id: chemistry-oj-p147-q02
title: الوحدة ٢ · الدرس ٦ · ص ١٤٧ · س ٢ · وزاري ٢٠٢١؛ وزاري ٢٠١٩ د٢
question: وضح أهمية المحلول المنظم \\((\\mathrm{HCO_3^-/H_2CO_3})\\) في ضبط قيمة pH في دم الإنسان.
reference: [الملزمة، ص ١٤٧](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=147)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
وضح أهمية المحلول المنظم \\((\\mathrm{HCO_3^-/H_2CO_3})\\) في ضبط قيمة pH في دم الإنسان.
solution:
**الإجابة:** يساعد زوجH₂CO₃/HCO₃⁻ على إبقاءpH الدم في المدى٧٫٣٥–٧٫٤٥.

الشاهد: «تتراوح قيمة الرقم الهيدروجيني في الدم بين (7.35–7.45)، ويقوم عدد من الأنظمة بضبطpH في الدم، أهمها حمض الكربونيك مع أيون الكربونات الهيدروجينية التي تسلك كقاعدة.»

![شاهد الكتاب](assets/lessons/curriculum-evidence/b56c2e78e5be253e7ed3.webp)

**المصدر:** صفحة 42 من الكتاب.

:::

:::exam-question
id: chemistry-oj-p147-q03
title: الوحدة ٢ · الدرس ٦ · ص ١٤٧ · س ٣ · وزاري ٢٠٢١ د١
question: اكتب صيغة ملح يمكن إضافته إلى محلول القاعدة الضعيفة C6H5NH2 لتكوين محلول منظم.
reference: [الملزمة، ص ١٤٧](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=147)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
اكتب صيغة ملح يمكن إضافته إلى محلول القاعدة الضعيفة C6H5NH2 لتكوين محلول منظم.
solution:
المحلول المنظم يقاوم التغير الكبير فيpH عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يتكون من حمض ضعيف وقاعدته الملازمة، أو قاعدة ضعيفة وحمضها الملازم، بكميتين مناسبتين؛ يستهلك أحد المكونين الحمض المضاف والآخر القاعدة المضافة.

الأنيـلين قاعدة صيغتهاC₆H₅NH₂. حمضها الملازم ينتج بإضافة بروتون إلى ذرة النيتروجين؛ نضيف كلوريد الأنيـلينيوم ليزود المحلول بهذا الأيون.


\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>C</mi><mn>6</mn></msub><msub><mi>H</mi><mn>5</mn></msub><mi>N</mi><msub><mi>H</mi><mn>3</mn></msub><mi>C</mi><mi>l</mi><mo>→</mo><msub><mi>C</mi><mn>6</mn></msub><msub><mi>H</mi><mn>5</mn></msub><mi>N</mi><msubsup><mi>H</mi><mn>3</mn><mo>+</mo></msubsup><mo>+</mo><mi>C</mi><msup><mi>l</mi><mo>−</mo></msup></mrow></math>
\`\`\`




\`\`\`mathml
<math dir="ltr" xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><msub><mi>C</mi><mn>6</mn></msub><msub><mi>H</mi><mn>5</mn></msub><mi>N</mi><msub><mi>H</mi><mn>2</mn></msub><mo>+</mo><msub><mi>H</mi><mn>2</mn></msub><mi>O</mi><mo>⇌</mo><msub><mi>C</mi><mn>6</mn></msub><msub><mi>H</mi><mn>5</mn></msub><mi>N</mi><msubsup><mi>H</mi><mn>3</mn><mo>+</mo></msubsup><mo>+</mo><mi>O</mi><msup><mi>H</mi><mo>−</mo></msup></mrow></math>
\`\`\`


ملح مناسب هو **C₆H₅NH₃Cl**، مع بقاء كميتين متقاربتين من القاعدة وحمضها الملازم.
**المصدر:** الصفحات 29، 42 من الكتاب.

:::

:::exam-question
id: chemistry-oj-p147-q04
title: الوحدة ٢ · الدرس ٦ · ص ١٤٧ · س ٤ · تجريبي ٢٠٢٥ نابلس
question: ما وظيفة المحلول المنظم؟
reference: [الملزمة، ص ١٤٧](https://chatgpt.com/api/library/files/libfile_d6f8fd6cedc0819189c667772787424c/download#page=147)
answer-label: الإجابة والشرح من المجموعة المصححة
body:
ما وظيفة المحلول المنظم؟
solution:
**وظيفته:** تقليل التغير في الرقم الهيدروجيني عند إضافة كمية قليلة من حمض قوي أو قاعدة قوية. يستهلك المكون القاعدي البروتونات المضافة، ويعادل المكون الحمضي أيونات الهيدروكسيد المضافة. تتغير pH قليلًا، وليست ثابتة تمامًا؛ وإذا استهلكت الإضافة أحد المكونين تجاوزت قدرة المحلول على التنظيم.

[عرض نص الكتاب الأصلي](assets/lessons/curriculum-evidence/ced2e0be37974b116b7d.webp)

**المصدر:** صفحة 42 من الكتاب.

:::
`;

export default createChemistryLesson("u02-l06-common-ion-buffers", source);
