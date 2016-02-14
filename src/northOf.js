const validate = require('./validate')

function northOf (geoHash) {
  validate(geoHash)

  return null
}

module.exports = northOf
