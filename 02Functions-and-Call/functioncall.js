// function
function func (val){
    val();

}

//function expression

var myFunc = function(){
    console.log('i am function expression!')
};

func(myFunc);