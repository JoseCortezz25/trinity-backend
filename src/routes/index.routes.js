const { Router } = require('express')
const router = Router()
const { userRouter } = require('./users.routes')
const handleAuth = require('../middlewares/handleAuth')
const { sessionController } = require('../controllers/SessionController')

router.get('/', (_, res) => {
  res
    .status(200)
    .json({
      message: 'Hello world',
    })
    .end()
})

router.use(handleAuth)

// session || login route
router.post('/login', sessionController.login)

router.use('/users', userRouter)

module.exports = router
