var NavigationView = BaseView.extend({
  el: '.navigation',
  events: {
    'click .all-todos .heading': 'renderAllTodos',
    'click .completed-todos .heading': 'renderAllCompletedTodos',
    'click .all-todos-list .todo-month-container': 'renderTodosByMonth',
    'click .completed-todos-list .todo-month-container': 'renderCompletedTodosByMonth',
  },
  initialize: function() {
    this.TodoMonthsAllView = new TodoMonthsAllView({
      collection: App.TodoMonths,
    });

    this.TodoMonthsCompletedView = new TodoMonthsCompletedView({
      collection: App.TodoMonths,
    });

    this.listenTo(App.Todos, 'update', this.renderAllSectionHeader);
    this.listenTo(App.Todos, 'update change:completed', this.renderCompletedSectionHeader);

    this.render();
  },
  renderAllTodos: function(e) {
    e.preventDefault();

    App.timeFilter = '';
    App.completedFilter = '';
    App.saveFilterSettings();

    App.EventBus.trigger('UPDATED_FILTER');
    this.render();
  },
  renderAllCompletedTodos: function(e) {
    e.preventDefault();
    App.completedFilter = 'true';
    App.timeFilter = '';
    App.saveFilterSettings();

    App.EventBus.trigger('UPDATED_FILTER');
    this.render();
  },
  renderTodosByMonth: function(e) {
    var selectedMonth = App.getSelectedMonth(e);
    e.preventDefault();

    App.completedFilter = '';
    App.timeFilter = selectedMonth.attributes.dateKey;
    App.saveFilterSettings();

    App.EventBus.trigger('UPDATED_FILTER');
    this.render();
  },
  renderCompletedTodosByMonth: function(e) {
    var selectedMonth = App.getSelectedMonth(e);
    e.preventDefault();

    App.completedFilter = 'true';
    App.timeFilter = selectedMonth.attributes.dateKey;
    App.saveFilterSettings();

    App.EventBus.trigger('UPDATED_FILTER');
    this.render();
  },
  renderSectionHeaders: function() {
    this.renderCompletedSectionHeader();
    this.renderAllSectionHeader();
  },
  render: function() {
    this.$el.html(App.templates.navigation);

    this.assign(this.TodoMonthsAllView, '.all-todos-list');
    this.assign(this.TodoMonthsCompletedView, '.completed-todos-list');

    this.renderSectionHeaders();
  },
  renderCompletedSectionHeader: function() {
    this.SectionHeaderCompletedView = new SectionHeaderView({
      sectionType: 'Completed',
      todosCount: App.Todos.completed().length,
      el: '.completed header',
      sectionClass: 'completed-todos',
    });
  },
  renderAllSectionHeader: function() {
    this.SectionHeaderAllView = new SectionHeaderView({
      sectionType: 'All Todos',
      todosCount: App.Todos.models.length,
      el: '.all header',
      sectionClass: 'all-todos',
    });
  },
  template: App.templates.navigation,
});
