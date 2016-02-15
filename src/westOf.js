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
    },
    // n = 4
    {
      '0000': '0101',
      '0001': '0000',
      '0010': '0111',
      '0011': '0010',
      '0100': '0001',
      '0101': '0100',
      '0110': '0011',
      '0111': '0110',
      '1000': '1101',
      '1001': '1000',
      '1010': '1111',
      '1011': '1010',
      '1100': '1001',
      '1101': '1100',
      '1110': '1011',
      '1111': '1110'
    }
  ]

  if (n < 5) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    const parentSquare = geoHash.substr(0, n - 4)
    const last4Bits = geoHash.substr(n - 4, 4)
    const borderCells = [
      '0000', '0010', '1000', '1010'
    ]

    const westOfLast4Bits = westOf(last4Bits)

    if (borderCells.indexOf(last4Bits) === -1) {
      return parentSquare + westOfLast4Bits
    } else {
      return westOf(parentSquare) + westOfLast4Bits
    }
  } else {
    const container = geoHash.substr(0, n - 1)
    const lastBit = geoHash.substr(n - 1, 1)

    if (lastBit === '1') return container + '0'
    else return westOf(container) + '1'
  }
}

module.exports = westOf
