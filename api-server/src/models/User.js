const mongoose = require('mongoose')

const { Schema, Schema:{ObjectId} } = mongoose

const User = new Schema({
    name:{
        type: String,
        required: true   
    },
    username: {
        type: String,
        required: true
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
    ratings: [
        {
            type: ObjectId,
            ref: 'Book'
        }
    ],
    comentarios: [
        {
            type: ObjectId,
            ref: 'Book'
        }
    ],
    
})

module.exports = User