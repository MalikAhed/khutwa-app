import { createHash, randomBytes } from "node:crypto";

export const DEVICE_COOKIE = "tawjihi_device";
export const DEVICE_SCHEMA = `CREATE TABLE IF NOT EXISTS account_devices (
  account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK(kind IN ('computer','phone')),
  token_hash TEXT NOT NULL,
  registered_at TEXT NOT NULL,
  PRIMARY KEY(account_id,kind),
  UNIQUE(account_id,token_hash)
);`;
export const DEVICE_LIMIT = Object.freeze({ status:"device-limit", error:"هذا الحساب مرتبط بمتصفح كمبيوتر ومتصفح هاتف فقط. تسجيل الخروج لا يغيّر الأجهزة المسجّلة. تواصل مع إدارة خطوة إذا فقدت الوصول إلى متصفحك." });
export const BROWSER_ACCOUNT_LIMIT = Object.freeze({ status:'browser-account-limit', error:'يوجد حساب مسجّل على هذا المتصفح. سجّل الدخول إلى حسابك الحالي. إذا كان المتصفح مشتركًا أو فقدت الوصول إلى حسابك، تواصل مع إدارة خطوة.' });

export const digestDeviceToken = token => createHash("sha256").update(token).digest("hex");
export function readCookie(header = "", name = DEVICE_COOKIE) {
  return String(header).split(";").map(part => part.trim()).find(part => part.startsWith(`${name}=`))?.slice(name.length + 1) || "";
}

// Browser class is a usability rule, not hardware attestation. Headers can be
// spoofed; the unguessable cookie, and permanent server slots, identify browsers.
export function browserRegistration(headers) {
  const value = readCookie(headers.cookie);
  const token = /^[A-Za-z0-9_-]{43}$/.test(value) ? value : randomBytes(32).toString("base64url");
  const agent = String(headers["user-agent"] || "");
  const kind = /iPhone|iPod|Android.*Mobile|Windows Phone/i.test(agent) ? "phone" : "computer";
  return { token, tokenHash:digestDeviceToken(token), kind };
}

export function browserCookie(token, secure = false) {
  // Browsers cap persistent cookies at 400 days; renew on each successful login.
  return `${DEVICE_COOKIE}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=34560000${secure ? "; Secure" : ""}`;
}
