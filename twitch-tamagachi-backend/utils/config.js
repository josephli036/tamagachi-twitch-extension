require('dotenv').config()

const APP_PORT = 3000

const PG_DATABASE = process.env.RDS_PGDB
const PG_HOSTNAME = process.env.RDS_HOSTNAME
const PG_PASSWORD = process.env.RDS_PASSWORD
const PG_PORT = process.env.RDS_PORT
const PG_USERNAME = process.env.RDS_USERNAME

const SECRET = process.env.SECRET

module.exports = {
    APP_PORT,
    PG_DATABASE,
    PG_HOSTNAME,
    PG_PASSWORD,
    PG_PORT,
    PG_USERNAME,
    SECRET,
}