const mongoose = require('mongoose')
const { Book, User, Review} = require ('./schemas')

module.exports = {
    User: mongoose.model('User', User),
    Review: mongoose.model('Review', Review),
    Book: mongoose.model('Book', Book)
}