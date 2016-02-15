const eastOf = require('./eastOf')
const southOf = require('./southOf')
const validate = require('./validate')

function southeastOf (geoHash) {
  validate(geoHash)

  const geoHashAtSouth = southOf(geoHash)

  if (geoHashAtSouth) return eastOf(geoHashAtSouth)
  else return null
}

module.exports = southeastOf
