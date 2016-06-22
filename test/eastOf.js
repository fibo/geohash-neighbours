const eastOf = require('geohash-neighbours').eastOf

describe('eastOf', () => {
  it('works when n=1', () => {
    eastOf('0').should.be.eql('1')
    eastOf('1').should.be.eql('0')
  })

  it('works when n=5', () => {
    eastOf('00000').should.be.eql('00001')
    eastOf('00001').should.be.eql('00010')

    eastOf('11111').should.be.eql('10100')
  })

  it('works when n=6', () => {
    eastOf('000000').should.be.eql('000001')
    eastOf('000001').should.be.eql('000100')
    eastOf('000010').should.be.eql('000011')

    eastOf('111110').should.be.eql('111111')
  })
})
