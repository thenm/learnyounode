var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], (err, files) => {
  if(err) return console.log(err);
  // console.log(files);
  files.forEach((fileName) => {
    // console.log(fileName);
    // console.log(process.argv[3]);
    // console.log(path.extname(fileName));
    if(path.extname(fileName) === "." + process.argv[3] ) {
      console.log(fileName);
    }
  })
});
