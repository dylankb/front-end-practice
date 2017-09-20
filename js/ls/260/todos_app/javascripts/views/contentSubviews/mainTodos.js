var MainTodosView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'update sort change:title change:dueDate', this.render);
    this.listenTo(this.collection, 'change:completed', this.sortByCompleted);
  },
  events: {
    'click .todo-title': 'displayEditModal',
    'click .todo-item-container': 'processToggleState',
    'click .trash-icon': 'processDeleteTodo',
  },
  displayEditModal: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();
    e.stopPropagation();

    this.ModalView = new ModalView({ model: this.collection.get(id) });
    this.$el.append(this.ModalView.el);
  },
  processDeleteTodo: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();

    App.Todos.trigger('REMOVE_TODO', id);
    App.saveToLocalStore();
  },
  processToggleState: function(e) {
    var id = App.getTodoId(e, 'tr');
    e.preventDefault();

    App.Todos.trigger('TOGGLE_TODO_STATE', id);
    App.saveToLocalStore();
  },
  sortByCompleted: function() {
    this.collection.sort();
    this.render();
  },
  render: function() {
    var todos = App.completedFilter ? this.collection.completed() : this.collection.toJSON();
    this.$el.html(App.templates.todoItems({ todoItems: todos }));
  },
});
