const northeastOf = require('geohash-neighbours').northeastOf
const should = require('should')

describe('northeastOf', () => {
  it('returns null if geohash is on north border', () => {
    should(northeastOf('000000000')).be.null()
  })
})
