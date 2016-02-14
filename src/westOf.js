const validate = require('./validate')

function westOf (geoHash) {
  validate(geoHash)

  return null
}

module.exports = westOf
