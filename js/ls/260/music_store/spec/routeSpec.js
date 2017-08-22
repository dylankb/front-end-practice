var request = require('request');
var root = 'http://localhost:3000/';

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
    var testBody = {
      title: 'Test Title',
      artist: 'Test Artist',
      date: '8888-08-08',
      cover: '',
      price: '88',
    };

    it('returns response', function(done) {
      // Sourced from https://www.npmjs.com/package/request#multipartform-data-multipart-form-uploads
      request.post({ url: root + 'albums', formData: testBody }, function(e, res, body) {
        var id = JSON.parse(body).id;
        expect(res.statusCode).toEqual(200);
        expect(id).toBeDefined();
        done();
      });
    });
    describe('GET /albums', function() {
      it('returns a valid 200 response', function(done) {
        request(root + 'albums', function(e, res) {
          expect(res.statusCode).toEqual(200);
          done();
        });
      });
    });
  });
});
