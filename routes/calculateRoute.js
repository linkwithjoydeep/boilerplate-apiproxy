'use strict'

const express = require('express');
const router = express.Router();

// Schema validator moddleware.
const { validateSchema, Schemas } = require('../middlewares/schemaValidator');

// Errors
const { InvalidParameterValueError } = require('../errors/Errors')

// Preflow middlewares.
// These middlewares will be exucuted before any method specific middlewares are executed.
router.use(

  (req, res, next) => next('route') // Skip to next handler. Replace this with actual middlewares when necessary.

)

// Add route specific middlewares.
router.post('/:operation',

  validateSchema(Schemas.numbers),

  (req, res, next) => {
    // Get input operation.
    let { operation } = req.params
    // Get the input numbers.
    let { number1, number2 } = req.body
    // Define result veriable.
    let result

    // Perform the operation as per the method.
    switch (operation) {
      case 'add':
        result = number1 + number2
        break

      case 'subtract':
        result = number1 - number2
        break

      case 'divide':
        result = number1 / number2
        break

      case 'multiply':
        result = number1 * number2
        break

      default:
        break;
    }

    // Throw error if result is undefined due to wrong method.
    if (!result) {
      return next(new InvalidParameterValueError('operation'))
    } else {
      // Send the response with result.
      res.status(200).json({
        status: 'success',
        operation: operation,
        result: result
      })
    }
  }

)

// Postflow middlewares.
// These middlewares will be exucuted after any method specific middlewares are executed.
router.use(

  (req, res, next) => next() // Skip to next middleware. Replace this with actual middlewares when necessary.

)

module.exports = router