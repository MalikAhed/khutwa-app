import { escapeHtml as esc } from "../lib/dom.js";
import { getSubjectRoadmapLesson } from "../data/subject-roadmaps.js";
import { getCourseSubject } from "../data/course.js";

const list=document.querySelector("#students"), status=document.querySelector("#status");
const previous=document.querySelector("#previous"), next=document.querySelector("#next");
const dialog=document.querySelector("#student-detail"), detail=document.querySelector("#detail-content");
const closeButton=document.querySelector("#close-detail");
let offset=0, search="", filter="all", listRequest, detailRequest, currentStudent, saving=false;
const date=value=>value ? esc(new Date(value).toLocaleDateString("ar-PS",{year:"numeric",month:"short",day:"numeric"})) : "—";
const access=student=>student.accessDisabled ? ["suspended","موقوف"] : student.accountType === "subscribed" ? ["subscribed","وصول كامل"] : ["free","مجاني"];
const badge=student=>{const [kind,label]=access(student);return `<span class="status-badge status-badge--${kind}"><i aria-hidden="true"></i>${label}</span>`;};
const expiry=student=>student.subscriptionType === "subscribed" ? student.subscriptionExpiresAt ? date(student.subscriptionExpiresAt) : "دائم" : "—";
async function request(url,options={}) {
  const signal=AbortSignal.any([AbortSignal.timeout(15000),...(options.signal?[options.signal]:[])]);
  const response=await fetch(url,{cache:"no-store",credentials:"same-origin",...options,signal});
  const body=await response.json();
  if(!response.ok)throw Object.assign(new Error(body.error||"تعذّر تحميل البيانات. حاول مجددًا."),{status:response.status});
  return body;
}
async function loadStudents() {
  listRequest?.abort();
  const controller=new AbortController();listRequest=controller;
  previous.disabled=next.disabled=true;
  status.textContent="جارٍ تحميل الطلاب…";list.setAttribute("aria-busy","true");
  try {
    const data=await request(`/api/owner/students?${new URLSearchParams({search,filter,offset:String(offset)})}`,{signal:controller.signal});
    if(controller.signal.aborted)return;
    if(offset && offset>=data.total){offset=Math.max(0,Math.floor((data.total-1)/50)*50);return loadStudents();}
    list.innerHTML=data.students.length ? `<table class="student-table"><thead><tr><th scope="col">الطالب</th><th scope="col">رقم الهاتف</th><th scope="col">الوصول</th><th scope="col">ينتهي في</th><th scope="col">تاريخ الانضمام</th><th scope="col"><span class="visually-hidden">الإجراءات</span></th></tr></thead><tbody>${data.students.map(student=>`<tr>
      <td><div class="student-identity"><span class="student-avatar" aria-hidden="true">${esc(Array.from(student.username)[0].toUpperCase())}</span><div><strong>${esc(student.username)}</strong><small>${student.path==="scientific"?"الفرع العلمي":"الفرع الأدبي"}</small></div></div></td>
      <td><bdi>${esc(student.phone||"—")}</bdi></td><td>${badge(student)}</td><td class="date-cell">${expiry(student)}</td><td class="date-cell">${date(student.createdAt)}</td>
      <td><button type="button" class="edit-button" data-student-id="${student.id}" aria-label="تعديل حساب ${esc(student.username)}">تعديل <span aria-hidden="true">↗</span></button></td></tr>`).join("")}</tbody></table>`
      : `<div class="admin-empty"><span aria-hidden="true">✦</span><h2>${search?"لا توجد نتائج":"لا يوجد طلاب هنا بعد"}</h2><p>${search?"جرّب اسمًا أو رقمًا آخر.":"ستظهر الحسابات هنا بعد التسجيل."}</p></div>`;
    status.textContent=`${data.total} طالب${search?" في نتائج البحث":""}`;
    previous.disabled=offset===0;next.disabled=offset+data.limit>=data.total;
    document.querySelector("#page-count").textContent=data.total?`${Math.floor(offset/50)+1} / ${Math.ceil(data.total/50)}`:"";
  } catch(error) {
    if(!controller.signal.aborted){list.replaceChildren();status.textContent=error.message;}
  } finally {if(listRequest===controller)list.removeAttribute("aria-busy");}
}
function progressMarkup(student) {
  return `<details class="admin-progress"><summary>التقدّم الدراسي</summary><dl class="metrics"><div><dt>المستوى</dt><dd>${student.level||1}</dd></div><div><dt>نقاط الخبرة</dt><dd>${student.totalXp||0}</dd></div><div><dt>إجابات صحيحة</dt><dd>${student.questionsSolved||0}</dd></div></dl>${student.parts?.length?student.parts.map(part=>{
    const lesson=getSubjectRoadmapLesson(part.subjectId,part.lessonId);
    return `<div class="part"><strong>${esc(getCourseSubject(part.subjectId)?.name||part.subjectId)}</strong><span>${esc(lesson?.label||part.lessonId)}</span><small>${part.completedStepIds.length} خطوة مكتملة · ${part.rewardXp} XP</small></div>`;
  }).join(""):"<p>لم يبدأ الطالب بالتعلّم بعد.</p>"}</details>`;
}
function renderStudent(student) {
  currentStudent=student;
  detail.innerHTML=`<div class="detail-identity"><span class="student-avatar" aria-hidden="true">${esc(Array.from(student.username)[0].toUpperCase())}</span><div><h2 id="detail-title">${esc(student.username)}</h2><p><bdi>${esc(student.phone||"بدون رقم هاتف")}</bdi></p></div>${badge(student)}</div>
    <div class="current-access"><span>الاشتراك الحالي</span><strong>${student.subscriptionType==="subscribed" ? `وصول كامل · ${expiry(student)}`:"الخطة المجانية"}</strong></div>
    <form id="subscription-form"><fieldset><legend>منح وصول كامل</legend><p class="helper">جميع المواد، باشتراك واحد.</p><div class="duration-options">
    ${[["permanent","دائم"],["week","أسبوع"],["month","شهر"],["year","سنة"],["custom","تاريخ محدد"]].map(([value,label])=>`<label><input type="radio" name="duration" value="${value}" ${value==="permanent"?"checked":""}><span>${label}</span></label>`).join("")}</div>
    <label class="custom-expiry" hidden>تاريخ ووقت الانتهاء<input type="datetime-local" name="expiresAt"></label></fieldset>
    <p id="edit-status" class="edit-status" role="status" aria-live="polite"></p><button type="submit" class="admin-button primary full-width">حفظ الاشتراك</button></form>
    <div class="account-actions">${student.subscriptionType==="subscribed"?'<button type="button" class="text-button" data-action="revoke">إلغاء الاشتراك</button>':''}<button type="button" class="text-button" data-action="${student.accessDisabled?"restore":"suspend"}">${student.accessDisabled?"إعادة تفعيل الحساب":"إيقاف الحساب"}</button></div>
    ${progressMarkup(student)}<section class="delete-section"><button type="button" class="text-button danger-text" data-show-delete>حذف الحساب</button><div class="delete-confirm" hidden><p>سيُحذف الحساب وتقدّمه نهائيًا. اكتب <strong>${esc(student.username)}</strong> للتأكيد.</p><label>اسم الطالب<input type="text" name="confirmUsername" autocomplete="off" spellcheck="false"></label><button type="button" class="admin-button danger" data-action="delete" disabled>حذف الحساب نهائيًا</button></div></section>`;
  const form=detail.querySelector("#subscription-form"), custom=detail.querySelector(".custom-expiry");
  form.addEventListener("change",()=>{const show=new FormData(form).get("duration")==="custom";custom.hidden=!show;custom.querySelector("input").required=show;});
  form.addEventListener("submit",event=>{event.preventDefault();const data=new FormData(form);const duration=String(data.get("duration"));void changeStudent("grant",{duration,...(duration==="custom"?{expiresAt:new Date(String(data.get("expiresAt"))).toISOString()}: {})});});
  detail.querySelector("[data-show-delete]").addEventListener("click",()=>{detail.querySelector(".delete-confirm").hidden=false;detail.querySelector("[name=confirmUsername]").focus();});
  detail.querySelector("[name=confirmUsername]").addEventListener("input",event=>{detail.querySelector('[data-action="delete"]').disabled=event.target.value!==student.username;});
}
async function showStudent(id) {
  if(saving)return;
  detailRequest?.abort();const controller=new AbortController();detailRequest=controller;
  detail.innerHTML='<h2 id="detail-title">حساب الطالب</h2><p role="status">جارٍ التحميل…</p>';
  if(!dialog.open)dialog.showModal();
  try {
    const student=await request(`/api/owner/students/${encodeURIComponent(id)}`,{signal:controller.signal});
    if(!controller.signal.aborted)renderStudent(student);
  } catch(error) {if(!controller.signal.aborted)detail.innerHTML=`<h2 id="detail-title">حساب الطالب</h2><p role="alert">${esc(error.message)}</p><button class="admin-button secondary" type="button" data-detail-retry="${esc(id)}">إعادة المحاولة</button>`;}
}
async function changeStudent(action,extra={}) {
  if(saving||!currentStudent)return;
  saving=true;dialog.setAttribute("aria-busy","true");closeButton.disabled=true;
  const controls=[...detail.querySelectorAll("button,input,select,textarea")];controls.forEach(control=>control.disabled=true);
  const message=detail.querySelector("#edit-status");message.textContent="جارٍ الحفظ…";
  const student=currentStudent;
  try {
    const result=await request(`/api/owner/students/${student.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action,version:student.version,...extra,...(action==="delete"?{confirmUsername:detail.querySelector('[name="confirmUsername"]').value}: {})})});
    const updated=result.status==="deleted"?null:await request(`/api/owner/students/${student.id}`);
    await loadStudents();
    if(result.status==="deleted") {dialog.close();status.textContent=result.cleanupPending?"حُذف الحساب. يكتمل تنظيف بياناته تلقائيًا.":"تم حذف الحساب.";}
    else {
      renderStudent(updated);detail.querySelector("#edit-status").textContent="تم حفظ التغيير.";
    }
  } catch(error) {
    message.textContent=error.message;
    if(error.status===409){const button=document.createElement("button");button.type="button";button.className="text-button";button.dataset.detailRetry=student.id;button.textContent="تحديث بيانات الطالب";message.after(button);}
  } finally {
    saving=false;dialog.removeAttribute("aria-busy");closeButton.disabled=false;
    controls.filter(control=>control.isConnected).forEach(control=>control.disabled=false);
    const confirm=detail.querySelector('[data-action="delete"]');if(confirm)confirm.disabled=detail.querySelector('[name="confirmUsername"]').value!==currentStudent.username;
  }
}
document.querySelector("#student-search").addEventListener("submit",event=>{event.preventDefault();search=document.querySelector("#search").value.trim();offset=0;void loadStudents();});
document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>{filter=button.dataset.filter;offset=0;document.querySelectorAll("[data-filter]").forEach(item=>item.setAttribute("aria-pressed",String(item===button)));void loadStudents();}));
document.querySelector("#refresh").addEventListener("click",()=>void loadStudents());
previous.addEventListener("click",()=>{offset=Math.max(0,offset-50);void loadStudents();});
next.addEventListener("click",()=>{offset+=50;void loadStudents();});
list.addEventListener("click",event=>{const button=event.target.closest("[data-student-id]");if(button)void showStudent(button.dataset.studentId);});
detail.addEventListener("click",event=>{const retry=event.target.closest("[data-detail-retry]");if(retry)void showStudent(retry.dataset.detailRetry);const button=event.target.closest("[data-action]");if(button)void changeStudent(button.dataset.action);});
closeButton.addEventListener("click",()=>{if(!saving)dialog.close();});
dialog.addEventListener("cancel",event=>{if(saving)event.preventDefault();});
dialog.addEventListener("close",()=>{
  // The close event is queued: a newer open may already own this dialog.
  if(dialog.open)return;
  const id=currentStudent?.id;
  detailRequest?.abort();detail.replaceChildren();currentStudent=null;
  (list.querySelector(`[data-student-id="${id}"]`)||document.querySelector("#search")).focus();
});
window.addEventListener("pagehide",()=>{listRequest?.abort();detailRequest?.abort();});
window.addEventListener("pageshow",event=>{if(event.persisted)location.reload();});
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&!saving)void loadStudents();});
void loadStudents();
