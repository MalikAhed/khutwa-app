import { escapeHtml as esc } from "../lib/dom.js?v=acff67f262f3c107";
import { getSubjectRoadmapLesson } from "../data/subject-roadmaps.js?v=acff67f262f3c107";

const list=document.querySelector("#students"), status=document.querySelector("#status");
const previous=document.querySelector("#previous"), next=document.querySelector("#next");
const dialog=document.querySelector("#student-detail"), detail=document.querySelector("#detail-content");
const subjects={ict:"تكنولوجيا المعلومات",mathematics:"الرياضيات",physics:"الفيزياء",chemistry:"الكيمياء",biology:"الأحياء",arabic:"اللغة العربية",english:"اللغة الإنجليزية","islamic-education":"التربية الإسلامية"};
let offset=0, search="", listRequest, detailRequest;
const date=value=>value ? esc(value.slice(0,10)) : "لم يبدأ بعد";
const metrics=student=>`<dl class="metrics">
  <div><dt>المستوى</dt><dd><bdi>Lv.${student.level}</bdi></dd></div><div><dt>نقاط الخبرة</dt><dd>${student.totalXp}</dd></div>
  <div><dt>السلسلة</dt><dd>${student.streak}</dd></div><div><dt>إجابات صحيحة</dt><dd>${student.questionsSolved}</dd></div>
  <div><dt>أجزاء مكتملة</dt><dd>${student.completedParts}</dd></div><div><dt>بحاجة للمراجعة</dt><dd>${student.mustReviewCount}</dd></div></dl>`;
async function request(url,signal) {
  const response=await fetch(url,{signal,cache:"no-store"});
  const body=await response.json();
  if(!response.ok)throw new Error(body.error||"تعذّر تحميل البيانات. حاول التحديث.");
  return body;
}
async function loadStudents() {
  listRequest?.abort();
  const controller=new AbortController();listRequest=controller;
  previous.disabled=next.disabled=true;
  status.textContent="جارٍ تحميل الطلاب…";
  list.setAttribute("aria-busy","true");
  try {
    const data=await request(`/api/owner/students?${new URLSearchParams({search,offset:String(offset)})}`,controller.signal);
    if(controller.signal.aborted)return;
    list.innerHTML=data.students.map(student=>`<article class="student">
      <div class="student-heading"><div><h2>${esc(student.username)}</h2><p><bdi>${esc(student.phone||"—")}</bdi> · ${student.path==="scientific"?"العلمي":"الأدبي"} · ${student.curriculum==="gaza"?"منهاج غزة":"المنهاج الفلسطيني الكامل"}</p></div><button data-student-id="${student.id}">عرض التفاصيل</button></div>
      ${metrics(student)}<p class="activity">آخر نشاط: <bdi>${date(student.lastActivity)}</bdi></p></article>`).join("");
    status.textContent=data.total?`${data.total} طالب · آخر تحديث ${new Date().toLocaleTimeString("ar")}`:search?"لا يوجد طلاب مطابقون للبحث.":"لا يوجد طلاب بعد. ستظهر حساباتهم وتقدّمهم هنا بعد التسجيل.";
    previous.disabled=offset===0;
    next.disabled=offset+data.limit>=data.total;
    document.querySelector("#page-count").textContent=data.total?`${Math.floor(offset/50)+1} / ${Math.ceil(data.total/50)}`:"";
  } catch(error) {
    if(!controller.signal.aborted){list.replaceChildren();status.textContent=error.message;}
  } finally {if(listRequest===controller)list.removeAttribute("aria-busy");}
}
async function showStudent(id) {
  detailRequest?.abort();
  const controller=new AbortController();detailRequest=controller;
  detail.innerHTML='<h2 id="detail-title">تفاصيل الطالب</h2><p role="status">جارٍ التحميل…</p>';
  dialog.showModal();
  try {
    const student=await request(`/api/owner/students/${encodeURIComponent(id)}`,controller.signal);
    if(controller.signal.aborted)return;
    detail.innerHTML=`<h2 id="detail-title">${esc(student.username)}</h2><p><bdi>${esc(student.phone||"—")}</bdi> · تاريخ التسجيل: <bdi>${date(student.createdAt)}</bdi></p>
      ${metrics(student)}<h3>التقدّم حسب الدرس</h3>${student.parts.length?student.parts.map(part=>{
        const lesson=getSubjectRoadmapLesson(part.subjectId,part.lessonId);
        const label=lesson?.parts.find(item=>item.id===part.partId)?.label||part.partId;
        return `<section class="part"><h4>${esc(subjects[part.subjectId]||part.subjectId)} · ${esc(lesson?.label||part.lessonId)} · ${esc(label)}</h4>
          <p>${part.completed?"مكتمل":"قيد التعلّم"} · ${part.rewardXp} XP · ${part.completedStepIds.length} خطوة مكتملة</p>
          <p>أيام النشاط: <bdi>${esc((part.activityDates||[]).join("، ")||"—")}</bdi></p>
          <details><summary>سجل الأسئلة (${part.review.length})</summary><ul>${part.review.map(item=>`<li><bdi>${esc(item.stepId)}</bdi><br>${item.solved?"تمت الإجابة بشكل صحيح":"لم تُحل بشكل صحيح بعد"} · أخطاء: ${item.misses} · ${item.active?"بحاجة للمراجعة":"لا توجد مراجعة معلّقة"}</li>`).join("")}</ul></details></section>`;
      }).join(""):"<p>لم يبدأ الطالب بالتعلّم بعد.</p>"}`;
  } catch(error) {if(!controller.signal.aborted)detail.innerHTML=`<h2 id="detail-title">تفاصيل الطالب</h2><p role="alert">${esc(error.message)}</p>`;}
}
document.querySelector("#student-search").addEventListener("submit",event=>{
  event.preventDefault();search=document.querySelector("#search").value.trim();offset=0;void loadStudents();
});
document.querySelector("#refresh").addEventListener("click",()=>void loadStudents());
previous.addEventListener("click",()=>{offset=Math.max(0,offset-50);void loadStudents();});
next.addEventListener("click",()=>{offset+=50;void loadStudents();});
list.addEventListener("click",event=>{
  const button=event.target.closest("[data-student-id]");
  if(button)void showStudent(button.dataset.studentId);
});
document.querySelector("#close-detail").addEventListener("click",()=>dialog.close());
dialog.addEventListener("close",()=>{detailRequest?.abort();detail.replaceChildren();});
window.addEventListener("pagehide",()=>{listRequest?.abort();detailRequest?.abort();});
window.addEventListener("pageshow",event=>{if(event.persisted)location.reload();});
document.addEventListener("visibilitychange",()=>{if(!document.hidden)void loadStudents();});
void loadStudents();
