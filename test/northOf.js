const northOf = require('../src/northOf')
const should = require('should')

describe('northOf', () => {
  it('returns null if geohash is on north border', () => {
    should(northOf('0000000')).be.null
  })
})
