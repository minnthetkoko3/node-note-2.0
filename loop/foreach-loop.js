let ary = ["mg mg", "aung aung", "su su", "soe soe", "aye aye"];

ary.forEach(function(data){
    console.log(data);
});



for (let i = 0; i < ary.length; i++ ){
    let index = i;
    console.log(`Staff ${++index} is ${ary[i]}`)
}