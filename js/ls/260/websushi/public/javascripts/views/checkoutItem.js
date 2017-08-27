var CheckoutItemView = Backbone.View.extend({
  attributes: function() {
    return {
      'data-id': this.model.attributes.id,
    };
  },
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  tagName: 'tr',
  template: Handlebars.templates.checkoutItem,
});
