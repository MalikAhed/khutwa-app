import { mkdir,readFile,writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Input must be the freshly recovered, reviewed current Worker (including all
// existing policies). This prepares code only; it never uploads or migrates.
export async function prepareQuestionReportsWorker({baseline,directory}) {
  const source = await readFile(baseline,'utf8');
  if (!/export\s*\{[^}]*\bas Authentication\b/.test(source) || !/\bas StudentProgress\b/.test(source))
    throw new Error('Expected the reviewed current Worker module.');
  if (source.includes('inspectQuestionReports(')) throw new Error('Question reports are already integrated; review the current source.');
  await mkdir(directory,{recursive:true});
  let helper = path.relative(directory,path.resolve('src/server/cloudflare-question-reports.mjs')).split(path.sep).join('/');
  if (!helper.startsWith('.')) helper = './'+helper;
  await writeFile(path.join(directory,'current.mjs'),source);
  await writeFile(path.join(directory,'entry.mjs'),`import original, { StudentProgress as CurrentStudentProgress } from './current.mjs';
import { withOwnerQuestionReports, withQuestionReportInspection } from ${JSON.stringify(helper)};
export * from './current.mjs';
export const StudentProgress = withQuestionReportInspection(CurrentStudentProgress);
export default withOwnerQuestionReports(original);
`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [baseline,directory] = process.argv.slice(2);
  if (!baseline || !directory) throw new Error('Usage: node scripts/prepare-question-reports-worker.mjs <reviewed-current-worker.mjs> <ignored-output-directory>');
  await prepareQuestionReportsWorker({baseline:path.resolve(baseline),directory:path.resolve(directory)});
  console.log('Unpublished read-only reports candidate prepared. No resources or live data changed.');
}
