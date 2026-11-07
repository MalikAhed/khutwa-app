import { createHash } from "node:crypto";
import { EXPLANATION_GEM_COST } from "../domain/question-explanations.js";
import { canonicalQuestionStepId, getPartQuestionIds, getQuestionXp, isSourceQuestionAlias, questionRewardKey, resolveQuestionLocation } from "../domain/question-rewards.js";
import { CORRECT_ANSWERS_PER_REWARD, CORRECT_ANSWER_GEM_REWARD, MAX_DAILY_SKIPS, QUESTION_NAVIGATION_LIMIT_ENABLED, heartDay, resourceSnapshot, spendHeart } from "../domain/learner-resources.js";
import { getSubjectRoadmapLesson } from "../data/subject-roadmaps.js";
import { hasFreeLessonPractice, QUESTION_JUMPS_REQUIRE_SUPER } from '../domain/free-practice.js';
import { readSubscriptionSubjects, subscriptionCovers } from '../domain/subscription-access.js';
import { applyProgressUpdate, emptyPart, localDateKey, mergeImportedPart, recalculateQuestionRewards, validReview } from "../domain/subject-progress.js";

export function assertSupportedDatabaseVersion(database) {
  const version = database.getSchemaVersion ? database.getSchemaVersion() : Number(database.prepare("PRAGMA user_version").get().user_version);
  if (version > 1) throw new Error("This server cannot open a newer database schema.");
 }

function transaction(database, run) {
  if (database.transactionSync) return database.transactionSync(run);
  database.exec('BEGIN IMMEDIATE');
  try { const result = run(); database.exec('COMMIT'); return result; }
  catch (error) { database.exec('ROLLBACK'); throw error; }
}

export function initializeProgressSchema(database) {
  assertSupportedDatabaseVersion(database);
  transaction(database, () => {
    database.exec(`
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
      CREATE TABLE IF NOT EXISTS account_subscription_scopes (
        account_id INTEGER PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
        subjects TEXT
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
      CREATE TABLE IF NOT EXISTS learner_gem_rewards (
        account_id INTEGER PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
        correct_count INTEGER NOT NULL, awarded_batches INTEGER NOT NULL, balance_version INTEGER NOT NULL DEFAULT 0
      );
      CREATE TABLE IF NOT EXISTS answer_gem_rewards (
        account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        question_key TEXT NOT NULL, update_id TEXT NOT NULL, gems INTEGER NOT NULL,
        PRIMARY KEY(account_id,question_key), UNIQUE(account_id,update_id)
      );
      CREATE TABLE IF NOT EXISTS learner_navigation_allowance (
        account_id INTEGER PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
        used INTEGER NOT NULL, refill_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS question_navigation_cursors (
        account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        subject_id TEXT NOT NULL, lesson_id TEXT NOT NULL, step_id TEXT NOT NULL,
        can_advance INTEGER NOT NULL DEFAULT 0,
        PRIMARY KEY(account_id,subject_id,lesson_id)
      );
      `);
    if (!database.prepare('PRAGMA table_info(question_navigation_cursors)').all().some(column => column.name === 'can_advance'))
      database.exec('ALTER TABLE question_navigation_cursors ADD COLUMN can_advance INTEGER NOT NULL DEFAULT 0');
    if (database.setSchemaVersion) database.setSchemaVersion(1);
    else database.exec('PRAGMA user_version = 1');
  });
}

export function createDatabaseProgressStore(database, { questionFeedback, now = Date.now } = {}) {
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
  const accountType = database.prepare('SELECT * FROM accounts WHERE id=?');
  const subscriptionScope = database.prepare('SELECT subjects FROM account_subscription_scopes WHERE account_id=?');
  const lookupTrial = database.prepare('SELECT ends_at FROM learner_super_trials WHERE account_id=?');
  const unlocks = database.prepare('SELECT question_key FROM question_explanation_unlocks WHERE account_id=?');
  const unlock = database.prepare('INSERT INTO question_explanation_unlocks VALUES(?,?,?)');
  const gemRewards = database.prepare('SELECT * FROM learner_gem_rewards WHERE account_id=?');
  const answerGemReward = database.prepare('SELECT gems FROM answer_gem_rewards WHERE account_id=? AND update_id=?');
  const rewardedQuestion = database.prepare('SELECT 1 FROM answer_gem_rewards WHERE account_id=? AND question_key=?');
  const navigation = database.prepare('SELECT used,refill_at FROM learner_navigation_allowance WHERE account_id=?');
  const cursor = database.prepare('SELECT step_id,can_advance FROM question_navigation_cursors WHERE account_id=? AND subject_id=? AND lesson_id=?');
  const solvedQuestions = records => new Set([...records].flatMap(([key,record]) => {
    const [subjectId] = JSON.parse(key);
    return (record.review || []).filter(item => item.solved && getQuestionXp({subjectId,stepId:item.stepId}) > 0)
      .map(item => questionRewardKey({subjectId,stepId:item.stepId}));
  }));
  const ownerRecords = accountId => new Map(readOwner.all(accountId).map(row =>
    [JSON.stringify([row.subject_id,row.lesson_id,row.part_id]),JSON.parse(row.record)]));
  const ensureGemRewards = (accountId, records = ownerRecords(accountId)) => {
    const count = solvedQuestions(records).size;
    // Existing correct work establishes a baseline; it is never erased or paid twice.
    database.prepare('INSERT OR IGNORE INTO learner_gem_rewards VALUES(?,?,?,0)')
      .run(accountId,count,Math.floor(count / CORRECT_ANSWERS_PER_REWARD));
    return gemRewards.get(accountId);
  };
  const navigationBalance = accountId => {
    const saved = navigation.get(accountId);
    const reset = !saved || heartDay(now()) > heartDay(saved.refill_at);
    return { navigationRemaining:MAX_DAILY_SKIPS - (reset ? 0 : saved.used),
      navigationRefillAt:reset ? now() : saved.refill_at };
  };
  const readResources = (accountId, key) => {
    const saved = lookupResources.get(accountId) || resourceSnapshot(null, false, now());
    const account = accountType.get(accountId);
    const subscribed = account?.account_type === 'subscribed' && !account.access_disabled
      && subscriptionCovers(readSubscriptionSubjects(subscriptionScope.get(accountId)?.subjects),key)
      && (!account.subscription_expires_at || Date.parse(account.subscription_expires_at) > now());
    const reward = gemRewards.get(accountId);
    return resourceSnapshot({ ...saved, ...navigationBalance(accountId),
      navigationCursors:Object.fromEntries(database.prepare('SELECT subject_id,lesson_id,step_id FROM question_navigation_cursors WHERE account_id=?').all(accountId)
        .map(row => [`${row.subject_id}:${row.lesson_id}`,row.step_id])),
      gemRevision:reward?.balance_version || 0, correctTowardGems:(reward?.correct_count ?? solvedQuestions(ownerRecords(accountId)).size) % CORRECT_ANSWERS_PER_REWARD,
      trialEndsAt:lookupTrial.get(accountId)?.ends_at,
      explanationUnlocks:unlocks.all(accountId).map(row => row.question_key) }, subscribed, now());
  };
  return {
    readResources,
    hasUpdate:(accountId,updateId) => Boolean(receipt.get(accountId,updateId)),
    readAnswerGemReward:(accountId,updateId) => answerGemReward.get(accountId,updateId)?.gems || 0,
    navigate(accountId, input) {
      const location = resolveQuestionLocation(input);
      if (!location) throw Object.assign(new Error('Unknown published question.'),{status:422});
      if (QUESTION_JUMPS_REQUIRE_SUPER && input.kind === 'jump' && !hasFreeLessonPractice(location) && !readResources(accountId,location).unlimited
        && !solvedQuestions(ownerRecords(accountId)).has(questionRewardKey(location)))
        throw Object.assign(new Error('اختيار سؤال من الشريط متاح مع خطوة سوبر.'), {status:402,code:'super-required'});
      // Older open clients may still call this endpoint. Confirm valid browsing
      // without consulting or rewriting retired allowances, cursors or receipts.
      if (!QUESTION_NAVIGATION_LIMIT_ENABLED) return readResources(accountId);
      return transaction(database, () => {
        const subject = location.subjectId === 'mathematics-2' ? 'mathematics' : location.subjectId;
        const previousCursor = cursor.get(accountId,subject,location.lessonId);
        const previous = previousCursor?.step_id;
        const digest = 'navigation:' + createHash('sha256').update(JSON.stringify([location,input.kind])).digest('hex');
        const oldReceipt = receipt.get(accountId,input.id);
        if (oldReceipt) {
          if (oldReceipt.digest !== digest || previous !== location.stepId)
            throw Object.assign(new Error('Navigation changed. Try the selection again.'),{status:409});
          return readResources(accountId);
        }
        const lesson = getSubjectRoadmapLesson(location.subjectId,location.lessonId)
          || (subject === 'mathematics' ? getSubjectRoadmapLesson('mathematics-2',location.lessonId) : null);
        const questions = [...new Set((lesson?.parts || []).flatMap(part => getPartQuestionIds({...location,partId:part.id})))];
        const records = ownerRecords(accountId);
        const attempted = new Set([...records].filter(([key]) => {
          const [savedSubject,savedLesson] = JSON.parse(key);
          return savedSubject === subject && savedLesson === location.lessonId;
        }).flatMap(([,record]) => (record.review || []).map(item => canonicalQuestionStepId({...location,stepId:item.stepId}))));
        const resume = questions.find(id => !attempted.has(id)) || questions[0];
        const sequential = input.kind === 'continue' && previousCursor?.can_advance === 1
          && questions[questions.indexOf(previous) + 1] === location.stepId;
        // Teaching screens use Continue too. Only the first authorized entry
        // may use the resume position; a later entry cannot reset the cursor.
        const entering = !previous && ['enter','continue'].includes(input.kind) && location.stepId === resume;
        const balance = readResources(accountId,location);
        const costsSkip = location.stepId !== previous && !entering && !sequential;
        if (!balance.unlimited && costsSkip) {
          if (balance.navigationRemaining <= 0)
            throw Object.assign(new Error('Daily question navigation limit reached.'),{status:429,code:'navigation-limit',currentStepId:previous});
          database.prepare('INSERT INTO learner_navigation_allowance VALUES(?,?,?) ON CONFLICT(account_id) DO UPDATE SET used=excluded.used,refill_at=excluded.refill_at')
            .run(accountId,MAX_DAILY_SKIPS - balance.navigationRemaining + 1,balance.navigationRefillAt);
        }
        database.prepare(`INSERT INTO question_navigation_cursors(account_id,subject_id,lesson_id,step_id,can_advance) VALUES(?,?,?,?,0)
          ON CONFLICT(account_id,subject_id,lesson_id) DO UPDATE SET
          can_advance=CASE WHEN question_navigation_cursors.step_id=excluded.step_id THEN question_navigation_cursors.can_advance ELSE 0 END,
          step_id=excluded.step_id`)
          .run(accountId,subject,location.lessonId,location.stepId);
        remember.run(accountId,input.id,digest);
        return readResources(accountId);
      });
    },
    unlockExplanation(accountId, key) {
      const questionKey = questionRewardKey(key);
      return transaction(database, () => {
        const balance = readResources(accountId,key);
        if (!balance.explanationUnlocks.includes(questionKey)) {
          const price = balance.unlimited || hasFreeLessonPractice(key) ? 0 : EXPLANATION_GEM_COST;
          if (balance.gems < price) throw Object.assign(new Error('Not enough gems.'),{status:402});
          saveResources.run(accountId,balance.hearts,balance.gems - price,balance.refillAt);
          ensureGemRewards(accountId);
          database.prepare('UPDATE learner_gem_rewards SET balance_version=balance_version+1 WHERE account_id=?').run(accountId);
          unlock.run(accountId,questionKey,now());
        }
        return readResources(accountId);
      });
    },
    startSuperTrial(accountId) {
      throw Object.assign(new Error('The free Super trial is no longer available.'), {status:403});
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
      return transaction(database, () => {
        const oldReceipt = receipt.get(accountId,id);
        if(oldReceipt) {
          if(type!=='import' && oldReceipt.digest!==digest && oldReceipt.digest!==legacyDigest) throw Object.assign(new Error('An update ID cannot be reused with different data.'),{status:409});
          return;
        }
        const row = lookup.get(accountId,subjectId,lessonId,partId);
        const previous = row ? JSON.parse(row.record) : emptyPart();
        const key={ownerId:`account:${accountId}`,subjectId,lessonId,partId};
        const records = new Map(readOwner.all(accountId).map(row =>
          [JSON.stringify([row.subject_id,row.lesson_id,row.part_id]), JSON.parse(row.record)]));
        const recordKey = JSON.stringify([subjectId,lessonId,partId]);
        let record;
        if(type==='import') {
          // Import a part once. Existing server review state always wins.
          const imported=applyProgressUpdate(emptyPart(),{type:'completion',value:{...key,stepIds,completedStepIds:input.completedStepIds,isComplete:input.isComplete,date:input.date||localDateKey()}});
          imported.review=validReview(input.review).filter(item=>stepIds.includes(item.stepId)
            || isSourceQuestionAlias({...key,stepId:item.stepId}));
          imported.activityDates=imported.completedDate ? [imported.completedDate] : [];
          record=mergeImportedPart(row ? previous : undefined, imported);
          const importedCorrect = solvedQuestions(new Map(records).set(recordKey,record)).size - solvedQuestions(records).size;
          if (importedCorrect > 0) {
            // Imports can finish after the first purchase or answer. Fold their
            // distinct historical work into the baseline without paying it again.
            const reward = ensureGemRewards(accountId,records);
            const count = reward.correct_count + importedCorrect;
            database.prepare('UPDATE learner_gem_rewards SET correct_count=?,awarded_batches=?,balance_version=balance_version+1 WHERE account_id=?')
              .run(count,Math.floor(count / CORRECT_ANSWERS_PER_REWARD),accountId);
          }
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
            const balance = readResources(accountId,value);
            if (!balance.unlimited && !hasFreeLessonPractice(value)) {
              const spent = spendHeart(balance, now());
              if (!spent) throw Object.assign(new Error('نفدت طاقة اليوم. تتجدد طاقتك اليومية عند منتصف الليل بتوقيت فلسطين.'), {status:429});
              saveResources.run(accountId, spent.hearts, spent.gems, spent.refillAt);
            }
          }
          record=applyProgressUpdate(previous,{type,id,value:{...value,...key,stepIds,date:input.date||localDateKey()}},
            records);
        }
        if (type === 'answer' && value.correct === true && getQuestionXp(value) > 0
          && !solvedQuestions(records).has(questionRewardKey(value)) && !rewardedQuestion.get(accountId,questionRewardKey(value))) {
          const reward = ensureGemRewards(accountId, records);
          const count = reward.correct_count + 1;
          const batches = Math.floor(count / CORRECT_ANSWERS_PER_REWARD);
          // Credit only this solve. Historical batch counters and balances stay
          // intact; switching policies must never pay old milestones again.
          const gems = CORRECT_ANSWER_GEM_REWARD;
          database.prepare('INSERT INTO answer_gem_rewards VALUES(?,?,?,?)')
            .run(accountId,questionRewardKey(value),id,gems);
          database.prepare('UPDATE learner_gem_rewards SET correct_count=?,awarded_batches=?,balance_version=balance_version+? WHERE account_id=?')
            .run(count,batches,gems > 0 ? 1 : 0,accountId);
          if (gems > 0) {
            const balance = readResources(accountId);
            saveResources.run(accountId,balance.hearts,balance.gems + gems,balance.refillAt);
          }
        }
        records.set(recordKey,record);
        record = recalculateQuestionRewards(records).get(recordKey);
        upsert.run(accountId,subjectId,lessonId,partId,JSON.stringify(record),(row?.revision||0)+1);
        // Save the default in the same transaction as the answer. Offline retries
        // then recover both, and an old receipt cannot overwrite a newer rating.
        if (type === 'answer' && typeof value.correct === 'boolean')
          questionFeedback?.save(accountId, { ...value, type:'rating', rating:value.correct ? 'easy' : 'hard', automatic:true });
        if (type === 'answer') database.prepare('UPDATE question_navigation_cursors SET can_advance=1 WHERE account_id=? AND subject_id=? AND lesson_id=? AND step_id=?')
          .run(accountId,subjectId === 'mathematics-2' ? 'mathematics' : subjectId,lessonId,location?.stepId || value.stepId);
        remember.run(accountId,id,digest);
      });
    },
  };
}
