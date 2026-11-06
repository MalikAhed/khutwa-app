import { createDatabaseProgressStore } from "./progress-store.mjs";
import { withResourceActions } from "./resource-actions.mjs";
import { readJsonBody } from "./http.mjs";
import { createBrowserPolicyStore } from './browser-policy-store.mjs';

// The live class already owns the account's existing SQLite database and APIs.
// Replace their shared progress store, retaining authentication, assets, admin
// access, feedback, pending-write receipts and the namespace/account identity.
export function withDailyResources(StudentProgress) {
  return class extends StudentProgress {
    constructor(ctx, env) {
      super(ctx, env);
      if (!this.database?.transactionSync || !this.accounts?.progress || !this.accounts.questionFeedback)
        throw new Error("The recovered Worker has an incompatible progress adapter.");
      this.progress = createDatabaseProgressStore(this.database, { questionFeedback:this.accounts.questionFeedback });
      this.accounts.progress = this.progress;
      this.accounts.browserPolicy = createBrowserPolicyStore(env.ACCOUNTS);
      this.progressApi = withResourceActions(this.progressApi,{accountStore:this.accounts,readJsonBody,secureCookies:true});
    }
  };
}
