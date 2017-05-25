var template = Handlebars.compile($('#users').html());

var UserModel = Backbone.Model.extend({
  url: "http://jsonplaceholder.typicode.com/users"
});

var Users = Backbone.Collection.extend({
  model: UserModel,
  url: "http://jsonplaceholder.typicode.com/users",
  initialize: function() {
    this.on('sync sort', renderTemplate);
  },
  parse: function(response) {
    response.forEach(function(user) {
      user.company_name = user.company.name;
      user.company_bs = user.company.bs;
      user.company_catchPhrase = user.company.catchPhrase;
      delete user.company;
    });
    return response;
  }
});

function renderTemplate() {
  $(document.body).html(template({ users: this.toJSON() }));
}

var usersList = new Users();

usersList.fetch({
  success: function() {
    usersList.add(me);
    me.save(null, {
      success: function(model) {
        // console.log(model.toJSON());
      }
    });
    // console.log(usersList.toJSON());
  }
});

var me = new UserModel({
  name: "Dylan",
  email: "dylan.barnard@gmail.com"
});

usersList.fetch({
  reset: true,
  success: function() {
    var firstUser = usersList.where({ id: 1 })[0];
    firstUser.set('name', 'Dylan');
    firstUser.set('email', 'dylan.barnard@gmail.com');


    usersList.comparator = 'name';
    usersList.sort();

    var emails = usersList.pluck('email');

    console.log(usersList.toJSON());
  }
});



// console.log(usersList.toJSON());

// var newestUser = usersList.create({ name: "George", email: "test@example.com" }, {
//   success: function(model) {
//     console.log(model.toJSON());
//   }
// });
