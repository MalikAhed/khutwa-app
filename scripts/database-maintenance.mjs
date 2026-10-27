import { createHash, randomUUID } from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import { access, chmod, mkdir, mkdtemp, open, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createAccountStore } from '../src/server/account-store.mjs';

// VACUUM INTO takes a consistent SQLite snapshot, including committed WAL data.
// The destination must be new. No live database is overwritten or copied as bytes.
export async function backupDatabase(source,destination) {
  await access(source);
  await mkdir(path.dirname(path.resolve(destination)),{recursive:true});
  const reservation=await open(destination,'wx',0o600);
  await reservation.close();
  let database;
  try {
    database=new DatabaseSync(source,{readOnly:true});
    database.prepare('VACUUM INTO ?').run(path.resolve(destination));
  }
  catch(error){await rm(destination,{force:true});throw error;}
  finally{database?.close();}
  await chmod(destination,0o600);
}

export function databaseSummary(filename) {
  const db=new DatabaseSync(filename,{readOnly:true});
  try {
    const integrity=db.prepare('PRAGMA integrity_check').get().integrity_check;
    if(integrity!=='ok')throw new Error('SQLite integrity check failed.');
    const tables=new Set(db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all().map(row=>row.name));
    const columns=tables.has('accounts')?db.prepare('PRAGMA table_info(accounts)').all():[];
    const legacyAccounts=columns.length>0&&(!columns.some(column=>column.name==='curriculum')||columns.some(column=>['email','phone'].includes(column.name)&&column.notnull));
    return {legacyAccounts,version:db.prepare('PRAGMA user_version').get().user_version,
      ...Object.fromEntries(['accounts','sessions','subject_progress','progress_updates'].map(table=>[table,tables.has(table)?db.prepare(`SELECT count(*) AS count FROM ${table}`).get().count:0]))};
  }finally{db.close();}
}

// Explicit operator action. Preserve the account sequence: an old browser cache
// must never belong to a newly registered student, even before its next refresh.
export async function resetDatabase(filename) {
  await access(filename);
  const store=createAccountStore({databasePath:filename});
  store.close();
  const database=new DatabaseSync(filename);
  const before=databaseSummary(filename);
  try {
    database.exec('PRAGMA foreign_keys=ON; PRAGMA secure_delete=ON; PRAGMA busy_timeout=5000; BEGIN IMMEDIATE;');
    try {
      database.exec('DELETE FROM accounts;');
      database.prepare("INSERT INTO app_metadata(key,value) VALUES('data_reset_id',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").run(randomUUID());
      database.exec('COMMIT;');
    } catch(error) {database.exec('ROLLBACK;');throw error;}
    database.exec('PRAGMA wal_checkpoint(TRUNCATE); VACUUM; PRAGMA wal_checkpoint(TRUNCATE);');
    return {before,after:databaseSummary(filename)};
  } finally {database.close();}
}

// Compare logical rows, not raw WAL/database bytes; do not expose private rows.
function contentDigest(filename) {
  const db = new DatabaseSync(filename, {readOnly:true});
  try {
    const hash = createHash('sha256');
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name").all();
    for (const {name} of tables) {
      hash.update(name);
      const quoted = '"' + name.replaceAll('"', '""') + '"';
      const rows = db.prepare(`SELECT * FROM ${quoted}`).all().map(row => JSON.stringify(row)).sort();
      for (const row of rows) hash.update(row);
    }
    return hash.digest('hex');
  } finally { db.close(); }
}

export async function verifyRecovery(source) {
  const directory=await mkdtemp(path.join(tmpdir(),'learn-restore-'));
  const target=path.join(directory,'restored.sqlite');
  const started=performance.now();
  try {
    const before=databaseSummary(source);
    const originalDigest=contentDigest(source);
    await backupDatabase(source,target);
    const store=createAccountStore({databasePath:target});
    store.close();
    const after=databaseSummary(target);
    if(['accounts','subject_progress','progress_updates',...(before.legacyAccounts?[]:['sessions'])].some(table=>before[table]!==after[table]))throw new Error('Restore or migration changed record counts.');
    if(contentDigest(source)!==originalDigest)throw new Error("The source changed during the recovery check; rerun against a stable backup.");
    return {before,after,sessionsInvalidated:before.sessions-after.sessions,restoredInMs:Math.round(performance.now()-started),sourceUnchanged:true};
  }finally{await rm(directory,{recursive:true,force:true});}
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  const [action,source,destination]=process.argv.slice(2);
  if(!source||!['backup','restore-check','migrate-check','reset'].includes(action)||(action==='backup'&&!destination)||(action==='reset'&&destination!=='--confirm'))throw new Error('Usage: database-maintenance.mjs backup SOURCE NEW_DESTINATION | restore-check BACKUP | migrate-check SOURCE | reset SOURCE --confirm');
  if(action==='backup') {await backupDatabase(source,destination);console.log('SQLite backup completed.');}
  else if(action==='reset') console.log(JSON.stringify(await resetDatabase(source),null,2));
  else console.log(JSON.stringify(await verifyRecovery(source),null,2));
}
