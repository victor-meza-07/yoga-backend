const controller = require('express').Router()

controller.route("/reservations/:auth/:reservationId")
  .get((request, response) => {
    const { reservationId } = request.params
    response.json({
      id: reservationId,
      userId: '123450',
    })
  })
  .put((request, response) => {
    //todo update the request
    response.json('test')
  })
  .delete((request, response) => {
    response.sendStatus(204)
  })

module.exports = controller