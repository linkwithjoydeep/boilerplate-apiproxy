'use strict'

// Errors.
const { ResourceNotFoundError } = require('../errors/Errors')

module.exports = () => {

    return (req, res, next) => {
        return next(new ResourceNotFoundError())
    }
}
