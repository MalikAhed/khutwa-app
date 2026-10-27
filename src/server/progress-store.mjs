import { createHash } from "node:crypto";
import { EXPLANATION_GEM_COST } from "../domain/question-explanations.js";
import { isSourceQuestionAlias, questionRewardKey, resolveQuestionLocation } from "../domain/question-rewards.js";
import { resourceSnapshot, spendHeart, SUPER_TRIAL_MS } from "../domain/learner-resources.js";
import { applyProgressUpdate, emptyPart, localDateKey, mergeImportedPart, recalculateQuestionRewards, validReview } from "../domain/subject-progress.js";

export function assertSupportedDatabaseVersion(database) {
  const version = Number(database.prepare("PRAGMA user_version").get().user_version);
  if (version > 1) throw new Error("This server cannot open a newer database schema.");
 }

export function initializeProgressSchema(database) {
  assertSupportedDatabaseVersion(database);
  database.exec(`BEGIN IMMEDIATE;
    CREATE TABLE IF NOT EXISTS subject_progress (
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      subject_id TEXT NOT NULL, lesson_id TEXT NOT NULL, part_id TEXT NOT NULL,
      record TEXT NOT NULL, revision INTEGER NOT NULL DEFAULT 0,
      PRIMARY KEY(account_id, subject_id, lesson_id, part_id)
    );
    CREATE TABLE IF NOT EXISTS progress_updates (
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      update_id TEXT NOT NULL, digest TEXT NOT NULL,
      PRIMARY KEY(account_id, update_id)
    );
    CREATE TABLE IF NOT EXISTS learner_resources (
      account_id INTEGER PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
      hearts INTEGER NOT NULL, gems INTEGER NOT NULL, refill_at INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS learner_super_trials (
      account_id INTEGER PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
      ends_at INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS question_explanation_unlocks (
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      question_key TEXT NOT NULL, unlocked_at INTEGER NOT NULL,
      PRIMARY KEY(account_id,question_key)
    );
    PRAGMA user_version = 1;
    COMMIT;`);
}

export function createDatabaseProgressStore(database, { questionFeedback } = {}) {
  initializeProgressSchema(database);
  const lookup = database.prepare('SELECT record,revision FROM subject_progress WHERE account_id=? AND subject_id=? AND lesson_id=? AND part_id=?');
  const upsert = database.prepare(`INSERT INTO subject_progress(account_id,subject_id,lesson_id,part_id,record,revision) VALUES(?,?,?,?,?,?)
    ON CONFLICT(account_id,subject_id,lesson_id,part_id) DO UPDATE SET record=excluded.record,revision=excluded.revision`);
  const receipt = database.prepare('SELECT digest FROM progress_updates WHERE account_id=? AND update_id=?');
  const remember = database.prepare('INSERT INTO progress_updates(account_id,update_id,digest) VALUES(?,?,?)');
  const readOwner = database.prepare('SELECT subject_id,lesson_id,part_id,record,revision FROM subject_progress WHERE account_id=?');
  const lookupResources = database.prepare('SELECT hearts,gems,refill_at AS refillAt FROM learner_resources WHERE account_id=?');
  const saveResources = database.prepare(`INSERT INTO learner_resources(account_id,hearts,gems,refill_at) VALUES(?,?,?,?)
    ON CONFLICT(account_id) DO UPDATE SET hearts=excluded.hearts,gems=excluded.gems,refill_at=excluded.refill_at`);
  const accountType = database.prepare('SELECT account_type FROM accounts WHERE id=?');
  const lookupTrial = database.prepare('SELECT ends_at FROM learner_super_trials WHERE account_id=?');
  const startTrial = database.prepare('INSERT OR IGNORE INTO learner_super_trials(account_id,ends_at) VALUES(?,?)');
  const unlocks = database.prepare('SELECT question_key FROM question_explanation_unlocks WHERE account_id=?');
  const unlock = database.prepare('INSERT INTO question_explanation_unlocks VALUES(?,?,?)');
  const readResources = accountId => {
    const saved = lookupResources.get(accountId) || resourceSnapshot(null);
    return resourceSnapshot({ ...saved, trialEndsAt:lookupTrial.get(accountId)?.ends_at,
      explanationUnlocks:unlocks.all(accountId).map(row => row.question_key) }, accountType.get(accountId)?.account_type === 'subscribed');
  };
  return {
    readResources,
    unlockExplanation(accountId, key) {
      const questionKey = questionRewardKey(key);
      database.exec('BEGIN IMMEDIATE');
      try {
        const balance = readResources(accountId);
        if (!balance.explanationUnlocks.includes(questionKey)) {
          const price = balance.unlimited ? 0 : EXPLANATION_GEM_COST;
          if (balance.gems < price) throw Object.assign(new Error('Not enough gems.'),{status:402});
          saveResources.run(accountId,balance.hearts,balance.gems - price,balance.refillAt);
          unlock.run(accountId,questionKey,Date.now());
        }
        database.exec('COMMIT');
        return readResources(accountId);
      } catch (error) { database.exec('ROLLBACK'); throw error; }
    },
    startSuperTrial(accountId) {
      if (accountType.get(accountId)?.account_type !== 'free') throw Object.assign(new Error('A free account is required.'), {status:403});
      startTrial.run(accountId, Date.now() + SUPER_TRIAL_MS);
      return readResources(accountId);
    },
    read(accountId) {
      return [...recalculateQuestionRewards(new Map(readOwner.all(accountId)
        .map(row => [JSON.stringify([row.subject_id,row.lesson_id,row.part_id]), {...JSON.parse(row.record), revision:row.revision}])))];
    },
    // Published identities and step lists are validated at the API boundary.
    update(accountId, input, stepIds) {
      const location = input.type === 'answer' ? resolveQuestionLocation(input) : null;
      const moved = location && location.partId !== input.partId;
      const value = moved ? { ...input, ...location } : input;
      const { subjectId, lessonId, partId, id, type } = value;
      const digest = createHash('sha256').update(JSON.stringify(Object.keys(input).sort().map(key=>[key,input[key]]))).digest('hex');
      const legacyDigest = createHash('sha256').update(JSON.stringify(input)).digest('hex');
      database.exec('BEGIN IMMEDIATE');
      try {
        const oldReceipt = receipt.get(accountId,id);
        if(oldReceipt) {
          if(type!=='import' && oldReceipt.digest!==digest && oldReceipt.digest!==legacyDigest) throw Object.assign(new Error('An update ID cannot be reused with different data.'),{status:409});
          database.exec('COMMIT');
          return;
        }
        const row = lookup.get(accountId,subjectId,lessonId,partId);
        const previous = row ? JSON.parse(row.record) : emptyPart();
        const key={ownerId:`account:${accountId}`,subjectId,lessonId,partId};
        const records = new Map(readOwner.all(accountId).map(row =>
          [JSON.stringify([row.subject_id,row.lesson_id,row.part_id]), JSON.parse(row.record)]));
        let record;
        if(type==='import') {
          // Import a part once. Existing server review state always wins.
          const imported=applyProgressUpdate(emptyPart(),{type:'completion',value:{...key,stepIds,completedStepIds:input.completedStepIds,isComplete:input.isComplete,date:input.date||localDateKey()}});
          imported.review=validReview(input.review).filter(item=>stepIds.includes(item.stepId)
            || isSourceQuestionAlias({...key,stepId:item.stepId}));
          imported.activityDates=imported.completedDate ? [imported.completedDate] : [];
          record=mergeImportedPart(row ? previous : undefined, imported);
        } else {
          if(type==='answer' && input.reviewing && input.revision!==undefined) {
            const expectedRevision = moved
              ? lookup.get(accountId,input.subjectId,input.lessonId,input.partId)?.revision || 0
              : row?.revision || 0;
            // A queued source-part review may be the first canonical write.
            // Once the destination has newer state, refresh there before reset.
            if (input.revision !== expectedRevision || moved && row)
              throw Object.assign(new Error('Review changed on another device. Refresh before retrying.'),{status:409});
          }
          if (type === 'answer') {
            const balance = readResources(accountId);
            if (!balance.unlimited) {
              const spent = spendHeart(balance);
              if (!spent) throw Object.assign(new Error('No hearts available. A heart refills every 12 minutes.'), {status:429});
              saveResources.run(accountId, spent.hearts, spent.gems, spent.refillAt);
            }
          }
          record=applyProgressUpdate(previous,{type,id,value:{...value,...key,stepIds,date:input.date||localDateKey()}},
            records);
        }
        const recordKey = JSON.stringify([subjectId,lessonId,partId]);
        records.set(recordKey,record);
        record = recalculateQuestionRewards(records).get(recordKey);
        upsert.run(accountId,subjectId,lessonId,partId,JSON.stringify(record),(row?.revision||0)+1);
        // Save the default in the same transaction as the answer. Offline retries
        // then recover both, and an old receipt cannot overwrite a newer rating.
        if (type === 'answer' && typeof value.correct === 'boolean')
          questionFeedback?.save(accountId, { ...value, type:'rating', rating:value.correct ? 'easy' : 'hard', automatic:true });
        remember.run(accountId,id,digest);
        database.exec('COMMIT');
      } catch(error) { database.exec('ROLLBACK');throw error; }
    },
  };
}
