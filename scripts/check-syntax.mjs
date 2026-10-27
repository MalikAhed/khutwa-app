import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { readFile } from 'node:fs/promises';
import { SourceTextModule } from 'node:vm';
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoots = ["src", "scripts", "tests"];
const files = [];

async function collectJavaScript(directory) {
  const entries = await readdir(directory, { withFileTypes:true });
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectJavaScript(target);
    else if (/\.(?:js|mjs)$/.test(entry.name)) files.push(target);
  }
}

if (process.argv.includes('--all')) {
  files.push(...["dev-server.mjs", "server.mjs", "content-worker.js", ".github/cloudflare/worker.mjs", ".github/cloudflare/verify-deployment.mjs"].map(file => path.join(projectRoot, file)));
  for (const sourceRoot of sourceRoots) await collectJavaScript(path.join(projectRoot, sourceRoot));
} else {
  const git = args => execFileSync('git', args, { cwd:projectRoot, encoding:'utf8' }).split('\0').filter(Boolean);
  const changed = new Set([
    ...git(['diff', '--name-only', '--diff-filter=ACMR', '-z', process.env.CHECK_BASE || 'HEAD', '--']),
    ...git(['ls-files', '--others', '--exclude-standard', '-z']),
  ]);
  for (const file of changed) {
    if (/\.(?:js|mjs)$/.test(file) && (await stat(path.join(projectRoot, file))).isFile()) files.push(path.join(projectRoot, file));
  }
}

for (const file of files.sort()) {
  try {
    // Parse only: never execute application or test code. One process avoids
    // hundreds of Node startups when importing a release or changing a bank.
    new SourceTextModule(await readFile(file, 'utf8'), { identifier:file });
  } catch (error) {
    console.error(`${path.relative(projectRoot, file)}: ${error.message}`);
    process.exit(1);
  }
}

console.log(`Syntax validation passed for ${files.length} JavaScript files.`);
