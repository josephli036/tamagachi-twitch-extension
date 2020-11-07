const express = require('express')
const { Pool, Client } = require('pg')
require('dotenv').config()
var jwt = require('jsonwebtoken');

// var connection = pg.createConnection({
//     host     : process.env.RDS_HOSTNAME,
//     user     : process.env.RDS_USERNAME,
//     password : process.env.RDS_PASSWORD,
//     port     : process.env.RDS_PORT
//   });

const app = express();
const port = 3000;




app.get('/', async (req, res) => {
    try {
        const client = new Client({
                host     : process.env.RDS_HOSTNAME,
                user     : process.env.RDS_USERNAME,
                password : process.env.RDS_PASSWORD,
                database : process.env.RDS_PGDB,
                port     : process.env.RDS_PORT
              })
        await client.connect()
        const result = await client.query('SELECT NOW()')
        console.log(result)
        await client.end()
        await res.send('Hello World!')

    } catch (e) {
        console.log("caught error: ", e.message)
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})