let express = require("express");
let app = express();

app.get('/', function(req,res){
    res.send("home page");
});

app.get("/content", function(req,res){
    res.send("contact page")
});

app.get("/about", (req,res)=> {
    res.send("about page");
});

app.listen(3000); 