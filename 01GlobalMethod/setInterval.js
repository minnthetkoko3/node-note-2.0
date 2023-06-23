let i = 0;
var myInter = setInterval(function(){
    i++;
    if (i == 6)
        clearInterval(myInter);
    else
    console.log(`i am start working! ${i}`)
}, 2000);