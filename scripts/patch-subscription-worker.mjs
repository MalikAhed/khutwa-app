import { createHash } from 'node:crypto';

// Narrow integration with the preserved, recovered original Worker. Refuse a
// different baseline instead of silently dropping newer authentication changes.
export function patchSubscriptionWorker(source, helperImport) {
  if (createHash('sha256').update(source).digest('hex') !== '302d2a167f2aafc535ed9e5066204ac7e3d501febb7d7c2f3120ea11c8b1e29e')
    throw new Error('Review the recovered Worker baseline before preparing subject subscriptions.');
  const replace = (before,after,count=1) => {
    if (source.split(before).length-1 !== count) throw new Error('Recovered subscription integration no longer matches.');
    source = source.replaceAll(before,after);
  };
  replace('["action","version","duration","expiresAt","confirmUsername"]','["action","version","duration","expiresAt","confirmUsername","subscriptionSubjects"]');
  replace('return{...a,expiresAt:P3(a.duration,a.expiresAt)}','return{...a,subscriptionSubjects:normalizeSubscriptionSubjects(a.subscriptionSubjects),expiresAt:a.duration==="keep"?"keep":P3(a.duration,a.expiresAt)}');
  replace('subscriptionExpiresAt:a.subscription_expires_at||null,','subscriptionExpiresAt:a.subscription_expires_at||null,subscriptionSubjects:readSubscriptionSubjects(a.subscription_subjects),',2);
  replace('subscription_expires_at,access_disabled,admin_version"','subscription_expires_at,access_disabled,admin_version,subscription_subjects"');
  replace('if(o.action==="delete"&&m.username!==o.confirmUsername)',
    'if(o.action==="grant"&&o.duration==="keep"){if(m.account_type!=="subscribed")throw Object.assign(new Error("لا يوجد اشتراك سابق للاحتفاظ بمدته."),{status:422});o.expiresAt=m.subscription_expires_at}if(o.action==="delete"&&m.username!==o.confirmUsername)');
  replace('grant:["account_type=\'subscribed\',subscription_expires_at=?",o.expiresAt]',
    'grant:["account_type=\'subscribed\',subscription_expires_at=?,subscription_subjects=?",o.expiresAt,o.subscriptionSubjects===null?null:JSON.stringify(o.subscriptionSubjects)]');
  replace('JSON.stringify({expiresAt:o.expiresAt||null})','JSON.stringify({expiresAt:o.expiresAt||null,...(o.action==="grant"?{subscriptionSubjects:o.subscriptionSubjects}:{})})');
  replace('INSERT INTO accounts VALUES(?,?,?,0)','INSERT INTO accounts(id,account_type,subscription_expires_at,access_disabled) VALUES(?,?,?,0)');
  replace('.run(Number(c.id),c.accountType,c.subscriptionExpiresAt),(o===',
    '.run(Number(c.id),c.accountType,c.subscriptionExpiresAt),this.database.prepare("INSERT INTO account_subscription_scopes(account_id,subjects) VALUES(?,?) ON CONFLICT(account_id) DO UPDATE SET subjects=excluded.subjects").run(Number(c.id),c.subscriptionSubjects===null?null:JSON.stringify(c.subscriptionSubjects)),(o===');
  return `import { normalizeSubscriptionSubjects, readSubscriptionSubjects } from ${JSON.stringify(helperImport)};\n${source}`;
}
