var counterCreator = function() {
  var id = 0;

  return function determineId(lastId) {
    lastId ? id = lastId : id += 1;
    return id;
  };
};

var generateNextId = counterCreator();

var App = {
  init: function() {
    this.cacheTemplates();
    this.createHelpers();

    this.TodoMonths = new TodoMonthsCollection();
    this.Todos = new TodosCollection();
    this.processLocalStorage();
    this.Navigation = new NavigationView();
    this.Content = new ContentView();

    this.bindEvents();
    this.initialRender();
  },
  initialRender: function() {
    window.localStorage.setItem('filterMonth', '');
  },
  bindEvents: function() {
    $('.all-todos-list').on('click', '.todo-month-container', this.renderTodosByMonth.bind(this));
    $('.all-todos-heading').on('click', this.renderAllTodos.bind(this));
    $('.completed-todos-heading').on('click', this.renderAllCompletedTodos.bind(this));
    $('.navigation').on('click', '.all-todos, .completed-todos, .todo-month-container', this.processTodoGroupClick.bind(this));
  },
  cacheTemplates: function() {
    $("script[type='text/x-handlebars']").each(function() {
      var $template = $(this);
      App.templates[$template.attr('id')] = Handlebars.compile($template.html());
    });

    $("script[data-type='partial']").each(function() {
      var $partial = $(this);
      Handlebars.registerPartial($partial.attr('id'), $partial.html());
    });
  },
  createHelpers: function() {
    Handlebars.registerHelper('formatDateMonthYear', function(dateKey) {
      var dateObj = new Date(dateKey + 'T08:00:00');

      if (isNaN(dateObj.getTime())) { return dateKey; }

      var year = String(dateObj.getFullYear()).slice(2, 4);
      var month = dateObj.getMonth() + 1;

      return month + '/' + year;
    });

    Handlebars.registerHelper('todosCompletedByMonth', function(dateKey) {
      return App.TodoMonths.get(dateKey).completed().length;
    });

    Handlebars.registerHelper('selectedGroupAll', function(todoGroup) {
      var filterMonth = window.localStorage.getItem('filterMonth');
      var filterMonthType = window.localStorage.getItem('filterMonthType');
      if (todoGroup.dateKey === filterMonth && filterMonthType === 'all') {
        return true;
      }
      return false;
    });

    Handlebars.registerHelper('selectedGroupCompleted', function(todoGroup) {
      var filterMonth = window.localStorage.getItem('filterMonth');
      var filterMonthType = window.localStorage.getItem('filterMonthType');
      if (todoGroup.dateKey === filterMonth && filterMonthType === 'completed') {
        return true;
      }
      return false;
    });
  },
  formatInputs: function(formData) {
    var data = formData.reduce(function(acc, input) {
      acc[input.name] = input.value;
      return acc;
    }, {});

    if ((data.year && data.month && data.day)) {
      data.dueDate = data.year + '-' + data.month + '-' + data.day;
    } else {
      data.dueDate = 'No Due Date';
    }

    return data;
  },
  getSelectedMonth: function(e) {
    var dateKey = $(e.currentTarget).data('date-key');
    return this.TodoMonths.get(dateKey);
  },
  getTodoId: function(e, selector) {
    return $(e.currentTarget).closest(selector).data('todo-id');
  },
  processLocalStorage: function() {
    this.Todos.loadList();
  },
  styleActiveGroup: function(element) {
    $('.todo-month-container, .all-todos, .completed-todos').removeClass('active-todo-group');
    $(element).addClass('active-todo-group');
  },
  renderAllTodos: function(e) {
    e.preventDefault();
    window.localStorage.setItem('filterMonth', '');

    this.updateMainTodosHeading('All todos');
    this.updateMainTodosCount(Todos.getTodos().length)
  },
  renderAllCompletedTodos: function(e) {
    e.preventDefault();
    window.localStorage.setItem('filterMonth', '');
    window.localStorage.setItem('filterMonthType', 'completed');

    this.updateMainTodosHeading('Completed');
    this.updateMainTodosCount(this.Todos.completed().length);
  },
  renderCompletedTodosByMonth: function(e) {
    e.preventDefault();

    var selectedMonth = this.getSelectedMonth(e);
    window.localStorage.setItem('filterMonthType', 'completed');
    window.localStorage.setItem('filterMonth', selectedMonth.dateKey);

    this.updateMainTodosHeading(selectedMonth.getDateKey());
    this.updateMainTodosCount(selectedMonth.completed().length);
  },
  renderTodosByMonth: function(e) {
    e.preventDefault();

    var selectedMonth = this.getSelectedMonth(e);
    window.localStorage.setItem('filterMonthType', 'all');
    window.localStorage.setItem('filterMonth', selectedMonth.dateKey);

    this.renderMainTodos(selectedMonth);
    this.updateMainTodosHeading(selectedMonth.getDateKey());
    this.updateMainTodosCount(selectedMonth.getTodos().length);
  },
  saveToLocalStore: function() {
    this.Todos.saveToLocalStore();
    this.TodoMonths.saveToLocalStore();
  },
  templates: {},
  processTodoGroupClick: function(e) {
    e.preventDefault();
    this.styleActiveGroup(e.currentTarget);
  },
  updateMainTodosHeading: function(headingText) {
    $('.tasks h1').text(headingText);
  },
  updateMainTodosCount: function(todosCount) {
    $('.tasks .todos-count').text(todosCount);
  },
  updatePageContents: function(todosGroup) {
    this.updateMainTodosCount(todosGroup.models.length);
  },
};

$(function() {
  App.init(); // Could also include this in a script tag at the bottom of the body element
});
