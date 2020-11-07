const hiscoresRouter = require('express').Router()
const { client } = require('../client')

hiscoresRouter.get('/', async (req,res) => {
    /*
     * Returns the top 10 players from the leaderboards AND the requesting users score
     * The requesting user's opaque_user_id is stored in res.locals
     * @return [{channel_id, user_id, opaque_user_id, last_updated, points, user_rank},...{}] is of length 0..11 inclusive
     * 
     * NOTE: If the length is 11, then that means there may be a large gap between the lowest rank and 10
    */
    const currentUserId = res.locals.token.opaque_user_id
    const hiscoreMembersQuery = 'SELECT *, RANK() OVER(ORDER BY points DESC) user_rank FROM hiscores ORDER BY points DESC LIMIT 10'
    const hiscoreMembers = (await client.query(hiscoreMembersQuery)).rows

    let missingUser = true
    for (const hiscoreMember of hiscoreMembers) {
        if (hiscoreMember.opaque_user_id === currentUserId) {
            missingUser = false
            break;
        }
    }

    if (missingUser) {
        const singleScoreQuery = 'SELECT * FROM (SELECT *, ROW_NUMBER() OVER(ORDER BY points DESC) user_rank FROM hiscores) o WHERE o.opaque_user_id = $1'
        const singleScore = await client.query(singleScoreQuery, [currentUserId])

        hiscoreMembers.push(singleScore.rows[0])
    }

    console.log(hiscoreMembers)
    res.status(200).json(hiscoreMembers).end()
})

hiscoresRouter.post('/', async (req,res) => {
    /*
     * Updates the points of the player, IF an appropriate amount of time has passed
     * @return {channel_id, user_id, opaque_user_id, last_updated, points}
    */ 

    const currentOpaqueUserId = res.locals.token.opaque_user_id
    const currentUserId = res.locals.token.user_id
    const channelId = res.locals.token.channel_id
    const memberQuery = 'SELECT * FROM hiscores WHERE opaque_user_id = $1'
    const member = (await client.query(memberQuery, [currentOpaqueUserId])).rows
    
    console.log(member)

    if (member.length === 0) {
        const currentTime = new Date()
        const newMember = {channel_id: channelId, user_id: currentUserId, opaque_user_id: currentOpaqueUserId, last_updated: currentTime, points:1}
        const insertFirstScoreQuery = 'INSERT INTO hiscores WHERE (channel_id, user_id, opaque_user_id, last_updated, points) VALUES ($1, $2, $3, $4, $5, $6);'
        await client.query(insertFirstScoreQuery, [channelId, currentUserId, currentOpaqueUserId, currentTime, 1])
        return res.status(200).json(newMember)
    } else {
        const MINUTE = 60 * 1000

        let lastUpdated = member[0].last_updated

        // Round last_updated time up to the nearest minute
        let pointThresholdTime = new Date(lastUpdated.getTime() + MINUTE)
        pointThresholdTime.setSeconds(0)
        pointThresholdTime.setMilliseconds(0)

        if (new Date() >=pointThresholdTime) {
            const updateMemberQuery = 'UPDATE hiscores SET points = $1 WHERE opaque_user_id = $2 and channel_id = $3'
            await client.query(updateMemberQuery, [member.points+1, currentOpaqueUserId, channelId])
            const updatedMember = {...member, points:member.points+1}
            return res.status(200).json(updatedMember)
        }

       return res.status(200).json(member)
   }
})

module.exports = hiscoresRouter