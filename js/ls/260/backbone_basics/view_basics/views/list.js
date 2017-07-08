var ListView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderItem);
  },
  el: '#favorites',
  render: function() {
    this.collection.each(this.renderItem.bind(this));
  },
  renderItem: function(model) {
    var listItemView = new ListItemView({ model: model });
    this.$el.append(listItemView.render());
  },
  addPerson: function(e) {
    e.preventDefault();
    var $form = $(e.target).closest('form');
    var person = {
      name: $form.find('.name').val(),
      colors: [ $form.find('.color1').val(),
                $form.find('.color2').val(),
                $form.find('.color3').val(), ],
    };

    App.list.add(person);
  },
  events: {
    'click .btn-add': 'addPerson',
  },
});
