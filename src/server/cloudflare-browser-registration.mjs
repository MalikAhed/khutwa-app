import { browserCookie, browserRegistration, DEVICE_LIMIT, BROWSER_ACCOUNT_LIMIT, digestDeviceToken, readCookie } from "./browser-registration.mjs";
import { createBrowserPolicyStore } from './browser-policy-store.mjs';

// Extend the recovered live class without replacing its authentication,
// rate limits, account access decisions, or existing Durable Object namespace.
export function withBrowserRegistration(Authentication) {
  return class extends Authentication {
    async fetch(request) {
      const pathname = new URL(request.url).pathname;
      const device = browserRegistration(Object.fromEntries(request.headers));
      const policy = createBrowserPolicyStore(this.env.ACCOUNTS);
      let claim;
      if (request.method === 'POST' && pathname === '/api/auth/register') {
        const origin = request.headers.get('Origin');
        if (request.headers.get('Sec-Fetch-Site') === 'cross-site' || origin && new URL(origin).host !== new URL(request.url).host)
          return Response.json({error:'Invalid request origin.'},{status:403});
        claim = await policy.beginRegistration(device.tokenHash);
        if (!claim) return Response.json(BROWSER_ACCOUNT_LIMIT,{status:403});
      }
      const response = await super.fetch(request);
      if (claim && response.status >= 400 && response.status < 500)
        await policy.cancelRegistration(device.tokenHash,claim);
      if (request.method === "GET" && pathname === "/api/auth/session" && response.ok) {
        const account = (await response.clone().json()).account;
        if (account && !await policy.claimDevice(account.id,device)) return Response.json(DEVICE_LIMIT,{status:403});
        const headers = new Headers(response.headers);
        headers.append("Set-Cookie", browserCookie(device.token, true));
        return new Response(response.body, { status:response.status, headers });
      }
      if (request.method !== "POST" || !["/api/auth/register", "/api/auth/sign-in"].includes(pathname)
        || !response.ok) return response;
      const result = await response.clone().json();
      if (!result.account?.id || !["created", "signed-in"].includes(result.status)) return response;
      const session = response.headers.getSetCookie().map(cookie => readCookie(cookie, "tawjihi_session")).find(Boolean);
      if (!session) throw new Error("Missing authenticated session cookie.");
      if (claim) await policy.finishRegistration(device.tokenHash,claim,result.account.id);
      try {
        const id = Number(result.account.id);
        const db = this.env.ACCOUNTS;
        const [, registration] = await db.batch([
          db.prepare("INSERT OR IGNORE INTO account_devices VALUES(?,?,?,?)")
            .bind(id, device.kind, device.tokenHash, new Date().toISOString()),
          db.prepare("SELECT 1 FROM account_devices WHERE account_id=? AND token_hash=?").bind(id, device.tokenHash),
        ]);
        if (!registration.results.length) {
          await db.prepare("DELETE FROM sessions WHERE token_hash=?").bind(digestDeviceToken(session)).run();
          const headers = new Headers(response.headers);
          headers.delete("Set-Cookie");
          return Response.json(DEVICE_LIMIT, { status:403, headers });
        }
      } catch (error) {
        // Never expose an issued session if registration could not be verified.
        await this.env.ACCOUNTS.prepare("DELETE FROM sessions WHERE token_hash=?").bind(digestDeviceToken(session)).run();
        throw error;
      }
      const headers = new Headers(response.headers);
      headers.append("Set-Cookie", browserCookie(device.token, true));
      return new Response(response.body, { status:response.status, headers });
    }
  };
}
