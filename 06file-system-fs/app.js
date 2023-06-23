const fs = require('fs');

var fileName = "test2.txt"
var data = "i m yours";

fs.writeFile(fileName, data, function(err){
    if(err)
        console.log(err);
    else 
        console.log(`write success => ${data}`);
});