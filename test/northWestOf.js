const northWestOf = require('../src/northWestOf')
const should = require('should')

describe('northWestOf', () => {
  it('returns null if geohash is on north border', () => {
    should(northWestOf('0000000000000')).be.null
  })
})
