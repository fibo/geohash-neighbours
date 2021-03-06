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
    const parentSquare = geoHash.substr(0, n - 4)
    const last4Bits = geoHash.substr(n - 4, 4)
    const northOfBorderCell = {
      '0000': '1010',
      '0001': '1011',
      '0100': '1110',
      '0101': '1111'
    }

    if (Object.keys(northOfBorderCell).indexOf(last4Bits) === -1) {
      return parentSquare + northOf(last4Bits)
    } else {
      const northOfParentSquare = northOf(parentSquare)

      if (northOfParentSquare) return northOfParentSquare + northOfBorderCell[last4Bits]
      else return null
    }
  } else {
    const container = geoHash.substr(0, n - 1)
    const lastBit = geoHash.substr(n - 1, 1)

    const northOfContainer = northOf(container)

    if (northOfContainer) return northOfContainer + lastBit
    else return null
  }
}

module.exports = northOf
