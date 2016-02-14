const validate = require('./validate')

function eastOf (geoHash) {
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
      '000': '001',
      '001': '010',
      '010': '011',
      '011': '000',
      '100': '101',
      '101': '110',
      '110': '111',
      '111': '100'
    }
  ]

  if (n < 4) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    // TODO
  } else {
    // TODO
  }
}

module.exports = eastOf
