const mongoose = require('mongoose')

const { USER_MONGO, PASS_MONGO, NODE_ENV } = process.env

const DB_URI = `mongodb+srv://${USER_MONGO}:${PASS_MONGO}@trinity.pxefqkg.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('mongoDB is connected'))
  .catch((err) =>
    console.error("hasn't can connect to mongodb", { tracer: err })
  )

module.exports = mongoose
