import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { DEVICE_SCHEMA } from "../src/server/browser-registration.mjs";
import { BROWSER_POLICY_SCHEMA } from '../src/server/browser-policy-store.mjs';

// Prepare an unpublished candidate from a freshly recovered live Worker. Never
// upload a historical baseline, create replacement namespaces, or migrate live
// data here. OPERATIONS.md requires recovery rehearsal before backend publishing.
export async function prepareAccountPolicyWorker({ baseline, directory }) {
  const source = await readFile(baseline, "utf8");
  if (!/export\s*\{[^}]*\bas Authentication\b/.test(source)
    || !/\bas StudentProgress\b/.test(source)) throw new Error("Expected the recovered live Worker module.");
  await mkdir(directory, { recursive:true });
  await copyFile(baseline, path.join(directory, "baseline.mjs"));
  const relativeImport = file => {
    const relative = path.relative(directory, path.resolve(file)).split(path.sep).join("/");
    return relative.startsWith(".") ? relative : `./${relative}`;
  };
  const entry = `import original, { Authentication as BaseAuthentication, StudentProgress as BaseStudentProgress } from './baseline.mjs';
import { withBrowserRegistration } from ${JSON.stringify(relativeImport("src/server/cloudflare-browser-registration.mjs"))};
import { withDailyResources } from ${JSON.stringify(relativeImport("src/server/cloudflare-daily-resources.mjs"))};
export const Authentication = withBrowserRegistration(BaseAuthentication);
export const StudentProgress = withDailyResources(BaseStudentProgress);
export default original;
`;
  await writeFile(path.join(directory, "entry.mjs"), entry);
  await writeFile(path.join(directory, "account-devices.sql"), DEVICE_SCHEMA + '\n' + BROWSER_POLICY_SCHEMA + "\n");
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const [baseline, directory] = process.argv.slice(2);
  if (!baseline || !directory) throw new Error("Usage: node scripts/prepare-account-policy-worker.mjs <recovered-worker.mjs> <ignored-output-directory>");
  await prepareAccountPolicyWorker({ baseline:path.resolve(baseline), directory:path.resolve(directory) });
  console.log("Unpublished Worker candidate prepared. No resources or live data were changed.");
}
