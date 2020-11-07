const hiscoresRouter = require('express').Router()
const { client } = require('../client')

hiscoresRouter.get('/', async (req,res) => {
    const text = 'SELECT * FROM hiscores'
    const queryResults = await client.query(text)
    console.log(queryResults)
    res.json(queryResults)
})


module.exports = hiscoresRouter