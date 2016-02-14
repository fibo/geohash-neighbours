const validate = require('./validate')

function southOf (geoHash) {
  validate(geoHash)

  return null
}

module.exports = southOf
