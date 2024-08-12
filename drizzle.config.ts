import { join } from 'pathe'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    out: 'server/database/migrations',
    schema: 'server/database/schema.ts',
    dialect: "sqlite",
    dbCredentials: {
        url: join(process.cwd(), './db.sqlite'),
    },
    // driver: 'turso',
    // dbCredentials: {
    //   // url: join(process.cwd(), './db.sqlite'),
    //   url: process.env.TURSO_DB_URL!,
    //   authToken: process.env.TURSO_DB_TOKEN!,
    // },
})
