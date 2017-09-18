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
    debugger;
    var todos = App.timeFilter ? App.TodoMonths.get(App.timeFilter).Todos : App.Todos;

    this.updateMainHeader(todos);
    this.renderMainTodos(todos);
  },
  updateMainHeader: function() {
    // var currentSelection = App.completedFilter ? 'Completed' : 'All Todos';
    // if (App.timeFilter) { currentSelection = App.timeFilter; }

    this.todosHeader = new TodosHeaderView({
      collection: this.selectedTodos,
    });

    // var todosData = App.completedFilter ? todos.completed() : todos.toJSON();
    //
    // App.updateMainTodosCount(todosData.length);
    // App.updateMainTodosHeading(currentSelection);
  },
  renderMainTodos: function(todos) {
    this.MainTodosView = new MainTodosView({ collection: todos });
  },
  render: function() {
    this.$el.html(App.templates.content);
    this.updateMainContent();
  },
});
