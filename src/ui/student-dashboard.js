import { escapeHtml as esc } from "../lib/dom.js";
import { getSubjectRoadmapLesson } from "../data/subject-roadmaps.js";

const icons = {
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
  card:'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 10h20M6 16h4"/>',
  book:'<path d="M12 5v16M3 3c4-1 6 0 9 2 3-2 5-3 9-2v16c-4-1-6 0-9 2-3-2-5-3-9-2Z"/>',
  shield:'<path d="M12 3 3 7v6c0 5 9 9 9 9s9-4 9-9V7Z"/><path d="m8 12 3 3 5-5"/>',
  home:'<path d="m3 10 9-7 9 7v10H3Zm6 10v-7h6v7"/>',
  search:'<circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/>',
  refresh:'<path d="M20 7v5h-5M4 17v-5h5M5.6 7a8 8 0 0 1 13-2L20 7M4 17l1.4 2a8 8 0 0 0 13-2"/>',
  arrow:'<path d="M19 12H5m6-6-6 6 6 6"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 11h18m-13 5h2m4 0h2"/>',
};
const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.users}</svg>`;
document.querySelectorAll('[data-icon]').forEach(element => { element.innerHTML = icon(element.dataset.icon); });

const list = document.querySelector('#students'), status = document.querySelector('#status');
const loadMore = document.querySelector('#load-more'), loadStatus = document.querySelector('#load-status');
const dialog = document.querySelector('#student-detail'), detail = document.querySelector('#detail-content');
const filters = { all:'جميع الطلاب', subscribed:'الطلاب المشتركون', free:'الحسابات المجانية', suspended:'الحسابات الموقوفة' };
const subjects = { ict:'تكنولوجيا المعلومات', mathematics:'الرياضيات 1', 'mathematics-2':'الرياضيات 2', physics:'الفيزياء', chemistry:'الكيمياء', biology:'الأحياء', arabic:'اللغة العربية', english:'اللغة الإنجليزية', 'islamic-education':'التربية الإسلامية' };
let nextOffset = 0, search = '', filter = 'all', listRequest, detailRequest, activeStudent, saving = false;
let loadedStudents = [], loading = false, hasMore = false, detailStudentId;
const scrollObserver = new IntersectionObserver(entries => {
  if (entries.some(entry => entry.isIntersecting) && hasMore && !loading) void loadStudents({append:true});
}, {rootMargin:'0px 0px 400px 0px'});
const number = value => new Intl.NumberFormat('ar').format(Number(value) || 0);
const date = (value, empty = '—') => {
  if (!value) return empty;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? '—' : parsed.toLocaleDateString('ar', {year:'numeric', month:'short', day:'numeric'});
};
const pathLabel = student => student.path === 'scientific' ? 'الفرع العلمي' : 'الفرع الأدبي';
const curriculumLabel = student => student.curriculum === 'gaza' ? 'منهاج غزة' : 'المنهاج الفلسطيني الكامل';
const suspended = student => student.accessDisabled || student.accountType === 'banned';
const subscribed = student => student.accountType === 'subscribed';
const badge = student => `<span class="account-badge ${suspended(student) ? 'badge-suspended' : subscribed(student) ? 'badge-subscribed' : 'badge-free'}">${suspended(student) ? 'موقوف' : subscribed(student) ? 'مشترك' : 'مجاني'}</span>`;
const avatar = student => `<span class="student-avatar tone-${Number(student.id) % 5}" aria-hidden="true">${esc([...student.username].slice(0, 2).join(''))}</span>`;
const metrics = student => `<dl class="metrics">${[
  ['المستوى', student.level], ['نقاط الخبرة', student.totalXp], ['سلسلة الأيام', student.streak],
  ['إجابات صحيحة', student.questionsSolved], ['أجزاء مكتملة', student.completedParts], ['بحاجة للمراجعة', student.mustReviewCount],
].map(([label, value]) => `<div><dt>${label}</dt><dd>${number(value)}</dd></div>`).join('')}</dl>`;

async function request(url, {signal, body} = {}) {
  const response = await fetch(url, {signal:signal ? AbortSignal.any([signal, AbortSignal.timeout(20000)]) : AbortSignal.timeout(20000), cache:'no-store',
    ...(body ? {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)} : {})});
  let data;
  try { data = await response.json(); } catch { throw new Error('تعذّر قراءة البيانات. حاول التحديث مجددًا.'); }
  if (!response.ok) throw Object.assign(new Error(data.error || 'تعذّر تحميل البيانات. حاول التحديث.'), {status:response.status});
  return data;
}

function renderStudents(students, append = false) {
  if (append && !students.length) return;
  if (!students.length) {
    list.innerHTML = `<div class="empty-state">${icon('users')}<h3>${search ? 'لا توجد نتائج لهذا البحث' : 'لا يوجد طلاب في هذه القائمة'}</h3><p>${search ? 'جرّب اسمًا آخر أو رقم هاتف الطالب.' : 'ستظهر الحسابات المطابقة هنا بعد التسجيل أو تحديث حالتها.'}</p></div>`;
    return;
  }
  const rows = students.map(student => `<tr class="student">
    <td><div class="student-person">${avatar(student)}<div><h2>${esc(student.username)}</h2><p><bdi>${esc(student.phone || 'لا يوجد رقم هاتف')}</bdi></p><span class="mobile-account-status">${badge(student)}</span></div></div></td>
    <td><span class="cell-primary">${curriculumLabel(student)}</span><span class="cell-secondary">${pathLabel(student)}</span></td>
    <td>${badge(student)}<span class="cell-secondary">${student.subscriptionExpiresAt ? `حتى ${date(student.subscriptionExpiresAt)}` : subscribed(student) ? 'اشتراك دائم' : '—'}</span></td>
    <td><span class="date-cell">${icon('calendar')}<span>${date(student.createdAt)}</span></span></td>
    <td><button type="button" class="button button-soft" data-student-id="${esc(student.id)}" aria-label="عرض تفاصيل ${esc(student.username)}">التفاصيل ${icon('arrow')}</button></td>
  </tr>`).join('');
  if (append) list.querySelector('tbody').insertAdjacentHTML('beforeend', rows);
  else list.innerHTML = `<div class="table-scroll" role="region" aria-label="سجل الطلاب" tabindex="0"><table class="students-table"><thead><tr><th scope="col">الطالب</th><th scope="col">المنهاج والمسار</th><th scope="col">الاشتراك</th><th scope="col">تاريخ التسجيل</th><th scope="col">الإجراءات</th></tr></thead><tbody>${rows}</tbody></table></div>`;
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

function accountControls(student) {
  // The isolated legacy SQLite adapter is read-only; the live API supplies a
  // version for its guarded subscription/access actions.
  if (!Number.isSafeInteger(student.version)) return '';
  const hasSubscription = subscribed(student) || student.subscriptionType === 'subscribed';
  return `<section class="account-management"><h3>إدارة الحساب</h3><p id="action-status" role="status" aria-live="polite"></p><button type="button" class="button button-outline" data-reload-student hidden>تحديث بيانات الطالب</button>
    <fieldset id="account-controls"><legend class="visually-hidden">الاشتراك والوصول</legend>
      <form id="subscription-form"><label for="subscription-duration">${hasSubscription ? 'تجديد أو تعديل الاشتراك' : 'تفعيل اشتراك'}</label><div class="subscription-fields"><select id="subscription-duration" name="duration"><option value="month">شهر</option><option value="week">أسبوع</option><option value="year">سنة</option><option value="permanent">دائم</option><option value="custom">تاريخ محدد</option></select><input type="date" id="subscription-expiry" name="expiresAt" aria-label="تاريخ انتهاء الاشتراك" min="${new Date(Date.now() + 86400000).toISOString().slice(0, 10)}" hidden><button class="button button-primary" type="submit">${hasSubscription ? 'حفظ الاشتراك' : 'تفعيل الاشتراك'}</button></div></form>
      <div class="account-actions">${hasSubscription ? '<button type="button" class="button button-outline" data-account-action="revoke">إلغاء الاشتراك</button>' : ''}<button type="button" class="button ${suspended(student) ? 'button-soft' : 'button-outline'}" data-account-action="${suspended(student) ? 'restore' : 'suspend'}">${suspended(student) ? 'استعادة الوصول' : 'إيقاف الوصول'}</button></div>
      <div id="account-confirmation" class="confirmation" hidden></div>
      <details class="danger-zone"><summary>حذف الحساب</summary><p>سيُحذف الحساب وتقدّمه نهائيًا. اكتب اسم الطالب لتأكيد الحذف.</p><form id="delete-student-form"><label for="confirm-username">اسم الطالب: <bdi>${esc(student.username)}</bdi></label><div class="subscription-fields"><input id="confirm-username" name="confirmUsername" autocomplete="off" required placeholder="اكتب الاسم كما هو"><button class="button button-danger" type="submit">حذف الحساب نهائيًا</button></div></form></details>
    </fieldset></section>`;
}

function renderDetail(student) {
  detail.innerHTML = `<div class="detail-heading">${avatar(student)}<div><h2 id="detail-title">${esc(student.username)}</h2><p><bdi>${esc(student.phone || 'لا يوجد رقم هاتف')}</bdi> · ${pathLabel(student)}</p></div>${badge(student)}</div>
    <dl class="account-info"><div><dt>المنهاج</dt><dd>${curriculumLabel(student)}</dd></div><div><dt>تاريخ التسجيل</dt><dd>${date(student.createdAt)}</dd></div><div><dt>انتهاء الاشتراك</dt><dd>${date(student.subscriptionExpiresAt, subscribed(student) ? 'دائم' : 'لا يوجد اشتراك')}</dd></div><div><dt>آخر نشاط</dt><dd>${date(student.lastActivity, 'لم يبدأ بعد')}</dd></div></dl>
    ${accountControls(student)}<section class="progress-section"><h3>رحلة التعلّم</h3>${metrics(student)}<h3>التقدّم حسب الدرس</h3>${student.parts?.length ? student.parts.map(part => {
      const lesson = getSubjectRoadmapLesson(part.subjectId, part.lessonId);
      const label = lesson?.parts.find(item => item.id === part.partId)?.label || part.partId;
      return `<section class="part"><h4>${esc(subjects[part.subjectId] || part.subjectId)} · ${esc(lesson?.label || part.lessonId)} · ${esc(label)}</h4>
        <p>${part.completed ? 'مكتمل' : 'قيد التعلّم'} · ${number(part.rewardXp)} XP · ${number(part.completedStepIds?.length)} خطوة مكتملة</p>
        <p>أيام النشاط: <bdi>${esc((part.activityDates || []).join('، ') || '—')}</bdi></p>
        <details><summary>سجل الأسئلة (${number(part.review?.length)})</summary><ul>${(part.review || []).map(item => `<li><bdi>${esc(item.stepId)}</bdi><br>${item.solved ? 'تمت الإجابة بشكل صحيح' : 'لم تُحل بشكل صحيح بعد'} · أخطاء: ${number(item.misses)} · ${item.active ? 'بحاجة للمراجعة' : 'لا توجد مراجعة معلّقة'}</li>`).join('')}</ul></details></section>`;
    }).join('') : '<p class="no-progress">لم يبدأ الطالب بالتعلّم بعد.</p>'}</section>`;
}

async function showStudent(id) {
  detailRequest?.abort();
  const controller = new AbortController(); detailRequest = controller; activeStudent = null; detailStudentId = id;
  detail.innerHTML = '<h2 id="detail-title">تفاصيل الطالب</h2><p role="status">جارٍ التحميل…</p>';
  if (!dialog.open) dialog.showModal();
  try {
    const student = await request(`/api/owner/students/${encodeURIComponent(id)}`, {signal:controller.signal});
    if (controller.signal.aborted) return;
    activeStudent = student;
    renderDetail(student);
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
      await showStudent(student.id);
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
  const labels = {revoke:['إلغاء اشتراك الطالب؟', 'سيصبح الحساب مجانيًا. يبقى تقدّمه محفوظًا.', 'إلغاء الاشتراك'], suspend:['إيقاف وصول الطالب؟', 'لن يتمكن من الدخول حتى استعادة الوصول. يبقى تقدّمه محفوظًا.', 'إيقاف الوصول'], restore:['استعادة وصول الطالب؟', 'سيتمكن الطالب من الدخول إلى حسابه مجددًا.', 'استعادة الوصول']};
  const [title, copy, label] = labels[action];
  const panel = detail.querySelector('#account-confirmation');
  panel.hidden = false;
  panel.innerHTML = `<h4>${title}</h4><p>${copy}</p><div class="account-actions"><button type="button" class="button button-primary" data-confirm-action="${action}">${label}</button><button type="button" class="button button-outline" data-cancel-action>تراجع</button></div>`;
  panel.querySelector('[data-cancel-action]').focus();
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
  if (event.target.id !== 'subscription-duration') return;
  const expiry = detail.querySelector('#subscription-expiry');
  expiry.hidden = ! (expiry.required = event.target.value === 'custom');
});
detail.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || saving) return;
  if (button.dataset.retryId) void showStudent(button.dataset.retryId);
  else if (button.hasAttribute('data-reload-student') && activeStudent) void showStudent(activeStudent.id);
  else if (button.dataset.accountAction) confirmAction(button.dataset.accountAction);
  else if (button.dataset.confirmAction) void changeAccount({action:button.dataset.confirmAction});
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
    const change = {action:'grant', duration};
    if (duration === 'custom') change.expiresAt = new Date(`${values.get('expiresAt')}T23:59:59`).toISOString();
    void changeAccount(change);
  } else if (event.target.id === 'delete-student-form') {
    const input = detail.querySelector('#confirm-username');
    input.setCustomValidity(input.value === activeStudent.username ? '' : 'اكتب اسم الطالب كما هو لتأكيد الحذف.');
    if (input.reportValidity()) void changeAccount({action:'delete', confirmUsername:input.value});
  }
});
detail.addEventListener('input', event => { if (event.target.id === 'confirm-username') event.target.setCustomValidity(''); });
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
