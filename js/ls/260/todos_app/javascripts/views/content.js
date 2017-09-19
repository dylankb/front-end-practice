var ContentView = Backbone.View.extend({
  el: '.content',
  events: {
    'click .new-todo': 'displayTodoModal',
    'click .todo-title': 'displayEditTodoModal',
  },
  initialize: function() {
    this.renderContentTemplate();

    var todos = App.timeFilter ? App.TodoMonths.get(App.timeFilter).Todos : App.Todos;
    this.TodosHeader = new TodosHeaderView({ collection: todos });
    this.MainTodos = new MainTodosView({ collection: todos });

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
    var todos = App.timeFilter ? App.TodoMonths.get(App.timeFilter).Todos : App.Todos;

    this.TodosHeader.collection = todos;
    this.TodosHeader.setElement(this.$('.todos-header')).render();
  },
  renderTodosContent: function() {
    var todos = App.timeFilter ? App.TodoMonths.get(App.timeFilter).Todos : App.Todos;

    this.MainTodos.collection = todos;
    this.MainTodos.setElement(this.$('.todos-main')).render();
  },
  renderContentTemplate: function() {
    this.$el.html(App.templates.content);
  },
  render: function() {
    this.renderTodosHeader();
    this.renderTodosContent();
  },
});
