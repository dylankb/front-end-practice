var MenuItemDetail = Backbone.View.extend({
  initialize: function() {
    this.getNutritionData();
  },
  attributes: {
    id: 'item_details',
  },
  getNutritionData: function() {
    var itemId = this.model.attributes.id
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
    $('.content').prepend(this.$el);
  },
  template: Handlebars.templates.menuItemDetail,
});
