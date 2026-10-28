import { partKey, recalculateQuestionRewards, summarizeParts } from "../domain/subject-progress.js";
import { getLevelProgress } from "../domain/progression.js";

// Only the authenticated owner API calls these queries. Never select credentials
// or session tokens; all progress comes from the same SQLite rows learners save.
export function createStudentDirectory(database) {
  const accountFields = "id, username, phone, curriculum, path, account_type AS accountType, created_at AS createdAt";
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
      const accountType = {free:"free",subscribed:"subscribed",suspended:"banned"}[filter];
      const where = "staff_role IS NULL AND (?='' OR instr(lower(username),lower(?))>0 OR instr(COALESCE(phone,''),?)>0)"
        + (accountType ? ` AND account_type='${accountType}'` : "");
      const total = database.prepare(`SELECT count(*) AS n FROM accounts WHERE ${where}`).get(search,search,search).n;
      const students = database.prepare(`SELECT ${accountFields} FROM accounts WHERE ${where} ORDER BY id DESC LIMIT 50 OFFSET ?`)
        .all(search,search,search,offset).map(account => ({...account,...summary(parts.all(account.id))}));
      return {students,total,offset,limit:50};
    },
    get(id) {
      const account = database.prepare(`SELECT ${accountFields} FROM accounts WHERE id=? AND staff_role IS NULL`).get(id);
      if (!account) return null;
      const records = parts.all(id);
      const rewards = recalculateQuestionRewards(new Map(records.map(row => [partKey(row), JSON.parse(row.record)])));
      return {...account,...summary(records),parts:records.map(({record,...key})=>({...key,...rewards.get(partKey(key))}))};
    },
  };
}
