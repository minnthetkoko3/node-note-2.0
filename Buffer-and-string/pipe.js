let fs = require("fs");

let myReadStr = fs.createReadStream("test.txt", "utf-8");
let myWirteStr = fs.createWriteStream("new.txt");

myReadStr.on("data", function(){
    myReadStr.pipe(myWirteStr);
});