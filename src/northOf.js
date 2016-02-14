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
    },
    // n = 4
    {
      '0000': null,
      '0001': null,
      '0010': '0000',
      '0011': '0001',
      '0100': null,
      '0101': null,
      '0110': '0100',
      '0111': '0101',
      '1000': '0010',
      '1001': '0011',
      '1010': '1000',
      '1011': '1001',
      '1100': '0110',
      '1101': '0111',
      '1110': '1100',
      '1111': '1101'
    }
  ]

  if (n < 5) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    // TODO
  } else {
    // TODO
  }
}

module.exports = northOf
