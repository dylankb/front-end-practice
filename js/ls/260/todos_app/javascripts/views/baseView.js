var BaseView = Backbone.View.extend({
  assign: function(view, element) {
    view.setElement(this.$(element)).render();
  },
});
