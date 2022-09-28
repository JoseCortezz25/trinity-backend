const { request } = require('express')
const jwt = require('jsonwebtoken')

const handleAuth = (req, res, next) => {
  const { headers, method, path } = req
  const { authorization } = headers
  const { JWT_PASSWORD } = process.env
  let token = ''
  let decodedToken = {}
  const pathname = path.substring(1)
  request.pathname = pathname

  if ((pathname === 'users' && method === 'POST') || pathname === 'login')
    return next()

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  try {
    decodedToken = jwt.verify(token, JWT_PASSWORD)
  } catch {}

  if (!token || !decodedToken.id)
    return res
      .status(401)
      .json({ error: 401, message: 'token missing or invalid' })
      .end()

  request.decodedToken = decodedToken

  return next()
}

module.exports = handleAuth
