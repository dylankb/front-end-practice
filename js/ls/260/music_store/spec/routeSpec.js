var request = require('request');
var root = 'http://localhost:3000/';
// function setUp

/* eslint-disable func-names */
describe('Music store', function() {
  describe('GET /', function() {
    it('returns a valid 200 response', function(done) {
      request(root, function(e, res) {
        expect(res.statusCode).toEqual(200);
        done();
      });
    });
  });
  describe('GET /', function() {
    // it('')
  });
});
