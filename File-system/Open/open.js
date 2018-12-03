var fs = require("fs");

// Asynchronous open - Opening file
console.log("Opening a file!");
fs.open("input.txt", "r+", function (err, data) {
    if (err) {
        return console.error(err)
    }
    console.log("File opened succesfully!");
});