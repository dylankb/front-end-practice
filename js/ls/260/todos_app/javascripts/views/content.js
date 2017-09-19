var ContentView = BaseView.extend({
  el: '.content',
  events: {
    'click .new-todo': 'displayTodoModal',
    'click .todo-title': 'displayEditTodoModal',
  },
  initialize: function() {
    this.renderContentTemplate();
    this.render();

    this.listenTo(App.EventBus, 'UPDATED_FILTER', this.render);
  },
  displayTodoModal: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();

    this.TodoModalView = new TodoModalView();
    this.$el.append(this.TodoModalView.el);
  },
  renderTodosHeader: function() {
    if (!this.TodosHeader) {
      this.TodosHeader = new TodosHeaderView({ collection: this.selectedTodos });
    } else {
      this.TodosHeader.collection = this.selectedTodos;
    }

    this.assign(this.TodosHeader, '.todos-header');
  },
  renderTodosContent: function() {
    if (!this.MainTodos) {
      this.MainTodos = new MainTodosView({ collection: this.selectedTodos });
    } else {
      this.MainTodos.collection = this.selectedTodos;
    }

    this.assign(this.MainTodos, '.todos-main');
  },
  renderContentTemplate: function() {
    this.$el.html(App.templates.content);
  },
  render: function() {
    this.setSelectedTodos();
    this.renderTodosHeader();
    this.renderTodosContent();
  },
  setSelectedTodos: function() {
    this.selectedTodos = App.timeFilter ? App.TodoMonths.get(App.timeFilter).Todos : App.Todos;
  },
});
