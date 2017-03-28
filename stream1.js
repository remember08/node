var fs = require("fs");
var data = '';

//create readable stream
var readerStream = fs.createReadStream('input.txt');

//setting encoder to utf8
readerStream.setEncoding('utf8');

//processing stream event
readerStream.on('data',function(data1) {
	data = data1;
});

readerStream.on('end',function() {
	console.log(data);
});

readerStream.on('error',function(err) {
	console.log(err.stack);
});

console.log('finish');