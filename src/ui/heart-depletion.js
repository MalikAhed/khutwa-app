import { waitForImage } from "./media-ready.js";
import { mountSuperSubjectPicker, superSubjectPickerMarkup, superContactUrl } from "./super-subject-picker.js";
import { SUPER_PLANS, SUPER_BENEFITS } from "../domain/super-plans.js";
import { CORRECT_ANSWER_GEM_REWARD, QUESTION_NAVIGATION_LIMIT_ENABLED, nextHeartReset } from "../domain/learner-resources.js";
import { EXPLANATION_GEM_COST } from "../domain/question-explanations.js";
import { QUESTION_JUMPS_REQUIRE_SUPER } from '../domain/free-practice.js';

const subjectPlan = SUPER_PLANS.find(plan => plan.id === 'one-subject');
const infinityMark = '<svg class="super-benefit__infinity" viewBox="0 0 36 22" fill="none" aria-hidden="true"><path d="M18 11c-4-5-6-7-9-7a7 7 0 0 0 0 14c3 0 5-2 9-7s6-7 9-7a7 7 0 0 1 0 14c-3 0-5-2-9-7Z" stroke="white" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** One full-screen invitation shared by hearts and gems. */
export function mountHeartDepletion({ resourceStore, ownerId, studyKey, signal, returnFocus, autoShowEmpty = true, onReturnHome, onReturnToSubject }) {
  const controller = new AbortController();
  let dialog = null, opener = null, timer = null;
  let shownEmpty = false;
  const close = () => {
    if (dialog?.dataset.mode === 'gems') document.querySelector('.question-explanation-dialog[open]')?.close();
    dialog?.close(); dialog?.remove(); dialog = null;
    clearInterval(timer); timer = null;
    const underlying = [...document.querySelectorAll('dialog[open]')].at(-1);
    const target = underlying?.querySelector('button') || (opener?.isConnected ? opener : returnFocus);
    if (!controller.signal.aborted && target?.isConnected) target.focus({preventScroll:true});
  };
  const dismiss = () => {
    const returnHome = dialog?.dataset.mode === 'connection' || dialog?.dataset.mode === 'hearts';
    close();
    if (returnHome && !controller.signal.aborted) onReturnHome?.();
  };
  const copy = reason => ({
    hearts:['نفدت قلوب اليوم','قلوبك السبعة مشتركة على هذا المتصفح وتتجدد عند منتصف الليل بتوقيت فلسطين. يمكنك متابعة أول درسين في كل مادة دون قلوب.'],
    gems:['نفدت الجواهر','رصيد الجواهر غير كافٍ. افتح الشروح بلا حدود مع سوبر.'],
    navigation:['اختر أي سؤال مع سوبر','اختر أي سؤال مجانًا في أول درسين من كل مادة. في الدروس الأخرى، يمكنك الرجوع إلى الأسئلة التي حللتها، أو متابعة الأسئلة الجديدة بالترتيب. اختيار سؤال جديد من الشريط متاح مع سوبر.'],
    connection:['اتصل بالإنترنت للمتابعة','الإجابات المجانية تحتاج إلى الإنترنت. مع سوبر تدرس الدروس المحمّلة دون اتصال.'],
    offer:['طموحك يستاهل سوبر.','تعلّم بإيقاعك. كلّ المزايا في خطوة واحدة.'],
  })[reason] || ['خطوة سوبر','افتح كل مزايا التعلّم.'];
  const update = () => {
    if (controller.signal.aborted) return;
    const balance = resourceStore.get(ownerId,studyKey);
    const empty = !balance.unlimited && balance.hearts === 0;
    if (!empty) shownEmpty = false;
    if (!dialog) {
      if (autoShowEmpty && empty && !shownEmpty) show('hearts');
      return;
    }
    if (balance.unlimited) {close();return;}
    const reason = dialog.dataset.mode;
    const [title,message] = copy(reason);
    dialog.querySelector('[data-heart-title]').textContent = title;
    dialog.querySelector('[data-heart-status]').textContent = message;
    dialog.querySelector('[data-heart-resume]').textContent = reason === 'gems' ? 'العودة إلى سؤالي' : reason === 'hearts' || !onReturnToSubject ? 'العودة إلى الرئيسية' : 'العودة إلى مسار المادة';
    dialog.querySelector('[data-super-balance]').textContent = `حساب مجاني · ${balance.hearts} / ٧ قلوب · ${balance.gems} جوهرة`;
    dialog.querySelector('[data-gem-reward-progress]').textContent = `كل سؤال مختلف تحلّه بشكل صحيح يمنحك ${CORRECT_ANSWER_GEM_REWARD} جواهر.`;
    const timed = reason === 'hearts';
    dialog.querySelector('[data-heart-timer-wrap]').hidden = !timed;
    dialog.querySelector('[data-gem-balance-wrap]').hidden = reason !== 'gems';
    dialog.querySelector('[data-gem-balance]').textContent = balance.gems;
    const reset = reason === 'navigation' ? nextHeartReset(balance.navigationRefillAt || Date.now()) : balance.nextHeartAt;
    const seconds = Math.max(0,Math.ceil(((reset || Date.now()) - Date.now()) / 1000));
    dialog.querySelector('[data-heart-timer]').textContent = `${String(Math.floor(seconds / 3600)).padStart(2,'0')}:${String(Math.floor(seconds / 60) % 60).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`;
  };
  function show(reason = 'hearts') {
    if (controller.signal.aborted || resourceStore.get(ownerId,studyKey).unlimited) return;
    // A successful purchase may leave fewer than 50 gems. Only a rejected
    // purchase requests this invitation; spending gems must not open it.
    if (reason === 'gems' && resourceStore.get(ownerId,studyKey).gems >= EXPLANATION_GEM_COST) return;
    if (reason === 'navigation' && !QUESTION_NAVIGATION_LIMIT_ENABLED && !QUESTION_JUMPS_REQUIRE_SUPER) return;
    if (reason === 'empty') reason = 'hearts';
    if (dialog) {dialog.dataset.mode = reason;update();return;}
    if (reason === 'hearts' && resourceStore.get(ownerId,studyKey).hearts > 0) return;
    if (reason === 'hearts') shownEmpty = true;
    opener = document.activeElement;
    dialog = document.createElement('dialog');
    const active = dialog;
    active.className = 'heart-depletion super-invitation';
    active.dataset.mode = reason;
    active.dataset.state = 'offer';
    active.dir = 'rtl';
    active.tabIndex = -1;
    active.setAttribute('aria-labelledby','heart-depletion-title');
    active.innerHTML = `<div class="super-invitation__sky" aria-hidden="true"><picture><source media="(min-width: 761px)" srcset="assets/illustrations/sky-desktop.webp"><img class="super-invitation__landscape" src="assets/illustrations/sky-mobile.webp" alt="" width="841" height="1870"></picture></div>
    <div class="super-invitation__foreground" aria-hidden="true"><picture><source media="(min-width: 761px)" srcset="assets/illustrations/clouds-foreground-desktop.webp"><img class="super-invitation__foreground-image" src="assets/illustrations/clouds-foreground-mobile.webp" alt="" width="841" height="1870"></picture></div>
    <div class="heart-depletion__layout">
      <button class="heart-depletion__close app-close" type="button" data-heart-close aria-label="إغلاق">×</button>
      <section class="super-invitation__visual">
        <div class="super-invitation__banner">
          <img src="assets/illustrations/super-banner.svg" alt="" width="720" height="120" aria-hidden="true">
          <span>خطوة سوبر</span>
        </div>
        <div class="heart-depletion__scene" data-heart-scene>
          <div class="super-invitation__rocky">
            <img class="heart-depletion__rocky" data-heart-rocky src="assets/mascot/rocky-floating-banner.svg" alt="روكي بنظّاراته الشمسية يطفو مع القلوب والجواهر" width="800" height="620">
          </div>
        </div>
        <h1 id="heart-depletion-title" data-heart-title></h1>
        <div class="heart-depletion__refill" data-heart-timer-wrap><img src="assets/icons/nav-heart.svg" width="28" height="28" alt="" aria-hidden="true"><strong dir="ltr" data-heart-timer role="timer" aria-label="الوقت المتبقي لتجدّد القلوب عند منتصف الليل"></strong></div>
        <div class="heart-depletion__refill heart-depletion__refill--gems" data-gem-balance-wrap hidden><img src="assets/icons/nav-gem.svg" width="28" height="28" alt="" aria-hidden="true"><strong dir="ltr" data-gem-balance></strong><span class="super-invitation__sr-only">جوهرة</span></div>
        <p class="heart-depletion__status" data-heart-status role="status"></p>
        <p class="super-invitation__balance" data-super-balance></p>
      </section>
      <section class="heart-depletion__content" aria-label="اشتراكات خطوة سوبر">
        <h2 class="super-invitation__panel-title" hidden>كلّ المزايا، بلا حدود.</h2>
        <ul class="super-invitation__benefits">${SUPER_BENEFITS.map(benefit => `<li><span class="super-benefit__icon super-benefit__icon--${benefit.id}" aria-hidden="true"><img src="${benefit.icon}" width="48" height="48" alt="">${benefit.id === 'questions' ? infinityMark : ''}</span><span class="super-benefit__copy" aria-hidden="true"><strong>${benefit.title}</strong></span><span class="super-invitation__sr-only">${benefit.label}</span></li>`).join('')}</ul>
        <p class="super-invitation__reward">يتطلّب سوبر الاتصال مرة كل ٧ أيام لمزامنة التقدّم واستقبال التحديثات والمزايا الجديدة.</p>
        <fieldset class="super-invitation__plans"><legend class="super-invitation__sr-only">اختر خطتك السنوية</legend>${SUPER_PLANS.map((plan,index) => `<label class="super-plan ${plan.recommended ? 'super-plan--recommended' : ''}"><input type="radio" name="super-plan" value="${plan.id}" ${index === 0 ? 'checked' : ''}>${plan.recommended ? '<span class="super-plan__recommendation"><img src="assets/icons/dashboard-levels.svg" alt="" width="14" height="14">موصى بها</span>' : ''}<span class="super-plan__main"><span class="super-plan__label">${plan.label}</span><span class="super-plan__pricing"><span class="super-plan__price"><bdi dir="ltr"><span class="super-plan__amount">${plan.priceIls}${plan.recommended ? `<del class="super-plan__original-price" aria-hidden="true">${plan.separatePriceIls}<span class="super-plan__original-currency"> ₪</span></del>` : ''}</span> ₪ <small>/ ${plan.period}</small></bdi>${plan.recommended ? `<span class="super-invitation__sr-only">وفّر ${plan.savingsPercent}% مقابل شراء ٩ مواد منفصلة بسعر ${plan.separatePriceIls} شيكل سنويًا، مقابل ${plan.priceIls} شيكل للخطة الشاملة. النسبة مقربة.</span>` : ''}</span></span></span></label>`).join('')}</fieldset>
        <a class="system-action system-action--gold heart-depletion__activate" data-super-subscribe href="${superContactUrl(SUPER_PLANS[0])}" target="_blank" rel="noopener noreferrer"><span class="heart-depletion__activate-label">متابعة الاشتراك</span></a>
        <button class="system-action system-action--gold heart-depletion__activate" data-super-choose-subjects type="button" hidden><span class="heart-depletion__activate-label">متابعة الاشتراك</span></button>
        <p class="super-invitation__reward" data-gem-reward-progress></p>
        <section data-heart-trial hidden></section>
        <button class="system-action heart-depletion__resume" data-heart-resume type="button">العودة إلى سؤالي</button>
      </section>
    </div>${superSubjectPickerMarkup(subjectPlan.priceIls)}`;
    const picker = mountSuperSubjectPicker({ dialog:active, plan:subjectPlan, signal:controller.signal });
    active.addEventListener('cancel',event => {event.preventDefault();if (active.dataset.step === 'subjects') picker.back();else dismiss();},{signal:controller.signal});
    active.querySelector('[data-heart-close]').addEventListener('click',dismiss,{signal:controller.signal});
    active.querySelector('[data-heart-resume]').addEventListener('click',() => {
      const reason = active.dataset.mode;
      close();
      if (reason !== 'gems') (reason === 'hearts' ? onReturnHome : onReturnToSubject || onReturnHome)?.();
    },{signal:controller.signal});
    const updatePlanAction = () => {
      const plan = SUPER_PLANS.find(plan => plan.id === active.querySelector('[name=super-plan]:checked').value);
      active.querySelector('[data-super-subscribe]').hidden = plan.id === 'one-subject';
      active.querySelector('[data-super-choose-subjects]').hidden = plan.id !== 'one-subject';
    };
    active.querySelector('[data-super-choose-subjects]').addEventListener('click',() => picker.open(),{signal:controller.signal});
    active.querySelectorAll('[name=super-plan]').forEach(input => input.addEventListener('change',updatePlanAction,{signal:controller.signal}));
    document.body.append(active);update();active.showModal();
    active.focus({preventScroll:true});
    void Promise.all([...active.querySelectorAll('.heart-depletion__scene img,.super-invitation__banner img,.super-invitation__landscape,.super-invitation__foreground-image')].map(img => waitForImage(img,{signal:controller.signal}))).catch(() => {}).then(() => {
      if (!controller.signal.aborted && dialog === active) active.classList.add('is-ready');
    });
    timer = setInterval(update,1000);
  }
  const unsubscribe = resourceStore.subscribe(update);
  const destroy = () => {controller.abort();unsubscribe();close();signal?.removeEventListener('abort',destroy);};
  signal?.addEventListener('abort',destroy,{once:true});
  if (signal?.aborted) destroy();else update();
  return {show,showOffer:() => show('offer'),destroy};
}
