/* eslint-disable func-names */
describe('Album view', function() {
  beforeEach(function() {
    this.view = new AlbumView({ model: albumsScaffold.models[0] });
  });

  it('should have a model property assigned', function() {
    expect(this.view.model).toBeDefined();
  });

  it('should render an element with the model\'s id', function() {
    var id = '9999999';
    expect(this.view.model.toJSON().id).toEqual(id);
    expect(this.view.el.id).toEqual('album_' + id);
    expect(this.view.$el.find('a.album-remove').data('id')).toEqual(Number(id));
  });
});
