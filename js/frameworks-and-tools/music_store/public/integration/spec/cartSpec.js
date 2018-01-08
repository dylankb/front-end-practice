/* eslint-disable func-names */
describe('Cart collection', function() {
  beforeEach(function() {
    this.cart = new CartItems();
    this.cart.reset();
  });

  it('can add an item', function(done) {
    var modelId = albumsScaffold.models[0].attributes.id;
    this.cart.addItem(albumsScaffold.models[0]);
    expect(this.cart.get(modelId).get('id')).toEqual(modelId);
    done();
  });

  it('can sum the quantity of items', function(done) {
    this.cart.addItem(albumsScaffold.models[0]);
    this.cart.addItem(albumsScaffold.models[1]);
    expect(this.cart.getQuantity()).toEqual(2);
    done();
  });

  it('can sum the total price of items', function(done) {
    this.cart.addItem(albumsScaffold.models[0]);
    this.cart.addItem(albumsScaffold.models[1]);
    var price1 = this.cart.models[0].attributes.price;
    var price2 = this.cart.models[1].attributes.price;

    expect(this.cart.getTotal()).toEqual(price1 + price2);
    done();
  });
});
