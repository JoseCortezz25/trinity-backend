const { Router } = require('express')
const { sessionController } = require('../controllers/SessionController')
const { userRouter } = require('./users.routes')
const { plataformRouter } = require('./plataform.routes')
const handleAuth = require('../middlewares/handleAuth')

const router = Router()

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

// Routing Plataform View
router.use('/aprender', plataformRouter)

module.exports = router
