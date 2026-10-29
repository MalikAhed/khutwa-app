import assert from "node:assert/strict";
import test from "node:test";
import { isSqlStatement, formatSqlForReading } from "../src/markdown/sql.js";

test("standalone SQL gets readable clauses and outer list items without changing source characters", () => {
  const source = "SELECT Name, Mark FROM Student WHERE Mark >= 80 AND Mark <= 100 ORDER BY Mark DESC, Name;";
  const formatted = formatSqlForReading(source);
  assert.equal(isSqlStatement(source), true);
  assert.deepEqual(formatted.split("\n").map(line => line.trim()), [
    "SELECT Name,", "Mark", "FROM Student", "WHERE Mark >= 80", "AND Mark <= 100", "ORDER BY Mark DESC,", "Name;",
  ]);
  assert.equal(formatted.replace(/\n */g, ""), source, "formatting only inserts newlines/indentation");
  assert.equal(formatSqlForReading(formatted), formatted, "formatting is idempotent");
});

test("quoted text, escaped delimiters and Access dates remain byte-for-byte intact", () => {
  const literals = ["'New  York, FROM AND OR'", "'O''Brien'", '"GROUP BY,  WHERE"', "[Order, Details]", "[Closing]]Bracket]", "`a``b, FROM`", "#12/31/2024 11:30 PM#", "'back\\'slash WHERE'", "'-- /* literal */'", "'two\n\nlines'"];
  const source = `SELECT ${literals.join(", ")} FROM [Student Records] WHERE [Birth Date] < #2025-01-01#;`;
  const formatted = formatSqlForReading(source);
  assert.equal(isSqlStatement(source), true);
  for (const literal of literals) assert.ok(formatted.includes(literal), literal);
  assert.ok(formatted.includes("#2025-01-01#"));
  assert.match(formatted, /\nFROM \[Student Records\]/);
});

test("nested expressions retain their commas and subqueries get their own clause depth", () => {
  const source = "SELECT COALESCE(Name, 'Unknown'), Mark FROM Student WHERE ID IN (SELECT StudentID FROM Scores WHERE MAX(A, B) > 80) ORDER BY Mark;";
  const formatted = formatSqlForReading(source);
  assert.ok(formatted.includes("COALESCE(Name, 'Unknown')"));
  assert.ok(formatted.includes("MAX(A, B)"));
  assert.match(formatted, /\(\n  SELECT StudentID \n  FROM Scores \n  WHERE MAX\(A, B\) > 80\n\)/);
  assert.equal(formatted.replace(/\n */g, ""), source);
});

test("INSERT field and value lists use rows without splitting dates or quoted values", () => {
  const source = 'INSERT INTO Book(B_id,B_name,pub_date) VALUES (2555,"Numbers",#20/5/2000#);';
  const formatted = formatSqlForReading(source);
  assert.match(formatted, /Book\(B_id,\n  B_name,\n  pub_date\)/);
  assert.match(formatted, /\(2555,\n  "Numbers",\n  #20\/5\/2000#\)/);
  assert.equal(formatted.replace(/\n */g, ""), source);
});

test("all requested statement families are recognized, retaining case and invalid distractor tokens", () => {
  for (const source of [
    "select * from Students where Mark =< 80;", "SELECT FROM Student WHERE Name =;", "SELECT * FROM Students WHERE (Mark > 90",
    "INSERT INTO Student (Name, Mark) VALUES ('Ali', 90);", "INSERT INTO Backup SELECT * FROM Student;",
    "UPDATE Student SET Mark == 100, Name = 'Ali' WHERE ID = 1;", "DELETE * FROM Student WHERE ID = 1;",
    "CREATE TABLE Student (ID INTEGER, Name TEXT);", "ALTER TABLE Student ADD Name TEXT;", "DROP TABLE Student;",
    "SELECT الاسم, العلامة FROM الطلاب WHERE الاسم = 'أحمد، محمد';", "SELECT 1;", "SELECT COUNT(*);", "SELECT Name;",
  ]) {
    assert.equal(isSqlStatement(source), true, source);
    assert.equal(formatSqlForReading(source).replace(/\n */g, ""), source, source);
  }
});

test("unsafe lexical input, multiple statements, prose and terminology remain untouched", () => {
  for (const source of [
    "SELECT", "FROM", "UPDATE", "DELETE", "CREATE TABLE", "ORDER BY", "SELECT retrieves records", "اختر SELECT * FROM Student;",
    "WHERE", "WHERE DELETE FROM", "SELECT WHERE FROM", "UPDATE FROM SET", "Where should I delete files from",
    "SQL: SELECT * FROM Student;", "SELECT * FROM Student; This is the answer.", "SELECT * FROM Student\n\nExplanation: records.",
    "SELECT * FROM Student; DROP TABLE Student;", "SELECT * FROM Student -- WHERE Mark > 90", "SELECT /* comment */ * FROM Student;",
    "SELECT 'unfinished FROM Student;", "SELECT * FROM [unfinished", "SELECT * FROM Student WHERE Date > #unfinished",
    "SELECT * FROM Student <script>alert(1)</script>", "`SELECT * FROM Student`", "DROP TABLE Student; -- malicious distractor",
  ]) {
    assert.equal(isSqlStatement(source), false, source);
    assert.equal(formatSqlForReading(source), source, source);
  }
});

test("published invalid SQL alternatives retain their exact mistakes while gaining SQL line layout", () => {
  for (const source of [
    "Delete Project WHERE Pro_No=55 or Cost>1500;",
    "DELETE M_ID WHERE 18",
    "UPDATE phnum=20888 From EmpTbl where Empid=102;",
    "INSERT INTO Book(...) SET(...)",
    'INSERT INTO Book(B_id,B_name,pub_date) (2555,"Numbers",#20/5/2000#)',
    "Where [No] Delete from St_tbl=100;",
  ]) {
    assert.equal(isSqlStatement(source), true, source);
    const formatted = formatSqlForReading(source);
    assert.ok(formatted.includes("\n"), source);
    assert.equal(formatted.replace(/\n */g, ""), source, "never repair invalid SQL choices");
    assert.equal(formatSqlForReading(formatted), formatted);
  }
});

test("join groups and predicate operators wrap without splitting compound clauses", () => {
  const source = "SELECT A.Name FROM A LEFT OUTER JOIN B ON A.ID = B.ID INNER JOIN C ON C.ID = A.ID WHERE A.Mark > 50 OR B.Mark > 50 GROUP BY A.Name HAVING COUNT(*) > 1;";
  const formatted = formatSqlForReading(source);
  assert.ok(formatted.includes("LEFT OUTER JOIN B"));
  assert.ok(formatted.includes("INNER JOIN C"));
  assert.match(formatted, /\nON A\.ID/);
  assert.match(formatted, /\nOR B\.Mark/);
  assert.match(formatted, /\nGROUP BY A\.Name/);
  assert.equal(formatted.replace(/\n */g, ""), source);
});
