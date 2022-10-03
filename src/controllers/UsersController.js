const bcrypt = require('bcrypt')
const PrimaryController = require('./PrimaryController')
const { User } = require('../models/User')

class UsersController extends PrimaryController {
  constructor() {
    super(User)
  }

  create = async (req, res, next) => {
    try {
      const {
        body: {
          userData: { fullname, email, password, rol, status },
        },
      } = req
      console.log({ fullname, email, password, rol, status })
      const userValidateEmail = await User.findOne({ email })
      const message = `Este correo ya existe`

      if (userValidateEmail)
        return res.status(409).json({ error: 409, message }).end()

      const saltRounds = 10
      const passwordHash = await bcrypt.hash(password, saltRounds)
      const user = new User({
        fullname,
        email,
        status,
        passwordHash,
        rol,
      })

      const savedUser = await user.save()
      console.log('savedUser', savedUser)
      return res.status(201).json(savedUser).end()
    } catch (e) {
      next(e)
    }
  }
}

const userController = new UsersController()
module.exports = { userController }
