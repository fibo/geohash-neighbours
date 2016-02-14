const northOf = require('../src/northOf')
const should = require('should')

describe('northOf', () => {
  it('works when n=1', () => {
    should(northOf('0')).be.null
    should(northOf('1')).be.null
  })

  it('works when n=2')

  it('works when n=3')

  it('works when n=4')

  it('works when n=5', () => {
    should(northOf('00000')).be.null
    should(northOf('00001')).be.null
    northOf('00100').should.be.eql('00000')
    northOf('00101').should.be.eql('00001')

    // TODO add test cases
    northOf('11110').should.be.eql('11010')
    northOf('11111').should.be.eql('11011')
  })

  it('returns null if geohash is on north border', () => {
    should(northOf('0000000')).be.null
  })
})
