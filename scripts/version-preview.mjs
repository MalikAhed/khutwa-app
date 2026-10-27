import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

// Version the whole module graph, including lazy imports and CSS @imports.
// A new document must never combine a new entry point with cached old modules.
export async function versionPreview(directory, html) {
  const files = (await readdir(path.join(directory, "src"), { recursive:true }))
    .filter(file => /\.(?:js|css)$/.test(file)).sort();
  const sources = await Promise.all(files.map(file => readFile(path.join(directory, "src", file), "utf8")));
  const hash = createHash("sha256").update("preview-assets-v2").update(html);
  files.forEach((file, index) => hash.update(file).update(sources[index]));
  const version = hash.digest("hex").slice(0, 16);
  for (const [index, file] of files.entries()) {
    let source = sources[index];
    if (file.endsWith(".js")) {
      const imports = ts.preProcessFile(source, true, true).importedFiles;
      for (const entry of imports.reverse()) {
        if (!/^(?:\.{1,2}\/|\/).*\.m?js$/.test(entry.fileName)) continue;
        if (source.slice(entry.pos + 1, entry.end + 1) !== entry.fileName) throw new Error(`Cannot version import in ${file}`);
        source = source.slice(0, entry.end + 1) + `?v=${version}` + source.slice(entry.end + 1);
      }
    } else {
      source = source.replace(/(@import\s*(?:url\(\s*)?["'])([^"']+\.css)(["'](?:\s*\))?)/g, `$1$2?v=${version}$3`);
    }
    await writeFile(path.join(directory, "src", file), source);
  }
  await writeFile(path.join(directory, "release.json"), JSON.stringify({ version }));
  return html.replace("</head>", `  <meta name="learn-release" content="${version}" />\n</head>`)
    .replace(/((?:src|href)="src\/[^"?]+\.(?:js|css))"/g, `$1?v=${version}"`);
}
