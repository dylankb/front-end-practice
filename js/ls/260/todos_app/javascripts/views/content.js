var ContentView = Backbone.View.extend({
  el: '.content',
  events: {
    'click .new-todo': 'displayTodoModal',
    'click .todo-title': 'displayEditTodoModal',
  },
  initialize: function() {
    this.render();
    this.listenTo(App.EventBus, 'UPDATED_FILTER', this.updateMainContent);
  },
  displayTodoModal: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();

    this.TodoModalView = new TodoModalView();
    this.$el.append(this.TodoModalView.el);
  },
  updateMainContent: function() {
    var todos = App.timeFilter ? App.TodoMonths.get(App.timeFilter).Todos : App.Todos;

    this.TodosHeader = new TodosHeaderView({ collection: todos });
    this.MainTodosView = new MainTodosView({ collection: todos });
  },
  render: function() {
    this.$el.html(App.templates.content);
    this.updateMainContent();
  },
});
