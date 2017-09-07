var App = {
  init: function() {
    _.extend(this, Backbone.Events);
    this.Cart = new CartCollection();

    this.on('ADD_TO_CART', this.Cart.addItem.bind(this.Cart));
    this.on('EMPTY_CART', this.Cart.emptyCart.bind(this.Cart));

    this.$content = $('#content');
    this.$cart = $('#cart');
    this.setupInitialViews();
    this.setupRouter();
  },
  setupRouter: function setupRouter() {
    this.Router = new Router();

    Backbone.history.start({
      pushState: true,
    });

    document.addEventListener('click', function findSiteLinkPath(e) {
      var siteLink = e.target.getAttribute('href');

      if (siteLink && siteLink.match(/^\//)) {
        e.preventDefault();
        App.Router.navigate(siteLink, { trigger: true });
      }
    });

    document.addEventListener('submit', function findSiteLinkPath(e) {
      var sitePath = e.target.getAttribute('action');

      if (sitePath && sitePath.match(/^\//)) {
        e.preventDefault();
        App.Router.navigate(sitePath, { trigger: true });
      }
    });
  },

  setupInitialViews: function() {
    App.MenuView = new MenuView({ collection: App.SushiCollection });
    App.HeaderView = new HeaderView({ collection: App.Cart });
  },
};

Handlebars.registerHelper('formatPrice', function formatPrice(number) {
  return Number(number).toFixed(2);
});

Handlebars.registerHelper('fromKiloJoulesToKiloCals', function fromKiloJoulesToKiloCals(kiloJoules) {
  return (Number(kiloJoules) / 4.184).toFixed(4);
});
