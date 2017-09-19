var TodoModalView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    'click .buttons input': 'processFormSubmissions',
    'click .modal': 'remove',
  },
  processFormSubmissions: function(e) {
    e.preventDefault();
    var $form = $(e.currentTarget).closest('form');
    var id = $form.data('todo-id');
    var buttonType = $(e.currentTarget).attr('class');

    if (buttonType === 'mark-complete' && !id) {
      alert('Create a todo before marking complete');
      return;
    }

    var todoInfo = App.formatInputs(($form).serializeArray());

    if (buttonType === 'create-todo') {
      App.Todos.trigger('PROCESS_TODO_INFO', { todoId: id, data: todoInfo, markComplete: false });
    } else if (buttonType === 'mark-complete') {
      todoInfo.completed = true;
      App.Todos.trigger('PROCESS_TODO_INFO', { todoId: id, data: todoInfo, markComplete: true });
    }

    App.saveToLocalStore();
    this.remove();
  },
  render: function() {
    var formData = this.model ? this.model.toJSON() : {};
    this.$el.html(App.templates.todoModal(formData));
  },
});
