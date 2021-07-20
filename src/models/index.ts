import * as sqlite from 'sqlite3'


export let db: sqlite.Database = null
export function initSqlite(db_path = process.env.SQLITE_DB) {
  let sqlite_verbose = sqlite.verbose()
  db = new sqlite_verbose.Database(db_path, sqlite.OPEN_READONLY);
  return db
}





