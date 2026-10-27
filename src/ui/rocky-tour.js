import { createFirstRunTourState } from "../services/first-run-tour.js?v=acff67f262f3c107";
import { createRockyTourSpotlight } from "./rocky-tour-spotlight.js?v=acff67f262f3c107";
import { prefersReducedMotion } from "../lib/dom.js?v=acff67f262f3c107";

const DEMO_STAGES = new Set(["first-lesson","start-lesson","answer","check","rating","flashcard","flashcard-answer"]);
const HOME_STAGES = new Set(["level","streak","navigation"]);
const descriptions = {
  "first-lesson":{ title:"لنبدأ من هنا",message:"افتح الدرس الأول لنجرّب سؤالين معًا.",selectors:["[data-rocky-tour-first]"] },
  "start-lesson":{ title:"جاهز للتجربة؟",message:"اضغط «ابدأ الأسئلة». أنا معك.",selectors:["[data-roadmap-bubble]:not([hidden]) [data-bubble-start]"] },
  answer:{ mode:"lesson",title:"لنجرّب سؤالًا معًا",message:"اختر إجابتك. لا بأس إن أخطأت، أنا معك!",selectors:["[data-live-authored-step] .ui-lab-mcq"] },
  check:{ mode:"lesson",placement:"footer",title:"لنتحقّق معًا",message:"اضغط «تحقّق» لتعرف النتيجة.",selectors:["[data-live-authored-step] [data-ui-lab-check]"] },
  rating:{ mode:"lesson",placement:"footer",title:"أحسنت!",message:"قيّم الصعوبة لتراجع ما تحتاجه. التقييم اختياري.",selectors:[".level-question-ratings"],mood:"celebrate" },
  flashcard:{ mode:"lesson",placement:"footer",title:"والآن… جرّب أن تتذكّر",message:"أجب في ذهنك، ثم المس البطاقة لترى الحل.",selectors:["[data-exam-card]"] },
  "flashcard-answer":{ mode:"lesson",side:"left",title:"قارن إجابتك بالحل",message:"وجدت خطأ في سؤال؟ أبلغ عنه بالعلم أعلى اليسار، ثم تابع.",selectors:["[data-question-report]","[data-exam-card]"] },
  level:{ title:"كل إجابة تُقرّبك",message:"الإجابة الصحيحة الجديدة تمنحك 10 XP. كل 100 XP ترفع مستواك.",selectors:[".dashboard-stat--level"],next:"streak",nextLabel:"متابعة" },
  streak:{ title:"خطوة صغيرة كل يوم",message:"تعلّم يوميًا لتحافظ على سلسلتك. تبدأ بـ200 جوهرة و10 قلوب. كل إجابة تستهلك قلبًا، ويتجدد قلب كل 12 دقيقة. مع سوبر تحصل على قلوب وجواهر غير محدودة.",selectors:[".app-stat--streak",".app-stat--gems",".app-stat--hearts"],next:"navigation",nextLabel:"متابعة" },
  navigation:{ title:"أنت جاهز!",message:"اختر مادة لتتابع التعلّم. بقية أقسام التطبيق ستتوفر قريبًا.",selectors:[".nav-links [data-page=learn]",".nav-links [data-page=shop]"],next:"done",nextLabel:"لنواصل التعلّم",mood:"celebrate" },
};

export function createRockyTour({ service,storage,onHome,onStartLesson,onSkip,onComplete }) {
  const state = createFirstRunTourState({ service,storage });
  let owner = service.getLearnerProgressOwner(), spotlight = null, observer = null, frame = 0;
  let renderedStage = null, transitioning = false, generation = 0, entranceAnimation = null, lastCorrect = true;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const finishEntrance = event => { if (event.matches) entranceAnimation?.finish(); };
  motion.addEventListener("change",finishEntrance);
  const clear = () => {
    generation += 1; transitioning = false;
    entranceAnimation?.cancel(); entranceAnimation = null;
    observer?.disconnect(); observer = null;
    cancelAnimationFrame(frame); frame = 0;
    spotlight?.destroy(); spotlight = null; renderedStage = null;
  };
  const finish = () => { state.finish(); clear(); onComplete?.(); };
  const skip = () => { state.finish(); clear(); onSkip?.(); };
  const go = stage => { state.advance(stage); renderedStage = null; schedule(); };
  const next = () => {
    const target = descriptions[state.read()?.stage]?.next;
    if (target === "done") finish();
    else if (target) go(target);
  };
  const beginLesson = () => {
    go("answer"); spotlight.hide(); onStartLesson();
  };
  function update() {
    frame = 0;
    if (!state.active() || transitioning) return;
    if (document.querySelector("#app-splash") || document.body.classList.contains("product-flow-active")) { spotlight.hide(); return; }
    let stage = state.read().stage;
    const route = new URLSearchParams(location.search);
    const atMap = Boolean(document.querySelector(".lesson-view.is-visible .subject-roadmap"));
    if (!route.has("subject") && DEMO_STAGES.has(stage)) { beginLesson(); return; }
    if (atMap && DEMO_STAGES.has(stage) && stage !== "start-lesson") { state.advance("first-lesson"); stage = "first-lesson"; }
    if (stage === "first-lesson") {
      const first = document.querySelector(".subject-roadmap [data-roadmap-part]:not(:disabled)");
      if (first) first.dataset.rockyTourFirst = "";
      if (document.querySelector("[data-roadmap-bubble]:not([hidden]) [data-bubble-start]")) { state.advance("start-lesson"); stage = "start-lesson"; }
    }
    if (HOME_STAGES.has(stage) && route.has("subject")) { finish(); return; }
    if (renderedStage === stage && spotlight.targets.every(target => target.isConnected)) { spotlight.reposition(); return; }
    let description = descriptions[stage];
    if (!description) { spotlight.hide(); renderedStage = stage; return; }
    if (stage === "rating" && !lastCorrect) description = { ...description,title:"لا بأس، هكذا نتعلّم",mood:"reassure" };
    if (spotlight.show({ ...description,id:stage })) renderedStage = stage;
  }
  function schedule() { if (!frame) frame = requestAnimationFrame(update); }
  const mount = () => {
    if (spotlight) return;
    spotlight = createRockyTourSpotlight({ onNext:next,onSkip:skip });
    observer = new MutationObserver(schedule);
    observer.observe(document.body,{ subtree:true,childList:true,attributes:true,attributeFilter:["class","hidden","aria-busy"] });
    schedule();
  };
  const onSelection = event => {
    if (state.active() && state.read().stage === "answer" && event.target.closest("[data-ui-lab-answer]")) go("check");
  };
  document.addEventListener("click",onSelection);
  const unsubscribe = service.subscribe(() => {
    const nextOwner = service.getLearnerProgressOwner();
    if (nextOwner === owner) return;
    owner = nextOwner; clear();
    if (state.active()) mount();
  });
  return Object.freeze({
    active:state.active,
    isDemo:() => state.active() && DEMO_STAGES.has(state.read()?.stage),
    resume() {
      if (!state.active()) return;
      if (state.read().stage === "celebration") { state.advance("level"); onHome(); }
      else if (new URLSearchParams(location.search).has("flow")) onHome();
      mount();
    },
    async start(source) {
      if (transitioning || service.getAccountType() === "guest") return;
      owner = service.getLearnerProgressOwner();
      const startedOwner = owner, run = ++generation;
      state.start(); mount(); transitioning = true; spotlight.carry(source);
      const page = source?.closest(".onboarding-page");
      if (page?.animate && !prefersReducedMotion()) {
        const animation = page.animate([{ opacity:1 },{ opacity:0 }],{ duration:400,easing:"ease-out",fill:"forwards" });
        entranceAnimation = animation;
        await animation.finished.catch(() => {});
        if (entranceAnimation === animation) entranceAnimation = null;
      }
      if (run !== generation || !state.active() || startedOwner !== service.getLearnerProgressOwner()) return;
      transitioning = false; beginLesson();
    },
    lessonEvent(event) {
      if (!state.active()) return;
      if (event.type === "question") go(event.step.type === "mcq" ? "answer" : "flashcard");
      if (event.type === "answer") { lastCorrect = event.correct; go("rating"); }
      if (event.type === "reveal") go("flashcard-answer");
      if (event.type === "complete") { state.advance("celebration"); spotlight.hide(); renderedStage = null; }
    },
    finishLesson() {
      if (!state.active() || state.read().stage !== "celebration") return false;
      go("level"); onHome(); return true;
    },
    destroy() { clear(); unsubscribe(); motion.removeEventListener("change",finishEntrance); document.removeEventListener("click",onSelection); },
  });
}
