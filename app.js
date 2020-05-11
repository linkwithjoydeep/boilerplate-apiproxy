'use strict'

const express = require('express')
// Create express app instance.
const app = express()

// Require handlers.
require('./handlers/preRouteHandlers')(app)
require('./handlers/routeHandler')(app)
require('./handlers/postRouteHandlers')(app)

module.exports = app
