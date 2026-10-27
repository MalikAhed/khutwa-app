import { getSessionToken, isCrossSiteRequest } from "./auth-api.mjs";
import { sendJson, readJsonBody, hasJsonContentType } from "./http.mjs";
import { validateStudentChange } from "../domain/subscriptions.js";

export const STUDENT_DASHBOARD_PATH = "/students";
export function studentDashboardPage({ script="/src/ui/student-dashboard.js",style="/src/styles/student-dashboard.css" } = {}) {
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow">
<title>إدارة الطلاب | خطوة</title><link rel="stylesheet" href="${style}"><script type="module" src="${script}"></script></head>
<body class="admin-page"><main class="admin-main"><header class="admin-header"><a class="admin-brand" href="/"><img src="/assets/brand/khotwa-wordmark.svg" alt="خطوة" width="112" height="46"></a><span class="admin-label">مساحة الإدارة</span><a class="admin-home" href="/">العودة للتعلّم <span aria-hidden="true">↗</span></a></header>
<section class="admin-intro"><p class="eyebrow">كل طالب، خطوة للأمام</p><h1>إدارة الطلاب</h1><p>الحسابات والاشتراكات، في مكان واحد.</p></section>
<section class="admin-panel" aria-label="الطلاب"><div class="admin-toolbar"><div class="admin-tabs" role="group" aria-label="تصفية الطلاب"><button type="button" data-filter="all" aria-pressed="true">الكل</button><button type="button" data-filter="subscribed" aria-pressed="false">مشتركون</button><button type="button" data-filter="free" aria-pressed="false">مجاني</button><button type="button" data-filter="suspended" aria-pressed="false">موقوفون</button></div>
<form id="student-search" role="search"><label class="visually-hidden" for="search">اسم الطالب أو رقم الهاتف</label><input id="search" name="search" type="search" placeholder="ابحث بالاسم أو رقم الهاتف" maxlength="100" autocomplete="off"><button type="submit" class="admin-button secondary">بحث</button></form><button id="refresh" type="button" class="admin-button secondary" aria-label="تحديث قائمة الطلاب">↻</button></div>
<p id="status" class="admin-status" role="status" aria-live="polite">جارٍ تحميل الطلاب…</p><div id="students" class="admin-table-wrap" aria-label="قائمة الطلاب"></div>
<nav class="pagination" aria-label="صفحات الطلاب"><button id="previous" type="button" class="admin-button secondary" disabled>السابق</button><span id="page-count"></span><button id="next" type="button" class="admin-button secondary" disabled>التالي</button></nav></section>
<dialog id="student-detail" class="admin-dialog" aria-labelledby="detail-title"><div class="dialog-top"><span class="eyebrow">إدارة الحساب</span><button id="close-detail" class="icon-button" type="button" aria-label="إغلاق">×</button></div><div id="detail-content"></div></dialog></main></body></html>`;
}

export function createStudentDashboardHandler(accountStore) {
  return async (request,response,pathname) => {
    const account = await accountStore.getAccountForSession(getSessionToken(request));
    if (!account && pathname === STUDENT_DASHBOARD_PATH) {
      response.writeHead(302,{Location:"/?flow=sign-in","Cache-Control":"no-store"}).end(); return;
    }
    if (!account?.isOwner || account.accountType === "banned") return sendJson(response,account ? 403 : 401,{error:"هذه الصفحة متاحة لمالك التطبيق فقط."});
    if (isCrossSiteRequest(request)) return sendJson(response,403,{error:"طلب غير مسموح."});
    if (pathname === STUDENT_DASHBOARD_PATH && request.method === "GET") {
      response.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}).end(studentDashboardPage()); return;
    }
    const url = new URL(request.url,"http://localhost");
    if (pathname === "/api/owner/students" && request.method === "GET") {
      const offset = Number(url.searchParams.get("offset") || 0), search = (url.searchParams.get("search") || "").trim();
      const filter = url.searchParams.get("filter") || "all";
      if (!Number.isSafeInteger(offset) || offset < 0 || search.length > 100 || !["all","free","subscribed","suspended"].includes(filter)) return sendJson(response,400,{error:"طلب غير صالح."});
      return sendJson(response,200,await accountStore.students.list({search,offset,filter}));
    }
    const id = pathname.match(/^\/api\/owner\/students\/([1-9]\d*)$/)?.[1];
    if (!id || !Number.isSafeInteger(Number(id))) return sendJson(response,404,{error:"لم يتم العثور على الطالب."});
    if (request.method === "GET") {
      const student = await accountStore.students.get(id,getSessionToken(request));
      return sendJson(response,student ? 200 : 404,student || {error:"لم يتم العثور على الطالب."});
    }
    if (request.method !== "POST") { response.writeHead(405,{Allow:"GET, POST"}).end(); return; }
    if (!hasJsonContentType(request)) return sendJson(response,415,{error:"JSON is required."});
    try {
      const change = validateStudentChange(await readJsonBody(request));
      // The account is checked again by the store inside its write boundary.
      const result = await accountStore.students.change(id,change,account.id,getSessionToken(request));
      return sendJson(response,200,result);
    } catch (error) {
      const status = error.code === "ETOOBIG" ? 413 : error instanceof SyntaxError ? 400 : error instanceof RangeError ? 422 : error.status || 500;
      return sendJson(response,status,{error:status === 500 ? "تعذّر حفظ التغيير. حاول مجددًا." : error.message});
    }
  };
}
