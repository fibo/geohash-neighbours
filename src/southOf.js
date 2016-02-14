const validate = require('./validate')

function southOf (geoHash) {
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
      '00': '10',
      '01': '11',
      '10': null,
      '11': null
    },
    // n = 3
    {
      '000': '001',
      '001': '010',
      '010': '011',
      '011': '000',
      '100': null,
      '101': null,
      '110': null,
      '111': null
    }
  ]

  if (n < 4) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    // TODO
  } else {
    // TODO
  }
}

module.exports = southOf
