const config = require('./utils/config')
const express = require('express')
const hiscoresRouter = require('./controllers/hiscores')
const playersRouter = require('./controllers/players')

const middleware = require('./utils/middleware')
const { authHandler } = require('./utils/middleware')

const app = express()
app.use(express.json())

app.use('/api/hiscores', authHandler, hiscoresRouter)
app.use('/api/players', authHandler, playersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app