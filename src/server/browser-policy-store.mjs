import { randomBytes, createHash } from 'node:crypto';
import { MAX_HEARTS, heartDay } from '../domain/learner-resources.js';

export const BROWSER_POLICY_SCHEMA = `
CREATE INDEX IF NOT EXISTS account_devices_token_idx ON account_devices(token_hash);
CREATE TABLE IF NOT EXISTS browser_registrations (
  token_hash TEXT PRIMARY KEY, claim TEXT NOT NULL, account_id INTEGER,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS browser_heart_attempts (
  token_hash TEXT NOT NULL, day TEXT NOT NULL, account_id INTEGER NOT NULL,
  update_id TEXT NOT NULL, digest TEXT NOT NULL,
  PRIMARY KEY(token_hash,day,account_id,update_id)
);`;

// The same statements run against local SQLite and the existing shared D1.
export function sqliteBrowserDatabase(database) {
  return { prepare(sql) { return { bind(...args) { return {
    first:async () => database.prepare(sql).get(...args),
    run:async () => database.prepare(sql).run(...args),
  }; } }; } };
}

export function createBrowserPolicyStore(database, { now = Date.now } = {}) {
  const query = (sql, ...args) => database.prepare(sql).bind(...args);
  return {
    async beginRegistration(tokenHash) {
      const claim = randomBytes(24).toString('hex');
      await query(`INSERT OR IGNORE INTO browser_registrations
        SELECT ?,?,NULL,? WHERE NOT EXISTS(SELECT 1 FROM account_devices WHERE token_hash=?)`, tokenHash, claim, now(), tokenHash).run();
      const row = await query('SELECT claim FROM browser_registrations WHERE token_hash=?', tokenHash).first();
      return row?.claim === claim ? claim : null;
    },
    async finishRegistration(tokenHash, claim, accountId) {
      await query('UPDATE browser_registrations SET account_id=? WHERE token_hash=? AND claim=?', Number(accountId), tokenHash, claim).run();
    },
    async cancelRegistration(tokenHash, claim) {
      await query('DELETE FROM browser_registrations WHERE token_hash=? AND claim=? AND account_id IS NULL', tokenHash, claim).run();
    },
    async claimDevice(accountId, { kind, tokenHash }) {
      await query('INSERT OR IGNORE INTO account_devices VALUES(?,?,?,?)', Number(accountId), kind, tokenHash, new Date(now()).toISOString()).run();
      return Boolean(await query('SELECT 1 FROM account_devices WHERE account_id=? AND token_hash=?', Number(accountId), tokenHash).first());
    },
    async remaining(tokenHash, day = heartDay(now())) {
      const row = await query('SELECT COUNT(*) AS used FROM browser_heart_attempts WHERE token_hash=? AND day=?', tokenHash, day).first();
      return Math.max(0, MAX_HEARTS - Number(row.used));
    },
    async reserve(tokenHash, accountId, input) {
      const day = heartDay(now());
      const digest = createHash('sha256').update(JSON.stringify(Object.keys(input).sort().map(key => [key,input[key]]))).digest('hex');
      // One atomic statement arbitrates all account Durable Objects and tabs.
      await query(`INSERT OR IGNORE INTO browser_heart_attempts
        SELECT ?,?,?,?,? WHERE (SELECT COUNT(*) FROM browser_heart_attempts WHERE token_hash=? AND day=?) < ?`,
      tokenHash, day, Number(accountId), input.id, digest, tokenHash, day, MAX_HEARTS).run();
      const row = await query('SELECT digest FROM browser_heart_attempts WHERE token_hash=? AND day=? AND account_id=? AND update_id=?', tokenHash, day, Number(accountId), input.id).first();
      if (row && row.digest !== digest) throw Object.assign(new Error('An update ID cannot be reused with different data.'), {status:409});
      return row ? { tokenHash, day, accountId:Number(accountId), updateId:input.id, digest } : null;
    },
    async release({ tokenHash, day, accountId, updateId, digest }) {
      await query('DELETE FROM browser_heart_attempts WHERE token_hash=? AND day=? AND account_id=? AND update_id=? AND digest=?', tokenHash, day, accountId, updateId, digest).run();
    },
  };
}
