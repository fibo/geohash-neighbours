const validate = require('./validate')

function northOf (geoHash) {
  validate(geoHash)

  // Number of iterations.
  const n = geoHash.length

  const edgeCase = [
    // n = 0
    {'0': null},
    // n = 1
    {'0': null, '1': null},
    // n = 2
    {
      '00': null,
      '01': null,
      '10': '00',
      '11': '01'
    },
    // n = 3
    {
      '000': null,
      '001': null,
      '010': null,
      '011': null,
      '100': '000',
      '101': '001',
      '110': '010',
      '111': '011'
    }
  ]

  if (n < 4) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    // TODO
  } else {
    // TODO
  }
}

module.exports = northOf
