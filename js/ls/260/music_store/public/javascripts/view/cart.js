var CartView = Backbone.View.extend({
  template: App.templates.cart,
  render: function() {
    this.$el.html(this.template({
      quantity: 1,
      items: [],
      total: 32
    }));
    $(document.body).find('header').html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
