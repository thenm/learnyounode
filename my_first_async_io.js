var fs = require('fs');
fs.readFile(process.argv[2], (err, buffer) => {
  if(err)  console.log('Error', err);
  var content = buffer.toString(); // Convert the returned buffer into string
  var newlines = content.split('\n') // split the string at the /n
  console.log(newlines.length - 1);
});
