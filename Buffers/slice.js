var buffer1 = new Buffer("bufferrer");

// Slicing a buffer
var buffer2 = buffer1.slice(0, 6);
console.log("buffer2 content: " + buffer2.toString());