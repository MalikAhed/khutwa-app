import { createFirstRunTourState } from '../services/first-run-tour.js';
import { createRockyTourSpotlight } from './rocky-tour-spotlight.js';
import { showDailyStreak } from './subject-completion.js';

const descriptions={
  easy:{message:'إجابتك الصحيحة تُقيَّم سهل تلقائيًا. غيّر التقييم لترتّب مراجعتك.',selectors:['.level-question-ratings'],preview:['[data-question-rating="easy"] + span'],inlinePreview:'سهل',next:true},
  hard:{message:'الإجابة الخاطئة تُقيَّم صعب تلقائيًا. ويمكنك تغييره.',selectors:['.level-question-ratings'],preview:['[data-question-rating="hard"] + span'],next:true},
  flashcard:{message:'المس البطاقة لتكشف الحل.',selectors:['[data-exam-card]'],gesture:'tap'},
  assess:{message:'قارن بالحل، ثم اختر كيف كانت إجابتك.',selectors:['[data-exam-self-check]'],gesture:'tap'},
  'flip-back':{message:'المس البطاقة مجددًا للعودة للسؤال.',selectors:['[data-exam-card]'],gesture:'tap'},
  explain:{message:'لم تفهم الفكرة؟ افتح الشرح.',selectors:['[data-question-explain]'],gesture:'tap'},
  solution:{message:'هنا الحل والشرح، خطوة بخطوة.',selectors:['[data-explanation-body] .markdown-rendered'],next:true},
  'solution-close':{message:'اقرأ براحتك، ثم أغلق الشرح لنكمل.',selectors:['[data-explanation-close]'],gesture:'tap'},
  slider:{message:'اسحب الشريط إلى اليمين لترى بقية الأسئلة. أخضر: سهل، أصفر: متوسط، أحمر: صعب.',selectors:['[data-question-slider]'],gesture:'swipe'},
  report:{message:'وجدت خطأ؟ افتح العلم لإرسال بلاغ.',selectors:['[data-question-report]'],preview:['[data-question-report]'],gesture:'tap'},
  'report-send':{message:'للإبلاغ: اختر المشكلة، ثم أرسل البلاغ.',selectors:['[data-question-report-form] fieldset','[data-question-report-form] button[type="submit"]'],next:true},
  'report-hide':{message:'وإن أردت، أخفِ السؤال من قائمتك. الآن نتعرّف على الزر فقط.',selectors:['[data-question-hide]'],next:true},
  'report-close':{message:'أغلق النافذة لنكمل.',selectors:['[data-report-close]'],gesture:'tap'},
  'side-scroll':{message:'اسحب هذا السطر جانبًا لترى بقيّته.',gesture:'swipe'},
  exit:{message:'عندما تتعب، يمكنك إنهاء الجلسة من هنا.',selectors:['.lesson-back.app-close'],next:true},
  rewards:{message:'كل إجابة صحيحة جديدة: 7 جواهر وXP يرفع مستواك.',selectors:['.subject-session-gems','.subject-gain--xp'],next:true},
  'session-leave':{message:'لنرَ تقدّمك على الرئيسية.',selectors:['[data-authored-restart]'],preview:['[data-authored-restart]'],gesture:'tap'},
  streak:{message:'هذه سلسلتك! تعلّم كل يوم لتزيدها.',selectors:['.app-stat--streak'],next:true},
  'rated-open':{message:'للمراجعة لاحقًا، افتح الأسئلة المقيّمة.',selectors:['[data-page="rated-questions"]'],preview:['[data-page="rated-questions"]'],inlinePreview:'الأسئلة المقيّمة',gesture:'tap'},
  'rated-subject':{message:'اختر مادة لتجد أسئلتك حسب تقييمك.',selectors:['.subject-card--rated'],gesture:'tap',gestureSelector:'.subject-card--rated [data-rated-subject]'},
  'rated-filter':{message:'اختر مستوى الصعوبة لمراجعة ما تحتاجه.',selectors:['.rated-question-toggle'],gesture:'tap',next:true},
  free:{message:'أول درسين في كل مادة مجانيان، بلا استهلاك طاقة.',selectors:['.subject-map'],next:true},
  hearts:{message:'بقية الدروس برصيد يومي:',equation:{amount:'1',icon:'assets/icons/green_battery_icon_transparent.svg',label:'طاقة',unit:'سؤال'},selectors:['.app-stat--hearts'],next:true},
  gems:{message:'للشرح بعد الدرسين المجانيين:',equation:{amount:'50',icon:'assets/icons/nav-gem.svg',label:'جوهرة',unit:'شرح',after:' ويبقى مفتوحًا لك.'},selectors:['.app-stat--gems'],next:true},
  companion:{message:'سأكون معك في دراستك، خطوة بخطوة.',centered:true,mood:'wave',next:true},
  goodbye:{message:'أراك لاحقًا!',centered:true,mood:'wave',next:true},
};
const horizontallyHidden=element=>element?.clientWidth>24 && element.scrollWidth-element.clientWidth-Math.abs(element.scrollLeft)>8
  && ['auto','scroll'].includes(getComputedStyle(element).overflowX);

export function createRockyTour({service,storage,onHome,onComplete}) {
  const state=createFirstRunTourState({service,storage});
  let owner=service.getLearnerProgressOwner(),spotlight,observer,frame=0,timer=0;
  let rendered=null,currentQuestion=null,questionType=null,streakDialog=null,firstReadyAt=0,horizontalTarget=null;
  let sideReadTimer=0,sideReading=false,sideEndSeen=false,sliderPauseTimer=0,sliderReading=false,blockedExit=null;
  const controller=new AbortController();
  const clearPrompt=()=>{if(blockedExit){blockedExit.element.disabled=blockedExit.disabled;blockedExit=null;}clearTimeout(timer);clearTimeout(sideReadTimer);clearTimeout(sliderPauseTimer);sliderPauseTimer=0;sliderReading=false;timer=0;sideReadTimer=0;sideReading=false;sideEndSeen=false;rendered=null;spotlight?.hide();};
  const go=(stage,delay=260)=>{clearPrompt();if(!state.active())return;state.advance(stage);timer=setTimeout(()=>{timer=0;schedule();},delay);};
  const finish=()=>{state.finish();clearPrompt();onComplete?.();};
  const remainingLessonTips=(delay=260)=>{
    for(const id of ['slider','report','exit']) {
      if(id==='report' ? !state.has('report-hide') : !state.has(id)){go(id,delay);return;}
    }
    go('wait-answer');
  };
  const afterOutcome=(delay=260)=>{
    if(questionType==='exam-question'&&!state.has('flip-back'))go('flip-back',delay);
    else if(state.read()?.lastCorrect===false&&!state.has('solution'))go('explain',delay);
    else remainingLessonTips(delay);
  };
  const next=()=>{
    if(!state.active()){clearPrompt();return;}
    const stage=state.read()?.stage;
    if(!descriptions[stage]?.next && !(stage==='slider'&&!horizontallyHidden(document.querySelector('.question-number-track')))) return;
    state.mark(stage);
    if(stage==='easy'||stage==='hard')afterOutcome();
    else if(stage==='solution')go('solution-close');
    else if(stage==='report-send')go('report-hide');
    else if(stage==='report-hide')go('report-close');
    else if(['slider','exit'].includes(stage))remainingLessonTips(stage==='slider'?1400:260);
    else if(stage==='rewards')go('session-leave');
    else if(stage==='streak')go('rated-open');
    else if(stage==='rated-filter'){go('free');onHome();}
    else if(stage==='free')go('hearts');
    else if(stage==='hearts')go('gems');
    else if(stage==='gems')go('companion');
    else if(stage==='companion')go('goodbye');
    else if(stage==='goodbye'){
      state.patch({homeDone:true});
      finish();
    }
  };
  // Skipping coaching does not finish the learning session or release its celebration.
  const skip=finish;
  const homeIsVisible=()=>!new URLSearchParams(location.search).has('lesson')
    && !document.querySelector('.lesson-view.is-visible') && document.querySelector('[data-learner-dashboard]')?.getClientRects().length;
  const playDeferredStreak=()=>{
    const value=state.read();
    if(streakDialog||!homeIsVisible()||!value?.sessionDone)return;
    if(!value.pendingStreak){if(state.active())go('rated-open',400);return;}
    const streakOwner=owner;
    clearPrompt();
    const dialog=showDailyStreak(document.body,value.pendingStreak,controller.signal,()=>{
      if(streakDialog!==dialog||streakOwner!==service.getLearnerProgressOwner())return;
      streakDialog=null;state.patch({pendingStreak:null});if(state.active())go('streak',400);
    });
    streakDialog=dialog;
  };
  const findSideScroll=()=>{
    const dialog=document.querySelector('.question-explanation-dialog[open]');
    const kind=dialog?'side-explanation':'side-question';
    if(state.has(kind))return null;
    const host=dialog || document.querySelector('[data-live-authored-step]');
    return [...(host?.querySelectorAll('.lesson-math-scroll,.markdown-table-scroll,.lesson-inline-scroll,pre') || [])]
      .find(element=>{
        const rect=element.getBoundingClientRect(),viewport=element.closest('[data-explanation-body],.lesson-flashcard-scroll,.level-layout-task')?.getBoundingClientRect();
        return !element.closest('[hidden],[inert]') && rect.top<Math.min(innerHeight,viewport?.bottom ?? innerHeight)-12 && rect.bottom>Math.max(0,viewport?.top ?? 0)+12 && horizontallyHidden(element);
      });
  };
  function update(){
    frame=0;
    if(!state.active()){
      clearPrompt();
      if(state.read()?.sessionDone&&state.read()?.pendingStreak)playDeferredStreak();
      return;
    }
    if(timer)return;
    if(document.querySelector('#app-splash')||document.body.classList.contains('product-flow-active')||document.hidden){spotlight?.hide();rendered=null;return;}
    let stage=state.read().stage;
    if(stage==='side-scroll'&&sideReading||stage==='slider'&&sliderReading)return;
    if(stage==='streak-wait'){playDeferredStreak();return;}
    if(stage==='rated-open'&&document.querySelector('[data-rated-subject]')){go('rated-subject');return;}
    if(stage==='rated-subject'&&document.querySelector('.rated-question-toggle')){go('rated-filter');return;}
    const dialog=document.querySelector('dialog[open]');
    if(stage==='report-send'&&document.querySelector('.question-report-dialog[open]')&&!document.querySelector('[data-question-report-form] fieldset')){state.mark('report-send');go('report-hide');return;}
    if(stage==='report-hide'&&document.querySelector('.question-report-dialog[open]')&&!document.querySelector('[data-question-hide]')){state.mark('report-hide');go('report-close');return;}
    if(stage==='report-close'&&!document.querySelector('.question-report-dialog[open]')){remainingLessonTips();return;}
    if(stage==='solution-close'&&!document.querySelector('.question-explanation-dialog[open]')){state.mark('solution');remainingLessonTips();return;}
    if(['wait-question','wait-answer','flashcard','solution-close'].includes(stage)){
      const target=findSideScroll();
      if(target){horizontalTarget=target;state.patch({sideReturnStage:stage});go('side-scroll',500);return;}
    }
    if(stage==='side-scroll'&&!horizontalTarget?.isConnected){horizontalTarget=findSideScroll();if(!horizontalTarget){go(state.read().sideReturnStage||'wait-answer');return;}}
    let description=descriptions[stage];
    if(!description||dialog&&!['solution','solution-close','side-scroll','report-send','report-hide','report-close'].includes(stage)){clearPrompt();return;}
    if(!state.has('introduced')){
      firstReadyAt ||= performance.now()+1800;
      if(performance.now()<firstReadyAt){timer=setTimeout(()=>{timer=0;schedule();},firstReadyAt-performance.now());return;}
    }
    if(stage==='side-scroll')description={...description,elements:[horizontalTarget]};
    if(stage==='rated-filter'&&state.has('rated-filter-action'))description={...description,gesture:null};
    if(stage==='slider'&&!horizontallyHidden(document.querySelector('.question-number-track')))description={...description,gesture:null,message:'هذا شريط الأسئلة. أخضر: سهل، أصفر: متوسط، أحمر: صعب.',next:true};
    if(rendered===stage&&spotlight.targets.every(target=>target.isConnected)){spotlight.reposition();return;}
    if(spotlight.show({...description,id:stage,nextLabel:description.next ? stage==='goodbye'?'لنواصل التعلّم':'التالي':null})){
      rendered=stage;state.mark('introduced');
      if(stage==='exit'&&!blockedExit){const element=document.querySelector('.lesson-back.app-close');if(element){blockedExit={element,disabled:element.disabled};element.disabled=true;}}
      if(stage==='easy'||stage==='hard')state.mark(stage);
    }
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(update);}
  const mount=()=>{
    if(spotlight)return;
    spotlight=createRockyTourSpotlight({onNext:next,onSkip:skip});
    observer=new MutationObserver(schedule);
    observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden','open','aria-busy']});
  };
  const unsubscribe=service.subscribe(()=>{
    const nextOwner=service.getLearnerProgressOwner();if(nextOwner===owner)return;
    clearPrompt();owner=nextOwner;currentQuestion=null;questionType=null;firstReadyAt=0;horizontalTarget=null;
    streakDialog?.close();streakDialog=null;if(state.active()||state.read()?.pendingStreak){mount();schedule();}
  });
  document.addEventListener('visibilitychange',schedule,{signal:controller.signal});
  window.addEventListener('storage',()=>{if(state.active()||state.read()?.pendingStreak)mount();schedule();},{signal:controller.signal});
  document.addEventListener('change',event=>{
    if(state.active()&&state.read().stage==='rated-filter'&&event.target instanceof HTMLInputElement&&event.target.matches('[data-rated-filter]')){
      state.mark('rated-filter-action');spotlight?.stopGesture();
    }
  },{signal:controller.signal});
  window.addEventListener('resize',schedule,{signal:controller.signal});
  document.addEventListener('scroll',event=>{
    if(!state.active()||timer)return;
    const target=event.target,stage=state.read()?.stage;
    if(stage==='side-scroll'&&target===horizontalTarget&&Math.abs(target.scrollLeft)>8){
      // The first few pixels do not reveal a long formula. Wait for its hidden
      // end, and restart the reading pause whenever the learner keeps scrolling.
      sideEndSeen ||= target.scrollWidth-target.clientWidth-Math.abs(target.scrollLeft)<=8;
      sideReading=true;spotlight?.hide();rendered=null;clearTimeout(sideReadTimer);
      sideReadTimer=setTimeout(()=>{
        sideReadTimer=0;sideReading=false;
        if(!state.active()||state.read()?.stage!=='side-scroll'||!target.isConnected)return;
        if(sideEndSeen){
          state.mark(target.closest('.question-explanation-dialog')?'side-explanation':'side-question');
          go(state.read().sideReturnStage||'wait-answer',800);
        } else sideReading=true; // Stay quiet while the remaining line is still being read.
      },2200);
    }else if(stage==='slider'&&target instanceof Element&&target.matches('.question-number-track')&&Math.abs(target.scrollLeft)>8){
      state.mark('slider');sliderReading=true;spotlight?.hide();rendered=null;clearTimeout(sliderPauseTimer);
      sliderPauseTimer=setTimeout(()=>{sliderPauseTimer=0;sliderReading=false;if(state.active()&&state.read()?.stage==='slider')remainingLessonTips(400);},1400);
    }
  },{signal:controller.signal,capture:true,passive:true});
  return Object.freeze({
    active:state.active,isDemo:()=>false,
    resume(){if(state.active()||state.read()?.pendingStreak){mount();schedule();}},
    arm(){state.start();mount();schedule();},
    start(){state.start();mount();onHome();schedule();},
    protectQuestionHide:()=>state.active()&&!state.has('report-hide'),
    deferStreak(outcome){
      const value=state.read();
      if(!value||value.sessionDone||!(value.firstSessionPending||state.active()))return false;
      state.patch({pendingStreak:outcome});return true;
    },
    lessonEvent(event){
      if(!state.active())return;
      mount();
      if(event.type==='question'){
        const changed=currentQuestion!==event.step.id;currentQuestion=event.step.id;questionType=event.step.type;
        if(state.read().sessionDone&&!state.read().homeDone)return;
        if(changed)clearPrompt();
        if(questionType==='exam-question'&&!state.has('flashcard'))go('flashcard',700);
        else if(changed)go('wait-answer');
      }
      if(event.type==='reveal'){state.mark('flashcard');if(!state.has('assess'))go('assess',1400);else go('wait-answer');}
      if(event.type==='flip'&&!event.revealed&&state.read().stage==='flip-back'){state.mark('flip-back');afterOutcome(1200);}
      if(event.type==='answer'){
        if(questionType==='exam-question')state.mark('assess');
        state.patch({lastCorrect:event.correct});
        const outcome=event.correct?'easy':'hard';
        if(!state.has(outcome))go(outcome,850);
        else if(questionType==='exam-question'&&!state.has('flip-back'))go('flip-back',500);
        else go('wait-answer');
      }
      if(event.type==='report'&&!state.has('report-hide')){state.mark('report');go(state.has('report-send')?'report-hide':'report-send',450);}
      if(event.type==='explanation'&&!state.has('solution')){state.mark('explain');go('solution',450);}
      if(event.type==='complete'&&!state.read().sessionDone)go('rewards',700);
    },
    finishLesson(){
      const value=state.read();
      if(!value||value.sessionDone||!(value.firstSessionPending||state.active()))return false;
      state.patch({sessionDone:true,firstSessionPending:false});
      if(state.active())go('streak-wait');else clearPrompt();
      mount();onHome();schedule();return true;
    },
    destroy(){clearPrompt();cancelAnimationFrame(frame);observer?.disconnect();spotlight?.destroy();controller.abort();unsubscribe();},
  });
}
