const router = require('express').Router()
const { BASE_PATH } = require('config')
const healthController = require('../controllers/health/health')
const reservationController = require('../controllers/reservations/reservations.controller')
const authController = require('../controllers/auth/auth.controller')

router.use("/" + BASE_PATH, healthController)
router.use("/" + BASE_PATH, reservationController)
router.use("/" + BASE_PATH, authController)


module.exports = {
  router
}