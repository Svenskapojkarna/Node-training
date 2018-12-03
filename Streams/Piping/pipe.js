var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream("input.txt");

// Create a writeable stream
var writerStream = fs.createWriteStream("output.txt");

// Pipe the read and write operations
// Read input.txt and write to output.txt
readerStream.pipe(writerStream);

console.log("Program ended");