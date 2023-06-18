const { error, log } = require("console");
let fs = require("fs");

var fileName = "test.txt";
var someData = "love is ta yoke ma ly"

let myReadableStr = fs.createReadStream(fileName);

myReadableStr.on('data' , function(chunk){
    try {
        console.log(chunk);
        return console.log('buffer success')
    } catch (error) {
        return console.log(error.message);
        
    }
})


// fs.appendFile(fileName, someData, function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("success")
// });