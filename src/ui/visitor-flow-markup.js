function r(a,{landing:t=!1}={}){return`<div class="visitor-shell${t?" visitor-shell--landing":""}">
    <div class="visitor-main" role="main">${a}</div>
  </div>`}function c(a){return`<span class="visitor-field-feedback"><small class="visitor-field-error" id="auth-${a}-error" data-field-error="${a}" aria-live="polite" hidden></small></span>`}function n(a,t,s="",o=!1){const p=`auth-${a}-error`;return`<label class="auth-field"><span${o?' class="visually-hidden"':""}>${t}</span><input name="${a}" aria-describedby="${p}" ${s}/>${c(a)}</label>`}function l(a,t){return`<button class="auth-back" type="button" ${t} aria-label="العودة إلى ${a}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg><span data-back-label>${a}</span></button>`}function i({submit:a=!1,complete:t=!1}={}){return`<div class="onboarding-actions">
    <button class="visitor-primary system-action system-action--primary system-action--prominent" type="${a?"submit":"button"}" ${t?"data-registration-continue":a?"":"data-step-next"}>${t?"متابعة إلى المواد":a?"إنشاء الحساب":"متابعة"}</button>
    ${t?"":'<div class="auth-links"><span>لديك حساب؟</span><button type="button" data-flow="sign-in">تسجيل الدخول</button></div>'}
  </div>`}function d(){return'<span class="onboarding-choice__marker" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 10 4 4 8-8"/></svg></span>'}function e(a,t,{trackPointer:s=!1,defer:o=!1}={}){return`<div class="onboarding-mascot onboarding-mascot--rocky"${a==="wave"?' data-rocky-repeat="2400"':""}${s?` data-rocky-pointer-track data-rocky-label="${t}"`:""}>
    <picture>
      <source media="(prefers-reduced-motion: reduce)" srcset="assets/mascot/rocky-standing-still-reduced.svg"/>
      <img${o?' loading="lazy" data-onboarding-image':""} src="assets/mascot/rocky-${a}.svg" alt="${t}"/>
    </picture>
  </div>`}function u(a,t,s,o){return r(`<section class="auth-page auth-page--sign-in">
    ${l("الرئيسية",'data-flow="entry"')}
    <div class="auth-card">
      <header class="auth-card__hero"><h1 id="visitor-title" tabindex="-1">${a}</h1><p>${t}</p></header>
      <div class="auth-card__body">${s}<div class="auth-links">${o}</div></div>
    </div>
  </section>`)}export function entryMarkup(){return r(`<section class="visitor-landing" aria-labelledby="visitor-title">
    <div class="visitor-landing__illustration"><picture>
      <source type="image/webp" media="(max-width:760px)" srcset="assets/mascot/hero-options/rocky-beach-mobile-01.webp" width="864" height="1152"/>
      <source type="image/webp" srcset="assets/mascot/hero-options/rocky-beach-desktop-01.webp" width="1672" height="941"/>
      <img src="assets/mascot/hero-options/rocky-beach-desktop-01.webp" alt="روكي على شاطئ ذهبي: يبحر بقارب، ويكتب على ورقة، ويسترخي بنظارة شمسية تحت نخلة" width="1672" height="941" fetchpriority="high" decoding="async" data-decorative-image/>
    </picture></div>
    <div class="visitor-landing__content">
      <h1 id="visitor-title" tabindex="-1">أكثر طريقة ممتعة للتعلّم والاستعداد للتوجيهي!</h1>
      <div class="visitor-landing__actions">
        <button class="visitor-primary system-action system-action--primary system-action--prominent" type="button" data-flow="register">ابدأ</button>
        <button class="visitor-secondary system-action system-action--secondary system-action--prominent" type="button" data-flow="sign-in">لدي حساب بالفعل</button>
      </div>
    </div>
  </section>`,{landing:!0})}export function registerMarkup(){return r(`<section class="auth-page onboarding-page" aria-label="إنشاء حساب">
    <div class="onboarding-nav">
      ${l("الرئيسية","data-onboarding-back")}
      <div class="onboarding-progress" role="progressbar" aria-label="تقدّم إنشاء الحساب" aria-valuemin="1" aria-valuemax="5" aria-valuenow="1" data-onboarding-progress>${Array.from({length:5},(a,t)=>`<span${t===0?' class="is-complete"':""}></span>`).join("")}</div>
    </div>
    <form class="auth-form onboarding-form" data-register-form novalidate>
      <section class="onboarding-step onboarding-step--hello" data-onboarding-step="intro">
        <div class="onboarding-step-content">
        ${e("wave","روكي يلوّح مرحبًا")}
        <h1 id="visitor-title" tabindex="-1">مرحبًا! أنا روكي</h1>
        <div class="onboarding-step-fields"><p>أُشبه حجارة ركام البيوت في غزة، وسأكون معك خطوة بخطوة.</p></div>
        </div>
        ${i()}
      </section>
      <section class="onboarding-step" data-onboarding-step="0" hidden>
        <div class="onboarding-step-content">
        ${e("standing-still","روكي يتابع حركة المؤشر",{trackPointer:!0,defer:!0})}
        <h1 tabindex="-1">بماذا تحب أن نناديك؟</h1>
        <div class="onboarding-step-fields">${n("username","اسمك",'autocomplete="username" maxlength="30" placeholder="مثال: أحمد" required',!0)}</div>
        </div>
        ${i()}
      </section>
      <section class="onboarding-step onboarding-step--picker" data-onboarding-step="1" hidden>
        <div class="onboarding-step-content">
        ${e("standing-still","روكي ينظر إلى اختيار المنهاج",{trackPointer:!0,defer:!0})}
        <h1 id="curriculum-question" tabindex="-1">أي منهاج تدرس؟</h1>
        <div class="onboarding-step-fields">
        <div class="onboarding-choice-grid onboarding-choice-grid--maps" role="radiogroup" aria-labelledby="curriculum-question" aria-describedby="auth-curriculum-error">
          <label class="onboarding-choice"><input type="radio" name="curriculum" value="gaza"/>${d()}<span class="onboarding-choice__visual"><img loading="lazy" data-onboarding-image src="assets/maps/gaza-map.svg" alt=""/></span><strong>غزة</strong></label>
          <label class="onboarding-choice"><input type="radio" name="curriculum" value="full-palestinian"/>${d()}<span class="onboarding-choice__visual"><img loading="lazy" data-onboarding-image src="assets/maps/palestine-map.svg" alt=""/></span><strong>فلسطين</strong></label>
        </div>
        ${c("curriculum")}
        </div>
        </div>
        ${i()}
      </section>
      <section class="onboarding-step onboarding-step--picker" data-onboarding-step="2" hidden>
        <div class="onboarding-step-content">
        ${e("standing-still","روكي ينظر إلى اختيار الفرع",{trackPointer:!0,defer:!0})}
        <h1 id="path-question" tabindex="-1">ما هو فرعك؟</h1>
        <div class="onboarding-step-fields">
        <div class="onboarding-choice-grid" role="radiogroup" aria-labelledby="path-question" aria-describedby="auth-path-error">
          <label class="onboarding-choice onboarding-choice--path onboarding-choice--scientific"><input type="radio" name="path" value="scientific"/>${d()}<span class="path-choice__visual" aria-hidden="true"><img loading="lazy" data-onboarding-image class="path-choice__art path-choice__art--pale" src="assets/paths/generated-scientific-light.webp" alt=""/><img loading="lazy" data-onboarding-image class="path-choice__art path-choice__art--saturated" src="assets/paths/generated-scientific.webp" alt=""/></span><strong>العلمي</strong></label>
          <label class="onboarding-choice onboarding-choice--path onboarding-choice--literary"><input type="radio" name="path" value="literary"/>${d()}<span class="path-choice__visual" aria-hidden="true"><img loading="lazy" data-onboarding-image class="path-choice__art path-choice__art--pale" src="assets/paths/generated-literary-light.webp" alt=""/><img loading="lazy" data-onboarding-image class="path-choice__art path-choice__art--saturated" src="assets/paths/generated-literary.webp" alt=""/></span><strong>الأدبي</strong></label>
        </div>
        ${c("path")}
        </div>
        </div>
        ${i()}
      </section>
      <section class="onboarding-step onboarding-step--compact" data-onboarding-step="3" hidden>
        <div class="onboarding-step-content">
        ${e("standing-still","روكي يتابع حركة المؤشر",{trackPointer:!0,defer:!0})}
        <h1 tabindex="-1">ما رقم هاتفك؟</h1>
        <div class="onboarding-step-fields">${n("phone","رقم الهاتف",'type="tel" autocomplete="tel" maxlength="32" inputmode="tel" dir="ltr" placeholder="0591234567" required',!0)}</div>
        </div>
        ${i()}
      </section>
      <section class="onboarding-step onboarding-step--compact" data-onboarding-step="4" hidden>
        <div class="onboarding-step-content">
        <div data-rocky-password>${e("standing-still","روكي يغطي عينيه ويختلس نظرة مرحة",{defer:!0})}</div>
        <h1 tabindex="-1">اختر كلمة مرور</h1>
        <div class="onboarding-step-fields">
        ${n("password","",'aria-label="كلمة المرور" type="password" autocomplete="new-password" maxlength="128" required',!0)}
        </div>
        </div>
        ${i({submit:!0})}
      </section>
      <div class="visitor-callout visitor-callout--error" data-auth-error role="alert" hidden></div>
    </form>
  </section>`)}export function accountCompleteMarkup(){return r(`<section class="auth-page onboarding-page onboarding-complete" aria-labelledby="onboarding-complete-title">
    <div class="onboarding-complete-content">
    ${e("happy-jump","روكي يقفز فرحًا")}
    <h1 id="onboarding-complete-title" tabindex="-1">رائع! أصبح كل شيء جاهزًا</h1>
    </div>
    ${i({complete:!0})}
  </section>`)}export function signInMarkup(){const a=`<form class="auth-form" data-sign-in-form novalidate>
    ${n("identifier","اسم المستخدم أو رقم الهاتف",'autocomplete="username" maxlength="254" required')}
    ${n("password","كلمة المرور",'type="password" autocomplete="current-password" maxlength="128" required')}
    <div class="auth-form-status"><div class="visitor-callout visitor-callout--error" data-auth-error role="alert" hidden></div></div>
    <button class="visitor-primary system-action system-action--primary system-action--prominent" type="submit">تسجيل الدخول</button>
  </form>`;return u("تسجيل الدخول","مرحبًا بعودتك. أدخل بيانات حسابك للمتابعة.",a,'<span>ليس لديك حساب؟</span><button type="button" data-flow="register">إنشاء حساب</button>')}
