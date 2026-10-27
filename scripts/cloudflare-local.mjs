import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile,readdir } from "node:fs/promises";
import { Miniflare } from "miniflare";
import { readBuildOutput } from "@cloudflare/build-output-utils";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
export async function startCloudflareLocal({ persistTo,port=0,pages=false } = {}) {
  const output = await readBuildOutput(root);
  const {config,bundleDir,assetsDir} = output.workers.default;
  const modules = Object.fromEntries(await Promise.all(Object.entries(config.manifest.modules).map(async ([name,module]) =>
    [name,{...module,contents:await readFile(path.join(bundleDir,name),"utf8")}])));
  const backend = {config:{...config,manifest:{mainModule:config.manifest.mainModule,modulesRoot:bundleDir,modules},
    assets:{...config.assets,directory:assetsDir,hasUserWorker:true}},dev:{rootPath:root}};
  const workers = [backend];
  if (pages) {
    const routes = JSON.parse(await readFile(path.join(root,"_pages/_routes.json"),"utf8"));
    workers.unshift({config:{name:"khutwa-pages",compatibilityDate:config.compatibilityDate,
      env:{ASSETS:{type:"assets"},BACKEND:{type:"worker",worker:config.name}},
      manifest:{mainModule:"pages.mjs",modulesRoot:root,modules:{"pages.mjs":{type:"esm",contents:await readFile(path.join(root,"_pages/_worker.js"),"utf8")}}},
      assets:{directory:path.join(root,"_pages"),hasUserWorker:true,htmlHandling:"auto-trailing-slash",notFoundHandling:"404-page",runWorkerFirst:routes.include}},dev:{rootPath:root}});
  }
  const runtime = new Miniflare({ port,logRequests:false,telemetry:{enabled:false},
    ...(persistTo ? {resourcePersistencePath:persistTo} : {}),
    workers,
  });
  try {
    const url = await runtime.ready;
    const database = await runtime.getD1Database("ACCOUNTS",config.name);
    await database.prepare("CREATE TABLE IF NOT EXISTS d1_migrations (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL UNIQUE,applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)").run();
    const applied = new Set((await database.prepare("SELECT name FROM d1_migrations").all()).results.map(row=>row.name));
    for (const name of (await readdir(path.join(root,"migrations"))).filter(name=>name.endsWith(".sql")).sort()) {
      if (applied.has(name)) continue;
      const sql = await readFile(path.join(root,"migrations",name),"utf8");
      const statements = sql.replace(/^--.*$/gm,"").split(";").map(sql=>sql.trim()).filter(Boolean).map(sql=>database.prepare(sql));
      statements.push(database.prepare("INSERT INTO d1_migrations(name) VALUES(?)").bind(name));
      await database.batch(statements);
    }
    return { runtime,database,base:url.href,close:()=>runtime.dispose() };
  } catch(error) { await runtime.dispose();throw error; }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const app = await startCloudflareLocal({persistTo:path.join(root,".cloudflare/local-state"),port:8787});
  console.log(`Khutwa Workers preview: ${app.base}`);
}
