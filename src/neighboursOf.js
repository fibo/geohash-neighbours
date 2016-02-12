const validate = require('./validate')

/**
 * Computes the 8 cells near a given geohash.
 *
 * @param {String} geohash
 *
 * @returns {Array} neighbours
 */

function neighboursOf (geoHash) {
  try {
    validate(geoHash)
  } catch (err) {
    throw err
  }

  var neighbours = []

  const numIterations = geoHash.length

  // Edge cases first

  const edgeCase = [
    // n = 0
    [],
    // n = 1
    {'0': ['1'], '1': ['0']},
    // n = 2
    {
      '00': ['01', '10', '11'],
      '01': ['00', '10', '11'],
      '10': ['00', '01', '11'],
      '11': ['00', '01', '10']
    },
    // n = 3
    ['TODO']
  ]

  if (numIterations < 4) {
    return edgeCase[numIterations][geoHash]
  }

  return neighbours
}

module.exports = neighboursOf
