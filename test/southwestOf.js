const southwestOf = require('geohash-neighbours').southwestOf
const should = require('should')

describe('southwestOf', () => {
  it('returns null if geohash is on south border', () => {
    should(southwestOf('111111')).be.null
  })
})
