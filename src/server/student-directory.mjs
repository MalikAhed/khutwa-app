import { partKey, recalculateQuestionRewards, summarizeParts } from "../domain/subject-progress.js";
import { getLevelProgress } from "../domain/progression.js";
import { adminStudent } from "../domain/subscriptions.js";
import { inDatabaseTransaction } from "./progress-store.mjs";
import { createHash } from "node:crypto";

export const STUDENT_FIELDS = "id,username,phone,curriculum,path,account_type,created_at,subscription_expires_at,access_disabled,admin_version";
export function studentWhere(filter = "all") {
  const active = "account_type='subscribed' AND (subscription_expires_at IS NULL OR subscription_expires_at>?)";
  const condition = filter === "suspended" ? "(access_disabled=1 OR account_type='banned')"
    : filter === "subscribed" ? `access_disabled=0 AND ${active}`
    : filter === "free" ? `access_disabled=0 AND account_type!='banned' AND NOT (${active})` : "1=1";
  return `staff_role IS NULL AND (?='' OR instr(lower(username),lower(?))>0 OR instr(COALESCE(phone,''),?)>0) AND (${condition})`;
}
export function summarizeStudentRecords(records) {
  const result = summarizeParts(records.map(([,record]) => record),records.length);
  const days = records.flatMap(([,record]) => record.activityDates || (record.completedDate ? [record.completedDate] : []));
  return { totalXp:result.totalXp,level:getLevelProgress(result.totalXp).level,streak:result.streak,questionsSolved:result.questionsSolved,
    completedParts:result.completed,mustReviewCount:result.mustReviewCount,lastActivity:days.sort().at(-1) || null };
}

// Only the authenticated owner API calls these queries. Never select credentials
// or session tokens; all progress comes from the same SQLite rows learners save.
export function createStudentDirectory(database) {
  const accountFields = STUDENT_FIELDS;
  const parts = database.prepare("SELECT subject_id AS subjectId, lesson_id AS lessonId, part_id AS partId, record FROM subject_progress WHERE account_id=?");
  const summary = records => {
    const values = [...recalculateQuestionRewards(new Map(records.map(row => [partKey(row), JSON.parse(row.record)]))).values()];
    const result = summarizeParts(values, values.length);
    const days = values.flatMap(record => record.activityDates || (record.completedDate ? [record.completedDate] : []));
    return { totalXp:result.totalXp, level:getLevelProgress(result.totalXp).level, streak:result.streak,
      questionsSolved:result.questionsSolved, completedParts:result.completed, mustReviewCount:result.mustReviewCount,
      lastActivity:days.sort().at(-1) || null };
  };
  return {
    list({search="",offset=0,filter="all"}={}) {
      // LIKE treats % and _ specially; instr preserves literal search input.
      const where = studentWhere(filter);
      const parameters = [search,search,search,...(["free","subscribed"].includes(filter) ? [new Date().toISOString()] : [])];
      const total = database.prepare(`SELECT count(*) AS n FROM accounts WHERE ${where}`).get(...parameters).n;
      const students = database.prepare(`SELECT ${accountFields} FROM accounts WHERE ${where} ORDER BY id DESC LIMIT 50 OFFSET ?`)
        .all(...parameters,offset).map(account => ({...adminStudent(account),...summary(parts.all(account.id))}));
      return {students,total,offset,limit:50};
    },
    get(id) {
      const account = database.prepare(`SELECT ${accountFields} FROM accounts WHERE id=? AND staff_role IS NULL`).get(id);
      if (!account) return null;
      const records = parts.all(id);
      const rewards = recalculateQuestionRewards(new Map(records.map(row => [partKey(row), JSON.parse(row.record)])));
      return {...adminStudent(account),...summary(records),parts:records.map(({record,...key})=>({...key,...rewards.get(partKey(key))}))};
    },
    change(id,change,actorId,token) {
      return inDatabaseTransaction(database,() => {
        const actor = database.prepare("SELECT 1 FROM accounts JOIN sessions ON sessions.account_id=accounts.id WHERE accounts.id=? AND staff_role='owner' AND access_disabled=0 AND account_type!='banned' AND token_hash=? AND expires_at>?")
          .get(Number(actorId),createHash("sha256").update(String(token || "")).digest("hex"),new Date().toISOString());
        if (!actor) throw Object.assign(new Error("انتهت جلسة الإدارة. سجّل الدخول مجددًا."),{status:401});
        const row = database.prepare(`SELECT ${accountFields} FROM accounts WHERE id=? AND staff_role IS NULL`).get(id);
        if (!row) throw Object.assign(new Error("لم يتم العثور على الطالب."),{status:404});
        if (row.admin_version !== change.version) throw Object.assign(new Error("تغيّرت بيانات الطالب. حدّثها قبل الحفظ."),{status:409});
        if (change.action === "delete" && change.confirmUsername !== row.username) throw Object.assign(new Error("اسم التأكيد لا يطابق الطالب."),{status:422});
        const statements = {
          grant:["account_type='subscribed',subscription_expires_at=?",change.expiresAt],
          revoke:["account_type='free',subscription_expires_at=NULL"],
          suspend:["access_disabled=1"],restore:["access_disabled=0,account_type=CASE WHEN account_type='banned' THEN 'free' ELSE account_type END"],
        };
        if (change.action === "delete") database.prepare("DELETE FROM accounts WHERE id=? AND staff_role IS NULL").run(id);
        else {
          const [set,...parameters] = statements[change.action];
          database.prepare(`UPDATE accounts SET ${set},admin_version=admin_version+1 WHERE id=? AND staff_role IS NULL`).run(...parameters,id);
        }
        if (["suspend","delete"].includes(change.action)) database.prepare("DELETE FROM sessions WHERE account_id=?").run(id);
        database.prepare("INSERT INTO admin_audit(actor_id,student_id,action,details,created_at) VALUES(?,?,?,?,?)")
          .run(Number(actorId),Number(id),change.action,JSON.stringify({expiresAt:change.expiresAt || null}),new Date().toISOString());
        return {status:change.action === "delete" ? "deleted" : "saved"};
      });
    },
  };
}
