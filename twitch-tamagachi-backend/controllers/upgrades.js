const upgradesRouter = require('express').Router()
const { json } = require('express')
const { client } = require('../client')

upgradesRouter.get('/', async (req,res) => {
    /*
     * TODO when we want dynamic upgrades that change
     * Get the available upgrades for the session, attribute, increment value, 
    */

    res.status(200).json(hiscoreMembers).end()
})

upgradesRouter.post('/attempt', async (req,res) => {
    /*
     * Uses Math.random to upgrade the players attribute and score.
     * @return {channel_id, user_id, opaque_user_id, last_updated, points}
    */ 

    const seed = Math.random()
    //upgrade related variables
    let upgradedValue = 0
    let success = false
    const cost = req.body.cost
    const attribute = req.body.attribute

    if (seed <= req.body.chance) {
        //Successfully upgraded increment effected attribute
        upgradedValue += req.body.increment
        success = true
    }

    const currentOpaqueUserId = res.locals.token.opaque_user_id
    const currentUserId = res.locals.token.user_id
    const channelId = res.locals.token.channel_id
    const playerQuery = 'SELECT * FROM players WHERE opaque_user_id = $1'
    const player = (await client.query(playerQuery, [currentOpaqueUserId])).rows
    //dictionary representing delta for stats
    let differenceStat = {
        'attack': 0,
        'jump': 0,
        'shield': 0,
        'focus': 0, 
    }
    //upgrade attribute by specified value
    differenceStat[attribute] += upgradedValue

    let lastUpdated = player[0].last_updated
    const updatePlayerQuery = 'UPDATE players SET points_to_spend = $1, attack_stat = $4, jump_stat = $5, shield_stat = $6, focus_stat = $7 WHERE opaque_user_id = $2 and channel_id = $3'
    //update players table to decrease points and increase stat
    await client.query(updatePlayerQuery, [player.points-cost, currentOpaqueUserId, channelId, player.attack_stat + differenceStat['attack'], 
        player.jump_stat + differenceStat['jump'], player.shield_stat + differenceStat['shield'], player.focus_stat + differenceStat['focus']])
        const updatedPlayer = {...player,
                                points_to_spend:Number(player.points_to_spend) - cost,
                                attack_stat: Number(player.attack_stat) + Number(differenceStat['attack']),
                                jump_stat: Number(player.jump_stat) + Number(differenceStat['jump']),
                                shield_stat: Number(player.shield_stat) + Number(differenceStat['shield']),
                                focus_stat: Number(player.focus_stat) + Number(differenceStat['focus']),
                                success: success
                            }
       return res.status(200).json(updatedPlayer)
   
})

module.exports = upgradesRouter
