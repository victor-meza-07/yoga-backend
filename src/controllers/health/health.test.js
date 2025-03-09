const request = require('supertest')
const express = require('express')
const healthController = require('./health')

const app = express().use(healthController)

describe('[GET] /health', () => {
  it('returns health response', (done) => {
    request(app)
      .get("/health")
      .expect(200, done)
  })
})