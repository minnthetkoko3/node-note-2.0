let fs = require('fs')

fs.appendFile('test.txt', ' finally', function(err){
    if(err)
        console.log(err);
    else
        console.log("success")
});

fs.unlink("test.txt");
fs.mkdir('test');


/*
fs.readFile('test.txt', "utf-8", function(err,data){
    if(err)
        console.log(err);
    else
        console.log(data);
});

fs.write('test.txt', "utf-8", function(err){
    if(err)
        console.log(err);
    else
        console.log("create file success");
});
*/