const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const handleNotFound = require('./middlewares/handleNotFound')
const handleErrors = require('./middlewares/handleErrors')

// Initializer
const app = express()

// Settings
dotenv.config()
app.set('port', process.env.PORT || 3200)

// database-connection
require('./mongoose')

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes

// initial path: /
app.get('/', (_, res) => {
  res.status(200).send('<h1>Hello world!</h1>').end()
})

// path: /api
app.use('/api', require('./routes/index.routes'))

// handle the url if this hasn't exist
app.use(handleNotFound)

// handle errors
app.use(handleErrors)

// Starting server
app.listen(app.get('port'), () => {
  console.log('listen on port:', app.get('port'))
})
