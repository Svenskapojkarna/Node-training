var fs = require("fs");
var zlib = require("zlib");

// Decompress the input.txt.gz to input2.txt
fs.createReadStream("input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream("input2.txt"));

console.log("Program ended");