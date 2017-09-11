const southeastOf = require('geohash-neighbours').southeastOf
const should = require('should')

describe('southeastOf', () => {
  it('returns null if geohash is on south border', () => {
    should(southeastOf('111111')).be.null()
  })
})
