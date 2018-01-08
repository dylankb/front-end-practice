var UserModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/users'
});

var PostModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts',
  initialize: function() {
    this.has('userId') && this.setUser();
    this.on('change:userId', this.setUser);
    this.on('change', function(model) {
      model.has('user') && renderPost(this);
    });
  },
  setUser: function() {
    var self = this;
    var user = new UserModel({ id: this.get('userId') });
    user.fetch({
      success: function(model) {
        self.set('user', model);
      }
    });
  }
});

var firstPost = new PostModel({id: 1});

var secondPost = new PostModel({
  id: 2,
  title: "Second Post",
  body: "The body of Second Post",
  userId: 2
});

var postHtml = $('#post').html();

function renderPost(model) {
  var $postHtml = $(postHtml);
  $postHtml.find('h1').text(model.get('title'));
  $postHtml.find('header p').text(model.get('user').get('name'));
  $postHtml.find('header + p').text(model.get('body'));
  $('body').html($postHtml);
}
