'use strict'

const errorHandler = require('../middlewares/errorHandler')
const triggerInvalidPath = require('../middlewares/invalidPath')

module.exports = (app) => {

    // Middlewares for post Routes flow.
    // These middlewares will be exucuted after all the Routes are parsed.
    app.use(

        triggerInvalidPath(),       // Middleware for triggering invalid path if no routes are matched.
        errorHandler()              // Middleware for handling Errors
    )

}
