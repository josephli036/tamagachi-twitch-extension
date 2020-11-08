const { response } = require("../app")
const jwt = require('jsonwebtoken');
const config = require('../utils/config')

const unknownEndpoint = (req, res) => {
    res.status(404).send({error : 'unknown endpoint'})
}

const errorHandler = (error, req, res, next) => {
    console.log('Encountered error: ', error.message)
    next(error)
}

const authHandler = async (req, res, next) => {
    // TODO(): Work on Auth
    if (process.env.NODE_ENV === 'development') {
        const token = {
            "exp": 1484242525,
            "opaque_user_id": "UG12X345T6J78",
            "channel_id": "test_channel",
            "role": "broadcaster",
            "is_unlinked": "false",
            "pubsub_perms": {
              "listen": [ "broadcast", "whisper-UG12X345T6J78" ],
              "send": ["broadcast","whisper-*"]
            }
          }
        res.locals.token = token
        next()
    } else {
        try {
            console.log("fook1")
            console.log(req.headers.authorization)
            const token = req.headers.authorization.split('Bearer ')[1]
            console.log("split token")
            console.log(token)
            
            const secret = new Buffer(config.SECRET, 'base64');
            const decodedToken = await jwt.verify(token, secret)
            console.log("verified")

            console.log(decodedToken)

            console.log("fook2")
            if (req.body.userId && req.body.userId !== decodedToken.user_id) {
                throw 'invalid userid'
            } else {
                console.log('Authorized')
                next()
            }
        } catch {
            console.log("fookerror")
            return res.status(401).json({error: new Error('invalid request')})
        }
    }
}

module.exports = {
    authHandler,
    errorHandler,
    unknownEndpoint
}