import { defaultAnswerRating } from "../domain/question-ratings.js";
import { questionRewardKey } from "../domain/question-rewards.js";

export function createQuestionFeedbackStore(database) {
  database.exec(`
    CREATE TABLE IF NOT EXISTS question_ratings (
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      subject_id TEXT NOT NULL, lesson_id TEXT NOT NULL, part_id TEXT NOT NULL, step_id TEXT NOT NULL,
      rating TEXT NOT NULL CHECK(rating IN ('easy','medium','hard')), updated_at TEXT NOT NULL,
      PRIMARY KEY(account_id,subject_id,lesson_id,part_id,step_id)
    );
    CREATE TABLE IF NOT EXISTS hidden_questions (
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      subject_id TEXT NOT NULL, step_id TEXT NOT NULL, created_at TEXT NOT NULL,
      PRIMARY KEY(account_id,subject_id,step_id)
    );
    CREATE TABLE IF NOT EXISTS question_reports (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      subject_id TEXT NOT NULL, lesson_id TEXT NOT NULL, part_id TEXT NOT NULL, step_id TEXT NOT NULL,
      reason TEXT NOT NULL, details TEXT NOT NULL, created_at TEXT NOT NULL,
      UNIQUE(account_id,subject_id,lesson_id,part_id,step_id,reason)
    );
  `);
  if (!database.prepare("PRAGMA table_info(question_ratings)").all().some(column => column.name === "automatic"))
    database.exec("ALTER TABLE question_ratings ADD COLUMN automatic INTEGER NOT NULL DEFAULT 0");
  const rate = database.prepare(`INSERT INTO question_ratings VALUES(?,?,?,?,?,?,?,?)
    ON CONFLICT(account_id,subject_id,lesson_id,part_id,step_id)
    DO UPDATE SET rating=excluded.rating,updated_at=excluded.updated_at,automatic=excluded.automatic
    WHERE excluded.automatic=0 OR question_ratings.automatic=1`);
  const report = database.prepare(`INSERT INTO question_reports(account_id,subject_id,lesson_id,part_id,step_id,reason,details,created_at)
    VALUES(?,?,?,?,?,?,?,?) ON CONFLICT(account_id,subject_id,lesson_id,part_id,step_id,reason)
    DO UPDATE SET details=excluded.details`);
  const hide = database.prepare(`INSERT INTO hidden_questions VALUES(?,?,?,?)
    ON CONFLICT(account_id,subject_id,step_id) DO NOTHING`);
  return {
    hidden(accountId) {
      return database.prepare("SELECT subject_id AS subjectId,step_id AS stepId FROM hidden_questions WHERE account_id=?").all(accountId);
    },
    save(accountId, value) {
      const key = [accountId,value.subjectId,value.lessonId,value.partId,value.stepId];
      if (value.type === "rating") {
        const sameQuestion = this.ratings(accountId).filter(item => questionRewardKey(item) === questionRewardKey(value));
        if (value.automatic && sameQuestion.some(item => !item.automatic)) return;
        const updatedAt = new Date().toISOString();
        for (const item of sameQuestion) rate.run(accountId,item.subjectId,item.lessonId,item.partId,item.stepId,value.rating,updatedAt,value.automatic ? 1 : 0);
        rate.run(...key,value.rating,updatedAt,value.automatic ? 1 : 0);
      }
      else if (value.type === "hide") hide.run(accountId,...JSON.parse(questionRewardKey(value)),new Date().toISOString());
      else report.run(...key,value.reason,value.details || "",new Date().toISOString());
    },
    ratings(accountId) {
      const ratings = database.prepare(`SELECT subject_id AS subjectId,lesson_id AS lessonId,part_id AS partId,step_id AS stepId,rating,automatic,updated_at AS updatedAt
        FROM question_ratings WHERE account_id=? ORDER BY updated_at`).all(accountId).map(row => ({ ...row,automatic:Boolean(row.automatic) }));
      const rated = new Set(ratings.map(questionRewardKey));
      // Recover answers saved before automatic ratings, or when their separate
      // request failed. Never replace an existing automatic or explicit choice.
      for (const row of database.prepare('SELECT subject_id,lesson_id,part_id,record FROM subject_progress WHERE account_id=?').all(accountId)) {
        for (const item of JSON.parse(row.record).review || []) {
          const rating = defaultAnswerRating(item);
          if (!rating) continue;
          const key = { subjectId:row.subject_id,lessonId:row.lesson_id,partId:row.part_id,stepId:item.stepId };
          const identity = questionRewardKey(key);
          if (rated.has(identity)) continue;
          rated.add(identity);
          ratings.push({ ...key,rating,automatic:true,updatedAt:'' });
        }
      }
      return ratings;
    },
    reports(accountId) {
      return database.prepare("SELECT * FROM question_reports WHERE account_id=? ORDER BY id DESC").all(accountId);
    },
  };
}
