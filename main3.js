var fs = require("fs");
var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('connect success');

	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function() {
	console.log('data receive success');
});


fs.readFile('input.txt',function (err,data) {
	if (err) return console.error(err);
	console.log(data.toString());
	eventEmitter.emit('connection');
});


eventEmitter.emit('connection');

console.log('finish');