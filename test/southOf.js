const southOf = require('geohash-neighbours').southOf
const should = require('should')

describe('southOf', () => {
  it('works when n=1', () => {
    should(southOf('0')).be.null
    should(southOf('1')).be.null
  })

  it('works when n=2')

  it('works when n=3')

  it('works when n=4')

  it('works when n=5', () => {
    southOf('00000').should.be.eql('00100')
    southOf('00001').should.be.eql('00101')

    // TODO add test cases
    should(southOf('11110')).be.null
    should(southOf('11111')).be.null
  })

  it('works when n=6', () => {
    southOf('000000').should.be.eql('000010')
    southOf('000001').should.be.eql('000011')

    // TODO add test cases
    should(southOf('111110')).be.null
    should(southOf('111111')).be.null
  })

  it('returns null if geohash is on south border', () => {
    should(southOf('111111')).be.null
  })
})
