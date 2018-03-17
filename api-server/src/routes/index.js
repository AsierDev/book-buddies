const { Router } = require('express')
const bodyParser = require('body-parser')
const { retrieveGeneralSearch, retrieveCategory, retrieveAuthor, retrieveBook } = require('./handlers')

const router = Router()


router.get('/results/:query', retrieveGeneralSearch)

router.get('/category/:query', retrieveCategory)

router.get('/author/:query', retrieveAuthor)

router.get('/book/:id', retrieveBook)


/* 

POSSIBLE ROUTES FOR USERS

router.get('/users', list)

const jsonBodyParser = bodyParser.json()

router.post('/user', jsonBodyParser, create)

router.put('/user/:id', jsonBodyParser, update)

router.delete('/user/:id', jsonBodyParser, _delete)

router.get('/user/:id', retrieve)

router.get('/users/:query', retrieveQuery) 

*/

module.exports = router