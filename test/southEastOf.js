const southEastOf = require('geohash-neighbours').southEastOf
const should = require('should')

describe('southEastOf', () => {
  it('returns null if geohash is on south border', () => {
    should(southEastOf('111111')).be.null
  })
})
