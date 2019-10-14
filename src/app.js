const express = require('express')
const app = express()
const cors = require('cors')

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(cors())
app.use(express.json())

//routes
const users = require('./routes/users')
const notes = require('./routes/notes')

app.use('/api/users', users)
app.use('/api/notes', notes)

module.exports = app
