var fonky = function(){
    console.log('i m fonky what you want');
}

var goofy = function(){
    console.log("i m goofy i want mama");
}

module.exports.fonky = fonky;
module.exports.goofy = goofy;

//app.js
let data = require('./mutiModules')

data.goofy();
data.fonky();