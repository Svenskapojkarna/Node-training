var buffer1 = new Buffer("This is first, ");
var buffer2 = new Buffer("this is second");
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 content: " + buffer3.toString());