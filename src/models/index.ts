import { Database, verbose, OPEN_READONLY } from 'sqlite3'
// import * as sqlite from 'sqlite3'
// var sqlite = require('sqlite3').verbose()


export let db: Database = null
export function initSqlite(db_path = process.env.SQLITE_DB) {
  let sqlite_verbose = verbose()
  db = new sqlite_verbose.Database(db_path, OPEN_READONLY);
  return db
}





