
var humanize = require('..');

describe('humanize(str)', function(){
  it('should translate punctuation to spaces', function(){
    humanize('foo__bar_baz').should.equal('Foo bar baz');
    humanize('Maru-the-cat').should.equal('Maru the cat');
  })

  it('should remove extensions', function(){
    humanize('maru_the_cat.png').should.equal('Maru the cat');
    humanize('maru_the.cat.png').should.equal('Maru the cat');
  })
})