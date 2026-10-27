ALTER TABLE accounts ADD COLUMN subscription_expires_at TEXT;
ALTER TABLE accounts ADD COLUMN access_disabled INTEGER NOT NULL DEFAULT 0 CHECK(access_disabled IN (0,1));
ALTER TABLE accounts ADD COLUMN admin_version INTEGER NOT NULL DEFAULT 0;
CREATE TABLE admin_audit (
  id INTEGER PRIMARY KEY AUTOINCREMENT, actor_id INTEGER NOT NULL, student_id INTEGER NOT NULL,
  action TEXT NOT NULL, details TEXT NOT NULL, created_at TEXT NOT NULL
);
CREATE TABLE student_deletions (account_id INTEGER PRIMARY KEY, requested_by INTEGER NOT NULL, created_at TEXT NOT NULL);
