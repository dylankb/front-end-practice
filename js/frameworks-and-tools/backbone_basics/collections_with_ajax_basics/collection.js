var PostModel = Backbone.Model.extend({});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts",
});

var blog_roll = new Posts();

// users.js
var users_data = [{
  id: 1,
  name: "Leanne Graham"
}, {
  id: 2,
  name: "Ervin Howell"
}, {
  id: 3,
  name: "Clementine Bauch"
}];

var User = Backbone.Model.extend({}),
    Users = Backbone.Collection.extend({
      model: User
    }),
    blog_authors;

blog_authors = new Users();
blog_authors.reset(users_data);

console.log('authors', blog_authors.models);

blog_roll.fetch({
  reset: true,
  success: function(collection) {
    console.log('fetch posts', collection.toJSON());
    var first_post = blog_roll.get(1);

    blog_roll.set({ // wipes out previous 100 models since they weren't passed in
      id: 1,
      userId: 1,
      title: "My First Post",
      body: "This is my first blog post! Yay!"
    });

    console.log('first post', first_post.toJSON());
  }
});
