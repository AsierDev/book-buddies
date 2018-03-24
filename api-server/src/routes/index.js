const { Router } = require('express')
const bodyParser = require('body-parser')
const { retrieveGeneralSearch, retrieveCategory, retrieveAuthor, retrieveBook, createUser, loginUser, addReview, addBookToList, retrieveRandom, retrieveUser } = require('./handlers')

const router = Router()

const jsonBodyParser = bodyParser.json()

router.get('/results/:query', retrieveGeneralSearch)

router.get('/category/:query', retrieveCategory)

router.get('/author/:query', retrieveAuthor)

router.get('/book/:id', retrieveBook)

router.post('/user', jsonBodyParser, createUser)

router.post('/login', jsonBodyParser, loginUser)

router.post('/book/:bookId/review', jsonBodyParser, addReview)

router.put('/book/:bookId/add', jsonBodyParser, addBookToList)

router.get('/browse', retrieveRandom)

router.get('/user/:id', retrieveUser)



module.exports = router