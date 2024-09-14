import Database from 'better-sqlite3'
import type { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import { drizzle } from 'drizzle-orm/better-sqlite3'
import { join } from 'pathe'

export * as tables from '~/server/database/schema'
export type DBComponent = typeof tables.components.$inferSelect & {
  user?: typeof tables.users.$inferSelect
}

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

let _db: BetterSQLite3Database | null = null

export function useDB() {
  if (!_db) {
    if (IS_PRODUCTION) {
      const sqlite = new Database(join(process.cwd(), './sqlite/prod.sqlite'))
      _db = drizzle(sqlite)
    }
    else if (process.dev) {
      // local sqlite in development
      const sqlite = new Database(join(process.cwd(), './db.sqlite'))
      _db = drizzle(sqlite)
    }
    else {
      throw new Error('No database configured for production')
    }
  }
  return _db
}
