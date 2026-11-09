import { escapeHtml as esc } from '../lib/dom.js';
import { COURSE_SUBJECTS, getCourseSubjects } from '../data/course.js';
import { getSubjectRoadmapLesson } from '../data/subject-roadmaps.js';

const paths = {
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>',
  card:'<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 10h20M6 16h4"/>',
  book:'<path d="M12 5v16M3 3c4-1 6 0 9 2 3-2 5-3 9-2v16c-4-1-6 0-9 2-3-2-5-3-9-2Z"/>',
  shield:'<path d="m12 3-9 4v6c0 5 9 9 9 9s9-4 9-9V7Z"/><path d="m8 12 3 3 5-5"/>',
  home:'<path d="m3 10 9-7 9 7v10H3Zm6 10v-7h6v7"/>',
  search:'<circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5"/>',
  refresh:'<path d="M20 7v5h-5M4 17v-5h5M5.6 7a8 8 0 0 1 13-2L20 7M4 17l1.4 2a8 8 0 0 0 13-2"/>',
  arrow:'<path d="M19 12H5m6-6-6 6 6 6"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 11h18m-13 5h2m4 0h2"/>',
  close:'<path d="m6 6 12 12M6 18 18 6"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart:'<path d="M4 3v17h17M8 15v-4m5 4V7m5 8V5"/>',
  trophy:'<path d="M8 3h8v7a4 4 0 0 1-8 0ZM8 5H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 2v6m-4 0h8"/>',
  pause:'<circle cx="12" cy="12" r="9"/><path d="M9 8v8m6-8v8"/>',
  trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',
  alert:'<path d="m12 3 10 18H2ZM12 9v4m0 4h.01"/>',
  phone:'<path d="M8 3H4v4c0 7 6 13 13 13h4v-4l-5-2-2 2-6-6 2-2Z"/>',
  math:'<path d="M4 7h6M7 4v6m7-5 6 6m0-6-6 6M4 17h6m4-2h6m-6 4h6"/>',
  atom:'<ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/><circle cx="12" cy="12" r="1"/>',
  flask:'<path d="M9 3h6M10 3v7L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-9V3M7 15h10"/>',
  leaf:'<path d="M20 3C8 2 3 7 4 13a6 6 0 0 0 9 5c6-3 7-9 7-15ZM3 21 15 9m-7 7v-5m4 1h5"/>',
  monitor:'<rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8m-4-4v4M3 13h18"/>',
  language:'<path d="M3 5h11M8 3v2m4 0c-1 6-4 9-9 11m2-8c1 3 4 6 7 7m2 6 4-11 4 11m-6-4h4"/>',
  pen:'<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-4-4L5 15Zm1-5 4 4"/>',
  mosque:'<path d="M6 21V11h12v10M4 11h16M8 11c-3-4 4-5 4-9 0 4 7 5 4 9M10 21v-4a2 2 0 0 1 4 0v4M2 21V7m20 14V7M1 7h2m18 0h2"/>',
};
const subjectIcons = {mathematics:'math','mathematics-2':'math',physics:'atom',chemistry:'flask',biology:'leaf',ict:'monitor',english:'language',arabic:'pen','islamic-education':'mosque'};
export const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name] || paths.book}</svg>`;
export const number = value => new Intl.NumberFormat('ar').format(Number(value) || 0);
export const date = (value, empty = '—') => {
  if (!value) return empty;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? '—' : parsed.toLocaleDateString('ar', {year:'numeric',month:'short',day:'numeric'});
};
const subjectName = id => COURSE_SUBJECTS.find(subject => subject.id === id)?.name || id;
const pathLabel = student => student.path === 'scientific' ? 'الفرع العلمي' : 'الفرع الأدبي';
const curriculumLabel = student => student.curriculum === 'gaza' ? 'منهاج غزة' : 'المنهاج الفلسطيني الكامل';
export const suspended = student => student.accessDisabled || student.accountType === 'banned';
export const subscribed = student => student.accountType === 'subscribed';
const expired = student => !subscribed(student) && student.subscriptionType === 'subscribed';
const badge = student => `<span class="account-badge ${suspended(student) ? 'badge-suspended' : subscribed(student) ? 'badge-subscribed' : 'badge-free'}">${icon(suspended(student) ? 'pause' : subscribed(student) ? 'check' : 'book')}${suspended(student) ? 'موقوف' : subscribed(student) ? 'سوبر' : expired(student) ? 'اشتراك منتهٍ' : 'مجاني'}</span>`;
const avatar = student => `<span class="student-avatar tone-${Number(student.id) % 5}" aria-hidden="true">${esc(Array.from(student.username || '؟')[0].toLocaleLowerCase())}</span>`;
const scopeLabel = student => student.subscriptionSubjects == null ? 'جميع المواد' : student.subscriptionSubjects.map(subjectName).join('، ');

export function studentRow(student) {
  return `<article class="student" role="listitem"><div class="student-person">${avatar(student)}<div><h2>${esc(student.username)}</h2><p><bdi>${esc(student.phone || 'لا يوجد رقم هاتف')}</bdi></p></div></div>
    <div class="student-course"><span class="cell-primary">${curriculumLabel(student)}</span><span class="cell-secondary">${pathLabel(student)}</span></div>
    <div class="student-plan">${badge(student)}<span class="cell-secondary">${subscribed(student) || expired(student) ? esc(scopeLabel(student)) : 'دروس البداية وطاقة يومية'}</span>${student.subscriptionExpiresAt ? `<span class="cell-secondary mobile-expiry">الانتهاء: ${date(student.subscriptionExpiresAt)}</span>` : ''}</div>
    <div class="student-date"><span class="cell-primary">${date(student.createdAt)}</span><span class="cell-secondary">${student.subscriptionExpiresAt ? `الانتهاء: ${date(student.subscriptionExpiresAt)}` : subscribed(student) ? 'اشتراك دائم' : 'تاريخ التسجيل'}</span></div>
    <button type="button" class="button button-soft" data-student-id="${esc(student.id)}" aria-label="عرض تفاصيل ${esc(student.username)}"><span>فتح الملف</span>${icon('arrow')}</button></article>`;
}

function accountControls(student) {
  if (!Number.isSafeInteger(student.version)) return '<p class="notice">إدارة الاشتراك متاحة من خدمة الحسابات المتصلة.</p>';
  const hasSubscription = subscribed(student) || student.subscriptionType === 'subscribed';
  const selected = student.subscriptionSubjects;
  const pathSubjects = getCourseSubjects(student);
  // Retain existing grants outside this path when saving an older account.
  const choices = [...pathSubjects, ...COURSE_SUBJECTS.filter(subject => selected?.includes(subject.id) && !pathSubjects.includes(subject))];
  return `<section class="account-management"><div class="section-heading">${icon('card')}<div><h3>الاشتراك والمواد</h3><p>حدّد المواد والمدة، ثم احفظ التغيير.</p></div></div>
    <p id="action-status" role="status" aria-live="polite"></p><button type="button" class="button button-outline" data-reload-student hidden>${icon('refresh')}تحديث بيانات الطالب</button>
    <fieldset id="account-controls"><legend class="visually-hidden">إدارة الاشتراك والوصول</legend>
      <form id="subscription-form"><fieldset class="scope-options"><legend>المواد المشمولة</legend>
        <label><input type="radio" name="subscriptionScope" value="all" ${selected == null ? 'checked' : ''}>${icon('book')}<span>جميع المواد<small>اشتراك شامل</small></span></label>
        <label><input type="radio" name="subscriptionScope" value="selected" ${selected != null ? 'checked' : ''}>${icon('check')}<span>مواد محددة<small>اختيار مادة أو أكثر</small></span></label></fieldset>
        <fieldset class="subject-picker" ${selected == null ? 'hidden' : ''}><legend>اختر المواد</legend>${choices.map(subject => `<label><input type="checkbox" name="subscriptionSubjects" value="${subject.id}" ${selected?.includes(subject.id) ? 'checked' : ''}><span>${icon(subjectIcons[subject.id] || subjectIcons[subject.artwork] || 'book')}${subject.name}${pathSubjects.includes(subject) ? '' : ' (اشتراك سابق)'}</span></label>`).join('')}</fieldset>
        <p class="selection-summary" data-scope-summary role="status">${selected == null ? 'سوبر متاح في جميع المواد.' : `${number(selected.length)} مواد مختارة`}</p>
        <div class="subscription-fields"><label for="subscription-duration">مدة الاشتراك<select id="subscription-duration" name="duration"><option value="keep" ${hasSubscription ? '' : 'hidden'} ${subscribed(student) ? 'selected' : ''}>الاحتفاظ بتاريخ الانتهاء الحالي</option><option value="year" ${subscribed(student) ? '' : 'selected'}>سنة من اليوم</option><option value="month">شهر من اليوم</option><option value="week">أسبوع من اليوم</option><option value="permanent">دائم</option><option value="custom">تاريخ محدد</option></select></label>
        <label data-expiry-field hidden>تاريخ الانتهاء<input type="date" id="subscription-expiry" name="expiresAt" min="${new Date(Date.now() + 86400000).toISOString().slice(0,10)}"></label></div>
        <p class="field-help">${student.subscriptionExpiresAt ? `الانتهاء الحالي: ${date(student.subscriptionExpiresAt)}.` : hasSubscription ? 'الاشتراك الحالي دائم.' : 'تبدأ المدة عند الحفظ.'} اختيار مدة جديدة يستبدل تاريخ الانتهاء الحالي.</p>
        <button class="button button-primary" type="submit">${icon('check')}<span>${hasSubscription ? 'حفظ الاشتراك' : 'تفعيل الاشتراك'}</span></button>
      </form>
      <section class="access-controls"><div class="section-heading">${icon('shield')}<div><h3>الوصول إلى الحساب</h3><p>إيقاف الوصول يحتفظ بالتقدّم وبيانات الاشتراك.</p></div></div><div class="account-actions">${hasSubscription ? `<button type="button" class="button button-outline" data-account-action="revoke">${icon('card')}إلغاء الاشتراك</button>` : ''}<button type="button" class="button button-outline" data-account-action="${suspended(student) ? 'restore' : 'suspend'}">${icon(suspended(student) ? 'check' : 'pause')}${suspended(student) ? 'استعادة الوصول' : 'إيقاف الوصول'}</button></div></section>
      <details class="danger-zone"><summary>${icon('trash')}حذف الحساب</summary><p>حذف نهائي للحساب والتقدّم. استخدم إيقاف الوصول إذا أردت الاحتفاظ بالبيانات.</p><button type="button" class="button button-danger" data-account-action="delete">${icon('trash')}حذف حساب الطالب</button></details>
      <div id="account-confirmation" class="confirmation" role="alertdialog" aria-modal="false" aria-labelledby="confirmation-title" hidden></div>
    </fieldset></section>`;
}

export function studentDetail(student) {
  const parts = student.parts || [];
  return `<div class="detail-heading">${avatar(student)}<div><h2 id="detail-title">${esc(student.username)}</h2><p>رقم الحساب <bdi>#${esc(student.id)}</bdi> · ${pathLabel(student)}</p></div>${badge(student)}</div>
    <div class="detail-tabs" role="tablist" aria-label="ملف الطالب"><button id="tab-overview" role="tab" aria-selected="true" aria-controls="panel-overview" data-detail-tab="overview">${icon('users')}نظرة عامة</button><button id="tab-subscription" role="tab" aria-selected="false" aria-controls="panel-subscription" data-detail-tab="subscription" tabindex="-1">${icon('card')}الاشتراك</button><button id="tab-progress" role="tab" aria-selected="false" aria-controls="panel-progress" data-detail-tab="progress" tabindex="-1">${icon('chart')}التعلّم</button></div>
    <section id="panel-overview" role="tabpanel" aria-labelledby="tab-overview"><div class="section-heading">${icon('users')}<div><h3>بيانات الطالب</h3><p>معلومات الحساب وحالة الاشتراك الحالية.</p></div></div>
    <dl class="account-info">${[['رقم الهاتف',student.phone || 'غير مسجّل','phone'],['المنهاج',curriculumLabel(student),'book'],['تاريخ التسجيل',date(student.createdAt),'calendar'],['آخر نشاط',date(student.lastActivity,'لم يبدأ بعد'),'clock'],['المواد المشمولة',hasPlan(student) ? scopeLabel(student) : 'حساب مجاني','card'],['انتهاء الاشتراك',date(student.subscriptionExpiresAt,hasPlan(student) ? 'دائم' : 'لا يوجد اشتراك'),'calendar']].map(([label,value,name]) => `<div><dt>${icon(name)}${label}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>
    <div class="section-heading">${icon('chart')}<h3>ملخّص التعلّم</h3></div><dl class="metrics">${[['المستوى',student.level,'trophy'],['نقاط الخبرة',student.totalXp,'chart'],['سلسلة الأيام',student.streak,'calendar'],['إجابات صحيحة',student.questionsSolved,'check'],['أجزاء مكتملة',student.completedParts,'book'],['بحاجة للمراجعة',student.mustReviewCount,'refresh']].map(([label,value,name]) => `<div><dt>${icon(name)}${label}</dt><dd>${number(value)}</dd></div>`).join('')}</dl></section>
    <section id="panel-subscription" role="tabpanel" aria-labelledby="tab-subscription" hidden>${accountControls(student)}</section>
    <section id="panel-progress" role="tabpanel" aria-labelledby="tab-progress" hidden><div class="section-heading">${icon('book')}<div><h3>التقدّم حسب الدرس</h3><p>افتح أي جزء لعرض الإجابات والمراجعات.</p></div></div>${parts.length ? parts.map(part => {
      const lesson = getSubjectRoadmapLesson(part.subjectId,part.lessonId);
      const label = lesson?.parts.find(item => item.id === part.partId)?.label || part.partId;
      const review = part.review || [];
      return `<details class="part"><summary><span class="part-icon">${icon(part.completed ? 'check' : 'book')}</span><span><strong>${esc(subjectName(part.subjectId))} · ${esc(lesson?.label || part.lessonId)}</strong><small>${esc(label)}</small></span><span class="part-state">${part.completed ? 'مكتمل' : 'قيد التعلّم'}</span></summary><div class="part-content"><p>${number(part.rewardXp)} نقطة خبرة · ${number(part.completedStepIds?.length)} خطوة مكتملة · ${number(review.filter(item => item.solved).length)} إجابات صحيحة</p><p>آخر نشاط: ${date((part.activityDates || []).slice().sort().at(-1))}</p><ul class="question-history">${review.map(item => `<li>${icon(item.solved ? 'check' : 'alert')}<span><bdi>${esc(item.stepId)}</bdi><small>${item.solved ? 'إجابة صحيحة' : 'لم يُحل بعد'} · ${number(item.misses)} أخطاء${item.active ? ' · يحتاج مراجعة' : ''}</small></span></li>`).join('')}</ul></div></details>`;
    }).join('') : `<div class="empty-state">${icon('book')}<h3>لم يبدأ الطالب بالتعلّم بعد</h3><p>سيظهر نشاطه هنا بعد حل الأسئلة.</p></div>`}</section>`;
}
const hasPlan = student => subscribed(student) || student.subscriptionType === 'subscribed';
