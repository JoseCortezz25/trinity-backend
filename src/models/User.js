const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const UsersSchema = new Schema({
  fullname: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    uppercase: true,
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  },
})

UsersSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    // never return the passwordHash
    delete returnedObject.passwordHash
  },
})

UsersSchema.post('save', function (err, doc, next) {
  if (err.name === 'MongoServerError' && err.code === 11000) {
    next('Username or email already exists')
  } else {
    next(err)
  }
})

UsersSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password)
  } catch (err) {
    throw new Error(err)
  }
}

const User = model('Users', UsersSchema)

module.exports = { User }
