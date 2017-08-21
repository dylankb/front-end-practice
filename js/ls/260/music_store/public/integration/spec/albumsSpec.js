/* eslint-disable func-names */
describe('Albums collection', function() {
  it('can load without crashing', function(done) {
    expect(App.albums.toJSON().length).toBe(3);
    expect(typeof App.albums.models[0].attributes.title).toBe('string');
    done();
  });
});
