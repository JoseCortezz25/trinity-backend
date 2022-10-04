const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models/User')

class SessionController {
  login = async (req, res, next) => {
    try {
      const {
        body: { email, password },
      } = req
      const { JWT_PASSWORD } = process.env
      const user = await User.findOne({ email })
      const passwordCorrect =
        user === null
          ? false
          : await bcrypt.compare(password, user.passwordHash)

      if (!(user && passwordCorrect))
        return res
          .status(401)
          .json({ error: 'Usuario o contraseña invalida' })
          .end()

      const userForToken = {
        id: user._id,
        fullname: user.fullname,
        rol: user.rol,
        status: user.status,
      }
      const token = jwt.sign(userForToken, JWT_PASSWORD)

      return res
        .status(200)
        .json({ ...userForToken, token })
        .end()
    } catch (e) {
      next(e)
    }
  }

  sigOut = async (req, res, next) => {
    try {
      const { headers } = req
      const { authorization } = headers
      console.log('')
    } catch (e) {
      next(e)
    }
  }
}

const sessionController = new SessionController()

module.exports = { sessionController }
