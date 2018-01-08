/* eslint-disable func-names */
describe('Albums collection', function() {
  it('can load without crashing', function(done) {
    this.collection = new Albums(albumsScaffold.models);
    expect(this.collection.toJSON().length).toBe(3);
    expect(typeof this.collection.models[0].attributes.title).toBe('string');
    done();
  });
});
