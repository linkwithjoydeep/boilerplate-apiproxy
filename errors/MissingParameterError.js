class MissingParameterError extends Error {
    constructor(param = 'N/A'){
        // Error message text.
        let message = `Missing mandatory parameter '${param}'`
        // Set the parent error message.
        super(message)
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        // Set the error code.
        this.code = 400
        // Capture the stack trace.
        Error.captureStackTrace(this, this.constructor);
    }
    
}

module.exports = MissingParameterError
