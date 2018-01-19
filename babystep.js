var args = process.argv;
var total = 0;
for(var i = 2; i<args.length; i++) {
  total += Number(process.argv[i]);
}
console.log(total);
