const validate = require('./validate')

function westOf (geoHash) {
  validate(geoHash)

  // Number of iterations.
  const n = geoHash.length

  const edgeCase = [
    // n = 0
    {'0': null},
    // n = 1
    {'0': '1', '1': '0'},
    // n = 2
    {
      '00': '01',
      '01': '00',
      '10': '11',
      '11': '10'
    },
    // n = 3
    {
      '000': '011',
      '001': '000',
      '010': '001',
      '011': '010',
      '100': '111',
      '101': '100',
      '110': '101',
      '111': '110'
    }
  ]

  if (n < 4) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    // TODO
  } else {
    // TODO
  }
}

module.exports = westOf
