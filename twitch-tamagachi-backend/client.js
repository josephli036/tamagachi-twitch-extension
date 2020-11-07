const { Pool, Client } = require('pg')
const config = require('./utils/config')

const client = new Client({
        host     : config.PG_HOSTNAME,
        user     : config.PG_USERNAME,
        password : config.PG_PASSWORD,
        database : config.PG_DATABASE,
        port     : config.PG_PORT
        })
client.connect().then(() => console.log('Connected to postgres'))

module.exports = { client }