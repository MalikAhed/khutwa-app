import { listOwnerQuestionReports, readReportCursor } from './owner-question-reports.mjs';

const json = (value,status = 200) => Response.json(value,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});

export function withQuestionReportInspection(StudentProgress) {
  return class extends StudentProgress {
    async inspectQuestionReports(accountId,sessionToken,beforeId,limit) {
      const owner = await this.accounts.getAccountForSession(sessionToken);
      if (!owner?.isOwner || owner.accountType === 'banned'
        || !this.ctx.id.equals(this.env.STUDENTS.idFromName(`account:${accountId}`))) throw new Error('Forbidden');
      if (![accountId,beforeId,limit].every(Number.isSafeInteger) || accountId < 1 || beforeId < 0 || limit < 1 || limit > 51)
        throw new RangeError('Invalid report page.');
      return this.database.prepare(`SELECT id,subject_id,lesson_id,part_id,step_id,reason,details,created_at
        FROM question_reports WHERE account_id=? AND (?=0 OR id<?) ORDER BY id DESC LIMIT ?`)
        .all(accountId,beforeId,beforeId,limit);
    }
  };
}

// Install around the reviewed CURRENT Worker, retaining its existing auth,
// scheduled handler, assets, bindings and Durable Object classes.
export function withOwnerQuestionReports(original) {
  return {
    ...original,
    async fetch(request,env,ctx) {
      const url = new URL(request.url);
      if (url.pathname !== '/api/owner/question-reports') return original.fetch(request,env,ctx);
      try {
        const sessionUrl = new URL('/api/auth/session',url);
        const session = await original.fetch(new Request(sessionUrl,{headers:request.headers}),env,ctx);
        if (!session.ok) return session;
        const {account} = await session.json();
        if (!account) return json({error:'سجّل الدخول بحساب المالك.'},401);
        if (!account.isOwner || account.accountType === 'banned') return json({error:'هذه المساحة متاحة لمالك التطبيق فقط.'},403);
        if (request.method !== 'GET') return new Response(null,{status:405,headers:{Allow:'GET','Cache-Control':'no-store'}});
        const cursor = url.searchParams.get('cursor') || '';
        try { readReportCursor(cursor); } catch { return json({error:'طلب غير صالح.'},400); }
        const token = /(?:^|;\s*)tawjihi_session=([^;]*)/.exec(request.headers.get('Cookie') || '')?.[1];
        const data = await listOwnerQuestionReports({ cursor,
          readAccounts:async (id,inclusive,limit) => (await env.ACCOUNTS.prepare(
            `SELECT id,username FROM accounts WHERE id${inclusive ? '>=' : '>'}? ORDER BY id LIMIT ?`).bind(id,limit).all()).results,
          readReports:(id,beforeId,limit) => env.STUDENTS.getByName(`account:${id}`).inspectQuestionReports(id,token,beforeId,limit),
        });
        return json(data);
      } catch { return json({error:'تعذّر تحميل البلاغات. حاول مجددًا.'},503); }
    },
  };
}
