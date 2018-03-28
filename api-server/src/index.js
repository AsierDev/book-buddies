require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')

const host = process.env.MONGO_HOST
const MongoPort = process.env.MONGO_PORT
const database = process.env.MONGO_DB


mongoose.connect(`mongodb://${host}:${MongoPort}/${database}`)

const app = express()

app.use(cors())

app.use('/api', routes)

const port = process.env.PORT


app.listen(port, () => console.log(`users api running on port ${port}`))