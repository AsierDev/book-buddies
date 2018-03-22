const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { bookId } } = req
    const { body: { userId, vote, comment, avRate   } } = req

    logic.addReview( bookId, userId, vote, comment, avRate )
        .then(id => {
            res.json(success({ id }))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}
