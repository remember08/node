var events = require('events');
var eventEmitter = new events.EventEmitter();

//listener #1
function listener1() {
	console.log('listener1 processing');
}

//listener #2
function listener2() {
	console.log('listener2 processing');
}

function error(){
	console.log('!!error!!');
}

//
eventEmitter.on('connection',listener1);

//
eventEmitter.on('connection',listener2);

eventEmitter.on('error',error);

var eventListeners=
require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + ' listeners are listening');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log('listener1 will not work');

eventEmitter.emit('connection');

var eventListeners=
require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + ' listeners are listening');

eventEmitter.emit('error');
console.log('finish');