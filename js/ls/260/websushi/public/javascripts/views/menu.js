var MenuView = Backbone.View.extend({
  attributes: {
    id: 'items',
  },
  tagName: 'ul',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.collection.each(this.renderMenuItem, this);
    $('.content').html(this.$el);
  },
  renderMenuItem: function(sushi) {
    var menuItem = new MenuItemView({ model: sushi });
    this.$el.append(menuItem.el);
  },
});
