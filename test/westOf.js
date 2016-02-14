const westOf = require('../src/westOf')

describe('westOf', () => {
  it('works when n=1', () => {
    westOf('0').should.be.eql('1')
    westOf('1').should.be.eql('0')
  })
})
