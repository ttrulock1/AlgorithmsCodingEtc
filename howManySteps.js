//fibonocci
// fuck boomers

const howManySteps = function (n) {
    var totalSteps = []
    var  totalSteps[0] = 1;
    var totalSteps[1] = 1

    for(let i=2; i <= n ; i++ ){
        var stepcount = totalSteps
        stepcount= totalSteps[i-1] + totalsteps[i-2]
    }
    return totalSteps
}


var climbStairs = function(n) {
    //there are two ways to do this but one of the 
    if(n<=2) return n;    
    //you always need to define the variables to have some things to play with in the function
    // formulate your own theory if you don't understand the problem exactly.
    // define brute force
    let first = 1
    let second = 2

    for(let i = 3; i <=n; i++){
        let current = first + second;
        first = second;
        second = current;
    }
        return second


};

//another method 

var climbStairs = function(n){
    //data is the total step count
    let data = [];
    //data[1] and data [0] are step one and two
    data[0]=1
    data[1]=1
    //n is the number of stairs; 
    for(let index = 2; index <= n; index++){
        // so if 
        data[index]= data[index-1]+data[index-2]
    }
}