// The shared stores use Node's synchronous prepared-statement surface. Durable
// Objects provide equivalent SQL and real transactionSync rollback semantics.
export function durableSqlite(storage) {
  // Workers reserve PRAGMA user_version; application migrations use their own row.
  storage.sql.exec("CREATE TABLE IF NOT EXISTS app_schema (id INTEGER PRIMARY KEY CHECK(id=1), version INTEGER NOT NULL)");
  return {
    getSchemaVersion:() => storage.sql.exec("SELECT version FROM app_schema WHERE id=1").toArray()[0]?.version || 0,
    setSchemaVersion:version => storage.sql.exec("INSERT INTO app_schema VALUES(1,?) ON CONFLICT(id) DO UPDATE SET version=excluded.version",version),
    exec:sql => storage.sql.exec(sql),
    transactionSync:operation => storage.transactionSync(operation),
    prepare(sql) {
      return {
        get:(...values) => storage.sql.exec(sql,...values).toArray()[0],
        all:(...values) => storage.sql.exec(sql,...values).toArray(),
        run:(...values) => { storage.sql.exec(sql,...values); },
      };
    },
  };
}
