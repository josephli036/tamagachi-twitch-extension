const hiscoresRouter = require('express').Router()
const { client } = require('../client')

hiscoresRouter.get('/', async (req,res) => {
    /*
     * Returns the top 10 players from the leaderboards AND the requesting player's score
     * The requesting player's user_id is stored in res.locals
     * @return [{channel_id, user_id, last_updated, total_points, attack_stat, jump_stat, shield_stat, focus_stat, player_rank},...{}] is of length 0..11 inclusive
     * 
     * NOTE: If the length is 11, then that means there may be a large gap between the lowest rank and 10
    */
    const currentUserId = res.locals.token.user_id
    const channelId = res.locals.token.channel_id
    const hiscorePlayersQuery = 'SELECT channel_id, user_id, last_updated, total_points, attack_stat, jump_stat, shield_stat, focus_stat, RANK() OVER(ORDER BY total_points DESC) player_rank FROM players WHERE user_id = $1 and channel_id = $2 ORDER BY total_points DESC LIMIT 10'
    const hiscorePlayers = (await client.query(hiscorePlayersQuery, [currentUserId, channelId])).rows

    let missingPlayer = true
    for (const hiscorePlayer of hiscorePlayers) {
        if (hiscorePlayer.user_id === currentUserId) {
            missingPlayer = false
            break;
        }
    }

    if (missingPlayer) {
        const singleScoreQuery = 'SELECT * FROM (SELECT channel_id, user_id, last_updated, total_points, attack_stat, jump_stat, shield_stat, focus_stat, RANK() OVER(ORDER BY total_points DESC) user_rank FROM players) o WHERE o.user_id = $1'
        const singleScore = await client.query(singleScoreQuery, [currentUserId])

        hiscorePlayers.push(singleScore.rows[0])
    }

    console.log(hiscorePlayers)
    res.status(200).json(hiscorePlayers).end()
})

module.exports = hiscoresRouter