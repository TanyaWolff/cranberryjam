var static = require('node-static'),
	http=require('http'),
	util=require('util');
var file = new(static.Server)('./public', { cache: false });
http.createServer(function (request, response) {
  request.addListener('end', function() {
    file.serve(request, response, function(err, result) {
      if (err) {
        	console.error('Error serving %s - %s', request.url, err.message);
		if (err.status == 404 || err.status == 500) {
		  errFile=util.format('/errors/%d.html', err.status)
		  file.serveFile(errFile, err.status, {}, request, response);
		} else {
		  response.writeHead(err.status, err.headers);
 		  response.write('Error: '+err.status+' '+err.message);
		  response.end();
		}
      } else {
        console.log('%s - %s', request.url, response.statusCode); 
      }

   });
 }).resume();
}).listen(3002);
