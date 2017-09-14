var TodoMonthsAllView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderNewTodoMonth);
  },
  render: function() {
    this.collection.each(this.renderNewTodoMonth, this);
  },
  renderNewTodoMonth: function(month) {
    var todoMonth = new TodoMonthView({ model: month });
    this.$el.append(todoMonth.el);
  },
});
