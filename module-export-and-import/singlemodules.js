// #1
var help = function(val) {
    console.log(`i will be helping you soon => ${val}`);
}

module.exports = help;

// #2
module.exports = function(val) {
    console.log(`i will be helping you soon => ${val}`);
}


//app.js
let data = require('./singlemodules')

data("Minn Thet Ko Ko");
