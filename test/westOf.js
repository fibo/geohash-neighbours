const westOf = require('../src/westOf')

describe('westOf', () => {
  it('works when n=1', () => {
    westOf('0').should.be.eql('1')
    westOf('1').should.be.eql('0')
  })

  it('works when n=2')

  it('works when n=3')

  it('works when n=4')

  it('works when n=5', () => {
    westOf('00000').should.be.eql('01011')
    westOf('00001').should.be.eql('00000')

    // TODO add test cases
    westOf('11111').should.be.eql('11110')
  })
})
