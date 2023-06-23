var fonky = function(){
    console.log('i m fonky what you want');
}

var goofy = function(){
    console.log("i m goofy i want mama");
}

module.exports = {
    fonky: fonky,
    goofy: goofy
}

//test.js
module.exports = function(){
    console.log("what up brother")
}

//app.js
let data = require('./mutiFileExport')
let test = require('../test')


test();
data.goofy();
data.fonky();