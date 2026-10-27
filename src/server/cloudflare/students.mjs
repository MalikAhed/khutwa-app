import { createHash } from "node:crypto";
import { adminStudent } from "../../domain/subscriptions.js";
import { STUDENT_FIELDS, studentWhere, summarizeStudentRecords } from "../student-directory.mjs";

export function createCloudStudents(env) {
  const database = env.ACCOUNTS;
  const query = (sql,...values) => database.prepare(sql).bind(...values);
  return {
    async list({search="",offset=0,filter="all"}={}) {
      const where = studentWhere(filter);
      const parameters = [search,search,search,...(["free","subscribed"].includes(filter) ? [new Date().toISOString()] : [])];
      const [count,page] = await database.batch([
        query(`SELECT count(*) AS n FROM accounts WHERE ${where}`,...parameters),
        query(`SELECT ${STUDENT_FIELDS} FROM accounts WHERE ${where} ORDER BY id DESC LIMIT 50 OFFSET ?`,...parameters,offset),
      ]);
      return {students:page.results.map(adminStudent),total:count.results[0].n,offset,limit:50};
    },
    async get(id,token) {
      const account = await query(`SELECT ${STUDENT_FIELDS} FROM accounts WHERE id=? AND staff_role IS NULL`,Number(id)).first();
      if (!account) return null;
      const records = await env.STUDENTS.getByName(`account:${id}`).inspectProgress(Number(id),token);
      return { ...adminStudent(account),...summarizeStudentRecords(records),parts:records.map(([key,record]) => {
        const [subjectId,lessonId,partId] = JSON.parse(key);
        return {subjectId,lessonId,partId,...record};
      }) };
    },
    async change(id,change,actorId,token) {
      const row = await query(`SELECT ${STUDENT_FIELDS} FROM accounts WHERE id=? AND staff_role IS NULL`,Number(id)).first();
      if (!row) throw Object.assign(new Error("لم يتم العثور على الطالب."),{status:404});
      if (row.admin_version !== change.version) throw Object.assign(new Error("تغيّرت بيانات الطالب. حدّثها قبل الحفظ."),{status:409});
      if (change.action === "delete" && row.username !== change.confirmUsername) throw Object.assign(new Error("اسم التأكيد لا يطابق الطالب."),{status:422});
      const now = new Date().toISOString();
      const actor = `EXISTS (SELECT 1 FROM accounts AS owner JOIN sessions ON sessions.account_id=owner.id
        WHERE owner.id=? AND owner.staff_role='owner' AND owner.access_disabled=0 AND owner.account_type!='banned' AND sessions.token_hash=? AND sessions.expires_at>?)`;
      const guard = [Number(id),change.version,Number(actorId),createHash("sha256").update(String(token || "")).digest("hex"),now];
      const operations = {
        grant:["account_type='subscribed',subscription_expires_at=?",change.expiresAt],revoke:["account_type='free',subscription_expires_at=NULL"],
        suspend:["access_disabled=1"],restore:["access_disabled=0,account_type=CASE WHEN account_type='banned' THEN 'free' ELSE account_type END"],
      };
      const [set,...values] = operations[change.action] || [];
      const statements = [change.action === "delete"
        ? query(`DELETE FROM accounts WHERE id=? AND admin_version=? AND staff_role IS NULL AND ${actor} RETURNING id`,...guard)
        : query(`UPDATE accounts SET ${set},admin_version=admin_version+1 WHERE id=? AND admin_version=? AND staff_role IS NULL AND ${actor} RETURNING id`,...values,...guard)];
      if (change.action === "delete") statements.push(query("INSERT INTO student_deletions SELECT ?,?,? WHERE changes()=1",Number(id),Number(actorId),now));
      statements.push(query("INSERT INTO admin_audit(actor_id,student_id,action,details,created_at) SELECT ?,?,?,?,? WHERE changes()=1",Number(actorId),Number(id),change.action,JSON.stringify({expiresAt:change.expiresAt || null}),now));
      if (change.action === "suspend") statements.push(query("DELETE FROM sessions WHERE account_id=? AND changes()=1",Number(id)));
      const result = await database.batch(statements);
      if (!result[0].results.length) throw Object.assign(new Error("تغيّر الحساب أو انتهت جلسة الإدارة. حدّث الصفحة."),{status:409});
      let cleanupPending = false;
      if (change.action === "delete") {
        try {
          await env.STUDENTS.getByName(`account:${id}`).eraseDeletedAccount(Number(id));
          await query("DELETE FROM student_deletions WHERE account_id=?",Number(id)).run();
        } catch { cleanupPending = true; }
      }
      return {status:change.action === "delete" ? "deleted" : "saved",cleanupPending};
    },
  };
}

export async function finishStudentDeletions(env) {
  const {results} = await env.ACCOUNTS.prepare("SELECT account_id FROM student_deletions LIMIT 25").all();
  for (const {account_id:id} of results) {
    await env.STUDENTS.getByName(`account:${id}`).eraseDeletedAccount(id);
    await env.ACCOUNTS.prepare("DELETE FROM student_deletions WHERE account_id=?").bind(id).run();
  }
}
