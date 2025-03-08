const router = require('express').Router()
const { BASE_PATH } = require('config')
const healthController = require('../controllers/health/health')

router.use("/" + BASE_PATH, healthController)


module.exports = {
  router
}