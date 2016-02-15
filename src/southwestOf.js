const westOf = require('./westOf')
const southOf = require('./southOf')
const validate = require('./validate')

function southwestOf (geoHash) {
  validate(geoHash)

  const geoHashAtSouth = southOf(geoHash)

  if (geoHashAtSouth) return westOf(geoHashAtSouth)
  else return null
}

module.exports = southwestOf
