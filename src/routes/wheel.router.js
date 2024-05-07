const express = require('express')
const router = express.Router()
const wheelController = require('../controllers/wheel.controller')

router.post('/', wheelController.createWheel)
router.get('/', wheelController.listAllWheels)

module.exports = router
