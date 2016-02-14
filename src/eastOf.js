const validate = require('./validate')

function eastOf (geoHash) {
  validate(geoHash)

  return null
}

module.exports = eastOf
