import { pool } from './database.js'
import locationData from './data/locations.js'
import eventData from './data/events.js'

const createTables = async () => {
    const createTablesQuery = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(2) NOT NULL,
            zip VARCHAR(10) NOT NULL,
            image TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            image TEXT NOT NULL,
            location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE
        );
    `

    await pool.query(createTablesQuery)
    console.log('🎉 locations and events tables created successfully')
}

const seedLocationsTable = async () => {
    for (const location of locationData) {
        const insertQuery = `
            INSERT INTO locations (name, address, city, state, zip, image)
            VALUES ($1, $2, $3, $4, $5, $6)
        `
        const values = [location.name, location.address, location.city, location.state, location.zip, location.image]

        await pool.query(insertQuery, values)
        console.log(`✅ ${location.name} added successfully`)
    }
}

const seedEventsTable = async () => {
    for (const event of eventData) {
        const insertQuery = `
            INSERT INTO events (title, date, time, image, location_id)
            VALUES ($1, $2, $3, $4, $5)
        `
        const values = [event.title, event.date, event.time, event.image, event.location_id]

        await pool.query(insertQuery, values)
        console.log(`✅ ${event.title} added successfully`)
    }
}

try {
    await createTables()
    await seedLocationsTable()
    await seedEventsTable()
}
catch (error) {
    console.error('⚠️ error resetting database', error)
    process.exitCode = 1
}
finally {
    await pool.end()
}
