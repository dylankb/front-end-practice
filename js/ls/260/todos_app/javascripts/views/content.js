var ContentView = BaseView.extend({
  el: '.content',
  events: {
    'click .new-todo': 'displayModal',
  },
  initialize: function() {
    this.renderContentTemplate();
    this.render();

    this.listenTo(App.EventBus, 'UPDATED_FILTER', this.render);
  },
  displayModal: function(e) {
    e.preventDefault();

    this.ModalView = new ModalView();
    this.$el.append(this.ModalView.el);
  },
  renderHeader: function() {
    if (!this.MainHeader) {
      this.MainHeader = new MainHeaderView({ collection: this.selectedTodos });
    } else {
      this.MainHeader.collection = this.selectedTodos;
    }

    this.assign(this.MainHeader, '.todos-header');
  },
  renderTodos: function() {
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
    this.renderHeader();
    this.renderTodos();
  },
  setSelectedTodos: function() {
    this.selectedTodos = App.monthFilter ? App.TodoMonths.get(App.monthFilter).Todos : App.Todos;
  },
});
