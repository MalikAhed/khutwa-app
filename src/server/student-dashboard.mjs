import { getSessionToken } from "./auth-api.mjs";
import { sendJson } from "./http.mjs";
import { readReportCursor } from './owner-question-reports.mjs';

export const STUDENT_DASHBOARD_PATH = "/students";

export function renderStudentDashboard({version="", reportsAvailable=true}={}) {
  const suffix=version?`?v=${encodeURIComponent(version)}`:"";
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#f5f7f8"><meta name="color-scheme" content="only light">
<title>إدارة الطلاب | خطوة</title><link rel="icon" href="/assets/icons/favicon.svg?v=rocky-2" type="image/svg+xml"><link rel="stylesheet" href="/src/styles/student-dashboard.css${suffix}"><script type="module" src="/src/ui/student-dashboard.js${suffix}"></script></head>
<body><a class="skip-link" href="#main-content">انتقل إلى الطلاب</a>
<aside class="sidebar" aria-label="التنقل الرئيسي">
  <a class="brand" href="/students"><img src="/assets/brand/khotwa-wordmark.svg" alt="خطوة" width="120" height="50"></a>
  <p class="sidebar-caption">الطلاب والاشتراكات${reportsAvailable ? " والبلاغات" : ""}</p>
  <nav class="navigation" aria-label="أقسام الإدارة">
    <button type="button" class="nav-item" data-filter="all" aria-label="جميع الطلاب" aria-pressed="true"><span data-icon="users"></span><span>جميع الطلاب</span></button>
    <button type="button" class="nav-item" data-filter="subscribed" aria-label="المشتركون" aria-pressed="false"><span data-icon="card"></span><span>المشتركون</span></button>
    <button type="button" class="nav-item" data-filter="free" aria-label="الحسابات المجانية" aria-pressed="false"><span data-icon="book"></span><span>حسابات مجانية</span></button>
    <button type="button" class="nav-item" data-filter="suspended" aria-label="الحسابات الموقوفة" aria-pressed="false"><span data-icon="shield"></span><span>حسابات موقوفة</span></button>
    <button type="button" class="nav-item" data-dashboard-page="reports" aria-pressed="false" aria-controls="reports-panel"${reportsAvailable ? "" : " hidden"}><span data-icon="flag"></span><span>بلاغات الأسئلة</span></button>
    <a class="nav-item home-link" href="/" aria-label="العودة للتعلّم"><span data-icon="home"></span><span>العودة للتعلّم</span></a>
  </nav>
</aside>
<header class="topbar">
  <form id="student-search" role="search"><label class="visually-hidden" for="search">اسم الطالب أو رقم الهاتف</label><span data-icon="search"></span><input id="search" name="search" type="search" placeholder="ابحث باسم الطالب أو رقم الهاتف…" maxlength="100" autocomplete="off"><button type="submit">بحث</button></form>
  <p id="reports-header" class="reports-header" hidden><span data-icon="flag"></span>مراجعة بلاغات الأسئلة</p>
  <div class="account-tools"><span class="owner-avatar" data-icon="shield"></span><div><strong>مساحة المالك</strong><span>إدارة الطلاب والاشتراكات</span></div></div>
</header>
<main id="main-content" tabindex="-1">
  <section class="page-heading" aria-labelledby="page-title"><div><h1 id="page-title">جميع الطلاب</h1><p id="page-description">تابع نشاط الطلاب واشتراكاتهم وتقدّمهم.</p></div></section>
  <section id="student-overview" class="student-overview" aria-label="ملخص الحسابات">
    <button type="button" class="overview-card" data-filter="all" aria-pressed="true"><span>جميع الطلاب</span><b data-student-total="all">—</b></button>
    <button type="button" class="overview-card" data-filter="subscribed" aria-pressed="false"><span>مشتركو سوبر</span><b data-student-total="subscribed">—</b></button>
    <button type="button" class="overview-card" data-filter="free" aria-pressed="false"><span>حسابات مجانية</span><b data-student-total="free">—</b></button>
    <button type="button" class="overview-card" data-filter="suspended" aria-pressed="false"><span>حسابات موقوفة</span><b data-student-total="suspended">—</b></button>
  </section>
  <details class="student-preview student-panel">
    <summary id="student-preview-title">معاينة تجربة الطالب</summary>
    <form action="/" method="get" aria-labelledby="student-preview-title">
      <label>المنهاج والمسار
        <select name="student-preview">
          <option value="gaza:scientific">غزة · الفرع العلمي</option>
          <option value="gaza:literary">غزة · الفرع الأدبي</option>
          <option value="full-palestinian:scientific">فلسطين · الفرع العلمي</option>
          <option value="full-palestinian:literary">فلسطين · الفرع الأدبي</option>
        </select>
      </label>
      <label>نوع الحساب
        <select name="preview-plan">
          <option value="free">حساب مجاني</option>
          <option value="subscribed">خطوة سوبر</option>
        </select>
      </label>
      <button type="submit" class="button button-primary">فتح المعاينة</button>
    </form>
  </details>
  <section id="students-panel" class="student-panel" aria-label="حسابات الطلاب">
    <div class="panel-toolbar"><div class="panel-title"><h2 id="list-title">سجل الطلاب</h2><span id="student-count" class="count-badge">—</span></div><button id="refresh" type="button" class="button button-outline"><span data-icon="refresh"></span>تحديث القائمة</button></div>
    <p id="status" role="status" aria-live="polite">جارٍ تحميل الطلاب…</p>
    <div id="students" aria-label="قائمة الطلاب"></div>
    <div class="table-footer"><p id="loaded-count"></p><p id="load-status" role="status" aria-live="polite"></p><button id="load-more" type="button" class="button button-outline" hidden>تحميل المزيد</button></div>
  </section>
  <section id="reports-panel" class="student-panel" aria-label="بلاغات الأسئلة" hidden>
    <div class="panel-toolbar"><div class="panel-title"><h2>بلاغات الطلاب</h2><span id="report-count" class="count-badge">—</span></div><button id="refresh-reports" type="button" class="button button-outline"><span data-icon="refresh"></span>تحديث البلاغات</button></div>
    <p id="report-status" role="status" aria-live="polite">جارٍ تحميل البلاغات…</p>
    <div id="question-reports"></div>
    <div class="table-footer"><p id="report-loaded-count"></p><button id="load-more-reports" type="button" class="button button-outline" hidden>تحميل المزيد</button></div>
  </section>
  <p class="dashboard-footnote"><span data-icon="shield"></span>بيانات الطلاب متاحة لمالك التطبيق فقط.</p>
</main>
<dialog id="student-detail" aria-labelledby="detail-title"><div class="dialog-top"><span class="eyebrow">ملف الطالب</span><button id="close-detail" class="icon-button" type="button" aria-label="إغلاق تفاصيل الطالب"><span data-icon="close"></span></button></div><div id="detail-content"></div></dialog>
<noscript><p>يرجى تفعيل JavaScript لعرض حسابات الطلاب.</p></noscript></body></html>`;
}

export function createStudentDashboardHandler(accountStore) {
  return async (request,response,pathname) => {
    if(request.method!=="GET"){response.writeHead(405,{Allow:"GET"}).end();return;}
    const account=accountStore.getAccountForSession(getSessionToken(request));
    if(!account && pathname===STUDENT_DASHBOARD_PATH) {
      response.writeHead(302,{Location:"/?flow=sign-in","Cache-Control":"no-store"}).end();return;
    }
    if(!account?.isOwner || account.accountType==="banned") {
      sendJson(response,account?403:401,{error:"هذه الصفحة متاحة لمالك التطبيق فقط."});return;
    }
    if(pathname===STUDENT_DASHBOARD_PATH){
      response.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}).end(renderStudentDashboard());return;
    }
    const url=new URL(request.url,"http://localhost");
    if(pathname==='/api/owner/question-reports') {
      const cursor=url.searchParams.get('cursor')||'';
      try {readReportCursor(cursor);} catch {sendJson(response,400,{error:'طلب غير صالح.'});return;}
      try {sendJson(response,200,await accountStore.questionFeedback.ownerReports(cursor));}
      catch {sendJson(response,500,{error:'تعذّر تحميل البلاغات. حاول مجددًا.'});}
      return;
    }
    if(pathname==="/api/owner/students") {
      const offset=Number(url.searchParams.get("offset")||0);
      const search=(url.searchParams.get("search")||"").trim();
      const filter=url.searchParams.get("filter")||"all";
      if(!Number.isSafeInteger(offset)||offset<0||search.length>100||!["all","free","subscribed","suspended"].includes(filter)) {sendJson(response,400,{error:"طلب غير صالح."});return;}
      sendJson(response,200,accountStore.students.list({search,offset,filter}));return;
    }
    const id=pathname.match(/^\/api\/owner\/students\/([1-9]\d*)$/)?.[1];
    const student=id?await accountStore.students.get(id):null;
    sendJson(response,student?200:404,student ? { ...student,
      ratings:accountStore.questionFeedback.ratings(student.id),
      hiddenQuestions:accountStore.questionFeedback.hidden(student.id),
    } : {error:"لم يتم العثور على الطالب."});
  };
}
