const retrieveGeneralSearch = require('./retrieveGeneralSearch')
const retrieveCategory = require('./retrieveCategory')
const retrieveAuthor = require('./retrieveAuthor')
const retrieveBook = require('./retrieveBook')
const createUser = require('./createUser')
const loginUser = require('./loginUser')
const addReview = require('./addReview')
const addBookToList = require('./addBookToList')


module.exports = {
    retrieveGeneralSearch,
    retrieveCategory,
    retrieveAuthor,
    retrieveBook,
    createUser,
    loginUser,
    addReview,
    addBookToList
}