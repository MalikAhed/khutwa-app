import { mountHeartDepletion } from './heart-depletion.js';

// One gate for free connectivity and paid lease/clock checks. Keep all pending work.
export function mountOfflineAccess({ service, resourceStore, reconnect, getStudyKey = () => undefined, onReturnHome }) {
  const dialog = document.createElement('dialog');
  dialog.className = 'offline-access';
  dialog.setAttribute('aria-labelledby', 'offline-access-title');
  dialog.innerHTML = '<h2 id="offline-access-title">اتصل بالإنترنت للمتابعة</h2><p data-offline-access-message></p><p>إجاباتك وتقدّمك المحفوظان على هذا الجهاز باقيان، وستُرسل الإجابات المعلّقة عند عودة الاتصال.</p><button type="button">تحقّق من الاتصال</button><p role="status" aria-live="polite"></p>';
  document.body.append(dialog);
  const returnHome = document.createElement('button');
  returnHome.type = 'button';returnHome.textContent = 'العودة إلى المواد المشمولة';returnHome.hidden = true;
  returnHome.addEventListener('click',() => {onReturnHome?.();check();});
  dialog.append(returnHome);
  dialog.addEventListener('cancel', event => event.preventDefault());
  let paywall = null, attemptedKey = null;
  const closePaywall = () => {paywall?.destroy();paywall = null;attemptedKey = null;};
  const check = (key = attemptedKey || getStudyKey()) => {
    dialog.querySelector('[data-offline-access-message]').textContent = service.getAccountType() === 'subscribed'
      ? 'اتصل بالإنترنت مرة كل ٧ أيام للتحقّق من الاشتراك، ومزامنة تقدّمك، واستقبال التحديثات والمزايا الجديدة. قد نطلب الاتصال أيضًا عند تغيّر ساعة الجهاز.'
      : 'الحساب المجاني يحتاج إلى اتصال بالإنترنت للدراسة. تحقّق من الاتصال للمتابعة؛ الدراسة دون إنترنت متاحة مع سوبر.';
    const grant = service.getAccessState(key);
    const scopeBlocked = !grant.allowed && grant.reason === 'valid' && service.isOffline?.() && key?.subjectId && service.getAccountType() === 'subscribed' && !service.hasSuperAccess?.(key);
    if (scopeBlocked) dialog.querySelector('[data-offline-access-message]').textContent = 'هذه المادة غير مشمولة باشتراكك. اتصل بالإنترنت لاستخدام القلوب المجانية، أو عد إلى المواد المشمولة للدراسة دون اتصال.';
    returnHome.hidden = !scopeBlocked || !onReturnHome;
    // Home stays available during an outage. Gate the study attempt before it
    // loads a subject, without spending or resetting any saved free hearts.
    const offlineUnpurchased = grant.reason === 'valid' && !grant.allowed && service.isOffline?.() && ['free','subscribed'].includes(service.getAccountType())
      && !service.hasSuperAccess?.(key);
    const allowed = offlineUnpurchased && !key?.subjectId ? true : grant.allowed;
    if (!allowed && offlineUnpurchased && key?.subjectId && resourceStore && !document.body.hasAttribute('data-startup')) {
      if (dialog.open) dialog.close();
      if (!paywall) {
        attemptedKey = key;
        paywall = mountHeartDepletion({resourceStore,ownerId:service.getLearnerProgressOwner(),studyKey:key,autoShowEmpty:false,
          onReturnHome:() => {closePaywall();onReturnHome?.();check();}});
        paywall.show('offline');
      }
      return false;
    }
    if (allowed || !offlineUnpurchased) closePaywall();
    if (!allowed && !document.body.hasAttribute('data-startup') && !dialog.open) dialog.showModal();
    if (allowed && dialog.open) dialog.close();
    return allowed;
  };
  const guard = event => {
    if (dialog.contains(event.target) || paywall?.contains(event.target) || check()) return;
    event.preventDefault(); event.stopImmediatePropagation();
  };
  for (const type of ['click','keydown','pointerdown']) document.addEventListener(type, guard, true);
  let retrying = false;
  const retry = async () => {
    if (retrying) return;
    retrying = true;
    const button = dialog.querySelector('button');
    button.disabled = true;
    dialog.querySelector('[role=status]').textContent = 'جارٍ التحقّق من الاتصال والحساب…';
    try { await reconnect(); } catch { /* Preserve the gate and allow retry. */ }
    finally { button.disabled = false; retrying = false; }
    if (!check()) dialog.querySelector('[role=status]').textContent = 'لم نتمكّن من التحقّق. تحقّق من الإنترنت واضبط تاريخ الجهاز ووقته تلقائيًا، ثم حاول مجددًا.';
  };
  dialog.querySelector('button').addEventListener('click', retry);
  window.addEventListener('online', retry);
  window.addEventListener('offline', () => check());
  window.addEventListener('focus', () => check());
  window.addEventListener('pageshow', () => check());
  window.addEventListener('storage', () => check());
  document.addEventListener('visibilitychange', () => check());
  document.addEventListener('app:ready', () => check());
  service.subscribe(() => check());
  setInterval(() => check(), 1000);
  return {checkStudy:key => check(key)};
}
