// var testApp = testApp || undefined;
var App = {
  bindEvents: function() {
    _.extend(this, Backbone.Events); // Gain access to event publishers/subscribers
    this.listenTo(this.IndexView, 'SHOW_NEW_ALBUM', this.renderNewAlbum); // Alternative is to include renderNewAlbum in route.js
    this.on('ADD_TO_CART', this.Cart.addItem.bind(this.Cart));
    this.on('DELETE_FROM_CART', this.Cart.deleteItem.bind(this.Cart));
  },
  createCart: function() {
    this.Cart = new CartItems();
    this.Cart.view = new CartView({
      collection: this.Cart,
    });
  },
  renderAlbums: function() {
    this.AlbumsView = new AlbumsView({ collection: this.albums });
    this.AlbumsView.$el.insertAfter(this.$el.find('.page-title'));
  },
  renderStaticElements: function() {
    this.IndexView = new IndexView();
  },
  templates: JST,
  $el: $('main'),
  renderIndexView: function() {
    this.renderStaticElements();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },
};

Handlebars.registerHelper('format_price', function formatPriceDigits(price) {
  return Number(price).toFixed(2);
});

Handlebars.registerPartial('form', App.templates.form);
