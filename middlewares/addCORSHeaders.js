'use strict'

module.exports = () => {
  return (req, res, next) => {
    // Adding access control headers to response object.
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization, Accept')
    res.header('Access-Control-Allow-Origin', '*')
    
    // Handling OPTIONS request sent by browsers.
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
      return res.status(200).json({})
    }

    next()
  }
}
