function migrateLegacyAccounts(database) {
  // Early prototype databases required email/phone and lacked curriculum data.
  // This one-time rebuild preserves accounts while invalidating old sessions.
  database.exec("PRAGMA foreign_keys = OFF");
  try {
    database.exec(`
      BEGIN;
      DROP TABLE IF EXISTS account_identifiers;
      DROP TABLE IF EXISTS sessions;
      ALTER TABLE accounts RENAME TO accounts_before_onboarding;
      CREATE TABLE accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        username_normalized TEXT NOT NULL UNIQUE,
        email TEXT,
        email_normalized TEXT UNIQUE,
        phone TEXT,
        phone_normalized TEXT UNIQUE,
        curriculum TEXT NOT NULL CHECK (curriculum IN ('gaza', 'full-palestinian')),
        path TEXT NOT NULL CHECK (path IN ('scientific', 'literary')),
        password_hash TEXT NOT NULL,
        password_salt TEXT NOT NULL,
        account_type TEXT NOT NULL DEFAULT 'free' CHECK (account_type IN ('free', 'subscribed', 'banned')),
        created_at TEXT NOT NULL
      );
      INSERT INTO accounts (
        id, username, username_normalized, email, email_normalized, phone, phone_normalized,
        curriculum, path, password_hash, password_salt, account_type, created_at
      )
      SELECT id, username, username_normalized, email, email_normalized, phone, phone_normalized,
        'gaza', 'scientific', password_hash, password_salt, account_type, created_at
      FROM accounts_before_onboarding;
      DROP TABLE accounts_before_onboarding;
      CREATE TABLE sessions (
        token_hash TEXT PRIMARY KEY,
        account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
        created_at TEXT NOT NULL,
        expires_at TEXT NOT NULL
      );
      CREATE INDEX sessions_account_id_idx ON sessions(account_id);
      CREATE INDEX sessions_expires_at_idx ON sessions(expires_at);
      COMMIT;
    `);
  } catch (error) {
    try { database.exec("ROLLBACK"); } catch { /* SQLite already rolled back. */ }
    throw error;
  } finally {
    database.exec("PRAGMA foreign_keys = ON");
  }
}

export function initializeAccountSchema(database) {
  database.exec(`
    PRAGMA foreign_keys = ON;
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS app_metadata (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      username_normalized TEXT NOT NULL UNIQUE,
      email TEXT,
      email_normalized TEXT UNIQUE,
      phone TEXT,
      phone_normalized TEXT UNIQUE,
      curriculum TEXT NOT NULL CHECK (curriculum IN ('gaza', 'full-palestinian')),
      path TEXT NOT NULL CHECK (path IN ('scientific', 'literary')),
      password_hash TEXT NOT NULL,
      password_salt TEXT NOT NULL,
      account_type TEXT NOT NULL DEFAULT 'free' CHECK (account_type IN ('free', 'subscribed', 'banned')),
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS sessions (
      token_hash TEXT PRIMARY KEY,
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      created_at TEXT NOT NULL,
      expires_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS sessions_account_id_idx ON sessions(account_id);
    CREATE INDEX IF NOT EXISTS sessions_expires_at_idx ON sessions(expires_at);
  `);

  const accountColumns = database.prepare("PRAGMA table_info(accounts)").all();
  const needsMigration = !accountColumns.some(({ name }) => name === "curriculum")
    || accountColumns.find(({ name }) => name === "phone")?.notnull
    || accountColumns.find(({ name }) => name === "email")?.notnull;
  if (needsMigration) migrateLegacyAccounts(database);
  if (!database.prepare("PRAGMA table_info(accounts)").all().some(column => column.name === "staff_role")) {
    database.exec("ALTER TABLE accounts ADD COLUMN staff_role TEXT CHECK(staff_role IS NULL OR staff_role='owner')");
  }
  const columns = new Set(database.prepare("PRAGMA table_info(accounts)").all().map(column => column.name));
  for (const [name,definition] of [["subscription_expires_at","TEXT"],["access_disabled","INTEGER NOT NULL DEFAULT 0 CHECK(access_disabled IN (0,1))"],["admin_version","INTEGER NOT NULL DEFAULT 0"]]) {
    if (!columns.has(name)) database.exec(`ALTER TABLE accounts ADD COLUMN ${name} ${definition}`);
  }
  database.exec("CREATE TABLE IF NOT EXISTS admin_audit (id INTEGER PRIMARY KEY AUTOINCREMENT, actor_id INTEGER NOT NULL, student_id INTEGER NOT NULL, action TEXT NOT NULL, details TEXT NOT NULL, created_at TEXT NOT NULL)");

  database.exec(`
    CREATE TABLE IF NOT EXISTS account_identifiers (
      alias TEXT PRIMARY KEY,
      account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
      kind TEXT NOT NULL CHECK (kind IN ('username', 'email', 'phone'))
    );
    CREATE INDEX IF NOT EXISTS account_identifiers_account_id_idx ON account_identifiers(account_id);
  `);
}
