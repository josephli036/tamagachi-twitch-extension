const upgradesRouter = require('express').Router()
const { json } = require('express')
const { client } = require('../client')

upgradesRouter.get('/', async (req,res) => {
    /*
     * TODO when we want dynamic upgrades that change
     * Get the available upgrades for the session, attribute, increment value, 
    */
    return res.status(200).json('penis').end()
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
    const typeDefinition = {
        5: [5, .1, 200],
        3: [3, .6, 125],
        1: [1, .95, 75]
    }
    const cost = typeDefinition[req.body.upgradeType][2]
    const attribute = req.body.attribute
    if (seed <= typeDefinition[req.body.upgradeType][1]) {
        //Successfully upgraded increment effected attribute
        upgradedValue += typeDefinition[req.body.upgradeType][0]
        success = true
    }

    const currentUserId = res.locals.token.user_id
    const channelId = res.locals.token.channel_id
    // TODO(): Fix user not existing.
    const playerQuery = 'SELECT * FROM players WHERE user_id = $1 and channel_id = $2'
    let player = (await client.query(playerQuery, [currentUserId, channelId])).rows
    //dictionary representing delta for stats
    let differenceStat = {
        'attack': 0,
        'jump': 0,
        'shield': 0,
        'focus': 0, 
    }
    //upgrade attribute by specified value
    differenceStat[attribute] += upgradedValue
    let singlePlayer = player[0]
    const updatePlayerQuery = 'UPDATE players SET points_to_spend = $1, attack_stat = $4, jump_stat = $5, shield_stat = $6, focus_stat = $7 WHERE user_id = $2 and channel_id = $3'
    //update players table to decrease points and increase stat
    if (singlePlayer.points_to_spend >= cost) {
        await client.query(updatePlayerQuery, 
            [Number(singlePlayer.points_to_spend) - Number(cost), 
            currentUserId, 
            channelId, 
            Number(singlePlayer.attack_stat) + Number(differenceStat['attack']), 
            Number(singlePlayer.jump_stat) + Number(differenceStat['jump']),
            Number(singlePlayer.shield_stat) + Number(differenceStat['shield']), 
            Number(singlePlayer.focus_stat) + Number(differenceStat['focus'])]
        );
            const updatedPlayer = {...player,
                                    points_to_spend:Number(singlePlayer.points_to_spend) - Number(cost),
                                    attack_stat: Number(singlePlayer.attack_stat) + Number(differenceStat['attack']),
                                    jump_stat: Number(singlePlayer.jump_stat) + Number(differenceStat['jump']),
                                    shield_stat: Number(singlePlayer.shield_stat) + Number(differenceStat['shield']),
                                    focus_stat: Number(singlePlayer.focus_stat) + Number(differenceStat['focus']),
                                    success: success
                                }
       return res.status(200).json(updatedPlayer)
    } else {
        const updatedPlayer = {...player,
            points_to_spend:Number(singlePlayer.points_to_spend),
            attack_stat: Number(singlePlayer.attack_stat) + Number(differenceStat['attack']),
            jump_stat: Number(singlePlayer.jump_stat) + Number(differenceStat['jump']),
            shield_stat: Number(singlePlayer.shield_stat) + Number(differenceStat['shield']),
            focus_stat: Number(singlePlayer.focus_stat) + Number(differenceStat['focus']),
            success: success
        }
        return res.status(200).json(updatedPlayer)
    }
   
})

module.exports = upgradesRouter
