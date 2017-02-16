$(function() {
  var template = $('#post').html();

  var posts =
    {
      title: 'Lorem ipsum dolor sit amet',
      published: 'April 1, 2015',
      body: '<p>' + 'dolorem ipsum' + '</p>',
      tags: ['h@cKing', 'dinosaurs', 'favorite colors']
    };

  var templateScript = Handlebars.compile(template);
  Handlebars.registerPartial('tag', $('#tag').html());

  var newPosts = templateScript(posts);

  $('.articles').append(newPosts);
});

// {
//   title: 'Something not in Latin',
//   published: 'Day Before Tomorrow',
//   body: 'Testing testing',
// }
