const { Schema, Schema: { ObjectId } } = require('mongoose')

module.exports  = new Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    vote: Number,
    comment: String,
})