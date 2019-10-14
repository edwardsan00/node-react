const mongosee = require('mongoose')

const URI = process.env.MONGODB_URI || 'mongodb://localhost/testdb'

mongosee.connect(URI, {
	useNewUrlParser: true,
	useCreateIndex: true
})

const connection = mongosee.connection

connection.once('open', () => console.log('Conectdo a BD'))
