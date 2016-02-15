const northwestOf = require('geohash-neighbours').northwestOf
const should = require('should')

describe('northwestOf', () => {
  it('returns null if geohash is on north border', () => {
    should(northwestOf('0000000000000')).be.null
  })
})
