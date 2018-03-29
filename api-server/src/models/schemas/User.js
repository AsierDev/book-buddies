const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports = new Schema({
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
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
    },
    favorites: [
        {
            type: ObjectId,
            title: String,
            ref: 'Book'
        }
    ],
    wishlist: [
        {
            type: ObjectId,
            title: String,
            ref: 'Book'
        }
    ],
    reviews: [{
        type: ObjectId,
        ref: 'Book'
    }]

})