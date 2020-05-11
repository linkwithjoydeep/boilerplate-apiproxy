// Validate JSON payload.
'use strict'

const { InvalidJsonError } = require('../errors/Errors')

module.exports = () => {

    return (error, req, res, next) => {

        if (error instanceof SyntaxError) {

            throw new InvalidJsonError()
        }
    };

};
