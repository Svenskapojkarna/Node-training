var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened succesfully");
    console.log("Going to truncate the file after 10 bytes");

    // Truncate the opened file
    fs.ftruncate(fd, )
});