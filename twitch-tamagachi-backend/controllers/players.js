const playersRouter = require('express').Router()
const { client } = require('../client')

playersRouter.post('/', async (req,res) => {
    /*
     * Updates the points of the player, IF an appropriate amount of time has passed
     * @return {channel_id, opaque_user_id, last_updated, points_to_spend}
    */ 

    const currentOpaqueUserId = res.locals.token.opaque_user_id
    const currentOpaqueUserId = res.locals.token.user_id
    const channelId = res.locals.token.channel_id
    const playerQuery = 'SELECT * FROM playerse WHERE opaque_user_id = $1 and channel_id = $2'
    const player = (await client.query(playerQuery, [currentOpaqueUserId, channelId])).rows
    
    if (player.length === 0) {
        const currentTime = new Date()
        const newPlayer = {channel_id: channelId, opaque_user_id: currentOpaqueUserId, last_updated: currentTime, points_to_spend:1}
        const insertFirstScoreQuery = 'INSERT INTO players WHERE (channel_id, user_id, opaque_user_id, last_updated, points) VALUES ($1, $2, $3, $4, $5, $6);'
        await client.query(insertFirstScoreQuery, [channelId, currentUserId, currentOpaqueUserId, currentTime, 1])
        return res.status(200).json(newPlayer)
    } else {
        const MINUTE = 60 * 1000

        let lastUpdated = player[0].last_updated

        // Round last_updated time up to the nearest minute
        let pointThresholdTime = new Date(lastUpdated.getTime() + MINUTE)
        pointThresholdTime.setSeconds(0)
        pointThresholdTime.setMilliseconds(0)

        const currentTime = new Date()

        if (currentTime >= pointThresholdTime) {
            const updatePlayerQuery = 'UPDATE players SET points = $1 WHERE opaque_user_id = $2 and channel_id = $3'
            await client.query(updatePlayerQuery, [player.points+1, currentOpaqueUserId, channelId])
            const updatedPlayer = {...player, last_updated: currentTime, points:player.points+1}
            return res.status(200).json(updatedPlayer)
        }

       return res.status(200).json(player)
    }
})

module.exports = playersRouter