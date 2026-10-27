import { DurableObject } from "cloudflare:workers";
import { createCloudAccounts } from "./accounts.mjs";
import { handleNodeApi } from "./http.mjs";
import { durableSqlite } from "./sqlite.mjs";
import { createCloudContent } from "./content.mjs";
import { createAuthApi, getSessionToken } from "../auth-api.mjs";
import { readJsonBody, sendJson } from "../http.mjs";
import { createDatabaseProgressStore } from "../progress-store.mjs";
import { createQuestionFeedbackStore } from "../question-feedback-store.mjs";
import { createProgressApi } from "../progress-api.mjs";
import { createQuestionFeedbackApi } from "../question-feedback-api.mjs";

const policies = { availability:[30,60000], register:[8,3600000], signIn:[10,600000] };

export class Authentication extends DurableObject {
  constructor(ctx,env) {
    super(ctx,env);
    this.sql = ctx.storage.sql;
    this.sql.exec("CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, resets_at INTEGER NOT NULL)");
    const limiter = {
      consume:(key,name) => ctx.storage.transactionSync(() => {
        const [limit,windowMs] = policies[name], now = Date.now();
        this.sql.exec("DELETE FROM rate_limits WHERE resets_at<=?",now);
        this.sql.exec("INSERT INTO rate_limits VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1",key,now+windowMs);
        const row = this.sql.exec("SELECT count,resets_at FROM rate_limits WHERE key=?",key).one();
        return { allowed:row.count <= limit, retryAfterSeconds:Math.max(1,Math.ceil((row.resets_at-now)/1000)) };
      }),
      reset:key => this.sql.exec("DELETE FROM rate_limits WHERE key=?",key),
    };
    this.handle = createAuthApi({ accountStore:createCloudAccounts(env.ACCOUNTS), readJsonBody,rateLimiter:limiter,secureCookies:true,clientAddress:() => "client" });
    this.requests = Promise.resolve();
  }
  fetch(request) {
    // Keep concurrent password hashes from exhausting the isolate's memory.
    const response = this.requests.then(() => handleNodeApi(request,this.handle));
    this.requests = response.catch(() => {});
    return response;
  }
}

// One object per permanent account ID. All progress, rewards, receipts and
// question preferences for that student share one atomic SQLite boundary.
export class StudentProgress extends DurableObject {
  constructor(ctx,env) {
    super(ctx,env);
    this.database = durableSqlite(ctx.storage);
    this.database.exec("CREATE TABLE IF NOT EXISTS accounts (id INTEGER PRIMARY KEY, account_type TEXT NOT NULL, subscription_expires_at TEXT, access_disabled INTEGER NOT NULL DEFAULT 0)");
    const questionFeedback = createQuestionFeedbackStore(this.database);
    const progress = createDatabaseProgressStore(this.database,{ questionFeedback });
    const accountStore = { ...createCloudAccounts(env.ACCOUNTS),progress,questionFeedback };
    this.accounts = accountStore;
    this.progress = progress;
    const content = createCloudContent(env.ASSETS,KHUTWA_CATALOG);
    this.progressApi = createProgressApi({ accountStore,readJsonBody,...content });
    this.feedbackApi = createQuestionFeedbackApi({ accountStore,readJsonBody,...content });
  }
  fetch(request) {
    return handleNodeApi(request,async (input,output,pathname) => {
      const account = await this.accounts.getAccountForSession(getSessionToken(input));
      if (!account || account.accountType === "banned") return sendJson(output,401,{ error:"Sign in to save progress." });
      // Even internal requests must match this object's permanent account ID.
      if (!this.ctx.id.equals(this.env.STUDENTS.idFromName(`account:${account.id}`)))
        return sendJson(output,409,{ error:"The active account changed." });
      this.database.prepare("INSERT INTO accounts VALUES(?,?,?,0) ON CONFLICT(id) DO UPDATE SET account_type=excluded.account_type,subscription_expires_at=excluded.subscription_expires_at,access_disabled=0")
        .run(Number(account.id),account.accountType,account.subscriptionExpiresAt);
      return (pathname === "/api/progress" ? this.progressApi : this.feedbackApi)(input,output);
    });
  }
  async inspectProgress(accountId,token) {
    const owner = await this.accounts.getAccountForSession(token);
    if (!owner?.isOwner || owner.accountType === "banned" || !this.ctx.id.equals(this.env.STUDENTS.idFromName(`account:${accountId}`))) throw new Error("Forbidden");
    return this.progress.read(accountId);
  }
  async eraseDeletedAccount(accountId) {
    if (!this.ctx.id.equals(this.env.STUDENTS.idFromName(`account:${accountId}`))) throw new Error("Wrong account");
    if (await this.env.ACCOUNTS.prepare("SELECT 1 FROM accounts WHERE id=?").bind(accountId).first()) throw new Error("Account still exists");
    await this.ctx.storage.deleteAll();
  }
}
