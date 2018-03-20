const { Router } = require('express')
const bodyParser = require('body-parser')
const { retrieveGeneralSearch, retrieveCategory, retrieveAuthor, retrieveBook, createUser, loginUser, addReview } = require('./handlers')

const router = Router()

const jsonBodyParser = bodyParser.json()

router.get('/results/:query', retrieveGeneralSearch)

router.get('/category/:query', retrieveCategory)

router.get('/author/:query', retrieveAuthor)

router.get('/book/:id', retrieveBook)

router.post('/user', jsonBodyParser, createUser)

router.post('/login', jsonBodyParser, loginUser)

router.post('/book/:bookId/review', jsonBodyParser, addReview)



module.exports = router