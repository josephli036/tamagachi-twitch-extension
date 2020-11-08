const upgradesRouter = require('express').Router()
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

    if (seed >= req.body.chance) {
        //Successfully upgraded increment effected attribute
        upgradedValue += req.body.increment
        success = true
    }

    const currentOpaqueUserId = res.locals.token.opaque_user_id
    const currentUserId = res.locals.token.user_id
    const channelId = res.locals.token.channel_id
    const memberQuery = 'SELECT * FROM players WHERE opaque_user_id = $1'
    let member = (await client.query(memberQuery, [currentOpaqueUserId])).rows
    //dictionary representing delta for stats
    let differenceStat = {
        'attack': 0,
        'jump': 0,
        'shield': 0,
        'focus': 0, 
    }
    //upgrade attribute by specified value
    differenceStat[attribute] += upgradedValue

    if (member.length === 0) {
        //copied from andrew but shouldn't happen since the user should exist to use the upgrade button
    } else {
        let lastUpdated = member[0].last_updated
        const updateMemberQuery = 'UPDATE players SET points_to_spend = $1, attack_stat = $4, jump_stat = $5, shield_stat = $6, focus_stat = $7 WHERE opaque_user_id = $2 and channel_id = $3'
        //update players table to decrease points and increase stat
        await client.query(updateMemberQuery, [member.points_to_spend-cost, currentOpaqueUserId, channelId, member.attack_stat + differenceStat['attack'], 
            member.jump_stat + differenceStat['jump'], member.shield_stat + differenceStat['shield'], member.focus_stat + differenceStat['focus']])
        const updatedMember = {...member, points:member.points+1}
   }
   if (success) {
        //TODO determine return values for both of these cases
   } else {
       return res.status(200)
   }
})

module.exports = upgradesRouter