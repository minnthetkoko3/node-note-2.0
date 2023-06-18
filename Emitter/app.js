var event = require('events');

var myEmmiter = new event.EventEmitter();

myEmmiter.on("startW", function(){
    console.log("start woring!");
});

let i = 0;

setInterval(function(){
    i++
    if((i%3) == 0)
    myEmmiter.emit("startW")
    else
    console.log("waitin for working")

}, 2000)