import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { identifierAliases, normalizeUsername, normalizeEmail, normalizePhone } from "../../domain/account.js";
import { effectiveAccountType } from "../../domain/subscriptions.js";

const scrypt = promisify(scryptCallback);
const digest = token => createHash("sha256").update(token).digest("hex");
const publicAccount = row => row ? {
  id:String(row.id), username:row.username, email:row.email, phone:row.phone,
  curriculum:row.curriculum, path:row.path, displayName:row.username,
  accountType:effectiveAccountType(row),subscriptionExpiresAt:row.subscription_expires_at || null,createdAt:row.created_at,isOwner:row.staff_role === "owner",
} : null;
const aliases = value => [...identifierAliases(value).slice(0,3), null, null, null].slice(0,3);

// D1 owns global uniqueness and sessions. Expensive password work runs in the
// auth Durable Object, not in the static asset Worker on its small CPU budget.
export function createCloudAccounts(database) {
  const query = (sql, ...values) => database.prepare(sql).bind(...values);
  const exists = async value => Boolean(value && await query("SELECT 1 FROM account_identifiers WHERE alias IN (?,?,?) LIMIT 1", ...aliases(value)).first());
  const duplicate = async values => {
    for (const [field,value] of Object.entries(values)) if (await exists(value)) return field;
    return null;
  };
  return {
    async createAccount({ username, email, phone, curriculum, path, password }) {
      const normalized = { username:normalizeUsername(username), email:normalizeEmail(email) || null, phone:normalizePhone(phone) || null };
      const field = await duplicate(normalized);
      if (field) return { status:"duplicate", field };
      const salt = randomBytes(16).toString("base64url");
      const hash = Buffer.from(await scrypt(String(password), salt, 64)).toString("base64url");
      const now = new Date().toISOString();
      const statements = [query(`INSERT INTO accounts(username,username_normalized,email,email_normalized,phone,phone_normalized,curriculum,path,password_hash,password_salt,created_at)
        VALUES(?,?,?,?,?,?,?,?,?,?,?)`, username.trim(),normalized.username,email?.trim() || null,normalized.email,phone?.trim() || null,normalized.phone,curriculum,path,hash,salt,now)];
      const seen = new Set();
      for (const [kind,value] of Object.entries(normalized)) for (const alias of identifierAliases(value)) {
        if (seen.has(alias)) continue;
        seen.add(alias);
        statements.push(query("INSERT INTO account_identifiers(alias,account_id,kind) SELECT ?,id,? FROM accounts WHERE username_normalized=?",alias,kind,normalized.username));
      }
      try { await database.batch(statements); }
      catch (error) {
        if (/UNIQUE constraint failed/.test(error.message)) return { status:"duplicate", field:await duplicate(normalized) || "identifier" };
        throw error;
      }
      return { status:"created", account:publicAccount(await query("SELECT * FROM accounts WHERE username_normalized=?",normalized.username).first()) };
    },
    async authenticate(identifier, password) {
      const { results } = await query(`SELECT DISTINCT accounts.* FROM account_identifiers JOIN accounts ON accounts.id=account_identifiers.account_id
        WHERE alias IN (?,?,?)`,...aliases(identifier)).all();
      // Equal expensive work for a missing username avoids a cheap timing oracle.
      const candidates = results.length ? results : [{ password_salt:"tawjihi-invalid-account", password_hash:Buffer.alloc(64).toString("base64url") }];
      let account = null;
      for (const row of candidates) {
        const actual = Buffer.from(await scrypt(String(password),row.password_salt,64));
        const expected = Buffer.from(row.password_hash,"base64url");
        if (actual.length === expected.length && timingSafeEqual(actual,expected) && row.id) account ||= publicAccount(row);
      }
      return account;
    },
    async createSession(accountId) {
      const token = randomBytes(32).toString("base64url"), now = new Date();
      const expiresAt = new Date(now.getTime() + 7*24*60*60*1000);
      await database.batch([
        query("DELETE FROM sessions WHERE expires_at<=?",now.toISOString()),
        query("INSERT INTO sessions VALUES(?,?,?,?)",digest(token),Number(accountId),now.toISOString(),expiresAt.toISOString()),
      ]);
      return { token,expiresAt };
    },
    async getAccountForSession(token) {
      if (!token) return null;
      return publicAccount(await query(`SELECT accounts.* FROM sessions JOIN accounts ON accounts.id=sessions.account_id
        WHERE token_hash=? AND expires_at>? LIMIT 1`,digest(token),new Date().toISOString()).first());
    },
    async deleteSession(token) { if (token) await query("DELETE FROM sessions WHERE token_hash=?",digest(token)).run(); },
    async isIdentifierAvailable(_field,value) { return !await exists(value); },
  };
}
