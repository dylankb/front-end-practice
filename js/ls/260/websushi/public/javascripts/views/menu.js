var MenuView = Backbone.View.extend({
  attributes: {
    id: 'items',
  },
  initialize: function() {
    this.collection.each(this.createMenuItem, this);
  },
  createMenuItem: function(sushi) {
    this.menuItems.push(new MenuItemView({ model: sushi }));
  },
  menuItems: [],
  render: function() {
    _.each(this.menuItems, this.renderMenuItem, this);
    $('.content').html(this.$el);
  },
  renderMenuItem: function(menuItem) {
    menuItem.delegateEvents();
    this.$el.append(menuItem.el);
  },
  tagName: 'ul',
});
