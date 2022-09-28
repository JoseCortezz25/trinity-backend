const { Router } = require('express')
const { userController } = require('../controllers/UsersController')

const router = Router()

// get alls users
router.get('/', userController.findAll)

// get one user by id
router.get('/:id', userController.findById)

// create a new user
router.post('/', userController.create)

// update some user
router.put('/:id', userController.update)

// delete some user
router.delete('/:id', userController.delete)

const userRouter = router

module.exports = { userRouter }
