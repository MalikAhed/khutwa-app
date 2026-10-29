import test from 'node:test';
import { brotliDecompressSync, gunzipSync } from 'node:zlib';
import assert from 'node:assert/strict';
import { access, cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { packageApp } from '../scripts/package-app.mjs';
import { versionPreview } from '../scripts/version-preview.mjs';
import { PUBLIC_DEPENDENCIES } from '../src/server/static-files.mjs';
import { createHash } from 'node:crypto';

test('static artifact is self-contained, fixture-only and excludes private/source tooling', async () => {
  const output = await packageApp();
  const html = await readFile(path.join(output, 'index.html'), 'utf8');
  assert.match(html, /name="learn-account-mode" content="fixture"/);
  const { version } = JSON.parse(await readFile(path.join(output, 'release.json'), 'utf8'));
  assert.match(version, /^[a-f0-9]{16}$/);
  assert.ok(html.includes(`src/bootstrap.js?v=${version}`));
  assert.ok(html.includes(`src/styles/lesson.css?v=${version}`));
  assert.ok((await readFile(path.join(output, 'src/bootstrap.js'), 'utf8')).includes(`import("./main.js?v=${version}")`));
  assert.ok((await readFile(path.join(output, 'src/styles/lesson.css'), 'utf8')).includes(`./lesson/question-navigation.css?v=${version}`));
  assert.ok((await readFile(path.join(output, 'src/data/lessons/subject-lesson-registry.js'), 'utf8')).includes(`./physics/momentum-impulse.js?v=${version}`));
  for (const dependency of PUBLIC_DEPENDENCIES) await access(path.join(output, dependency.slice(1)));
  for (const excluded of ['src/server', 'tests', 'scripts', 'data', 'docs', 'node_modules/typescript', 'src/data/lessons/candidates', 'assets/biomes', 'assets/course-cards']) {
    await assert.rejects(access(path.join(output, excluded)), { code:'ENOENT' });
  }
  const files = await readdir(output, { recursive:true });
  assert.ok(files.every(file => !/\.(?:map|scene\.json|prompt\.txt)$/.test(file)));
  await access(path.join(output, 'assets/fonts/noto-sans-arabic/OFL.txt'));
  await access(path.join(output, 'assets/fonts/math/Amiri-OFL.txt'));
  await access(path.join(output, 'assets/fonts/math/XITS-OFL.txt'));
  const contentManifest = JSON.parse(await readFile(path.join(output, 'content-manifest.json'), 'utf8'));
  const catalogFiles = new Set([...contentManifest.onboarding, ...contentManifest.helpers,
    ...contentManifest.lessons.flatMap(lesson => [...lesson.first, ...lesson.files])]);
  assert.deepEqual(new Set(Object.keys(contentManifest.hashes)), catalogFiles);
  for (const file of catalogFiles) {
    const bytes = await readFile(path.join(output, file.split('?')[0]));
    assert.equal(contentManifest.hashes[file], createHash('sha256').update(bytes).digest('hex'), `${file}: fingerprint matches packaged bytes`);
  }
  const referenceOnly = 'assets/lessons/islamic-education/source-crops/islamic-tasnif-2025-p019-madd-rules.webp';
  await access(referenceOnly);
  await assert.rejects(access(path.join(output, referenceOnly)), { code:'ENOENT' });
  const retainedTeaching = 'assets/lessons/ict/summary/access-p003-relational.webp';
  assert.equal(catalogFiles.has(retainedTeaching), false, 'historical teaching is outside the active download catalog');
  await access(path.join(output, retainedTeaching));
  assert.ok(files.every(file => !file.endsWith('.pdf')), 'source PDFs are archived outside the website');
  await access(path.join(output, 'assets/lessons/ict/exams/source-pages/classified-p006.webp'));
  await access(path.join(output, 'node_modules/dompurify/LICENSE'));
  const { createLearnerResources } = await import(pathToFileURL(path.join(output, 'src/services/learner-resources.js')));
  const { default:lesson } = await import(pathToFileURL(path.join(output, 'src/data/lessons/mathematics/average-change.js')));
  const { parseLessonMarkdown } = await import(pathToFileURL(path.join(output, 'src/markdown/lesson-authoring.js')));
  const step = parseLessonMarkdown(lesson.authoringSource).steps.find(step => step.type === 'mcq');
  const resources = createLearnerResources({ getAccountType:() => 'free', fetchImpl:() => { throw new Error('Packaged explanations must use authored content.'); } });
  const explanation = await resources.unlockExplanation('demo:package', { subjectId:'mathematics', lessonId:'average-change', partId:'average-change-practice', stepId:step.id }, { step });
  assert.equal(explanation.markdown, step.content.correctFeedback);
  assert.equal(resources.get('demo:package').gems, 150);

});

test('server artifact runs independently with SQLite and no installed development packages', async () => {
  const output = await packageApp({ server:true });
  const isolated = await mkdtemp(path.join(tmpdir(), 'learn-package-'));
  let app;
  try {
    await cp(output, isolated, { recursive:true });
    const lessonFile = path.join(isolated, 'src/data/lessons/mathematics/average-change.js');
    const authored = await readFile(lessonFile);
    for (const [extension,decode] of [['br',brotliDecompressSync],['gz',gunzipSync]]) {
      const compressed = await readFile(`${lessonFile}.${extension}`);
      assert.deepEqual(decode(compressed),authored, 'packaged bank compression must preserve every authored byte');
      assert.ok(compressed.length < authored.length / 4);
    }
    const { createAppServer } = await import(pathToFileURL(path.join(isolated, 'src/server/app-server.mjs')));
    const { readRuntimeConfig } = await import(pathToFileURL(path.join(isolated, 'src/server/runtime-config.mjs')));
    const config = readRuntimeConfig({ PORT:'0', PUBLIC_ORIGIN:'http://localhost', ACCOUNTS_DATABASE_PATH:path.join(isolated, 'data/accounts.sqlite') }, { root:isolated, production:true });
    app = await createAppServer({ root:isolated, config, logger:() => {} });
    const port = await app.listen();
    const base = `http://127.0.0.1:${port}`;
    assert.equal((await fetch(`${base}/readyz`)).status, 200);
    assert.match(await (await fetch(base)).text(), /name="learn-account-mode" content="http"/);
    assert.doesNotMatch(await (await fetch(base)).text(), /learn-app-mode/);
    assert.equal((await fetch(`${base}/api/auth/session`)).status, 200);
    assert.equal((await fetch(`${base}/node_modules/marked/lib/marked.esm.js`)).status, 200);
    assert.equal((await fetch(`${base}/src/server/account-store.mjs`)).status, 404);
    assert.equal((await fetch(`${base}/api/developer/reset`, { method:'POST' })).status, 404);
    await access(path.join(isolated, 'data/accounts.sqlite'));
    const manifest = JSON.parse(await readFile(path.join(isolated, 'package.json'), 'utf8'));
    assert.equal(manifest.scripts.start, 'node server.mjs');
    assert.equal(manifest.dependencies, undefined);
    for (const excluded of ['tests', 'scripts', 'dev-server.mjs', 'node_modules/typescript', 'node_modules/playwright']) {
      await assert.rejects(access(path.join(isolated, excluded)), { code:'ENOENT' });
    }
  } finally {
    await app?.close();
    await rm(isolated, { recursive:true, force:true });
  }
});


test('preview versioning covers minified CSS imports as well as url imports', async () => {
  const directory = await mkdtemp(path.join(tmpdir(), 'learn-minified-cache-'));
  try {
    await mkdir(path.join(directory, 'src'));
    await writeFile(path.join(directory, 'src/main.css'), '@import"./one.css";@import url("./two.css");');
    await writeFile(path.join(directory, 'src/one.css'), 'body{color:red}');
    await writeFile(path.join(directory, 'src/two.css'), 'body{background:white}');
    await versionPreview(directory, '<head></head>');
    const {version} = JSON.parse(await readFile(path.join(directory, 'release.json'), 'utf8'));
    const css = await readFile(path.join(directory, 'src/main.css'), 'utf8');
    assert.ok(css.includes(`"./one.css?v=${version}"`));
    assert.ok(css.includes(`"./two.css?v=${version}"`));
  } finally { await rm(directory, {recursive:true, force:true}); }
});
