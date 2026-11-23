import { escapeHtml as esc } from '../lib/dom.js';
import { COURSE_SUBJECTS } from '../data/course.js';
import { getSubjectRoadmapLesson } from '../data/subject-roadmaps.js';
import { icon,number,date } from './student-dashboard-view.js';

const reasons = {question:'خطأ في السؤال',answer:'خطأ في الإجابة',display:'مشكلة في العرض',other:'ملاحظة أخرى'};

function reportCard(report) {
  const lesson = getSubjectRoadmapLesson(report.subjectId,report.lessonId);
  const subject = COURSE_SUBJECTS.find(item => item.id === report.subjectId)?.name || report.subjectId;
  const part = lesson?.parts.find(item => item.id === report.partId)?.label || report.partId;
  return `<article class="report-card" data-report-key="${esc(`${report.accountId}:${report.id}`)}">
    <div class="report-heading"><span class="report-reason">${icon('flag')}${esc(reasons[report.reason] || report.reason)}</span><time datetime="${esc(report.createdAt)}">${date(report.createdAt)}</time></div>
    <h3>${esc(subject)} <span>· ${esc(lesson?.label || report.lessonId)}</span></h3>
    <p class="report-part">${esc(part)}</p>
    <p class="report-note">${report.details ? esc(report.details) : '<span>لم يضف الطالب تفاصيل.</span>'}</p>
    <div class="report-meta"><span>${icon('users')}${esc(report.username)}</span><bdi title="معرّف السؤال">${esc(report.stepId)}</bdi></div>
    <details class="report-question" data-report-preview><summary>${icon('book')}عرض السؤال والإجابة${icon('arrow')}</summary><div class="report-question-content" data-report-content role="region" aria-label="السؤال المبلّغ عنه"></div></details>
  </article>`;
}

async function renderQuestionPreview(container,report) {
  const [{loadSubjectLessonPart},{parseLessonMarkdown},{renderMarkdownDocument,renderLessonInline},{questionExplanation}] = await Promise.all([
    import('../data/lessons/subject-lesson-registry.js'),import('../markdown/lesson-authoring.js'),
    import('../markdown/renderer.js'),import('../domain/question-explanations.js'),
  ]);
  const lesson = await loadSubjectLessonPart(report.subjectId,report.lessonId,report.partId);
  const step = lesson?.authoringSource && parseLessonMarkdown(lesson.authoringSource).steps.find(item => item.id === report.stepId);
  if (!step?.content) throw new Error('السؤال غير متاح في المحتوى الحالي. معرّفه محفوظ أعلاه.');
  if (!container.isConnected) return;
  const locale = lesson.locale || (report.subjectId === 'english' ? 'en' : 'ar');
  const inline = text => renderLessonInline(text || '',{locale});
  const markdown = text => renderMarkdownDocument(text || '',{locale});
  const content = step.content;
  const explanation = questionExplanation(step);
  container.innerHTML = `<div class="report-published-question" dir="${locale === 'en' ? 'ltr' : 'rtl'}" lang="${locale}">
    ${content.prompt ? `<h4>${inline(content.prompt)}</h4>${content.example ? markdown(content.example) : ''}` : markdown(content.body)}
    ${content.answers?.length ? `<ul class="report-answers">${content.answers.map(answer => `<li${answer.correct ? ' class="is-correct"' : ''}><span>${inline(answer.text)}</span>${answer.correct ? `<span class="report-answer-label">${icon('check')}الإجابة الصحيحة</span>` : ''}</li>`).join('')}</ul>` : content.finalAnswer ? `<h4 class="report-answer-heading">الإجابة</h4>${markdown(content.finalAnswer)}` : ''}
    ${explanation ? `<div class="report-solution"><h4>الشرح</h4>${markdown(explanation.markdown)}</div>` : ''}
  </div>`;
}

export function mountStudentReports({request}) {
  const list = document.querySelector('#question-reports');
  const status = document.querySelector('#report-status');
  const more = document.querySelector('#load-more-reports');
  const refresh = document.querySelector('#refresh-reports');
  let reports = [], nextCursor = null, controller, initialized = false, loading = false;

  const cancel = () => {controller?.abort();loading = false;list.removeAttribute('aria-busy');more.disabled = false;refresh.disabled = false;};
  async function load({append = false} = {}) {
    if (append && (loading || !nextCursor)) return;
    cancel();
    const current = new AbortController();controller = current;loading = true;
    list.setAttribute('aria-busy','true');more.disabled = true;refresh.disabled = true;
    status.textContent = append ? 'جارٍ تحميل المزيد من البلاغات…' : 'جارٍ تحميل البلاغات…';
    try {
      const values = append ? reports.slice() : [];
      const seen = new Set(values.map(report => `${report.accountId}:${report.id}`));
      const target = values.length + 50;
      let cursor = append ? nextCursor : '', data;
      do {
        data = await request(`/api/owner/question-reports?${new URLSearchParams(cursor ? {cursor} : {})}`,{signal:current.signal});
        if (current.signal.aborted) return;
        if (!Array.isArray(data.reports) || !(data.nextCursor === null || typeof data.nextCursor === 'string'))
          throw new Error('تعذّر قراءة البلاغات. حاول تحديث القائمة.');
        for (const report of data.reports) {
          const key = `${report.accountId}:${report.id}`;
          if (!seen.has(key)) {seen.add(key);values.push(report);}
        }
        if (data.nextCursor && data.nextCursor === cursor) throw new Error('تعذّر تحميل بقية البلاغات. حاول مجددًا.');
        cursor = data.nextCursor;
      } while (cursor && values.length < target);
      if (current.signal.aborted) return;
      reports = values.sort((a,b) => b.createdAt.localeCompare(a.createdAt));nextCursor = cursor;initialized = true;
      list.innerHTML = reports.length ? `<div class="report-list">${reports.map(reportCard).join('')}</div>`
        : `<div class="empty-state">${icon('flag')}<h3>لا توجد بلاغات حاليًا</h3><p>ستظهر ملاحظات الطلاب على الأسئلة هنا.</p></div>`;
      document.querySelector('#report-count').textContent = number(reports.length)+(nextCursor ? '+' : '');
      document.querySelector('#report-loaded-count').textContent = reports.length ? `عرض ${number(reports.length)} بلاغ${nextCursor ? ' · توجد بلاغات إضافية' : ''}` : '';
      status.textContent = reports.length ? 'افتح أي سؤال لمراجعته مع إجابته وشرحه.' : 'تم تحديث البلاغات.';
      more.hidden = !nextCursor;more.textContent = 'تحميل المزيد';
    } catch (error) {
      if (current.signal.aborted) return;
      status.textContent = error.status === 401 ? 'انتهت الجلسة. سجّل الدخول بحساب المالك.'
        : error.status === 403 ? 'هذه المساحة متاحة لمالك التطبيق فقط.' : 'تعذّر تحميل البلاغات. حاول تحديث القائمة.';
      if (reports.length) status.textContent += ' البلاغات المعروضة باقية.';
      else list.innerHTML = `<div class="empty-state">${icon('alert')}<h3>تعذّر تحميل البلاغات</h3><p>${esc(error.message)}</p></div>`;
      if (append) {more.hidden = false;more.textContent = 'إعادة المحاولة';}
    } finally {
      if (controller === current) {loading = false;list.removeAttribute('aria-busy');more.disabled = false;refresh.disabled = false;}
    }
  }
  list.addEventListener('toggle',async event => {
    const preview = event.target;
    if (!(preview instanceof HTMLDetailsElement) || !preview.open || preview.dataset.loaded || preview.dataset.loading) return;
    const report = reports.find(item => `${item.accountId}:${item.id}` === preview.closest('[data-report-key]').dataset.reportKey);
    if (!report) return;
    const content = preview.querySelector('[data-report-content]');
    preview.dataset.loading = 'true';content.innerHTML = '<p role="status">جارٍ تحميل السؤال…</p>';
    try {await renderQuestionPreview(content,report);preview.dataset.loaded = 'true';}
    catch (error) {content.innerHTML = `<p role="status">${esc(error.message || 'تعذّر تحميل السؤال. أغلقه وافتحه للمحاولة مجددًا.')}</p>`;}
    finally {delete preview.dataset.loading;}
  },true);
  refresh.addEventListener('click',() => void load());
  more.addEventListener('click',() => void load({append:true}));
  return {load,cancel,open:() => {if (!initialized && !loading) void load();}};
}
