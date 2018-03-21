const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { bookId } } = req
    const { body: { userId, list } } = req

    logic.addBookToList(bookId, userId, list)
        .then(results => {
            res.json(success(results))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}