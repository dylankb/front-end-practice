var AppView = Backbone.View.extend({
  el: 'body',
  template: Handlebars.templates.app,
  newPersonTemplate: Handlebars.templates.newPerson,
  events: {
    'click #add-person': 'addPersonForm',
    'click .btn-cancel': 'removePersonForm',
    'click .btn-add': 'addPerson',
  },
  render: function() {
    this.$el.html(this.template());
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

    App.trigger('ADD_PERSON', person);
    this.removePersonForm();
  },
  addPersonForm: function(e) {
    e.preventDefault();

    this.$el.append(this.newPersonTemplate());
  },
  removePersonForm: function(e) {
    this.$el.find('.overlay').remove();
  }
});
