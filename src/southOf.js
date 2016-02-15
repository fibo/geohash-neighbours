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
    },
    // n = 4
    {
      '0000': '0010',
      '0001': '0011',
      '0010': '1000',
      '0011': '1001',
      '0100': '0110',
      '0101': '0111',
      '0110': '1100',
      '0111': '1101',
      '1000': '1010',
      '1001': '1011',
      '1010': null,
      '1011': null,
      '1100': '1110',
      '1101': '1111',
      '1110': null,
      '1111': null
    }
  ]

  if (n < 5) return edgeCase[n][geoHash]

  if (n % 2 === 0) {
    const parentSquare = geoHash.substr(0, n - 4)
    const last4Bits = geoHash.substr(n - 4, 4)
    const southOfBorderCell = {
      '1010': '0000',
      '1011': '0001',
      '1110': '0100',
      '1111': '0101'
    }

    if (Object.keys(southOfBorderCell).indexOf(last4Bits) === -1) {
      return parentSquare + southOf(last4Bits)
    } else {
      const southOfParentSquare = southOf(parentSquare)

      if (southOfParentSquare) return southOfParentSquare + southOfBorderCell[last4Bits]
      else return null
    }
  } else {
    const container = geoHash.substr(0, n - 1)
    const lastBit = geoHash.substr(n - 1, 1)

    const southOfContainer = southOf(container)

    if (southOfContainer) return southOfContainer + lastBit
    else return null
  }
}

module.exports = southOf
