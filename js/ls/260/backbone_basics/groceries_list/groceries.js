var App = {
  init: function() {
    this.createTemplates();
    this.Items = new ItemsCollection(items_json);
    this.Items.comparator = 'name';
    this.Items.sort();
    this.bindEvents();
  },
  addItem: function(e) {
    e.preventDefault();

    var $form = $(e.target).closest('form');
    var itemData = {
      "name": $form.find('input[name=name]').val(),
      "quantity": $form.find('input[name=quantity]').val(),
    };

    this.Items.add(itemData);
  },
  bindEvents: function() {
    $('form').on('submit', this.addItem.bind(this));
    $('tbody').on('click', 'a', this.deleteItem.bind(this));
    $('p a').on('click', this.deleteAll.bind(this));
    $('thead th').on('click', this.sortSelect.bind(this));
  },
  createTemplates: function() {
    Handlebars.registerPartial('item', $('#item').html());
    this.templates.items = Handlebars.compile($('#items').html());
    this.templates.item = Handlebars.compile($('#item').html());
  },
  deleteAll: function(e) {
    this.Items.reset();
  },
  deleteItem: function(e) {
    e.preventDefault();

    var target = e.target
    var id = Number(target.dataset.id);
    var item = this.Items.findWhere({ id: id });

    this.Items.remove(item);
    $(target).closest('tr').remove();
  },
  templates: {},
  sortSelect: function(e) {
    e.preventDefault();
    var prop = e.target.dataset.prop;

    this.Items.comparator = prop;
    this.Items.sort();
  },
};

var ItemModel = Backbone.Model.extend({
  initialize: function() {
    this.setID();
    this.renderItem();
  },
  setID: function() {
    this.set('id', ++this.collection.lastID);
  },
  renderItem: function() {
    $('tbody').append(App.templates.item(this.toJSON()));
  }
});

var ItemsCollection = Backbone.Collection.extend({
  initialize: function() {
    this.on('sort reset', this.render);
  },
  model: ItemModel,
  lastID: 0,
  render: function() {
    $('tbody').html(App.templates.items({ items: this.models }));
  },
});

App.init();
