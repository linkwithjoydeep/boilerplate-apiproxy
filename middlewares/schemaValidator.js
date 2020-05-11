'use strict'

const { Validator } = require('jsonschema')
const schemaValidator = new Validator()

// Errors
const { InvalidParameterValueError, MissingParameterError,
    AdditionalPropertiesError } = require('../errors/Errors')

module.exports.validateSchema = (schema) => {

    return (req, res, next) => {
        try {
            // Validate a body against schema.
            let result = schemaValidator.validate(req.body, schema);

            // If there is an error object present throw errors.
            if (result.errors.length) {

                // Check error names.
                switch (result.errors[0].name) {
                    // Check for additional parameters in body.
                    case "additionalProperties":
                        throw new AdditionalPropertiesError(result.errors[0].argument)

                    // Error for missing mandatory parameter.
                    case "required":
                        throw new MissingParameterError(result.errors[0].argument)

                    // Error for invalid parameter value.
                    default:
                        throw new InvalidParameterValueError(result.errors[0].property.split(".")[1])

                }

                return;
            }
            // Move to next middleware if there are no errors.
            next()
        } catch (error) {
            // Move to next error handling middleware.
            next(error)
        }

    }
}

// Require all the schemas inside schemas object. 
module.exports.Schemas = {
    numbers: require('../schemas/numbers.json')
}
