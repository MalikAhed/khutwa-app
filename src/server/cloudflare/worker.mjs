import { createCloudAccounts } from "./accounts.mjs";
import { getSessionToken, isCrossSiteRequest } from "../auth-api.mjs";
import { handleNodeApi } from "./http.mjs";
import { createStudentDashboardHandler } from "../student-dashboard.mjs";
import { createCloudStudents, finishStudentDeletions } from "./students.mjs";
export { Authentication, StudentProgress } from "./objects.mjs";

const json = (value,status=200) => Response.json(value,{ status,headers:{ "Cache-Control":"no-store","X-Content-Type-Options":"nosniff" } });

export default {
  async fetch(request,env) {
    const url = new URL(request.url);
    const adminPage = /^\/(?:students\/?|admin(?:\.html|\/index(?:\.html)?|\/)?)$/.test(url.pathname);
    if (!adminPage && !url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try {
      if (url.pathname === "/api/health") return json({ status:"ok" });
      // Releases never send a reset ID. Browser and cloud progress survive deploys.
      if (url.pathname === "/api/app-state") return json({ resetId:null });
      const headers = Object.fromEntries(request.headers);
      headers.host = url.host;
      if (isCrossSiteRequest({ headers })) return json({ error:"Invalid request origin." },403);
      if (adminPage || url.pathname.startsWith("/api/owner/")) {
        const accounts = createCloudAccounts(env.ACCOUNTS);
        if (!url.pathname.startsWith("/api/")) {
          const account = await accounts.getAccountForSession(getSessionToken({headers}));
          if (!account) return Response.redirect(new URL("/?flow=sign-in",url),302);
          if (!account.isOwner || account.accountType === "banned") return json({error:"هذه الصفحة متاحة لمالك التطبيق فقط."},403);
          const page = await env.ASSETS.fetch(new Request(new URL("/admin",url)));
          const response = new Response(page.body,page);
          response.headers.set("Cache-Control","no-store");
          return response;
        }
        return await handleNodeApi(request,createStudentDashboardHandler({...accounts,students:createCloudStudents(env)}));
      }
      if (url.pathname.startsWith("/api/auth/")) {
        const ip = request.headers.get("CF-Connecting-IP") || "local";
        const hash = await crypto.subtle.digest("SHA-256",new TextEncoder().encode(ip));
        const name = [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2,"0")).join("");
        return await env.AUTH.getByName(name).fetch(request);
      }
      if (!["/api/progress","/api/question-feedback"].includes(url.pathname)) return json({ error:"Not found" },404);
      const account = await createCloudAccounts(env.ACCOUNTS).getAccountForSession(getSessionToken({ headers }));
      if (!account || account.accountType === "banned") return json({ error:"Sign in to save progress." },401);
      if (headers["x-progress-owner"] !== `account:${account.id}`) return json({ error:"The active account changed." },409);
      return await env.STUDENTS.getByName(`account:${account.id}`).fetch(request);
    } catch {
      console.error("Cloud API unavailable",{ path:url.pathname });
      return json({ error:"تعذّر الاتصال بالخدمة. تقدّمك المحلي محفوظ." },503);
    }
  },
  async scheduled(_controller,env) { await finishStudentDeletions(env); },
};
