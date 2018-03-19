const mongoose = require('mongoose')

const { Schema, Schema:{ObjectId} } = mongoose

const User = new Schema({
    bookId:{
        type: String,
        required: true   
    },
    votes: [
        {
            type: Number,
        }
    ],
    rating: [
        {
            type: Number,
            ref: 'User'
        }
    ],
    comentarios: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ],
    
})

module.exports = Book