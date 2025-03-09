const controller = require('express').Router()

controller.route("/auth")
  .post((request, response) => {
    response.json( request.body )
  })

module.exports = controller