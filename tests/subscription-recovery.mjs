import {readFileSync} from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import assert from 'node:assert/strict';
import {initializeProgressSchema} from '../src/server/progress-store.mjs';
const root=process.argv[2];
const quote=s=>'"'+s.replaceAll('"','""')+'"';
const normalize=rows=>rows.map(row=>JSON.stringify(row)).sort();
const tables=db=>db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'").all().map(x=>x.name);
const snapshot=db=>Object.fromEntries(tables(db).map(name=>[name,{columns:db.prepare('PRAGMA table_info('+quote(name)+')').all().map(row=>row.name),rows:normalize(db.prepare('SELECT * FROM '+quote(name)).all())}]));
const unchanged=(db,before)=>{for(const [name,{columns,rows}] of Object.entries(before))assert.deepEqual(normalize(db.prepare('SELECT '+columns.map(quote).join(',')+' FROM '+quote(name)).all()),rows,`Preserve ${name}`);assert.equal(db.prepare('PRAGMA integrity_check').get().integrity_check,'ok');};
const d1=new DatabaseSync(':memory:');d1.exec(readFileSync(root+'/accounts.sql','utf8'));const original=snapshot(d1);d1.exec('ALTER TABLE accounts ADD COLUMN subscription_subjects TEXT');unchanged(d1,original);d1.close();
const data=JSON.parse(readFileSync(root+'/durable-objects.json','utf8'));let count=0,rows=0;
for(const ns of data.namespaces)for(const item of ns.saved){
 const db=new DatabaseSync(':memory:');db.exec('PRAGMA foreign_keys=OFF');
 for(const row of item.schema.rows.filter(row=>row[1]==='table'))db.exec(row[2]);
 for(const table of item.data){const query=db.prepare('INSERT INTO '+quote(table.name)+' ('+table.columns.map(quote).join(',')+') VALUES ('+table.columns.map(()=>'?').join(',')+')');for(const row of table.rows)query.run(...row.map(v=>Array.isArray(v)?Buffer.from(v):v));rows+=table.rows.length;}
 for(const row of item.schema.rows.filter(row=>row[1]!=='table'))db.exec(row[2]);
 const before=snapshot(db);
 if(tables(db).includes('subject_progress')){
  const adapter={exec:sql=>db.exec(sql),prepare:sql=>db.prepare(sql),getSchemaVersion:()=>db.prepare('SELECT version FROM app_schema WHERE id=1').get().version,setSchemaVersion:v=>db.prepare('UPDATE app_schema SET version=? WHERE id=1').run(v),transactionSync:fn=>{db.exec('BEGIN');try{const r=fn();db.exec('COMMIT');return r;}catch(e){db.exec('ROLLBACK');throw e;}}};
  initializeProgressSchema(adapter);initializeProgressSchema(adapter);
 }
 unchanged(db,before);db.close();count++;
}
console.log(`Isolated recovery and additive migration passed: D1 ${Object.keys(original).length} original tables; ${count} Durable Objects and ${rows} preserved rows. No live restore.`);
