const southWestOf = require('geohash-neighbours').southWestOf
const should = require('should')

describe('southWestOf', () => {
  it('returns null if geohash is on south border', () => {
    should(southWestOf('111111')).be.null
  })
})
