var MainTodosView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'update sort change:title change:dueDate', this.render);
    this.listenTo(this.collection, 'change:completed', this.collection.sort.bind(this.collection));
  },
  events: {
    'click .todo-title': 'displayEditModal',
    'click .todo-item-container': 'processToggleState',
    'click .trash-icon': 'processDeleteTodo',
  },
  displayEditModal: function(e) {
    var id = this.getTodoId(e);
    e.preventDefault();
    e.stopPropagation();

    this.ModalView = new ModalView({ model: this.collection.get(id) });
    this.$el.append(this.ModalView.el);
  },
  getTodoId: function(e) {
    return $(e.currentTarget).closest('tr').data('todo-id');
  },
  processDeleteTodo: function(e) {
    e.preventDefault();
    App.Todos.get(this.getTodoId(e)).trigger('REMOVE_TODO');
  },
  processToggleState: function(e) {
    e.preventDefault();
    App.Todos.get(this.getTodoId(e)).trigger('TOGGLE_TODO_STATE');
  },
  render: function() {
    var todos = App.completedFilter ? this.collection.completed() : this.collection.toJSON();
    this.$el.html(App.templates.todoItems({ todoItems: todos }));
  },
});
