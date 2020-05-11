class ResourceNotFoundError extends Error {
    constructor(param = 'N/A') {
        // Error message text.
        let message = "Requested resource was not found."
        // Set the parent error message.
        super(message)
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name
        // Set the error code.
        this.code = 404
        // Capture the stack trace.
        Error.captureStackTrace(this, this.constructor);
    }

}

module.exports = ResourceNotFoundError
