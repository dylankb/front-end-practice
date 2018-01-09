var static = require('node-static');
var http = require('http');

var fileServer = new static.Server('./public'); // ./public will serve as "root" of site

http.createServer(function (request, response) {
  // When request ends
  request.addListener('end', function () {
    fileServer.serve(request, response, function (err, result) {
      console.log(request.url);
      if (err) { // There was an error serving the file
        console.error("Error serving " + request.url + " - " + err.message);
        // Respond to the client
        response.writeHead(err.status, err.headers);
        response.end();
      }
    });
  }).resume();
}).listen(3000);