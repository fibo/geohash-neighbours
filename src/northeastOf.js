const eastOf = require('./eastOf')
const northOf = require('./northOf')
const validate = require('./validate')

function northeastOf (geoHash) {
  validate(geoHash)

  const geoHashAtNorth = northOf(geoHash)

  if (geoHashAtNorth) return eastOf(geoHashAtNorth)
  else return null
}

module.exports = northeastOf
