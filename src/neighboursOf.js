const eastOf = require('./eastOf')
const northeastOf = require('./northeastOf')
const northOf = require('./northOf')
const northwestOf = require('./northwestOf')
const westOf = require('./westOf')
const southwestOf = require('./southwestOf')
const southOf = require('./southOf')
const southeastOf = require('./southeastOf')

const validate = require('./validate')

/**
 * Computes the cells near a given geohash.
 *
 * @param {String} geohash
 *
 * @returns {Array} neighbours in anticlockwise order
 */

function neighboursOf (geoHash) {
  validate(geoHash)

  var neighbours = []

  // Number of iterations.
  const n = geoHash.length

  // Edge cases first

  const edgeCase = [
    // n = 0
    {'0': null},
    // n = 1
    {'0': ['1'], '1': ['0']},
    // n = 2
    {
      '00': ['01', '10', '11'],
      '01': ['00', '10', '11'],
      '10': ['11', '01', '00'],
      '11': ['10', '00', '01']
    },
    // n = 3
    {
      '000': ['001', '011', '111', '100', '101'],
      '001': ['010', '000', '100', '101', '110'],
      '010': ['011', '001', '101', '110', '111'],
      '011': ['000', '010', '110', '111', '100'],
      '100': ['101', '001', '000', '011', '111'],
      '101': ['110', '010', '001', '000', '100'],
      '110': ['111', '011', '010', '001', '101'],
      '111': ['100', '000', '011', '010', '110']
    }
  ]

  if (n < 4) return edgeCase[n][geoHash]

  neighbours.push(eastOf(geoHash))

  const geoHashAtNorth = northOf(geoHash)

  if (geoHashAtNorth) {
    neighbours.push(northeastOf(geoHash))
    neighbours.push(geoHashAtNorth)
    neighbours.push(northwestOf(geoHash))
  }

  neighbours.push(westOf(geoHash))

  const geoHashAtSouth = southOf(geoHash)

  if (geoHashAtSouth) {
    neighbours.push(southwestOf(geoHash))
    neighbours.push(geoHashAtSouth)
    neighbours.push(southeastOf(geoHash))
  }

  return neighbours
}

module.exports = neighboursOf
