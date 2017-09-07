var CheckoutTotal = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'change remove', this.render);
  },
  render: function() {
    this.$el.html(this.template({ total: this.collection.total }));
  },
  template: Handlebars.templates.checkoutTotal,
});
