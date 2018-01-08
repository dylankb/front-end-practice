// 1) Write JavaScript code that makes a GET request to this URL: https://api.github.com/repos/rails/rails.

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.send();
