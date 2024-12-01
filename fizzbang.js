//Remember to add "" around "fizz", "bang", and "fizzbang"
//Do not forget to add === 0 in the division problems; num[i] % 3 === 0 && num[i] % 5 === 0; you need the remainder to be zero.


const fizzBang = function(num){
    for(let i = 0; i<  num.length; i++){
        if(num[i] % 3 ==0 && num[i] % 5===0){
            console.log("fizzBang")
        } else if(num[i] % 5 ===0){
            console.log ("bang")
        } else if(num[i] % 3 ===0){
            console.log("fizz")
        }
        else{console.log(num[i]) 
        }
    }
}