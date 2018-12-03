var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile("input.txt", "I just wrote this!", function (err) {
    if (err) {
        return console.error(err)
    }
    console.log("Data written succesfully");
    console.log("Let's read the newly written data");
    fs.readFile("input.txt", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    })
});