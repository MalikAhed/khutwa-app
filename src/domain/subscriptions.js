export function effectiveAccountType(account, now = Date.now()) {
  if (account.access_disabled || account.account_type === "banned") return "banned";
  if (account.account_type !== "subscribed") return "free";
  return !account.subscription_expires_at || Date.parse(account.subscription_expires_at) > now ? "subscribed" : "free";
}

export function subscriptionExpiry(duration, customExpiry, now = new Date()) {
  if (duration === "permanent") return null;
  if (duration === "custom") {
    const date = new Date(customExpiry);
    if (!Number.isFinite(date.getTime()) || date.getTime() <= now.getTime()) throw new RangeError("اختر تاريخ انتهاء في المستقبل.");
    return date.toISOString();
  }
  const date = new Date(now);
  if (duration === "week") date.setUTCDate(date.getUTCDate() + 7);
  else if (duration === "month" || duration === "year") {
    const day = date.getUTCDate();
    date.setUTCDate(1);
    date.setUTCMonth(date.getUTCMonth() + (duration === "month" ? 1 : 12));
    const lastDay = new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth()+1,0)).getUTCDate();
    date.setUTCDate(Math.min(day,lastDay));
  } else throw new RangeError("اختر مدة الاشتراك.");
  return date.toISOString();
}

export function validateStudentChange(body) {
  if (!body || Array.isArray(body) || !Number.isSafeInteger(body.version) || body.version < 0
    || Object.keys(body).some(key => !["action","version","duration","expiresAt","confirmUsername"].includes(key))
    || !["grant","revoke","suspend","restore","delete"].includes(body.action)) throw new RangeError("طلب غير صالح.");
  if (body.action === "grant") return { ...body,expiresAt:subscriptionExpiry(body.duration,body.expiresAt) };
  if (body.action === "delete" && (typeof body.confirmUsername !== "string" || !body.confirmUsername)) throw new RangeError("اكتب اسم الطالب لتأكيد الحذف.");
  return body;
}

export function adminStudent(row) {
  return { id:String(row.id),username:row.username,phone:row.phone,curriculum:row.curriculum,path:row.path,
    accountType:effectiveAccountType(row),subscriptionType:row.account_type === "subscribed" ? "subscribed" : "free",
    subscriptionExpiresAt:row.subscription_expires_at || null,accessDisabled:Boolean(row.access_disabled || row.account_type === "banned"),
    version:row.admin_version || 0,createdAt:row.created_at };
}
