const eastOf = require('../src/eastOf')

describe('eastOf', () => {
  it('works when n=1', () => {
    eastOf('0').should.be.eql('1')
    eastOf('1').should.be.eql('0')
  })
})
