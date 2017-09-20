var SectionHeaderView = Backbone.View.extend({
  initialize: function(options) {
    this.sectionClass = options.sectionClass;
    this.sectionType = options.sectionType;
    this.todosCount = options.todosCount;

    this.render();
  },
  render: function() {
    this.$el.html(App.templates.sectionHeader({
      sectionType: this.sectionType,
      sectionClass: this.sectionClass,
      todosCount: this.todosCount,
    }));
  },
});
