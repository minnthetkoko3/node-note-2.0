let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req,res) {
    if(req.url === "/" || req.url === "/home" || req.url === "index"){
    let myReadStr =  fs.createReadStream("index.html");
    res.writeHead(200, {"Content-Type": "text/html"});
    myReadStr.pipe(res);
    }else if (req.url === "/about"){
        let myReadStr = fs.createReadStream('about.html');
        res.writeHead(200, {"Content-Type": "text/html"});
        myReadStr.pipe(res);
    }else if (req.url === "/api/fb") {
        let data = {
            name: "mgmg",
            age: "18"
        }
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(data));

    }else {
        res.writeHead(200, {"Content-Type": "test/plain"});
        res.end("file result notfound 404");
    }
});

server.listen(3000, function(){
    console.log("server connection success");
});

