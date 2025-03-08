const controller = require('express').Router()
const pack = require('../../../package.json')
const { GIT_SHA } = require('config')

controller.route("/health")
  .get((_, res) => {
    res.json({
      version: pack.version,
      git_sha: GIT_SHA,
      status: 'up'
    })
  })

module.exports = controller