import { escapeHtml as esc } from "../lib/dom.js";
import { icon, number, date, studentRow, studentDetail } from './student-dashboard-view.js';

document.querySelectorAll('[data-icon]').forEach(element => { element.innerHTML = icon(element.dataset.icon); });

const list = document.querySelector('#students'), status = document.querySelector('#status');
const loadMore = document.querySelector('#load-more'), loadStatus = document.querySelector('#load-status');
const dialog = document.querySelector('#student-detail'), detail = document.querySelector('#detail-content');
const filters = { all:'جميع الطلاب', subscribed:'الطلاب المشتركون', free:'الحسابات المجانية', suspended:'الحسابات الموقوفة' };
let nextOffset = 0, search = '', filter = 'all', listRequest, detailRequest, activeStudent, saving = false;
let loadedStudents = [], loading = false, hasMore = false, detailStudentId;
const scrollObserver = new IntersectionObserver(entries => {
  if (entries.some(entry => entry.isIntersecting) && hasMore && !loading) void loadStudents({append:true});
}, {rootMargin:'0px 0px 400px 0px'});
async function request(url, {signal, body} = {}) {
  // Older iPhones do not support AbortSignal.any/timeout. Keep cancellation and
  // the full response-body deadline without depending on either static helper.
  const controller = new AbortController();
  const cancel = () => controller.abort();
  signal?.addEventListener('abort', cancel, {once:true});
  if (signal?.aborted) cancel();
  const timeout = setTimeout(cancel,20000);
  try {
    const response = await fetch(url, {signal:controller.signal, cache:'no-store',
      ...(body ? {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)} : {})});
    let data;
    try { data = await response.json(); } catch { throw new Error('تعذّر قراءة البيانات. حاول التحديث مجددًا.'); }
    if (!response.ok) throw Object.assign(new Error(data.error || 'تعذّر تحميل البيانات. حاول التحديث.'), {status:response.status});
    return data;
  } finally {clearTimeout(timeout);signal?.removeEventListener('abort',cancel);}
}

function renderStudents(students, append = false) {
  if (append && !students.length) return;
  if (!students.length) {
    list.innerHTML = `<div class="empty-state">${icon('users')}<h3>${search ? 'لا توجد نتائج لهذا البحث' : 'لا يوجد طلاب في هذه القائمة'}</h3><p>${search ? 'جرّب اسمًا آخر أو رقم هاتف الطالب.' : 'ستظهر الحسابات المطابقة هنا بعد التسجيل أو تحديث حالتها.'}</p></div>`;
    return;
  }
  const rows = students.map(studentRow).join('');
  if (append) list.querySelector('[role="list"]').insertAdjacentHTML('beforeend',rows);
  else list.innerHTML = `<div class="list-head" aria-hidden="true"><span>الطالب</span><span>المنهاج والمسار</span><span>الاشتراك</span><span>التواريخ</span><span>الملف</span></div><div role="list" aria-label="حسابات الطلاب">${rows}</div>`;
}

async function loadStudents({append = false} = {}) {
  if (append && (loading || !hasMore)) return;
  listRequest?.abort();
  const controller = new AbortController(); listRequest = controller;
  loading = true;
  scrollObserver.disconnect();
  loadMore.disabled = true;
  loadStatus.textContent = append ? 'جارٍ تحميل المزيد من الطلاب…' : '';
  if (!append) { status.textContent = 'جارٍ تحميل الطلاب…'; list.setAttribute('aria-busy', 'true'); }
  try {
    const students = append ? loadedStudents.slice() : [];
    const seen = new Set(students.map(student => student.id));
    const targetCount = append ? students.length + 50 : Math.max(50, loadedStudents.length);
    let cursor = append ? nextOffset : 0, data, more;
    do {
      data = await request(`/api/owner/students?${new URLSearchParams({search, filter, offset:String(cursor)})}`, {signal:controller.signal});
      if (controller.signal.aborted) return;
      for (const student of data.students) {
        if (!seen.has(student.id)) { students.push(student); seen.add(student.id); }
      }
      cursor += data.students.length;
      more = data.students.length > 0 && cursor < data.total;
    } while (more && students.length < targetCount);
    if (controller.signal.aborted) return;
    renderStudents(append ? students.slice(loadedStudents.length) : students, append);
    loadedStudents = students; nextOffset = cursor; hasMore = more;
    document.querySelector('#student-count').textContent = number(data.total);
    status.textContent = data.total ? `${number(data.total)} طالب · آخر تحديث ${new Date().toLocaleTimeString('ar', {hour:'2-digit', minute:'2-digit'})}` : search ? 'لا يوجد طلاب مطابقون للبحث.' : 'لا يوجد طلاب في هذه القائمة.';
    document.querySelector('#loaded-count').textContent = data.total ? `عرض ${number(students.length)} من ${number(data.total)} طالب` : '';
    loadStatus.textContent = '';
    loadMore.hidden = !hasMore;
    loadMore.textContent = 'تحميل المزيد';
    if (hasMore) scrollObserver.observe(loadMore);
  } catch (error) {
    if (!controller.signal.aborted) {
      if (append) {
        loadStatus.textContent = 'تعذّر تحميل المزيد. الطلاب المعروضون باقون؛ حاول مجددًا.';
        loadMore.textContent = 'إعادة المحاولة';
        return;
      }
      document.querySelector('#student-count').textContent = '—';
      document.querySelector('#loaded-count').textContent = '';
      loadMore.hidden = true; hasMore = false;
      status.textContent = error.message;
      list.innerHTML = `<div class="empty-state">${icon('shield')}<h3>تعذّر تحميل قائمة الطلاب</h3><p>${error.status === 401 ? 'انتهت الجلسة. سجّل الدخول بحساب المالك للمتابعة.' : error.status === 403 ? 'هذه المساحة متاحة لمالك التطبيق فقط.' : 'تحقّق من الاتصال، ثم اضغط تحديث القائمة.'}</p>${error.status === 401 ? '<a class="button button-soft" href="/?flow=sign-in">تسجيل الدخول</a>' : ''}</div>`;
    }
  } finally {
    if (listRequest === controller) { list.removeAttribute('aria-busy'); loading = false; loadMore.disabled = false; }
  }
}

function selectDetailTab(name, focus = false) {
  detail.querySelectorAll('[data-detail-tab]').forEach(button => {
    const selected = button.dataset.detailTab === name;
    button.setAttribute('aria-selected',String(selected));button.tabIndex = selected ? 0 : -1;
    detail.querySelector(`#panel-${button.dataset.detailTab}`).hidden = !selected;
    if (selected && focus) button.focus();
  });
}

function renderDetail(student, tab = 'overview') {
  detail.innerHTML = studentDetail(student);
  selectDetailTab(tab);
}

function updateScope() {
  const selected = detail.querySelector('[name="subscriptionScope"]:checked')?.value === 'selected';
  detail.querySelector('.subject-picker').hidden = !selected;
  const count = detail.querySelectorAll('[name="subscriptionSubjects"]:checked').length;
  detail.querySelector('[data-scope-summary]').textContent = selected ? `${number(count)} مواد مختارة` : 'سوبر متاح في جميع المواد.';
}

async function showStudent(id, tab = 'overview') {
  detailRequest?.abort();
  const controller = new AbortController(); detailRequest = controller; activeStudent = null; detailStudentId = id;
  detail.innerHTML = '<h2 id="detail-title">تفاصيل الطالب</h2><p role="status">جارٍ التحميل…</p>';
  if (!dialog.open) dialog.showModal();
  try {
    const student = await request(`/api/owner/students/${encodeURIComponent(id)}`, {signal:controller.signal});
    if (controller.signal.aborted) return;
    activeStudent = student;
    renderDetail(student,tab);
    if (!dialog.contains(document.activeElement)) document.querySelector('#close-detail').focus({preventScroll:true});
  } catch (error) {
    if (!controller.signal.aborted) detail.innerHTML = `<h2 id="detail-title">تفاصيل الطالب</h2><p role="alert">${esc(error.message)}</p><button type="button" class="button button-outline" data-retry-id="${esc(id)}">إعادة المحاولة</button>`;
  }
}

async function changeAccount(change) {
  if (saving || !activeStudent) return;
  const student = activeStudent;
  const controls = detail.querySelector('#account-controls');
  const actionStatus = detail.querySelector('#action-status');
  saving = true; controls.disabled = true;
  document.querySelector('#close-detail').disabled = true;
  actionStatus.textContent = 'جارٍ حفظ التغيير…';
  try {
    const result = await request(`/api/owner/students/${encodeURIComponent(student.id)}`, {body:{...change, version:student.version}});
    if (change.action === 'delete') {
      dialog.close();
      await loadStudents();
      status.textContent = result.cleanupPending ? 'حُذف الحساب. تنظيف بيانات التقدّم قيد المعالجة.' : 'حُذف حساب الطالب.';
    } else {
      await showStudent(student.id,'subscription');
      const message = detail.querySelector('#action-status');
      if (message) message.textContent = 'تم حفظ التغيير.';
      void loadStudents();
    }
  } catch (error) {
    actionStatus.textContent = error.message;
    // A timeout can happen after the server accepted a write. Require a fresh
    // version before another action rather than replaying an uncertain change.
    detail.querySelector('[data-reload-student]').hidden = false;
    if (!error.status || error.status === 409 || error.status >= 500) {
      actionStatus.textContent += ' حدّث بيانات الطالب للتحقّق من حالته قبل أي تغيير آخر.';
    } else controls.disabled = false;
  } finally { saving = false; document.querySelector('#close-detail').disabled = false; }
}

function confirmAction(action) {
  const labels = {revoke:['إلغاء اشتراك الطالب؟', 'سيصبح الحساب مجانيًا. يبقى تقدّمه محفوظًا.', 'تأكيد إلغاء الاشتراك'], suspend:['إيقاف وصول الطالب؟', 'لن يتمكن من الدخول حتى استعادة الوصول. يبقى تقدّمه محفوظًا.', 'تأكيد إيقاف الوصول'], restore:['استعادة وصول الطالب؟', 'سيتمكن الطالب من الدخول إلى حسابه مجددًا.', 'استعادة الوصول'], delete:['حذف الحساب نهائيًا؟', `سيُحذف حساب ${activeStudent.username} وتقدّمه نهائيًا. لا يمكن التراجع عن هذا الإجراء.`, 'تأكيد الحذف النهائي']};
  const [title, copy, label] = labels[action];
  const panel = detail.querySelector('#account-confirmation');
  panel.hidden = false;
  panel.innerHTML = `<h4 id="confirmation-title">${icon(action === 'delete' ? 'alert' : 'shield')}${title}</h4><p>${esc(copy)}</p><div class="account-actions"><button type="button" class="button ${action === 'delete' ? 'button-danger' : 'button-primary'}" data-confirm-action="${action}">${label}</button><button type="button" class="button button-outline" data-cancel-action>تراجع</button></div>`;
  panel.querySelector('[data-cancel-action]').focus();
  panel.scrollIntoView({block:'nearest'});
}

document.querySelector('#student-search').addEventListener('submit', event => {
  event.preventDefault(); search = document.querySelector('#search').value.trim(); loadedStudents = []; void loadStudents();
});
document.querySelector('#search').addEventListener('search', event => {
  if (!event.target.value) { search = ''; loadedStudents = []; void loadStudents(); }
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  filter = button.dataset.filter; loadedStudents = [];
  document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('#page-title').textContent = filters[filter];
  void loadStudents();
}));
document.querySelector('#refresh').addEventListener('click', () => void loadStudents());
loadMore.addEventListener('click', () => void loadStudents({append:true}));
list.addEventListener('click', event => {
  const button = event.target.closest('[data-student-id]');
  if (button) void showStudent(button.dataset.studentId);
});
detail.addEventListener('change', event => {
  if (event.target.name === 'subscriptionScope' || event.target.name === 'subscriptionSubjects') updateScope();
  if (event.target.id !== 'subscription-duration') return;
  const expiry = detail.querySelector('#subscription-expiry');
  const custom = event.target.value === 'custom';
  detail.querySelector('[data-expiry-field]').hidden = !custom;
  expiry.required = custom;
});
detail.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || saving) return;
  if (button.dataset.detailTab) selectDetailTab(button.dataset.detailTab);
  else if (button.dataset.retryId) void showStudent(button.dataset.retryId);
  else if (button.hasAttribute('data-reload-student') && activeStudent) void showStudent(activeStudent.id,'subscription');
  else if (button.dataset.accountAction) confirmAction(button.dataset.accountAction);
  else if (button.dataset.confirmAction) void changeAccount({action:button.dataset.confirmAction, ...(button.dataset.confirmAction === 'delete' ? {confirmUsername:activeStudent.username} : {})});
  else if (button.hasAttribute('data-cancel-action')) {
    detail.querySelector('#account-confirmation').hidden = true;
    detail.querySelector('[data-account-action]')?.focus();
  }
});
detail.addEventListener('submit', event => {
  event.preventDefault();
  if (saving || !activeStudent) return;
  const values = new FormData(event.target);
  if (event.target.id === 'subscription-form') {
    const duration = values.get('duration');
    const selected = values.get('subscriptionScope') === 'selected';
    const subscriptionSubjects = selected ? values.getAll('subscriptionSubjects') : null;
    if (selected && !subscriptionSubjects.length) {
      detail.querySelector('#action-status').textContent = 'اختر مادة واحدة على الأقل.';
      detail.querySelector('[name="subscriptionSubjects"]').focus();return;
    }
    const change = {action:'grant',duration,subscriptionSubjects};
    if (duration === 'custom') change.expiresAt = new Date(`${values.get('expiresAt')}T23:59:59`).toISOString();
    void changeAccount(change);
  }
});

detail.addEventListener('keydown', event => {
  const tab = event.target.closest('[data-detail-tab]');
  if (!tab || !['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...detail.querySelectorAll('[data-detail-tab]')];
  const index = tabs.indexOf(tab);
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : (index + (event.key === 'ArrowLeft' ? 1 : -1) + tabs.length) % tabs.length;
  selectDetailTab(tabs[next].dataset.detailTab,true);
});
document.querySelector('#close-detail').addEventListener('click', () => dialog.close());
dialog.addEventListener('cancel', event => { if (saving) event.preventDefault(); });
dialog.addEventListener('close', () => {
  detailRequest?.abort(); activeStudent = null; detail.replaceChildren();
  document.querySelector(`[data-student-id="${CSS.escape(detailStudentId || '')}"]`)?.focus({preventScroll:true});
});
window.addEventListener('pagehide', () => { listRequest?.abort(); detailRequest?.abort(); scrollObserver.disconnect(); });
window.addEventListener('pageshow', event => { if (event.persisted) location.reload(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden && !saving) void loadStudents(); });
void loadStudents();
