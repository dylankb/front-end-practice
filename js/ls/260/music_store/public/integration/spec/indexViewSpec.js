/* eslint-disable func-names */
describe('Album view', function() {
  beforeEach(function() {
    this.view = new IndexView();
  });

  it('should render something', function() {
    this.view.render();
    expect(App.$el.length).toBeGreaterThan(0);
  });
});
