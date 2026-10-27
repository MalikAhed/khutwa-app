import { parsePhoneNumber } from "../../node_modules/awesome-phonenumber/index-esm.mjs?v=acff67f262f3c107";

export const ACCOUNT_FIELD_ORDER = Object.freeze([
  "username", "curriculum", "path", "phone", "password",
]);
export const ACCOUNT_IDENTIFIER_FIELDS = Object.freeze(["username", "email", "phone"]);
export const SUPPORTED_CURRICULA = Object.freeze(["gaza", "full-palestinian"]);
export const SUPPORTED_PATHS = Object.freeze(["scientific", "literary"]);

const accountIdentifierFields = new Set(ACCOUNT_IDENTIFIER_FIELDS);
const supportedCurricula = new Set(SUPPORTED_CURRICULA);
const supportedPaths = new Set(SUPPORTED_PATHS);

const USERNAME_PATTERN = /^[\p{L}\p{N}_.-]{3,30}$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_PATTERN = /^(?=.*[A-Za-z\u0600-\u06ff])(?=.*\d).{8,128}$/;

export const DUPLICATE_ACCOUNT_FIELD_LABELS = Object.freeze({
  username:"اسم المستخدم",
  email:"البريد الإلكتروني",
  phone:"رقم الهاتف",
});

export function normalizeUsername(value) {
  return String(value || "").trim().normalize("NFKC").toLocaleLowerCase("en-US");
}

export function normalizeEmail(value) {
  return String(value || "").trim().normalize("NFKC").toLocaleLowerCase("en-US");
}

export function normalizePhone(value) {
  const phone = compactPhone(value);
  if (/^05[69]\d{7}$/.test(phone)) return `+970${phone.slice(1)}`;
  if (!isPhoneFormat(phone)) return phone;
  const parsed = parsePhoneNumber(phone, { regionCode:"PS" });
  return parsed.valid ? parsed.number.e164 : phone;
}

function compactPhone(value) {
  return String(value || "").trim().normalize("NFKC")
    .replace(/[\u0660-\u0669]/g, digit => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[\u06f0-\u06f9]/g, digit => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/[\s()-]/g, "").replace(/^00/, "+");
}

function isPhoneFormat(phone) {
  return /^05[69]\d{7}$/.test(phone) || /^\+[1-9]\d{6,14}$/.test(phone);
}

export function identifierAliases(value) {
  return [...new Set([
    normalizeUsername(value),
    normalizeEmail(value),
    normalizePhone(value),
  ].filter(Boolean))];
}

export function duplicateAccountFieldMessage(field) {
  return { username:"الاسم مستخدم. جرّب اسمًا آخر.", phone:"الرقم مسجّل. سجّل الدخول.", email:"البريد مسجّل. سجّل الدخول." }[field] || "البيانات مسجّلة. سجّل الدخول.";
}

export function isAccountIdentifierField(field) {
  return accountIdentifierFields.has(field);
}

export function isValidVisitorSelection(selection) {
  return supportedCurricula.has(selection?.curriculum) && supportedPaths.has(selection?.path);
}

export function validateAccountField(name, value) {
  const stringValue = String(value || "");
  if (name === "username") return USERNAME_PATTERN.test(stringValue.trim()) ? "" : "اكتب 3–30 حرفًا أو رقمًا بلا مسافات.";
  if (name === "curriculum") return supportedCurricula.has(stringValue) ? "" : "اختر منهاجك للمتابعة.";
  if (name === "path") return supportedPaths.has(stringValue) ? "" : "اختر فرعك للمتابعة.";
  if (name === "email") {
    const email = stringValue.trim();
    if (!email) return "أدخل بريدك الإلكتروني للمتابعة.";
    return EMAIL_PATTERN.test(email) && email.length <= 254 ? "" : "اكتب بريدًا إلكترونيًا صالحًا.";
  }
  if (name === "password") return PASSWORD_PATTERN.test(stringValue) ? "" : "8 أحرف على الأقل، مع حرف ورقم.";
  if (name === "phone") {
    const phone = compactPhone(stringValue);
    if (!phone) return "أدخل رقم هاتف للمتابعة.";
    if (/^05[69]/.test(phone)) return /^05[69]\d{7}$/.test(phone)
      ? "" : "رقم الهاتف يجب أن يكون 10 أرقام.";
    return isPhoneFormat(phone) && parsePhoneNumber(phone, { regionCode:"PS" }).valid
      ? "" : "تحقّق من الرقم ورمز الدولة.";
  }
  return "راجع البيانات وحاول مجددًا.";
}

export function validateRegistration(body) {
  const values = {
    username:String(body?.username || "").trim(),
    curriculum:String(body?.curriculum || ""),
    path:String(body?.path || ""),
    email:"",
    password:String(body?.password || ""),
    phone:String(body?.phone || "").trim(),
  };
  const fieldErrors = Object.fromEntries(ACCOUNT_FIELD_ORDER
    .map((name) => [name, validateAccountField(name, values[name])])
    .filter(([, message]) => message));
  return { values, fieldErrors };
}
