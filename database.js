import pg from 'pg'
import './dotenv.js'

// return DATE columns as plain 'YYYY-MM-DD' strings instead of JS Dates,
// so they aren't shifted by the server's timezone when sent as JSON
pg.types.setTypeParser(1082, value => value)

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    // Render requires SSL; set PGSSL=false to use a local database without SSL
    ssl: process.env.PGSSL === 'false' ? false : {
      rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)
