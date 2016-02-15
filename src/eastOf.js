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
    },
    // n = 4
    {
      '0000': '0001',
      '0001': '0100',
      '0010': '0011',
      '0011': '0110',
      '0100': '0101',
      '0101': '0000',
      '0110': '0111',
      '0111': '0010',
      '1000': '1001',
      '1001': '1100',
      '1010': '1011',
      '1011': '1110',
      '1100': '1101',
      '1101': '1000',
      '1110': '1111',
      '1111': '1010'
    }
  ]

  if (n < 5) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    const parentSquare = geoHash.substr(0, n - 4)
    const last4Bits = geoHash.substr(n - 4, 4)
    const borderCells = [
      '0101', '0111', '1101', '1111'
    ]

    const eastOfLast4Bits = eastOf(last4Bits)

    if (borderCells.indexOf(last4Bits) === -1) {
      return parentSquare + eastOfLast4Bits
    } else {
      return eastOf(parentSquare) + eastOfLast4Bits
    }
  } else {
    const container = geoHash.substr(0, n - 1)
    const lastBit = geoHash.substr(n - 1, 1)

    if (lastBit === '0') return container + '1'
    else return eastOf(container) + '0'
  }
}

module.exports = eastOf
