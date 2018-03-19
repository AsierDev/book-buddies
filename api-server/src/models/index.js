const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favorites: [
        {
            type: ObjectId,
            ref: 'Book'
        }
    ],
    wishlist: [
        {
            type: ObjectId,
            ref: 'Book'
        }
    ],
    reviews: [{
        type: ObjectId,
        ref: 'Book'
    }]

})

const Review = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    vote: Number,
    comment: String
})

const Book = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    reviews: [Review]
})

module.exports = {
    User: mongoose.model('User', User),
    Review: mongoose.model('Review', Review),
    Book: mongoose.model('Book', Book)
}