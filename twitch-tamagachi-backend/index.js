const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

server.listen(config.APP_PORT, () => {
  console.log(`App listening at http://localhost:${config.APP_PORT}`)
})