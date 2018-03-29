const { Schema, Schema: { ObjectId } } = require('mongoose')

const Review = require('./Review')

module.exports = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    reviews: [Review],
    title: String,
})