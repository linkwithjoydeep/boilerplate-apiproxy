'use strict'


// Routes
const calculateRoute = require('../routes/calculateRoute')

module.exports = (app) => {

  // Calculate route.
  app.use('/calculate', calculateRoute)


}
