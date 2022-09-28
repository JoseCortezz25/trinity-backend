const HANDLE_ERRORS = {
  CastError: (res, { message }) =>
    res
      .status(400)
      .json({ message: 'id used is malformed', stackTrace: message })
      .end(),
  ValidationError: (res, { message }) =>
    res
      .status(409)
      .json({ message: 'id used is malformed', stackTrace: message })
      .end(),
  JsonWebTokenError: (res) =>
    res.status(401).json({ message: 'token invalid or missing' }).end(),
  TypeError: (res, error) =>
    res.status(400).json({ message: 'type error', track: error.message }).end(),
  defaultError: (res, error) => res.status(500).json(error).end(),
}

const handlerErrors = (error, req, res, next) => {
  console.log(error.name)
  console.log(error)
  const handler = HANDLE_ERRORS[error.name] ?? HANDLE_ERRORS.defaultError
  return handler(res, error)
}

module.exports = handlerErrors
