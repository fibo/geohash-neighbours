const southOf = require('../src/southOf')
const should = require('should')

describe('southOf', () => {
  it('returns null if geohash is on south border', () => {
    should(southOf('111111')).be.null
  })
})
