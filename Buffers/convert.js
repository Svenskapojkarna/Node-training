var buf = new Buffer("This is a JSON convert example");
var json = buf.toJSON(buf);

console.log(json);