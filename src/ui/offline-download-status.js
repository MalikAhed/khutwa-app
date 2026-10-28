// Presentation state survives dashboard rerenders; downloads remain owned by the queue.
let state = { completed:0, total:0, phase:'checking' };
const presentation = () => {
  const ready = state.phase === 'ready';
  const percent = ready ? 100 : Math.min(99, Math.floor(state.completed / Math.max(1,state.total) * 100));
  const title = state.phase === 'checking' ? 'نفحص المحفوظ' : ready ? 'جاهز دون إنترنت' : state.phase === 'waiting' ? 'بانتظار الاتصال' : state.phase === 'finishing' ? 'اللمسات الأخيرة' : 'نجهّز التطبيق';
  const detail = ready ? 'اكتمل 100٪' : state.phase === 'waiting' ? 'سنحاول تلقائيًا' : state.phase === 'finishing' ? 'نتحقّق من الحفظ' : 'دون إنترنت';
  return { ready, percent, title, detail };
};
export function renderOfflineDownloadStatus() {
  const {ready,percent,title,detail} = presentation();
  return `<aside class="offline-download-status" data-offline-download-status data-phase="${state.phase}" aria-label="تجهيز التطبيق دون إنترنت"><span class="offline-download-status__ring" role="progressbar" aria-label="تجهيز الفتح دون إنترنت" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}" style="--offline-progress:${percent}"><svg viewBox="0 0 48 48" aria-hidden="true"><circle class="offline-download-status__track" cx="24" cy="24" r="20"/><circle class="offline-download-status__value" cx="24" cy="24" r="20" pathLength="100"/><path class="offline-download-status__check" d="m15 24 6 6 12-13"/></svg><bdi class="offline-download-status__number">${state.phase === 'checking' ? '…' : `${percent}%`}</bdi></span><span class="offline-download-status__copy"><strong>${title}</strong><span>${detail}</span></span><span class="visually-hidden" role="status">${ready ? 'جاهز للفتح دون إنترنت' : ''}</span></aside>`;
}
export function updateOfflineDownloadStatus(next) {
  if (state.completed === next.completed && state.total === next.total && state.phase === next.phase) return;
  state = { ...next };
  const {ready,percent,title,detail} = presentation();
  for (const card of document.querySelectorAll('[data-offline-download-status]')) {
    card.dataset.phase = state.phase;
    const ring = card.querySelector('[role=progressbar]');
    ring.setAttribute('aria-valuenow', String(percent));
    ring.style.setProperty('--offline-progress', String(percent));
    card.querySelector('.offline-download-status__number').textContent = `${percent}%`;
    card.querySelector('strong').textContent = title;
    card.querySelector('.offline-download-status__copy > span').textContent = detail;
    const announcement = card.querySelector('[role=status]');
    const text = ready ? 'جاهز للفتح دون إنترنت' : '';
    if (announcement.textContent !== text) announcement.textContent = text;
  }
}
