/* eslint-disable func-names */
describe('Album view', function() {
  beforeEach(function() {
    this.view = new AlbumView({ model: albumsScaffold.models[0] });
  });

  it('should have a model property assigned', function() {
    expect(this.view.model).toBeDefined();
  });

  it('should render something', function() {
    this.view.render();
    // debugger;
    // console.log($('.albums').length)
    // expect($('#album_90').length).toEqual(1);
  });
});
