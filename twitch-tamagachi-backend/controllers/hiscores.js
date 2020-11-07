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

hiscoresRouter.post('/:id', async (req,res) => {
    console.log('posted')
})

module.exports = hiscoresRouter