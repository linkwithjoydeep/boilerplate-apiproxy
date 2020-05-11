class AdditionalPropertiesError extends Error {
    constructor(param){
        // Error message text.
        let message = `Invalid additional parameter '${param}' present in request.`
        // Set the error message.
        super(message)
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        // Set the error code.
        this.code = 400
        // Capture the stack trace.
        Error.captureStackTrace(this, this.constructor);
    }
    
}

module.exports = AdditionalPropertiesError
