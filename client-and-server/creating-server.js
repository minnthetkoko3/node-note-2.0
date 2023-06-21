let fs = require('fs');
let http = require('http')
let port = 3000;
let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end("hello my name is minn thet ko ko");
});

server.listen(3000, function() {
    console.log(`connection success ${port}`);
})