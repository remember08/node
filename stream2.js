var fs = require("fs");
var data = 'github.com/remember08';

//create a write stream into output.txt
var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'utf8');

//mark the end of the file
writerStream.end();

//handle stream event
writerStream.on('finish',function() {
	console.log('wrote');
});

writerStream.on('error',function(err2) {
	console.log(err2.stack);
});

console.log('finish');