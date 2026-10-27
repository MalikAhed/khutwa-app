import assert from "node:assert/strict";
import test from "node:test";
import { normalizePhone, validateAccountField, validateRegistration } from "../src/domain/account.js";

test("local mobile numbers require exactly ten digits and support Arabic digits", () => {
  for (const phone of ["0591234567", "0561234567", "٠٥٩١٢٣٤٥٦٧", "۰۵۶۱۲۳۴۵۶۷"]) {
    assert.equal(validateAccountField("phone", phone), "", phone);
  }
  for (const phone of ["059123456", "056123456", "05912345678", "05612345678"]) {
    assert.match(validateAccountField("phone", phone), /10 أرقام/, phone);
  }
  assert.equal(normalizePhone("٠٥٩١٢٣٤٥٦٧"), "+970591234567");
});

test("international validation uses country numbering rules rather than only length", () => {
  for (const phone of ["+201012345678", "00201012345678", "+44 20 7946 0018", "+1 (415) 555-2671", "+33612345678", "+919876543210", "+972598932239"]) {
    assert.equal(validateAccountField("phone", phone), "", phone);
  }
  for (const phone of ["", "1234567890", "+20101234567", "+201312345678", "+12005552671", "+999123456789", "+1415555267112345", "call +14155552671", "+14155552671 ext 12", "student@example.com", "++201012345678"]) {
    assert.notEqual(validateAccountField("phone", phone), "", phone);
  }
  assert.equal(normalizePhone("0020 101 234 5678"), "+201012345678");
});

test("registration requires phone and ignores submitted email", () => {
  const values = { username:"student", curriculum:"gaza", path:"scientific", password:"Learn123" };
  assert.ok(validateRegistration(values).fieldErrors.phone);
  const valid = validateRegistration({ ...values, phone:"0591234567", email:"discard@example.com" });
  assert.deepEqual(valid.fieldErrors, {});
  assert.equal(valid.values.email, "");
});
