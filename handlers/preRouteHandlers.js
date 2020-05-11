'use strict'

const bodyParser = require('body-parser')
const addCORSHeaders = require('../middlewares/addCORSHeaders')
const headerValidator = require('../middlewares/headerValidator')
const jsonValidator = require('../middlewares/jsonValidator')
const addRequestId = require('express-request-id')

module.exports = (app) => {

  // Middlewares for pre Routes flow.
  // These middlewares will be exucuted before any Route is parsed.
  app.use(

    addRequestId(),           // Middleware Add request ID
    bodyParser.json(),        // Middleware for parsing JSON body.
    jsonValidator(),          // Middleware to handle invalid JSON body
    addCORSHeaders(),         // Middleware for Cross Origin Resource sharing.
    headerValidator()         // Middleware for mandatory header validation.

  )

}
