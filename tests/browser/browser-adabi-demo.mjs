import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { createAppServer } from '../../src/server/app-server.mjs';
import { readRuntimeConfig } from '../../src/server/runtime-config.mjs';
import { findChrome } from './browser-session.mjs';
import { ADABI_COURSES } from '../../src/data/lessons/adabi/catalog.js';
import { loadSubjectLesson } from '../../src/data/lessons/subject-lesson-registry.js';
import { parseLessonMarkdown } from '../../src/markdown/lesson-authoring.js';

const course = ADABI_COURSES.find(course => course.subjectId === 'adabi-islamic-education');
const lessonId = course.lessons[0].id;
const lesson = await loadSubjectLesson(course.subjectId,lessonId);
const authored = parseLessonMarkdown(lesson.authoringSource,{published:true}).steps;
const written = authored.find(step => step.type === 'exam-question');
assert.ok(authored.some(step => step.type === 'mcq') && written);
const root = process.cwd();
const app = await createAppServer({root,logger:()=>{},config:readRuntimeConfig({PORT:'0',LIVE_RELOAD:'0',LEARN_BACKEND:'local',ACCOUNTS_DATABASE_PATH:':memory:'},{root})});
const base = `http://127.0.0.1:${await app.listen()}`;
let browser;
try {
  browser = await chromium.launch({executablePath:await findChrome(),headless:true,args:['--no-sandbox']});
  for (const width of [1440,390]) {
    const context = await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'});
    try {
      await context.route('**/src/bootstrap.js',route=>route.fulfill({contentType:'text/javascript',body:''}));
      const page = await context.newPage();
      const errors = [],mutations = [];
      page.on('pageerror',error=>errors.push(error.message));
      page.on('request',request=>{if(['POST','PUT','PATCH','DELETE'].includes(request.method()))mutations.push(request.url());});
      await page.goto(base,{waitUntil:'domcontentloaded'});
      await page.evaluate(()=>{
        document.querySelectorAll('link[data-app-style]').forEach(link=>{link.media='all';});
        const shell=document.querySelector('.lesson-shell');
        document.body.replaceChildren(shell);
        document.body.removeAttribute('data-startup');
      });
      for (const singleCard of [false,true]) {
        const selected = await page.evaluate(async ({subjectId,lessonId,singleCard})=>{
          window.stopDemo?.();window.demoTour?.destroy();
          const [{loadSubjectLesson},{parseLessonMarkdown},{selectLessonDemo},{renderAuthoredInteractiveLesson},{createRockyTour}] = await Promise.all([
            import('/src/data/lessons/subject-lesson-registry.js'),import('/src/markdown/lesson-authoring.js'),
            import('/src/domain/lesson-demo.js'),import('/src/ui/lesson/authored.js'),import('/src/ui/rocky-tour.js'),
          ]);
          const lesson=await loadSubjectLesson(subjectId,lessonId);
          const all=parseLessonMarkdown(lesson.authoringSource,{published:true}).steps;
          const steps=singleCard?[all.find(step=>step.type==='exam-question')]:all;
          const demo=selectLessonDemo(steps,{preserveTypes:true});
          const values=new Map();
          window.demoTourValues=values;
          const service={getLearnerProgressOwner:()=> 'account:demo-fixture',subscribe:()=>()=>{}};
          window.demoTour=createRockyTour({service,storage:{getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)},onHome:()=>{}});
          window.demoTour.arm();
          window.demoAnswers=[];window.demoProgress=[];
          const shell=document.querySelector('.lesson-shell');shell.dataset.subject=subjectId;
          window.stopDemo=renderAuthoredInteractiveLesson(shell.querySelector('.lesson-card'),lesson.title,lesson,steps,{
            demoMode:true,isLessonPart:true,
            onAnswer:answer=>window.demoAnswers.push(answer),onProgress:progress=>window.demoProgress.push(progress),
            getCompletionOutcome:()=>({xpGain:0,progress:0,totalParts:1}),
            onLessonEvent:event=>window.demoTour.lessonEvent(event),
          });
          return {id:demo.steps[0].id,type:demo.steps[0].type};
        },{subjectId:course.subjectId,lessonId,singleCard});
        await page.waitForSelector('[data-live-authored-step][data-lesson-step]');
        assert.equal(await page.locator('[data-live-authored-step]').getAttribute('data-lesson-step'),selected.id);
        assert.equal(await page.locator('.lesson-top-title').getAttribute('aria-valuemax'),'1');
        if(singleCard){
          assert.equal(selected.type,'exam-question');
          assert.equal(selected.id,written.id);
          assert.equal(await page.locator('.ui-lab-mcq').count(),0);
          assert.equal(await page.locator('[data-exam-self-check]').count(),0);
          await page.locator('[data-exam-front] .lesson-flashcard-scroll').focus();await page.keyboard.press('Enter');
          assert.equal(await page.evaluate(()=>JSON.parse(window.demoTourValues.get('tawjihi:rocky-first-run:v1:account:demo-fixture')).stage),'wait-answer');
          assert.equal(await page.locator('[data-template-primary]').isEnabled(),true);
        } else {
          assert.equal(selected.type,'mcq');
          assert.ok(await page.locator('[data-ui-lab-answer]').count()>=2);
          await page.locator('[data-ui-lab-answer][data-correct=true]').click();
          await page.locator('[data-ui-lab-check]').click();
          await page.locator('.rocky-app-tour:not([hidden])[data-tour-step=easy]').waitFor();
          await page.locator('[data-rocky-tour-next]:visible').click();
          assert.notEqual(await page.evaluate(()=>JSON.parse(window.demoTourValues.get('tawjihi:rocky-first-run:v1:account:demo-fixture')).stage),'slider');
        }
        await page.evaluate(()=>window.demoTour.destroy());
        await page.locator('[data-template-primary]').click();
        await page.locator('.subject-completion').waitFor();
        const saves=await page.evaluate(()=>({answers:window.demoAnswers,progress:window.demoProgress}));
        assert.equal(saves.answers.length,1);
        assert.equal(saves.answers[0].stepId,selected.id);
        assert.equal(saves.answers[0].correct,singleCard?null:true);
        assert.ok(saves.progress.some(value=>value.completedStepIds.includes(selected.id)));
        assert.ok(saves.progress.every(value=>value.completedStepIds.every(id=>id===selected.id)));
      }
      assert.deepEqual(errors,[]);
      assert.deepEqual(mutations,[],'demo fixtures never modify any account');
    } finally {await context.close();}
  }
  console.log('Adabi demos: original first-lesson MCQ, single original flashcard, one-step completion and source IDs verified at desktop/mobile widths; unavailable tour controls skipped.');
} finally {await browser?.close();await app.close();}
