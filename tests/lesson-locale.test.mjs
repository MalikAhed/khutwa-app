import assert from 'node:assert/strict';
import test from 'node:test';
import { defineMarkdownLesson } from '../src/markdown/lesson-model.js';
import { defineLesson } from '../src/domain/lesson.js';
import { lessonLocale } from '../src/ui/lesson/shared.js';

const source = `:::mcq
id: locale-question
title: English question
question: Which word is a noun?
- [x] noun | book
- [ ] verb | read
explanation: Book names an object.
hint: Choose the name of an object.
:::`;

test('explicit native lesson locale survives validation and overrides metadata language guessing', () => {
  const lesson = defineMarkdownLesson({ title:'اللغة الإنجليزية', summary:'تدريب من الرزمة', locale:'en' }, source);
  assert.equal(lesson.locale, 'en');
  assert.equal(lessonLocale(lesson), 'en');
  assert.equal(lessonLocale(defineLesson({ ...lesson })), 'en');
  assert.equal(lessonLocale({ ...lesson, locale:'ar', title:'English', summary:'English' }), 'ar');
});

test('older lessons retain their existing inferred locale and invalid locale cannot publish', () => {
  assert.equal(lessonLocale({ title:'السؤال', summary:'التدريب' }), 'ar');
  assert.equal(lessonLocale({ title:'English reading', summary:'Practice' }), 'en');
  assert.throws(() => defineMarkdownLesson({ title:'Question', summary:'Practice', locale:'xx' }, source), /locale must be ar or en/);
});
