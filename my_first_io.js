var fs = require('fs'); // required the node module - fs filesystem.
var buffer = fs.readFileSync(process.argv[2]); // fetch the second command line argument
var content = buffer.toString(); // Convert the returned buffer into string
var newlines = content.split('\n') // split the string at the /n
console.log(newlines.length - 1);
