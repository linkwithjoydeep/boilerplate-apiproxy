'use strict'

const { MissingParameterError, InvalidParameterValueError } = require('../errors/Errors')

module.exports = () => {
    return (req, res, next) => {
        let allowedContentTypes = ['application/json']
        let reqHeaders = req.headers
        let reqMethod = req.method

        // Throw error if content type header is missing.
        if (reqMethod !== 'GET' && !reqHeaders['content-type']) {
              throw new MissingParameterError('Content-Type')
        }

        // Throw error if content-type is not allowed or invalid.
        if (reqMethod !== 'GET' && reqHeaders['content-type'] && !allowedContentTypes.includes(reqHeaders['content-type'])) {
              throw new InvalidParameterValueError('Content-Type')
        }

        // Move to next middleware if no errors.
        next()
    }
}
