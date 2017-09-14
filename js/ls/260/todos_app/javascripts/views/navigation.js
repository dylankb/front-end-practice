var NavigationView = Backbone.View.extend({
  el: '.navigation',
  events: {
    'click .todo-month-container': this.renderCompletedTodosByMonth,
  },
  initialize: function() {
    this.TodoMonthsAllView = new TodoMonthsAllView({ collection: App.TodoMonths });
    this.render();
  },
  render: function() {
    this.$el.html(App.templates.navigation);
    this.TodoMonthsAllView.setElement(this.$('.all-todos-list')).render();
  },
  renderCompletedTodosByMonth: function() {
    this.trigger('DISPLAY_BY_MONTH');
  },
  template: App.templates.navigation,
});
