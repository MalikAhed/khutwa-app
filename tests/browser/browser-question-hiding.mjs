import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createAppServer } from "../../src/server/app-server.mjs";
import { readRuntimeConfig } from "../../src/server/runtime-config.mjs";
import { withBrowserPage } from "./browser-page.mjs";

// Exercise the real lesson controller without the unrelated account/startup journey.
const root = path.resolve(fileURLToPath(new URL("../../",import.meta.url)));
const app = await createAppServer({ root,config:readRuntimeConfig({ PORT:"0",LIVE_RELOAD:"0",ACCOUNTS_DATABASE_PATH:":memory:" },{ root }) });
const html = (await readFile(path.join(root,"index.html"),"utf8"))
  .replace(/<section id="app-splash"[\s\S]*?<\/section>/,"")
  .replace(" data-startup","").replaceAll('media="print"','media="all"')
  .replace('<script type="module" src="src/bootstrap.js"></script>',"");
const server = createServer((request,response) => {
  if (request.url.split("?",1)[0] === "/") response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}).end(html);
  else app.server.emit("request",request,response);
});
await new Promise(resolve => server.listen(0,"127.0.0.1",resolve));
try {
  await withBrowserPage(async ({ base,send,evaluate,waitFor }) => {
    await send("Page.navigate",{ url:base });
    await waitFor("document.readyState === 'complete'");
    await send("Emulation.setEmulatedMedia",{ features:[{ name:"prefers-reduced-motion",value:"reduce" }] });
    await evaluate(`(async () => {
      const [{ mountAppShell },{ renderAuthoredInteractiveLesson },{ createQuestionFeedback }] = await Promise.all([
        import('/src/ui/app-shell.js'),import('/src/ui/lesson/authored.js'),import('/src/services/question-feedback.js')
      ]);
      const elements = mountAppShell();
      document.body.classList.add('ready-lesson-open');
      elements.main.classList.add('lesson-mode');elements.lessonView.classList.add('is-visible');
      const mcq = id => ({ id,type:'mcq',content:{title:'امتحان سابق',prompt:'اختر الإجابة الصحيحة.',answers:[{id:'a',text:'الأولى',correct:true},{id:'b',text:'الثانية',correct:false}]} });
      const steps = [mcq('one'),{ id:'two',type:'exam-question',content:{title:'الكتاب المدرسي',body:'ما المقصود بالنموذج؟',solution:'واجهة للتعامل مع البيانات.'} },mcq('three')];
      let owner='account:1',stop,feedback,failing=false,exits=0;
      const answers=[],progress=[];
      const key = stepId => ({ subjectId:'ict',lessonId:'lesson',partId:'part',stepId });
      const resetFeedback = () => { feedback=createQuestionFeedback({service:{getLearnerProgressOwner:()=>owner},storage:localStorage}); };
      const exit = () => { exits++;stop?.();stop=null;elements.lessonContent.innerHTML='<p data-exited>مسار المادة</p>'; };
      const open = (options={}) => {
        stop?.();resetFeedback();
        stop=renderAuthoredInteractiveLesson(elements.lessonContent,'درس تجريبي',{title:'درس تجريبي'},steps,{
          isLessonPart:true,onExitLesson:exit,onReviewComplete:exit,
          onAnswer:value=>{answers.push(value)},onProgress:value=>{progress.push(value)},
          getQuestionFeedback:stepId=>({isHidden:()=>feedback.isHidden(key(stepId)),getRating:()=>feedback.getRating(key(stepId)),saveRating:(rating,options)=>feedback.saveRating(key(stepId),rating,options),report:(reason,details,options)=>feedback.report(key(stepId),reason,details,options),hide:options=>failing?Promise.resolve({status:'unavailable'}):feedback.hide(key(stepId),options)}),
          ...options
        });
      };
      window.hidingUi={open,hidden:id=>feedback.isHidden(key(id)),owner:value=>{owner=value},fail:value=>{failing=value},counts:()=>({answers:answers.length,progress:progress.length,exits}),destroy:()=>stop?.()};
      open();await document.fonts.ready;
    })()`);
    const click = selector => evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
    const current = id => waitFor(`document.querySelector('[data-lesson-step]')?.dataset.lessonStep === '${id}'`);
    const openWarning = async () => {
      await click('[data-question-report]');
      await waitFor("document.querySelector('.question-report-dialog')?.open");
      await click('[data-question-hide]');
      await waitFor("document.querySelector('[data-question-hide-form]')");
    };
    const closeDialog = () => waitFor("!document.querySelector('.question-report-dialog')");
    await current('one');
    for (const width of [1440,390]) {
      await send("Emulation.setDeviceMetricsOverride",{ width,height:900,deviceScaleFactor:1,mobile:width<600 });
      await openWarning();
      assert.equal(await evaluate("document.activeElement.matches('[data-hide-cancel]')"),true);
      assert.match(await evaluate("document.querySelector('#question-hide-warning').textContent"),/لن يظهر.*مجددًا.*حسابك فقط/);
      assert.equal(await evaluate("hidingUi.hidden('one')"),false);
      assert.equal(await evaluate("document.documentElement.scrollWidth > innerWidth"),false);
      const layout = await evaluate(`(() => {const d=document.querySelector('dialog').getBoundingClientRect(),b=document.querySelector('[data-hide-confirm]').getBoundingClientRect();return d.left>=0&&d.right<=innerWidth&&b.left>=d.left&&b.right<=d.right})()`);
      assert.equal(layout,true);
      const shot = await send("Page.captureScreenshot",{ format:"png" });
      await writeFile(`/tmp/learn-question-hide-${width}.png`,Buffer.from(shot.data,"base64"));
      // Enter defaults to Cancel, so opening the warning cannot confirm hiding.
      await send("Input.dispatchKeyEvent",{ type:"keyDown",key:"Enter",code:"Enter",windowsVirtualKeyCode:13,text:"\r",unmodifiedText:"\r" });
      await send("Input.dispatchKeyEvent",{ type:"keyUp",key:"Enter",code:"Enter",windowsVirtualKeyCode:13 });
      await closeDialog();
      await current('one');
      assert.equal(await evaluate("hidingUi.hidden('one')"),false);
    }
    await openWarning();
    await send("Input.dispatchKeyEvent",{ type:"keyDown",key:"Escape",code:"Escape",windowsVirtualKeyCode:27 });
    await send("Input.dispatchKeyEvent",{ type:"keyUp",key:"Escape",code:"Escape",windowsVirtualKeyCode:27 });
    await closeDialog();
    await waitFor("document.activeElement.matches('[data-question-report]')");
    await openWarning();
    await evaluate("hidingUi.fail(true)");
    await click('[data-hide-confirm]');
    await waitFor("document.querySelector('[data-hide-status]').textContent.includes('تعذّر')");
    assert.equal(await evaluate("hidingUi.hidden('one')"),false);
    await evaluate("hidingUi.fail(false)");
    await click('[data-hide-confirm]');
    await current('two');
    assert.equal(await evaluate("hidingUi.hidden('one')"),true);
    assert.deepEqual(await evaluate("hidingUi.counts()"),{ answers:0,progress:0,exits:0 });
    // Reloading the lesson recreates the service from persisted student preferences.
    await evaluate("hidingUi.open()");await current('two');
    await click('[data-exam-card]');
    await waitFor("document.querySelector('[data-exam-solution]').getAttribute('aria-hidden') === 'false'");
    await waitFor("!!document.querySelector('[data-exam-solution] [data-question-report]')");
    await openWarning();await click('[data-hide-confirm]');await current('three');
    assert.equal(await evaluate("hidingUi.hidden('two')"),true);
    // A saved filter and direct review link cannot bring a hidden question back.
    await evaluate("hidingUi.open({mathFilterState:{scope:'lesson',stepIds:['one','two','three']},reviewStepId:'one'})");
    await current('three');
    await openWarning();await click('[data-hide-confirm]');
    await waitFor("document.querySelector('[data-hidden-exit]')");
    assert.equal(await evaluate("document.querySelector('[data-completion-step]')"),null);
    assert.deepEqual(await evaluate("hidingUi.counts()"),{ answers:0,progress:0,exits:0 });
    await evaluate("hidingUi.open({progress:{completedStepIds:['one','two','three'],completedAt:'2026-10-21'}})");
    await waitFor("document.querySelector('[data-hidden-exit]')");
    assert.equal(await evaluate("!!document.querySelector('.lesson-shell--completion')"),false);
    await click('[data-hidden-exit]');await waitFor("document.querySelector('[data-exited]')");
    await evaluate("hidingUi.owner('account:2');hidingUi.open()");await current('one');
    assert.equal(await evaluate("hidingUi.hidden('one')"),false);
    // Hiding directly from a mistake review leaves that review without answering it.
    await evaluate("hidingUi.open({reviewStepId:'one'})");await current('one');
    await openWarning();await click('[data-hide-confirm]');await waitFor("document.querySelector('[data-exited]')");
    assert.deepEqual(await evaluate("hidingUi.counts()"),{ answers:0,progress:0,exits:2 });
    await evaluate("hidingUi.destroy()");
  },{ baseUrl:`http://127.0.0.1:${server.address().port}/` });
} finally {
  await new Promise(resolve => server.close(resolve));await app.close();
}
console.log("Question hiding checks passed: desktop/mobile warning, cancel/Escape, retry, persistence, owner isolation, flashcard back, filters, review and no answer/progress credit.");
