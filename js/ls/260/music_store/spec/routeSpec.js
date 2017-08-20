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
  describe('POST /', function() {
    // var testBody = {
    //   title: 'Another New Song',
    // };
    var testBody = { title: 'Test Title',
      artist: 'Test Artist',
      date: '8888-08-08',
      cover: '',
      price: 'Test',
    };

    it('returns JSON response', function(done) {
      request.post(root + 'albums', testBody, function(e, res) {
        var id = res.body.id;

        expect(res.statusCode).toEqual(200);
        expect(id).toBeDefined();
        done();
      });
    });
    describe('GET /albums', function() {
      it('returns a valid 200 response', function(done) {
        request(root + 'albums', function(e, res) {
          console.log(res.body);
          expect(res.statusCode).toEqual(200);
          done();
        });
      });
    });
  });
});
