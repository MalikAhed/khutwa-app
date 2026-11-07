import { COURSE_SUBJECTS } from '../data/course.js';
import { escapeHtml } from '../lib/dom.js';

export function superContactUrl(plan, subjects = [], learnerName = '') {
  const message = subjects.length
    ? `مرحبا، كيف بقدر أشترك بخطوة سوبر؟\nالمواد المختارة: ${subjects.map(subject => subject.name).join('، ')}.\nعدد المواد: ${subjects.length}.\nالمجموع: ${subjects.length * plan.priceIls} شيكل بالسنة (${plan.priceIls} شيكل لكل مادة).`
    : `مرحبا، كيف بقدر أشترك بخطوة سوبر؟\nبدي اشتراك ${plan.label} بـ${plan.priceIls} شيكل بالسنة.`;
  const name = String(learnerName || '').trim();
  const contactMessage = name ? `${message}\nاسم الطالب: ${name}` : message;
  return `https://wa.me/972598419620?text=${encodeURIComponent(contactMessage)}`;
}

export function superSubjectPickerMarkup(priceIls) {
  return `<section class="super-subject-picker" data-super-picker hidden aria-labelledby="super-subject-picker-title">
    <header class="super-subject-picker__header">
      <button class="auth-back" type="button" data-super-picker-back><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5"/></svg><span>العودة إلى الخطط</span></button>
      <h2 id="super-subject-picker-title" tabindex="-1">اختر موادك</h2>
      <p>${priceIls} ₪ لكل مادة في السنة</p>
    </header>
    <fieldset class="onboarding-choice-grid super-subject-picker__grid"><legend class="super-invitation__sr-only">اختر المواد التي تريد الاشتراك بها</legend>
      ${COURSE_SUBJECTS.filter(subject => subject.status === 'available').map(subject => `<label class="onboarding-choice super-subject-picker__card"><input type="checkbox" name="super-subject" value="${escapeHtml(subject.id)}"><span class="onboarding-choice__marker" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="m4 10 4 4 8-8"/></svg></span><img src="assets/subjects/super-icons/${escapeHtml(subject.artwork || subject.id)}.webp" alt="" width="160" height="160"><strong>${escapeHtml(subject.name)}</strong></label>`).join('')}
    </fieldset>
    <footer class="super-subject-picker__footer"><div class="super-subject-picker__footer-content">
      <p class="super-subject-picker__summary" role="status" aria-live="polite" aria-atomic="true"><span class="super-subject-picker__selection"><span>المواد المختارة</span><bdi class="super-subject-picker__count" data-super-selected-count>0</bdi></span><span>المجموع: <strong><bdi data-super-total>0</bdi> ₪</strong><small> / سنة</small></span></p>
      <a class="system-action system-action--gold heart-depletion__activate" data-super-picker-continue target="_blank" rel="noopener noreferrer" aria-disabled="true" tabindex="-1"><span class="heart-depletion__activate-label">متابعة الاشتراك</span></a>
    </div></footer>
  </section>`;
}

export function mountSuperSubjectPicker({ dialog, plan, signal, learnerName = '' }) {
  const picker = dialog.querySelector('[data-super-picker]');
  const layout = dialog.querySelector('.heart-depletion__layout');
  const continueLink = picker.querySelector('[data-super-picker-continue]');
  let offerScroll = 0;
  const update = () => {
    const ids = new Set([...picker.querySelectorAll('[name="super-subject"]:checked')].map(input => input.value));
    const subjects = COURSE_SUBJECTS.filter(subject => ids.has(subject.id));
    picker.querySelector('[data-super-selected-count]').textContent = subjects.length;
    picker.querySelector('[data-super-total]').textContent = subjects.length * plan.priceIls;
    continueLink.setAttribute('aria-disabled', String(!subjects.length));
    continueLink.tabIndex = subjects.length ? 0 : -1;
    if (subjects.length) continueLink.href = superContactUrl(plan, subjects, learnerName);
    else continueLink.removeAttribute('href');
  };
  const back = () => {
    picker.hidden = true;
    layout.hidden = false;
    dialog.dataset.step = 'plans';
    dialog.setAttribute('aria-labelledby', 'heart-depletion-title');
    dialog.scrollTop = offerScroll;
    dialog.querySelector('[data-super-choose-subjects]').focus({ preventScroll:true });
  };
  picker.addEventListener('change', update, { signal });
  picker.querySelector('[data-super-picker-back]').addEventListener('click', back, { signal });
  continueLink.addEventListener('click', event => {
    if (continueLink.getAttribute('aria-disabled') === 'true') event.preventDefault();
  }, { signal });
  return {
    open() {
      offerScroll = dialog.scrollTop;
      layout.hidden = true;
      picker.hidden = false;
      dialog.dataset.step = 'subjects';
      dialog.setAttribute('aria-labelledby', 'super-subject-picker-title');
      update();
      dialog.scrollTop = 0;
      picker.querySelector('h2').focus({ preventScroll:true });
    },
    back,
  };
}
