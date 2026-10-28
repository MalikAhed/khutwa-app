import { getSessionToken } from "./auth-api.mjs";
import { sendJson } from "./http.mjs";

export const STUDENT_DASHBOARD_PATH = "/students";

export function renderStudentDashboard({version=""}={}) {
  const suffix=version?`?v=${encodeURIComponent(version)}`:"";
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><meta name="theme-color" content="#edf8fe">
<title>إدارة الطلاب | خطوة</title><link rel="icon" href="/assets/brand/khotwa-wordmark.svg"><link rel="stylesheet" href="/src/styles/student-dashboard.css${suffix}"><script type="module" src="/src/ui/student-dashboard.js${suffix}"></script></head>
<body><a class="skip-link" href="#main-content">انتقل إلى الطلاب</a>
<aside class="sidebar" aria-label="التنقل الرئيسي">
  <a class="brand" href="/students"><img src="/assets/brand/khotwa-wordmark.svg" alt="خطوة" width="120" height="50"></a>
  <nav class="navigation" aria-label="تصفية الطلاب">
    <button type="button" class="nav-item" data-filter="all" aria-label="جميع الطلاب" aria-pressed="true"><span data-icon="users"></span><span>جميع الطلاب</span></button>
    <button type="button" class="nav-item" data-filter="subscribed" aria-label="المشتركون" aria-pressed="false"><span data-icon="card"></span><span>المشتركون</span></button>
    <button type="button" class="nav-item" data-filter="free" aria-label="الحسابات المجانية" aria-pressed="false"><span data-icon="book"></span><span>حسابات مجانية</span></button>
    <button type="button" class="nav-item" data-filter="suspended" aria-label="الحسابات الموقوفة" aria-pressed="false"><span data-icon="shield"></span><span>حسابات موقوفة</span></button>
    <a class="nav-item home-link" href="/" aria-label="العودة للتعلّم"><span data-icon="home"></span><span>العودة للتعلّم</span></a>
  </nav>
</aside>
<header class="topbar">
  <form id="student-search" role="search"><label class="visually-hidden" for="search">اسم الطالب أو رقم الهاتف</label><span data-icon="search"></span><input id="search" name="search" type="search" placeholder="ابحث باسم الطالب أو رقم الهاتف…" maxlength="100" autocomplete="off"><button type="submit">بحث</button></form>
  <div class="account-tools"><span class="owner-avatar" data-icon="shield"></span><div><strong>مساحة المالك</strong><span>إدارة الطلاب والاشتراكات</span></div></div>
</header>
<main id="main-content" tabindex="-1">
  <section class="page-heading" aria-labelledby="page-title"><h1 id="page-title">جميع الطلاب</h1></section>
  <section class="student-panel" aria-label="حسابات الطلاب">
    <div class="panel-toolbar"><div class="panel-title"><h2 id="list-title">سجل الطلاب</h2><span id="student-count" class="count-badge">—</span></div><button id="refresh" type="button" class="button button-outline"><span data-icon="refresh"></span>تحديث القائمة</button></div>
    <p id="status" role="status" aria-live="polite">جارٍ تحميل الطلاب…</p>
    <div id="students" aria-label="قائمة الطلاب"></div>
    <div class="table-footer"><p id="loaded-count"></p><p id="load-status" role="status" aria-live="polite"></p><button id="load-more" type="button" class="button button-outline" hidden>تحميل المزيد</button></div>
  </section>
  <p class="dashboard-footnote"><span data-icon="shield"></span>بيانات الطلاب متاحة لمالك التطبيق فقط.</p>
</main>
<dialog id="student-detail" aria-labelledby="detail-title"><div class="dialog-top"><span class="eyebrow">ملف الطالب</span><button id="close-detail" class="icon-button" type="button" aria-label="إغلاق تفاصيل الطالب">×</button></div><div id="detail-content"></div></dialog>
<noscript><p>يرجى تفعيل JavaScript لعرض حسابات الطلاب.</p></noscript></body></html>`;
}

export function createStudentDashboardHandler(accountStore) {
  return (request,response,pathname) => {
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
    if(pathname==="/api/owner/students") {
      const offset=Number(url.searchParams.get("offset")||0);
      const search=(url.searchParams.get("search")||"").trim();
      const filter=url.searchParams.get("filter")||"all";
      if(!Number.isSafeInteger(offset)||offset<0||search.length>100||!["all","free","subscribed","suspended"].includes(filter)) {sendJson(response,400,{error:"طلب غير صالح."});return;}
      sendJson(response,200,accountStore.students.list({search,offset,filter}));return;
    }
    const id=pathname.match(/^\/api\/owner\/students\/([1-9]\d*)$/)?.[1];
    const student=id?accountStore.students.get(id):null;
    sendJson(response,student?200:404,student||{error:"لم يتم العثور على الطالب."});
  };
}
