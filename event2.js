var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2) {
	console.log('listener1',arg1,arg1);
});
emitter.on('someEvent',function(arg1,arg2) {
	console.log('listener2',arg2,arg2);
});
//emitter.emit('someEvent','arg-one','arg-two');

var emitter2 = new events.EventEmitter();
emitter2.on('someEvent',function(arg1,arg2) {
	console.log('listener1',arg1,arg2);
});
emitter2.on('someEvent',function(arg1,arg2) {
	console.log('listener2',arg2,arg1);
});
emitter2.emit('someEvent','arg-one','arg-two');


console.log(emitter2.listenerCount('someEvent'));