var NavigationView = Backbone.View.extend({
  el: '.navigation',
  events: {
    'click .todo-month-container': this.renderCompletedTodosByMonth,
  },
  initialize: function() {
    this.TodoMonthsAllView = new TodoMonthsAllView({
      collection: App.TodoMonths,
    });

    this.TodoMonthsCompletedView = new TodoMonthsCompletedView({
      collection: App.TodoMonths,
    });

    this.render();
  },
  render: function() {
    this.$el.html(App.templates.navigation);
    this.TodoMonthsAllView.setElement(this.$('.all-todos-list')).render();
    this.TodoMonthsCompletedView.setElement(this.$('.completed-todos-list')).render();
  },
  template: App.templates.navigation,
});
