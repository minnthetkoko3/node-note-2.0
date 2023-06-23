let fs = require('fs');

let data = fs.readFileSync('loerm.txt', 'utf-8');
console.log("data");

fs.writeFileSync('test.txt', data);

fs.appendFileSync('test.txt', "two");