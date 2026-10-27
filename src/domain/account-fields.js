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
  return "راجع البيانات وحاول مجددًا.";
}
