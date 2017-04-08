var fs = require("fs");
var zlib = require('zlib');

//decompress input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input.txt'));

console.log('finish');