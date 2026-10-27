import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createAppServer } from "../../src/server/app-server.mjs";
import { readRuntimeConfig } from "../../src/server/runtime-config.mjs";
import { withBrowserPage } from "./browser-page.mjs";

// Focus on the shared controls. HTTP spending/persistence have progress API tests;
// startup and navigation have their own browser journeys.
const root = path.resolve(fileURLToPath(new URL("../../", import.meta.url)));
const app = await createAppServer({root,config:readRuntimeConfig({PORT:"0",LIVE_RELOAD:"0",ACCOUNTS_DATABASE_PATH:":memory:"},{root})});
const html = (await readFile(path.join(root,"index.html"),"utf8"))
  .replace(/<section id="app-splash"[\s\S]*?<\/section>/,"")
  .replace(" data-startup","").replaceAll('media="print"','media="all"')
  .replace('<script type="module" src="src/bootstrap.js"></script>',"");
const server = createServer((request,response) => {
  if (request.url.split("?",1)[0] === "/") response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}).end(html);
  else app.server.emit("request",request,response);
});
await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
try {
  await withBrowserPage(async ({base,send,evaluate,waitFor}) => {
    await send("Page.navigate",{url:base});
    await waitFor("document.readyState === 'complete'");
    await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
    await evaluate(`(async()=>{
      const [{mountAppShell},{createAuthHeader},{createLearnerResources},{renderLearnerDashboardMarkup},{renderQuestion},{renderExamQuestion},{mountQuestionFeedback}] = await Promise.all([
        import('/src/ui/app-shell.js'),import('/src/ui/auth-header.js'),import('/src/services/learner-resources.js'),import('/src/ui/learner-dashboard.js'),import('/src/ui/lesson/question.js'),import('/src/ui/lesson/exam-question.js'),import('/src/ui/question-feedback.js')
      ]);
      let type='free',clock=Date.now(),controller,stopQuestion;
      const listeners=new Set();
      const owner='demo:resource-ui';
      const snapshot={actor:'student',account:{type:'free',displayName:'طالب'},learning:{dailyStreak:0,totalXp:0,currentQuestionsTotal:100,currentQuestionsSolved:0}};
      const service={getAccountType:()=>type,getLearnerProgressOwner:()=>owner,getLearnerHomeSnapshot:()=>snapshot,subscribe:cb=>{listeners.add(cb);return()=>listeners.delete(cb)},signOut:async()=>{}};
      const resources=createLearnerResources({storage:localStorage,getAccountType:()=>type,now:()=>clock});
      const elements=mountAppShell();
      const header=createAuthHeader({guest:elements.authGuest,member:elements.authMember,label:elements.accountLabel,flowButtons:elements.authFlowButtons,signOutButton:elements.authSignOut,courseContainer:elements.courseUnits,service,resourceStore:resources,onFlow:()=>{}});
      elements.courseUnits.innerHTML=renderLearnerDashboardMarkup(snapshot,'طالب');
      const home=()=>{
        controller?.abort();stopQuestion?.();
        document.body.classList.remove('ui-lab-open','ready-lesson-open');
        elements.main.classList.remove('lesson-mode');elements.lessonView.classList.remove('is-visible');
        elements.lessonContent.replaceChildren();
      };
      const show=written=>{
        home();controller=new AbortController();
        document.body.classList.add('ui-lab-open','ready-lesson-open');
        elements.main.classList.add('lesson-mode');elements.lessonView.classList.add('is-visible');elements.lessonShell.classList.add('lesson-shell--ui-lab');
        elements.lessonBackButton.textContent='×';
        const host=document.createElement('section');host.className='ready-lesson-stage';elements.lessonContent.replaceChildren(host);
        const options={locale:'ar',onContinue:()=>{},beforeAnswer:()=>resources.get(owner).hearts===0&&!resources.get(owner).unlimited?'نفدت القلوب':undefined,onAnswer:()=>resources.spend(owner,crypto.randomUUID())};
        stopQuestion=written
          ?renderExamQuestion(host,{id:'written-resource',content:{title:'الكتاب المدرسي ص 3',body:'ما المقصود بالنموذج؟',solution:'واجهة للتعامل مع البيانات.'}},options)
          :renderQuestion(host,{...options,definition:{id:'mcq-resource',type:'mcq',content:{title:'امتحان سابق',prompt:'اختر الإجابة الصحيحة.',answers:[{id:'a',text:'الأولى',correct:true},{id:'b',text:'الثانية',correct:false}]}}});
        mountQuestionFeedback({host,shell:elements.lessonShell,signal:controller.signal,locale:'ar',feedback:{report:async()=>({status:'saved'}),getRating:()=>null}});
      };
      window.resourceUi={show,home,balance:()=>resources.get(owner),advance:()=>{clock+=12*60*1000;header.update()},empty:()=>{while(resources.get(owner).hearts>0)resources.spend(owner,crypto.randomUUID())},subscribe:()=>{type='subscribed';listeners.forEach(cb=>cb())},destroy:()=>{home();header.destroy()}};
      await document.fonts.ready;
    })()`);
    const hearts=value=>waitFor(`document.querySelector('[data-resource-hearts]').textContent === '${value}'`);
    await hearts(10);
    assert.equal(await evaluate("document.querySelector('[data-resource-gems]').textContent"),"200");
    const viewport=async width=>{
      await send("Emulation.setDeviceMetricsOverride",{width,height:900,deviceScaleFactor:1,mobile:width<600});
      await evaluate("new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)))");
    };
    for(const width of [1440,390]) {
      await viewport(width);
      const layout=await evaluate(`(()=>{
        const rect=s=>document.querySelector(s).getBoundingClientRect();
        const h=rect('.learner-dashboard__header'),a=rect('.learner-dashboard__avatar'),t=rect('#learner-dashboard-title'),m=rect('.dashboard-materials-heading h3'),p=rect('.dashboard-materials-heading>span');
        const gap=parseFloat(getComputedStyle(document.querySelector('.learner-dashboard__header')).columnGap);
        return {right:Math.abs(a.right-h.right)+Math.abs(t.right+gap-a.left),row:Math.abs(m.y+m.height/2-p.y-p.height/2),overflow:document.documentElement.scrollWidth>innerWidth,copy:document.querySelector('.learner-dashboard').textContent,color:getComputedStyle(document.querySelector('[data-resource-hearts]')).color};
      })()`);
      assert.ok(layout.right<2);assert.ok(layout.row<2);assert.equal(layout.overflow,false);
      assert.doesNotMatch(layout.copy,/اختر المادة المتاحة|اختر مادة للبدء/);
      assert.equal(layout.color,"rgb(255, 75, 75)");
      const shot=await send("Page.captureScreenshot",{format:"png"});
      await writeFile(`/tmp/learn-resources-${width}.png`,Buffer.from(shot.data,"base64"));
    }
    const colors=await evaluate(`(async()=>{
      const {renderSubjectRoadmapMarkup}=await import('/src/ui/subject-roadmap.js');const {getSubjectRoadmap}=await import('/src/data/subject-roadmaps.js');
      const host=document.createElement('div');document.body.append(host);
      const colors=['ict','mathematics','mathematics-2','physics','biology','chemistry','english','arabic','islamic-education'].map(subject=>{
        host.innerHTML=renderSubjectRoadmapMarkup(getSubjectRoadmap(subject),{questionsOnly:true});host.querySelector('[data-roadmap-bubble]').hidden=false;
        return [subject,getComputedStyle(host.querySelector('.roadmap-book-tag')).color];
      });host.remove();return colors;
    })()`);
    for(const [subject,color] of colors) assert.equal(color,"rgb(75, 85, 99)",subject);
    const flagLayout=async()=>{
      for(const width of [1440,390]) {
        await viewport(width);
        const layout=await evaluate(`(()=>{
          const f=document.querySelector('[data-question-report]'),s=f.parentElement.querySelector('.lesson-question-source');
          const a=f.getBoundingClientRect(),b=s.getBoundingClientRect(),bar=document.querySelector('.lesson-top').getBoundingClientRect();
          return {top:!!f.closest('.lesson-top'),inert:!!f.closest('[inert]'),left:a.left<b.left,under:a.top>=bar.bottom,aligned:Math.abs(a.y+a.height/2-b.y-b.height/2)};
        })()`);
        assert.deepEqual({...layout,aligned:layout.aligned<2},{top:false,inert:false,left:true,under:true,aligned:true});
      }
    };
    await evaluate("resourceUi.show(false)");await flagLayout();
    await evaluate("document.querySelector('[data-question-report]').focus()");
    await send("Input.dispatchKeyEvent",{type:"keyDown",key:"Enter",code:"Enter",windowsVirtualKeyCode:13,text:"\r",unmodifiedText:"\r"});
    await send("Input.dispatchKeyEvent",{type:"keyUp",key:"Enter",code:"Enter",windowsVirtualKeyCode:13});
    await waitFor("document.querySelector('.question-report-dialog[open]')");
    await send("Input.dispatchKeyEvent",{type:"keyDown",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
    await send("Input.dispatchKeyEvent",{type:"keyUp",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
    await waitFor("!document.querySelector('.question-report-dialog') && document.activeElement.matches('[data-question-report]')");
    await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=false]').click();document.querySelector('[data-ui-lab-check]').click()");await hearts(9);
    await evaluate("resourceUi.show(true)");await flagLayout();
    await evaluate("document.querySelector('[data-exam-card]').click()");
    await waitFor("document.querySelector('[data-exam-solution]').getAttribute('aria-hidden')==='false'");await flagLayout();
    await evaluate("document.querySelector('[data-exam-correct=false]').click();document.querySelector('[data-template-primary]').click()");await hearts(8);
    await evaluate("document.querySelector('[data-template-primary]').click()");await hearts(8);
    await evaluate("resourceUi.empty();resourceUi.show(false)");await hearts(0);
    await evaluate("document.querySelector('[data-ui-lab-answer][data-correct=true]').click();document.querySelector('[data-ui-lab-check]').click()");
    assert.match(await evaluate("document.querySelector('[data-ui-lab-feedback]').textContent"),/نفدت القلوب/);
    await evaluate("resourceUi.advance()");await hearts(1);
    await evaluate("document.querySelector('[data-ui-lab-check]').click()");await hearts(0);
    await evaluate("resourceUi.subscribe()");await hearts("∞");
    assert.equal(await evaluate("document.querySelector('[data-resource-gems]').textContent"),"∞");
    assert.equal(await evaluate("getComputedStyle(document.querySelector('[data-resource-hearts]')).color"),"rgb(255, 75, 75)");
    await evaluate("resourceUi.destroy()");
  },{baseUrl:`http://127.0.0.1:${server.address().port}/`});
} finally {
  await new Promise(resolve=>server.close(resolve));await app.close();
}
console.log("Resource UI checks passed: desktop/mobile layout, all subject source labels, keyboard/report flags on both card faces, right/wrong spending, refill, depletion and subscription infinity.");
