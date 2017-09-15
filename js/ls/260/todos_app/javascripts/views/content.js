var ContentView = Backbone.View.extend({
  el: '.content',
  events: {
    'click .new-todo': 'displayModal',
  },
  initialize: function() {
    this.render();
    this.MainTodosView = new MainTodosView({ collection: App.Todos, el: '.todos-main' });
  },
  displayModal: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var $modalContent = this.$('.modal-content');
    var id = App.getTodoId(e, 'tr');

    this.$('.modal').removeClass('hide');
    $modalContent.removeClass('hide');

    if (id) {
      $modalContent.html(App.templates.todoForm(App.Todos.get(id).toJSON()));
    } else {
      $modalContent.html(App.templates.todoForm());
    }
  },
  render: function() {
    this.$el.html(App.templates.content);
  },
});
