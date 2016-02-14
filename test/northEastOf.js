const northEastOf = require('../src/northEastOf')
const should = require('should')

describe('northEastOf', () => {
  it('returns null if geohash is on north border', () => {
    should(northEastOf('000000000')).be.null
  })
})
