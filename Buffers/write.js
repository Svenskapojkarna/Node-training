buf = new Buffer(256);

len = buf.write("This is a buffer example");

console.log("Octets written: " + len);