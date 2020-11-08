const playersRouter = require('express').Router()
const { client } = require('../client')

playersRouter.post('/', async (req,res) => {
    /*
     * Updates the points of the player, IF an appropriate amount of time has passed
     * @return {channel_id, opaque_user_id, last_updated, total_points, points_to_spend, attack_stat, jump_stat, shield_stat, focus_stat}
    */ 
    const currentOpaqueUserId = res.locals.token.opaque_user_id
    const currentUserId = res.locals.token.user_id
    const channelId = res.locals.token.channel_id
    const playerQuery = 'SELECT * FROM players WHERE user_id = $1 and channel_id = $2'
    let player = (await client.query(playerQuery, [currentUserId, channelId])).rows
    if (player.length === 0) {
        const currentTime = new Date()
        const newPlayer = {channel_id: channelId, user_id: currentUserId, opaque_user_id: currentOpaqueUserId, last_updated: currentTime, total_points: 1, points_to_spend:1, attack_stat:0, jump_stat:0, shield_stat:0, focus_stat:0}
        const insertFirstScoreQuery = 'INSERT INTO players (channel_id, user_id, opaque_user_id, last_updated, total_points, points_to_spend, attack_stat, jump_stat, shield_stat, focus_stat) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);'
        await client.query(insertFirstScoreQuery, [channelId, currentUserId, currentOpaqueUserId, currentTime, 1, 1, 0, 0, 0, 0])

        return res.status(200).json(newPlayer)
    } else {
        player = player[0]

        const MINUTE = 60 * 1000
        let lastUpdated = player.last_updated

        // Round last_updated time up to the nearest minute
        let pointThresholdTime = new Date(lastUpdated.getTime() + MINUTE)
        pointThresholdTime.setSeconds(0)
        pointThresholdTime.setMilliseconds(0)

        const currentTime = new Date()

        if (currentTime >= pointThresholdTime) {
            const updatePlayerQuery = 'UPDATE players SET total_points = $1, points_to_spend =$2 WHERE user_id = $3 and channel_id = $4'
            await client.query(updatePlayerQuery, [Number(player.total_points)+1, Number(player.points_to_spend)+1, currentUserId, channelId])
            const updatedPlayer = {...player, last_updated: currentTime, total_points:Number(player.total_points)+1, points_to_spend:Number(player.points_to_spend)+1}
            return res.status(200).json(updatedPlayer)
        }

       return res.status(200).json(player)
    }
})

module.exports = playersRouter