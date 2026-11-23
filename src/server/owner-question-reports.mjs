export const REPORT_PAGE_SIZE = 50;
const ACCOUNT_PAGE_SIZE = 20;

export function readReportCursor(value = '') {
  if (!value) return { accountId:0, beforeId:0 };
  if (!/^\d+:\d+$/.test(value)) throw new RangeError('Invalid report cursor.');
  const [accountId,beforeId] = value.split(':').map(Number);
  if (![accountId,beforeId].every(Number.isSafeInteger) || accountId < 1 || beforeId < 0)
    throw new RangeError('Invalid report cursor.');
  return { accountId,beforeId };
}

// Reports already belong to each learner's progress store. Read bounded pages
// from those stores; no new table, migration, copying or report deletion.
export async function listOwnerQuestionReports({ cursor = '', readAccounts, readReports }) {
  const start = readReportCursor(cursor);
  const accounts = await readAccounts(start.accountId, start.beforeId > 0, ACCOUNT_PAGE_SIZE + 1);
  const reports = [];
  for (const account of accounts.slice(0,ACCOUNT_PAGE_SIZE)) {
    const remaining = REPORT_PAGE_SIZE - reports.length;
    const rows = await readReports(account.id, account.id === start.accountId ? start.beforeId : 0, remaining + 1);
    reports.push(...rows.slice(0,remaining).map(row => ({
      id:row.id, accountId:account.id, username:account.username,
      subjectId:row.subject_id, lessonId:row.lesson_id, partId:row.part_id, stepId:row.step_id,
      reason:row.reason, details:row.details, createdAt:row.created_at,
    })));
    if (rows.length > remaining) return { reports,nextCursor:`${account.id}:${reports.at(-1).id}` };
    if (reports.length === REPORT_PAGE_SIZE) return { reports,nextCursor:`${account.id}:0` };
  }
  return { reports,nextCursor:accounts.length > ACCOUNT_PAGE_SIZE ? `${accounts[ACCOUNT_PAGE_SIZE-1].id}:0` : null };
}
