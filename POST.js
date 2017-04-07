var http = require('http');
var querystring = require('querystring');

var postHTML =
  '<html><head><meta charset="utf-8"><title>Node.js</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

 http.createServer(function (req, res) {
 	var body = "";
 	req.on('data',function (chunk) {
 		body += chunk;
  		console.log('%: ', req.url);
 		console.log(body);
 	});
 	req.on('end',function () {
 		body = querystring.parse(body);
 		console.log('#: ', req.url);
 		console.log(body);

 		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

 		if(body.name && body.url) {
 			res.write("website name: " + body.name);
 			res.write("<br>");
 			res.write("URL: " + body.url);
 		} else {
 			res.write(postHTML);
 		}
 		res.end();
 	});
 }).listen(8889);