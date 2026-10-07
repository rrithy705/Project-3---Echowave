import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// load server/.env no matter which directory the process is started from
const __dirname = path.dirname(fileURLToPath(import.meta.url))

dotenv.config({ path: path.resolve(__dirname, '../.env') })
