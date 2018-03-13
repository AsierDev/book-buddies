const { success, fail } = require('./api-utils')
const logic = require('../../logic')

module.exports = (req, res) => {
    const { params: { query } } = req

    logic.retrieveGeneralSearch(query)
        .then(results => {
            res.json(success(results))
        })
        .catch(err => {
            res.json(fail(err.message))
        })
}