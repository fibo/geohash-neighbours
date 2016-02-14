const westOf = require('./westOf')
const northOf = require('./northOf')
const validate = require('./validate')

function northWestOf (geoHash) {
  validate(geoHash)

  const geoHashAtNorth = northOf(geoHash)

  if (geoHashAtNorth) return westOf(geoHashAtNorth)
  else return null
}

module.exports = northWestOf
