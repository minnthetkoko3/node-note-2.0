let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req,res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    let obj = {
        name: "mgmg",
        age: 20,
        family: {
            father: "u mg",
            mother: "daw mya"
        }
    };
    res.end(JSON.stringify(obj.name));

    
});

server. listen(3000, function(){
    console.log("server connection success");
})