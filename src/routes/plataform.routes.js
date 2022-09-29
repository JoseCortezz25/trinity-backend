const { Router } = require('express')
const { plataformController } = require('../controllers/PlataformController')
const router = Router()

router.get('/paths', plataformController.getLearningPaths)
router.get('/recommendations', plataformController.getListOfRecommendations)

const plataformRouter = router
module.exports = { plataformRouter }
