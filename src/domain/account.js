import { parsePhoneNumber } from "../../node_modules/awesome-phonenumber/index-esm.mjs";
import { ACCOUNT_FIELD_ORDER, normalizeUsername, normalizeEmail, validateAccountField as validateBasicField } from "./account-fields.js";
export { ACCOUNT_FIELD_ORDER, ACCOUNT_IDENTIFIER_FIELDS, SUPPORTED_CURRICULA, SUPPORTED_PATHS, DUPLICATE_ACCOUNT_FIELD_LABELS, normalizeUsername, normalizeEmail, duplicateAccountFieldMessage, isAccountIdentifierField, isValidVisitorSelection } from "./account-fields.js";

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

export function validateAccountField(name, value) {
  const stringValue = String(value || "");
  if (name === "phone") {
    const phone = compactPhone(stringValue);
    if (!phone) return "أدخل رقم هاتف للمتابعة.";
    if (/^05[69]/.test(phone)) return /^05[69]\d{7}$/.test(phone)
      ? "" : "رقم الهاتف يجب أن يكون 10 أرقام.";
    return isPhoneFormat(phone) && parsePhoneNumber(phone, { regionCode:"PS" }).valid
      ? "" : "تحقّق من الرقم ورمز الدولة.";
  }
  return validateBasicField(name, value);
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
