// One gate for free connectivity and paid lease/clock checks. Keep all pending work.
export function mountOfflineAccess({ service, reconnect }) {
  const dialog = document.createElement('dialog');
  dialog.className = 'offline-access';
  dialog.setAttribute('aria-labelledby', 'offline-access-title');
  dialog.innerHTML = '<h2 id="offline-access-title">اتصل بالإنترنت للمتابعة</h2><p data-offline-access-message></p><p>إجاباتك وتقدّمك المحفوظان على هذا الجهاز باقيان، وستُرسل الإجابات المعلّقة عند عودة الاتصال.</p><button type="button">تحقّق من الاتصال</button><p role="status" aria-live="polite"></p>';
  document.body.append(dialog);
  dialog.addEventListener('cancel', event => event.preventDefault());
  const check = () => {
    dialog.querySelector('[data-offline-access-message]').textContent = service.getAccountType() === 'subscribed'
      ? 'اتصل بالإنترنت مرة كل ٧ أيام للتحقّق من الاشتراك، ومزامنة تقدّمك، واستقبال التحديثات والمزايا الجديدة. قد نطلب الاتصال أيضًا عند تغيّر ساعة الجهاز.'
      : 'الحساب المجاني يحتاج إلى اتصال بالإنترنت للدراسة. تحقّق من الاتصال للمتابعة؛ الدراسة دون إنترنت متاحة مع سوبر.';
    const allowed = service.getAccessState().allowed;
    if (!allowed && !document.body.hasAttribute('data-startup') && !dialog.open) dialog.showModal();
    if (allowed && dialog.open) dialog.close();
    return allowed;
  };
  const guard = event => {
    if (dialog.contains(event.target) || check()) return;
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
  window.addEventListener('offline', check);
  window.addEventListener('focus', check);
  window.addEventListener('pageshow', check);
  window.addEventListener('storage', check);
  document.addEventListener('visibilitychange', check);
  document.addEventListener('app:ready', check);
  service.subscribe(check);
  setInterval(check, 1000);
}
