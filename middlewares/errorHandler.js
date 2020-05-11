'use strict'

module.exports = () => {

    return (error, req, res, next) => {

        // Set the HTTP status code.
        let responseStatus =  error.code || 500
        // Set error message body.
        let message = error.code ? error.message : 'A service error occured.'

        // Error Response object.
        let responseBody = {
            error: {
                status: 'failure',
                message: message
            }
        }

        console.log(error)
        // Send the error response.
        res.status(responseStatus).json(responseBody)

    }

};
