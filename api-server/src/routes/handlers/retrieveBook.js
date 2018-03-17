const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { id } } = req

    logic.retrieveBook(id)
        .then(results => {
            res.json(success(results))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}