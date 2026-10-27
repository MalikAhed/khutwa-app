import { getSessionToken } from "./auth-api.mjs";
import { sendJson } from "./http.mjs";

export const STUDENT_DASHBOARD_PATH = "/students";

const page = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>الطلاب | مساحة التعلّم</title><link rel="stylesheet" href="/src/styles/student-dashboard.css"><script type="module" src="/src/ui/student-dashboard.js"></script></head>
<body><main><header><div><p class="eyebrow">إدارة مساحة التعلّم</p><h1>الطلاب وتقدّمهم</h1><p>تابع الحسابات والنشاط المحفوظ لكل طالب.</p></div><a href="/">العودة للتعلّم</a></header>
<form id="student-search"><label for="search">ابحث باسم الطالب أو رقم الهاتف</label><div class="search"><input id="search" name="search" type="search" maxlength="100" autocomplete="off"><button>بحث</button><button id="refresh" type="button" class="secondary">تحديث</button></div></form>
<p id="status" role="status" aria-live="polite">جارٍ تحميل الطلاب…</p><section id="students" aria-label="قائمة الطلاب"></section>
<nav class="pagination" aria-label="صفحات الطلاب"><button id="previous" type="button" class="secondary" disabled>السابق</button><span id="page-count"></span><button id="next" type="button" class="secondary" disabled>التالي</button></nav>
<dialog id="student-detail" aria-labelledby="detail-title"><button id="close-detail" class="secondary" type="button">إغلاق</button><div id="detail-content"></div></dialog></main></body></html>`;

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
      response.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"no-store"}).end(page);return;
    }
    const url=new URL(request.url,"http://localhost");
    if(pathname==="/api/owner/students") {
      const offset=Number(url.searchParams.get("offset")||0);
      const search=(url.searchParams.get("search")||"").trim();
      if(!Number.isSafeInteger(offset)||offset<0||search.length>100) {sendJson(response,400,{error:"طلب غير صالح."});return;}
      sendJson(response,200,accountStore.students.list({search,offset}));return;
    }
    const id=pathname.match(/^\/api\/owner\/students\/([1-9]\d*)$/)?.[1];
    const student=id?accountStore.students.get(id):null;
    sendJson(response,student?200:404,student||{error:"لم يتم العثور على الطالب."});
  };
}
