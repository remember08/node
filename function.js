function execute(someFunction) {
	let str = 'sg'
	someFunction(str);
}

execute(function(word){console.log(word)});