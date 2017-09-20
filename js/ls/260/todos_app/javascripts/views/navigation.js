var NavigationView = BaseView.extend({
  el: '.navigation',
  events: {
    'click .all-todos .heading': 'renderAllTodos',
    'click .completed-todos .heading': 'renderAllCompletedTodos',
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
    this.listenTo(App.EventBus, 'UPDATED_FILTER', this.render);

    this.render();

    this.template = App.templates.navigation;
  },
  renderAllTodos: function(e) {
    e.preventDefault();

    App.monthFilter = '';
    App.completedFilter = '';

    App.EventBus.trigger('UPDATED_FILTER');
  },
  renderAllCompletedTodos: function(e) {
    e.preventDefault();
    App.completedFilter = 'true';
    App.monthFilter = '';

    App.EventBus.trigger('UPDATED_FILTER');
  },
  render: function() {
    // this.$el.html(App.templates.navigation);
    this.$el.html(this.template);

    this.assign(this.TodoMonthsAllView, '.all-todos-list');
    this.assign(this.TodoMonthsCompletedView, '.completed-todos-list');

    this.renderCompletedSectionHeader();
    this.renderAllSectionHeader();
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
