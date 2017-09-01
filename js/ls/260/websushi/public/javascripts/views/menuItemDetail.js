var MenuItemDetail = Backbone.View.extend({
  initialize: function() {
    this.renderNutritionalData(this.model.attributes.id);
    this.lastItemId = App.SushiCollection.findLastId();
  },
  attributes: {
    id: 'item_details',
  },
  events: {
    'click .next': 'loadNextItem',
    'click .prev': 'loadPreviousItem',
  },
  lastItemId: null,
  loadNextItem: function() {
    var itemId = this.model.attributes.id;
    var nextItemId = itemId < this.lastItemId ? itemId + 1 : 1;

    App.Router.navigate('menu/' + nextItemId, { trigger: true });
  },
  loadPreviousItem: function() {
    var itemId = this.model.attributes.id;
    var nextItemId = itemId === 1 ? this.lastItemId : itemId - 1;

    App.Router.navigate('menu/' + nextItemId, { trigger: true });
  },
  renderNutritionalData: function(itemId) {
    var request = $.ajax({
      url: '/nutrition',
      data: 'id=' + itemId,
    });

    request.done(function successCallback(data) {
      this.render(data);
    }.bind(this));

    request.fail(function failureCallback(jqXHR, textStatus) {
      console.log('Text status', textStatus);
    });
  },
  render: function(data) {
    var itemClone = this.model.clone();
    this.$el.html(this.template(itemClone.set(data).toJSON()));
    $('.content').html(this.$el);
  },
  template: Handlebars.templates.menuItemDetail,
});
