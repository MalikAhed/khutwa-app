-- Additive launch schema. Never reset or recreate this database during releases.
CREATE TABLE IF NOT EXISTS accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL, username_normalized TEXT NOT NULL UNIQUE,
  email TEXT, email_normalized TEXT UNIQUE,
  phone TEXT, phone_normalized TEXT UNIQUE,
  curriculum TEXT NOT NULL CHECK (curriculum IN ('gaza','full-palestinian')),
  path TEXT NOT NULL CHECK (path IN ('scientific','literary')),
  password_hash TEXT NOT NULL, password_salt TEXT NOT NULL,
  account_type TEXT NOT NULL DEFAULT 'free' CHECK (account_type IN ('free','subscribed','banned')),
  staff_role TEXT CHECK (staff_role IS NULL OR staff_role='owner'),
  created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS account_identifiers (
  alias TEXT PRIMARY KEY, account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK (kind IN ('username','email','phone'))
);
CREATE INDEX IF NOT EXISTS account_identifiers_account_id_idx ON account_identifiers(account_id);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY, account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL, expires_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS sessions_account_id_idx ON sessions(account_id);
CREATE INDEX IF NOT EXISTS sessions_expires_at_idx ON sessions(expires_at);
